registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Loops-I)",
    date: "sep 06, 2026",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"><pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int x=126,y=105;
 do {
	 if(x&gt;y) x=x-y; 
	else y=y-x; 
      } while(x!=y); 

printf("%d",x); </code></pre> The output of the given C code segment is ________. (Answer in integer)</span>`,
            image: "",
            options: [],
            answer: "21",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460812/gate-cse-2025-set-2-question-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2025 SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;  
int gate(int n) {  
    int d, t, newnum, turn;  
    newnum = turn = 0; t=1;  
    while(n &gt;= t) t *= 10;  
    t /= 10;  
    while(t &gt; 0) {  
        d = n / t;  
        n = n % t;  
        t /= 10;  
        if(turn) newnum = 10 * newnum + d;  
        turn = (turn + 1) % 2;  
    }  
    return newnum;  
}  
int main () {  
    printf("%d", gate(14362));  
    return 0;  
}
</code></pre> The value printed by the given C program is _________. (Answer in integer)</span>`,
            image: "",
            options: [],
            answer: "46",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460027/gate-cse-2025-set-1-question-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following C function definition. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int f(int x, int y) {
for (int i=0; i &lt; y; i++) {
x=x+x+y;
}
return x;
}</code></pre> Which of the following statements is/are TRUE about the above function?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">If the inputs are <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>x</mi> <mo>=</mo> <mn>20</mn> <mo separator="true">,</mo> <mi>y</mi> <mo>=</mo> <mn>10</mn> </mrow> <annotation encoding="application/x-tex"> x=20, y=10 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;"></span><span class="mord">20</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">10</span></span></span></span></span>, then the return value is greater than <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mn>2</mn> <mn>20</mn> </msup> </mrow> <annotation encoding="application/x-tex"> 2^{20} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;">If the inputs are <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>x</mi> <mo>=</mo> <mn>20</mn> <mo separator="true">,</mo> <mi>y</mi> <mo>=</mo> <mn>20</mn> </mrow> <annotation encoding="application/x-tex"> x=20, y=20 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;"></span><span class="mord">20</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">20</span></span></span></span></span>, then the return value is greater than <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mn>2</mn> <mn>20</mn> </msup> </mrow> <annotation encoding="application/x-tex"> 2^{20} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;">If the inputs are <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>x</mi> <mo>=</mo> <mn>20</mn> <mo separator="true">,</mo> <mi>y</mi> <mo>=</mo> <mn>10</mn> </mrow> <annotation encoding="application/x-tex"> x=20, y=10 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;"></span><span class="mord">20</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">10</span></span></span></span></span>, then the return value is less than <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mn>2</mn> <mn>10</mn> </msup> </mrow> <annotation encoding="application/x-tex"> 2^{10} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">10</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;">If the inputs are <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>x</mi> <mo>=</mo> <mn>10</mn> <mo separator="true">,</mo> <mi>y</mi> <mo>=</mo> <mn>20</mn> </mrow> <annotation encoding="application/x-tex"> x=10, y=20 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;"></span><span class="mord">10</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">20</span></span></span></span></span>, then the return value is greater than <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mn>2</mn> <mn>20</mn> </msup> </mrow> <annotation encoding="application/x-tex"> 2^{20} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">20</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`
            ],
            answer: "B,D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422804/gate-cse-2024-set-1-question-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code. Assume that unsigned long int type length is 64 bits. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
unsigned long int fun(unsigned long int n){
unsigned long int i, j = 0, sum = 0;
for (i = n; i &gt; 1; i = i/2) j++;
for ( ; j &gt; 1; j = j/2) sum++;
return(sum);
}  </code></pre> The value returned when we call fun with the input <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mn>2</mn> <mn>40</mn> </msup> </mrow> <annotation encoding="application/x-tex">2^{40}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">40</span></span></span></span></span></span></span></span></span></span></span></span></span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">40</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204106/gate2018-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C program fragment below which is meant to divide x by y using repeated subtractions. The variables x, y, q and r are all unsigned int. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>while (r &gt;= y) {
r = r - y;
q = q +1;
}</code></pre> Which of the following conditions on the variables x, y, q and r before the execution of the fragment will ensure that the loop terminates in a state satisfying the condition x==(y*q+r)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(q==r) &amp;&amp; (r==0)</span>`,
                `<span style="display: inline;">(x <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> 0) &amp;&amp; (r==x) &amp;&amp; (y <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> 0)</span>`,
                `<span style="display: inline;">(q==0) &amp;&amp; (r==x) &amp;&amp; (y <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> 0)</span>`,
                `<span style="display: inline;">(q==0) &amp;&amp; (y <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> 0)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118381/gate2017-2-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following function computes <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>X</mi> <mi>Y</mi> </msup> </mrow> <annotation encoding="application/x-tex">X^{Y} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8413em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0785em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8413em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.2222em;">Y</span></span></span></span></span></span></span></span></span></span></span></span></span> for positive integers X and Y. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int exp(int X,int Y){
    int res=1, a=X, b=Y;
    while (b!=0){
    if(b%2==0){a=a*a;  b=b/2;}
    else {res=res*a;  b=b-1;}
   }
   return res;
}</code></pre> Which one of the following conditions is TRUE before every iteration of the loop?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>X</mi> <mi>Y</mi> </msup> <mo>=</mo> <msup> <mi>a</mi> <mi>b</mi> </msup> </mrow> <annotation encoding="application/x-tex"> X^{Y}=a^{b}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8413em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0785em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8413em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.2222em;">Y</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8491em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8491em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo stretchy="false">(</mo> <mi>r</mi> <mi>e</mi> <mi>s</mi> <mo>∗</mo> <mi>a</mi> <msup> <mo stretchy="false">)</mo> <mi>Y</mi> </msup> <mo>=</mo> <mo stretchy="false">(</mo> <mi>r</mi> <mi>e</mi> <mi>s</mi> <mo>∗</mo> <mi>X</mi> <msup> <mo stretchy="false">)</mo> <mi>b</mi> </msup> </mrow> <annotation encoding="application/x-tex"> (res*a)^{Y}=(res*X)^{b}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">res</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0913em; vertical-align: -0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8413em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.2222em;">Y</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">res</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0991em; vertical-align: -0.25em;"></span><span class="mord mathnormal" style="margin-right: 0.0785em;">X</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8491em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>X</mi> <mi>Y</mi> </msup> <mo>=</mo> <mi>r</mi> <mi>e</mi> <mi>s</mi> <mo>∗</mo> <msup> <mi>a</mi> <mi>b</mi> </msup> </mrow> <annotation encoding="application/x-tex"> X^{Y}=res*a^{b}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8413em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0785em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8413em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.2222em;">Y</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.4653em;"></span><span class="mord mathnormal">res</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.8491em;"></span><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8491em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>X</mi> <mi>Y</mi> </msup> <mo>=</mo> <mo stretchy="false">(</mo> <mi>r</mi> <mi>e</mi> <mi>s</mi> <mo>∗</mo> <mi>a</mi> <msup> <mo stretchy="false">)</mo> <mi>b</mi> </msup> </mrow> <annotation encoding="application/x-tex"> X^{Y}=(res*a)^{b}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8413em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0785em;">X</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8413em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right: 0.2222em;">Y</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">res</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1.0991em; vertical-align: -0.25em;"></span><span class="mord mathnormal">a</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8491em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">b</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39578/gate2016-2-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016
                                                    SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following function computes the maximum value contained in an integer array p[] of size n (n&gt;=1). <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> 
int max(int*p, int n){
   int a=0,b=n-1;
   while (__________){
   if (p[a]&lt;=p[b]){a=a+1;} 
   else {b=b-1;}
   }
   return p[a];
}</code></pre> The missing loop condition is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a !=n</span>`,
                `<span style="display: inline;">b !=0</span>`,
                `<span style="display: inline;">b <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> (a+1)</span>`,
                `<span style="display: inline;">b !=a</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39704/gate2016-1-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016
                                                    SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following pseudo code, where x and y are positive integers. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> begin
   q := 0
    r := x 
    while r &gt;= y  do
         begin
               r := r - y
              q := q + 1
        end
end </code></pre> The post condition that needs to be satisfied after the program terminates is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>r</mi> <mo>=</mo> <mi>q</mi> <mi>x</mi> <mo>+</mo> <mi>y</mi> &hairsp;<mo>∧</mo> &hairsp;<mi>r</mi> <mo>&lt;</mo> <mi>y</mi> </mrow> <annotation encoding="application/x-tex">r=qx+y \\; \\wedge \\; r \\lt y</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7778em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">q</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.75em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span></span></span></span></span>}</span>`,
                `<span style="display: inline;">{<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>x</mi> <mo>=</mo> <mi>q</mi> <mi>y</mi> <mo>+</mo> <mi>r</mi> &hairsp;<mo>∧</mo> &hairsp;<mi>r</mi> <mo>&lt;</mo> <mi>y</mi> </mrow> <annotation encoding="application/x-tex">x=qy+r \\; \\wedge \\; r \\lt y</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7778em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">q</span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.5556em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span></span></span></span></span>}</span>`,
                `<span style="display: inline;">{<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>y</mi> <mo>=</mo> <mi>q</mi> <mi>x</mi> <mo>+</mo> <mi>r</mi> &hairsp;<mo>∧</mo> &hairsp;<mn>0</mn> <mo>&lt;</mo> <mi>r</mi> <mo>&lt;</mo> <mi>y</mi> </mrow> <annotation encoding="application/x-tex">y=qx+r \\; \\wedge \\; 0 \\lt r \\lt y </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7778em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">q</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.5556em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6835em; vertical-align: -0.0391em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.625em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span></span></span></span></span>}</span>`,
                `<span style="display: inline;">{<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>q</mi> <mo>+</mo> <mn>1</mn> <mo>&lt;</mo> <mi>r</mi> <mo>−</mo> <mi>y</mi> &hairsp;<mo>∧</mo> &hairsp;<mi>y</mi> <mo>&gt;</mo> <mn>0</mn> </mrow> <annotation encoding="application/x-tex"> q+1 \\lt r-y \\; \\wedge \\; y \\gt 0 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7778em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">q</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6835em; vertical-align: -0.0391em;"></span><span class="mord">1</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6667em; vertical-align: -0.0833em;"></span><span class="mord mathnormal" style="margin-right: 0.0278em;">r</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.75em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">∧</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.7335em; vertical-align: -0.1944em;"></span><span class="mord mathnormal" style="margin-right: 0.0359em;">y</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">0</span></span></span></span></span>}</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8276/gate2015-1-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                                                    SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following pseudo code. What is the total number of multiplications to be performed? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> D= 2
for i = 1 to n do
   for j = i to n do
      for k = j + 1 to n do
           D = D * 3 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Half of the product of the 3 consecutive integers</span>`,
                `<span style="display: inline;">One-third of the product of the 3 consecutive integers.</span>`,
                `<span style="display: inline;">One-sixth of the product of the 3 consecutive integers</span>`,
                `<span style="display: inline;">None of the above.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1920/gate2014-1-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                                                    SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function in which size is the number of elements in the array E: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int MyX(int *E, unsigned int size)
{
  int Y = 0;
  int Z;
  int i, j, k; 
    for(i = 0; i &lt; size; i++)
    Y = Y + E[i];
  for(i = 0; i &lt; size; i++)
    for(j = i; j &lt; size; j++)
    {
       Z = 0;
       for(k = i; k &lt;= j; k++)
           Z= Z + E[k];
       if (Z &gt; Y)
            Y = Z;
   }
return Y;
}</code></pre> The value returned by the function MyX is the</span>`,
            image: "",
            options: [
                `<span style="display: inline;">maximum possible sum of elements in any sub-array of array E.</span>`,
                `<span style="display: inline;">maximum element in any sub-array of array E.</span>`,
                `<span style="display: inline;">sum of the maximum elements in all possible sub-arrays of array E.</span>`,
                `<span style="display: inline;">the sum of all the elements in the array E.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1919/gate2014-1-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                                                    SET-1 | C Programming | Privacy Policy</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following segment of C-code: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int j, n;
   j = 1;
   while (j &lt;=n)
   j=j*2; </code></pre> The number of comparisons made in the execution of the loop for any <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>n</mi> <mo>&gt;</mo> <mn>0</mn> </mrow> <annotation encoding="application/x-tex">n \\gt 0 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">0</span></span></span></span></span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mrow> <mo fence="true">⌈</mo> <mi>l</mi> <mi>o</mi> <msub> <mi>g</mi> <mn>2</mn> </msub> <mi>n</mi> <mo fence="true">⌉</mo> </mrow> <mo>+</mo> <mn>1</mn> </mrow> <annotation encoding="application/x-tex">\\left \\lceil log_{2}n \\right \\rceil +1 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top: 0em;">⌈</span><span class="mord mathnormal" style="margin-right: 0.0197em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal">n</span><span class="mclose delimcenter" style="top: 0em;">⌉</span></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1</span></span></span></span></span></span>`,
                `<span style="display: inline;">n</span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo fence="true">⌈</mo> <mi>l</mi> <mi>o</mi> <msub> <mi>g</mi> <mn>2</mn> </msub> <mi>n</mi> <mo fence="true">⌉</mo> </mrow> <annotation encoding="application/x-tex">\\left \\lceil log_{2}n \\right \\rceil </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top: 0em;">⌈</span><span class="mord mathnormal" style="margin-right: 0.0197em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal">n</span><span class="mclose delimcenter" style="top: 0em;">⌉</span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mrow> <mo fence="true">⌊</mo> <mi>l</mi> <mi>o</mi> <msub> <mi>g</mi> <mn>2</mn> </msub> <mi>n</mi> <mo fence="true">⌋</mo> </mrow> <mo>+</mo> <mn>1</mn> </mrow> <annotation encoding="application/x-tex">\\left \\lfloor log_{2}n \\right \\rfloor +1 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="minner"><span class="mopen delimcenter" style="top: 0em;">⌊</span><span class="mord mathnormal" style="margin-right: 0.0197em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right: 0.0359em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.0359em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span><span class="mord mathnormal">n</span><span class="mclose delimcenter" style="top: 0em;">⌋</span></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1</span></span></span></span></span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/56129/gate2007-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                                                    2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C-function in which a[n] and b[m] are two sorted integer arrays and c[n+m] be another integer array. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
void xyz (int a[],int b[],int c[]){
   int i, j, k;
   i=j=k=0;
   while((i &lt; n) && (j &lt; m))
            if (a[i] &lt; b[j]) c[k++]=a[i++];
            else c[k++]=b[j++];
}</code></pre> Which of the following condition(s) hold(s) after the termination of the while loop ?<br><br> I. j<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>m, k=n+j-1, and a [n-1]<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>b[j] if i=n <br> II. i<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>n, k=m+i-1, and b[m-1]<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>≤</mo> </mrow> <annotation encoding="application/x-tex">\\leq </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7719em; vertical-align: -0.136em;"></span><span class="mrel">≤</span></span></span></span></span>a[i] if j=m</span>`,
            image: "",
            options: [
                `<span style="display: inline;">only (I)</span>`,
                `<span style="display: inline;">only (II)</span>`,
                `<span style="display: inline;">either (I) or (II) but not both</span>`,
                `<span style="display: inline;">neither (I) nor (II)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1831/gate2006-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider line number 3 of the following C-program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int main ( ) { /* Line 1 */
int I, N; /* Line 2 */
fro (I =0, I &lt; N, I++); /* Line 3 */
}</code></pre> Identify the compiler's response about this line while creating the object-module:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">No compilation error</span>`,
                `<span style="display: inline;">Only a lexical error</span>`,
                `<span style="display: inline;">Only syntactic errors</span>`,
                `<span style="display: inline;">Both lexical and syntactic errors</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/4066/gate2005-61#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following algorithm approximate? (Assume <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>m</mi> <mo>&gt;</mo> <mn>1</mn> <mo separator="true">,</mo> <mi>e</mi> <mo>&gt;</mo> <mn>0</mn> </mrow> <annotation encoding="application/x-tex">m \\gt 1, e \\gt 0</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">0</span></span></span></span></span>). <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>x = m;
y = 1;
while (x - y &gt; e)
{
    x = (x + y)/2;
    y = m/x;
}
print(x); </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">logm</span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>m</mi> <mn>2</mn> </msup> </mrow> <annotation encoding="application/x-tex">m^{2} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.8141em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.8141em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>m</mi> <mrow> <mn>1</mn> <mi mathvariant="normal">/ </mi> <mn>2</mn> </mrow> </msup> </mrow> <annotation encoding="application/x-tex">m^{1/2} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.888em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.888em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/2</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mi>m</mi> <mrow> <mn>1</mn> <mi mathvariant="normal">/ </mi> <mn>3</mn> </mrow> </msup> </mrow> <annotation encoding="application/x-tex">m^{1/3} </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.888em;"></span><span class="mord"><span class="mord mathnormal">m</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.888em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1/3</span></span></span></span></span></span></span></span></span></span></span></span></span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1039/gate2004-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>main()
{
    int x, y, m, n;
    scanf ("%d %d", &x, &y);
    /* Assume x  &gt;  0 and y  &gt;  0  */
    m = x;
    n = y;
    while (m! = n)
    {
        if (m  &gt;  n)
            m = m - n;
        else
            n = n - m;
    }
    print f ("% d", n);
} </code></pre> The program computes</span>`,
            image: "",
            options: [
                `<span style="display: inline;">x + y using repeated subtraction</span>`,
                `<span style="display: inline;">x mod y using repeated subtraction</span>`,
                `<span style="display: inline;">the greatest common divisor of x and y</span>`,
                `<span style="display: inline;">the least common multiple of x and y</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1038/gate2004-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2004 | C Programming | Privacy Policy</span></div>`
        }
    ],
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-I)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the following ANSI-C function.
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode=" int func(int start, int end){
  	int length=end+1-start;
  	if((length<1)||(start<0)||(end<0)){ return(0); }
  	if(length%3==0){
  		return(func(start+1, end));
  	}else if(length%3==1){
  		return(1+func(start, end-1));
  	}else {
  		return(func(start+2, end));
  	}
 } "> int func(int start, int end){
  	int length=end+1-start;
  	if((length&lt;1)||(start&lt;0)||(end&lt;0)){ return(0); }
  	if(length%3==0){
  		return(func(start+1, end));
  	}else if(length%3==1){
  		return(1+func(start, end-1));
  	}else {
  		return(func(start+2, end));
  	}
 } </pre>The maximum possible value that can be returned from this function is ________. (answer in integer)
                <br>Note: Ignore syntax errors (if any) in the function. </span>`,
            image: "",
            options: [

            ],
            answer: "1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523095/gate-cse-2026-set-2-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the recursive functions represented by the following code
                segment:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="int bar(int n) {
  if (n == 1) return 0;
  else return 1 + bar(n/2);
 }
 int foo(int n) {
  if (n == 1) return 1;
  else return 1 + foo(bar(n));
 } ">int bar(int n) {
  if (n == 1) return 0;
  else return 1 + bar(n/2);
 }
 int foo(int n) {
  if (n == 1) return 1;
  else return 1 + foo(bar(n));
 } </pre>The smallest positive integer n for which <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <semantics>
                                    <mrow>
                                        <mtext>foo(n)</mtext>
                                    </mrow>
                                    <annotation encoding="application/x-tex">\text{foo(n)}</annotation>
                                </semantics>
                            </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord text"><span class="mord">foo(n)</span></span></span></span></span></span> returns
                <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <semantics>
                                    <mrow>
                                        <mn>5</mn>
                                    </mrow>
                                    <annotation encoding="application/x-tex">5</annotation>
                                </semantics>
                            </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">5</span></span></span></span></span> is ________. (answer in integer)
                <br>Note: Ignore syntax errors (if any) in the function. </span>`,
            image: "",
            options: [

            ],
            answer: "65536",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523029/gate-cse-2026-set-1-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the following program in C:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode=" #include < stdio.h >
 void func(int i, int j) {
  if(i < j) {
  	int i = 0;
  	while (i < 10) {
  		j += 2;
  		i++;
  	}
  }
  printf(&quot;%d&quot;, i);
 }
 int main() {
  	int i = 9, j = 10;
  	func(i, j);
  	return 0;
 }"> #include &lt; stdio.h &gt;
 void func(int i, int j) {
  if(i &lt; j) {
  	int i = 0;
  	while (i &lt; 10) {
  		j += 2;
  		i++;
  	}
  }
  printf("%d", i);
 }
 int main() {
  	int i = 9, j = 10;
  	func(i, j);
  	return 0;
 }</pre> The output of the program is ________. (answer in integer)<br> Note: Assume that the program compiles
                and runs successfully. </span>`,
            image: "",
            options: [

            ],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523056/gate-cse-2026-set-1-question-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the following C program:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="
#include < stdio.h >

int g(int n) {
    return (n+10);
}

int f(int n) {
    return g(n*2);
}

int main() {
    int sum, n;
    sum=0;
    for (n=1; n<3; n++)
        sum += g(f(n));
    printf (&quot;%d&quot;, sum);
    return 0;
}
">
#include &lt; stdio.h &gt;

int g(int n) {
    return (n+10);
}

int f(int n) {
    return g(n*2);
}

int main() {
    int sum, n;
    sum=0;
    for (n=1; n&lt;3; n++)
        sum += g(f(n));
    printf ("%d", sum);
    return 0;
}
</pre>
                The output of the given C program is ________. (Answer in integer) </span>`,
            image: "",
            options: [

            ],
            answer: "46",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460840/gate-cse-2025-set-2-question-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include < stdio.h >  
int foo(int S[],int size){  
    if(size == 0) return 0;  
    if(size == 1) return 1;  
    if(S[0] != S[1]) return 1+foo(S+1,size-1);  
    return foo(S+1,size-1);  
}  
int main(){  
    int A[]={0,1,2,2,2,0,0,1,1};  
    printf(&quot;%d&quot;,foo(A,9));  
    return 0;  
}  
">#include &lt; stdio.h &gt;  
int foo(int S[],int size){  
    if(size == 0) return 0;  
    if(size == 1) return 1;  
    if(S[0] != S[1]) return 1+foo(S+1,size-1);  
    return foo(S+1,size-1);  
}  
int main(){  
    int A[]={0,1,2,2,2,0,0,1,1};  
    printf("%d",foo(A,9));  
    return 0;  
}  
</pre>The value printed by the given C program is _________. (Answer in integer). </span>`,
            image: "",
            options: [

            ],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460029/gate-cse-2025-set-1-question-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program. Assume parameters to a function
                are evaluated
                from right to left.
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int g(int p) { printf(&quot;%d&quot;, p); return p; }
int h(int q) { printf(&quot;%d&quot;, q); return q; }
void f(int x, int y) {
g(x);
h(y);
}
int main() {
f(g(10),h(20));
}">#include &lt; stdio.h &gt;
int g(int p) { printf("%d", p); return p; }
int h(int q) { printf("%d", q); return q; }
void f(int x, int y) {
g(x);
h(y);
}
int main() {
f(g(10),h(20));
}</pre>
                Which one of the following options is the CORRECT output of the above
                C program?
            </span>`,
            image: "",
            options: [
                `<span style="display: inline;">20101020</span>`,
                `<span style="display: inline;">10202010</span>`,
                `<span style="display: inline;">20102010</span>`,
                `<span style="display: inline;">10201020</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422894/gate-cse-2024-set-2-question-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
void fX();
int main(){
fX();
return 0;}

void fX(){
char a;
if((a=getchar()) != '
')
fX();
if(a != '
')
putchar(a);}">#include &lt; stdio.h &gt;
void fX();
int main(){
fX();
return 0;}

void fX(){
char a;
if((a=getchar()) != '
')
fX();
if(a != '
')
putchar(a);}</pre>
                Assume that the input to the program from the command line is 1234 followed by
                a newline character. Which one of the following statements is CORRECT?
            </span>`,
            image: "",
            options: [
                `<span style="display: inline;">The program will not terminate</span>`,
                `<span style="display: inline;">The program will terminate with no output</span>`,
                `<span style="display: inline;">The program will terminate with 4321 as output</span>`,
                `<span style="display: inline;">The program will terminate with 1234 as output</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422833/gate-cse-2024-set-1-question-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program:<br/>
<pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="int main()
{
  f1();
  f2(2);
  f3();
  return(0);
}

int f1()
{
  return(1);
}

int f2(int X)
{
  f3();
  if (X==1)
     return f1();
  else
     return (X*f2(X-1));
}

int f3()
{
  return(5);
}">int main()
{
  f1();
  f2(2);
  f3();
  return(0);
}

int f1()
{
  return(1);
}

int f2(int X)
{
  f3();
  if (X==1)
     return f1();
  else
     return (X*f2(X-1));
}

int f3()
{
  return(5);
}
</pre><br/>Which one of the following options represents the activation tree corresponding to
                the main function?<br/><img class="entered litespeed-loaded" data-lazyloaded="1" data-ll-status="loaded" data-src="images/quiz/twt-os-7/q26.jpg" decoding="async" src="images/quiz/twt-os-7/q26.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">B</span>`,
                `<span style="display: inline;">C</span>`,
                `<span style="display: inline;">D</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399285/gate-cse-2023-question-26#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The integer value printed by the ANSI-C program given below is
                ______.<br/>
<pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int funcp(){
   static int x = 1;
   x++;
   return x;
}
int main(){
   int x,y;
   x = funcp();
   y = funcp()+x;
   printf(&quot;%d
&quot;, (x+y));
   return 0;
}">#include &lt; stdio.h &gt;
int funcp(){
   static int x = 1;
   x++;
   return x;
}
int main(){
   int x,y;
   x = funcp();
   y = funcp()+x;
   printf("%d
", (x+y));
   return 0;
}</pre>
</span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399286/gate-cse-2023-question-25#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following ANSI C program
                <pre class="prettyprint linenums lang-c_cpp" data-linenums="true" data-pbcklang="c_cpp" data-pbcktabsize="" dir="ltr" data-rawcode="#include &lt; stdio.h &gt;
int foo(int x, int y, int q) 
    {
        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))
        return q;
        if (x &lt; = 0)
        return foo(x, y-q, q);
        if (y &lt; = 0)
        return foo(x-q, y, q);
        return foo(x, y-q, q) + foo(x-q, y, q);
    }
int main( )
{
    int r = foo(15, 15, 10);
    printf(&quot;%d&quot;, r);
    return 0;
}">#include &lt; stdio.h &gt;
int foo(int x, int y, int q) 
    {
        if ((x &lt; = 0) &amp;&amp; (y &lt; = 0))
        return q;
        if (x &lt; = 0)
        return foo(x, y-q, q);
        if (y &lt; = 0)
        return foo(x-q, y, q);
        return foo(x, y-q, q) + foo(x-q, y, q);
    }
int main( )
{
    int r = foo(15, 15, 10);
    printf("%d", r);
    return 0;
}</pre> The output of the program upon execution is ____
            </span>`,
            image: "",
            options: [
            ],
            answer: "60",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357488/gate-cse-2021-set-2-question-49#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following ANSI C function:
                <pre><code>int SomeFunction (int x, int y)
{
    if ((x==1) || (y==1)) return 1;
    if (x==y) return x;
    if (x &gt; y) return SomeFunction(x-y, y);
    if (y &gt; x) return SomeFunction (x, y-x);
 
} </code></pre>The value returned by SomeFunction(15, 255) is __________
            </span>`,
            image: "",
            options: [
            ],
            answer: "15",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357517/gate-cse-2021-set-2-question-23#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following ANSI C function:
                <pre><code> int SimpleFunction(int Y[], int n, int x)
{
int total = Y[0], loopIndex;
for (loopIndex=1; loopIndex&lt;=n-1; loopIndex++)
    total=x*total +Y[loopIndex];
return total;
}</code></pre> Let Z be an array of 10 elements with Z[i]=1, for all i such that <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow>
<mn>0</mn>
<mo>≤</mo>
<mi>i</mi>
<mo>≤</mo>
<mn>9</mn>
</mrow>
<annotation encoding="application/x-tex">0\leq i \leq 9</annotation>
</semantics>
</math></span><span aria-hidden="true" class="katex-html"><span class="base"><span class="strut" style="height: 0.7804em; vertical-align: -0.136em;"></span><span class="mord">0</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.7955em; vertical-align: -0.136em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">≤</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">9</span></span></span></span></span>. The value returned by
                SimpleFunction(Z,10,2) is __________
            </span>`,
            image: "",
            options: [
            ],
            answer: "1023",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357403/gate-cse-2021-set-1-question-48#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In the following procedure<br/>
<pre><code> Integer procedure P(X,Y);
Integer X,Y;
value x;
begin
      K=5;
      L=8;
      P=x+y;
end</code></pre>X is called by value and Y is called by name. If the procedure were invoked by the following program
                fragment<br/>
<pre><code> K=0;
L=0;
Z=P(K,L);</code></pre>then the value of Z will be set equal to
            </span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">13</span>`,
                `<span style="display: inline;">0</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331379/isro2020-78" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output in a 32 bit machine with 32 bit compiler?<br/>
<pre><code> #include &lt; stdio.h &gt;
rer(int **ptr2, int **ptr1)
{
    int *ii;
    ii=*ptr2;
    *ptr2=*ptr1;
    *ptr1=ii;
    **ptr1*=**ptr2;
    **ptr2+=**ptr1;
}
void main(){
    int var1=5, var2=10;
    int *ptr1=&amp;var1,*ptr2=&amp;var2;
    rer(&amp;ptr1,&amp;ptr2);
    printf("%d %d",var2,var1);
}</code></pre>
</span>`,
            image: "",
            options: [
                `<span style="display: inline;">60,70</span>`,
                `<span style="display: inline;">50,50</span>`,
                `<span style="display: inline;">50,60</span>`,
                `<span style="display: inline;">60,50</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331226/isro2020-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following recursive C function that takes two
                arguments<br/>
<pre><code> unsigned int rer(unsigned int n, unsigned int r){
    if(n&gt;0)return(n%r + rer(n/r,r));
    else retturn 0;
}</code></pre>What is the return value of the function rer when it is called as rer(513,2)?
            </span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331460/isro2020-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-II)",
    date: "sep 07, 2026",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the following C functions. <br><img src="images/twt-c-programming-2/q16.jpg"><br>The value returned by pp(3,4) is _____ </span>`,
            image: "",
            options: [

            ],
            answer: "81",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333183/gate2020-cs-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"> Consider the following C functions. <br><img src="images/twt-c-programming-2/q17.jpg"><br>The return value of fun2(5) is ______ </span>`,
            image: "",
            options: [

            ],
            answer: "55",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333185/gate2020-cs-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt; stdio.h &gt;
int r(){
 int static num=7;
 return num--;
}
int main() {
 for(r();r();r()) {
  printf("%d ",r());
  };
 return 0;
}</pre>
Which one of the following values will be displayed on execution of the programs?
</span>`,
            image: "",
            options: [
                `<span style="display: inline;">41</span>`,
                `<span style="display: inline;">52</span>`,
                `<span style="display: inline;">63</span>`,
                `<span style="display: inline;">630</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302821/gate2019-cs-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">void convert(int n) {
  if (n&lt;0)
    printf("%d",n);
  else {
    convert(n/2);
    printf("%d",n%2);
  }
}</pre>
Which one of the following will happen when the function convert is called with any positive integer n as argument?
</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It will print the binary representation of n and terminate.</span>`,
                `<span style="display: inline;">It will print the binary representation of n in the reverse order and terminate.</span>`,
                `<span style="display: inline;">It will print the binary representation of n but will not terminate.</span>`,
                `<span style="display: inline;">It will not print anything and will not terminate.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302822/gate2019-cs-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt;stdio.h&gt;
  int jumble(int x, int y) {
    x = 2 * x + y;
    return x;
  }
int main() {
  int x = 2, y = 5;
  y = jumble(y, x);
  x = jumble(y, x);
  printf("%d\n", x);
  return 0;
}</pre>
The value printed by program is __________ .
</span>`,
            image: "",
            options: [
            ],
            answer: "26",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302830/gate2019-cs-18#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code segment<br>
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int f(int x)
{
    if(x&lt;1) return 1;
    else return (f(x-1) + g(x));
}
int g(int x)
{
    if(x&lt;2) return 2;
    else return (f(x-1) + g(x/2));
}</code></pre>Of the following, which best describes the growth of f(x) as a function of x ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Linear</span>`,
                `<span style="display: inline;">Exponential</span>`,
                `<span style="display: inline;">Quadratic</span>`,
                `<span style="display: inline;">Cubic</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213516/isro2018-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C++ program<br>
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int a (int m)
{return ++m;}
int b(int&amp;m)
{return ++m;}
int{char &amp;m}
{return ++m;}
void main()
{             
       int p = 0, q=0, r = 0;
       p += a(b(p)) ;
       q+= b(a(q);)
       r+=a(c(r));
       cout &lt;&lt; p &lt;&lt; q &lt;&lt; r;
}</code></pre> Assuming the required header first are already included, the above program</span>`,
            image: "",
            options: [
                `<span style="display: inline;">results in compilation error</span>`,
                `<span style="display: inline;">print 123</span>`,
                `<span style="display: inline;">print 111</span>`,
                `<span style="display: inline;">print 322</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213545/isro2018-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A language with string manipulation facilities uses the following operations.<br><br> head(s)- returns the first character of the string s<br>tails(s)- returns all but the first character of the string s<br>concat(s1,s2)- concatenates string s1 with s2.<br> <br>The output of concat(head(s), head(tail(tail(s)))), where s is acbc is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">ab</span>`,
                `<span style="display: inline;">ba</span>`,
                `<span style="display: inline;">ac</span>`,
                `<span style="display: inline;">aa</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213580/isro2018-8" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following program written in pseudo-code. Assume that x and y are integers.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>Count(x,y) {
     if (y != 1){
        if (x != 1) {
                  print("*");
                  Count(x/2, y);
                  }
            else {
                     y = y-1;
                    Count(1024, y);
                  }
      }
} </code></pre>
The number of times that the print statement is executed by the call Count(1024,1024) is _____.</span>`,
            image: "",
            options: [

            ],
            answer: "10230",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204120/gate2018-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;">#include &lt; stdio.h &gt;
void fun1(char *s1, char *s2){
char *tmp;
tmp = s1;
s1 = s2;
s2 = tmp;
}
void fun2(char **s1, char **s2){
char *tmp;
tmp = *s1;
*s1 = *s2;
*s2 = tmp;
}
int main(){
char *str1 = "Hi", *str2 = "Bye";
fun1(str1, str2); 
printf("%s %s ", str1, str2); 
fun2(&amp;str1, &amp;str2); 
printf("%s %s", str1, str2);
return 0;
}</pre>
The output of the program above is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Hi Bye Bye Hi</span>`,
                `<span style="display: inline;">Hi Bye Hi Bye</span>`,
                `<span style="display: inline;">Bye Hi Hi Bye</span>`,
                `<span style="display: inline;">Bye Hi Bye Hi</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204103/gate2018-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>  #include &lt; stdio.h &gt;
int counter = 0;
int calc (int a, int b) {
    int c;
    counter++;
    if (b==3) return (a*a*a);
    else {
       c = calc(a, b/3);
       return (c*c*c);
           }
}
int main (){
calc(4, 81);
printf ("%d", counter);
}</code></pre> The output of this program is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "None",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204095/gate2018-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following program?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int tmp=20;
main()
{
  printf("%d", tmp);
  func();
  printf("%d", tmp);

}
func()
{
 static int tmp=10;
 printf("%d", tmp);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">20 10 10</span>`,
                `<span style="display: inline;">20 10 20</span>`,
                `<span style="display: inline;">20 20 20</span>`,
                `<span style="display: inline;">10 10 10</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128754/isro2017-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following C-statement declare?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int (*f) (int * );</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A function that takes an integer pointer as argument and returns an
                                integer</span>`,
                `<span style="display: inline;">A function that takes an integer as argument and returns an integer
                                pointer</span>`,
                `<span style="display: inline;">A pointer to a function that takes an integer pointer as argument
                                and returns an integer</span>`,
                `<span style="display: inline;">A function that takes an integer pointer as argument and returns a
                                function pointer</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1343/gate2005-1-isro2017-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following function<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void swap(int a, int b)  
{       
    int temp;
    temp = a;
    a = b;
    b = temp;  
}  </code></pre>In order to exchange the values of two variables x and y.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">call swap(x,y)</span>`,
                `<span style="display: inline;">call swap(&amp;x,&amp;y)</span>`,
                `<span style="display: inline;">swap(x,y) cannot be used as it does not return any value</span>`,
                `<span style="display: inline;">swap(x,y) cannot be used as the parameters are passed by value</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/999/gate2004-2-isro2017-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the C++ program?<br>
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; iostream &gt;
using namespace std;

void square(int *x){
    *x = (*x)++ * (*x);
}

void square(int *x, int *y){
    *x = (*x) * --(*y);
}

int main()
{
  int number = 30;
  square(&amp;number, &amp;number);
  cout &lt; &lt; number;
  return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">910</span>`,
                `<span style="display: inline;">920</span>`,
                `<span style="display: inline;">870</span>`,
                `<span style="display: inline;">900</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128615/isro2017-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-III)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "NAT",
            text: `<span style="display: inline;">The output of executing the following C program is ________.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> # include <stdio.h>
int total (int v) {
while (v) {
    static int count + = v &amp; 1;
    v&gt;&gt; = 1;
 }
    return count;
 }
void main ( ) {
static int x = 0;
int i = 5;
for (; i&gt; 0; i--) {
x=x + total (i) ; 
}
printf ("%d
", x) ; } </stdio.h></code></pre></span>`,
            image: "",
            options: [
            ],
            answer: "23",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118442/gate2017-1-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C functions foo and bar given below:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int foo (int val ) {
    int x = 0;
    while (val &gt; 0) {
    x = x + foo(val--);
}
   return val ;
}
int bar (int val ) {
int x = 0;
while (val &gt; 0) {
    x = x + bar(val-1);}
    return val ;
}</code></pre>
                Invocations of foo(3) and bar(3) will result in:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Return of 6 and 6 respectively.</span>`,
                `<span style="display: inline;">Infinite loop and abnormal termination respectively.</span>`,
                `<span style="display: inline;">Abnormal termination and infinite loop respectively.</span>`,
                `<span style="display: inline;">Both terminating abnormally</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118319/gate2017-1-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two functions.
                <br><img src="images/twt-c-programming-2/q52.jpg">
                The output printed when fun1(5) is called is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423122233445</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423122233445</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423122233445</span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423120112233</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423120112233</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423120112233</span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423122132435</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423122132435</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423122132435</span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math
                                                xmlns="http://www.w3.org/1998/Math/MathML">
                                                <semantics>
                                                    <mrow>
                                                        <mn>53423120213243</mn>
                                                    </mrow>
                                                    <annotation encoding="application/x-tex">53423120213243</annotation>
                                                </semantics>
                                            </math></span><span class="katex-html" aria-hidden="true"><span
                                                class="base"><span class="strut" style="height: 0.6444em;"></span><span
                                                    class="mord">53423120213243</span></span></span></span></span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118317/gate2017-1-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is correct about the statements given
                below?<br>I. All function calls are resolved at compile time in C lang<br>
                II. All function calls are resolved at compile time in C++ lang</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only II is correct</span>`,
                `<span style="display: inline;">Both I and II are correct</span>`,
                `<span style="display: inline;">Only I is correct</span>`,
                `<span style="display: inline;">Both I and II are incorrect</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55534/isro2016-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "NAT",
            text: `<span style="display: inline;">Consider thefollowingprogram:
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int f(int*p, int n)
{
   if (n&lt;=1)return0;
    else returnmax(f(p+1,n-1),p[0]-p[1]);
}
int main()
{
    int a[]={3,5,2,6,4};
    printf("%d", f(a,5));
 }</code></pre>
                Note: max(x,y) returns the maxi mumof x and y.
                The value printed by this program is____________ .</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39602/gate2016-2-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        }
        ,
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The value printed by the following program is .
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
void f(int*p, int m){
     m =m+5;
     *p =*p+m;
      return;
}
void main(){
     int i=5, j=10;
     f(&amp;i, j);
     printf("%d", i+j);
}</code></pre></span>`,
            image: "",
            options: [

            ],
            answer: "30",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39565/gate2016-2-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What will be the output of the following pseudo-code when
                parameters are passed by reference and dynamic scoping is assumed?
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
a=3;
void n(x){x=x*a;  print(x);}
void m(y){a=1;a=y-a;n(a);print(a);}
void main(){m(a);}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">6,2</span>`,
                `<span style="display: inline;">6,6</span>`,
                `<span style="display: inline;">4,2</span>`,
                `<span style="display: inline;">4,4</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39701/gate2016-1-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What will be the output of the following C program?
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
void count(intn){
   static intd=1;
   printf("%d ",n);
   printf("%d ",d);
   d++;
   if(n&gt;1) count(n-1);
   printf("%d ",d);
}
void main(){
    count(3);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">312213444</span>`,
                `<span style="display: inline;">312111222</span>`,
                `<span style="display: inline;">3122134</span>`,
                `<span style="display: inline;">3121112</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39730/gate2016-1-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
void mystery(int *ptra,int *ptrb){
   int *temp;
   temp =ptrb; 
   ptrb =ptra;
   ptra =temp;
}
int main(){
   int a=2016,b=0,c=4,d=42;
   mystery(&amp;a, &amp;b);
   if (a &lt; c)
            mystery(&amp;c, &amp;a);
   mystery(&amp;a, &amp;d);
   printf("%d\n", a);
}</code></pre>
                The output of the program is _________.</span>`,
            image: "",
            options: [

            ],
            answer: "2016",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39642/gate2016-1-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program.
                <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void f(int,short);
void main()
{
int i=100;
short s=12;
short *p=&amp;s;
__________ ;//calltof()
} </code></pre> Which one of the following expressions, when placed in the blank above, will NOT result in a typec
                hecking error?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">f(s,*s)</span>`,
                `<span style="display: inline;">i=f(i,s)</span>`,
                `<span style="display: inline;">f(i,*s)</span>`,
                `<span style="display: inline;">f(i,*p)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39638/gate2016-1-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following code fragment
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void foo(int x, int y)
{
    x+=y;
    y+=x;
}
main()
{
    int x=5;
    foo(x,x);
}</code></pre>
What is the final value of x in both call by value and call by reference, respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5 and 16</span>`,
                `<span style="display: inline;">5 and 12</span>`,
                `<span style="display: inline;">5 and 20</span>`,
                `<span style="display: inline;">12 and 20</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52145/isro2015-80" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | Topic: C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following program
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>main()
{
    inc(); inc(); inc();
}
inc()
{
    static int x;
    printf("%d", ++x);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">prints 012</span>`,
                `<span style="display: inline;">prints 123</span>`,
                `<span style="display: inline;">prints 3 consecutive, but unpredictable numbers</span>`,
                `<span style="display: inline;">prints 111</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52131/isro2015-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | Topic: C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose c=(c[0],...,c[k-1]) is an array of length k, where all the entries are from the set {0,1}. For any positive integers a and n, consider the following pseudocode.
<br><img src="images/twt-c-programming-functions/q53.jpg">
<br>If k=4, c=(1,0,1,1), a=2 and n=8, then the output of DOSOMETHING(c,a,n) is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8558/gate2015-3-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-3 | Topic: C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt;stdio.h&gt;
int f1(void);
int f2(void);
int f3(void);
int x = 10;
int main( )
{
   int x = 1;
   x += f1( ) + f2( ) + f3( ) + f2( );
   printf("%d", x);
   return 0;
}
int f1() { int x = 25; x++; return x;}
int f2() { static int x = 50; x++; return x;}
int f3() { x *= 10; return x;}</code></pre>
The output of the program is ________.</span>`,
            image: "",
            options: [
            ],
            answer: "230",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8563/gate2015-3-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-3 | Topic: C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following recursive C function.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void get(int n)
{
if (n&lt;1) return;
get(n-1);
get(n-3);
printf("%d", n);
}</code></pre>
If get(6) function is being called in main() then how many times will the get() function be invoked before returning to the main()?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">35</span>`,
                `<span style="display: inline;">45</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8498/gate2015-3-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-3 | Topic: C Programming</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-IV)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C function.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int fun(int n){
   int x=1,k;
   if (n==1) return x;
   for (k=1; k &lt; n; ++k)
       x = x + fun(k) * fun(n-k);
   return x;
}</code></pre>
The return value of fun(5) is ________.</span>`,
            image: "",
            options: [
            ],
            answer: "51",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8060/gate2015-2-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-2 | Topic: C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following function written in the C programming language.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void foo(char *a){
   if (*a &amp;&amp; *a != ' '){
        foo(a+1);
        putchar(*a);
   }
}</code></pre>
The output of the above function on input "ABCD  EFGH" is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">ABCD EFGH</span>`,
                `<span style="display: inline;">ABCD</span>`,
                `<span style="display: inline;">HGFE DCBA</span>`,
                `<span style="display: inline;">DCBA</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8086/gate2015-2-11#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-2 | Topic: C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "NAT",
            text: `<span style="display: inline;">The output of the following C program is__________.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void f1(int a, int b) {
    int c;
    c=a; a=b; b=c;
}
void f2(int *a, int *b) {
    int c;
    c=*a; *a=*b; *b=c;
}
int main(){
    int a=4, b=5, c=6;
    f1(a,b);
    f2(&amp;b, &amp;c);
    printf("%d",c-a-b);
}</code></pre></span>`,
            image: "",
            options: [
            ],
            answer: "-5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8185/gate2015-1-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-1 | Topic: C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the time complexity for the following C module? Assume that n &gt; 0.
<pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int module(int n)
{
    if (n == 1)
        return 1;
    else
        return (n + module(n-1));
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">O(n)</span>`,
                `<span style="display: inline;">O(log n)</span>`,
                `<span style="display: inline;">O(n²)</span>`,
                `<span style="display: inline;">O(n!)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55082/isro2014-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | Topic: C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is true with respect to Reference?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A reference can never be NULL</span>`,
                `<span style="display: inline;">A reference needs an explicit dereferencing mechanism</span>`,
                `<span style="display: inline;">A reference can be reassigned after it is established</span>`,
                `<span style="display: inline;">A reference and pointer are synonymous</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17420/isro2014-13" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | Topic: C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C function given below <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> int f(int j)
{
static int i = 50;
int k;
if (i == j)
{
printf("something");
k = f(i);
return 0;
}
else return 0;
} </code></pre> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The function returns 0 for all values of j.</span>`,
                `<span style="display: inline;">The function prints the string something for all values of j.</span>`,
                `<span style="display: inline;">The function returns 0 when j = 50.</span>`,
                `<span style="display: inline;">The function will exhaust the runtime stack or run into an infinite loop when j = 50</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2008/gate2014-2-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following function <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> double f (double x) {
if ( abs (x*x - 3) &lt; 0. 01) return x;
else return f (x / 2 + 1.5/x);
} </code></pre> Give a value q (to 2 decimals) such that f(q) will return q:______</span>`,
            image: "",
            options: [],
            answer: "1.72",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2000/gate2014-2-40#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the function func shown below: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> int func(int num) {
int count = 0;
while (num) {
    count++;
    num &gt;&gt; = 1;
}
return (count);
} </code></pre> The value returned by func(435)is __________.</span>`,
            image: "",
            options: [],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1964/gate2014-2-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following psuedocode:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code>x: integer := 1  
y: integer := 2   
procedure add  
    x:= x + y    
procedure second (P: Procedure)  
    x: integer := 2      
    p()   
procedure first  
    y: integer := 3
    second (add) 
first () 
write_integer(x) </code></pre> What does it print if the language uses dynamic scoping with deep binding?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43764/isro-2013-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2013 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the return value of f(p,p), if the value of p is initialized to 5 before the call? Note that the first parameter is passed by reference, whereas the second parameter is passed by value. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> int f (int &x, int c) {
  c = c - 1;
  if (c==0) return 1;
   x = x + 1;
return f(x,c) * x;
} </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">3024</span>`,
                `<span style="display: inline;">6561</span>`,
                `<span style="display: inline;">55440</span>`,
                `<span style="display: inline;">161051</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/60/gate2013-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2013 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code segment. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code>
int a, b, c = 0;
void prtFun(void);
main( )
{ static int a = 1; /* Line 1 */
   prtFun( );
   a += 1;
   prtFun( );
   printf(" \\n %d %d ", a, b);
}
void prtFun(void)
{ static int a = 2; /* Line 2 */
   int b = 1;
   a += ++b;
   printf(" \\n %d %d ", a, b);
}</code></pre>What output will be generated by the given code segment if: <br><br> Line 1 is replaced by auto int a = 1; <br> Line 2 is replaced by register int a = 2;</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3 1 <br> 4 1 <br> 4 2</span>`,
                `<span style="display: inline;">4 2 <br> 6 1<br> 6 1</span>`,
                `<span style="display: inline;">4 2<br> 6 2<br> 2 0</span>`,
                `<span style="display: inline;">4 2<br> 4 2<br> 2 0</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43314/gate2012-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2012 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code segment. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code>
int a, b, c = 0;
void prtFun(void);
main( )
{ static int a = 1; /* Line 1 */
   prtFun( );
   a += 1;
   prtFun( );
   printf(" \\n %d %d ", a, b);
}
void prtFun(void)
{ static int a = 2; /* Line 2 */
   int b = 1;
   a += ++b;
   printf(" \\n %d %d ", a, b);
}</code></pre>What output will be generated by the given code segment?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3 1<br> 4 1 <br> 4 2</span>`,
                `<span style="display: inline;">4 2<br> 6 1 <br> 6 1</span>`,
                `<span style="display: inline;">4 2 <br> 6 2 <br> 2 0</span>`,
                `<span style="display: inline;">3 1 <br> 5 2 <br> 5 2</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2176/gate2012-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2012 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following recursive C function that takes two arguments <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> unsigned int foo(unsigned int n, unsigned int r) {
  if (n  &gt; 0) return (n%r +  foo (n/r, r ));
  else return 0;
}</code></pre>What is the return value of the function foo when it is called as foo (513, 2)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43324/gate2011-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2011 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following recursive C function that takes two arguments <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> unsigned int foo(unsigned int n, unsigned int r) {
  if (n  &gt; 0) return (n%r +  foo (n/r, r ));
  else return 0;
}</code></pre> <br>What is the return value of the function foo when it is called as foo (345, 10) ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">345</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2154/gate2011-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2011 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the value printed by the following C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> #include &lt; stdio.h &gt;
int f(int * a, int n)
{
    if(n&lt;=0)return 0;
    else if(*a% 2 ==0) return *a+f(a+1,n-1);
    else return *a-f(a+1,n-1);
}
int main ( )
{
    int a[ ] {12, 7, 13, 4, 11, 6};
    printf ("%d", f(a,6));
    return 0;
} </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">-9</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">19</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2336/gate2010-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2010 | C Programming</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-V)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following program print? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> #include &lt; stdio.h &gt;
void f (int *p, int * q) {
       p=q;
       *p=2;
}
int i= 0, j= 1;
int main ( ){
     f(&i, & j);
     printf( "%d%d \\ n", i,j);
     return 0;
} </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">2 2</span>`,
                `<span style="display: inline;">2 1</span>`,
                `<span style="display: inline;">0 1</span>`,
                `<span style="display: inline;">0 2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2184/gate2010-11#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2010 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following code written in a pass-by-reference language like FORTRAN and these statements about the code. <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> subroutine swap(ix,iy) 
     it = ix 
L1 : ix = iy 
L2 : iy = it 
    end 
    ia = 3 
    ib = 8 
    call swap (ia, ib+5)
    print *, ia, ib 
    end </code></pre><br>S1: The compiler will generate code to allocate a temporary nameless cell, initialize it to 13, and pass the address of the cell to swap <br> S2: On execution the code will generate a runtime error on line L1 <br> S3: On execution the code will generate a runtime error on line L2 <br> S4: The program will print 13 and 8 <br> S5: The program will print 13 and -2 <br> Exactly the following set of statement(s) is correct:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1 and S2</span>`,
                `<span style="display: inline;">S1 and S4</span>`,
                `<span style="display: inline;">S3</span>`,
                `<span style="display: inline;">S1 and S5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1834/gate2006-56-isro2009-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2009 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the program below: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> # include &lt; stdio.h &gt;
int fun(int n, int * f_p) {
   int t, f;
   if (n &lt;=1) {
         *f_p =1;
          return 1;
   }
   t = fun (n-1, f_p);
   f = t+*f_p;
   *f_p = t;
   return f;
}
int main() {
    int x = 15;
    printf ("%d\\ n", fun(5,& x));
    return 0;
} </code></pre> The value printed is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">14</span>`,
                `<span style="display: inline;">15</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1310/gate2009-18#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2009 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the value of F(4) using the following procedure:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code>function F(K : integer)
integer;
begin
if (k&lt;3) then F:=k else F:=F(k-1)*F(k-2)+F(k-3)
end; </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50136/isro2008-69" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code><code> int f(int n)
{
    static int i = 1;
    if(n &gt;= 5) return n;
    n = n+i;
    i++;
    return f(n);
}</code></pre> <br> The value returned by f(1) is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1028/gate2004-31-isro2008-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the code fragment written in C below :<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void f (int n)
{ 
    if (n &lt;= 1)  {
        printf ("%d", n);
    }
    else {
        f (n/2);
        printf ("%d", n%2);
    }
}</code></pre> Which of the following implementations will produce the same output for f(173) as the above code?<br>P1<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void f (int n)
{ 
    if (n/2)  {
        f(n/2);
    }
    printf ("%d", n%2);
}</code></pre> <br>P2<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void f (int n)
{ 
    if (n &lt;=1)  {
        printf ("%d", n);
    }
    else {
        printf ("%d", n%2);
        f (n/2);
    }
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both P1 and P2</span>`,
                `<span style="display: inline;">P2 only</span>`,
                `<span style="display: inline;">P1 only</span>`,
                `<span style="display: inline;">Neither P1 nor P2</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3407/gate2008-it-83" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the code fragment written in C below : <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void f (int n)
{ 
  if (n &lt;=1)  {
   printf ("%d", n);
  }
  else {
   f (n/2);
   printf ("%d", n%2);
  }
}</code></pre> <br>What does f(173) print?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10110101</span>`,
                `<span style="display: inline;">010101101</span>`,
                `<span style="display: inline;">010110101</span>`,
                `<span style="display: inline;">10101101</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3406/gate2008-it-82" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C program below. What does it print? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
# define swapl (a, b) tmp = a; a = b; b = tmp
void swap2 ( int a, int b)
{
        int tmp;
        tmp = a; a = b; b = tmp;
 }
void swap3 (int*a, int*b)
{
        int tmp;
        tmp = *a; *a = *b; *b = tmp;
}
int main ()
{
        int num1 = 5, num2 = 4, tmp;
        if (num1 &lt; num2) {swap1 (num1, num2);}
        if (num1 &lt; num2) {swap2 (num1 + 1, num2);}
        if (num1 &gt; = num2) {swap3 (&num1, &num2);}
        printf ("%d, %d", num1, num2);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">5,5</span>`,
                `<span style="display: inline;">5,4</span>`,
                `<span style="display: inline;">4,5</span>`,
                `<span style="display: inline;">4,4</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3360/gate2008-it-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C functions: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int f1(int n)
{
  if(n == 0 || n == 1)
    return n;
  else
    return (2*f1(n-1) + 3*f1(n-2));
}
 
int f2(int n)
{
  int i;
  int X[N], Y[N], Z[N] ;
  X[0] = Y[0] = Z[0] = 0;
  X[1] = 1; Y[1] = 2; Z[1] = 3;
  for(i = 2; i &lt;= n; i++)
  {
    X[i] = Y[i-1] + Z[i-2];
    Y[i] = 2*X[i];
    Z[i] = 3*X[i];
  }
  return X[n] ;
}</code></pre> f1(8) and f2(8) return the values</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1661 and 1640</span>`,
                `<span style="display: inline;">59 and 59</span>`,
                `<span style="display: inline;">1640 and 1640</span>`,
                `<span style="display: inline;">1640 and 1661</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43489/gate2008-75#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct option to fill ? 1 and ? 2 so that the program below prints an input string in reverse order. Assume that the input string is terminated by a newline character. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void recerse void {
   int c;
   if (?1) reverse ();
   ?2
}
main {
    printf("Enter Text "); printf("\\ n") ;
    reverse();  printf("\\ n");
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">?1 is (getchar ( )! = '\\ n') <br> ?2 is getchar (c);</span>`,
                `<span style="display: inline;">?1 is (c = getchar ( ) )! = '\\ n')<br> ?2 is getchar (c);</span>`,
                `<span style="display: inline;">?1 is (c ! = '\\ n')<br> ?2 is putchar (c);</span>`,
                `<span style="display: inline;">?1 is ((c = getchar ( ) )! = '\\ n') <br> ?2 is putchar (c);</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/484/gate2008-61#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is printed by the following C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int f(int x, int *py, int **ppz)			
{						                    	
    int y, z;					                		
    **ppz += 1; z = **ppz;		                
    *py += 2; y = *py;					                	
    x += 3;					                    	
    return x+y+z;
}

void main()
{
    int c, *b, **a;
    c = 4; b = &c; a = &b;
    printf("%d", f(c, b, a));
    	
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">18</span>`,
                `<span style="display: inline;">19</span>`,
                `<span style="display: inline;">21</span>`,
                `<span style="display: inline;">22</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/483/gate2008-60#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2008 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Study the following program<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>//precondition: x&gt;=0
public void demo(int x)
{
    System.out.print(x % 10); 
    if (x % 10 != 0)
    {
        demo(x/10);
    }
    System.out.print(x%10);
} </code></pre> <br> Which of the following is printed as a result of the call demo (1234)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1441</span>`,
                `<span style="display: inline;">3443</span>`,
                `<span style="display: inline;">12344321</span>`,
                `<span style="display: inline;">43211234</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49496/isro2007-23" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output printed by the following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int f(int n, int k) {
    if (n == 0) return 0;
    else if (n % 2) return f(n/2, 2*k) + k;
    else return f(n/2, 2*k) - k;
}

int main () {
    printf("%d", f(20, 1));
    return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">20</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3818/gate2005-it-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C-program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
double foo (double); /* Line 1 */
int main()
{
    double da, db;
    // input da
    db = foo(da);
}
double foo(double a)
{
    return a;
}</code></pre> The above code compiled without any error or warning. If Line 1 is deleted, the above code will show:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">no compile warning or error</span>`,
                `<span style="display: inline;">some compiler-warnings not leading to unintended results</span>`,
                `<span style="display: inline;">some compiler-warnings due to type-mismatch eventually leading to unintended results</span>`,
                `<span style="display: inline;">compiler errors</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1368/gate2005-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C-program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void foo(int n, int sum)
{
  int k = 0, j = 0;
  if (n == 0) return;
    k = n % 10; 
  j = n / 10;
  sum = sum + k;
  foo (j, sum);
  printf ("%d,", k);
}
  
int main ()
{
  int a = 2048, sum = 0;
  foo (a, sum);
  printf ("%dn", sum);
    
  getchar();
}</code></pre> What does the above program print?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">8, 4, 0, 2, 14</span>`,
                `<span style="display: inline;">8, 4, 0, 2, 0</span>`,
                `<span style="display: inline;">2, 0, 4, 8, 14</span>`,
                `<span style="display: inline;">2, 0, 4, 8, 0</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1367/gate2005-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2005 | C Programming</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-VI)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following C-statement declare? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int ( * f) (int * ) ; </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A function that takes an integer pointer as argument and returns an integer</span>`,
                `<span style="display: inline;">A function that takes an integer as argument and returns an integer pointer</span>`,
                `<span style="display: inline;">A pointer to a function that takes an integer pointer as argument and returns an integer.</span>`,
                `<span style="display: inline;">A function that takes an integer pointer as argument and returns a function pointer</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1343/gate2005-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
typedef struct {
    char *a;
    char *b;
    } t;
void f1 (t s);
void f2 (t *p);
main()
{
    static t s = {"A", "B"};
    printf ("%s %s\\n", s.a, s.b);
    f1(s);
    printf ("%s %s\\n", s.a, s.b);
    f2(&s);
}
void f1 (t s)
{
    s.a = "U";
    s.b = "V";
    printf ("%s %s\\n", s.a, s.b);
    return;
}
void f2(t *p)
{
    p -&gt; a  = "V";
    p -&gt; b = "W";
    printf("%s %s\\n", p -&gt; a, p -&gt; b);
    return;
}</code></pre> What is the output generated by the program ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A B <br> U V<br> V W<br> V W</span>`,
                `<span style="display: inline;">A B<br> U V<br> A B<br> V W</span>`,
                `<span style="display: inline;">A B<br> U V<br> U V<br> V W</span>`,
                `<span style="display: inline;">A B<br> U V<br> V W<br> U V</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3704/gate2004-it-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the program below in a hypothetical programming language which allows global variables and a choice of static or dynamic scoping.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int i ;
program main ()
{
    i = 10;
    call f();
}

procedure f()
{   
    int i = 20;
    call g ();
}
procedure g ()
{   
    print i;
} </code></pre> <br>Let x be the value printed under static scoping and y be the value printed under dynamic scoping. Then, x and y are:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">x=10, y=20</span>`,
                `<span style="display: inline;">x=20, y=10</span>`,
                `<span style="display: inline;">x=10, y=10</span>`,
                `<span style="display: inline;">x=20, y=20</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3467/gate2007-it-34-ugcnet-dec2012-iii-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the program below in a hypothetical language which allows global variable and a choice of call by reference or call by value methods of parameter passing. <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int i ;
program main ()
{
    int j = 60;
    i = 50;
    call f (i, j);
    print i, j;
}
procedure f (x, y)
{           
    i = 100;
    x = 10;
    y = y + i ;
} </code></pre> <br>Which one of the following options represents the correct output of the program for the two parameter passing mechanisms?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Call by value : i = 70, j = 10; Call by reference :i = 60, j = 70</span>`,
                `<span style="display: inline;">Call by value : i = 50, j = 60; Call by reference :i = 50, j = 70</span>`,
                `<span style="display: inline;">Call by value : i = 10, j = 70; Call by reference :i = 100, j = 60</span>`,
                `<span style="display: inline;">Call by value : i = 100, j = 60; Call by reference :i = 10, j = 70</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3466/gate2007-it-33" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The function f is defined as follows:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int f (int n) {
    if (n &lt;= 1) return 1;
    else if (n % 2  ==  0) return f(n/2);
    else return f(3n - 1);
}</code></pre> <br> Assuming that arbitrarily large integers can be passed as a parameter to the function, consider the following statements.<br><br>i. The function f terminates for finitely many different values of \\( n \\geq 1 \\).<br> ii. The function f terminates for infinitely many different values of \\( n \\geq 1 \\).<br> iii. The function f does not terminate for finitely many different values of \\( n \\geq 1 \\).<br> iv. The function f does not terminate for infinitely many different values of \\( n \\geq 1 \\).<br><br> Which one of the following options is true of the above?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">i and iii</span>`,
                `<span style="display: inline;">i and iv</span>`,
                `<span style="display: inline;">ii and iii</span>`,
                `<span style="display: inline;">ii and iv</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3460/gate2007-it-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int f(int n)
{
    static int r = 0;
    if (n &lt;= 0) return 1;
    if (n &gt; 3)
    {
        r = n;
        return f(n-2)+2;
    }
    return f(n-1)+r;
}
 
int main()
{
    printf("%d", f(5));
} </code></pre> What is the value of f(5)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">18</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1240/gate2007-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following function computes the value of \\( \\binom{m}{n} \\) correctly for all legal values \\( m \\) and \\( n \\) \\( (m \\geq 1, n \\geq 0 \\text{ and } m \\gt n) \\) <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int func(int m, int n)
{
    if (E) return 1;
    else return(func(m -1, n) + func(m - 1, n - 1));
}</code></pre>In the above function, which of the following is the correct expression for E?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(n = = 0) || (m = = 1)</span>`,
                `<span style="display: inline;">(n = = 0) &amp;&amp; (m = = 1)</span>`,
                `<span style="display: inline;">(n = = 0) || (m = = n)</span>`,
                `<span style="display: inline;">(n = = 0) &amp;&amp; (m = = n)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3595/gate2006-it-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the choices given below would be printed when the following program is executed?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
void swap (int *x, int *y)
{
    static int *temp;
    temp = x;
    x = y;
    y = temp;
}
void printab ()
{
    static int i, a = -3, b = -6;
    i = 0;
    while (i &lt;= 4)
    {
        if ((i++)%2 == 1) continue;
        a = a + i;
        b = b + i;
    }
    swap (&a, &b);
    printf("a =  %d, b = %d\\n", a, b);
}
main()
{
    printab();
    printab();
} </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">a = 0, b = 3 a = 0, b = 3</span>`,
                `<span style="display: inline;">a = 3, b = 0 a = 12, b = 9</span>`,
                `<span style="display: inline;">a = 3, b = 6 a = 3, b = 6</span>`,
                `<span style="display: inline;">a = 6, b = 3 a = 15, b = 12</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3593/gate2006-it-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C code to swap two integers and these five statements: the code <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void swap(int *px,int *py){
*px=*px-*py;
*py=*px+*py;
*px=*py-*px;
}</code></pre> S1 : will generate a compilation error <br> S2 : may generate a segmentation fault at runtime depending on the arguments passed <br> S3 : correctly implements the swap procedure for all input pointers referreing to integers stored in memory locations accessible tot he process <br> S4 : implements the swap procedure correctly for some but not all valid input pointers <br> S5 : may add or subtract integers and pointers</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1</span>`,
                `<span style="display: inline;">S2 and S3</span>`,
                `<span style="display: inline;">S2 and S4</span>`,
                `<span style="display: inline;">S2 and S5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1835/gate2006-57#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following code written in a pass-by reference language like FORTAN and these statements about the code. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>subroutine swap(ix,iy)
     it = ix
L1 : ix = iy
L2 : iy = it
end
  ia = 3
  ib = 8
  call swap (ia, 1b+5)
  print *, ia, ib
end </code></pre> S1: The complier will generate code to allocate a temporary nameless cell, initialize it to 13, and pass the address of the cell to swap <br> S2: On execution the code will generate a runtime error on line L1 <br> S3: On execution the code will generate a runtime error on line L2 <br> S4: The program will print 13 and 8 <br> S5: The program will print 13 and -2 <br> Exactly the following set of statement (s) is correct:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1 and S2</span>`,
                `<span style="display: inline;">S1 and S4</span>`,
                `<span style="display: inline;">S3</span>`,
                `<span style="display: inline;">S1 and S5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1834/gate2006-56#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct option to fill the ?1 and ?2 so that the program prints an input string in reverse order. Assume that the input string is terminated by a new line character.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
void wrt_it (void);
int main (void)
{
    printf("Enter Text"); 
    printf ("\\n");
    wrt_it();
    printf ("\\n");
    return 0;
}
void wrt_it (void)
{
    int c;
    if (?1)
        wrt_it();
    ?2
} </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">?1 is getchar()!= '\\n' <br>?2 is getchar(c);</span>`,
                `<span style="display: inline;">?1 is (c=getchar());!= '\\n'<br>?2 is getchar(c);</span>`,
                `<span style="display: inline;">?1 is c!= '\\n'<br>?2 is putchar(c);</span>`,
                `<span style="display: inline;">?1 is (c=getchar())!= '\\n'<br>?2 is putchar(c);</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3703/gate2004-it-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
int funcf (int x);
int funcg (int y);
main ()
{
    int x = 5, y = 10, count;
    for (count = 1; count &lt;= 2; ++count) {
        y += funcf(x) + funcg(x);
        printf ("%d", y);
    }
}
funcf (int x) {
    int y;
    y = funcg(x);
    return (y);
}
funcg (int x) {
    static int y = 10;
    y += 1;
    return (y + x);
}
 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">43 80</span>`,
                `<span style="display: inline;">42 74</span>`,
                `<span style="display: inline;">33 37</span>`,
                `<span style="display: inline;">32 32</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3702/gate2004-it-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int f(int n)
{
   static int i = 1;
   if (n &gt; = 5)
      return n;
   n = n+i;
   i++;
   return f(n);
}</code></pre> The value returned by f(1) is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1028/gate2004-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> void swap (int a, int b)
{
   int temp;
   temp = a;
   a = b;
   b = temp;
}</code></pre> In order to exchange the values of two variables x and y.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">call swap (x, y)</span>`,
                `<span style="display: inline;">call swap (&amp;x, &amp;y)</span>`,
                `<span style="display: inline;">swap (x,y) cannot be used as it does not return any value</span>`,
                `<span style="display: inline;">swap (x,y) cannot be used as the parameters are passed by value</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/999/gate2004-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C program shown below. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>  #include &lt; stdio.h &gt; 
#define print(x) printf("%d ", x)
int x;
void Q(int z)
{
    z += x;
    print(z);
}
void P(int *y)
{
    int x = *y + 2;
    Q(x);
    *y = x - 1;
    print(x);
}
main(void)
{
    x = 5;
    P(&x);
    print(x);
}</code></pre> The output of this program is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">12 7 6</span>`,
                `<span style="display: inline;">22 12 11</span>`,
                `<span style="display: inline;">14 6 6</span>`,
                `<span style="display: inline;">7 6 6</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/972/gate2003-89#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2003 | C Programming</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Functions-VII)",
    date: "sep 05, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following program fragment is written in a programming language that allows variables and does not allow nested declarations of functions. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> global int i = 100, j = 5;
void P(x)
{
    int i = 10;
    print(x + 10);
    i = 200;
    j = 20;
    print(x);
}
main()
{
    P(i + j);
} </code></pre> If the programming language uses dynamic scoping and call by name parameter passing mechanism, the values printed by the above program are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">115,220</span>`,
                `<span style="display: inline;">25,220</span>`,
                `<span style="display: inline;">25,15</span>`,
                `<span style="display: inline;">115,105</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43575/gate2003-74#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2003 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following program fragment is written in a programming language that allows variables and does not allow nested declarations of functions. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> global int i = 100, j = 5;
void P(x)
{
    int i = 10;
    print(x + 10);
    i = 200;
    j = 20;
    print(x);
}
main()
{
    P(i + j);
} </code></pre> If the programming language uses static scoping and call by need parameter passing mechanism, the values printed by the above program are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">115,220</span>`,
                `<span style="display: inline;">25,220</span>`,
                `<span style="display: inline;">25,15</span>`,
                `<span style="display: inline;">115,105</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/960/gate2003-73#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2003 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The results returned by function under value-result and reference parameter passing conventions</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Do not differ</span>`,
                `<span style="display: inline;">Differ in the presence of loops</span>`,
                `<span style="display: inline;">Differ in all cases</span>`,
                `<span style="display: inline;">May differ in the presence of exception</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/823/gate2002-1-18#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2002 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The value of j at the end of the execution of the following C program:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int incr (int i)
{ 
    static int count = 0;
    count = count + i;
    return (count);
} 
main () { 
    int i, j; 
    for (i = 0; i &lt;= 4; i++)
       j = incr (i);
} </code></pre> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/667/gate2000-2-20" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2000 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function definition<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int Trial (int a, int b, int c)
{
    if ((a&gt;=b) && (c &lt; b)) return b;
    else if (a &gt;= b) return Trial(a, c, b);
    else return Trial(b, a, c);
} </code></pre>The functional Trial:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Finds the maximum of a, b, and c</span>`,
                `<span style="display: inline;">Finds the minimum of a, b, and c</span>`,
                `<span style="display: inline;">Finds the middle number of a, b, c</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1501/gate1999-2-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1999 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program in a language that has dynamic scooping:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>var x: real;
procedure show:
    begin print(x);end;
procedure small;
    var x: real;
        begin x: = 0.125; show; end;
begin x:=0.25
    show; small
    end. </code></pre> Then the output of the program is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0.125 0.125</span>`,
                `<span style="display: inline;">0.25 0.25</span>`,
                `<span style="display: inline;">0.25 0.125</span>`,
                `<span style="display: inline;">0.125 0.25</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1491/gate1999-2-13" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 1999 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the result of the following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>    program side-effect (input, output);
    var x, result: integer;
    function f (var x:integer:integer;
    begin
        x:x+1;f:=x;
    end
    begin
    x:=5;
    result:=f(x)*f(x);
    writeln(result);
    end</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">36</span>`,
                `<span style="display: inline;">42</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1685/gate1998-2-13" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1998 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What value would the following function return for the input x=95?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> Function fun (x:integer):integer;
Begin
    If x &gt; 100 then fun = x- 10
    Else fun = fun(fun (x+11))
End;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">89</span>`,
                `<span style="display: inline;">90</span>`,
                `<span style="display: inline;">91</span>`,
                `<span style="display: inline;">92</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1684/gate1998-2-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1998 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following macros can put a macro assembler into an infinite loop?<br>I. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>.MACRO M1, X
.IF EQ, X   ;if X=0 then
M1 X + 1
.ENDC
.IF NE, X   ;if X [latex]\\neq[/latex] O then
.WORD X  ;address (X) is stored here
.ENDC
.ENDM</code></pre> <br> II. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>.MACRO M2, X
.IF EQ, X
M2 X
.ENDC
.IF NE, X
.WORD X + 1
.ENDC
.ENDM </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">both I and II</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2745/gate1996-2-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1996 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A language with string manipulation facilities uses the following operations<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>head(s): first character of a string
tail(s): all but exclude the first character of a string</code></pre> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> concat(s1, s2): s1s2</code></pre> For the string "acbc" what will be the output of <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>concat(head(s), head(tail(tail(s)))) </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">ac</span>`,
                `<span style="display: inline;">bc</span>`,
                `<span style="display: inline;">ab</span>`,
                `<span style="display: inline;">cc</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2621/gate1995-2-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1995 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the value of X printed by the following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>program COMPUTE (input, output);
var X:integer;
procedure FIND (X:real);
    begin
        X:=sqrt(X);
    end;
begin
    X:=2
    FIND(X);
    writeln(X);
end.
 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msqrt> <mn>2</mn> </msqrt> </mrow> <annotation encoding="application/x-tex">\\sqrt{2}</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1.04em; vertical-align: -0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.9072em;"><span class="svg-align" style="top: -3em;"><span class="pstrut" style="height: 3em;"></span><span class="mord" style="padding-left: 0.833em;"><span class="mord">2</span></span></span><span class="" style="top: -2.8672em;"><span class="pstrut" style="height: 3em;"></span><span class="hide-tail" style="min-width: 0.853em; height: 1.08em;"><svg width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"> <path d="M95,702 c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14 c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54 c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10 s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429 c69,-144,104.5,-217.7,106.5,-221 l0 -0 c5.3,-9.3,12,-14,20,-14 H400000v40H845.2724 s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7 c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z M834 80h400000v40h-400000z"></path> </svg></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.1328em;"><span class=""></span></span></span></span></span></span></span></span></span></span>`,
                `<span style="display: inline;">Run time error</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2616/gate1995-2-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1995 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What are x and y in the following macro definition?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>macro	Add x, y
        Load y
        Mul x
        Store y
end macro	 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Variables</span>`,
                `<span style="display: inline;">Identifiers</span>`,
                `<span style="display: inline;">Actual parameters</span>`,
                `<span style="display: inline;">Formal parameters</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2598/gate1995-1-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1995 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In which of the following cases is it possible to obtain different results for call-by-reference and call-by-name parameter passing methods?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Passing a constant value as a parameter</span>`,
                `<span style="display: inline;">Passing the address of an array as a parameter</span>`,
                `<span style="display: inline;">Passing an array element as a parameter</span>`,
                `<span style="display: inline;">Passing an array</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/305/gate1994-1-20" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1994 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Refer to the PASCAL program shown below.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>Program PARAM (input, output);
var m, n : integer;
procedure P (var, x, y : integer);
var m : integer;
begin
m : = 1;
x : = y + 1
end;
procedure Q (x:integer; vary : integer);
begin
x:=y+1;
end;
begin
m:=0; P(m,m); write (m);
n:=0; Q(n*1,n); write (n)
end</code></pre> <br>What is the scope of m declared in the main program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">PARAM, P, Q</span>`,
                `<span style="display: inline;">PARAM, P</span>`,
                `<span style="display: inline;">PARAM, Q</span>`,
                `<span style="display: inline;">P, Q (e)</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br><span style="font-size:14px;">Source: GATE CSE
                        1993 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Refer to the PASCAL program shown below.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>Program PARAM (input, output);
var m, n : integer;
procedure P (var, x, y : integer);
var m : integer;
begin
m : = 1;
x : = y + 1
end;
procedure Q (x:integer; vary : integer);
begin
x:=y+1;
end;
begin
m:=0; P(m,m); write (m);
n:=0; Q(n*1,n); write (n)
end</code></pre> <br>The value of n, output by the program PARAM is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0, because n is the actual parameter corresponding to x in procedure Q.</span>`,
                `<span style="display: inline;">0, because n is the actual parameter to y in procedure Q.</span>`,
                `<span style="display: inline;">1, because n is the actual parameter corresponding to x in procedure Q.</span>`,
                `<span style="display: inline;">1, because n is the actual parameter corresponding to y in procedure Q.</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "E",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br><span style="font-size:14px;">Source: GATE CSE
                        1993 | C Programming</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Array and Pointer-I)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following ANSI-C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
 int main(){
  int *ptr, a, b, c;
  a=5; b=11; c=20;
  ptr=&a; *ptr=c; ptr=&c;
  a=*(&b); c=*ptr-a;
  printf("%d",c);
  return(0);
 } </code></pre>The output of this program is ________ . (answer in integer) <br>Note: Assume that the program compiles and runs successfully.</span>`,
            image: "",
            options: [],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/503096/gate-cse-2026-set-2-question-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2026 SET-2 | C Programming </span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;

int main(){
    int a;
    int arr[5] = {30,50,10};
    int *ptr;
    ptr = &arr[0] + 1;
    a = *ptr;
    (*ptr)++;
    ptr++;
    printf("%d", a + (*ptr) + arr[1]);
    return 0;
}
</code></pre> The output of the above program is ___________. (Answer in integer)</span>`,
            image: "",
            options: [],
            answer: "111",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460841/gate-cse-2025-set-2-question-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;

void stringcopy(char *, char *);

int main(){
    char a[30] = "@#Hello World!";
    stringcopy(a, a + 2);
    printf("%s\\n", a);
    return 0;
}

void stringcopy(char *s, char *t) {
    while(*t)
        *s++ = *t++;
}
</code></pre>Which ONE of the following will be the output of the program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">@#Hello World!</span>`,
                `<span style="display: inline;">Hello World!</span>`,
                `<span style="display: inline;">ello World!</span>`,
                `<span style="display: inline;">Hello World!d!</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460826/gate-cse-2025-set-2-question-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"><pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
void foo(int *p, int x) {
    *p = x;
}

int main() {
    int *z;
    int a = 20, b = 25;
    z = &a;
    foo(z, b);
    printf("%d", a);
    return 0;
}
</code></pre> The output of the given C program is __________. (Answer in integer)</span>`,
            image: "",
            options: [],
            answer: "25",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460056/gate-cse-2025-set-1-question-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The pseudocode of a function fun() is given below: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
fun(int A[0,...,n-1])
{
    for i=0 to n-2
	for j=0 to n-i-2
	    if (A[j] &gt; A[j+1])
		then swap A[j] and A[j+1]}
}
</code></pre> Let <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>A</mi> <mo stretchy="false">[</mo> <mn>0</mn> <mo separator="true">,</mo> <mo>…</mo> <mo separator="true">,</mo> <mn>29</mn> <mo stretchy="false">]</mo> </mrow> <annotation encoding="application/x-tex">A[0, \\dots, 29]</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal">A</span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord">29</span><span class="mclose">]</span></span></span></span></span> be an array storing 30 distinct integers in descending order. The number of swap operations that will be performed, if the function fun() is called with <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>A</mi> <mo stretchy="false">[</mo> <mn>0</mn> <mo separator="true">,</mo> <mo>…</mo> <mo separator="true">,</mo> <mn>29</mn> <mo stretchy="false">]</mo> </mrow> <annotation encoding="application/x-tex">A[0, \\dots, 29]</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord mathnormal">A</span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="minner">…</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mpunct">,</span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord">29</span><span class="mclose">]</span></span></span></span></span> as argument, is __________. (Answer in integer)</span>`,
            image: "",
            options: [],
            answer: "435",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460057/gate-cse-2025-set-1-question-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an array X that contains n positive integers. A subarray of X is defined to be a sequence of array locations with consecutive indices.<br> The C code snippet given below has been written to compute the length of the longest subarray of X that contains at most two distinct integers. The code has two missing expressions labelled (P) and (Q).<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int first=0, second=0, len1=0, len2=0, maxlen=0;
for (int i=0; i &lt; n; i++) {
	 if (X[i] == first) {
		len2++; len1++;
	 } else if (X[i] == second) {
		len2++;
		len1 = (P) ;
		second = first;
	 } else {
		len2 = (Q) ;
		len1 = 1; second = first;
	 }
	 if (len2 &gt; maxlen) {
		maxlen = len2;
	}
	  first = X[i];
}</code></pre> Which one of the following options gives the CORRECT missing expressions?<br><br> (Hint: At the end of the i-th iteration, the value of len1 is the length of the longest subarray ending with X[i] that contains all equal values, and len2 is the length of the longest subarray ending with X[i] that contains at most two distinct values.)</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(P) len1+1 (Q) len2+1</span>`,
                `<span style="display: inline;">(P) 1 (Q) len1+1</span>`,
                `<span style="display: inline;">(P) 1 (Q) len2+1</span>`,
                `<span style="display: inline;">(P) len2+1 (Q) len1+1</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422865/gate-cse-2024-set-2-question-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int main() {
double a[2]={20.0, 25.0}, *p, *q;
p = a;
q = p + 1;
printf("%d,%d", (int)(q - p), (int)(*q - *p));
return 0;}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">4,8</span>`,
                `<span style="display: inline;">1,5</span>`,
                `<span style="display: inline;">8,5</span>`,
                `<span style="display: inline;">1,8</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422871/gate-cse-2024-set-2-question-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following C function definition. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int fX(char *a){ 
char *b = a; 
while(*b)
b++;
return b - a;}</code></pre> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The function call fX("abcd") will always return a value</span>`,
                `<span style="display: inline;">Assuming a character array c is declared as char c[] = "abcd" in main(), the function call fX(c)will always return a value</span>`,
                `<span style="display: inline;">The code of the function will not compile</span>`,
                `<span style="display: inline;">Assuming a character pointer c is declared as char *c = "abcd" in main(), the function call fX(c)will always return a value</span>`
            ],
            answer: ["A", "B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422874/gate-cse-2024-set-2-question-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is printed by the following ANSI C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
int main(int argc, char *argv[])
{
 int a[3][3][3] =
 {{1, 2, 3, 4, 5, 6, 7, 8, 9},
 {10, 11, 12, 13, 14, 15, 16, 17, 18},
 {19, 20, 21, 22, 23, 24, 25, 26, 27}};
int i = 0, j = 0, k = 0; 
for( i = 0; i &lt; 3; i++ ){

     for(k = 0; k &lt; 3; k++ ) 
      printf("%d ", a[i][j][k]);
 printf(" \\n");
}
return 0;
}
</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1 2 3 <br> 10 11 12 <br> 19 20 21</span>`,
                `<span style="display: inline;">1 4 7<br> 10 13 16<br> 19 22 25</span>`,
                `<span style="display: inline;">1 2 3 <br> 4 5 6 <br> 7 8 9</span>`,
                `<span style="display: inline;">1 2 3 <br> 13 14 15 <br> 25 26 27</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371903/Gate-cse-2022-question-33#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2022 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is printed by the following ANSI C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int main(int argc, char *argv[])
{
int x = 1, z[2] = {10, 11};
int *p=NULL; p=&x;
*p=10;
p =&z[1];
*(&z[0]+1)+=3;
printf("%d, %d, %d \\n",x,z[0],z[1]); return   0;
}
</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1, 10, 11</span>`,
                `<span style="display: inline;">1, 10, 14</span>`,
                `<span style="display: inline;">10, 14, 11</span>`,
                `<span style="display: inline;">10, 10, 14</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371925/Gate-cse-2022-question-11#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2022 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following ANSI C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main( ) 
{
    int arr[4][5];
    int  i, j;
    for (i=0; i &lt; 4; i++) 
  {
        for (j=0; j &lt; 5; j++) 
        {
            arr[i][j] = 10 * i + j;
        }
    }
    printf("%d", *(arr[1]+9));
    return 0;
}</code></pre> What is the output of the above program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">14</span>`,
                `<span style="display: inline;">20</span>`,
                `<span style="display: inline;">24</span>`,
                `<span style="display: inline;">30</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357530/gate-cse-2021-set-2-question-10#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2021 SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Following declaration of an array of struct, assumes size of byte, short, int and long are 1,2,3 and 4 respectively. Alignment rule stipulates that n byte field must be located at an address divisible by n, the fields in the struct are not rearranged, padding is used to ensure alignment. All elements of array should be of same size.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> Struct complx
       Short s
       Byte b
       Long l
       Int i
End Complx
Complx C[10]</code></pre>Assuming C is located at an address divisble by 8, what is the total size of C, in bytes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">150</span>`,
                `<span style="display: inline;">160</span>`,
                `<span style="display: inline;">200</span>`,
                `<span style="display: inline;">240</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331318/isro2020-74" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2020 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is output of the following 'C' code assuming it runs on a byte addressed little endian machine?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main()
{
    int x;
    char *ptr;
    x=622,100,101;
    printf("%d",(*(char *)&x)*(x%3));
    return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">622</span>`,
                `<span style="display: inline;">311</span>`,
                `<span style="display: inline;">22</span>`,
                `<span style="display: inline;">110</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331225/isro2020-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2020 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the code given below?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main()
{
    char name[]="satellites";
    int len;
    int size;
    len= strlen(name);
    size = sizeof(name);
    printf("%d",len*size);
    return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">100</span>`,
                `<span style="display: inline;">110</span>`,
                `<span style="display: inline;">40</span>`,
                `<span style="display: inline;">44</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331463/isro2020-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2020 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>    #include &lt; stdio.h &gt;
    int main ()  {
        int  a[4] [5] = {{1, 2, 3, 4, 5},
                        {6, 7,8, 9, 10},
                        {11, 12, 13, 14, 15},
                        {16, 17,18, 19, 20}};
        printf("%d\\n", *(*(a+**a+2)+3));
        return(0);
    }</code></pre>The output of the program is _______.</span>`,
            image: "",
            options: [],
            answer: "19",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333209/gate2020-cs-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2020 | C Programming</span></div>`
        }
    ]

});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Array and Pointer-II)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int main() { 
  int a[] = {2, 4, 6, 8, 10}; 
  int i, sum = 0, *b = a + 4; 
  for (i = 0; i &lt; 5; i++ ) 
  sum = sum + (*b - i) - *(b - i); 
  printf("%dn", sum); 
  return 0; 
} </code></pre> The output of above C program is __________ . Note: This was Numerical Type question.</span>`,
            image: "",
            options: [],
            answer: "10",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302795/gate2019-cs-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2019 | C programming</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
 int main(){
  int arr[] = {1,2,3,4,5,6,7,8,9,0,1,2,5}, *ip = arr + 4;
  printf("%dn", ip[1]);
  return 0;
}</code></pre> The number that will be displayed on execution of the program is _________ .</span>`,
            image: "",
            options: [],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302824/gate2019-cs-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2019 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following declaration :<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> structaddr {
    char city[10];
    char street[30];
    int pin;
};
struct {
    char name[30];
    int gender;
    struct addr locate;
} person, *kd = &person;</code></pre>Then <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <msup> <mrow></mrow> <mo lspace="0em" rspace="0em">⋆</mo> </msup> <mo stretchy="false">(</mo> <mi>k</mi> <mi>d</mi> <mo>−</mo> <mo>&gt;</mo> <mtext>&nbsp;name&nbsp;</mtext> <mo>+</mo> <mn>2</mn> <mo stretchy="false">)</mo> </mrow> <annotation encoding="application/x-tex">^{\\star}(k d-&gt;\\text { name }+2) </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord"><span class=""></span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height: 0.6887em;"><span class="" style="top: -3.063em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">⋆</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right: 0.0315em;">k</span><span class="mord mathnormal">d</span><span class="mord">−</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 0.6667em; vertical-align: -0.0833em;"></span><span class="mord text"><span class="mord">&nbsp;name&nbsp;</span></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">2</span><span class="mclose">)</span></span></span></span></span> can be used instead of:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">person.name+2</span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mi>k</mi> <mi>d</mi> <mo>−</mo> <mo>&gt;</mo> <mo stretchy="false">(</mo> <mtext>&nbsp;name&nbsp;</mtext> <mo>+</mo> <mn>2</mn> <mo stretchy="false">)</mo> </mrow> <annotation encoding="application/x-tex">k d-&gt;(\\text { name }+2) </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7778em; vertical-align: -0.0833em;"></span><span class="mord mathnormal" style="margin-right: 0.0315em;">k</span><span class="mord mathnormal">d</span><span class="mord">−</span><span class="mspace" style="margin-right: 0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right: 0.2778em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">(</span><span class="mord text"><span class="mord">&nbsp;name&nbsp;</span></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">2</span><span class="mclose">)</span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>∗</mo> <mo stretchy="false">(</mo> <mo stretchy="false">(</mo> <mo>∗</mo> <mi>k</mi> <mi>d</mi> <mo stretchy="false">)</mo> <mi mathvariant="normal">.</mi> <mtext>&nbsp;name&nbsp;</mtext> <mo>+</mo> <mn>2</mn> <mo stretchy="false">)</mo> </mrow> <annotation encoding="application/x-tex">*((* k d) . \\text { name }+2)</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">∗</span><span class="mopen">((</span><span class="mord">∗</span><span class="mord mathnormal" style="margin-right: 0.0315em;">k</span><span class="mord mathnormal">d</span><span class="mclose">)</span><span class="mord">.</span><span class="mord text"><span class="mord">&nbsp;name&nbsp;</span></span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mord">2</span><span class="mclose">)</span></span></span></span></span></span>`,
                `<span style="display: inline;">either (A) or(B), not (C)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213586/isro2018-2" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>{
    int x=1;
    printf("%d",(*char(char*)&x));
} </code></pre>Assuming required header files are included and if the machine in which this program is executed is little endian, then the output will be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">99999999</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">unpredictable</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213587/isro2018-1" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
struct Ournode{
char x,y,z;
};
int main(){
struct Ournode p = {'1', '0','a'+2};  
struct Ournode *q = &p;
printf("%c,%c",*((char*)q+1),*((char*)q+2));
return 0;
}  </code></pre> The output of this program is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0, c</span>`,
                `<span style="display: inline;">0, a+2</span>`,
                `<span style="display: inline;">'0', 'a+2'</span>`,
                `<span style="display: inline;">'0', 'c'</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204076/gate2018-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">We use malloc and calloc for:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dynamic memory allocation</span>`,
                `<span style="display: inline;">Static memory allocation</span>`,
                `<span style="display: inline;">Both dynamic memory allocation and static memory allocation</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128772/isro2017-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO
                        CSE 2017 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C Program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
#include &lt; string.h &gt;
#int main ( ) {
char* c = "GATECSIT2017";
char* p = c;
printf("%d", (int) strlen (c+2[p]-6[p]-1));
return 0;
}
</code></pre>The output of the program is _______________.</span>`,
            image: "",
            options: [],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118335/gate2017-2-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following snippet of a C program. Assume that swap (&x, &y) exchanges the contents of x and y. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int main ( ) {
int array[]={3,5,1,4,6,2};
int done =0 ;
int i ;
while (done = = 0) {
   done = 1;
   for (i = 0; i &lt;=4; i ++) {
   if (array [i] &lt; array [i +1]) {
       swap (& array [i], &array [i+1]);
       done = 0;
    }
}
for (i = 5 ; i &gt; =1; i --) {
if (array [i] &gt; array [ i-1]) {
    swap ( & array [i] , &array [i-1]);
     done = 0;
  }
} }
printf ( " %d " , array [3] );
}</code></pre> The output of the program is ____________.</span>`,
            image: "",
            options: [],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118388/gate2017-2-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following function implemented in C: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>void printxy (int x, int y) {
int *ptr ;
x = 0;
ptr = &x;
y = * ptr;
* ptr = l;
print f ("%d, %d," x, y);
}</code></pre> The output of invoking printxy (1,1) is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0,0</span>`,
                `<span style="display: inline;">0,1</span>`,
                `<span style="display: inline;">1,0</span>`,
                `<span style="display: inline;">1,1</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118245/gate2017-2-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
#include &lt; string.h &gt;
void printlength (char *s, char *t) {
 unsigned int c = 0;
 int len = ((strlen(s) - strlen (t)) &gt; c) ? strlen(s): strlen(t);
 printf ("%d\\n", len);
}
void main ( ) {
 char *x = "abc";
 char *y ="defgh"; 
 printlength (x,y); </code></pre> Recall that strlen is defined in string.h as returning a value of type size_t, which is an unsigned int. The output of the program is _____________.</span>`,
            image: "",
            options: [],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118473/gate2017-1-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code># include &lt; stdio.h &gt;
int * assignval (int *x, int val) {
      *x = val;
      return x;
}
void main ( ) {
    int * x= malloc (sizeof (int));
    if (NULL = = x) return;
    x = assignval (x,0);
    if(x) { 
    x=(int *) malloc (sizeof (int));
    if (NULL = = x) return;
    x = assignval (x, 10);
}
printf("%d\\n", *x);
free (x);
}</code></pre> The code suffers from which one of the following problems:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">compiler error as the return of malloc is not typecast appropriately.</span>`,
                `<span style="display: inline;">compiler error because the comparison should be made as x==NULL and not as shown.</span>`,
                `<span style="display: inline;">compiles successfully but execution may result in dangling pointer.</span>`,
                `<span style="display: inline;">compiles successfully but execution may result in memory leak.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118293/gate2017-1-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2017 SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What will be output of the following program? Assume that you are running this program in little-endian processor.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main()
{
    short a=320;
    char *ptr;
    ptr=(char *)&a;
    printf("%d",*ptr);
    return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">320</span>`,
                `<span style="display: inline;">64</span>`,
                `<span style="display: inline;">Compilation error</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55481/isro2016-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2016 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of this C code?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
void main()
{
    int k=5;
    int *p=&k;
    int **m=&p;
    printf("%d %d %d",k,*p,**m);
    
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">5 5 5</span>`,
                `<span style="display: inline;">5 5 junk</span>`,
                `<span style="display: inline;">5 junk junk</span>`,
                `<span style="display: inline;">compile time error</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55468/isro2016-20" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2016 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C declaration:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> struct ( 
    short x[5];  
    union { 
        float y; 
        long z; 
    } u;
 )t;</code></pre>Assume that the objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively. The memory requirement for variable t, ignoring alignment consideration, is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">22 bytes</span>`,
                `<span style="display: inline;">14 bytes</span>`,
                `<span style="display: inline;">18 bytes</span>`,
                `<span style="display: inline;">10 bytes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/640/gate2000-1-17-isro2015-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2015 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The output of the following program is<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> main()
{
    static int x[] = {1,2,3,4,5,6,7,8}
    int i;
    for (i=2; i&lt;6; ++i)
    x[x[i]]=x[i];
    for (i=0; i&lt;8; ++i)
    printf("%d", x[i]);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1 2 3 3 5 5 7 8</span>`,
                `<span style="display: inline;">1 2 3 4 5 6 7 8</span>`,
                `<span style="display: inline;">8 7 6 5 4 3 2 1</span>`,
                `<span style="display: inline;">1 2 3 5 4 6 7 8</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52137/isro2015-73" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2015 | C Programming</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Array and Pointer-III)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following declaration: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> int a, *b=&a, **c=&b;</code></pre>The following program fragment <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> a=4;    **c=5;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">does not change the value of a</span>`,
                `<span style="display: inline;">assigns address of c to a</span>`,
                `<span style="display: inline;">assigns the value of b to a</span>`,
                `<span style="display: inline;">assigns 5 to a</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/19444/isro2015-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO
                        CSE 2015 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main( )
{
static int a[ ] = {10, 20, 30, 40, 50};
static int *p[ ] = {a, a+3, a+4, a+1, a+2};
int **ptr = p;
ptr++;
printf("%d%d", ptr-p,**ptr);
}</code></pre>The output of the program is ______________.</span>`,
            image: "",
            options: [],
            answer: "140",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8478/gate2015-3-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                        SET-3 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program segment. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main()
{
char s1[7] = "1234", *p;
p = s1 + 2;
*p = '0';
printf("%s", s1);
} </code></pre> What will be printed by the program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">120400</span>`,
                `<span style="display: inline;">1204</span>`,
                `<span style="display: inline;">1034</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8401/gate2015-3-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                        SET-3 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following C code? Assume that the address of x is 2000 (in decimal) and an integer requires four bytes of memory. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int main () {
unsigned int x[4][3] ={{1,2,3},{4,5,6},{7,8,9},{10,11,12}};
printf("%u, %u, %u", x+3, *(x+3), *(x+2)+3);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">2036, 2036, 2036</span>`,
                `<span style="display: inline;">2012, 4, 2204</span>`,
                `<span style="display: inline;">2036, 10, 10</span>`,
                `<span style="display: inline;">2012, 4, 6</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8283/gate2015-1-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                        SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C function given below. Assume that the array listA contains n (&gt; 0) elements, sorted in ascending order. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int ProcessArray(int *listA, int x, int n)
{
   int i, j, k;
   i = 0;
   j = n-1;
   do {
          k = (i+j)/2;
          if (x &lt;= listA[k])
               j = k-1;
          if (listA[k] &lt;= x)
              i = k+1;
       }while (i &lt;= j);
if (listA[k] == x)
     return(k);
else
    return -1;
} </code></pre> Which one of the following statements about the function ProcessArray is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It will run into an infinite loop when x is not in listA</span>`,
                `<span style="display: inline;">It is an implementation of binary search</span>`,
                `<span style="display: inline;">It will always find the maximum element in listA.</span>`,
                `<span style="display: inline;">It will return ? 1 even when x is present in listA.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2076/gate2014-3-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014
                        SET-3 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program in C language: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code># include &lt; stdio.h &gt;
main()
{
  int i;
  int * pi = &i;
  scanf( "%d", pi) ;
  printf ("%d \\ n", i+5) ;
}</code></pre> Which one of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Compilation fails.</span>`,
                `<span style="display: inline;">Execution results in a run-time error.</span>`,
                `<span style="display: inline;">On execution, the value printed is 5 more than the address of variable i.</span>`,
                `<span style="display: inline;">On execution, the value printed is 5 more than the integer value entered</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1770/gate2014-1-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2014 SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following fragment of C-program print? <br> char c []="GATE2011"; <br> char *p =c; <br> printf ("%s", p + p[3]- p[ 1 ]); <br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">GATE2011</span>`,
                `<span style="display: inline;">E2011</span>`,
                `<span style="display: inline;">2011</span>`,
                `<span style="display: inline;">11</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2124/gate2011-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2011 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is an illegal array definition?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Type COLONGE : (LIME, PINE, MUSK, MENTHOL); <br> var a : array [COLONGE] of REAL;</span>`,
                `<span style="display: inline;">var a : array [REAL] of REAL;</span>`,
                `<span style="display: inline;">var a : array ['A'..'Z'] of REAL;</span>`,
                `<span style="display: inline;">var a : array [BOOLEAN] of REAL;</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/18461/isro2008-1" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">C program is given below: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main ()
{
        int i, j;
        char a [2] [3] = {{'a', 'b', 'c'}, {'d', 'e', 'f'}};
        char b [3] [2];
        char *p = *b;
        for (i = 0; i &lt; 2; i++) {
              for (j = 0; j &lt; 3; j++) {
              *(p + 2*j + i) = a [i] [j];
              }
        }
}</code></pre> <br>What should be the contents of the array b at the end of the program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a b<br>c d<br>e f</span>`,
                `<span style="display: inline;">a d<br>b e<br>c f</span>`,
                `<span style="display: inline;">a c<br>e b<br>d f</span>`,
                `<span style="display: inline;">a e<br>d c<br>b f</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3362/gate2008-it-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C program given below. What does it print? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main ()
{
        int i, j;
        int a [8] = {1, 2, 3, 4, 5, 6, 7, 8};
        for(i = 0; i &lt; 3; i++) {
             a[i] = a[i] + 1;
             i++;
        }
        i--;
        for (j = 7; j &gt; 4; j--) {
              int i = j/2;
              a[i] = a[i] - 1;
        }
        printf ("%d, %d", i, a[i]);</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">2,3</span>`,
                `<span style="display: inline;">2,4</span>`,
                `<span style="display: inline;">3,2</span>`,
                `<span style="display: inline;">3,3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3361/gate2008-it-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output printed by the following C code?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main ()
{
    char a [6] = "world";
    int i, j;
    for (i = 0, j = 5; i &lt; j; a [i++] = a [j--]);
    printf ("%s\\n", a);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A. dlrow</span>`,
                `<span style="display: inline;">B. Null string</span>`,
                `<span style="display: inline;">C. dlrld</span>`,
                `<span style="display: inline;">D. worow</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3359/gate2008-it-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> 1.   f(int Y[10], int x) {
2.     int i, j, k;
3.     i = 0; j = 9;
4.     do {
5.             k =  (i + j) /2;
6.             if( Y[k] &lt; x)  i = k; else j = k;
7.         } while(Y[k] != x && i &lt; j);
8.     if(Y[k] == x) printf ("x is in the array ") ;
9.     else printf (" x is not in the array ") ;
10. }</code></pre> The correction needed in the program to make it work properly is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Change line 6 to: if (Y[k] <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>x) i=k+1; else j=k-1;</span>`,
                `<span style="display: inline;">Change line 6 to: if (Y[k]<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>x) i=k-1; else j=k+1;</span>`,
                `<span style="display: inline;">Change line 6 to: if (Y[k] <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>≤</mo> </mrow> <annotation encoding="application/x-tex">\\leq</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.7719em; vertical-align: -0.136em;"></span><span class="mrel">≤</span></span></span></span></span>x) i=k; else j=k;</span>`,
                `<span style="display: inline;">Change line 7 to: } while ((Y[k]==x) &amp;&amp; (i<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>j));</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43508/gate2008-85#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program that attempts to locate an element x in an array Y[] using binary search. The program is erroneous. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> 1.   f(int Y[10], int x) {
2.     int i, j, k;
3.     i = 0; j = 9;
4.     do {
5.             k =  (i + j) /2;
6.             if( Y[k] &lt; x)  i = k; else j = k;
7.         } while(Y[k] != x && i &lt; j);
8.     if(Y[k] == x) printf ("x is in the array ") ;
9.     else printf (" x is not in the array ") ;
10. }</code></pre> On which of the following contents of Y and x does the program fail?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Y is [1 2 3 4 5 6 7 8 9 10] and x <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span> 10</span>`,
                `<span style="display: inline;">Y is [1 3 5 7 9 11 13 15 17 19] and x <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span> 1</span>`,
                `<span style="display: inline;">Y is [2 2 2 2 2 2 2 2 2 2] and x<span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&gt;</mo> </mrow> <annotation encoding="application/x-tex">\\gt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&gt;</span></span></span></span></span> 2</span>`,
                `<span style="display: inline;">Y is [2 4 6 8 10 12 14 16 18 20] and 2 <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span>x <span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo>&lt;</mo> </mrow> <annotation encoding="application/x-tex">\\lt</annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 0.5782em; vertical-align: -0.0391em;"></span><span class="mrel">&lt;</span></span></span></span></span> 20 and x is even</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/394/gate2008-84#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the C program given below : <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;

int main ()    {
    int sum = 0, maxsum = 0,  i,  n = 6;
    int a [] = {2, -2, -1, 3, 4, 2};
    for (i = 0; i &lt; n; i++)    {
            if (i == 0 || a [i]  &lt; 0  || a [i] &lt; a [i - 1])  {
                     if (sum &gt; maxsum) maxsum = sum;
                     sum = (a [i] &gt; 0) ? a [i] : 0;
            }
            else sum += a [i];
    }
    if (sum &gt; maxsum) maxsum = sum ;
    printf ("%d\\n", maxsum);

}</code></pre> <br>What is the value printed out when this program is executed?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3464/gate2007-it-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the choices given below would be printed when the following program is executed?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int a1[] = {6, 7, 8, 18, 34, 67};
int a2[] = {23, 56, 28, 29};
int a3[] = {-12, 27, -31};
int *x[] = {a1, a2, a3};
void print(int *a[])
{
    printf("%d,", a[0][2]);
    printf("%d,", *a[2]);
    printf("%d,", *++a[0]);
    printf("%d,", *(++a)[0]);
    printf("%d\\n", a[-1][+1]);
}
main()
{
     print(x);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">8, -12, 7, 23, 8</span>`,
                `<span style="display: inline;">8, 8, 7, 23, 7</span>`,
                `<span style="display: inline;">-12, -12, 27, -31, 23</span>`,
                `<span style="display: inline;">-12, -12, 27, -31, 56</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3594/gate2006-it-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2006 | C Programming</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Array and Pointer-IV)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the choices given below would be printed when the following program is executed ?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
struct test {
               int i;
               char *c;
}st[] = {5, "become", 4, "better", 6, "jungle", 8, "ancestor", 7, "brother"};
main ()
{ 
    struct test *p = st;
    p += 1;
    ++p -&gt; c;
    printf("%s,", p++ -&gt; c);
    printf("%c,", *++p -&gt; c);
    printf("%d,", p[0].i);
    printf("%s \\n", p -&gt; c);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">jungle, n, 8, nclastor</span>`,
                `<span style="display: inline;">etter, u, 6, ungle</span>`,
                `<span style="display: inline;">cetter, k, 6, jungle</span>`,
                `<span style="display: inline;">etter, u, 8, ncestor</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3592/gate2006-it-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2006 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let a be an array containing n integers in increasing order. The following algorithm determines whether there are two distinct numbers in the array whose difference is a specified number S &gt; 0.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> i = 0; j = 1;
while (j &lt; n ){
         if (E) j++;
         else if (a[j] - a[i] == S) break;
         else i++;
}
if (j &lt; n) printf("yes") else printf ("no");</code></pre> <br>Choose the correct expression for E.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a[j] - a[i] &gt; S</span>`,
                `<span style="display: inline;">a[j] - a[i] &lt; S</span>`,
                `<span style="display: inline;">a[i] - a[j] &lt; S</span>`,
                `<span style="display: inline;">a[i] - a[j] &gt; S</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3819/gate2005-it-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following C function takes two ASCII strings and determines whether one is an anagram of the other. An anagram of a string s is a string obtained by permuting the letters in s.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int anagram (char *a, char *b) {
    int count [128], j;
    for (j = 0;  j &lt; 128; j++) count[j] = 0;
    j = 0;
    while (a[j] && b[j]) {
        A;
        B;
    }
    for (j = 0; j &lt; 128; j++) if (count [j]) return 0;
    return 1;
} </code></pre> <br> Choose the correct alternative for statements A and B.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A : count [a[j]]++ and B : count[b[j]]--</span>`,
                `<span style="display: inline;">A : count [a[j]]++ and B : count[b[j]]++</span>`,
                `<span style="display: inline;">A : count [a[j++]]++ and B : count[b[j]]--</span>`,
                `<span style="display: inline;">A : count [a[j]]++ and B : count[b[j++]]--</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3814/gate2005-it-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2005 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program which is supposed to compute the transpose of a given \\( 4 \\times 4 \\) matrix M. Note that, there is an X in the program which indicates some missing statements. Choose the correct option to replace X in the program.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
#define ROW 4
#define COL 4
int M[ROW][COL] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16};
main()
{
    int i, j, t;
    for (i = 0; i &lt; 4; ++i)
    {
        X
    }
    for (i = 0; i &lt; 4; ++i)
        for (j = 0; j &lt; 4; ++j)
            printf ("%d", M[i][j]);
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><pre><code> for(j = 0; j &lt; 4; ++j){ t = M[i][j]; M[i][j] = M[j][i]; M[j][i] = t; }</code></pre></span>`,
                `<span style="display: inline;"><pre><code> for(j = 0; j &lt; 4; ++j){ M[i][j] = t; t = M[j][i]; M[j][i] = M[i][j]; }</code></pre></span>`,
                `<span style="display: inline;"><pre><code>for(j = i; j &lt; 4; ++j){ t = M[i][j]; M[i][j] = M[j][i]; M[j][i] = t; } </code></pre></span>`,
                `<span style="display: inline;"><pre><code>for(j = i; j &lt; 4; ++j){ M[i][j] = t; t = M[j][i]; M[j][i] = M[i][j]; } </code></pre></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3701/gate2004-it-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program segment: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>char p[20];
char *s = "string";
int length = strlen(s);
int i;
for (i = 0; i &lt; length; i++)
     p[i] = s[length - i];
printf("%s",p); </code></pre> The output of the program is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">gnirts</span>`,
                `<span style="display: inline;">string</span>`,
                `<span style="display: inline;">gnirts</span>`,
                `<span style="display: inline;">no output is printed</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1030/gate2004-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the following C program fragment, j, k, n and TwoLog_n are integer variables, and A is an array of integers. The variable n is initialized to an integer \\( \\geq \\) 3, and TwoLog_n is initialized to the value of \\( 2*\\left \\lceil log_{2}n \\right \\rceil  \\) <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> for (k = 3; k &lt;= n; k++)
    A[k] = 0;
for (k = 2; k &lt;= TwoLog_n; k++)
    for (j = k + 1; j &lt;= n; j++)
        A[j] = A[j] || !(j % k);
for (j = 3; j &lt;= n; j++)
    if (!A[j]) printf("%d", j);</code></pre> The set of number printed by this program fragment is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{m | m \\( \\leq \\) n, (\\( \\exists \\) i) [m = i!]} Here i! mean factorial of i</span>`,
                `<span style="display: inline;">{m | m \\( \\leq \\) n, \\( (\\exists i) [m = i^{2}] \\)}</span>`,
                `<span style="display: inline;">{m | m \\( \\leq \\) n, m is prime}</span>`,
                `<span style="display: inline;">{}</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/971/gate2003-88#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2003 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume the following C variable declaration <br> int *A [10], B[10][10]; <br> Of the following expressions <br> I A[2] <br> II A[2][3] <br> III B[1] <br> IV B[2][3] <br> which will not give compile-time errors if used as left hand sides of assignment statements in a C program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II, and IV only</span>`,
                `<span style="display: inline;">II, III, and IV only</span>`,
                `<span style="display: inline;">II and IV only</span>`,
                `<span style="display: inline;">IV only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/893/gate2003-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2003 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C declaration:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> struct ( 
    short x[5];  
    union { 
        float y; 
        long z; 
    } u;
 )t;</code></pre> <br> Assume that the objects of the type short, float and long occupy 2 bytes, 4 bytes and 8 bytes, respectively. The memory requirement for variable t, ignoring alignment consideration, is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">22 bytes</span>`,
                `<span style="display: inline;">14 bytes</span>`,
                `<span style="display: inline;">18 bytes</span>`,
                `<span style="display: inline;">10 bytes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/640/gate2000-1-17-isro2015-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2000 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Aliasing in the context of programming languages refers to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">multiple variables having the same memory location</span>`,
                `<span style="display: inline;">multiple variables having the same value</span>`,
                `<span style="display: inline;">multiple variables having the same identifier</span>`,
                `<span style="display: inline;">multiple uses of the same variable</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/639/gate2000-1-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2000 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The most appropriate matching for the following pairs is: <br><br>\\( \\begin{array}{|ll|ll|}\\hline X: & \\text{m = malloc(5); m = NULL;} & 1: & \\text{using dangling pointers} \\\\\\hline Y: & \\text{free(n); n -&gt; value = 5;} & 2: & \\text{using uninitialized pointers} \\\\\\hline Z: & \\text{char *p , *p = 'a' ; } & 3: & \\text{lost memory} \\\\\\hline \\end{array} \\)`,
            image: "",
            options: [
                `<span style="display: inline;">X-1 Y-3 Z-2</span>`,
                `<span style="display: inline;">X-2 Y-1 Z-3</span>`,
                `<span style="display: inline;">X-3 Y-2 Z-1</span>`,
                `<span style="display: inline;">X-3 Y-1 Z-2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/635/gate2000-1-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2000 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following C declarations:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> struct node { 
    int i:
    float j;
 };
 struct node *s[10];</code></pre> define s to be:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">An array, each element of which is a pointer to a structure of type node</span>`,
                `<span style="display: inline;">A structure of 2 fields, each field being a pointer to an array of 10 elements</span>`,
                `<span style="display: inline;">A structure of 3 fields: an integer, a float, and an array of 10 elements</span>`,
                `<span style="display: inline;">An array, each element of which is a structure of type node</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/634/gate2000-1-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2000 | C Programming</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Conditional Statements)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following ANSI C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main()
{
    int i, j, count;
    count=0;
    i=0;
    for (j=-3; j &lt; =3; j++)
    {
        if (( j &gt; = 0) && (i++))
        count = count + j;
    }
    count = count +i;
    printf("%d", count);
    return 0;
}</code></pre>Which one of the following options is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The program will not compile successfully</span>`,
                `<span style="display: inline;">The program will compile successfully and output 10 when executed</span>`,
                `<span style="display: inline;">The program will compile successfully and output 8 when executed</span>`,
                `<span style="display: inline;">The program will compile successfully and output 13 when executed</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357414/gate-cse-2021-set-1-question-37#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2021 SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of tho following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> main(){
    int x=2, y=5;
    if(x &lt; y) return (x=x+y);
    else printf("z1");
    printf("z2");
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">z2</span>`,
                `<span style="display: inline;">z1z2</span>`,
                `<span style="display: inline;">Compilation error</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213528/isro2018-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume A and B are non-zero positive integers. The following code segment:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> while(A!=B){
    if(A &gt; B)
    A -= B;
    else
    B -= A;
}
cout &lt;&lt; A; // printing the value of A</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Computes the LCM of two numbers</span>`,
                `<span style="display: inline;">Divides the larger number by the smaller number</span>`,
                `<span style="display: inline;">Computes the GCD of two numbers</span>`,
                `<span style="display: inline;">Finds the smaller of two numbers</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213581/isro2018-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What will be the output of the following C code?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
main()
{
    int i;
    for(i=0;i&lt;5;i++)
    {
        int i=10;
        printf("%d" , i);
        i++;
    }
    return 0;
}</code></pre><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">10 11 12 13 14</span>`,
                `<span style="display: inline;">10 10 10 10 10</span>`,
                `<span style="display: inline;">0 1 2 3 4</span>`,
                `<span style="display: inline;">Compilation error</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128751/isro2017-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2017 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following segment of C-code:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>int j, n;
j = 1;
while (j &lt;= n)
    j = j * 2;</code></pre>The number of comparisons made in the execution of the loop for any n&gt;0 is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo stretchy="false">⌈</mo> <msub> <mrow> <mi>log</mi> <mo>⁡</mo> </mrow> <mn>2</mn> </msub> <mi>n</mi> <mo stretchy="false">⌉</mo> <mo>+</mo> <mn>1</mn> </mrow> <annotation encoding="application/x-tex">\\lceil \\log_2n \\rceil +1 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">⌈</span><span class="mop"><span class="mop">lo<span style="margin-right: 0.0139em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.207em;"><span class="" style="top: -2.4559em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2441em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal">n</span><span class="mclose">⌉</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1</span></span></span></span></span></span>`,
                `<span style="display: inline;">n</span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo stretchy="false">⌈</mo> <msub> <mrow> <mi>log</mi> <mo>⁡</mo> </mrow> <mn>2</mn> </msub> <mi>n</mi> <mo stretchy="false">⌉</mo> </mrow> <annotation encoding="application/x-tex">\\lceil \\log_2n \\rceil </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">⌈</span><span class="mop"><span class="mop">lo<span style="margin-right: 0.0139em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.207em;"><span class="" style="top: -2.4559em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2441em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal">n</span><span class="mclose">⌉</span></span></span></span></span></span>`,
                `<span style="display: inline;"><span><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"> <semantics> <mrow> <mo stretchy="false">⌊</mo> <msub> <mrow> <mi>log</mi> <mo>⁡</mo> </mrow> <mn>2</mn> </msub> <mi>n</mi> <mo stretchy="false">⌋</mo> <mo>+</mo> <mn>1</mn> </mrow> <annotation encoding="application/x-tex">\\lfloor \\log_2n \\rfloor +1 </annotation> </semantics> </math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height: 1em; vertical-align: -0.25em;"></span><span class="mopen">⌊</span><span class="mop"><span class="mop">lo<span style="margin-right: 0.0139em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.207em;"><span class="" style="top: -2.4559em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.2441em;"><span class=""></span></span></span></span></span></span><span class="mspace" style="margin-right: 0.1667em;"></span><span class="mord mathnormal">n</span><span class="mclose">⌋</span><span class="mspace" style="margin-right: 0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right: 0.2222em;"></span></span><span class="base"><span class="strut" style="height: 0.6444em;"></span><span class="mord">1</span></span></span></span></span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/56129/gate2007-15-isro2016-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2016 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program fragment<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> if(a &gt; b)  if(b &gt; c)     s1;  else s2;</code></pre>s2 will be executed if</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a &lt;= b</span>`,
                `<span style="display: inline;">b &gt; c</span>`,
                `<span style="display: inline;">b &gt;= c and a &lt;= b</span>`,
                `<span style="display: inline;">a &gt; b and b &lt;= c</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/19445/isro2015-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                                                    2015 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
int main( )
{
    int i, j, k = 0;
    j = 2 * 3 / 4 + 2.0 / 5 + 8 / 5;
    k -=  --j;
    for(i = 0; i &lt; 5; i++)
    {
         switch(i + k)
        {
          case 1:
          case 2: printf("\\n%d", i+k);
          case 3: printf("\\n%d", i+k);
          default: printf("\\n%d", i+k);
        }
   }
return 0;
}</code></pre> The number of times printf statement is executed is ________.</span>`,
            image: "",
            options: [],
            answer: "10",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8557/gate2015-3-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                                                    SET-3 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the C program below. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int *A, stkTop;
int stkFunc(int opcode, int val)
{
    static int size=0, stkTop=0;
    switch (opcode) {
        case -1: size = val; break;
        case 0: if (stkTop &lt; size) A[stkTop++] = val; break;
        default: if (stkTop) return A[--stkTop];
        }
       return -1;
}
int main()
{
    int B[20]; A = B; stkTop = -1;
    stkFunc (-1, 10);
    stkFunc ( 0, 5);
    stkFunc ( 0, 10);
    printf ("%d\\n", stkFunc(1, 0) + stkFunc(1, 0));
}</code></pre> The value printed by the above program is __________.</span>`,
            image: "",
            options: [],
            answer: "15",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8164/gate2015-2-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015
                                                    SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What will be the output of the following C program segment? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> char inChar = 'A' ;
switch ( inChar ) {
case 'A' : printf ("Choice A\\ n") ;
case 'B' :
case 'C' : printf ("Choice B") ;
case 'D' :
case 'E' :
default : printf ( " No Choice" ) ; } </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">No Choice</span>`,
                `<span style="display: inline;">Choice A</span>`,
                `<span style="display: inline;">Choice A <br> Choice B No Choice</span>`,
                `<span style="display: inline;">Program gives no output as it is erroneous</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/35/gate2012-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2012 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following C code?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
int main()
{
    int index;
    for(index=1; index&lt;=5; index++)
    {
        printf("%d", index);
        if (index==3)
            continue;
    }
}
 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1245</span>`,
                `<span style="display: inline;">12345</span>`,
                `<span style="display: inline;">12245</span>`,
                `<span style="display: inline;">12354</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52841/isro2011-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2011 | C Programming |</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following pseudocode<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>x:=1;
i:=1;
while (x \\leq 500)
begin
x:=2^x;
i:=i+1;
end
</code></pre> <br>What is the value of i at the end of the pseudocode?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52489/isro2011-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO
                        CSE 2011 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following code segment:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> for (int k=0; k&lt;20; k=k+2)
{
    if (k % 3 == 1)
        system.out.print(k+ " ");
}</code></pre> What is printed as a result of executing the code segment?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4 16</span>`,
                `<span style="display: inline;">4 10 16</span>`,
                `<span style="display: inline;">0 6 12 18</span>`,
                `<span style="display: inline;">1 4 7 10 13 16 19</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49973/isro2008-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2008 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following pseudo-code<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>x:=1;
i:=1;
while (x &lt;= 1000)
begin
    x:=2^x;
    i:=i+1;
end; </code></pre> <br> What is the value of i at the end of the pseudo-code?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">7</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49486/isro2007-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2007 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let x be an integer which can take a value of 0 or 1. The statement <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>if (x == 0) x = 1; else x = 0; </code></pre> is equivalent to which one of the following ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">x = 1 + x;</span>`,
                `<span style="display: inline;">x = 1 - x;</span>`,
                `<span style="display: inline;">x = x - 1;</span>`,
                `<span style="display: inline;">x = 1% x;</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3656/gate2004-it-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT
                        2004 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the programming constructs<br> I. assignment<br> II. for loops where the loop parameter cannot be changed within the loop<br> III. if-then-else<br> IV. forward go to<br> V. arbitrary go to<br> VI. non-recursive procedure call<br> VII. recursive procedure/function call<br> VIII. repeat loop,<br> which constructs will you not include in a programming language such that it should be possible to program the terminates (i.e., halting) function in the same programming language</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(II), (III), (IV)</span>`,
                `<span style="display: inline;">(V), (VII), (VIII)</span>`,
                `<span style="display: inline;">(VI), (VII), (VIII)</span>`,
                `<span style="display: inline;">(III), (VII), (VIII)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1483/gate1999-2-5" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        1999 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The conditional expansion facility of macro processor is provided to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">test a condition during the execution of the expanded program</span>`,
                `<span style="display: inline;">to expand certain model statements depending upon the value of a condition during the execution of the expanded program</span>`,
                `<span style="display: inline;">to implement recursion</span>`,
                `<span style="display: inline;">to expand certain model statements depending upon the value of a condition during the process of macro expansion</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2225/gate1997-1-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1997 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume that X and Y are non-zero positive integers. What does the following Pascal program segment do?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>while X &lt;&gt; Y do
if  X &gt; Y then
    X := X - Y
else
    Y := Y - X;
write(X);
 </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Computes the LCM of two numbers</span>`,
                `<span style="display: inline;">Divides the larger number by the smaller number</span>`,
                `<span style="display: inline;">Computes the GCD of two numbers</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2615/gate1995-2-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1995 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the following Pascal program segment, what is the value of X after the execution of the program segment?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>X := -10; Y := 20;
If X &gt; Y then if X &lt; 0 then X := abs(X) else X := 2*X; </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">-20</span>`,
                `<span style="display: inline;">-10</span>`,
                `<span style="display: inline;">None</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2591/gate1995-1-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1995 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An unrestricted use of the "goto" statement is harmful because</span>`,
            image: "",
            options: [
                `<span style="display: inline;">it makes it more difficult to verify programs</span>`,
                `<span style="display: inline;">it increases the running time of the programs</span>`,
                `<span style="display: inline;">it increases the memory required for the programs</span>`,
                `<span style="display: inline;">it results in the compiler generating longer machine code</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2442/gate1994-1-5" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1994 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An unrestricted use of the "go to" statement is harmful because of which of the following reason (s):</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It makes it more difficult to verify programs.</span>`,
                `<span style="display: inline;">It makes programs more inefficient.</span>`,
                `<span style="display: inline;">It makes it more difficult to modify existing programs.</span>`,
                `<span style="display: inline;">It results in the compiler generating longer machine code.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/87095/gate1989-3-i" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1989 | C Programming</span></div>`
        }

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-c-programming(Airthmetic Operator)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int main(){
int a = 6;
int b = 0;
while(a &lt; 10) {
a = a / 12 + 1;
a += b;}
printf("%d", a);
return 0;}
</code></pre>Which one of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The program prints 9 as output</span>`,
                `<span style="display: inline;">The program prints 10 as output</span>`,
                `<span style="display: inline;">The program gets stuck in an infinite loop</span>`,
                `<span style="display: inline;">The program prints 6 as output</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422834/gate-cse-2024-set-1-question-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2024 SET-1 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">What is printed by the following ANSI C program? <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>#include &lt; stdio.h &gt;
int main(int argc, char *argv[]){ 
 char a = 'P';
 char b = 'x';
 char c = (a  &  b) + '*';
 char d = (a | b) - '-';
 char e = (a ^ b) + '+'; 
 printf("%c %c %c \\n", c, d, e); 
 return 0;
}
</code></pre><br>ASCII encoding for relevant characters is given below<br><img src="images/twt-c-programming-2/q34.jpg"><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">z K S</span>`,
                `<span style="display: inline;">122 75 83</span>`,
                `<span style="display: inline;">* - +</span>`,
                `<span style="display: inline;">P x +</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371902/Gate-cse-2022-question-34#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
               2022 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program: <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
#include &lt; stdio.h &gt;
int main() {
 float sum = 0.0, j = 1.0, i = 2.0;
 while (i / j &gt; 0.0625) {
    j = j + j; 
    sum = sum + i/j;
    printf("%f \\n", sum);
 }
 return 0;
}</code></pre> The number of times variable sum will be printed When the above program is executed is _________ .</span>`,
            image: "",
            options: [],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302796/gate2019-cs-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2019 | C programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C program:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> main()
{
float sum= 0.0, j=1.0,i=2.0;
while(i/j&gt;0.001){
    j=j+1;
    sum=sum+i/j;
    printf("%f/n", sum);
  }
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">0 - 9 lines of output</span>`,
                `<span style="display: inline;">10 - 19 lines out output</span>`,
                `<span style="display: inline;">20 - 29 lines of output</span>`,
                `<span style="display: inline;">More than 29 lines of output</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213518/isro2018-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code segment:<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
main()
{
    int i, j, x;
    scanf("%d", &x);
    i=1; j=1;
    while (i&lt;10) {
            j =j*i;
            i= i+1;
            if(i==x) break;
        }
}</code></pre>For the program fragment above, which of the following statements about the variables i and j must be true after execution of this program? [ !(exclamation) sign denotes factorial in the answer]</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(j = (x - 1)!) ∧ (i ≥ x)</span>`,
                `<span style="display: inline;">(j = 9!) ∧ (i = 10)</span>`,
                `<span style="display: inline;">((j = 10!) ∧ (i = 10)) ∨ ((j = (x - 1)!) ∧ (i = x))</span>`,
                `<span style="display: inline;">((j = 9!) ∧ (i ≥ 10)) ∨ ((j = (x - 1)!) ∧ (i = x))</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213570/isro2018-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2018 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What does the following program do when the input is unsigned 16 bit integer?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
main(){
  unsigned int num;
  int i;
  scanf("%u", &num);
  for(i=0;i&lt;16;i++){
    printf("%d", (num &lt; &lt; i&1 &lt; &lt; 15)?1:0);
  }
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">It prints all even bits from num</span>`,
                `<span style="display: inline;">It prints all odd bits from num</span>`,
                `<span style="display: inline;">It prints binary equivalent of num</span>`,
                `<span style="display: inline;">None of above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128753/isro2017-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2017 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following C program. <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
int main ( ) {
    int m = 10;
    int n, n1;
    n = ++m;
    n1 = m++;
    n--;
    --n1;
    n-=n1;
printf ("%d", n) ;
return 0;
}</code></pre> The output of the program is ______________.</span>`,
            image: "",
            options: [],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118272/gate2017-2-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017 SET-2 | C Programming</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The attributes of three arithmetic operators in some programming language are given below. <br><img data-lazyloaded="1" src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" decoding="async" data-src="/wp-content/uploads/GATE/CS/20161/q45.jpg"><noscript><img decoding="async" src="/wp-content/uploads/GATE/CS/20161/q45.jpg" /></noscript> <br> The value of the expression 2-5+1-7*3 in this language is_______ .</span>`,
            image: "",
            options: [],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39697/gate2016-1-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016 SET-1 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #define hypotenuse (a, b) sqrt (a*a+b*b);</code></pre>The macro call hypotenuse(a+2,b+3);</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Finds the hypotenuse of a triangle with sides a+2 and b+3</span>`,
                `<span style="display: inline;">Finds the square root of \\(  (a+2)^{2} \\) and \\(  (b+3)^{2} \\)`,
                `<span style="display: inline;">Is invalid</span>`,
                `<span style="display: inline;">Find the square root of 3*a+4*b+5</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/37955/isro2015-76" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The for loop<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> for (i=0; i&lt;10; ++i)
printf("%d", i&1);</code></pre>prints</span>`,
            image: "",
            options: [
                `<span style="display: inline;">\\(  0101010101 \\)`,
                `<span style="display: inline;">\\(  0111111111 \\)`,
                `<span style="display: inline;">\\(  0000000000 \\)`,
                `<span style="display: inline;">\\(  1111111111 \\)`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52141/isro2015-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following program fragment<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> i=6720; j=4;
while (i%j)==0
{
    i=i/j;
    j=j+1;
}</code></pre>On termination j will have the value</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">6720</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52135/isro2015-71" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If n has 3, then the statement a[++n]=n++;</span>`,
            image: "",
            options: [
                `<span style="display: inline;">assigns 3 to a[5]</span>`,
                `<span style="display: inline;">assigns 4 to a[5]</span>`,
                `<span style="display: inline;">assigns 4 to a[4]</span>`,
                `<span style="display: inline;">what is assigned is compiler dependent</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50408/isro2015-69" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following three 'C' language statements is equivalent to which single statement?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>y=y+1;
z=x+y;
x=x+1</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">z = x + y + 2;</span>`,
                `<span style="display: inline;">z = (x++) + (++y);</span>`,
                `<span style="display: inline;">z = (x++) + (y++);</span>`,
                `<span style="display: inline;">z = (x++) + (++y) + 1;</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/53362/isro2014-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">How many lines of output does the following C code produce?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
float i=2.0;
float j=1.0;
float sum = 0.0;
main()
{
    while (i/j &gt; 0.001)
    {
        j+=j;
        sum=sum+(i/j);
        printf("%f\\n", sum);
    }
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">11</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52437/isro2014-38" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following C program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;    
void main(void){
    int shifty;
    shifty=0570;
    shifty=shifty&gt;&gt;4;
    shifty=shifty&lt;&lt;6;
    printf("The value  of shifty is %o \\n",shifty);  
}</code></pre><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">The value of shifty is 15c0</span>`,
                `<span style="display: inline;">The value of shifty is 4300</span>`,
                `<span style="display: inline;">The value of shifty is 5700</span>`,
                `<span style="display: inline;">The value of shifty is 2700</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/15906/isro2014-32" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following C program? <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt;
#define SQR(x) (x*x)  

int main()
{
    int a;
    int b=4;
    a=SQR(b+2);
    printf("%d\\n",a); 
    return 0;
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">14</span>`,
                `<span style="display: inline;">36</span>`,
                `<span style="display: inline;">18</span>`,
                `<span style="display: inline;">20</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52570/isro2014-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2014 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose n and p are unsigned int variables in a C program. We wish to set p to \\( ^nC_3  \\)<span class="mord"><span class="mord mathnormal" style="margin-right: 0.0715em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height: 0.3011em;"><span class="" style="top: -2.55em; margin-left: -0.0715em; margin-right: 0.05em;"><span class="pstrut" style="height: 2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">3</span></span></span></span><span class="vlist-s">&ZeroWidthSpace;</span></span><span class="vlist-r"><span class="vlist" style="height: 0.15em;"><span class=""></span></span></span></span></span></span></span></span></span></span>. If n is large, which one of the following statements is most likely to set p correctly?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">p = n * (n - 1) * (n-2) / 6;</span>`,
                `<span style="display: inline;">p = n * (n - 1) / 2 * (n-2) / 3;</span>`,
                `<span style="display: inline;">p = n * (n - 1) / 3 * (n-2) / 2;</span>`,
                `<span style="display: inline;">p = n * (n - 1) / 2 * (n-2) / 6.0;</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1965/gate2014-2-11#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2014 SET-2 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the output of the following program?<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> Class Test
{ 
    public static void main (String [] args) 
    {  
        int x = 0; 
        int y = 0 
        for (int z = 0; z &lt; 5; z++)
        { 
            if((++x &gt;2)||(++y  &gt; 2)) 
            {
                x++;
            }
        }
    System.out.printIn (x+ "" + y); 
    }
}</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">8 2</span>`,
                `<span style="display: inline;">8 5</span>`,
                `<span style="display: inline;">8 3</span>`,
                `<span style="display: inline;">5 3</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44842/isro-2013-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2013 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C code.<br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code> #include &lt; stdio.h &gt; 
#include &lt; math.h &gt; 
void main ()  
{  
      double pi = 3.1415926535;   
      int a = 1;  
      int i;    
      for (i=0; i &lt; 3; i++) 
            if (a = cos(pi * i/2)) 
                  printf("% d", 1);  
            else printf("%d", 0); 
}</code></pre> <br> What would the program print?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">000</span>`,
                `<span style="display: inline;">010</span>`,
                `<span style="display: inline;">101</span>`,
                `<span style="display: inline;">111</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44833/isro-2013-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2013 | C Programming</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Find the output of the following Java code line <br> <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>System.out.printIn(math.floor(-7.4)) </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">-7</span>`,
                `<span style="display: inline;">-8</span>`,
                `<span style="display: inline;">-7.4</span>`,
                `<span style="display: inline;">-7</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52870/isro2011-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2011 | C Programming | Older Comments | Privacy Policy</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process-I)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose in a multiprogramming environment, the following C program segment is executed. A process goes into I/O queue whenever an I/O related operation is performed. Assume that there will always be a context switch whenever a process requests for an I/O, and also whenever the process returns from an I/O. The number of times the process will enter the ready queue during its lifetime (not counting the time the process enters the ready queue when it is run initially) is _______. (Answer in integer) <pre style="border: 1px solid #ccc; padding: 15px; background: #fff; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>
int main()
{
	int x=0,i=0;
	scanf("%d",&x);
	for(i=0; i&lt;20; i++)
	{
		 x = x + 20;
		 printf("%d\\n",x);
	}
	return 0;
}
</code></pre></span>`,
            image: "",
            options: [],
            answer: "21",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460061/gate-cse-2025-set-1-question-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025 SET-1 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a process P running on a CPU. Which one or more of the following events will always trigger a context switch by the OS that results in process P moving to a non-running state (e.g., ready, blocked)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P makes a blocking system call to read a block of data from the disk</span>`,
                `<span style="display: inline;">P tries to access a page that is in the swap space, triggering a page fault</span>`,
                `<span style="display: inline;">An interrupt is raised by the disk to deliver data requested by some other process</span>`,
                `<span style="display: inline;">A timer interrupt is raised by the hardware</span>`
            ],
            answer: ["A", "B"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422882/gate-cse-2024-set-2-question-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-2 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following process state transitions is/are NOT possible?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Running to Ready</span>`,
                `<span style="display: inline;">Waiting to Running</span>`,
                `<span style="display: inline;">Ready to Waiting</span>`,
                `<span style="display: inline;">Running to Terminated</span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422827/gate-cse-2024-set-1-question-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-1 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Dispatch latency is defined as</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the speed of dispatching a process from running to the ready state</span>`,
                `<span style="display: inline;">the time of dispatching a process from running to ready state and keeping the CPU idle</span>`,
                `<span style="display: inline;">the time to stop one process and start running another one</span>`,
                `<span style="display: inline;">none of these</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331250/isro2020-28" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2020 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The operating system and the other processes are protected from being modified by an already running process because</span>`,
            image: "",
            options: [
                `<span style="display: inline;">they run at different time instants and not in parallel</span>`,
                `<span style="display: inline;">they are in different logical addresses</span>`,
                `<span style="display: inline;">they use a protection algorithm in the scheduler</span>`,
                `<span style="display: inline;">every address generated by the CPU is being checked against the relocation and limit parameters</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331282/isro2020-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2020 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements about process state transitions for a system using preemptive scheduling. <br><br> I. A running process can move to ready state.<br> II. A ready process can move to running state.<br> III. A blocked process can move to running state.<br> IV. A blocked process can move to ready state.<br><br> Which of the above statements are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II and III only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I, II and IV only</span>`,
                `<span style="display: inline;">I, II, III and IV only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333219/gate2020-cs-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2020 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Working Set (t,k) at an instant of time t is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the set of k future references that the OS will make</span>`,
                `<span style="display: inline;">the set of future references that the OS will make in next t unit of time</span>`,
                `<span style="display: inline;">the set of k references with high frequency</span>`,
                `<span style="display: inline;">the k set of pages that have been referenced in the last t time units</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55554/isro2016-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2016 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose a system contains n processes and system uses the round-robin algorithm for CPU scheduling then which data structure is best suited ready queue of the process</span>`,
            image: "",
            options: [
                `<span style="display: inline;">stack</span>`,
                `<span style="display: inline;">queue</span>`,
                `<span style="display: inline;">circular queue</span>`,
                `<span style="display: inline;">tree</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51692/isro2015-33" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2015 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The maximum number of processes that can be in Ready state for a computer system with n CPUs is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">n</span>`,
                `<span style="display: inline;">\\( n^{2}  \\)`,
                `<span style="display: inline;">\\( 2^{n}  \\)`,
                `<span style="display: inline;">Independent of n</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8390/gate2015-3-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2015 SET-3 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The state of a process after it encounters an I/O instruction is?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ready</span>`,
                `<span style="display: inline;">Blocked</span>`,
                `<span style="display: inline;">Idle</span>`,
                `<span style="display: inline;">Running</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44406/isro-2013-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2013 | Operating System | ← Older Comments | ← Older Comments | Privacy Policy</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">There are three processes in the ready queue. When the currently running process requests for I/O how many process switches take place?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51339/isro2011-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2011 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Process is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A program in high level language kept on disk</span>`,
                `<span style="display: inline;">Contents of main memory</span>`,
                `<span style="display: inline;">A program in execution</span>`,
                `<span style="display: inline;">A job in secondary memory</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50574/isro2009-76" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2009 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Special software to create a job queue is called a</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Driver</span>`,
                `<span style="display: inline;">Spooler</span>`,
                `<span style="display: inline;">Interpreter</span>`,
                `<span style="display: inline;">Linkage editor</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/47649/isro2009-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2009 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which is the correct definition of a valid process transition in an operating system?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Wake Up: ready \\( \\rightarrow \\) running</span>`,
                `<span style="display: inline;">Dispatch: ready \\( \\rightarrow \\) running</span>`,
                `<span style="display: inline;">Block: ready \\( \\rightarrow \\) running</span>`,
                `<span style="display: inline;">Timer runout: ready \\( \\rightarrow \\) block</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/48031/isro2009-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2009 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In the following process state transition diagram for a uniprocessor system, assume that there are always some processes in the ready state: <br> <br> Now consider the following statements:<br><br> I. If a process makes a transition D, it would result in another process making transition A immediately. <br> II. A process P2 in blocked state can make transition E while another process P1 is in running state. <br> III. The OS uses preemptive scheduling. <br> IV. The OS uses non-preemptive scheduling. <br><br> Which of the above statements are TRUE?</span>`,
            image: "images/os-pyq-1/q32.jpg",
            options: [
                `<span style="display: inline;">I and II</span>`,
                `<span style="display: inline;">I and III</span>`,
                `<span style="display: inline;">II and III</span>`,
                `<span style="display: inline;">II and IV</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1318/gate2009-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2009 | Operating System</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process-II)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following need not necessarily be saved on a Context Switch between processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">General purpose registers</span>`,
                `<span style="display: inline;">Translation look-aside buffer</span>`,
                `<span style="display: inline;">Program counter</span>`,
                `<span style="display: inline;">Stack pointer</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50003/isro2008-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2008 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Checkpointing a job</span>`,
            image: "",
            options: [
                `<span style="display: inline;">allows it to be completed successfully</span>`,
                `<span style="display: inline;">allows it to continue executing later</span>`,
                `<span style="display: inline;">prepares it for finishing</span>`,
                `<span style="display: inline;">occurs only when there is an error in it</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50000/isro2008-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2008 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following need not necessarily be saved on a context switch between processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">General purpose registers</span>`,
                `<span style="display: inline;">Translation look-aside buffer</span>`,
                `<span style="display: inline;">Program counter</span>`,
                `<span style="display: inline;">All of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/644/gate2000-1-20-isro2008-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2008 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A task in a blocked state</span>`,
            image: "",
            options: [
                `<span style="display: inline;">is executable</span>`,
                `<span style="display: inline;">is running</span>`,
                `<span style="display: inline;">must still be placed in the run queues</span>`,
                `<span style="display: inline;">is waiting for some temporarily unavailable resources</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49516/isro2007-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2007 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the name of the technique in which the operating system of a computer executes several programs concurrently by switching back and forth between them?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Partitioning</span>`,
                `<span style="display: inline;">Multi-tasking</span>`,
                `<span style="display: inline;">Windowing</span>`,
                `<span style="display: inline;">Paging</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49498/isro2007-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2007 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The process state transition diagram of an operating system is as given below. Which of the following must be FALSE about the above operating system?<br><br><br></span>`,
            image: "images/os-pyq-1/q13.jpg",
            options: [
                `<span style="display: inline;">It is a multiprogrammed operating system</span>`,
                `<span style="display: inline;">It uses preemptive scheduling</span>`,
                `<span style="display: inline;">It uses non-preemptive scheduling</span>`,
                `<span style="display: inline;">It is a multi-user operating system</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3552/gate2006-it-13" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE IT 2006 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the swap space in the disk used for?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Saving temporary html pages</span>`,
                `<span style="display: inline;">Saving process data</span>`,
                `<span style="display: inline;">Storing the super-block</span>`,
                `<span style="display: inline;">Storing device drivers</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1357/gate2005-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2005 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following need not necessarily be saved on a context switch between processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">General purpose registers</span>`,
                `<span style="display: inline;">Translation look-aside buffer</span>`,
                `<span style="display: inline;">Program counter</span>`,
                `<span style="display: inline;">All of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/644/gate2000-1-20-isro2008-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2000 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following actions is/are typically not performed by the operating system when switching context from process A to process B?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Saving current register values and restoring saved register values for process B.</span>`,
                `<span style="display: inline;">Changing address translation tables.</span>`,
                `<span style="display: inline;">Swapping out the memory image of process A to the disk.</span>`,
                `<span style="display: inline;">Invalidating the translation look-aside buffer.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1490/gate1999-2-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1999 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The process state transition diagram in the below figure is representative of<br><br></span>`,
            image: "images/os-pyq-1/q1.18.jpg",
            options: [
                `<span style="display: inline;">a batch operating system</span>`,
                `<span style="display: inline;">an operating system with a preemptive scheduler</span>`,
                `<span style="display: inline;">an operating system with a non-preemptive scheduler</span>`,
                `<span style="display: inline;">a uni-programmed operating system</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2722/gate1996-1-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 1996 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following does not interrupt a running process ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A device</span>`,
                `<span style="display: inline;">Power failure</span>`,
                `<span style="display: inline;">Timer</span>`,
                `<span style="display: inline;">Scheduler process</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/738/gate2001-2-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2001 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Where does the swap space reside ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">RAM</span>`,
                `<span style="display: inline;">Disk</span>`,
                `<span style="display: inline;">ROM</span>`,
                `<span style="display: inline;">On-chip cache</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/713/gate2001-1-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2001 | Operating System</span></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-I)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following CPU scheduling algorithms cannot be preemptive?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Shortest Remaining Time First (SRTF) Scheduling</span>`,
                `<span style="display: inline;">First Come First Serve (FCFS) Scheduling</span>`,
                `<span style="display: inline;">Round Robin Scheduling</span>`,
                `<span style="display: inline;">Priority Scheduling</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523133/gate-cse-2026-set-2-question-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026 SET-2 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a CPU that has to execute two types of processes. The first type, Actuators (A), requires a CPU burst of \\( 6 \\) seconds. The second type, Controllers (C), requires a CPU burst of \\( 8 \\) seconds. A new process of type A arrives at time \\( t=10 \\), \\( 20, 30, 40 \\), and \\( 50 \\) (in seconds). Similarly, a new process of type C arrives at time \\( t= \\) \\( 11, 22, 33, 44 \\), and \\( 55 \\) (in seconds). The CPU scheduling policy is First Come First Serve (FCFS). The first process of type A starts running at \\( t=10 \\) seconds. The average waiting time (in seconds) for the \\( 10 \\) processes is ________. (rounded off to one decimal place)</span>`,
            image: "",
            options: [],
            answer: "9.5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523026/gate-cse-2026-set-1-question-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026 SET-1 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Processes \\( P_1, P_2, P_3, P_4 \\) arrive in that order at times 0, 1, 2, and 8 milliseconds respectively, and have execution times of 10, 13, 6, and 9 milliseconds respectively. Shortest Remaining Time First (SRTF) algorithm is used as the CPU scheduling policy. Ignore context switching times. <br> Which ONE of the following correctly gives the average turnaround time of the four processes in milliseconds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">22</span>`,
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">37</span>`,
                `<span style="display: inline;">19</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460819/gate-cse-2025-set-2-question-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025 SET-2 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A computer has two processors, \\( M_1 \\) and \\( M_2 \\). Four processes \\( P_1, P_2, P_3, P_4 \\) with CPU bursts of 20, 16, 25, and 10 milliseconds, respectively, arrive at the same time and these are the only processes in the system. The scheduler uses non-preemptive priority scheduling, with priorities decided as follows: <br><br> \\( M_1 \\) uses priority of execution for the processes as, \\( P_1 > P_3 > P_2 > P_4 \\), i.e., \\( P_1 \\) and \\( P_4 \\) have highest and lowest priorities, respectively. <br>\\( M_2 \\) uses priority of execution for the processes as, \\( P_2 > P_3 > P_4 > P_1 \\), i.e., \\( P_2 \\) and \\( P_1 \\) have highest and lowest priorities, respectively. <br><br>A process \\( P_i \\) is scheduled to a processor \\( M_k \\), if the processor is free and no other process \\( P_j \\) is waiting with higher priority. At any given point of time, a process can be allocated to any one of the free processors without violating the execution priority rules. Ignore the context switch time. What will be the average waiting time of the processes in milliseconds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">8.75</span>`,
                `<span style="display: inline;">6.5</span>`,
                `<span style="display: inline;">7.5</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460052/gate-cse-2025-set-1-question-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2025 SET-1 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a single processor system with four processes A, B, C, and D, represented as given below, where for each process the first value is its arrival time, and the second value is its CPU burst time.<br><br> A (0, 10), B (2, 6), C (4, 3), and D (6, 7).<br><br> Which one of the following options gives the average waiting times when preemptive Shortest Remaining Time First (SRTF) and Non-Preemptive Shortest Job First (NP-SJF) CPU scheduling algorithms are applied to the processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">SRTF = 6, NP-SJF = 7</span>`,
                `<span style="display: inline;">SRTF = 6, NP-SJF = 7.5</span>`,
                `<span style="display: inline;">SRTF = 7, NP-SJF = 7.5</span>`,
                `<span style="display: inline;">SRTF = 7, NP-SJF = 8.5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422870/gate-cse-2024-set-2-question-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024 SET-2 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which one or more of the following CPU scheduling algorithms can potentially cause starvation?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First-in First-Out</span>`,
                `<span style="display: inline;">Round Robin</span>`,
                `<span style="display: inline;">Priority Scheduling</span>`,
                `<span style="display: inline;">Shortest Job First</span>`
            ],
            answer: ["C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399294/gate-cse-2023-question-17#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2023 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider four processes P, Q, R, and S scheduled on a CPU as per round robin algorithm with a time quantum of 4 units. The processes arrive in the order P, Q, R, S, all at time t = 0. There is exactly one context switch from S to Q, exactly one context switch from R to Q, and exactly two context switches from Q to R. There is no context switch from S to P. Switching to a ready process after the termination of another process is also considered a context switch. Which one of the following is NOT possible as CPU burst time (in time units) of these processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P = 4, Q = 10, R = 6, S = 2</span>`,
                `<span style="display: inline;">P = 2, Q = 9, R = 5, S = 1</span>`,
                `<span style="display: inline;">P = 4, Q = 12, R = 5, S = 4</span>`,
                `<span style="display: inline;">P = 3, Q = 7, R = 7, S = 3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371904/Gate-cse-2022-question-32#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2022 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statement(s) is/are correct in the context of CPU scheduling?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Turnaround time includes waiting time</span>`,
                `<span style="display: inline;">The goal is to only maximize CPU utilization and minimize throughput</span>`,
                `<span style="display: inline;">Round-robin policy can be used even when the CPU time required by each of the processes is not known apriori</span>`,
                `<span style="display: inline;">Implementing preemptive scheduling needs hardware support</span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357526/gate-cse-2021-set-2-question-14#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2021 SET-2 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Three processes arrive at time zero with CPU bursts of 16, 20 and 10 milliseconds. If the scheduler has prior knowledge about the length of the CPU bursts, the minimum achievable average waiting time for these three processes in a non-preemptive scheduler (rounded to nearest integer) is _____________ milliseconds.</span>`,
            image: "",
            options: [],
            answer: "12",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357426/gate-cse-2021-set-1-question-25#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2021 SET-1 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Three CPU-bound tasks, with execution times of 15, 12 and 5 time units respectively arrive at times 0, t and 8, respectively. If the operating system implements a shortest remaining time first scheduling algorithm, what should be the value of t to have 4 context switches? Ignore the context switches at time 0 and at the end.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0 &lt; t &lt; 3</span>`,
                `<span style="display: inline;">t=0</span>`,
                `<span style="display: inline;">t &lt;= 3</span>`,
                `<span style="display: inline;">3 &lt; t &lt; 8</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331255/isro2020-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2020 | Operating System | ← Older Comments | ← Older Comments | Privacy Policy</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following algorithms defines time quantum?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">shortest job scheduling algorithm</span>`,
                `<span style="display: inline;">round robin scheduling algorithm</span>`,
                `<span style="display: inline;">priority scheduling algorithm</span>`,
                `<span style="display: inline;">multilevel queue scheduling algorithm</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331249/isro2020-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE 2020 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following set of processes, assumed to have arrived at time 0. Consider the CPU scheduling algorithms Shortest Job First (SJF) and Round Robin (RR). For RR, assume that the processes are scheduled in the order \\( P_1, P_2, P_3, P_4 \\). <br><br><img src="images/os-pyq-1/q50.jpg" style="max-width:100%; border:1px solid #ccc; border-radius: 4px; display:block; margin:10px auto;"><br>If the time quantum for RR is 4 ms, then the absolute value of the difference between the average turnaround times (in ms) of SJF and RR (round off to 2 decimal places is_______</span>`,
            image: "",
            options: [],
            answer: "5.25",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333181/gate2020-cs-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2020 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following four processes with arrival times (in milliseconds) and their length of CPU burst (in milliseconds) as shown below: <br><br><img src="images/os-pyq-1/q41.jpg" style="max-width:100%; border:1px solid #ccc; border-radius: 4px; display:block; margin:10px auto;"><br>These processes are run on a single processor using preemptive Shortest Remaining Time First scheduling algorithm. If the average waiting time of the processes is 1 millisecond, then the value of Z is __________.</span>`,
            image: "",
            options: [],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302807/gate2019-cs-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2019 | Operating System</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the set of processes with arrival time (in milliseconds). CPU burst time (in milliseconds), and priority (0 is the highest priority) shown below. None of the processes have I/O burst time. <br><br><img src="images/os-pyq-1/q43.jpg" style="max-width:100%; border:1px solid #ccc; border-radius: 4px; display:block; margin:10px auto;"><br>The average waiting time (in milliseconds) of all the processes using preemptive priority scheduling algorithm is __________</span>`,
            image: "",
            options: [],
            answer: "29",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118558/gate2017-2-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017 SET-2 | Operating System</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following CPU processes with arrival times (in milliseconds) and length of CPU burst (in milliseconds) as given below: <br><br><img src="images/os-pyq-1/q9.jpg" style="max-width:100%; border:1px solid #ccc; border-radius: 4px; display:block; margin:10px auto;"><br>If the pre-emptive shortest remaining time first scheduling algorithm is used to schedule the processes., then the average waiting time across all processes is ________ milliseconds.</span>`,
            image: "",
            options: [],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118304/gate2017-1-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017 SET-1 | Operating System | ← Older Comments | ← Older Comments | Privacy Policy</span></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-II)",
    date: "sep 08, 2026",
    questions: [

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-III)",
    date: "sep 08, 2026",
    questions: [

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-IV)",
    date: "sep 08, 2026",
    questions: [

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Algorithm(Asymptotic Notation-I)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an array <span>\\( A \\)</span> of integers of size <span>\\( n \\)</span>. The indices of <span>\\( A \\)</span> run from <span>\\( 1 \\)</span> to <span>\\( n \\)</span>. An algorithm is to be designed to check whether <span>\\( A \\)</span> satisfies the condition given below. <br/><br/><span>\\( \\forall i, j \\in\\{1, \\ldots, n-1\\} \\)</span> such that <span>\\( i&gt;j,(A[i+1]-A[i])&gt;(A[j+1]-A[j]) \\)</span> <br/><br/>Which one of the following gives the worst case time complexity of the fastest algorithm that can be designed for the problem?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta(n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(\\log (n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(n \\log (n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta\\left(n^{2}\\right) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523118/gate-cse-2026-set-2-question-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026
                        SET-2 | Algorithms</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following functions, where <span>\\( n \\)</span> is a positive integer. <br/><br/><span>\\( n^{1 / 3}, \\log (n), \\log (n!), 2^{\\log (n)} \\)</span><br/><br/> Which one of the following options lists the functions in increasing order of asymptotic growth rate?<br/> Note: Assume the base of log to be <span>\\( 2 \\)</span>.</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\log (n), n^{1 / 3}, 2^{\\log (n)}, \\log (n!) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n^{1 / 3}, \\log (n), \\log (n!), 2^{\\log (n)} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\log (n), n^{1 / 3}, \\log (n!), 2^{\\log (n)} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{\\log (n)}, n^{1 / 3}, \\log (n), \\log (n!) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523132/gate-cse-2026-set-2-question-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026
                        SET-2 | Algorithms</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given an integer array of size <span>\\( N \\)</span>, we want to check if the array is sorted (in either ascending or descending order). An algorithm solves this problem by making a single pass through the array and comparing each element of the array only with its adjacent elements. The worst-case time complexity of this algorithm is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">both <span>\\( \\mathrm{O}(N) \\)</span> and <span>\\( \\Omega(N) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\mathrm{O}(N) \\)</span> but not <span>\\( \\Omega(N) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Omega(N) \\)</span> but not <span>\\( \\mathrm{O}(N) \\)</span></span>`,
                `<span style="display: inline;">neither <span>\\( \\mathrm{O}(N) \\)</span> nor <span>\\( \\Omega(N) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422835/gate-cse-2024-set-1-question-7#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024
                        SET-1 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider functions Function 1 and Function 2 expressed in pseudocode as follows:<br/><img src="images/twt-algo/q44.jpg"/><br/>Let <span>\\( f_1(n) \\)</span> and <span>\\( f_2(n) \\)</span> denote the number of times the statement <span>\\( "x = x + 1" \\)</span> is executed in Function 1 and Function 2, respectively.<br/> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f_1(n)\\in \\Theta (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in o (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in \\omega (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in O (n) \\)</span></span>`
            ],
            answer: ["A", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399267/gate-cse-2023-question-44#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2023 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( f \\)</span> and <span>\\( g \\)</span> be functions of natural numbers given by <span>\\( f(n)=n \\)</span> and <span>\\( g(n)=n^2 \\)</span>.<br/> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f \\in O(g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in \\Omega (g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in o(g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in \\Theta (g) \\)</span></span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399292/gate-cse-2023-question-19#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2023 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is TRUE for all positive functions <span>\\( f(n) \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f(n^2)=\\theta (f(n)^2) \\)</span>, where <span>\\( f(n) \\)</span> is a polynomial</span>`,
                `<span style="display: inline;"><span>\\( f(n^2)=o (f(n)^2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f(n^2)=O (f(n)^2) \\)</span>, where <span>\\( f(n) \\)</span> is an exponential function</span>`,
                `<span style="display: inline;"><span>\\( f(n^2)=\\Omega (f(n)^2) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371935/Gate-cse-2022-question-1#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2022 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following three functions. <br/><br/> <span>\\( f_1=10^n\\; f_2=n^{\\log n}\\;f_3=n^{\\sqrt {n}} \\)</span><br/> <br/>Which one of the following options arranges the functions in the increasing order of asymptotic growth rate?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f_3, f_2, f_1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_2, f_1, f_3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1, f_2, f_3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_2, f_3, f_1 \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357449/gate-cse-2021-set-1-question-3#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2021
                        SET-1 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the complexity of the following code?
<pre style="border: 1px solid #ccc; padding: 15px; background: #f8f9fa; border-radius: 4px; font-weight: bold; font-family: monospace; overflow-x: auto; font-size: 14px; margin-top: 10px; margin-bottom: 10px;"><code>sum = 0;
for (i = 1; i &lt;= n; i *= 2)
    for (j = 1; j &lt;= n; j++)
        sum++;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( O\\left(n^{2}\\right) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( O(n \\log n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( O(n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( O(n \\log n \\log n) \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331364/isro2020-36" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: ISRO CSE
                        2020 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">There are n unsorted arrays: <span>\\( A_1,A_2,...,A_n \\)</span>. Assume that n is odd. Each of <span>\\( A_1,A_2,...,A_n \\)</span> contains n distinct elements. There are no common elements between any two arrays. The worst-case Asymptotic Notation of computing the median of the medians of <span>\\( A_1,A_2,...,A_n \\)</span> is ________ .</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( O(n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( O(n \\log n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( O(n^2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Omega(n^2 \\log n) \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302811/gate2019-cs-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2019 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following C function <pre><code> int fun (int n) { int i, j; for (i = 1; i &lt; = n; i++) { for (j = 1 ; j &lt; n ; j+=i) { printf ("%d %d , i, j ) ; } } }</code></pre> Asymptotic Notation of fun in terms of <span>\\( \\theta \\)</span> notation is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\theta (n\\sqrt{n}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\theta (n^{2}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\theta (n logn) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\theta (n^{2} logn) \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118283/gate2017-2-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-2 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Match the algorithms with their time complexities: <br/><img src="images/twt-algo/q16.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">P-(iii),Q-(iv), R-(i), S-(ii)</span>`,
                `<span style="display: inline;">P-(iv),Q-(iii), R-(i), S-(ii)</span>`,
                `<span style="display: inline;">P-(iii),Q-(iv), R-(ii), S-(i)</span>`,
                `<span style="display: inline;">P-(iv),Q-(iii), R-(ii), S-(i)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118156/gate-cse-2017-set-2-question-03#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE
                        CSE 2017 SET-2 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following functions from positive integers to real numbers:<br/> <br/><span>\\( 10,\\sqrt{n},n, log_{2}n,\\frac{100}{n} \\)</span>.<br/><br/> The CORRECT arrangement of the above functions in increasing order of asymptotic complexity is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( log_{2}n,\\frac{100}{n}, 10,\\sqrt{n},n \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{100}{n}, 10,log_{2}n, \\sqrt{n}, n \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 10, \\frac{100}{n}, \\sqrt{n}, log_{2}n, n \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{100}{n}, log_{2}n, 10, \\sqrt{n}, n \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118703/gate2017-1-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2017
                        SET-1 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In an adjacency list representation of an undirected simple graph G = (V,E), each edge (u,v) has two adjacency list entries: [v] in the adjacency list of u, and [u] in the adjacency list of v. These are called twins of each other. A twin pointer is a pointer from an adjacency list entry to its twin. If |E|=m and |V|=n, and the memory size is not a constraint, what is the Asymptotic Notation of the most efficient algorithm to set the twin pointer in each entry in each adjacency list?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta (n^{2}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta (n+m) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta (m^{2}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta (n^{4}) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39620/gate2016-2-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016
                        SET-2 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The given diagram shows the flowchart for a recursive function A(n). Assume that all statements, except for the recursive calls,have O(1) Asymptotic Notation. If the worst case Asymptotic Notation of this functionis <span>\\( O(n^{\\alpha }) \\)</span>, then the least possible value(accurate upto two decimal positions) of <span>\\( \\alpha \\)</span> is .<br/><img src="images/twt-algo/q39.jpg"/></span>`,
            image: "",
            options: [
            ],
            answer: "",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39581/gate2016-2-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016
                        SET-2 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a carry lookahead adder for adding two n-bit integers,built using gates of fan-in at most two. The time to perform addition using this adder is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta (1) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta (log(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta \\sqrt{n} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta (n) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39688/gate2016-1-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2016
                        SET-1 | Algorithm</span></div>`
        },


    ]
});