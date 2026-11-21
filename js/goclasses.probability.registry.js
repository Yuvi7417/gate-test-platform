registerTest({
    "name": "DPP 45 - Engineering Mathematics (Axioms & Conditional Probability - Part 1)",
    "testLabel": "DPP 45",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"583\" data-start=\"41\">In the anime <em data-end=\"84\" data-start=\"68\">Jujutsu Kaisen</em>, Kinji Hakari has a Domain Expansion called Idle Death Gamble. His domain works like a gambling machine. It does not directly attack the opponent, but it gives Hakari a chance to hit a jackpot. If Hakari hits a jackpot, he gains a powerful immortal state for $4$ minutes and $11$ seconds. In base mode, the probability of hitting a jackpot is only $1/239$. However, after Hakari has already hit a jackpot, he may enter roll mode, where the chance of hitting another jackpot increases to $75\\%=3/4$.</p><p data-end=\"866\" data-start=\"585\">Before one activation of Idle Death Gamble, suppose the probability that Hakari is in roll mode is $2/5$, and the probability that he is in base mode is $3/5$. Given that Hakari hits a jackpot on this activation, find the probability that he was in roll mode before the activation.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$239/241$<br/></span>",
                "<span style=\"display: inline;\">$3/4$<br/></span>",
                "<span style=\"display: inline;\">$2/5$<br/></span>",
                "<span style=\"display: inline;\">$1/241$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530727\"></a><div itemprop=\"text\"><p data-path-to-node=\"2,0,0\">Let,</p><ul><li><p data-path-to-node=\"2,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,0,0\">$R$</b>: The event that Hakari is in roll mode.</p></li><li><p data-path-to-node=\"2,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,1,0\">$B$</b>: The event that Hakari is in base mode.</p></li><li><p data-path-to-node=\"2,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,2,0\">$J$</b>: The event that Hakari hits a jackpot.</p></li></ul><p>Given,</p><div><ul><li><p data-path-to-node=\"4,0,0\">The prior probability of being in roll mode: $P(R) = \\frac{2}{5}$</p></li><li><p data-path-to-node=\"4,1,0\">The prior probability of being in base mode: $P(B) = \\frac{3}{5}$</p></li><li><p data-path-to-node=\"4,2,0\">The probability of a jackpot given roll mode: $P(J \\mid R) = \\frac{3}{4}$</p></li><li><p data-path-to-node=\"4,3,0\">The probability of a jackpot given base mode: $P(J \\mid B) = \\frac{1}{239}$</p></li></ul><p style=\"text-align:center\"><img alt=\"\" height=\"533\" src=\"https://cdn.mathpix.com/snip/images/zQ4ErkKMjU0w2Kk0d8GCCV_dODM2gGzujPRXzeUXGAY.original.fullsize.png\" width=\"711\"/></p><p data-path-to-node=\"4,3,0\">We need to find $P(R \\mid J)$, which is the probability he was in roll mode given that he hit a jackpot.</p><p data-path-to-node=\"4,3,0\">Using Bayes Theorem :</p><p data-path-to-node=\"4,3,0\">$$ P(R \\mid J) = \\frac{P(J \\mid R) \\cdot P(R)}{P(J)} $$</p><p data-path-to-node=\"8\">Using the Law of Total Probability:</p><p>$$ P(J) = P(J \\mid R) \\cdot P(R) + P(J \\mid B) \\cdot P(B) $$</p><p data-path-to-node=\"10\">Substitute the given values into the equation:</p><p>$$ \\Rightarrow P(J) = \\left(\\frac{3}{4} \\cdot \\frac{2}{5}\\right) + \\left(\\frac{1}{239} \\cdot \\frac{3}{5}\\right) $$</p><p data-path-to-node=\"12\">Now, substitute $P(J)$ back into the Bayes' Theorem formula:</p><p>$$ P(R \\mid J) = \\frac{\\frac{3}{4} \\cdot \\frac{2}{5}}{\\left(\\frac{3}{4} \\cdot \\frac{2}{5}\\right) + \\left(\\frac{1}{239} \\cdot \\frac{3}{5}\\right)} = \\frac{\\frac{1}{2}}{\\frac{1}{2} + \\frac{1}{239}} = \\frac{239}{239 + 2} $$</p><p>$$ \\boxed {\\therefore P(R \\mid J) = \\frac{239}{241}} $$</p><p data-path-to-node=\"20\">The probability that he was in roll mode before the activation is $\\frac{239}{241}$.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530724/go-classes-dpp-gate-cs-da-probability-%26-statistics-bayes-theorem\" target=\"_blank\">GATE Overflow #530724</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"675\" data-start=\"455\">Let $A$, $B$, and $C$ be events such that $P(A)=a$, $P(B\\mid A)=b$, $P(B\\mid A^c)=c$, $P(C\\mid A\\cap B)=d$, and $P(C\\mid A^c\\cap B)=e$. Suppose $C$ can occur only when $B$ occurs. Find $P(A\\mid B\\cap C)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{abd}{abd+(1-a)ce}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{ad}{ad+(1-a)e}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{ab}{ab+(1-a)c}$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538242\"></a><div itemprop=\"text\"><p>can be easily done with tree diagram<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17646542446659823850\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530330/go-classes-dpp-gate-cs-da-probability-%26-statistics-conditional-probability\" target=\"_blank\">GATE Overflow #530330</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"360\" data-start=\"0\">A security system receives $12$ independent login attempts in one minute. Each attempt is routed randomly and equally likely to one of $8$ identical servers. Let $X_i$ be the number of login attempts handled by server $i$, and let $M=\\max(X_1,X_2,\\ldots,X_8)$. What is the probability that the busiest server handles exactly $2$ login attempts?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{8!}{8^{12}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{12!}{(2!)^6 8^{12}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{28\\cdot 12!}{(2!)^6 8^{12}}$<br/><br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"530255\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">Since each of the $12$ login attempts can independently go to any of the $8$ servers, the total number of ways to route all attempts is:</p><p>$$\\text{Total ways} = 8^{12}$$</p><p> </p><p data-path-to-node=\"5\">We are given that the maximum number of login attempts any single server handles is exactly $2$ ($M = 2$). This means no server can have $3$ or more attempts.</p><p data-path-to-node=\"6\">Let $n_k$ be the number of servers that receive exactly $k$ attempts. For a maximum of $2$, the possible values for $k$ are $0$, $1$, and $2$.</p><p data-path-to-node=\"6\">We must satisfy two conditions:</p><ol data-path-to-node=\"7\" start=\"1\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">Total servers:</b> $n_0 + n_1 + n_2 = 8$</p></li><li><p data-path-to-node=\"7,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,1,0\">Total login attempts:</b> $0 \\cdot n_0 + 1 \\cdot n_1 + 2 \\cdot n_2 = 12 \\implies n_1 + 2n_2 = 12$</p></li></ol><p data-path-to-node=\"8\">By testing possible integer values for $n_2$ (which cannot exceed 6 since $6 \\times 2 = 12$), we find exactly three valid distribution patterns:</p><p data-path-to-node=\"9\"><b data-index-in-node=\"0\" data-path-to-node=\"9\">Case 1: 6 servers handle 2 attempts, 2 servers handle 0 attempts</b></p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Sequence:</b> $\\{2, 2, 2, 2, 2, 2, 0, 0\\}$ ($n_2=6, n_1=0, n_0=2$)</p></li><li><p data-path-to-node=\"10,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,1,0\">Ways to choose which servers get 2 vs 0:</b> $\\binom{8}{6} = \\frac{8!}{6!2!} = 28$ ways.</p></li><li><p data-path-to-node=\"10,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,2,0\">Ways to distribute the 12 attempts to those specific servers:</b> $\\frac{12!}{(2!)^6(0!)^2}$</p></li><li><p data-path-to-node=\"10,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,3,0\">Total ways for Case 1:</b> $28 \\cdot \\frac{12!}{(2!)^6}$</p><p data-path-to-node=\"10,3,0\"><i data-index-in-node=\"51\" data-path-to-node=\"10,3,0\">(Note: Option C exactly matches this single case, but ignores the other valid cases below).</i></p></li></ul><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">Case 2: 5 servers handle 2 attempts, 2 handle 1 attempt, 1 handles 0 attempts</b></p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,0,0\">Sequence:</b> $\\{2, 2, 2, 2, 2, 1, 1, 0\\}$ ($n_2=5, n_1=2, n_0=1$)</p></li><li><p data-path-to-node=\"12,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,0\">Ways to assign these server capacities:</b> $\\frac{8!}{5!2!1!} = 168$ ways.</p></li><li><p data-path-to-node=\"12,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,0\">Ways to distribute the 12 attempts:</b> $\\frac{12!}{(2!)^5(1!)^2(0!)^1} = \\frac{12!}{(2!)^5}$</p></li><li><p data-path-to-node=\"12,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,3,0\">Total ways for Case 2:</b> $168 \\cdot \\frac{12!}{(2!)^5}$</p><p data-path-to-node=\"12,3,0\"><i data-index-in-node=\"52\" data-path-to-node=\"12,3,0\">(To give it a common denominator with Case 1, multiply by $2/2$)</i>: $336 \\cdot \\frac{12!}{(2!)^6}$</p></li></ul><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Case 3: 4 servers handle 2 attempts, 4 handle 1 attempt</b></p><ul data-path-to-node=\"14\"><li><p data-path-to-node=\"14,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,0,0\">Sequence:</b> $\\{2, 2, 2, 2, 1, 1, 1, 1\\}$ ($n_2=4, n_1=4, n_0=0$)</p></li><li><p data-path-to-node=\"14,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,1,0\">Ways to assign these server capacities:</b> $\\binom{8}{4} = \\frac{8!}{4!4!} = 70$ ways.</p></li><li><p data-path-to-node=\"14,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,2,0\">Ways to distribute the 12 attempts:</b> $\\frac{12!}{(2!)^4(1!)^4} = \\frac{12!}{(2!)^4}$</p></li><li><p data-path-to-node=\"14,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,3,0\">Total ways for Case 3:</b> $70 \\cdot \\frac{12!}{(2!)^4}$</p><p data-path-to-node=\"14,3,0\"><i data-index-in-node=\"51\" data-path-to-node=\"14,3,0\">(To give it a common denominator with Case 1, multiply by $4/4$)</i>: $280 \\cdot \\frac{12!}{(2!)^6}$</p></li></ul><div><br/> </div><div><p data-path-to-node=\"16\">Now, To get the total number of favorable outcomes, we add the ways from all three valid cases:</p><p>$$\\text{Total Favorable Ways} = \\left(28 + 336 + 280\\right) \\cdot \\frac{12!}{(2!)^6} = 644 \\cdot \\frac{12!}{(2!)^6}$$</p><p data-path-to-node=\"18\">Finally, we divide by the total possible outcomes ($8^{12}$) to get the probability:</p><p>$$\\boxed{P(M = 2) = \\frac{644 \\cdot 12!}{(2!)^6 \\cdot 8^{12}}}$$</p><p> </p><p><b data-index-in-node=\"0\" data-path-to-node=\"22\">$\\therefore$ Correct Answer:</b> <b data-index-in-node=\"16\" data-path-to-node=\"22\">D. None of these</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530254/go-classes-dpp-gate-cs-da-probability-occupancy-problem-in-discrete-probability\" target=\"_blank\">GATE Overflow #530254</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"169\" data-start=\"0\">For a sample space $S$ containing three events $A$, $B$, and $C$, suppose $P(A)=0.6$, $P(B)=0.5$, and $P(C)=0.4$. Which of the following can <strong>NOT</strong> be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Events $A$ and $B$ are independent, and events $B$ and $C$ are mutually exclusive.<br/></span>",
                "<span style=\"display: inline;\">Events $A$ and $C$ are mutually exclusive, and events $A$ and $B$ are independent.<br/></span>",
                "<span style=\"display: inline;\">Events $A$ and $B$ are mutually exclusive, and events $B$ and $C$ are independent.<br/></span>",
                "<span style=\"display: inline;\">Events $A$ and $C$ are independent, and events $B$ and $C$ are mutually exclusive.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"530249\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><strong>Evaluating the options : </strong></p><ul><li><b>A:</b> If $A$ and $B$ are independent, then $P(A\\cap B)=P(A)P(B)=0.6(0.5)=0.3$. If $B$ and $C$ are mutually exclusive, then $P(B\\cap C)=0$. This can be possible.<br/> </li><li data-end=\"935\" data-start=\"715\"><strong>B:</strong> If $A$ and $C$ are mutually exclusive, then we need $P(A)+P(C)\\leq 1$. Since $0.6+0.4=1$, this is possible. Also, $A$ and $B$ can still be independent with $P(A\\cap B)=0.6(0.5)=0.3$. This can be possible.<br/> </li><li data-end=\"1064\" data-start=\"937\"><strong>C:</strong> If $A$ and $B$ are mutually exclusive, then we need $P(A)+P(B)\\leq 1$. But $0.6+0.5=1.1&gt;1$. This is impossible.<br/> </li><li data-end=\"1228\" data-start=\"1066\"><strong>D:</strong> If $A$ and $C$ are independent, then $P(A\\cap C)=0.6(0.4)=0.24$. If $B$ and $C$ are mutually exclusive, then $P(B\\cap C)=0$. This can be possible.</li></ul><p data-end=\"1288\" data-start=\"1230\">Therefore, the statement that can NOT be true is option <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530247/go-classes-dpp-gate-cs-da-probability-events-in-probability\" target=\"_blank\">GATE Overflow #530247</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"448\" data-start=\"131\">An analyst is given an anonymized report of the final over of a T20 match. The bowler’s name is hidden. Before seeing the report, the analyst believes the bowler was a death-over specialist with probability $2/7$, a regular seamer with probability $3/7$, and a part-time bowler with probability $2/7$.</p><p data-end=\"526\" data-start=\"450\">Let $A$ be the event that the first three legal balls cost at most $2$ runs.</p><p data-end=\"635\" data-start=\"528\">Let $C$ be the event that after the third legal ball, the captain moves a fielder into a catching position.</p><p data-end=\"718\" data-start=\"637\">Let $W$ be the event that exactly one wicket falls in the last three legal balls.</p><p data-end=\"758\" data-start=\"720\">The following probabilities are known:</p><p data-end=\"847\" data-start=\"760\">For a death-over specialist, $P(A)=3/4$, $P(C\\mid A)=2/5$, and $P(W\\mid A\\cap C)=5/12$.</p><p data-end=\"928\" data-start=\"849\">For a regular seamer, $P(A)=2/3$, $P(C\\mid A)=3/8$, and $P(W\\mid A\\cap C)=1/4$.</p><p data-end=\"1011\" data-start=\"930\">For a part-time bowler, $P(A)=1/2$, $P(C\\mid A)=1/3$, and $P(W\\mid A\\cap C)=1/6$.</p><p data-end=\"1159\" data-start=\"1013\">The report shows that $A$, $C$, and $W$ all occurred. Given this information, what is the probability that the bowler was a death-over specialist?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2/7$<br/></span>",
                "<span style=\"display: inline;\">$27/71$<br/></span>",
                "<span style=\"display: inline;\">$36/71$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530245\"></a><div itemprop=\"text\"><p>Let $D$ = Death-over specialist, $R$ = Regular seamer, $P$ = Part-time bowler.</p><p>Let $E$ = The combined event that $A$, $C$, and $W$ happen in sequence ($A \\cap C \\cap W$).</p><p data-path-to-node=\"3\">Conditional probability is the probability of an event occurring given that another event has already occurred. Because the events $A$, $C$, and $W$ happen sequentially, we use the multiplication rule for conditional probability to find the likelihood of the entire sequence ($E$) occurring for a specific bowler.</p><p data-path-to-node=\"4\">For any bowler, the conditional probability of the sequence is:</p><p>$$P(E \\mid \\text{Bowler}) = P(A) \\cdot P(C \\mid A) \\cdot P(W \\mid A \\cap C)$$</p><p data-path-to-node=\"6\">Let's calculate this conditional probability for each type of bowler:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">For $D$:</b> $P(E \\mid D) = (3/4) \\cdot (2/5) \\cdot (5/12) = \\mathbf{1/8}$</p></li><li><p data-path-to-node=\"7,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,1,0\">For $R$:</b> $P(E \\mid R) = (2/3) \\cdot (3/8) \\cdot (1/4) = \\mathbf{1/16}$</p></li><li><p data-path-to-node=\"7,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,2,0\">For $P$:</b> $P(E \\mid P) = (1/2) \\cdot (1/3) \\cdot (1/6) = \\mathbf{1/36}$</p></li></ul><div><p data-path-to-node=\"9\">Using the <b data-index-in-node=\"4\" data-path-to-node=\"9\">Law of Total Probability</b> we will find the overall probability of the sequence $E$ happening at all, regardless of who is bowling. We will do this by summing the probability of $E$ happening under every possible, mutually exclusive scenario (the three bowler types).</p><p data-path-to-node=\"10\">The formula is:</p><p>$$P(E) = P(D)P(E \\mid D) + P(R)P(E \\mid R) + P(P)P(E \\mid P)$$</p><p data-path-to-node=\"12\">We plug in our initial priors ($2/7, 3/7, 2/7$) and the conditional probabilities we just calculated:</p><p>$$P(E) = \\left(\\frac{2}{7} \\cdot \\frac{1}{8}\\right) + \\left(\\frac{3}{7} \\cdot \\frac{1}{16}\\right) + \\left(\\frac{2}{7} \\cdot \\frac{1}{36}\\right)$$</p><p>$$P(E) = \\frac{2}{56} + \\frac{3}{112} + \\frac{2}{252}$$</p><p>$$P(E) = \\frac{1}{28} + \\frac{3}{112} + \\frac{1}{126}$$</p><p data-path-to-node=\"16\"> </p><p data-path-to-node=\"20\">Now using Bayes formula we combine our Prior, our Conditional Probability (Likelihood), and the Law of Total Probability:</p><p>$$P(D \\mid E) = \\frac{P(D)P(E \\mid D)}{P(E)}$$</p><p data-path-to-node=\"22\">We have all the pieces now. We take the specific probability for the Death-over specialist (the numerator) and divide it by the Total Probability (the denominator):</p><p>$$P(D \\mid E) = \\frac{\\frac{1}{28}}{\\frac{1}{28} + \\frac{3}{112} + \\frac{1}{126}} = \\boxed{\\mathbf{\\frac{36}{71}}}$$<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"659\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9952367401890874335\" width=\"879\"/></p><p> </p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530238/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #530238</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"0\">A tennis player serves to her opponent's forehand $70\\%$ of the time and to the backhand $30\\%$ of the time. She wins the point $60\\%$ of the time when serving to the forehand, and $40\\%$ of the time when serving to the backhand. She just served and won the point. What is the probability she served to the forehand?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{7}{9}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{9}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530237\"></a><div itemprop=\"text\"><p data-path-to-node=\"3\">Let,</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">$F$</b>: Event that the serve is to the Forehand. $P(F) = 0.70$</p></li><li><p data-path-to-node=\"4,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">$B$</b>: Event that the serve is to the Backhand. $P(B) = 0.30$</p></li><li><p data-path-to-node=\"4,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,2,0\">$W$</b>: Event that she Wins the point.</p></li></ul><p data-path-to-node=\"5\">Given:</p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">$P(W|F)$</b>: Probability of winning given a serve to the forehand = $0.60$</p></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">$P(W|B)$</b>: Probability of winning given a serve to the backhand = $0.40$</p></li></ul><div> </div><div>We need to find the probability that she served to the forehand, <i data-index-in-node=\"65\" data-path-to-node=\"8\">given</i> that we know she won the point i.e, <b data-index-in-node=\"122\" data-path-to-node=\"8\">$P(F|W)$</b>.</div><div> </div><div>Using Bayes Theorem,</div><div><p>$$P(F|W) = \\frac{P(W|F) \\cdot P(F)}{P(W)}$$</p><p data-path-to-node=\"12\">First, we need to find the total probability of winning, <b data-index-in-node=\"57\" data-path-to-node=\"12\">$P(W)$</b>, which can happen in two ways (serving forehand OR serving backhand):</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">$P(\\text{Win via Forehand}) = P(W|F) \\cdot P(F) = 0.60 \\cdot 0.70 = \\mathbf{0.42}$</p></li><li><p data-path-to-node=\"13,1,0\">$P(\\text{Win via Backhand}) = P(W|B) \\cdot P(B) = 0.40 \\cdot 0.30 = \\mathbf{0.12}$</p></li></ul><p data-path-to-node=\"14\">Total probability of winning:</p><p>$$P(W) = 0.42 + 0.12 = \\mathbf{0.54}$$</p><p data-path-to-node=\"16\">Now, plug everything back into the main formula to find the proportion of those wins that came from forehand serves:</p><p>$$P(F|W) = \\frac{0.42}{0.54}= \\boxed{\\mathbf{\\frac{7}{9}}}$$</p><p> </p><p style=\"text-align:center\"><img alt=\"\" height=\"644\" src=\"https://cdn.mathpix.com/snip/images/fjsi6xndco-hhXr8Qa4HlmP_XJ5SUyxuH6ZkubYYgOE.original.fullsize.png\" width=\"859\"/></p><p> </p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530236/go-classes-dpp-gate-cs-da-probability-bayes-theorem\" target=\"_blank\">GATE Overflow #530236</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"504\" data-start=\"73\">A class has $120$ students. There are $64$ students in club $C$, $58$ students in club $T$, and $52$ students in club $M$. Also, $30$ students are in both $C$ and $T$, $26$ students are in both $C$ and $M$, and $24$ students are in both $T$ and $M$. These pairwise counts include students who may be in all three clubs. For a randomly chosen student, what is the range of possible values for $p=P((C\\cup T)\\cap M^c)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{7}{20}\\le p\\le \\frac{11}{20}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{47}{60}\\le p\\le \\frac{59}{60}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3}\\le p\\le \\frac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{10}\\le p\\le \\frac{7}{12}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530104\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Given Information : </b></p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">Total number of students, $|U| = 120$</p></li><li><p data-path-to-node=\"2,1,0\">$|C| = 64$</p></li><li><p data-path-to-node=\"2,2,0\">$|T| = 58$</p></li><li><p data-path-to-node=\"2,3,0\">$|M| = 52$</p></li><li><p data-path-to-node=\"2,4,0\">$|C \\cap T| = 30$</p></li><li><p data-path-to-node=\"2,5,0\">$|C \\cap M| = 26$</p></li><li><p data-path-to-node=\"2,6,0\">$|T \\cap M| = 24$</p></li></ul><p data-path-to-node=\"3\">Let $x$ be the number of students in all three clubs: $x = |C \\cap T \\cap M|$</p><p data-path-to-node=\"3\"> </p><p data-path-to-node=\"4\">We are looking for the probability of the event $(C \\cup T) \\cap M^c$. This represents the set of students who are in club $C$ or club $T$ (or both), but <b data-index-in-node=\"190\" data-path-to-node=\"4\">not</b> in club $M$. The number of students in this set is:</p><p>$$|(C \\cup T) \\cap M^c| = |C \\cup T| - |(C \\cup T) \\cap M|$$</p><p data-path-to-node=\"6\">First, let's find $|C \\cup T|$:</p><p>$$|C \\cup T| = |C| + |T| - |C \\cap T|$$</p><p>$$|C \\cup T| = 64 + 58 - 30 = 92$$</p><p data-path-to-node=\"9\">Next, let's find $|(C \\cup T) \\cap M|$: Using the distributive property of sets, this is equal to $|(C \\cap M) \\cup (T \\cap M)|$.</p><p>$$|(C \\cap M) \\cup (T \\cap M)| = |C \\cap M| + |T \\cap M| - |(C \\cap M) \\cap (T \\cap M)|$$</p><p data-path-to-node=\"11\">Notice that $(C \\cap M) \\cap (T \\cap M)$ is exactly the intersection of all three sets, which we defined as $x$.</p><p>$$|(C \\cup T) \\cap M| = 26 + 24 - x = 50 - x$$</p><p data-path-to-node=\"13\">Now, substitute these back into our target set equation:</p><p>$$|(C \\cup T) \\cap M^c| = 92 - (50 - x)$$</p><p>$$|(C \\cup T) \\cap M^c| = 42 + x$$</p><p data-path-to-node=\"16\">The probability $p$ is the size of this set divided by the total number of students:</p><p>$$p = \\frac{42 + x}{120}$$</p><p> </p><p data-path-to-node=\"18\">To find the range of $p$, we need to find the minimum and maximum possible values for $x$. Every distinct region in a Venn diagram must have a non-negative number of students ($\\ge 0$). Let's check the constraints this puts on $x$:</p><ul data-path-to-node=\"19\"><li><p data-path-to-node=\"19,0,0\">The number of students in all three clubs must be at least 0:$x \\ge 0$</p></li><li><p data-path-to-node=\"19,1,0\">The number of students in $T \\cap M$ but not $C$ must be non-negative:$|T \\cap M| - x \\ge 0 \\implies 24 - x \\ge 0 \\implies x \\le 24$</p></li><li><p data-path-to-node=\"19,2,0\">The number of students in $C \\cap M$ but not $T$:$26 - x \\ge 0 \\implies x \\le 26$</p></li><li><p data-path-to-node=\"19,3,0\">The number of students in $C \\cap T$ but not $M$:$30 - x \\ge 0 \\implies x \\le 30$</p></li><li><p data-path-to-node=\"19,4,0\">Students only in $M$:$|M| - |C \\cap M| - |T \\cap M| + x \\ge 0 \\implies 52 - 26 - 24 + x \\ge 0 \\implies 2 + x \\ge 0 \\implies x \\ge -2$ (We already know $x \\ge 0$)</p></li></ul><p data-path-to-node=\"20\">The most restrictive bounds on $x$ are <b data-index-in-node=\"37\" data-path-to-node=\"20\">$0 \\le x \\le 24$</b>.</p><p data-path-to-node=\"20\"> </p><p data-path-to-node=\"21\">Now plug the minimum and maximum values of $x$ into our probability equation:</p><ul data-path-to-node=\"22\"><li><p data-path-to-node=\"22,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"22,0,0\">Minimum $p$</b> (when $x = 0$):</p><p>$$p_{min} = \\frac{42 + 0}{120} = \\frac{42}{120} = \\frac{7}{20}$$</p></li><li><p data-path-to-node=\"22,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"22,1,0\">Maximum $p$</b> (when $x = 24$):</p><p>$$p_{max} = \\frac{42 + 24}{120} = \\frac{66}{120} = \\frac{11}{20}$$</p></li></ul><p data-path-to-node=\"23\">Therefore, the range of possible values for $p$ is:</p><p>$$\\boxed{\\frac{7}{20} \\le p \\le \\frac{11}{20}}$$<br/> </p><p style=\"text-align:center\"><img alt=\"\" src=\"https://cdn.mathpix.com/snip/images/kxvhtYi-gWHUz354xYTsTOeLkrGr3XRzItR9yDN_n-I.original.fullsize.png\" style=\"max-width: 100%;\" width=\"528\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530102/go-classes-dpp-gate-cs-da-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #530102</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"864\" data-start=\"125\">In a professional league, $60%$ of players are in Group A and $40%$ are in Group B. In Group A, $2%$ actually use an illegal drug, $8%$ use a legal supplement that can affect the test, and $90%$ use neither. In Group B, $7%$ actually use the illegal drug, $13%$ use the legal supplement, and $80%$ use neither. No player is in more than one of these three categories. A player is chosen at random and given a screening test $T$. If $T$ is positive, the sample is sent to Lab $L$ with probability $\\frac34$ and to Lab $M$ with probability $\\frac14$ for confirmation. The lab choice is independent of the player type. A player is reported positive only if both the screening test and the confirmation test are positive.</p><ul><li data-end=\"1127\" data-start=\"866\">For an actual drug user, $P(T+)=0.96$, $P(L+\\mid T+)=0.93$, and $P(M+\\mid T+)=0.88$. <br/> </li><li data-end=\"1127\" data-start=\"866\">For a legal-supplement user, $P(T+)=0.18$, $P(L+\\mid T+)=0.40$, and $P(M+\\mid T+)=0.55$. <br/> </li><li data-end=\"1127\" data-start=\"866\">For a player using neither, $P(T+)=0.03$, $P(L+\\mid T+)=0.12$, and $P(M+\\mid T+)=0.20$.</li></ul><p data-end=\"1258\" data-start=\"1129\">Given that a randomly chosen player is reported positive, what is the probability that the player actually uses the illegal drug?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.754$<br/></span>",
                "<span style=\"display: inline;\">$0.776$<br/></span>",
                "<span style=\"display: inline;\">$0.842$<br/></span>",
                "<span style=\"display: inline;\">$0.881$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530101\"></a><div itemprop=\"text\"><p data-path-to-node=\"3\">First, let's find the overall probability of a randomly chosen player belonging to each of the three categories: Drug User ($D$), Supplement User ($S$), or Neither ($N$).</p><p data-path-to-node=\"4\">We are given that $60\\%$ $(0.60)$ of players are in Group A and $40\\%$ $(0.40)$ are in Group B. We use the law of total probability to combine the percentages from both groups:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,0\">Probability of an actual drug user ($D$):</b></p><p data-path-to-node=\"5,0,0\">$P(D) = P(D|A)P(A) + P(D|B)P(B)$</p><p data-path-to-node=\"5,0,0\">$P(D) = (0.02)(0.60) + (0.07)(0.40) = 0.012 + 0.028 = \\mathbf{0.040}$</p></li><li><p data-path-to-node=\"5,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,1,0\">Probability of a supplement user ($S$):</b></p><p data-path-to-node=\"5,1,0\">$P(S) = P(S|A)P(A) + P(S|B)P(B)$</p><p data-path-to-node=\"5,1,0\">$P(S) = (0.08)(0.60) + (0.13)(0.40) = 0.048 + 0.052 = \\mathbf{0.100}$</p></li><li><p data-path-to-node=\"5,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,2,0\">Probability of a player using neither ($N$):</b></p><p data-path-to-node=\"5,2,0\">$P(N) = P(N|A)P(A) + P(N|B)P(B)$</p><p data-path-to-node=\"5,2,0\">$P(N) = (0.90)(0.60) + (0.80)(0.40) = 0.540 + 0.320 = \\mathbf{0.860}$</p></li></ul><p data-path-to-node=\"6\"><i data-index-in-node=\"0\" data-path-to-node=\"6\">(Self-check: $0.04 + 0.10 + 0.86 = 1.00$. The probabilities sum to $1$.)</i></p><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"9\">Now, A player is <b data-index-in-node=\"12\" data-path-to-node=\"9\">reported positive ($R+$)</b> only if the initial screening test ($T+$) is positive AND the subsequent lab confirmation ($L+$ or $M+$) is also positive.</p><p data-path-to-node=\"9\">Since Lab $L$ is chosen $75\\%$ ($\\frac{3}{4}$) of the time and Lab $M$ is chosen $25\\%$ ($\\frac{1}{4}$) of the time, the formula for a reported positive for any category $C$ is:</p><p>$$P(R+ | C) = P(T+ | C) \\times [P(L)P(L+ | T+, C) + P(M)P(M+ | T+, C)]$$</p><p data-path-to-node=\"11\">Let's calculate this for each type of player:</p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,0,0\">For an actual drug user ($D$):</b></p><p>$$P(R+ | D) = 0.96 \\times [(0.75 \\times 0.93) + (0.25 \\times 0.88)]$$</p><p>$$P(R+ | D) = 0.96 \\times [0.6975 + 0.22]$$</p><p>$$P(R+ | D) = 0.96 \\times 0.9175 = \\mathbf{0.8808}$$</p></li><li><p data-path-to-node=\"12,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,0\">For a legal-supplement user ($S$):</b></p><p>$$P(R+ | S) = 0.18 \\times [(0.75 \\times 0.40) + (0.25 \\times 0.55)]$$</p><p>$$P(R+ | S) = 0.18 \\times [0.30 + 0.1375]$$</p><p>$$P(R+ | S) = 0.18 \\times 0.4375 = \\mathbf{0.07875}$$</p></li><li><p data-path-to-node=\"12,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,0\">For a player using neither ($N$):</b></p><p>$$P(R+ | N) = 0.03 \\times [(0.75 \\times 0.12) + (0.25 \\times 0.20)]$$</p><p>$$P(R+ | N) = 0.03 \\times [0.09 + 0.05]$$</p><p>$$P(R+ | N) = 0.03 \\times 0.14 = \\mathbf{0.0042}$$</p></li></ul><div><p data-path-to-node=\"15\"> </p><p data-path-to-node=\"15\">We need to find the probability that a player is an actual drug user given that they received a reported positive, $P(D | R+)$.</p><p>$$\\Rightarrow P(D | R+) = \\frac{P(R+ | D) P(D)}{P(R+ | D) P(D) + P(R+ | S) P(S) + P(R+ | N) P(N)}$$</p><p>$$\\Rightarrow P(D | R+) = \\frac{0.8808 \\times 0.040}{(0.8808 \\times 0.040) + (0.07875 \\times 0.100) + (0.0042 \\times 0.860)}$$</p><p data-path-to-node=\"17\">$$\\Rightarrow P(D | R+) = \\frac{0.035232}{0.046719} \\approx \\mathbf{0.754...}$$</p><p data-path-to-node=\"17\">$$\\boxed{\\therefore P(D | R+) = \\mathbf{0.754}}$$</p><p data-path-to-node=\"17\"> </p><p style=\"text-align:center\"><img alt=\"\" src=\"https://cdn.mathpix.com/snip/images/s2f-o-fT1MY6o4R3ILy9Ha-mzGtvgYLRVcOgegQrmno.original.fullsize.png\" style=\"max-width: 100%;\" width=\"672\"/></p><p data-path-to-node=\"17\"><br/> </p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530099/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #530099</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1122\" data-start=\"0\">A login attempt is either genuine or fraudulent. The probability that an attempt is genuine is $0.96$, so the probability that it is fraudulent is $0.04$. If the attempt is genuine, the password is correct with probability $0.98$; if it is fraudulent, the password is correct with probability $0.20$. After the password step, a device check is performed. If the attempt is genuine and the password is correct, the device check passes with probability $0.90$. If the attempt is fraudulent and the password is correct, the device check passes with probability $0.25$. If the password is incorrect, the device check passes with probability $0.40$ for a genuine attempt and $0.05$ for a fraudulent attempt. The system grants access if the password is correct and the device check passes. Also, if the password is incorrect but the device check passes, the system grants access only if a backup code is accepted. The backup code is accepted with probability $0.50$ for a genuine attempt and $0.02$ for a fraudulent attempt. Given that access was granted, what is the probability that the attempt was fraudulent?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.00237$<br/></span>",
                "<span style=\"display: inline;\">$0.04000$<br/></span>",
                "<span style=\"display: inline;\">$0.05080$<br/></span>",
                "<span style=\"display: inline;\">$0.14560$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529978\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"904\" src=\"https://cdn.mathpix.com/snip/images/e8USFjpruMdUiUW2Eiyt2lu1xwlaupK2136vVRcyweI.original.fullsize.png\" width=\"1205\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529976/go-classes-dpp-gate-cs-da-probability-the-law-of-total-probability\" target=\"_blank\">GATE Overflow #529976</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"220\" data-start=\"0\">A binary code $(X,Y,Z)$ is chosen at random from ${0,1}^3$, with all $8$ codes equally likely. Define the events $A={X=Y}$, $B={Y=Z}$, and $C={X=Z}$. Which of the following statements is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$ and $B$ are independent.<br/></span>",
                "<span style=\"display: inline;\">$A$ and $B$ are conditionally independent given $C$.<br/></span>",
                "<span style=\"display: inline;\">$A$, $B$, and $C$ are mutually independent.<br/></span>",
                "<span style=\"display: inline;\">$P(A\\cup B|C^c)=1$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529974\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">A binary code $(X, Y, Z)$ is chosen from $\\{0, 1\\}^3$. Since each digit can be 0 or 1, there are $2^3 = 8$ possible, equally likely outcomes:</p><p>$$S = \\{(0,0,0), (0,0,1), (0,1,0), (0,1,1), (1,0,0), (1,0,1), (1,1,0), (1,1,1)\\}$$</p><p data-path-to-node=\"4\">Let's identify the outcomes for each event and calculate their probabilities:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,0\">Event $A$ ($X = Y$):</b> The first two digits match.</p><p data-path-to-node=\"5,0,0\">$A = \\{(0,0,0), (0,0,1), (1,1,0), (1,1,1)\\}$ $\\implies P(A) = \\frac{4}{8} = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"5,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,1,0\">Event $B$ ($Y = Z$):</b> The last two digits match.</p><p data-path-to-node=\"5,1,0\">$B = \\{(0,0,0), (1,0,0), (0,1,1), (1,1,1)\\}$ $\\implies P(B) = \\frac{4}{8} = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"5,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,2,0\">Event $C$ ($X = Z$):</b> The first and last digits match.</p><p data-path-to-node=\"5,2,0\">$C = \\{(0,0,0), (0,1,0), (1,0,1), (1,1,1)\\}$ $\\implies P(C) = \\frac{4}{8} = \\frac{1}{2}$</p></li></ul><p data-path-to-node=\"6\">We also need the intersection of these events. If $A$ ($X=Y$) and $B$ ($Y=Z$) both occur, then $X=Y=Z$.</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">Intersection ($A \\cap B$):</b> All three digits match.</p><p data-path-to-node=\"7,0,0\">$A \\cap B = \\{(0,0,0), (1,1,1)\\}$ $\\implies P(A \\cap B) = \\frac{2}{8} = \\frac{1}{4}$</p></li><li><p data-path-to-node=\"7,1,0\">By the same logic, $P(A \\cap C) = \\frac{1}{4}$ and $P(B \\cap C) = \\frac{1}{4}$.</p></li><li><p data-path-to-node=\"7,2,0\">The intersection of all three ($A \\cap B \\cap C$) is simply the event where $X=Y=Z$, so $P(A \\cap B \\cap C) = \\frac{1}{4}$.</p></li></ul><p data-path-to-node=\"9\"><br/><br/><b data-index-in-node=\"0\" data-path-to-node=\"9\">Now we will evaluate the Statements : </b></p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">Statement A: $A$ and $B$ are independent.</b></p><p data-path-to-node=\"10\">Two events are independent if $P(A \\cap B) = P(A)P(B)$.</p><ul data-path-to-node=\"11\"><li><p data-path-to-node=\"11,0,0\">$P(A \\cap B) = \\frac{1}{4}$</p></li><li><p data-path-to-node=\"11,1,0\">$P(A) \\cdot P(B) = \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) = \\frac{1}{4}$</p><p data-path-to-node=\"11,1,0\">Since $\\frac{1}{4} = \\frac{1}{4}$, this statement is <b data-index-in-node=\"139\" data-path-to-node=\"11,1,0\">True</b>.</p></li></ul><p data-path-to-node=\"12\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"12\">Statement B: $A$ and $B$ are conditionally independent given $C$.</b></p><p data-path-to-node=\"12\">This requires checking if $P(A \\cap B | C) = P(A | C) \\cdot P(B | C)$.</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">$P(A | C) = \\frac{P(A \\cap C)}{P(C)} = \\frac{1/4}{1/2} = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"13,1,0\">$P(B | C) = \\frac{P(B \\cap C)}{P(C)} = \\frac{1/4}{1/2} = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"13,2,0\">$P(A \\cap B | C) = \\frac{P(A \\cap B \\cap C)}{P(C)} = \\frac{1/4}{1/2} = \\frac{1}{2}$</p></li></ul><p data-path-to-node=\"14\">Now let's check the condition:</p><p data-path-to-node=\"14\">$\\frac{1}{2} \\neq \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right)$</p><p data-path-to-node=\"14\">Since $\\frac{1}{2} \\neq \\frac{1}{4}$, they are not conditionally independent. This statement is <b data-index-in-node=\"198\" data-path-to-node=\"14\">False</b>.</p><p data-path-to-node=\"15\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"15\">Statement C: $A, B$, and $C$ are mutually independent.</b></p><p data-path-to-node=\"15\">For three events to be mutually independent, $P(A \\cap B \\cap C)$ must equal $P(A)P(B)P(C)$.</p><ul data-path-to-node=\"16\"><li><p data-path-to-node=\"16,0,0\">$P(A \\cap B \\cap C) = \\frac{1}{4}$</p></li><li><p data-path-to-node=\"16,1,0\">$P(A) \\cdot P(B) \\cdot P(C) = \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) = \\frac{1}{8}$</p></li></ul><p data-path-to-node=\"17\">Since $\\frac{1}{4} \\neq \\frac{1}{8}$, this statement is <b data-index-in-node=\"54\" data-path-to-node=\"17\">False</b>.</p><p data-path-to-node=\"18\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"18\">Statement D: $P(A \\cup B | C^c) = 1$.</b></p><p data-path-to-node=\"18\">Event $C^c$ is the complement of $C$, meaning $X \\neq Z$. Because our code is binary (only 0s and 1s), if the first and third digits are different, the middle digit ($Y$) <i data-index-in-node=\"199\" data-path-to-node=\"18\">must</i> match one of them.</p><ul data-path-to-node=\"19\"><li><p data-path-to-node=\"19,0,0\">If $Y$ matches $X$, then event $A$ happens.</p></li><li><p data-path-to-node=\"19,1,0\">If $Y$ matches $Z$, then event $B$ happens.</p><p data-path-to-node=\"19,1,0\">Therefore, if $C^c$ occurs, it is guaranteed that either $A$ or $B$ (or both) will occur. Because it is a certainty, the probability of $A \\cup B$ given $C^c$ is $1$. This statement is <b data-index-in-node=\"211\" data-path-to-node=\"19,1,0\">True</b>.</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529972/go-classes-dpp-gate-cs-da-probability-conditional-independence\" target=\"_blank\">GATE Overflow #529972</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 46 - Engineering Mathematics (Axioms & Conditional Probability - Part 2)",
    "testLabel": "DPP 46",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"389\" data-start=\"0\">Four events $A$, $B$, $C$, and $D$ are mutually independent. Suppose</p><ul><li data-end=\"389\" data-start=\"0\">$P(A\\cap B\\cap C\\cap D)=\\frac{9}{80}$ <br/> </li><li data-end=\"389\" data-start=\"0\">$P(A^c\\cap B\\cap C\\cap D)=\\frac{27}{160}$ <br/> </li><li data-end=\"389\" data-start=\"0\">$P(A\\cap B^c\\cap C\\cap D)=\\frac{3}{40}$<br/> </li><li data-end=\"389\" data-start=\"0\">$P(A\\cap B\\cap C^c\\cap D)=\\frac{3}{80}$<br/> </li><li data-end=\"389\" data-start=\"0\">$P(A\\cap B\\cap C\\cap D^c)=\\frac{27}{400}$<br/> </li></ul><p>If $x=P(A^c\\cap B^c\\cap C\\cap D^c)$ and $y=P(A\\cap B^c\\cap C^c\\cap D^c)$, then what is $x+y$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{3}{40}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{33}{400}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{80}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{57}{400}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529952\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">Since events $A, B, C,$ and $D$ are mutually independent, the probability of their intersection is the product of their individual probabilities. Let's denote $P(A) = a$, $P(B) = b$, $P(C) = c$, and $P(D) = d$.</p><p data-path-to-node=\"3\">From the problem, we are given:</p><ol data-path-to-node=\"4\" start=\"1\"><li><p data-path-to-node=\"4,0,0\">$P(A \\cap B \\cap C \\cap D) = abcd = \\frac{9}{80}$</p></li><li><p data-path-to-node=\"4,1,0\">$P(A^c \\cap B \\cap C \\cap D) = (1-a) bcd = \\frac{27}{160}$</p></li><li><p data-path-to-node=\"4,2,0\">$P(A \\cap B^c \\cap C \\cap D) = a(1-b) c d = \\frac{3}{40}$</p></li><li><p data-path-to-node=\"4,3,0\">$P(A \\cap B \\cap C^c \\cap D) = ab(1-c) d = \\frac{3}{80}$</p></li><li><p data-path-to-node=\"4,4,0\">$P(A \\cap B \\cap C \\cap D^c) = abc(1-d) = \\frac{27}{400}$<br/><br/> </p></li></ol><div><p data-path-to-node=\"7\">We can find the individual probabilities by dividing equations $(2)$ through $(5)$ by equation $(1)$.</p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,0,0\">Find $a$:</b></p><p>$$\\frac{(1-a) bcd}{abcd} = \\frac{27/160}{9/80}$$</p><p>$$\\frac{1-a}{a} = \\frac{27}{160} \\times \\frac{80}{9} = \\frac{3}{2}$$</p><p>$$2(1-a) = 3a \\implies 2 = 5a \\implies \\mathbf{a = \\frac{2}{5}}$$</p><p data-path-to-node=\"8,0,4\">(Therefore, $1-a = \\frac{3}{5}$)</p></li><li><p data-path-to-node=\"8,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,1,0\">Find $b$:</b></p><p>$$\\frac{a (1-b) cd}{abcd} = \\frac{3/40}{9/80}$$</p><p>$$\\frac{1-b}{b} = \\frac{3}{40} \\times \\frac{80}{9} = \\frac{2}{3}$$</p><p>$$3(1-b) = 2b \\implies 3 = 5b \\implies \\mathbf{b = \\frac{3}{5}}$$</p><p data-path-to-node=\"8,1,4\">(Therefore, $1-b = \\frac{2}{5}$)</p></li><li><p data-path-to-node=\"8,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,2,0\">Find $c$:</b></p><p>$$\\frac{ab (1-c) d}{abcd} = \\frac{3/80}{9/80}$$</p><p>$$\\frac{1-c}{c} = \\frac{3}{9} = \\frac{1}{3}$$</p><p>$$3(1-c) = 1c \\implies 3 = 4c \\implies \\mathbf{c = \\frac{3}{4}}$$</p><p data-path-to-node=\"8,2,4\">(Therefore, $1-c = \\frac{1}{4}$)</p></li><li><p data-path-to-node=\"8,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,3,0\">Find $d$:</b></p><p>$$\\frac{abc (1-d)}{abcd} = \\frac{27/400}{9/80}$$</p><p>$$\\frac{1-d}{d} = \\frac{27}{400} \\times \\frac{80}{9} = \\frac{3}{5}$$</p><p>$$5(1-d) = 3d \\implies 5 = 8d \\implies \\mathbf{d = \\frac{5}{8}}$$</p><p data-path-to-node=\"8,3,4\">(Therefore, $1-d = \\frac{3}{8}$)</p></li></ul><h3 data-path-to-node=\"10\"><br/> </h3><p data-path-to-node=\"11\">Now substitute these values into the expressions for $x$ and $y$.</p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,0,0\">Calculate $x = P(A^c \\cap B^c \\cap C \\cap D^c)$:</b></p><p>$$x = (1-a)(1-b)c(1-d)$$</p><p>$$x = \\left(\\frac{3}{5}\\right) \\left(\\frac{2}{5}\\right) \\left(\\frac{3}{4}\\right) \\left(\\frac{3}{8}\\right)$$</p><p>$$x = \\frac{3 \\times 2 \\times 3 \\times 3}{5 \\times 5 \\times 4 \\times 8} = \\frac{54}{800} = \\mathbf{\\frac{27}{400}}$$</p></li><li><p data-path-to-node=\"12,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,0\">Calculate $y = P(A \\cap B^c \\cap C^c \\cap D^c)$:</b></p><p>$$y = a(1-b)(1-c)(1-d)$$</p><p>$$y = \\left(\\frac{2}{5}\\right) \\left(\\frac{2}{5}\\right) \\left(\\frac{1}{4}\\right) \\left(\\frac{3}{8}\\right)$$</p><p>$$y = \\frac{2 \\times 2 \\times 1 \\times 3}{5 \\times 5 \\times 4 \\times 8} = \\frac{12}{800} = \\mathbf{\\frac{6}{400}}$$</p></li></ul><div> </div></div><div><p>$$\\boxed{\\therefore x + y = \\frac{27}{400} + \\frac{6}{400} = \\mathbf{\\frac{33}{400}}}$$</p><p> </p><p style=\"text-align:center\"><img alt=\"\" height=\"517\" src=\"https://cdn.mathpix.com/snip/images/u9IPxg7gOQecjRXTUqc6KTpRpU-8_NJ-saZvxtkKTXE.original.fullsize.png\" width=\"698\"/></p><p> </p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529943/go-classes-dpp-gate-cs-da-probability-mutual-independence\" target=\"_blank\">GATE Overflow #529943</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"238\" data-start=\"0\">Suppose we want to compute $P(H|E_1,E_2,E_3)$, where no conditional independence assumptions are allowed. Assume all probabilities needed are defined and $0&lt;P(H)&lt;1$. Which of the following set(s) of numbers are sufficient?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(H)$, $P(E_1,E_2,E_3|H)$, $P(E_1,E_2,E_3|H^c)$<br/></span>",
                "<span style=\"display: inline;\">$P(E_1,E_2,E_3)$, $P(H)$, $P(E_1|H)$, $P(E_2|E_1,H)$, $P(E_3|E_1,E_2,H)$<br/></span>",
                "<span style=\"display: inline;\">$P(E_1,E_2,E_3)$, $P(H)$, $P(E_1|H)$, $P(E_2|H)$, $P(E_3|H)$<br/></span>",
                "<span style=\"display: inline;\">$P(H)$, $P(E_1,E_2|H)$, $P(E_3|H)$, $P(E_1,E_2,E_3|H^c)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"529941\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">Our goal is to compute $P(H | E_1, E_2, E_3)$. Using Bayes' Theorem, this can be expanded as:</p><p>$$P(H | E_1, E_2, E_3) = \\frac{P(E_1, E_2, E_3 | H) \\cdot P(H)}{P(E_1, E_2, E_3)}$$</p><p data-path-to-node=\"3\">We need to find which sets provide enough information to calculate both the numerator and the denominator without assuming conditional independence.<br/><br/> </p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">A. $P(H), P(E_1, E_2, E_3|H), P(E_1, E_2, E_3|H^c)$</b></p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">Numerator:</b> We are directly given $P(H)$ and $P(E_1, E_2, E_3 | H)$, so we can calculate $P(E_1, E_2, E_3 | H) \\cdot P(H)$.</p></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">Denominator:</b> We need $P(E_1, E_2, E_3)$. We can use the <b data-index-in-node=\"54\" data-path-to-node=\"6,1,0\">Law of Total Probability</b>:</p><p>$$P(E_1, E_2, E_3) = P(E_1, E_2, E_3 | H)P(H) + P(E_1, E_2, E_3 | H^c)P(H^c)$$</p><p data-path-to-node=\"6,1,2\">Since $P(H^c) = 1 - P(H)$, we have all the required terms to compute this.</p></li><li><p data-path-to-node=\"6,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,2,0\">Conclusion:</b> <b data-index-in-node=\"12\" data-path-to-node=\"6,2,0\">Sufficient.</b><br/><br/> </p></li></ul><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">B. $P(E_1, E_2, E_3), P(H), P(E_1|H), P(E_2|E_1, H), P(E_3|E_1, E_2, H)$</b></p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,0,0\">Denominator:</b> We are directly given $P(E_1, E_2, E_3)$.</p></li><li><p data-path-to-node=\"8,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,1,0\">Numerator:</b> We are given $P(H)$, but we need $P(E_1, E_2, E_3 | H)$. We can compute this using the <b data-index-in-node=\"94\" data-path-to-node=\"8,1,0\">Chain Rule of Probability</b> without any independence assumptions:</p><p>$$P(E_1, E_2, E_3 | H) = P(E_1 | H) \\cdot P(E_2 | E_1, H) \\cdot P(E_3 | E_1, E_2, H)$$</p><p data-path-to-node=\"8,1,2\">We are given exactly these three conditional probabilities.</p></li><li><p data-path-to-node=\"8,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,2,0\">Conclusion:</b> <b data-index-in-node=\"12\" data-path-to-node=\"8,2,0\">Sufficient.</b><br/><br/> </p></li></ul><p data-path-to-node=\"9\"><b data-index-in-node=\"0\" data-path-to-node=\"9\">C. $P(E_1, E_2, E_3), P(H), P(E_1|H), P(E_2|H), P(E_3|H)$</b></p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\">To calculate the numerator, we need $P(E_1, E_2, E_3 | H)$.</p></li><li><p data-path-to-node=\"10,1,0\">With the provided terms, the only way to get this joint probability would be to multiply them: $P(E_1 | H) \\cdot P(E_2 | H) \\cdot P(E_3 | H)$.</p></li><li><p data-path-to-node=\"10,2,0\">However, this operation <i data-index-in-node=\"24\" data-path-to-node=\"10,2,0\">requires</i> the assumption that $E_1$, $E_2$, and $E_3$ are conditionally independent given $H$. The problem strictly forbids this assumption.</p></li><li><p data-path-to-node=\"10,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,3,0\">Conclusion:</b> <b data-index-in-node=\"12\" data-path-to-node=\"10,3,0\">Not sufficient.</b><br/><br/> </p></li></ul><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">D. $P(H), P(E_1, E_2|H), P(E_3|H), P(E_1, E_2, E_3|H^c)$</b></p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\">Similar to A, we want to use the Law of Total Probability to find the denominator and Bayes' theorem for the final result. This requires $P(E_1, E_2, E_3 | H)$.</p></li><li><p data-path-to-node=\"12,1,0\">We are given $P(E_1, E_2 | H)$ and $P(E_3 | H)$. To combine these into $P(E_1, E_2, E_3 | H)$, we would need $P(E_3 | E_1, E_2, H)$ (chain rule) or we would have to assume conditional independence (multiplying them together).</p></li><li><p data-path-to-node=\"12,2,0\">Since conditional independence is not allowed and we lack the proper chain rule term, we cannot proceed.</p></li><li><p data-path-to-node=\"12,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,3,0\">Conclusion:</b> <b data-index-in-node=\"12\" data-path-to-node=\"12,3,0\">Not sufficient.</b></p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529938/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529938</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"209\" data-start=\"0\">Let $A$, $B$, $C$, and $D$ be events. Assume every conditional probability used below is defined. Without making any independence assumptions, which expression(s) must be equal to $P(A,B,C,D)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(D|A,B,C)P(C|A,B)P(A|B)P(B)$<br/></span>",
                "<span style=\"display: inline;\">$P(A,B)P(C,D|A,B)$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{P(A,B,C)P(A,B,D)}{P(A,B)}$<br/></span>",
                "<span style=\"display: inline;\">$P(A|B,C)P(B|C,D)P(C,D)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529877\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">The chain rule of probability states that for any events $X_1, X_2, \\dots, X_n$:</p><p>$$P(X_1, X_2, \\dots, X_n) = P(X_1)P(X_2|X_1)P(X_3|X_1, X_2)\\dots P(X_n|X_1, \\dots, X_{n-1})$$</p><p data-path-to-node=\"3\"><i data-index-in-node=\"1\" data-path-to-node=\"3\">(Note: The order of variables can be swapped.)</i><br/><br/> </p><p data-path-to-node=\"4\">Let's evaluate each option:</p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">A. $P(D|A, B, C)P(C|A, B)P(A|B)P(B)$</b></p><p data-path-to-node=\"6\">We can simplify this expression step-by-step from right to left using the definition of conditional probability ($P(X|Y) \\cdot P(Y) = P(X, Y)$):</p><ul><li data-path-to-node=\"7,0,0\">$P(A|B)P(B) = P(A, B)$<br/> </li><li data-path-to-node=\"7,1,0\">Substitute this back: $P(D|A, B, C)P(C|A, B) \\mathbf{P(A, B)}$<br/> </li><li data-path-to-node=\"7,2,0\">$P(C|A, B)P(A, B) = P(A, B, C)$<br/> </li><li data-path-to-node=\"7,3,0\">Substitute this back: $P(D|A, B, C) \\mathbf{P(A, B, C)}$<br/> </li><li data-path-to-node=\"7,4,0\">$P(D|A, B, C)P(A, B, C) = P(A, B, C, D)$</li></ul><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">This expression is correct.</b><br/><br/> </p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">B. $P(A, B)P(C, D|A, B)$</b></p><p data-path-to-node=\"11\">Using the definition of conditional probability, we know that:</p><p>$$P(C, D|A, B) = \\frac{P(A, B, C, D)}{P(A, B)}$$</p><p data-path-to-node=\"13\">Substituting this into the given expression:</p><p>$$P(A, B) \\left( \\frac{P(A, B, C, D)}{P(A, B)} \\right) = P(A, B, C, D)$$</p><p data-path-to-node=\"15\"><b data-index-in-node=\"0\" data-path-to-node=\"15\">This expression is correct.</b><br/><br/> </p><p data-path-to-node=\"17\"><b data-index-in-node=\"0\" data-path-to-node=\"17\">C. $\\dfrac{P(A, B, C)P(A, B, D)}{P(A, B)}$</b></p><p data-path-to-node=\"18\">Let's rewrite the first part of the numerator using conditional probability: $P(A, B, C) = P(C|A, B)P(A, B)$.</p><p data-path-to-node=\"18\">Substitute this into the expression:</p><p>$$\\frac{P(C|A, B)P(A, B)P(A, B, D)}{P(A, B)}$$</p><p data-path-to-node=\"20\">The $P(A, B)$ terms cancel out, leaving:</p><p>$$P(C|A, B)P(A, B, D)$$</p><p data-path-to-node=\"22\">For this to equal $P(A, B, C, D)$, we would have to assume that event $C$ is conditionally independent of event $D$ given $A$ and $B$. Since the problem explicitly states \"Without making any independence assumptions,\" this cannot be guaranteed to equal $P(A, B, C, D)$.</p><p data-path-to-node=\"23\"><b data-index-in-node=\"0\" data-path-to-node=\"23\">This expression is incorrect.</b><br/> </p><p data-path-to-node=\"25\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"25\">D. $P(A|B, C)P(B|C, D)P(C, D)$</b></p><p data-path-to-node=\"26\">Let's simplify from right to left:</p><ol data-path-to-node=\"27\" start=\"1\"><li><p data-path-to-node=\"27,0,0\">$P(B|C, D)P(C, D) = P(B, C, D)$</p></li><li><p data-path-to-node=\"27,1,0\">Substitute this back: $P(A|B, C)P(B, C, D)$</p></li></ol><p data-path-to-node=\"28\">By definition, $P(A|B, C) = \\frac{P(A, B, C)}{P(B, C)}$. Substituting this gives:</p><p>$$\\frac{P(A, B, C)P(B, C, D)}{P(B, C)}$$</p><p data-path-to-node=\"30\">For this to equal $P(A, B, C, D)$, we would have to assume that event $A$ is conditionally independent of event $D$ given $B$ and $C$ (i.e., $P(A|B, C) = P(A|B, C, D)$). Again, without independence assumptions, this does not hold.</p><p data-path-to-node=\"31\"><b data-index-in-node=\"0\" data-path-to-node=\"31\">This expression is incorrect.</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529876/go-classes-dpp-gate-cs-da-probability-chain-rule-of-probability\" target=\"_blank\">GATE Overflow #529876</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"397\" data-start=\"0\">A manufacturer tests one electronic chip using four independent inspection gates. The chip passes Gate A, Gate B, Gate C, and Gate D with probabilities $0.96$, $0.90$, $0.85$, and $0.75$, respectively. A chip is approved only if it passes Gate A and passes at least two of the other three gates. Given that a chip is approved, what is the probability that it passed all four gates?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.417$<br/></span>",
                "<span style=\"display: inline;\">$0.550$<br/></span>",
                "<span style=\"display: inline;\">$0.617$<br/></span>",
                "<span style=\"display: inline;\">$0.930$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529863\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">Let $A, B, C,$ and $D$ be the events that the chip passes the respective gates. The probabilities are given as:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$P(A) = 0.96$</p></li><li><p data-path-to-node=\"3,1,0\">$P(B) = 0.90$</p></li><li><p data-path-to-node=\"3,2,0\">$P(C) = 0.85$</p></li><li><p data-path-to-node=\"3,3,0\">$P(D) = 0.75$</p></li></ul><p data-path-to-node=\"4\">Therefore, the probabilities of <i data-index-in-node=\"32\" data-path-to-node=\"4\">failing</i> these gates are:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">$P(B') = 1 - 0.90 = 0.10$</p></li><li><p data-path-to-node=\"5,1,0\">$P(C') = 1 - 0.85 = 0.15$</p></li><li><p data-path-to-node=\"5,2,0\">$P(D') = 1 - 0.75 = 0.25$</p></li></ul><div> </div><div><p data-path-to-node=\"8\">Now,<br/><br/>The question asks for the conditional probability that a chip passed all four gates, <b data-index-in-node=\"85\" data-path-to-node=\"8\">given</b> that it was approved.</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,0,0\">Event E (Approved):</b> The chip passes Gate A <b data-index-in-node=\"43\" data-path-to-node=\"9,0,0\">AND</b> passes at least two of the other three gates (B, C, D).</p></li><li><p data-path-to-node=\"9,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,1,0\">Target Probability:</b> $P(\\text{All 4 gates} \\mid \\text{Approved})$</p></li></ul><p data-path-to-node=\"10\">Using the conditional probability formula:</p><p>$$P(\\text{All 4} \\mid \\text{Approved}) = \\frac{P(\\text{All 4} \\cap \\text{Approved})}{P(\\text{Approved})}$$</p><p data-path-to-node=\"12\">Since passing all $4$ gates automatically means the chip is approved, $P(\\text{All 4} \\cap \\text{Approved})$ is simply $P(\\text{All 4})$.</p><p data-path-to-node=\"13\">Let's define $F$ as the event \"passes at least two of gates B, C, and D\".</p><p data-path-to-node=\"13\">Because passing Gate A is independent of the other gates, we can write:</p><p>$$P(\\text{Approved}) = P(A \\cap F) = P(A) \\cdot P(F)$$</p><p>$$P(\\text{All 4}) = P(A \\cap B \\cap C \\cap D) = P(A) \\cdot P(B \\cap C \\cap D)$$</p><p data-path-to-node=\"16\">Notice that $P(A)$ appears in both the numerator and denominator, so it cancels out:</p><p>$$P(\\text{All 4} \\mid \\text{Approved}) = \\frac{P(A) \\cdot P(B \\cap C \\cap D)}{P(A) \\cdot P(F)} = \\frac{P(B \\cap C \\cap D)}{P(F)}$$</p><p><br/><br/>Now, we'll calculate probabilities : </p><p data-path-to-node=\"20\"><b data-index-in-node=\"0\" data-path-to-node=\"20\">Step A: Calculate $P(B \\cap C \\cap D)$ (Passing B, C, and D)</b></p><p>$$P(B \\cap C \\cap D) = 0.90 \\times 0.85 \\times 0.75 = 0.57375$$</p><p data-path-to-node=\"22\"><b data-index-in-node=\"0\" data-path-to-node=\"22\">Step B: Calculate $P(F)$ (Passing at least two of B, C, D)</b></p><p data-path-to-node=\"22\">This happens in four mutually exclusive scenarios:</p><ol data-path-to-node=\"23\" start=\"1\"><li><p data-path-to-node=\"23,0,0\">Passes all three ($B \\cap C \\cap D$): $0.57375$</p></li><li><p data-path-to-node=\"23,1,0\">Passes B and C, fails D ($B \\cap C \\cap D'$): $0.90 \\times 0.85 \\times 0.25 = 0.19125$</p></li><li><p data-path-to-node=\"23,2,0\">Passes B and D, fails C ($B \\cap C' \\cap D$): $0.90 \\times 0.15 \\times 0.75 = 0.10125$</p></li><li><p data-path-to-node=\"23,3,0\">Passes C and D, fails B ($B' \\cap C \\cap D$): $0.10 \\times 0.85 \\times 0.75 = 0.06375$</p></li></ol><p data-path-to-node=\"24\">Adding these together gives the total probability of passing at least two of the three:</p><p>$$P(F) = 0.57375 + 0.19125 + 0.10125 + 0.06375 = 0.930$$</p><p> </p><p data-path-to-node=\"28\">Now, divide the probability of passing all three of those gates by the probability of passing at least two:</p><p>$$P(\\text{All 4} \\mid \\text{Approved}) = \\frac{0.57375}{0.930} \\approx 0.616935...$$</p><p>$$\\boxed{\\therefore P(\\text{All 4} \\mid \\text{Approved}) \\approx 0.617}$$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529862/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529862</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"402\" data-start=\"217\">Let $A$ and $B$ be two events with $P(A)&gt;0$ and $P(B)&gt;0$. Suppose $P(A\\cap B)$ increases, while $P(B)$ also increases, and $P(A)$ remains unchanged. Which of the following must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(B\\mid A)$ increases<br/></span>",
                "<span style=\"display: inline;\">$P(A\\mid B)$ increases<br/></span>",
                "<span style=\"display: inline;\">$P(A\\cup B)$ increases<br/></span>",
                "<span style=\"display: inline;\">$P(A^c\\cap B)$ increases</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529768\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Given Conditions:</b></p><ol data-path-to-node=\"2\" start=\"1\"><li><p data-path-to-node=\"2,0,0\">$P(A)$ is constant.</p></li><li><p data-path-to-node=\"2,1,0\">$P(B)$ increases.</p></li><li><p data-path-to-node=\"2,2,0\">$P(A \\cap B)$ increases.</p></li></ol><div> </div><div><p data-path-to-node=\"4\"><strong>Now lets evaluate the options : </strong><br/> </p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">A. $P(B \\mid A)$ increases</b></p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">Formula:</b> The definition of conditional probability is $P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}$</p></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">Analysis:</b> We are told that the numerator, $P(A \\cap B)$, increases. The denominator, $P(A)$, remains constant. If you increase the numerator of a fraction while keeping the denominator the same (and positive), the overall value of the fraction must increase.</p></li><li><p data-path-to-node=\"6,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,2,0\">Conclusion:</b> This statement <b data-index-in-node=\"27\" data-path-to-node=\"6,2,0\">must be true</b>.<br/> </p></li></ul><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">B. $P(A \\mid B)$ increases</b></p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,0,0\">Formula:</b> $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$</p></li><li><p data-path-to-node=\"8,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,1,0\">Analysis:</b> In this case, both the numerator $P(A \\cap B)$ and the denominator $P(B)$ are increasing. Without knowing the exact <i data-index-in-node=\"122\" data-path-to-node=\"8,1,0\">rates</i> at which they are increasing relative to each other, we cannot determine if the overall fraction increases, decreases, or stays the same.</p></li><li><p data-path-to-node=\"8,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,2,0\">Conclusion:</b> This statement is <strong>not necessarily true.</strong><br/> </p></li></ul><p data-path-to-node=\"9\"><b data-index-in-node=\"0\" data-path-to-node=\"9\">C. $P(A \\cup B)$ increases</b></p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Formula:</b> The general addition rule is $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p></li><li><p data-path-to-node=\"10,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,1,0\">Analysis:</b> $P(A)$ is constant. $P(B)$ increases, which would cause the total sum to increase. However, $P(A \\cap B)$ also increases, and because it is being subtracted, it exerts a downward pull on the total sum. Because we have competing forces (one pushing the value up, one pulling it down), the overall result is ambiguous.</p></li><li><p data-path-to-node=\"10,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,2,0\">Conclusion:</b> This statement is <strong>not necessarily true.</strong><br/> </p></li></ul><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">D. $P(A^c \\cap B)$ increases</b></p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,0,0\">Formula:</b> $P(A^c \\cap B) = P(B) - P(A \\cap B)$</p></li><li><p data-path-to-node=\"12,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,0\">Analysis:</b> Similar to option C, we have an increasing value $P(B)$ from which we are subtracting another increasing value $P(A \\cap B)$. Depending on which value increases by a larger amount, the result could go up or down.</p></li><li><p data-path-to-node=\"12,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,0\">Conclusion:</b> This statement is <strong>not necessarily true.</strong></p></li></ul></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529767/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529767</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"439\" data-start=\"231\">Suppose that $B_1, B_2, \\ldots, B_k$ form a partition of the sample space $S$, and $A$ is an event with $0 &lt; P(A) &lt; 1$. Assume also that $P(B_i) &gt; 0$ for all $i$. Which of the following is/are always correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum_{i=1}^k P(A \\mid B_i)P(B_i \\mid A) = 1$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{i=1}^k \\dfrac{P(B_i \\mid A)P(A)}{P(B_i)} = 1$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{i=1}^k P(A \\mid B_i)P(B_i) = \\sum_{i=1}^k P(B_i \\mid A)P(A)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{i=1}^k P(A^c \\mid B_i)P(B_i) = 1 - \\sum_{i=1}^k P(A \\mid B_i)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529766\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Given Information:</b></p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">$B_1, B_2, \\ldots, B_k$ form a partition of the sample space $S$.<br/>This means they are mutually exclusive ($B_i \\cap B_j = \\varnothing$ for $i \\neq j$) and their union covers the entire sample space ($\\bigcup_{i=1}^k B_i = S$).</p></li><li><p data-path-to-node=\"2,1,0\">Because they partition $S$, the sum of their probabilities is 1: $\\sum_{i=1}^k P(B_i) = 1$.</p></li><li><p data-path-to-node=\"2,2,0\">Also, because they partition $S$, given any event $A$, the intersections $A \\cap B_i$ partition $A$.<br/>This implies $\\sum_{i=1}^k P(B_i \\mid A) = 1$.<br/> </p></li></ul><p data-path-to-node=\"3\">Now let's evaluate each statement:</p><p data-path-to-node=\"4\"><b data-index-in-node=\"0\" data-path-to-node=\"4\">A. $\\sum_{i=1}^k P(A \\mid B_i)P(B_i \\mid A) = 1$</b></p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">Using Bayes' Theorem, we know $P(B_i \\mid A) = \\frac{P(A \\mid B_i)P(B_i)}{P(A)}$.</p></li><li><p data-path-to-node=\"5,1,0\">Substituting this into the sum:</p><p>$$\\sum_{i=1}^k P(A \\mid B_i) \\left( \\frac{P(A \\mid B_i)P(B_i)}{P(A)} \\right) = \\frac{1}{P(A)} \\sum_{i=1}^k [P(A \\mid B_i)]^2 P(B_i)$$</p></li><li><p data-path-to-node=\"5,2,0\">This expression does not generally simplify to 1.</p></li><li><p data-path-to-node=\"5,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,3,0\">Conclusion: False</b><br/> </p></li></ul><p data-path-to-node=\"6\"><b data-index-in-node=\"0\" data-path-to-node=\"6\">B. $\\sum_{i=1}^k \\frac{P(B_i \\mid A)P(A)}{P(B_i)} = 1$</b></p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">By the multiplication rule, the numerator $P(B_i \\mid A)P(A)$ is equal to the intersection $P(A \\cap B_i)$.</p></li><li><p data-path-to-node=\"7,1,0\">Substituting this into the sum gives:</p><p>$$\\sum_{i=1}^k \\frac{P(A \\cap B_i)}{P(B_i)}$$</p></li><li><p data-path-to-node=\"7,2,0\">By definition, $\\frac{P(A \\cap B_i)}{P(B_i)} = P(A \\mid B_i)$. So the expression simplifies to:</p><p>$$\\sum_{i=1}^k P(A \\mid B_i)$$</p></li><li><p data-path-to-node=\"7,3,0\">The sum of conditional probabilities of $A$ given different partitions does not necessarily equal 1. (It is the sum of probabilities of the partitions given $A$ that equals 1, i.e., $\\sum P(B_i \\mid A) = 1$).</p></li><li><p data-path-to-node=\"7,4,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,4,0\">Conclusion: False</b><br/> </p></li></ul><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">C. $\\sum_{i=1}^k P(A \\mid B_i)P(B_i) = \\sum_{i=1}^k P(B_i \\mid A)P(A)$</b></p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">Let's evaluate the Left Hand Side (LHS) using the multiplication rule ($P(A \\cap B) = P(A \\mid B)P(B)$):</p><p>$$\\text{LHS} = \\sum_{i=1}^k P(A \\cap B_i)$$</p><p data-path-to-node=\"9,0,2\">By the Law of Total Probability, the sum of these mutually exclusive intersections is simply $P(A)$. So, LHS = $P(A)$.</p></li><li><p data-path-to-node=\"9,1,0\">Now let's evaluate the Right Hand Side (RHS). We can factor out $P(A)$ since it doesn't depend on the index $i$:</p><p>$$\\text{RHS} = P(A) \\sum_{i=1}^k P(B_i \\mid A)$$</p><p data-path-to-node=\"9,1,2\">Because $B_1, \\ldots, B_k$ partition the sample space, their conditional probabilities given <i data-index-in-node=\"92\" data-path-to-node=\"9,1,2\">any</i> valid event $A$ must sum to 1. Thus, $\\sum_{i=1}^k P(B_i \\mid A) = 1$.</p><p>$$\\text{RHS} = P(A) \\cdot 1 = P(A)$$</p></li><li><p data-path-to-node=\"9,2,0\">Since LHS = $P(A)$ and RHS = $P(A)$, the statement is always true.</p></li><li><p data-path-to-node=\"9,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,3,0\">Conclusion: True</b><br/> </p></li></ul><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">D. $\\sum_{i=1}^k P(A^c \\mid B_i)P(B_i) = 1 - \\sum_{i=1}^k P(A \\mid B_i)$</b></p><ul data-path-to-node=\"11\"><li><p data-path-to-node=\"11,0,0\">Let's evaluate the Left Hand Side (LHS). By the multiplication rule, $P(A^c \\mid B_i)P(B_i) = P(A^c \\cap B_i)$.</p><p>$$\\text{LHS} = \\sum_{i=1}^k P(A^c \\cap B_i)$$</p><p data-path-to-node=\"11,0,2\">By the Law of Total Probability, this sum equals $P(A^c)$, which is $1 - P(A)$.</p></li><li><p data-path-to-node=\"11,1,0\">So, the statement claims that:</p><p>$$1 - P(A) = 1 - \\sum_{i=1}^k P(A \\mid B_i)$$</p><p data-path-to-node=\"11,1,2\">This would imply that $P(A) = \\sum_{i=1}^k P(A \\mid B_i)$. As established in option B, this is generally false. The correct formula for $P(A)$ requires multiplying by $P(B_i)$ inside the sum (the Law of Total Probability).</p></li><li><p data-path-to-node=\"11,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,0\">Conclusion: False</b></p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529765/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529765</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"246\" data-start=\"190\">Which of the following statements is/are always correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A$ and $B$ are independent and $P(B) > 0$, then $P(A^c \\mid B) = 1 - P(A)$<br/></span>",
                "<span style=\"display: inline;\">If $A$ and $B$ are mutually exclusive and $P(A \\cup B) > 0$, then $P(A \\mid A \\cup B) = P(A)$<br/></span>",
                "<span style=\"display: inline;\">If $A \\subseteq B$ and $P(B) > 0$, then $P(B \\mid A) = \\dfrac{P(B)}{P(A)}$<br/></span>",
                "<span style=\"display: inline;\">For any two events $A$ and $B$ with $P(B) > 0$, $P(A \\cup B \\mid B) = 1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529764\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">A. If $A$ and $B$ are independent and $P(B) &gt; 0$, then $P(A^c \\mid B) = 1 - P(A)$</b></p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,0,0\">True.</b> By the definition of conditional probability: $P(A^c \\mid B) = \\frac{P(A^c \\cap B)}{P(B)}$</p></li><li><p data-path-to-node=\"2,1,0\">Since $A$ and $B$ are independent, their complements are also independent of each other. This means $A^c$ and $B$ are independent, so $P(A^c \\cap B) = P(A^c)P(B)$.</p></li><li><p data-path-to-node=\"2,2,0\">Substituting this back into the formula: $P(A^c \\mid B) = \\frac{P(A^c)P(B)}{P(B)} = P(A^c)$</p></li><li><p data-path-to-node=\"2,3,0\">By the rule of complements, $P(A^c) = 1 - P(A)$. Therefore, the statement is always correct.<br/> </p></li></ul><p data-path-to-node=\"3\"><b data-index-in-node=\"0\" data-path-to-node=\"3\">B. If $A$ and $B$ are mutually exclusive and $P(A \\cup B) &gt; 0$, then $P(A \\mid A \\cup B) = P(A)$</b></p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">False.</b></p></li><li><p data-path-to-node=\"4,1,0\">By the definition of conditional probability: $P(A \\mid A \\cup B) = \\frac{P(A \\cap (A \\cup B))}{P(A \\cup B)}$</p></li><li><p data-path-to-node=\"4,2,0\">The intersection of $A$ and $(A \\cup B)$ is simply $A$, so the numerator is $P(A)$.</p></li><li><p data-path-to-node=\"4,3,0\">Since $A$ and $B$ are mutually exclusive, $P(A \\cup B) = P(A) + P(B)$.</p></li><li><p data-path-to-node=\"4,4,0\">This gives us: $P(A \\mid A \\cup B) = \\frac{P(A)}{P(A) + P(B)}$</p></li><li><p data-path-to-node=\"4,5,0\">This fraction only equals $P(A)$ if $P(A) + P(B) = 1$ (meaning $A$ and $B$ cover the entire sample space) or if $P(A) = 0$. It is not <i data-index-in-node=\"124\" data-path-to-node=\"4,5,0\">always</i> true.<br/> </p></li></ul><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">C. If $A \\subseteq B$ and $P(B) &gt; 0$, then $P(B \\mid A) = \\frac{P(B)}{P(A)}$</b></p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">False.</b></p></li><li><p data-path-to-node=\"6,1,0\">By the definition of conditional probability: $P(B \\mid A) = \\frac{P(B \\cap A)}{P(A)}$</p></li><li><p data-path-to-node=\"6,2,0\">Because $A$ is a subset of $B$ ($A \\subseteq B$), all elements of $A$ are also in $B$. Therefore, their intersection is just $A$: $A \\cap B = A$.</p></li><li><p data-path-to-node=\"6,3,0\">Substituting this into the formula gives: $P(B \\mid A) = \\frac{P(A)}{P(A)} = 1$ (assuming $P(A) &gt; 0$).</p></li><li><p data-path-to-node=\"6,4,0\">The statement claims it equals $\\frac{P(B)}{P(A)}$, which is only true if $P(B) = P(A)$, meaning sets $A$ and $B$ are identical. It is not true for all subsets.<br/> </p></li></ul><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">D. For any two events $A$ and $B$ with $P(B) &gt; 0$, $P(A \\cup B \\mid B) = 1$</b></p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,0,0\">True.</b></p></li><li><p data-path-to-node=\"8,1,0\">By the definition of conditional probability: $P(A \\cup B \\mid B) = \\frac{P((A \\cup B) \\cap B)}{P(B)}$</p></li><li><p data-path-to-node=\"8,2,0\">Look at the numerator: The intersection of $B$ with $(A \\cup B)$ is just $B$. Any outcome that is in $B$ is guaranteed to be in $(A \\cup B)$.</p></li><li><p data-path-to-node=\"8,3,0\">Therefore, $P((A \\cup B) \\cap B) = P(B)$.</p></li><li><p data-path-to-node=\"8,4,0\">Substituting this back: $P(A \\cup B \\mid B) = \\frac{P(B)}{P(B)} = 1$.</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529763/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529763</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"398\" data-start=\"202\">Let $S$ be the sample space. Three events $A$, $B$, and $C$ are such that $A$ and $C$ do not overlap, $C \\subseteq B$, and $A$ overlaps with $B$. Which of the following statements are always true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(A \\cup C) = P(A) + P(C)$<br/></span>",
                "<span style=\"display: inline;\">$P(B \\cup C) = P(B)$<br/></span>",
                "<span style=\"display: inline;\">$P(A^c \\cap C) = P(C)$<br/></span>",
                "<span style=\"display: inline;\">$P(A \\cap B^c) = P(A) - P(A \\cap B)$<br/></span>",
                "<span style=\"display: inline;\">$P((A \\cup B)^c) = 1 - P(A) - P(B)$</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"529762\"></a><div itemprop=\"text\"><p data-end=\"658\" data-start=\"580\">The venn-diagram from the given information is as follows : </p><p style=\"text-align:center\"><img alt=\"\" src=\"https://cdn.mathpix.com/snip/images/gLtNf_ZB9PAYZyJE77Pe7Montxy2KgswoyTkQ4Za6vs.original.fullsize.png\" style=\"max-width: 100%;\" width=\"340\"/></p><p data-end=\"658\" data-start=\"580\"><br/>Since $A$ and $C$ do not overlap, we have $A \\cap C = \\varnothing$. Therefore,</p><p data-end=\"706\" data-start=\"660\"><strong>A is true</strong> because $P(A \\cup C) = P(A) + P(C)$.<br/> </p><p data-end=\"765\" data-start=\"708\">Since $C \\subseteq B$, we have $B \\cup C = B$. Therefore,</p><p data-end=\"806\" data-start=\"767\"><strong>B is true</strong> because $P(B \\cup C) = P(B)$.</p><p data-end=\"912\" data-start=\"808\"><br/>Also, since $A$ and $C$ do not overlap, every outcome in $C$ is outside $A$. So $C \\subseteq A^c$, hence</p><p data-end=\"976\" data-start=\"914\">$A^c \\cap C = C$, so <strong>C is true</strong> because $P(A^c \\cap C) = P(C)$.<br/> </p><p data-end=\"1058\" data-start=\"978\">Now $A$ can be split into two disjoint parts: $A \\cap B$ and $A \\cap B^c$. Thus,</p><p data-end=\"1096\" data-start=\"1060\">$P(A) = P(A \\cap B) + P(A \\cap B^c)$</p><p data-end=\"1100\" data-start=\"1098\">so</p><p data-end=\"1139\" data-start=\"1102\">$P(A \\cap B^c) = P(A) - P(A \\cap B)$.</p><p data-end=\"1157\" data-start=\"1141\">Hence <strong>D is true.</strong><br/> </p><p data-end=\"1177\" data-start=\"1159\">For E, in general,</p><p data-end=\"1214\" data-start=\"1179\">$P((A \\cup B)^c) = 1 - P(A \\cup B)$</p><p data-end=\"1219\" data-start=\"1216\">and</p><p data-end=\"1263\" data-start=\"1221\">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.</p><p data-end=\"1268\" data-start=\"1265\">So,</p><p data-end=\"1320\" data-start=\"1270\">$P((A \\cup B)^c) = 1 - P(A) - P(B) + P(A \\cap B)$.</p><p data-end=\"1353\" data-start=\"1322\">Therefore <strong>E is not always true.</strong><br/> </p><p data-end=\"1390\" data-start=\"1355\"><strong data-end=\"1374\" data-start=\"1355\">Correct answer:</strong> A, B, C, and D.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529761/go-classes-dpp-gate-cs-da-probability-events-in-probability\" target=\"_blank\">GATE Overflow #529761</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"157\" data-start=\"0\">A fair six-sided die is rolled $4$ times. What is the probability that exactly $2$ of the outcomes are odd and the sum of the $4$ outcomes is $14$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{5}{54}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{19}{216}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{108}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{72}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529688\"></a><div itemprop=\"text\"><p data-end=\"325\" data-start=\"239\">We want exactly $2$ odd outcomes and $2$ even outcomes, with total sum $14$.</p><p data-end=\"422\" data-start=\"327\">First, choose the positions of the $2$ odd outcomes. This can be done in $\\binom{4}{2}=6$ ways.</p><p data-end=\"488\" data-start=\"424\">Now count the possible ordered odd pairs and ordered even pairs.</p><p data-end=\"578\" data-start=\"490\">The odd numbers on a die are $1,3,5$. The possible ordered odd pairs and their sums are:</p><p data-end=\"596\" data-start=\"580\">Sum $2$: $1$ way</p><p data-end=\"615\" data-start=\"598\">Sum $4$: $2$ ways</p><p data-end=\"634\" data-start=\"617\">Sum $6$: $3$ ways</p><p data-end=\"653\" data-start=\"636\">Sum $8$: $2$ ways</p><p data-end=\"672\" data-start=\"655\">Sum $10$: $1$ way</p><p data-end=\"764\" data-start=\"674\">The even numbers on a die are $2,4,6$. The possible ordered even pairs and their sums are:</p><p data-end=\"782\" data-start=\"766\">Sum $4$: $1$ way</p><p data-end=\"801\" data-start=\"784\">Sum $6$: $2$ ways</p><p data-end=\"820\" data-start=\"803\">Sum $8$: $3$ ways</p><p data-end=\"840\" data-start=\"822\">Sum $10$: $2$ ways</p><p data-end=\"859\" data-start=\"842\">Sum $12$: $1$ way</p><p data-end=\"958\" data-start=\"861\">Now the odd-pair sum plus the even-pair sum must be $14$. So the number of valid ordered pairs is</p><p data-end=\"1019\" data-start=\"960\">$1\\cdot 1 + 2\\cdot 2 + 3\\cdot 3 + 2\\cdot 2 + 1\\cdot 1 = 19$</p><p data-end=\"1136\" data-start=\"1021\">Thus, for each choice of odd positions, there are $19$ valid outcomes. So the total number of favorable outcomes is</p><p data-end=\"1156\" data-start=\"1138\">$6 \\cdot 19 = 114$</p><p data-end=\"1229\" data-start=\"1158\">The total number of possible outcomes when a die is rolled $4$ times is $6^4 = 1296$</p><p data-end=\"1283\" data-start=\"1245\">Therefore, the required probability is $\\dfrac{114}{1296} = \\dfrac{19}{216}$</p><p data-end=\"1366\" data-start=\"1322\">So the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529687/go-classes-dpp-gate-cs-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #529687</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A game machine releases $6$ tokens, and each token shows a random integer from $1$ to $6$ with equal probability. The probability that the total of the $6$ numbers shown is $24$ is $\\frac{X}{46656}$. The value of $X$ is $\\_\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "3431",
            "solution": "<div class=\"solution-content\"><a name=\"529683\"></a><div itemprop=\"text\"><p data-end=\"84\" data-start=\"0\">Let the six numbers shown by the machine be $x_1,x_2,x_3,x_4,x_5,x_6$.</p><p data-end=\"126\" data-start=\"86\">We want the number of outcomes for which</p><p data-end=\"156\" data-start=\"128\">$x_1+x_2+x_3+x_4+x_5+x_6=24$</p><p data-end=\"210\" data-start=\"158\">where each $x_i$ can be any integer from $1$ to $6$.</p><p data-end=\"215\" data-start=\"212\">Set</p><p data-end=\"228\" data-start=\"217\">$y_i=x_i-1$</p><p data-end=\"299\" data-start=\"230\">Then each $y_i$ satisfies $0 \\le y_i \\le 5$, and the equation becomes</p><p data-end=\"329\" data-start=\"301\">$y_1+y_2+y_3+y_4+y_5+y_6=18$</p><p data-end=\"420\" data-start=\"331\">First, ignore the restriction $y_i \\le 5$. The number of nonnegative integer solutions of</p><p data-end=\"450\" data-start=\"422\">$y_1+y_2+y_3+y_4+y_5+y_6=18$</p><p data-end=\"454\" data-start=\"452\">is</p><p data-end=\"497\" data-start=\"456\">$\\binom{18+6-1}{6-1}=\\binom{23}{5}=33649$</p><p data-end=\"586\" data-start=\"499\">Now subtract the solutions where at least one variable is greater than or equal to $6$.</p><p data-end=\"665\" data-start=\"588\">If one variable is at least $6$, let $y_i'=y_i-6$. Then we count solutions of</p><p data-end=\"696\" data-start=\"667\">$y_1'+y_2+y_3+y_4+y_5+y_6=12$</p><p data-end=\"729\" data-start=\"698\">The number of such solutions is</p><p data-end=\"746\" data-start=\"731\">$\\binom{17}{5}$</p><p data-end=\"816\" data-start=\"748\">Since any one of the $6$ variables could be at least $6$, this gives</p><p data-end=\"864\" data-start=\"818\">$\\binom{6}{1}\\binom{17}{5}=6 \\cdot 6188=37128$</p><p data-end=\"933\" data-start=\"866\">Next, add back the cases where two variables are both at least $6$.</p><p data-end=\"945\" data-start=\"935\">This gives</p><p data-end=\"992\" data-start=\"947\">$\\binom{6}{2}\\binom{11}{5}=15 \\cdot 462=6930$</p><p data-end=\"1062\" data-start=\"994\">Next, subtract the cases where three variables are all at least $6$.</p><p data-end=\"1074\" data-start=\"1064\">This gives</p><p data-end=\"1116\" data-start=\"1076\">$\\binom{6}{3}\\binom{5}{5}=20 \\cdot 1=20$</p><p data-end=\"1158\" data-start=\"1118\">So the total number of valid outcomes is</p><p data-end=\"1252\" data-start=\"1160\">$\\binom{23}{5}-\\binom{6}{1}\\binom{17}{5}+\\binom{6}{2}\\binom{11}{5}-\\binom{6}{3}\\binom{5}{5}$</p><p data-end=\"1276\" data-start=\"1254\">$=33649-37128+6930-20=3431$</p><p data-end=\"1391\" data-start=\"1287\">Since each of the $6$ tokens can show any of $6$ numbers, the total number of equally likely outcomes is</p><p data-end=\"1404\" data-start=\"1393\">$6^6=46656$</p><p data-end=\"1444\" data-start=\"1406\">Therefore, the required probability is $\\frac{3431}{46656}$</p><p data-end=\"1471\" data-start=\"1468\">So, $X=3431$</p><p data-end=\"1501\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1483\"><strong data-end=\"1494\" data-start=\"1483\">Answer:</strong> $\\boxed{3431}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529682/go-classes-dpp-gate-cs-probability-counting-%26-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #529682</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 47 - Engineering Mathematics (Axioms & Conditional Probability - Part 3)",
    "testLabel": "DPP 47",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A debate club has $14$ members, of which exactly $6$ have completed advanced training. A coach interviews $4$ members selected at random without replacement, one by one. The club is selected for an elite competition if at least $3$ of the $4$ interviewed members have completed advanced training, or if exactly $2$ of the $4$ interviewed members have completed advanced training and the first two interviewed members are both trained. Let the probability that the club is selected be denoted by $p$. Then $1001p =?$</div></span>",
            "image": "",
            "options": [],
            "answer": "245",
            "solution": "<div class=\"solution-content\"><a name=\"529681\"></a><div itemprop=\"text\"><p data-end=\"344\" data-start=\"69\">Let $A$ be the event that at least $3$ of the $4$ interviewed members have completed advanced training. Let $B$ be the event that exactly $2$ of the $4$ interviewed members have completed advanced training and the first two interviewed members are both trained.</p><p data-end=\"350\" data-start=\"346\">Then</p><p data-end=\"369\" data-start=\"352\">$p = P(A) + P(B)$</p><p data-end=\"425\" data-start=\"371\">since these two events cannot happen at the same time.<br/><br/><strong>First, compute $P(A)$ :</strong></p><p data-end=\"529\" data-start=\"451\">The probability that exactly $3$ of the $4$ interviewed members are trained is</p><p data-end=\"616\" data-start=\"531\">$P(\\text{exactly }3\\text{ trained}) = \\frac{\\binom{6}{3}\\binom{8}{1}}{\\binom{14}{4}}= \\frac{20 \\cdot 8}{1001}= \\frac{160}{1001}$</p><p data-end=\"747\" data-start=\"669\">The probability that exactly $4$ of the $4$ interviewed members are trained is</p><p data-end=\"834\" data-start=\"749\">$P(\\text{exactly }4\\text{ trained}) = \\frac{\\binom{6}{4}\\binom{8}{0}}{\\binom{14}{4}}= \\frac{15 \\cdot 1}{1001}= \\frac{15}{1001}$</p><p data-end=\"888\" data-start=\"886\">So</p><p data-end=\"952\" data-start=\"890\">$P(A) = \\frac{160}{1001} + \\frac{15}{1001} = \\frac{175}{1001}$</p><p data-end=\"973\" data-start=\"954\"><br/><strong>Now compute $P(B)$ :</strong></p><p data-end=\"1111\" data-start=\"975\">If exactly $2$ of the $4$ interviewed members are trained and the first two interviewed members are both trained, then the order must be</p><p data-end=\"1125\" data-start=\"1113\">$T, T, U, U$</p><p data-end=\"1175\" data-start=\"1127\">where $T$ means trained and $U$ means untrained.</p><p data-end=\"1179\" data-start=\"1177\">So</p><p data-end=\"1259\" data-start=\"1181\">$P(B) = \\frac{6}{14} \\cdot \\frac{5}{13} \\cdot \\frac{8}{12} \\cdot \\frac{7}{11}= \\frac{70}{1001}$</p><p data-end=\"1292\" data-start=\"1282\"><br/>Therefore,</p><p data-end=\"1353\" data-start=\"1294\">$p = P(A) + P(B) = \\frac{175}{1001} + \\frac{70}{1001} = \\frac{245}{1001}$<br/><br/>$\\Rightarrow 1001p = 245$<br/><br/><strong data-end=\"1389\" data-start=\"1378\">Answer:</strong> $\\boxed{245}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529680/go-classes-dpp-gate-cs-probability-probability-based-on-combinations\" target=\"_blank\">GATE Overflow #529680</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Among $60$ students in a class, $28$ earned an $A$ on the midterm, $25$ earned an $A$ on the final exam, and $21$ earned an $A$ on the project. Also, $11$ earned an $A$ on both the midterm and final, $10$ earned an $A$ on both the midterm and project, and $9$ earned an $A$ on both the final and project. If $14$ students did not earn an $A$ on any of the three, what is the probability that a randomly selected student earned an $A$ on all three?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{30}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{20}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{10}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529665\"></a><div itemprop=\"text\"><p data-end=\"292\" data-start=\"92\">Let $M$, $F$, and $P$ represent the sets of students who earned an $A$ on the Midterm, Final, and Project, respectively.<br/><br/>Let $x$ be the number of students who earned an $A$ on all three.<br/><br/>Since $14$ students did not earn an $A$ on any of the three, the number of students who earned at least one $A$ is</p><p data-end=\"424\" data-start=\"410\">$60 - 14 = 46$<br/><br/>Now use the inclusion-exclusion principle:</p><p data-end=\"574\" data-start=\"470\">$n(M \\cup F \\cup P) = n(M) + n(F) + n(P) - n(M \\cap F) - n(M \\cap P) - n(F \\cap P) + n(M \\cap F \\cap P)$<br/><br/>$\\Rightarrow 46 = 28 + 25 + 21 - 11 - 10 - 9 + x$</p><p data-end=\"652\" data-start=\"634\">$\\Rightarrow46 = 74 - 30 + x$</p><p data-end=\"667\" data-start=\"654\">$\\Rightarrow46 = 44 + x$</p><p data-end=\"676\" data-start=\"669\">$\\Rightarrow x = 2$<br/><br/>Thus, $2$ students earned an $A$ on all three.<br/><br/>$\\therefore$ The required probability is $\\frac{2}{60} = \\frac{1}{30}$<br/><br/>So the correct answer is <strong data-end=\"843\" data-start=\"822\">B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529663/go-classes-dpp-gate-cs-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #529663</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"556\" data-start=\"58\">Five candidates, $A$, $B$, $C$, $D$, and $E$, are running for the same office, and exactly one of them wins. The sample space is $\\Omega={A,B,C,D,E}$. Suppose $A$ and $B$ have the same chance of winning. Candidate $C$ has $\\frac{2}{3}$ the chance of $A$. Candidate $D$ has a chance equal to half the sum of the chances of $A$ and $C$. Candidate $E$ has a chance equal to the sum of the chances of $B$ and $D$. Let $F$ be the event that either $A$, $D$, or $E$ wins, so $F={A,D,E}$. Find $P(F)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{5}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{13}{16}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529592\"></a><div itemprop=\"text\"><p data-end=\"700\" data-start=\"682\">Let $P(A)=P(B)=x$.</p><p data-end=\"727\" data-start=\"702\">Then $P(C)=\\frac{2}{3}x$.</p><p data-end=\"828\" data-start=\"729\">Also, $P(D)=\\frac{1}{2}\\left(P(A)+P(C)\\right)=\\frac{1}{2}\\left(x+\\frac{2}{3}x\\right)=\\frac{5}{6}x$.</p><p data-end=\"881\" data-start=\"830\">Then $P(E)=P(B)+P(D)=x+\\frac{5}{6}x=\\frac{11}{6}x$.</p><p data-end=\"918\" data-start=\"883\">Since the total probability is $1$,</p><p data-end=\"948\" data-start=\"920\">$P(A)+P(B)+P(C)+P(D)+P(E)=1$</p><p data-end=\"997\" data-start=\"950\">$x+x+\\frac{2}{3}x+\\frac{5}{6}x+\\frac{11}{6}x=1$</p><p data-end=\"1016\" data-start=\"999\">$\\frac{16}{3}x=1$</p><p data-end=\"1035\" data-start=\"1018\">$x=\\frac{3}{16}$.</p><p data-end=\"1041\" data-start=\"1037\">Now,</p><p data-end=\"1064\" data-start=\"1043\">$P(F)=P(A)+P(D)+P(E)$</p><p data-end=\"1097\" data-start=\"1066\">$=x+\\frac{5}{6}x+\\frac{11}{6}x$</p><p data-end=\"1115\" data-start=\"1099\">$=\\frac{11}{3}x$</p><p data-end=\"1149\" data-start=\"1117\">$=\\frac{11}{3}\\cdot\\frac{3}{16}$</p><p data-end=\"1168\" data-start=\"1151\">$=\\frac{11}{16}$.</p><p data-end=\"1195\" data-start=\"1170\">So, $P(F)=\\frac{11}{16}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529591/go-classes-dpp-gate-da-probability-discrete-probability\" target=\"_blank\">GATE Overflow #529591</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"223\" data-start=\"92\">Suppose $A$ and $B$ are independent events with $0&lt;P(A)&lt;1$ and $0&lt;P(B)&lt;1$. Which of the following statements is/are always correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(A^c\\cap B^c)=(1-P(A))(1-P(B))$<br/></span>",
                "<span style=\"display: inline;\">$P(A\\mid B^c)=P(A)$<br/></span>",
                "<span style=\"display: inline;\">$P(A\\cup B^c)=1-P(B)+P(A)P(B)$<br/></span>",
                "<span style=\"display: inline;\">$P(A\\mid A\\cup B)=P(A)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"529590\"></a><div itemprop=\"text\"><p data-end=\"426\" data-start=\"361\">Since $A$ and $B$ are independent, we know $P(A\\cap B)=P(A)P(B)$.<br/> </p><p data-end=\"535\" data-start=\"428\"><strong>For A:</strong><br/>$P(A^c\\cap B^c)=1-P(A\\cup B)$<br/>$=1-\\big(P(A)+P(B)-P(A)P(B)\\big)$<br/>$=(1-P(A))(1-P(B))$<br/>So <strong>A is correct.</strong><br/> </p><p data-end=\"653\" data-start=\"537\"><strong>For B:</strong><br/>Independence of $A$ and $B$ implies $A$ is also independent of $B^c$, so<br/>$P(A\\mid B^c)=P(A)$<br/>So <strong>B is correct.</strong><br/> </p><p data-end=\"767\" data-start=\"655\"><strong>For C:</strong><br/>$P(A\\cup B^c)=P(A)+P(B^c)-P(A\\cap B^c)$<br/>$=P(A)+(1-P(B))-P(A)(1-P(B))$<br/>$=1-P(B)+P(A)P(B)$<br/>So <strong>C is correct.</strong><br/> </p><p data-end=\"901\" data-start=\"769\"><strong>For D:</strong><br/>$P(A\\mid A\\cup B)=\\dfrac{P(A)}{P(A\\cup B)}$<br/>This equals $P(A)$ only in special cases, not always.<br/>So <strong>D is not always correct.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529589/go-classes-dpp-gate-da-probability-probability-identities\" target=\"_blank\">GATE Overflow #529589</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A company receives emails from three sources: $40\\%$ are promotional emails, $35\\%$ are personal emails, and $25\\%$ are work emails. A filter marks an email as suspicious with probability $0.96$ if it is promotional, with probability $0.08$ if it is personal, and with probability $0.12$ if it is work-related. If an email is marked suspicious, find the probability that it was actually a personal email.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{14}{221}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{20}{221}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{28}{221}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{35}{221}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529586\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"318\" src=\"https://cdn.mathpix.com/snip/images/D6YjM1DjHqss6RIRta2mDXLK2y3FjO7TWuTIMcjufoU.original.fullsize.png\" width=\"568\"/></p><p><br/><br/>Let $P$ be the event that the email is promotional, $Q$ the event that it is personal, $W$ the event that it is work-related, and $S$ the event that the email is marked suspicious.<br/><br/>$P(P)=0.40$, $P(Q)=0.35$, $P(W)=0.25$,<br/><br/>$P(S \\mid P)=0.96$, $P(S \\mid Q)=0.08$, $P(S \\mid W)=0.12$.<br/><br/>We need to find $P(Q \\mid S)$.<br/><br/>By Bayes' theorem,<br/>$P(Q \\mid S)=\\frac{P(S \\mid Q)P(Q)}{P(S)}$.<br/><br/>Now,<br/>$P(S)=P(S \\mid P)P(P)+P(S \\mid Q)P(Q)+P(S \\mid W)P(W)$.<br/><br/>$\\Rightarrow P(S)=0.96\\cdot 0.40+0.08\\cdot 0.35+0.12\\cdot 0.25$.<br/><br/>$\\Rightarrow P(S)=0.384+0.028+0.030=0.442$.<br/><br/>$\\therefore P(Q \\mid S)=\\frac{0.08\\cdot 0.35}{0.442}=\\frac{0.028}{0.442}=\\frac{28}{442}=\\frac{14}{221}$.<br/><br/>Hence, the required probability is $\\boxed{\\frac{14}{221}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529585/go-classes-dpp-gate-da-probability-bayes-theorem\" target=\"_blank\">GATE Overflow #529585</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disease affects $2\\%$ of a population. A medical test gives a positive result in $98\\%$ of infected cases and in $3\\%$ of non-infected cases. If a person is selected at random and the test result is positive, find the probability that the person actually has the disease.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{49}{122}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{98}{101}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{49}{101}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529578\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"355\" src=\"https://cdn.mathpix.com/snip/images/kN9iaKXJyAM3yoSBompaovODduIWHDtaXhvydxgtCRc.original.fullsize.png\" width=\"546\"/></p><p><br/>Let $D$ be the event that the person has the disease, and let $T$ be the event that the test result is positive.<br/><br/>$P(D)=0.02$,<br/><br/>$P(D^c)=0.98$,<br/><br/>$P(T \\mid D)=0.98$,<br/><br/>$P(T \\mid D^c)=0.03$.<br/><br/>We need to find $P(D \\mid T)$.<br/><br/>By Bayes' theorem,<br/><br/>$P(D \\mid T)=\\frac{P(T \\mid D)P(D)}{P(T)}$.<br/><br/>Now,<br/>$P(T)=P(T \\mid D)P(D)+P(T \\mid D^c)P(D^c)$.<br/><br/>$\\Rightarrow P(T)=0.98\\cdot 0.02+0.03\\cdot 0.98$.<br/><br/>$\\Rightarrow P(T)=0.0196+0.0294=0.049$.<br/><br/>$\\therefore P(D \\mid T)=\\frac{0.98\\cdot 0.02}{0.049}=\\frac{0.0196}{0.049}=0.4$.<br/><br/>$\\Rightarrow P(D \\mid T)=\\frac{2}{5}$.<br/><br/>Therefore, the required probability is $\\boxed{\\frac{2}{5}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529577/go-classes-dpp-gate-cs-probability-bayes-theorem\" target=\"_blank\">GATE Overflow #529577</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume $P(A)=0.4$, $P(B)=0.5$, and $P(A \\cup B)=0.7$. Also, $P(C)=0.6$, $P(B \\cap C) = 0.25$, and and $P(C \\mid A \\cap B)=\\frac{1}{2}$. Find $P(A \\mid B \\cap C)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{2}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{8}$<br/></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529576\"></a><div itemprop=\"text\"><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">1. Finding the probability of the intersection of A and B.</b><br/><br/>Use the general addition rule of probability:</p><p>$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</p><p data-path-to-node=\"12\">Substitute the given values:</p><p>$$0.7 = 0.4 + 0.5 - P(A \\cap B)$$</p><p>$$0.7 = 0.9 - P(A \\cap B)$$</p><p>$$P(A \\cap B) = 0.2$$<br/><br/><b data-index-in-node=\"0\" data-path-to-node=\"16\">2. Finding the probability of the intersection of all three events.</b><br/><br/>Use the conditional probability formula for $C$ given $A \\cap B$:</p><p>$$P(C \\mid A \\cap B) = \\frac{P(A \\cap B \\cap C)}{P(A \\cap B)}$$</p><p data-path-to-node=\"18\">Substitute the known values:</p><p>$$\\frac{1}{2} = \\frac{P(A \\cap B \\cap C)}{0.2}$$<br/>$$P(A \\cap B \\cap C) = 0.5 \\cdot 0.2 = 0.1$$<br/><br/><br/><b data-index-in-node=\"0\" data-path-to-node=\"21\">3. Solving for the final target.</b><br/><br/>Use the conditional probability formula for our target, $A$ given $B \\cap C$:</p><p>$$P(A \\mid B \\cap C) = \\frac{P(A \\cap B \\cap C)}{P(B \\cap C)}$$</p><p data-path-to-node=\"23\">Substitute the value we found in $(2)$ and the given value $P(B \\cap C) = 0.25$:</p><p>$$P(A \\mid B \\cap C) = \\frac{0.1}{0.25} = \\frac{10}{25}$$</p><p data-path-to-node=\"26\"><br/>$$\\boxed{\\therefore P(A \\mid B \\cap C) = \\frac{2}{5}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529575/go-classes-dpp-gate-cs-probability-conditional-probability-%26-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #529575</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a probability space, it is given that $P(A)=a$, $P(B)=b$, and $P(B \\mid A^c)=e$. Also, $P(A \\mid B^c)=f$. Determine $P(A \\mid B)$ and $P(B \\mid A)$ in terms of $a$, $b$, $e$, and $f$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(A \\mid B)=\\frac{a-(1-b)f}{b}, \\quad P(B \\mid A)=\\frac{b-(1-a)e}{a}$<br/></span>",
                "<span style=\"display: inline;\">$P(A \\mid B)=\\frac{a+(1-b)f}{b}, \\quad P(B \\mid A)=\\frac{b-(1-a)e}{a}$<br/></span>",
                "<span style=\"display: inline;\">$P(A \\mid B)=\\frac{a-(1-b)f}{b}, \\quad P(B \\mid A)=\\frac{b+(1-a)e}{a}$<br/></span>",
                "<span style=\"display: inline;\">$P(A \\mid B)=\\frac{a+(1-b)f}{b}, \\quad P(B \\mid A)=\\frac{b+(1-a)e}{a}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529574\"></a><div itemprop=\"text\"><p><strong>First find $P(B \\mid A)$:</strong></p><p>Using total probability with respect to $A$ and $A^c$,<br/>$P(B)=P(B \\mid A)P(A)+P(B \\mid A^c)P(A^c)$.<br/><br/>$\\Rightarrow b=P(B \\mid A)\\cdot a+e(1-a)$.<br/><br/>$\\Rightarrow P(B \\mid A)=\\frac{b-e(1-a)}{a}$.</p><p><br/><strong>Now find $P(A \\mid B)$:</strong></p><p>Using total probability with respect to $B$ and $B^c$,<br/>$P(A)=P(A \\mid B)P(B)+P(A \\mid B^c)P(B^c)$.<br/><br/>$\\Rightarrow a=P(A \\mid B)\\cdot b+f(1-b)$.<br/><br/>$\\Rightarrow P(A \\mid B)=\\frac{a-f(1-b)}{b}$.<br/><br/><br/>$\\boxed{\\therefore P(A \\mid B)=\\frac{a-f(1-b)}{b} \\qquad \\&amp; \\qquad P(B \\mid A)=\\frac{b-e(1-a)}{a}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529573/go-classes-dpp-gate-cs-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529573</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $E$ and $F$ be two independent events with $P(E)=\\frac{1}{3}$ and $P(F)=\\frac{1}{2}$. Let $G$ be an event such that $G \\subseteq E'$, $P(G)=\\frac{1}{4}$, and $G$ is independent of $F$. Find $P(E \\mid F \\cup G)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{2}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{15}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"529572\"></a><div itemprop=\"text\">We need<br/> $P(E \\mid F \\cup G)=\\frac{P(E \\cap (F \\cup G))}{P(F \\cup G)}$.<br/> <br/> First simplify the numerator:<br/> $E \\cap (F \\cup G)=(E \\cap F)\\cup (E \\cap G)$.<br/> <br/> Since $G \\subseteq E'$, we have<br/> $E \\cap G=\\emptyset$.<br/> <br/> $\\Rightarrow P(E \\cap (F \\cup G))=P(E \\cap F)$.<br/> <br/> Since $E$ and $F$ are independent,<br/> $P(E \\cap F)=P(E)P(F)=\\frac{1}{3}\\cdot \\frac{1}{2}=\\frac{1}{6}$.<br/> <br/> Now compute the denominator:<br/> $P(F \\cup G)=P(F)+P(G)-P(F \\cap G)$.<br/> <br/> Since $F$ and $G$ are independent,<br/> $P(F \\cap G)=P(F)P(G)=\\frac{1}{2}\\cdot \\frac{1}{4}=\\frac{1}{8}$.<br/> <br/> Thus<br/> $P(F \\cup G)=\\frac{1}{2}+\\frac{1}{4}-\\frac{1}{8}=\\frac{4}{8}+\\frac{2}{8}-\\frac{1}{8}=\\frac{5}{8}$.<br/> <br/> $\\therefore P(E \\mid F \\cup G)=\\frac{1/6}{5/8}=\\frac{1}{6}\\cdot \\frac{8}{5}=\\frac{4}{15}$.<br/> <br/> $\\boxed{P(E \\mid F \\cup G)=\\frac{4}{15}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529570/go-classes-dpp-gate-cs-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529570</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Ten tickets numbered $1$ to $10$ are sampled one at a time with replacement. The sampling is repeated $7$ times. Find the probability that the second largest number among the selected tickets is exactly $8$.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\dfrac{8^7-2(7^7)+14(8^6-7^6)}{10^7}$<br/><br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\dfrac{14(8^6-7^6)}{10^7}$<br/><br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\dfrac{8^7-7^7+14\\cdot 8^6}{10^7}$<br/><br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\dfrac{8^7-7^7}{10^7}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539236\"></a><div itemprop=\"text\"><p>answer is A<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=16656874469657398754\"/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8460495069677363598\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529514/go-classes-dpp-gate-cs-probability-probability-with-independent-trials\" target=\"_blank\">GATE Overflow #529514</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 48 - Engineering Mathematics (Axioms & Conditional Probability - Part 4)",
    "testLabel": "DPP 48",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A college cricket squad has $11$ players consisting of $4$ batsmen, $3$ all-rounders, $3$ bowlers and $1$ wicket keeper. Four players are selected randomly. Given that the selection contains at least one batsman and at least one bowler, find the probability that it contains exactly one all-rounder.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{56}{113}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{63}{113}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{14}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{21}{37}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529513\"></a><div itemprop=\"text\">Let $E$ be the event that the selection contains at least one batsman and at least one bowler.<br/> <br/> Let $F$ be the event that the selection contains exactly one all-rounder.<br/> <br/> We need to find $P(F \\mid E)=\\frac{n(E \\cap F)}{n(E)}$.<br/> <br/> First count $n(E)$.<br/> <br/> Total number of ways to select $4$ players from $11$ is $\\binom{11}{4}=330$.<br/> <br/> Number of selections with no batsman is $\\binom{7}{4}=35$.<br/> <br/> Number of selections with no bowler is $\\binom{8}{4}=70$.<br/> <br/> Number of selections with neither batsman nor bowler is $\\binom{4}{4}=1$.<br/> <br/> So,<br/> $n(E)=330-35-70+1=226$.<br/> <br/> Now count $n(E \\cap F)$.<br/> <br/> Choose exactly one all-rounder from the $3$ all-rounders: $\\binom{3}{1}=3$ ways.<br/> <br/> Now choose the remaining $3$ players from the $8$ non-all-rounders, namely $4$ batsmen, $3$ bowlers and $1$ wicket keeper, with at least one batsman and at least one bowler.<br/> <br/> Total ways to choose these $3$ players is $\\binom{8}{3}=56$.<br/> <br/> Selections with no batsman: $\\binom{4}{3}=4$.<br/> <br/> Selections with no bowler: $\\binom{5}{3}=10$.<br/> <br/> So the required number is<br/> $56-4-10=42$.<br/> <br/> Hence,<br/> $n(E \\cap F)=3 \\cdot 42=126$.<br/> <br/> Therefore,<br/> $P(F \\mid E)=\\frac{126}{226}=\\frac{63}{113}$.<br/> <br/> So the required probability is $\\boxed{\\frac{63}{113}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529512/go-classes-dpp-gate-cs-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529512</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A bag contains $10$ blue marbles, $20$ green marbles, $30$ red marbles and $40$ yellow marbles. A marble is drawn from the bag, its colour is recorded, and then it is replaced in the bag. This process is repeated $4$ times. Find the probability that exactly $3$ distinct colours appear in the $4$ draws and the colour that appears twice is not yellow.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{171}{625}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{189}{625}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{303}{625}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{81}{250}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529511\"></a><div itemprop=\"text\"><p>Let<br/>$p_B=\\frac{10}{100}=\\frac{1}{10}$,<br/><br/>$p_G=\\frac{20}{100}=\\frac{1}{5}$,<br/><br/>$p_R=\\frac{30}{100}=\\frac{3}{10}$,<br/><br/>and<br/><br/>$p_Y=\\frac{40}{100}=\\frac{2}{5}$.</p><p>We need the probability that in $4$ draws, exactly $3$ distinct colours appear, with one colour appearing twice and the other two colours appearing once each, and the repeated colour is not yellow.</p><p>For any fixed choice of repeated colour and two single colours, the number of arrangements of the pattern $(2,1,1)$ is<br/>$\\frac{4!}{2!}=12$.</p><p><br/>So we consider three cases.</p><p><strong>Case $1$: blue is repeated.</strong></p><p>The required probability is $12\\cdot \\left(\\frac{1}{10}\\right)^2 \\left[\\left(\\frac{1}{5}\\cdot\\frac{3}{10}\\right)+\\left(\\frac{1}{5}\\cdot\\frac{2}{5}\\right)+\\left(\\frac{3}{10}\\cdot\\frac{2}{5}\\right)\\right]$.</p><p>$\\Rightarrow 12\\cdot \\frac{1}{100}\\left(\\frac{3}{50}+\\frac{2}{25}+\\frac{3}{25}\\right)=12\\cdot \\frac{1}{100}\\cdot \\frac{13}{50}$<br/><br/>$\\qquad=\\frac{39}{1250}$.<br/><br/><br/><strong>Case $2$: green is repeated.</strong></p><p>The required probability is $12\\cdot \\left(\\frac{1}{5}\\right)^2 \\left[\\left(\\frac{1}{10}\\cdot\\frac{3}{10}\\right)+\\left(\\frac{1}{10}\\cdot\\frac{2}{5}\\right)+\\left(\\frac{3}{10}\\cdot\\frac{2}{5}\\right)\\right]$.<br/><br/>$\\Rightarrow 12\\cdot \\frac{1}{25}\\left(\\frac{3}{100}+\\frac{1}{25}+\\frac{3}{25}\\right)=12\\cdot \\frac{1}{25}\\cdot \\frac{19}{100}$<br/><br/>$\\qquad=\\frac{57}{625}$.<br/><br/><br/><strong>Case $3$: red is repeated.</strong></p><p>The required probability is $12\\cdot \\left(\\frac{3}{10}\\right)^2 \\left[\\left(\\frac{1}{10}\\cdot\\frac{1}{5}\\right)+\\left(\\frac{1}{10}\\cdot\\frac{2}{5}\\right)+\\left(\\frac{1}{5}\\cdot\\frac{2}{5}\\right)\\right]$.</p><p>$\\Rightarrow12\\cdot \\frac{9}{100}\\left(\\frac{1}{50}+\\frac{1}{25}+\\frac{2}{25}\\right)=12\\cdot \\frac{9}{100}\\cdot \\frac{7}{50}$<br/><br/>$\\qquad=\\frac{189}{1250}$.<br/><br/><br/>Hence the required probability is<br/><br/>$\\frac{39}{1250}+\\frac{57}{625}+\\frac{189}{1250}=\\frac{39}{1250}+\\frac{114}{1250}+\\frac{189}{1250}=\\frac{342}{1250}=\\frac{171}{625}$.</p><p>Therefore, the required probability is $\\boxed{\\frac{171}{625}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529508/go-classes-dpp-gate-cs-probability-probability-with-independent-trials\" target=\"_blank\">GATE Overflow #529508</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"3\">A sample space has three events, $A$, $B$, and $C$. You are given the following probabilities regarding these events:</p><ul><li data-path-to-node=\"3\">$P(A') = 1/2$<br/> </li><li data-path-to-node=\"3\">$P(B') = 2/3$<br/> </li><li data-path-to-node=\"3\">$P(C) = 1/4$</li></ul><p data-path-to-node=\"4\">You are also given that the probability of <b data-index-in-node=\"43\" data-path-to-node=\"4\">exactly two</b> of these three events occurring is $1/4$, and the probability of all three events occurring simultaneously is $1/12$.</p><p data-path-to-node=\"5\">What is the probability that at least one of the three events occurs, $P(A \\cup B \\cup C)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7/12$<br/></span>",
                "<span style=\"display: inline;\">$5/8$<br/></span>",
                "<span style=\"display: inline;\">$2/3$<br/></span>",
                "<span style=\"display: inline;\">$3/4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529507\"></a><div itemprop=\"text\"><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">1. Finding the individual probabilities of $A$ and $B$.</b></p><p data-path-to-node=\"10\">Using the complement rule $P(E) = 1 - P(E')$:</p><p data-path-to-node=\"10\">$P(A) = 1 - P(A') = 1 - 1/2 = 1/2$</p><p data-path-to-node=\"10\">$P(B) = 1 - P(B') = 1 - 2/3 = 1/3$</p><p data-path-to-node=\"10\">We are already given $P(C) = 1/4$.</p><p data-path-to-node=\"11\">Let's find the sum of these individual probabilities:</p><p data-path-to-node=\"11\">$P(A) + P(B) + P(C) = 1/2 + 1/3 + 1/4$</p><p data-path-to-node=\"11\">To add these, find a common denominator ($12$):</p><p data-path-to-node=\"11\">$6/12 + 4/12 + 3/12 = 13/12$<br/> </p><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">2. Relating \"Exactly Two\" to the intersections.</b></p><p data-path-to-node=\"12\">The probability that exactly two events occur is the sum of the probabilities of the regions where strictly two circles overlap in a Venn diagram.</p><p data-path-to-node=\"12\">If we simply add the pairwise intersections $P(A \\cap B) + P(A \\cap C) + P(B \\cap C)$, we are counting the triple intersection $P(A \\cap B \\cap C)$ three times (once for each pair).</p><p data-path-to-node=\"12\">Since we strictly want \"exactly two\" (meaning the third event does NOT happen), we must subtract the triple intersection out of all three pairs:</p><p data-path-to-node=\"12\">$P(\\text{Exactly Two}) = P(A \\cap B) + P(A \\cap C) + P(B \\cap C) - 3 \\cdot P(A \\cap B \\cap C)$<br/> </p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">3. Solving for the sum of the pairwise intersections.</b></p><p data-path-to-node=\"13\">We are given $P(\\text{Exactly Two}) = 1/4$ and $P(A \\cap B \\cap C) = 1/12$.<br/><br/>Substitute these into our derived formula:</p><p data-path-to-node=\"13\">$\\Rightarrow 1/4 = [P(A \\cap B) + P(A \\cap C) + P(B \\cap C)] - 3 \\cdot (1/12)$</p><p data-path-to-node=\"13\">$\\Rightarrow 1/4 = [P(A \\cap B) + P(A \\cap C) + P(B \\cap C)] - 1/4$</p><p data-path-to-node=\"13\">$\\Rightarrow 1/4 + 1/4 = P(A \\cap B) + P(A \\cap C) + P(B \\cap C)$</p><p data-path-to-node=\"13\">$\\Rightarrow 1/2 = P(A \\cap B) + P(A \\cap C) + P(B \\cap C)$<br/> </p><p data-path-to-node=\"14\"><b data-index-in-node=\"0\" data-path-to-node=\"14\">4. Applying the Principle of Inclusion-Exclusion.</b></p><p data-path-to-node=\"14\">The formula for the union of three events is:</p><p data-path-to-node=\"14\">$P(A \\cup B \\cup C) = [P(A) + P(B) + P(C)] - [P(A \\cap B) + P(A \\cap C) + P(B \\cap C)] + P(A \\cap B \\cap C)$</p><p data-path-to-node=\"15\">Substitute all the values we've calculated:</p><p data-path-to-node=\"15\">$\\Rightarrow P(A \\cup B \\cup C) = (13/12) - (1/2) + (1/12)$</p><p data-path-to-node=\"15\">$\\Rightarrow P(A \\cup B \\cup C) = 13/12 - 6/12 + 1/12$</p><p data-path-to-node=\"15\">$\\Rightarrow P(A \\cup B \\cup C) = 8/12=2/3$</p><p data-path-to-node=\"15\">$\\boxed{\\therefore P(A \\cup B \\cup C) = 2/3}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529506/go-classes-dpp-gate-cs-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #529506</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ and $B$ be two events in a sample space such that $P(A' \\cap B')=\\frac{1}{6}$, $P(A \\mid B)=\\frac{3}{4}$, and $P(B \\mid A')=\\frac{2}{5}$. Find $P(A)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{11}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{13}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{6}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{9}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529504\"></a><div itemprop=\"text\">Let $x=P(A \\cap B)$, $y=P(A \\cap B')$, $z=P(A' \\cap B)$, and $w=P(A' \\cap B')$.<br/> <br/> Given<br/> $w=\\frac{1}{6}$.<br/> <br/> Also,<br/> $P(A \\mid B)=\\frac{x}{x+z}=\\frac{3}{4}$.<br/> <br/> $\\Rightarrow 4x=3x+3z$,<br/> <br/> $\\Rightarrow x=3z$.<br/> <br/> Now,<br/> $P(B \\mid A')=\\frac{z}{z+w}=\\frac{2}{5}$.<br/> <br/> Substituting $w=\\frac{1}{6}$,<br/> <br/> $\\Rightarrow \\frac{z}{z+\\frac{1}{6}}=\\frac{2}{5}$.<br/> <br/> $\\Rightarrow 5z=2z+\\frac{2}{6}$,<br/> <br/> $\\Rightarrow 3z=\\frac{1}{3}$,<br/> <br/> $\\Rightarrow z=\\frac{1}{9}$.<br/> <br/> $\\therefore x=3z=3\\cdot\\frac{1}{9}=\\frac{1}{3}$.<br/> <br/> Now use<br/> $x+y+z+w=1$.<br/> <br/> $\\Rightarrow y=1-\\frac{1}{3}-\\frac{1}{9}-\\frac{1}{6}$<br/> <br/> $\\qquad =1-\\frac{6}{18}-\\frac{2}{18}-\\frac{3}{18}=\\frac{7}{18}$.<br/> <br/> $\\Rightarrow P(A)=x+y=\\frac{1}{3}+\\frac{7}{18} =\\frac{6}{18}+\\frac{7}{18} =\\frac{13}{18}$.<br/> <br/> Therefore, the required probability is $\\boxed{\\frac{13}{18}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529503/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529503</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ and $B$ be two events in a sample space such that $P(A \\cup B) = 1$. Given $P(A) = p$ and $P(B) = q$ (where $q &gt; 0$), what is the value of $P(A^c \\mid B)$ in terms of $p$ and $q$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1 - p}{q}$ <br/></span>",
                "<span style=\"display: inline;\">$\\frac{1 - q}{p}$ <br/></span>",
                "<span style=\"display: inline;\">$1 - p$ <br/></span>",
                "<span style=\"display: inline;\">$\\frac{p}{q}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529500\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Using the formula for conditional probability, we can write:</p><p data-path-to-node=\"8\">$P(A^c \\mid B) = P(A^c \\cap B) / P(B)$</p><p data-path-to-node=\"9\">We are given that $P(A \\cup B) = 1$. By the general addition rule of probability, we know:</p><p data-path-to-node=\"9\">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p><p data-path-to-node=\"10\">Substitute the value $1$ into the equation:</p><p data-path-to-node=\"10\">$1 = P(A) + P(B) - P(A \\cap B)$</p><p data-path-to-node=\"11\">Now, let's rearrange this equation to isolate the terms involving $A$ on one side and $B$ on the other:</p><p data-path-to-node=\"11\">$P(B) - P(A \\cap B) = 1 - P(A)$</p><p data-path-to-node=\"12\"><br/>Recall two important probability rules:</p><ul><li data-path-to-node=\"12\">First, the complement rule tells us that $1 - P(A) = P(A^c)$.<br/> </li><li data-path-to-node=\"12\">Second, the probability of event $B$ can be split into two mutually exclusive parts: the part of $B$ that overlaps with $A$, and the part of $B$ that does not overlap with $A$. Therefore, $P(B) = P(A \\cap B) + P(A^c \\cap B)$.<br/> </li></ul><p data-path-to-node=\"12\">Rearranging this gives us $P(A^c \\cap B) = P(B) - P(A \\cap B)$.</p><p data-path-to-node=\"13\">Substitute these two facts back into our rearranged addition rule:</p><p data-path-to-node=\"13\">$P(A^c \\cap B) = P(A^c)$</p><p data-path-to-node=\"14\">Since $P(A) = p$, we know $P(A^c) = 1 - p$. Therefore, $P(A^c \\cap B) = 1 - p$.</p><p data-path-to-node=\"15\">Finally, substitute this numerator back into our original conditional probability formula, using $P(B) = q$ for the denominator:</p><p data-path-to-node=\"15\">$\\boxed{\\therefore P(A^c \\mid B) = (1 - p) / q}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529498/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529498</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Six fair coins are tossed simultaneously and their outcomes are recorded from left to right. Given that at least one pair of consecutive heads occurs, find the probability that exactly three heads occur.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{15}{43}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{16}{43}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{20}{43}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529497\"></a><div itemprop=\"text\"><p>Let $A$ be the event that at least one pair of consecutive heads occurs, and let $B$ be the event that exactly three heads occur.</p><p>Then<br/>$P(B \\mid A)=\\frac{P(A \\cap B)}{P(A)}$.</p><p>Total number of outcomes when $6$ fair coins are tossed is<br/>$2^6=64$.</p><p><strong>Now count event $A$ :</strong></p><p>Instead of counting $A$ directly, count its complement: outcomes with no two consecutive heads.</p><p>For $6$ coins, the number of outcomes with no two consecutive heads is<br/>$\\binom{7}{0}+\\binom{6}{1}+\\binom{5}{2}+\\binom{4}{3}=1+6+10+4=21$.</p><p>So the number of outcomes in $A$ is<br/>$64-21=43$.</p><p><strong>Now count $A \\cap B$ :</strong></p><p>The total number of outcomes with exactly $3$ heads is $\\binom{6}{3}=20$.<br/><br/>Among these, the number with no two consecutive heads is $\\binom{4}{3}=4$.<br/><br/>So the number of outcomes with exactly $3$ heads and at least one pair of consecutive heads is<br/>$20-4=16$.</p><p>$\\Rightarrow P(B \\mid A)=\\frac{16}{43}$.</p><p>Therefore, the required probability is $\\boxed{\\frac{16}{43}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529494/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529494</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An unbalanced die with $6$ faces, numbered $1$ to $6$, is thrown once. The probabilities of obtaining $1$, $3$, and $5$ are equal. The probabilities of obtaining $2$ and $4$ are also equal. The probability of getting an even number is twice the probability of getting an odd number. If $P(X=6 \\mid X&gt;3)=\\frac{1}{2}$, find $P(X&gt;4)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{10}{27}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{27}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{9}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{13}{27}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529493\"></a><div itemprop=\"text\">Let $P(1)=P(3)=P(5)=x$, $P(2)=P(4)=y$, and $P(6)=z$.<br/> <br/> Since the probability of getting an even number is twice the probability of getting an odd number, we have<br/> $2y+z=2(3x)=6x$.<br/> <br/> Also,<br/> $P(X=6 \\mid X&gt;3)=\\frac{1}{2}$.<br/> <br/> Now $X&gt;3$ means the outcomes are $4,5,6$, so<br/> $\\frac{z}{x+y+z}=\\frac{1}{2}$.<br/> <br/> $\\Rightarrow 2z=x+y+z$<br/> <br/> $\\Rightarrow z=x+y$.<br/> <br/> Substitute this into $2y+z=6x$:<br/> $2y+(x+y)=6x$,<br/> <br/> $\\Rightarrow x+3y=6x$,<br/> <br/> $\\Rightarrow 3y=5x$,<br/> <br/> $\\therefore y=\\frac{5x}{3}$.<br/> <br/> $\\Rightarrow z=x+y=x+\\frac{5x}{3}=\\frac{8x}{3}$.<br/> <br/> Using total probability,<br/> <br/> $3x+2y+z=1$.<br/> <br/> $\\Rightarrow 3x+2\\left(\\frac{5x}{3}\\right)+\\frac{8x}{3}=1$.<br/> <br/> $\\Rightarrow 3x+\\frac{10x}{3}+\\frac{8x}{3}=1$<br/> <br/> $\\Rightarrow 3x+6x=1$<br/> <br/> $\\Rightarrow 9x=1$<br/> <br/> $\\Rightarrow x=\\frac{1}{9}$.<br/> <br/> Now,<br/> $P(X&gt;4)=P(5)+P(6)=x+z=\\frac{1}{9}+\\frac{8}{27}=\\frac{3}{27}+\\frac{8}{27}=\\frac{11}{27}$.<br/> <br/> Therefore, the required probability is $\\boxed{P(X&gt;4)=\\frac{11}{27}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529492/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529492</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A couple has $2$ children. Assume each child is equally likely to be a boy or a girl, independently, and each child is equally likely to be born on any of the $7$ days of the week. You are told that at least one of the children is a boy born on a Tuesday. Find the probability that both children are boys.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/3$ <br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$13/27$<br/></span>",
                "<span style=\"display: inline;\">$2/3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529489\"></a><div itemprop=\"text\">Let $E$ be the event that at least one child is a boy born on Tuesday.<br/> <br/> Each child has $14$ equally likely possibilities: $7$ birth days for a boy and $7$ birth days for a girl. So the total number of equally likely outcomes for $2$ children is $14^2 = 196$.<br/> <br/> To count $E$, use the complement. The number of outcomes in which neither child is a boy born on Tuesday is $13^2 = 169$. Hence,<br/> $|E| = 196 - 169 = 27$.<br/> <br/> Now count the outcomes in $E$ for which both children are boys. If both children are boys, then there are $7^2 = 49$ possible day combinations. Among these, the number with no boy born on Tuesday is $6^2 = 36$. So the number of favorable outcomes is<br/> $49 - 36 = 13$.<br/> <br/> Therefore,<br/> $P(\\text{both children are boys} \\mid E) = \\frac{13}{27}$.<br/> <br/> So the required probability is $\\boxed{\\frac{13}{27}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529488/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529488</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"234\" data-start=\"71\">Ten distinct emails arrive independently over a day. Each email is equally likely to arrive in any one of the $5$ one-hour time slots, independently of the others.</p><p data-end=\"393\" data-start=\"236\">What is the probability that the emails arrived in exactly two time slots, with exactly $6$ emails in one of those slots and exactly $4$ emails in the other?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{10}{6}2}{5^{10}}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{10}{6}}{5^{10}}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5\\cdot 4\\cdot \\binom{10}{6}}{5^{10}}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{10}{6}2^ {10}}{5^{10}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529108\"></a><div itemprop=\"text\"><p data-end=\"709\" data-start=\"595\">Each of the $10$ distinct emails can go to any of the $5$ time slots, so the total number of outcomes is $5^{10}$.</p><p data-end=\"774\" data-start=\"711\">To get exactly two occupied time slots with counts $6$ and $4$:</p><p data-end=\"867\" data-start=\"776\">First choose the $2$ time slots that are occupied. This can be done in $\\binom{5}{2}$ ways.</p><p data-end=\"1008\" data-start=\"869\">Among these two chosen slots, decide which one receives the $6$ emails and which one receives the $4$ emails. This can be done in $2$ ways.</p><p data-end=\"1201\" data-start=\"1010\">Now choose which $6$ of the $10$ distinct emails go into the slot containing $6$ emails. This can be done in $\\binom{10}{6}$ ways. The remaining $4$ emails must go into the other chosen slot.</p><p data-end=\"1241\" data-start=\"1203\">So the number of favorable outcomes is</p><p data-end=\"1285\" data-start=\"1243\">$\\binom{5}{2}\\cdot 2 \\cdot \\binom{10}{6}$.</p><p data-end=\"1320\" data-start=\"1287\">Hence the required probability is $\\boxed{\\frac{\\binom{5}{2}\\cdot 2 \\cdot \\binom{10}{6}}{5^{10}}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529107/go-classes-dpp-gate-cs-da-probability-occupancy-problem\" target=\"_blank\">GATE Overflow #529107</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"252\" data-start=\"71\">A number is selected uniformly at random from the integers between $1000$ and $9999$ inclusive. What is the probability that the selected number contains the digit $5$ exactly once?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{4 \\cdot 9^3}{9000}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{4 \\cdot 8^3}{9000}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{297}{1000}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{4 \\cdot 9^2}{9000}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529106\"></a><div itemprop=\"text\"><p data-end=\"397\" data-start=\"388\">$ \\text{There are } 9999-1000+1=9000 \\text{ total four-digit integers.} $</p><p data-end=\"178\" data-start=\"107\">$ \\text{We count how many contain the digit } 5 \\text{ exactly once.} $</p><p data-end=\"225\" data-start=\"180\">$ \\text{Case 1: the thousands digit is } 5. $</p><p data-end=\"348\" data-start=\"227\">$ \\text{Then each of the other three digits can be any digit except } 5, \\text{ so there are } 9^3=729 \\text{ numbers.} $</p><p data-end=\"429\" data-start=\"350\">$ \\text{Case 2: the digit } 5 \\text{ is in one of the other three positions.} $</p><p data-end=\"498\" data-start=\"431\">$ \\text{There are } 3 \\text{ choices for the position of the } 5. $</p><p data-end=\"604\" data-start=\"500\">$ \\text{The thousands digit can be any nonzero digit except } 5, \\text{ so it has } 8 \\text{ choices.} $</p><p data-end=\"717\" data-start=\"606\">$ \\text{Each of the remaining two digits can be any digit except } 5, \\text{ so each has } 9 \\text{ choices.} $</p><p data-end=\"795\" data-start=\"719\">$ \\text{Thus this case gives } 3 \\cdot 8 \\cdot 9^2 = 1944 \\text{ numbers.} $</p><p data-end=\"848\" data-start=\"797\">$ \\text{Total favorable numbers} = 729+1944=2673. $</p><p data-end=\"929\" data-start=\"850\">$ \\text{Therefore, the probability is } \\frac{2673}{9000} = \\frac{297}{1000}. $</p><p data-end=\"959\" data-is-only-node=\"\" data-start=\"931\">$ \\boxed{\\frac{297}{1000}} $</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529105/go-classes-dpp-gate-cs-da-probability-counting-%26-probability\" target=\"_blank\">GATE Overflow #529105</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 49 - Engineering Mathematics (Axioms & Conditional Probability - Part 5)",
    "testLabel": "DPP 49",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"136\" data-start=\"71\">Let $A$, $B$, and $C$ be events in a probability space such that:</p><p data-end=\"151\" data-start=\"138\">$P(A)=P(B)=p$</p><p data-end=\"180\" data-start=\"153\">$A$ and $B$ are independent</p><p data-end=\"199\" data-start=\"182\">$P(A \\cup B)=3/4$</p><p data-end=\"223\" data-start=\"201\">$P(C \\mid A \\cap B)=1$</p><p data-end=\"251\" data-start=\"225\">$P(C \\mid A^c \\cap B^c)=0$</p><p data-end=\"263\" data-start=\"253\">$P(C)=1/2$</p><p data-end=\"290\" data-start=\"265\">What is the value of $p$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/4$<br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3-\\sqrt{5}}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{\\sqrt{5}-1}{2}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529103\"></a><div itemprop=\"text\"><p data-end=\"440\" data-start=\"380\">Since $A$ and $B$ are independent and $P(A)=P(B)=p$, we have</p><p data-end=\"460\" data-start=\"442\">$P(A \\cap B)=p^2$.</p><p data-end=\"467\" data-start=\"462\">Also,</p><p data-end=\"520\" data-start=\"469\">$P(A \\cup B)=P(A)+P(B)-P(A \\cap B)=p+p-p^2=2p-p^2$.</p><p data-end=\"556\" data-start=\"522\">We are given $P(A \\cup B)=3/4$, so</p><p data-end=\"571\" data-start=\"558\">$2p-p^2=3/4$.</p><p data-end=\"585\" data-start=\"573\">Rearranging,</p><p data-end=\"602\" data-start=\"587\">$p^2-2p+3/4=0$.</p><p data-end=\"612\" data-start=\"604\">Solving,</p><p data-end=\"659\" data-start=\"614\">$p=\\frac{2\\pm\\sqrt{4-3}}{2}=\\frac{2\\pm1}{2}$,</p><p data-end=\"663\" data-start=\"661\">so</p><p data-end=\"691\" data-start=\"665\">$p=1/2 \\text{ or } p=3/2$.</p><p data-end=\"744\" data-start=\"693\">Since a probability cannot exceed $1$, we must have</p><p data-end=\"754\" data-start=\"746\">$p=1/2$.</p><p data-end=\"832\" data-start=\"756\">Therefore, the correct answer is $\\boxed{1/2}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529102/go-classes-dpp-gate-cs-da-probability-independent-events\" target=\"_blank\">GATE Overflow #529102</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"240\" data-start=\"71\">A fair coin is tossed repeatedly until either the pattern $HTH$ or the pattern $THT$ appears for the first time. What is the probability that $HTH$ appears before $THT$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$3/5$<br/></span>",
                "<span style=\"display: inline;\">$2/3$<br/></span>",
                "<span style=\"display: inline;\">$5/8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529101\"></a><div itemprop=\"text\"><p data-end=\"402\" data-start=\"296\">Let $p$ be the probability that $HTH$ appears before $THT$ when we start with no relevant previous tosses.</p><p data-end=\"469\" data-start=\"404\">We use states based on the current useful ending of the sequence.</p><p data-end=\"474\" data-start=\"471\">Let</p><p data-end=\"519\" data-start=\"476\">$p$ = probability of success from the start</p><p data-end=\"583\" data-start=\"521\">$p_H$ = probability of success given the current ending is $H$</p><p data-end=\"647\" data-start=\"585\">$p_T$ = probability of success given the current ending is $T$</p><p data-end=\"715\" data-start=\"649\">$p_{HT}$ = probability of success given the current ending is $HT$</p><p data-end=\"783\" data-start=\"717\">$p_{TH}$ = probability of success given the current ending is $TH$</p><p data-end=\"800\" data-start=\"785\">From the start,</p><p data-end=\"835\" data-start=\"802\">$p=\\frac{1}{2}p_H+\\frac{1}{2}p_T$</p><p data-end=\"872\" data-start=\"837\">Now write equations for each state.</p><p data-end=\"889\" data-start=\"874\">From state $H$:</p><ul data-end=\"967\" data-start=\"891\"><li data-end=\"935\" data-section-id=\"559air\" data-start=\"891\">tossing $H$ keeps the useful ending as $H$</li><li data-end=\"967\" data-section-id=\"lrqwxm\" data-start=\"936\">tossing $T$ gives ending $HT$</li></ul><p data-end=\"972\" data-start=\"969\">So,</p><p data-end=\"1012\" data-start=\"974\">$p_H=\\frac{1}{2}p_H+\\frac{1}{2}p_{HT}$</p><p data-end=\"1029\" data-start=\"1014\">From state $T$:</p><ul data-end=\"1107\" data-start=\"1031\"><li data-end=\"1075\" data-section-id=\"b7g1kz\" data-start=\"1031\">tossing $T$ keeps the useful ending as $T$</li><li data-end=\"1107\" data-section-id=\"a9zndy\" data-start=\"1076\">tossing $H$ gives ending $TH$</li></ul><p data-end=\"1112\" data-start=\"1109\">So,</p><p data-end=\"1152\" data-start=\"1114\">$p_T=\\frac{1}{2}p_T+\\frac{1}{2}p_{TH}$</p><p data-end=\"1170\" data-start=\"1154\">From state $HT$:</p><ul data-end=\"1234\" data-start=\"1172\"><li data-end=\"1203\" data-section-id=\"a9zndy\" data-start=\"1172\">tossing $H$ gives ending $TH$</li><li data-end=\"1234\" data-section-id=\"1mrxlf6\" data-start=\"1204\">tossing $T$ gives ending $T$</li></ul><p data-end=\"1239\" data-start=\"1236\">So,</p><p data-end=\"1277\" data-start=\"1241\">$p_{HT}=\\frac{1}{2}p+\\frac{1}{2}p_T$</p><p data-end=\"1393\" data-start=\"1279\">That is not correct because from $HT$, if the next toss is $H$, the last two tosses are still $TH$, not the start.</p><p data-end=\"1398\" data-start=\"1395\">So,</p><p data-end=\"1442\" data-start=\"1400\">$p_{HT}=\\frac{1}{2}\\cdot 1+\\frac{1}{2}p_T$</p><p data-end=\"1499\" data-start=\"1444\">since $HTH$ occurs immediately if the next toss is $H$.</p><p data-end=\"1517\" data-start=\"1501\">From state $TH$:</p><ul data-end=\"1587\" data-start=\"1519\"><li data-end=\"1556\" data-section-id=\"1g2qehd\" data-start=\"1519\">tossing $T$ gives $THT$, so failure</li><li data-end=\"1587\" data-section-id=\"4m6sdu\" data-start=\"1557\">tossing $H$ gives ending $H$</li></ul><p data-end=\"1594\" data-start=\"1589\">Thus,</p><p data-end=\"1653\" data-start=\"1596\">$p_{TH}=\\frac{1}{2}\\cdot 0+\\frac{1}{2}p_H=\\frac{1}{2}p_H$</p><p data-end=\"1665\" data-start=\"1655\">Now solve.</p><p data-end=\"1671\" data-start=\"1667\">From</p><p data-end=\"1711\" data-start=\"1673\">$p_H=\\frac{1}{2}p_H+\\frac{1}{2}p_{HT}$</p><p data-end=\"1719\" data-start=\"1713\">we get</p><p data-end=\"1733\" data-start=\"1721\">$p_H=p_{HT}$</p><p data-end=\"1739\" data-start=\"1735\">From</p><p data-end=\"1779\" data-start=\"1741\">$p_T=\\frac{1}{2}p_T+\\frac{1}{2}p_{TH}$</p><p data-end=\"1787\" data-start=\"1781\">we get</p><p data-end=\"1801\" data-start=\"1789\">$p_T=p_{TH}$</p><p data-end=\"1806\" data-start=\"1803\">So,</p><p data-end=\"1828\" data-start=\"1808\">$p_T=\\frac{1}{2}p_H$</p><p data-end=\"1833\" data-start=\"1830\">and</p><p data-end=\"1881\" data-start=\"1835\">$p_{HT}=1/2+\\frac{1}{2}p_T=1/2+\\frac{1}{4}p_H$</p><p data-end=\"1903\" data-start=\"1883\">But $p_H=p_{HT}$, so</p><p data-end=\"1937\" data-start=\"1905\">$p_H=\\frac{1}{2}+\\frac{1}{4}p_H$</p><p data-end=\"1945\" data-start=\"1939\">Hence,</p><p data-end=\"1975\" data-start=\"1947\">$\\frac{3}{4}p_H=\\frac{1}{2}$</p><p data-end=\"1979\" data-start=\"1977\">so</p><p data-end=\"1998\" data-start=\"1981\">$p_H=\\frac{2}{3}$</p><p data-end=\"2004\" data-start=\"2000\">Then</p><p data-end=\"2038\" data-start=\"2006\">$p_T=\\frac{1}{2}p_H=\\frac{1}{3}$</p><p data-end=\"2048\" data-start=\"2040\">Finally,</p><p data-end=\"2153\" data-start=\"2050\">$p=\\frac{1}{2}p_H+\\frac{1}{2}p_T=\\frac{1}{2}\\cdot \\frac{2}{3}+\\frac{1}{2}\\cdot \\frac{1}{3}=\\frac{1}{2}$</p><p data-end=\"2268\" data-start=\"2155\">Therefore, the probability that $HTH$ appears before $THT$ is $\\boxed{\\frac{1}{2}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529100/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529100</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"342\" data-start=\"49\">A student studies for either GATE CS or GATE DA each day. If the student studies GATE CS on a day, then the probability that the student studies GATE CS the next day is $0.7$. If the student studies GATE DA on a day, then the probability that the student studies GATE CS the next day is $0.5$.</p><p data-end=\"463\" data-start=\"344\">Given that the student studies GATE CS on Monday, what is the probability that the student studies GATE DA on Thursday?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.272$<br/></span>",
                "<span style=\"display: inline;\">$0.372$<br/></span>",
                "<span style=\"display: inline;\">$0.472$<br/></span>",
                "<span style=\"display: inline;\">$0.572$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529098\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Let $C_n$ represent the event that the student studies GATE CS on day $n$, and $D_n$ represent the event that the student studies GATE DA on day $n$.</p><p data-path-to-node=\"2\">We are given the following conditional probabilities:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$P(C_{n+1} \\mid C_n) = 0.7 \\implies P(D_{n+1} \\mid C_n) = 0.3$</p></li><li><p data-path-to-node=\"3,1,0\">$P(C_{n+1} \\mid D_n) = 0.5 \\implies P(D_{n+1} \\mid D_n) = 0.5$</p></li></ul><p data-path-to-node=\"4\">Let Monday be Day 1. We are given that $P(C_1) = 1$ and $P(D_1) = 0$.</p><p data-path-to-node=\"4\">We need to find the probability of studying GATE DA on Thursday (Day 4), which is $P(D_4)$.</p><p data-path-to-node=\"5\">We will calculate the probabilities day by day using the Law of Total Probability:</p><p>$$P(A) = P(A \\mid B)P(B) + P(A \\mid B')P(B')$$</p><p data-path-to-node=\"8\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"8\">Day 2: Tuesday</b></p><p data-path-to-node=\"9\">We calculate the probability of studying CS or DA on Tuesday based on Monday.</p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">Probability of CS on Tuesday:</b></p><p>$$P(C_2) = P(C_2 \\mid C_1)P(C_1) + P(C_2 \\mid D_1)P(D_1)$$</p><p>$$P(C_2) = (0.7 \\times 1) + (0.5 \\times 0) = 0.7$$</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Probability of DA on Tuesday:</b></p><p>$$P(D_2) = P(D_2 \\mid C_1)P(C_1) + P(D_2 \\mid D_1)P(D_1)$$</p><p>$$P(D_2) = (0.3 \\times 1) + (0.5 \\times 0) = 0.3$$</p><p data-path-to-node=\"17\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"17\">Day 3: Wednesday</b></p><p data-path-to-node=\"18\">Now we use Tuesday's probabilities to find Wednesday's.</p><p data-path-to-node=\"19\"><b data-index-in-node=\"0\" data-path-to-node=\"19\">Probability of CS on Wednesday:</b></p><p>$$P(C_3) = P(C_3 \\mid C_2)P(C_2) + P(C_3 \\mid D_2)P(D_2)$$</p><p>$$P(C_3) = (0.7 \\times 0.7) + (0.5 \\times 0.3)$$</p><p>$$P(C_3) = 0.49 + 0.15 = 0.64$$</p><p data-path-to-node=\"23\"><b data-index-in-node=\"0\" data-path-to-node=\"23\">Probability of DA on Wednesday:</b></p><p>$$P(D_3) = P(D_3 \\mid C_2)P(C_2) + P(D_3 \\mid D_2)P(D_2)$$</p><p>$$P(D_3) = (0.3 \\times 0.7) + (0.5 \\times 0.3)$$</p><p>$$P(D_3) = 0.21 + 0.15 = 0.36$$</p><p data-path-to-node=\"28\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"28\">Day 4: Thursday</b></p><p data-path-to-node=\"29\">Finally, we use Wednesday's probabilities to find the probability of studying GATE DA on Thursday.</p><p data-path-to-node=\"30\"><b data-index-in-node=\"0\" data-path-to-node=\"30\">Probability of DA on Thursday:</b></p><p>$$P(D_4) = P(D_4 \\mid C_3)P(C_3) + P(D_4 \\mid D_3)P(D_3)$$</p><p>$$P(D_4) = (0.3 \\times 0.64) + (0.5 \\times 0.36)$$</p><p>$$P(D_4) = 0.192 + 0.180 = 0.372$$</p><p data-path-to-node=\"35\"><b data-index-in-node=\"0\" data-path-to-node=\"35\">Final Answer</b></p><p data-path-to-node=\"36\">The probability that the student studies GATE DA on Thursday is $\\boxed{0.372}$</p><p data-end=\"573\" data-start=\"527\"> </p><p data-end=\"573\" data-start=\"527\"> </p><p data-end=\"573\" data-start=\"527\">$\\underline{\\textbf{Alternative Solution :}}$</p><p data-end=\"573\" data-start=\"527\">Let $C$ denote GATE CS and $D$ denote GATE DA.</p><p data-end=\"587\" data-start=\"575\">We are given</p><p data-end=\"626\" data-start=\"589\">$P(C \\to C)=0.7$, so $P(C \\to D)=0.3$</p><p data-end=\"665\" data-start=\"628\">$P(D \\to C)=0.5$, so $P(D \\to D)=0.5$</p><p data-end=\"807\" data-start=\"667\">The student studies GATE CS on Monday. We want the probability that the student studies GATE DA on Thursday, which is after $3$ transitions.</p><p data-end=\"828\" data-start=\"809\">First, for Tuesday:</p><p data-end=\"856\" data-start=\"830\">$P(\\text{Tuesday }=C)=0.7$</p><p data-end=\"884\" data-start=\"858\">$P(\\text{Tuesday }=D)=0.3$</p><p data-end=\"906\" data-start=\"886\">Next, for Wednesday:</p><p data-end=\"994\" data-start=\"908\">$P(\\text{Wednesday }=C)=P(\\text{Tuesday }=C)\\cdot 0.7 + P(\\text{Tuesday }=D)\\cdot 0.5$</p><p data-end=\"1026\" data-start=\"996\">$=0.7\\cdot 0.7 + 0.3\\cdot 0.5$</p><p data-end=\"1045\" data-start=\"1028\">$=0.49+0.15=0.64$</p><p data-end=\"1050\" data-start=\"1047\">So,</p><p data-end=\"1088\" data-start=\"1052\">$P(\\text{Wednesday }=D)=1-0.64=0.36$</p><p data-end=\"1107\" data-start=\"1090\">Now for Thursday:</p><p data-end=\"1198\" data-start=\"1109\">$P(\\text{Thursday }=D)=P(\\text{Wednesday }=C)\\cdot 0.3 + P(\\text{Wednesday }=D)\\cdot 0.5$</p><p data-end=\"1232\" data-start=\"1200\">$=0.64\\cdot 0.3 + 0.36\\cdot 0.5$</p><p data-end=\"1253\" data-start=\"1234\">$=0.192+0.18=0.372$</p><p data-end=\"1333\" data-start=\"1255\">Therefore, the correct answer is $\\boxed{0.372}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529097/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #529097</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"145\" data-start=\"60\">Which of the following expressions indicate that $X$ is independent of $Y$ given $Z$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(X,Y \\mid Z) = P(X \\mid Z)P(Y \\mid Z)$<br/></span>",
                "<span style=\"display: inline;\">$P(X,Y,Z) = P(X,Z)P(Y)$<br/></span>",
                "<span style=\"display: inline;\">$P(X \\mid Y,Z) = P(X \\mid Z)$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528958\"></a><div itemprop=\"text\"><p data-end=\"255\" data-start=\"107\">To say that $X$ is independent of $Y$ given $Z$ means that once $Z$ is known, knowing $Y$ does not change the distribution of $X$. So by definition,</p><p data-end=\"287\" data-start=\"257\">$P(X \\mid Y,Z) = P(X \\mid Z)$.</p><p data-end=\"318\" data-start=\"289\">Hence, option <strong>C is correct.</strong><br/><br/><br/>An equivalent way to write conditional independence is</p><p data-end=\"417\" data-start=\"376\">$P(X,Y \\mid Z) = P(X \\mid Z)P(Y \\mid Z)$.</p><p data-end=\"453\" data-start=\"419\">Hence, option <strong>A is also correct.</strong><br/><br/><br/>Option <strong>B</strong>, $P(X,Y,Z)=P(X,Z)P(Y)$, means that $Y$ is independent of the pair $(X,Z)$, which is not the same as saying $X$ is independent of $Y$ given $Z$.<br/><br/><br/>Therefore, the correct answers are <strong>A and C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528957/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528957</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A bakery has $ 15 $ different types of pastries, consisting of $ 6 $ fruit pastries and $ 9 $ cream pastries. Assuming that all selections are equally likely, what is the probability that the $ 5 $ pastries chosen for the display case are all fruit pastries?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.001$ to $0.002$<br/></span>",
                "<span style=\"display: inline;\">$0.001$ to $0.199$<br/></span>",
                "<span style=\"display: inline;\">$0.002$ to $0.299$<br/></span>",
                "<span style=\"display: inline;\">$0.003$ to $1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528951\"></a><div itemprop=\"text\"><p data-end=\"228\" data-start=\"126\">We are choosing $5$ pastries from $15$ total pastries, so the total number of ways is $\\binom{15}{5}$.</p><p data-end=\"376\" data-start=\"230\">To have all $5$ pastries be fruit pastries, we must choose all $5$ from the $6$ fruit pastries, so the favorable number of ways is $\\binom{6}{5}$.</p><p data-end=\"512\" data-start=\"378\">Thus the probability is $P(\\text{all fruit}) = \\frac{\\binom{6}{5}}{\\binom{15}{5}} = \\frac{6}{3003} = \\frac{2}{1001} \\approx 0.001998$.</p><p data-end=\"550\" data-start=\"514\">So the probability is about $0.002$.</p><p data-end=\"625\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"552\">Therefore, the correct range is $0.001$ to $0.002$, so the answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528950/go-classes-dpp-gate-da-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #528950</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"325\" data-start=\"71\">A committee of $6$ people is chosen uniformly at random from $14$ people, consisting of $5$ seniors, $4$ juniors, and $5$ sophomores. What is the probability that the committee contains exactly $2$ seniors, exactly $1$ junior, and exactly $3$ sophomores?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{4}{1}\\binom{5}{3}}{\\binom{14}{6}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{4}{1}\\binom{5}{3}}{14^6}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{4}{2}\\binom{5}{2}}{\\binom{14}{6}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{5}{2}\\binom{4}{1}\\binom{5}{3}}{\\binom{14}{5}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528949\"></a><div itemprop=\"text\"><p data-end=\"670\" data-start=\"592\">Since all committees of size $6$ are equally likely, the sample space has size</p><p data-end=\"690\" data-start=\"672\">$ \\binom{14}{6} $.</p><p data-end=\"785\" data-start=\"692\">To form a committee with exactly $2$ seniors, exactly $1$ junior, and exactly $3$ sophomores:</p><p data-end=\"834\" data-start=\"787\">Choose $2$ of the $5$ seniors: $ \\binom{5}{2} $</p><p data-end=\"883\" data-start=\"836\">Choose $1$ of the $4$ juniors: $ \\binom{4}{1} $</p><p data-end=\"935\" data-start=\"885\">Choose $3$ of the $5$ sophomores: $ \\binom{5}{3} $</p><p data-end=\"977\" data-start=\"937\">So the number of favorable committees is $ \\binom{5}{2}\\binom{4}{1}\\binom{5}{3} $.<br/><br/>$\\therefore$ the probability is $ \\frac{\\binom{5}{2}\\binom{4}{1}\\binom{5}{3}}{\\binom{14}{6}} $.</p><p data-end=\"1131\" data-start=\"1118\">Now simplify:</p><p data-end=\"1220\" data-start=\"1133\">$ \\binom{5}{2}=10,\\quad \\binom{4}{1}=4,\\quad \\binom{5}{3}=10,\\quad \\binom{14}{6}=3003 $<br/><br/>So</p><p data-end=\"1280\" data-start=\"1226\">$ P=\\frac{10\\cdot 4\\cdot 10}{3003}=\\frac{400}{3003} $.<br/><br/>Thus the correct answer is $\\boxed{\\frac{\\binom{5}{2}\\binom{4}{1}\\binom{5}{3}}{\\binom{14}{6}}} $</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528948/go-classes-dpp-gate-da-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #528948</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"215\" data-start=\"55\">In a probabilistic model, suppose $P(A)=a$, $P(B)=b$, and $P(B^c \\mid A^c)=e$, where $0&lt;a&lt;1$ and $0&lt;b&lt;1$. Determine $P(A \\mid B)$ in terms of $a$, $b$, and $e$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{b-(1-e)(1-a)}{a}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{b-(1-e)(1-a)}{b}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{b+(1-e)(1-a)}{b}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{a-(1-e)(1-b)}{b}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528881\"></a><div itemprop=\"text\"><p data-end=\"426\" data-start=\"347\">We are given $P(B^c \\mid A^c)=e$. By the definition of conditional probability,</p><p data-end=\"475\" data-start=\"428\">$P(B^c \\cap A^c)=P(B^c \\mid A^c)P(A^c)=e(1-a)$.</p><p data-end=\"539\" data-start=\"477\">Now inside $A^c$, the event $B$ is the complement of $B^c$, so</p><p data-end=\"579\" data-start=\"541\">$P(B \\cap A^c)=P(A^c)-P(B^c \\cap A^c)$</p><p data-end=\"596\" data-start=\"581\">$=(1-a)-e(1-a)$</p><p data-end=\"612\" data-start=\"598\">$=(1-e)(1-a)$.</p><p data-end=\"692\" data-start=\"614\">Next, split $B$ into the disjoint events $(A \\cap B)$ and $(A^c \\cap B)$. Then</p><p data-end=\"727\" data-start=\"694\">$P(B)=P(A \\cap B)+P(A^c \\cap B)$,</p><p data-end=\"731\" data-start=\"729\">so</p><p data-end=\"760\" data-start=\"733\">$P(A \\cap B)=b-(1-e)(1-a)$.</p><p data-end=\"772\" data-start=\"762\">Therefore,</p><p data-end=\"836\" data-start=\"774\">$P(A \\mid B)=\\frac{P(A \\cap B)}{P(B)}=\\frac{b-(1-e)(1-a)}{b}$.</p><p data-end=\"925\" data-start=\"838\">So the correct answer is $\\boxed{\\frac{b-(1-e)(1-a)}{b}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528880/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528880</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"288\" data-start=\"55\">Suppose $7$ balls are thrown independently into $4$ bins, where each ball is equally likely to land in any one of the $4$ bins. The bins are numbered $1$ to $4$. Let $X_i$ be the number of balls that land in bin $i$, for $i=1,2,3,4$.</p><p data-end=\"377\" data-start=\"290\">Define $Z$ as the maximum number of balls in any single bin: $Z=\\max(X_1,X_2,X_3,X_4)$.</p><p data-end=\"414\" data-start=\"379\">What is the probability that $Z=3$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$315/2048$<br/></span>",
                "<span style=\"display: inline;\">$525/2048$<br/></span>",
                "<span style=\"display: inline;\">$1155/2048$<br/></span>",
                "<span style=\"display: inline;\">$1365/2048$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528877\"></a><div itemprop=\"text\"><p data-end=\"176\" data-start=\"80\">Each of the $7$ balls can go into any of the $4$ bins, so the total number of outcomes is $4^7$.</p><p data-end=\"201\" data-start=\"178\">We want $Z=3$, meaning:</p><ul data-end=\"282\" data-start=\"203\"><li data-end=\"240\" data-section-id=\"gnq93o\" data-start=\"203\">no bin has more than $3$ balls, and<br/> </li><li data-end=\"282\" data-section-id=\"aj8b16\" data-start=\"241\">at least one bin has exactly $3$ balls.<br/> </li></ul><p data-end=\"351\" data-start=\"284\">So the only possible occupancy patterns of $(X_1,X_2,X_3,X_4)$ are:</p><p data-end=\"395\" data-start=\"353\">$(3,3,1,0)$, $(3,2,2,0)$, and $(3,2,1,1)$.</p><p data-end=\"417\" data-start=\"397\">Now count each case.</p><p data-end=\"447\" data-start=\"419\">For the pattern $(3,3,1,0)$:</p><p data-end=\"590\" data-start=\"449\">Choose which bin gets $1$ ball: $4$ ways.<br data-end=\"493\" data-start=\"490\"/>Choose which bin gets $0$ balls: $3$ ways.<br data-end=\"538\" data-start=\"535\"/>Then the remaining two bins must each get $3$ balls.</p><p data-end=\"658\" data-start=\"592\">So the number of ways to choose the bin pattern is $4 \\cdot 3=12$.</p><p data-end=\"741\" data-start=\"660\">For each such pattern, the number of ways to distribute the $7$ distinct balls is $\\frac{7!}{3!3!1!0!}=140$.</p><p data-end=\"795\" data-start=\"771\">So this case contributes</p><p data-end=\"817\" data-start=\"797\">$12 \\cdot 140=1680$.</p><p data-end=\"847\" data-start=\"819\">For the pattern $(3,2,2,0)$:</p><p data-end=\"936\" data-start=\"849\">Choose which bin gets $3$ balls: $4$ ways.<br data-end=\"894\" data-start=\"891\"/>Choose which bin gets $0$ balls: $3$ ways.</p><p data-end=\"982\" data-start=\"938\">So the number of bin patterns is again $12$.</p><p data-end=\"1052\" data-start=\"984\">For each such pattern, the number of ways to distribute the balls is</p><p data-end=\"1080\" data-start=\"1054\">$\\frac{7!}{3!2!2!0!}=210$.</p><p data-end=\"1106\" data-start=\"1082\">So this case contributes</p><p data-end=\"1128\" data-start=\"1108\">$12 \\cdot 210=2520$.</p><p data-end=\"1158\" data-start=\"1130\">For the pattern $(3,2,1,1)$:</p><p data-end=\"1247\" data-start=\"1160\">Choose which bin gets $3$ balls: $4$ ways.<br data-end=\"1205\" data-start=\"1202\"/>Choose which bin gets $2$ balls: $3$ ways.</p><p data-end=\"1287\" data-start=\"1249\">So the number of bin patterns is $12$.</p><p data-end=\"1357\" data-start=\"1289\">For each such pattern, the number of ways to distribute the balls is</p><p data-end=\"1385\" data-start=\"1359\">$\\frac{7!}{3!2!1!1!}=420$.</p><p data-end=\"1411\" data-start=\"1387\">So this case contributes</p><p data-end=\"1433\" data-start=\"1413\">$12 \\cdot 420=5040$.</p><p data-end=\"1487\" data-start=\"1435\">Therefore, the total number of favorable outcomes is</p><p data-end=\"1511\" data-start=\"1489\">$1680+2520+5040=9240$.</p><p data-end=\"1519\" data-start=\"1513\">Hence,</p><p data-end=\"1584\" data-start=\"1521\">$P(Z=3)=\\frac{9240}{4^7}=\\frac{9240}{16384}=\\frac{1155}{2048}$.<br/><br/>So the correct answer is $\\boxed{\\frac{1155}{2048}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528875/go-classes-dpp-gate-da-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #528875</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"262\" data-start=\"60\">A sample space has two events $A$ and $B$ such that $P(A^c)=\\frac{2}{5}$, $P(B^c)=\\frac{1}{3}$, and $P(A\\cup B)=\\frac{11}{12}$. What is the probability that exactly one of the events $A$ and $B$ occurs?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{7}{20}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{17}{30}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{19}{30}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{5}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528719\"></a><div itemprop=\"text\"><p data-end=\"385\" data-start=\"355\">First, find $P(A)$ and $P(B)$:</p><p data-end=\"428\" data-start=\"387\">$P(A)=1-P(A^c)=1-\\frac{2}{5}=\\frac{3}{5}$</p><p data-end=\"471\" data-start=\"430\">$P(B)=1-P(B^c)=1-\\frac{1}{3}=\\frac{2}{3}$</p><p data-end=\"513\" data-start=\"473\">Now use the inclusion-exclusion formula:</p><p data-end=\"548\" data-start=\"515\">$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$</p><p data-end=\"553\" data-start=\"550\">So,</p><p data-end=\"605\" data-start=\"555\">$\\frac{11}{12}=\\frac{3}{5}+\\frac{2}{3}-P(A\\cap B)$</p><p data-end=\"612\" data-start=\"607\">Thus,</p><p data-end=\"664\" data-start=\"614\">$P(A\\cap B)=\\frac{3}{5}+\\frac{2}{3}-\\frac{11}{12}$</p><p data-end=\"747\" data-start=\"666\">$P(A\\cap B)=\\frac{36}{60}+\\frac{40}{60}-\\frac{55}{60}=\\frac{21}{60}=\\frac{7}{20}$</p><p data-end=\"806\" data-start=\"749\">The probability that exactly one of $A$ and $B$ occurs is</p><p data-end=\"865\" data-start=\"808\">$P(A\\text{ only})+P(B\\text{ only})=P(A\\cup B)-P(A\\cap B)$</p><p data-end=\"870\" data-start=\"867\">So,</p><p data-end=\"940\" data-start=\"872\">$P(\\text{exactly one of }A\\text{ and }B)=\\frac{11}{12}-\\frac{7}{20}$</p><p data-end=\"1000\" data-start=\"942\">$=\\frac{55}{60}-\\frac{21}{60}=\\frac{34}{60}=\\frac{17}{30}$</p><p data-end=\"940\" data-start=\"872\">$\\boxed{\\therefore P(\\text{exactly one of }A\\text{ and }B)=\\frac{17}{30}}$</p><p data-end=\"1054\" data-start=\"1002\">Therefore, the correct answer is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528718/go-classes-dpp-gate-da-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #528718</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"193\" data-start=\"75\">In a multiple-choice test, each question has $5$ possible answers. For a given question, a student behaves as follows:</p><p data-end=\"264\" data-start=\"195\">With probability $\\frac{1}{2}$, the student knows the correct answer.</p><p data-end=\"447\" data-start=\"266\">With probability $\\frac{3}{10}$, the student does not know the answer exactly, but can eliminate exactly $2$ wrong options and then guesses uniformly from the remaining $3$ options.</p><p data-end=\"560\" data-start=\"449\">With probability $\\frac{1}{5}$, the student has no useful knowledge and guesses uniformly from all $5$ options.</p><p data-end=\"737\" data-start=\"562\">Let $E$ be the event that the student eliminates exactly $2$ wrong options but does not know the answer exactly, and let $C$ be the event that the student's answer is correct.</p><p data-end=\"761\" data-start=\"739\">What is $P(E \\mid C)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{32}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{4}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528717\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"339\" src=\"https://cdn.mathpix.com/snip/images/Z1bEJYTjXp6AuZ7SU25sKmCe8w-lep-hy5me5cxi4TE.original.fullsize.png\" width=\"588\"/></p><p data-end=\"988\" data-start=\"852\"><br/><br/>Let $K$ be the event that the student knows the answer, and let $G$ be the event that the student guesses randomly from all $5$ options.</p><p data-end=\"994\" data-start=\"990\">Then</p><p data-end=\"1055\" data-start=\"996\">$P(K)=\\frac{1}{2}$, $P(E)=\\frac{3}{10}$, $P(G)=\\frac{1}{5}$</p><p data-end=\"1062\" data-start=\"1057\">Also,</p><p data-end=\"1079\" data-start=\"1064\">$P(C \\mid K)=1$</p><p data-end=\"1106\" data-start=\"1081\">$P(C \\mid E)=\\frac{1}{3}$</p><p data-end=\"1133\" data-start=\"1108\">$P(C \\mid G)=\\frac{1}{5}$</p><p data-end=\"1191\" data-start=\"1135\">First compute $P(C)$ using the law of total probability:</p><p data-end=\"1247\" data-start=\"1193\">$P(C)=P(C \\mid K)P(K)+P(C \\mid E)P(E)+P(C \\mid G)P(G)$</p><p data-end=\"1332\" data-start=\"1249\">$P(C)=1 \\cdot \\frac{1}{2}+\\frac{1}{3}\\cdot\\frac{3}{10}+\\frac{1}{5}\\cdot\\frac{1}{5}$</p><p data-end=\"1378\" data-start=\"1334\">$P(C)=\\frac{1}{2}+\\frac{1}{10}+\\frac{1}{25}$</p><p data-end=\"1454\" data-start=\"1380\">$P(C)=\\frac{25}{50}+\\frac{5}{50}+\\frac{2}{50}=\\frac{32}{50}=\\frac{16}{25}$</p><p data-end=\"1482\" data-start=\"1456\">Now compute $P(E \\cap C)$:</p><p data-end=\"1555\" data-start=\"1484\">$P(E \\cap C)=P(C \\mid E)P(E)=\\frac{1}{3}\\cdot\\frac{3}{10}=\\frac{1}{10}$</p><p data-end=\"1575\" data-start=\"1557\">By Bayes' theorem,</p><p data-end=\"1634\" data-start=\"1577\">$P(E \\mid C)=\\frac{P(E \\cap C)}{P(C)}=\\frac{1/10}{16/25}$</p><p data-end=\"1708\" data-start=\"1636\">$P(E \\mid C)=\\frac{1}{10}\\cdot\\frac{25}{16}=\\frac{25}{160}$<br/><br/>$\\boxed{P(E \\mid C)=\\frac{5}{32}}$</p><p data-end=\"1761\" data-start=\"1710\">Therefore, the correct answer is <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528716/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528716</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 50 - Engineering Mathematics (Axioms & Conditional Probability - Part 6)",
    "testLabel": "DPP 50",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 6",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 6)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"379\" data-start=\"60\">We toss three fair coins simultaneously and independently. Let $A$ be the event that the first and second coins show the same face, $B$ be the event that the second and third coins show the same face, and $C$ be the event that the first and third coins show the same face. Which of the following statements is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Events $A$ and $B$ are independent.<br/></span>",
                "<span style=\"display: inline;\">Events $A$, $B$, and $C$ are pairwise independent.<br/></span>",
                "<span style=\"display: inline;\">Events $A$, $B$, and $C$ are mutually independent.<br/></span>",
                "<span style=\"display: inline;\">Events $A$ and $B$ are conditionally independent given $C$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528714\"></a><div itemprop=\"text\"><p data-end=\"669\" data-start=\"609\">The sample space is $S={HHH,HHT,HTH,HTT,THH,THT,TTH,TTT}$.</p><p data-end=\"678\" data-start=\"671\">We have</p><p data-end=\"703\" data-start=\"680\">$A={HHH,HHT,TTH,TTT}$</p><p data-end=\"728\" data-start=\"705\">$B={HHH,HTT,THH,TTT}$</p><p data-end=\"753\" data-start=\"730\">$C={HHH,HTH,THT,TTT}$</p><p data-end=\"757\" data-start=\"755\">So</p><p data-end=\"799\" data-start=\"759\">$P(A)=P(B)=P(C)=\\frac{4}{8}=\\frac{1}{2}$</p><p data-end=\"806\" data-start=\"801\">Also,</p><p data-end=\"872\" data-start=\"808\">$A \\cap B={HHH,TTT}$, so $P(A \\cap B)=\\frac{2}{8}=\\frac{1}{4}$</p><p data-end=\"994\" data-start=\"874\">Since $P(A)P(B)=\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4}$, events $A$ and $B$ are independent. Hence <strong>statement A is true.</strong></p><p data-end=\"1006\" data-start=\"996\"><strong>Similarly,</strong></p><p data-end=\"1057\" data-start=\"1008\">$A \\cap C={HHH,TTT}$ and $B \\cap C={HHH,TTT}$</p><p data-end=\"1061\" data-start=\"1059\">So</p><p data-end=\"1118\" data-start=\"1063\">$P(A \\cap C)=P(B \\cap C)=\\frac{1}{4}=P(A)P(C)=P(B)P(C)$</p><p data-end=\"1195\" data-start=\"1120\">Thus $A$, $B$, and $C$ are pairwise independent. Hence <strong>statement B is true.</strong></p><p data-end=\"1200\" data-start=\"1197\">Now</p><p data-end=\"1231\" data-start=\"1202\">$A \\cap B \\cap C={HHH,TTT}$</p><p data-end=\"1235\" data-start=\"1233\">So</p><p data-end=\"1281\" data-start=\"1237\">$P(A \\cap B \\cap C)=\\frac{2}{8}=\\frac{1}{4}$</p><p data-end=\"1286\" data-start=\"1283\">But</p><p data-end=\"1358\" data-start=\"1288\">$P(A)P(B)P(C)=\\frac{1}{2}\\cdot\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{8}$</p><p data-end=\"1465\" data-start=\"1360\">Since $\\frac{1}{4} \\ne \\frac{1}{8}$, the events are not mutually independent. Hence <strong>statement C is false.</strong></p><p data-end=\"1597\" data-start=\"1467\">Now condition on $C$. Under $C$, the possible outcomes are ${HHH,HTH,THT,TTT}$, each with conditional probability $\\frac{1}{4}$.</p><p data-end=\"1632\" data-start=\"1599\">Within this reduced sample space,</p><p data-end=\"1679\" data-start=\"1634\">$A={HHH,TTT}$, so $P(A \\mid C)=\\frac{1}{2}$</p><p data-end=\"1726\" data-start=\"1681\">$B={HHH,TTT}$, so $P(B \\mid C)=\\frac{1}{2}$</p><p data-end=\"1731\" data-start=\"1728\">and</p><p data-end=\"1792\" data-start=\"1733\">$A \\cap B={HHH,TTT}$, so $P(A \\cap B \\mid C)=\\frac{1}{2}$</p><p data-end=\"1797\" data-start=\"1794\">But</p><p data-end=\"1863\" data-start=\"1799\">$P(A \\mid C)P(B \\mid C)=\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4}$</p><p data-end=\"1993\" data-start=\"1865\">Since $\\frac{1}{2} \\ne \\frac{1}{4}$, events $A$ and $B$ are not conditionally independent given $C$. Hence <strong>statement D is false</strong>.<br/><br/>Therefore, the true statements are <strong>A</strong> and <strong>B</strong> only.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528713/go-classes-dpp-gate-da-probability-independence-of-events\" target=\"_blank\">GATE Overflow #528713</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"114\" data-start=\"61\">Which of the following statements is NOT always true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A \\subseteq B$, then $P(B -A)=P(B)-P(A)$.<br/></span>",
                "<span style=\"display: inline;\">If $P(B)>0$ and $P(A \\mid B)=P(A)$, then $A$ and $B$ are independent.<br/></span>",
                "<span style=\"display: inline;\">$P(A \\triangle B)=P(A)+P(B)-2P(A \\cap B)$.<br/></span>",
                "<span style=\"display: inline;\">If $P(A \\cup B)=P(A)+P(B)$, then $A$ and $B$ are independent.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528603\"></a><div itemprop=\"text\"><p><strong>A.</strong> If $A \\subseteq B$, then $B$ can be written as the disjoint union of $A$ and $B-A$. Hence</p><p>$P(B)=P(A)+P(B-A)$,</p><p>so</p><p>$P(B-A)=P(B)-P(A)$.</p><p>Therefore, <strong>A is always true</strong>.<br/> </p><p><strong>B.</strong> If $P(B)&gt;0$ and $P(A \\mid B)=P(A)$, then</p><p>$P(A \\mid B)=\\frac{P(A \\cap B)}{P(B)}=P(A)$.</p><p>Multiplying by $P(B)$ gives</p><p>$P(A \\cap B)=P(A)P(B)$.</p><p>This is exactly the definition of independence. Therefore, <strong>B is always true</strong>.<br/> </p><p><strong>C.</strong> The symmetric difference $A \\triangle B$ means outcomes in exactly one of the events, so</p><p>$A \\triangle B=(A-B)\\cup(B-A)$,</p><p>and these two sets are disjoint. Thus</p><p>$P(A \\triangle B)=P(A-B)+P(B-A)$.</p><p>Also,</p><p>$P(A-B)=P(A)-P(A \\cap B)$</p><p>and</p><p>$P(B-A)=P(B)-P(A \\cap B)$.</p><p>So</p><p>$P(A \\triangle B)=P(A)+P(B)-2P(A \\cap B)$.</p><p>Therefore, <strong>C is always true</strong>.<br/> </p><p><strong>D.</strong> If $P(A \\cup B)=P(A)+P(B)$, then by the addition rule,</p><p>$P(A \\cap B)=0$.</p><p>So $A$ and $B$ are disjoint. But disjoint events are not necessarily independent. Independence requires</p><p>$P(A \\cap B)=P(A)P(B)$.</p><p>If both $P(A)$ and $P(B)$ are positive, then $P(A)P(B)&gt;0$, so they cannot be independent.</p><p>Therefore, <strong>D is not always true</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528601/go-classes-dpp-gate-da-probability-probability-rules-%26-properties-of-events\" target=\"_blank\">GATE Overflow #528601</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"332\" data-start=\"60\">A bag contains $6$ blue marbles, $9$ green marbles and $15$ red marbles. A marble is drawn from the bag, its colour is recorded and it is put back in the bag. This process is repeated $4$ times. The probability that exactly $3$ different colours appear in the $4$ draws is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{7}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{8}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{25}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528594\"></a><div itemprop=\"text\"><p data-end=\"533\" data-start=\"425\">Let $P(B)=\\frac{6}{30}=\\frac{1}{5}$, $P(G)=\\frac{9}{30}=\\frac{3}{10}$, and $P(R)=\\frac{15}{30}=\\frac{1}{2}$.</p><p data-end=\"670\" data-start=\"535\">For exactly $3$ different colours to appear in $4$ draws, one colour must appear twice and the other two colours must appear once each.</p><p data-end=\"729\" data-start=\"672\">The number of ways to arrange this is $\\frac{4!}{2!}=12$.</p><p data-end=\"761\" data-start=\"731\">So the required probability is</p><p data-end=\"831\" data-start=\"763\">$12 \\left[ P(B)^2P(G)P(R) + P(G)^2P(B)P(R) + P(R)^2P(B)P(G) \\right]$</p><p data-end=\"1085\" data-start=\"833\">$=12 \\left[ \\left(\\frac{1}{5}\\right)^2\\left(\\frac{3}{10}\\right)\\left(\\frac{1}{2}\\right) + \\left(\\frac{3}{10}\\right)^2\\left(\\frac{1}{5}\\right)\\left(\\frac{1}{2}\\right) + \\left(\\frac{1}{2}\\right)^2\\left(\\frac{1}{5}\\right)\\left(\\frac{3}{10}\\right) \\right]$</p><p data-end=\"1121\" data-start=\"1087\">$=12 \\left[ \\frac{3}{200} \\right]$</p><p data-end=\"1153\" data-start=\"1123\">$=\\frac{36}{100}=\\frac{9}{25}$</p><p data-end=\"1206\" data-start=\"1155\">Therefore, the correct answer is <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528593/go-classes-dpp-gate-da-probability-probability-with-replacement\" target=\"_blank\">GATE Overflow #528593</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"217\" data-start=\"54\">A sample space has two events $A$ and $B$ such that $P(A' \\cap B')=\\frac{1}{8}$, $P(A' \\cup B)=\\frac{5}{6}$, and $P(A \\cup B')=\\frac{3}{4}$. What is $P(A \\cap B)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{7}{24}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{24}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{24}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{13}{24}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528592\"></a><div itemprop=\"text\"><p data-end=\"334\" data-start=\"314\">Let $x=P(A \\cap B)$.</p><p data-end=\"416\" data-start=\"336\">Since $A' \\cup B=(A \\cap B')'$, we get $P(A \\cap B')=1-\\frac{5}{6}=\\frac{1}{6}$.</p><p data-end=\"498\" data-start=\"418\">Since $A \\cup B'=(A' \\cap B)'$, we get $P(A' \\cap B)=1-\\frac{3}{4}=\\frac{1}{4}$.</p><p data-end=\"607\" data-start=\"500\">Now the four disjoint regions $A \\cap B$, $A \\cap B'$, $A' \\cap B$, and $A' \\cap B'$ must add up to $1$. So</p><p data-end=\"651\" data-start=\"609\">$x+\\frac{1}{6}+\\frac{1}{4}+\\frac{1}{8}=1$.</p><p data-end=\"658\" data-start=\"653\">Thus,</p><p data-end=\"716\" data-start=\"660\">$x=1-\\frac{1}{6}-\\frac{1}{4}-\\frac{1}{8}=\\frac{11}{24}$.</p><p data-end=\"750\" data-start=\"718\">So, $P(A \\cap B)=\\frac{11}{24}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528591/go-classes-dpp-gate-da-probability-de-morgans-laws\" target=\"_blank\">GATE Overflow #528591</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a sample space, two events $A$ and $B$ satisfy $P(A') = \\frac{1}{4}$, $P(B') = \\frac{1}{3}$, and $P(A \\cap B) = \\frac{1}{2}$. What is $P(A \\cup B)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{7}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{8}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{11}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{6}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528270\"></a><div itemprop=\"text\"><p>Given,<br/>$P(A') = \\frac{1}{4}$, $P(B') = \\frac{1}{3}$, and $P(A \\cap B) = \\frac{1}{2}$.<br/><br/>So, $P(A) = 1 - \\frac{1}{4} = \\frac{3}{4}\\quad$ and $\\quad P(B) = 1 - \\frac{1}{3} = \\frac{2}{3}$.</p><p>Using the addition law of probability,<br/>$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.</p><p>Thus,<br/>$P(A \\cup B) = \\frac{3}{4} + \\frac{2}{3} - \\frac{1}{2}$</p><p>$= \\frac{9}{12} + \\frac{8}{12} - \\frac{6}{12}$</p><p>$= \\frac{11}{12}$<br/><br/>$\\therefore P(A \\cup B) = \\boxed{\\frac{11}{12}}$.</p><p>So the correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528267/go-classes-dpp-gate-da-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #528267</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume that birthdays are uniformly distributed over $365$ days of the year and ignore leap years. In a randomly chosen group of $n$ people, what is the probability that at least two people have the same birthday?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1 - \\dfrac{365 \\cdot 364 \\cdot \\ldots \\cdot (365-n+1)}{365^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{365 \\cdot 364 \\cdot \\ldots \\cdot (365-n+1)}{365^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{n}{365}$<br/></span>",
                "<span style=\"display: inline;\">$1 - \\dfrac{365-n+1}{365}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528266\"></a><div itemprop=\"text\"><p>Let $A$ be the event that at least two people in the group have the same birthday.</p><p>It is easier to first find the probability of the complement event, namely that all $n$ people have different birthdays.</p><p>The first person can have any birthday, so the probability is $1$.</p><p>The second person must have a different birthday from the first, so the probability is $\\dfrac{364}{365}$.</p><p>The third person must have a birthday different from the first two, so the probability is $\\dfrac{363}{365}$.</p><p>Continuing in this way, we get<br/><br/>$P(A^c) = \\dfrac{365}{365} \\cdot \\dfrac{364}{365} \\cdot \\dfrac{363}{365} \\cdot \\ldots \\cdot \\dfrac{365-n+1}{365}$<br/><br/>$\\Rightarrow P(A^c) = \\dfrac{365 \\cdot 364 \\cdot \\ldots \\cdot (365-n+1)}{365^n}$</p><p>By the complement rule,<br/><br/>$P(A) = 1 - P(A^c)$<br/><br/>$\\therefore P(A) = 1 - \\dfrac{365 \\cdot 364 \\cdot \\ldots \\cdot (365-n+1)}{365^n}$<br/><br/>Hence, the correct answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528265/go-classes-dpp-gate-da-probability-counting-methods\" target=\"_blank\">GATE Overflow #528265</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A bag contains two biased coins. Coin A shows heads with probability $\\frac{3}{4}$, and Coin B shows heads with probability $\\frac{1}{3}$. One of the two coins is chosen at random with equal probability and tossed once. What is the probability of getting a head?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{13}{24}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{7}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{12}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528255\"></a><div itemprop=\"text\"><p>Let $H$ be the event of getting a head.</p><p>Since one of the two coins is chosen at random with equal probability,<br/>$P(\\text{Coin A}) = \\frac{1}{2}$ and $P(\\text{Coin B}) = \\frac{1}{2}$.</p><p>Also,<br/>$P(H \\mid \\text{Coin A}) = \\frac{3}{4}$<br/>and<br/>$P(H \\mid \\text{Coin B}) = \\frac{1}{3}$.</p><p>Using the law of total probability,<br/><br/>$P(H) = P(H \\mid \\text{Coin A})P(\\text{Coin A}) + P(H \\mid \\text{Coin B})P(\\text{Coin B})$<br/><br/>$= \\frac{3}{4}\\cdot\\frac{1}{2} + \\frac{1}{3}\\cdot\\frac{1}{2}$<br/><br/>$= \\frac{3}{8} + \\frac{1}{6}$<br/><br/>$= \\frac{9}{24} + \\frac{4}{24}$<br/><br/>$= \\frac{13}{24}$</p><p>$\\therefore$ The probability of getting a head is $\\boxed{\\frac{13}{24}}$.</p><p>So the correct answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528254/go-classes-dpp-gate-da-probability-law-of-total-probability\" target=\"_blank\">GATE Overflow #528254</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a certain city, the probability that a person will carry an umbrella on a given day is $0.5$. It is known that if the morning is cloudy, then the probability that the person will carry an umbrella is $0.7$. The morning is equally likely to be cloudy or not cloudy. What is the probability that the person will carry an umbrella on a day when the morning is not cloudy?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.2$<br/></span>",
                "<span style=\"display: inline;\">$0.3$<br/></span>",
                "<span style=\"display: inline;\">$0.4$<br/></span>",
                "<span style=\"display: inline;\">$0.5$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528246\"></a><div itemprop=\"text\"><p>Let $U$ denote the event that the person carries an umbrella, and let $C$ denote the event that the morning is cloudy.</p><p>Given:<br/>$P(U) = 0.5$, $P(U \\mid C) = 0.7$, and $P(C) = 0.5$.<br/><br/>Since the morning is equally likely to be cloudy or not cloudy,</p><p>$\\therefore P(C^c) = 1 - 0.5 = 0.5$.<br/><br/>Let $P(U \\mid C^c) = x$.<br/><br/>By the law of total probability,<br/><br/>$P(U) = P(U \\mid C)P(C) + P(U \\mid C^c)P(C^c)$.</p><p>Hence,<br/>$0.5 = (0.7)(0.5) + x(0.5)$</p><p>$0.5 = 0.35 + 0.5x$</p><p>$0.15 = 0.5x$</p><p>$x = 0.3$<br/><br/>$\\therefore P(U \\mid C^c) = \\boxed{0.3}$.<br/><br/>So the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528245/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528245</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $S$ be a sample space and let $A$, $B$, and $C$ be three mutually exclusive events such that $A \\cup B \\cup C = S.$<br/><br/>If $P(A)=x$, $P(B)=2x$, and $P(C)=1-3x$, then the maximum value of $P(A)P(B)P(C)$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{2}{81}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{4}{243}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{8}{243}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2}{27}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528153\"></a><div itemprop=\"text\">We are given<br/> $P(A)=x,\\quad P(B)=2x,\\quad P(C)=1-3x.$<br/> <br/> So,<br/> $P(A)P(B)P(C)=x \\cdot 2x \\cdot (1-3x)=2x^2(1-3x).$<br/> <br/> Let<br/> $f(x)=2x^2(1-3x)=2x^2-6x^3.$<br/> <br/> Differentiate:<br/> $f'(x)=4x-18x^2=2x(2-9x).$<br/> <br/> Set $f'(x)=0$:<br/> $2x(2-9x)=0 \\implies x=0 \\text{ or } x=\\frac{2}{9}.$<br/> <br/> Since probabilities must be positive, take $x=\\frac{2}{9}.$<br/> <br/> Then<br/> $P(A)=\\frac{2}{9},\\quad P(B)=\\frac{4}{9},\\quad P(C)=\\frac{1}{3}.$<br/> <br/> Thus,<br/> $P(A)P(B)P(C)=\\frac{2}{9}\\cdot \\frac{4}{9}\\cdot \\frac{1}{3}=\\frac{8}{243}.$<br/> <br/> Answer: $\\boxed{\\dfrac{8}{243}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528151/go-classes-dpp-gate-da-probability-mutually-exclusive-%26-exhaustive-events\" target=\"_blank\">GATE Overflow #528151</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three fair coins are flipped. Given that at least one of the coins shows a head and at least one of the coins shows a tail, what is the probability that exactly two of the coins show heads?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2}{3}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528147\"></a><div itemprop=\"text\">When $3$ fair coins are flipped, the total sample space is<br/> <br/> $S=\\{HHH,\\ HHT,\\ HTH,\\ THH,\\ HTT,\\ THT,\\ TTH,\\ TTT\\}.$<br/> <br/> We are given that $\\textit{at least one coin shows a head and at least one coin shows a tail}.$<br/> <br/> So the outcomes $HHH$ and $TTT$ are not possible.<br/> <br/> Hence, the reduced sample space is<br/> <br/> $S'=\\{HHT,\\ HTH,\\ THH,\\ HTT,\\ THT,\\ TTH\\}.$<br/> <br/> Thus, the number of possible outcomes is<br/> <br/> $n(S')=6.$<br/> <br/> Now we need the probability that $\\textit{exactly two of the coins show heads}.$<br/> <br/> The outcomes with exactly two heads are<br/> <br/> $\\{HHT,\\ HTH,\\ THH\\}.$<br/> <br/> So the number of favorable outcomes is $3.$<br/> <br/> $\\therefore P(\\text{exactly two heads} \\mid \\text{at least one head and at least one tail})=\\frac{3}{6}=\\frac{1}{2}.$<br/> <br/> Answer: $\\boxed{\\dfrac{1}{2}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528146/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528146</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 51 - Engineering Mathematics (Axioms & Conditional Probability - Part 7)",
    "testLabel": "DPP 51",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 7",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A deck of $6$ cards, each carrying a distinct number from $1$ to $6$, is shuffled thoroughly. Two cards are then removed one at a time from the deck. What is the probability that the number on the first card is exactly $2$ greater than the number on the second card?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{4}{15}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528143\"></a><div itemprop=\"text\">There are $6$ cards labeled $1,2,3,4,5,6$.<br/> <br/> Two cards are drawn one at a time, so order matters.<br/> <br/> There are $6 \\times 5 = 30$ ordered ways to draw two cards.<br/> <br/> We want the first card to be exactly $2$ greater than the second card.<br/> <br/> So if the second card is $1$, the first must be $3$.<br/> If the second card is $2$, the first must be $4$.<br/> If the second card is $3$, the first must be $5$.<br/> If the second card is $4$, the first must be $6$.<br/> <br/> The favorable ordered pairs are $(3,1), (4,2), (5,3), (6,4)$<br/> <br/> So there are $4$ favorable outcomes.<br/> <br/> Thus the probability is $\\dfrac{4}{30} = \\dfrac{2}{15}.$<br/> <br/> Answer: $\\boxed{\\text{B. } \\dfrac{2}{15}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528142/go-classes-dpp-gate-da-probability-selection-without-replacement\" target=\"_blank\">GATE Overflow #528142</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A medical laboratory buys testing kits from two manufacturers, $A$ and $B$. Manufacturer $A$ supplies $65\\%$ of the kits, and manufacturer $B$ supplies $35\\%$ of the kits. All kits are inspected for accuracy. A kit that passes inspection is called certified. Of manufacturer $A$'s kits, $92\\%$ are certified. Of manufacturer $B$'s kits, $80\\%$ are certified.<br/><br/>The probability that a randomly chosen testing kit, given that it is certified, was made by $B$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.319$<br/></span>",
                "<span style=\"display: inline;\">$0.350$<br/></span>",
                "<span style=\"display: inline;\">$0.427$<br/></span>",
                "<span style=\"display: inline;\">$0.800$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528141\"></a><div itemprop=\"text\">Let $C$ be the event that a kit is certified.<br/> <br/> We want $P(B \\mid C).$<br/> <br/> By Bayes' theorem, <br/> $P(B \\mid C)=\\frac{P(B \\cap C)}{P(C)}.$<br/> <br/> Now,<br/> $P(B \\cap C)=P(B)P(C \\mid B)=0.35 \\cdot 0.80=0.28.$<br/> <br/> Also,<br/> $P(C)=P(A)P(C \\mid A)+P(B)P(C \\mid B).$<br/> <br/> $\\Rightarrow P(C)=0.65 \\cdot 0.92 + 0.35 \\cdot 0.80=0.598+0.28=0.878.$<br/> <br/> $\\therefore P(B \\mid C)=\\frac{0.28}{0.878}\\approx 0.319.$<br/> <br/> Answer: $\\boxed{\\text{A. 0.319}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528140/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528140</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The probability that a student passes Algebra is $0.7$. The probability that the student passes Biology is $0.6$. The probability that the student passes Chemistry is $0.5$.<br/> <br/> The probability that the student passes both Algebra and Biology is $0.4$.<br/> The probability that the student passes both Algebra and Chemistry is $0.3$.<br/> The probability that the student passes both Biology and Chemistry is $0.2$.<br/> <br/> The probability that the student passes at least one of the three subjects is $0.9$.<br/> <br/> What is the probability that the student passes all three subjects?</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"528139\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"true\" data-testid=\"conversation-turn-2\" data-turn=\"assistant\" data-turn-id=\"request-WEB:94295fbe-7c5a-4cd2-889f-4cd91870a83e-0\" dir=\"auto\"><p data-end=\"1135\" data-start=\"39\">Let $A$ be the event of passing Algebra, $B$ the event of passing Biology, and $C$ the event of passing Chemistry.<br/><br/>Using inclusion-exclusion,<br/>$ P(A \\cup B \\cup C) = P(A)+P(B)+P(C)-P(A \\cap B)-P(A \\cap C)-P(B \\cap C)+P(A \\cap B \\cap C). $<br/><br/>Substitute the given values:<br/>$ 0.9 = 0.7 + 0.6 + 0.5 - 0.4 - 0.3 - 0.2 + P(A \\cap B \\cap C). $<br/><br/>$\\Rightarrow 0.9 = 1.8 - 0.9 + P(A \\cap B \\cap C). $<br/><br/>$\\Rightarrow0.9 = 0.9 + P(A \\cap B \\cap C).$<br/><br/>$\\therefore P(A \\cap B \\cap C) = 0.$<br/><br/>Answer : $\\boxed{0}$</p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528138/go-classes-dpp-gate-da-probability-inclusion-exclusion-principle\" target=\"_blank\">GATE Overflow #528138</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Sixteen players $P_1, P_2, P_3, \\ldots, P_{16}$ participate in a knockout tournament. In any match between $P_i$ and $P_j$, player $P_i$ wins if $i&lt;j$. Assume that the positions of the players in the tournament bracket are assigned uniformly at random.</p><p>What is the probability that $P_6$ reaches the final?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{8}{429}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{143}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{56}{1287}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{16}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528096\"></a><div itemprop=\"text\"><p>Assume that the positions of the $16$ players in the knockout bracket are assigned uniformly at random.</p><p>Player $P_6$ can be defeated only by the stronger players</p><p>$P_1,P_2,P_3,P_4,$ and $P_5$,</p><p>since $P_i$ defeats $P_j$ whenever $i&lt;j$</p><p>Therefore, for $P_6$ to reach the final, none of</p><p>$P_1,P_2,P_3,P_4,P_5$</p><p>can be in the same half of the bracket as $P_6$.</p><p>Fix the position of $P_6$.</p><p>Then there are $15$ remaining positions for the other players.</p><p>Out of these $15$ positions:</p><ul><li>$7$ are in the same half as $P_6$,<br/> </li><li>$8$ are in the opposite half.</li></ul><p>So, the $5$ stronger players must all be placed in the opposite half.</p><p>The number of ways to choose positions for these $5$ players from the $8$ positions in the opposite half is $\\binom{8}{5}$.</p><p>The total number of ways to choose positions for these $5$ players from the $15$ available positions is $\\binom{15}{5}$.</p><p>Hence, the required probability is</p><p>$P(P_6 \\text{ reaches the final})=\\dfrac{\\binom{8}{5}}{\\binom{15}{5}}$.<br/><br/>Now, $\\binom{8}{5}=56 \\qquad \\text{and} \\qquad \\binom{15}{5}=3003$.<br/><br/>$\\therefore P(P_6 \\text{ reaches the final}) =\\dfrac{56}{3003} =\\dfrac{8}{429}$.<br/><br/>Thus, the probability that $P_6$ reaches the final is $\\boxed{\\dfrac{8}{429}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528095/go-classes-dpp-gate-da-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #528095</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A forest contains $20$ elk, of which $5$ are captured, tagged, and released. A week later, $4$ of the $20$ elk are captured again. What is the probability that exactly $2$ of these $4$ elk have been tagged?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{70}{323}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{35}{323}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{105}{323}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{19}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528089\"></a><div itemprop=\"text\">The total number of ways of selecting $4$ elk from $20$ elk is ${}^{20}C_4$.<br/> <br/> Out of the $20$ elk, $5$ are tagged and $15$ are untagged.<br/> <br/> We want exactly $2$ of the $4$ captured elk to be tagged.<br/> <br/> The number of ways to choose $2$ tagged elk from $5$ tagged elk is ${{}^5C_2}$.<br/> <br/> The number of ways to choose the remaining $2$ elk from the $15$ untagged elk is ${{}^{15}C_2}$.<br/> <br/> So, the number of favorable outcomes is<br/> <br/> ${}^5C_2 \\cdot {}^{15}C_2$.<br/> <br/> Therefore, the required probability is<br/> <br/> $P(\\text{exactly }2\\text{ tagged})=\\dfrac{{}^5C_2\\cdot{}^{15}C_2}{{}^{20}C_4}$.<br/> <br/> Now,<br/> <br/> ${}^5C_2=10$, $\\quad$ ${}^{15}C_2=105$, $\\quad$ ${}^{20}C_4=4845$.<br/> <br/> Hence,<br/> <br/> $P(\\text{exactly }2\\text{ tagged})=\\dfrac{10\\cdot105}{4845} =\\dfrac{1050}{4845} =\\dfrac{70}{323}$.<br/> <br/> Thus, the probability that exactly $2$ of the $4$ captured elk have been tagged is $\\dfrac{70}{323}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528088/go-classes-dpp-gate-da-probability-selection-without-replacement\" target=\"_blank\">GATE Overflow #528088</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two fair dice are rolled, one at a time. What is the probability that the second die will show a number higher than showed on the first die?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{5}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{15}{24}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{24}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528087\"></a><div itemprop=\"text\">When two fair dice are rolled one after the other, the total number of possible outcomes is<br/> <br/> $6 \\times 6 = 36.$<br/> <br/> We have to find the probability that the number on the second die is greater than the number on the first die.<br/> <br/> Now, let us count the favorable outcomes.<br/> <br/> If the first die shows $1$, then the second die can show $2, 3, 4, 5,$ or $6$.<br/> So, there are $5$ favorable outcomes.<br/> <br/> If the first die shows $2$, then the second die can show $3, 4, 5,$ or $6$.<br/> So, there are $4$ favorable outcomes.<br/> <br/> If the first die shows $3$, then the second die can show $4, 5,$ or $6$.<br/> So, there are $3$ favorable outcomes.<br/> <br/> If the first die shows $4$, then the second die can show $5$ or $6$.<br/> So, there are $2$ favorable outcomes.<br/> <br/> If the first die shows $5$, then the second die can show 6 only.<br/> So, there is $1$ favorable outcome.<br/> <br/> If the first die shows $6$, then the second die cannot show a greater number.<br/> So, there are $0$ favorable outcomes.<br/> <br/> Hence, the total number of favorable outcomes is<br/> <br/> $5+4+3+2+1 = 15.$<br/> <br/> Therefore, the required probability is<br/> <br/> $P(\\text{second die} &gt; \\text{first die}) = \\frac{15}{36} = \\frac{5}{12}.$<br/> <br/> Thus, the probability that the second die shows a number greater than the first die is $\\frac{5}{12}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528085/go-classes-dpp-gate-da-probability-combinatorial-counting-or-enumeration\" target=\"_blank\">GATE Overflow #528085</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>One hundred people line up to board an airplane. Each has a boarding pass with assigned seat. However, the first person to board has lost his boarding pass and takes a random seat. After that, each person takes the assigned seat if it is unoccupied, and one of unoccupied seats at random otherwise. What is the probability that the last person to board gets to sit in his assigned seat?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{100}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{99}{100}$<br/></span>",
                "<span style=\"display: inline;\">$0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528027\"></a><div itemprop=\"text\"><p>Let's analyze the possibilities for the final remaining seat. When the 100th passenger boards, there is exactly one seat left.</p><p>Consider any passenger $k$, where $1 &lt; k &lt; 100$. When passenger $k$ boards, their assigned seat is either empty or occupied. If it is empty, they take it. If it is occupied, they are forced to choose a random seat from the remaining empty ones. Because of this rule, it is impossible for passenger $k$'s assigned seat to be the very last empty seat on the plane. If it were empty when they boarded, they would have taken it!</p><p>Therefore, the only two seats that can possibly be left for the 100th passenger<br/>are:</p><ul><li>Seat 1 (the first passenger's assigned seat)<br/> </li><li>Seat 100 (the last passenger's assigned seat)</li></ul><p>Whenever a passenger (including the first one) is forced to choose a random seat, Seat 1 and Seat 100 are equally likely to be chosen from the pool of available seats.</p><p>The sequence of random seat choices will continue until someone randomly selects either Seat 1 or Seat 100.</p><ul><li>If someone randomly selects Seat 1, the chain of displacements stops.<br/> </li><li>Every subsequent passenger will find their assigned seat empty. Passenger 100 will get to sit in Seat 100.<br/> </li><li>If someone randomly selects Seat 100, then Seat 100 is taken, and Passenger 100 will ultimately be forced to sit in Seat 1.</li></ul><p>By symmetry, the probability that Seat 1 is picked before Seat 100 is exactly $1/2$. Thus, the probability that the last person gets to sit in their own assigned seat (Seat 100) is $1/2$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528026/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528026</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>There are three doors; behind one is a nice car, and behind each of the other two is a goat eating a bale of straw. You choose a door. Then Monty Hall opens one of the other doors, which shows a bale of straw. He gives you the opportunity of switching to the remaining door. What is the best strategy and the probability of winning if you adopt it?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It does not matter; the probability of winning is $1/2$ whether you switch or stick.<br/></span>",
                "<span style=\"display: inline;\">You should switch; the probability of winning by switching is $2/3$.<br/></span>",
                "<span style=\"display: inline;\">You should stick with your first choice; the probability of winning by sticking is $2/3$.<br/></span>",
                "<span style=\"display: inline;\">You should switch; the probability of winning by switching is $1/3$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527904\"></a><div itemprop=\"text\"><p>Let’s suppose you choose Door $1$, since the same analysis applies whichever door you chose.</p><p>$\\textbf{Strategy 1 (Stick):}$ With probability $1/3$ you chose the car initially. Monty Hall shows you one of the other doors, but that doesn’t change your probability of winning. The probability of winning by sticking is $1/3$.</p><p><br/>$\\textbf{Strategy 2 (Switch):}$</p><ul><li>$\\textbf{Case 1:}$ The car is behind Door $1$, which happens with probability $1/3$. Monty Hall shows you one of the other doors, say Door $2$. There will be a goat, so you switch to Door $3$, and lose. The same argument applies if he shows you Door $3$.<br/> </li><li>$\\textbf{Case 2:}$ The car is behind Door $2$. He will show you Door $3$, since he doesn’t want to give away the car. You switch to Door $2$ and win. This happens with probability $1/3$.<br/> </li><li>$\\textbf{Case 3:}$ The car is behind Door $3$. He will show you Door $2$. You switch to Door $3$ and win. This happens with probability $1/3$.<br/> </li></ul><p>So, you win with probability $1/3+1/3=2/3$ and lose with probability $1/3$.</p><p>Thus, strategy $2$ (switching) is much superior.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527903/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527903</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A multiple choice exam has $4$ choices for each question. The student has studied enough so that the probability they will know the answer to a question is $0.5$, the probability that the student will be able to eliminate one choice is $0.25$, otherwise all $4$ choices seem equally plausible. If they know the answer they will get the question correct. If not, they have to guess from the $3$ or $4$ choices. As the teacher you would like the test to measure what the student knows, and not how well they can guess. If the student answers a question correctly, what is the probability that they actually know the answer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{24}{31}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{31}{48}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{12}{31}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529917\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"366\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7702375495404535206\" width=\"400\"/></p><p>Option A</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527899/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527899</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Sarah and Bob draw $13$ cards each from a standard deck of $52$ cards. <br/><br/>Given that Sarah has exactly two aces, what is the probability that Bob has exactly one ace?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{2\\binom{37}{12}}{\\binom{39}{13}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2\\binom{37}{12}}{\\binom{52}{13}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{4}{1}\\binom{48}{12}}{\\binom{52}{13}}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{37}{12}}{\\binom{39}{13}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527897\"></a><div itemprop=\"text\">Let $A=$ Sarah has exactly two aces, and let $B=$ Bob has exactly one ace.<br/> <br/> We want to compute $P(B\\mid A)$. By definition,<br/> $$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}$$.<br/> <br/> First, compute $P(A)$.<br/> <br/> The total number of possible $13$-card hands for Sarah is $\\binom{52}{13}$.<br/> <br/> To have exactly two aces, Sarah must choose $2$ of the $4$ aces and $11$ of the remaining $48$ non-aces. Hence,<br/> $$P(A)=\\dfrac{\\binom{4}{2}\\binom{48}{11}}{\\binom{52}{13}}$$<br/> <br/> Now compute $P(A\\cap B)$.<br/> <br/> The total number of ways for Sarah to draw a $13$-card hand and Bob to draw another $13$-card hand from the remaining $39$ cards is $\\binom{52}{13}\\binom{39}{13}$.<br/> <br/> For both $A$ and $B$ to occur:<br/> Sarah must get exactly $2$ aces and $11$ non-aces, and Bob must then get exactly $1$ ace and $12$ non-aces from the remaining cards.<br/> <br/> After Sarah has taken $2$ aces, there are $2$ aces left.<br/> After Sarah has taken $11$ non-aces, there are $37$ non-aces left.<br/> <br/> So the number of favorable outcomes is $\\binom{4}{2} \\binom{48}{11}\\binom{2}{1}\\binom{37}{12}$.<br/> <br/> <br/> Therefore, $$P(A\\cap B)=\\dfrac{\\binom{4}{2}\\binom{48}{11}\\binom{2}{1}\\binom{37}{12}}{\\binom{52}{13}\\binom{39}{13}}$$.<br/> <br/> Hence,<br/> $$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{\\binom{4}{2} \\binom{48}{11} \\binom{2}{1} \\binom{37}{12} / \\binom{52}{13} \\binom{39}{13}}<br/> {\\binom{4}{2} \\binom{48}{11} / \\binom{52}{13}}=\\dfrac{\\binom{2}{1}\\binom{37}{12}}{\\binom{39}{13}}$$.<br/> <br/> Since $\\binom{2}{1}=2$, we get<br/> $$\\boxed{P(B\\mid A)=\\dfrac{2\\binom{37}{12}}{\\binom{39}{13}}}$$.<br/> <br/> Therefore, the correct answer is $\\textbf{A}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527895/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527895</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 52 - Engineering Mathematics (Axioms & Conditional Probability - Part 8)",
    "testLabel": "DPP 52",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 8",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 8)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a clinical test for cancer that can yield either a positive $(+)$ or negative $(-)$ result. Suppose that a patient who truly has cancer has a $1\\%$ chance of slipping past the test undetected. On the other hand, suppose that a cancer-free patient has a $5\\%$ probability of getting a positive test result. Suppose also that $2\\%$ of the population has cancer. Assuming that a patient who has been given the test got a positive test result, what is the probability that they have cancer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.9900$<br/></span>",
                "<span style=\"display: inline;\">$0.2878$<br/></span>",
                "<span style=\"display: inline;\">$0.0688$<br/></span>",
                "<span style=\"display: inline;\">$0.0500$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527865\"></a><div itemprop=\"text\">Suppose $C$ and $C^c$ are the events that the patient has cancer and does not have cancer respectively. Also suppose that $+$ and $-$ are the events that the test yields a positive and negative result respectively. By the information given, we have<br/> <br/> \\[<br/> P(-\\mid C)=0.01 \\qquad P(+\\mid C^c)=0.05 \\qquad P(C)=0.02<br/> \\]<br/> <br/> We need to compute $P(C\\mid +)$.<br/> <br/> First, we can deduce the probability of a true positive:<br/> $P(+\\mid C)=1-P(-\\mid C)=1-0.01=0.99$.<br/> <br/> We can also find the probability of a patient not having cancer:<br/> $P(C^c)=1-P(C)=1-0.02=0.98$.<br/> <br/> By Bayes’ rule, we have:<br/> <br/> \\[<br/> P(C\\mid +)=\\frac{P(+\\cap C)}{P(+)}<br/> =\\frac{P(+\\mid C)P(C)}{P(+\\mid C)P(C)+P(+\\mid C^c)P(C^c)}<br/> \\]<br/> <br/> Substituting the values into the formula:<br/> <br/> \\[<br/> P(C\\mid +)=\\frac{0.99\\times 0.02}{0.99\\times 0.02+0.05\\times 0.98}<br/> \\]<br/> <br/> \\[<br/> P(C\\mid +)=\\frac{0.0198}{0.0198+0.0490}<br/> \\]<br/> <br/> \\[<br/> P(C\\mid +)=\\frac{0.0198}{0.0688}\\approx 0.2878<br/> \\]<br/> <br/> Therefore, the probability that this patient has cancer (given that the test gave a positive result) is approximately $0.2878$ (or $28.78\\%$).</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527864/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527864</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Mark all expressions which indicate that $\\mathrm{X}$ is independent of $\\mathrm{Y}$ given $\\mathrm{Z}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(X, Y \\mid Z)=P(X \\mid Z) P(Y \\mid Z) $<br/></span>",
                "<span style=\"display: inline;\">$P(X, Y, Z)=P(X, Z) P(Y)$<br/></span>",
                "<span style=\"display: inline;\">$P(X \\mid Y, Z)=P(X \\mid Z)$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"527862\"></a><div itemprop=\"text\">The conditional independence of $X$ and $Y$ given $Z$ means<br/> $P(X,Y\\mid Z)=P(X\\mid Z)P(Y\\mid Z)$.<br/> <br/> Hence statement A is correct.<br/> <br/> Also,<br/> $X$ is independent of $Y$ given $Z$<br/> if and only if<br/> $P(X\\mid Y,Z)=P(X\\mid Z)$,<br/> whenever these conditional probabilities are defined.<br/> <br/> Hence statement C is also correct.<br/> <br/> Statement B is not correct, because it does not represent conditional independence given $Z$.<br/> <br/> Therefore, the correct choices are $\\textbf{A and C}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527861/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527861</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Ten tickets numbered $1, 2, 3, \\ldots 10.$ Six tickets are selected at random one at a time with replacement. The probability of the largest number appearing on the selected ticket being $7$ is ________</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(7^6 +1)/10^6$<br/></span>",
                "<span style=\"display: inline;\">$(7^6 - 6^6)/10^6$<br/></span>",
                "<span style=\"display: inline;\">$(7^6+6^6)/10^6$<br/></span>",
                "<span style=\"display: inline;\">$6^6/10^6$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527431\"></a><div itemprop=\"text\"><p data-sourcepos=\"5:1-5:199\">Imagine you have a bag with 10 tickets, numbered 1 through 10. You're going to pick a ticket, look at the number, put it back in the bag (that's what \"with replacement\" means), and do this six times.</p><p data-sourcepos=\"7:1-7:69\"><strong>The Question: What's the Chance the Biggest Number You Pick is 7?</strong></p><p data-sourcepos=\"9:1-9:98\">We want to know the probability that the largest number you see in those six picks is exactly 7.</p><p data-sourcepos=\"11:1-11:37\"><strong>Let's Think About It Step-by-Step</strong></p><ol data-sourcepos=\"13:1-32:0\"><li data-sourcepos=\"13:1-14:0\"><p data-sourcepos=\"13:4-13:215\"><strong>What Numbers Can You Pick?</strong> Since the biggest number has to be 7, you can only pick tickets numbered 1, 2, 3, 4, 5, 6, or 7. You can't pick 8, 9, or 10 because that would make the largest number bigger than 7.</p></li><li data-sourcepos=\"15:1-17:0\"><p data-sourcepos=\"15:4-16:184\"><strong>Total Possible Outcomes</strong> For each of the six picks, you have 10 choices (numbers 1 through 10). So, the total number of possible outcomes is 10 * 10 * 10 * 10 * 10 * 10, which is 10⁶ (10 to the power of 6).</p></li><li data-sourcepos=\"18:1-28:0\"><p data-sourcepos=\"18:4-19:115\"><strong>Favorable Outcomes: The Tricky Part!</strong> This is where we need to be careful. We want the biggest number to be <em>exactly</em> 7. Here's how we figure it out:</p><ul data-sourcepos=\"21:4-28:0\"><li data-sourcepos=\"21:4-22:0\"><p data-sourcepos=\"21:6-21:224\"><strong>All Numbers 7 or Less:</strong> If you only pick from the numbers 1 through 7, you have 7 choices for each of the six picks. So, there are 7 * 7 * 7 * 7 * 7 * 7 = 7⁶ ways to get a selection where <em>every</em> number is 7 or less.</p></li><li data-sourcepos=\"23:4-24:0\"><p data-sourcepos=\"23:6-23:247\"><strong>All Numbers 6 or Less:</strong> Now, let's think about what happens if you only pick from the numbers 1 through 6. You'd have 6 choices for each pick, giving you 6 * 6 * 6 * 6 * 6 * 6 = 6⁶ ways to get a selection where <em>every</em> number is 6 or less.</p></li><li data-sourcepos=\"25:4-26:0\"><p data-sourcepos=\"25:6-25:298\"><strong>Why Subtract?</strong> We need to find the cases where the <em>largest</em> number is 7. If we just count all the ways to get numbers 7 or less (7⁶), we're also counting the cases where the largest number is 6 or 5 or 4, etc. So, we need to subtract the cases where the largest number is 6 or less (6⁶).</p></li><li data-sourcepos=\"27:4-28:0\"><p data-sourcepos=\"27:6-27:73\"><strong>Favorable Outcomes:</strong> The number of favorable outcomes is 7⁶ - 6⁶.</p></li></ul></li><li data-sourcepos=\"29:1-32:0\"><p data-sourcepos=\"29:4-31:41\"><strong>Calculate the Probability</strong> Probability is (favorable outcomes) / (total outcomes). So, the probability is (7⁶ - 6⁶) / 10⁶</p></li></ol><p data-sourcepos=\"33:1-33:14\"><strong>The Answer</strong></p><p data-sourcepos=\"35:1-35:64\">The correct answer is <strong>B. (7⁶ - 6⁶) / 10⁶</strong> <strong>Let's Summarize</strong></p><ul data-sourcepos=\"37:1-42:0\"><li data-sourcepos=\"37:1-37:65\"><strong>Total possibilities:</strong> 10⁶ (because each pick has 10 choices)</li><li data-sourcepos=\"38:1-38:39\"><strong>Ways to get numbers 7 or less:</strong> 7⁶</li><li data-sourcepos=\"39:1-39:39\"><strong>Ways to get numbers 6 or less:</strong> 6⁶</li><li data-sourcepos=\"40:1-40:55\"><strong>Ways to get the largest number EXACTLY 7:</strong> 7⁶ - 6⁶</li><li data-sourcepos=\"41:1-42:0\"><strong>Probability:</strong> (7⁶ - 6⁶) / 10⁶</li></ul><p data-sourcepos=\"43:1-43:42\"><strong>Key Concept: The Subtraction Principle</strong></p><p>This problem uses the idea of subtracting unwanted outcomes to find the desired ones. It's a common technique in probability and counting problem</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527430/go-classes-dpp-gate-da-probability-subtraction-principle\" target=\"_blank\">GATE Overflow #527430</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a probabilistic model, it is given that $\\mathrm{P}[A]=\\mathrm{a}, \\mathrm{P}[B]=\\mathrm{b}$, and $\\mathrm{P}\\left[\\left(B^{c} \\mid A^{c}\\right)\\right]=\\mathrm{e}$. Determine $\\mathrm{P}[B \\mid A]$ in terms of $\\mathrm{a}, \\mathrm{b}$, and $\\mathrm{e}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{P}[B \\mid A]=\\frac{\\mathrm{b}-(1-\\mathrm{e})(1-\\mathrm{a})}{\\mathrm{a}}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{P}[B \\mid A]=\\frac{\\mathrm{b}+(1-\\mathrm{e})(1-\\mathrm{a})}{\\mathrm{a}}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{P}[B \\mid A]=\\frac{\\mathrm{b}+(1-\\mathrm{e})(1+\\mathrm{a})}{\\mathrm{a}}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{P}[B \\mid A]=\\frac{\\mathrm{b}-(1+\\mathrm{e})(1-\\mathrm{a})}{\\mathrm{a}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527426\"></a><div itemprop=\"text\"><ul><li>$\\mathrm{P}[A]=\\mathrm{a}$<br/> </li><li>$\\mathrm{P}[B]=\\mathrm{b}$<br/> </li><li>$\\mathrm{P}\\left[\\left(B^{c} \\mid A^{c}\\right)\\right]=\\mathrm{e}$</li></ul><p><br/>We need to find $\\mathrm{P}[B \\mid A]=x$.<br/><br/>From the law of total probability:<br/><br/>$\\mathrm{P}[B]=\\mathrm{P}[B \\mid A] \\cdot \\mathrm{P}[A]+\\mathrm{P}\\left[B \\mid A^{c}\\right] \\cdot \\mathrm{P}\\left[A^{c}\\right]$<br/><br/>Substituting $\\mathrm{P}[A]=\\mathrm{a}$ and $\\mathrm{P}\\left[A^{c}\\right]=1-\\mathrm{a}$ :<br/><br/>$\\mathrm{b}=x \\cdot \\mathrm{a}+\\mathrm{P}\\left[B \\mid A^{c}\\right] \\cdot(1-\\mathrm{a})$<br/><br/>Given $\\mathrm{P}\\left[B \\mid A^{c}\\right]=1-\\mathrm{e}$ :<br/><br/>$\\mathrm{b}=x \\cdot \\mathrm{a}+(1-\\mathrm{e}) \\cdot(1-\\mathrm{a})$<br/><br/>Now, solve for $x$ :<br/>$$<br/>\\begin{aligned}<br/>&amp; x \\cdot \\mathrm{a}=\\mathrm{b}-(1-\\mathrm{e}) \\cdot(1-\\mathrm{a}) \\\\\\\\<br/>&amp; x=\\frac{\\mathrm{b}-(1-\\mathrm{e}) \\cdot(1-\\mathrm{a})}{\\mathrm{a}}<br/>\\end{aligned}<br/>$$<br/>Therefore, the conditional probability $\\mathrm{P}[B \\mid A]$ in terms of $\\mathrm{a}, \\mathrm{b}$, and $\\mathrm{e}$ is:<br/>$$<br/>x=\\frac{\\mathrm{b}-(1-\\mathrm{e})(1-\\mathrm{a})}{\\mathrm{a}}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527425/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527425</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A bakery has $ 15 $ different types of pastries, consisting of $ 6 $ fruit pastries and $ 9 $ cream pastries. Assuming that all selections are equally likely, what is the probability that the $ 5 $ pastries chosen for the display case are all fruit pastries? <em>(Answer upto 3 decimal places)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0.002",
            "solution": "<div class=\"solution-content\"><a name=\"527422\"></a><div itemprop=\"text\">We want the probability that all $5$ pastries chosen are fruit pastries.<br/> <br/> There are $15$ pastries total, and $6$ of them are fruit pastries.<br/> <br/> The total number of ways to choose $5$ pastries from $15$ is $\\binom{15}{5}$.<br/> <br/> The number of ways to choose $5$ fruit pastries from the $6$ fruit pastries is $\\binom{6}{5}$.<br/> <br/> So the probability is<br/> <br/> $P(\\text{all 5 are fruit}) = \\frac{\\binom{6}{5}}{\\binom{15}{5}}$.<br/> <br/> Now compute:<br/> <br/> $\\binom{6}{5} = 6 \\quad$ and $\\quad \\binom{15}{5} = 3003$.<br/> <br/> <br/> Therefore, $P(\\text{all 5 are fruit}) = \\frac{6}{3003} = \\frac{2}{1001} \\approx 0.002$.<br/> <br/> So the probability is about $\\boxed{0.002}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527421/go-classes-dpp-gate-da-probability-probability-using-combinations\" target=\"_blank\">GATE Overflow #527421</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"225\" data-start=\"34\">A fair six-sided die is rolled once. If the number obtained is $1,2,$ or $3$, the die is rolled one more time. What is the probability that the total of all numbers obtained is at least $7$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{6}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{4}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{3}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{12}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527347\"></a><div itemprop=\"text\">We consider cases based on the first roll.<br/> <br/> If the first roll is $1$, then the second roll must be $6$.<br/> <br/> So the probability is<br/> <br/> $\\dfrac{1}{6}\\cdot\\dfrac{1}{6}=\\dfrac{1}{36}$<br/> <br/> If the first roll is $2$, then the second roll must be $5$ or $6$.<br/> <br/> So the probability is<br/> <br/> $\\dfrac{1}{6}\\cdot\\dfrac{2}{6}=\\dfrac{2}{36}$<br/> <br/> If the first roll is $3$, then the second roll must be $4,5,$ or $6$.<br/> <br/> So the probability is<br/> <br/> $\\dfrac{1}{6}\\cdot\\dfrac{3}{6}=\\dfrac{3}{36}$<br/> <br/> If the first roll is $4,5,$ or $6$, the die is not rolled again, and the total is only $4,5,$ or $6$, which is not at least $7$.<br/> <br/> Hence, the required probability is<br/> <br/> $\\dfrac{1}{36}+\\dfrac{2}{36}+\\dfrac{3}{36}=\\dfrac{6}{36}=\\dfrac{1}{6}$<br/> <br/> Therefore, the correct answer is $A$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527346/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527346</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Four fair six-sided dice are rolled. The probability that the sum of the results being $22$ is $\\dfrac{X}{1296}$. The value of $X$ is _______</div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"527345\"></a><div itemprop=\"text\">There are only two possible sets whose elements sum to $22$ : $\\{6,6,6,4\\}, \\{6,6,5,5\\}$<br/> <br/> Number of permutations for $1^{\\text{st}}$ set $: \\dfrac{4!}{3!} = 4$<br/> <br/> Number of permutations for $2^{\\text{nd}}$ set $: \\dfrac{4!}{(2!*2!)} = 6$<br/> <br/> So total number of ways to sum $22 = 10$<br/> <br/> So, $\\boxed{X =10}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527344/go-classes-dpp-gate-da-probability-combinatorial-probability\" target=\"_blank\">GATE Overflow #527344</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A quality control unit has $12$ machines, out of which exactly $5$ are in good condition. To check whether the unit is operational, the inspectors examine $4$ machines selected at random without replacement. The unit is declared operational if at least $3$ of the $4$ machines inspected are in good condition. Let the probability that the unit is declared operational be denoted by $p$. Then $84p=$ ________. <em data-end=\"391\" data-start=\"337\">(The answer should be rounded to two decimal places.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "12.73",
            "solution": "<div class=\"solution-content\"><a name=\"527343\"></a><div itemprop=\"text\"><p data-end=\"533\" data-start=\"457\">$p=\\dfrac{\\binom{5}{3}\\binom{7}{1}+\\binom{5}{4}\\binom{7}{0}}{\\binom{12}{4}}$</p><p data-end=\"569\" data-start=\"535\">$=\\dfrac{10\\cdot 7+5\\cdot 1}{495}$</p><p data-end=\"589\" data-start=\"571\">$=\\dfrac{75}{495}$</p><p data-end=\"607\" data-start=\"591\">$=\\dfrac{5}{33}$</p><p data-end=\"612\" data-start=\"609\"><br/><br/>So, $84p=84\\cdot \\dfrac{5}{33}=\\dfrac{140}{11} = 12.7272... \\approx 12.73$<br/> </p><p data-end=\"706\" data-start=\"659\">Hence, the answer is $\\boxed{12.73}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527342/go-classes-dpp-gate-da-probability-probability-based-on-combinations\" target=\"_blank\">GATE Overflow #527342</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $P(E)$ denote the probability of the event $E$. Given $P(A) = 1$, $P(B) =\\dfrac{1}{2}$, the values of $P(A\\mid B)$ and $P(B\\mid A)$ respectively are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{4}\\right),\\left(\\dfrac{1}{2}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{2}\\right),\\left(\\dfrac{1}{4}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{2}\\right),{1}$<br/></span>",
                "<span style=\"display: inline;\">${1},\\left(\\dfrac{1}{2}\\right)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"527230\"></a><div itemprop=\"text\"><p>Given, $P(A)=1,\\qquad P(B)=\\dfrac{1}{2}$</p><p>Since $P(A)=1$, event $A$ is a sure event.</p><p>So,</p><p>$A\\cap B=B$</p><p>Therefore,</p><p>$P(A\\mid B)=\\dfrac{P(A\\cap B)}{P(B)}=\\dfrac{P(B)}{P(B)}=1$</p><p>Also,</p><p>$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}=\\dfrac{P(B)}{P(A)}=\\dfrac{1/2}{1}=\\dfrac{1}{2}$</p><p>Hence, the values of $P(A\\mid B)$ and $P(B\\mid A)$ are $\\left(1,\\dfrac{1}{2}\\right)$</p><p>Therefore, the correct option is <strong>D</strong>.</p><p> </p><p>$\\underline{\\textbf{Alternate Solution :}}$</p><p>An event is a subset of Universe of sample space $(P(U) = 1)$.</p><p>Notice here, $P(A) = 1$, so you can thing of $A$ as whole universe,</p><p>Event $B$ is a subset of Event $A$.</p><p><img alt=\"\" height=\"207\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3875114000904664453\" width=\"294\"/></p><p>$P(A \\cap B) = P(B) = \\frac{1}{2} $</p><p>$P(A/B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{\\frac{1}{2}}{\\frac{1}{2}} = 1$</p><p>$P(B/A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{\\frac{1}{2}}{1} = \\frac{1}{2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527228/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527228</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Four fair coins are tossed simultaneously. The probability that at least one head and one tail turn up is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{15}{16}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527227\"></a><div itemprop=\"text\"><p>Total number of outcomes when $4$ fair coins are tossed is</p><p>$2^4=16$</p><p>We need the probability of getting at least one head and at least one tail.</p><p>Instead of counting directly, use the complement.</p><p>The only cases which do not satisfy this are:</p><p>$HHHH$ and $TTTT$</p><p>So, number of unfavourable outcomes $=2$</p><p>Hence, number of favourable outcomes $=16-2=14$<br/><br/>$\\therefore P(\\text{at least one head and at least one tail})=\\dfrac{14}{16}=\\dfrac{7}{8}$</p><p>So the correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527225/go-classes-dpp-gate-da-probability-complementary-events\" target=\"_blank\">GATE Overflow #527225</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 53 - Engineering Mathematics (Axioms & Conditional Probability - Part 9)",
    "testLabel": "DPP 53",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 9",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 9)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An unbalanced dice $($with $6$ faces, numbered from $1$ to $6)$ is thrown. The probability that the face value is odd is $90\\%$ of the probability that the face value is even. The probability of getting any even numbered face is the same. If the probability that the face is even given that it is greater than $3$ is $0.75$, which one of the following options is closest to the probability that the face value exceeds $3$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.453$<br/></span>",
                "<span style=\"display: inline;\">$0.468$<br/></span>",
                "<span style=\"display: inline;\">$0.485$<br/></span>",
                "<span style=\"display: inline;\">$0.492$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527224\"></a><div itemprop=\"text\"><p>Let</p><p>$P(\\text{even})=E$</p><p>Then</p><p>$P(\\text{odd})=0.9E$</p><p>Since</p><p>$P(\\text{even})+P(\\text{odd})=1$</p><p>we get</p><p>$E+0.9E=1$</p><p>$1.9E=1$</p><p>$E=\\dfrac{10}{19}$</p><p>So</p><p>$P(\\text{even})=\\dfrac{10}{19}$</p><p>Given that all even faces are equally likely,</p><p>$P(2)=P(4)=P(6)=\\dfrac{1}{3}\\cdot \\dfrac{10}{19}=\\dfrac{10}{57}$</p><p>Now,</p><p>$P(\\text{even}\\mid &gt;3)=0.75=\\dfrac{3}{4}$</p><p>The outcomes greater than $3$ are $4,5,6$.</p><p>Among these, the even outcomes are $4$ and $6$.</p><p>So</p><p>$P(\\text{even and } &gt;3)=P(4)+P(6)=\\dfrac{10}{57}+\\dfrac{10}{57}=\\dfrac{20}{57}$</p><p>Using conditional probability,</p><p>$P(\\text{even}\\mid &gt;3)=\\dfrac{P(\\text{even and } &gt;3)}{P(&gt;3)}$</p><p>Hence</p><p>$\\dfrac{3}{4}=\\dfrac{20/57}{P(&gt;3)}$</p><p>So</p><p>$P(&gt;3)=\\dfrac{20}{57}\\cdot \\dfrac{4}{3}=\\dfrac{80}{171}$</p><p>Now</p><p>$\\dfrac{80}{171}\\approx 0.468$</p><p>Therefore, the closest option is $B. \\ 0.468$<br/><br/><br/><br/>$\\underline{\\textbf{Alternate Solution}} : $</p><p><strong>Information given :</strong></p><ul><li>$P_1+P_2+P_3+P_4+P_5+P_6=1$<br/> </li><li>$P_1+P_3+P_5=\\frac{90}{100}\\left(P_2+P_4+P_6\\right)$<br/> </li><li>$P_2=P_4=P_6$<br/> </li><li>$P_4+P_6=\\frac{75}{100}\\left(P_4+P_5+P_6\\right)$<br/> </li></ul><p><strong>Calculations:</strong></p><ul><li>$P_2+P_4+P_6=3 P_2$<br/> </li><li>$P_1+P_3+P_5=1-3 P_2$<br/> </li><li>$P_1+P_3+P_5=\\frac{90}{100} \\cdot 3 P_2$<br/> </li><li>$1-3 P_2=\\frac{90}{100} \\cdot 3 P_2$<br/> </li><li>$P_2=\\frac{10}{57}$<br/> </li><li>$P_4=\\frac{10}{57}$<br/> </li><li>$P_6=\\frac{10}{57}$<br/> </li><li>$P_5=\\frac{20}{171}$<br/> </li></ul><p>Hence the probability that the face value exceeds $3$ is $\\frac{10}{57}+\\frac{20}{171}+\\frac{10}{57}=\\frac{80}{171}\\approx 0.468$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527219/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527219</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A man visits a couple who have $2$ children. one of the children, a boy, comes into the room. find the probability $P$ that the other is also a boy.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/3$<br/></span>",
                "<span style=\"display: inline;\">$2/3$<br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$3/4$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527216\"></a><div itemprop=\"text\"><p>Let the possible families be</p><p>$BB,\\ BG,\\ GB,\\ GG$</p><p>where $B$ stands for boy and $G$ stands for girl.</p><p>Now one boy comes into the room.</p><p>So the possible cases are:</p><p>From $BB$: either of the two boys may come.</p><p>$\\Rightarrow (BB,\\text{ first boy}),\\ (BB,\\text{ second boy})$</p><p>From $BG$: only the boy can come.</p><p>$\\Rightarrow (BG,\\text{ boy})$</p><p>From $GB$: only the boy can come.</p><p>$\\Rightarrow (GB,\\text{ boy})$</p><p>Thus, total possible cases $=4$</p><p>Out of these, the favourable cases in which the other child is also a boy are:</p><p>$(BB,\\text{ first boy}),\\ (BB,\\text{ second boy})$</p><p>So favourable cases $=2$</p><p>Hence,</p><p>$P(\\text{the other child is also a boy})=\\dfrac{2}{4}=\\dfrac{1}{2}$</p><p>Therefore, the correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527215/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527215</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The probability that a number selected at random between $100$ and $999$ (both inclusive) will not contain the digit $7$ is: </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{16}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{9}{10}\\right)^{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{27}{75}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{18}{25}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527024\"></a><div itemprop=\"text\">First digit can be chosen in $8$ ways from $1−9$ excluding $7$<br/> <br/> Second digit can be chosen in $9$ ways from $0−9$ excluding $7$ and similarly the third digit in $9$ ways.<br/> <br/> So, total no. of ways excluding $7 = 8\\times 9\\times 9$<br/> <br/> Total no. of ways including $7 = 9\\times 10\\times 10$<br/> <br/> So, Answer $= \\dfrac{(8\\times 9\\times 9)}{(9\\times 10\\times10)}=\\dfrac{18}{25}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527023/go-classes-dpp-gate-cs-da-probability-probability-with-counting-of-digits\" target=\"_blank\">GATE Overflow #527023</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Eight distinct car accidents occurred in a week. Assume that each accident is equally likely to have occurred on any one of the $7$ days of the week, independently of the others.</p><p>What is the probability that the eight accidents occurred on exactly two days, with four accidents on each of those two days?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{\\binom{7}{2}\\binom{8}{4}}{7^8}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{7\\binom{8}{4}}{7^8}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{7}{2}2^8}{7^8}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{8}{4}}{7^7}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527021\"></a><div itemprop=\"text\">Each of the $8$ distinct accidents can occur on any of the $7$ days, so the total number of possible assignments is $7^8$.<br/> <br/> Now count the favorable assignments.<br/> <br/> First, choose the $2$ days on which the accidents occurred. This can be done in $\\binom{7}{2}$ ways.<br/> <br/> Next, distribute the $8$ distinct accidents so that $4$ occur on one chosen day and the remaining $4$ occur on the other chosen day.<br/> <br/> Once the two days are chosen, choose which $4$ of the $8$ accidents occurred on one of the two chosen days. This can be done in $\\binom{8}{4}$ ways.<br/> <br/> The remaining $4$ accidents must then occur on the other chosen day.<br/> <br/> Hence, the number of favorable assignments is $\\binom{7}{2}\\binom{8}{4}$.<br/> <br/> Therefore, the required probability is $\\dfrac{\\binom{7}{2}\\binom{8}{4}}{7^8}$.<br/> <br/> So the correct answer is $\\boxed{\\dfrac{\\binom{7}{2}\\binom{8}{4}}{7^8}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527020/go-classes-dpp-gate-cs-da-probability-probability-using-counting-techniques\" target=\"_blank\">GATE Overflow #527020</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$E_{1}$ and $E_{2}$ are events in a probability space satisfying the following constraints:</p><ul><li>$P(E_{1} )$ = $P( E_{2} )$<br/> </li><li>$P( E_{1}\\cup E_{2} )$ = $1$<br/> </li><li>$E_{1}$ and $E_{2}$ are independent</li></ul><p>The value of $P( E_{1})$, the probability of the event $E_{1}$, is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"527017\"></a><div itemprop=\"text\">Let $P(E_1)=P(E_2)=p$.<br/> <br/> Since $E_1$ and $E_2$ are independent,<br/> $P(E_1\\cap E_2)=P(E_1)P(E_2)=p^2$.<br/> <br/> Now,<br/> $P(E_1\\cup E_2)=P(E_1)+P(E_2)-P(E_1\\cap E_2)$.<br/> <br/> So,<br/> $1=p+p-p^2=2p-p^2$.<br/> <br/> Thus,<br/> $p^2-2p+1=0$.<br/> <br/> Hence,<br/> $(p-1)^2=0$,<br/> so $p=1$.<br/> <br/> Therefore, $\\boxed{P(E_1)=1}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527016/go-classes-dpp-gate-cs-da-probability-independent-events\" target=\"_blank\">GATE Overflow #527016</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Aishwarya studies either computer science or mathematics everyday. If she studies computer science on a day, then the probability that she studies mathematics the next day is $0.6$. If she studies mathematics on a day, then the probability that she studies computer science the next day is $0.4$. Given that Aishwarya studies computer science on Monday, what is the probability that she studies computer science on Wednesday?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.24$<br/></span>",
                "<span style=\"display: inline;\">$0.36$<br/></span>",
                "<span style=\"display: inline;\">$0.4$<br/></span>",
                "<span style=\"display: inline;\">$0.6$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527014\"></a><div itemprop=\"text\"><p>on <strong>Wednesday</strong> we want <strong>Computer Science</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"268\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2050071926369401498\" width=\"261\"/></p><p>Required Probability = $0.6 \\times 0.4 + 0.4 \\times 0.4 = 0.4$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527013/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527013</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A pair of unbiased dice are rolled together till a sum of either $5$ or $7$ is obtained. What is the probability that $5$ comes before $7$ ? <em>(upto two decimal places)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0.40",
            "solution": "<div class=\"solution-content\"><a name=\"530001\"></a><div itemprop=\"text\"><p><b data-index-in-node=\"104\" data-path-to-node=\"0\">Reduced Sample Space</b><strong> Method:</strong><br/><br/>Total Outcome: 36</p><ul><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">Ways to get a sum of 5:</b> (1,4), (2,3), (3,2), (4,1).</p><ul data-path-to-node=\"6,0,1\"><li><p data-path-to-node=\"6,0,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,1,0,0\">Total = 4 ways.</b></p></li></ul></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">Ways to get a sum of 7:</b> (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).</p><ul data-path-to-node=\"6,1,1\"><li><p data-path-to-node=\"6,1,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,1,0,0\">Total = 6 ways</b></p></li></ul></li></ul><div><p data-path-to-node=\"8\">The problem says we keep rolling <i data-index-in-node=\"33\" data-path-to-node=\"8\">until</i> we get either a 5 or a 7. This means any other sum (like 2, 3, 8, etc.) doesn't matter; they just lead to another roll.</p><p data-path-to-node=\"9\">Because we only care about the moment the game ends, we can ignore all other 26 outcomes and focus only on the <b data-index-in-node=\"111\" data-path-to-node=\"9\">10 outcomes</b> that actually finish the game ($4 + 6 = 10$).</p><p data-path-to-node=\"11\">The probability that the game ends with a 5 (rather than a 7) is simply the number of ways to get a 5 divided by the total number of \"game-ending\" ways:</p><p>$$P(5 \\text{ before } 7) = \\frac{\\text{Ways to get 5}}{\\text{Ways to get 5} + \\text{Ways to get 7}}$$</p><p>$$P = \\frac{4}{4 + 6}$$</p><p>$$P = \\frac{4}{10}$$</p><p>$$P = 0.40$$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527010/go-classes-dpp-gate-cs-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527010</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A fair die is rolled. Let X be the square of the number obtained. Compute $E[X]$.</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"478725\"></a><div itemprop=\"text\">E[X]=&gt;1/6​(1^2+2^2+3^2+4^2+5^2+6^2)<br/> <br/> =&gt; 1/6​(1+4+9+16+25+36)<br/> <br/> =&gt; 1/6(91)<br/> <br/> =&gt; 15.17​</div><br><br><small>Source: <a href=\"https://gateoverflow.in/478686/go-classes-dpp-engineering-mathematics-probability-sheldon-ross\" target=\"_blank\">GATE Overflow #478686</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three urns A, B and C contain 7 red, 5 black; 5 red, 7 black and 6 red, 6 black balls, respectively, One of the um is selected at random and a ball is drawn from it. If the ball drawn is black, then the probability that it is drawn from urn $A$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{4}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{18}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"478727\"></a><div itemprop=\"text\">C<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/478684/go-classes-dpp-engineering-mathematics-probability-jee-mains\" target=\"_blank\">GATE Overflow #478684</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If three letters can be posted to any one of the $5$ different addresses, then the probability that the three letters are posted to exactly two addresses is :</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{18}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{12}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{25}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"479029\"></a><div itemprop=\"text\">$\\frac{ \\binom{5}{2} * \\binom{2}{1} *\\binom{3}{2}} {5^3}$<br/> <br/> the reason is we have total no of ways to post any letter is 5^3 bcz each letter has 5 choices and for numerator two excatly address posted means we have to choose $2$ address out of $5$ and we have to choose those $2$ letters that goes into out of one adddress and $1$ for other address. and which have $2$ ways either $2,1$ or $1,2$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/478682/go-classes-dpp-engineering-mathematics-probability-jee-mains\" target=\"_blank\">GATE Overflow #478682</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 54 - Engineering Mathematics (Axioms & Conditional Probability - Part 10)",
    "testLabel": "DPP 54",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 10",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 10)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A remote village has exactly $1000$ vehicles with sequential registration numbers starting from $1000$ . Out of the total vehicles, $30 \\%$ are without pollution clearance certificate. Further, even- and oddnumbered vehicles are oper ated on even- and oddnumbered dates, respectively. If $100$ vehicles are chosen at random on an evennumbered date, the number of vehicles expected without pollution clearance certificate is.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$</span>",
                "<span style=\"display: inline;\">$30$</span>",
                "<span style=\"display: inline;\">$50$</span>",
                "<span style=\"display: inline;\">$70$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"479041\"></a><div itemprop=\"text\">30</div><br><br><small>Source: <a href=\"https://gateoverflow.in/478680/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #478680</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A pot contains two red balls and two blue balls. Two balls are drawn from this pot randomly without replacement. What is the probability that the two balls drawn have different colours?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{2}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"479099\"></a><div itemprop=\"text\">A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/478677/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #478677</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Considering an experiment of tossing two fair dice, one black and one red. What is the probability that the number on the black die divides the number on red die?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{22}{36}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{12}{36}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{14}{36}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{6}{36}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"477956\"></a><div itemprop=\"text\">If $B = 1$, then $R \\in \\{1,2,3,4,5,6\\} \\Rightarrow$ 6 outcomes<br/> <br/> If $B = 2$, then $R \\in \\{2,4,6\\} \\Rightarrow$ 3 outcomes<br/> <br/> If $B = 3$, then $R \\in \\{3,6\\} \\Rightarrow$ 2 outcomes<br/> <br/> If $B = 4$, then $R = 4 \\Rightarrow$ 1 outcome<br/> <br/> If $B = 5$, then $R = 5 \\Rightarrow$ 1 outcome<br/> <br/> If $B = 6$, then $R = 6 \\Rightarrow$ 1 outcome<br/> <br/> Total favorable outcomes $= 14$<br/> <br/> \\[<br/> \\text{Probability} = \\frac{14}{36}<br/> \\]<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/477926/go-classes-dpp-engineering-mathematics-probability-ugc-net\" target=\"_blank\">GATE Overflow #477926</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Two fair six-sided dice are rolled. What is the probability that the sum of the numbers is divisible by $3$ ?<br/> </div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"476556\"></a><div itemprop=\"text\"><p>(1,1) <strong>(1,2)</strong> (1,3) (1,4) <strong>(1,5) </strong>(1,6)</p><p><strong>(2,1)</strong> (2,2) (2,3) <strong>(2,4) </strong>(2,5) (2,6)</p><p>(3,1) (3,2) <strong>(3,3) </strong>(3,4) (3,5) <strong>(3,6)</strong></p><p>(4,1) <strong>(4,2)</strong> (4,3) (4,4) <strong>(4,5) </strong>(4,6)</p><p><strong>(5,1)</strong> (5,2) (5,3) <strong>(5,4)</strong> (5,5) (5,6)</p><p>(6,1) (6,2) <strong>(6,3) </strong>(6,4) (6,5) <strong>(6,6)</strong></p><p>The ordered pairs which have the sum divisible by 3 are in Bold format You can see above. Count them it will evaluate to 12.</p><p>Now, probability will be (Fav outcomes)/ (Total Outcomes) = 12/36 = 1/3</p><p>Plz suggest me some more efficient and optimized approach I am always open to feedbacks and discussion...</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/476490/go-classes-dpp-engineering-mathematics-probability-sheldon-ross\" target=\"_blank\">GATE Overflow #476490</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The probabilities of occurrences of two independent events $A$ and $B$ are $0.5$ and $0.8$ , respectively. What is the probability of occurrence of at least $A$ or $B$ (rounded off to one decimal place)?</div></span>",
            "image": "",
            "options": [],
            "answer": "0.9",
            "solution": "<div class=\"solution-content\"><a name=\"476489\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; P(A)=0.5 \\\\<br/> &amp; P(B)=0.8<br/> \\end{aligned}<br/> $$<br/> <br/> Probability of occurence of atleast $A$ or $B=\\mathrm{P}(\\mathrm{A} \\cap \\mathrm{B})$<br/> <br/> $$<br/> \\begin{aligned}<br/> P(A \\cap B) &amp; =P(A)+P(B)-P(A \\cap B) \\\\<br/> &amp; =0.5+0.8-P(A) \\times P(B) \\\\<br/> &amp; =0.5+0.8-0.5 \\times 0.8 \\\\<br/> &amp; =1.3-0.4 \\\\<br/> &amp; =0.9<br/> \\end{aligned}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/476488/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #476488</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The probability that a student passes only in Mathematics is $\\frac{1}{3}$. The probability that the student passes only in English is $\\frac{4}{9}$. The probability that the student passes in both of these subjects is $\\frac{1}{6}$. The probability that the student will pass in at least one of these two subjects is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{17}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{14}{18}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{18}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"476487\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=678317303535547698\"/></p><p>$\\mathrm{P}(\\mathrm{A} \\cup \\mathrm{B} \\cup \\mathrm{C}) \\rightarrow$ Probability that the student passes is atleast one subject.</p><p>$$<br/>P(A \\cup B \\cup C)=\\frac{1}{3}+\\frac{1}{6}+\\frac{4}{9}=\\frac{6+3+8}{18}=\\left(\\frac{17}{18}\\right)<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/476486/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #476486</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ and $B$ are two events such that $P(A)=0.7, P(B)=0.4$ and $P(A \\cap \\bar{B})=0.5$, where $B$ denotes the complement of $B$, then $P(B \\mid(A \\cup \\bar{B}))$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{6}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"474736\"></a><div itemprop=\"text\">$\\begin{aligned} &amp; P(A)=\\frac{7}{10}, P(B)=\\frac{4}{10} \\\\ &amp; P(A \\cup \\bar{B})=\\frac{5}{10} \\\\ &amp; P\\left(\\frac{B}{A \\cup \\bar{B}}\\right)=\\frac{P(B \\cap(A \\cup \\bar{B}))}{P(A \\cup \\bar{B})} \\\\ &amp; =\\frac{P((B \\cap \\bar{B}) \\cup(B \\cap A))}{P(A \\cup \\bar{B})}=\\frac{P(A \\cap B)}{P(A \\cup \\bar{B})} \\\\ &amp; =\\frac{P(A)-P(A \\cap \\bar{B})}{P(A)+P(\\bar{B})-P(A \\cap \\bar{B})}=\\frac{\\frac{7}{10}-\\frac{5}{10}}{\\frac{7}{10}+\\left(1-\\frac{4}{10}\\right)-\\frac{5}{10}} \\\\ &amp; =\\frac{2}{8}=\\frac{1}{4}\\end{aligned}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/474735/go-classes-dpp-engineering-mathematics-probability-jee-mains\" target=\"_blank\">GATE Overflow #474735</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If two unbiased coins are tossed, then what is the probability of having at least one head?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.25$<br/></span>",
                "<span style=\"display: inline;\">$0.5$<br/></span>",
                "<span style=\"display: inline;\">$0.675$<br/></span>",
                "<span style=\"display: inline;\">$0.75$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"474746\"></a><div itemprop=\"text\">1 = P(Exactly 0 head) + P(Exactly 1 head) + P(Exactly 2 head)<br/> <br/> 1 - P(Exactly 0 head) = P(Exactly 1 head) + P(Exactly 2 head) = Atleast 1 head<br/> <br/> 1 - 1/4 = 3/4 = 0.75 <br/> <br/> So option D is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/474730/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #474730</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given that A and B are not null sets, which of the following statements regarding probability is/are CORRECT?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(A \\cap B)=P(A) P(B)$, if $A$ and $B$ are mutually exclusive.<br/></span>",
                "<span style=\"display: inline;\">Conditional probability, $P(A \\mid B)=1$ if $B \\subseteq A$.<br/></span>",
                "<span style=\"display: inline;\">$P(A \\cup B)=P(A)+P(B)$, if $A$ and $B$ are mutually exclusive.<br/></span>",
                "<span style=\"display: inline;\">$P(A \\cap B)=0$, if $A$ and $B$ are independent.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473934\"></a><div itemprop=\"text\"><ol><li>If two sets A,B are mutually exclusive then it means P(AB) = 0 , so option A is false.</li><li>If already B is subset of A and B has happened now eveything that will be happing will be automatically in A, so B is true</li><li>True since P(AB) = 0</li><li>For sets to be independent P(A∩B)=P(A)P(B)</li></ol><p><strong>B and C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473915/go-classes-dpp-probability-types-of-events-gate-ce\" target=\"_blank\">GATE Overflow #473915</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A box contains 4 white and 6 black balls. Two balls are drawn one after another without replacement. What is the probability that the first ball is white given that the second ball is black?</p><p>Options:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{4}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{9}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{6}{9}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"474298\"></a><div itemprop=\"text\">Intutively we can answer this question<br/> <br/> If the second ball is fixed ,Out of 10 one black ball we have already kept for second ball, now out of 9 balls 4 white balls are there so probability that the first ball is white is 4/9.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/473502/go-classes-dpp-probability-bayes-theorem-cmu\" target=\"_blank\">GATE Overflow #473502</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 55 - Engineering Mathematics (Axioms & Conditional Probability - Part 11)",
    "testLabel": "DPP 55",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 11",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 11)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You have a fair five-sided die. The sides of the die are numbered from 1 to 5. Each die roll is independent of all others, and all faces are equally likely to come out on top when the die is rolled. Suppose you roll the die twice.</p><p>Let event $A$ be \"the total of two rolls is 10\", event $B$ be \"at least one roll resulted in 5\", and event $C$ be \"at least one roll resulted in $1^{\\prime \\prime}$.</p><p>Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Events $A$ and $B$ are independent.</span>",
                "<span style=\"display: inline;\">Events $A$ and $C$ are independent.</span>",
                "<span style=\"display: inline;\">Events $A$ and $B$ are not independent.</span>",
                "<span style=\"display: inline;\">Events $A$ and $C$ are not independent.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473713\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7488473759968680434\"/></p><p>Overall, there are 25 different outcomes in the sample space. For a total of 10 , we should get a 5 on both rolls. Therefore $A \\subset B$, and</p><p>$$<br/>\\mathbf{P}(B \\mid A)=\\frac{\\mathbf{P}(A \\cap B)}{\\mathbf{P}(A)}=\\frac{\\mathbf{P}(A)}{\\mathbf{P}(A)}=1<br/>$$<br/> </p><p>We observe that to get at least one 5 showing, we can have 5 on the first roll, 5 on the second roll, or 5 on both rolls, which corresponds to 9 distinct outcomes in the sample space. Therefore</p><p>$$<br/>\\mathbf{P}(B)=\\frac{9}{25} \\neq \\mathbf{P}(B \\mid A)<br/>$$</p><p>ii. No Given event $A$, we know that both roll outcomes must be 5. Therefore, we could not have event $C$ occur, which would require at least one 1 showing. Formally, there are 9 outcomes in $C$, and</p><p>$$<br/>\\mathbf{P}(C)=\\frac{9}{25}<br/>$$</p><p><br/>But</p><p>$$<br/>\\mathbf{P}(C \\mid A)=0 \\neq \\mathbf{P}(C)<br/>$$<br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473498/go-classes-dpp-probability-independent-events-mit\" target=\"_blank\">GATE Overflow #473498</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The probability of Victor missing the morning forecast is equal to 0.2 on any day in the year. If he misses the forecast, Victor will flip a fair coin to decide whether to carry an umbrella. On any day of a given season he sees the forecast, if it says \"rain\" he will always carry an umbrella, and if it says \"no rain,\" he will not carry an umbrella. Are the events \"Victor is carrying an umbrella,\" and \"The forecast is no rain\" independent? </p><p dir=\"ltr\"><b id=\"docs-internal-guid-f14cad16-7fff-122f-0640-e7d7306de615\">Give answer as 1 if independent else give 0 as answer..</b></p><p dir=\"ltr\"> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"473709\"></a><div itemprop=\"text\"><p>Let $C$ be the event that Victor is carrying an umbrella. Let $D$ be the event that the forecast is no rain. The tree diagram in this case is:</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3763780287485824074\"/></p><p>$$<br/>\\begin{aligned}<br/>\\mathbf{P}(D) &amp; =1-p \\\\<br/>\\mathbf{P}(C) &amp; =(0.8) p+(0.2)(0.5)=0.8 p+0.1 \\\\<br/>\\mathbf{P}(C \\mid D) &amp; =(0.8)(0)+(0.2)(0.5)=0.1<br/>\\end{aligned}<br/>$$</p><p><br/>Therefore, $\\mathbf{P}(C)=\\mathbf{P}(C \\mid D)$ if and only if $p=0$. However, $p$ can only be 0.7 or 0.2 , which implies the events $C$ and $D$ can never be independent.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473496/go-classes-dpp-probability-independent-events-mit\" target=\"_blank\">GATE Overflow #473496</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Most mornings, Victor checks the weather report before deciding whether to carry an umbrella.<br/>If the forecast is \"rain,\" the probability of actually having rain that day is 80%. On the other hand, if the forecast is \"no rain,\" the probability of it actually raining is equal to 10%. During fall and winter the forecast is \"rain\" 70% of the time and during summer and spring it is 20%.</p><p>One day, Victor missed the forecast and it rained. What is the probability that the forecast was \"rain\" if it was during the winter?</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">0.28</span>",
                "<span style=\"display: inline;\">0.61</span>",
                "<span style=\"display: inline;\">0.85</span>",
                "<span style=\"display: inline;\">0.95</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"476128\"></a><div itemprop=\"text\"><p>OPTION D <br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1173285291764656299\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473494/go-classes-dpp-probability-conditional-probability-mit\" target=\"_blank\">GATE Overflow #473494</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Bob has a peculiar pair of four-sided dice. When he rolls the dice, the probability of any particular outcome is proportional to the sum of the results of each die. All outcomes that result in a particular sum are equally likely.<br/> <br/> What is the probability of the sum being even?</div></span>",
            "image": "",
            "options": [],
            "answer": "473492",
            "solution": "<div class=\"solution-content\"><a name=\"473711\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-ad6e7be2-7fff-3269-47a8-3377c6f65cc3\"><img alt=\"\" height=\"415\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxm_Y_j6WsKZu9sf44loExUH8zQ5w_SZ63gKap4brIQmJ2Vg8Yk3dIVBLcObOohoLnjwI_0EXZWc7QJsKgb7cDmMxpZVRU0xa9KR5bMDcF-G2YY8T6KORWrnmmq6Xrf1c8HPhLLw?key=mUs8UQ-QnVGD36er4CdeqQ\" width=\"513\"/></b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473492/go-classes-dpp-probability-dice-problems-mit\" target=\"_blank\">GATE Overflow #473492</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 56 - Engineering Mathematics (Random Variables & Probability Distributions - Part 1)",
    "testLabel": "DPP 56",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"265\" data-start=\"0\">Let $Y$ be a continuous random variable with density,</p><p data-end=\"265\" data-start=\"0\">$$<br/>f_Y(y)= \\begin{cases}2y, &amp; \\text { if } 0&lt;y&lt;1 \\\\\\\\ 0, &amp; \\text { otherwise }\\end{cases}<br/>$$</p><p data-end=\"265\" data-start=\"0\">Given $Y=y$, the conditional density of $X$ is </p><p data-end=\"265\" data-start=\"0\">$$<br/>f_{X \\mid Y}(x \\mid y)= \\begin{cases}\\frac{2x}{y^2}, &amp; \\text { if } 0&lt;x&lt;y \\\\\\\\ 0, &amp; \\text { otherwise }\\end{cases}<br/>$$</p><p data-end=\"265\" data-start=\"0\">Find $P(X+Y&lt;1)$, rounded to two decimal places.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"530795\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability $P(X + Y &lt; 1)$, we first need to determine the joint probability density function (PDF) of $X$ and $Y$.</p><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Step $\\mathbf{1}:$ Find the joint density function $f_{X,Y}(x,y)$</b></p><p data-path-to-node=\"1\">The joint density can be found using the conditional density formula:</p><p>$$f_{X,Y}(x,y) = f_{X|Y}(x|y) \\cdot f_Y(y)$$</p><p data-path-to-node=\"3\">Given:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\">$f_Y(y) = 2y$ for $0 &lt; y &lt; 1$</p></li><li><p data-path-to-node=\"4,1,0\">$f_{X|Y}(x|y) = \\frac{2x}{y^2}$ for $0 &lt; x &lt; y$</p></li></ul><p data-path-to-node=\"5\">Substitute these into the formula:</p><p>$$f_{X,Y}(x,y) = \\left(\\frac{2x}{y^2}\\right) \\cdot (2y) = \\frac{4x}{y}$$</p><p data-path-to-node=\"7\">The region of valid probabilities (support) is defined by $0 &lt; x &lt; y &lt; 1$.</p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{2}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"8\"> Determine the region of integration</b></p><p data-path-to-node=\"8\">We want to find $P(X + Y &lt; 1)$. This means we need to integrate the joint PDF over the region where $0 &lt; x &lt; y &lt; 1$ AND $x + y &lt; 1$.</p><p data-path-to-node=\"8\">From $x + y &lt; 1$, we get $x &lt; 1 - y$.</p><p data-path-to-node=\"8\">Combining the bounds for $x$, we have $0 &lt; x &lt; \\min(y, 1 - y)$.</p><p data-path-to-node=\"9\">This splits the integration region into two parts based on the value of $y$:</p><ol data-path-to-node=\"10\" start=\"1\"><li><p data-path-to-node=\"10,0,0\">When $y &lt; 1 - y$ (which means $2y &lt; 1$, or $y &lt; 0.5$): The bounds for $x$ are $0 &lt; x &lt; y$.</p></li><li><p data-path-to-node=\"10,1,0\">When $y \\ge 1 - y$ (which means $2y \\ge 1$, or $y \\ge 0.5$): The bounds for $x$ are $0 &lt; x &lt; 1 - y$.</p></li></ol><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{3}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"11\"> Set up and solve the integrals</b></p><p data-path-to-node=\"11\">The total probability is the sum of the integrals over these two regions:</p><p>$$P(X + Y &lt; 1) = \\int_{0}^{0.5} \\int_{0}^{y} \\frac{4x}{y} \\, dx \\, dy + \\int_{0.5}^{1} \\int_{0}^{1-y} \\frac{4x}{y} \\, dx \\, dy$$</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Solve the first integral:</b></p><p data-path-to-node=\"13\">Inner integral with respect to $x$:</p><p>$$\\int_{0}^{y} \\frac{4x}{y} \\, dx = \\left[ \\frac{2x^2}{y} \\right]_{x=0}^{x=y} = \\frac{2y^2}{y} = 2y$$</p><p data-path-to-node=\"15\">Outer integral with respect to $y$:</p><p>$$\\int_{0}^{0.5} 2y \\, dy = \\left[ y^2 \\right]_{0}^{0.5} = (0.5)^2 = 0.25 = \\frac{1}{4}$$</p><p data-path-to-node=\"17\"><b data-index-in-node=\"0\" data-path-to-node=\"17\">Solve the second integral:</b></p><p data-path-to-node=\"17\">Inner integral with respect to $x$:</p><p>$$\\int_{0}^{1-y} \\frac{4x}{y} \\, dx = \\left[ \\frac{2x^2}{y} \\right]_{x=0}^{x=1-y} = \\frac{2(1-y)^2}{y} = \\frac{2(1 - 2y + y^2)}{y} = \\frac{2}{y} - 4 + 2y$$</p><p data-path-to-node=\"19\">Outer integral with respect to $y$:</p><p>$$\\int_{0.5}^{1} \\left( \\frac{2}{y} - 4 + 2y \\right) \\, dy = \\left[ 2 \\ln|y| - 4y + y^2 \\right]_{0.5}^{1}$$</p><p data-path-to-node=\"21\">Evaluate at the bounds:</p><ul data-path-to-node=\"22\"><li><p data-path-to-node=\"22,0,0\">At $y = 1: ~2 \\ln(1) - 4(1) + (1)^2 = 0 - 4 + 1 = -3$</p></li><li><p data-path-to-node=\"22,1,0\">At $y = 0.5: ~2 \\ln(0.5) - 4(0.5) + (0.5)^2 = 2 \\ln\\left(\\frac{1}{2}\\right) - 2 + 0.25 = -2 \\ln(2) - 1.75$</p></li></ul><p data-path-to-node=\"23\">Subtract the lower bound result from the upper bound result:</p><p>$$-3 - (-2 \\ln(2) - 1.75) = -3 + 2 \\ln(2) + 1.75 = 2 \\ln(2) - 1.25 = 2 \\ln(2) - \\frac{5}{4}$$</p><p data-path-to-node=\"25\"><b data-index-in-node=\"0\" data-path-to-node=\"25\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{4}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"25\"> Add the results and calculate the final value</b></p><p>$$P(X + Y &lt; 1) = \\frac{1}{4} + \\left( 2 \\ln(2) - \\frac{5}{4} \\right) = 2 \\ln(2) - \\frac{4}{4} = 2 \\ln(2) - 1$$</p><ul data-path-to-node=\"28\"><li><p data-path-to-node=\"28,0,0\">$\\ln(2) \\approx 0.693147$</p></li></ul><p data-path-to-node=\"28,1,0\">$$P(X + Y &lt; 1) \\approx 2(0.693147) - 1 = 1.386294 - 1 = 0.386294$$</p><p data-path-to-node=\"28,1,0\">$$\\boxed{\\therefore P(X + Y &lt; 1) \\approx 0.39}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530792/go-classes-dpp-gate-cs-da-probability-%26-statistics-conditional-density-functions\" target=\"_blank\">GATE Overflow #530792</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"285\" data-start=\"162\">Let $X$ and $Y$ be independent standard normal random variables. Define $A=X+Y$ and $B=X-Y$. Find $P(|A|&lt;B)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/4$<br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$3/4$<br/></span>",
                "<span style=\"display: inline;\">$1/3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530791\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability $P(|A| &lt; B)$, we can substitute the definitions of $A$ and $B$ directly into the inequality and simplify.</p><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Step $\\mathbf{1}:$ Set up the inequality</b></p><p data-path-to-node=\"1\">We are given $A = X + Y$ and $B = X - Y$. We want to find the probability of the event:</p><p>$$|X + Y| &lt; X - Y$$</p><p data-path-to-node=\"3\"><b data-index-in-node=\"0\" data-path-to-node=\"3\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{2}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"3\"> Expand the absolute value inequality</b></p><p data-path-to-node=\"3\">The inequality $|u| &lt; v$ is equivalent to the compound inequality $-v &lt; u &lt; v$. Applying this to our expression gives:</p><p>$$-(X - Y) &lt; X + Y &lt; X - Y$$</p><p data-path-to-node=\"5\">This compound inequality represents two conditions that must be true simultaneously:</p><ol data-path-to-node=\"6\" start=\"1\"><li><p data-path-to-node=\"6,0,0\">$-(X - Y) &lt; X + Y$</p></li><li><p data-path-to-node=\"6,1,0\">$X + Y &lt; X - Y$</p></li></ol><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{3}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"7\"> Simplify both conditions</b></p><p data-path-to-node=\"8\">Let's simplify the first condition:</p><p>$$-X + Y &lt; X + Y$$</p><p data-path-to-node=\"10\">$$\\Rightarrow -X &lt; X$$</p><p data-path-to-node=\"12\">$$\\Rightarrow 0 &lt; 2X$$</p><p>$$\\Rightarrow X &gt; 0$$</p><p data-path-to-node=\"15\">Now, let's simplify the second condition:</p><p>$$X + Y &lt; X - Y$$</p><p data-path-to-node=\"17\">$$\\Rightarrow Y &lt; -Y$$</p><p data-path-to-node=\"19\">$$\\Rightarrow 2Y &lt; 0$$</p><p>$$\\Rightarrow Y &lt; 0$$</p><p data-path-to-node=\"22\"><b data-index-in-node=\"0\" data-path-to-node=\"22\">Step </b><b data-index-in-node=\"0\" data-path-to-node=\"1\">$\\mathbf{4}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"22\"> Calculate the probability</b></p><p data-path-to-node=\"22\">We have found that the event $|A| &lt; B$ is mathematically equivalent to the event $(X &gt; 0 \\text{ and } Y &lt; 0)$.</p><p data-path-to-node=\"23\">Since $X$ and $Y$ are <b data-index-in-node=\"18\" data-path-to-node=\"23\">independent</b> standard normal random variables, the probability of both events occurring is the product of their individual probabilities:</p><p>$P(|A| &lt; B) = P(X &gt; 0 \\text{ and } Y &lt; 0)$ $= P(X &gt; 0) \\times P(Y &lt; 0)$</p><p data-path-to-node=\"25\">A standard normal distribution has a mean of $0$ and is perfectly symmetric, meaning exactly half of its values fall above $0$ and half fall below $0:$</p><ul data-path-to-node=\"26\"><li><p data-path-to-node=\"26,0,0\">$P(X &gt; 0) = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"26,1,0\">$P(Y &lt; 0) = \\frac{1}{2}$</p></li></ul><p data-path-to-node=\"27\">Multiplying these together yields the final probability:</p><p>$$P(|A| &lt; B) = \\frac{1}{2} \\times \\frac{1}{2} = \\boxed{\\frac{1}{4}}$$</p><p data-path-to-node=\"29\">Therefore, the correct option is <b data-index-in-node=\"33\" data-path-to-node=\"29\">A.</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530789/go-classes-dpp-gate-cs-da-probability-%26-statistics-normal-random-variables\" target=\"_blank\">GATE Overflow #530789</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"257\" data-start=\"0\">Let $X$ be an exponentially distributed random variable with mean $1/\\ln 3$. Define $Y=\\lfloor X \\rfloor$, where $\\lfloor X \\rfloor$ is the greatest integer less than or equal to $X$. Given that $Y$ is odd, find $P(Y=3 \\mid Y \\text{ is odd})$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8/81$<br/></span>",
                "<span style=\"display: inline;\">$2/81$<br/></span>",
                "<span style=\"display: inline;\">$1/9$<br/></span>",
                "<span style=\"display: inline;\">$1/27$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"537830\"></a><div itemprop=\"text\"><p>one of the best questions of probabilty to solve , invest some time in it.<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=319864233768023368\"/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2003132868595094149\"/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4833698229401245159\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530785/go-classes-dpp-gate-cs-da-probability-%26-statistics-exponential-distribution\" target=\"_blank\">GATE Overflow #530785</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"217\" data-start=\"0\">A biased coin is flipped $6$ times, and the probability of getting a head on a single flip is $1/3$. Given that the total number of heads is even, what is the probability that exactly $4$ heads occurred?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12/73$<br/></span>",
                "<span style=\"display: inline;\">$20/243$<br/></span>",
                "<span style=\"display: inline;\">$15/64$<br/></span>",
                "<span style=\"display: inline;\">$4/73$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530732\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">Let $X$ be the number of heads. Since the coin is flipped $6$ times with a probability of $1/3$ for a head, $X$ follows a binomial distribution with $n = 6$ and $p = 1/3$. The probability of getting a tail is $q = 1 - 1/3 = 2/3$.</p><p data-path-to-node=\"2\">The formula for the probability of getting exactly $k$ heads is:</p><p>$$P(X = k) = \\binom{n}{k} p^k q^{n-k}$$</p><p data-path-to-node=\"4\">We are looking for the conditional probability $P(X = 4 \\mid X \\text{ is even})$.</p><p data-path-to-node=\"4\">By definition, $P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}$.</p><p data-path-to-node=\"4\">Since getting exactly 4 heads <i data-index-in-node=\"173\" data-path-to-node=\"4\">is</i> an even number of heads, this simplifies to:</p><p>$$P(X = 4 \\mid X \\text{ is even}) = \\frac{P(X = 4)}{P(X \\text{ is even})}$$</p><p data-path-to-node=\"6\"><b data-index-in-node=\"0\" data-path-to-node=\"6\">Step 1: Calculate the probability of getting an even number of heads, $P(X \\text{ is even})$</b></p><p data-path-to-node=\"6\">An even number of heads means getting $0, 2, 4,$ or $6$ heads. Let's calculate the probability for each:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">$\\mathbf{0}$ heads:</b> $P(X = 0) = \\binom{6}{0} \\left(\\frac{1}{3}\\right)^0 \\left(\\frac{2}{3}\\right)^6 = 1 \\cdot 1 \\cdot \\frac{64}{729} = \\frac{64}{729}$</p></li><li><p data-path-to-node=\"7,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">$\\mathbf{2}$</b><b data-index-in-node=\"0\" data-path-to-node=\"7,1,0\"> heads:</b> $P(X = 2) = \\binom{6}{2} \\left(\\frac{1}{3}\\right)^2 \\left(\\frac{2}{3}\\right)^4 = 15 \\cdot \\frac{1}{9} \\cdot \\frac{16}{81} = \\frac{240}{729}$</p></li><li><p data-path-to-node=\"7,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">$\\mathbf{4}$</b><b data-index-in-node=\"0\" data-path-to-node=\"7,2,0\"> heads:</b> $P(X = 4) = \\binom{6}{4} \\left(\\frac{1}{3}\\right)^4 \\left(\\frac{2}{3}\\right)^2 = 15 \\cdot \\frac{1}{81} \\cdot \\frac{4}{9} = \\frac{60}{729}$</p></li><li><p data-path-to-node=\"7,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">$\\mathbf{6}$</b><b data-index-in-node=\"0\" data-path-to-node=\"7,3,0\"> heads:</b> $P(X = 6) = \\binom{6}{6} \\left(\\frac{1}{3}\\right)^6 \\left(\\frac{2}{3}\\right)^0 = 1 \\cdot \\frac{1}{729} \\cdot 1 = \\frac{1}{729}$</p></li></ul><p data-path-to-node=\"8\">Now, sum these probabilities to find $P(X \\text{ is even})$:</p><p>$$P(X \\text{ is even}) = \\frac{64}{729} + \\frac{240}{729} + \\frac{60}{729} + \\frac{1}{729} = \\frac{365}{729}$$</p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">Step 2: Use the conditional probability formula</b></p><p data-path-to-node=\"10\">We already calculated $P(X = 4) = \\frac{60}{729}$.</p><p data-path-to-node=\"10\">Now, divide this by the total probability of an even number of heads:</p><p>$$P(X = 4 \\mid X \\text{ is even}) = \\frac{\\frac{60}{729}}{\\frac{365}{729}} = \\frac{60}{365}=\\boxed{\\frac{12}{73}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530731/go-classes-dpp-gate-cs-da-probability-%26-statistics-conditional-binomial-probability\" target=\"_blank\">GATE Overflow #530731</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"165\" data-start=\"0\">Suppose $X,Y,Z,W$ are independent random variables taking values $0$ or $1$ with equal probability $1/2$. </p><p data-end=\"165\" data-start=\"0\">Find $P(X+Y+Z+W=2 \\mid X=Y \\text{ or } Z=W)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$1/3$<br/></span>",
                "<span style=\"display: inline;\">$1/6$<br/></span>",
                "<span style=\"display: inline;\">$1/4$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533171\"></a><div itemprop=\"text\"><p>Think it of like a truth table containing X, Y, W, Z as variables. Total possible cases are ${2^4} = \\boxed{16}$</p><p><br/>$P(X + Y + Z + W = 2 \\mid X = Y \\text{or } Z = W) = \\frac{P(X + Y + Z + W = 2, X = Y \\text{or } Z = W)}{P(X = Y \\text{or } Z = W)}$</p><p><br/>To find out the value of numerator, It has only two possible cases i.e. (1,1,0,0) and (0,0,1,1). No other case is possible. So, $P(X + Y + Z + W = 2, X = Y \\text{or } Z = W) = \\frac{2}{16}$</p><p><br/>To find out the value of denominator, we can use set theory. $\\\\n(X = Y \\text{or } Z = W) = n(X = Y) + n(Z = W) - n((X = Y) \\cap (Z=W))$</p><p><br/>$X = Y$ has total 8 cases i.e. (1,1,_,_) and (0,0,_,_) (4 cases for each sub case). Similarly $n(Z = W)$ has 8 cases. <br/>So, $n(X = Y) = n(Z = W) = 8$ and $n((X = Y) \\cap (Z=W)) = 4$ i.e. (1,1,0,0), (1,1,1,1), (0,0,1,1), (0,0,0,0). </p><p>$n(X = Y \\text{or } Z=W) = 8 + 8 - 4 = 12$</p><p>$P(X = Y \\text{or } Z = W) = \\frac{12}{16}$</p><p> </p><p>Hence, $P(X + Y + Z + W = 2 \\mid X = Y \\text{or } Z = W) = \\frac{\\frac{2}{16}}{\\frac{12}{16}} = \\frac{2}{12} = \\frac{1}{6} $</p><p> </p><p><strong>Option C</strong> is correct answer.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530722/go-classes-dpp-gate-cs-da-probability-%26-statistics-conditional-probability\" target=\"_blank\">GATE Overflow #530722</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"480\" data-start=\"66\">A website assigns each new visitor one of $6$ equally likely security icons, independently of all previous visitors. The administrator watches the sequence of assigned icons and stops as soon as an icon is assigned that has already been assigned to an earlier visitor. Let $T$ be the number of visitors observed until this first repeated icon occurs. Which of the following is the correct PMF of $T$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(T=k)=\\frac{6\\cdot5\\cdot4\\cdots(8-k)}{6^{k-1}}\\cdot\\frac{k-1}{6}$ for $2\\le k\\le 7$<br/></span>",
                "<span style=\"display: inline;\">$P(T=k)=\\frac{6\\cdot5\\cdot4\\cdots(8-k)}{6^{k-1}}\\cdot\\frac{1}{6}$ for $2\\le k\\le 7$<br/></span>",
                "<span style=\"display: inline;\">$P(T=k)=\\left(\\frac{5}{6}\\right)^{k-2}\\frac{1}{6}$ for $k\\ge 2$<br/></span>",
                "<span style=\"display: inline;\">$P(T=k)=\\left(\\frac{1}{6}\\right)^{k-1}$ for $2\\le k\\le 7$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530610\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability mass function (PMF) of $T$, let's break down the event $T = k$.</p><p data-path-to-node=\"1\">For the first repeated icon to occur exactly on the $k$-th visitor, two conditions must be met:</p><ol data-path-to-node=\"2\" start=\"1\"><li><p data-path-to-node=\"2,0,0\">The first $k-1$ visitors must all receive <b data-index-in-node=\"40\" data-path-to-node=\"2,0,0\">distinct</b> security icons.</p></li><li><p data-path-to-node=\"2,1,0\">The $k$-th visitor must receive an icon that has <b data-index-in-node=\"47\" data-path-to-node=\"2,1,0\">already been assigned</b> to one of the previous $k-1$ visitors.</p></li></ol><div><p style=\"text-align:center\"><img alt=\"\" height=\"516\" src=\"https://cdn.mathpix.com/snip/images/HGravx0RRflcx-f4vS2eaiulZz0VeTO4EIvlToRQ5zI.original.fullsize.png\" style=\"max-width: 100%;\" width=\"722\"/></p></div><p data-path-to-node=\"3\">Let's calculate the probability for each of these steps:</p><p data-path-to-node=\"4\"><b data-index-in-node=\"0\" data-path-to-node=\"4\">Step 1: Probability the first $k-1$ visitors have distinct icons</b></p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">The $1$st visitor can get any of the $6$ icons (probability $\\frac{6}{6}$).</p></li><li><p data-path-to-node=\"5,1,0\">The $2$nd visitor must get one of the remaining $5$ icons (probability $\\frac{5}{6}$).</p></li><li><p data-path-to-node=\"5,2,0\">The $3$rd visitor must get one of the remaining $4$ icons (probability $\\frac{4}{6}$).</p></li><li><p data-path-to-node=\"5,3,0\">...</p></li><li><p data-path-to-node=\"5,4,0\">The $(k-1)$-th visitor must get one of the remaining $6 - (k-1) + 1 = 8 - k$ icons.</p></li></ul><p data-path-to-node=\"6\">Multiplying these together, the probability that the first $k-1$ visitors get distinct icons is:</p><p>$$ \\frac{6 \\cdot 5 \\cdot 4 \\cdots (8-k)}{6^{k-1}} $$</p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Step 2: Probability the $k$-th visitor gets a repeated icon</b></p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">If the first $k-1$ visitors all have distinct icons, there are $k-1$ specific icons that have already been \"used\".</p></li><li><p data-path-to-node=\"9,1,0\">For the $k$-th visitor to trigger a repeat, they must be assigned one of those exactly $k-1$ used icons out of the $6$ total possible icons.</p></li><li><p data-path-to-node=\"9,2,0\">This probability is:</p><p>$$ \\frac{k-1}{6} $$</p></li></ul><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">Combining the probabilities</b></p><p data-path-to-node=\"10\">The total probability $P(T = k)$ is the product of the probabilities from Step 1 and Step 2:</p><p>$$ P(T = k) = \\frac{6 \\cdot 5 \\cdot 4 \\cdots (8-k)}{6^{k-1}} \\cdot \\frac{k-1}{6} $$</p><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">Determining the range of $k$</b></p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">The minimum number of visitors needed to have a repeat is $2$ ($k \\ge 2$).</p></li><li><p data-path-to-node=\"13,1,0\">Since there are only $6$ different icons, by the Pigeonhole Principle, if $6$ visitors get $6$ distinct icons, the $7$th visitor <i data-index-in-node=\"121\" data-path-to-node=\"13,1,0\">must</i> get a repeat. Therefore, the maximum possible value for $k$ is $7$ ($k \\le 7$).<br/> </p></li></ul><p data-path-to-node=\"14\">This perfectly matches Option <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530608/go-classes-dpp-gate-cs-da-probability-%26-statistics-discrete-random-variable\" target=\"_blank\">GATE Overflow #530608</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"278\" data-start=\"0\">A random variable $X$ has probability mass function given by :<br/>$$p_X(x)=\\begin{cases} c, &amp; \\text{if } x=-1 \\\\\\\\ 2c, &amp; \\text{if } x=1 \\\\\\\\ \\frac{1}{6}, &amp; \\text{if } x=4 \\\\\\\\ 3c, &amp; \\text{if } x=6 \\\\\\\\ \\frac{1}{3}, &amp; \\text{if } x=8 \\\\\\\\ 0, &amp; \\text{otherwise} \\end{cases}$$</p><p data-end=\"278\" data-start=\"0\">Find the cumulative distribution function $F_X(x)$ of $X$. Then compute $E[X]+F_X(5)-4F_X(0)$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "5",
            "solution": "<div class=\"solution-content\"><a name=\"530606\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Finding the value of $c$ :</b></p><p data-path-to-node=\"2\">For any valid probability mass function (PMF), the sum of all probabilities must equal $1$.</p><p>$$ \\sum p_X(x) = 1 $$</p><p>$$ \\Rightarrow c + 2c + \\frac{1}{6} + 3c + \\frac{1}{3} = 1 $$</p><p>$$ \\Rightarrow c = \\frac{1}{12} $$</p><p data-path-to-node=\"11\">Now we can write the complete PMF:</p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\">$P(X = -1) = \\frac{1}{12}$</p></li><li><p data-path-to-node=\"12,1,0\">$P(X = 1) = 2(\\frac{1}{12}) = \\frac{2}{12}$</p></li><li><p data-path-to-node=\"12,2,0\">$P(X = 4) = \\frac{1}{6} = \\frac{2}{12}$</p></li><li><p data-path-to-node=\"12,3,0\">$P(X = 6) = 3(\\frac{1}{12}) = \\frac{3}{12}$</p></li><li><p data-path-to-node=\"12,4,0\">$P(X = 8) = \\frac{1}{3} = \\frac{4}{12}$</p></li></ul><div> </div><div><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Determining the Cumulative Distribution Function $F_X(x)$</b></p><p data-path-to-node=\"14\">The CDF is defined as $F_X(x) = P(X \\le x)$. We calculate it by maintaining a running total of the probabilities:</p><ul data-path-to-node=\"15\"><li><p data-path-to-node=\"15,0,0\">For $x &lt; -1$, $F_X(x) = 0$</p></li><li><p data-path-to-node=\"15,1,0\">For $-1 \\le x &lt; 1$, $F_X(x) = \\frac{1}{12}$</p></li><li><p data-path-to-node=\"15,2,0\">For $1 \\le x &lt; 4$, $F_X(x) = \\frac{1}{12} + \\frac{2}{12} = \\frac{3}{12} = \\frac{1}{4}$</p></li><li><p data-path-to-node=\"15,3,0\">For $4 \\le x &lt; 6$, $F_X(x) = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$</p></li><li><p data-path-to-node=\"15,4,0\">For $6 \\le x &lt; 8$, $F_X(x) = \\frac{5}{12} + \\frac{3}{12} = \\frac{8}{12} = \\frac{2}{3}$</p></li><li><p data-path-to-node=\"15,5,0\">For $x \\ge 8$, $F_X(x) = \\frac{8}{12} + \\frac{4}{12} = \\frac{12}{12} = 1$</p></li></ul><div> </div></div><div><p data-path-to-node=\"16\"><b data-index-in-node=\"0\" data-path-to-node=\"16\">Calculating the Expected Value $E[X]$</b></p><p data-path-to-node=\"17\">The expected value is the sum of each value multiplied by its probability:</p><p>$$ E[X] = \\sum [x \\cdot P(X = x)] $$</p><p>$$ E[X] = (-1)\\left(\\frac{1}{12}\\right) + (1)\\left(\\frac{2}{12}\\right) + (4)\\left(\\frac{2}{12}\\right) + (6)\\left(\\frac{3}{12}\\right) + (8)\\left(\\frac{4}{12}\\right) $$</p><p>$$ E[X] = \\frac{-1 + 2 + 8 + 18 + 32}{12} = \\frac{59}{12} $$</p><p> </p><p data-path-to-node=\"24\"><strong>Now, We need to find $E[X] + F_X(5) - 4F_X(0)$ : </strong></p><p data-path-to-node=\"25\">First, find the required CDF values based on the intervals we defined earlier while finding the CDF:</p><ul data-path-to-node=\"26\"><li><p data-path-to-node=\"26,0,0\">$F_X(5)$: Since $5$ falls in the interval $4 \\le x &lt; 6$, $F_X(5) = \\frac{5}{12}$.</p></li><li><p data-path-to-node=\"26,1,0\">$F_X(0)$: Since $0$ falls in the interval $-1 \\le x &lt; 1$, $F_X(0) = \\frac{1}{12}$.</p></li></ul><div> </div></div><div><p>$$ \\Rightarrow E[X] + F_X(5) - 4F_X(0) = \\frac{59}{12} + \\frac{5}{12} - 4\\left(\\frac{1}{12}\\right) = \\boxed{5} $$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530605/go-classes-dpp-gate-cs-da-probability-%26-statistics-probability-mass-function\" target=\"_blank\">GATE Overflow #530605</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"221\" data-start=\"0\">Suppose you keep tossing a fair coin until you get the first head. Let $Y$ be the number of tosses until the first head appears. Find the probability that $Y$ is odd, given that $Y$ is not a multiple of $3$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{17}{27}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{9}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"530598\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">Let the number of tosses be $Y$. Since we are tossing a fair coin until the first head appears, $Y$ follows a geometric distribution with probability $p = \\frac{1}{2}$.</p><p data-path-to-node=\"1\">The probability of getting the first head on the $k$-th toss is:</p><p>$$ P(Y = k) = \\left(\\frac{1}{2}\\right)^{k-1} \\left(\\frac{1}{2}\\right) = \\left(\\frac{1}{2}\\right)^k $$</p><p data-path-to-node=\"3\">We want to find $P(\\text{Odd} \\mid \\text{Not a multiple of 3})$, which is defined as:</p><p>$$ P(\\text{Odd} \\mid \\text{Not a multiple of 3}) = \\frac{P(\\text{Odd} \\text{ and } \\text{Not a multiple of 3})}{P(\\text{Not a multiple of 3})} $$</p><p style=\"text-align:center\"><img alt=\"\" height=\"504\" src=\"https://cdn.mathpix.com/snip/images/AuDlhYmC_c-qbSxY5qhINhE86Fj5ji0QtDKDUeV7ogI.original.fullsize.png\" width=\"718\"/></p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">Finding the probability that $Y$ is not a multiple of $\\mathbf{3}$ :</b></p><p data-path-to-node=\"6\">It is easier to calculate the complement: the probability that $Y$ <i data-index-in-node=\"65\" data-path-to-node=\"6\">is</i> a multiple of $3$ ($Y \\in \\{3, 6, 9, 12, \\dots\\}$).</p><p data-path-to-node=\"6\">This is an infinite geometric series:</p><p>$$ P(Y \\text{ is a multiple of 3}) = P(Y=3) + P(Y=6) + P(Y=9) + \\dots $$</p><p>$$ = \\left(\\frac{1}{2}\\right)^3 + \\left(\\frac{1}{2}\\right)^6 + \\left(\\frac{1}{2}\\right)^9 + \\dots $$</p><p data-path-to-node=\"9\">The first term is $a = \\frac{1}{8}$ and the common ratio is $r = \\frac{1}{8}$. The sum is:</p><p>$$ \\frac{a}{1 - r} = \\frac{\\frac{1}{8}}{1 - \\frac{1}{8}} = \\frac{\\frac{1}{8}}{\\frac{7}{8}} = \\frac{1}{7} $$</p><p data-path-to-node=\"11\">Therefore, the probability that $Y$ is <b data-index-in-node=\"37\" data-path-to-node=\"11\">not</b> a multiple of $3$ is:</p><p>$$ P(\\text{Not a multiple of 3}) = 1 - \\frac{1}{7} = \\frac{6}{7} $$</p><p> </p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Finding the probability that $Y$ is odd AND not a multiple of $\\mathbf{3}$</b></p><p data-path-to-node=\"14\">The set of odd numbers that are not multiples of $3$ is $\\{1, 5, 7, 11, 13, 17, \\dots\\}$.</p><p data-path-to-node=\"14\">These numbers can be split into two sequences:</p><ul data-path-to-node=\"15\"><li><p data-path-to-node=\"15,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"15,0,0\">Sequence 1:</b> $1, 7, 13, 19, \\dots$ (which can be written as $6k+1$ for $k=0, 1, 2, \\dots$)</p></li><li><p data-path-to-node=\"15,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"15,1,0\">Sequence 2:</b> $5, 11, 17, 23, \\dots$ (which can be written as $6k+5$ for $k=0, 1, 2, \\dots$)</p></li></ul><p data-path-to-node=\"16\">Let's find the sum of probabilities for each sequence.</p><p data-path-to-node=\"16\"><b data-index-in-node=\"55\" data-path-to-node=\"16\">For Sequence 1 ($1, 7, 13, \\dots$):</b></p><p>$$ P(Y \\in \\{1, 7, 13, \\dots\\}) = \\left(\\frac{1}{2}\\right)^1 + \\left(\\frac{1}{2}\\right)^7 + \\left(\\frac{1}{2}\\right)^{13} + \\dots $$</p><p data-path-to-node=\"18\">This is a geometric series with first term $a = \\frac{1}{2}$ and common ratio $r = \\left(\\frac{1}{2}\\right)^6 = \\frac{1}{64}$.</p><p>$$ \\text{Sum}_1 = \\frac{\\frac{1}{2}}{1 - \\frac{1}{64}} = \\frac{\\frac{1}{2}}{\\frac{63}{64}} = \\frac{1}{2} \\cdot \\frac{64}{63} = \\frac{32}{63} $$</p><p data-path-to-node=\"20\"><b data-index-in-node=\"0\" data-path-to-node=\"20\">For Sequence 2 ($5, 11, 17, \\dots$):</b></p><p>$$ P(Y \\in \\{5, 11, 17, \\dots\\}) = \\left(\\frac{1}{2}\\right)^5 + \\left(\\frac{1}{2}\\right)^{11} + \\left(\\frac{1}{2}\\right)^{17} + \\dots $$</p><p data-path-to-node=\"22\">This is a geometric series with first term $a = \\frac{1}{32}$ and common ratio $r = \\frac{1}{64}$.</p><p>$$ \\text{Sum}_2 = \\frac{\\frac{1}{32}}{1 - \\frac{1}{64}} = \\frac{\\frac{1}{32}}{\\frac{63}{64}} = \\frac{1}{32} \\cdot \\frac{64}{63} = \\frac{2}{63} $$</p><p data-path-to-node=\"24\">Adding these together gives the intersection probability:</p><p>$$ P(\\text{Odd} \\text{ and } \\text{Not a multiple of 3}) = \\frac{32}{63} + \\frac{2}{63} = \\frac{34}{63} $$</p><p> </p><p>Now, </p><p>$$ P(\\text{Odd} \\mid \\text{Not a multiple of 3}) = \\frac{P(\\text{Odd} \\text{ and } \\text{Not a multiple of 3})}{P(\\text{Not a multiple of 3})} = \\frac{\\frac{34}{63}}{\\frac{6}{7}} = \\boxed{\\frac{17}{27}} $$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530597/go-classes-dpp-gate-cs-da-probability-%26-statistics-conditional-probability\" target=\"_blank\">GATE Overflow #530597</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"256\" data-start=\"0\">Suppose that $X$ and $Y$ are independent random variables, such that :</p><p data-end=\"256\" data-start=\"0\">$P(X=x)=\\frac{1}{4}\\left(\\frac{3}{4}\\right)^{x-1}$ for integers $x\\ge 1$, and </p><p data-end=\"256\" data-start=\"0\">$P(Y=y)=\\frac{1}{2}\\left(\\frac{1}{2}\\right)^{y-1}$ for integers $y\\ge 1$. </p><p data-end=\"256\" data-start=\"0\"> </p><p data-end=\"256\" data-start=\"0\">Find $P(X&lt;Y \\text{ and } X \\text{ is odd})$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{4}{55}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{8}{55}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{16}{55}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530498\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability $P(X &lt; Y \\text{ and } X \\text{ is odd})$, we can evaluate the sum of the probabilities for all possible odd values of $X$.</p><p data-path-to-node=\"1\">Since $X$ and $Y$ are independent, the joint probability is the product of their individual probabilities.</p><p>Since $X$ must be odd, write $X=2k+1$ for $k=0,1,2,\\ldots$</p><p data-path-to-node=\"4\">The total probability is the sum over all $k$:</p><p>$P(X &lt; Y \\text{ and } X \\text{ is odd}) = \\sum_{k=1}^{\\infty} P(X = 2k - 1) \\cdot P(Y &gt; 2k - 1)$</p><p> </p><p data-path-to-node=\"7\">Now, first let's find the general expression for $P(Y &gt; x)$ where $x$ is a constant integer.</p><p data-path-to-node=\"7\">We are given the PMF for $Y$:</p><p>$$P(Y = y) = \\frac{1}{2} \\left(\\frac{1}{2}\\right)^{y-1}$$</p><p data-path-to-node=\"9\">The probability that $Y$ is strictly greater than $x$ is the sum of probabilities from $y = x+1$ to infinity:</p><p>$$P(Y &gt; x) = \\sum_{y=x+1}^{\\infty} \\frac{1}{2} \\left(\\frac{1}{2}\\right)^{y-1}$$</p><p data-path-to-node=\"11\">This is an infinite geometric series with the first term $a = \\frac{1}{2}\\left(\\frac{1}{2}\\right)^{(x+1)-1} = \\frac{1}{2}\\left(\\frac{1}{2}\\right)^x$ and common ratio $r = \\frac{1}{2}$.</p><p data-path-to-node=\"11\">The sum of an infinite geometric series is $\\frac{a}{1-r}$:</p><p>$$P(Y &gt; x) = \\frac{\\frac{1}{2} \\left(\\frac{1}{2}\\right)^x}{1 - \\frac{1}{2}} = \\frac{\\frac{1}{2} \\left(\\frac{1}{2}\\right)^x}{\\frac{1}{2}} = \\left(\\frac{1}{2}\\right)^x$$</p><p data-path-to-node=\"14\">Now, substitute the given PMF for $X$ and our new formula for $P(Y &gt; x)$ back into our original sum. Remember we are using $x = 2k - 1$.</p><p>$$P(X = 2k - 1) = \\frac{1}{4} \\left(\\frac{3}{4}\\right)^{(2k - 1) - 1} = \\frac{1}{4} \\left(\\frac{3}{4}\\right)^{2k - 2}$$</p><p>$$P(Y &gt; 2k - 1) = \\left(\\frac{1}{2}\\right)^{2k - 1}$$</p><p data-path-to-node=\"17\">Substitute these into the summation:</p><p>$$\\Rightarrow P(\\text{Target Event}) = \\sum_{k=1}^{\\infty} \\left[ \\frac{1}{4} \\left(\\frac{3}{4}\\right)^{2k - 2} \\right] \\cdot \\left[ \\left(\\frac{1}{2}\\right)^{2k - 1} \\right]$$</p><p>$$\\Rightarrow P(\\text{Target Event}) = \\sum_{k=1}^{\\infty} \\frac{1}{4} \\cdot \\left(\\frac{9}{16}\\right)^{k-1} \\cdot \\frac{1}{2} \\cdot \\left(\\frac{1}{4}\\right)^{k-1} $$</p><p>$$\\Rightarrow P(\\text{Target Event}) = \\sum_{k=1}^{\\infty} \\left(\\frac{1}{4} \\cdot \\frac{1}{2}\\right) \\cdot \\left(\\frac{9}{16} \\cdot \\frac{1}{4}\\right)^{k-1} $$</p><p>$$\\Rightarrow P(\\text{Target Event}) = \\sum_{k=1}^{\\infty} \\frac{1}{8} \\left(\\frac{9}{64}\\right)^{k-1} $$</p><p data-path-to-node=\"29\">This is an infinite geometric series where:</p><ul data-path-to-node=\"30\"><li><p data-path-to-node=\"30,0,0\">First term ($a$) = $\\frac{1}{8}$ (when $k=1$)</p></li><li><p data-path-to-node=\"30,1,0\">Common ratio ($r$) = $\\frac{9}{64}$</p></li></ul><p data-path-to-node=\"31\">Use the sum formula $S = \\frac{a}{1 - r}$:</p><p>$$ \\Rightarrow P(\\text{Target Event}) = \\frac{\\frac{1}{8}}{1 - \\frac{9}{64}} $$</p><p>$$ \\boxed{\\therefore P(\\text{Target Event}) = \\frac{8}{55}} $$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530496/go-classes-dpp-gate-cs-da-probability-%26-statistics-discrete-random-variables\" target=\"_blank\">GATE Overflow #530496</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"313\" data-start=\"0\">Let $X_1,X_2,\\ldots,X_n$ be independent discrete uniform random variables on ${1,2,\\ldots,n}$. That is, $P(X_i=j)=\\frac{1}{n}$ for each $i$ and each $j\\in{1,2,\\ldots,n}$. Let $Y$ be the second smallest value among $X_1,X_2,\\ldots,X_n$. Find $P(Y&gt;k)$ for an integer $k$ such that $1\\le k\\le n-1$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left(\\frac{n-k}{n}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\frac{n-k}{n}\\right)^n+n\\left(\\frac{k}{n}\\right)\\left(\\frac{n-k}{n}\\right)^{n-1}$<br/></span>",
                "<span style=\"display: inline;\">$1-\\left(\\frac{k}{n}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$1-\\left(\\frac{n-k}{n}\\right)^n$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"530495\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability that the second smallest value, $Y$, is strictly greater than $k$, we can analyze the conditions that must be met by the individual random variables $X_1, X_2, \\dots, X_n$.</p><p data-path-to-node=\"1\">For the second smallest value to be greater than $k$, <b data-index-in-node=\"52\" data-path-to-node=\"1\">at most one</b> of the $n$ random variables can be less than or equal to $k$. If two or more variables were $\\le k$, then the second smallest value would also be $\\le k$.</p><p data-path-to-node=\"2\">This gives us two mutually exclusive scenarios that satisfy $Y &gt; k$:</p><ol data-path-to-node=\"3\" start=\"1\"><li><p data-path-to-node=\"3,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,0,0\">Exactly </b><b data-index-in-node=\"0\" data-path-to-node=\"7\">$\\mathbf{0}$</b> of the variables are $\\le k$ (meaning all $n$ variables are $&gt; k$).</p></li><li><p data-path-to-node=\"3,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,1,0\">Exactly </b><b data-index-in-node=\"0\" data-path-to-node=\"7\">$\\mathbf{1}$</b> of the variables is $\\le k$ (meaning $n-1$ variables are $&gt; k$).</p></li></ol><p data-path-to-node=\"4\">Let's find the probability of a single variable $X_i$ being $\\le k$ or $&gt; k$:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">Since $X_i$ is uniformly distributed on $1, 2, \\dots, n$, there are $k$ outcomes where $X_i \\le k$. Thus, $P(X_i \\le k) = \\frac{k}{n}$.</p></li><li><p data-path-to-node=\"5,1,0\">The probability that $X_i &gt; k$ is $1 - P(X_i \\le k) = 1 - \\frac{k}{n} = \\frac{n-k}{n}$.</p></li></ul><p data-path-to-node=\"6\">Now, we calculate the probability of our two scenarios using the binomial distribution formula, treating an outcome of $\\le k$ as a \"success\":</p><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">Scenario $\\mathbf{1}:$ Exactly $\\mathbf{0}$ variables are $\\le k$</b></p><p data-path-to-node=\"7\">We want $0$ \"successes\" out of $n$ trials.</p><p>$$ P(0 \\text{ variables } \\le k) = \\binom{n}{0} \\left( \\frac{k}{n} \\right)^0 \\left( \\frac{n-k}{n} \\right)^n = 1 \\cdot 1 \\cdot \\left( \\frac{n-k}{n} \\right)^n = \\left( \\frac{n-k}{n} \\right)^n $$</p><p data-path-to-node=\"9\"><b data-index-in-node=\"0\" data-path-to-node=\"9\">Scenario </b><b data-index-in-node=\"0\" data-path-to-node=\"7\">$\\mathbf{2}:$</b><b data-index-in-node=\"0\" data-path-to-node=\"9\"> Exactly </b><b data-index-in-node=\"0\" data-path-to-node=\"7\">$\\mathbf{1}$</b><b data-index-in-node=\"0\" data-path-to-node=\"9\"> variable is $\\le k$</b></p><p data-path-to-node=\"9\">We want exactly $1$ \"success\" out of $n$ trials.</p><p>$$ P(1 \\text{ variable } \\le k) = \\binom{n}{1} \\left( \\frac{k}{n} \\right)^1 \\left( \\frac{n-k}{n} \\right)^{n-1} = n \\left( \\frac{k}{n} \\right) \\left( \\frac{n-k}{n} \\right)^{n-1} $$</p><p data-path-to-node=\"11\">Since these are mutually exclusive events, we add their probabilities to find the total probability that $Y &gt; k$:</p><p>$$ P(Y &gt; k) = P(0 \\text{ variables } \\le k) + P(1 \\text{ variable } \\le k) $$</p><p>$$\\boxed{ P(Y &gt; k) = \\left( \\frac{n-k}{n} \\right)^n + n \\left( \\frac{k}{n} \\right) \\left( \\frac{n-k}{n} \\right)^{n-1} }$$</p><p data-path-to-node=\"14\">Correct option is <b data-index-in-node=\"55\" data-path-to-node=\"14\">B</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530494/go-classes-dpp-gate-cs-da-probability-%26-statistics-discrete-uniform-distribution\" target=\"_blank\">GATE Overflow #530494</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 57 - Engineering Mathematics (Random Variables & Probability Distributions - Part 2)",
    "testLabel": "DPP 57",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"552\" data-start=\"396\">Let $X_1,X_2,X_3$ be independent continuous uniform random variables on $[0,1]$. Let $k\\in[0,1]$ be a constant. Find $P(\\max(X_1,X_2,X_3)&gt;k)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1-k$<br/></span>",
                "<span style=\"display: inline;\">$1-k^2$<br/></span>",
                "<span style=\"display: inline;\">$1-k^3$<br/></span>",
                "<span style=\"display: inline;\">$(1-k)^3$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"530490\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability $P(\\max(X_1, X_2, X_3) &gt; k)$, it is much easier to use the complement rule.</p><p data-path-to-node=\"1\">The complement of the maximum being greater than $k$ is the maximum being less than or equal to $k$. Therefore:</p><p>$$ P(\\max(X_1, X_2, X_3) &gt; k) = 1 - P(\\max(X_1, X_2, X_3) \\le k) $$</p><p data-path-to-node=\"3\">For the maximum of a set of numbers to be less than or equal to $k$, <b data-index-in-node=\"67\" data-path-to-node=\"3\">every single number</b> in that set must be less than or equal to $k$. This means:</p><p>$$ P(\\max(X_1, X_2, X_3) \\le k) = P(X_1 \\le k \\text{ and } X_2 \\le k \\text{ and } X_3 \\le k) $$</p><p data-path-to-node=\"5\">Since $X_1, X_2,$ and $X_3$ are independent random variables, the probability of their intersection is the product of their individual probabilities:</p><p>$$ P(X_1 \\le k \\text{ and } X_2 \\le k \\text{ and } X_3 \\le k) = P(X_1 \\le k) \\cdot P(X_2 \\le k) \\cdot P(X_3 \\le k) $$</p><p data-path-to-node=\"7\">We are given that each $X_i$ is a continuous uniform random variable on the interval $[0, 1]$. For a uniform distribution on $[0, 1]$, the probability that the variable is less than or equal to a value $k$ (where $k \\in [0, 1]$) is simply $k$.</p><p>$$ P(X_i \\le k) = k $$</p><p data-path-to-node=\"9\">Substituting this back into our equation gives:</p><p>$$ P(\\max(X_1, X_2, X_3) \\le k) = k \\cdot k \\cdot k = k^3 $$</p><p data-path-to-node=\"11\">Finally, we substitute this result back into our original complement equation:</p><p>$$ P(\\max(X_1, X_2, X_3) &gt; k) = 1 - k^3 $$</p><p data-path-to-node=\"13\">Therefore, the correct option is <b data-index-in-node=\"33\" data-path-to-node=\"13\">C</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530489/go-classes-dpp-gate-cs-da-probability-%26-statistics-continuous-uniform-distribution\" target=\"_blank\">GATE Overflow #530489</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"132\" data-start=\"0\">Let $X$ be a random variable with PDF :</p><p data-end=\"132\" data-start=\"0\">$$f(x)= \\begin{cases}C x^2(1-x)^3 &amp; 0 &lt;x&lt;1\\\\\\\\ 0 &amp; \\text{otherwise} \\end{cases}$$</p><p data-end=\"132\" data-start=\"0\">What is $C$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "60",
            "solution": "<div class=\"solution-content\"><a name=\"530486\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">For a Probability Density Function (PDF) $f(x)$ the integral over its entire domain is:</p><p>$$ \\int_{-\\infty}^{\\infty} f(x) \\, dx = 1 $$</p><p>In the given question,</p><p>$$\\int_0^1 Cx^2(1-x)^3 dx=1$$</p><p>$$ \\Rightarrow C \\int_{0}^{1} x^2 (1 - x)^3 \\, dx = 1 $$</p><p>$$ \\Rightarrow C \\int_{0}^{1} x^2 (1 - 3x + 3x^2 - x^3) \\, dx = 1$$</p><p>$$ \\Rightarrow C \\int_{0}^{1} (x^2 - 3x^3 + 3x^4 - x^5) \\, dx = 1$$</p><p>$$ \\Rightarrow C \\left[ \\frac{x^3}{3} - \\frac{3x^4}{4} + \\frac{3x^5}{5} - \\frac{x^6}{6} \\right]_{0}^{1} = 1$$</p><p>$$ \\Rightarrow C \\left[\\left( \\frac{1^3}{3} - \\frac{3(1)^4}{4} + \\frac{3(1)^5}{5} - \\frac{1^6}{6} \\right) - (0 - 0 + 0 - 0) \\right] = 1$$</p><p>$$ \\Rightarrow C \\left[\\frac{1}{3} - \\frac{3}{4} + \\frac{3}{5} - \\frac{1}{6} \\right] = 1$$</p><p>$$ \\Rightarrow C \\left( \\frac{1}{60} \\right) = 1 $$</p><p>$$ \\boxed{\\therefore C = 60} $$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530485/go-classes-dpp-gate-cs-da-probability-%26-statistics-probability-density-function\" target=\"_blank\">GATE Overflow #530485</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"259\" data-start=\"0\">A reliability engineer tests two independent machines. Machine $A$ has $7$ identical safety sensors, and machine $B$ has $11$ identical safety sensors. Each sensor independently fails during a stress test with the same unknown probability $p$.</p><p data-end=\"422\" data-start=\"261\">Let $X$ be the number of failed sensors in machine $A$, and let $Y$ be the number of failed sensors in machine $B$. Thus, $X\\sim Bin(7,p)$ and $Y\\sim Bin(11,p)$.</p><p data-end=\"519\" data-start=\"424\">Let $Z=X+Y$. It is known that $P(Z=4)=3P(Z=5)$. Which of the following correctly describes $Z$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$Z\\sim Bin(18,5/47)$<br/></span>",
                "<span style=\"display: inline;\">$Z\\sim Bin(18,42/47)$<br/></span>",
                "<span style=\"display: inline;\">$Z\\sim Bin(11,5/47)$<br/></span>",
                "<span style=\"display: inline;\">$Z$ is not binomial</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530326\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">The problem states that $X$ and $Y$ are independent binomial random variables representing the number of failed sensors in machines A and B, respectively:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$X \\sim \\text{Bin}(7, p)$</p></li><li><p data-path-to-node=\"3,1,0\">$Y \\sim \\text{Bin}(11, p)$</p></li></ul><p data-path-to-node=\"4\">When you add two independent binomial random variables that share the same probability of success $p$, their sum is also a binomial random variable. The total number of trials is the sum of the individual trials.</p><p data-path-to-node=\"4\">Therefore, $Z = X + Y$ follows a binomial distribution:</p><p>$$Z \\sim \\text{Bin}(7 + 11, p) \\implies Z \\sim \\text{Bin}(18, p)$$</p><p> </p><p>Now, The probability mass function (PMF) for a binomial distribution is $P(Z = k) = \\binom{n}{k} p^k (1-p)^{n-k}$.</p><p data-path-to-node=\"7\">We are given the condition:</p><p>$$P(Z = 4) = 3P(Z = 5)$$</p><p data-path-to-node=\"9\">Substitute the PMF formula into the equation with $n = 18$:</p><p>$$\\Rightarrow \\binom{18}{4} p^4 (1-p)^{18-4} = 3 \\left[ \\binom{18}{5} p^5 (1-p)^{18-5} \\right]$$</p><p>$$\\Rightarrow \\binom{18}{4} p^4 (1-p)^{14} = 3 \\binom{18}{5} p^5 (1-p)^{13}$$</p><p data-path-to-node=\"13\">Assuming $0 &lt; p &lt; 1$, we can divide both sides by $p^4 (1-p)^{13}$:</p><p>$$\\Rightarrow \\binom{18}{4} (1-p) = 3 \\binom{18}{5} p$$</p><p data-path-to-node=\"15\">To simplify the binomial coefficients, we can use the property $\\binom{n}{k+1} = \\binom{n}{k} \\frac{n-k}{k+1}$.</p><p data-path-to-node=\"15\">Here, $\\binom{18}{5} = \\binom{18}{4} \\frac{18-4}{5} = \\binom{18}{4} \\frac{14}{5}$.</p><p data-path-to-node=\"16\"><br/>Substitute this back into the equation:</p><p>$$\\Rightarrow \\binom{18}{4} (1-p) = 3 \\cdot \\binom{18}{4} \\frac{14}{5} \\cdot p$$</p><p data-path-to-node=\"18\">Divide both sides by $\\binom{18}{4}$:</p><p>$$\\Rightarrow 1 - p = 3 \\cdot \\frac{14}{5} \\cdot p$$</p><p>$$\\Rightarrow 1 - p = \\frac{42}{5} p$$</p><p>$$\\Rightarrow p = \\frac{5}{47}$$</p><p> </p><p data-path-to-node=\"26\">Now, Substituting $p$ back into our distribution for $Z$:</p><p>$$\\boxed{Z \\sim \\text{Bin}\\left(18, \\frac{5}{47}\\right)}$$</p><p data-path-to-node=\"28\">Therefore, the correct option is <b data-index-in-node=\"33\" data-path-to-node=\"28\">A</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530325/go-classes-dpp-gate-cs-da-probability-%26-statistics-binomial-distribution\" target=\"_blank\">GATE Overflow #530325</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"359\" data-start=\"0\">In a cyber-security control room, six independent scanners report integer threat scores. Scanner $A$ reports uniformly from $1$ to $5$, scanner $B$ reports uniformly from $1$ to $9$, scanners $C$ and $D$ each report uniformly from $1$ to $12$, scanner $E$ reports uniformly from $1$ to $18$, and scanner $F$ reports uniformly from $1$ to $30$.</p><p data-end=\"624\" data-start=\"361\">Let $M$ be the highest threat score reported by any scanner. The control room log shows that $M=12$ and that the sum of the scores from scanners $A$ and $B$ is odd. Given this information, what is the probability that exactly two scanners reported the score $12$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$726/6095$<br/></span>",
                "<span style=\"display: inline;\">$121/6095$<br/></span>",
                "<span style=\"display: inline;\">$726/20736$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530324\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">We have six independent scanners with the following uniform integer distributions:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$A \\in \\{1, 2, 3, 4, 5\\}$</p></li><li><p data-path-to-node=\"3,1,0\">$B \\in \\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$</p></li><li><p data-path-to-node=\"3,2,0\">$C \\in \\{1, \\dots, 12\\}$</p></li><li><p data-path-to-node=\"3,3,0\">$D \\in \\{1, \\dots, 12\\}$</p></li><li><p data-path-to-node=\"3,4,0\">$E \\in \\{1, \\dots, 18\\}$</p></li><li><p data-path-to-node=\"3,5,0\">$F \\in \\{1, \\dots, 30\\}$</p></li></ul><p data-path-to-node=\"4\">Let $M$ be the maximum score reported: $M = \\max(A, B, C, D, E, F)$.</p><p data-path-to-node=\"4\">We are given two pieces of information:</p><ol data-path-to-node=\"5\" start=\"1\"><li><p data-path-to-node=\"5,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,0\">$M = 12$</b></p></li><li><p data-path-to-node=\"5,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,1,0\">$A + B$ is odd</b></p></li></ol><div> </div><div><p data-path-to-node=\"7\">First, notice that the maximum possible values for scanners $A$ and $B$ are $5$ and $9$, respectively. They can never report a score of $12$. Therefore, the maximum score $M$ being $12$ depends entirely on the readings from scanners $C, D, E$, and $F$.</p><p data-path-to-node=\"8\">Because all scanners are independent, the event that \"$A+B$ is odd\" has no influence on the scores reported by $C, D, E$, and $F$. This makes the second piece of information a distractor. We can focus entirely on the condition $M = 12$ for the scanners $C, D, E, F$.</p><p data-path-to-node=\"10\">Now, For the maximum score of $C, D, E, F$ to be exactly $12$, two things must be true:</p><ul data-path-to-node=\"11\"><li><p data-path-to-node=\"11,0,0\">All four scanners must report a score $\\le 12$.</p></li><li><p data-path-to-node=\"11,1,0\">We must exclude the cases where all four scanners report a score $\\le 11$ (otherwise the max would be 11 or less).</p></li></ul><p data-path-to-node=\"12\">Let's count the number of valid outcome combinations for $(C, D, E, F)$:</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,0,0\">Total ways all can be $\\le 12$:</b></p><p data-path-to-node=\"13,0,0\">$C$ has 12 options, $D$ has 12 options, $E$ has 12 options (out of its 18), and $F$ has 12 options (out of its 30).</p><p>$$12 \\times 12 \\times 12 \\times 12 = 12^4 = 20,736 \\text{ ways}$$</p></li><li><p data-path-to-node=\"13,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,1,0\">Total ways all can be $\\le 11$:</b></p><p>$$11 \\times 11 \\times 11 \\times 11 = 11^4 = 14,641 \\text{ ways}$$</p></li><li><p data-path-to-node=\"13,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,2,0\">Ways where the max is exactly $12$:</b></p><p>$$20,736 - 14,641 = 6,095 \\text{ ways}$$</p></li></ul><div> </div></div><div><p data-path-to-node=\"15\">Given that $M=12$, we want to find the number of ways exactly two scanners report $12$. This means two scanners score exactly 12, and the other two score strictly less than $12$ (i.e., from $1$ to $11$).</p><ul data-path-to-node=\"16\"><li><p data-path-to-node=\"16,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"16,0,0\">Choose which $2$ scanners report $12$:</b></p><p data-path-to-node=\"16,0,0\">Out of the $4$ relevant scanners ($C, D, E, F$), there are $\\binom{4}{2} = 6$ ways to choose which two hit the score of $12$.</p></li><li><p data-path-to-node=\"16,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"16,1,0\">Assign scores to the remaining $2$ scanners:</b></p><p data-path-to-node=\"16,1,0\">The other two scanners must have scores $\\le 11$. Each has $11$ possible options.</p><p>$$11 \\times 11 = 121 \\text{ ways}$$</p></li><li><p data-path-to-node=\"16,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"16,2,0\">Total ways for exactly two $12$s:</b></p><p>$$6 \\times 121 = 726 \\text{ ways}$$</p></li></ul><div><p data-path-to-node=\"18\"> </p><p data-path-to-node=\"18\">The conditional probability is the ratio of our target outcomes to our condition outcomes:</p><p>$$P(\\text{Exactly two 12s} \\mid M=12) = \\frac{\\text{Ways exactly two report 12}}{\\text{Total ways } M=12}$$</p><p>$$\\boxed{\\therefore\\text{Probability} = \\frac{726}{6095}}$$</p><p data-path-to-node=\"21\">Therefore, the correct option is <b data-index-in-node=\"33\" data-path-to-node=\"21\">A</b>.</p></div></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530321/go-classes-dpp-gate-cs-da-probability-%26-statistics-discrete-random-variables\" target=\"_blank\">GATE Overflow #530321</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"665\" data-start=\"96\">You have three six-sided dice. Die $D_1$ has $1$ red face and $5$ black faces, die $D_2$ has $3$ red faces and $3$ black faces, and die $D_3$ has $5$ red faces and $1$ black face. You choose one die at random, with all three dice equally likely, and roll the same die repeatedly. If the first roll is red, you roll exactly $3$ more times. If the first roll is black, you roll exactly $4$ more times. Let $E$ be the event that the total number of red rolls is exactly $3$, the final roll is red, and no two black rolls are consecutive. Find $P(D_2\\mid E)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{55}{398}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{243}{553}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{875}{2388}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1458}{3511}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530098\"></a><div itemprop=\"text\"><p>Let $p$ be the probability of rolling a red $(R)$ face, and $q = 1-p$ be the probability of rolling a black $(B)$ face.</p><p data-path-to-node=\"2\">Event $E$ requires:</p><ol data-path-to-node=\"3\" start=\"1\"><li><p data-path-to-node=\"3,0,0\">Exactly $3$ red rolls in total.</p></li><li><p data-path-to-node=\"3,1,0\">The final roll is red.</p></li><li><p data-path-to-node=\"3,2,0\">No two black rolls are consecutive.</p></li></ol><p data-path-to-node=\"4\">The total number of rolls depends on the first roll. Let's analyze the two possible paths:</p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">Case 1: The first roll is Red (R)</b></p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\">You roll exactly $3$ <i data-index-in-node=\"19\" data-path-to-node=\"6,0,0\">more</i> times, so there are <b data-index-in-node=\"44\" data-path-to-node=\"6,0,0\">4 rolls total</b>.</p></li><li><p data-path-to-node=\"6,1,0\">Since the first roll is $R$, and we need exactly $3$ $R$'s total, we need exactly $2$ more $R$'s in the remaining $3$ rolls.</p></li><li><p data-path-to-node=\"6,2,0\">The final ($4$th) roll must be $R$.</p></li><li><p data-path-to-node=\"6,3,0\">This leaves the $2$nd and $3$rd rolls. They must consist of exactly $1$ $R$ and $1$ $B$.</p></li><li><p data-path-to-node=\"6,4,0\">The possible sequences are:</p><ol data-path-to-node=\"6,4,1\" start=\"1\"><li><p data-path-to-node=\"6,4,1,0,0\">$R, R, B, R$</p></li><li><p data-path-to-node=\"6,4,1,1,0\">$R, B, R, R$</p></li></ol></li><li><p data-path-to-node=\"6,5,0\">Both sequences have exactly one $B$, so the condition \"no two black rolls are consecutive\" is automatically satisfied.</p></li><li><p data-path-to-node=\"6,6,0\">The probability of these sequences is: $p \\cdot p \\cdot q \\cdot p + p \\cdot q \\cdot p \\cdot p = 2p^3q$.</p></li></ul><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">Case 2: The first roll is Black (B)</b></p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\">You roll exactly $4$ <i data-index-in-node=\"19\" data-path-to-node=\"8,0,0\">more</i> times, so there are <b data-index-in-node=\"44\" data-path-to-node=\"8,0,0\">5 rolls total</b>.</p></li><li><p data-path-to-node=\"8,1,0\">Since the first roll is $B$, we need exactly $3$ $R$'s in the remaining $4$ rolls.</p></li><li><p data-path-to-node=\"8,2,0\">The final ($5$th) roll must be $R$.</p></li><li><p data-path-to-node=\"8,3,0\">This leaves the $2$nd, $3$rd, and $4$th rolls. They must consist of exactly $2$ $R$'s and $1$ $B$.</p></li><li><p data-path-to-node=\"8,4,0\">The possible sequences for the middle three rolls are $RRB$, $RBR$, and $BRR$. Let's test them in the full sequence to check for consecutive $B$'s:</p><ol data-path-to-node=\"8,4,1\" start=\"1\"><li><p data-path-to-node=\"8,4,1,0,0\">$B, R, R, B, R$ $(B$'s at positions $1$ and $4.$ Not consecutive $\\rightarrow$ <b data-index-in-node=\"69\" data-path-to-node=\"8,4,1,0,0\">Valid</b>)</p></li><li><p data-path-to-node=\"8,4,1,1,0\">$B, R, B, R, R$ $(B$'s at positions $1$ and $3.$ Not consecutive $\\rightarrow$ <b data-index-in-node=\"69\" data-path-to-node=\"8,4,1,1,0\">Valid</b>)</p></li><li><p data-path-to-node=\"8,4,1,2,0\">$B, B, R, R, R$ $(B$'s at positions $1$ and $2.$ Consecutive $\\rightarrow$ <b data-index-in-node=\"65\" data-path-to-node=\"8,4,1,2,0\">Invalid</b>)</p></li></ol></li><li><p data-path-to-node=\"8,5,0\">There are $2$ valid sequences.</p></li><li><p data-path-to-node=\"8,6,0\">The probability of these sequences is: $q \\cdot p \\cdot p \\cdot q \\cdot p + q \\cdot p \\cdot q \\cdot p \\cdot p = 2p^3q^2$.</p></li></ul><p data-path-to-node=\"9\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"9\">Total Probability of Event $E$ for a die with parameter $p$:</b></p><p>$$P(E \\mid p) = 2p^3q + 2p^3q^2 = 2p^3q(1 + q)$$</p><p> </p><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">Evaluating Each Die</b><br/><br/>Now we calculate $P(E \\mid D_i)$ for each die. For easier addition later, we will keep a common denominator of $6^5 = 7776$.</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,0,0\">Die 1 ($D_1$):</b> $1$ Red, $5$ Black $\\implies p = \\frac{1}{6}, q = \\frac{5}{6}$</p><p>$$P(E \\mid D_1) = 2 \\left(\\frac{1}{6}\\right)^3 \\left(\\frac{5}{6}\\right) \\left(1 + \\frac{5}{6}\\right) = 2 \\left(\\frac{1}{216}\\right) \\left(\\frac{5}{6}\\right) \\left(\\frac{11}{6}\\right) = \\frac{110}{7776}$$</p></li><li><p data-path-to-node=\"13,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,1,0\">Die 2 ($D_2$):</b> $3$ Red, $3$ Black $\\implies p = \\frac{3}{6}, q = \\frac{3}{6}$</p><p>$$P(E \\mid D_2) = 2 \\left(\\frac{3}{6}\\right)^3 \\left(\\frac{3}{6}\\right) \\left(1 + \\frac{3}{6}\\right) = 2 \\left(\\frac{27}{216}\\right) \\left(\\frac{3}{6}\\right) \\left(\\frac{9}{6}\\right) = \\frac{1458}{7776}$$</p></li><li><p data-path-to-node=\"13,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,2,0\">Die 3 ($D_3$):</b> $5$ Red, $1$ Black $\\implies p = \\frac{5}{6}, q = \\frac{1}{6}$</p><p>$$P(E \\mid D_3) = 2 \\left(\\frac{5}{6}\\right)^3 \\left(\\frac{1}{6}\\right) \\left(1 + \\frac{1}{6}\\right) = 2 \\left(\\frac{125}{216}\\right) \\left(\\frac{1}{6}\\right) \\left(\\frac{7}{6}\\right) = \\frac{1750}{7776}$$</p></li></ul><div> </div><div><p data-path-to-node=\"15\"><b data-index-in-node=\"0\" data-path-to-node=\"15\">Applying Bayes' Theorem</b></p><p data-path-to-node=\"15\">We want to find $P(D_2 \\mid E)$. Since the dice are chosen with equal probability ($P(D_1) = P(D_2) = P(D_3) = \\frac{1}{3}$), they cancel out of the equation:</p><p>$$P(D_2 \\mid E) = \\frac{P(E \\mid D_2)}{P(E \\mid D_1) + P(E \\mid D_2) + P(E \\mid D_3)}$$</p><p data-path-to-node=\"17\">Let's plug in the numerators (since the $7776$ denominators cancel out):</p><p>$$\\Rightarrow P(D_2 \\mid E) = \\frac{1458}{110 + 1458 + 1750} = \\frac{1458}{3318}$$</p><p>$$\\boxed{\\therefore P(D_2 \\mid E) = \\frac{243}{553}}$$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530097/go-classes-dpp-gate-cs-da-probability-bernoulli-trials\" target=\"_blank\">GATE Overflow #530097</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"327\" data-start=\"85\">Suppose $Z_1,Z_2,Z_3,Z_4$ are i.i.d.(independent &amp; identically distributed) Bernoulli random variables with parameter $p=\\frac12$.</p><div><p data-end=\"374\" data-start=\"172\">The random variable, $S=Z_2Z_3+Z_4$ if $Z_1=1$, and $S=Z_2+Z_3Z_4$ if $Z_1=0$. Find $P(Z_1=1\\mid S=1)$.</p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac13$<br/></span>",
                "<span style=\"display: inline;\">$\\frac25$<br/></span>",
                "<span style=\"display: inline;\">$\\frac12$<br/></span>",
                "<span style=\"display: inline;\">$\\frac35$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530094\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\"><b data-index-in-node=\"58\" data-path-to-node=\"0\">Using Bayes' Theorem</b>:</p><p>$$P(Z_1=1 \\mid S=1) = \\frac{P(S=1 \\mid Z_1=1) P(Z_1=1)}{P(S=1 \\mid Z_1=1) P(Z_1=1) + P(S=1 \\mid Z_1=0) P(Z_1=0)}$$</p><p data-path-to-node=\"2\">We are given that $Z_1, Z_2, Z_3, Z_4$ are independent and identically distributed (i.i.d.) Bernoulli random variables with parameter $p = \\frac{1}{2}$.</p><p data-path-to-node=\"2\">This means for any $i \\in \\{1, 2, 3, 4\\}$:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$P(Z_i = 1) = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"3,1,0\">$P(Z_i = 0) = \\frac{1}{2}$</p></li></ul><p data-path-to-node=\"4\">Let's calculate the conditional probabilities $P(S=1 \\mid Z_1=1)$ and $P(S=1 \\mid Z_1=0)$.</p><p data-path-to-node=\"7\"> </p><p data-path-to-node=\"7\"><strong>Calculating $P(S=1 \\mid Z_1=1)$ :</strong></p><p data-path-to-node=\"7\">Given $Z_1 = 1$, the expression for $S$ is:</p><p>$$S = Z_2Z_3 + Z_4$$</p><p data-path-to-node=\"9\">Since the variables can only be 0 or 1, $S = 1$ occurs exactly when one of the terms is 1 and the other is 0.</p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Case A ($Z_2Z_3 = 1$ and $Z_4 = 0$):</b></p><p data-path-to-node=\"10,0,0\">$Z_2Z_3 = 1$ only if both $Z_2 = 1$ and $Z_3 = 1$.</p><p data-path-to-node=\"10,0,0\">$P(\\text{Case A}) = P(Z_2=1) \\cdot P(Z_3=1) \\cdot P(Z_4=0) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{8}$</p></li><li><p data-path-to-node=\"10,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,1,0\">Case B ($Z_2Z_3 = 0$ and $Z_4 = 1$):</b></p><p data-path-to-node=\"10,1,0\">$P(Z_2Z_3 = 0) = 1 - P(Z_2Z_3 = 1) = 1 - \\frac{1}{4} = \\frac{3}{4}$</p><p data-path-to-node=\"10,1,0\">$P(\\text{Case B}) = P(Z_2Z_3=0) \\cdot P(Z_4=1) = \\left(\\frac{3}{4}\\right)\\left(\\frac{1}{2}\\right) = \\frac{3}{8}$</p></li></ul><p data-path-to-node=\"11\">Adding these mutually exclusive cases together:</p><p>$$P(S=1 \\mid Z_1=1) = \\frac{1}{8} + \\frac{3}{8} = \\mathbf{\\frac{1}{2}}$$</p><p><br/><strong>Calculating $P(S=1 \\mid Z_1=0)$ :</strong></p><p data-path-to-node=\"15\">Given $Z_1 = 0$, the expression for $S$ is:</p><p>$$S = Z_2 + Z_3Z_4$$</p><p data-path-to-node=\"17\">Again, $S = 1$ occurs exactly when one of the terms is 1 and the other is 0.</p><ul data-path-to-node=\"18\"><li><p data-path-to-node=\"18,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"18,0,0\">Case C ($Z_2 = 1$ and $Z_3Z_4 = 0$):</b></p><p data-path-to-node=\"18,0,0\">$P(Z_3Z_4 = 0) = 1 - P(Z_3Z_4 = 1) = 1 - \\frac{1}{4} = \\frac{3}{4}$</p><p data-path-to-node=\"18,0,0\">$P(\\text{Case C}) = P(Z_2=1) \\cdot P(Z_3Z_4=0) = \\left(\\frac{1}{2}\\right)\\left(\\frac{3}{4}\\right) = \\frac{3}{8}$</p></li><li><p data-path-to-node=\"18,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"18,1,0\">Case D ($Z_2 = 0$ and $Z_3Z_4 = 1$):</b></p><p data-path-to-node=\"18,1,0\">$Z_3Z_4 = 1$ only if both $Z_3 = 1$ and $Z_4 = 1$.</p><p data-path-to-node=\"18,1,0\">$P(\\text{Case D}) = P(Z_2=0) \\cdot P(Z_3=1) \\cdot P(Z_4=1) = \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{2}\\right) = \\frac{1}{8}$</p></li></ul><p data-path-to-node=\"19\">Adding these mutually exclusive cases together:</p><p>$$P(S=1 \\mid Z_1=0) = \\frac{3}{8} + \\frac{1}{8} = \\mathbf{\\frac{1}{2}}$$</p><p> </p><p data-path-to-node=\"23\">Now we plug everything back into our original formula. Remember that $P(Z_1=1) = \\frac{1}{2}$ and $P(Z_1=0) = \\frac{1}{2}$.</p><p>$$P(Z_1=1 \\mid S=1) = \\frac{\\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right)}{\\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right) + \\left(\\frac{1}{2}\\right) \\cdot \\left(\\frac{1}{2}\\right)} = \\frac{\\frac{1}{4}}{\\frac{1}{4} + \\frac{1}{4}}$$</p><p>$$P(Z_1=1 \\mid S=1) = \\frac{1/4}{2/4} = \\boxed{\\mathbf{\\frac{1}{2}}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530092/go-classes-dpp-gate-cs-da-probability-bayes-theorem\" target=\"_blank\">GATE Overflow #530092</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"368\" data-start=\"0\">Consider three Bernoulli random variables $X$, $Y$, and $Z$, each taking values $0$ or $1$. No independence assumptions are made. Suppose</p><ul><li data-end=\"368\" data-start=\"0\">$P(X=1)=\\frac{2}{5}$, <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Y=1|X=1)=\\frac{3}{4}$, <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Y=1)=\\frac{1}{2}$, <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Z=1|X=1,Y=1)=\\frac{1}{5}$, <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Z=1|X=1,Y=0)=\\frac{4}{5}$, <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Z=1|X=0,Y=1)=\\frac{2}{3}$, and <br/> </li><li data-end=\"368\" data-start=\"0\">$P(Z=1)=\\frac{67}{150}$. <br/> </li></ul><p>What is $P(Z=1|X=0,Y=0)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{13}{30}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529884\"></a><div itemprop=\"text\"><p data-end=\"487\" data-start=\"448\">Let $t=P(Z=1|X=0,Y=0)$.</p><p data-end=\"539\" data-start=\"489\">First find the joint probabilities of $X$ and $Y$.</p><ul><li data-end=\"612\" data-start=\"541\">$P(X=1,Y=1)=P(Y=1|X=1)P(X=1)=\\frac{3}{4}\\cdot\\frac{2}{5}=\\frac{3}{10}$.<br/> </li><li data-end=\"683\" data-start=\"614\">$P(X=1,Y=0)=P(X=1)-P(X=1,Y=1)=\\frac{2}{5}-\\frac{3}{10}=\\frac{1}{10}$.<br/> </li><li data-end=\"753\" data-start=\"685\">$P(X=0,Y=1)=P(Y=1)-P(X=1,Y=1)=\\frac{1}{2}-\\frac{3}{10}=\\frac{1}{5}$.<br/> </li><li data-end=\"820\" data-start=\"755\">$P(X=0,Y=0)=1-\\frac{3}{10}-\\frac{1}{10}-\\frac{1}{5}=\\frac{2}{5}$.<br/> </li></ul><p data-end=\"861\" data-start=\"822\">Now use total probability for $P(Z=1)$:</p><p>$P(Z=1) = \\sum_{x \\in \\{0,1\\}} \\sum_{y \\in \\{0,1\\}} P(Z=1 \\mid X=x, Y=y) \\cdot P(X=x, Y=y)$</p><p data-end=\"984\" data-start=\"863\">$\\Rightarrow \\frac{67}{150}=\\frac{1}{5}\\cdot\\frac{3}{10}+\\frac{4}{5}\\cdot\\frac{1}{10}+\\frac{2}{3}\\cdot\\frac{1}{5}+t\\cdot\\frac{2}{5}$.</p><p data-end=\"1063\" data-start=\"986\">$\\Rightarrow \\frac{67}{150}=\\frac{9}{150}+\\frac{12}{150}+\\frac{20}{150}+\\frac{2t}{5}$.</p><p data-end=\"1115\" data-start=\"1065\">$\\Rightarrow \\frac{67}{150}=\\frac{41}{150}+\\frac{2t}{5}$.</p><p data-end=\"1181\" data-start=\"1117\">$\\Rightarrow \\frac{26}{150}=\\frac{2t}{5}$<br/><br/>$\\therefore t=\\frac{13}{30}$</p><p data-end=\"1181\" data-start=\"1117\">$\\boxed{\\Rightarrow P(Z=1|X=0,Y=0)=\\frac{13}{30}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529883/go-classes-dpp-gate-cs-da-probability-the-law-of-total-probability\" target=\"_blank\">GATE Overflow #529883</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"204\" data-start=\"0\">Suppose $X,Y,Z$ are independent binary random variables taking values in ${0,1}$. Let $P(X=0)=p$, $P(Y=0)=q$, and $P(Z=0)=r$. Which expression is equal to $P(X+Y+Z\\geq 2\\mid X+Y\\geq 1)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{(1-p)(1-q)+pq(1-r)}{1-pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{(1-p)(1-q)+(1-r)[p(1-q)+q(1-p)]}{1-pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{(1-p)(1-q)r+(1-r)[p(1-q)+q(1-p)]}{1-pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1-pqr}{1-pq}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529879\"></a><div itemprop=\"text\"><p data-end=\"427\" data-start=\"372\">We need $P(X+Y+Z\\geq 2\\mid X+Y\\geq 1)$.</p><p data-end=\"518\" data-start=\"429\">Using conditional probability, this is $\\frac{P(X+Y+Z\\geq 2,\\ X+Y\\geq 1)}{P(X+Y\\geq 1)}$.</p><p data-end=\"683\" data-start=\"520\">Since $X+Y+Z\\geq 2$ already forces $X+Y\\geq 1$ except in the case $X=0,Y=0,Z=2$, which is impossible because $Z\\in{0,1}$, the numerator is just $P(X+Y+Z\\geq 2)$.</p><p data-end=\"722\" data-start=\"685\">Now $P(X+Y\\geq 1)=1-P(X=0,Y=0)=1-pq$.</p><p data-end=\"834\" data-start=\"724\">The event $X+Y+Z\\geq 2$ happens in these cases: $X=1,Y=1,Z=0$, $X=1,Y=0,Z=1$, $X=0,Y=1,Z=1$, or $X=1,Y=1,Z=1$.</p><p data-end=\"910\" data-start=\"836\">So the numerator is $(1-p)(1-q)r+(1-p)q(1-r)+p(1-q)(1-r)+(1-p)(1-q)(1-r)$.</p><p data-end=\"987\" data-start=\"912\">Combine the first and last terms: $(1-p)(1-q)r+(1-p)(1-q)(1-r)=(1-p)(1-q)$.</p><p data-end=\"1048\" data-start=\"989\">So the numerator becomes $(1-p)(1-q)+(1-r)[p(1-q)+q(1-p)]$.</p><p data-end=\"1137\" data-start=\"1050\">$\\boxed{\\therefore P(X+Y+Z\\geq 2\\mid X+Y\\geq 1)=\\frac{(1-p)(1-q)+(1-r)[p(1-q)+q(1-p)]}{1-pq}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529878/go-classes-dpp-gate-cs-da-probability-bernoulli-random-variables\" target=\"_blank\">GATE Overflow #529878</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"478\" data-start=\"0\">A number between $0$ and $1$, inclusive, is chosen in the following manner. A fair coin is flipped. If it lands heads, then it is flipped again and the chosen number is $0$ if the second flip is heads, and $1$ if the second flip is tails. If the first flip is tails, then the chosen number is selected uniformly at random from the interval $[0,1]$. Three random numbers $x$, $y$, and $z$ are chosen independently in this manner. What is the probability that $x+y+z&lt;1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{41}{192}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{43}{192}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{45}{192}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{47}{192}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529686\"></a><div itemprop=\"text\"><p data-end=\"683\" data-start=\"564\">For each chosen number, $P(0)=\\frac{1}{4}$, $P(1)=\\frac{1}{4}$, and $P(\\text{uniform on }[0,1])=\\frac{1}{2}$.</p><p data-end=\"857\" data-start=\"685\">If any one of $x,y,z$ equals $1$, then $x+y+z&lt;1$ is impossible. So we only need to consider cases where each variable is either $0$ or a uniform random number from $[0,1]$.</p><p data-end=\"885\" data-start=\"859\"><strong>Case 1:</strong> All three are $0$.</p><p data-end=\"948\" data-start=\"887\">The probability is $\\left(\\frac{1}{4}\\right)^3=\\frac{1}{64}$.</p><p data-end=\"1018\" data-start=\"950\"><strong>Case 2:</strong> Exactly one is uniform on $[0,1]$ and the other two are $0$.</p><p data-end=\"1143\" data-start=\"1020\">In this case, $x+y+z&lt;1$ always holds, except at the single point where the uniform value is $1$, which has probability $0$.</p><p data-end=\"1235\" data-start=\"1145\">So the contribution is $3\\left(\\frac{1}{2}\\right)\\left(\\frac{1}{4}\\right)^2=\\frac{3}{32}$.</p><p data-end=\"1305\" data-start=\"1237\"><strong>Case 3:</strong> Exactly two are uniform on $[0,1]$ and the other one is $0$.</p><p data-end=\"1407\" data-start=\"1307\">Then we need $U_1+U_2&lt;1$, where $U_1$ and $U_2$ are independent uniform random variables on $[0,1]$.</p><p data-end=\"1443\" data-start=\"1409\">This probability is $\\frac{1}{2}$.</p><p data-end=\"1559\" data-start=\"1445\">So the contribution is $3\\left(\\frac{1}{2}\\right)^2\\left(\\frac{1}{4}\\right)\\left(\\frac{1}{2}\\right)=\\frac{3}{32}$.</p><p data-end=\"1602\" data-start=\"1561\"><strong>Case 4:</strong> All three are uniform on $[0,1]$.</p><p data-end=\"1633\" data-start=\"1604\">Then we need $U_1+U_2+U_3&lt;1$.</p><p data-end=\"1743\" data-start=\"1635\">This is the volume of the tetrahedron inside the unit cube given by $u_1+u_2+u_3&lt;1$, which is $\\frac{1}{6}$.</p><p data-end=\"1834\" data-start=\"1745\">So the contribution is $\\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{6}\\right)=\\frac{1}{48}$.</p><p data-end=\"1862\" data-start=\"1836\"><br/>Now add all contributions:</p><p data-end=\"1917\" data-start=\"1864\">$\\frac{1}{64}+\\frac{3}{32}+\\frac{3}{32}+\\frac{1}{48}$</p><p data-end=\"1979\" data-start=\"1919\">$=\\frac{3}{192}+\\frac{18}{192}+\\frac{18}{192}+\\frac{4}{192}=\\frac{43}{192}$</p><p data-end=\"2056\" data-start=\"2000\">Therefore, the required probability is $\\frac{43}{192}$.</p><p data-end=\"2085\" data-start=\"2058\">So the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529685/go-classes-dpp-gate-da-probability-random-variables\" target=\"_blank\">GATE Overflow #529685</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"295\" data-start=\"50\">Let $X$ be a continuous random variable with probability density function</p><p data-end=\"295\" data-start=\"50\">$$<br/>f(x)= \\begin{cases}cx^2&amp; , x \\in[0,1] \\\\\\\\ c(2-x) &amp; , x \\in(1,2]\\\\\\\\0 &amp; , \\text { otherwise }\\end{cases}<br/>$$</p><p data-end=\"295\" data-start=\"50\">where $c\\in\\mathbb{R}$. What is $P\\left(X\\le 1 \\mid X\\le \\frac{3}{2}\\right)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{6}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{8}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{10}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{12}{17}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529677\"></a><div itemprop=\"text\"><p data-end=\"432\" data-start=\"375\">Since $f(x)$ is a probability density function,</p><p data-end=\"475\" data-start=\"434\">$\\int_0^1 cx^2dx+\\int_1^2 c(2-x)dx=1$<br/><br/>$\\Rightarrow c\\left(\\int_0^1 x^2dx+\\int_1^2 (2-x)dx\\right)=1$<br/><br/>$\\Rightarrow c\\left(\\frac{1}{3}+\\frac{1}{2}\\right)=1$</p><p data-end=\"690\" data-start=\"669\">$\\Rightarrow c\\cdot\\frac{5}{6}=1$</p><p data-end=\"707\" data-start=\"692\">$\\Rightarrow c=\\frac{6}{5}$</p><p data-end=\"713\" data-start=\"709\"><br/>Now,</p><p data-end=\"794\" data-start=\"715\">$P(X\\le 1)=\\int_0^1 \\frac{6}{5}x^2,dx=\\frac{6}{5}\\cdot\\frac{1}{3}=\\frac{2}{5}$</p><p data-end=\"801\" data-start=\"796\">Also,</p><p data-end=\"896\" data-start=\"803\">$P\\left(X\\le \\frac{3}{2}\\right)=\\int_0^1 \\frac{6}{5}x^2,dx+\\int_1^{3/2}\\frac{6}{5}(2-x),dx$</p><p data-end=\"945\" data-start=\"898\">$=\\frac{2}{5}+\\frac{6}{5}\\int_1^{3/2}(2-x),dx$</p><p data-end=\"951\" data-start=\"947\"><br/>Now,</p><p data-end=\"1014\" data-start=\"953\">$\\int_1^{3/2}(2-x),dx=\\left[2x-\\frac{x^2}{2}\\right]_1^{3/2}$</p><p data-end=\"1072\" data-start=\"1016\">$=\\left(3-\\frac{9}{8}\\right)-\\left(2-\\frac{1}{2}\\right)$</p><p data-end=\"1102\" data-start=\"1074\">$=\\frac{15}{8}-\\frac{12}{8}=\\frac{3}{8}$</p><p data-end=\"1123\" data-start=\"1120\"><br/>So,</p><p data-end=\"1197\" data-start=\"1125\">$P\\left(X\\le \\frac{3}{2}\\right)=\\frac{2}{5}+\\frac{6}{5}\\cdot\\frac{3}{8}$</p><p data-end=\"1226\" data-start=\"1199\">$=\\frac{2}{5}+\\frac{9}{20}=\\frac{8}{20}+\\frac{9}{20}=\\frac{17}{20}$</p><p data-end=\"1286\" data-start=\"1276\"><br/>Therefore,</p><p data-end=\"1381\" data-start=\"1288\">$P\\left(X\\le 1 \\mid X\\le \\frac{3}{2}\\right)=\\frac{P(X\\le 1)}{P\\left(X\\le \\frac{3}{2}\\right)}$</p><p data-end=\"1419\" data-start=\"1383\">$=\\frac{2/5}{17/20}=\\frac{2}{5}\\cdot\\frac{20}{17}=\\frac{8}{17}$</p><p data-end=\"1514\" data-start=\"1472\"><br/>So the correct answer is <strong>B.</strong></p><p data-end=\"1381\" data-start=\"1288\">$\\boxed{P\\left(X\\le 1 \\mid X\\le \\frac{3}{2}\\right)=\\frac{8}{17}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529676/go-classes-dpp-gate-da-probability-continuous-random-variables\" target=\"_blank\">GATE Overflow #529676</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 58 - Engineering Mathematics (Random Variables & Probability Distributions - Part 3)",
    "testLabel": "DPP 58",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"206\" data-start=\"0\">Let $X$ be a random variable that takes each integer value from $1$ to $30$ with equal probability $\\frac{1}{30}$. Define the random variable $Y = X \\bmod 7$. Calculate $P(Y=0) + P(Y=1) + P(Y=2)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{2}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{8}{15}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529675\"></a><div itemprop=\"text\"><p data-end=\"411\" data-start=\"285\">The values $1$ to $28$ form $4$ complete groups of $7$, so each remainder $0,1,2,3,4,5,6$ appears exactly $4$ times.</p><p data-end=\"490\" data-start=\"413\">The remaining values are $29$ and $30$, and they give remainders $1$ and $2$.</p><p data-end=\"595\" data-start=\"492\">So, remainder $0$ occurs $4$ times, remainder $1$ occurs $5$ times, and remainder $2$ occurs $5$ times.</p><p data-end=\"685\" data-start=\"597\">Therefore, $P(Y=0) + P(Y=1) + P(Y=2) = \\frac{4+5+5}{30} = \\frac{14}{30} = \\frac{7}{15}$.<br/><br/>So the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529674/go-classes-dpp-gate-cs-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529674</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"163\" data-start=\"0\">In the experiment of tossing two fair dice, let $X$ be the larger of the two top faces. Which of the following gives the probability distribution of $X$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x_k = k,\\ p_k = \\frac{1}{6},\\ k = 1,2,\\ldots,6$<br/></span>",
                "<span style=\"display: inline;\">$x_k = k,\\ p_k = \\frac{k}{21},\\ k = 1,2,\\ldots,6$<br/></span>",
                "<span style=\"display: inline;\">$x_k = k,\\ p_k = \\frac{2k-1}{36},\\ k = 1,2,\\ldots,6$<br/></span>",
                "<span style=\"display: inline;\">$x_k = k,\\ p_k = \\frac{7-k}{21},\\ k = 1,2,\\ldots,6$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529667\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Identifying Total Possible Outcomes</b></p><p data-path-to-node=\"2\">When tossing two fair dice, each die has $6$ faces. The total number of equally likely outcomes in the sample space is:</p><p data-path-to-node=\"2\">$6 \\times 6 = 36$ total outcomes.<br/> </p><p data-path-to-node=\"3\"><b data-index-in-node=\"0\" data-path-to-node=\"3\">Understanding the Random Variable</b></p><p data-path-to-node=\"4\">The random variable $X$ is defined as the larger of the two top faces. If we call the results of the two dice $D_1$ and $D_2$, then $X = \\max(D_1, D_2)$.</p><p data-path-to-node=\"4\">The possible values for $X$ (which we'll call $k$) are $1, 2, 3, 4, 5,$ and $6.$</p><p data-path-to-node=\"5\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"5\">Determining Favorable Outcomes for $X = k$</b></p><p data-path-to-node=\"6\">For the maximum of the two dice to be exactly $k$, the outcomes must fall into one of three specific scenarios:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">Scenario A:</b> The first die shows $k$, and the second die shows a number strictly less than $k$. Because there are $k - 1$ numbers less than $k$, there are exactly <b data-index-in-node=\"154\" data-path-to-node=\"7,0,0\">$k - 1$</b> such outcomes.</p></li><li><p data-path-to-node=\"7,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,1,0\">Scenario B:</b> The second die shows $k$, and the first die shows a number strictly less than $k$. Similarly, there are <b data-index-in-node=\"112\" data-path-to-node=\"7,1,0\">$k - 1$</b> such outcomes.</p></li><li><p data-path-to-node=\"7,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,2,0\">Scenario C:</b> Both dice show exactly $k$ $($e.g., rolling a double $3)$. There is exactly <b data-index-in-node=\"82\" data-path-to-node=\"7,2,0\">1</b> such outcome.</p></li></ul><p data-path-to-node=\"8\">To find the total number of favorable outcomes where the maximum is $k$, we add these scenarios together:</p><p>$$\\text{Total favorable outcomes} = (k - 1) + (k - 1) + 1$$</p><p>$$\\text{Total favorable outcomes} = 2k - 1$$</p><p data-path-to-node=\"11\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"11\">Formulating the Probability Distribution</b></p><p data-path-to-node=\"12\">The probability $p_k$ of rolling a maximum value of $k$ is the number of favorable outcomes divided by the total number of outcomes:</p><p>$$p_k = \\frac{2k - 1}{36}$$</p><p data-path-to-node=\"14\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"14\">Verifying with a Quick Example</b></p><p data-path-to-node=\"15\">Let's test this logic for $k = 3$. We are looking for all pairs where the highest number is $3.$</p><ul data-path-to-node=\"16\"><li><p data-path-to-node=\"16,0,0\">The pairs are: $(1,3), (2,3), (3,3), (3,2),$ and $(3,1).$</p></li><li><p data-path-to-node=\"16,1,0\">That is a total of $5$ pairs, meaning the probability is $5/36.$</p></li><li><p data-path-to-node=\"16,2,0\">Plugging $k = 3$ into our formula gives: $\\frac{2(3) - 1}{36} = \\frac{5}{36}$.</p><p data-path-to-node=\"16,2,0\">The formula holds true.</p></li></ul><p data-path-to-node=\"17\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"17\">$\\therefore$ The correct answer is: </b><b data-index-in-node=\"16\" data-path-to-node=\"17\">C.<br/>$\\boxed{x_k = k, p_k = \\frac{2k-1}{36}, k = 1,2,\\dots,6}$</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529666/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529666</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"307\" data-start=\"52\">Consider a coin with probability $p$ of showing heads on each toss. The coin is tossed repeatedly until the second head appears. Find the probability that the first head appears on an even-numbered toss and the second head appears on an odd-numbered toss.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1-p}{(2-p)^2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{p}{(2-p)^2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1-p}{2-p}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{(2-p)^2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529597\"></a><div itemprop=\"text\"><p data-end=\"438\" data-start=\"426\">Let $q=1-p$.</p><p data-end=\"511\" data-start=\"440\">The probability that the first head appears on an even-numbered toss is</p><p data-end=\"582\" data-start=\"513\">$qp+q^3p+q^5p+\\cdots=\\frac{qp}{1-q^2}=\\frac{q}{1+q}=\\frac{1-p}{2-p}$.</p><p data-end=\"830\" data-start=\"584\">After the first head appears, the number of additional tosses needed to get the second head again follows a geometric pattern. For the second head to occur on an odd-numbered toss, the number of additional tosses after the first head must be odd.</p><p data-end=\"854\" data-start=\"832\">So that probability is</p><p data-end=\"907\" data-start=\"856\">$p+q^2p+q^4p+\\cdots=\\frac{p}{1-q^2}=\\frac{1}{2-p}$.</p><p data-end=\"947\" data-start=\"909\">Therefore, the required probability is</p><p data-end=\"1005\" data-start=\"949\">$\\frac{1-p}{2-p}\\cdot\\frac{1}{2-p}=\\frac{1-p}{(2-p)^2}$.<br/><br/><strong>Answer:</strong> $\\boxed{\\frac{1-p}{(2-p)^2}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529596/go-classes-dpp-gate-da-probability-bernoulli-trials\" target=\"_blank\">GATE Overflow #529596</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"5\">Let $X$ be a continuous random variable with the probability density function </p><p data-path-to-node=\"5\">$$f(x)= \\begin{cases} c\\left(2-|x|\\right), &amp; -1\\lt x\\lt 2 \\\\\\\\ 0, &amp; \\text { otherwise }\\end{cases}$$</p><p data-path-to-node=\"5\">What is the value of the constant $c$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2/5$<br/></span>",
                "<span style=\"display: inline;\">$2/7$<br/></span>",
                "<span style=\"display: inline;\">$1/3$<br/></span>",
                "<span style=\"display: inline;\">$3/7$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529595\"></a><div itemprop=\"text\"><p data-path-to-node=\"10\">For $f(x)$ to be a valid probability density function, the total area under the curve over its entire domain must equal exactly $1$. This is expressed by the integral:</p><p data-path-to-node=\"10\">$\\int_{-\\infty}^{\\infty} f(x) dx = 1$</p><p data-path-to-node=\"11\">Because our function contains an absolute value, we must split the integral at $x = 0$ to properly evaluate it. Recall the definition of absolute value: $|x| = -x$ for negative values, and $|x| = x$ for positive values.</p><p data-path-to-node=\"12\">Set up the integral split into two parts:</p><p data-path-to-node=\"12\">$c \\cdot [ \\int_{-1}^{0} (2 - (-x)) dx + \\int_{0}^{2} (2 - x) dx ] = 1$</p><p data-path-to-node=\"12\">$c \\cdot [ \\int_{-1}^{0} (2 + x) dx + \\int_{0}^{2} (2 - x) dx ] = 1$</p><p data-path-to-node=\"13\">Now, evaluate the first definite integral:</p><p data-path-to-node=\"13\">$\\int_{-1}^{0} (2 + x) dx = [2x + x^2 / 2]_{-1}^{0}$</p><p data-path-to-node=\"13\">$= (0 + 0) - (2(-1) + (-1)^2 / 2) = 0 - (-2 + 1/2) = 0 - (-3/2) = 3/2$</p><p data-path-to-node=\"14\">Evaluate the second definite integral:</p><p data-path-to-node=\"14\">$\\int_{0}^{2} (2 - x) dx = [2x - x^2 / 2]_{0}^{2}$</p><p data-path-to-node=\"14\">$= (2(2) - 2^2 / 2) - (0 - 0) = (4 - 2) = 2$</p><p data-path-to-node=\"15\">Substitute these areas back into our main equation:</p><p data-path-to-node=\"15\">$c \\cdot [ 3/2 + 2 ] = 1$</p><p data-path-to-node=\"15\">$c \\cdot [ 3/2 + 4/2 ] = 1$</p><p data-path-to-node=\"15\">$c \\cdot [ 7/2 ] = 1$</p><p data-path-to-node=\"16\">Multiply both sides by $2/7$ to isolate $c$:</p><p data-path-to-node=\"16\">$c = 2/7$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529594/go-classes-dpp-gate-da-probability-continuous-random-variables\" target=\"_blank\">GATE Overflow #529594</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A fair coin is tossed $8$ times and exactly $6$ heads are observed. The coin is tossed one more time under the same conditions. Given the previous result, what is the probability that the next toss is a tail?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{4}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529583\"></a><div itemprop=\"text\"><p>Since the coin is fair, each toss is independent of all previous tosses.</p><p>So the result of the first $8$ tosses does not affect the probability of the next toss.</p><p>Therefore, the probability that the next toss is a tail is $\\frac{1}{2}$.</p><p>Hence, the required probability is $\\boxed{\\frac{1}{2}}$.</p><p>So the correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529581/go-classes-dpp-gate-cs-probability-independence-of-events-%26-bernoulli-trials\" target=\"_blank\">GATE Overflow #529581</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"5\">For each element in a set of size $2n$, an unbiased coin is tossed independently. An element is chosen if the corresponding coin toss results in a head. What is the probability that strictly more than half of the elements in the set are chosen?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2^{2n} - {}^{2n}C_n}{2^{2n+1}}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2^{2n} - {}^{2n}C_n}{2^{2n}}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2^{2n-1} - {}^{2n}C_n}{2^{2n+1}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529502\"></a><div itemprop=\"text\"><p data-path-to-node=\"10\">Let $X$ be the number of chosen elements (which is the number of heads tossed). Since there are $2n$ independent tosses of an unbiased coin, $X$ follows a binomial distribution.</p><p data-path-to-node=\"11\">We need to find the probability that strictly more than half the elements are chosen, which means we want to find $P(X &gt; n)$.</p><p data-path-to-node=\"12\">We know that the sum of all possible probabilities must equal $1$:</p><p data-path-to-node=\"12\">$P(X &lt; n) + P(X = n) + P(X &gt; n) = 1$</p><p data-path-to-node=\"13\">Because the coin is unbiased (probability of heads is $1/2$), the distribution of outcomes is perfectly symmetric. Getting $k$ heads is just as likely as getting $2n - k$ heads (which is the same as getting $k$ tails). Therefore, the probability of getting fewer than $n$ heads is exactly equal to the probability of getting more than $n$ heads:</p><p data-path-to-node=\"13\">$P(X &lt; n) = P(X &gt; n)$</p><p data-path-to-node=\"14\">Substitute this symmetry fact back into our total probability equation:</p><p data-path-to-node=\"14\">$\\Rightarrow 2 \\cdot P(X &gt; n) + P(X = n) = 1$</p><p data-path-to-node=\"15\">Now, rearrange the equation to solve for our target, $P(X &gt; n)$:</p><p data-path-to-node=\"15\">$P(X &gt; n) = \\frac{1 - P(X = n)}{2}$</p><p data-path-to-node=\"16\">Next, we find the probability of exactly $n$ elements being chosen (which is the exact concept from the previous, simpler problem). Using the binomial formula:</p><p data-path-to-node=\"16\">$P(X = n) = {}^{2n}C_n \\cdot (1/2)^n \\cdot (1/2)^n = \\frac{{}^{2n}C_n}{2^{2n}}$</p><p data-path-to-node=\"17\">Finally, substitute this value back into our rearranged equation:</p><p data-path-to-node=\"17\">$P(X &gt; n) = \\frac{1 - \\frac{{}^{2n}C_n}{2^{2n}}}{2}$</p><p data-path-to-node=\"18\">Find a common denominator for the numerator and simplify:</p><p data-path-to-node=\"18\">$P(X &gt; n) = \\frac{\\frac{2^{2n} - {}^{2n}C_n}{2^{2n}}}{2} = \\frac{2^{2n} - {}^{2n}C_n}{2^{2n+1}}$<br/><br/>$\\boxed{\\therefore P(X &gt; n) = \\frac{2^{2n} - {}^{2n}C_n}{2^{2n+1}}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529501/go-classes-dpp-gate-da-probability-binomial-distribution\" target=\"_blank\">GATE Overflow #529501</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a discrete random variable $X$ with the following probability mass function (pmf):<br/>$$<br/>P(X=x)= \\begin{cases}\\frac{1}{4} &amp; \\text { if } x=2 \\\\\\\\ \\frac{1}{2} &amp; \\text { if } x=4 \\\\\\\\ \\frac{1}{4} &amp; \\text { if } x=6\\end{cases}<br/>$$<br/>What is the value of $P\\left(X^{2}-12 X+35&gt;0\\right)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{4}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"529023\"></a><div itemprop=\"text\"><p data-end=\"30\" data-start=\"0\">$X^2 - 12X + 35 = (X-5)(X-7)$.</p><p data-end=\"73\" data-start=\"32\">So we need to find when $(X-5)(X-7) &gt; 0$.</p><p data-end=\"116\" data-start=\"75\">This is positive when $X &lt; 5$ or $X &gt; 7$.</p><p data-end=\"163\" data-start=\"118\">Now the possible values of $X$ are $2, 4, 6$.</p><ul data-end=\"304\" data-start=\"165\"><li data-end=\"208\" data-section-id=\"hzkk1h\" data-start=\"165\">For $X=2$, $(2-5)(2-7) &gt; 0$, so it works.<br/> </li><li data-end=\"252\" data-section-id=\"tm0zub\" data-start=\"209\">For $X=4$, $(4-5)(4-7) &gt; 0$, so it works.<br/> </li><li data-end=\"304\" data-section-id=\"kab148\" data-start=\"253\">For $X=6$, $(6-5)(6-7) &lt; 0$, so it does not work.<br/> </li></ul><p data-end=\"401\" data-start=\"306\">Therefore,<br/>$P(X^2 - 12X + 35 &gt; 0) = P(X=2) + P(X=4) = \\frac{1}{4} + \\frac{1}{2} = \\frac{3}{4}$.</p><p data-end=\"450\" data-start=\"403\">So the correct answer is $\\boxed{\\frac{3}{4}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529022/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529022</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"186\" data-start=\"55\">Consider a discrete random variable $X$ with probability mass function: </p><p data-end=\"186\" data-start=\"55\">$$<br/>P(X=x)= \\begin{cases}c2^x, &amp; \\text {for } x=0,1,2,3,4,5 \\\\\\\\ 0, &amp; \\text { otherwise } \\end{cases}<br/>$$</p><p data-end=\"225\" data-start=\"188\">What is the value of $P(X^2-5X+4&lt;0)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1/7$<br/></span>",
                "<span style=\"display: inline;\">$4/21$<br/></span>",
                "<span style=\"display: inline;\">$2/7$<br/></span>",
                "<span style=\"display: inline;\">$5/21$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529021\"></a><div itemprop=\"text\"><p data-end=\"323\" data-start=\"283\">Since the probabilities must add to $1$,</p><p data-end=\"377\" data-start=\"325\">$1=c(2^0+2^1+2^2+2^3+2^4+2^5)=c(1+2+4+8+16+32)=63c$.</p><p data-end=\"391\" data-start=\"379\">So $c=1/63$.</p><p data-end=\"418\" data-start=\"393\">Now solve the inequality:</p><p data-end=\"432\" data-start=\"420\">$X^2-5X+4&lt;0$</p><p data-end=\"449\" data-start=\"434\">$(X-1)(X-4)&lt;0$.</p><p data-end=\"477\" data-start=\"451\">This is true when $1&lt;X&lt;4$.</p><p data-end=\"565\" data-start=\"479\">Since $X$ only takes integer values in ${0,1,2,3,4,5}$, the event is $X=2$ or $X=3$.</p><p data-end=\"577\" data-start=\"567\">Therefore,</p><p data-end=\"608\" data-start=\"579\">$P(X^2-5X+4&lt;0)=P(X=2)+P(X=3)$</p><p data-end=\"690\" data-start=\"610\">$=c2^2+c2^3=\\frac{1}{63}\\cdot 4+\\frac{1}{63}\\cdot 8=\\frac{12}{63}=\\frac{4}{21}$.</p><p data-end=\"769\" data-start=\"692\">So the correct answer is $\\boxed{\\frac{4}{21}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529020/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529020</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"238\" data-start=\"55\">Let $X$, $Y$, and $Z$ be discrete random variables with $P(Z=z)&gt;0$. Which of the following statements is equivalent to saying that $X$ and $Y$ are conditionally independent given $Z$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(X=x,Y=y\\mid Z=z)=P(X=x\\mid Z=z)P(Y=y\\mid Z=z)$ for all $x,y,z$<br/></span>",
                "<span style=\"display: inline;\">$P(X=x\\mid Y=y,Z=z)=P(X=x\\mid Z=z)$ for all $x,y,z$<br/></span>",
                "<span style=\"display: inline;\">$P(Y=y\\mid X=x,Z=z)=P(Y=y\\mid Z=z)$ for all $x,y,z$<br/></span>",
                "<span style=\"display: inline;\">All of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"528955\"></a><div itemprop=\"text\"><p data-end=\"156\" data-start=\"87\">By definition, $X$ and $Y$ are conditionally independent given $Z$ if</p><p data-end=\"248\" data-start=\"158\">$P(X=x, Y=y \\mid Z=z) = P(X=x \\mid Z=z),P(Y=y \\mid Z=z)$ for all $x,y,z$ with $P(Z=z)&gt;0$.</p><p data-end=\"285\" data-start=\"250\">So <strong data-end=\"258\" data-start=\"253\">A</strong> is exactly the definition.</p><p data-end=\"355\" data-start=\"287\"><br/>Now divide both sides of A by $P(Y=y \\mid Z=z)$ when it is positive:</p><p data-end=\"445\" data-start=\"357\">$P(X=x \\mid Y=y, Z=z) = \\frac{P(X=x, Y=y \\mid Z=z)}{P(Y=y \\mid Z=z)} = P(X=x \\mid Z=z)$.</p><p data-end=\"470\" data-start=\"447\">So <strong data-end=\"455\" data-start=\"450\">B</strong> is equivalent.</p><p data-end=\"538\" data-start=\"472\"><br/>Similarly, dividing by $P(X=x \\mid Z=z)$ when it is positive gives</p><p data-end=\"581\" data-start=\"540\">$P(Y=y \\mid X=x, Z=z) = P(Y=y \\mid Z=z)$.</p><p data-end=\"611\" data-start=\"583\">So <strong data-end=\"591\" data-start=\"586\">C</strong> is also equivalent.<br/><br/><br/>Hence all three statements describe conditional independence.</p><p data-end=\"705\" data-start=\"676\">So the answer is <strong>D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528954/go-classes-dpp-gate-da-probability-conditional-independence\" target=\"_blank\">GATE Overflow #528954</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"241\" data-start=\"71\">A biased coin is flipped $8$ times. The probability of getting a head on a single flip is $0.4$. What is the probability of getting at least $6$ heads in these $8$ flips?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.04128768$<br/></span>",
                "<span style=\"display: inline;\">$0.04980736$<br/></span>",
                "<span style=\"display: inline;\">$0.05767168$<br/></span>",
                "<span style=\"display: inline;\">$0.1048576$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528953\"></a><div itemprop=\"text\"><p data-end=\"594\" data-start=\"510\">Let $X$ be the number of heads in $8$ flips. Then $X \\sim \\mathrm{Binomial}(8,0.4)$.</p><p data-end=\"603\" data-start=\"596\">We want</p><p data-end=\"639\" data-start=\"605\">$P(X \\ge 6)=P(X=6)+P(X=7)+P(X=8)$.</p><p data-end=\"668\" data-start=\"641\">Using the binomial formula,</p><p data-end=\"705\" data-start=\"670\">$P(X=6)=\\binom{8}{6}(0.4)^6(0.6)^2$</p><p data-end=\"740\" data-start=\"707\">$P(X=7)=\\binom{8}{7}(0.4)^7(0.6)$</p><p data-end=\"785\" data-start=\"742\">$P(X=8)=\\binom{8}{8}(0.4)^8(0.6)^0=(0.4)^8$</p><p data-end=\"790\" data-start=\"787\">So,</p><p data-end=\"864\" data-start=\"792\">$P(X \\ge 6)=\\binom{8}{6}(0.4)^6(0.6)^2+\\binom{8}{7}(0.4)^7(0.6)+(0.4)^8$</p><p data-end=\"878\" data-start=\"866\">Now compute:</p><p data-end=\"915\" data-start=\"880\">$\\binom{8}{6}=28$, $\\binom{8}{7}=8$</p><p data-end=\"920\" data-start=\"917\">So,</p><p data-end=\"973\" data-start=\"922\">$P(X \\ge 6)=28(0.4)^6(0.6)^2+8(0.4)^7(0.6)+(0.4)^8$</p><p data-end=\"1025\" data-start=\"975\">$=28(0.004096)(0.36)+8(0.0016384)(0.6)+0.00065536$</p><p data-end=\"1062\" data-start=\"1027\">$=0.04128768+0.00786432+0.00065536$</p><p data-end=\"1077\" data-start=\"1064\">$=0.04980736$</p><p data-end=\"1169\" data-start=\"1079\">$\\therefore$ the probability is $\\boxed{0.04980736}$, and the correct choice is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528952/go-classes-dpp-gate-da-probability-binomial-distribution-probability\" target=\"_blank\">GATE Overflow #528952</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 59 - Engineering Mathematics (Random Variables & Probability Distributions - Part 4)",
    "testLabel": "DPP 59",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"302\" data-start=\"71\">A number $X$ is chosen from the set ${1,2,3,4,5,6}$ with probability mass function $P(X=x)=cx$ for $x=1,2,3,4,5,6$. Subsequently, given that $X=x$, a second number $Y$ is chosen uniformly at random from the set ${1,2,\\dots,x}$.</p><p data-end=\"368\" data-start=\"304\">Given this setup, which of the following statements is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(X=6,Y=4)=\\frac{1}{21}$<br/></span>",
                "<span style=\"display: inline;\">$P(Y=4)=\\frac{1}{6}$<br/></span>",
                "<span style=\"display: inline;\">$P(X=6 \\mid Y=4)=\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$P(X=Y)=\\frac{2}{7}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528879\"></a><div itemprop=\"text\"><p data-end=\"611\" data-start=\"498\">First find $c$. Since $\\sum_{x=1}^6 P(X=x)=1$, we get $c(1+2+3+4+5+6)=1$, so $21c=1$, and hence $c=\\frac{1}{21}$.</p><p data-end=\"665\" data-start=\"613\">Now for any pair $(x,y)$ with $1 \\le y \\le x \\le 6$,</p><p data-end=\"738\" data-start=\"667\">$P(X=x,Y=y)=P(X=x)P(Y=y \\mid X=x)=cx \\cdot \\frac{1}{x}=c=\\frac{1}{21}$.</p><p data-end=\"835\" data-start=\"740\">So every valid pair $(x,y)$ with $1 \\le y \\le x \\le 6$ has the same probability $\\frac{1}{21}$.<br/><br/><br/>Now check each statement.</p><ul><li data-end=\"907\" data-start=\"864\"><strong>A:</strong> $P(X=6,Y=4)=\\frac{1}{21}$, so <strong>A is true.</strong><br/> </li><li data-end=\"1008\" data-start=\"909\"><strong>B:</strong> $P(Y=4)=P(4,4)+P(5,4)+P(6,4)=3\\cdot \\frac{1}{21}=\\frac{1}{7}$, not $\\frac{1}{6}$. So <strong>B is false.</strong><br/> </li><li data-end=\"1100\" data-start=\"1010\"><strong>C:</strong> $P(X=6 \\mid Y=4)=\\frac{P(X=6,Y=4)}{P(Y=4)}=\\frac{1/21}{1/7}=\\frac{1}{3}$, so <strong>C is true.</strong><br/> </li><li data-end=\"1188\" data-start=\"1102\"><strong>D:</strong> $P(X=Y)=P(1,1)+P(2,2)+\\cdots+P(6,6)=6\\cdot \\frac{1}{21}=\\frac{2}{7}$, so <strong>D is true.</strong><br/> </li></ul><p data-end=\"1241\" data-start=\"1190\">Therefore, the true statements are <strong>A, C, D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528878/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528878</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"195\" data-start=\"66\">Suppose $Z_1,Z_2,Z_3,Z_4$ are independent and identically distributed Bernoulli random variables with parameter $p=\\frac{2}{3}$. Define the random variable $S$ by $S=Z_2+Z_3+Z_4$ if $Z_1=0$, and $S=1+Z_2Z_3+Z_4$ if $Z_1=1$.</p><p data-end=\"286\" data-start=\"261\">Find $P(Z_1=1 \\mid S=2)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{7}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{3}{4}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528721\"></a><div itemprop=\"text\"><p data-end=\"397\" data-start=\"375\">We use Bayes' theorem:</p><p data-end=\"459\" data-start=\"399\">$P(Z_1=1 \\mid S=2)=\\frac{P(S=2 \\mid Z_1=1)P(Z_1=1)}{P(S=2)}$</p><p data-end=\"526\" data-start=\"461\">First, since $Z_1 \\sim \\text{Bernoulli}\\left(\\frac{2}{3}\\right)$,</p><p data-end=\"577\" data-start=\"528\">$P(Z_1=1)=\\frac{2}{3}$ and $P(Z_1=0)=\\frac{1}{3}$</p><p data-end=\"611\" data-start=\"579\">Now compute $P(S=2 \\mid Z_1=1)$.</p><p data-end=\"662\" data-start=\"613\">If $Z_1=1$, then $S=1+Z_2Z_3+Z_4$, so $S=2$ means</p><p data-end=\"678\" data-start=\"664\">$Z_2Z_3+Z_4=1$</p><p data-end=\"715\" data-start=\"680\">This happens in two disjoint cases:</p><p data-end=\"766\" data-start=\"717\">$Z_4=1$ and $Z_2Z_3=0$, or $Z_4=0$ and $Z_2Z_3=1$</p><p data-end=\"772\" data-start=\"768\">Now,</p><p data-end=\"841\" data-start=\"774\">$P(Z_2Z_3=1)=P(Z_2=1,Z_3=1)=\\left(\\frac{2}{3}\\right)^2=\\frac{4}{9}$</p><p data-end=\"845\" data-start=\"843\">so</p><p data-end=\"886\" data-start=\"847\">$P(Z_2Z_3=0)=1-\\frac{4}{9}=\\frac{5}{9}$</p><p data-end=\"893\" data-start=\"888\">Also,</p><p data-end=\"944\" data-start=\"895\">$P(Z_4=1)=\\frac{2}{3}$ and $P(Z_4=0)=\\frac{1}{3}$</p><p data-end=\"956\" data-start=\"946\">Therefore,</p><p data-end=\"1074\" data-start=\"958\">$P(S=2 \\mid Z_1=1)=\\frac{2}{3}\\cdot\\frac{5}{9}+\\frac{1}{3}\\cdot\\frac{4}{9}=\\frac{10}{27}+\\frac{4}{27}=\\frac{14}{27}$</p><p data-end=\"1109\" data-start=\"1076\">Next compute $P(S=2 \\mid Z_1=0)$.</p><p data-end=\"1206\" data-start=\"1111\">If $Z_1=0$, then $S=Z_2+Z_3+Z_4$, so $S=2$ means exactly two of $Z_2,Z_3,Z_4$ are equal to $1$.</p><p data-end=\"1213\" data-start=\"1208\">Thus,</p><p data-end=\"1343\" data-start=\"1215\">$P(S=2 \\mid Z_1=0)=\\binom{3}{2}\\left(\\frac{2}{3}\\right)^2\\left(\\frac{1}{3}\\right)=3\\cdot\\frac{4}{9}\\cdot\\frac{1}{3}=\\frac{4}{9}$</p><p data-end=\"1382\" data-start=\"1345\">Now use the law of total probability:</p><p data-end=\"1444\" data-start=\"1384\">$P(S=2)=P(S=2 \\mid Z_1=1)P(Z_1=1)+P(S=2 \\mid Z_1=0)P(Z_1=0)$</p><p data-end=\"1554\" data-start=\"1446\">$P(S=2)=\\frac{14}{27}\\cdot\\frac{2}{3}+\\frac{4}{9}\\cdot\\frac{1}{3}=\\frac{28}{81}+\\frac{12}{81}=\\frac{40}{81}$</p><p data-end=\"1559\" data-start=\"1556\">So,</p><p data-end=\"1691\" data-start=\"1561\">$P(Z_1=1 \\mid S=2)=\\frac{\\frac{14}{27}\\cdot\\frac{2}{3}}{\\frac{40}{81}}=\\frac{28}{81}\\cdot\\frac{81}{40}=\\frac{28}{40}=\\frac{7}{10}$<br/><br/>Therefore, the correct answer is <b>C. </b>$\\dfrac{7}{10}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528720/go-classes-dpp-gate-da-probability-bayes-theorem-for-random-variables\" target=\"_blank\">GATE Overflow #528720</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"147\" data-start=\"56\">Consider two Bernoulli random variables $X$ and $Y$, where each can take values $0$ or $1$. Suppose,<br/>$$<br/>\\begin{aligned}</p><p data-end=\"178\" data-start=\"158\">&amp; P(X=1)=\\frac{2}{5} \\\\\\\\</p><p data-end=\"209\" data-start=\"180\">&amp; P(Y=1 \\mid X=1)=\\frac{7}{8} \\\\\\\\</p><p data-end=\"241\" data-start=\"211\">&amp; P(X=1 \\mid Y=1)=\\frac{7}{10}<br/><br/>\\end{aligned}<br/>$$</p><p data-end=\"269\" data-start=\"243\">What is $P(Y=1 \\mid X=0)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{3}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528712\"></a><div itemprop=\"text\"><p data-end=\"360\" data-start=\"357\">Let</p><p data-end=\"383\" data-start=\"362\">$p = P(Y=1 \\mid X=0)$</p><p data-end=\"412\" data-start=\"385\">First compute $P(X=1,Y=1)$:</p><p data-end=\"489\" data-start=\"414\">$P(X=1,Y=1)=P(Y=1 \\mid X=1)P(X=1)=\\frac{7}{8}\\cdot\\frac{2}{5}=\\frac{7}{20}$</p><p data-end=\"498\" data-start=\"491\">Now use</p><p data-end=\"543\" data-start=\"500\">$P(X=1 \\mid Y=1)=\\frac{P(X=1,Y=1)}{P(Y=1)}$<br/><br/>So, $\\dfrac{7}{10}=\\dfrac{7/20}{P(Y=1)}$<br/><br/>Hence, $P(Y=1)=\\frac{1}{2}$<br/><br/>Now apply total probability:</p><p data-end=\"696\" data-start=\"644\">$P(Y=1)=P(Y=1 \\mid X=1)P(X=1)+P(Y=1 \\mid X=0)P(X=0)$</p><p data-end=\"757\" data-start=\"698\">$\\Rightarrow \\frac{1}{2}=\\frac{7}{8}\\cdot\\frac{2}{5}+p\\cdot\\frac{3}{5}$</p><p data-end=\"798\" data-start=\"759\">$\\Rightarrow \\frac{1}{2}=\\frac{7}{20}+\\frac{3}{5}p$</p><p data-end=\"839\" data-start=\"800\">$\\Rightarrow \\frac{1}{2}-\\frac{7}{20}=\\frac{3}{5}p$</p><p data-end=\"868\" data-start=\"841\">$\\Rightarrow \\frac{3}{20}=\\frac{3}{5}p$</p><p data-end=\"885\" data-start=\"870\">$\\Rightarrow p=\\frac{1}{4}$<br/><br/>$\\therefore P(Y=1 \\mid X=0)=\\frac{1}{4}$<br/><br/>So the correct answer is <strong data-end=\"975\" data-start=\"955\">B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528711/go-classes-dpp-gate-da-probability-law-of-total-probability\" target=\"_blank\">GATE Overflow #528711</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"213\" data-start=\"57\">Let $X \\in {0,1}$ and $Y \\in {0,1}$ be two independent binary random variables. If $P(X=1)=p$ and $P(Y=1)=q$, then $P(X+Y=1 \\mid X+Y \\ge 1)$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{p+q-2pq}{p+q-pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{pq}{p+q-pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{p+q-pq}{p+q-2pq}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{p+q-2pq}{1-pq}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528598\"></a><div itemprop=\"text\"><p data-end=\"365\" data-start=\"334\">We use conditional probability:</p><p data-end=\"422\" data-start=\"367\">$P(X+Y=1 \\mid X+Y \\ge 1)=\\frac{P(X+Y=1)}{P(X+Y \\ge 1)}$</p><p data-end=\"486\" data-start=\"424\">since the event $X+Y=1$ is contained in the event $X+Y \\ge 1$.</p><p data-end=\"492\" data-start=\"488\">Now,</p><p data-end=\"526\" data-start=\"494\">$P(X+Y=1)=P(X=1,Y=0)+P(X=0,Y=1)$</p><p data-end=\"564\" data-start=\"528\">Because $X$ and $Y$ are independent,</p><p data-end=\"585\" data-start=\"566\">$P(X=1,Y=0)=p(1-q)$</p><p data-end=\"590\" data-start=\"587\">and</p><p data-end=\"611\" data-start=\"592\">$P(X=0,Y=1)=(1-p)q$</p><p data-end=\"616\" data-start=\"613\">So,</p><p data-end=\"650\" data-start=\"618\">$P(X+Y=1)=p(1-q)+(1-p)q=p+q-2pq$</p><p data-end=\"657\" data-start=\"652\">Next,</p><p data-end=\"686\" data-start=\"659\">$P(X+Y \\ge 1)=1-P(X=0,Y=0)$</p><p data-end=\"710\" data-start=\"688\">Again by independence,</p><p data-end=\"735\" data-start=\"712\">$P(X=0,Y=0)=(1-p)(1-q)$</p><p data-end=\"743\" data-start=\"737\">Hence,</p><p data-end=\"779\" data-start=\"745\">$P(X+Y \\ge 1)=1-(1-p)(1-q)=p+q-pq$</p><p data-end=\"791\" data-start=\"781\">Therefore,</p><p data-end=\"841\" data-start=\"793\">$P(X+Y=1 \\mid X+Y \\ge 1)=\\dfrac{p+q-2pq}{p+q-pq}$</p><p data-end=\"896\" data-start=\"843\">So the correct answer is <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528597/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #528597</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"218\" data-start=\"61\">Let $X$ be a random variable that takes values $-1$, $0$, and $2$, with $P(X=-1)=p$, $P(X=0)=2p$, and $P(X=2)=1-3p$. If $E[X]=\\frac{1}{2}$, what is $E[X^2]$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{19}{14}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{23}{14}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{25}{14}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{27}{14}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528596\"></a><div itemprop=\"text\"><p data-end=\"349\" data-start=\"314\">We use the given expectation first:</p><p data-end=\"377\" data-start=\"351\">$E[X]=(-1)p+0(2p)+2(1-3p)$</p><p data-end=\"382\" data-start=\"379\">So,</p><p data-end=\"405\" data-start=\"384\">$-p+2-6p=\\frac{1}{2}$</p><p data-end=\"425\" data-start=\"407\">$2-7p=\\frac{1}{2}$</p><p data-end=\"443\" data-start=\"427\">$7p=\\frac{3}{2}$</p><p data-end=\"461\" data-start=\"445\">$p=\\frac{3}{14}$</p><p data-end=\"484\" data-start=\"463\">Now compute $E[X^2]$:</p><p data-end=\"520\" data-start=\"486\">$E[X^2]=(-1)^2p+0^2(2p)+2^2(1-3p)$</p><p data-end=\"534\" data-start=\"522\">$=p+4(1-3p)$</p><p data-end=\"546\" data-start=\"536\">$=p+4-12p$</p><p data-end=\"556\" data-start=\"548\">$=4-11p$</p><p data-end=\"586\" data-start=\"558\">Substitute $p=\\frac{3}{14}$:</p><p data-end=\"626\" data-start=\"588\">$E[X^2]=4-11\\left(\\frac{3}{14}\\right)$</p><p data-end=\"646\" data-start=\"628\">$=4-\\frac{33}{14}$</p><p data-end=\"678\" data-start=\"648\">$=\\frac{56}{14}-\\frac{33}{14}$</p><p data-end=\"696\" data-start=\"680\">$=\\frac{23}{14}$</p><p data-end=\"750\" data-start=\"698\">Therefore, the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528595/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #528595</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $x$ be a random variable possessing the probability density function<br/>$$<br/>f(x)= \\begin{cases}c x &amp; , x \\in[0,10] \\\\\\\\ 0 &amp; , \\text { otherwise }\\end{cases}<br/>$$<br/>where $c \\in \\mathbb{R}$. The probability that $x \\in[1,2]$ is ______.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{100}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{3}{100}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{100}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{7}{100}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528407\"></a><div itemprop=\"text\"><p>To find the probability, we first determine the value of $c$ using the fact that the total probability must be $1$.</p><p>Since $f(x)=cx$ for $x\\in[0,10]$, we have</p><p>$\\int_0^{10} cx\\,dx = 1$.</p><p>So</p><p>$c\\int_0^{10} x\\,dx = 1$,</p><p>$c\\left[\\frac{x^2}{2}\\right]_0^{10} = 1$,</p><p>$c\\left(\\frac{100}{2}\\right)=1$,</p><p>$50c=1$,</p><p>$c=\\frac{1}{50}$.</p><p>Now find $P(1\\le x\\le 2)$:</p><p>$P(1\\le x\\le 2)=\\int_1^2 f(x)\\,dx=\\int_1^2 cx\\,dx$.</p><p>Substitute $c=\\frac{1}{50}$:</p><p>$P(1\\le x\\le 2)=\\int_1^2 \\frac{x}{50}\\,dx=\\frac{1}{50}\\int_1^2 x\\,dx$.</p><p>So</p><p>$P(1\\le x\\le 2)=\\frac{1}{50}\\left[\\frac{x^2}{2}\\right]_1^2$,</p><p>$P(1\\le x\\le 2)=\\frac{1}{50}\\left(\\frac{4}{2}-\\frac{1}{2}\\right)$,</p><p>$P(1\\le x\\le 2)=\\frac{1}{50}\\cdot\\frac{3}{2}=\\frac{3}{100}$.</p><p>Therefore, the probability that $x\\in[1,2]$ is $\\boxed{\\frac{3}{100}}$.</p><p>So the correct answer is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528406/go-classes-dpp-gate-da-probability-probability-density-function\" target=\"_blank\">GATE Overflow #528406</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Deepak Poonia Sir is playing a game that involves repeatedly rolling a fair standard $6$-sided die. What is the expected number of rolls until he gets a $5$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$1/6$<br/></span>",
                "<span style=\"display: inline;\">$7/2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528405\"></a><div itemprop=\"text\"><p> </p><p style=\"text-align:center\"><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=11246520742289405223\" style=\"max-width: 100%;\" width=\"358\"/></p><p><br/><br/>By the reasoning above, we can express $E[X]$ in a recursive fashion and solve for it.<br/><br/>$$<br/>\\begin{aligned}<br/>E[X] &amp; =\\frac{1}{6} \\cdot 1+\\frac{5}{6}(E[X]+1) \\\\\\\\<br/>&amp;=\\frac{1}{6}+\\frac{5}{6}+\\frac{5}{6} E[X] \\\\\\\\<br/>\\Rightarrow \\frac{1}{6} E[X] &amp; =1 \\\\\\\\<br/>E[X] &amp; =6<br/>\\end{aligned}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528404/go-classes-dpp-gate-da-probability-geometric-distribution\" target=\"_blank\">GATE Overflow #528404</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $X$ be a random variable that takes values from $0$ to $9$ with equal probability $\\frac{1}{10}$. Define the random variable $Y=X \\bmod 3$. Calculate $P(Y=0)+P(Y=1)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{3}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{5}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{7}{10}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528403\"></a><div itemprop=\"text\"><p>Given:</p><ul><li>$X$ takes values from 0 to 9 with equal probability $\\frac{1}{10}$.<br/> </li><li>$Y=X \\bmod 3$.<br/> </li></ul><p>Calculate $P(Y=0)+P(Y=1)$.<br/><br/>Step $1: P(Y=0)$<br/>$$<br/>\\begin{gathered}<br/>P(Y=0)=P(X=0)+P(X=3)+P(X=6)+P(X=9) \\\\\\\\<br/>P(Y=0)=\\frac{1}{10}+\\frac{1}{10}+\\frac{1}{10}+\\frac{1}{10}=\\frac{4}{10}<br/>\\end{gathered}<br/>$$<br/>Step $2: P(Y=1)$<br/>$$<br/>\\begin{gathered}<br/>P(Y=1)=P(X=1)+P(X=4)+P(X=7) \\\\\\\\<br/>P(Y=1)=\\frac{1}{10}+\\frac{1}{10}+\\frac{1}{10}=\\frac{3}{10}<br/>\\end{gathered}<br/>$$<br/>Step $3: P(Y=0)+P(Y=1)$<br/>$$<br/>P(Y=0)+P(Y=1)=\\frac{4}{10}+\\frac{3}{10}=\\frac{7}{10}<br/>$$<br/>Thus, the correct answer is $\\dfrac{7}{10}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528402/go-classes-dpp-gate-da-probability-random-variable\" target=\"_blank\">GATE Overflow #528402</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $X$ is the number of dust storms that occur on Mars next year. Assume that $X$ is a discrete uniform random variable that takes one of the $101$ values in the range $\\{0,1,2, \\ldots, 100\\}$ . Let $Y=|X-E(X)|$. Find $E(Y)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1275}{101}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{50}{101}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{100}{101}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2550}{101}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"528394\"></a><div itemprop=\"text\">We have $E(X)=\\frac{0+100}{2}=50$.<br/> <br/> So $Y=|X-50|$.<br/> <br/> Then $E(Y)=\\frac{1}{101}\\sum_{x=0}^{100}|x-50|$.<br/> <br/> The values of $|x-50|$ are $0,1,1,2,2,\\dots,50,50$.<br/> <br/> Thus $\\sum_{x=0}^{100}|x-50|=2(1+2+\\cdots+50)=2\\left(\\frac{50\\cdot 51}{2}\\right)=2550$.<br/> <br/> Therefore $E(Y)=\\frac{2550}{101}$.<br/> <br/> So the correct answer is $\\boxed{\\frac{2550}{101}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528393/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #528393</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $n$ balls are randomly distributed into $K$ compartments. Each compartment can contain any number of balls from $0$ to $n$. Assuming that all $K^n$ arrangements are equally likely, what is the probability that the first compartment contains exactly $m$ balls?</p><div></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{\\binom{n}{m}(K-1)^{\\,n-m}}{K^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{n}{m}K^{\\,n-m}}{(K-1)^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{\\binom{n}{m}}{K^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{(K-1)^m}{K^n}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528092\"></a><div itemprop=\"text\">Since each of the $n$ balls can go into any one of the $K$ compartments,<br/> <br/> $\\Rightarrow$The total number of possible arrangements is $K^n$.<br/> <br/> We want the first compartment to contain exactly $m$ balls.<br/> <br/> First, choose which $m$ of the $n$ balls go into the first compartment.<br/> <br/> This can be done in $\\binom{n}{m}$ ways.<br/> <br/> Now, each of the remaining $n-m$ balls can go into any of the other $K-1$ compartments.<br/> <br/> Hence, the number of favorable arrangements is $\\binom{n}{m}(K-1)^{\\,n-m}$.<br/> <br/> Therefore, the required probability is<br/> <br/> $P(\\text{first compartment has exactly }m\\text{ balls}) =\\dfrac{\\binom{n}{m}(K-1)^{\\,n-m}}{K^n}$.<br/> <br/> Thus, the probability that the first compartment contains exactly $m$ balls is<br/> <br/> $\\boxed{\\dfrac{\\binom{n}{m}(K-1)^{\\,n-m}}{K^n}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528090/go-classes-dpp-gate-da-probability-binomial-distribution\" target=\"_blank\">GATE Overflow #528090</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 60 - Engineering Mathematics (Random Variables & Probability Distributions - Part 5)",
    "testLabel": "DPP 60",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A biased coin is flipped six times, and the probability of getting a head on a single flip is $0.3$. What is the probability of getting exactly $4$ heads in these $6$ flips?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$ \\frac{15}{28} $<br/></span>",
                "<span style=\"display: inline;\">$ \\binom{6}{4} $<br/></span>",
                "<span style=\"display: inline;\">$ 0.0595 $<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527424\"></a><div itemprop=\"text\"><p>The probability of getting exactly $ k $ successes (heads) in $ n $ trials (flips), when the probability of success on a single trial is $ p $, is given by:<br/>$$<br/>P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}<br/>$$<br/>Where:</p><ul><li>$ n = 6 $ (the number of flips)</li><li>$ k = 4 $ (the number of heads)</li><li>$ p = 0.3 $ (the probability of getting heads)</li><li>$ 1 - p = 0.7 $ (the probability of getting tails)</li></ul><p>We need to find the probability of getting exactly 4 heads ($ k = 4 $) in 6 flips ($ n = 6 $):<br/>$$<br/>P(X = 4) = \\binom{6}{4} (0.3)^4 (0.7)^{6-4}<br/>$$<br/>The binomial coefficient $ \\binom{6}{4} $ can be calculated as:<br/>$$<br/>\\binom{6}{4} = \\binom{6}{2} = \\frac{6!}{2! \\, (6-2)!} = \\frac{6 \\times 5}{2 \\times 1} = 15<br/>$$<br/>$$<br/>P(X = 4) = 15 \\times (0.3)^4 \\times (0.7)^2<br/>$$<br/>$$<br/>P(X = 4) = 15 \\times 0.0081 \\times 0.49<br/>$$<br/>$$<br/>P(X = 4) = 15 \\times 0.003969 = 0.059535<br/>$$<br/>The probability of getting exactly 4 heads in 6 flips is approximately:<br/>$$<br/>P(X = 4) \\approx 0.0595<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527423/go-classes-dpp-gate-da-probability-binomial-probability\" target=\"_blank\">GATE Overflow #527423</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A die is rolled three times. The probability that exactly one odd number turns up among the three outcomes is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{6}$ <br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{3}{8}$ <br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{8}$ <br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{2}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527349\"></a><div itemprop=\"text\"><p>The probability of getting an odd number on one roll is</p><p>$\\dfrac{3}{6}=\\dfrac{1}{2}$</p><p>and the probability of getting an even number on one roll is</p><p>$\\dfrac{1}{2}$</p><p>We want exactly one odd number in three rolls.</p><p>Number of ways to choose which one of the three rolls is odd is</p><p>$\\binom{3}{1}=3$</p><p>So,</p><p>$P(\\text{exactly one odd})=\\binom{3}{1}\\left(\\dfrac{1}{2}\\right)^1\\left(\\dfrac{1}{2}\\right)^2$</p><p>$=3\\left(\\dfrac{1}{2}\\right)^3=\\dfrac{3}{8}$</p><p>Therefore, the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527348/go-classes-dpp-gate-da-probability-binomial-probability\" target=\"_blank\">GATE Overflow #527348</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For each element in a set of size $2n$, an unbiased coin is tossed. The $2n$ coin tosses are independent. An element is chosen if the corresponding coin toss was a head. The probability that exactly $n$ elements are chosen is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{^{2n}\\mathrm{C}_n}{4^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{^{2n}\\mathrm{C}_n}{2^n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{^{2n}\\mathrm{C}_n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527233\"></a><div itemprop=\"text\"><p>There are $2n$ independent coin tosses.<br/><br/>Each element is chosen if the corresponding toss shows head.<br/><br/>So, the number of chosen elements follows a binomial distribution with<br/><br/>$n(\\text{trials})=2n$ and $p=\\dfrac{1}{2}$.<br/><br/>We want the probability that exactly $n$ elements are chosen.<br/><br/>Number of ways to choose exactly $n$ heads out of $2n$ tosses is ${}^{2n}C_n$<br/><br/>Probability of any particular outcome of $2n$ tosses is<br/><br/>$\\left(\\dfrac{1}{2}\\right)^{2n}=\\dfrac{1}{4^n}$<br/><br/>Hence,<br/><br/>$P(\\text{exactly } n \\text{ elements are chosen})={}^{2n}C_n\\left(\\dfrac{1}{2}\\right)^{2n}$<br/><br/>$=\\dfrac{{}^{2n}C_n}{4^n}$<br/><br/>Therefore, the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527232/go-classes-dpp-gate-da-probability-binomial-probability\" target=\"_blank\">GATE Overflow #527232</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let a random variable $X$ take values $0,1,2,3$ with $P(X=0)=P(X=1)=p, P(X=2)=P(X=3)$ and $E\\left(X^2\\right)=2 E(X)$. Then the value of $8 p-1$ is :</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"474738\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; 2 p+2 q=\\frac{1}{2} \\\\<br/> &amp; p+q \\\\<br/> &amp; E\\left(x^2\\right)=\\sum_{i=0}^3 x_i^2 p\\left(x_i\\right)=0 \\cdot p+1 \\cdot p+4 \\cdot q+9 q \\\\<br/> &amp; =p+13 q \\\\<br/> &amp; E(x)=\\sum_{i=0}^3 x_i^2 p\\left(x_i\\right)=0 \\cdot p+1 \\cdot p+2 q+3 q=p+5 q \\\\<br/> &amp; p+13 q=2(p+5 q) \\\\<br/> &amp; p=3 q \\\\<br/> &amp; \\text { So, } q=\\frac{1}{8} \\&amp; p=\\frac{3}{8}<br/> \\end{aligned}<br/> $$<br/> <br/> So, $8 p-1=2 \\quad$ Option (2)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/474737/go-classes-dpp-engineering-mathematics-probability-jee-mains\" target=\"_blank\">GATE Overflow #474737</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let a random variable $X$ follow Poisson distribution such that<br/> <br/> $$<br/> \\operatorname{Prob}(X=1)=\\operatorname{Prob}(X=2) .<br/> $$<br/> <br/> The value of $\\operatorname{Prob}(X=3)$ is______________ (round off to 2 decimal places).</div></span>",
            "image": "",
            "options": [],
            "answer": "0.18",
            "solution": "<div class=\"solution-content\"><a name=\"474734\"></a><div itemprop=\"text\">$\\begin{aligned} P(x=1) &amp; =P(x=2) \\\\ \\frac{e^{-\\lambda} \\lambda}{1!} &amp; =\\frac{e^{-\\lambda} \\lambda^2}{2!} \\\\ \\therefore \\lambda &amp; =2 \\\\ P(x=3) &amp; =\\frac{e^{-2} 2^3}{3!}=0.18\\end{aligned}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/474733/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #474733</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 61 - Engineering Mathematics (Expectation, Variance & Moments - Part 1)",
    "testLabel": "DPP 61",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"393\" data-start=\"117\">A machine produces a random score $T$ between $0$ and $2$ with probability density function </p><p data-end=\"393\" data-start=\"117\">$$<br/>f(t)= \\begin{cases}\\frac{3t^2}{8}, &amp; \\text { if } 0&lt;t&lt;2 \\\\\\\\ 0, &amp; \\text { otherwise }\\end{cases}<br/>$$</p><p data-end=\"393\" data-start=\"117\">A player’s reward is $T$ dollars if $0&lt;T&lt;1$, but the reward is $2-T$ dollars if $1\\le T&lt;2$. Find the expected reward.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7/16$<br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$5/16$<br/></span>",
                "<span style=\"display: inline;\">$3/8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530797\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Let the reward function be $R(T)$.</p><p data-path-to-node=\"1\">The reward depends on the value of the random score $T$:</p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">$R(T) = T$ if $0 &lt; T &lt; 1$</p></li><li><p data-path-to-node=\"2,1,0\">$R(T) = 2 - T$ if $1 \\le T &lt; 2$</p></li></ul><p data-path-to-node=\"3\">The probability density function (PDF) for $T$ is given as:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\">$f(t) = \\frac{3t^2}{8}$ for $0 &lt; t &lt; 2$</p></li></ul><p data-path-to-node=\"5\">To find the expected reward, $E[R(T)]$, we use the formula for the expected value of a function of a continuous random variable:</p><p>$$E[R(T)] = \\int_{-\\infty}^{\\infty} R(t) f(t) \\, dt$$</p><p data-path-to-node=\"7\">Since the reward function is defined differently on two intervals within the range of $T$, we split the integral into two parts:</p><p>$$E[R(T)] = \\int_{0}^{1} (t) \\left(\\frac{3t^2}{8}\\right) \\, dt + \\int_{1}^{2} (2 - t) \\left(\\frac{3t^2}{8}\\right) \\, dt$$</p><p>Now, let's solve each integral separately.</p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">1. Solve the first integral (from $0$ to $1$):</b></p><p>$$\\int_{0}^{1} \\frac{3t^3}{8} \\, dt = \\left[ \\frac{3t^4}{32} \\right]_{0}^{1}$$</p><p>$$= \\left( \\frac{3(1)^4}{32} \\right) - (0) = \\frac{3}{32}$$</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">2. Solve the second integral (from $1$ to $2$):</b></p><p>$$\\int_{1}^{2} (2 - t) \\left(\\frac{3t^2}{8}\\right) \\, dt = \\int_{1}^{2} \\left( \\frac{6t^2}{8} - \\frac{3t^3}{8} \\right) \\, dt = \\int_{1}^{2} \\left( \\frac{3t^2}{4} - \\frac{3t^3}{8} \\right) \\, dt$$</p><p data-path-to-node=\"15\">Now, find the antiderivative:</p><p>$$= \\left[ \\frac{3t^3}{12} - \\frac{3t^4}{32} \\right]_{1}^{2} = \\left[ \\frac{t^3}{4} - \\frac{3t^4}{32} \\right]_{1}^{2}$$</p><p data-path-to-node=\"17\">Evaluate at the upper bound ($t = 2$):</p><p>$$\\frac{2^3}{4} - \\frac{3(2^4)}{32} = \\frac{8}{4} - \\frac{3(16)}{32} = 2 - \\frac{48}{32} = 2 - \\frac{3}{2} = \\frac{1}{2} = \\frac{16}{32}$$</p><p data-path-to-node=\"19\">Evaluate at the lower bound ($t = 1$):</p><p>$$\\frac{1^3}{4} - \\frac{3(1^4)}{32} = \\frac{1}{4} - \\frac{3}{32} = \\frac{8}{32} - \\frac{3}{32} = \\frac{5}{32}$$</p><p data-path-to-node=\"21\">Subtract the lower bound result from the upper bound result:</p><p>$$= \\frac{16}{32} - \\frac{5}{32} = \\frac{11}{32}$$</p><p data-path-to-node=\"23\"><b data-index-in-node=\"0\" data-path-to-node=\"23\">3. Add the two parts together:</b></p><p>$$E[R(T)] = \\frac{3}{32} + \\frac{11}{32} = \\frac{14}{32}$$</p><p data-path-to-node=\"25\">$$\\boxed{E[R(T)] = \\frac{7}{16}}$$</p><p data-path-to-node=\"27\">The expected reward is <b data-index-in-node=\"23\" data-path-to-node=\"27\">$\\mathbf{7/16}$</b>, which corresponds to option <b data-index-in-node=\"57\" data-path-to-node=\"27\">A</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530796/go-classes-dpp-gate-cs-da-probability-%26-statistics-expected-value-with-density\" target=\"_blank\">GATE Overflow #530796</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"233\" data-start=\"0\">Let $X$ be a continuous random variable on $[0,1]$ with probability density function $f(x)=3x^2$ for $0\\le x\\le 1$ and $0$ otherwise. Let $Y=\\log_e(1+X^3)$. Find the expected value of $Y$, rounded to $2$ decimal places</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0.39",
            "solution": "<div class=\"solution-content\"><a name=\"530794\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the expected value of $Y$, we use the definition of the expected value for a continuous random variable:</p><p>$$E[Y] = \\int_{-\\infty}^{\\infty} y(x) f(x) dx$$</p><p data-path-to-node=\"2\">Given $Y = \\log_e(1+X^3) = \\ln(1+X^3)$ and $f(x) = 3x^2$ for $0 \\le x \\le 1$, we can set up the integral as follows:</p><p>$$E[Y] = \\int_{0}^{1} \\ln(1+x^3) (3x^2) dx$$</p><p data-path-to-node=\"4\">To solve this integral, we can use $u$-substitution. Let:</p><p>$$u = 1 + x^3$$</p><p data-path-to-node=\"6\">Then, the derivative $du$ is:</p><p>$$du = 3x^2 dx$$</p><p data-path-to-node=\"8\">Next, we need to change the limits of integration to match our new variable $u$:</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">When $x = 0$, $u = 1 + 0^3 = 1$</p></li><li><p data-path-to-node=\"9,1,0\">When $x = 1$, $u = 1 + 1^3 = 2$</p></li></ul><p data-path-to-node=\"10\">Now, substitute these into the integral:</p><p>$$E[Y] = \\int_{1}^{2} \\ln(u) du$$</p><p data-path-to-node=\"12\">The antiderivative of $\\ln(u)$ is a standard known result (found using integration by parts):</p><p>$$\\int \\ln(u) du = u \\ln(u) - u$$</p><p data-path-to-node=\"14\">Now, evaluate this from $1$ to $2$:</p><p>$$E[Y] = [u \\ln(u) - u]_{1}^{2}$$</p><p>$$E[Y] = (2 \\ln(2) - 2) - (1 \\ln(1) - 1)$$</p><p data-path-to-node=\"17\">Since $\\ln(1) = 0$, this simplifies to:</p><p>$$E[Y] = 2 \\ln(2) - 2 - (0 - 1)$$</p><p>$$E[Y] = 2 \\ln(2) - 2 + 1$$</p><p>$$E[Y] = 2 \\ln(2) - 1$$</p><p data-path-to-node=\"21\">Now, we calculate the numerical value:</p><ul data-path-to-node=\"22\"><li><p data-path-to-node=\"22,0,0\">$\\ln(2) \\approx 0.693147$</p></li><li><p data-path-to-node=\"22,1,0\">$2 \\ln(2) \\approx 1.386294$</p></li></ul><p>$$E[Y] \\approx 1.386294 - 1 = 0.386294 \\approx \\boxed{\\mathbf{0.39}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530790/go-classes-dpp-gate-cs-da-probability-%26-statistics-expected-value-transformation\" target=\"_blank\">GATE Overflow #530790</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"237\" data-start=\"0\">A game is played with a weighted coin that lands heads with probability $3/5$ and tails with probability $2/5$. The game has normal rounds and bonus rounds. The first round is normal. In each round, you flip the coin twice.</p><p data-end=\"433\" data-start=\"239\">In a normal round, if you get $HH$, you win $6$ dollars and the next round is a bonus round. If you get $HT$ or $TH$, you win $1$ dollar and the next round is normal. If you get $TT$, the game ends.</p><p data-end=\"637\" data-start=\"435\">In a bonus round, all winnings are doubled. So $HH$ gives $12$ dollars and the next round is a bonus round, while $HT$ or $TH$ gives $2$ dollars and the next round is normal. If you get $TT$, the game ends.</p><p data-end=\"672\" data-start=\"639\">Find the expected total winnings.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$21$<br/></span>",
                "<span style=\"display: inline;\">$561/25$<br/></span>",
                "<span style=\"display: inline;\">$627/25$<br/></span>",
                "<span style=\"display: inline;\">$24$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530720\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\"><strong>Calculating Outcome Probabilities :</strong></p><p data-path-to-node=\"2\">First, let's find the probability of each outcome in a single round (flipping the coin twice). The coin lands heads ($H$) with probability $\\frac{3}{5}$ and tails ($T$) with probability $\\frac{2}{5}$.</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,0,0\">Probability of HH:</b></p><p>$$P(HH) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$$</p></li><li><p data-path-to-node=\"3,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,1,0\">Probability of HT or TH:</b></p><p>$$P(HT \\text{ or } TH) = \\left(\\frac{3}{5} \\times \\frac{2}{5}\\right) + \\left(\\frac{2}{5} \\times \\frac{3}{5}\\right) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}$$</p></li><li><p data-path-to-node=\"3,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,2,0\">Probability of TT:</b></p><p>$$P(TT) = \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}$$</p></li></ul><p data-path-to-node=\"4\"><i data-index-in-node=\"0\" data-path-to-node=\"4\">(Note: The probabilities sum to $\\frac{9}{25} + \\frac{12}{25} + \\frac{4}{25} = \\frac{25}{25} = 1$, which is correct).</i></p><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"6\"><strong>Setting Up the Expected Value Equations : </strong></p><p data-path-to-node=\"6\">Let $E_N$ be your expected total winnings from this point forward if you are starting a <b data-index-in-node=\"86\" data-path-to-node=\"6\">Normal</b> round.</p><p data-path-to-node=\"6\">Let $E_B$ be your expected total winnings from this point forward if you are starting a <b data-index-in-node=\"186\" data-path-to-node=\"6\">Bonus</b> round.</p><p data-path-to-node=\"7\">Since the game begins with a Normal round, the final answer we are looking for is $E_N$.</p><p style=\"text-align:center\"><img alt=\"\" src=\"https://cdn.mathpix.com/snip/images/QT4RoARt_Q_qeVniC4unUg1Jj9i17o-wRiX_RoLLy0E.original.fullsize.png\" style=\"max-width: 100%;\" width=\"464\"/></p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Equation for Normal Round ($E_N$):</b></p><p data-path-to-node=\"8\">Using the rules for the normal round and the probabilities calculated above, the expected value is the sum of (Probability $\\times$ Total Payoff from that branch):</p><p>$$E_N = P(HH) \\cdot (6 + E_B) + P(HT \\text{ or } TH) \\cdot (1 + E_N) + P(TT) \\cdot (0)$$</p><p>$$E_N = \\frac{9}{25}(6 + E_B) + \\frac{12}{25}(1 + E_N)$$</p><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">Equation for Bonus Round ($E_B$):</b></p><p data-path-to-node=\"11\">Similarly, set up the equation for the bonus round:</p><p>$$E_B = P(HH) \\cdot (12 + E_B) + P(HT \\text{ or } TH) \\cdot (2 + E_N) + P(TT) \\cdot (0)$$</p><p>$$E_B = \\frac{9}{25}(12 + E_B) + \\frac{12}{25}(2 + E_N)$$</p><p data-path-to-node=\"14\"> </p><p data-path-to-node=\"14\"><b data-index-in-node=\"0\" data-path-to-node=\"14\">Solving the System of Equations :</b></p><p data-path-to-node=\"15\">Let's simplify the $E_N$ equation first by multiplying everything by $25$ to remove the fractions:</p><p>$$\\Rightarrow 25 E_N = 9(6 + E_B) + 12(1 + E_N)$$</p><p>$$\\Rightarrow 25 E_N = 54 + 9 E_B + 12 + 12 E_N$$</p><p>$$\\Rightarrow 9 E_B = 13 E_N - 66$$</p><p>$$\\Rightarrow E_B = \\frac{13 E_N - 66}{9}$$</p><p data-path-to-node=\"23\"><b data-index-in-node=\"2\" data-path-to-node=\"23\">(Equation A)</b></p><p data-path-to-node=\"24\">Now, let's simplify the $E_B$ equation by multiplying by $25$:</p><p>$$\\Rightarrow 25 E_B = 9(12 + E_B) + 12(2 + E_N)$$</p><p>$$\\Rightarrow 16 E_B = 132 + 12 E_N$$</p><p data-path-to-node=\"28\">$$\\Rightarrow 4 E_B = 33 + 3 E_N$$</p><p data-path-to-node=\"30\"><b data-index-in-node=\"2\" data-path-to-node=\"30\">(Equation B)</b></p><p data-path-to-node=\"31\">Now, substitute <b data-index-in-node=\"16\" data-path-to-node=\"31\">Equation A</b> into <b data-index-in-node=\"32\" data-path-to-node=\"31\">Equation B</b>:</p><p>$$\\Rightarrow 4 \\left( \\frac{13 E_N - 66}{9} \\right) = 33 + 3 E_N$$</p><p data-path-to-node=\"33\">$$\\Rightarrow 4 (13 E_N - 66) = 9 (33 + 3 E_N)$$</p><p>$$\\Rightarrow 52 E_N - 264 = 297 + 27 E_N$$</p><p data-path-to-node=\"36\">Solve for $E_N$:</p><p>$$\\Rightarrow 52 E_N - 27 E_N = 297 + 264$$</p><p>$$\\Rightarrow 25 E_N = 561$$</p><p>$$\\boxed{\\therefore E_N = \\frac{561}{25}}$$</p><p data-path-to-node=\"40\">The expected total winnings for the game are $\\frac{561}{25}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530715/go-classes-dpp-gate-cs-da-probability-%26-statistics-recursive-expected-value\" target=\"_blank\">GATE Overflow #530715</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"443\" data-start=\"320\">Let $X_1,X_2,X_3$ be independent Bernoulli random variables with parameter $p$. Find $E[X_1^2X_2(2X_1+X_3)]$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2p^2+p^3$<br/></span>",
                "<span style=\"display: inline;\">$3p^3$<br/></span>",
                "<span style=\"display: inline;\">$2p^3+p^2$<br/></span>",
                "<span style=\"display: inline;\">$p^2+p^3$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"530713\"></a><div itemprop=\"text\"><p>First, distribute the terms inside the expected value operator $E[\\cdot]$:</p><p>$$\\Rightarrow X_1^2 X_2 (2X_1 + X_3) = 2X_1^3 X_2 + X_1^2 X_2 X_3$$</p><p data-path-to-node=\"4\">So, we want to find:</p><p>$$\\Rightarrow E[2X_1^3 X_2 + X_1^2 X_2 X_3]$$</p><p data-path-to-node=\"6\">As the expectation of a sum is the sum of the expectations, so applying Linearity of Expectation:</p><p>$$\\Rightarrow 2E[X_1^3 X_2] + E[X_1^2 X_2 X_3]$$</p><p>Now, Since $X_1$ is a Bernoulli random variable, it only takes the values $0$ or $1$.</p><p data-path-to-node=\"8\">Because $0^k = 0$ and $1^k = 1$ for any positive integer $k$, we know that $X_1^k = X_1$.</p><p data-path-to-node=\"8\">Therefore, $X_1^3 = X_1$ and $X_1^2 = X_1$.</p><p data-path-to-node=\"9\">Substitute this back into our expression:</p><p>$$\\Rightarrow 2E[X_1 X_2] + E[X_1 X_2 X_3]$$</p><p data-path-to-node=\"11\">The problem states that $X_1, X_2,$ and $X_3$ are independent. For independent random variables, the expectation of their product is the product of their expectations ($E[XY] = E[X]E[Y]$):</p><p>$$\\Rightarrow 2E[X_1]E[X_2] + E[X_1]E[X_2]E[X_3]$$</p><p data-path-to-node=\"13\">For a Bernoulli random variable with parameter $p$, its expected value is simply $p$ (i.e., $E[X_i] = p$).</p><p data-path-to-node=\"13\">Substitute $p$ for each expected value term:</p><p>$$\\Rightarrow 2(p)(p) + (p)(p)(p)$$</p><p>$$\\Rightarrow 2p^2 + p^3$$</p><p>$$\\boxed{\\therefore E[X_1^2 X_2 (2X_1 + X_3)] = 2p^2 + p^3}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530712/go-classes-dpp-gate-cs-da-probability-%26-statistics-bernoulli-random-variables\" target=\"_blank\">GATE Overflow #530712</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"220\" data-start=\"63\">A delivery worker is assigned one of three types of delivery routes by drawing a card from a box containing $6$ cards numbered $1$ through $6$.</p><p data-end=\"396\" data-start=\"222\">If the card is $1$ or $2$, the worker gets a downtown route. A downtown route normally takes $10$ minutes, but with probability $\\frac{1}{4}$ traffic adds $12$ extra minutes.</p><p data-end=\"587\" data-start=\"398\">If the card is $3$, $4$, or $5$, the worker gets a neighborhood route. A neighborhood route normally takes $18$ minutes, but with probability $\\frac{1}{3}$ an easier path saves $2$ minutes.</p><p data-end=\"760\" data-start=\"589\">If the card is $6$, the worker gets an express route. An express route normally takes $9$ minutes, but with probability $\\frac{1}{6}$ a road issue adds $18$ extra minutes.</p><p data-end=\"818\" data-start=\"762\">What is the expected time needed to finish the delivery?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$14$ minutes<br/></span>",
                "<span style=\"display: inline;\">$15$ minutes<br/></span>",
                "<span style=\"display: inline;\">$\\frac{46}{3}$ minutes<br/></span>",
                "<span style=\"display: inline;\">$16$ minutes</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530607\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"623\" src=\"https://cdn.mathpix.com/snip/images/IJxX7Ba-W_hluyiAleWy_UmgghMx17yIQ7cc_KK8UUc.original.fullsize.png\" style=\"max-width: 100%;\" width=\"699\"/></p><p data-path-to-node=\"1\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"1\">Expected Time for Each Route : </b></p><p data-path-to-node=\"2\">The expected time for a route is its base time plus the expected value of any time adjustments (delays or savings).</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,0,0\">Downtown Route:</b></p><ul data-path-to-node=\"3,0,1\"><li><p data-path-to-node=\"3,0,1,0,0\">Base time: $10$ minutes</p></li><li><p data-path-to-node=\"3,0,1,1,0\">Adjustment: $\\frac{1}{4}$ probability of adding $12$ minutes</p></li><li><p data-path-to-node=\"3,0,1,2,0\">Expected Downtown Time = $10 + \\left(\\frac{1}{4} \\cdot 12\\right) = 10 + 3 = 13 \\text{ minutes}$</p></li></ul></li><li><p data-path-to-node=\"3,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,1,0\">Neighborhood Route:</b></p><ul data-path-to-node=\"3,1,1\"><li><p data-path-to-node=\"3,1,1,0,0\">Base time: $18$ minutes</p></li><li><p data-path-to-node=\"3,1,1,1,0\">Adjustment: $\\frac{1}{3}$ probability of saving (subtracting) $2$ minutes</p></li><li><p data-path-to-node=\"3,1,1,2,0\">Expected Neighborhood Time = $18 - \\left(\\frac{1}{3} \\cdot 2\\right) = 18 - \\frac{2}{3} = \\frac{54}{3} - \\frac{2}{3} = \\frac{52}{3} \\text{ minutes}$</p></li></ul></li><li><p data-path-to-node=\"3,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,2,0\">Express Route:</b></p><ul data-path-to-node=\"3,2,1\"><li><p data-path-to-node=\"3,2,1,0,0\">Base time: $9$ minutes</p></li><li><p data-path-to-node=\"3,2,1,1,0\">Adjustment: $\\frac{1}{6}$ probability of adding $18$ minutes</p></li><li><p data-path-to-node=\"3,2,1,2,0\">Expected Express Time = $9 + \\left(\\frac{1}{6} \\cdot 18\\right) = 9 + 3 = 12 \\text{ minutes}$</p></li></ul></li></ul><p data-path-to-node=\"4\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"4\">Overall Expected Time : </b></p><p data-path-to-node=\"5\">Now, we calculate the weighted average of these expected times using the probability of drawing the cards for each route from the $6$ available cards.</p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\">Probability of <b data-index-in-node=\"15\" data-path-to-node=\"6,0,0\">Downtown</b> (cards $1, 2$) = $\\frac{2}{6} = \\frac{1}{3}$</p></li><li><p data-path-to-node=\"6,1,0\">Probability of <b data-index-in-node=\"15\" data-path-to-node=\"6,1,0\">Neighborhood</b> (cards $3, 4, 5$) = $\\frac{3}{6} = \\frac{1}{2}$</p></li><li><p data-path-to-node=\"6,2,0\">Probability of <b data-index-in-node=\"15\" data-path-to-node=\"6,2,0\">Express</b> (card $6$) = $\\frac{1}{6}$</p></li></ul><p data-path-to-node=\"7\">Using the Law of Total Expectation:</p><p>$$E[\\text{Total Time}] = (\\text{P(Downtown)} \\cdot E[\\text{Downtown}]) + (\\text{P(Neighborhood)} \\cdot E[\\text{Neighborhood}]) + (\\text{P(Express)} \\cdot E[\\text{Express}])$$</p><p data-path-to-node=\"9\">Substitute the values we calculated:</p><p>$$E[\\text{Total Time}] = \\left(\\frac{1}{3} \\cdot 13\\right) + \\left(\\frac{1}{2} \\cdot \\frac{52}{3}\\right) + \\left(\\frac{1}{6} \\cdot 12\\right)$$</p><p>$$E[\\text{Total Time}] = \\frac{13}{3} + \\frac{26}{3} + 2 = 13 + 2 =\\boxed{15 \\text{ minutes}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530601/go-classes-dpp-gate-cs-da-probability-%26-statistics-law-of-total-expectation\" target=\"_blank\">GATE Overflow #530601</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"418\" data-start=\"0\">Suppose that a person plays $12$ independent games. In each game, he wins with probability $\\frac{1}{3}$ and loses otherwise. If he wins a game, he earns $9$ dollars, and if he loses a game, he loses $3$ dollars. In addition, after all $12$ games, he receives a bonus of $2$ dollars for every pair of games that he won. Let $X$ denote the number of games he wins. What is his expected total gain or loss?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{44}{3}$<br/></span>",
                "<span style=\"display: inline;\">$20$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{80}{3}$<br/></span>",
                "<span style=\"display: inline;\">$32$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530600\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"318\" src=\"https://cdn.mathpix.com/snip/images/urO34ud7XiDMXblBeGLyRkFsZdmwODSsf_fjng46-p0.original.fullsize.png\" width=\"752\"/></p><p data-path-to-node=\"1\"> </p><p data-path-to-node=\"1\">Let $X$ be the number of games the person wins.</p><p data-path-to-node=\"1\">Since there are $12$ independent games and the probability of winning each game is $\\frac{1}{3}$, $X$ follows a Binomial distribution:</p><p>$$ X \\sim \\text{Binomial}\\left(n=12, p=\\frac{1}{3}\\right) $$</p><p data-path-to-node=\"3\">For a Binomial distribution, the expected value $E[X]$ and variance $\\text{Var}(X)$ are:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">Expected value:</b> $E[X] = np = 12 \\cdot \\frac{1}{3} = 4$</p></li><li><p data-path-to-node=\"4,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">Variance:</b> $\\text{Var}(X) = np(1-p) = 12 \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{8}{3}$</p></li></ul><p data-path-to-node=\"5\">We will also need the expected value of $X^2$, which we can find using the formula $\\text{Var}(X) = E[X^2] - (E[X])^2$:</p><p>$$ E[X^2] = \\text{Var}(X) + (E[X])^2 $$</p><p>$$ E[X^2] = \\frac{8}{3} + 4^2 = \\frac{8}{3} + 16 = \\frac{8}{3} + \\frac{48}{3} = \\frac{56}{3} $$</p><p> </p><p>Now, Let $Y$ be the total gain. We can express $Y$ in terms of $X$:</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,0,0\">Gain from winning:</b> He wins $X$ games, earning $\\$9$ each. This gives $9X$.</p></li><li><p data-path-to-node=\"9,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,1,0\">Loss from losing:</b> He loses $12 - X$ games, losing $\\$3$ each. This gives $-3(12 - X) = -36 + 3X$.</p></li><li><p data-path-to-node=\"9,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,2,0\">Bonus:</b> He receives $\\$2$ for <i data-index-in-node=\"27\" data-path-to-node=\"9,2,0\">every pair</i> of games won. The number of pairs one can form from $X$ winning games is given by the combination $\\binom{X}{2} = \\frac{X(X-1)}{2}$.</p><p data-path-to-node=\"9,2,0\">So, the bonus is $2 \\cdot \\frac{X(X-1)}{2} = X(X-1) = X^2 - X$.</p></li></ul><p data-path-to-node=\"10\">Adding these components together gives the total gain $Y$:</p><p>$$ Y = 9X + (-36 + 3X) + (X^2 - X) $$</p><p>$$ \\Rightarrow Y = 12X - 36 + X^2 - X $$</p><p>$$ \\Rightarrow Y = X^2 + 11X - 36 $$</p><p> </p><p data-path-to-node=\"14\">Now, applying the linearity of expectation to find $E[Y]$:</p><p>$$ \\Rightarrow E[Y] = E[X^2 + 11X - 36] $$</p><p>$$ \\Rightarrow E[Y] = E[X^2] + 11E[X] - 36 $$</p><p>$$ \\Rightarrow E[Y] = \\frac{56}{3} + 11(4) - 36 $$</p><p>$$ \\boxed{ \\therefore E[Y] = \\frac{80}{3} }$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530599/go-classes-dpp-gate-cs-da-probability-%26-statistics-expectation\" target=\"_blank\">GATE Overflow #530599</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"209\" data-start=\"92\">Let $X$ be a Bernoulli random variable with parameter $p$, where $0&lt;p&lt;1$. Define $Y=5^{X}2^{1-X}+3X$. What is $E[Y]$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2+6p$<br/></span>",
                "<span style=\"display: inline;\">$5p+2(1-p)$<br/></span>",
                "<span style=\"display: inline;\">$2+3p$<br/></span>",
                "<span style=\"display: inline;\">$5+2p$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530396\"></a><div itemprop=\"text\"><p data-end=\"387\" data-start=\"308\">Since $X$ is Bernoulli with parameter $p$, we have $P(X=1)=p$ and $P(X=0)=1-p$.</p><p data-end=\"429\" data-start=\"389\">If $X=1$, then $Y=5^1 2^{0}+3(1)=5+3=8$.</p><p data-end=\"467\" data-start=\"431\">If $X=0$, then $Y=5^0 2^{1}+3(0)=2$.</p><p data-end=\"503\" data-start=\"469\">Therefore, $E[Y]=8P(X=1)+2P(X=0)$.</p><p data-end=\"538\" data-start=\"505\">So $E[Y]=8p+2(1-p)=8p+2-2p=\\boxed{2+6p}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530395/go-classes-dpp-gate-cs-da-probability-%26-statistics-bernoulli-random-variable\" target=\"_blank\">GATE Overflow #530395</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"204\" data-start=\"27\">Let $X$ and $Y$ be independent discrete uniform random variables on ${1,2,\\dots,n}$. Let $H_n=1+\\frac12+\\frac13+\\cdots+\\frac1n$. The value of $E\\left[\\frac{1}{X+Y}\\right]$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{(2n+1)H_{2n}-2(n+1)H_n}{n^2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2H_n-H_{2n}}{n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{H_{2n}-H_n}{n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{(n+1)H_n-n}{n^2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530386\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the expected value $E\\left[\\frac{1}{X+Y}\\right]$, we start by writing the definition of expectation for discrete random variables. Since $X$ and $Y$ are independent and uniformly distributed on $\\{1, 2, \\dots, n\\}$, their joint probability mass function is:</p><p>$$P(X=x, Y=y) = P(X=x)P(Y=y) = \\frac{1}{n} \\cdot \\frac{1}{n} = \\frac{1}{n^2}$$</p><p data-path-to-node=\"2\">for any $x, y \\in \\{1, 2, \\dots, n\\}$.</p><p data-path-to-node=\"3\">The expected value is given by the double sum:</p><p>$$E\\left[\\frac{1}{X+Y}\\right] = \\sum_{x=1}^n \\sum_{y=1}^n \\frac{1}{x+y} P(X=x, Y=y) = \\frac{1}{n^2} \\sum_{x=1}^n \\sum_{y=1}^n \\frac{1}{x+y}$$</p><p data-path-to-node=\"5\">To evaluate this sum, we can group the terms by the value of their sum, let $k = x+y$. The possible values for $k$ range from $1+1=2$ to $n+n=2n$.</p><p data-path-to-node=\"5\">We need to count the number of pairs $(x,y)$ such that $x+y=k$ subject to $1 \\le x, y \\le n$.</p><p data-path-to-node=\"5\">From $x+y=k$, we have $y = k-x$. The condition $1 \\le y \\le n$ becomes $1 \\le k-x \\le n$, which is equivalent to $k-n \\le x \\le k-1$.</p><p data-path-to-node=\"5\">Combining this with $1 \\le x \\le n$, we find the range for $x$ is:</p><p>$$\\max(1, k-n) \\le x \\le \\min(n, k-1)$$</p><p data-path-to-node=\"7\">We can split this into two cases based on the value of $k$:</p><p data-path-to-node=\"7\"><b data-index-in-node=\"59\" data-path-to-node=\"7\">Case 1: $2 \\le k \\le n$</b></p><p data-path-to-node=\"7\">Here, $\\max(1, k-n) = 1$ and $\\min(n, k-1) = k-1$.</p><p data-path-to-node=\"7\">The number of valid pairs is $(k-1) - 1 + 1 = k-1$.</p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Case 2: $n+1 \\le k \\le 2n$</b></p><p data-path-to-node=\"8\">Here, $\\max(1, k-n) = k-n$ and $\\min(n, k-1) = n$.</p><p data-path-to-node=\"8\">The number of valid pairs is $n - (k-n) + 1 = 2n - k + 1$.</p><p data-path-to-node=\"9\">Now we can rewrite our sum by summing over $k$:</p><p>$$\\sum_{x=1}^n \\sum_{y=1}^n \\frac{1}{x+y} = \\sum_{k=2}^n \\frac{k-1}{k} + \\sum_{k=n+1}^{2n} \\frac{2n-k+1}{k}$$</p><p data-path-to-node=\"11\">Let's evaluate these two sums separately, using the definition of the $n$-th harmonic number, $H_n = \\sum_{i=1}^n \\frac{1}{i}$.</p><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">First sum:</b></p><p>$$\\sum_{k=2}^n \\frac{k-1}{k} = \\sum_{k=2}^n \\left(1 - \\frac{1}{k}\\right) = \\sum_{k=2}^n 1 - \\sum_{k=2}^n \\frac{1}{k}$$</p><p data-path-to-node=\"14\">The first term is $(n-1)$. The second term is $(H_n - 1)$.</p><p>$$\\sum_{k=2}^n \\frac{k-1}{k} = (n-1) - (H_n - 1) = n - H_n$$</p><p data-path-to-node=\"16\"><b data-index-in-node=\"0\" data-path-to-node=\"16\">Second sum:</b></p><p>$$\\sum_{k=n+1}^{2n} \\frac{2n-k+1}{k} = \\sum_{k=n+1}^{2n} \\left(\\frac{2n+1}{k} - 1\\right) = (2n+1)\\sum_{k=n+1}^{2n} \\frac{1}{k} - \\sum_{k=n+1}^{2n} 1$$</p><p data-path-to-node=\"18\">The first sum can be written as $(H_{2n} - H_n)$. The second sum has $2n - (n+1) + 1 = n$ terms.</p><p>$$\\sum_{k=n+1}^{2n} \\frac{2n-k+1}{k} = (2n+1)(H_{2n} - H_n) - n$$</p><p data-path-to-node=\"20\"><b data-index-in-node=\"0\" data-path-to-node=\"20\">Combining them:</b></p><p>$$\\sum_{x=1}^n \\sum_{y=1}^n \\frac{1}{x+y} = (n - H_n) + [(2n+1)(H_{2n} - H_n) - n]$$</p><p>$$= -H_n + (2n+1)H_{2n} - (2n+1)H_n$$</p><p>$$= (2n+1)H_{2n} - H_n - (2n+1)H_n$$</p><p>$$= (2n+1)H_{2n} - (2n+2)H_n$$</p><p>$$= (2n+1)H_{2n} - 2(n+1)H_n$$</p><p data-path-to-node=\"26\">Finally, substitute this back into the expectation formula:</p><p>$$E\\left[\\frac{1}{X+Y}\\right] = \\frac{1}{n^2} \\left[ (2n+1)H_{2n} - 2(n+1)H_n \\right] = \\boxed{\\frac{(2n+1)H_{2n} - 2(n+1)H_n}{n^2}}$$</p><p data-path-to-node=\"28\">This matches option <b data-index-in-node=\"20\" data-path-to-node=\"28\">A</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530383/go-classes-dpp-gate-cs-da-probability-%26-statistics-expectation\" target=\"_blank\">GATE Overflow #530383</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"167\" data-start=\"27\">Let $X$ and $Y$ be non-negative random variables, which may or may not be independent. Which of the following statements is/are <strong>ALWAYS</strong> true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(X+Y\\ge 2)\\ge P(X\\ge 1)P(Y\\ge 1)$<br/></span>",
                "<span style=\"display: inline;\">$P(X+Y<2)\\le P(X<1)+P(Y<1)$<br/></span>",
                "<span style=\"display: inline;\">$P(XY\\ge 1)\\le P(X+Y\\ge 2)$<br/></span>",
                "<span style=\"display: inline;\">$P(X+Y<2)\\ge P(X<1)P(Y<1)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"530384\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Analyzing the options : </p><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">A. $P(X + Y \\ge 2) \\ge P(X \\ge 1)P(Y \\ge 1)$</b></p><p data-path-to-node=\"1\">Let's test this with a counterexample where $X$ and $Y$ are negatively correlated.</p><p data-path-to-node=\"1\">Suppose we have the following probability distribution:</p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">$P(X = 1, Y = 0) = 0.5$</p></li><li><p data-path-to-node=\"2,1,0\">$P(X = 0, Y = 1) = 0.5$</p></li></ul><p data-path-to-node=\"3\">Let's calculate the probabilities:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\">$P(X \\ge 1) = 0.5$</p></li><li><p data-path-to-node=\"4,1,0\">$P(Y \\ge 1) = 0.5$</p></li><li><p data-path-to-node=\"4,2,0\">$P(X \\ge 1)P(Y \\ge 1) = 0.5 \\times 0.5 = 0.25$</p></li><li><p data-path-to-node=\"4,3,0\">$P(X + Y \\ge 2)$: In both possible outcomes, $X + Y = 1$. Therefore, the probability that the sum is $\\ge 2$ is $0$.</p></li></ul><p data-path-to-node=\"5\">Is $0 \\ge 0.25$? No. Therefore, statement A is <b data-index-in-node=\"45\" data-path-to-node=\"5\">NOT always true</b>.</p><p data-path-to-node=\"5\"> </p><p data-path-to-node=\"6\"><b data-index-in-node=\"0\" data-path-to-node=\"6\">B. $P(X + Y &lt; 2) \\le P(X &lt; 1) + P(Y &lt; 1)$</b></p><p data-path-to-node=\"6\">Let's think about the logical relationship between these events.</p><p data-path-to-node=\"6\">If the sum $X + Y &lt; 2$, it is logically impossible for <i data-index-in-node=\"158\" data-path-to-node=\"6\">both</i> $X \\ge 1$ and $Y \\ge 1$ to be true at the same time (since $1 + 1 = 2$).</p><p data-path-to-node=\"6\">Therefore, if $X + Y &lt; 2$, it must be true that <i data-index-in-node=\"276\" data-path-to-node=\"6\">either</i> $X &lt; 1$ <i data-index-in-node=\"289\" data-path-to-node=\"6\">or</i> $Y &lt; 1$ (or both).</p><p data-path-to-node=\"6\">In terms of sets of events, this means:</p><p>$$\\{X + Y &lt; 2\\} \\subseteq \\{X &lt; 1\\} \\cup \\{Y &lt; 1\\}$$</p><p data-path-to-node=\"8\">Because it is a subset, its probability must be less than or equal to the probability of the union:</p><p>$$P(X + Y &lt; 2) \\le P(\\{X &lt; 1\\} \\cup \\{Y &lt; 1\\})$$</p><p data-path-to-node=\"10\">By the Union Bound (Boole's Inequality), the probability of a union is always less than or equal to the sum of the individual probabilities:</p><p>$$P(\\{X &lt; 1\\} \\cup \\{Y &lt; 1\\}) \\le P(X &lt; 1) + P(Y &lt; 1)$$</p><p data-path-to-node=\"12\">Combining these gives $P(X + Y &lt; 2) \\le P(X &lt; 1) + P(Y &lt; 1)$.</p><p data-path-to-node=\"12\">Therefore, statement B is <b data-index-in-node=\"87\" data-path-to-node=\"12\">ALWAYS true</b>.</p><p data-path-to-node=\"12\"> </p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">C. $P(XY \\ge 1) \\le P(X + Y \\ge 2)$</b></p><p data-path-to-node=\"13\">For any real numbers $X$ and $Y$, the square of their difference is non-negative: $(X - Y)^2 \\ge 0$.</p><p data-path-to-node=\"13\">Expanding this:</p><p>$$X^2 - 2XY + Y^2 \\ge 0 \\implies X^2 + Y^2 \\ge 2XY$$</p><p data-path-to-node=\"15\">Now, let's look at the square of their sum:</p><p>$$(X+Y)^2 = X^2 + Y^2 + 2XY$$</p><p data-path-to-node=\"17\">Substitute our inequality $X^2 + Y^2 \\ge 2XY$ into this:</p><p>$$(X+Y)^2 \\ge 2XY + 2XY = 4XY$$</p><p data-path-to-node=\"19\">If we are given that $XY \\ge 1$, then:</p><p>$$(X+Y)^2 \\ge 4(1) = 4$$</p><p data-path-to-node=\"21\">Since $X$ and $Y$ are non-negative, $X+Y$ must be positive, so we can take the square root of both sides to get $X+Y \\ge 2$.</p><p data-path-to-node=\"21\">This proves that whenever the event $\\{XY \\ge 1\\}$ occurs, the event $\\{X+Y \\ge 2\\}$ <i data-index-in-node=\"199\" data-path-to-node=\"21\">must</i> also occur.</p><p>$$\\{XY \\ge 1\\} \\subseteq \\{X+Y \\ge 2\\}$$</p><p data-path-to-node=\"23\">Because it is a subset, its probability must be less than or equal to the larger set.</p><p>$$P(XY \\ge 1) \\le P(X + Y \\ge 2)$$</p><p data-path-to-node=\"25\">Therefore, statement C is <b data-index-in-node=\"27\" data-path-to-node=\"25\">ALWAYS true</b>.</p><p data-path-to-node=\"25\"> </p><p data-path-to-node=\"26\"><b data-index-in-node=\"0\" data-path-to-node=\"26\">D. $P(X + Y &lt; 2) \\ge P(X &lt; 1)P(Y &lt; 1)$</b></p><p data-path-to-node=\"26\">Let's use another counterexample.</p><p data-path-to-node=\"26\">Suppose:</p><ul data-path-to-node=\"27\"><li><p data-path-to-node=\"27,0,0\">$P(X = 0, Y = 2) = 0.5$</p></li><li><p data-path-to-node=\"27,1,0\">$P(X = 2, Y = 0) = 0.5$</p></li></ul><p data-path-to-node=\"28\">Let's calculate the probabilities:</p><ul data-path-to-node=\"29\"><li><p data-path-to-node=\"29,0,0\">$P(X &lt; 1) = P(X = 0) = 0.5$</p></li><li><p data-path-to-node=\"29,1,0\">$P(Y &lt; 1) = P(Y = 0) = 0.5$</p></li><li><p data-path-to-node=\"29,2,0\">$P(X &lt; 1)P(Y &lt; 1) = 0.5 \\times 0.5 = 0.25$</p></li><li><p data-path-to-node=\"29,3,0\">$P(X + Y &lt; 2)$: In both outcomes, $X+Y = 2$. So the probability that it is strictly less than 2 is $0$.</p></li></ul><p data-path-to-node=\"30\">Is $0 \\ge 0.25$? No. Therefore, statement D is <b data-index-in-node=\"45\" data-path-to-node=\"30\">NOT always true</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530382/go-classes-dpp-gate-cs-da-probability-%26-statistics-probability-inequalities\" target=\"_blank\">GATE Overflow #530382</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"216\" data-start=\"0\">Suppose $X$, $Y$, and $Z$ are independent random variables with $E[X]=2$, $E[Y]=-1$, $E[Z]=3$, $\\operatorname{Var}(X)=5$, $\\operatorname{Var}(Y)=4$, and $\\operatorname{Var}(Z)=2$. Compute the value of :</p><p data-end=\"277\" data-start=\"218\">$$E[(2X-3Y+Z-8)^2]+\\operatorname{Var}(XY+2Z)-E[(X+Y-2Z)^2]$$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "69",
            "solution": "<div class=\"solution-content\"><a name=\"530328\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">We are given that $X$, $Y$, and $Z$ are independent random variables with the following properties:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$E[X] = 2$, $\\text{Var}(X) = 5$</p></li><li><p data-path-to-node=\"3,1,0\">$E[Y] = -1$, $\\text{Var}(Y) = 4$</p></li><li><p data-path-to-node=\"3,2,0\">$E[Z] = 3$, $\\text{Var}(Z) = 2$</p></li></ul><p data-path-to-node=\"4\">We also need the expected value of the squares, which can be found using the formula $E[W^2] = \\text{Var}(W) + (E[W])^2$:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">$E[X^2] = 5 + (2)^2 = 5 + 4 = 9$</p></li><li><p data-path-to-node=\"5,1,0\">$E[Y^2] = 4 + (-1)^2 = 4 + 1 = 5$</p></li></ul><p data-path-to-node=\"6\">The expression to compute is:</p><p>$$E[(2X - 3Y + Z - 8)^2] + \\text{Var}(XY + 2Z) - E[(X + Y - 2Z)^2]$$</p><p data-path-to-node=\"10\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"10\">1. Calculating $E[(2X - 3Y + Z - 8)^2]$ : </b></p><p data-path-to-node=\"11\">Let $W_1 = 2X - 3Y + Z - 8$.</p><p data-path-to-node=\"11\">We know that $E[W_1^2] = \\text{Var}(W_1) + (E[W_1])^2$.</p><ul><li data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">Expected Value $E[W_1]$:</b></li></ul><p>$$E[W_1] = 2E[X] - 3E[Y] + E[Z] - 8$$</p><p>$$E[W_1] = 2(2) - 3(-1) + 3 - 8 = 4 + 3 + 3 - 8 = 2$$</p><ul><li data-path-to-node=\"15\"><b data-index-in-node=\"0\" data-path-to-node=\"15\">Variance $\\text{Var}(W_1)$:</b> Since $X, Y, Z$ are independent, we use $\\text{Var}(aX \\pm bY + c) = a^2\\text{Var}(X) + b^2\\text{Var}(Y)$:</li></ul><p>$$\\text{Var}(W_1) = 2^2\\text{Var}(X) + (-3)^2\\text{Var}(Y) + 1^2\\text{Var}(Z) + 0$$</p><p>$$\\text{Var}(W_1) = 4(5) + 9(4) + 1(2) = 20 + 36 + 2 = 58$$</p><ul><li data-path-to-node=\"18\"><b data-index-in-node=\"0\" data-path-to-node=\"18\">Compute $E[W_1^2]$:</b></li></ul><p>$$E[W_1^2] = 58 + (2)^2 = 58 + 4 = \\mathbf{62}$$</p><p> </p><p data-path-to-node=\"21\"><b data-index-in-node=\"0\" data-path-to-node=\"21\">2. Calculating $\\text{Var}(XY + 2Z)$ : </b></p><p data-path-to-node=\"22\">Since $X, Y, Z$ are independent, $XY$ and $2Z$ are also independent.</p><p>$$\\text{Var}(XY + 2Z) = \\text{Var}(XY) + \\text{Var}(2Z)$$</p><ul><li data-path-to-node=\"24\"><b data-index-in-node=\"0\" data-path-to-node=\"24\">Variance of $2Z$:</b></li></ul><p>$$\\text{Var}(2Z) = 2^2\\text{Var}(Z) = 4(2) = 8$$</p><ul><li data-path-to-node=\"26\"><b data-index-in-node=\"0\" data-path-to-node=\"26\">Variance of $XY$:</b> For independent variables, $\\text{Var}(XY) = E[(XY)^2] - (E[XY])^2 = E[X^2]E[Y^2] - (E[X]E[Y])^2$:</li></ul><p>$$\\text{Var}(XY) = (9 \\times 5) - (2 \\times -1)^2$$</p><p>$$\\text{Var}(XY) = 45 - (-2)^2 = 45 - 4 = 41$$</p><ul><li data-path-to-node=\"29\"><b data-index-in-node=\"0\" data-path-to-node=\"29\">Compute Total Variance:</b></li></ul><p>$$\\text{Var}(XY + 2Z) = 41 + 8 = \\mathbf{49}$$</p><p data-path-to-node=\"32\"> </p><p data-path-to-node=\"32\"><b data-index-in-node=\"0\" data-path-to-node=\"32\">3. Calculate $E[(X + Y - 2Z)^2]$ : </b></p><p data-path-to-node=\"33\">Let $W_3 = X + Y - 2Z$. </p><p data-path-to-node=\"33\">Using the same logic as Part 1, $E[W_3^2] = \\text{Var}(W_3) + (E[W_3])^2$.</p><ul><li data-path-to-node=\"34\"><b data-index-in-node=\"0\" data-path-to-node=\"34\">Expected Value $E[W_3]$:</b></li></ul><p>$$E[W_3] = E[X] + E[Y] - 2E[Z]$$</p><p>$$E[W_3] = 2 + (-1) - 2(3) = 1 - 6 = -5$$</p><ul><li data-path-to-node=\"37\"><b data-index-in-node=\"0\" data-path-to-node=\"37\">Variance $\\text{Var}(W_3)$:</b></li></ul><p>$$\\text{Var}(W_3) = 1^2\\text{Var}(X) + 1^2\\text{Var}(Y) + (-2)^2\\text{Var}(Z)$$</p><p>$$\\text{Var}(W_3) = 1(5) + 1(4) + 4(2) = 5 + 4 + 8 = 17$$</p><ul><li data-path-to-node=\"40\"><b data-index-in-node=\"0\" data-path-to-node=\"40\">Compute $E[W_3^2]$:</b></li></ul><p>$$E[W_3^2] = 17 + (-5)^2 = 17 + 25 = \\mathbf{42}$$<br/> </p><p>Now substitute the three calculated parts back into the original expression:</p><p>$$\\Rightarrow E[(2X - 3Y + Z - 8)^2] + \\text{Var}(XY + 2Z) - E[(X + Y - 2Z)^2]$$</p><p>$$= 62 + 49 - 42 = \\boxed{\\mathbf{69}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530327/go-classes-dpp-gate-cs-da-probability-%26-statistics-expectation-%26-variance-of-random-variables\" target=\"_blank\">GATE Overflow #530327</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 62 - Engineering Mathematics (Expectation, Variance & Moments - Part 2)",
    "testLabel": "DPP 62",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"688\" data-start=\"97\">There are $12$ cards in a hat. For each rank $1,2,3,4$, there are exactly $3$ cards of that rank. You draw one card at random. If the first card has rank $1$, you draw $1$ more card. If the first card has rank $2$, you draw $2$ more cards. If the first card has rank $3$, you draw $1$ more card, and then you draw one additional card only if that second card has even rank. If the first card has rank $4$, you draw $2$ more cards, and then you draw one additional card only if those two cards have the same rank. Let $X$ be the sum of the ranks of all cards drawn. Find $E(X)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{711}{110}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{733}{110}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{747}{110}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{381}{55}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530096\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the expected value $E(X)$ of the sum of all cards drawn, we can use the Law of Total Expectation by conditioning on the rank of the first card drawn, $C_1$.</p><p data-path-to-node=\"1\">The initial deck has $12$ cards with a total sum of $3 \\times (1 + 2 + 3 + 4) = 30$.</p><p data-path-to-node=\"1\">The probability of drawing any specific rank first is $P(C_1 = i) = \\frac{3}{12} = \\frac{1}{4}$ for $i \\in \\{1, 2, 3, 4\\}$.</p><p>$$E(X) = \\frac{1}{4} [E(X \\mid C_1=1) + E(X \\mid C_1=2) + E(X \\mid C_1=3) + E(X \\mid C_1=4)]$$</p><p data-path-to-node=\"3\">Let's evaluate the conditional expectation for each possible first card.</p><p data-path-to-node=\"4\"><b data-index-in-node=\"0\" data-path-to-node=\"4\">Case $\\mathbf{1}$ </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">: The first card is a </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{1}$</b> ($C_1 = 1$)</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">You draw $1$ more card ($C_2$).</p></li><li><p data-path-to-node=\"5,1,0\">The remaining deck has $11$ cards with a sum of $30 - 1 = 29$.</p></li><li><p data-path-to-node=\"5,2,0\">The expected value of $C_2$ is $\\frac{29}{11}$.</p></li><li><p data-path-to-node=\"5,3,0\">$E(X \\mid C_1=1) = 1 + \\frac{29}{11} = \\mathbf{\\frac{40}{11}}$</p></li></ul><p data-path-to-node=\"6\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"6\">Case </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{2}$ </b><b data-index-in-node=\"0\" data-path-to-node=\"6\">: The first card is a </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{2}$</b> ($C_1 = 2$)</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">You draw $2$ more cards ($C_2, C_3$).</p></li><li><p data-path-to-node=\"7,1,0\">The remaining deck has 11 cards with a sum of $30 - 2 = 28$.</p></li><li><p data-path-to-node=\"7,2,0\">The expected value of the sum of the next two cards is $2 \\times \\frac{28}{11} = \\frac{56}{11}$.</p></li><li><p data-path-to-node=\"7,3,0\">$E(X \\mid C_1=2) = 2 + \\frac{56}{11} = \\mathbf{\\frac{78}{11}}$</p></li></ul><p data-path-to-node=\"8\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"8\">Case </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{3}$ </b><b data-index-in-node=\"0\" data-path-to-node=\"8\">: The first card is a </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{3}$</b> ($C_1 = 3$)</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">You draw $1$ more card ($C_2$). The remaining $11$ cards have a sum of $30 - 3 = 27$. Expected value of $C_2 = \\frac{27}{11}$.</p></li><li><p data-path-to-node=\"9,1,0\">You draw an additional card ($C_3$) <i data-index-in-node=\"34\" data-path-to-node=\"9,1,0\">only</i> if $C_2$ is even (a $2$ or a $4$).</p></li><li><p data-path-to-node=\"9,2,0\">In the remaining $11$ cards, there are three $2$s and three $4$s.</p><ul data-path-to-node=\"9,2,1\"><li><p data-path-to-node=\"9,2,1,0,0\">Probability $C_2 = 2$ is $\\frac{3}{11}$. The deck for $C_3$ then has 10 cards and sums to $27 - 2 = 25$. $E(C_3 \\mid C_2=2) = \\frac{25}{10} = 2.5$.</p></li><li><p data-path-to-node=\"9,2,1,1,0\">Probability $C_2 = 4$ is $\\frac{3}{11}$. The deck for $C_3$ then has 10 cards and sums to $27 - 4 = 23$. $E(C_3 \\mid C_2=4) = \\frac{23}{10} = 2.3$.</p></li></ul></li><li><p data-path-to-node=\"9,3,0\">The expected contribution of $C_3$ is:</p><p>$$E(C_3) = \\left(\\frac{3}{11} \\times 2.5\\right) + \\left(\\frac{3}{11} \\times 2.3\\right) = \\frac{3}{11}(4.8) = \\frac{14.4}{11} = \\frac{144}{110} = \\frac{72}{55}$$</p></li><li><p data-path-to-node=\"9,4,0\">$E(X \\mid C_1=3) = 3 + \\frac{27}{11} + \\frac{72}{55} = \\frac{165}{55} + \\frac{135}{55} + \\frac{72}{55} = \\mathbf{\\frac{372}{55}}$</p></li></ul><p data-path-to-node=\"10\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"10\">Case </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{4}$ </b><b data-index-in-node=\"0\" data-path-to-node=\"10\">: The first card is a </b><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{4}$</b> ($C_1 = 4$)</p><ul data-path-to-node=\"11\"><li><p data-path-to-node=\"11,0,0\">You draw $2$ more cards ($C_2, C_3$). The remaining 11 cards sum to $30 - 4 = 26$. Expected sum of $C_2 + C_3 = 2 \\times \\frac{26}{11} = \\frac{52}{11}$.</p></li><li><p data-path-to-node=\"11,1,0\">You draw an additional card ($C_4$) <i data-index-in-node=\"34\" data-path-to-node=\"11,1,0\">only</i> if $C_2 = C_3$ (they form a pair).</p></li><li><p data-path-to-node=\"11,2,0\">Let's find the probability of drawing each pair from the $11$ remaining cards (total combinations = $\\binom{11}{2} = 55$) and the subsequent expected value of $C_4$ (drawn from the remaining 9 cards):</p><ul data-path-to-node=\"11,2,1\"><li><p data-path-to-node=\"11,2,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,1,0,0\">Pair of 1s</b>: $3$ ways. Prob = $\\frac{3}{55}$. Remaining sum = $26 - 2 = 24$. $E(C_4) = \\frac{24}{9}$</p></li><li><p data-path-to-node=\"11,2,1,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,1,1,0\">Pair of 2s</b>: $3$ ways. Prob = $\\frac{3}{55}$. Remaining sum = $26 - 4 = 22$. $E(C_4) = \\frac{22}{9}$</p></li><li><p data-path-to-node=\"11,2,1,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,1,2,0\">Pair of 3s</b>: $3$ ways. Prob = $\\frac{3}{55}$. Remaining sum = $26 - 6 = 20$. $E(C_4) = \\frac{20}{9}$</p></li><li><p data-path-to-node=\"11,2,1,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,1,3,0\">Pair of 4s</b>: $1$ way (only two $4$s left). Prob = $\\frac{1}{55}$. Remaining sum = $26 - 8 = 18$. $E(C_4) = \\frac{18}{9}$</p></li></ul></li><li><p data-path-to-node=\"11,3,0\">The expected contribution of $C_4$ is:</p><p>$$E(C_4) = \\left(\\frac{3}{55} \\times \\frac{24}{9}\\right) + \\left(\\frac{3}{55} \\times \\frac{22}{9}\\right) + \\left(\\frac{3}{55} \\times \\frac{20}{9}\\right) + \\left(\\frac{1}{55} \\times \\frac{18}{9}\\right)$$</p><p>$$E(C_4) = \\frac{1}{55 \\times 9} (72 + 66 + 60 + 18) = \\frac{216}{495} = \\frac{24}{55}$$</p></li><li><p data-path-to-node=\"11,4,0\">$E(X \\mid C_1=4) = 4 + \\frac{52}{11} + \\frac{24}{55} = \\frac{220}{55} + \\frac{260}{55} + \\frac{24}{55} = \\mathbf{\\frac{504}{55}}$</p></li></ul><div> </div><div><p data-path-to-node=\"14\">Now, we plug these conditional expectations back into our original formula:</p><p>$$\\Rightarrow E(X) = \\frac{1}{4} \\left[ \\frac{40}{11} + \\frac{78}{11} + \\frac{372}{55} + \\frac{504}{55} \\right]$$</p><p>$$\\Rightarrow E(X) = \\frac{1}{4} \\left[ \\frac{200}{55} + \\frac{390}{55} + \\frac{372}{55} + \\frac{504}{55} \\right] = \\frac{1}{4} \\left[ \\frac{1466}{55} \\right] = \\frac{1466}{220}$$</p><p>$$\\boxed{\\therefore E(X) = \\mathbf{\\frac{733}{110}}}$$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530095/go-classes-dpp-gate-cs-da-probability-law-of-total-expectation\" target=\"_blank\">GATE Overflow #530095</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"149\" data-start=\"0\">Let $A$, $B$, and $C$ be events, and assume all conditional probabilities below are defined. Which statement is <strong>NOT</strong> necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $P(A|B)=P(A|B^c)$ and $0<P(B)<1$, then $A$ and $B$ are independent.<br/></span>",
                "<span style=\"display: inline;\">If $P(A|B)>P(A)$, then $P(B|A)>P(B)$.<br/></span>",
                "<span style=\"display: inline;\">If $P(A|B)>P(A)$ and $P(A|C)>P(A)$, then $P(A|B\\cap C)>P(A)$.<br/></span>",
                "<span style=\"display: inline;\">$P(A\\cap B\\cap C)\\geq P(A)+P(B)+P(C)-2$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529971\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\"><b data-index-in-node=\"0\" data-path-to-node=\"1\">Option A: True</b></p><p data-path-to-node=\"2\"><b data-index-in-node=\"0\" data-path-to-node=\"2\">Statement:</b> If $P(A|B) = P(A|B^c)$ and $0 &lt; P(B) &lt; 1$, then $A$ and $B$ are independent.</p><p data-path-to-node=\"3\"><b data-index-in-node=\"0\" data-path-to-node=\"3\">Proof:</b></p><p data-path-to-node=\"3\">Using the Law of Total Probability, we can express the probability of $A$ as:</p><p>$$P(A) = P(A|B)P(B) + P(A|B^c)P(B^c)$$</p><p data-path-to-node=\"5\">Given that $P(A|B) = P(A|B^c)$, let's substitute $P(A|B^c)$ with $P(A|B)$ in the equation:</p><p>$$P(A) = P(A|B)P(B) + P(A|B)P(B^c)$$</p><p>$$P(A) = P(A|B) \\cdot [P(B) + P(B^c)]$$</p><p data-path-to-node=\"8\">Since the sum of the probabilities of an event and its complement is always 1 ($P(B) + P(B^c) = 1$):</p><p>$$P(A) = P(A|B) \\cdot [1]$$</p><p>$$P(A) = P(A|B)$$</p><p data-path-to-node=\"11\">Because $P(A|B) = P(A)$, events $A$ and $B$ are independent by definition.<br/><br/> </p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Option B: True</b></p><p data-path-to-node=\"14\"><b data-index-in-node=\"0\" data-path-to-node=\"14\">Statement:</b> If $P(A|B) &gt; P(A)$, then $P(B|A) &gt; P(B)$.</p><p data-path-to-node=\"15\"><b data-index-in-node=\"0\" data-path-to-node=\"15\">Proof:</b></p><p data-path-to-node=\"15\">By the definition of conditional probability:</p><p>$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$</p><p data-path-to-node=\"17\">Given $P(A|B) &gt; P(A)$, we can write:</p><p>$$\\frac{P(A \\cap B)}{P(B)} &gt; P(A)$$</p><p>$$P(A \\cap B) &gt; P(A)P(B)$$</p><p data-path-to-node=\"20\">Now, let's look at $P(B|A)$:</p><p>$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$</p><p data-path-to-node=\"22\">Since we established that $P(A \\cap B) &gt; P(A)P(B)$, we can substitute this into our fraction:</p><p>$$P(B|A) &gt; \\frac{P(A)P(B)}{P(A)}$$</p><p>$$P(B|A) &gt; P(B)$$<br/><br/> </p><p data-path-to-node=\"26\"><b data-index-in-node=\"0\" data-path-to-node=\"26\">Option C: NOT Necessarily True (False)</b></p><p data-path-to-node=\"27\"><b data-index-in-node=\"0\" data-path-to-node=\"27\">Statement:</b> If $P(A|B) &gt; P(A)$ and $P(A|C) &gt; P(A)$, then $P(A|B \\cap C) &gt; P(A)$.</p><p data-path-to-node=\"28\"><b data-index-in-node=\"0\" data-path-to-node=\"28\">Counterexample:</b></p><p data-path-to-node=\"28\">Imagine rolling a fair six-sided die. Let the sample space be $\\{1, 2, 3, 4, 5, 6\\}$.</p><p data-path-to-node=\"28\">Let's define three events:</p><ul data-path-to-node=\"29\"><li><p data-path-to-node=\"29,0,0\">$A = \\{1, 2\\}$ $\\rightarrow$ $P(A) = \\frac{2}{6} = \\frac{1}{3}$</p></li><li><p data-path-to-node=\"29,1,0\">$B = \\{1, 3\\}$</p></li><li><p data-path-to-node=\"29,2,0\">$C = \\{2, 3\\}$</p></li></ul><p data-path-to-node=\"30\">Now let's check the given conditions:</p><ol data-path-to-node=\"31\" start=\"1\"><li><p data-path-to-node=\"31,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"31,0,0\">Check $P(A|B) &gt; P(A)$:</b></p><p data-path-to-node=\"31,0,0\">$A \\cap B = \\{1\\}$, so $P(A \\cap B) = \\frac{1}{6}$.</p><p data-path-to-node=\"31,0,0\">$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/6}{2/6} = \\frac{1}{2}$.</p><p data-path-to-node=\"31,0,0\">Since $\\frac{1}{2} &gt; \\frac{1}{3}$, the first condition holds.</p></li><li><p data-path-to-node=\"31,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"31,1,0\">Check $P(A|C) &gt; P(A)$:</b></p><p data-path-to-node=\"31,1,0\">$A \\cap C = \\{2\\}$, so $P(A \\cap C) = \\frac{1}{6}$.</p><p data-path-to-node=\"31,1,0\">$P(A|C) = \\frac{P(A \\cap C)}{P(C)} = \\frac{1/6}{2/6} = \\frac{1}{2}$.</p><p data-path-to-node=\"31,1,0\">Since $\\frac{1}{2} &gt; \\frac{1}{3}$, the second condition holds.</p></li></ol><p data-path-to-node=\"32\">Now let's test the conclusion $P(A|B \\cap C) &gt; P(A)$:</p><ul data-path-to-node=\"33\"><li><p data-path-to-node=\"33,0,0\">First, find $B \\cap C$: $\\{1, 3\\} \\cap \\{2, 3\\} = \\{3\\}$.</p></li><li><p data-path-to-node=\"33,1,0\">Next, find the probability of $A$ given this intersection: $P(A | \\{3\\}) = 0$ (because 3 is not in set $A$).</p></li></ul><p data-path-to-node=\"34\">Is $0 &gt; \\frac{1}{3}$? <b data-index-in-node=\"20\" data-path-to-node=\"34\">No.</b> Therefore, this statement is not necessarily true.</p><p data-path-to-node=\"36\"><br/><br/><b data-index-in-node=\"0\" data-path-to-node=\"36\">Option D: True</b></p><p data-path-to-node=\"37\"><b data-index-in-node=\"0\" data-path-to-node=\"37\">Statement:</b> $P(A \\cap B \\cap C) \\ge P(A) + P(B) + P(C) - 2$.</p><p data-path-to-node=\"38\"><b data-index-in-node=\"0\" data-path-to-node=\"38\">Proof:</b></p><p data-path-to-node=\"38\">This is an application of Bonferroni's Inequality. We know that for any two events $X$ and $Y$:</p><p>$$P(X \\cup Y) = P(X) + P(Y) - P(X \\cap Y)$$</p><p data-path-to-node=\"40\">Since $P(X \\cup Y) \\le 1$, it follows that:</p><p>$$1 \\ge P(X) + P(Y) - P(X \\cap Y)$$</p><p>$$P(X \\cap Y) \\ge P(X) + P(Y) - 1$$</p><p data-path-to-node=\"43\">Let's apply this inequality where $X = (A \\cap B)$ and $Y = C$:</p><p>$$P((A \\cap B) \\cap C) \\ge P(A \\cap B) + P(C) - 1$$</p><p data-path-to-node=\"45\">Now, apply the inequality again to expand $P(A \\cap B)$:</p><p>$$P(A \\cap B) \\ge P(A) + P(B) - 1$$</p><p data-path-to-node=\"47\">Substitute this lower bound back into our first equation:</p><p>$$P(A \\cap B \\cap C) \\ge [P(A) + P(B) - 1] + P(C) - 1$$</p><p>$$P(A \\cap B \\cap C) \\ge P(A) + P(B) + P(C) - 2$$</p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529955/go-classes-dpp-gate-cs-da-probability-probability-inequalities\" target=\"_blank\">GATE Overflow #529955</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"151\" data-start=\"0\">Let $A$, $B$, and $C$ be events. Assume every conditional probability that appears is defined. Which statement is <strong>NOT</strong> necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $0<P(B)<1$ and $P(A|B)>P(A)$, then $P(A|B^c)<P(A)$.<br/></span>",
                "<span style=\"display: inline;\">If $P(A|B)>P(A|C)$, then $P(B|A)>P(C|A)$.<br/></span>",
                "<span style=\"display: inline;\">If $A\\subseteq B$ and $P(C)>0$, then $P(A|C)\\leq P(B|C)$.<br/></span>",
                "<span style=\"display: inline;\">$P(A\\cap B)\\geq P(A)+P(B)-1$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"529882\"></a><div itemprop=\"text\"><p data-end=\"507\" data-start=\"354\"><strong>A is true</strong> because $P(A)=P(A|B)P(B)+P(A|B^c)P(B^c)$. If $P(A|B)&gt;P(A)$, then the weighted average can equal $P(A)$ only if $P(A|B^c)&lt;P(A)$.</p><p data-end=\"668\" data-start=\"509\"><strong>C is true</strong> because if $A\\subseteq B$, then $A\\cap C\\subseteq B\\cap C$, so $\\frac{P(A\\cap C)}{P(C)}\\leq \\frac{P(B\\cap C)}{P(C)}$. Therefore, $P(A|C)\\leq P(B|C)$.</p><p data-end=\"778\" data-start=\"670\"><strong>D is true</strong> because $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ and $P(A\\cup B)\\leq 1$. So $P(A\\cap B)\\geq P(A)+P(B)-1$.</p><p data-end=\"1126\" data-start=\"780\"><strong>B is not necessarily true.</strong> For example, suppose there are $100$ equally likely outcomes. Let $|B|=10$, $|C|=80$, $|A\\cap B|=7$, $|A\\cap C|=48$, and suppose no other outcomes are in $A$. Then $P(A|B)=\\frac{7}{10}$ and $P(A|C)=\\frac{48}{80}=\\frac{3}{5}$, so $P(A|B)&gt;P(A|C)$. But $P(B|A)=\\frac{7}{55}$ and $P(C|A)=\\frac{48}{55}$, so $P(B|A)&lt;P(C|A)$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529881/go-classes-dpp-gate-cs-da-probability-probability-inequalities\" target=\"_blank\">GATE Overflow #529881</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"357\" data-start=\"206\">Let $X$ be a random variable such that $P(X=-2)=\\frac{1}{4}$, $P(X=0)=\\frac{1}{2}$, and $P(X=2)=\\frac{1}{4}$.<br/>What is the value of $E[X^2]-{E[X]}^2$ ?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"529776\"></a><div itemprop=\"text\"><p data-end=\"427\" data-start=\"406\">We first find $E[X]$ : </p><p data-end=\"495\" data-start=\"429\">$E[X]=(-2)\\cdot \\frac{1}{4}+0\\cdot \\frac{1}{2}+2\\cdot \\frac{1}{4}$</p><p data-end=\"532\" data-start=\"497\">$E[X]=-\\frac{1}{2}+0+\\frac{1}{2}=0$<br/> </p><p data-end=\"552\" data-start=\"534\">Now find $E[X^2]$ :</p><p data-end=\"628\" data-start=\"554\">$E[X^2]=(-2)^2\\cdot \\frac{1}{4}+0^2\\cdot \\frac{1}{2}+2^2\\cdot \\frac{1}{4}$</p><p data-end=\"678\" data-start=\"630\">$E[X^2]=4\\cdot \\frac{1}{4}+0+4\\cdot \\frac{1}{4}$</p><p data-end=\"694\" data-start=\"680\">$E[X^2]=1+1=2$</p><p data-end=\"699\" data-start=\"696\">So,</p><p data-end=\"728\" data-start=\"701\">$E[X^2]-{E[X]}^2=2-0^2=\\boxed{2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529775/go-classes-dpp-gate-cs-da-probability-discrete-probability-distribution\" target=\"_blank\">GATE Overflow #529775</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"172\" data-start=\"0\">Suppose that $X$ is a random variable where $P(X=-4)=c$, $P(X=-1)=2c$, $P(X=2)=3c$, and $P(X=5)=4c$, where $c&gt;0$. Let $Y=(X-E[X])^2$. What is the value of $E[Y]$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529679\"></a><div itemprop=\"text\"><p data-end=\"257\" data-start=\"207\">Since the total probability must be $1$,</p><p data-end=\"273\" data-start=\"259\">$\\Rightarrow c+2c+3c+4c=1$</p><p data-end=\"282\" data-start=\"275\">$\\Rightarrow 10c=1$</p><p data-end=\"300\" data-start=\"284\">$\\Rightarrow c=\\frac{1}{10}$</p><p data-end=\"321\" data-start=\"302\">Now compute $E[X]$:</p><p data-end=\"443\" data-start=\"323\">$E[X]=(-4)\\left(\\frac{1}{10}\\right)+(-1)\\left(\\frac{2}{10}\\right)+2\\left(\\frac{3}{10}\\right)+5\\left(\\frac{4}{10}\\right)$</p><p data-end=\"505\" data-start=\"445\">$\\Rightarrow E[X]=-\\frac{4}{10}-\\frac{2}{10}+\\frac{6}{10}+\\frac{20}{10}$</p><p data-end=\"529\" data-start=\"507\">$\\Rightarrow E[X]=\\frac{20}{10}=2$<br/><br/>So,</p><p data-end=\"558\" data-start=\"536\">$Y=(X-E[X])^2=(X-2)^2$</p><p data-end=\"617\" data-start=\"560\">Now find the value of $Y$ for each possible value of $X$:</p><p data-end=\"650\" data-start=\"619\">If $X=-4$, then $Y=(-4-2)^2=36$</p><p data-end=\"682\" data-start=\"652\">If $X=-1$, then $Y=(-1-2)^2=9$</p><p data-end=\"712\" data-start=\"684\">If $X=2$, then $Y=(2-2)^2=0$</p><p data-end=\"742\" data-start=\"714\">If $X=5$, then $Y=(5-2)^2=9$</p><p data-end=\"754\" data-start=\"744\">Therefore,</p><p data-end=\"871\" data-start=\"756\">$\\Rightarrow E[Y]=36\\left(\\frac{1}{10}\\right)+9\\left(\\frac{2}{10}\\right)+0\\left(\\frac{3}{10}\\right)+9\\left(\\frac{4}{10}\\right)$</p><p data-end=\"923\" data-start=\"873\">$\\Rightarrow E[Y]=\\frac{36}{10}+\\frac{18}{10}+0+\\frac{36}{10}$</p><p data-end=\"947\" data-start=\"925\">$\\Rightarrow E[Y]=\\frac{90}{10}=9$<br/><br/>$\\Rightarrow \\boxed{E[Y]=9}$</p><p data-end=\"982\" data-start=\"949\">So the correct answer is <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529678/go-classes-dpp-gate-da-probability-variance-of-discrete-random-variable\" target=\"_blank\">GATE Overflow #529678</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"161\" data-start=\"0\">James Bond repeatedly rolls a fair standard $6$-sided die. What is the expected number of rolls until he gets two consecutive $5$'s for the first time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$36$<br/></span>",
                "<span style=\"display: inline;\">$40$<br/></span>",
                "<span style=\"display: inline;\">$42$<br/></span>",
                "<span style=\"display: inline;\">$48$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529669\"></a><div itemprop=\"text\"><p data-end=\"369\" data-start=\"199\">Let $E$ be the expected number of rolls needed from the start, and let $F$ be the expected number of additional rolls needed given that the last roll was a $5$.</p><p data-end=\"593\" data-start=\"371\">From the starting state, after one roll, either a $5$ appears with probability $\\frac{1}{6}$ and the process moves to state $F$, or a non-$5$ appears with probability $\\frac{5}{6}$ and the process returns to state $E$. So,</p><p data-end=\"632\" data-start=\"595\">$E = 1 + \\frac{1}{6}F + \\frac{5}{6}E$</p><p data-end=\"844\" data-start=\"634\">From state $F$, after one more roll, either another $5$ appears with probability $\\frac{1}{6}$ and the process ends, or a non-$5$ appears with probability $\\frac{5}{6}$ and the process returns to state $E$. So,</p><p data-end=\"885\" data-start=\"846\">$F = 1 + \\frac{1}{6}(0) + \\frac{5}{6}E$</p><p data-end=\"892\" data-start=\"887\">Thus,</p><p data-end=\"916\" data-start=\"894\">$F = 1 + \\frac{5}{6}E$</p><p data-end=\"957\" data-start=\"918\">Now substitute into the first equation:</p><p data-end=\"1024\" data-start=\"959\">$\\Rightarrow E = 1 + \\frac{1}{6}\\left(1 + \\frac{5}{6}E\\right) + \\frac{5}{6}E$</p><p data-end=\"1078\" data-start=\"1026\">$\\Rightarrow E = 1 + \\frac{1}{6} + \\frac{5}{36}E + \\frac{5}{6}E$</p><p data-end=\"1114\" data-start=\"1080\">$\\Rightarrow E = \\frac{7}{6} + \\frac{35}{36}E$<br/><br/>$\\Rightarrow E - \\frac{35}{36}E = \\frac{7}{6}$</p><p data-end=\"1186\" data-start=\"1157\">$\\Rightarrow \\frac{1}{36}E = \\frac{7}{6}$<br/><br/>$\\Rightarrow E = 42$</p><p data-end=\"1246\" data-start=\"1198\">Therefore, the expected number of rolls is $\\boxed{42}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529668/go-classes-dpp-gate-da-probability-markov-chains\" target=\"_blank\">GATE Overflow #529668</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following is the probability distribution for a random variable, $X$:</p><p>$$<br/>\\begin{array}{c|c}<br/>k &amp; P(X=k) \\\\<br/>\\hline<br/>-1 &amp; \\frac{1}{10} \\\\\\\\<br/>0 &amp; \\frac{1}{5} \\\\\\\\<br/>1 &amp; \\frac{3}{10} \\\\\\\\<br/>2 &amp; \\frac{1}{4} \\\\\\\\<br/>4 &amp; \\frac{3}{20}<br/>\\end{array}<br/>$$</p><p>What is the variance of $X$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.89$<br/></span>",
                "<span style=\"display: inline;\">$2.11$<br/></span>",
                "<span style=\"display: inline;\">$2.31$<br/></span>",
                "<span style=\"display: inline;\">$2.59$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529031\"></a><div itemprop=\"text\"><p>We use $Var(X)=E(X^2)-[E(X)]^2$.</p><p>First,<br/>$E(X)=\\sum xP(X=x)$</p><p>$E(X)=(-1)\\left(\\frac{1}{10}\\right)+0\\left(\\frac{1}{5}\\right)+1\\left(\\frac{3}{10}\\right)+2\\left(\\frac{1}{4}\\right)+4\\left(\\frac{3}{20}\\right)$</p><p>$E(X)=-\\frac{1}{10}+0+\\frac{3}{10}+\\frac{1}{2}+\\frac{3}{5}$</p><p>$E(X)=\\frac{13}{10}$</p><p>Next,<br/>$E(X^2)=\\sum x^2P(X=x)$</p><p>$E(X^2)=(-1)^2\\left(\\frac{1}{10}\\right)+0^2\\left(\\frac{1}{5}\\right)+1^2\\left(\\frac{3}{10}\\right)+2^2\\left(\\frac{1}{4}\\right)+4^2\\left(\\frac{3}{20}\\right)$</p><p>$E(X^2)=\\frac{1}{10}+0+\\frac{3}{10}+1+\\frac{12}{5}$</p><p>$E(X^2)=\\frac{19}{5}$</p><p>Therefore,<br/>$Var(X)=\\frac{19}{5}-\\left(\\frac{13}{10}\\right)^2$</p><p>$Var(X)=\\frac{19}{5}-\\frac{169}{100}$</p><p>$Var(X)=\\frac{380}{100}-\\frac{169}{100}$</p><p>$Var(X)=\\frac{211}{100}=2.11$</p><p>So, the variance is $\\boxed{2.11}$.</p><p>Correct option: <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529030/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529030</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following is the probability distribution for a random variable, $X$:</p><p>$$<br/>\\begin{array}{c|c}<br/>k &amp; P(X=k) \\\\<br/>\\hline<br/>0 &amp; 0.2 \\\\<br/>1 &amp; 0.4 \\\\<br/>2 &amp; 0.3 \\\\<br/>3 &amp; 0.1<br/>\\end{array}<br/>$$</p><p>What is the variance of $X$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.640$<br/></span>",
                "<span style=\"display: inline;\">$0.720$<br/></span>",
                "<span style=\"display: inline;\">$0.810$<br/></span>",
                "<span style=\"display: inline;\">$1.040$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529029\"></a><div itemprop=\"text\"><p>We use $Var(X)=E(X^2)-[E(X)]^2$.</p><p>First,<br/>$E(X)=\\sum xP(X=x)$</p><p>$E(X)=0(0.2)+1(0.4)+2(0.3)+3(0.1)$</p><p>$E(X)=0+0.4+0.6+0.3=1.3$</p><p>Next,<br/>$E(X^2)=\\sum x^2P(X=x)$</p><p>$E(X^2)=0^2(0.2)+1^2(0.4)+2^2(0.3)+3^2(0.1)$</p><p>$E(X^2)=0+0.4+1.2+0.9=2.5$</p><p>Therefore,<br/>$Var(X)=2.5-(1.3)^2$</p><p>$Var(X)=2.5-1.69=0.81$</p><p>So, the variance is $\\boxed{0.810}$.</p><p>Correct option: <strong>C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529028/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529028</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"212\" data-start=\"71\">Consider a discrete random variable $X$ with probability mass function given by :</p><p data-end=\"212\" data-start=\"71\">$$<br/>P(X=x)= \\begin{cases}c(2x+1), &amp; \\text {for } x=0,1,2,3,4 \\\\\\\\ 0, &amp; \\text { otherwise } \\end{cases}<br/>$$</p><p data-end=\"242\" data-start=\"214\">What is the variance of $X$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$29/25$<br/></span>",
                "<span style=\"display: inline;\">$34/25$<br/></span>",
                "<span style=\"display: inline;\">$39/25$<br/></span>",
                "<span style=\"display: inline;\">$44/25$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529025\"></a><div itemprop=\"text\"><p data-end=\"365\" data-start=\"306\">First, use the fact that the probabilities must sum to $1$:</p><p data-end=\"408\" data-start=\"367\">$1=\\sum_{x=0}^4 c(2x+1)=c(1+3+5+7+9)=25c$</p><p data-end=\"431\" data-start=\"410\">So, $c=\\frac{1}{25}$.</p><p data-end=\"439\" data-start=\"433\">Hence,</p><p data-end=\"484\" data-start=\"441\">$P(X=x)=\\frac{2x+1}{25}$ for $x=0,1,2,3,4$.</p><p data-end=\"505\" data-start=\"486\">Now compute $E(X)$:</p><p data-end=\"567\" data-start=\"507\">$E(X)=\\sum_{x=0}^4 xP(X=x)=\\frac{1}{25}\\sum_{x=0}^4 x(2x+1)$</p><p data-end=\"640\" data-start=\"569\">$E(X)=\\frac{1}{25}\\left[0\\cdot1+1\\cdot3+2\\cdot5+3\\cdot7+4\\cdot9\\right]$</p><p data-end=\"702\" data-start=\"642\">$E(X)=\\frac{1}{25}(0+3+10+21+36)=\\frac{70}{25}=\\frac{14}{5}$</p><p data-end=\"726\" data-start=\"704\">Next compute $E(X^2)$:</p><p data-end=\"794\" data-start=\"728\">$E(X^2)=\\sum_{x=0}^4 x^2P(X=x)=\\frac{1}{25}\\sum_{x=0}^4 x^2(2x+1)$</p><p data-end=\"879\" data-start=\"796\">$E(X^2)=\\frac{1}{25}\\left[0^2\\cdot1+1^2\\cdot3+2^2\\cdot5+3^2\\cdot7+4^2\\cdot9\\right]$</p><p data-end=\"945\" data-start=\"881\">$E(X^2)=\\frac{1}{25}(0+3+20+63+144)=\\frac{230}{25}=\\frac{46}{5}$</p><p data-end=\"957\" data-start=\"947\">Therefore,</p><p data-end=\"992\" data-start=\"959\">$\\mathrm{Var}(X)=E(X^2)-[E(X)]^2$</p><p data-end=\"1052\" data-start=\"994\">$\\mathrm{Var}(X)=\\frac{46}{5}-\\left(\\frac{14}{5}\\right)^2$</p><p data-end=\"1099\" data-start=\"1054\">$\\mathrm{Var}(X)=\\frac{46}{5}-\\frac{196}{25}$</p><p data-end=\"1162\" data-start=\"1101\">$\\mathrm{Var}(X)=\\frac{230}{25}-\\frac{196}{25}=\\frac{34}{25}$</p><p data-end=\"1242\" data-start=\"1164\">So the correct answer is $\\boxed{\\frac{34}{25}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529024/go-classes-dpp-gate-da-probability-discrete-random-variables\" target=\"_blank\">GATE Overflow #529024</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"135\" data-start=\"71\">There are $12$ cards in a hat labeled $1,1,1,2,2,2,3,3,3,4,4,4$.<br/><br/>You draw one card uniformly at random.</p><ul><li data-end=\"393\" data-start=\"177\">If the number drawn is $1$, you draw $1$ more card.<br/> </li><li data-end=\"393\" data-start=\"177\">If the number drawn is $2$, you draw $2$ more cards.<br/> </li><li data-end=\"393\" data-start=\"177\">If the number drawn is $3$, you draw $3$ more cards.<br/> </li><li data-end=\"393\" data-start=\"177\">If the number drawn is $4$, you draw $4$ more cards.<br/> </li></ul><p data-end=\"464\" data-start=\"395\">Let $X$ be the sum of all numbers on the cards drawn. What is $E(X)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$91/11$<br/></span>",
                "<span style=\"display: inline;\">$95/11$<br/></span>",
                "<span style=\"display: inline;\">$99/11$<br/></span>",
                "<span style=\"display: inline;\">$103/11$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528870\"></a><div itemprop=\"text\"><p data-end=\"658\" data-start=\"532\">Let $R$ be the number on the first card. Since there are three copies each of $1,2,3,4$, we have $P(R=r)=1/4$ for $r=1,2,3,4$.</p><p data-end=\"711\" data-start=\"660\">The total sum of all $12$ cards is $3(1+2+3+4)=30$.</p><p data-end=\"962\" data-start=\"713\">Given $R=r$, the remaining $11$ cards have total sum $30-r$, so the expected value of one card drawn from the remaining cards is $\\frac{30-r}{11}$. Since we then draw $r$ more cards, the expected sum of those extra cards is $r\\cdot \\frac{30-r}{11}$.</p><p data-end=\"1021\" data-start=\"964\">So, given $R=r$,<br/>$E(X\\mid R=r)=r+r\\cdot \\frac{30-r}{11}$.</p><p data-end=\"1045\" data-start=\"1023\">Now compute each case:</p><ul><li data-end=\"1091\" data-start=\"1047\">$E(X\\mid R=1)=1+\\frac{29}{11}=\\frac{40}{11}$<br/> </li><li data-end=\"1137\" data-start=\"1093\">$E(X\\mid R=2)=2+\\frac{56}{11}=\\frac{78}{11}$<br/> </li><li data-end=\"1184\" data-start=\"1139\">$E(X\\mid R=3)=3+\\frac{81}{11}=\\frac{114}{11}$<br/> </li><li data-end=\"1232\" data-start=\"1186\">$E(X\\mid R=4)=4+\\frac{104}{11}=\\frac{148}{11}$</li></ul><p data-end=\"1232\" data-start=\"1186\"><br/>$\\therefore E(X)=\\frac14\\left(\\frac{40}{11}+\\frac{78}{11}+\\frac{114}{11}+\\frac{148}{11}\\right)$<br/><br/>$E(X)=\\frac14\\cdot \\frac{380}{11}=\\frac{95}{11}$<br/><br/>So the correct answer is $\\boxed{\\frac{95}{11}}$,</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528869/go-classes-dpp-gate-da-probability-law-of-total-expectation\" target=\"_blank\">GATE Overflow #528869</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 63 - Engineering Mathematics (Expectation, Variance & Moments - Part 3)",
    "testLabel": "DPP 63",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following is the probability distribution for a random variable, $X$.</p><p>$$<br/>\\begin{array}{c|c}<br/>k &amp; P(X = k) \\\\<br/>\\hline<br/>0 &amp; 0.3 \\\\<br/>1 &amp; 0.5 \\\\<br/>2 &amp; 0.1 \\\\<br/>3 &amp; 0.1<br/>\\end{array}<br/>$$</p><p>What is the variance of $X$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.800$<br/></span>",
                "<span style=\"display: inline;\">$0.447$<br/></span>",
                "<span style=\"display: inline;\">$0.894$<br/></span>",
                "<span style=\"display: inline;\">$1.225$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528391\"></a><div itemprop=\"text\">First, we must find $E(X)$, which is<br/> $$<br/> E(X)=0 \\cdot 0.3+1 \\cdot 0.5+2 \\cdot 0.1+3 \\cdot 0.1=1<br/> $$<br/> Now we have<br/> $$<br/> \\begin{gathered}<br/> \\sigma^{2}(X)=(0-1)^{2} \\cdot 0.3+(1-1)^{2} \\cdot 0.5+(2-1)^{2} \\cdot 0.1+(3-1)^{2} \\cdot 0.1 \\\\\\\\<br/> =0.3+0+0.1+0.4=0.8<br/> \\end{gathered}<br/> $$<br/> Thus, the variance of $X$ is $0.8$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528390/go-classes-dpp-gate-da-probability-probability-distribution\" target=\"_blank\">GATE Overflow #528390</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A biased die is rolled repeatedly. On each roll, the probability of getting a $6$ is $p$, where $0 &lt; p &lt; 1$. Let $X$ be the random variable denoting the number of rolls until the first $6$ appears, including the roll on which the first $6$ appears. Assume the rolls are independent. Then the expected value of $X$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{1}{p}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{1-p}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{p^2}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{1-p^2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528242\"></a><div itemprop=\"text\"><p>To get the first $6$ on the $n$th roll, the first $n-1$ rolls must not be $6$, and the $n$th roll must be $6$.</p><p>So, $P(X=n) = (1-p)^{n-1}p$, for $n=1,2,3,\\dots$<br/><br/>$\\therefore E[X] = \\sum_{n=1}^{\\infty} nP(X=n)$<br/><br/>$= \\sum_{n=1}^{\\infty} n(1-p)^{n-1}p$<br/><br/>This is the expectation of a geometric random variable with parameter $p$. We know that<br/><br/>$E[X] = \\frac{1}{p}$<br/><br/>Thus, the expected number of rolls required to get the first $6$ is $\\boxed{\\frac{1}{p}}$</p><p>So the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528240/go-classes-dpp-gate-da-probability-discrete-random-variable\" target=\"_blank\">GATE Overflow #528240</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Each of the nine words in the sentence $\\text{\"Books open minds and sharpen critical thinking skills daily\"}$ is written on a separate piece of paper. These nine pieces of paper are kept in a box. One of the pieces is drawn at random from the box. The expected length of the word drawn is ________. <em data-end=\"391\" data-start=\"337\">(The answer should be rounded to one decimal place.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "5.7",
            "solution": "<div class=\"solution-content\"><a name=\"527341\"></a><div itemprop=\"text\"><p data-end=\"424\" data-start=\"393\">Word lengths are:</p><p data-end=\"453\" data-start=\"426\">$5, 4, 5, 3, 7, 8, 8, 6, 5$</p><p data-end=\"458\" data-start=\"455\">So,</p><p data-end=\"521\" data-start=\"460\">$E(X)=\\dfrac{5+4+5+3+7+8+8+6+5}{9}=\\dfrac{51}{9}=5.666\\ldots$</p><p data-end=\"552\" data-start=\"523\">Rounded to one decimal place: $\\boxed{5.7}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527340/go-classes-dpp-gate-da-probability-expected-value\" target=\"_blank\">GATE Overflow #527340</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $X$ be a continuous random variable with the PDF $f(x)=2 x$ for $0 \\leq x \\leq 1$. What is the expected value of $X$ ?</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"476493\"></a><div itemprop=\"text\">$\\begin{aligned} &amp; f(x)=2 x, x \\in[0,1] \\\\ &amp; \\quad E[X]=\\int_0^1 x \\cdot 2 x d x=\\int_0^1 2 x^2 d x=\\left[\\frac{2 x^3}{3}\\right]_0^1=\\frac{2}{3}\\end{aligned}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/476492/go-classes-dpp-engineering-mathematics-probability-sheldon-ross\" target=\"_blank\">GATE Overflow #476492</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The mean and variance, respectively, of a binomial distribution for $n$ independent trials with the probability of success as $p$, are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sqrt{n p}, n p(1-2 p)$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt{n p}, \\sqrt{n p(1-p)}$<br/></span>",
                "<span style=\"display: inline;\">$n p, n p$<br/></span>",
                "<span style=\"display: inline;\">$n p, n p(1-p)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"476485\"></a><div itemprop=\"text\">$\\begin{aligned} &amp; \\text { Mean }=\\mathrm{np} \\\\ &amp; \\text { Variance }=\\mathrm{npq}=\\mathrm{np}(1-\\mathrm{p})\\end{aligned}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/476484/go-classes-dpp-engineering-mathematics-probability-gate-ce\" target=\"_blank\">GATE Overflow #476484</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A box contains $10$ pens of which $3$ are defective. A sample of $2$ pens is drawn at random and let $X$ denote the number of defective pens. Then the variance of $X$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{11}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{28}{75}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"474740\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=747565327269563951\"/></p><p> </p><p>$\\begin{aligned} &amp; \\mu=\\sum X_i P\\left(X_i\\right)=0+\\frac{7}{15}+\\frac{2}{15}=\\frac{3}{5} \\\\ &amp; \\text { Variance }(X)= \\\\ &amp; \\sum P_i\\left(X_i-\\mu\\right)^2=\\frac{7}{15}\\left(\\frac{9}{25}\\right)+\\frac{7}{15}\\left(\\frac{4}{25}\\right)+\\frac{2}{15}\\left(\\frac{49}{25}\\right)=\\frac{28}{75}\\end{aligned}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/474739/go-classes-dpp-engineering-mathematics-probability-jee-mains\" target=\"_blank\">GATE Overflow #474739</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 64 - Engineering Mathematics (Joint Distributions & Covariance)",
    "testLabel": "DPP 64",
    "testType": "DPP",
    "bracket": "Joint Distributions & Covariance",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "21 Min",
    "totalMarks": 8,
    "topicsCovered": "Joint Distributions & Covariance Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"297\" data-start=\"0\">Suppose that $X$, $Y$, and $Z$ are independent random variables such that : </p><ul><li data-end=\"297\" data-start=\"0\">$P(X=x)=\\frac{1}{2}\\left(\\frac{1}{2}\\right)^{x-1}$ for integers $x\\ge 1$, <br/> </li><li data-end=\"297\" data-start=\"0\">$P(Y=y)=\\frac{1}{3}\\left(\\frac{2}{3}\\right)^{y-1}$ for integers $y\\ge 1$, and <br/> </li><li data-end=\"297\" data-start=\"0\">$P(Z=z)=\\frac{1}{4}\\left(\\frac{3}{4}\\right)^{z-1}$ for integers $z\\ge 1$. <br/> </li></ul><p data-end=\"297\" data-start=\"0\">Find $P(X+Y=Z)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{8}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530493\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the probability $P(X + Y = Z)$, we can sum over all possible values of $X$ and $Y$. Since $X$, $Y$, and $Z$ are independent random variables, the joint probability $P(X=x, Y=y, Z=x+y)$ is the product of their individual marginal probabilities.</p><p data-path-to-node=\"1\">The problem states that $X, Y \\geq 1$. Therefore, we need to evaluate the following double sum:</p><p>$$ P(X + Y = Z) = \\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty} P(X=x) \\cdot P(Y=y) \\cdot P(Z=x+y) $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty} \\left[ \\frac{1}{2}\\left(\\frac{1}{2}\\right)^{x-1} \\cdot \\frac{1}{3}\\left(\\frac{2}{3}\\right)^{y-1} \\cdot \\frac{1}{4}\\left(\\frac{3}{4}\\right)^{x+y-1} \\right] $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty} \\left[ \\frac{1}{24} \\cdot \\frac{3}{4} \\cdot \\left(\\frac{1}{2}\\right)^{x-1} \\left(\\frac{3}{4}\\right)^{x-1} \\cdot \\left(\\frac{2}{3}\\right)^{y-1} \\left(\\frac{3}{4}\\right)^{y-1} \\right] $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\frac{3}{96} \\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty} \\left[ \\left(\\frac{1}{2} \\cdot \\frac{3}{4}\\right)^{x-1} \\cdot \\left(\\frac{2}{3} \\cdot \\frac{3}{4}\\right)^{y-1} \\right] $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\frac{1}{32} \\sum_{x=1}^{\\infty} \\sum_{y=1}^{\\infty} \\left[ \\left(\\frac{3}{8}\\right)^{x-1} \\cdot \\left(\\frac{1}{2}\\right)^{y-1} \\right] $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\frac{1}{32} \\left( \\sum_{x=1}^{\\infty} \\left(\\frac{3}{8}\\right)^{x-1} \\right) \\left( \\sum_{y=1}^{\\infty} \\left(\\frac{1}{2}\\right)^{y-1} \\right) $$</p><p>Now, we know that for an infinite geometric series $\\sum_{k=0}^{\\infty} r^k = \\frac{1}{1-r}$ (which is equivalent to our sums since they start at an exponent of $0$ when $x,y=1$):</p><p>$$ \\Rightarrow P(X+Y=Z) = \\frac{1}{32} \\left( \\frac{1}{1 - \\frac{3}{8}} \\right) \\left( \\frac{1}{1 - \\frac{1}{2}} \\right) $$</p><p>$$ \\Rightarrow P(X+Y=Z) = \\frac{1}{32} \\cdot \\left( \\frac{8}{5} \\right) \\cdot (2) = \\frac{16}{160} $$</p><p>$$ \\boxed {\\therefore P(X+Y=Z) = \\frac{1}{10}} $$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530491/go-classes-dpp-gate-cs-da-probability-%26-statistics-convolution-of-random-variables\" target=\"_blank\">GATE Overflow #530491</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"231\" data-start=\"27\">Let $X$, $Y$, and $Z$ be random variables which are not necessarily independent. Suppose $Var(X)=4$, $Var(Y)=9$, $Var(Z)=16$, $Var(X+Y+Z)=39$, $Var(X-Y+Z)=11$, and $Var(2X+Y-Z)=53$. Find $Var(3X-2Y+Z+7)$.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "24",
            "solution": "<div class=\"solution-content\"><a name=\"530393\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">We are given the variances of the individual random variables:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$\\text{Var}(X) = 4$</p></li><li><p data-path-to-node=\"3,1,0\">$\\text{Var}(Y) = 9$</p></li><li><p data-path-to-node=\"3,2,0\">$\\text{Var}(Z) = 16$</p></li></ul><p data-path-to-node=\"4\">To simplify the notation for the upcoming equations, let </p><p data-path-to-node=\"4\">$C_{XY} = \\text{Cov}(X,Y)$, $C_{XZ} = \\text{Cov}(X,Z)$, and $C_{YZ} = \\text{Cov}(Y,Z)$.</p><h3 data-path-to-node=\"5\"> </h3><p data-path-to-node=\"6\">We use the general formula for the variance of a linear combination of random variables:</p><p>$$\\text{Var}(aX + bY + cZ) = a^2\\text{Var}(X) + b^2\\text{Var}(Y) + c^2\\text{Var}(Z) + 2ab\\text{Cov}(X,Y) + 2ac\\text{Cov}(X,Z) + 2bc\\text{Cov}(Y,Z)$$</p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Equation 1: From $\\text{Var}(X + Y + Z) = 39$</b></p><p>$$\\Rightarrow 1^2(4) + 1^2(9) + 1^2(16) + 2(1)(1)C_{XY} + 2(1)(1)C_{XZ} + 2(1)(1)C_{YZ} = 39$$</p><p>$$\\Rightarrow 29 + 2(C_{XY} + C_{XZ} + C_{YZ}) = 39$$</p><p>$$\\Rightarrow 2(C_{XY} + C_{XZ} + C_{YZ}) = 10$$</p><p>$$\\Rightarrow C_{XY} + C_{XZ} + C_{YZ} = 5 \\quad \\text{--- (Eq 1)}$$</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Equation 2: From $\\text{Var}(X - Y + Z) = 11$</b></p><p>$$\\Rightarrow 1^2(4) + (-1)^2(9) + 1^2(16) + 2(1)(-1)C_{XY} + 2(1)(1)C_{XZ} + 2(-1)(1)C_{YZ} = 11$$</p><p>$$\\Rightarrow 29 - 2C_{XY} + 2C_{XZ} - 2C_{YZ} = 11$$</p><p>$$\\Rightarrow -2C_{XY} + 2C_{XZ} - 2C_{YZ} = -18$$</p><p>$$\\Rightarrow -C_{XY} + C_{XZ} - C_{YZ} = -9 \\quad \\text{--- (Eq 2)}$$</p><p data-path-to-node=\"18\"><b data-index-in-node=\"0\" data-path-to-node=\"18\">Equation 3: From $\\text{Var}(2X + Y - Z) = 53$</b></p><p>$$\\Rightarrow 2^2(4) + 1^2(9) + (-1)^2(16) + 2(2)(1)C_{XY} + 2(2)(-1)C_{XZ} + 2(1)(-1)C_{YZ} = 53$$</p><p>$$\\Rightarrow 16 + 9 + 16 + 4C_{XY} - 4C_{XZ} - 2C_{YZ} = 53$$</p><p>$$\\Rightarrow 41 + 4C_{XY} - 4C_{XZ} - 2C_{YZ} = 53$$</p><p>$$\\Rightarrow 4C_{XY} - 4C_{XZ} - 2C_{YZ} = 12$$</p><p>$$\\Rightarrow 2C_{XY} - 2C_{XZ} - C_{YZ} = 6 \\quad \\text{--- (Eq 3)}$$</p><div> </div><p>Now, Add <b data-index-in-node=\"4\" data-path-to-node=\"26\">(Eq 1)</b> and <b data-index-in-node=\"15\" data-path-to-node=\"26\">(Eq 2)</b> together to eliminate $C_{XY}$ and $C_{YZ}$:</p><p>$$(C_{XY} + C_{XZ} + C_{YZ}) + (-C_{XY} + C_{XZ} - C_{YZ}) = 5 + (-9)$$</p><p>$$\\Rightarrow 2C_{XZ} = -4$$</p><p>$$\\Rightarrow C_{XZ} = -2$$</p><p data-path-to-node=\"30\">Substitute $C_{XZ} = -2$ back into <b data-index-in-node=\"33\" data-path-to-node=\"30\">(Eq 1)</b> and <b data-index-in-node=\"44\" data-path-to-node=\"30\">(Eq 3)</b>:</p><p data-path-to-node=\"30\">From (Eq 1): $C_{XY} - 2 + C_{YZ} = 5 \\implies C_{XY} + C_{YZ} = 7$</p><p data-path-to-node=\"30\">From (Eq 3): $2C_{XY} - 2(-2) - C_{YZ} = 6 \\implies 2C_{XY} + 4 - C_{YZ} = 6 \\implies 2C_{XY} - C_{YZ} = 2$</p><p data-path-to-node=\"31\">Now add these two new equations:</p><p>$$(C_{XY} + C_{YZ}) + (2C_{XY} - C_{YZ}) = 7 + 2$$</p><p>$$\\Rightarrow 3C_{XY} = 9$$</p><p>$$\\Rightarrow C_{XY} = 3$$</p><p data-path-to-node=\"35\">Substitute $C_{XY} = 3$ back into $C_{XY} + C_{YZ} = 7$:</p><p>$$3 + C_{YZ} = 7 \\implies C_{YZ} = 4$$</p><p data-path-to-node=\"37\">We now have all the covariances:</p><ul data-path-to-node=\"38\"><li><p data-path-to-node=\"38,0,0\">$\\text{Cov}(X,Y) = 3$</p></li><li><p data-path-to-node=\"38,1,0\">$\\text{Cov}(X,Z) = -2$</p></li><li><p data-path-to-node=\"38,2,0\">$\\text{Cov}(Y,Z) = 4$</p></li></ul><h3 data-path-to-node=\"40\"> </h3><p data-path-to-node=\"41\">We need to find $\\text{Var}(3X - 2Y + Z + 7)$. Remember that adding a constant $($like $7)$ does not change the variance, so:</p><p>$$\\text{Var}(3X - 2Y + Z + 7) = \\text{Var}(3X - 2Y + Z)$$</p><p data-path-to-node=\"43\">Expand this using the variance formula:</p><p>$$\\text{Var}(3X - 2Y + Z) = 3^2\\text{Var}(X) + (-2)^2\\text{Var}(Y) + 1^2\\text{Var}(Z) + 2(3)(-2)\\text{Cov}(X,Y) + 2(3)(1)\\text{Cov}(X,Z) + 2(-2)(1)\\text{Cov}(Y,Z)$$</p><p>$$= 9\\text{Var}(X) + 4\\text{Var}(Y) + \\text{Var}(Z) - 12\\text{Cov}(X,Y) + 6\\text{Cov}(X,Z) - 4\\text{Cov}(Y,Z)$$</p><p data-path-to-node=\"46\">Substitute all our known values into the equation:</p><p>$$= 9(4) + 4(9) + 16 - 12(3) + 6(-2) - 4(4)$$</p><p>$$= 36 + 36 + 16 - 36 - 12 - 16= 24$$</p><p data-path-to-node=\"50\">The value of $\\text{Var}(3X - 2Y + Z + 7)$ is $\\textbf{24}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530392/go-classes-dpp-gate-cs-da-probability-%26-statistics-covariance\" target=\"_blank\">GATE Overflow #530392</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $X$ and $Y$ be discrete random variables. $X$ takes values $0,1,2,3$ and $Y$ takes values $1,2,3,4$. Their joint probability mass function is given below.</p><p>$$<br/>\\begin{array}{|c|c|c|c|c|}<br/>\\hline<br/>&amp; Y=1 &amp; Y=2 &amp; Y=3 &amp; Y=4 \\\\<br/>\\hline<br/>X=0 &amp; 3/120 &amp; 6/120 &amp; 2/120 &amp; 4/120 \\\\<br/>\\hline<br/>X=1 &amp; 5/120 &amp; 9/120 &amp; 7/120 &amp; 3/120 \\\\<br/>\\hline<br/>X=2 &amp; 4/120 &amp; 8/120 &amp; 12/120 &amp; 10/120 \\\\<br/>\\hline<br/>X=3 &amp; 2/120 &amp; 11/120 &amp; 14/120 &amp; 20/120 \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p data-end=\"628\" data-start=\"584\"><br/>Find $P(X=2\\mid X+Y\\ge 5 \\text{ and } Y&gt;X)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$22/45$<br/></span>",
                "<span style=\"display: inline;\">$11/30$<br/></span>",
                "<span style=\"display: inline;\">$12/37$<br/></span>",
                "<span style=\"display: inline;\">$22/59$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530390\"></a><div itemprop=\"text\"><p>$$P(X = 2 \\mid X + Y \\ge 5 \\text{ and } Y &gt; X)= \\frac{P(X = 2 \\text{ and } X + Y \\ge 5 \\text{ and } Y &gt; X)}{P(X + Y \\ge 5 \\text{ and } Y &gt; X)}$$</p><p data-path-to-node=\"6\">Let Event $A$ be the condition $(X + Y \\ge 5 \\text{ and } Y &gt; X)$.</p><p data-path-to-node=\"6\">Let Event $B$ be the target $(X = 2)$.</p><p data-path-to-node=\"9\"><br/>We must find all pairs of $(X, Y)$ from the table that satisfy both conditions:</p><ol data-path-to-node=\"10\" start=\"1\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">$X + Y \\ge 5$</b></p></li><li><p data-path-to-node=\"10,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,1,0\">$Y &gt; X$</b></p></li></ol><p data-path-to-node=\"11\">Let's check the table systematically:</p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,0,0\">For $X = 0$:</b> $Y$ must be $&gt; 0$ (all are), but maximum $X+Y$ is $0+4=4 \\not\\ge 5$. (0 valid pairs)</p></li><li><p data-path-to-node=\"12,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,0\">For $X = 1$:</b> $Y$ must be $&gt; 1$.</p><ul data-path-to-node=\"12,1,1\"><li><p data-path-to-node=\"12,1,1,0,0\">$(1, 2) \\rightarrow 1+2 = 3 \\not\\ge 5$</p></li><li><p data-path-to-node=\"12,1,1,1,0\">$(1, 3) \\rightarrow 1+3 = 4 \\not\\ge 5$</p></li><li><p data-path-to-node=\"12,1,1,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,1,1,2,0\">$(1, 4) \\rightarrow 1+4 = 5 \\ge 5$</b> and $4 &gt; 1$. (Valid)</p></li></ul></li><li><p data-path-to-node=\"12,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,0\">For $X = 2$:</b> $Y$ must be $&gt; 2$.</p><ul data-path-to-node=\"12,2,1\"><li><p data-path-to-node=\"12,2,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,1,0,0\">$(2, 3) \\rightarrow 2+3 = 5 \\ge 5$</b> and $3 &gt; 2$. (Valid)</p></li><li><p data-path-to-node=\"12,2,1,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,2,1,1,0\">$(2, 4) \\rightarrow 2+4 = 6 \\ge 5$</b> and $4 &gt; 2$. (Valid)</p></li></ul></li><li><p data-path-to-node=\"12,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,3,0\">For $X = 3$:</b> $Y$ must be $&gt; 3$.</p><ul data-path-to-node=\"12,3,1\"><li><p data-path-to-node=\"12,3,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"12,3,1,0,0\">$(3, 4) \\rightarrow 3+4 = 7 \\ge 5$</b> and $4 &gt; 3$. (Valid)</p></li></ul></li></ul><p data-path-to-node=\"13\">The valid pairs for Event $A$ are $(1, 4), (2, 3), (2, 4), (3, 4)$.</p><p data-path-to-node=\"13\">Now, we sum their probabilities from the table:</p><p>$$P(A) = P(1, 4) + P(2, 3) + P(2, 4) + P(3, 4)$$</p><p>$$P(A) = \\frac{3}{120} + \\frac{12}{120} + \\frac{10}{120} + \\frac{20}{120} = \\frac{45}{120}$$</p><p> </p><p data-path-to-node=\"18\">We need the probability of the outcomes where $X = 2$ <b data-index-in-node=\"52\" data-path-to-node=\"18\">and</b> the conditions for Event $A$ are met.</p><p data-path-to-node=\"18\">Looking at our valid pairs from Step 2, the ones where $X = 2$ are:</p><ul data-path-to-node=\"19\"><li><p data-path-to-node=\"19,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,0,0\">$(2, 3)$</b></p></li><li><p data-path-to-node=\"19,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,1,0\">$(2, 4)$</b></p></li></ul><p data-path-to-node=\"20\">Summing their probabilities:</p><p>$$P(A \\cap B) = P(2, 3) + P(2, 4)$$</p><p>$$P(A \\cap B) = \\frac{12}{120} + \\frac{10}{120} = \\frac{22}{120}$$</p><p> </p><p>Now, $$P(X = 2 \\mid X + Y \\ge 5 \\text{ and } Y &gt; X) = \\frac{\\frac{22}{120}}{\\frac{45}{120}}= \\boxed{\\frac{22}{45}}$$</p><p data-path-to-node=\"28\">Therefore, the correct option is <b data-index-in-node=\"33\" data-path-to-node=\"28\">A</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530389/go-classes-dpp-gate-cs-da-probability-%26-statistics-joint-probability-mass-function\" target=\"_blank\">GATE Overflow #530389</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"559\" data-start=\"325\">A number $X$ is chosen from ${1,2,3,4,5,6}$ with $P(X=x)=x/21$.</p><p data-end=\"559\" data-start=\"325\">After $X=x$ is chosen, a second number $Y$ is chosen uniformly from ${1,2,\\ldots,x}$.</p><p data-end=\"559\" data-start=\"325\">Given this setup, which of the following statements is/are <strong>true</strong>?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P(Y=3)=4/21$<br/></span>",
                "<span style=\"display: inline;\">$P(X=6\\mid Y=3)=1/4$<br/></span>",
                "<span style=\"display: inline;\">$P(X=5,Y=3)=1/21$<br/></span>",
                "<span style=\"display: inline;\">$P(X=6\\mid Y=6)=1$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"530339\"></a><div itemprop=\"text\"><p data-end=\"746\" data-start=\"649\">For any valid pair $1\\le y\\le x\\le 6$, we have $P(X=x,Y=y)=P(X=x)P(Y=y\\mid X=x)$.</p><p data-end=\"798\" data-start=\"748\">So $P(X=x,Y=y)=\\frac{x}{21}\\cdot\\frac{1}{x}=1/21$.</p><p data-end=\"877\" data-start=\"800\">Thus every valid pair $(x,y)$ with $1\\le y\\le x\\le 6$ has probability $1/21$.</p><p data-end=\"877\" data-start=\"800\">Now, evaluating the options : </p><ul><li data-end=\"971\" data-start=\"879\">For $Y=3$, possible $X$ values are $3,4,5,6$, so $P(Y=3)=4(1/21)=4/21$.<br/>Statement <strong>A is true.</strong><br/> </li><li data-end=\"1102\" data-start=\"973\">For $P(X=6\\mid Y=3)$, among the four possible pairs with $Y=3$, only one has $X=6$. So $P(X=6\\mid Y=3)=1/4$.<br/>Statement <strong>B is true.</strong><br/> </li><li data-end=\"1191\" data-start=\"1104\">For $P(X=5,Y=3)$, the pair $(5,3)$ is valid, so $P(X=5,Y=3)=1/21$.<br/>Statement <strong>C is true</strong>.<br/> </li><li data-end=\"1281\" data-start=\"1193\">For $Y=6$, the only possible value is $X=6$. So $P(X=6\\mid Y=6)=1$.<br/>Statement <strong>D is true.</strong></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530337/go-classes-dpp-gate-cs-da-probability-%26-statistics-joint-probability-mass-functions\" target=\"_blank\">GATE Overflow #530337</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"214\" data-start=\"0\">Let $X$ and $Y$ be jointly continuous random variables with joint density function : </p><p data-end=\"214\" data-start=\"0\">$$<br/>f\\left(x, y\\right)= \\begin{cases}cx y(1+y) &amp; \\text { if } 0 \\leq x \\leq 1 \\text { and } x^{3} \\leq y \\leq \\sqrt{x} \\\\\\\\ 0 &amp; \\text { otherwise }\\end{cases}<br/>$$</p><p data-end=\"214\" data-start=\"0\">What is the value of $c$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$625/3696$<br/></span>",
                "<span style=\"display: inline;\">$3696/625$<br/></span>",
                "<span style=\"display: inline;\">$48/5$<br/></span>",
                "<span style=\"display: inline;\">$56/3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530253\"></a><div itemprop=\"text\"><p data-end=\"356\" data-start=\"271\">Since $f(x,y)$ is a joint density, its total integral must equal $1$. i.e, </p><p>$$\\iint_{R} f(x, y) \\,dy \\,dx = 1$$</p><p data-path-to-node=\"5\">Based on the conditions provided, the region is bounded by $0 \\le x \\le 1$ and $x^3 \\le y \\le \\sqrt{x}$. We can set up our integral as follows:</p><p>$$\\int_{0}^{1} \\int_{x^3}^{\\sqrt{x}} cxy(1+y) \\,dy \\,dx = 1$$</p><p data-path-to-node=\"7\">Since $c$ is a constant, we can pull it out to the front. We can also distribute the $y$ in the inner function:</p><p>$$c \\int_{0}^{1} x \\left( \\int_{x^3}^{\\sqrt{x}} (y + y^2) \\,dy \\right) \\,dx = 1$$</p><p data-path-to-node=\"10\">First, we integrate $(y + y^2)$ with respect to $y$, treating $x$ as a constant:</p><p>$$\\int_{x^3}^{\\sqrt{x}} (y + y^2) \\,dy = \\left[ \\frac{y^2}{2} + \\frac{y^3}{3} \\right]_{x^3}^{\\sqrt{x}}$$</p><p data-path-to-node=\"12\">Now, evaluate this at the upper and lower bounds:</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,0,0\">Upper bound ($\\sqrt{x}$):</b> $\\frac{(\\sqrt{x})^2}{2} + \\frac{(\\sqrt{x})^3}{3} = \\frac{x}{2} + \\frac{x^{3/2}}{3}$</p></li><li><p data-path-to-node=\"13,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,1,0\">Lower bound ($x^3$):</b> $\\frac{(x^3)^2}{2} + \\frac{(x^3)^3}{3} = \\frac{x^6}{2} + \\frac{x^9}{3}$</p></li></ul><p data-path-to-node=\"14\">Subtract the lower bound evaluation from the upper bound evaluation:</p><p>$$\\left( \\frac{x}{2} + \\frac{x^{3/2}}{3} \\right) - \\left( \\frac{x^6}{2} + \\frac{x^9}{3} \\right)$$</p><p data-path-to-node=\"17\">Now substitute this back into the outer integral, remembering to multiply by the $x$ that was outside the inner integral:</p><p>$$c \\int_{0}^{1} x \\left( \\frac{x}{2} + \\frac{x^{3/2}}{3} - \\frac{x^6}{2} - \\frac{x^9}{3} \\right) \\,dx = 1$$</p><p data-path-to-node=\"19\">Distribute the $x$:</p><p>$$c \\int_{0}^{1} \\left( \\frac{x^2}{2} + \\frac{x^{5/2}}{3} - \\frac{x^7}{2} - \\frac{x^{10}}{3} \\right) \\,dx = 1$$</p><p data-path-to-node=\"21\">Now, integrate with respect to $x$:</p><p>$$c \\left[ \\frac{x^3}{6} + \\frac{x^{7/2}}{3 \\cdot \\frac{7}{2}} - \\frac{x^8}{16} - \\frac{x^{11}}{33} \\right]_{0}^{1} = 1$$</p><p>$$\\Rightarrow c \\left[ \\frac{x^3}{6} + \\frac{2x^{7/2}}{21} - \\frac{x^8}{16} - \\frac{x^{11}}{33} \\right]_{0}^{1} = 1$$</p><p data-path-to-node=\"24\">Evaluate from $0$ to $1$. Since all terms have an $x$, the lower bound evaluates to $0$. We just need to plug in $1$:</p><p>$$\\Rightarrow c \\left( \\frac{1}{6} + \\frac{2}{21} - \\frac{1}{16} - \\frac{1}{33} \\right) = 1$$</p><p>$$\\Rightarrow c \\left( \\frac{625}{3696} \\right) = 1$$</p><p>$$\\boxed{\\therefore c = \\frac{3696}{625}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530252/go-classes-dpp-gate-cs-da-probability-continuous-random-variables\" target=\"_blank\">GATE Overflow #530252</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"137\" data-start=\"55\">Let $X$ and $Y$ be jointly continuous random variables with joint density function</p><p data-end=\"259\" data-start=\"139\">$f(x,y)=\\begin{cases} c(x+2y), &amp; 0 \\le x \\le 1 \\text{ and } x^2 \\le y \\le \\sqrt{x} \\\\\\\\ 0, &amp; \\text{otherwise} \\end{cases}$</p><p data-end=\"286\" data-start=\"261\">What is the value of $c$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10/9$<br/></span>",
                "<span style=\"display: inline;\">$20/9$<br/></span>",
                "<span style=\"display: inline;\">$9/20$<br/></span>",
                "<span style=\"display: inline;\">$5/2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528873\"></a><div itemprop=\"text\"><p data-end=\"414\" data-start=\"348\">Since $f(x,y)$ is a joint density, its total integral must be $1$.<br/><br/>So,<br/>$1=\\int_0^1 \\int_{x^2}^{\\sqrt{x}} c(x+2y),dy,dx$</p><p data-end=\"538\" data-start=\"472\"><br/>Factor out $c$:<br/><br/>$1=c\\int_0^1 \\int_{x^2}^{\\sqrt{x}} (x+2y),dy,dx$<br/><br/><br/>Now evaluate the inner integral:<br/><br/>$\\int_{x^2}^{\\sqrt{x}} (x+2y),dy = \\left[xy+y^2\\right]_{x^2}^{\\sqrt{x}}$</p><p data-end=\"672\" data-start=\"648\">$=x\\sqrt{x}+x-(x^3+x^4)$</p><p data-end=\"694\" data-start=\"674\">$=x^{3/2}+x-x^3-x^4$<br/><br/>So,<br/>$1=c\\int_0^1 \\left(x^{3/2}+x-x^3-x^4\\right),dx$<br/><br/><br/>Now integrate:<br/><br/>$\\int_0^1 x^{3/2},dx=\\frac{2}{5}, \\quad \\int_0^1 x,dx=\\frac{1}{2}, \\quad \\int_0^1 x^3,dx=\\frac{1}{4}, \\quad \\int_0^1 x^4,dx=\\frac{1}{5}$<br/><br/>Hence,<br/>$1=c\\left(\\frac{2}{5}+\\frac{1}{2}-\\frac{1}{4}-\\frac{1}{5}\\right)$</p><p data-end=\"1018\" data-start=\"981\">$1=c\\left(\\frac{8+10-5-4}{20}\\right)$</p><p data-end=\"1050\" data-start=\"1020\">$1=c\\left(\\frac{9}{20}\\right)$<br/><br/>$\\boxed{\\therefore c=\\frac{20}{9}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528871/go-classes-dpp-gate-da-probability-continuous-random-variables\" target=\"_blank\">GATE Overflow #528871</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $\\text{E}$ and $\\text{F}$ be two independent events, with $\\text{P(E) = P(F)}=0.25$. Let $\\text{G}$ be another event on the same sample space, which is disjoint from both $\\text{E}$ and $\\text{F},$ and with $\\text{P(G)}=0.25$. Then, $\\text{P(G} \\mid \\text{F})$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$0.5$<br/></span>",
                "<span style=\"display: inline;\">$0.25$<br/></span>",
                "<span style=\"display: inline;\">$0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527428\"></a><div itemprop=\"text\"><p>If they are disjoint, then $\\text{P(A} \\mid \\text{B})=\\dfrac{\\text{P(A} \\cap \\text{B})}{\\text{P(B)}}=0$, because $\\text{P(A} \\cap \\text{B) = P}(\\varnothing)=0.$</p><hr/><p>Since, G and F are disjoint, they cannot happen together.<br/><br/>$P(G | F)$ means Probability of event G happening given event F happened.<br/><br/>Since F has happened and they both cannot happen together, we know G cannot happen.<br/><br/>So, $P(G|F) = 0$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527427/go-classes-dpp-gate-da-probability-conditional-probability\" target=\"_blank\">GATE Overflow #527427</a></small></div>"
        }
    ]
});
