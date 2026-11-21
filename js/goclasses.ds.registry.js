registerTest({
    "name": "DPP 01 - Data Structures (Arrays & Linked Lists - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Arrays & Linked Lists - Part 1",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Arrays & Linked Lists (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5966\" data-start=\"5808\">The UNIX editor $\\texttt{vi}$ allows searching in both directions, and if the search reaches one end, it wraps around and continues from the other end.</p><p data-end=\"6061\" data-start=\"5968\">If the sequence of lines is stored as a linked list, which representation is most reasonable?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Singly linked list<br/></span>",
                "<span style=\"display: inline;\">Doubly linked list<br/></span>",
                "<span style=\"display: inline;\">Circular singly linked list<br/></span>",
                "<span style=\"display: inline;\">Circular doubly linked list<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"538810\"></a><div itemprop=\"text\"><p>Searching in both directions needs forward and backward movement, so a doubly linked list is needed.</p><p>Wraparound means after the last node we should be able to move to the first node, and before the first node we should be able to move to the last node. </p><p>That needs circular links.</p><p>So the best choice is a <strong data-end=\"6569\" data-start=\"6538\">circular doubly linked list</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538809/go-classes-dpp-gate-cs-data-structures-linked-list-application\" target=\"_blank\">GATE Overflow #538809</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5085\" data-start=\"4939\">A circular linked list has $n$ nodes. A function prints every node exactly once and stops when it reaches the starting node again.</p><p data-end=\"5149\" data-start=\"5087\">What is the running time of printing the circular linked list?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(1)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(2^n)$</span>"
            ],
            "answer": [
                "B",
                "C",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"539111\"></a><div itemprop=\"text\"><p>ANs is B,C,D</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1032626748005514141\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538807/go-classes-dpp-gate-cs-data-structures-circular-linked-list\" target=\"_blank\">GATE Overflow #538807</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"907\" data-start=\"725\">A singly linked list contains $n$ nodes. We want to reverse the order of the elements in the linked list by changing links, not by copying all elements into an array.</p><p data-end=\"954\" data-start=\"909\">Which of the following statements is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It can be reversed in $O(n)$ time.<br/></span>",
                "<span style=\"display: inline;\">It can be reversed in $O(\\log n)$ time.<br/></span>",
                "<span style=\"display: inline;\">It must take $O(n^2)$ time.<br/></span>",
                "<span style=\"display: inline;\">It is impossible to reverse a linked list without using an extra array.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538806\"></a><div itemprop=\"text\"><p>To reverse a singly linked list, every node must be visited once because each node’s $\\texttt{next}$ pointer may need to be changed. </p><p>This gives a lower bound of $\\Omega(n)$.</p><p>Using three pointers, $\\texttt{prev}$, $\\texttt{curr}$, and $\\texttt{next}$, the list can be reversed in one traversal. </p><p>Therefore, the time complexity is $O(n)$.</p><p>Correct answer : <strong data-end=\"1512\" data-start=\"1507\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538805/go-classes-dpp-gate-cs-data-structures-linked-list-reverse\" target=\"_blank\">GATE Overflow #538805</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3804\" data-start=\"3721\">The following function is supposed to reverse a singly linked list:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4189\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct node { int data; struct node *next; }; static void reverse(struct node **head_ref) { struct node *prev = NULL; struct node *current = *head_ref; struct node *next; while (current != NULL) { next = current-&gt;next; current-&gt;next = prev; prev = current; current = next; } /* ADD A STATEMENT HERE */ }\" data-start=\"3806\">struct node { int data; struct node *next; }; static void reverse(struct node **head_ref) { struct node *prev = NULL; struct node *current = *head_ref; struct node *next; while (current != NULL) { next = current-&gt;next; current-&gt;next = prev; prev = current; current = next; } /* ADD A STATEMENT HERE */ }</pre><p data-end=\"4251\" data-start=\"4191\">Which statement should replace $\\texttt{/* ADD A STATEMENT HERE */}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{*head_ref = prev;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{*head_ref = current;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{*head_ref = next;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{*head_ref = NULL;}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538804\"></a><div itemprop=\"text\"><p data-end=\"4551\" data-start=\"4370\">After the loop ends, $\\texttt{current}$ becomes $\\texttt{NULL}$, and $\\texttt{prev}$ points to the last node of the original list. </p><p data-end=\"4551\" data-start=\"4370\">That node is the new head after reversal.</p><p data-end=\"4551\" data-start=\"4370\">So we must write:</p><p data-end=\"4579\" data-start=\"4553\">$\\texttt{*head_ref = prev;}$</p><p data-end=\"4579\" data-start=\"4553\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538803/go-classes-dpp-gate-cs-data-structures-final-head-after-reversal\" target=\"_blank\">GATE Overflow #538803</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2414\" data-start=\"2308\">Consider the following C-style code fragment for reversing a non-empty singly linked list:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2519\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"curr = front; next = curr-&gt;next; prev = NULL; while (curr != NULL) { (*) } front = prev;\" data-start=\"2416\">curr = front; next = curr-&gt;next; prev = NULL; while (curr != NULL) { (*) } front = prev;</pre><p data-end=\"2592\" data-start=\"2521\">See the figure to understand what ”reverse” means : </p><p style=\"text-align:center\"><img alt=\"\" height=\"54\" src=\"https://cdn.mathpix.com/snip/images/RCzNlS07qdjhAQyVc5xyHTnbE2YFuPn2I025BFFggj0.original.fullsize.png\" width=\"694\"/></p><p data-end=\"2592\" data-start=\"2521\">Which code should replace $\\texttt{(*)}$ so that the list is reversed correctly?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/RCzNlS07qdjhAQyVc5xyHTnbE2YFuPn2I025BFFggj0.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2688\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"next-&gt;next = prev; prev = curr; curr = next; if (next != NULL) next = next-&gt;next;\" data-start=\"2598\">next-&gt;next = prev; prev = curr; curr = next; if (next != NULL) next = next-&gt;next; </pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-\" data-end=\"2784\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode=\"curr-&gt;next = prev; prev = curr; curr = next; if (next != NULL) next = next-&gt;next;\" data-start=\"2694\">curr-&gt;next = prev; prev = curr; curr = next; if (next != NULL) next = next-&gt;next;</pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2880\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"next-&gt;next = curr; prev = curr; curr = next; if (next != NULL) next = next-&gt;next;\" data-start=\"2790\">next-&gt;next = curr; prev = curr; curr = next; if (next != NULL) next = next-&gt;next; </pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-\" data-end=\"2976\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode=\"prev = curr; curr = next; curr-&gt;next = prev; if (next != NULL) next = next-&gt;next;\" data-start=\"2886\">prev = curr; curr = next; curr-&gt;next = prev; if (next != NULL) next = next-&gt;next;</pre></span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"538802\"></a><div itemprop=\"text\"><p data-end=\"3060\" data-start=\"2993\">At each step, the current node must point backward:</p><p data-end=\"3089\" data-start=\"3062\">$\\texttt{curr-&gt;next = prev;}$</p><p data-end=\"3128\" data-start=\"3091\">Then the three pointers move forward:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3201\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"prev = curr; curr = next; if (next != NULL) next = next-&gt;next;\" data-start=\"3130\">prev = curr; curr = next; if (next != NULL) next = next-&gt;next;</pre><p data-end=\"3321\" data-start=\"3203\">Option B does exactly this. </p><p data-end=\"3321\" data-start=\"3203\">The other options either reverse the wrong link or update $\\texttt{curr}$ before fixing its $\\texttt{next}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538801/go-classes-dpp-gate-cs-data-structures-linked-list-reverse-implement\" target=\"_blank\">GATE Overflow #538801</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5291\" data-start=\"5233\">Consider the following singly linked list:</p><p data-end=\"5337\" data-start=\"5293\">$\\texttt{'B' -&gt; 'A' -&gt; 'S' -&gt; 'E' -&gt; NULL}$</p><p data-end=\"5400\" data-start=\"5339\">The pointer $\\texttt{head}$ points to the first node containing $\\texttt{'B'}$.</p><p data-end=\"5478\" data-start=\"5402\">What character is stored in the node pointed to by the following expression?</p><p data-end=\"5505\" data-start=\"5480\">$\\texttt{head-&gt;next-&gt;next}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{S}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{E}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"538538\"></a><div itemprop=\"text\"><p data-end=\"5568\" data-start=\"5524\">$\\texttt{head}$ points to node $\\texttt{'B'}$.</p><p data-end=\"5604\" data-start=\"5570\">$\\texttt{head-&gt;next}$ points to node $\\texttt{'A'}$.</p><p data-end=\"5646\" data-start=\"5606\">$\\texttt{head-&gt;next-&gt;next}$ points to node $\\texttt{'S'}$.</p><p data-end=\"5670\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5648\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538537/go-classes-dpp-gate-cs-data-structures-pointer-tracing\" target=\"_blank\">GATE Overflow #538537</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4369\" data-start=\"4309\">A singly linked list maintains two pointers:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4468\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct Node *front; // points to first node struct Node *rear; // points to last node\" data-start=\"4371\">struct Node *front; // points to first node struct Node *rear; // points to last node</pre><p data-end=\"4845\" data-start=\"4764\">Which operation would be inefficient when the linked list contains many elements?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion at the end referred to by $\\texttt{front}$<br/></span>",
                "<span style=\"display: inline;\">Insertion at the end referred to by $\\texttt{rear}$<br/></span>",
                "<span style=\"display: inline;\">Deletion from the end referred to by $\\texttt{front}$<br/></span>",
                "<span style=\"display: inline;\">Deletion from the end referred to by $\\texttt{rear}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"538536\"></a><div itemprop=\"text\"><ul><li><strong>A. </strong>Insertion at $\\texttt{front}:$ This is efficient $O(1)$ time. We simply create a new node, point it to the current $\\texttt{front}$ node, and then update the $\\texttt{front}$ reference to point to your new node.<br/> </li><li><strong>B. </strong>Insertion at $\\texttt{rear}:$ Because you have a $\\texttt{rear}$ reference, this is also efficient $O(1)$ time. We create a new node, make the current $\\texttt{rear}$ node point to it, and then update the $\\texttt{rear}$ reference to point to the new node.<br/> </li><li><strong>C. </strong>Deletion from $\\texttt{front}:$ This is efficient $O(1)$ time. We just move the $\\texttt{front}$ reference to point to the second node in the list, $\\texttt{front = front.next}$.<br/> </li><li><strong>D. </strong>Deletion from $\\texttt{rear}:$ This is inefficient $O(N)$ time. To delete the last node, we must update the $\\texttt{rear}$ reference to point to the second-to-last node. However, in a singly linked list, we cannot step backwards. To find the second-to-last node, we must start all the way at the $\\texttt{front}$ and traverse the entire list until we reach it. If the list contains millions of elements, we have to perform millions of steps just to delete one node at the end.</li></ul><div> </div><div><strong>Answer : D</strong></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538534/go-classes-dpp-gate-cs-data-structures-front-and-rear-reference\" target=\"_blank\">GATE Overflow #538534</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3662\" data-start=\"3518\">Consider the problem of finding the middle node in a list $l$ of size $n$, given that $n$ is odd. Count the number of accesses to positions of list $l$ needed to find the middle node using the most time-efficient algorithm, and only $\\text{O(1)}$ space. If the same position is accessed several times, count each of those accesses separately. Let $x/y$ denote integer division. How many accesses to positions of list $l$ does the most efficient algorithm perform to find the middle node when $l$ is implemented by a <strong>singly-linked list</strong> without a size field?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$n + 1$<br/></span>",
                "<span style=\"display: inline;\">$(n + 2) / 2$<br/></span>",
                "<span style=\"display: inline;\">$(3n + 2) / 2$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"538530\"></a><div itemprop=\"text\"><p data-path-to-node=\"4\">We'll be using the using the optimal Two-Pointer (<a href=\"https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare\" rel=\"nofollow\" target=\"_blank\">Tortoise and Hare Algorithm</a>)</p><p data-path-to-node=\"4\"> </p><p data-path-to-node=\"4\">Let's define an \"access\" as a pointer moving to or landing on a node.</p><ol data-path-to-node=\"5\" start=\"1\"><li><p data-path-to-node=\"5,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,0\">Initialization:</b> Both the $\\texttt{slow}$ and $\\texttt{fast}$ pointers start at the head of the list $($Node $1)$.</p><ul data-path-to-node=\"5,0,1\"><li><p data-path-to-node=\"5,0,1,0,0\">Accesses $= 2$</p></li></ul></li><li><p data-path-to-node=\"5,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,1,0\">The Loop:</b> In each step of the traversal:</p><ul data-path-to-node=\"5,1,1\"><li><p data-path-to-node=\"5,1,1,0,0\">The $\\texttt{fast}$ pointer moves forward $2$ nodes (e.g., from Node $1 \\rightarrow$ Node $2 \\rightarrow$ Node $3)$. This requires reading the links sequentially. $(2$ accesses$)$</p></li><li><p data-path-to-node=\"5,1,1,1,0\">The $\\texttt{slow}$ pointer moves forward $1$ node $($e.g., from Node $1 \\rightarrow$ Node $2)$. $(1$ access$)$</p></li><li><p data-path-to-node=\"5,1,1,2,0\">Total accesses per iteration $=3$</p></li></ul></li><li><p data-path-to-node=\"5,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,2,0\">Number of Iterations:</b> To reach the end of an $n$-length list, the fast pointer takes $n−1$ steps. Since it takes $2$ steps per iteration, there are exactly $\\dfrac{n−1​}{2}$​ iterations.</p></li></ol><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"7\">Now, </p><p data-path-to-node=\"7\">Total Accesses $= ($Initial accesses$) + ($Iterations $\\times$ Accesses per iteration$)$</p><p>Total Accesses$=2+\\dfrac{(n−1​)}{2}\\times3$</p><p>Total Accesses$=\\dfrac{4+3n−3​}{2}=\\dfrac{3n+1​}{2}$</p><p data-path-to-node=\"10\">Now, because the problem specifies integer division, for any odd $n$, </p><p data-path-to-node=\"10\">the expression $\\dfrac{3n+1​}{2}$​ yields the exact same integer result as $\\dfrac{3n+2}{2}$​.</p><p data-path-to-node=\"10\"> </p><p data-path-to-node=\"10\"><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538526/go-classes-dpp-gate-cs-data-structures-find-middle-node\" target=\"_blank\">GATE Overflow #538526</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2446\" data-start=\"2339\">Consider the following C function intended to delete the last node of a singly linked list:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2659\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"void removeLast(struct Node *head) { struct Node *p = head; struct Node *q = p-&gt;next; while (q-&gt;next != NULL) { p = q; q = q-&gt;next; } p-&gt;next = NULL; free(q); }\" data-start=\"2448\">void removeLast(struct Node *head) { struct Node *p = head; struct Node *q = p-&gt;next; while (q-&gt;next != NULL) { p = q; q = q-&gt;next; } p-&gt;next = NULL; free(q); }</pre><p data-end=\"2718\" data-start=\"2661\">For which linked lists does this function work correctly?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">No linked lists<br/></span>",
                "<span style=\"display: inline;\">All non-empty linked lists<br/></span>",
                "<span style=\"display: inline;\">All linked lists with more than one node<br/></span>",
                "<span style=\"display: inline;\">Empty list and all linked lists with more than one node<br/></span>",
                "<span style=\"display: inline;\">All linked lists</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"538524\"></a><div itemprop=\"text\"><p data-end=\"3007\" data-start=\"2918\">If the list is empty, $\\texttt{head == NULL}$, so $\\texttt{p-&gt;next}$ causes invalid access.</p><p data-end=\"3105\" data-start=\"3009\">If the list has one node, then $\\texttt{q = p-&gt;next}$ becomes $\\texttt{NULL}$, so $\\texttt{q-&gt;next}$ causes invalid access.</p><p data-end=\"3260\" data-start=\"3107\">For lists with more than one node, $\\texttt{p}$ reaches the second-last node and $\\texttt{q}$ reaches the last node. </p><p data-end=\"3260\" data-start=\"3107\">Then $\\texttt{p-&gt;next = NULL}$ removes the last node correctly.</p><p data-end=\"3260\" data-start=\"3107\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538523/go-classes-dpp-gate-cs-data-structures-delete-last-node\" target=\"_blank\">GATE Overflow #538523</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"893\" data-start=\"844\">Consider the following structure:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"957\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct Node { int data; struct Node *next; };\" data-start=\"895\">struct Node { int data; struct Node *next; };</pre><p data-end=\"1081\" data-start=\"959\">A function should insert a new node containing value $\\texttt{x}$ at the beginning of a singly linked list and return the new head.</p><p data-end=\"1109\" data-start=\"1083\">Which function is correct?</p><p data-end=\"1123\" data-start=\"1111\"><strong data-end=\"1123\" data-start=\"1111\">Option I</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1288\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"struct Node* insertFront(struct Node *head, int x) { head = malloc(sizeof(struct Node)); head-&gt;data = x; head-&gt;next = head; return head; }\" data-start=\"1125\">struct Node* insertFront(struct Node *head, int x) { head = malloc(sizeof(struct Node)); head-&gt;data = x; head-&gt;next = head; return head; }</pre><p data-end=\"1303\" data-start=\"1290\"><strong data-end=\"1303\" data-start=\"1290\">Option II</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1493\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct Node* insertFront(struct Node *head, int x) { struct Node *newNode = malloc(sizeof(struct Node)); newNode-&gt;data = x; newNode-&gt;next = head; return newNode; }\" data-start=\"1305\">struct Node* insertFront(struct Node *head, int x) { struct Node *newNode = malloc(sizeof(struct Node)); newNode-&gt;data = x; newNode-&gt;next = head; return newNode; }</pre><p data-end=\"1509\" data-start=\"1495\"><strong data-end=\"1509\" data-start=\"1495\">Option III</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1716\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"struct Node* insertFront(struct Node *head, int x) { struct Node *newNode = malloc(sizeof(struct Node)); head = newNode; newNode-&gt;data = x; newNode-&gt;next = head; return head; }\" data-start=\"1511\">struct Node* insertFront(struct Node *head, int x) { struct Node *newNode = malloc(sizeof(struct Node)); head = newNode; newNode-&gt;data = x; newNode-&gt;next = head; return head; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only I<br/></span>",
                "<span style=\"display: inline;\">Only II<br/></span>",
                "<span style=\"display: inline;\">Only III<br/></span>",
                "<span style=\"display: inline;\">I and II only<br/></span>",
                "<span style=\"display: inline;\">II and III only</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"538522\"></a><div itemprop=\"text\"><p data-end=\"1932\" data-start=\"1813\">Option II is correct. </p><p data-end=\"1932\" data-start=\"1813\">The new node stores $\\texttt{x}$, points to the old head, and is returned as the new head.</p><p data-end=\"1991\" data-start=\"1934\">Option I creates a self-loop because $\\texttt{head-&gt;next = head}$.</p><p data-end=\"2129\" data-start=\"1993\">Option III also creates a self-loop because after $\\texttt{head = newNode}$, </p><p data-end=\"2129\" data-start=\"1993\">the statement $\\texttt{newNode-&gt;next = head}$ makes the node point to itself.</p><p data-end=\"2129\" data-start=\"1993\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538521/go-classes-dpp-gate-cs-data-structures-insert-at-front\" target=\"_blank\">GATE Overflow #538521</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Data Structures (Arrays & Linked Lists - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Arrays & Linked Lists - Part 2",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 7,
    "topicsCovered": "Arrays & Linked Lists (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"656\" data-start=\"598\">Consider the following singly linked list:</p><p data-end=\"710\" data-start=\"658\">$\\texttt{12 -&gt; 18 -&gt; 25 -&gt; 31 -&gt; 44 -&gt; 57 -&gt; NULL}$</p><p data-end=\"791\" data-start=\"712\">Now, consider the following function:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"953\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int Size(struct Node *list) { int count = 0; while (list != NULL) { count++; list = list-&gt;next; } return count; }\" data-start=\"793\">int Size(struct Node *list) { int count = 0; while (list != NULL) { count++; list = list-&gt;next; } return count; }</pre><p data-end=\"1056\" data-start=\"955\">If $\\texttt{head}$ points to the first node containing $12$, what value will be returned by the function call?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1077\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"Size(head)\" data-start=\"1058\">Size(head)</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"538433\"></a><div itemprop=\"text\"><p data-end=\"1190\" data-start=\"1096\">The function starts from $\\texttt{head}$ and visits every node until it reaches $\\texttt{NULL}$.</p><p data-end=\"1214\" data-start=\"1192\">The nodes visited are:</p><p data-end=\"1250\" data-start=\"1216\">$\\texttt{12, 18, 25, 31, 44, 57}$</p><p data-end=\"1293\" data-start=\"1252\">There are $6$ actual nodes before $\\texttt{NULL}$.</p><p data-end=\"1324\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1295\">$\\Rightarrow \\texttt{Size(head)}$ returns $6$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538432/go-classes-dpp-gate-cs-data-structures-linked-list-traverse\" target=\"_blank\">GATE Overflow #538432</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8072\" data-start=\"8032\">A singly linked list is:</p><p data-end=\"8106\" data-start=\"8074\">$\\texttt{5 -&gt; 8 -&gt; 20 -&gt; NULL}$</p><p data-end=\"8195\" data-start=\"8108\">A new node $\\texttt{​newP}$ contains data $9$. Pointer $\\texttt{​prevP}$ points to the node containing $8$.</p><p data-end=\"8220\" data-start=\"8197\">The insertion logic is:</p><pre data-end=\"8276\" data-start=\"8222\"><code>newP-&gt;next = prevP-&gt;next; prevP-&gt;next = newP;</code></pre><p data-end=\"8323\" data-start=\"8278\">What will be the linked list after insertion?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{9 -> 5 -> 8 -> 20 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 -> 9 -> 8 -> 20 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 -> 8 -> 9 -> 20 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 -> 8 -> 20 -> 9 -> NULL}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538428\"></a><div itemprop=\"text\"><p data-end=\"8634\" data-start=\"8471\">$\\texttt{newP-&gt;next = prevP-&gt;next}$ makes node $9$ point to node $20$.</p><p data-end=\"8634\" data-start=\"8471\">Then $\\texttt{prevP-&gt;next = newP}$ makes node $8$ point to node $9$.</p><p data-end=\"8634\" data-start=\"8471\">So the final list is:</p><p data-end=\"8673\" data-is-last-node=\"\" data-start=\"8636\">$\\texttt{5 -&gt; 8 -&gt; 9 -&gt; 20 -&gt; NULL}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538426/go-classes-dpp-gate-cs-data-structures-insertion-in-linked-list\" target=\"_blank\">GATE Overflow #538426</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6983\" data-start=\"6644\">A singly linked list is:</p><p data-end=\"7075\" data-start=\"7027\">$\\texttt{5 -&gt; 8 -&gt; 20 -&gt; 9 -&gt; 20 -&gt; 7 -&gt; NULL}$</p><p data-end=\"7216\" data-start=\"7077\">The function $\\texttt{deleteByValue(L, val)}$ removes only the first node whose data is equal to $\\texttt{val}$. It adjusts links and frees the removed node.</p><p data-end=\"7232\" data-start=\"7218\">After calling:</p><p data-end=\"7264\" data-start=\"7234\">$\\texttt{deleteByValue(L, 20);}$</p><p data-end=\"7301\" data-start=\"7266\">what will be the final linked list?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 -> 8 -> 9 -> 20 -> 7 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 -> 8 -> 9 -> 7 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 -> 20 -> 9 -> 20 -> 7 -> NULL}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 -> 8 -> 20 -> 9 -> 7 -> NULL}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538425\"></a><div itemprop=\"text\"><p data-end=\"7578\" data-start=\"7464\">Only the first node with value $\\texttt{20}$ is deleted. The second $\\texttt{20}$ remains in the list.<br/><br data-end=\"7567\" data-start=\"7564\"/>Final list:</p><p data-end=\"7622\" data-start=\"7580\">$\\texttt{5 -&gt; 8 -&gt; 9 -&gt; 20 -&gt; 7 -&gt; NULL}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538424/go-classes-dpp-gate-cs-data-structures-delete-by-value\" target=\"_blank\">GATE Overflow #538424</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"732\" data-start=\"662\">A sequence of $n$ elements is implemented in two ways:</p><p data-end=\"945\" data-start=\"881\">Which of the following statements are correct in the worst case?</p><p><strong>Given Details:</strong></p><ul><li>As a normal array with contiguous memory and no extra empty slot.</li><li>As a singly linked list with only a $\\texttt{head}$ pointer and no $\\texttt{tail}$ pointer.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">In an array, $\\texttt{get_at(i)}$ takes $O(1)$ time.</span>",
                "<span style=\"display: inline;\">In an array, $\\texttt{insert_first(x)}$ takes $O(1)$ time.</span>",
                "<span style=\"display: inline;\">In a singly linked list, $\\texttt{get_at(i)}$ takes $O(1)$ time.</span>",
                "<span style=\"display: inline;\">In a singly linked list, $\\texttt{insert_first(x)}$ takes $O(1)$ time.</span>",
                "<span style=\"display: inline;\">In a singly linked list, $\\texttt{delete_first()}$ takes $O(1)$ time.</span>",
                "<span style=\"display: inline;\">In a singly linked list with only $\\texttt{head}$, $\\texttt{insert_last(x)}$ takes $O(1)$ time</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"538421\"></a><div itemprop=\"text\">Array access by index is direct, so $\\texttt{get_at(i)}$ is $O(1)$.<br/> <br/> But inserting at the beginning of an array needs shifting, so it is $O(n)$.<br/> <br/> In a singly linked list, accessing the $i$-th node needs traversal, so it is $O(n)$.<br/> <br/> Inserting or deleting the first node only changes the $\\texttt{head}$ pointer, so both are $O(1)$<br/> <br/> Without a $\\texttt{tail}$ pointer, inserting at the end needs traversal, so it is $O(n)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/538420/go-classes-dpp-gate-cs-data-structures-array-vs-linked-list\" target=\"_blank\">GATE Overflow #538420</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"621\" data-start=\"493\">For a singly linked list storing only the head pointer, which of the following operations can be done in worst-case $O(1)$ time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Access the $i$-th element<br/></span>",
                "<span style=\"display: inline;\">Modify the $i$-th element<br/></span>",
                "<span style=\"display: inline;\">Insert at the beginning<br/></span>",
                "<span style=\"display: inline;\">Delete the first node<br/></span>",
                "<span style=\"display: inline;\">Insert at the end</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"538415\"></a><div itemprop=\"text\">Accessing or modifying the $i$-th node needs traversal, so it takes $O(i)$, worst-case $O(n)$. <br/> <br/> Insertion at the beginning only changes the new node’s next pointer and head pointer, so $O(1)$. <br/> <br/> Deleting the first node also only changes head to $\\texttt{head-&gt;next}$, so $O(1)$. <br/> <br/> Inserting at the end needs traversal if there is no tail pointer, so $O(n)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/538414/go-classes-dpp-gate-cs-data-structures-linked-list-complexity\" target=\"_blank\">GATE Overflow #538414</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Data Structures (Stacks, Queues & Expressions - Part 1)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 1",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"705\" data-start=\"631\">Given a stack $S$ with $5$ elements from top to bottom as:</p><p data-end=\"723\" data-start=\"707\">$2, 4, 6, 8, 10$</p><p data-end=\"748\" data-start=\"725\">and an empty queue $Q$.</p><p data-end=\"822\" data-start=\"750\">First, remove the elements one by one from $S$ and insert them into $Q$.</p><p data-end=\"898\" data-start=\"824\">Then, remove the elements one by one from $Q$ and re-insert them into $S$.</p><p data-end=\"949\" data-start=\"900\">What does stack $S$ look like from top to bottom?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2, 4, 6, 8, 10$<br/></span>",
                "<span style=\"display: inline;\">$10, 2, 4, 6, 8$<br/></span>",
                "<span style=\"display: inline;\">$10, 8, 6, 4, 2$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"541697\"></a><div itemprop=\"text\"><p data-end=\"1113\" data-start=\"1054\">Initially, stack $S$ from top to bottom is:</p><p data-end=\"1131\" data-start=\"1115\">$2, 4, 6, 8, 10$</p><p data-end=\"1194\" data-start=\"1133\">When we pop from $S$ and enqueue into $Q$, the queue becomes:</p><p data-end=\"1246\" data-start=\"1196\">Front $\\rightarrow 2, 4, 6, 8, 10 \\leftarrow$ Rear</p><p data-end=\"1290\" data-start=\"1248\">Now we dequeue from $Q$ and push into $S$.</p><p data-end=\"1331\" data-start=\"1292\">Elements come out of $Q$ in this order:</p><p data-end=\"1349\" data-start=\"1333\">$2, 4, 6, 8, 10$</p><p data-end=\"1436\" data-start=\"1351\">Since each element is pushed onto the stack, the last pushed element becomes the top.</p><p data-end=\"1480\" data-start=\"1438\">So, final stack $S$ from top to bottom is:</p><p data-end=\"1498\" data-start=\"1482\">$10, 8, 6, 4, 2$</p><p data-end=\"1498\" data-start=\"1482\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541696/go-classes-dpp-gate-cs-da-data-structure-stack-and-queue-transfer\" target=\"_blank\">GATE Overflow #541696</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"527\" data-start=\"484\">Which of the following statements are true?</p><p data-end=\"637\" data-start=\"529\">$\\text{S1.}$ Stack operations $\\texttt{push}$, $\\texttt{pop}$, and $\\texttt{isEmpty}$ can be worst-case $O(1)$ for a linked-list implementation.</p><p data-end=\"771\" data-start=\"639\">$\\text{S2.}$ Stack operations $\\texttt{push}$, $\\texttt{pop}$, and $\\texttt{isEmpty}$ can be worst-case $O(1)$ for an array-list implementation using a circular buffer.</p><p data-end=\"947\" data-start=\"773\">$\\text{S3.}$ Enqueueing and dequeueing operations are more expensive in the worst case for a priority queue backed by a balanced heap than for a regular queue backed by a linked list.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$ and $\\text{S2}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$ and $\\text{S3}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1, S2}$ and $\\text{S3}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541698\"></a><div itemprop=\"text\"><p data-end=\"168\" data-start=\"157\">$\\text{S1}$ is true.</p><p data-end=\"250\" data-start=\"170\">For a linked-list implementation of stack, we can insert and delete at the head.</p><p data-end=\"327\" data-start=\"252\">So, $\\texttt{push}$, $\\texttt{pop}$, and $\\texttt{isEmpty}$ can all be done in worst-case $O(1)$ time.</p><p data-end=\"341\" data-start=\"329\">$\\text{S2}$ is false.</p><p data-end=\"415\" data-start=\"343\">For an array-list implementation, $\\texttt{push}$ may require resizing the array.</p><p data-end=\"460\" data-start=\"417\">So, worst-case $\\texttt{push}$ is not always $O(1)$.</p><p data-end=\"473\" data-start=\"462\">$\\text{S3}$ is true.</p><p data-end=\"553\" data-start=\"475\">A regular queue using a linked list can do enqueue and dequeue in $O(1)$ time.</p><p data-end=\"620\" data-start=\"555\">A priority queue backed by a balanced heap needs heap adjustment.</p><p data-end=\"675\" data-start=\"622\">So, insertion and deletion can take $O(\\log n)$ time.</p><p data-end=\"708\" data-start=\"677\">Therefore, true statements are: $\\boxed{S1 \\text{ and } S3}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541691/go-classes-dpp-gate-cs-da-data-structure-stack-%26-queue\" target=\"_blank\">GATE Overflow #541691</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"683\" data-start=\"580\">Assume there are $n$ elements in the data structure. Consider the following statements:</p><p data-end=\"1104\" data-start=\"1019\">Which of the following gives the correct truth values of $\\text{S1, S2,}$ and $\\text{S3}$ respectively?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{S1}:$ A stack can be implemented using a linked list such that each individual $\\texttt{push}$ and $\\texttt{push}$ operation takes $\\text{O(1)}$ time.</li><li>$\\text{S2}:$ An unbounded-size stack can be implemented using an array such that each individual $\\texttt{push}$ and $\\texttt{push}$ operation always takes $\\text{O(1)}$ time.</li><li>$\\text{S3}:$ The core data structure used in Depth First Search is a queue.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True, False, False</span>",
                "<span style=\"display: inline;\">True, True, False</span>",
                "<span style=\"display: inline;\">False, True, False</span>",
                "<span style=\"display: inline;\">True, False, True</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539468\"></a><div itemprop=\"text\"><p data-end=\"1363\" data-start=\"1216\">$\\text{S1}$ is true. </p><p data-end=\"1363\" data-start=\"1216\">If the top of the stack is kept at the head of a linked list, both $\\texttt{push}$ and $\\texttt{pop}$ need only constant pointer updates.</p><p data-end=\"1525\" data-start=\"1365\">$\\text{S2}$ is false. </p><p data-end=\"1525\" data-start=\"1365\">An array-based unbounded stack may need resizing, and a resizing operation can take $\\text{O(n)}$ time. </p><p data-end=\"1525\" data-start=\"1365\">So each individual operation is not always $\\text{O(1)}$.</p><p data-end=\"1627\" data-start=\"1527\">$\\text{S3}$ is false. </p><p data-end=\"1627\" data-start=\"1527\">DFS uses a stack idea, either explicit stack or recursion call stack. </p><p data-end=\"1627\" data-start=\"1527\">BFS uses a queue.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539467/go-classes-dpp-gate-cs-da-data-structure-stack-implementation-%26-dfs\" target=\"_blank\">GATE Overflow #539467</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Suppose a client performs an intermixed sequence of $\\texttt{enqueue}$ and $\\texttt{dequeue}$ operations on a queue. The enqueue operations put the integers $0$ through $9$ in order onto the queue. The dequeue operations print the returned values.</p><p><b>Which of the following output sequences could NOT occur?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{0 1 2 3 4 5 6 7 8 9}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{4 6 8 7 5 3 2 9 0 1}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{2 5 6 7 4 8 9 3 1 0}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{4 3 2 1 0 5 6 7 8 9}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539427\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>A queue follows FIFO order, which means first-in-first-out.</p><p>Since the values are enqueued in this order:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}$</p><p>the dequeue output must preserve this same relative order.</p><p>Option A can occur because it is exactly the enqueue order.</p><p>Options B, C and D cannot occur because they output later inserted elements before earlier inserted elements.</p><p>Therefore, the impossible sequences are <b>B, C and D</b>.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539425/go-classes-dpp-gate-cs-da-data-structure-queue-order\" target=\"_blank\">GATE Overflow #539425</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Consider the following postfix expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{1 2 3 + 4 5 * * +}$</p><p><b>Which of the following fully parenthesized infix expressions is equivalent to it?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( ( 1 + 2 ) * ( ( 3 + 4 ) * 5 ) )}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 1 * ( ( 2 + 3 ) + ( 4 * 5 ) ) )}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( ( 1 + 2 ) + ( 3 * ( 4 + 5 ) ) )}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539309\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Start with the postfix expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{1 2 3 + 4 5 * * +}$</p><p>Use a stack of expressions.</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{Push 1}$<br/>$\\texttt{Push 2}$<br/>$\\texttt{Push 3}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{+}$<br/>$\\texttt{2 3 +} \\rightarrow \\texttt{( 2 + 3 )}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{Push 4}$<br/>$\\texttt{Push 5}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{*}$<br/>$\\texttt{4 5 *} \\rightarrow \\texttt{( 4 * 5 )}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{*}$<br/>$\\texttt{( 2 + 3 ) ( 4 * 5 ) * } \\rightarrow \\texttt{( ( 2 + 3 ) * ( 4 * 5 ) )}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{+}$<br/>$\\texttt{1}$ previous $\\texttt{+} \\rightarrow \\texttt{( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )}$</p><p>Therefore, the equivalent fully parenthesized infix expression is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\"><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539307/go-classes-dpp-gate-cs-data-structures-postfix-to-infix\" target=\"_blank\">GATE Overflow #539307</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Consider the following prefix expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ * 2 3 / 8 4}$</p><p><b>Which of the following is its correct postfix form?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 * 8 4 / +}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ * 2 3 / 8 4}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 * 3 + 8 / 4}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 8 4 * / +}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539305\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Prefix expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ * 2 3 / 8 4}$</p><p>This represents the expression tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"172\" src=\"https://cdn.mathpix.com/snip/images/HDNxKsK7EAVLOYj3496aZstIEzFfym1AJpfvpkfk7zs.original.fullsize.png\" width=\"232\"/></p><p>Postfix means postorder traversal:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Left $\\rightarrow$ Right $\\rightarrow$ Root</p><p>Left subtree $\\texttt{* 2 3}$ becomes:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 *}$</p><p>Right subtree $\\texttt{/ 8 4}$ becomes:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{8 4 /}$</p><p>Then the root $\\texttt{+}$ comes at the end.</p><p>So the postfix expression is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 * 8 4 / +}$<br/><br/><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539302/go-classes-dpp-gate-cs-data-structures-prefix-postfix\" target=\"_blank\">GATE Overflow #539302</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>For the expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 * 3 + 8 / 4}$</p><p>Assume the expression tree has $\\texttt{+}$ as the root, $\\texttt{*}$ as the left subtree root, and $\\texttt{/}$ as the right subtree root.</p><p><b>Which of the following is the correct prefix expression?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ * 2 3 / 8 4}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 * 8 4 / +}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 * 3 + 8 / 4}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ 2 * 3 / 8 4}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539300\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Prefix means preorder traversal of the expression tree:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{Root} \\rightarrow \\texttt{Left} \\rightarrow \\texttt{Right}$</p><p>The root operator is $\\texttt{+}$</p><p>The left subtree is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{* 2 3}$</p><p>The right subtree is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{/ 8 4}$</p><p>So the full prefix expression is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{+ * 2 3 / 8 4}$<br/><br/><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539298/go-classes-dpp-gate-cs-data-structures-infix-to-prefix\" target=\"_blank\">GATE Overflow #539298</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Evaluate the following postfix expression:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{3 4 5 + *}$</p><p><b>Enter the numerical value.</b></p></div></div></span>",
            "image": "",
            "options": [],
            "answer": "27",
            "solution": "<div class=\"solution-content\"><a name=\"539295\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>In postfix evaluation, operands are pushed on a stack. </p><p>When an operator appears, the required operands are popped and the result is pushed back.</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{Push 3}$<br/>$\\texttt{Push 4}$<br/>$\\texttt{Push 5}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{+}$<br/>$\\texttt{4 + 5 = 9}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Now stack has:<br/>$\\texttt{3, 9}$</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Operator $\\texttt{*}$<br/>$\\texttt{3 * 9 = 27}$</p><p>Therefore, the value of the postfix expression is: $27$</p><p><b>Correct Answer:</b> $27$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539293/go-classes-dpp-gate-cs-data-structures-postfix-value\" target=\"_blank\">GATE Overflow #539293</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Convert the following fully parenthesized infix expression into postfix form:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 2 + ( ( 3 + 4 ) * ( 5 * 6 ) ) )}$</p><p><b>Which of the following is the correct postfix expression?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 4 + 5 6 * * +}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 + 4 5 * 6 * +}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 4 5 6 + * * +}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 4 + * 5 6 * +}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539292\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>The given expression is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 2 + ( ( 3 + 4 ) * ( 5 * 6 ) ) )}$</p><p>First convert the inner expressions:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 3 + 4 )} \\rightarrow \\texttt{3 4 +}$<br/>$\\texttt{( 5 * 6 )} \\rightarrow \\texttt{5 6 *}$</p><p>Now:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( ( 3 + 4 ) * ( 5 * 6 ) )} \\rightarrow \\texttt{3 4 + 5 6 * *}$</p><p>Finally:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{( 2 + previous )} \\rightarrow \\texttt{2 3 4 + 5 6 * * +}$</p><p>Therefore, the correct postfix expression is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 3 4 + 5 6 * * +}$<br/><br/><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539291/go-classes-dpp-gate-cs-data-structures-infix-to-postfix\" target=\"_blank\">GATE Overflow #539291</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>A stack is used to check whether parentheses, braces, and brackets are properly balanced.</p><p>Consider the following two inputs:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Input $1: \\texttt{[()]\\{\\}\\{[()()]()\\}}$<br/>Input $2: \\texttt{[(])}$</p><p>What should the stack-based checker return for Input $1$ and Input $2$ respectively?</p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{true, false}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{false, true}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{true, true}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{false, false}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539210\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>In Input $1$:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{[()]\\{\\}\\{[()()]()\\}}$</p><p>every opening symbol is closed in the correct reverse order, so it is balanced.</p><p>In Input $2$:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{[(])}$</p><p>the closing bracket $\\texttt{]}$ appears while the most recent unmatched opening symbol is $\\texttt{(}$. This is a mismatch.</p><p>Therefore, the outputs are:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{true, false}$<br/><br/><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539209/go-classes-dpp-gate-cs-da-data-structure-balanced-brackets\" target=\"_blank\">GATE Overflow #539209</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Data Structures (Stacks, Queues & Expressions - Part 2)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 2",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>Suppose an intermixed sequence of stack push and pop operations is performed. The push operations push the integers $0$ through $9$ in order. The pop operations print the returned values.</p><p><b>Which of the following output sequences could NOT occur?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{4 3 2 1 0 9 8 7 6 5}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{4 6 8 7 5 3 2 9 0 1}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 5 6 7 4 8 9 3 1 0}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{4 3 2 1 0 5 6 7 8 9}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{1 2 3 4 5 6 9 8 7 0}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{0 4 6 5 3 8 1 7 2 9}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{1 4 7 9 8 6 5 3 0 2}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{2 1 4 3 6 5 8 7 9 0}$</p></span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539208\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>A stack follows LIFO order. Once a larger later item is pushed above smaller earlier items, the lower item cannot be popped before the items above it.</p><p>In option <b>B</b>, after producing part of the sequence, $1$ blocks $0$, so $0$ cannot come before $1$.</p><p>In option <b>F</b>, after some required pushes, an item below the stack is demanded before the item above it. This violates LIFO order.</p><p>In option <b>G</b>, the output asks for $0$ before $2$, even though $2$ is above $0$ on the stack at that stage.</p><p>Therefore, the impossible sequences are <b>B, F and G</b>.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539183/go-classes-dpp-gate-cs-da-data-structure-stack-permutation\" target=\"_blank\">GATE Overflow #539183</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>A stack client reads tokens from left to right. If the token is a word, it is pushed onto the stack. If the token is $\\texttt{-}$, one item is popped and printed.</p><p>Consider the following input:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{it was - the best - of times - - - it was - the - -}$</p><p><b>What is printed?</b></p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{was best times of the was the it}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{it was the best of times was the}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{was best of times the was it the}$</p></span>",
                "<span style=\"display: inline;\"><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{best was times of the was the it}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539155\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>In a stack, the most recently pushed item is popped first.</p><pre data-pbcklang=\"text\" data-pbcktabsize=\"4\">it -&gt; push it was -&gt; push was - -&gt; pop was the -&gt; push the best -&gt; push best - -&gt; pop best of -&gt; push of times -&gt; push times - -&gt; pop times - -&gt; pop of - -&gt; pop the it -&gt; push it was -&gt; push was - -&gt; pop was the -&gt; push the - -&gt; pop the - -&gt; pop it</pre><p><b>Printed sequence:</b></p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\texttt{was best times of the was the it}$</p><p>One item remains on the stack at the end.</p><p><b>Correct Option: A</b></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539153/go-classes-dpp-gate-cs-da-data-structure-stack-output\" target=\"_blank\">GATE Overflow #539153</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"849\" data-start=\"779\">A queue is implemented using two stacks $\\text{S1}$ and $\\text{S2}$.</p><p data-end=\"1010\" data-start=\"851\">Use the implementation where $\\texttt{dequeue()}$ is $\\text{O(1)}$ by keeping the <strong data-end=\"958\" data-start=\"917\">front of the queue at the top of </strong>$\\textbf{S1}$. Stack $\\text{S2}$ is used temporarily during $\\texttt{enqueue()}$.</p><p data-end=\"1084\" data-start=\"1012\">Starting with both stacks empty, perform the following queue operations:</p><pre data-end=\"1172\" data-start=\"1086\"><code>enqueue(1) enqueue(2) enqueue(3) dequeue() dequeue() enqueue(4) enqueue(5)</code></pre><p data-end=\"1219\" data-start=\"1174\">What are the final contents of $\\text{S1}$ and $\\text{S2}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><pre><code>S1 top to bottom: 3, 4, 5 S2: empty</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>S1 top to bottom: 5, 4, 3 S2: empty</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>S1 top to bottom: 3 S2 top to bottom: 5, 4</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>S1 top to bottom: 4, 5, 3 S2: empty</code></pre></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539138\"></a><div itemprop=\"text\"><p data-end=\"1557\" data-start=\"1455\">Since $\\texttt{dequeue()}$ is $\\text{O(1)}$, the front of the queue is always kept at the top of $\\text{S1}$.</p><p data-end=\"1565\" data-start=\"1559\">After:</p><pre data-end=\"1613\" data-start=\"1567\"><code>enqueue(1), enqueue(2), enqueue(3)</code></pre><p data-end=\"1634\" data-start=\"1615\">the queue order is:</p><pre data-end=\"1672\" data-start=\"1636\"><code>front -&gt; 1, 2, 3 &lt;- rear</code></pre><p data-end=\"1704\" data-start=\"1674\">So $\\text{S1}$ from top to bottom is:</p><pre data-end=\"1725\" data-start=\"1706\"><code>1, 2, 3</code></pre><p data-end=\"1785\" data-start=\"1727\">After two $\\texttt{dequeue()}$ operations, $1$ and $2$ are removed.</p><p data-end=\"1801\" data-start=\"1787\">Queue becomes:</p><pre><code>front -&gt; 3 &lt;- rear</code></pre><p data-end=\"1840\" data-start=\"1835\">Then:</p><pre><code>enqueue(4), enqueue(5)</code></pre><p data-end=\"1902\" data-start=\"1878\">the queue order becomes:</p><pre><code>front -&gt; 3, 4, 5 &lt;- rear</code></pre><p data-end=\"1978\" data-start=\"1942\">So final $\\text{S1}$ from top to bottom is:</p><pre><code>3, 4, 5</code></pre><p data-end=\"2068\" data-start=\"2001\">$\\text{S2}$ is only used temporarily during $\\texttt{enqueue()}$, so it ends empty.</p><p data-end=\"2092\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2070\"><br/>Correct option: <strong data-end=\"2091\" data-start=\"2086\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539137/go-classes-dpp-gate-cs-data-structures-queue-using-stacks\" target=\"_blank\">GATE Overflow #539137</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4694\" data-start=\"4577\">Suppose a circular queue of capacity $(n - 1)$ elements is implemented with an array of $n$ elements.</p><p data-end=\"4810\" data-start=\"4696\">Insertion and deletion operations are carried out using $\\texttt{REAR}$ and $\\texttt{FRONT}$ as array index variables, respectively.</p><p data-end=\"4822\" data-start=\"4812\">Initially:</p><p data-end=\"4852\" data-start=\"4824\">$\\texttt{REAR = FRONT = 0}$</p><p data-end=\"4915\" data-start=\"4854\">Which conditions correctly detect queue full and queue empty?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><pre><code>Full: (REAR + 1) mod n == FRONT Empty: REAR == FRONT</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>Full: (REAR + 1) mod n == FRONT Empty: (FRONT + 1) mod n == REAR</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>Full: REAR == FRONT Empty: (REAR + 1) mod n == FRONT</code> </pre></span>",
                "<span style=\"display: inline;\"><pre><code>Full: (FRONT + 1) mod n == REAR Empty: REAR == FRONT</code></pre></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539131\"></a><div itemprop=\"text\"><p data-end=\"5372\" data-start=\"5228\">In a circular queue using an array of size $n$ but capacity $n - 1$, one slot is kept empty to distinguish full and empty cases.</p><p data-end=\"5398\" data-start=\"5374\">The queue is empty when:</p><p data-end=\"5425\" data-start=\"5400\">$\\texttt{REAR == FRONT}$</p><p data-end=\"5494\" data-start=\"5427\">The queue is full when the next position of $\\texttt{REAR}$ becomes $\\texttt{FRONT}:$</p><p data-end=\"5533\" data-start=\"5496\">$\\texttt{(REAR + 1) mod n == FRONT}$</p><p data-end=\"5556\" data-start=\"5535\">Correct option: <strong data-end=\"5556\" data-start=\"5551\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539130/go-classes-dpp-gate-cs-data-structures-circular-queue\" target=\"_blank\">GATE Overflow #539130</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3449\" data-start=\"3342\">A FIFO queue is represented using a circular linked list and only one external pointer $\\text{Q}$.</p><p data-end=\"3596\" data-start=\"3573\">Which design is better?</p><p><strong>Given Details:</strong></p><ul><li>Design $1: \\text{Q}$ points to the node containing the front item.</li><li>Design $2: \\text{Q}$ points to the node containing the rear item.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Design $1$ is better.</span>",
                "<span style=\"display: inline;\">Design $2$ is better.</span>",
                "<span style=\"display: inline;\">Both are the same.</span>",
                "<span style=\"display: inline;\">$\\text{Q}$ should point to the middle node.</span>",
                "<span style=\"display: inline;\">A circular linked list cannot be used to represent a FIFO queue.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539129\"></a><div itemprop=\"text\"><p data-end=\"3851\" data-start=\"3798\">If $\\text{Q}$ points to the rear node, then:</p><pre data-end=\"3900\" data-start=\"3853\"><code>front node = Q-&gt;next rear node = Q</code></pre><p data-end=\"3957\" data-start=\"3902\">Enqueue can be done after the rear node in $\\text{O}(1)$ time.</p><p data-end=\"4034\" data-start=\"3959\">Dequeue can remove $\\text{Q} \\rightarrow \\text{next}$, which is the front node, also in $\\text{O}(1)$ time.</p><p data-end=\"4119\" data-start=\"4036\">If $\\text{Q}$ points to the front node, then reaching the rear node may require traversal.</p><p data-end=\"4183\" data-start=\"4121\">So the better design is to keep $\\text{Q}$ pointing to the rear node.</p><p data-end=\"4206\" data-start=\"4185\">Correct option: <strong data-end=\"4206\" data-start=\"4201\">B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539126/go-classes-dpp-gate-cs-data-structures-circular-linked-list-queue\" target=\"_blank\">GATE Overflow #539126</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2330\" data-start=\"2143\">Consider an array implementation of a queue. Suppose we try to keep all items at the front of a partially-filled array, so that $\\texttt{data[0]}$ is always the front of the queue.</p><p data-end=\"2352\" data-start=\"2332\">What would go wrong?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The enqueue method would require linear time.<br/></span>",
                "<span style=\"display: inline;\">The $\\texttt{isEmpty}$ method would require linear time.<br/></span>",
                "<span style=\"display: inline;\">The dequeue method would require linear time.<br/></span>",
                "<span style=\"display: inline;\">None of the above.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"539125\"></a><div itemprop=\"text\"><p>In the given array-based queue implementation, the front element is always stored at $\\texttt{data[0]}$, and the remaining elements occupy consecutive positions in the array.</p><p>A queue follows the <strong>First-In, First-Out (FIFO)</strong> principle, meaning that the element inserted first is removed first.</p><p><strong>A : Incorrect</strong></p><p>During an enqueue operation, a new element can be inserted at the next available position after the current rear element.</p><p>By maintaining the number of elements or a rear index, the insertion position can be determined in constant time.</p><p>$\\therefore T_{\\text{enqueue}}=\\Theta(1)$ assuming sufficient array capacity.</p><p><br/><strong>B : Incorrect</strong></p><p>The $\\texttt{isEmpty()}$ operation only needs to determine whether the queue contains any elements.</p><p>If a variable $\\mathrm{size}$ maintains the number of elements, the condition for an empty queue is simply, $\\mathrm{size}=0$</p><p>Alternatively, a suitable rear-index convention can be used.</p><p>Thus, there is no need to traverse the array.</p><p>$T_{\\text{isEmpty}}=\\Theta(1)$</p><p><br/><strong>C : Correct</strong></p><p>Since $\\texttt{data[0]}$ must always contain the front element, removing the front element requires shifting all remaining elements one position toward the beginning of the array.</p><p>For eg, consider a queue containing $[10,20,30,40]$</p><p>After removing the front element $10$, the remaining elements must be shifted to obtain $[20,30,40]$</p><p>For a queue containing $n$ elements, the dequeue operation requires shifting $n-1$ elements.</p><p>Hence,</p><p>$T_{\\text{dequeue}}(n)=\\Theta(n)$</p><p>Therefore, dequeue requires <strong>linear time in the worst case</strong>.</p><p><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539124/go-classes-dpp-gate-cs-data-structures-array-queue\" target=\"_blank\">GATE Overflow #539124</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"799\" data-start=\"712\">Consider an initially empty stack $\\text{S}$ and an initially empty queue $\\text{Q}$.</p><p data-end=\"840\" data-start=\"801\">The following operations are performed:</p><pre data-end=\"1025\" data-start=\"842\"><code>S.push(5) S.push(6) S.push(S.top()) S.push(7) Q.enqueue(S.pop()) Q.enqueue(5) Q.enqueue(6) print(Q.front()) S.push(Q.dequeue()) print(S.pop()) S.pop() print(S.pop())</code></pre><p data-end=\"1048\" data-start=\"1027\"><em>(Note : The front() function is used to access the first element stored in the queue.)</em></p><p data-end=\"1048\" data-start=\"1027\">What will be printed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$567$<br/></span>",
                "<span style=\"display: inline;\">$765$<br/></span>",
                "<span style=\"display: inline;\">$775$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"539123\"></a><div itemprop=\"text\"><p data-end=\"1185\" data-start=\"1131\">After the first four stack operations:</p><p data-end=\"1213\" data-start=\"1187\">$\\text{S = 5, 6, 6, 7}$</p><p data-end=\"1239\" data-start=\"1215\">where $7$ is at the top.</p><p data-end=\"1246\" data-start=\"1241\">Then:</p><p data-end=\"1278\" data-start=\"1248\">$\\texttt{Q.enqueue(S.pop())}$</p><p data-end=\"1305\" data-start=\"1280\">moves $7$ into the queue.</p><p data-end=\"1321\" data-start=\"1307\">Queue becomes:</p><p data-end=\"1346\" data-start=\"1323\">$\\text{Q = 7, 5, 6}$</p><p data-end=\"1351\" data-start=\"1348\">So:</p><p data-end=\"1380\" data-start=\"1353\">$\\texttt{print(Q.first())}$</p><p data-end=\"1393\" data-start=\"1382\">prints $7$.</p><p data-end=\"1400\" data-start=\"1395\">Then:</p><p data-end=\"1433\" data-start=\"1402\">$\\texttt{S.push(Q.dequeue())}$</p><p data-end=\"1463\" data-start=\"1435\">moves $7$ back to the stack.</p><p data-end=\"1469\" data-start=\"1465\">Now:</p><p data-end=\"1497\" data-start=\"1471\">$\\texttt{print(S.pop())}$</p><p data-end=\"1510\" data-start=\"1499\">prints $7$.</p><p data-end=\"1560\" data-start=\"1512\">Then one $\\texttt{S.pop()}$ removes $6$ without printing.</p><p data-end=\"1570\" data-start=\"1562\">Finally:</p><p data-end=\"1598\" data-start=\"1572\">$\\texttt{print(S.pop())}$</p><p data-end=\"1611\" data-start=\"1600\">prints $6$.</p><p data-end=\"1637\" data-start=\"1613\">So the actual output is:</p><p data-end=\"1654\" data-start=\"1639\">$776$</p><p data-end=\"1719\" data-start=\"1656\">Since $776$ is not in the options, the correct option is <b>D</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539120/go-classes-dpp-gate-cs-data-structures-queue-stack-trace\" target=\"_blank\">GATE Overflow #539120</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"461\" data-start=\"382\">Convert the following infix expression into postfix expression:</p><p data-end=\"510\" data-start=\"463\">$$\\texttt{a + (b - c) - d * ((e - f) / g + h)}$$</p><p data-end=\"546\" data-start=\"512\">Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{a b c - + d e f - g / h + * -}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{a b c - d e f - g / h + * - +}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{a b + c - d e f - g / h + * -}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{a b c - + d e f - g h + / * -}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538969\"></a><div itemprop=\"text\"><p data-end=\"801\" data-start=\"751\">First convert the bracketed parts:</p><p data-end=\"921\" data-start=\"803\">$\\texttt{(b - c)}\\rightarrow$ $\\texttt{b c -}$</p><p data-end=\"921\" data-start=\"803\">$\\texttt{(e - f)}\\rightarrow$ $\\texttt{e f -}$</p><p data-end=\"921\" data-start=\"803\">$\\texttt{(e - f) / g}\\rightarrow$ $\\texttt{e f - g /}$</p><p data-end=\"921\" data-start=\"803\">$\\texttt{((e - f) / g + h)}\\rightarrow$ $\\texttt{e f - g / h +}$</p><p data-end=\"935\" data-start=\"923\">Now combine:</p><p data-end=\"960\" data-start=\"937\">$\\texttt{a + (b - c)}$</p><p data-end=\"970\" data-start=\"962\">becomes:</p><p data-end=\"993\" data-start=\"972\">$\\texttt{a b c - +}$</p><p data-end=\"999\" data-start=\"995\">And:</p><p data-end=\"1032\" data-start=\"1001\">$\\texttt{d * ((e - f)/g + h)}$</p><p data-end=\"1042\" data-start=\"1034\">becomes:</p><p data-end=\"1073\" data-start=\"1044\">$\\texttt{d e f - g / h + *}$</p><p data-end=\"1113\" data-start=\"1075\">So the complete postfix expression is:</p><p data-end=\"1156\" data-start=\"1115\">$\\texttt{a b c - + d e f - g / h + * -}$</p><p data-end=\"1182\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1158\">Correct option : <strong data-end=\"1181\" data-start=\"1176\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538967/go-classes-dpp-gate-cs-data-structures-infix-postfix\" target=\"_blank\">GATE Overflow #538967</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3762\" data-start=\"3675\">Which of the following statements is true about arithmetic expressions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Parentheses are needed in all arithmetic expressions.<br/></span>",
                "<span style=\"display: inline;\">Infix expressions do not require precedence rules.<br/></span>",
                "<span style=\"display: inline;\">Postfix and prefix expressions do not require precedence rules.<br/></span>",
                "<span style=\"display: inline;\">Fully parenthesized expressions are difficult to recognize and evaluate.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"538966\"></a><div itemprop=\"text\"><p data-end=\"4162\" data-start=\"4064\">In infix notation, precedence and associativity rules are needed. For example, in:</p><p data-end=\"4185\" data-start=\"4164\">$\\texttt{a + b * c}$</p><p data-end=\"4252\" data-start=\"4187\">we need precedence rules to know that $\\texttt{b * c}$ is evaluated first.</p><p data-end=\"4395\" data-start=\"4254\">But in postfix and prefix notation, the position of operators already fixes the order of evaluation. So they do not require precedence rules.</p><p data-end=\"4418\" data-start=\"4397\">Correct answer: <strong data-end=\"4418\" data-start=\"4413\">C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538965/go-classes-dpp-gate-cs-data-structures-postfix-prefix\" target=\"_blank\">GATE Overflow #538965</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2982\" data-start=\"2850\">Which of the following permutations can be obtained in the same order using a stack, assuming the input sequence is:</p><p data-end=\"3009\" data-start=\"2984\">$$5, 6, 7, 8, 9$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7, 8, 9, 5, 6$<br/></span>",
                "<span style=\"display: inline;\">$5, 9, 6, 7, 8$<br/></span>",
                "<span style=\"display: inline;\">$7, 8, 9, 6, 5$<br/></span>",
                "<span style=\"display: inline;\">$9, 8, 7, 5, 6$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"538964\"></a><div itemprop=\"text\"><p data-end=\"3138\" data-start=\"3109\">For option C:</p><pre data-end=\"3216\" data-start=\"3140\"><code>push 5 push 6 push 7 pop 7 push 8 pop 8 push 9 pop 9 pop 6 pop 5</code></pre><p data-end=\"3233\" data-start=\"3218\">Output becomes:</p><p data-end=\"3260\" data-start=\"3235\">$7, 8, 9, 6, 5$</p><p data-end=\"3283\" data-start=\"3262\">So option C is valid.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538963/go-classes-dpp-gate-cs-data-structures-stack-permutation\" target=\"_blank\">GATE Overflow #538963</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Data Structures (Stacks, Queues & Expressions - Part 3)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 3",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1911\" data-start=\"1814\">If the following sequence of operations is performed on an initially empty stack:</p><pre data-end=\"1993\" data-start=\"1913\"><code>push(1), push(2), pop, push(1), push(2), pop, pop, pop, push(2), pop</code></pre><p data-end=\"2037\" data-start=\"1995\">what is the sequence of popped out values?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2, 2, 1, 1, 2$<br/></span>",
                "<span style=\"display: inline;\">$2, 2, 1, 2, 2$<br/></span>",
                "<span style=\"display: inline;\">$2, 1, 2, 2, 1$<br/></span>",
                "<span style=\"display: inline;\">$2, 1, 2, 2, 2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539023\"></a><div itemprop=\"text\"><p>ANs is A</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=12449561439656667680\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538961/go-classes-dpp-gate-cs-data-structures-stack-operation-trace\" target=\"_blank\">GATE Overflow #538961</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"761\" data-start=\"685\">An initially empty stack undergoes the following operations:</p><pre data-end=\"858\" data-start=\"763\"><code>push(40) push(10) push(10) push(pop() + pop()) push(20) push(5) push(pop() / pop())</code></pre><p data-end=\"1044\" data-start=\"860\">Assume the division operation follows the source convention, where the value below the top is divided by the top value. What will be the contents of the stack after the last operation?</p><p data-end=\"1085\" data-start=\"1046\">Give the answer from <strong data-end=\"1084\" data-start=\"1067\">bottom to top</strong>.</p><div> </div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$40, 20, 4$<br/></span>",
                "<span style=\"display: inline;\">$40, 10, 4$<br/></span>",
                "<span style=\"display: inline;\">$4, 20, 40$<br/></span>",
                "<span style=\"display: inline;\">$10, 20, 4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538959\"></a><div itemprop=\"text\"><p data-end=\"1153\" data-start=\"1112\">After first three pushes:</p><p data-end=\"1177\" data-start=\"1155\">$40, 10, 10$</p><p data-end=\"1184\" data-start=\"1179\">Then:</p><p data-end=\"1244\" data-start=\"1186\">$\\texttt{push(pop() + pop()) = push(10 + 10) = push(20)}$</p><p data-end=\"1260\" data-start=\"1246\">Stack becomes:</p><p data-end=\"1280\" data-start=\"1262\">$40, 20$</p><p data-end=\"1312\" data-start=\"1282\">Then $\\texttt{push(20)}$ and $\\texttt{push(5)}:$</p><p data-end=\"1339\" data-start=\"1314\">$40, 20, 20, 5$</p><p data-end=\"1357\" data-start=\"1341\">Final operation:</p><p data-end=\"1415\" data-start=\"1359\">$\\texttt{push(pop() / pop()) = push(20 / 5) = push(4)}$</p><p data-end=\"1429\" data-start=\"1417\">Final stack:</p><p data-end=\"1452\" data-start=\"1431\">$40, 20, 4$<br/> </p><p data-end=\"1452\" data-start=\"1431\"><strong>Correct Option : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/538957/go-classes-dpp-gate-cs-data-structures-push-pop-trace\" target=\"_blank\">GATE Overflow #538957</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Data Structures (Binary Trees & Tree Traversals)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Binary Trees & Tree Traversals",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Binary Trees & Tree Traversals Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4426\" data-start=\"4408\">A binary tree has:</p><p data-end=\"4603\" data-start=\"4499\">How many nodes are processed before the root in preorder, inorder, and postorder traversal respectively?</p><p><strong>Given Details:</strong></p><ul><li>$1000$ nodes in the left subtree</li><li>$100$ nodes in the right subtree</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0, 1000, 1100$</span>",
                "<span style=\"display: inline;\">$1000, 0, 1100$</span>",
                "<span style=\"display: inline;\">$1100, 1000, 0$</span>",
                "<span style=\"display: inline;\">$0, 1100, 1000$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541824\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"204\" src=\"https://cdn.mathpix.com/snip/images/DRAfdbXQOmQwONCthHnaR_Fz6vaDQw0ezCYuci6BllY.original.fullsize.png\" width=\"329\"/></p><p data-end=\"1316\" data-start=\"1303\">The tree has:</p><p data-end=\"1350\" data-start=\"1318\">$1000$ nodes in the left subtree</p><p data-end=\"1384\" data-start=\"1352\">$100$ nodes in the right subtree</p><p data-end=\"1418\" data-start=\"1386\">In preorder traversal, order is:</p><p data-end=\"1437\" data-start=\"1420\">Root, Left, Right</p><p data-end=\"1503\" data-start=\"1439\">So, the root is processed first. Number of nodes before root is:</p><p data-end=\"1508\" data-start=\"1505\">$0$</p><p data-end=\"1541\" data-start=\"1510\">In inorder traversal, order is:</p><p data-end=\"1560\" data-start=\"1543\">Left, Root, Right</p><p data-end=\"1658\" data-start=\"1562\">So, all nodes in the left subtree are processed before the root. Number of nodes before root is:</p><p data-end=\"1666\" data-start=\"1660\">$1000$</p><p data-end=\"1701\" data-start=\"1668\">In postorder traversal, order is:</p><p data-end=\"1720\" data-start=\"1703\">Left, Right, Root</p><p data-end=\"1797\" data-start=\"1722\">So, all nodes in the left and right subtrees are processed before the root.</p><p data-end=\"1823\" data-start=\"1799\">Total nodes before root:</p><p data-end=\"1844\" data-start=\"1825\">$1000 + 100 = 1100$</p><p data-end=\"1881\" data-start=\"1846\">Therefore, the required values are:</p><p data-end=\"1906\" data-start=\"1883\">$\\boxed{0, 1000, 1100}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541819/go-classes-dpp-gate-cs-da-data-structure-binary-tree-traversals\" target=\"_blank\">GATE Overflow #541819</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"492\" data-start=\"458\">A binary tree has:</p><p data-end=\"690\" data-start=\"573\">How many nodes are processed before the root in <strong data-end=\"633\" data-start=\"621\">preorder</strong>, <strong data-end=\"646\" data-start=\"635\">inorder</strong>, and <strong data-end=\"665\" data-start=\"652\">postorder</strong> traversals respectively?</p><p><strong>Given Details:</strong></p><ul><li>Left subtree containing $1000$ nodes</li><li>Right subtree containing $100$ nodes</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{0, 1000, 1100}$</span>",
                "<span style=\"display: inline;\">$\\text{1000, 0, 1100}$</span>",
                "<span style=\"display: inline;\">$\\text{0, 1100, 1000}$</span>",
                "<span style=\"display: inline;\">$\\text{1100, 1000, 0}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539840\"></a><div itemprop=\"text\"><p data-end=\"915\" data-start=\"790\">In preorder traversal, the root is processed first. </p><p data-end=\"915\" data-start=\"790\">So, the number of nodes processed before the root is $0$.</p><p data-end=\"1090\" data-start=\"917\">In inorder traversal, the complete left subtree is processed before the root. </p><p data-end=\"1090\" data-start=\"917\">The left subtree has $1000$ nodes. </p><p data-end=\"1090\" data-start=\"917\">So, the number of nodes processed before the root is $1000$.</p><p data-end=\"1249\" data-start=\"1092\">In postorder traversal, both left and right subtrees are processed before the root. </p><p data-end=\"1249\" data-start=\"1092\">So, the number of nodes processed before the root is $1000 + 100 = 1100$.</p><p data-end=\"1284\" data-start=\"1251\">Therefore, the correct answer is:</p><p data-end=\"1301\" data-start=\"1286\">$\\text{0, 1000, 1100}$</p><p data-end=\"1323\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1303\">Correct option : <strong data-end=\"1322\" data-start=\"1317\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539838/go-classes-dpp-gate-cs-da-data-structure-traversal-logic\" target=\"_blank\">GATE Overflow #539838</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3805\" data-start=\"3746\">A binary tree has the following traversals:</p><p data-end=\"3968\" data-start=\"3906\">Which of the following is the postorder traversal of the tree?</p><p><strong>Given Details:</strong></p><ul><li>Preorder traversal $: \\text{A M P K L D H T}$</li><li>Inorder traversal $:\\text{P M L K A H T D}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{P L K M T H D A}$</span>",
                "<span style=\"display: inline;\">$\\text{P M L K H T D A}$</span>",
                "<span style=\"display: inline;\">$\\text{L K P M T H D A}$</span>",
                "<span style=\"display: inline;\">$\\text{P L M K H T D A}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539836\"></a><div itemprop=\"text\"><p data-end=\"4132\" data-start=\"4076\">In preorder, the first node is the root.</p><p data-end=\"4149\" data-start=\"4134\">So root is $\\text{A}$.</p><p data-end=\"4162\" data-start=\"4151\">In inorder:</p><p data-end=\"4191\" data-start=\"4164\">$\\text{P M L K A H T D}$</p><p data-end=\"4243\" data-start=\"4193\">Everything before $\\text{A}$ belongs to the left subtree:</p><p data-end=\"4264\" data-start=\"4245\">$\\text{P M L K}$</p><p data-end=\"4316\" data-start=\"4266\">Everything after $\\text{A}$ belongs to the right subtree:</p><p data-end=\"4335\" data-start=\"4318\">$\\text{H T D}$</p><p data-end=\"4374\" data-start=\"4337\">Now reconstructing recursively gives:</p><p style=\"text-align:center\"><img alt=\"\" height=\"247\" src=\"https://cdn.mathpix.com/snip/images/hvTapneA_rED4dNDFdrcpEU9t7t9fOmTIZnhVHwn2oI.original.fullsize.png\" width=\"360\"/></p><p data-end=\"4485\" data-start=\"4472\"><br/>Postorder is:</p><p data-end=\"4526\" data-start=\"4487\">Left subtree $\\rightarrow$ Right subtree $\\rightarrow$ Root</p><p data-end=\"4558\" data-start=\"4528\">So the postorder traversal is:</p><p data-end=\"4587\" data-start=\"4560\">$\\text{P L K M T H D A}$</p><p data-end=\"4587\" data-start=\"4560\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539835/go-classes-dpp-gate-cs-da-data-structure-tree-traversal\" target=\"_blank\">GATE Overflow #539835</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5076\" data-start=\"4952\">Which of the following functions correctly returns the total number of nodes in a binary tree rooted at $\\texttt{t}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"5228\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int tree_size(TreeNode *t) { if (t == NULL) return 0; else return 1 + tree_size(t-&gt;left) + tree_size(t-&gt;right); }\" data-start=\"5082\">int tree_size(TreeNode *t) { if (t == NULL) return 0; else return 1 + tree_size(t-&gt;left) + tree_size(t-&gt;right); }</pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count) + tree_size(t-&gt;right, count); }\">int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count) + tree_size(t-&gt;right, count); }</pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count + 1) + tree_size(t-&gt;right, count + 1); }\">int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count + 1) + tree_size(t-&gt;right, count + 1); } </pre></span>",
                "<span style=\"display: inline;\"><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count) + tree_size(t-&gt;right, count + 1); }\">int tree_size(TreeNode *t, int count) { if (t == NULL) return count; else return tree_size(t-&gt;left, count) + tree_size(t-&gt;right, count + 1); }</pre></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539834\"></a><div itemprop=\"text\"><p data-end=\"5850\" data-start=\"5788\">For an empty tree, the number of nodes is $0$.</p><p data-end=\"5873\" data-start=\"5852\">For a non-empty tree :</p><p data-end=\"5941\" data-start=\"5875\">$\\text{total nodes = 1 + nodes in left subtree + nodes in right subtree}$</p><p data-end=\"5986\" data-start=\"5943\">Only option A follows this logic correctly :</p><ul><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">Base Case<br/>$\\texttt{if t == NULL return 0;}$</b><br/>If the pointer reaches a dead end (an empty subtree), it contributes $0$ to the total node count.</p></li><li><p data-path-to-node=\"4,1,0\"><strong>Recursive Step</strong><br/>$\\texttt{return 1 + tree_size(t-&gt;left) + tree_size(t-&gt;right);}$ <br/>If the node exists, it counts itself as $1$, and then recursively adds the total number of nodes in its entire left subtree and its entire right subtree. </p></li></ul><div> </div><p>B, C, and D attempt to use an accumulator variable $(\\texttt{count})$, but they all implement the logic incorrectly : </p><div><ul><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">B :</b> Never actually increments $\\texttt{count}$ or adds $1$ for the current node.<br/>It just passes the same $\\texttt{count}$ value down and adds the results, which will yield an incorrect sum.</p></li><li><p data-path-to-node=\"7,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,1,0\">C :</b> Increments $\\texttt{count}$ for both the left and right recursive calls and then adds them together.<br/>If you pass a tree with exactly $1$ node $($and an initial count of $0)$, it will $\\texttt{return (0 + 1) + (0 + 1) = 2}$, which is wrong.</p></li><li><p data-path-to-node=\"7,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,2,0\">D :</b> Asymmetrically increments the count (only adding to the right subtree), which makes no logical sense for calculating the total size of a tree.</p></li></ul></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539832/go-classes-dpp-gate-cs-data-structure-binary-tree-nodes\" target=\"_blank\">GATE Overflow #539832</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following binary tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"262\" src=\"https://cdn.mathpix.com/snip/images/sVco_wf4HEYVAu1KYNDg3noSBRYZjuSkyRCkMJy3jc4.original.fullsize.png\" width=\"359\"/></p><p data-end=\"2358\" data-start=\"2268\">Which option correctly gives the preorder, postorder, inorder, and level-order traversals?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/sVco_wf4HEYVAu1KYNDg3noSBRYZjuSkyRCkMJy3jc4.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">Preorder $:\\texttt{9 15 23 12 8 6 2 7 10 5 35 26}$<br/>Postorder $:\\texttt{12 23 2 6 8 15 10 35 26 5 7 9}$<br/>Inorder $:\\texttt{12 23 15 6 2 8 9 10 7 35 5 26}$<br/>Level-order $:\\texttt{9 15 7 23 8 10 5 12 6 35 26 2}$<br/></span>",
                "<span style=\"display: inline;\">Preorder $:\\texttt{9 15 23 8 12 6 2 7 10 5 35 26}$<br/>Postorder $:\\texttt{12 23 6 2 8 15 10 35 26 5 7 9}$<br/>Inorder $:\\texttt{23 12 15 6 2 8 9 10 7 35 5 26}$<br/>Level-order $:\\texttt{9 7 15 10 5 23 8 35 26 12 6 2}$<br/></span>",
                "<span style=\"display: inline;\">Preorder $:\\texttt{9 7 10 5 35 26 15 23 12 8 6 2}$<br/>Postorder $:\\texttt{10 35 26 5 7 12 23 2 6 8 15 9}$<br/>Inorder $:\\texttt{10 7 35 5 26 9 12 23 15 6 2 8}$<br/>Level-order $:\\texttt{9 15 7 23 8 10 5 12 6 35 26 2}$<br/></span>",
                "<span style=\"display: inline;\">Preorder $:\\texttt{9 15 7 23 8 10 5 12 6 35 26 2}$<br/>Postorder $:\\texttt{9 15 23 12 8 6 2 7 10 5 35 26}$<br/>Inorder $:\\texttt{12 23 15 6 2 8 9 10 7 35 5 26}$<br/>Level-order $:\\texttt{12 23 2 6 8 15 10 35 26 5 7 9}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539831\"></a><div itemprop=\"text\"><p data-end=\"3189\" data-start=\"3107\">We use the traversal rules one by one.</p><p><strong>Preorder traversal:</strong> Root, Left, Right</p><p>Start from root $9$, then visit the left subtree of $9$, then the right subtree of $9$.</p><p>For the left subtree rooted at $15$:</p><p>$15 \\rightarrow 23 \\rightarrow 12 \\rightarrow 8 \\rightarrow 6 \\rightarrow 2$</p><p>For the right subtree rooted at $7$:</p><p>$7 \\rightarrow 10 \\rightarrow 5 \\rightarrow 35 \\rightarrow 26$</p><p>So, preorder is:</p><p>$9, 15, 23, 12, 8, 6, 2, 7, 10, 5, 35, 26$</p><p> </p><p><strong>Postorder traversal:</strong> Left, Right, Root</p><p>For the left subtree rooted at $15$:</p><p>$12, 23, 2, 6, 8, 15$</p><p>For the right subtree rooted at $7$:</p><p>$10, 35, 26, 5, 7$</p><p>Finally visit root $9$.</p><p>So, postorder is:</p><p>$12, 23, 2, 6, 8, 15, 10, 35, 26, 5, 7, 9$</p><p> </p><p><strong>Inorder traversal:</strong> Left, Root, Right</p><p>For the left subtree rooted at $15$:</p><p>$12, 23, 15, 6, 2, 8$</p><p>Then visit root $9$.</p><p>For the right subtree rooted at $7$:</p><p>$10, 7, 35, 5, 26$</p><p>So, inorder is:</p><p>$12, 23, 15, 6, 2, 8, 9, 10, 7, 35, 5, 26$</p><p> </p><p><strong>Level-order traversal:</strong> Visit nodes level by level from left to right.</p><p>Level $0: 9$</p><p>Level $1: 15, 7$</p><p>Level $2: 23, 8, 10, 5$</p><p>Level $3: 12, 6, 35, 26$</p><p>Level $4: 2$</p><p>So, level-order is:</p><p>$9, 15, 7, 23, 8, 10, 5, 12, 6, 35, 26, 2$</p><p> </p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539826/go-classes-dpp-gate-cs-da-data-structure-traversal-output\" target=\"_blank\">GATE Overflow #539826</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2172\" data-start=\"2096\">Which of the following can be the number of nodes in a complete binary tree?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"539626\"></a><div itemprop=\"text\"><p>A complete binary tree is a binary tree in which all levels except possibly the last are completely filled, and the last level is filled from left to right.</p><p data-end=\"2390\" data-start=\"2233\">A complete binary tree can have any positive number of nodes. The only requirement is that nodes must fill level by level from left to right.</p><ul data-end=\"2578\" data-start=\"2392\"><li data-end=\"2426\" data-section-id=\"j7pqj3\" data-start=\"2392\">$2$ nodes $:$ root and left child<br/> </li><li data-end=\"2469\" data-section-id=\"abco9r\" data-start=\"2427\">$5$ nodes $:$ levels filled left to right<br/> </li><li data-end=\"2509\" data-section-id=\"1u85abr\" data-start=\"2470\">$7$ nodes $:$ perfect tree of height $2$<br/> </li><li data-end=\"2578\" data-section-id=\"e2ca5x\" data-start=\"2510\">$8$ nodes $:$ first node added at the next level, leftmost position<br/> </li></ul><p data-end=\"2605\" data-start=\"2580\">So all four are possible.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539625/go-classes-dpp-gate-cs-data-structures-complete-binary-tree\" target=\"_blank\">GATE Overflow #539625</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"178\" data-start=\"78\">A node of a binary tree is called <strong data-end=\"147\" data-start=\"128\">nearly balanced</strong> if one of the following holds:</p><p data-end=\"429\" data-start=\"359\">A binary tree is nearly balanced if all its nodes are nearly balanced.</p><p data-end=\"467\" data-start=\"431\">Let Fibonacci numbers be defined as:</p><p data-end=\"520\" data-start=\"469\">$f_0 = 0$, $f_1 = 1$, and $f_k = f_{k-1} + f_{k-2}$</p><p data-end=\"627\" data-start=\"522\">For a nearly balanced binary tree of height $k$, which lower bound is guaranteed for the number of nodes?</p><p><strong>Given Details:</strong></p><ul><li>The node is a leaf.</li><li>The node has one child and that child is a leaf.</li><li>The node has two children and the heights of its left and right subtrees differ by at most $1$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">At least $f_k$ nodes</span>",
                "<span style=\"display: inline;\">At most $f_k$ nodes</span>",
                "<span style=\"display: inline;\">Exactly $2^k - 1$ nodes</span>",
                "<span style=\"display: inline;\">Exactly $k + 1$ nodes</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539624\"></a><div itemprop=\"text\"><p data-end=\"879\" data-start=\"765\">For a nearly balanced binary tree of height $k$, the two subtrees of the root can differ in height by at most $1$.</p><p data-end=\"910\" data-start=\"881\">So, in the minimum-node case:</p><p data-end=\"942\" data-start=\"912\">One subtree has height $k - 1$</p><p data-end=\"989\" data-start=\"944\">The other subtree has height at least $k - 2$</p><p data-end=\"1064\" data-start=\"991\">Therefore, the minimum number of nodes follows a Fibonacci-like relation:</p><p data-end=\"1097\" data-start=\"1066\">$N(k) \\geq N(k - 1) + N(k - 2)$</p><p data-end=\"1118\" data-start=\"1099\">This is similar to:</p><p data-end=\"1145\" data-start=\"1120\">$f_k = f_{k-1} + f_{k-2}$</p><p data-end=\"1223\" data-start=\"1147\">Hence, a nearly balanced binary tree of height $k$ has at least $f_k$ nodes.</p><p data-end=\"1250\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1225\"><strong>Final answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539623/go-classes-dpp-gate-cs-da-data-structure-nearly-balanced-tree\" target=\"_blank\">GATE Overflow #539623</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3934\" data-start=\"3807\">A complete binary tree is stored in an array using $\\mathbf{1}$<strong data-end=\"3894\" data-start=\"3874\">-based indexing</strong>, where the root is stored at index $1$.</p><p data-end=\"4015\" data-start=\"3936\">For a node stored at index $11$, which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Its parent is stored at index $5$<br/></span>",
                "<span style=\"display: inline;\">Its left child, if present, is stored at index $22$<br/></span>",
                "<span style=\"display: inline;\">Its right child, if present, is stored at index $23$<br/></span>",
                "<span style=\"display: inline;\">Its parent is stored at index $6$<br/></span>",
                "<span style=\"display: inline;\">If the array contains only $20$ nodes, then this node has both children</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"539622\"></a><div itemprop=\"text\"><p data-end=\"73\" data-start=\"0\">For a complete binary tree stored in an array using $1$-based indexing:</p><p data-end=\"143\" data-start=\"75\">Parent of node at index $k = \\left\\lfloor \\frac{k}{2} \\right\\rfloor$</p><p data-end=\"181\" data-start=\"145\">Left child of node at index $k = 2k$</p><p data-end=\"224\" data-start=\"183\">Right child of node at index $k = 2k + 1$</p><p data-end=\"224\" data-start=\"183\"> </p><p data-end=\"224\" data-start=\"183\">To understand it better, take a look at the example given below : </p><p style=\"text-align:center\"><img alt=\"\" height=\"288\" src=\"https://cdn.mathpix.com/snip/images/p41Rm3PeZckqByAhovKL7I_Ujp6bSNBJjAIJKK13d04.original.fullsize.png\" width=\"466\"/></p><p data-end=\"224\" data-start=\"183\">The node storing $10$ is at index $5$, its parent $(9)$ is in entry $\\left\\lfloor \\frac{5}{2} \\right\\rfloor = 2$, and its children are in indices $10$ and $11$ $(13$ and $23$, respectively$)$.</p><p data-end=\"224\" data-start=\"183\"> </p><p data-end=\"224\" data-start=\"183\">Now,</p><p data-end=\"241\" data-start=\"226\">Given, $k = 11$</p><p data-end=\"303\" data-start=\"243\">Parent index $= \\left\\lfloor \\frac{11}{2} \\right\\rfloor = 5$</p><p data-end=\"342\" data-start=\"305\">Left child index $= 2 \\times 11 = 22$</p><p data-end=\"386\" data-start=\"344\">Right child index $= 2 \\times 11 + 1 = 23$</p><p data-end=\"426\" data-start=\"388\">So, statements A, B and C are correct.</p><p data-end=\"572\" data-start=\"428\">If the array contains only $20$ nodes, then indices $22$ and $23$ do not exist. </p><p data-end=\"572\" data-start=\"428\">Therefore, the node at index $11$ has no children in that array.</p><p data-end=\"605\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"574\">So, E is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539620/go-classes-dpp-gate-cs-da-data-structure-complete-tree-array\" target=\"_blank\">GATE Overflow #539620</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2232\" data-start=\"2106\">A binary tree has height $4$, where height is measured as the maximum number of edges from the root to a leaf.</p><p data-end=\"2283\" data-start=\"2234\">Can such a binary tree have exactly $8$ leaves?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes, because the maximum possible number of leaves is $16$<br/></span>",
                "<span style=\"display: inline;\">Yes, because every binary tree of height $4$ must have exactly $8$ leaves<br/></span>",
                "<span style=\"display: inline;\">No, because a binary tree of height $4$ can have at most $4$ leaves<br/></span>",
                "<span style=\"display: inline;\">No, because a binary tree of height $4$ must have exactly $16$ leaves</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539618\"></a><div itemprop=\"text\"><p data-end=\"2663\" data-start=\"2586\">For a binary tree of height $h$, maximum number of leaves is:</p><p>$2^h$</p><p data-end=\"2688\" data-start=\"2676\">For $h = 4:$</p><p>$2^4 = 16$</p><p data-end=\"2763\" data-start=\"2706\">So having exactly $8$ leaves is possible, since $8 \\leq16$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539617/go-classes-dpp-gate-cs-da-data-structure-height-and-leaves\" target=\"_blank\">GATE Overflow #539617</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"971\" data-start=\"865\">Is it possible to construct a full binary tree with exactly $8$ internal nodes and $7$ leaves?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539615\"></a><div itemprop=\"text\"><p>It is <strong>not</strong> possible to construct a full binary tree with exactly $8$ internal nodes and $7$ leaves.</p><p>In any full binary tree (a tree where every node has either $0$ or exactly $2$ children), there is a strict structural relationship between the number of internal nodes ($I$) and the number of leaf nodes ($L$). </p><p>The rule is:</p><p>$L = I + 1$</p><p>If you have $8$ internal nodes, a valid full binary tree must have exactly:</p><p>$8 + 1 = \\mathbf{9 \\text{ leaves}}$</p><p>A full binary tree with $i$ internal nodes must have $i + 1$ leaves.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539614/go-classes-dpp-gate-cs-da-data-structure-full-binary-tree\" target=\"_blank\">GATE Overflow #539614</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Data Structures (Binary Search Trees (BST - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 1",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5979\" data-start=\"5914\">Rebalance the following tree so that it becomes a valid AVL tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"237\" src=\"https://cdn.mathpix.com/snip/images/56AA4Hcaf5QjglGBLUX4TQgRn85YNZbpVWP9n9NK9dA.original.fullsize.png\" width=\"211\"/></p><p data-end=\"6121\" data-start=\"6081\">What will be the root after rebalancing?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/56AA4Hcaf5QjglGBLUX4TQgRn85YNZbpVWP9n9NK9dA.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$16$<br/></span>",
                "<span style=\"display: inline;\">$20$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"541827\"></a><div itemprop=\"text\"><p data-end=\"3971\" data-start=\"3953\">The given tree is:</p><p data-end=\"3984\" data-start=\"3973\">Root $= 20$</p><p data-end=\"4012\" data-start=\"3986\">Left child of $20$ is $10$</p><p data-end=\"4041\" data-start=\"4014\">Right child of $20$ is $40$</p><p data-end=\"4078\" data-start=\"4043\">Node $10$ has children $8$ and $16$</p><p data-end=\"4109\" data-start=\"4080\">Node $16$ has left child $12$</p><p data-end=\"4145\" data-start=\"4111\">The imbalance occurs at node $20$.</p><p data-end=\"4211\" data-start=\"4147\">At node $20$, the left subtree is taller than the right subtree.</p><p data-end=\"4231\" data-start=\"4213\">The heavy path is:</p><p data-end=\"4267\" data-start=\"4233\">$20 \\rightarrow 10 \\rightarrow 16$</p><p data-end=\"4336\" data-start=\"4269\">This means the imbalance is in the right subtree of the left child.</p><p data-end=\"4361\" data-start=\"4338\">So, this is an LR case.</p><p data-end=\"4401\" data-start=\"4363\">For LR case, we perform two rotations:</p><ol><li data-end=\"4434\" data-start=\"4403\">Left rotation at node $10$<br/> </li><li data-end=\"4468\" data-start=\"4436\">Right rotation at node $20$</li></ol><div><p style=\"text-align:center\"><img alt=\"\" height=\"398\" src=\"https://cdn.mathpix.com/snip/images/DpRf-2ku3nIPHlvK4jX6rmucwNlPYGfuOTxSiLf4hVc.original.fullsize.png\" width=\"683\"/></p><p>After left rotation at $10$, node $16$ comes above $10$.</p></div><p data-end=\"4585\" data-start=\"4528\">After right rotation at $20$, node $16$ becomes the root.</p><p data-end=\"4611\" data-start=\"4587\">Final tree structure is:</p><p data-end=\"4624\" data-start=\"4613\">Root $= 16$</p><p data-end=\"4643\" data-start=\"4626\">Left child $= 10$</p><p data-end=\"4663\" data-start=\"4645\">Right child $= 20$</p><p data-end=\"4700\" data-start=\"4665\">Node $10$ has children $8$ and $12$</p><p data-end=\"4732\" data-start=\"4702\">Node $20$ has right child $40$</p><p data-end=\"4768\" data-start=\"4734\">So, the root after rebalancing is: $\\boxed{16}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541822/go-classes-dpp-gate-cs-da-data-structure-avl-tree\" target=\"_blank\">GATE Overflow #541822</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3126\" data-start=\"3067\">Insert the following keys into an initially empty AVL tree:</p><p data-end=\"3146\" data-start=\"3128\">$1, 2, 3, 4, 5, 6$</p><p data-end=\"3187\" data-start=\"3148\">What is the root of the final AVL tree?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"541702\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"507\" src=\"https://cdn.mathpix.com/snip/images/r6OmPrHdo1VcTH_qapSSDOrDY0ubK48NUimDKTamEZI.original.fullsize.png\" width=\"800\"/></p><p data-end=\"3338\" data-start=\"3317\"><br/>Insert keys in order:</p><p data-end=\"3358\" data-start=\"3340\">$1, 2, 3, 4, 5, 6$</p><p data-end=\"3434\" data-start=\"3360\">After inserting $1, 2, 3$, the tree becomes right-right heavy at node $1$.</p><p data-end=\"3470\" data-start=\"3436\">So, we apply left rotation at $1$.</p><p data-end=\"3497\" data-start=\"3472\">Now the AVL tree becomes:</p><p data-end=\"3509\" data-start=\"3499\">Root $= 2$</p><p data-end=\"3527\" data-start=\"3511\">Left child $= 1$</p><p data-end=\"3546\" data-start=\"3529\">Right child $= 3$</p><p data-end=\"3563\" data-start=\"3548\">Now insert $4$.</p><p data-end=\"3593\" data-start=\"3565\">It goes to the right of $3$.</p><p data-end=\"3618\" data-start=\"3595\">Tree is still balanced.</p><p data-end=\"3635\" data-start=\"3620\">Now insert $5$.</p><p data-end=\"3665\" data-start=\"3637\">It goes to the right of $4$.</p><p data-end=\"3711\" data-start=\"3667\">This creates a right-right case at node $3$.</p><p data-end=\"3740\" data-start=\"3713\">Apply left rotation at $3$.</p><p data-end=\"3786\" data-start=\"3742\">Now the right subtree becomes rooted at $4$.</p><p data-end=\"3801\" data-start=\"3788\">Tree becomes:</p><p data-end=\"3813\" data-start=\"3803\">Root $= 2$</p><p data-end=\"3831\" data-start=\"3815\">Left child $= 1$</p><p data-end=\"3850\" data-start=\"3833\">Right child $= 4$</p><p data-end=\"3883\" data-start=\"3852\">Children of $4$ are $3$ and $5$</p><p data-end=\"3900\" data-start=\"3885\">Now insert $6$.</p><p data-end=\"3930\" data-start=\"3902\">It goes to the right of $5$.</p><p data-end=\"3971\" data-start=\"3932\">Now node $2$ becomes right-right heavy.</p><p data-end=\"4000\" data-start=\"3973\">Apply left rotation at $2$.</p><p data-end=\"4026\" data-start=\"4002\">Final AVL tree has root: $\\boxed{4}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541694/go-classes-dpp-gate-cs-da-data-structure-avl-tree\" target=\"_blank\">GATE Overflow #541694</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1314\" data-start=\"1211\">Suppose numbers between $1$ and $1000$ are stored in a binary search tree. We search for the key $363$.</p><p data-end=\"1397\" data-start=\"1316\">Which of the following sequences could <strong data-end=\"1362\" data-start=\"1355\">not</strong> be the sequence of nodes examined?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2, 252, 401, 398, 330, 344, 397, 363$<br/></span>",
                "<span style=\"display: inline;\">$924, 220, 911, 244, 898, 258, 362, 363$<br/></span>",
                "<span style=\"display: inline;\">$925, 202, 911, 240, 912, 245, 363$<br/></span>",
                "<span style=\"display: inline;\">All of the above are possible.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541699\"></a><div itemprop=\"text\"><p data-end=\"866\" data-start=\"826\">We are searching for key $363$ in a BST.</p><p data-end=\"886\" data-start=\"868\">During BST search:</p><p data-end=\"953\" data-start=\"888\">If current node is less than $363$, we move to the right subtree.</p><p data-end=\"1022\" data-start=\"955\">If current node is greater than $363$, we move to the left subtree.</p><p data-end=\"1106\" data-start=\"1024\">So, every next value must satisfy the valid range created by previous comparisons.</p><p data-end=\"1123\" data-start=\"1108\"><br/>Check option A:</p><p data-end=\"1163\" data-start=\"1125\">$2, 252, 401, 398, 330, 344, 397, 363$</p><p data-end=\"1182\" data-start=\"1165\">This is possible.</p><p data-end=\"1270\" data-start=\"1184\">After $401$ and $398$, the search moves left, so values must be less than those nodes.</p><p data-end=\"1360\" data-start=\"1272\">Then after $330$ and $344$, the search moves right, so values must be greater than them.</p><p data-end=\"1398\" data-start=\"1362\">Finally, $363$ fits the valid range.</p><p data-end=\"1418\" data-start=\"1400\">So, A is possible.</p><p data-end=\"1435\" data-start=\"1420\"><br/>Check option B:</p><p data-end=\"1477\" data-start=\"1437\">$924, 220, 911, 244, 898, 258, 362, 363$</p><p data-end=\"1501\" data-start=\"1479\">This is also possible.</p><p data-end=\"1555\" data-start=\"1503\">Every value stays inside the valid BST search range.</p><p data-end=\"1575\" data-start=\"1557\">So, B is possible.</p><p data-end=\"1592\" data-start=\"1577\"><br/>Check option C:</p><p data-end=\"1629\" data-start=\"1594\">$925, 202, 911, 240, 912, 245, 363$</p><p data-end=\"1723\" data-start=\"1631\">After visiting $911$, since $363 &lt; 911$, the next node must be in the left subtree of $911$.</p><p data-end=\"1771\" data-start=\"1725\">So, every later value must be less than $911$.</p><p data-end=\"1813\" data-start=\"1773\">But the next value after $240$ is $912$.</p><p data-end=\"1854\" data-start=\"1815\">This is impossible because $912 &gt; 911$.</p><p data-end=\"1903\" data-start=\"1856\">So, option C cannot be a valid BST search path.</p><p data-end=\"1930\" data-start=\"1905\"><br/><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541692/go-classes-dpp-gate-cs-da-data-structure-bst-search-path\" target=\"_blank\">GATE Overflow #541692</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the following AVL tree, delete node $\\text{A}$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"169\" src=\"https://cdn.mathpix.com/snip/images/VOwylnetP4l5xmkp-CieKlKVIRLSAlpYKNqBsKCBCF4.original.fullsize.png\" width=\"309\"/></p><p data-end=\"4810\" data-start=\"4728\">How many rotations are required to rebalance the AVL tree after deleting node $A$?</p><p data-end=\"4896\" data-start=\"4812\">(Count each rotation only once, whether it is a single rotation or a double rotation)</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/VOwylnetP4l5xmkp-CieKlKVIRLSAlpYKNqBsKCBCF4.original.fullsize.png",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"541083\"></a><div itemprop=\"text\"><p data-end=\"120\" data-start=\"52\">After deleting node $A$, the left subtree of node $B$ becomes empty.</p><p data-end=\"159\" data-start=\"122\">So the subtree rooted at $B$ becomes:</p><p style=\"text-align:center\"><img alt=\"\" height=\"128\" src=\"https://cdn.mathpix.com/snip/images/JS2HDr1rhbfeW0cczOkTnIdab2imny9K2EqyTVzON7E.original.fullsize.png\" width=\"94\"/></p><p data-end=\"321\" data-start=\"208\">At node $B$, the right subtree is taller, and inside the right subtree, the imbalance is on the left side of $D$.</p><p data-end=\"368\" data-start=\"323\">So this is a <strong data-end=\"355\" data-start=\"336\">Right-Left case</strong> at node $B$.</p><p data-end=\"412\" data-start=\"370\">We perform one <strong data-end=\"404\" data-start=\"385\">double rotation</strong> at $B$:</p><ol><li data-end=\"468\" data-start=\"414\">Right rotation on $D$<br/> </li><li data-end=\"468\" data-start=\"414\">Left rotation on $B$<br/> </li></ol><p data-end=\"554\" data-start=\"470\">Since it is said, count a single or double rotation only once, this counts as:</p><p data-end=\"568\" data-start=\"556\">$1$ rotation</p><p data-end=\"655\" data-start=\"570\">After this, the left subtree of $E$ becomes shorter. Now node $E$ becomes unbalanced.</p><p data-end=\"735\" data-start=\"657\">The tree around $E$ is now right-heavy, and its right child $J$ is left-heavy.</p><p data-end=\"785\" data-start=\"737\">So, node $E$ also becomes a <strong data-end=\"784\" data-start=\"765\">Right-Left case</strong>.</p><p data-end=\"834\" data-start=\"787\">We perform one more <strong data-end=\"826\" data-start=\"807\">double rotation</strong> at $E$:</p><ol><li data-end=\"890\" data-start=\"836\">Right rotation on $J$<br/> </li><li data-end=\"890\" data-start=\"836\">Left rotation on $E$<br/> </li></ol><p data-end=\"907\" data-start=\"892\">This counts as:</p><p data-end=\"926\" data-start=\"909\">$1$ more rotation</p><p data-end=\"960\" data-start=\"928\">So total rotations required are:</p><p data-end=\"973\" data-start=\"962\">$1 + 1 = 2$</p><p data-end=\"1022\" data-start=\"975\">Therefore, the required number of rotations is $:2$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541082/go-classes-dpp-gate-cs-da-data-structure-avl-deletion-%26-rotation\" target=\"_blank\">GATE Overflow #541082</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following AVL tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"201\" src=\"https://cdn.mathpix.com/snip/images/yvEUCQdckNWf-GYm3ERP2eLlrO5FJeUW-_xNP2kk-vI.original.fullsize.png\" width=\"400\"/></p><p>What is the minimum number of keys that must be deleted before a double rotation occurs?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/yvEUCQdckNWf-GYm3ERP2eLlrO5FJeUW-_xNP2kk-vI.original.fullsize.png",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"541080\"></a><div itemprop=\"text\"><p>In an AVL tree, a double rotation is required when a node becomes unbalanced and its taller child is heavy in the opposite direction, resulting in a Left-Right $(LR)$ or Right-Left $(RL)$ imbalance.</p><p>$\\text{delete(1) delete(3)}:$</p><p style=\"text-align:center\"><img alt=\"\" height=\"184\" src=\"https://cdn.mathpix.com/snip/images/uE0XrU4hAU6zGGVpk3V_KS2NxxyBnnlxURFdhopKcvY.original.fullsize.png\" width=\"350\"/></p><p><br/>After deleting keys \\(1\\) and \\(3\\), node \\(2\\) becomes a leaf node.</p><p>Deleting key \\(7\\) makes node \\(6\\) left-heavy, since its only remaining child is \\(5\\).</p><p>$\\text{delete(7)}:$</p><p style=\"text-align:center\"><img alt=\"\" height=\"186\" src=\"https://cdn.mathpix.com/snip/images/x2-mNGk95fNMeLfKt1IxYve73xsisb5giQ4HAv1fVCs.original.fullsize.png\" width=\"350\"/></p><p><br/>Now delete key \\(2\\). Node \\(4\\) loses its left subtree and becomes right-heavy, while its right child \\(6\\) is left-heavy.</p><p>$\\text{delete(2)}:$</p><p style=\"text-align:center\"><img alt=\"\" height=\"208\" src=\"https://cdn.mathpix.com/snip/images/YdgtS5JZRE2A_UwL_Q977m4wZHR1COFlYMCs7COY_7Q.original.fullsize.png\" width=\"335\"/></p><p><br/>Using the balance factor convention</p><p>\\[ BF(v)=h(\\text{left})-h(\\text{right}), \\]</p><p>we obtain:</p><p>\\[ BF(4)=-2,\\qquad BF(6)=+1 \\]</p><p>This is a Right-Left $(RL)$ imbalance at node \\(4\\).</p><p>To restore AVL balance, perform a right rotation at node \\(6\\), followed by a left rotation at node \\(4\\).</p><p>$\\text{double rotation}:$</p><p style=\"text-align:center\"><img alt=\"\" height=\"190\" src=\"https://cdn.mathpix.com/snip/images/ITVOEG0li45kgwbQUd3ljD0hENGn38kQ-RROjxQ41v4.original.fullsize.png\" width=\"358\"/></p><p><br/>Thus, a double rotation occurs after deleting four keys: \\[ 1\\rightarrow3\\rightarrow7\\rightarrow2 \\] No sequence of fewer than four deletions produces a double rotation in the given AVL tree.</p><p>Hence, the minimum number of deletions required is $\\boxed{4}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541077/go-classes-dpp-gate-cs-da-data-structure-avl-deletion\" target=\"_blank\">GATE Overflow #541077</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2586\" data-start=\"2344\">Insertion of a new element into an AVL tree may violate the AVL balance condition. Usually, we perform a rotation at the <strong data-end=\"2545\" data-start=\"2481\">first node on the path from the inserted element to the root</strong> that violates the AVL balance condition.</p><p data-end=\"2736\" data-start=\"2588\">What would happen if we instead choose the <strong data-end=\"2695\" data-start=\"2631\">first node on the path from the root to the inserted element</strong> that violates the AVL balance condition?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">After the rotation, at least one node will always still violate the balance condition, so another rotation will always be necessary.<br/></span>",
                "<span style=\"display: inline;\">The entire AVL tree will be balanced after the rotation, but more nodes may be changed by the rotation.<br/></span>",
                "<span style=\"display: inline;\">The entire AVL tree will be balanced after the rotation, and the same number of nodes will be changed.<br/></span>",
                "<span style=\"display: inline;\">The entire AVL tree will be balanced after the rotation, and the same number or fewer nodes may be changed.<br/></span>",
                "<span style=\"display: inline;\">The entire AVL tree may or may not be balanced after the rotation.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541075\"></a><div itemprop=\"text\"><p>If there is only one node that violates the AVL balance condition, both versions pick the same node, and we know that after the rotation the balance condition will hold. Thus if we choose the highest node, the tree may be balanced after the rotation. </p><p>However, the following example shows that the tree may not be balanced after the rotation. Consider insertion of the number $8$ into the following tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"137\" src=\"https://cdn.mathpix.com/snip/images/Lam2NmoOBPB7JHnwW3onN9o7nW3nQiAlcctR1P7Jang.original.fullsize.png\" width=\"146\"/></p><p>The result of the insertion is the following tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"174\" src=\"https://cdn.mathpix.com/snip/images/kHCXZwa8AkTzXp8-vTgsyatuBvVYpTH5nEVTYv-TU-E.original.fullsize.png\" width=\"184\"/></p><p>The highest node that violates the balance condition is the root, and rotation at the root leads to the following tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"138\" src=\"https://cdn.mathpix.com/snip/images/7-IkPb1yob8SGE8VVW1b3w0Sf76NjD_bQSjLsiGyiN0.original.fullsize.png\" width=\"170\"/></p><p>This tree still has a node that does not meet the balance condition, namely $6$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541074/go-classes-dpp-gate-cs-da-data-structure-avl-tree\" target=\"_blank\">GATE Overflow #541074</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1577\" data-start=\"1529\">Consider the following AVL tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"211\" src=\"https://cdn.mathpix.com/snip/images/7VSkirQXErWsYiX1r7nS7s_2F5IDS6w19HM10Pg0ySQ.original.fullsize.png\" width=\"340\"/></p><p data-end=\"1861\" data-start=\"1806\">What is the root of the AVL tree after both operations?</p><p><strong>Given Details:</strong></p><ul><li>First insert $10$ into the AVL tree.</li><li>Then delete $28$ from the resulting AVL tree.</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/7VSkirQXErWsYiX1r7nS7s_2F5IDS6w19HM10Pg0ySQ.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$8$</span>",
                "<span style=\"display: inline;\">$12$</span>",
                "<span style=\"display: inline;\">$24$</span>",
                "<span style=\"display: inline;\">$35$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541073\"></a><div itemprop=\"text\"><ul><li>AVL Tree after inserting $10:$</li></ul><p style=\"text-align:center\"><img alt=\"\" height=\"227\" src=\"https://cdn.mathpix.com/snip/images/hcgCuVLVakrVyZdq1U_911yTXYueBx0We_vmpmMabEY.original.fullsize.png\" width=\"233\"/></p><p> </p><ul><li>AVL Tree after Deleting $28:$</li></ul><p style=\"text-align:center\"><img alt=\"\" height=\"223\" src=\"https://cdn.mathpix.com/snip/images/xXtTE-0aYKVy6-nny9NJb-0dIpNpeeImSnHgvOYftHc.original.fullsize.png\" width=\"251\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541072/go-classes-dpp-gate-cs-da-data-structure-avl-insertion-%26-deletion\" target=\"_blank\">GATE Overflow #541072</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"773\" data-start=\"685\">Given the following AVL tree, delete the key $1$ and rebalance the tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"253\" src=\"https://cdn.mathpix.com/snip/images/b9ys58LzWolJwj-1wEaJv8Qrk-UfizB6q-B9jwOAqCI.original.fullsize.png\" width=\"395\"/></p><p data-end=\"976\" data-start=\"775\"><code> </code></p><p data-end=\"1053\" data-start=\"978\">What will be the root of the final AVL tree after deletion and rebalancing?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/b9ys58LzWolJwj-1wEaJv8Qrk-UfizB6q-B9jwOAqCI.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541070\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"567\" src=\"https://cdn.mathpix.com/snip/images/21DwFTGiXVALeFSzDREC7qun-Z9rPGWa8DRnqck4NKI.original.fullsize.png\" width=\"677\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541068/go-classes-dpp-gate-cs-da-data-structure-avl-deletion-%26-rebalancing\" target=\"_blank\">GATE Overflow #541068</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For the following three trees, choose the correct classification.</p><p data-end=\"4315\" data-start=\"4306\"><strong>Tree (a):</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"133\" src=\"https://cdn.mathpix.com/snip/images/CGoDkr8xSDhokYKe3sMVWv0hs9JzvPCeYGdDJGxXcBo.original.fullsize.png\" width=\"234\"/></p><p data-end=\"4394\" data-start=\"4385\"><strong>Tree (b):</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"224\" src=\"https://cdn.mathpix.com/snip/images/of0YN9BsoYWJnrlzYxKs9qfeZhr6DTysQPEOUAZHfgE.original.fullsize.png\" width=\"362\"/></p><p data-end=\"4545\" data-start=\"4536\"><strong>Tree (c):</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"206\" src=\"https://cdn.mathpix.com/snip/images/pVhHLnD_uTpwg9Eett5-GJoEwvRIStwhV0JH0R_t1Mw.original.fullsize.png\" width=\"364\"/></p><p data-end=\"4695\" data-start=\"4671\">Which option is correct?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/CGoDkr8xSDhokYKe3sMVWv0hs9JzvPCeYGdDJGxXcBo.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">All three are valid AVL trees.<br/></span>",
                "<span style=\"display: inline;\">Tree (a) is not a valid BST, tree (b) is a valid BST but not a valid AVL tree, and tree (c) is both a valid BST and a valid AVL tree.<br/></span>",
                "<span style=\"display: inline;\">Tree (a) is a valid AVL tree, tree (b) is not a valid BST, and tree (c) is not a valid AVL tree.<br/></span>",
                "<span style=\"display: inline;\">Tree (a) and tree (b) are valid AVL trees, but tree (c) is only a valid BST.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540955\"></a><div itemprop=\"text\"><p><strong>Tree (a): </strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"139\" src=\"https://cdn.mathpix.com/snip/images/bhiGUHELOrFtPVT-WSSqmAqwn4OUeSeC3KDCzD2XLZI.original.fullsize.png\" width=\"305\"/></p><p>This is not a valid BST! The $2$ is located in the right sub-tree of $7$, which breaks the BST property. </p><p>Remember that the BST property applies to <strong>every</strong> node in the left and right sub-trees, not just the immediate child! </p><p>All AVL trees are BSTs. Because of this, this tree can't be a valid AVL tree either. </p><p> </p><p><strong>Tree (b): </strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"224\" src=\"https://cdn.mathpix.com/snip/images/0ZLImGgRaf958WEajEmwaiRYRqX6kX0ZetfTvTB3GO4.original.fullsize.png\" width=\"330\"/></p><p>This tree is a valid BST! If we check every node, we see that the BST property holds at each of them. </p><p>However, this is not a valid AVL tree. We see that some nodes (for example, the $42$) violate the balance condition, which is an extra requirement compared to BSTs. Because the heights of $42$'s left and right sub-trees differ by more than one, this violates the condition. </p><p> </p><p><strong>Tree (c): </strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"195\" src=\"https://cdn.mathpix.com/snip/images/pLNZIv2aMHiXfIfmdvHNxLF5lrf7n7v4pQlI0KHpQvo.original.fullsize.png\" width=\"343\"/></p><p>This tree is a valid BST! If we check every node, we see that the BST property holds at each of them.</p><p>This tree is also a valid AVL tree! If we check every node, we see that the balance condition also holds at each of them.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540954/go-classes-dpp-gate-cs-da-data-structure-valid-bst-and-valid-avl-tree\" target=\"_blank\">GATE Overflow #540954</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3595\" data-start=\"3471\">What is the time complexity for efficiently finding an arbitrary item in an arbitrary AVL tree of $n$ nodes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(\\log_2 n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n \\log_2 n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540959\"></a><div itemprop=\"text\"><p data-end=\"3110\" data-start=\"3073\">An AVL tree is a height-balanced BST.</p><p data-end=\"3176\" data-start=\"3112\">For every node, the balance factor is always $-1$, $0$, or $+1$.</p><p data-end=\"3276\" data-start=\"3178\">Because of this balance condition, the height of an AVL tree with $n$ nodes is $\\Theta(\\log_2 n)$.</p><p data-end=\"3337\" data-start=\"3278\">Searching in an AVL tree is the same as searching in a BST.</p><p data-end=\"3402\" data-start=\"3339\">At each node, we compare the key and move either left or right.</p><p data-end=\"3476\" data-start=\"3404\">So, the number of comparisons is proportional to the height of the tree.</p><p data-end=\"3542\" data-start=\"3478\">Since the height is $\\Theta(\\log_2 n)$, the search time is also: $\\Theta(\\log_2 n)$</p><p data-end=\"3591\" data-start=\"3564\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540953/go-classes-dpp-gate-cs-da-data-structure-avl-search-complexity\" target=\"_blank\">GATE Overflow #540953</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Data Structures (Binary Search Trees (BST - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 2",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2716\" data-start=\"2662\">Which statement is true for AVL trees?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Adding a node may cause the tree to increase in height.<br/></span>",
                "<span style=\"display: inline;\">Adding a node will cause the tree to increase in height.<br/></span>",
                "<span style=\"display: inline;\">Adding a node may cause the tree to decrease in height.<br/></span>",
                "<span style=\"display: inline;\">Adding a node will cause the tree to decrease in height.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540958\"></a><div itemprop=\"text\"><p data-end=\"2417\" data-start=\"2351\">In an AVL tree, insertion is done like normal BST insertion first.</p><p data-end=\"2480\" data-start=\"2419\">After insertion, rotations may be applied to restore balance.</p><p data-end=\"2536\" data-start=\"2482\">Adding a node may increase the height of the AVL tree.</p><p data-end=\"2667\" data-start=\"2538\">For example, if a new node is inserted at a lower level and no rotation reduces the height, the total height can increase by $1$.</p><p data-end=\"2723\" data-start=\"2669\">But adding a node does not always increase the height.</p><p data-end=\"2806\" data-start=\"2725\">Sometimes, after insertion and rotation, the height of the tree remains the same.</p><p data-end=\"2869\" data-start=\"2808\">Also, adding a node cannot cause the tree height to decrease.</p><p data-end=\"2900\" data-start=\"2871\">So, the correct statement is:</p><p data-end=\"2957\" data-start=\"2902\">Adding a node may cause the tree to increase in height.</p><p data-end=\"2986\" data-start=\"2959\"><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540952/go-classes-dpp-gate-cs-da-data-structure-avl-insertion-property\" target=\"_blank\">GATE Overflow #540952</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1846\" data-start=\"1755\">We have just inserted $51$ into the following AVL tree. Rebalance the tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"286\" src=\"https://cdn.mathpix.com/snip/images/3gMSTG9vZOWq6q3YZZUtapJSaqs-CETT1T-o5owvTuQ.original.fullsize.png\" width=\"198\"/></p><p>What is the root of the AVL tree after rebalancing?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/3gMSTG9vZOWq6q3YZZUtapJSaqs-CETT1T-o5owvTuQ.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$35$<br/></span>",
                "<span style=\"display: inline;\">$42$<br/></span>",
                "<span style=\"display: inline;\">$47$<br/></span>",
                "<span style=\"display: inline;\">$57$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540961\"></a><div itemprop=\"text\"><p data-end=\"101\" data-start=\"36\">After inserting $51$, the path from root to the inserted node is:</p><p data-end=\"167\" data-start=\"103\">$35 \\rightarrow 57 \\rightarrow 42 \\rightarrow 47 \\rightarrow 51$</p><p data-end=\"217\" data-start=\"169\">Now check balance from the inserted node upward.</p><p data-end=\"241\" data-start=\"219\">Node $47$ is balanced.</p><p data-end=\"265\" data-start=\"243\">Node $42$ is balanced.</p><p data-end=\"294\" data-start=\"267\">Node $57$ is also balanced.</p><p data-end=\"372\" data-start=\"296\">But node $35$ becomes unbalanced because its right subtree becomes too tall.</p><p data-end=\"494\" data-start=\"374\">At node $35$, the imbalance is in the <strong data-end=\"429\" data-start=\"412\">right subtree</strong> of $35$, and inside that, it is in the <strong data-end=\"485\" data-start=\"469\">left subtree</strong> of $57$.</p><p data-end=\"556\" data-start=\"496\">So, this is a <strong data-end=\"529\" data-start=\"510\">Right-Left case</strong>, also called an $RL$ case.</p><p data-end=\"596\" data-start=\"558\">For an $RL$ case, we do two rotations:</p><p data-end=\"630\" data-start=\"598\">$1.$ Right rotation on node $57$</p><p data-end=\"663\" data-start=\"632\">$2.$ Left rotation on node $35$</p><p data-end=\"715\" data-start=\"665\">After these rotations, node $42$ comes to the top.</p><p data-end=\"749\" data-start=\"717\">The final balanced tree becomes:</p><p style=\"text-align:center\"><img alt=\"\" height=\"317\" src=\"https://cdn.mathpix.com/snip/images/g7YBUFWbdqF0qyE8-35Gv24iJ_EjuR45xbjZCp7nK1E.original.fullsize.png\" width=\"449\"/></p><p><br/>So, the root after rebalancing is: $\\boxed{42}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540951/go-classes-dpp-gate-cs-da-data-structure-avl-insertion\" target=\"_blank\">GATE Overflow #540951</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following trees are valid AVL trees?</p><p style=\"text-align:center\"><img alt=\"\" height=\"411\" src=\"https://cdn.mathpix.com/snip/images/ZVLqfF-8noYUfzI-KSqSV5dmW_XnkezuB95HnbBhHu4.original.fullsize.png\" width=\"597\"/></p><p> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/ZVLqfF-8noYUfzI-KSqSV5dmW_XnkezuB95HnbBhHu4.original.fullsize.png",
            "options": [],
            "answer": "540946",
            "solution": "<div class=\"solution-content\"><a name=\"546076\"></a><div itemprop=\"text\">Ans should be a e f</div><br><br><small>Source: <a href=\"https://gateoverflow.in/540946/go-classes-dpp-gate-cs-da-data-structure-valid-avl-trees\" target=\"_blank\">GATE Overflow #540946</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"512\" data-start=\"415\">In a binary tree $T$, nodes $p$, $q$, and $v$ appear in the inorder traversal as:</p><p data-end=\"539\" data-start=\"514\">$\\ldots, p, v, q, \\ldots$</p><p data-end=\"590\" data-start=\"541\">Node $v$ has both a left child and a right child.</p><p data-end=\"639\" data-start=\"592\">Which of the following statements must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$p$ has no right child, and $q$ has no left child<br/></span>",
                "<span style=\"display: inline;\">$p$ has no right child, and $q$ has a left child<br/></span>",
                "<span style=\"display: inline;\">$p$ has a right child, and $q$ has no left child<br/></span>",
                "<span style=\"display: inline;\">$p$ has a right child, and $q$ has a left child</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540059\"></a><div itemprop=\"text\"><p data-end=\"1101\" data-start=\"873\">In inorder traversal, the node just before $v$ is the inorder predecessor of $v$. </p><p data-end=\"1101\" data-start=\"873\">Since $v$ has a left subtree, $p$ must be the rightmost node in the left subtree of $v$. </p><p data-end=\"1101\" data-start=\"873\">Therefore, $p$ cannot have a right child.</p><p data-end=\"1301\" data-start=\"1103\">Similarly, the node just after $v$ is the inorder successor of $v$. </p><p data-end=\"1301\" data-start=\"1103\">Since $v$ has a right subtree, $q$ must be the leftmost node in the right subtree of $v$. </p><p data-end=\"1301\" data-start=\"1103\">Therefore, $q$ cannot have a left child.</p><p data-end=\"1335\" data-start=\"1303\"><br/><strong data-end=\"1334\" data-start=\"1329\">Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540058/go-classes-dpp-gate-cs-da-data-structure-inorder-predecessor-%26-successor\" target=\"_blank\">GATE Overflow #540058</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1788\" data-start=\"1651\">A Binary Search Tree has $15$ nodes. Every node except those at the lowest level has both a left child and a right child.</p><p data-end=\"1867\" data-start=\"1790\">A key is searched in this BST. The key may or may not be present in the tree.</p><p data-end=\"1943\" data-start=\"1869\">What is the maximum number of node comparisons required during the search?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$15$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540057\"></a><div itemprop=\"text\"><p data-end=\"2128\" data-start=\"1996\">The given BST has $15$ nodes and every non-lowest-level node has two children. So the tree is a perfect binary tree.</p><p data-end=\"2183\" data-start=\"2130\">A perfect binary tree with $15$ nodes has $4$ levels:</p><ul><li data-end=\"2275\" data-start=\"2185\">Level $1: ~1$ node<br/> </li><li data-end=\"2275\" data-start=\"2185\">Level $2: ~2$ nodes<br/> </li><li data-end=\"2275\" data-start=\"2185\">Level $3: ~4$ nodes<br/> </li><li data-end=\"2275\" data-start=\"2185\">Level $4: ~8$ nodes<br/> </li></ul><p>During BST search, we compare the key with one node at each level. </p><p data-end=\"2417\" data-start=\"2277\">The longest search path goes from the root to a node at the lowest level.</p><p data-end=\"2464\" data-start=\"2419\">So, the maximum number of comparisons is $4$.</p><p data-end=\"2490\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2466\"><br/><strong>Answer : <strong data-end=\"2489\" data-start=\"2484\">B</strong></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540056/go-classes-dpp-gate-cs-da-data-structure-bst-search\" target=\"_blank\">GATE Overflow #540056</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2681\" data-start=\"2582\">The following tree is a Binary Search Tree. The values $\\text{a}$ to $\\text{g}$ are all distinct.</p><p style=\"text-align:center\"><img alt=\"\" height=\"201\" src=\"https://cdn.mathpix.com/snip/images/V9ks_K_SBLPZSLTytWE1xxab_cQFG-3pB8vlYM64HIY.original.fullsize.png\" width=\"183\"/></p><p data-end=\"2842\" data-start=\"2770\">Which of the following gives the correct increasing order of the values?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/V9ks_K_SBLPZSLTytWE1xxab_cQFG-3pB8vlYM64HIY.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$\\text{a < b < d < e < c < f < g}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{d < b < e < a < f < c < g}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{d < e < f < g < b < c < a}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{g < f < c < e < d < b < a}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540055\"></a><div itemprop=\"text\"><p data-end=\"3015\" data-start=\"2990\">In a BST:</p><ul data-end=\"3169\" data-start=\"3017\"><li data-end=\"3065\" data-section-id=\"10v4dh1\" data-start=\"3017\">Left subtree values are smaller than the root.<br/> </li><li data-end=\"3115\" data-section-id=\"9lcnqs\" data-start=\"3066\">Right subtree values are greater than the root.<br/> </li><li data-end=\"3169\" data-section-id=\"1gs8jc9\" data-start=\"3116\">Inorder traversal gives values in increasing order.<br/> </li></ul><p data-end=\"3206\" data-start=\"3171\">For the left subtree rooted at $\\text{b}:$</p><p data-end=\"3219\" data-start=\"3208\">$\\text{d &lt; b &lt; e}$</p><p data-end=\"3241\" data-start=\"3221\">Then comes root $\\text{a}$.</p><p data-end=\"3279\" data-start=\"3243\">For the right subtree rooted at $\\text{c}:$</p><p data-end=\"3292\" data-start=\"3281\">$\\text{f &lt; c &lt; g}$</p><p data-end=\"3330\" data-start=\"3294\">So the complete increasing order is:</p><p data-end=\"3359\" data-start=\"3332\">$\\text{d &lt; b &lt; e &lt; a &lt; f &lt; c &lt; g}$</p><p data-end=\"3380\" data-start=\"3361\"><br/>Answer: <strong data-end=\"3380\" data-start=\"3375\">B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540054/go-classes-dpp-gate-cs-da-data-structure-ordering-of-keys-in-bst\" target=\"_blank\">GATE Overflow #540054</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1754\" data-start=\"1678\">Consider the following statements about Binary Search Trees.</p><p data-end=\"2047\" data-start=\"2013\">Which of the following is correct?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{S1}:$ The largest value of a BST is the last value in the list produced by an inorder traversal.</li><li>$\\text{S2}:$ If you delete a value $x$ from a BST that contains $x$, and then insert $x$ again, the resulting tree will always have the same shape as the original tree.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$ is true and $\\text{S2}$ is true</span>",
                "<span style=\"display: inline;\">$\\text{S1}$ is true and $\\text{S2}$ is false</span>",
                "<span style=\"display: inline;\">$\\text{S1}$ is false and $\\text{S2}$ is true</span>",
                "<span style=\"display: inline;\">$\\text{S1}$ is false and $\\text{S2}$ is false</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540051\"></a><div itemprop=\"text\"><p data-end=\"2362\" data-start=\"2193\">For a BST, inorder traversal visits keys in sorted increasing order. </p><p data-end=\"2362\" data-start=\"2193\">Therefore, the largest value appears at the end of inorder traversal. </p><p data-end=\"2362\" data-start=\"2193\">So $\\text{S1}$ is true.</p><p data-end=\"2605\" data-start=\"2364\">$\\text{S2}$ is false. </p><p data-end=\"2605\" data-start=\"2364\">Deletion can change the structure of the tree, especially when the deleted node has two children. </p><p data-end=\"2605\" data-start=\"2364\">Reinserting the same value later may place it at a different position.</p><p data-end=\"2605\" data-start=\"2364\">Therefore, the tree shape is not guaranteed to be the same.<br/> </p><p data-end=\"2626\" data-start=\"2607\"><strong>Answer : <strong data-end=\"2626\" data-start=\"2621\">B</strong></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540050/go-classes-dpp-gate-cs-da-data-structure-bst-properties\" target=\"_blank\">GATE Overflow #540050</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"580\" data-start=\"522\">Consider the following Binary Search Tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"227\" src=\"https://cdn.mathpix.com/snip/images/YGcF1kN5BFAC1kjijaUiPYC9MOEPviSUNryFMGO10nU.original.fullsize.png\" width=\"189\"/></p><p data-end=\"862\" data-start=\"704\">The root node $7$ is deleted using a standard BST deletion algorithm. Which of the following values can become the new root while still producing a valid BST?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/YGcF1kN5BFAC1kjijaUiPYC9MOEPviSUNryFMGO10nU.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$14$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540127\"></a><div itemprop=\"text\">when root node is deleted we can replace the root node by predecessor (or) successor of root which are 6 nad 10 respectively <br/> NOTE: we can find the predecessor and successor of node by using inorder traversal of tree for above 3 5 6 7 10 11 14 17 so, predecessor of 7 is \"6\" and succesor is \"10\" we replace root wiht any of them the tree is still a valid BST.<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/540046/go-classes-dpp-gate-cs-da-data-structure-bst-deletion\" target=\"_blank\">GATE Overflow #540046</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1846\" data-start=\"1797\">Consider the following statement:</p><p data-end=\"1972\" data-start=\"1848\">“$\\text{Searching for an element in a balanced Binary Search Tree with N nodes will require exactly}$ $\\mathrm{\\log (N)}$ $\\text{compare operations.}$”</p><p data-end=\"2008\" data-start=\"1974\">Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The statement is true for every successful search.<br/></span>",
                "<span style=\"display: inline;\">The statement is false because the search cost is $\\mathrm{O(\\log N)}$, not necessarily exactly $\\mathrm{\\log N}$.<br/></span>",
                "<span style=\"display: inline;\">The statement is true only when the tree is skewed.<br/></span>",
                "<span style=\"display: inline;\">The statement is false because searching in a balanced BST is always $\\mathrm{O(N)}$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539913\"></a><div itemprop=\"text\"><p data-end=\"208\" data-start=\"180\">The given statement is <strong>False</strong>.</p><p data-end=\"367\" data-start=\"210\">In a balanced BST, the height of the tree is proportional to $\\mathrm{\\log N}$. </p><p data-end=\"367\" data-start=\"210\">So, in the worst case, the number of comparisons is bounded by the height of the tree.</p><p data-end=\"395\" data-start=\"369\">Therefore, search time is:</p><p data-end=\"408\" data-start=\"397\">$\\mathrm{O(\\log N)}$</p><p data-end=\"493\" data-start=\"410\">But $\\mathrm{O(\\log N)}$ does not mean the search always takes exactly $\\mathrm{\\log N}$ comparisons.</p><p data-end=\"507\" data-start=\"495\"><br/>For example:</p><p data-end=\"583\" data-start=\"509\">If the required key is present at the root, only $1$ comparison is needed.</p><p data-end=\"714\" data-start=\"585\">If the required key is present near the bottom of the tree, then more comparisons are needed, up to about the height of the tree.</p><p data-end=\"793\" data-start=\"716\">So, the number of comparisons depends on where the key is located in the BST.</p><p data-end=\"932\" data-start=\"795\">Hence, searching in a balanced BST takes logarithmic time in the worst case, but it does not always require exactly $\\mathrm{\\log N}$ comparisons.</p><p data-end=\"954\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"934\"><br/>Final answer: <strong data-end=\"953\" data-start=\"948\">B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539912/go-classes-dpp-gate-cs-da-data-structure-bst-search-complexity\" target=\"_blank\">GATE Overflow #539912</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"653\" data-start=\"505\">The following strings are inserted into an empty Binary Search Tree in the given order, using normal lexicographic dictionary order:</p><p data-end=\"723\" data-start=\"655\">$\\text{Paris, London, Rome, Vienna, Dubai, Madrid, Lisbon, Prague, Beirut}$</p><p data-end=\"822\" data-start=\"725\">While searching for \"$\\text{Prague}$\" in the resulting BST, which sequence of nodes will be encountered?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{Paris, London, Madrid, Prague}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Paris, Rome, Prague}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Paris, Rome, Vienna, Prague}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{London, Madrid, Paris, Prague}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539911\"></a><div itemprop=\"text\"><p>We'll build the BST first.</p><p>When inserting strings into a BST, we compare them alphabetically. </p><p>If a string is alphabetically less than the current node, it goes to the left. </p><p>If it is greater than the current node, it goes to the right.</p><ul><li>$\\text{Paris}$ becomes the root node.<br/> </li><li>$\\text{London}$ comes before $\\text{Paris}$ $(L &lt; P)$, so it becomes the left child of $\\text{Paris}$.<br/> </li><li>$\\text{Rome}$ comes after $\\text{Paris}$ $(R &gt; P)$, so it becomes the right child of $\\text{Paris}$.<br/> </li><li>...We continue inserting the other cities using the same rules...<br/> </li><li>$\\text{Prague}$ is inserted. We start at the root, $\\text{Paris}$.<br/> <ul><li>Comparing $\\text{Prague}$ with $\\text{Paris}$: The first letter $\\text{P}$ is the same, but the second letter $\\text{r}$ comes after $\\text{a}$. Therefore, $\\text{Prague} &gt; \\text{Paris}$, so we move to the right child.<br/> </li><li>Comparing $\\text{Prague}$ with $\\text{Rome}$: $\\text{P}$ comes before $\\text{R}$. Therefore, $\\text{Prague} &lt; \\text{Rome}$, so we move to the left.<br/> </li><li>$\\text{Rome}$ has no left child, so $\\text{Prague}$ is inserted as the left child of $\\text{Rome}$.<br/> </li></ul></li></ul><p>Now, to search for $\\text{Prague}$ in the resulting tree, the algorithm follows the same path used during insertion.</p><ol><li>$\\text{Paris}:$ Start at the root. $\\text{Prague} &gt; \\text{Paris}$, so move right.<br/> </li><li>$\\text{Rome}: \\text{Prague} &lt; \\text{Rome}$, so move left.<br/> </li><li>$\\text{Prague}:$ The target is found.<br/> </li></ol><p>The sequence of nodes encountered is $\\text{Paris}, \\text{Rome}, \\text{Prague}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539907/go-classes-dpp-gate-cs-da-data-structure-bst-search\" target=\"_blank\">GATE Overflow #539907</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Data Structures (Binary Search Trees (BST - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 3",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3597\" data-start=\"3500\">Assume height is counted as the number of nodes on the longest root-to-leaf path.</p><p data-end=\"3649\" data-start=\"3599\">A Binary Search Tree contains exactly $403$ nodes.</p><p data-end=\"3739\" data-start=\"3651\">Which option gives the minimum possible height and maximum possible height respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8, ~402$<br/></span>",
                "<span style=\"display: inline;\">$9, ~403$<br/></span>",
                "<span style=\"display: inline;\">$9, ~402$<br/></span>",
                "<span style=\"display: inline;\">$10, ~403$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539905\"></a><div itemprop=\"text\"><p data-end=\"3890\" data-start=\"3812\">For minimum height, the BST should be as balanced as possible.</p><p data-end=\"3937\" data-start=\"3892\">A binary tree of height $h$ can have at most:</p><p data-end=\"3954\" data-start=\"3939\">$2^h - 1$ nodes</p><p data-end=\"3968\" data-start=\"3956\">For, $h = 8:~2^8 - 1 = 255$ nodes</p><p data-end=\"4022\" data-start=\"3987\">Therefore, $h=8$ is not enough for $403$ nodes.</p><p data-end=\"4036\" data-start=\"4024\">For, $h = 9:~2^9 - 1 = 511$ nodes</p><p data-end=\"4096\" data-start=\"4055\">This is enough. So minimum height is $9$.</p><p data-end=\"4185\" data-start=\"4098\">For maximum height, the BST can be completely skewed. Then every node lies on one path.</p><p data-end=\"4214\" data-start=\"4187\">So maximum height is $403$.</p><p data-end=\"4239\" data-start=\"4216\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539904/go-classes-dpp-gate-cs-da-data-structure-bst-height\" target=\"_blank\">GATE Overflow #539904</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"587\" data-start=\"500\">Which of the following statements about Binary Search Trees is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $\\texttt{y}$ is in the left subtree of node $\\texttt{x}$, then $\\texttt{y.key >= x.key}$. If $\\texttt{y}$ is in the right subtree of $\\texttt{x}$, then $\\texttt{x.key <= y.key}$.<br/></span>",
                "<span style=\"display: inline;\">The traversal that prints all keys of a BST in sorted order is preorder traversal.<br/></span>",
                "<span style=\"display: inline;\">To delete a node $\\texttt{z}$ having exactly one child, we remove $\\texttt{z}$ by making its parent point to $\\texttt{NULL}$<br/>.</span>",
                "<span style=\"display: inline;\">To delete a node $\\texttt{z}$ having two children, we directly promote the first child of $\\texttt{z}$ to the position of $\\texttt{z}$.<br/></span>",
                "<span style=\"display: inline;\">To find the minimum key in a BST, we start at the root and repeatedly follow the left-child pointer until $\\texttt{NULL}$ is reached.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539896\"></a><div itemprop=\"text\"><p data-end=\"1305\" data-start=\"1168\">In a BST, all keys in the left subtree of a node are smaller than the node, and all keys in the right subtree are larger.</p><p data-end=\"1372\" data-start=\"1307\">Option A is wrong because the left subtree condition is reversed.</p><p data-end=\"1452\" data-start=\"1374\">Option B is wrong because inorder traversal, not preorder, gives sorted order.</p><p data-end=\"1549\" data-start=\"1454\">Option C is wrong because a node with one child should be replaced by its child, not by $\\texttt{NULL}$.</p><p data-end=\"1685\" data-start=\"1551\">Option D is wrong because for deleting a node with two children, we usually replace it using inorder successor or inorder predecessor.</p><p data-end=\"1785\" data-start=\"1687\">To find the minimum key, we keep moving left until there is no left child. </p><p data-end=\"1785\" data-start=\"1687\">So option E is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539895/go-classes-dpp-gate-cs-da-data-structure-bst-property\" target=\"_blank\">GATE Overflow #539895</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"564\" data-start=\"513\">The postorder traversal of a binary search tree is:</p><p data-end=\"598\" data-start=\"566\">$\\text{1, 12, 4, 22, 18, 16}$</p><p data-end=\"679\" data-start=\"600\">What is the new postorder traversal after inserting $10$ and $14$ into the BST?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{1, 12, 4, 22, 18, 16, 14, 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{1, 10, 12, 14, 4, 22, 18, 16}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{1, 10, 14, 12, 4, 22, 18, 16}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{1, 12, 4, 10, 14, 22, 18, 16}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"539843\"></a><div itemprop=\"text\"><div style=\"line-height:1.9; font-size:16px;\"><p>In postorder traversal, the last element is the root.</p><p>So the root is $: 16$</p><p>In a binary search tree, values smaller than the root go to the left subtree, and values greater than the root go to the right subtree.</p><p>Values smaller than $16$ are $:1, 12, 4$</p><p>Values greater than $16$ are $:22, 18$</p><p>So the original BST is:</p><p style=\"text-align:center\"><img alt=\"\" height=\"172\" src=\"https://cdn.mathpix.com/snip/images/w5Kki1DSbXDytqFrTbOTpHSLd4_aPFb2-OIeMSeRKtE.original.fullsize.png\" width=\"203\"/></p><p>Now insert $10$.</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$10 &lt; 16$<br/>$10 &gt; 4$<br/>$10 &lt; 12$</p><p>So $10$ becomes the left child of $12$.</p><p>Now insert $14$.</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$14 &lt; 16$<br/>$14 &gt; 4$<br/>$14 &gt; 12$</p><p>So $14$ becomes the right child of $12$.</p><p>The updated BST is:</p><p style=\"text-align:center\"><img alt=\"\" height=\"272\" src=\"https://cdn.mathpix.com/snip/images/Yg9xjmk486Dnzyreg1kcdTyyGe7fd4ij4XPGu6jSz1M.original.fullsize.png\" width=\"245\"/></p><p>Postorder traversal follows:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">Left subtree $\\rightarrow$ Right subtree $\\rightarrow$ Root</p><p>Postorder of the left subtree rooted at $4$ is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$1, 10, 14, 12, 4$</p><p>Postorder of the right subtree rooted at $18$ is:</p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$22, 18$</p><p>Finally, visit the root $16$.</p><p><b>Final postorder traversal:</b></p><p data-pbcklang=\"text\" data-pbcktabsize=\"4\">$\\text{1, 10, 14, 12, 4, 22, 18, 16}$</p><p><br/><strong>Answer : C</strong></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539842/go-classes-dpp-gate-cs-da-data-structure-bst-postorder-update\" target=\"_blank\">GATE Overflow #539842</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following binary search tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"242\" src=\"https://cdn.mathpix.com/snip/images/Egq5necNy-AATrzImBwrx0DDl6IzuTyeO5DT41TySyE.original.fullsize.png\" width=\"323\"/></p><p data-end=\"1138\" data-start=\"996\">If we traverse the tree in <strong data-end=\"1036\" data-start=\"1023\">postorder</strong> and print only the key values that are greater than $12$ and less than $20$, what will be the output?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/Egq5necNy-AATrzImBwrx0DDl6IzuTyeO5DT41TySyE.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$\\text{13, 16, 18, 19, 17, 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{13, 15, 16, 17, 18, 19}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{15, 13, 17, 16, 19, 18}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{15, 17, 13, 16, 19, 18}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539823\"></a><div itemprop=\"text\"><p data-end=\"1329\" data-start=\"1297\">Postorder means:</p><p data-end=\"1370\" data-start=\"1331\">Left subtree $\\rightarrow$ Right subtree $\\rightarrow$ Root</p><p data-end=\"1436\" data-start=\"1372\">For the left subtree of $15$, only $13$ satisfies the condition.</p><p data-end=\"1499\" data-start=\"1438\">For the right subtree of $15$, valid values in postorder are:</p><p data-end=\"1517\" data-start=\"1501\">$\\text{16, 18, 19, 17}$</p><p data-end=\"1517\" data-start=\"1501\">Finally, root $15$ is printed because it also satisfies the condition.</p><p data-end=\"1608\" data-start=\"1591\">So the output is:</p><p data-end=\"1634\" data-start=\"1610\">$\\text{13, 16, 18, 19, 17, 15}$</p><p data-end=\"1634\" data-start=\"1610\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539822/go-classes-dpp-gate-cs-da-data-structure-postorder-traversal\" target=\"_blank\">GATE Overflow #539822</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Data Structures (Heaps & Priority Queues - Part 1)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Heaps & Priority Queues - Part 1",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Heaps & Priority Queues (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5013\" data-start=\"4980\">Suppose vector $A$ is a min-heap:</p><p data-end=\"5048\" data-start=\"5015\">$A = [2, 4, 3, 6, 7, 3, 5, 8, 9]$</p><p data-end=\"5104\" data-start=\"5050\">After calling $\\texttt{Push(1)}$, what is the final heap array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[1, 2, 3, 6, 4, 3, 5, 8, 9, 7]$<br/></span>",
                "<span style=\"display: inline;\">$[1, 4, 2, 6, 7, 3, 5, 8, 9, 3]$<br/></span>",
                "<span style=\"display: inline;\">$[2, 1, 3, 6, 4, 3, 5, 8, 9, 7]$<br/></span>",
                "<span style=\"display: inline;\">$[1, 2, 3, 4, 6, 3, 5, 8, 9, 7]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541825\"></a><div itemprop=\"text\"><p data-end=\"2018\" data-start=\"1998\">Initial min-heap is:</p><p data-end=\"2049\" data-start=\"2020\">$[2, 4, 3, 6, 7, 3, 5, 8, 9]$</p><p data-end=\"2097\" data-start=\"2051\">Now insert $1$ at the next available position:</p><p data-end=\"2131\" data-start=\"2099\">$[2, 4, 3, 6, 7, 3, 5, 8, 9, 1]$</p><p data-end=\"2151\" data-start=\"2133\">Now bubble up $1$.</p><p data-end=\"2178\" data-start=\"2153\">The parent of $1$ is $7$.</p><p data-end=\"2200\" data-start=\"2180\">Since $1 &lt; 7$, swap:</p><p data-end=\"2234\" data-start=\"2202\">$[2, 4, 3, 6, 1, 3, 5, 8, 9, 7]$</p><p data-end=\"2265\" data-start=\"2236\">Now the parent of $1$ is $4$.</p><p data-end=\"2287\" data-start=\"2267\">Since $1 &lt; 4$, swap:</p><p data-end=\"2321\" data-start=\"2289\">$[2, 1, 3, 6, 4, 3, 5, 8, 9, 7]$</p><p data-end=\"2352\" data-start=\"2323\">Now the parent of $1$ is $2$.</p><p data-end=\"2380\" data-start=\"2354\">Since $1 &lt; 2$, swap again:</p><p data-end=\"2414\" data-start=\"2382\">$[1, 2, 3, 6, 4, 3, 5, 8, 9, 7]$</p><p data-end=\"2448\" data-start=\"2416\">Now $1$ is at the root, so stop.</p><p style=\"text-align:center\"><img alt=\"\" height=\"393\" src=\"https://cdn.mathpix.com/snip/images/LVLBjBK1Zms1zyve1MDbSWNFcjlAWcLzoUeog2lRu4U.original.fullsize.png\" width=\"736\"/></p><p data-end=\"2470\" data-start=\"2450\">Final heap array is:</p><p data-end=\"2512\" data-start=\"2472\">$\\boxed{[1, 2, 3, 6, 4, 3, 5, 8, 9, 7]}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541820/go-classes-dpp-gate-cs-da-data-structure-heap-insertion\" target=\"_blank\">GATE Overflow #541820</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"623\" data-start=\"564\">Heaps are usually implemented using arrays.</p><p data-end=\"781\" data-start=\"625\">If an element is present at a <strong data-end=\"676\" data-start=\"655\">known array index</strong> in a heap of size $N$, what is the time complexity to remove that element and restore the heap property?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log N)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(N)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(1)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(N^2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540866\"></a><div itemprop=\"text\"><p data-end=\"998\" data-start=\"895\">Since the index of the element is already known, we do not spend time searching for it.</p><p data-end=\"1104\" data-start=\"1000\">To remove it, we replace that element with the last element of the heap and reduce the heap size by $1$.</p><p data-end=\"1159\" data-start=\"1106\">After replacement, the heap property may be violated.</p><p data-end=\"1195\" data-start=\"1161\">So, we restore the heap by either:</p><ul data-end=\"1254\" data-start=\"1197\"><li data-end=\"1232\" data-section-id=\"18a86r7\" data-start=\"1197\">moving the new element upward, or<br/> </li><li data-end=\"1254\" data-section-id=\"1jbjbtp\" data-start=\"1233\">moving it downward.<br/> </li></ul><p data-end=\"1349\" data-start=\"1256\">In the worst case, the element may travel from a leaf to the root or from the root to a leaf.</p><p data-end=\"1417\" data-start=\"1351\">The height of a binary heap with $N$ elements is $\\Theta(\\log N)$.</p><p data-end=\"1475\" data-start=\"1419\">Therefore, removing an element from a known index takes:</p><p data-end=\"1493\" data-start=\"1477\">$\\Theta(\\log N)$</p><p data-end=\"1520\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1495\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540865/go-classes-dpp-gate-cs-da-data-structure-heapify\" target=\"_blank\">GATE Overflow #540865</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6214\" data-start=\"6055\">Given a binary min-heap storing $n$ comparable keys, can we always build a Set AVL Tree containing the same keys using only $O(n)$ comparisons?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540864\"></a><div itemprop=\"text\"><p data-end=\"6315\" data-start=\"6251\">A min-heap gives only partial order information.</p><p data-end=\"6435\" data-start=\"6317\">It tells us that each parent is smaller than its children, but it does not give the full sorted order of all elements.</p><p data-end=\"6520\" data-start=\"6437\">Suppose we could convert a min-heap into an AVL tree using only $O(n)$ comparisons.</p><p data-end=\"6562\" data-start=\"6522\">Then we could sort any array as follows:</p><ol data-end=\"6732\" data-start=\"6564\"><li data-end=\"6606\" data-section-id=\"1m4ymwl\" data-start=\"6564\">Build a min-heap in $O(n)$ comparisons.<br/> </li><li data-end=\"6666\" data-section-id=\"1pwy43q\" data-start=\"6607\">Convert the heap into an AVL tree in $O(n)$ comparisons.<br/> </li><li data-end=\"6732\" data-section-id=\"f3vq4j\" data-start=\"6667\">Perform inorder traversal of the AVL tree to get sorted order.<br/> </li></ol><p data-end=\"6792\" data-start=\"6734\">This would sort comparable elements in $O(n)$ comparisons.</p><p data-end=\"6858\" data-start=\"6794\">But comparison-based sorting has lower bound $\\Omega(n \\log n)$.</p><p data-end=\"6921\" data-start=\"6860\">So, such an $O(n)$ comparison conversion cannot always exist.</p><p data-end=\"6942\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"6923\"><strong>Answer: B </strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540863/go-classes-dpp-gate-cs-da-data-structure-heap-to-avl-tree\" target=\"_blank\">GATE Overflow #540863</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3216\" data-start=\"3118\">Consider the following min-heap where each node is written as $\\texttt{(value, priority)}$:</p><p style=\"text-align:center\"><img alt=\"\" height=\"217\" src=\"https://cdn.mathpix.com/snip/images/zn7boti5B7pAAGvHPR-6eYx65E-CFszhkdq5iBgIsEw.original.fullsize.png\" width=\"240\"/></p><p data-end=\"3354\" data-start=\"3316\">Now perform these operations in order:</p><p data-end=\"3487\" data-start=\"3409\">Which option gives the correct returned value from $\\texttt{pop()}$ and the final heap?</p><p><strong>Given Details:</strong></p><ul><li>$\\texttt{updatePriority(A, 8)}$</li><li>$\\texttt{pop()}$</li><li>$\\texttt{add(F, 2)}$</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/zn7boti5B7pAAGvHPR-6eYx65E-CFszhkdq5iBgIsEw.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{pop()}$ returns $\\text{A}$, final heap $:\\text{[(F,2), (D,6), (C,7), (E,9), (B,5)]}$</span>",
                "<span style=\"display: inline;\">$\\texttt{pop()}$ returns $\\text{B}$, final heap $:\\text{[(F,2), (D,6), (C,7), (E,9), (A,8)]}$</span>",
                "<span style=\"display: inline;\">$\\texttt{pop()}$ returns $\\text{D}$, final heap $:\\text{[(F,2), (B,5), (C,7), (A,8), (E,9)]}$</span>",
                "<span style=\"display: inline;\">$\\texttt{pop()}$ returns $\\text{B}$, final heap $:\\text{[(D,6), (F,2), (C,7), (E,9), (A,8)]}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540868\"></a><div itemprop=\"text\"><p data-end=\"5460\" data-start=\"5440\">Initial min-heap is:</p><p data-end=\"5499\" data-start=\"5462\">$[(A,3), (B,5), (C,7), (D,6), (E,9)]$</p><p data-end=\"5601\" data-start=\"5501\">Here, the heap is ordered by priority value. Smaller priority means higher priority in the min-heap.</p><p data-end=\"5619\" data-start=\"5603\">First operation:</p><p data-end=\"5643\" data-start=\"5621\">$\\texttt{updatePriority(A, 8)}$</p><p data-end=\"5695\" data-start=\"5645\">Earlier, $A$ had priority $3$ and was at the root.</p><p data-end=\"5722\" data-start=\"5697\">Now $A$ has priority $8$.</p><p data-end=\"5783\" data-start=\"5724\">Since its priority increased, it may need to move downward.</p><p data-end=\"5819\" data-start=\"5785\">Compare $(A,8)$ with its children:</p><p data-end=\"5840\" data-start=\"5821\">$(B,5)$ and $(C,7)$</p><p data-end=\"5893\" data-start=\"5842\">The smaller child is $(B,5)$, so swap $A$ with $B$.</p><p data-end=\"5933\" data-start=\"5895\">Now compare $(A,8)$ with its children:</p><p data-end=\"5954\" data-start=\"5935\">$(D,6)$ and $(E,9)$</p><p data-end=\"5985\" data-start=\"5956\">The smaller child is $(D,6)$.</p><p data-end=\"6020\" data-start=\"5987\">Since $8 &gt; 6$, swap $A$ with $D$.</p><p data-end=\"6059\" data-start=\"6022\">Heap after $\\texttt{updatePriority(A, 8)}$ is:</p><p data-end=\"6098\" data-start=\"6061\">$[(B,5), (D,6), (C,7), (A,8), (E,9)]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"122\" src=\"https://cdn.mathpix.com/snip/images/ZHP_DU-Dt7cq77Rq-Qr6KC6zvMH0F8f7fe-t5Tw3rQk.original.fullsize.png\" width=\"747\"/></p><p data-end=\"6098\" data-start=\"6061\"> </p><p data-end=\"6117\" data-start=\"6100\">Second operation:</p><p data-end=\"6126\" data-start=\"6119\">$\\texttt{pop()}$</p><p data-end=\"6191\" data-start=\"6128\">In a min-heap, $\\texttt{pop()}$ removes the root, so it removes $(B,5)$.</p><p data-end=\"6220\" data-start=\"6193\">Therefore, $\\texttt{pop()}$ returns: $\\boxed{B}$</p><p style=\"text-align:center\"><img alt=\"\" height=\"123\" src=\"https://cdn.mathpix.com/snip/images/FaOqXsR7Qq8-EL-uwfZb5VkIRHeDXRQW--_ICk-DEZw.original.fullsize.png\" width=\"779\"/></p><p data-end=\"6233\" data-start=\"6222\"> </p><p data-end=\"6281\" data-start=\"6235\">Now move the last element $(E,9)$ to the root:</p><p data-end=\"6313\" data-start=\"6283\">$[(E,9), (D,6), (C,7), (A,8)]$</p><p data-end=\"6334\" data-start=\"6315\">Apply heapify-down.</p><p data-end=\"6386\" data-start=\"6336\">Compare $(E,9)$ with children $(D,6)$ and $(C,7)$.</p><p data-end=\"6426\" data-start=\"6388\">The smaller child is $(D,6)$, so swap:</p><p data-end=\"6458\" data-start=\"6428\">$[(D,6), (E,9), (C,7), (A,8)]$</p><p data-end=\"6503\" data-start=\"6460\">Now compare $(E,9)$ with its child $(A,8)$.</p><p data-end=\"6525\" data-start=\"6505\">Since $9 &gt; 8$, swap:</p><p data-end=\"6557\" data-start=\"6527\">$[(D,6), (A,8), (C,7), (E,9)]$</p><p data-end=\"6575\" data-start=\"6559\">Third operation:</p><p data-end=\"6588\" data-start=\"6577\">$\\texttt{add(F, 2)}$</p><p data-end=\"6636\" data-start=\"6590\">Insert $(F,2)$ at the next available position:</p><p data-end=\"6675\" data-start=\"6638\">$[(D,6), (A,8), (C,7), (E,9), (F,2)]$</p><p data-end=\"6694\" data-start=\"6677\">Now bubble it up.</p><p data-end=\"6732\" data-start=\"6696\">Compare $(F,2)$ with parent $(A,8)$.</p><p data-end=\"6754\" data-start=\"6734\">Since $2 &lt; 8$, swap:</p><p data-end=\"6793\" data-start=\"6756\">$[(D,6), (F,2), (C,7), (E,9), (A,8)]$</p><p data-end=\"6835\" data-start=\"6795\">Now compare $(F,2)$ with parent $(D,6)$.</p><p data-end=\"6863\" data-start=\"6837\">Since $2 &lt; 6$, swap again:</p><p data-end=\"6902\" data-start=\"6865\">$[(F,2), (D,6), (C,7), (E,9), (A,8)]$</p><p data-end=\"6951\" data-start=\"6904\">So, $\\texttt{pop()}$ returns $B$, and the final heap is $: \\boxed{[(F,2), (D,6), (C,7), (E,9), (A,8)]}$</p><p style=\"text-align:center\"><img alt=\"\" height=\"145\" src=\"https://cdn.mathpix.com/snip/images/v-SrdH847Bs9tCdL2-dr826OXTNtXXAs0p3H15RX1cQ.original.fullsize.png\" width=\"968\"/></p><p data-end=\"7019\" data-start=\"7000\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540862/go-classes-dpp-gate-cs-da-data-structure-priority-update-in-min-heap\" target=\"_blank\">GATE Overflow #540862</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1989\" data-start=\"1924\">Start with the min-heap obtained after inserting:</p><p data-end=\"2025\" data-start=\"1991\">$$10, 12, 1, 14, 6, 5, 8, 15, 3, 9$$</p><p data-end=\"2045\" data-start=\"2027\">The heap array is:</p><p data-end=\"2083\" data-start=\"2047\">$$[1, 3, 5, 6, 9, 10, 8, 15, 14, 12]$$</p><p data-end=\"2130\" data-start=\"2085\">Now perform three $\\texttt{DeleteMin}$ operations.</p><p data-end=\"2161\" data-start=\"2132\">What is the final heap array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[6, 9, 8, 12, 15, 10, 14]$<br/></span>",
                "<span style=\"display: inline;\">$[6, 8, 9, 12, 15, 10, 14]$<br/></span>",
                "<span style=\"display: inline;\">$[8, 9, 10, 12, 15, 14, 6]$<br/></span>",
                "<span style=\"display: inline;\">$[6, 9, 10, 12, 15, 8, 14]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540872\"></a><div itemprop=\"text\"><p data-end=\"195\" data-start=\"175\">Initial min-heap is:</p><p data-end=\"233\" data-start=\"197\">$[1, 3, 5, 6, 9, 10, 8, 15, 14, 12]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"101\" src=\"https://cdn.mathpix.com/snip/images/Scp2i1M9YIKTx-Jfuo_3v-m4ibwjSoNHCmSN6Y9NmI4.original.fullsize.png\" width=\"245\"/></p><p data-end=\"256\" data-section-id=\"1hls6i7\" data-start=\"235\"><br/><strong>First</strong> $\\texttt{DeleteMin}$</p><p data-end=\"308\" data-start=\"258\">In a min-heap, the minimum element is at the root.</p><p data-end=\"364\" data-start=\"310\">Remove $1$ and move the last element $12$ to the root:</p><p data-end=\"399\" data-start=\"366\">$[12, 3, 5, 6, 9, 10, 8, 15, 14]$</p><p data-end=\"418\" data-start=\"401\">Now heapify-down.</p><p data-end=\"463\" data-start=\"420\">Compare $12$ with its children $3$ and $5$.</p><p data-end=\"499\" data-start=\"465\">The smaller child is $3$, so swap:</p><p data-end=\"534\" data-start=\"501\">$[3, 12, 5, 6, 9, 10, 8, 15, 14]$</p><p data-end=\"583\" data-start=\"536\">Now compare $12$ with its children $6$ and $9$.</p><p data-end=\"619\" data-start=\"585\">The smaller child is $6$, so swap:</p><p data-end=\"654\" data-start=\"621\">$[3, 6, 5, 12, 9, 10, 8, 15, 14]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"129\" src=\"https://cdn.mathpix.com/snip/images/QVVfRJtU-8HRnaHl4Fsaa9AQPxCFHqx7o-BCF1_p_5U.original.fullsize.png\" width=\"650\"/></p><p data-end=\"684\" data-start=\"656\">So, after first $\\texttt{DeleteMin}$:</p><p data-end=\"719\" data-start=\"686\">$[3, 6, 5, 12, 9, 10, 8, 15, 14]$</p><p data-end=\"743\" data-section-id=\"yv6jt1\" data-start=\"721\"><br/><strong>Second</strong> $\\texttt{DeleteMin}$</p><p data-end=\"800\" data-start=\"745\">Remove root $3$ and move last element $14$ to the root:</p><p data-end=\"832\" data-start=\"802\">$[14, 6, 5, 12, 9, 10, 8, 15]$</p><p data-end=\"873\" data-start=\"834\">Compare $14$ with children $6$ and $5$.</p><p data-end=\"909\" data-start=\"875\">The smaller child is $5$, so swap:</p><p data-end=\"941\" data-start=\"911\">$[5, 6, 14, 12, 9, 10, 8, 15]$</p><p data-end=\"987\" data-start=\"943\">Now compare $14$ with children $10$ and $8$.</p><p data-end=\"1023\" data-start=\"989\">The smaller child is $8$, so swap:</p><p data-end=\"1055\" data-start=\"1025\">$[5, 6, 8, 12, 9, 10, 14, 15]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"130\" src=\"https://cdn.mathpix.com/snip/images/ZeuojXqAvEtuV5qJfwSm6KZYt53sy5Orug1I4t10VNE.original.fullsize.png\" width=\"631\"/></p><p data-end=\"1086\" data-start=\"1057\">So, after second $\\texttt{DeleteMin}$:</p><p data-end=\"1118\" data-start=\"1088\">$[5, 6, 8, 12, 9, 10, 14, 15]$</p><p data-end=\"1141\" data-section-id=\"1fxwqpi\" data-start=\"1120\"><br/><strong>Third</strong> $\\texttt{DeleteMin}$</p><p data-end=\"1198\" data-start=\"1143\">Remove root $5$ and move last element $15$ to the root:</p><p data-end=\"1227\" data-start=\"1200\">$[15, 6, 8, 12, 9, 10, 14]$</p><p data-end=\"1268\" data-start=\"1229\">Compare $15$ with children $6$ and $8$.</p><p data-end=\"1304\" data-start=\"1270\">The smaller child is $6$, so swap:</p><p data-end=\"1333\" data-start=\"1306\">$[6, 15, 8, 12, 9, 10, 14]$</p><p data-end=\"1379\" data-start=\"1335\">Now compare $15$ with children $12$ and $9$.</p><p data-end=\"1415\" data-start=\"1381\">The smaller child is $9$, so swap:</p><p data-end=\"1444\" data-start=\"1417\">$[6, 9, 8, 12, 15, 10, 14]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"115\" src=\"https://cdn.mathpix.com/snip/images/R8wia5oWTL0Gcz3BdfvXcx2oT6V2vIoHSxzVEgoX6tk.original.fullsize.png\" width=\"583\"/></p><p data-end=\"1481\" data-start=\"1446\">Therefore, the final heap array is:</p><p data-end=\"1518\" data-start=\"1483\">$\\boxed{[6, 9, 8, 12, 15, 10, 14]}$</p><p data-end=\"1539\" data-start=\"1520\"><br/><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540859/go-classes-dpp-gate-cs-da-data-structure-heapify-down\" target=\"_blank\">GATE Overflow #540859</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"900\" data-start=\"797\">Insert the following values one by one into an initially empty <strong data-end=\"899\" data-start=\"876\">minimum binary heap</strong>:</p><p data-end=\"936\" data-start=\"902\">$$10, 12, 1, 14, 6, 5, 8, 15, 3, 9$$</p><p data-end=\"982\" data-start=\"938\">What is the final heap array in level-order?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[1, 3, 5, 6, 9, 10, 8, 15, 14, 12]$<br/></span>",
                "<span style=\"display: inline;\">$[1, 3, 5, 6, 9, 8, 10, 15, 14, 12]$<br/></span>",
                "<span style=\"display: inline;\">$[1, 5, 3, 6, 9, 10, 8, 15, 14, 12]$<br/></span>",
                "<span style=\"display: inline;\">$[1, 3, 5, 9, 6, 10, 8, 15, 14, 12]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556688\"></a><div itemprop=\"text\"><p>In a <strong>min-heap</strong>, the value stored at every parent node must be less than or equal to the values stored at its children.</p><p>When a new element is inserted into a min-heap, it is first placed at the next available position to maintain the <strong>complete binary tree structure</strong>.</p><p>If the inserted element is smaller than its parent, it is repeatedly swapped with its parent until the min-heap property is restored. This process is called <strong>heapify-up</strong> or <strong>percolate-up</strong>.</p><p>The given insertion sequence is:</p><p>$$10,\\ 12,\\ 1,\\ 14,\\ 6,\\ 5,\\ 8,\\ 15,\\ 3,\\ 9$$</p><p><strong>The heap after each insertion is:</strong></p><p>$$\\begin{array}{|c|l|} \\hline \\textbf{Inserted Element} &amp; \\textbf{Heap Array After Heapify-Up}\\\\ \\hline 10 &amp; \\mathrm{[10]}\\\\ \\hline 12 &amp; \\mathrm{[10,12]}\\\\ \\hline 1 &amp; \\mathrm{[1,12,10]}\\\\ \\hline 14 &amp; \\mathrm{[1,12,10,14]}\\\\ \\hline 6 &amp; \\mathrm{[1,6,10,14,12]}\\\\ \\hline 5 &amp; \\mathrm{[1,6,5,14,12,10]}\\\\ \\hline 8 &amp; \\mathrm{[1,6,5,14,12,10,8]}\\\\ \\hline 15 &amp; \\mathrm{[1,6,5,14,12,10,8,15]}\\\\ \\hline 3 &amp; \\mathrm{[1,3,5,6,12,10,8,15,14]}\\\\ \\hline 9 &amp; \\mathrm{[1,3,5,6,9,10,8,15,14,12]}\\\\ \\hline \\end{array}$$</p><p><strong>Insertion of $3$:</strong></p><p>When $3$ is inserted, it is first placed at the end of the heap.</p><p>Since $3&lt;14$, the two elements are swapped.</p><p>Now, since $3&lt;6$, another swap is performed.</p><p>The heap becomes:</p><p>$\\mathrm{[1,3,5,6,12,10,8,15,14]}$</p><p><strong>Insertion of $9$:</strong></p><p>When $9$ is inserted, its parent is $12$.</p><p>Since $9&lt;12$, they are swapped, and the min-heap property is restored.</p><p>The heap becomes $:\\mathrm{[1,3,5,6,9,10,8,15,14,12]}$<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"249\" src=\"https://cdn.mathpix.com/snip/images/0wUHFEWO-CwFSLgTCtvQdYYn3KWvf-7LCFViIhmJqqo.original.fullsize.png\" width=\"342\"/></p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540857/go-classes-dpp-gate-cs-da-data-structure-build-min-heap\" target=\"_blank\">GATE Overflow #540857</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"657\" data-start=\"597\">During heap sort, after completing an iteration and restoring the max-heap property, the array looks like this:</p><p data-end=\"692\" data-start=\"659\">$$J = [7, 3, 6, 2, 1, 4, 5, 8, 9]$$</p><p data-end=\"773\" data-start=\"694\">Assume heap sort is using a <strong data-end=\"734\" data-start=\"722\">max-heap</strong> to sort the array in increasing order.</p><p data-end=\"815\" data-start=\"775\">How many elements are still in the heap?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"540736\"></a><div itemprop=\"text\"><p data-end=\"919\" data-start=\"836\">In heap sort using a max-heap, the array is divided into two parts:</p><ol data-end=\"997\" data-start=\"921\"><li data-end=\"957\" data-section-id=\"1xn33qq\" data-start=\"921\">The left part is the active heap.<br/> </li><li data-end=\"997\" data-section-id=\"lup0ft\" data-start=\"958\">The right part is the sorted region.</li></ol><p data-end=\"1060\" data-start=\"999\">The largest elements move to the end of the array one by one.</p><p style=\"text-align:center\"><img alt=\"\" height=\"81\" src=\"https://cdn.mathpix.com/snip/images/6rqLD7iURwCe5OPk1Bjkc-Wa8K88JmgCpN557Z16EZs.original.fullsize.png\" width=\"450\"/></p><p data-end=\"1094\" data-start=\"1062\">Here, the last two elements are:</p><p data-end=\"1102\" data-start=\"1096\">$8, 9$</p><p data-end=\"1172\" data-start=\"1104\">They are already in sorted order and are no longer part of the heap.</p><p data-end=\"1208\" data-start=\"1174\">Now check the remaining left part:</p><p data-end=\"1233\" data-start=\"1210\">$[7, 3, 6, 2, 1, 4, 5]$</p><p data-end=\"1233\" data-start=\"1210\">This is a valid max-heap:</p><p style=\"text-align:center\"><img alt=\"\" height=\"163\" src=\"https://cdn.mathpix.com/snip/images/MsOuCkh4JQLd68igs_Ugo85dNBtx3HlxsWKmDE5af44.original.fullsize.png\" width=\"290\"/></p><ul data-end=\"1345\" data-start=\"1262\"><li data-end=\"1289\" data-section-id=\"6xpap2\" data-start=\"1262\">$7 \\geq 3$ and $7 \\geq 6$<br/> </li><li data-end=\"1317\" data-section-id=\"4pj3pc\" data-start=\"1290\">$3 \\geq 2$ and $3 \\geq 1$<br/> </li><li data-end=\"1345\" data-section-id=\"260sma\" data-start=\"1318\">$6 \\geq 4$ and $6 \\geq 5$<br/> </li></ul><p data-end=\"1384\" data-start=\"1347\">So, the active heap has $7$ elements.</p><p data-end=\"1411\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1386\"><strong>Answer:</strong> $\\boxed{7}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540700/go-classes-dpp-gate-cs-da-data-structure-heap-sort\" target=\"_blank\">GATE Overflow #540700</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4714\" data-start=\"4651\">A max-heap is stored using $0$-based indexing as:</p><p data-end=\"4745\" data-start=\"4716\">$$[60, 30, 45, 15, 5, 10, 20]$$</p><p data-end=\"4787\" data-start=\"4747\">During the first iteration of heap sort:</p><p data-end=\"4957\" data-start=\"4912\">What is the array after this first iteration?</p><p><strong>Given Details:</strong></p><ul><li>Swap the root with the last element.</li><li>Reduce the heap size by $1$.</li><li>Apply $\\texttt{downHeap}$ on the remaining heap region.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[60, 30, 45, 15, 5, 10, 20]$</span>",
                "<span style=\"display: inline;\">$[45, 30, 20, 15, 5, 10, 60]$</span>",
                "<span style=\"display: inline;\">$[45, 30, 10, 15, 5, 20, 60]$</span>",
                "<span style=\"display: inline;\">$[30, 20, 45, 15, 5, 10, 60]$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540711\"></a><div itemprop=\"text\"><p data-end=\"5146\" data-start=\"5113\">Initial max-heap:</p><p style=\"text-align:center\"><img alt=\"\" height=\"137\" src=\"https://cdn.mathpix.com/snip/images/zsW4shcApAx7YZ3zZUJ0mfPlIspeBrNrK5pKpgQ9jRM.original.fullsize.png\" width=\"306\"/></p><p data-end=\"5177\" data-start=\"5148\">Heap Array $:[60, 30, 45, 15, 5, 10, 20]$</p><p data-end=\"5222\" data-start=\"5179\">First, swap the root with the last element.</p><p data-end=\"5253\" data-start=\"5224\">Heap Array $:[20, 30, 45, 15, 5, 10, 60]$</p><p data-end=\"5321\" data-start=\"5255\">Now $60$ is in the sorted region, so heapify only the active heap:</p><p style=\"text-align:center\"><img alt=\"\" height=\"115\" src=\"https://cdn.mathpix.com/snip/images/wj67F3NxU3Vm6EdDqNgIDmEePVO3W6DfXTvm_dyDV60.original.fullsize.png\" width=\"478\"/></p><p data-end=\"5348\" data-start=\"5323\">Heap Array $:[20, 30, 45, 15, 5, 10]$</p><p data-end=\"5385\" data-start=\"5350\">Heapify-down starts from index $0$.</p><p data-end=\"5422\" data-start=\"5387\">Children of $20$ are $30$ and $45$.</p><p data-end=\"5482\" data-start=\"5424\">Since this is a max-heap, swap with the larger child $45$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"120\" src=\"https://cdn.mathpix.com/snip/images/NPDQa_S6mlJaQP2FO1-L_58l2GjfbI1hV-BK-_b4_4A.original.fullsize.png\" width=\"500\"/></p><p data-end=\"5513\" data-start=\"5484\">Heap Array $:[45, 30, 20, 15, 5, 10, 60]$</p><p data-end=\"5590\" data-start=\"5515\">Now $20$ has only one child $10$ in the active heap. Since $20 &gt; 10$, stop.</p><p style=\"text-align:center\"><img alt=\"\" height=\"103\" src=\"https://cdn.mathpix.com/snip/images/k0_g0h7kbkUsQwhs4bqSG37JtDDBdOFBT_RusVQVmA4.original.fullsize.png\" width=\"459\"/></p><p data-end=\"5590\" data-start=\"5515\"><strong>Final Heap Array</strong> $:[45, 30, 20, 15, 5, 10, 60]$<br/> </p><p data-end=\"5611\" data-start=\"5592\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540699/go-classes-dpp-gate-cs-da-data-structure-heap-sort\" target=\"_blank\">GATE Overflow #540699</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3491\" data-start=\"3428\">A min-heap is stored using $1$-based indexing as:</p><p data-end=\"3524\" data-start=\"3493\">$[2, 13, 7, 17, 14, 22, 8, 21]$</p><p data-end=\"3588\" data-start=\"3526\">After one $\\texttt{DeleteMin}$ operation, what is the final heap array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[7, 13, 8, 17, 14, 22, 21]$<br/></span>",
                "<span style=\"display: inline;\">$[7, 13, 21, 17, 14, 22, 8]$<br/></span>",
                "<span style=\"display: inline;\">$[8, 13, 7, 17, 14, 22, 21]$<br/></span>",
                "<span style=\"display: inline;\">$[13, 17, 7, 21, 14, 22, 8]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540709\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"1454\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1560460815771540297\" width=\"1054\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540697/go-classes-dpp-gate-cs-da-data-structure-deletemin-from-min-heap\" target=\"_blank\">GATE Overflow #540697</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2290\" data-start=\"2218\">The following max-heap is stored using $1$-based indexing:</p><p data-end=\"2334\" data-start=\"2292\">$[57, 53, 42, 48, 25, 34, 29, 18, 30, 25]$</p><p data-end=\"2397\" data-start=\"2336\">Insert $55$ into this max-heap. What is the final heap array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[57, 55, 42, 48, 53, 34, 29, 18, 30, 25, 25]$<br/></span>",
                "<span style=\"display: inline;\">$[57, 53, 55, 48, 25, 42, 29, 18, 30, 25, 34]$<br/></span>",
                "<span style=\"display: inline;\">$[55, 53, 42, 48, 57, 34, 29, 18, 30, 25, 25]$<br/></span>",
                "<span style=\"display: inline;\">$[57, 53, 42, 48, 55, 34, 29, 18, 30, 25, 25]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540707\"></a><div itemprop=\"text\"><p data-end=\"2680\" data-start=\"2621\"><strong>Initial Heap</strong></p><p data-end=\"2680\" data-start=\"2621\">Initial Heap Array : $[57, 53, 42, 48, 25, 34, 29, 18, 30, 25]$</p><p style=\"text-align:center\"><img alt=\"\" height=\"160\" src=\"https://cdn.mathpix.com/snip/images/KUCV-AtIFrhV9Fr2kx-OFRI7TuithOvQi4KNi5Z2Abs.original.fullsize.png\" width=\"396\"/></p><p data-end=\"2680\" data-start=\"2621\"><br/>Insert $55$ at the next available position.</p><p style=\"text-align:center\"><img alt=\"\" height=\"150\" src=\"https://cdn.mathpix.com/snip/images/sMcqWtngs_vk9bOe-O_dwXFD7Y8U9js-gc0W5Ms5ZpQ.original.fullsize.png\" width=\"383\"/></p><p data-end=\"2728\" data-start=\"2682\">Heap Array $:[57, 53, 42, 48, 25, 34, 29, 18, 30, 25, 55]$</p><p data-end=\"2757\" data-start=\"2730\">The parent of $55$ is $25$.</p><p data-end=\"2786\" data-start=\"2759\">Since $55 &gt; 25$, swap them.</p><p style=\"text-align:center\"><img alt=\"\" height=\"159\" src=\"https://cdn.mathpix.com/snip/images/GYPBYS_HcwFRu3U5aM64x4nUqe4ThqEeKhMEgWmRfJw.original.fullsize.png\" width=\"425\"/></p><p data-end=\"2834\" data-start=\"2788\">Heap Array $:[57, 53, 42, 48, 55, 34, 29, 18, 30, 25, 25]$</p><p data-end=\"2867\" data-start=\"2836\">Now the parent of $55$ is $53$.</p><p data-end=\"2897\" data-start=\"2869\">Since $55 &gt; 53$, swap again.</p><p style=\"text-align:center\"><img alt=\"\" height=\"153\" src=\"https://cdn.mathpix.com/snip/images/xHoHhDGqsbPk7YeGQJF9eD4xbfxNslHgEirEH2lstPc.original.fullsize.png\" width=\"400\"/></p><p data-end=\"2945\" data-start=\"2899\">Heap Array $:[57, 55, 42, 48, 53, 34, 29, 18, 30, 25, 25]$</p><p data-end=\"2978\" data-start=\"2947\">Now the parent of $55$ is $57$.</p><p data-end=\"3002\" data-start=\"2980\">Since $55 &lt; 57$, stop.</p><p data-end=\"3002\" data-start=\"2980\"><strong>Final Heap Array </strong>$:[57, 55, 42, 48, 53, 34, 29, 18, 30, 25, 25]$</p><p data-end=\"3023\" data-start=\"3004\"><br/><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540696/go-classes-dpp-gate-cs-da-data-structure-insert-in-max-heap\" target=\"_blank\">GATE Overflow #540696</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Data Structures (Heaps & Priority Queues - Part 2)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Heaps & Priority Queues - Part 2",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Heaps & Priority Queues (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"812\" data-start=\"757\">Consider the following binary min-heap:</p><p style=\"text-align:center\"><img alt=\"\" height=\"186\" src=\"https://cdn.mathpix.com/snip/images/ka4EYtUUbHw8KVqR_EMpVuj448Br9PqwwbyUKFPSF1s.original.fullsize.png\" width=\"241\"/></p><p data-end=\"928\" data-start=\"886\">Perform the following operations in order:</p><p data-end=\"1048\" data-start=\"974\">What is the final array representation of the heap using $1$-based indexing?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{DeleteMin}$</li><li>$\\text{Insert 8}$</li><li>$\\text{Insert 2}$</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/ka4EYtUUbHw8KVqR_EMpVuj448Br9PqwwbyUKFPSF1s.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$[2, 7, 6, 10, 11, 9, 8]$</span>",
                "<span style=\"display: inline;\">$[2, 6, 7, 10, 11, 9, 8]$</span>",
                "<span style=\"display: inline;\">$[2, 7, 8, 10, 11, 9, 6]$</span>",
                "<span style=\"display: inline;\">$[6, 7, 8, 10, 11, 9, 2]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540695\"></a><div itemprop=\"text\"><p data-end=\"1226\" data-start=\"1188\">Initial heap array is:</p><p data-end=\"1250\" data-start=\"1228\">$[1, 6, 9, 10, 7, 11]$</p><p data-end=\"1304\" data-start=\"1252\">After $\\text{DeleteMin}$, remove $1$ and move $11$ to root.</p><p data-end=\"1325\" data-start=\"1306\">$[11, 6, 9, 10, 7]$</p><p data-end=\"1413\" data-start=\"1327\">Now heapify-down. Compare $11$ with children $6$ and $9$. Swap with smaller child $6$.</p><p data-end=\"1434\" data-start=\"1415\">$[6, 11, 9, 10, 7]$</p><p data-end=\"1509\" data-start=\"1436\">Now compare $11$ with children $10$ and $7$. Swap with smaller child $7$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"139\" src=\"https://cdn.mathpix.com/snip/images/fvIu0kOWfz7TBFubBfpR7fp-4apqB7738vzfgWnUP-o.original.fullsize.png\" width=\"445\"/></p><p data-end=\"1530\" data-start=\"1511\">Heap array $: [6, 7, 9, 10, 11]$</p><p data-end=\"1547\" data-start=\"1532\"> </p><p data-end=\"1547\" data-start=\"1532\">Now insert $8$.</p><p data-end=\"1571\" data-start=\"1549\">$[6, 7, 9, 10, 11, 8]$</p><p data-end=\"1606\" data-start=\"1573\">Since $8 &lt; 9$, swap $8$ with $9$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"134\" src=\"https://cdn.mathpix.com/snip/images/8YTUGyvDaSsbw2_iw5maT3b5O1WHcw138CdR26-bHB4.original.fullsize.png\" width=\"422\"/></p><p data-end=\"1630\" data-start=\"1608\">Heap Array $: [6, 7, 8, 10, 11, 9]$</p><p data-end=\"1647\" data-start=\"1632\"> </p><p data-end=\"1647\" data-start=\"1632\">Now insert $2$.</p><p data-end=\"1674\" data-start=\"1649\">$[6, 7, 8, 10, 11, 9, 2]$</p><p data-end=\"1696\" data-start=\"1676\">Since $2 &lt; 8$, swap.</p><p data-end=\"1723\" data-start=\"1698\">$[6, 7, 2, 10, 11, 9, 8]$</p><p data-end=\"1751\" data-start=\"1725\">Since $2 &lt; 6$, swap again.</p><p style=\"text-align:center\"><img alt=\"\" height=\"123\" src=\"https://cdn.mathpix.com/snip/images/adpuL21UvXuF4xWdf5sdsUETJCMUNYge5cn18GG_IHc.original.fullsize.png\" width=\"422\"/></p><p data-end=\"1778\" data-start=\"1753\">Final Heap Array $: [2, 7, 6, 10, 11, 9, 8]$</p><p data-end=\"1799\" data-start=\"1780\"><br/>Final answer: <strong data-end=\"1799\" data-start=\"1794\">A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540692/go-classes-dpp-gate-cs-da-data-structure-binary-min-heaps\" target=\"_blank\">GATE Overflow #540692</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6015\" data-start=\"5920\">Which formula is the best approximation for the depth of a heap with $n$ nodes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\log_2 n$<br/></span>",
                "<span style=\"display: inline;\">The number of digits in $n$ in base $10$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt n$<br/></span>",
                "<span style=\"display: inline;\">$n^2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540599\"></a><div itemprop=\"text\"><p data-end=\"889\" data-start=\"720\">A heap is always a <strong data-end=\"763\" data-start=\"739\">complete binary tree</strong>. </p><p data-end=\"889\" data-start=\"720\">This means all levels are completely filled except possibly the last level, and the last level is filled from left to right.</p><p data-end=\"964\" data-start=\"891\">In a binary tree, the number of nodes roughly doubles at every new level.</p><p data-end=\"997\" data-start=\"966\">Level $0$ has at most $1$ node.</p><p data-end=\"1031\" data-start=\"999\">Level $1$ has at most $2$ nodes.</p><p data-end=\"1065\" data-start=\"1033\">Level $2$ has at most $4$ nodes.</p><p data-end=\"1099\" data-start=\"1067\">Level $3$ has at most $8$ nodes.</p><p data-end=\"1167\" data-start=\"1101\">So, up to depth $d$, the maximum number of nodes is approximately:</p><p data-end=\"1209\" data-start=\"1169\">$1 + 2 + 4 + \\cdots + 2^d = 2^{d+1} - 1$</p><p data-end=\"1243\" data-start=\"1211\">If the heap has $n$ nodes, then:</p><p data-end=\"1264\" data-start=\"1245\">$n \\approx 2^{d+1}$</p><p data-end=\"1297\" data-start=\"1266\">Taking logarithm on both sides:</p><p data-end=\"1319\" data-start=\"1299\">$d \\approx \\log_2 n$</p><p data-end=\"1390\" data-start=\"1321\">So, the depth of a heap with $n$ nodes is proportional to $\\log_2 n$.</p><p data-end=\"1429\" data-start=\"1392\">Therefore, the best approximation is:</p><p data-end=\"1449\" data-start=\"1431\">$\\boxed{\\log_2 n}$</p><p data-end=\"1476\" data-start=\"1451\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540598/go-classes-dpp-gate-cs-da-data-structure-heap-depth\" target=\"_blank\">GATE Overflow #540598</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4559\" data-start=\"4416\">A priority queue is implemented using a <strong data-end=\"4484\" data-start=\"4472\">max-heap</strong>. During reheapification downward, the out-of-place node has priority $42$.</p><p data-end=\"4592\" data-start=\"4561\">The surrounding priorities are:</p><p data-end=\"4721\" data-start=\"4676\">Which statement best describes the next step?</p><p><strong>Given Details:</strong></p><ul><li>Parent priority: $72$</li><li>Left child priority: $52$</li><li>Right child priority: $62$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The reheapification is done.</span>",
                "<span style=\"display: inline;\">The next step will interchange the two children of the out-of-place node.</span>",
                "<span style=\"display: inline;\">The next step will swap the out-of-place node with its parent.</span>",
                "<span style=\"display: inline;\">The next step will swap the out-of-place node with its left child.</span>",
                "<span style=\"display: inline;\">The next step will swap the out-of-place node with its right child.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540597\"></a><div itemprop=\"text\"><p data-end=\"139\" data-start=\"42\">In a <strong data-end=\"59\" data-start=\"47\">max-heap</strong>, every parent must have priority greater than or equal to both of its children.</p><p data-end=\"187\" data-start=\"141\">Here, the out-of-place node has priority $42$.</p><p data-end=\"206\" data-start=\"189\">Its children are:</p><p data-end=\"225\" data-start=\"208\">Left child $= 52$</p><p data-end=\"245\" data-start=\"227\">Right child $= 62$</p><p data-end=\"308\" data-start=\"247\">Since $42 &lt; 52$ and $42 &lt; 62$, the heap property is violated.</p><p data-end=\"483\" data-start=\"310\">During <strong>heapify-down</strong>, the out-of-place node is swapped with the child having the larger priority to restore the max-heap property.</p><p data-end=\"490\" data-start=\"485\">Here, $62 &gt; 52$.</p><p data-end=\"543\" data-start=\"503\">So, the larger child is the right child.</p><p data-end=\"644\" data-start=\"545\">Therefore, the node with priority $42$ should be swapped with the right child having priority $62$.</p><p>The parent priority $72$ does not require any swap because it is already greater than $42$.</p><p>Hence, the next step is to swap the out-of-place node with its right child.</p><p data-end=\"671\" data-start=\"646\"><strong>Answer : E</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540594/go-classes-dpp-gate-cs-da-data-structure-heapify-down\" target=\"_blank\">GATE Overflow #540594</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3465\" data-start=\"3354\">What feature of heaps allows them to be efficiently implemented using a partially filled array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Heaps are binary search trees<br/></span>",
                "<span style=\"display: inline;\">Heaps are complete binary trees<br/></span>",
                "<span style=\"display: inline;\">Heaps are full binary trees<br/></span>",
                "<span style=\"display: inline;\">Heaps contain only integer data</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540593\"></a><div itemprop=\"text\"><p data-end=\"3717\" data-start=\"3623\">A heap is stored efficiently in an array because it is a complete binary tree.</p><p data-end=\"3922\" data-start=\"3719\">In a complete binary tree, all levels are filled except possibly the last level, and the last level is filled from left to right. </p><p data-end=\"3922\" data-start=\"3719\">Because of this structure, there are no gaps in the array representation.</p><p data-end=\"4003\" data-start=\"3924\">So, parent and child positions can be calculated directly using index formulas.</p><p data-end=\"4024\" data-start=\"4005\"><strong>Answer: <strong data-end=\"4024\" data-start=\"4019\">B</strong></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540592/go-classes-dpp-gate-cs-da-data-structure-heap-%26-array\" target=\"_blank\">GATE Overflow #540592</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2509\" data-start=\"2337\">A binary heap is stored in an array using $\\textbf{1}$<strong data-end=\"2415\" data-start=\"2395\">-based indexing</strong>. If a node is stored at location $i$ and it has two children, where is its left child stored?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left\\lceil \\frac{i}{2} + 1 \\right\\rceil$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\lfloor \\frac{i}{2} + 1 \\right\\rfloor$<br/></span>",
                "<span style=\"display: inline;\">$2i$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540590\"></a><div itemprop=\"text\"><p data-end=\"2720\" data-start=\"2656\">For a binary heap stored using $1$-based indexing:</p><p data-end=\"2794\" data-start=\"2722\">Parent of node $i$ is stored at $\\left\\lfloor \\frac{i}{2} \\right\\rfloor$</p><p data-end=\"2836\" data-start=\"2796\">Left child of node $i$ is stored at $2i$</p><p data-end=\"2883\" data-start=\"2838\">Right child of node $i$ is stored at $2i + 1$</p><p data-end=\"2935\" data-start=\"2885\">Therefore, the left child is stored at index $2i$.</p><p data-end=\"2956\" data-start=\"2937\"><strong>Answer: <strong data-end=\"2956\" data-start=\"2951\">C</strong></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540588/go-classes-dpp-gate-cs-da-data-structure-binary-heap\" target=\"_blank\">GATE Overflow #540588</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"933\" data-start=\"877\">Which of the following trees are valid binary min-heaps?</p><p style=\"text-align:center\"><img alt=\"\" height=\"588\" src=\"https://cdn.mathpix.com/snip/images/D9USUHk4BsmHXTIMRD0BnbjTj2D4DxqDU5PRjjEkbtU.original.fullsize.png\" width=\"679\"/></p><p> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/D9USUHk4BsmHXTIMRD0BnbjTj2D4DxqDU5PRjjEkbtU.original.fullsize.png",
            "options": [],
            "answer": "540585",
            "solution": "<div class=\"solution-content\"><a name=\"540587\"></a><div itemprop=\"text\"><p data-end=\"776\" data-start=\"713\">A binary min-heap must satisfy both conditions:</p><ol data-end=\"875\" data-start=\"778\"><li data-end=\"815\" data-section-id=\"1upqtkg\" data-start=\"778\">It must be a complete binary tree.<br/> </li><li data-end=\"875\" data-section-id=\"1nxeqdf\" data-start=\"816\">Every parent must be less than or equal to its children.</li></ol><div> </div><div><ul><li data-end=\"1566\" data-start=\"1512\">A is not a min-heap because $25 &gt; 17$.<br/> </li><li data-end=\"1701\" data-start=\"1568\">B satisfies the order property, but it is not complete because a later-level node appears even though an earlier position is missing.<br/> </li><li data-end=\"1744\" data-start=\"1703\">C is complete and satisfies $42 \\leq 99$.<br/> </li><li data-end=\"1784\" data-start=\"1746\">D is not a min-heap because $32 &gt; 25$.<br/> </li><li data-end=\"1855\" data-start=\"1786\">E is complete and every parent is less than or equal to its children.<br/> </li><li data-end=\"1909\" data-start=\"1857\">F is not a min-heap because $58 &gt; 21$ and $58 &gt; 36$.<br/> </li></ul><p data-end=\"1958\" data-start=\"1911\">So, the valid binary min-heaps are <strong data-end=\"1957\" data-start=\"1946\">C and E</strong>.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540585/go-classes-dpp-gate-cs-da-data-structure-binary-min-heaps\" target=\"_blank\">GATE Overflow #540585</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Data Structures (Hashing & Hash Tables - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Hashing & Hash Tables - Part 1",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Hashing & Hash Tables (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5519\" data-start=\"5506\">For the keys:</p><p data-end=\"5549\" data-start=\"5521\">$47, 61, 36, 52, 56, 33, 92$</p><p data-end=\"5578\" data-start=\"5551\">consider the hash function:</p><p data-end=\"5616\" data-start=\"5580\">$h(k) = ((10k + 4) \\bmod c) \\bmod 7$</p><p data-end=\"5687\" data-start=\"5618\">Find the smallest positive integer $c$ such that no collisions occur.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "13",
            "solution": "<div class=\"solution-content\"><a name=\"541826\"></a><div itemprop=\"text\"><p data-end=\"2635\" data-start=\"2617\">We are given keys:</p><p data-end=\"2665\" data-start=\"2637\">$47, 61, 36, 52, 56, 33, 92$</p><p data-end=\"2684\" data-start=\"2667\">Hash function is:</p><p data-end=\"2722\" data-start=\"2686\">$h(k) = ((10k + 4) \\bmod c) \\bmod 7$</p><p data-end=\"2774\" data-start=\"2724\">There are $7$ keys and $7$ final hash table slots.</p><p data-end=\"2840\" data-start=\"2776\">So, to have no collision, all $7$ hash values must be different.</p><p data-end=\"2955\" data-start=\"2842\">For $c &lt; 7$, no collision is impossible because there are fewer than $7$ possible values after $(10k+4) \\bmod c$.</p><p data-end=\"2997\" data-start=\"2957\">Now check values of $c$ from $7$ onward.</p><p data-end=\"3028\" data-start=\"2999\">For $c = 7$, hash values are:</p><p data-end=\"3051\" data-start=\"3030\">$5, 5, 0, 6, 4, 5, 0$</p><p data-end=\"3074\" data-start=\"3053\">There are collisions.</p><p data-end=\"3105\" data-start=\"3076\">For $c = 8$, hash values are:</p><p data-end=\"3128\" data-start=\"3107\">$2, 6, 4, 4, 4, 6, 4$</p><p data-end=\"3151\" data-start=\"3130\">There are collisions.</p><p data-end=\"3182\" data-start=\"3153\">For $c = 9$, hash values are:</p><p data-end=\"3205\" data-start=\"3184\">$6, 2, 4, 2, 6, 1, 6$</p><p data-end=\"3228\" data-start=\"3207\">There are collisions.</p><p data-end=\"3262\" data-start=\"3230\">For $c = 10$, all values become: $4$</p><p data-end=\"3294\" data-start=\"3269\">So, there are collisions.</p><p data-end=\"3326\" data-start=\"3296\">For $c = 11$, hash values are:</p><p data-end=\"3365\" data-start=\"3328\">$1, 9 \\bmod 7, 1, 7 \\bmod 7, 3, 4, 0$</p><p data-end=\"3419\" data-start=\"3367\">This gives repeated values, so there are collisions.</p><p data-end=\"3451\" data-start=\"3421\">For $c = 12$, hash values are:</p><p data-end=\"3474\" data-start=\"3453\">$6, 2, 4, 1, 0, 3, 0$</p><p data-end=\"3504\" data-start=\"3476\">There is a collision at $0$.</p><p data-end=\"3523\" data-start=\"3506\">Now for $c = 13$:</p><p data-end=\"3577\" data-start=\"3525\">$47: (10 \\times 47 + 4) \\bmod 13 = 474 \\bmod 13 = 6$</p><p data-end=\"3601\" data-start=\"3579\">$61: 614 \\bmod 13 = 3$</p><p data-end=\"3625\" data-start=\"3603\">$36: 364 \\bmod 13 = 0$</p><p data-end=\"3649\" data-start=\"3627\">$52: 524 \\bmod 13 = 4$</p><p data-end=\"3673\" data-start=\"3651\">$56: 564 \\bmod 13 = 5$</p><p data-end=\"3718\" data-start=\"3675\">$33: 334 \\bmod 13 = 9$, and $9 \\bmod 7 = 2$</p><p data-end=\"3742\" data-start=\"3720\">$92: 924 \\bmod 13 = 1$</p><p data-end=\"3769\" data-start=\"3744\">So final hash values are:</p><p data-end=\"3792\" data-start=\"3771\">$6, 3, 0, 4, 5, 2, 1$</p><p data-end=\"3811\" data-start=\"3794\">All are distinct.</p><p data-end=\"3872\" data-start=\"3813\">Therefore, the smallest value of $c$ with no collisions is: $\\boxed{13}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541821/go-classes-dpp-gate-cs-da-data-structure-collision-free-hash-parameter\" target=\"_blank\">GATE Overflow #541821</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements are true?</p><p>$\\text{S1}$. The worst-case complexity of checking whether an object is present in a hash set is $O(1)$.</p><p>$\\text{S2}$. The worst-case complexity of finding a key in a hash table with $n$ entries is $O(\\lambda)$, where $\\lambda$ is the load factor.</p><p>$\\text{S3}$. For a hash table of size $5$, the hash function $h(x) = x \\bmod 5$ maps ${20, 6, 18, 14}$ without collisions.</p><p>$\\text{S4}$. For chaining, the load factor $\\lambda$ is the fraction of buckets that are non-empty.</p><p>$\\text{S5}$. Hash tables with linear probing only work for $\\lambda \\leq 1$.</p><p>$\\text{S6}$. Hash tables with chaining only work for $\\lambda \\leq 1$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$ and $\\text{S2}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S3}$ and $\\text{S5}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S3}$, $\\text{S4}$ and $\\text{S5}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S5}$ and $\\text{S6}$ only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541823\"></a><div itemprop=\"text\">$\\text{S1}$ is false.<br/> The worst-case complexity of searching in a hash set is not always $O(1)$. In the worst case, many keys may collide, so searching can take $O(n)$.<br/> <br/> $\\text{S2}$ is false.<br/> Worst-case search in a hash table with $n$ entries is not simply $O(\\lambda)$. In the worst case, many or all keys can collide, so it can become $O(n)$.<br/> <br/> $\\text{S3}$ is true.<br/> Using $h(x) = x \\bmod 5$:<br/> $20 \\bmod 5 = 0$<br/> $6 \\bmod 5 = 1$<br/> $18 \\bmod 5 = 3$<br/> $14 \\bmod 5 = 4$<br/> All hash values are different, so there is no collision.<br/> <br/> $\\text{S4}$ is false.<br/> For chaining, load factor is $: \\lambda = \\frac{n}{m}$<br/> where $n$ is the number of keys and $m$ is the number of buckets. It is not the fraction of non-empty buckets.<br/> <br/> $\\text{S5}$ is true.<br/> In linear probing, all keys are stored inside the hash table itself. So the number of keys cannot exceed the number of slots. Therefore, $\\lambda \\leq 1$.<br/> <br/> $\\text{S6}$ is false.<br/> In chaining, each bucket can store a linked list of many keys. So chaining can work even when $\\lambda &gt; 1$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/541818/go-classes-dpp-gate-cs-da-data-structure-hash-table\" target=\"_blank\">GATE Overflow #541818</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1812\" data-start=\"1797\">Insert the keys</p><p data-end=\"1842\" data-start=\"1814\">$47, 61, 36, 52, 56, 33, 92$</p><p data-end=\"1889\" data-start=\"1844\">in order into a hash table of size $7$ using:</p><p data-end=\"1917\" data-start=\"1891\">$h(k) = (10k + 4) \\bmod 7$</p><p data-end=\"1996\" data-start=\"1919\">Each slot stores a linked list, and later insertions are appended at the end.</p><p data-end=\"2028\" data-start=\"1998\">Which is the final hash table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0: 36 \\rightarrow 92$<br/>$4: 56$<br/>$5: 47 \\rightarrow 61 \\rightarrow 33$<br/>$6: 52$<br/></span>",
                "<span style=\"display: inline;\">$0: 92 \\rightarrow 36$<br/>$4: 56$<br/>$5: 33 \\rightarrow 61 \\rightarrow 47$<br/>$6: 52$<br/></span>",
                "<span style=\"display: inline;\">$0: 36$<br/>$1: 92$<br/>$4: 56$<br/>$5: 47 \\rightarrow 61 \\rightarrow 33$<br/>$6: 52$<br/></span>",
                "<span style=\"display: inline;\">$0: 36 \\rightarrow 92$<br/>$3: 56$<br/>$5: 47 \\rightarrow 61$<br/>$6: 52 \\rightarrow 33$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541701\"></a><div itemprop=\"text\"><p data-end=\"2014\" data-start=\"1997\">Hash function is:</p><p data-end=\"2042\" data-start=\"2016\">$h(k) = (10k + 4) \\bmod 7$</p><p data-end=\"2077\" data-start=\"2044\">Calculate hash values one by one.</p><p data-end=\"2088\" data-start=\"2079\">For $47$:</p><p data-end=\"2144\" data-start=\"2090\">$h(47) = (10 \\times 47 + 4) \\bmod 7 = 474 \\bmod 7 = 5$</p><p data-end=\"2155\" data-start=\"2146\">For $61$:</p><p data-end=\"2182\" data-start=\"2157\">$h(61) = 614 \\bmod 7 = 5$</p><p data-end=\"2193\" data-start=\"2184\">For $36$:</p><p data-end=\"2220\" data-start=\"2195\">$h(36) = 364 \\bmod 7 = 0$</p><p data-end=\"2231\" data-start=\"2222\">For $52$:</p><p data-end=\"2258\" data-start=\"2233\">$h(52) = 524 \\bmod 7 = 6$</p><p data-end=\"2269\" data-start=\"2260\">For $56$:</p><p data-end=\"2296\" data-start=\"2271\">$h(56) = 564 \\bmod 7 = 4$</p><p data-end=\"2307\" data-start=\"2298\">For $33$:</p><p data-end=\"2334\" data-start=\"2309\">$h(33) = 334 \\bmod 7 = 5$</p><p data-end=\"2345\" data-start=\"2336\">For $92$:</p><p data-end=\"2372\" data-start=\"2347\">$h(92) = 924 \\bmod 7 = 0$</p><p data-end=\"2458\" data-start=\"2374\">Since chaining is used and later insertions are appended at the end, final table is:</p><p data-end=\"2482\" data-start=\"2460\">$0: 36 \\rightarrow 92$</p><p data-end=\"2491\" data-start=\"2484\">$4: 56$</p><p data-end=\"2530\" data-start=\"2493\">$5: 47 \\rightarrow 61 \\rightarrow 33$</p><p data-end=\"2539\" data-start=\"2532\">$6: 52$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541693/go-classes-dpp-gate-cs-da-data-structure-hashing-with-chaining\" target=\"_blank\">GATE Overflow #541693</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"643\" data-start=\"531\">A key consists of three uppercase English letters. The hash value $h$ of a key is calculated as:</p><p data-end=\"719\" data-start=\"645\">$h = (\\text{sum of alphabetical positions of the three letters}) \\bmod 27$</p><p data-end=\"754\" data-start=\"721\">Here, alphabetical positions are:</p><p data-end=\"793\" data-start=\"756\">$\\mathrm{A = 1, B = 2, C = 3, \\ldots, Z = 26}$</p><p data-end=\"863\" data-start=\"795\">Which of the following keys produces the same hash value as $\\text{\"SEP\"}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{APR}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{​​​​​​​FEB}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{​​​​​​​JAN}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{NOV}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540473\"></a><div itemprop=\"text\"><p data-end=\"981\" data-start=\"923\">First calculate the hash value of $\"\\text{SEP}\"$.</p><p data-end=\"1006\" data-start=\"983\">$\\mathrm{S = 19, E = 5, P = 16}$</p><p data-end=\"1011\" data-start=\"1008\">So,</p><p data-end=\"1053\" data-start=\"1013\">$h(\\text{SEP}) = (19 + 5 + 16) \\bmod 27$</p><p data-end=\"1075\" data-start=\"1055\">$= 40 \\bmod 27 = 13$</p><p data-end=\"1121\" data-start=\"1077\"><br/>Now lets calculate the hash value of each option.</p><p data-end=\"1133\" data-start=\"1123\">For $\\text{APR}:$</p><p data-end=\"1158\" data-start=\"1135\">$\\mathrm{A = 1, P = 16, R = 18}$</p><p data-end=\"1218\" data-start=\"1160\">$h(\\text{APR}) = (1 + 16 + 18) \\bmod 27 = 35 \\bmod 27 = 8$</p><p data-end=\"1230\" data-start=\"1220\"><br/>For $\\text{FEB}:$</p><p data-end=\"1253\" data-start=\"1232\">$\\mathrm{F = 6, E = 5, B = 2}$</p><p data-end=\"1312\" data-start=\"1255\">$h(\\text{FEB}) = (6 + 5 + 2) \\bmod 27 = 13 \\bmod 27 = 13$</p><p data-end=\"1324\" data-start=\"1314\"><br/>For $\\text{JAN}:$</p><p data-end=\"1349\" data-start=\"1326\">$\\mathrm{J = 10, A = 1, N = 14}$</p><p data-end=\"1396\" data-start=\"1351\">$h(\\text{JAN}) = (10 + 1 + 14) \\bmod 27 = 25$</p><p data-end=\"1408\" data-start=\"1398\"><br/>For $\\text{NOV}:$</p><p data-end=\"1434\" data-start=\"1410\">$\\mathrm{N = 14, O = 15, V = 22}$</p><p data-end=\"1496\" data-start=\"1436\">$h(\\text{NOV}) = (14 + 15 + 22) \\bmod 27 = 51 \\bmod 27 = 24$</p><p data-end=\"1544\" data-start=\"1498\"><br/>Only $\\text{FEB}$ has the same hash value as $\\text{SEP}$.</p><p data-end=\"1566\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1546\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540472/go-classes-dpp-gate-cs-da-data-structure-hash-collision\" target=\"_blank\">GATE Overflow #540472</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"832\" data-start=\"721\">A hash table has size $10$. Each key is a lowercase English alphabet character from $a$ to $z$.</p><p data-end=\"913\" data-start=\"834\">The hash value of a key is defined as the last digit of its decimal ASCII code.</p><p data-end=\"957\" data-start=\"915\">Which pair of keys will cause a collision?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a$ and $i$<br/></span>",
                "<span style=\"display: inline;\">$b$ and $r$<br/></span>",
                "<span style=\"display: inline;\">$c$ and $l$<br/></span>",
                "<span style=\"display: inline;\">$d$ and $x$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"540486\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"1030\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1397828250608593739\" width=\"777\"/><br/>Answer: D</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540469/go-classes-dpp-gate-cs-da-data-structure-hash-collision\" target=\"_blank\">GATE Overflow #540469</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3925\" data-start=\"3834\">Which of the following factors affect the average search length in hashing?</p><p data-end=\"4074\" data-start=\"3998\"> </p><p><strong>Given Details:</strong></p><ul><li>Load factor</li><li>Hash function</li><li>Collision resolution method</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only I and II</span>",
                "<span style=\"display: inline;\">Only I and III</span>",
                "<span style=\"display: inline;\">Only II and III</span>",
                "<span style=\"display: inline;\">I, II and III</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"540496\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"1019\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=164681539532903592\" width=\"777\"/><br/>Answer: D</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540467/go-classes-dpp-gate-cs-da-data-structure-search-length-in-hashing\" target=\"_blank\">GATE Overflow #540467</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2500\" data-start=\"2415\">A hash table of length $11$ is initially empty. The hash function is:</p><p data-end=\"2524\" data-start=\"2502\">$H(key) = key \\bmod 7$</p><p data-end=\"2571\" data-start=\"2526\">Collisions are resolved using linear probing.</p><p data-end=\"2614\" data-start=\"2573\">The following keys are inserted in order:</p><p data-end=\"2647\" data-start=\"2616\">$87, ~40, ~30, ~6, ~11, ~22, ~98, ~20$</p><p data-end=\"2710\" data-start=\"2649\">What is the average search length for an unsuccessful search?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5.25$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$6.29$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540466\"></a><div itemprop=\"text\"><p data-end=\"2824\" data-start=\"2768\">After insertion, the hash table becomes:</p><p data-end=\"2841\" data-start=\"2826\">Index $0$: $98$</p><p data-end=\"2858\" data-start=\"2843\">Index $1$: $22$</p><p data-end=\"2875\" data-start=\"2860\">Index $2$: $30$</p><p data-end=\"2892\" data-start=\"2877\">Index $3$: $87$</p><p data-end=\"2909\" data-start=\"2894\">Index $4$: $11$</p><p data-end=\"2926\" data-start=\"2911\">Index $5$: $40$</p><p data-end=\"2942\" data-start=\"2928\">Index $6$: $6$</p><p data-end=\"2959\" data-start=\"2944\">Index $7$: $20$</p><p data-end=\"2984\" data-start=\"2961\">Index $8, 9, 10$: empty</p><p data-end=\"2984\" data-start=\"2961\"><br/>Hash Table :</p><p data-end=\"2984\" data-start=\"2961\">$\\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Index} &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 &amp; 7 &amp; 8 &amp; 9 &amp; 10 \\\\<br/>\\hline<br/>\\text{Key} &amp; 98 &amp; 22 &amp; 30 &amp; 87 &amp; 11 &amp; 40 &amp; 6 &amp; 20 &amp; \\text{-} &amp; \\text{-} &amp; \\text{-}\\\\<br/>\\hline<br/>\\end{array}$</p><p data-end=\"3100\" data-start=\"2986\"><br/>Since the hash function is $key \\bmod 7$, an unsuccessful search can start only from initial addresses $0$ to $6$.</p><p data-end=\"3153\" data-start=\"3102\">Count probes until the first empty slot is reached:</p><p data-end=\"3210\" data-start=\"3155\">For start $0$: check $0,1,2,3,4,5,6,7,8$, so $9$ probes</p><p data-end=\"3237\" data-start=\"3212\">For start $1$: $8$ probes</p><p data-end=\"3264\" data-start=\"3239\">For start $2$: $7$ probes</p><p data-end=\"3291\" data-start=\"3266\">For start $3$: $6$ probes</p><p data-end=\"3318\" data-start=\"3293\">For start $4$: $5$ probes</p><p data-end=\"3345\" data-start=\"3320\">For start $5$: $4$ probes</p><p data-end=\"3372\" data-start=\"3347\">For start $6$: $3$ probes</p><p data-end=\"3372\" data-start=\"3347\"><br/>Probe count table : </p><p data-end=\"3372\" data-start=\"3347\">$\\begin{array}{|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Start Index} &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/>\\hline<br/>\\text{Probes till empty} &amp; 9 &amp; 8 &amp; 7 &amp; 6 &amp; 5 &amp; 4 &amp; 3 \\\\<br/>\\hline<br/>\\end{array}$</p><p data-end=\"3419\" data-start=\"3374\"><br/>So the average unsuccessful search length is:</p><p data-end=\"3451\" data-start=\"3421\">$(9+8+7+6+5+4+3)/7 = 42/7 = 6$</p><p data-end=\"3472\" data-start=\"3453\"><br/><strong>Answer: C </strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540464/go-classes-dpp-gate-cs-da-data-structure-linear-probing\" target=\"_blank\">GATE Overflow #540464</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"953\" data-start=\"868\">A hash table of length $11$ is initially empty. The hash function is:</p><p data-end=\"989\" data-start=\"955\">$H(key) = (key \\times 3) \\bmod 11$</p><p data-end=\"1039\" data-start=\"991\">Collisions are resolved using quadratic probing:</p><p data-end=\"1069\" data-start=\"1041\">$H_k = (H_0 + k^2) \\bmod 11$</p><p data-end=\"1137\" data-start=\"1071\">where $H_0$ is the initial hash address and $k = 1, 2, 3, \\ldots$</p><p data-end=\"1180\" data-start=\"1139\">The following keys are inserted in order:</p><p data-end=\"1207\" data-start=\"1182\">$20, ~3, ~11, ~18, ~9, ~14, ~7$</p><p data-end=\"1296\" data-start=\"1209\">Now we search for key $8$. At which hash table index is the search confirmed as failed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$7$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"540462\"></a><div itemprop=\"text\"><p data-end=\"1430\" data-start=\"1348\">First, after inserting the given keys, the occupied positions are:</p><p data-end=\"1450\" data-start=\"1432\">$20 \\rightarrow 5$</p><p data-end=\"1469\" data-start=\"1452\">$3 \\rightarrow 9$</p><p data-end=\"1489\" data-start=\"1471\">$11 \\rightarrow 0$</p><p data-end=\"1510\" data-start=\"1491\">$18 \\rightarrow 10$</p><p data-end=\"1529\" data-start=\"1512\">$9 \\rightarrow 6$</p><p data-end=\"1549\" data-start=\"1531\">$14 \\rightarrow 2$</p><p data-end=\"1568\" data-start=\"1551\">$7 \\rightarrow 3$</p><p data-end=\"1568\" data-start=\"1551\"><br/>Hash Table :</p><p data-end=\"1568\" data-start=\"1551\">$\\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Index} &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 &amp; 7 &amp; 8 &amp; 9 &amp; 10 \\\\<br/>\\hline<br/>\\text{Key} &amp; 11 &amp; \\text{-} &amp; 14 &amp; 7 &amp; \\text{-} &amp; 20 &amp; 9 &amp; \\text{-} &amp; \\text{-} &amp; 3 &amp; 18\\\\<br/>\\hline<br/>\\end{array}$</p><p data-end=\"1589\" data-start=\"1570\"> </p><p data-end=\"1589\" data-start=\"1570\">Now search for $8$.</p><p data-end=\"1607\" data-start=\"1591\">Initial address:</p><p data-end=\"1657\" data-start=\"1609\">$H(8) = (8 \\times 3) \\bmod 11 = 24 \\bmod 11 = 2$</p><p data-end=\"1689\" data-start=\"1659\">Index $2$ is occupied by $14$.</p><p data-end=\"1715\" data-start=\"1691\">Using quadratic probing:</p><p data-end=\"1764\" data-start=\"1717\">$H_1 = (2 + 1^2) \\bmod 11 = 3$, occupied by $7$</p><p data-end=\"1813\" data-start=\"1766\">$H_2 = (2 + 2^2) \\bmod 11 = 6$, occupied by $9$</p><p data-end=\"1863\" data-start=\"1815\">$H_3 = (2 + 3^2) \\bmod 11 = 0$, occupied by $11$</p><p data-end=\"1909\" data-start=\"1865\">$H_4 = (2 + 4^2) \\bmod 11 = 18 \\bmod 11 = 7$</p><p data-end=\"1909\" data-start=\"1865\">Probe sequence: $2 \\rightarrow 3 \\rightarrow 6 \\rightarrow 0 \\rightarrow 7$</p><p data-end=\"1960\" data-start=\"1911\">Index $7$ is empty, so search fails at index $7$.</p><p data-end=\"1981\" data-start=\"1962\"><br/><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540459/go-classes-dpp-gate-cs-da-data-structure-quadratic-probing\" target=\"_blank\">GATE Overflow #540459</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2409\" data-start=\"2306\">The following hexadecimal data items are inserted into a hash table in the given order:</p><p data-end=\"2447\" data-start=\"2411\">$\\text{1A, ~35, ~3B, ~54, ~8E, ~A1, ~AF, ~B2, ~B3}$</p><p data-end=\"2482\" data-start=\"2449\">The hash value is computed using:</p><p data-end=\"2508\" data-start=\"2484\">$f(data) = data \\bmod 8$</p><p data-end=\"2636\" data-start=\"2510\">Which data item causes the <strong data-end=\"2556\" data-start=\"2537\">first collision</strong>, meaning its hash value is equal to the hash value of an item already inserted?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{54}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{A1}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{B2}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{B3}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540347\"></a><div itemprop=\"text\"><p data-end=\"2773\" data-start=\"2692\">Convert the hexadecimal values to decimal and compute modulo $8$.</p><p data-end=\"2814\" data-start=\"2775\">$\\text{1A}$ in hexadecimal is $26$ in decimal.</p><p data-end=\"2832\" data-start=\"2816\">$26 \\bmod 8 = 2$</p><p data-end=\"2873\" data-start=\"2834\">$35$ in hexadecimal is $53$ in decimal.</p><p data-end=\"2891\" data-start=\"2875\">$53 \\bmod 8 = 5$</p><p data-end=\"2932\" data-start=\"2893\">$\\text{3B}$ in hexadecimal is $59$ in decimal.</p><p data-end=\"2950\" data-start=\"2934\">$59 \\bmod 8 = 3$</p><p data-end=\"2991\" data-start=\"2952\">$54$ in hexadecimal is $84$ in decimal.</p><p data-end=\"3009\" data-start=\"2993\">$84 \\bmod 8 = 4$</p><p data-end=\"3051\" data-start=\"3011\">$\\text{8E}$ in hexadecimal is $142$ in decimal.</p><p data-end=\"3070\" data-start=\"3053\">$142 \\bmod 8 = 6$</p><p data-end=\"3112\" data-start=\"3072\">$\\text{A1}$ in hexadecimal is $161$ in decimal.</p><p data-end=\"3131\" data-start=\"3114\">$161 \\bmod 8 = 1$</p><p data-end=\"3173\" data-start=\"3133\">$\\text{AF}$ in hexadecimal is $175$ in decimal.</p><p data-end=\"3192\" data-start=\"3175\">$175 \\bmod 8 = 7$</p><p data-end=\"3234\" data-start=\"3194\">$\\text{B2}$ in hexadecimal is $178$ in decimal.</p><p data-end=\"3253\" data-start=\"3236\">$178 \\bmod 8 = 2$</p><p data-end=\"3340\" data-start=\"3255\">Hash value $2$ was already obtained for $\\text{1A}$. So, the first collision occurs at $\\text{B2}$.</p><p data-end=\"3366\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3342\"><br/><strong data-end=\"3365\" data-start=\"3360\">Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540346/go-classes-dpp-gate-cs-da-data-structure-hash-collision\" target=\"_blank\">GATE Overflow #540346</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"655\" data-start=\"562\">A hash table $\\texttt{hashArray}$ has $5$ positions, indexed from $1$ to $5$. Initially,</p><p data-end=\"691\" data-start=\"657\">$\\texttt{hashArray = \\{-1, -1, -1, -1, -1\\}}$</p><p data-end=\"741\" data-start=\"693\">The value $\\texttt{-1}$ means that the position is empty.</p><p data-end=\"787\" data-start=\"743\">For a value $x$, the first hash function is:</p><p data-end=\"815\" data-start=\"789\">$h_1(x) = (x \\bmod 5) + 1$</p><p data-end=\"905\" data-start=\"817\">If the position given by $h_1(x)$ is already occupied, the second hash function is used:</p><p data-end=\"939\" data-start=\"907\">$h_2(x) = ((x + 3) \\bmod 5) + 1$</p><p data-end=\"989\" data-start=\"941\">The following operations are performed in order:</p><p data-end=\"1017\" data-start=\"991\">$\\texttt{add(3), add(18), add(11)}$</p><p data-end=\"1100\" data-start=\"1019\">What will be the final contents of $\\texttt{hashArray}$ from position $1$ to position $5$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{\\{-1, 3, -1, 18, 11\\}}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\\{-1, 11, -1, 3, -1\\}}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\\{-1, 11, -1, 18, -1\\}}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\\{-1, 18, -1, 3, 11\\}}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"540344\"></a><div itemprop=\"text\"><p data-end=\"1305\" data-start=\"1254\">Initially, all positions are empty.</p><p data-end=\"1320\" data-start=\"1307\">For $\\texttt{add(3)}:$</p><p data-end=\"1352\" data-start=\"1322\">$h_1(3) = (3 \\bmod 5) + 1 = 4$</p><p data-end=\"1388\" data-start=\"1354\">So, $3$ is stored at position $4$.</p><p data-end=\"1404\" data-start=\"1390\">For $\\texttt{add(18)}:$</p><p data-end=\"1438\" data-start=\"1406\">$h_1(18) = (18 \\bmod 5) + 1 = 4$</p><p data-end=\"1506\" data-start=\"1440\">Position $4$ is already occupied, so use the second hash function:</p><p data-end=\"1565\" data-start=\"1508\">$h_2(18) = ((18 + 3) \\bmod 5) + 1 = (21 \\bmod 5) + 1 = 2$</p><p data-end=\"1602\" data-start=\"1567\">So, $18$ is stored at position $2$.</p><p data-end=\"1618\" data-start=\"1604\">For $\\texttt{add(11)}:$</p><p data-end=\"1652\" data-start=\"1620\">$h_1(11) = (11 \\bmod 5) + 1 = 2$</p><p data-end=\"1720\" data-start=\"1654\">Position $2$ is already occupied, so use the second hash function:</p><p data-end=\"1779\" data-start=\"1722\">$h_2(11) = ((11 + 3) \\bmod 5) + 1 = (14 \\bmod 5) + 1 = 5$</p><p data-end=\"1816\" data-start=\"1781\">So, $11$ is stored at position $5$.</p><p data-end=\"1838\" data-start=\"1818\"><br/>Final hash table is:</p><p data-end=\"1861\" data-start=\"1840\">$\\begin{array}{|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Position} &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 \\\\<br/>\\hline<br/>\\text{Value} &amp; -1 &amp; 18 &amp; -1 &amp; 3 &amp; 11 \\\\<br/>\\hline<br/>\\end{array}$</p><p data-end=\"1887\" data-start=\"1863\"><br/><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540343/go-classes-dpp-gate-cs-da-data-structure-hash-collision-handling\" target=\"_blank\">GATE Overflow #540343</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Data Structures (Hashing & Hash Tables - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Hashing & Hash Tables - Part 2",
    "subject": "ds",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 9,
    "topicsCovered": "Hashing & Hash Tables (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3373\" data-start=\"3262\">Which of the following are open addressing approaches for resolving collisions in a hash table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Linear probing<br/></span>",
                "<span style=\"display: inline;\">Quadratic probing<br/></span>",
                "<span style=\"display: inline;\">Exponential hashing<br/></span>",
                "<span style=\"display: inline;\">Separate chaining</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540342\"></a><div itemprop=\"text\"><p>In open addressing, all keys are stored inside the hash table itself. </p><p>If a collision occurs, the algorithm searches for another empty slot in the same table by following a probe sequence.</p><p>Linear probing and quadratic probing are open addressing methods.</p><p>In linear probing, if the hash position is occupied, we check the next slot, then the next slot, and so on.</p><p>In quadratic probing, if the hash position is occupied, we jump by quadratic offsets such as $1^2, 2^2, 3^2, \\ldots$.</p><p>Separate chaining is not open addressing because collided keys are stored in a linked list or chain outside the main table slot.</p><p>Exponential hashing is not a standard open addressing collision resolution method in this context.</p><p><em><strong>Note:</strong> If double hashing were given as an option, it would also be an open addressing method.</em></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540341/go-classes-dpp-gate-cs-da-data-structure-collision-resolution\" target=\"_blank\">GATE Overflow #540341</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2055\" data-start=\"1944\">A hash table uses open addressing with linear probing. Suppose a key is deleted from the table.</p><p data-end=\"2123\" data-start=\"2057\">Why should we not simply replace the deleted key’s slot by $\\text{NULL}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Because $\\text{NULL}$ makes the table full<br/></span>",
                "<span style=\"display: inline;\">Because future searches may stop too early and fail to find keys placed later in the probe sequence<br/></span>",
                "<span style=\"display: inline;\">Because insertion becomes impossible after using $\\text{NULL}$<br/></span>",
                "<span style=\"display: inline;\">Because linear probing does not allow deletion at all</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540340\"></a><div itemprop=\"text\"><p data-end=\"231\" data-start=\"51\"><a href=\"https://chalmersgu-data-structure-courses.github.io/OpenDSA/Published/ChalmersGU-DSABook/html/HashDel.html\" rel=\"nofollow\" target=\"_blank\">https://chalmersgu-data-structure-courses.github.io/OpenDSA/Published/ChalmersGU-DSABook/html/HashDel.html</a></p><p data-end=\"231\" data-start=\"51\">In open addressing, all keys are stored inside the hash table itself. </p><p data-end=\"231\" data-start=\"51\">If a collision happens, the key is placed at some later position in its probe sequence.</p><p data-end=\"282\" data-start=\"233\">During search, we follow the same probe sequence:</p><p data-end=\"316\" data-start=\"284\">$h(k,0), ~h(k,1), ~h(k,2), ~\\ldots$</p><p data-end=\"352\" data-start=\"318\">The search stops only when either:</p><ol data-end=\"423\" data-start=\"354\"><li data-end=\"388\" data-section-id=\"1w64rgg\" data-start=\"354\">the required key is found, or<br/> </li><li data-end=\"423\" data-section-id=\"1aw0lv4\" data-start=\"389\">an actually empty slot is found<br/> </li></ol><p data-end=\"486\" data-start=\"425\">Now suppose we delete a key and simply make that slot $\\text{NULL}$.</p><p data-end=\"714\" data-start=\"488\">This is wrong because some other key may have been inserted after crossing that slot during probing. </p><p data-end=\"714\" data-start=\"488\">Later, while searching for that key, the search will stop at the $\\text{NULL}$ slot and incorrectly say that the key is not present.</p><p data-end=\"724\" data-start=\"716\">Example:</p><p data-end=\"776\" data-start=\"726\">Table size $= 7$, hash function $h(k) = k \\bmod 7$</p><p data-end=\"799\" data-start=\"778\">Insert keys: $10, 17$</p><p data-end=\"845\" data-start=\"801\">$10 \\bmod 7 = 3$, so $10$ goes to index $3$.</p><p data-end=\"936\" data-start=\"847\">$17 \\bmod 7 = 3$, but index $3$ is occupied, so by linear probing $17$ goes to index $4$.</p><p data-end=\"954\" data-start=\"938\">Now delete $10$.</p><p data-end=\"1126\" data-start=\"956\">If index $3$ is made $\\text{NULL}$, then searching for $17$ starts at index $3$. Since index $3$ is $\\text{NULL}$, the search stops immediately and says $17$ is absent, which is wrong.</p><p data-end=\"1251\" data-start=\"1128\">So, instead of marking the deleted slot as $\\text{NULL}$, we mark it as $\\text{DELETED}$ or a tombstone. This tells the search operation: \"Do not stop here, continue probing.\"</p><p data-end=\"1251\" data-start=\"1128\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540338/go-classes-dpp-gate-cs-da-data-structure-deletion-in-open-addressing\" target=\"_blank\">GATE Overflow #540338</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"721\" data-start=\"639\">A hash table of size $5$ uses open addressing with linear probing.</p><p data-end=\"747\" data-start=\"723\">The probing function is:</p><p data-end=\"773\" data-start=\"749\">$H(k,i) = (k+i) \\bmod 5$</p><p data-end=\"808\" data-start=\"775\">where $i$ is the collision count.</p><p data-end=\"849\" data-start=\"810\">Insert the keys in the following order $17, 19, 18, 23$</p><p data-end=\"926\" data-start=\"869\">What is the final hash table from index $0$ to index $4$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{23, empty, 17, 18, 19}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{empty, 23, 17, 18, 19}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{23, 17, 18, 19, empty}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{17, 18, 19, 23, empty}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540332\"></a><div itemprop=\"text\"><p data-end=\"1087\" data-start=\"1058\">For key $17$:</p><p data-end=\"1105\" data-start=\"1089\">$17 \\bmod 5 = 2$</p><p data-end=\"1134\" data-start=\"1107\">So, $17$ goes to index $2$.</p><p data-end=\"1149\" data-start=\"1136\">For key $19$:</p><p data-end=\"1167\" data-start=\"1151\">$19 \\bmod 5 = 4$</p><p data-end=\"1196\" data-start=\"1169\">So, $19$ goes to index $4$.</p><p data-end=\"1211\" data-start=\"1198\">For key $18$:</p><p data-end=\"1229\" data-start=\"1213\">$18 \\bmod 5 = 3$</p><p data-end=\"1258\" data-start=\"1231\">So, $18$ goes to index $3$.</p><p data-end=\"1273\" data-start=\"1260\">For key $23$:</p><p data-end=\"1291\" data-start=\"1275\">$23 \\bmod 5 = 3$</p><p data-end=\"1334\" data-start=\"1293\">Index $3$ is occupied, so try next index.</p><p data-end=\"1356\" data-start=\"1336\">$(23+1) \\bmod 5 = 4$</p><p data-end=\"1399\" data-start=\"1358\">Index $4$ is occupied, so try next index.</p><p data-end=\"1421\" data-start=\"1401\">$(23+2) \\bmod 5 = 0$</p><p data-end=\"1469\" data-start=\"1423\">Index $0$ is empty, so $23$ goes to index $0$.</p><p data-end=\"1486\" data-start=\"1471\">Final table is:</p><p data-end=\"1511\" data-start=\"1488\">$\\text{23, empty, 17, 18, 19}$</p><p data-end=\"1545\" data-start=\"1513\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540330/go-classes-dpp-gate-cs-da-data-structure-linear-probing\" target=\"_blank\">GATE Overflow #540330</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5719\" data-start=\"5651\">Consider the following statements about hash tables.</p><p data-end=\"5816\" data-start=\"5721\">$\\text{S1}:$ The worst-case complexity of checking whether an object is present in a hash set is $O(1)$.</p><p data-end=\"5950\" data-start=\"5818\">$\\text{S2}:$ The worst-case complexity of finding a key in a hash table with <code data-end=\"5889\" data-start=\"5886\">n</code> entries is $O(\\lambda)$, where $\\lambda$ is the load factor.</p><p data-end=\"6082\" data-start=\"5952\">$\\text{S3}:$ For a hash table of size $5$, the function $h(x) = x \\bmod 5$ maps the values $\\{20, 6, 18, 14\\}$ to indices without collisions.</p><p data-end=\"6203\" data-start=\"6084\">$\\text{S4}:$ For hash tables with linked-list chaining, the load factor $\\lambda$ is the fraction of buckets that are non-empty.</p><p data-end=\"6273\" data-start=\"6205\">$\\text{S5}:$ Hash tables with linear probing only work when $\\lambda \\leq 1$.</p><p data-end=\"6349\" data-start=\"6275\">$\\text{S6}:$ Hash tables with linked-list chaining only work when $\\lambda \\leq 1$.</p><p data-end=\"6377\" data-start=\"6351\">Which statements are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1, S2, S4}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{S3, S5}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{S2, S3, S6}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1, S3, S5, S6}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540235\"></a><div itemprop=\"text\"><p data-end=\"6554\" data-start=\"6457\">$\\text{S1}$ is false. In the worst case, many keys can collide, so search may take $O(n)$.</p><p data-end=\"6655\" data-start=\"6556\">$\\text{S2}$ is false. Worst-case search is not bounded by $O(\\lambda)$. All keys may collide into one chain.</p><p data-end=\"6668\" data-start=\"6657\">$\\text{S3}$ is true:</p><p data-end=\"6686\" data-start=\"6670\">$20 \\bmod 5 = 0$</p><p data-end=\"6703\" data-start=\"6688\">$6 \\bmod 5 = 1$</p><p data-end=\"6721\" data-start=\"6705\">$18 \\bmod 5 = 3$</p><p data-end=\"6739\" data-start=\"6723\">$14 \\bmod 5 = 4$</p><p data-end=\"6792\" data-start=\"6741\">All indices are distinct, so there is no collision.</p><p data-end=\"6836\" data-start=\"6794\">$\\text{S4}$ is false. For chaining, load factor is:</p><p data-end=\"6861\" data-start=\"6838\">$\\lambda = \\frac{n}{m}$</p><p data-end=\"6950\" data-start=\"6863\">It is the average number of elements per bucket, not the fraction of non-empty buckets.</p><p data-end=\"7073\" data-start=\"6952\">$\\text{S5}$ is true. In linear probing, all elements must be stored inside the table itself, so the load factor cannot exceed $1$.</p><p data-end=\"7196\" data-start=\"7075\">$\\text{S6}$ is false. In chaining, a bucket can store multiple elements using a linked list, so $\\lambda$ can be greater than $1$.</p><p data-end=\"7243\" data-start=\"7198\">Therefore, the true statements are $\\text{S3}$ and $\\text{S5}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540234/go-classes-dpp-gate-cs-da-data-structure-hashing\" target=\"_blank\">GATE Overflow #540234</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4637\" data-start=\"4506\">A hash table has $m$ slots and stores $n$ keys. Assume simple uniform hashing. Collisions are resolved by chaining.</p><p data-end=\"4702\" data-start=\"4639\">What is the expected number of slots that end up <strong data-end=\"4701\" data-start=\"4688\">non-empty</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$m\\left(1 - \\left(\\frac{m-1}{m}\\right)^n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\frac{m-1}{m}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$m\\left(\\frac{m-1}{m}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$1 - \\left(\\frac{m-1}{m}\\right)^n$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540233\"></a><div itemprop=\"text\"><p data-end=\"4957\" data-start=\"4885\">probability that a particular slot is empty is:</p><p data-end=\"4989\" data-start=\"4959\">$\\left(\\frac{m-1}{m}\\right)^n$</p><p data-end=\"5046\" data-start=\"4991\">So, probability that a particular slot is non-empty is:</p><p data-end=\"5082\" data-start=\"5048\">$1 - \\left(\\frac{m-1}{m}\\right)^n$</p><p data-end=\"5172\" data-start=\"5084\">There are $m$ slots. </p><p data-end=\"5172\" data-start=\"5084\">By linearity of expectation, expected number of non-empty slots is:</p><p data-end=\"5222\" data-start=\"5174\">$m\\left(1 - \\left(\\frac{m-1}{m}\\right)^n\\right)$</p><p data-end=\"5246\" data-start=\"5224\"><br/><strong>Answr: <strong data-end=\"5245\" data-start=\"5240\">A</strong></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540232/go-classes-dpp-gate-cs-da-data-structure-expected-non-empty-slots\" target=\"_blank\">GATE Overflow #540232</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3633\" data-start=\"3416\">A hash table has $m$ slots and stores $n$ keys. Assume <strong data-end=\"3513\" data-start=\"3487\">simple uniform hashing</strong>, so each key is equally likely to hash into any slot, independently of other keys. Collisions are resolved by chaining.</p><p data-end=\"3693\" data-start=\"3635\">What is the probability that the first slot ends up empty?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left(\\frac{1}{m}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\frac{m-1}{m}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$1 - \\left(\\frac{1}{m}\\right)^n$<br/></span>",
                "<span style=\"display: inline;\">$1 - \\left(\\frac{m-1}{m}\\right)^n$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540231\"></a><div itemprop=\"text\"><p data-end=\"3947\" data-start=\"3857\">For one key, probability that it does <strong data-end=\"3918\" data-start=\"3911\">not</strong> hash into the first slot is:</p><p data-end=\"3964\" data-start=\"3949\">$\\frac{m-1}{m}$</p><p data-end=\"4020\" data-start=\"3966\">There are $n$ keys, and each key hashes independently.</p><p data-end=\"4092\" data-start=\"4022\">So, probability that none of the $n$ keys hash into the first slot is:</p><p data-end=\"4124\" data-start=\"4094\">$\\left(\\frac{m-1}{m}\\right)^n$</p><p data-end=\"4148\" data-start=\"4126\">Correct option: <strong data-end=\"4147\" data-start=\"4142\">B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540230/go-classes-dpp-gate-cs-da-data-structure-uniform-hashing\" target=\"_blank\">GATE Overflow #540230</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A hash table has \\(7\\) slots, indexed from \\(0\\) to \\(6\\). The following six distinct integer keys are inserted $: 49,\\ 61,\\ 70,\\ 73,\\ 84,\\ 96 $. The hash function is defined as $h(k)=((7k+5)\\bmod c)\\bmod 7$, where \\(c\\) is an integer satisfying $10\\leq c\\leq18.$<br/> <br/> How many values of \\(c\\) ensure that all six keys are mapped to distinct hash table slots?</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"540229\"></a><div itemprop=\"text\"><p>We are given the keys $:49,\\ 61,\\ 70,\\ 73,\\ 84,\\ 96$</p><p>The hash function is,</p><p>$h(k)=((7k+5)\\bmod c)\\bmod 7$, where $10\\leq c\\leq 18$.</p><p>There are <strong>$6$ distinct keys</strong> and <strong>$7$ hash table slots</strong>.</p><p>Therefore, to avoid collisions, all $6$ keys must produce different hash values.</p><p>First, calculate $7k+5$ for each key:</p><p>$\\begin{aligned} 49&amp;:348\\\\ 61&amp;:432\\\\ 70&amp;:495\\\\ 73&amp;:516\\\\ 84&amp;:593\\\\ 96&amp;:677 \\end{aligned}$</p><p>Now, check each integer value of $c$ from $10$ to $18$.</p><p>For $c=10$</p><p>The hash values are $:1,\\ 2,\\ 5,\\ 6,\\ 3,\\ 0$</p><p>All values are distinct. Hence, <strong>$c=10$ is valid</strong>.</p><p><br/>For $c=11$</p><p>$0,\\ 3,\\ 0,\\ 3,\\ 3,\\ 6$</p><p>There are collisions.<br/> </p><p>For $c=12$</p><p>$0,\\ 0,\\ 3,\\ 0,\\ 5,\\ 5$</p><p>There are collisions.<br/> </p><p>For $c=13$</p><p>$3,\\ 3,\\ 1,\\ 2,\\ 1,\\ 1$</p><p>There are collisions.<br/> </p><p>For $c=14$</p><p>$5,\\ 5,\\ 5,\\ 5,\\ 5,\\ 5$</p><p>All keys map to the same slot, so collisions occur.<br/> </p><p>For $c=15$</p><p>$\\begin{aligned} 49&amp;:348\\bmod 15=3\\\\ 61&amp;:432\\bmod 15=12,\\quad 12\\bmod 7=5\\\\ 70&amp;:495\\bmod 15=0\\\\ 73&amp;:516\\bmod 15=6\\\\ 84&amp;:593\\bmod 15=8,\\quad 8\\bmod 7=1\\\\ 96&amp;:677\\bmod 15=2 \\end{aligned}$</p><p>The final hash values are:</p><p>$3,\\ 5,\\ 0,\\ 6,\\ 1,\\ 2$</p><p>All values are distinct. Hence, <strong>$c=15$ is valid</strong>.<br/> </p><p>For $c=16$</p><p>$5,\\ 0,\\ 1,\\ 4,\\ 1,\\ 5$</p><p>There are collisions.<br/> </p><p>For $c=17$</p><p>$1,\\ 0,\\ 2,\\ 6,\\ 1,\\ 0$</p><p>There are collisions.<br/> </p><p>For $c=18$</p><p>$\\begin{aligned} 49&amp;:348\\bmod 18=6\\\\ 61&amp;:432\\bmod 18=0\\\\ 70&amp;:495\\bmod 18=9,\\quad 9\\bmod 7=2\\\\ 73&amp;:516\\bmod 18=12,\\quad 12\\bmod 7=5\\\\ 84&amp;:593\\bmod 18=17,\\quad 17\\bmod 7=3\\\\ 96&amp;:677\\bmod 18=11,\\quad 11\\bmod 7=4 \\end{aligned}$</p><p>The final hash values are:</p><p>$6,\\ 0,\\ 2,\\ 5,\\ 3,\\ 4$</p><p>All values are distinct. Hence, <strong>$c=18$ is valid</strong>.<br/> </p><p>Therefore, the values of $c$ that produce collision-free hashing are, $c\\in\\{10,15,18\\}$</p><p>The total number of valid values is $\\boxed{3}$</p><p><br/><strong>Answer : $3$</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540228/go-classes-dpp-gate-cs-da-data-structure-collision-hash-parameter\" target=\"_blank\">GATE Overflow #540228</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"732\" data-start=\"693\">Insert the integer keys</p><p data-end=\"762\" data-start=\"734\">$47, 61, 36, 52, 56, 33, 92$</p><p data-end=\"813\" data-start=\"764\">in the given order into a hash table of size $7$.</p><p data-end=\"836\" data-start=\"815\">The hash function is:</p><p data-end=\"864\" data-start=\"838\">$h(k) = (10k + 4) \\bmod 7$</p><p data-end=\"1005\" data-start=\"866\">Collisions are resolved by <strong data-end=\"914\" data-start=\"893\">separate chaining</strong>. Each slot stores a linked list, and later insertions are appended at the end of the list.</p><p data-end=\"1054\" data-start=\"1007\">Which of the following is the final hash table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><pre data-end=\"1449\" data-start=\"1359\"><code data-end=\"1074\" data-start=\"1061\">0: 36 -&gt; 92</code> <code data-end=\"1087\" data-start=\"1077\">1: empty</code> <code data-end=\"1100\" data-start=\"1090\">2: empty</code> <code data-end=\"1113\" data-start=\"1103\">3: empty</code> <code data-end=\"1123\" data-start=\"1116\">4: 56</code> <code data-end=\"1145\" data-start=\"1126\">5: 47 -&gt; 61 -&gt; 33</code> <code data-end=\"1155\" data-start=\"1148\">6: 52</code> </pre></span>",
                "<span style=\"display: inline;\"><pre data-end=\"1449\" data-start=\"1359\"><code data-end=\"1175\" data-start=\"1162\">0: 36 -&gt; 52</code> <code data-end=\"1188\" data-start=\"1178\">1: empty</code> <code data-end=\"1198\" data-start=\"1191\">2: 92</code> <code data-end=\"1211\" data-start=\"1201\">3: empty</code> <code data-end=\"1221\" data-start=\"1214\">4: 56</code> <code data-end=\"1243\" data-start=\"1224\">5: 47 -&gt; 61 -&gt; 33</code> <code data-end=\"1256\" data-start=\"1246\">6: empty</code></pre></span>",
                "<span style=\"display: inline;\"><pre data-end=\"1449\" data-start=\"1359\"><code data-end=\"1276\" data-start=\"1263\">0: 92 -&gt; 36</code> <code data-end=\"1289\" data-start=\"1279\">1: empty</code> <code data-end=\"1302\" data-start=\"1292\">2: empty</code> <code data-end=\"1315\" data-start=\"1305\">3: empty</code> <code data-end=\"1325\" data-start=\"1318\">4: 56</code> <code data-end=\"1347\" data-start=\"1328\">5: 33 -&gt; 61 -&gt; 47</code> <code data-end=\"1357\" data-start=\"1350\">6: 52</code></pre></span>",
                "<span style=\"display: inline;\"><pre data-end=\"1449\" data-start=\"1359\"><code data-end=\"1371\" data-start=\"1364\">0: 36</code> <code data-end=\"1381\" data-start=\"1374\">1: 92</code> <code data-end=\"1394\" data-start=\"1384\">2: empty</code> <code data-end=\"1407\" data-start=\"1397\">3: empty</code> <code data-end=\"1417\" data-start=\"1410\">4: 56</code> <code data-end=\"1439\" data-start=\"1420\">5: 47 -&gt; 61 -&gt; 33</code> <code data-end=\"1449\" data-start=\"1442\">6: 52</code></pre></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540227\"></a><div itemprop=\"text\"><p data-end=\"1504\" data-start=\"1466\">Calculate hash values:</p><p data-end=\"1559\" data-start=\"1506\">$h(47) = (10 \\cdot 47 + 4) \\bmod 7 = 474 \\bmod 7 = 5$</p><p data-end=\"1586\" data-start=\"1561\">$h(61) = 614 \\bmod 7 = 5$</p><p data-end=\"1613\" data-start=\"1588\">$h(36) = 364 \\bmod 7 = 0$</p><p data-end=\"1640\" data-start=\"1615\">$h(52) = 524 \\bmod 7 = 6$</p><p data-end=\"1667\" data-start=\"1642\">$h(56) = 564 \\bmod 7 = 4$</p><p data-end=\"1694\" data-start=\"1669\">$h(33) = 334 \\bmod 7 = 5$</p><p data-end=\"1721\" data-start=\"1696\">$h(92) = 924 \\bmod 7 = 0$</p><p data-end=\"1783\" data-start=\"1723\">Since later insertions are appended at the end of the chain:</p><pre data-end=\"1840\" data-start=\"1785\"><code data-end=\"1798\" data-start=\"1785\">0: 36 -&gt; 92</code> <code data-end=\"1808\" data-start=\"1801\">4: 56</code> <code data-end=\"1830\" data-start=\"1811\">5: 47 -&gt; 61 -&gt; 33</code> <code data-end=\"1840\" data-start=\"1833\">6: 52</code></pre><p data-end=\"1874\" data-start=\"1842\">So, the correct option is <strong data-end=\"1873\" data-start=\"1868\">A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540226/go-classes-dpp-gate-cs-da-data-structure-hashing-with-chaining\" target=\"_blank\">GATE Overflow #540226</a></small></div>"
        }
    ]
});
