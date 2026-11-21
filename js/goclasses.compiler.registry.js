registerTest({
    "name": "DPP 01 - Compiler Design (Lexical Analysis & Compiler Basics - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following four operators:</p><p>$$\\texttt{||},\\quad \\texttt{|=},\\quad \\texttt{|},\\quad \\texttt{=}$$</p><p>Which of the following transition structures correctly describes a <strong>DFA that recognizes exactly these four tokens</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The initial state reaches an accepting state on $\\texttt{|}$. From that state, $\\texttt{|}$ and $\\texttt{=}$ lead to accepting states for $\\texttt{||}$ and $\\texttt{|=}$, respectively. The initial state also reaches an accepting state on $\\texttt{=}$.<br/></span>",
                "<span style=\"display: inline;\">The initial state reaches a non-accepting state on $\\texttt{|}$, followed by accepting states on $\\texttt{|}$ or $\\texttt{=}$. The initial state reaches an accepting state on $\\texttt{=}$.<br/></span>",
                "<span style=\"display: inline;\">The initial state reaches an accepting state on $\\texttt{|}$, followed by accepting states on $\\texttt{|}$ or $\\texttt{=}$. The initial state reaches a non-accepting state on $\\texttt{=}$.<br/></span>",
                "<span style=\"display: inline;\">The transitions are the same as in A, but the accepting state for $\\texttt{=}$ also has a transition on $\\texttt{|}$ to another accepting state.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557621\"></a><div itemprop=\"text\"><p>The four valid C operators are:</p><p>$\\begin{array}{|c|c|} \\hline \\textbf{Operator} &amp; \\textbf{Meaning}\\\\ \\hline \\texttt{||} &amp; \\text{Logical OR}\\\\ \\hline \\texttt{|=} &amp; \\text{Bitwise OR assignment}\\\\ \\hline \\texttt{|} &amp; \\text{Bitwise OR}\\\\ \\hline \\texttt{=} &amp; \\text{Assignment}\\\\ \\hline \\end{array}$</p><p>We must construct a DFA that recognizes precisely these four operators.</p><p>Now,</p><p>Let $q_0$ be the initial state.</p><ul><li>$q_1$: Recognizes $\\texttt{|}$</li><li>$q_2$: Recognizes $\\texttt{||}$</li><li>$q_3$: Recognizes $\\texttt{|=}$</li><li>$q_4$: Recognizes $\\texttt{=}$</li></ul><p>All states except $q_0$ are accepting states.</p><p style=\"text-align:center\"><img alt=\"\" height=\"172\" src=\"https://cdn.mathpix.com/snip/images/9uAxeQuCTWpd638MjIk7GkYhain-nBPSutZ2m3Hb3no.original.fullsize.png\" width=\"451\"/></p><p><strong>Transition Table :</strong></p><p>$\\begin{array}{|c|c|c|c|} \\hline \\textbf{State} &amp; \\textbf{Input }\\texttt{|} &amp; \\textbf{Input }\\texttt{=} &amp; \\textbf{Token Accepted}\\\\ \\hline \\rightarrow q_0 &amp; q_1 &amp; q_4 &amp; \\text{None}\\\\ \\hline {}^*q_1 &amp; q_2 &amp; q_3 &amp; \\texttt{|}\\\\ \\hline {}^*q_2 &amp; \\text{Dead} &amp; \\text{Dead} &amp; \\texttt{||}\\\\ \\hline {}^*q_3 &amp; \\text{Dead} &amp; \\text{Dead} &amp; \\texttt{|=}\\\\ \\hline {}^*q_4 &amp; \\text{Dead} &amp; \\text{Dead} &amp; \\texttt{=}\\\\ \\hline \\end{array}$</p><p>Here, $^*$ indicates an accepting state. Missing transitions lead to the dead state.</p><p> </p><p>The DFA must recognize all four operators $\\{\\texttt{|},\\texttt{=},\\texttt{||},\\texttt{|=}\\}$</p><p>Starting from $q_0$:</p><ul><li>Reading $\\texttt{|}$ reaches an accepting state $q_1$, recognizing $\\texttt{|}$.</li><li>From $q_1$, reading another $\\texttt{|}$ recognizes $\\texttt{||}$.</li><li>From $q_1$, reading $\\texttt{=}$ recognizes $\\texttt{|=}$.</li><li>Reading $\\texttt{=}$ directly from $q_0$ reaches an accepting state, recognizing $\\texttt{=}$.</li></ul><p><br/><strong>A : Correct</strong></p><p>It recognizes exactly the four required operators.</p><p><strong>B : Incorrect</strong></p><p>It fails to recognize $\\texttt{|}$.</p><p><strong>C : Incorrect</strong></p><p>It fails to recognize $\\texttt{=}$.</p><p><strong>D : Incorrect</strong></p><p>It additionally recognizes $\\texttt{=|}$, which is not one of the specified operators.</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557619/go-classes-dpp-gate-cs-compiler-design-lexical-analysis\" target=\"_blank\">GATE Overflow #557619</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer is required to skip comments that start with the two-character sequence $\\{-$ and end with the two-character sequence $-\\}$.</p><p>The comment may contain any characters except the closing sequence $-\\}$.</p><p>Which of the following regular expressions correctly recognizes such comments?</p><p>Here, $\\varepsilon$ represents the empty string, and $\\mathrm{ANY}$ represents any character.</p><div></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{\"\\{-\"} \\; (\\texttt{[\\textasciicircum-]} \\mid \\texttt{\"-\"}\\,\\texttt{[\\textasciicircum\\}]})^{*} \\; (\\varepsilon \\mid \\texttt{\"-\"}) \\; \\texttt{\"-\\}\"}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\"\\{-\"} \\; \\mathrm{ANY}^{*} \\; \\texttt{\"-\\}\"}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\"\\{-\"} \\; \\texttt{[\\textasciicircum-]}^{*} \\; \\texttt{\"-\\}\"}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{\"\\{-\"} \\; (\\texttt{[\\textasciicircum-]} \\mid \\texttt{\"-\"}\\,\\texttt{[\\textasciicircum\\}]})^{*} \\; \\texttt{\"-\\}\"}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557618\"></a><div itemprop=\"text\"><p>The objective is to recognize a comment beginning with $\\{-$ and ending at the first occurrence of $-\\}$.</p><p>The regular expression must ensure that the closing delimiter is not consumed as part of the comment body.</p><p>Every valid comment starts with $\\{-$</p><p>Therefore, the regular expression begins with the literal sequence \"$\\{-$\".</p><p>We need to allow two kinds of content:</p><ol><li>Any character other than $\\texttt{-}$.</li><li>A $\\texttt{-}$ character followed by a character other than $\\texttt{\\}}$.</li></ol><p>These can be represented as:</p><p>$\\texttt{[\\textasciicircum-]} \\mid \\texttt{\"-\"}\\,\\texttt{[\\textasciicircum\\}]}$</p><p>Repeating this pattern allows the body to contain arbitrary text while preventing $\\texttt{-\\}}$ from being consumed as ordinary content.</p><p>A valid comment body may itself end with a hyphen, immediately before the closing delimiter.</p><p>For eg, $\\texttt{\\{---\\}}$</p><p>Here:</p><ul><li>$\\{-$ is the opening delimiter.</li><li>$-$ is the comment body.</li><li>$-\\}$ is the closing delimiter.</li></ul><p>To allow this final body hyphen, we include:</p><p>$(\\varepsilon\\mid\\texttt{\"-\"})$</p><p>This allows either zero or one trailing hyphen.</p><p>Every valid comment must end with $\\texttt{-\\}}$</p><p>Therefore, the complete regular expression is:</p><p>$\\texttt{\"\\{-\"} \\; (\\texttt{[\\textasciicircum-]} \\mid \\texttt{\"-\"}\\,\\texttt{[\\textasciicircum\\}]})^{*} \\; (\\varepsilon \\mid \\texttt{\"-\"}) \\; \\texttt{\"-\\}\"}$</p><p><br/><strong>Analysis of options :</strong></p><p><strong>A : Correct</strong></p><p>The expression recognizes the opening delimiter, the allowed comment body, an optional trailing hyphen, and the closing delimiter.</p><p>It prevents an earlier $\\texttt{-\\}}$ from being swallowed into the comment body.</p><p><br/><strong>B : Incorrect</strong></p><p>$\\mathrm{ANY}^*$ can include the closing sequence $\\texttt{-\\}}$.</p><p>If the expression is allowed to match greedily, it may match across an earlier closing delimiter instead of stopping there.</p><p><br/><strong>C: Incorrect</strong></p><p>$\\texttt{[\\^{}-]}^*$ excludes every hyphen inside the comment body.</p><p>However, the problem allows hyphens provided they do not form the closing sequence $\\texttt{-\\}}$.</p><p><br/><strong>D: Incorrect</strong></p><p>This expression cannot recognize certain valid comments whose bodies end in a standalone hyphen.</p><p>For eg, it fails on $\\texttt{\\{---\\}}$</p><p>The optional trailing hyphen included in A is necessary.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557613/go-classes-dpp-gate-cs-compiler-design-lexical-rule\" target=\"_blank\">GATE Overflow #557613</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The corresponding regular expressions are:</p><p>Suppose a DFA is used for lexical analysis, backtracking to the most recently encountered final state whenever necessary.</p><p>Which of the following input strings will cause the scanner to backtrack and re-read exactly five characters while recognizing its first token?</p><p><strong>Given Details:</strong></p><ul><li>$\\mathrm{Number}=[0-9]^+$</li><li>$\\mathrm{Short}=[A-Za-z]$</li><li>$\\mathrm{Long}=[A-Za-z]^+\\$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$abcde$</span>",
                "<span style=\"display: inline;\">$abcdef$</span>",
                "<span style=\"display: inline;\">$abcd\\$$</span>",
                "<span style=\"display: inline;\">$12345$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"557603\"></a><div itemprop=\"text\"><p>The important feature of this lexical analyzer is the distinction between <strong>short and long identifiers</strong>.</p><p>A short identifier consists of exactly one letter.</p><p>A long identifier must contain one or more letters followed by $\\$$.</p><p>Consider the input $:\\texttt{abcdef}$</p><p>The scanner begins reading $:\\texttt{a}$</p><p>At this point, it has recognized a valid short identifier.</p><p>It records this position as the most recent accepting position.</p><p>The scanner reads the next character $:\\texttt{ab}$</p><p>This is not a valid short identifier because it contains two letters.</p><p>It is also not yet a complete long identifier because the required $\\$$ has not appeared.</p><p>However, $\\texttt{ab}$ is a valid prefix of a possible long identifier such as $:\\texttt{ab\\$}$</p><p>Therefore, the scanner continues.</p><p>It successively reads:</p><p>$\\begin{array}{l} \\texttt{abc}\\\\ \\texttt{abcd}\\\\ \\texttt{abcde}\\\\ \\texttt{abcdef} \\end{array}$</p><p>Each is a possible prefix of a long identifier, provided a $\\$$ appears afterward.</p><p>The input ends after $\\texttt{abcdef}$.</p><p>No $\\$$ was encountered.</p><p>Therefore, the scanner cannot recognize the six-character string as a long identifier.</p><p>The most recent accepting position was after the first character, $\\texttt{a}$, which formed a short identifier.</p><p>The scanner must backtrack from the end of $\\texttt{abcdef}$ to the position immediately after $\\texttt{a}$</p><p>The characters that must be re-read are $:\\texttt{b\\ c\\ d\\ e\\ f}$</p><p>Number of characters re-read $:\\boxed{5}$</p><p>Thus, <strong>B is correct.</strong></p><p><br/><strong>Verifying the remaining options :</strong></p><p><strong>A : $\\texttt{abcde}$</strong></p><p>The scanner reads five letters and returns to the accepting position after the first letter.</p><p>The number of characters re-read is $:5-1=4$</p><p>Therefore, <strong>A is incorrect.</strong></p><p><br/><strong>C : $\\texttt{abcd\\$}$</strong></p><p>The scanner recognizes the complete sequence as a long identifier.</p><p>The final $\\$$ allows a successful match of the long-identifier pattern.</p><p>Therefore, no backtracking is required.</p><p><strong>C is incorrect.</strong><br/> </p><p><strong>D : $\\texttt{12345}$</strong></p><p>This is a valid number token.</p><p>The entire string matches $:[0-9]^+$</p><p>No backtracking is required.</p><p><strong>D is incorrect.</strong></p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557599/go-classes-dpp-gate-cs-compiler-design-dfa-based-lexical-analysis\" target=\"_blank\">GATE Overflow #557599</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following Flex script:</p><p>$$\\begin{array}{ll}<br/>\\texttt{\\%\\%}\\\\<br/>\\texttt{aa}&amp;\\{\\ \\operatorname{printf}(\\text{\"1\"});\\ \\}\\\\<br/>\\texttt{b?a+b?}&amp;\\{\\ \\operatorname{printf}(\\text{\"2\"});\\ \\}\\\\<br/>\\texttt{b?a*b?}&amp;\\{\\ \\operatorname{printf}(\\text{\"3\"});\\ \\}\\\\<br/>\\texttt{.|}\\backslash \\texttt{n}&amp;\\{\\ \\operatorname{printf}(\\text{\"4\"});\\ \\} \\end{array}$$</p><p>Which of the following input strings produces the output $321$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{bbbabaa}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{bbabaaa}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{aaabbba}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{bbbbaaa}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557598\"></a><div itemprop=\"text\"><p>The scanner uses the <strong>longest-match rule</strong>.</p><p>If two rules match the same longest prefix, the rule appearing earlier in the Flex specification is selected.</p><p>Let's examine the patterns.</p><p>$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\textbf{Rule} &amp; \\textbf{Pattern} &amp; \\textbf{Output}\\\\ \\hline<br/>1 &amp; \\texttt{aa} &amp; 1\\\\ \\hline<br/>2 &amp; \\texttt{b?a+b?} &amp; 2\\\\ \\hline<br/>3 &amp; \\texttt{b?a*b?} &amp; 3\\\\ \\hline<br/>4 &amp; \\texttt{.|}\\backslash \\texttt{n} &amp; 4\\\\ \\hline<br/>\\end{array}$</p><p>In these patterns:</p><ul><li>$?$ means zero or one occurrence.</li><li>$+$ means one or more occurrences.</li><li>$*$ means zero or more occurrences.</li></ul><p><br/><strong>Step $\\mathbf{1}:$ Process $\\texttt{bbbabaa}$</strong></p><p>We begin with $\\texttt{bbbabaa}$</p><p>At the first character, Rule $3$ matches $\\texttt{bb}$ because the pattern $\\texttt{b?a*b?}$ can match two $\\texttt{b}$ characters with zero $\\texttt{a}$ characters.</p><p>Rule $2$ cannot match $\\texttt{bb}$ because it requires at least one $\\texttt{a}$.</p><p>Therefore, the scanner prints $\\texttt{3}$.</p><p>Remaining input $:\\texttt{babaa}$<br/> </p><p><strong>Step $\\mathbf{2}:$ Process $\\texttt{babaa}$</strong></p><p>Rule $2$ matches the prefix $\\texttt{bab}$</p><p>This corresponds to:</p><p>$\\begin{array}{lll} \\texttt{b?} &amp; \\rightarrow &amp; \\texttt{b}\\\\ \\texttt{a+} &amp; \\rightarrow &amp; \\texttt{a}\\\\ \\texttt{b?} &amp; \\rightarrow &amp; \\texttt{b} \\end{array}$</p><p>Rule $3$ also matches $\\texttt{bab}$, but Rule 2 comes earlier in the specification.</p><p>Therefore, <strong>Rule $\\mathbf{2}$ wins the tie</strong> and prints $\\texttt{2}$.</p><p>Remaining input $:\\texttt{aa}$<br/> </p><p><strong>Step $\\mathbf{3}:$ Process $\\texttt{aa}$</strong></p><p>The first rule matches the complete string $:\\texttt{aa}$</p><p>Rules $2$ and $3$ can also match $\\texttt{aa}$, but Rule $1$ appears earlier.</p><p>Therefore, <strong>Rule $\\mathbf{1}$ wins</strong> and prints $\\texttt{1}$.<br/> </p><p><strong>Total Output : </strong>$\\boxed{321}$</p><p><br/><strong>Verification of All Options</strong></p><p>$\\begin{array}{|c|c|c|} \\hline<br/>\\textbf{Option} &amp; \\textbf{Input} &amp; \\textbf{Output}\\\\ \\hline<br/>\\text{A} &amp; \\texttt{bbbabaa} &amp; \\texttt{321}\\\\ \\hline<br/>\\text{B} &amp; \\texttt{bbabaaa} &amp; \\texttt{322}\\\\ \\hline<br/>\\text{C} &amp; \\texttt{aaabbba} &amp; \\texttt{232}\\\\ \\hline<br/>\\text{D} &amp; \\texttt{bbbbaaa} &amp; \\texttt{332}\\\\ \\hline<br/>\\end{array}$</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557358/go-classes-dpp-gate-cs-compiler-design-lexical-rules\" target=\"_blank\">GATE Overflow #557358</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyser is to be automatically constructed from a list of regular expressions specifying different token classes.</p><p>Which of the following correctly describes the construction process?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Construct NFAs for the regular expressions, combine them into an NFA, convert the combined NFA into a DFA, and use the DFA for token recognition.<br/></span>",
                "<span style=\"display: inline;\">Convert the regular expressions into context-free grammars, construct parsing tables, and use those tables to recognize tokens.<br/></span>",
                "<span style=\"display: inline;\">Construct a separate pushdown automaton for each regular expression and combine them into a deterministic pushdown automaton.<br/></span>",
                "<span style=\"display: inline;\">Convert the regular expressions directly into machine instructions without constructing any finite automaton.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557355\"></a><div itemprop=\"text\"><p>A lexical analyzer recognizes tokens according to patterns specified using <strong>regular expressions</strong>.</p><p>Finite automata are particularly suitable for this task because regular expressions describe regular languages.</p><p><br/>Suppose a programming language contains the following token definitions:</p><p>$$\\begin{array}{|c|l|} \\hline \\textbf{Token} &amp; \\textbf{Regular Expression}\\\\ \\hline T_1 &amp; \\texttt{do}\\\\ \\hline T_2 &amp; \\texttt{double}\\\\ \\hline T_3 &amp; \\texttt{[A-Za-z]+}\\\\ \\hline \\end{array}$$</p><p>Each regular expression describes a set of lexemes belonging to the corresponding token class.</p><p>Now,</p><p>Individual NFAs are constructed for the token patterns.</p><p>Let them be $N_1,\\ N_2,\\ N_3$</p><p>Now a new initial state is introduced.</p><p>From this state, epsilon transitions are added to the initial states of the individual NFAs.</p><p style=\"text-align:center\"><img alt=\"\" height=\"193\" src=\"https://cdn.mathpix.com/snip/images/hihWLEiKKWaySEX6kaRwA5L9vDcC2wHt0vyPUT6XeWk.original.fullsize.png\" width=\"264\"/></p><p>Now,</p><p>The <strong>subset construction algorithm</strong> converts the NFA into an equivalent DFA.</p><p>Each DFA state corresponds to a set of NFA states.</p><p>The resulting DFA recognizes the combined token patterns.</p><p>Accepting states are associated with token classes.</p><p>Where multiple token patterns match, the scanner applies <strong>longest-match selection</strong> and the specified <strong>priority rules</strong>.</p><p>Now,</p><p><strong>A : Correct</strong></p><p>This describes the standard finite-automata-based lexical analyzer generation process.</p><p><strong>B : Incorrect</strong></p><p>Context-free grammars and parsing tables are primarily associated with syntax analysis.</p><p><strong>C : Incorrect</strong></p><p>Pushdown automata are not required to recognize regular token patterns.</p><p><strong>D : Incorrect</strong></p><p>This omits the automata-based construction process being asked about.</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557354/go-classes-dpp-gate-cs-compiler-design-lexical-analyzer\" target=\"_blank\">GATE Overflow #557354</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The maximal-munch algorithm selects the longest prefix matching any token pattern, breaking ties according to rule priority.</p><p>It is possible for an input to have a valid tokenization even though maximal munch cannot tokenize it completely using the specified token rules.</p><p>Consider the following Flex rules: $$\\begin{array}{ll} \\mathrm{\\%\\%} &amp; \\\\ \\mathrm{\"aa\"} &amp; \\{\\mathrm{return\\ 1;}\\}\\\\ \\mathrm{\"a\"} &amp; \\{\\mathrm{return\\ 2;}\\}\\\\ \\mathrm{\"ab\"} &amp; \\{\\mathrm{return\\ 3;}\\} \\end{array}$$ The input string is $\\mathrm{aab}$.</p><p>Assume that only the three specified token types count as valid tokens and that an unmatched character represents a lexical error.</p><p>Which statement(s) is/are TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The string can be completely tokenized into $\\mathrm{\"a\"}$ followed by $\\mathrm{\"ab\"}$.<br/></span>",
                "<span style=\"display: inline;\">Under maximal munch, the first token selected is $\\mathrm{\"aa\"}$.<br/></span>",
                "<span style=\"display: inline;\">The maximal-munch algorithm will backtrack and replace the token $\\mathrm{\"aa\"}$ with $\\mathrm{\"a\"}$ so the remaining input can form a valid token.<br/></span>",
                "<span style=\"display: inline;\">The maximal-munch algorithm fails to tokenize the complete string, even though a valid tokenization exists.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"557062\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><strong>True.</strong> The input \\(\\mathrm{aab}\\) can be tokenized as \\(\\mathrm{a}\\;|\\;\\mathrm{ab}\\), corresponding to tokens $2$ and $3$.<br/> </li><li><strong>True.</strong> At the beginning, \\(\\mathrm{aa}\\) matches two characters, whereas \\(\\mathrm{a}\\) matches one. Maximal munch selects \\(\\mathrm{aa}\\).<br/> </li><li><strong>False.</strong> Maximal munch does not reconsider previously emitted tokens to find a globally valid tokenization.<br/> </li><li><strong>True.</strong> After selecting \\(\\mathrm{aa}\\), the remaining character \\(\\mathrm{b}\\) matches none of the three specified token rules, producing a lexical error under the given assumption.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557061/go-classes-dpp-gate-cs-compiler-design-maximal-munch\" target=\"_blank\">GATE Overflow #557061</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Flex specification with the following rules section:</p><p>$$\\begin{array}{ll}<br/>\\mathrm{\\%\\%} &amp; \\\\<br/>\\mathrm{a[c-f]c} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"1\";}\\}\\\\<br/>\\mathrm{a[.]c} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"2\";}\\}\\\\<br/>\\mathrm{a[cf]c+} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"3\";}\\}\\\\<br/>\\mathrm{a.c} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"4\";}\\}\\\\<br/>\\mathrm{[\\,]} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"5\";}\\}\\\\<br/>\\mathrm{.} &amp; \\{\\mathrm{std::cout}\\ \\text{&lt;&lt;}\\ \\mathrm{\"6\";}\\}<br/>\\end{array}$$</p><p>What is the output of the generated lexer for the following input string? $$\\mathrm{acadccafcc}$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{66163}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{66143}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{66463}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{66166}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557060\"></a><div itemprop=\"text\"><p>First, understand what each Flex pattern matches.</p><p>$$\\begin{array}{|c|c|l|} \\hline \\textbf{Rule} &amp; \\textbf{Pattern} &amp; \\textbf{Meaning}\\\\ \\hline 1 &amp; \\mathrm{a[c-f]c} &amp; \\text{a, then c to f, then c}\\\\ \\hline 2 &amp; \\mathrm{a[.]c} &amp; \\text{Literal string a.c}\\\\ \\hline 3 &amp; \\mathrm{a[cf]c+} &amp; \\text{a, then c or f, then one or more c}\\\\ \\hline 4 &amp; \\mathrm{a.c} &amp; \\text{a, then any character except newline, then c}\\\\ \\hline 5 &amp; \\mathrm{[\\ ]} &amp; \\text{One space}\\\\ \\hline 6 &amp; \\mathrm{.} &amp; \\text{Any character except newline}\\\\ \\hline \\end{array}$$</p><p>An important distinction is that $\\mathrm{[.]}$ matches a <strong>literal period</strong>, whereas $\\mathrm{.}$ outside a character class acts as a <strong>wildcard</strong>.</p><p>Now process the input:</p><p>$$\\mathrm{a\\ c\\ a\\ d\\ c\\ c\\ a\\ f\\ c\\ c}$$</p><p><strong>Step 1: First Character $\\mathrm{a}$</strong></p><p>The next three characters are $\\mathrm{aca}$.</p><p>None of Rules $1$ to $4$ matches a valid token beginning at this position:</p><ul><li>Rule $1$ requires the third character to be $\\mathrm{c}$.</li><li>Rule $2$ requires the literal sequence $\\mathrm{a.c}$.</li><li>Rule $3$ requires $\\mathrm{c}$ or $\\mathrm{f}$ followed by at least one $\\mathrm{c}$.</li><li>Rule $4$ also requires the third character to be $\\mathrm{c}$.</li></ul><p>Rule $6$ matches the single character $\\mathrm{a}$.</p><p><strong>Output:</strong> $\\mathrm{6}$<br/> </p><p><strong>Step 2: Character $\\mathrm{c}$</strong></p><p>At the next position, no longer rule matches.</p><p>Rule $6$ recognizes $\\mathrm{c}$.</p><p><strong>Output so far:</strong> $\\mathrm{66}$<br/> </p><p><strong>Step 3: Substring $\\mathrm{adc}$</strong></p><p>Rule $1$ matches $\\mathrm{adc}$ because $\\mathrm{d}$ belongs to the character class $\\mathrm{[c-f]}$.</p><p>Rule $4$ also matches $\\mathrm{adc}$ because the wildcard matches $\\mathrm{d}$.</p><p>Both matching strings have length $3$.</p><p>Since Rule $1$ appears before Rule $4$, <strong>Rule $\\mathbf1$ wins by rule priority.</strong></p><p><strong>Output so far:</strong> $\\mathrm{661}$<br/> </p><p><strong>Step 4: Next Character $\\mathrm{c}$</strong></p><p>The next character is recognized by Rule $6$.</p><p><strong>Output so far:</strong> $\\mathrm{6616}$<br/> </p><p><strong>Step 5: Remaining Substring $\\mathrm{afcc}$</strong></p><p>Rule $3$ matches $:\\mathrm{a\\ f\\ cc}$</p><p>Its pattern is $:\\mathrm{a[cf]c+}$</p><p>The match length is $4$.</p><p>Rule $4$ can match only the three-character prefix $\\mathrm{afc}$.</p><p>Therefore, <strong>Rule $\\mathbf3$ wins because it matches more characters.</strong></p><p>It prints $\\mathrm{3}$.</p><p><strong>Final Output</strong></p><p>$$\\begin{array}{|c|c|c|} \\hline \\textbf{Lexeme} &amp; \\textbf{Rule Selected} &amp; \\textbf{Output}\\\\ \\hline \\mathrm{a} &amp; \\text{Rule }6 &amp; 6\\\\ \\hline \\mathrm{c} &amp; \\text{Rule }6 &amp; 6\\\\ \\hline \\mathrm{adc} &amp; \\text{Rule }1 &amp; 1\\\\ \\hline \\mathrm{c} &amp; \\text{Rule }6 &amp; 6\\\\ \\hline \\mathrm{afcc} &amp; \\text{Rule }3 &amp; 3\\\\ \\hline \\end{array}$$</p><p>Combining the outputs $:\\boxed{\\mathrm{66163}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557058/go-classes-dpp-gate-cs-compiler-design-lexical-analysis\" target=\"_blank\">GATE Overflow #557058</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following lexical specification for a programming language. The rules are listed in priority order.</p><p>$$\\begin{array}{|c|c|} \\hline \\textbf{Regular Expression} &amp; \\textbf{Token}\\\\ \\hline \\mathrm{int} &amp; \\mathrm{INT}\\\\ \\hline \\mathrm{[a-z]+} &amp; \\mathrm{IDENT}\\\\ \\hline \\mathrm{type} &amp; \\mathrm{TYPE}\\\\ \\hline \\mathrm{[\\ \\backslash n]+} &amp; \\mathrm{skip}\\\\ \\hline \\end{array}$$</p><p>The lexer uses <strong>longest match</strong>, followed by <strong>first-rule priority</strong> when matches have equal length.</p><p>Which of the following statements are TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">For the input $\\mathrm{int}$, the ambiguity between $\\mathrm{INT}$ and $\\mathrm{IDENT}$ is resolved by first-rule priority.<br/></span>",
                "<span style=\"display: inline;\">For the input $\\mathrm{integer}$, the ambiguity between $\\mathrm{INT}$ and $\\mathrm{IDENT}$ is resolved by the longest-match rule.<br/></span>",
                "<span style=\"display: inline;\">For the input $\\mathrm{type}$, the lexer returns $\\mathrm{TYPE}$.<br/></span>",
                "<span style=\"display: inline;\">The rule for $\\mathrm{TYPE}$ is ineffectual because the $\\mathrm{IDENT}$ rule appears before it.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"557056\"></a><div itemprop=\"text\"><p><strong>A : </strong>Input<strong> $\\mathrm{int}$</strong></p><p>Two regular expressions match $\\mathrm{int}$:</p><ul><li>Rule $1$: $\\mathrm{int}$ matches $3$ characters.</li><li>Rule $2$: $\\mathrm{[a-z]+}$ also matches $3$ characters.</li></ul><p>Both match the same number of characters.</p><p>Since Rule $1$ appears before Rule $2$, the lexer chooses $\\mathrm{INT}$.</p><p>Therefore, <strong>A is correct.</strong></p><p><br/><strong>B : </strong>Input<strong> $\\mathrm{integer}$</strong></p><p>At the start of the input:</p><ul><li>Rule $1$ matches the prefix $\\mathrm{int}$, which has length $3$.</li><li>Rule $2$ matches $\\mathrm{integer}$, which has length $7$.</li></ul><p>The longest match is selected regardless of the order of the rules.</p><p>The lexer therefore returns $\\mathrm{IDENT(\"integer\")}$</p><p>It does not return $\\mathrm{INT}$ followed by another token.</p><p>Therefore, <strong>B is correct.</strong></p><p><br/><strong>C : </strong>Input<strong> $\\mathrm{type}$</strong></p><p>The string $\\mathrm{type}$ matches:</p><ul><li>Rule $2$: $\\mathrm{[a-z]+}$</li><li>Rule $3$: $\\mathrm{type}$</li></ul><p>Both matches have length $4$.</p><p>Since Rule $2$ appears first, $\\mathrm{IDENT}$ wins.</p><p>The lexer returns $\\mathrm{IDENT(\"type\")}$</p><p>It does not return $\\mathrm{TYPE}$.</p><p>Therefore, <strong>C is incorrect.</strong></p><p><br/><strong>D : Ineffectual TYPE Rule</strong></p><p>An <strong>ineffectual rule</strong> is a rule that never wins token selection.</p><p>The string $\\mathrm{type}$ is the only string matched by the literal rule $\\mathrm{type}$.</p><p>However, $\\mathrm{[a-z]+}$ also matches that string and has higher priority.</p><p>Consequently, the $\\mathrm{TYPE}$ rule never gets selected.</p><p>Therefore, <strong>D is correct.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557055/go-classes-dpp-gate-cs-compiler-design-lexical-analysis\" target=\"_blank\">GATE Overflow #557055</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following flex-like specification. Parentheses are used to show the association of operations and are not part of the input alphabet.</p><p>$$\\begin{array}{lll} <br/>\\text{Rule }1: &amp; \\mathrm{aa*} &amp; \\{\\mathrm{return\\ Token1;}\\}\\\\<br/>\\text{Rule }2: &amp; \\mathrm{c(a|b)*}&amp; \\{\\mathrm{return\\ Token2;}\\}\\\\<br/>\\text{Rule }3: &amp; \\mathrm{ab*c}&amp; \\{\\mathrm{return\\ Token3;}\\}\\\\<br/>\\text{Rule }4: &amp; \\mathrm{caa*}&amp; \\{\\mathrm{return\\ Token4;}\\}\\\\<br/>\\text{Rule }5: &amp; \\mathrm{b*aa*(c|}\\varepsilon\\mathrm{)}&amp; \\{\\mathrm{return\\ Token5;}\\} \\end{array}$$</p><p>Can any rule be removed without changing the behavior of the lexical analyzer for any input string?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Rule $1$<br/></span>",
                "<span style=\"display: inline;\">Rule $2$<br/></span>",
                "<span style=\"display: inline;\">Rule $3$<br/></span>",
                "<span style=\"display: inline;\">Rule $4$<br/></span>",
                "<span style=\"display: inline;\">Rule $5$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"557054\"></a><div itemprop=\"text\"><p>A rule is <strong>redundant</strong> if removing it does not change the tokens selected by the scanner for any input.</p><p>Consider Rule $2$,</p><p>$R_2=\\mathrm{c(a|b)*}$</p><p>It matches the character $\\mathrm{c}$ followed by any sequence of $\\mathrm{a}$ and $\\mathrm{b}$.</p><p>For eg,</p><p>$\\mathrm{c},\\quad \\mathrm{ca},\\quad \\mathrm{caa},\\quad \\mathrm{cab},\\quad \\mathrm{caba},\\quad \\mathrm{caaa}$</p><p>Now consider Rule $4$:</p><p>$R_4=\\mathrm{caa*}$</p><p>It matches $\\mathrm{c}$ followed by one or more occurrences of $\\mathrm{a}$.</p><p>For eg,</p><p>$\\mathrm{ca},\\quad \\mathrm{caa},\\quad \\mathrm{caaa},\\quad \\mathrm{caaaa}$</p><p>Every string matched by Rule $4$ is also matched by Rule $2$.</p><p>Mathematically,</p><p>$L(R_4)\\subseteq L(R_2)$</p><p>However, language containment alone is not enough to conclude that a lexer rule can always be removed. We must also consider rule priority.</p><p>Here, Rule $2$ appears before Rule $4$.</p><p>Whenever both rules match the same longest prefix, Rule $2$ wins.</p><p>Consequently, Rule $4$ never gets selected by the lexer.</p><p>Removing Rule $4$ therefore does not change the resulting tokens.</p><p><strong>Lets analyze the options,</strong></p><ul><li><strong>A: Rule $\\mathbf1$ is Not redundant.</strong> For example, the input $\\mathrm{a}$ can be matched by Rule $1$, which takes priority over Rule $5$ for this input.<br/> </li><li><strong>B: Rule $\\mathbf2$ is Not redundant.</strong> The input $\\mathrm{c}$ is matched by Rule $2$.<br/> </li><li><strong>C: Rule $\\mathbf3$ is Not redundant.</strong> The input $\\mathrm{abc}$ can be matched by Rule $3$.<br/> </li><li><strong>D: Rule $\\mathbf4$ is Redundant.</strong> Every match is already covered by the higher-priority Rule $2$.<br/> </li><li><strong>E : Rule $\\mathbf5$ is Not redundant.</strong> For example, $\\mathrm{bba}$ can be matched by Rule $5$.</li></ul><p>Hence,</p><p><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557053/go-classes-dpp-gate-cs-compiler-design-lexical-analysis\" target=\"_blank\">GATE Overflow #557053</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the following tokens and their associated regular expressions, show what output is produced when this <strong>flex</strong> scanner is run over the following strings:</p><p>$$\\begin{array}{ll} <br/>\\mathrm{\\%\\%} &amp; \\\\<br/>\\mathrm{a*b} &amp; \\mathrm{printf(\"1\");}\\\\ <br/>\\mathrm{(a|b)*b} &amp; \\mathrm{printf(\"2\");}\\\\ <br/>\\mathrm{c*} &amp; \\mathrm{printf(\"3\");} <br/>\\end{array}$$</p><p>Determine the output when the scanner is run separately on each of these input strings:</p><p>Which option gives the correct outputs in the order (i), (ii), and (iii)?</p><p><strong>Given Details:</strong></p><ul><li>$\\mathrm{aaabccabbb}$</li><li>$\\mathrm{cbbbbac}$</li><li>$\\mathrm{cbabc}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{132}$, $\\mathrm{32a3}$, $\\mathrm{323}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{232}$, $\\mathrm{32a3}$, $\\mathrm{323}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{132}$, $\\mathrm{323}$, $\\mathrm{323}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{132}$, $\\mathrm{32a3}$, $\\mathrm{332}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557052\"></a><div itemprop=\"text\"><p>Flex uses two important rules when recognizing tokens:</p><ol><li>Select the rule matching the longest possible prefix of the remaining input.<br/> </li><li>If multiple rules match the same longest prefix, select the rule appearing first in the specification.<br/> </li></ol><p>In addition, when no explicit rule matches a character, the default Flex rule echoes that character to standard output, unless the default rule has been suppressed.</p><p><strong>(i) : $\\mathrm{aaabccabbb}$</strong></p><p>The string is partitioned into,</p><p>$\\mathrm{aaab}\\;|\\;\\mathrm{cc}\\;|\\;\\mathrm{abbb}$</p><p>$\\begin{array}{|c|c|c|} \\hline \\textbf{Lexeme} &amp; \\textbf{Matching Rule} &amp; \\textbf{Output}\\\\ \\hline \\mathrm{aaab} &amp; \\text{Rules }1\\text{ and }2 &amp; 1\\\\ \\hline \\mathrm{cc} &amp; \\text{Rule }3:\\ \\mathrm{c*} &amp; 3\\\\ \\hline \\mathrm{abbb} &amp; \\text{Rule }2:\\ \\mathrm{(a|b)*b} &amp; 2\\\\ \\hline \\end{array}$</p><p>For $\\mathrm{aaab}$, both the first and second rules match all $4$ characters. Since their match lengths are equal, the first rule has priority.</p><p>$\\therefore \\text{Output (i)}:\\ \\boxed{\\mathrm{132}}$<br/> </p><p><strong>(ii) : $\\mathrm{cbbbbac}$</strong></p><p>The string is partitioned into,</p><p>$\\mathrm{c}\\;|\\;\\mathrm{bbbb}\\;|\\;\\mathrm{a}\\;|\\;\\mathrm{c}$</p><p>$\\begin{array}{|c|c|c|} \\hline \\textbf{Lexeme} &amp; \\textbf{Matching Rule} &amp; \\textbf{Output}\\\\ \\hline \\mathrm{c} &amp; \\text{Rule }3 &amp; 3\\\\ \\hline \\mathrm{bbbb} &amp; \\text{Rule }2 &amp; 2\\\\ \\hline \\mathrm{a} &amp; \\text{Default Flex Rule} &amp; \\mathrm{a}\\\\ \\hline \\mathrm{c} &amp; \\text{Rule }3 &amp; 3\\\\ \\hline \\end{array}$</p><p>The single character $\\mathrm{a}$ is not matched by any of the three explicit rules. Consequently, the scanner's default rule echoes it.</p><p>$\\therefore \\text{Output (ii)}:\\ \\boxed{\\mathrm{32a3}}$</p><p><br/><strong>(iii): $\\mathrm{cbabc}$</strong></p><p>The string is partitioned into,</p><p>$\\mathrm{c}\\;|\\;\\mathrm{bab}\\;|\\;\\mathrm{c}$</p><p>The first $\\mathrm{c}$ matches Rule $3$ and prints $\\mathrm{3}$.</p><p>The substring $\\mathrm{bab}$ matches Rule $2$ because $\\mathrm{(a|b)*}$ can match $\\mathrm{ba}$ and the final $\\mathrm{b}$ completes the pattern.</p><p>The final $\\mathrm{c}$ matches Rule $3$.</p><p>$\\therefore \\text{Output (iii)}:\\ \\boxed{\\mathrm{323}}$</p><p> </p><p>The three outputs are, $\\boxed{\\mathrm{132},\\quad\\mathrm{32a3},\\quad\\mathrm{323}}$</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557049/go-classes-dpp-gate-cs-compiler-design-lexical-analysis\" target=\"_blank\">GATE Overflow #557049</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Compiler Design (Lexical Analysis & Compiler Basics - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The compiler supports integer, character, and Boolean types. Integer and character constants (literals) are represented in the usual decimal form, for example $1234$ (decimal) and '$X$', respectively.</p><p>Suppose the language is extended to allow hexadecimal and binary representations of integer literals, such as $012FH$ and $01101\\%$, respectively.</p><p>Assume that these are only alternative representations of existing integer values, not new data types.</p><p>Which of the following compiler phases would be affected by this extension?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Lexical Analysis<br/></span>",
                "<span style=\"display: inline;\">Syntax Analysis<br/></span>",
                "<span style=\"display: inline;\">Semantic Analysis<br/></span>",
                "<span style=\"display: inline;\">Code Generation</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556925\"></a><div itemprop=\"text\"><p><strong>A : Lexical Analysis (Correct)</strong></p><p>Lexical analysis is responsible for reading the raw characters of the source program and grouping them into valid tokens, such as $\\texttt{INTEGER_CONSTANT}$.</p><p>To recognize hexadecimal literals ending in $\\text{H}$ and binary literals ending in $\\%$, the lexical analyzer's token-recognition rules (regular expressions) must be updated.</p><p>For eg,</p><p>$1234$<br/>$012\\text{FH}$<br/>$01101\\%$</p><p>All three representations can be recognized as integer literals.</p><p>Under the assumed compiler design, the lexer also converts these recognized lexemes into their corresponding internal integer values.</p><p>For eg,</p><p>$\\mathrm{012FH}=1\\times16^2+2\\times16+15=303$</p><p>$\\mathrm{01101\\%}=1\\times2^3+1\\times2^2+1=13$</p><p>Therefore, the lexical analyzer must be modified to recognize and process the new literal formats.</p><p><strong>A is correct.</strong></p><p><br/><strong>B : Syntax Analysis (Incorrect)</strong></p><p>The syntax analyzer checks the grammatical arrangement of tokens rather than their original character representations.</p><p>Consider:</p><p>$\\text{x = 15;}$<br/>$\\text{x = 0FH;}$<br/>$\\text{x = 1111\\%;}$</p><p>In each case, the lexical analyzer can produce the same token category, $\\texttt{INTEGER_CONSTANT}$.</p><p>Since the grammatical structure of expressions and statements remains unchanged, the syntax analyzer does not require modification.</p><p><strong>B is incorrect.</strong></p><p><br/><strong>C: Semantic Analysis (Incorrect)</strong></p><p>Semantic analysis performs tasks such as type checking and verifying the compatibility of operands.</p><p>The question explicitly states that hexadecimal and binary literals are merely alternative representations of existing integer values, not new data types.</p><p>Therefore, all these literals continue to have the same integer type.</p><p>For example:</p><p>$\\text{int x = 15;}$<br/>$\\text{int y = 0FH;}$</p><p>Both assignments involve ordinary integer values.</p><p>Since the lexer is assumed to convert the literals into internal integer values, no additional semantic processing is required.</p><p><strong>C is incorrect.</strong></p><p><br/><strong>D: Code Generation (Incorrect)</strong></p><p>Code generation translates the intermediate representation into target machine instructions.</p><p>The target machine operates on internal numeric values rather than the original decimal, hexadecimal, or binary notation used in the source program.</p><p>Since the underlying integer type and its supported operations remain unchanged, the code generator does not need modification solely because new literal representations have been introduced.</p><p><strong>D is incorrect.</strong></p><p><br/>The extension changes how integer literals are recognized and converted, but not their grammatical role, semantic type, or generated machine instructions.</p><p>Therefore, under the assumption that the lexer performs literal-value conversion:</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556924/go-classes-dpp-gate-cs-compiler-design-compiler-phases\" target=\"_blank\">GATE Overflow #556924</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A compiler incorporates several phases, including lexical analysis, syntax analysis, semantic analysis, and code generation.</p><p>Which of the following correctly associates an error with the phase in which it may be detected?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">An unrecognized character in the source program may cause a lexical error.<br/></span>",
                "<span style=\"display: inline;\">Missing punctuation in a statement is necessarily a semantic error.<br/></span>",
                "<span style=\"display: inline;\">The use of an undeclared identifier may be detected during semantic analysis.<br/></span>",
                "<span style=\"display: inline;\">Exceeding the available code memory of a target virtual machine may be detected during code generation.</span>"
            ],
            "answer": [
                "A",
                "C",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"556922\"></a><div itemprop=\"text\"><p>Different compiler phases are responsible for identifying different categories of errors.</p><p>Now, lets examine each statement.</p><p><strong>A : An unrecognized character may cause a lexical error.</strong></p><p>The lexical analyzer recognizes character sequences according to the token patterns of the source language.</p><p>Suppose a character appears that does not belong to any recognized token pattern.</p><p>For example, consider a language in which $\\text{@}$ is not a valid token:</p><p>$\\text{a = b @ c;}$</p><p>The lexical analyzer may fail to recognize $\\text{@}$ and report a lexical error.</p><p>Therefore, <strong>A is correct.</strong><br/> </p><p><strong>B : Missing punctuation is necessarily a semantic error.</strong></p><p>Consider,</p><p>$\\texttt{int a = 10}$<br/>$\\texttt{int b = 20;}$</p><p>The first declaration is missing a semicolon.</p><p>Although the individual lexemes can be recognized, the resulting token sequence does not satisfy the expected grammar.</p><p>This is generally detected during <strong>syntax analysis</strong>.</p><p>Therefore, <strong>B is incorrect.</strong></p><p><br/><strong>C : An undeclared identifier may be detected during semantic analysis.</strong></p><p>Consider,</p><p>$\\texttt{int a = 10;}$<br/>$\\texttt{b = a + 5;}$</p><p>Suppose $\\texttt{b}$ has not been declared.</p><p>The assignment may have a valid grammatical structure, but the identifier $\\texttt{b}$ has no valid declaration in the relevant scope.</p><p>The semantic analyzer uses identifier and symbol-table information to detect this problem.</p><p>Therefore, <strong>C is correct.</strong></p><p><br/><strong>D : Code memory limits may be detected during code generation.</strong></p><p>Some compilers generate code for target machines or virtual machines with restricted memory.</p><p>If the generated program exceeds an imposed target-code size limit, the code generator may report an error.</p><p>Therefore, <strong>D is correct.</strong></p><p><br/><strong>Summary :</strong></p><p>$\\begin{array}{|l|l|} \\hline \\textbf{Error} &amp; \\textbf{Relevant Phase}\\\\ \\hline \\text{Unrecognized character} &amp; \\text{Lexical Analysis}\\\\ \\hline \\text{Missing semicolon} &amp; \\text{Syntax Analysis}\\\\ \\hline \\text{Undeclared identifier} &amp; \\text{Semantic Analysis}\\\\ \\hline \\text{Target code exceeds available memory} &amp; \\text{Code Generation}\\\\ \\hline \\end{array}$</p><p><br/><strong>Answer : A,C,D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556920/go-classes-dpp-gate-cs-compiler-design-compiler-phases\" target=\"_blank\">GATE Overflow #556920</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find out how many lexemes are there in the below code. How many tokens will be generated for the below code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int a; a = 8; ab[10] = a + ab[2];\">int a; a = 8; ab[10] = a + ab[2];</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$19$ lexemes and $19$ tokens<br/></span>",
                "<span style=\"display: inline;\">$19$ lexemes and $11$ tokens<br/></span>",
                "<span style=\"display: inline;\">$11$ lexemes and $19$ tokens<br/></span>",
                "<span style=\"display: inline;\">$20$ lexemes and $20$ tokens</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556917\"></a><div itemprop=\"text\"><p>A lexeme is a sequence of characters in the source program that matches the pattern of a token.</p><p>A token is the lexical category assigned to a recognized lexeme, often accompanied by an attribute value.</p><p>We must count every occurrence, not merely the number of distinct token categories.</p><p><strong>Statement $\\mathbf1$</strong></p><p>$\\texttt{int a;}$ </p><p>$\\begin{array}{|c|c|} \\hline \\textbf{Lexeme} &amp; \\textbf{Token Category}\\\\ \\hline \\mathrm{int} &amp; \\text{Keyword}\\\\ \\hline \\mathrm{a} &amp; \\text{Identifier}\\\\ \\hline \\mathrm{;} &amp; \\text{Delimiter}\\\\ \\hline \\end{array}$ </p><p>Number of lexemes $=3$</p><p><strong>Statement $\\mathbf{2}$</strong></p><p>$\\texttt{a = 8;}$ </p><p>$\\begin{array}{|c|c|} \\hline \\textbf{Lexeme} &amp; \\textbf{Token Category}\\\\ \\hline \\mathrm{a} &amp; \\text{Identifier}\\\\ \\hline \\mathrm{=} &amp; \\text{Assignment Operator}\\\\ \\hline \\mathrm{8} &amp; \\text{Integer Literal}\\\\ \\hline \\mathrm{;} &amp; \\text{Delimiter}\\\\ \\hline \\end{array}$ </p><p>Number of lexemes $=4$</p><p><strong>Statement $\\mathbf{3}$</strong></p><p>$\\texttt{ab[10] = a + ab[2];}$</p><p>The lexeme sequence is:</p><p>$\\texttt{ab | [ | 10 | ] | = | a | + | ab | [ | 2 | ] | ;}$</p><p>Number of lexemes $=12$</p><p>Therefore, the total number of lexeme occurrences is $:3+4+12=\\boxed{19}$</p><p>Each recognized lexeme produces <strong>one token occurrence</strong> in this example.</p><p>$\\boxed{\\text{Number of tokens}=19}$</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556915/go-classes-dpp-gate-cs-compiler-design-tokens-and-lexemes\" target=\"_blank\">GATE Overflow #556915</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A typical compiler converts a source program into assembly language through several phases, with an intermediate representation passed from one phase to the next.</p><p>Which of the following correctly describes the sequence of representations produced during compilation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Character Stream $\\rightarrow$ Token Stream $\\rightarrow$ Parse Tree $\\rightarrow$ Intermediate Representation $\\rightarrow$ Target Assembly Code<br/></span>",
                "<span style=\"display: inline;\">Character Stream $\\rightarrow$ Parse Tree $\\rightarrow$ Token Stream $\\rightarrow$ Intermediate Representation $\\rightarrow$ Target Assembly Code<br/></span>",
                "<span style=\"display: inline;\">Token Stream $\\rightarrow$ Character Stream $\\rightarrow$ Parse Tree $\\rightarrow$ Target Assembly Code $\\rightarrow$ Intermediate Representation<br/></span>",
                "<span style=\"display: inline;\">Character Stream $\\rightarrow$ Token Stream $\\rightarrow$ Intermediate Representation $\\rightarrow$ Parse Tree $\\rightarrow$ Target Assembly Code</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556912\"></a><div itemprop=\"text\">1stly source code is in the high level langauge and for compiler there are very few known so called words technically tokens as let say int a=10 ; but in place of 10 it could be anything so we classify it as literal similarly in place of a it can be b or any name like temp , var , raju etc so its classify as identifier and so on<br/> so 1stly source code is in character stream we convert it into token stream then do syntax analysis checking is there any rule in rule book that allows the code or not thats done via parse tree then after valid rule we check its meaningful or not that require semantic analysis parse tree is used with annotation and after that option stage intermediate representation happens which can be helpful for optimization of the code and after that finally change to assembly code <br/> <br/> so , option A perfectly matches the sequence so A is the correct answer</div><br><br><small>Source: <a href=\"https://gateoverflow.in/556911/go-classes-dpp-gate-cs-compiler-design-compiler-phases\" target=\"_blank\">GATE Overflow #556911</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is not a part of the Syntax Analysis phase of a compiler?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Parse Tree<br/></span>",
                "<span style=\"display: inline;\">Context-Free Grammar<br/></span>",
                "<span style=\"display: inline;\">Parsing<br/></span>",
                "<span style=\"display: inline;\">Lexeme</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"556749\"></a><div itemprop=\"text\"><p><strong>Syntax Analysis</strong>, also called <strong>parsing</strong>, is the compiler phase responsible for checking whether the sequence of tokens generated by the lexical analyzer conforms to the grammatical rules of the programming language.</p><p>Consider the statement:</p><p>$\\mathrm{a=b+5;}$</p><p>During lexical analysis, the source program is divided into tokens corresponding to lexemes such as $\\mathrm{a}$, $=$, $\\mathrm{b}$, $+$, $5$, and $\\mathrm{;}$.</p><p>The syntax analyzer subsequently checks whether these tokens form a grammatically valid statement.</p><p><br/><strong>A : Parse Tree</strong></p><p>A parse tree represents the grammatical structure of a program according to the production rules of a grammar.</p><p>It is generated during syntax analysis.</p><p>Therefore, <strong>A is incorrect.</strong></p><p><br/><strong>B : Context-Free Grammar</strong></p><p>A CFG specifies the syntactic rules of a programming language.</p><p>For eg,</p><p>$E\\rightarrow E+T\\mid T$</p><p>$T\\rightarrow \\mathrm{id}\\mid\\mathrm{num}$</p><p>The syntax analyzer uses these grammar rules to determine whether a sequence of tokens forms a valid expression.</p><p>Therefore, <strong>B is incorrect.</strong></p><p><br/><strong>C : Parsing</strong></p><p>Parsing is the process performed during syntax analysis.</p><p>It verifies the grammatical structure of the token sequence and may construct a parse tree.</p><p>Therefore, <strong>C is incorrect.</strong></p><p><br/><strong>D : Lexeme</strong></p><p>A lexeme is a sequence of characters in the source program that matches a token pattern.</p><p>For eg, in $\\mathrm{int\\ count=10;}$</p><p>$\\mathrm{int}$, $\\mathrm{count}$, $=$, $10$, and $\\mathrm{;}$ are lexemes.</p><p>Identifying lexemes is primarily the responsibility of <strong>lexical analysis</strong>, not syntax analysis.</p><p>Therefore, <strong>D is correct.</strong></p><p><br/><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556748/go-classes-dpp-gate-cs-compiler-design-syntax-analysis\" target=\"_blank\">GATE Overflow #556748</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of these is not true about Symbol Table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All the labels of the instructions are symbols<br/></span>",
                "<span style=\"display: inline;\">Table has entry for symbol name address value<br/></span>",
                "<span style=\"display: inline;\">Perform the processing of the assembler directives<br/></span>",
                "<span style=\"display: inline;\">Created during pass $1$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"556736\"></a><div itemprop=\"text\"><p>A symbol table stores information about symbols appearing in a program.</p><p>In the context of a two-pass assembler, it commonly stores labels and their corresponding addresses.</p><p>Consider the following assembly program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"START: MOV R1, R2 ADD R1, R3 LOOP: SUB R1, R4 JMP LOOP\">START: MOV R1, R2 ADD R1, R3 LOOP: SUB R1, R4 JMP LOOP</pre><p>Here, $\\mathrm{START}$ and $\\mathrm{LOOP}$ are labels that identify instruction locations.<br/> </p><p><strong>A : All the labels of the instructions are symbols</strong></p><p>Labels such as $\\mathrm{START}$ and $\\mathrm{LOOP}$ are symbolic names representing locations in the program.</p><p>Therefore,<strong> A is true.</strong></p><p><br/><strong>B : Table has entry for symbol name address value</strong></p><p>An assembler's symbol table can store symbol names and their associated addresses or values.</p><p>For example:</p><p>$$\\begin{array}{|c|c|} \\hline \\textbf{Symbol} &amp; \\textbf{Address}\\\\ \\hline \\mathrm{START} &amp; 100\\\\ \\hline \\mathrm{LOOP} &amp; 108\\\\ \\hline \\end{array}$$</p><p>Therefore, <strong>B is true.</strong></p><p><br/><strong>C : Perform the processing of the assembler directives</strong></p><p>Assembler directives provide instructions to the assembler itself.</p><p>For eg,</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"ORG 100 END\">ORG 100 END</pre><p>The assembler processes these directives.</p><p>The symbol table is a <strong>data structure</strong> used to store and retrieve symbol-related information. It does not independently execute or process assembler directives.</p><p>Therefore, <strong>C is false.</strong></p><p><br/><strong>D : Created during pass $\\mathbf{1}$</strong></p><p>In a conventional two-pass assembler:</p><ul><li><strong>Pass $\\mathbf{1}:$</strong> Determines addresses and creates the symbol table.<br/> </li><li><strong>Pass $\\mathbf{2}:$</strong> Uses the symbol table to resolve references and generate machine code.</li></ul><p>Therefore, <strong>D is true.</strong></p><p><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556735/go-classes-dpp-gate-cs-compiler-design-symbol-table\" target=\"_blank\">GATE Overflow #556735</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which phase of compiler does NOT use symbol table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Code generation<br/></span>",
                "<span style=\"display: inline;\">Syntax Analysis<br/></span>",
                "<span style=\"display: inline;\">Lexical Analysis<br/></span>",
                "<span style=\"display: inline;\">None of the other options</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"556731\"></a><div itemprop=\"text\"><p>A symbol table is a data structure maintained by a compiler to store information about identifiers, such as their names, types, scopes, and storage locations.</p><p>A symbol table can be used across several compilation phases.</p><p><strong>A : Code Generation</strong></p><p>During code generation, the compiler may use symbol-table information to determine storage locations, addresses, and other properties of variables and functions.</p><p>Therefore, code generation can use the symbol table.</p><p><strong>B : Syntax Analysis</strong></p><p>During syntax analysis, the compiler checks the grammatical structure of the token sequence.</p><p>Depending on the compiler implementation, symbol-table entries may be created or accessed during parsing, particularly when processing declarations and scopes.</p><p>Therefore, syntax analysis can use the symbol table.</p><p><strong>C : Lexical Analysis</strong></p><p>During lexical analysis, the source program is divided into tokens.</p><p>The lexical analyzer may interact with the symbol table while processing identifiers, for example, by entering new identifiers or retrieving existing references.</p><p>Therefore, lexical analysis can also use the symbol table.</p><p>So, all three phases can use a symbol table.</p><p><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556730/go-classes-dpp-gate-cs-compiler-design-symbol-table\" target=\"_blank\">GATE Overflow #556730</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer is designed for a new language with the following rules for token generation:</p><p>The scanner follows the <strong>Longest Match Rule</strong> (Maximal Munch) and breaks ties using <strong>Rule Priority</strong> (the order listed above).</p><p>Consider the input string$: \\verb|ifffff++|$<br/><br/>Which of the following statement(s) is/are TRUE regarding the tokens generated?</p><p><strong>Given Details:</strong></p><ul><li>$\\mathrm{KEYWORD1}: \\verb|if|$</li><li>$\\mathrm{KEYWORD2}: \\verb|iff|$</li><li>$\\mathrm{IDENTIFIER}: \\verb|[a-z]+|$ (One or more lowercase letters)</li><li>$\\mathrm{OPERATOR}: \\verb|+| , \\verb|++|$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SCANNER GENERATES A TOTAL OF $3$ TOKENS.</span>",
                "<span style=\"display: inline;\">THE FIRST TOKEN GENERATED IS $\\verb|iff| ~\\mathrm{(KEYWORD2)}$.</span>",
                "<span style=\"display: inline;\">THE STRING IS PRE-PROCESSED INTO $\\verb|iff|$, $\\verb|ffff|$, AND $\\verb|++|$.</span>",
                "<span style=\"display: inline;\">IF THE INPUT WAS $\\verb|if+|$, THE SCANNER WOULD GENERATE $\\verb|if| ~\\mathrm{(KEYWORD1)}$ AND $\\verb|+| ~\\mathrm{(OPERATOR)}$.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"520580\"></a><div itemprop=\"text\"><p>Correct answer is D.</p><ul data-end=\"523\" data-start=\"265\"><li data-end=\"450\" data-start=\"265\"><p data-end=\"288\" data-start=\"267\">From the start (<code data-end=\"286\" data-start=\"283\">i</code>):</p><ul data-end=\"450\" data-start=\"291\"><li data-end=\"310\" data-start=\"291\"><p data-end=\"310\" data-start=\"293\"><code data-end=\"297\" data-start=\"293\">if</code> → length 2</p></li><li data-end=\"333\" data-start=\"313\"><p data-end=\"333\" data-start=\"315\"><code data-end=\"320\" data-start=\"315\">iff</code> → length 3</p></li><li data-end=\"399\" data-start=\"336\"><p data-end=\"399\" data-start=\"338\"><code data-end=\"346\" data-start=\"338\">[a–z]+</code> → matches the whole letter run <code data-end=\"386\" data-start=\"378\">ifffff</code> → length 6</p></li><li data-end=\"450\" data-start=\"402\"><p data-end=\"450\" data-start=\"404\">Longest is length 6 ⇒ <strong data-end=\"450\" data-start=\"426\">IDENTIFIER(\"ifffff\")</strong></p></li></ul></li><li data-end=\"523\" data-start=\"451\"><p data-end=\"468\" data-start=\"453\">Remaining: <code data-end=\"468\" data-start=\"464\">++</code></p><ul data-end=\"523\" data-start=\"471\"><li data-end=\"523\" data-start=\"471\"><p data-end=\"523\" data-start=\"473\"><code data-end=\"477\" data-start=\"473\">++</code> vs <code data-end=\"484\" data-start=\"481\">+</code> ⇒ longest is <code data-end=\"502\" data-start=\"498\">++</code> ⇒ <strong data-end=\"523\" data-start=\"505\">OPERATOR(\"++\")</strong></p></li></ul></li></ul><p data-end=\"539\" data-start=\"525\">So tokens are:</p><ol data-end=\"605\" data-start=\"540\"><li data-end=\"564\" data-start=\"540\"><p data-end=\"564\" data-start=\"543\">IDENTIFIER <code data-end=\"562\" data-start=\"554\">ifffff</code></p></li><li data-end=\"605\" data-start=\"565\"><p data-end=\"605\" data-start=\"568\">OPERATOR <code data-end=\"581\" data-start=\"577\">++</code></p></li></ol><p data-end=\"605\" data-start=\"568\">Total = <strong data-end=\"604\" data-start=\"592\">2 tokens</strong>.</p><p data-end=\"883\" data-start=\"631\"><strong data-end=\"637\" data-start=\"631\">A.</strong> 3 tokens → False (there are 2).<br data-end=\"674\" data-start=\"671\"/><strong data-end=\"680\" data-start=\"674\">B.</strong> First token is <code data-end=\"701\" data-start=\"696\">iff</code> → False (it’s an identifier <code data-end=\"740\" data-start=\"732\">ifffff</code>).<br data-end=\"745\" data-start=\"742\"/><strong data-end=\"751\" data-start=\"745\">C.</strong> Pre-processed into <code data-end=\"776\" data-start=\"771\">iff</code>, <code data-end=\"784\" data-start=\"778\">ffff</code>, <code data-end=\"790\" data-start=\"786\">++</code> → False (lexer doesn’t pre-split; maximal munch gives <code data-end=\"855\" data-start=\"847\">ifffff</code>).<br data-end=\"860\" data-start=\"857\"/><strong data-end=\"866\" data-is-only-node=\"\" data-start=\"860\">D.</strong> For input <code data-end=\"882\" data-start=\"877\">if+</code>:</p><ul data-end=\"1019\" data-start=\"884\"><li data-end=\"946\" data-start=\"884\"><p data-end=\"946\" data-start=\"886\"><code data-end=\"890\" data-start=\"886\">if</code> matches KEYWORD1 and IDENTIFIER with same length (2).</p></li><li data-end=\"982\" data-start=\"947\"><p data-end=\"982\" data-start=\"949\">Tie → rule priority ⇒ KEYWORD1.</p></li><li data-end=\"1019\" data-start=\"983\"><p data-end=\"1019\" data-start=\"985\">Then <code data-end=\"993\" data-start=\"990\">+</code> ⇒ OPERATOR.</p></li></ul><p data-end=\"1019\" data-start=\"985\">Hence, D is true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520538/go-classes-dpp-compiler-la\" target=\"_blank\">GATE Overflow #520538</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statement(s) is/are TRUE regarding Lexical Analysis and Regular Expressions?</p><div> </div><div> </div><p><strong>Given Details:</strong></p><ul><li>The number of states in a minimal Deterministic Finite Automaton (DFA) for the language $L=\\left\\{w \\in\\{a, b\\}^* \\mid\\right.~w \\text{contains 'aba' as a substring\\}}$ is $4$.</li><li>If a lexical analyzer is implemented using a Non-deterministic Finite Automaton (NFA), it will always be more space-efficient than a DFA implementation, but might be slower in terms of time complexity.</li><li>The language $L=\\left\\{a^n b^n \\mid n \\geq 0\\right\\}$ cannot be recognized by a lexical analyzer.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I, II, AND III</span>",
                "<span style=\"display: inline;\">I AND III ONLY</span>",
                "<span style=\"display: inline;\">II AND III ONLY</span>",
                "<span style=\"display: inline;\">I AND II ONLY</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"520527\"></a><div itemprop=\"text\"><p><strong>Statement I (TRUE):</strong> To recognize a substring of length $n$ (like \"aba\", where $n=3$ ), a minimal DFA generally requires $n+1$ states. For \"$aba$\", the states represent$: (1)$ Initial/nothing, $(2)$ '$a$' seen, $(3) $'$ab$' seen, and $(4)$ '$aba$' seen (final state).</p><p><strong>Statement II (FALSE):</strong> While an NFA can be more space-efficient (fewer states) than a DFA, it is not \"always\" the case for every implementation. Furthermore, lexical analyzers in practice (like Flex) almost always convert the NFA to a DFA to ensure $O(1)$ time complexity per character, prioritizing speed over theoretical space savings.</p><p><strong>Statement III (TRUE):</strong> The language $L=\\left\\{a^n b^n \\mid n \\geq 0\\right\\}$ is a <strong>Context-Free Language</strong> that is not regular. Since lexical analyzers are based on Finite Automata (which have no memory/count mechanism), they cannot recognize languages that require matching or counting, such as $a^n b^n$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520526/go-classes-dpp-compiler-la\" target=\"_blank\">GATE Overflow #520526</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer for a specific language identifies tokens using the following regular expressions:<br/>$$<br/>\\begin{aligned}<br/>&amp; L_1: a(a \\mid b)^* \\\\<br/>&amp; L_2: a b(a \\mid b)^* \\\\<br/>&amp; L_3: a b b(a \\mid b)^*<br/>\\end{aligned}<br/>$$<br/>If the input string is '$abbab$', which token(s) will be identified based on the principle of maximum prefix matching (longest match rule)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">NONE OF THE ABOVE<br/></span>",
                "<span style=\"display: inline;\">ONLY $L3$<br/></span>",
                "<span style=\"display: inline;\">ONLY $L1$<br/></span>",
                "<span style=\"display: inline;\">$L1, L2,$ AND $L3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526626\"></a><div itemprop=\"text\">note: priority based on maximum matching prefix <br/> not priority based on positions <br/> so largest prefix matches is l3 hence answer will be B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/519236/go-classes-dpp-compiler-la\" target=\"_blank\">GATE Overflow #519236</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Compiler Design (Lexical Analysis & Compiler Basics - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 3",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following regular expression over the alphabet $\\{a, b\\}$ used for a lexical analyzer token definition:<br/>$$<br/>R=(a+b)^*(a a+b b)(a+b)^*<br/>$$<br/>Which of the following describes the language $L(R)$ and the properties of its corresponding Minimal Deterministic Finite Automata (MDFA)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE LANGUAGE CONSISTS OF ALL STRINGS CONTAINING AT LEAST ONE PAIR OF CONSECUTIVE IDENTICAL SYMBOLS, AND THE MDFA HAS $3$ STATES.<br/></span>",
                "<span style=\"display: inline;\">THE LANGUAGE CONSISTS OF ALL STRINGS ENDING WITH $aa$ OR $bb$, AND THE MDFA HAS $4$ STATES.<br/></span>",
                "<span style=\"display: inline;\">THE LANGUAGE CONSISTS OF ALL STRINGS CONTAINING AT LEAST ONE PAIR OF CONSECUTIVE IDENTICAL SYMBOLS, AND THE MDFA HAS $4$ STATES.<br/></span>",
                "<span style=\"display: inline;\">THE LANGUAGE CONSISTS OF ALL STRINGS WHERE EVERY $a$ IS FOLLOWED BY ANOTHER $a$, AND THE MDFA HAS $2$ STATES.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"518652\"></a><div itemprop=\"text\">THE LANGUAGE CONSISTS OF ALL STRINGS CONTAINING AT LEAST ONE PAIR OF CONSECUTIVE IDENTICAL SYMBOLS, AND THE MDFA HAS $4$ STATES.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518649/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #518649</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following lexical specification for a scanner:</p><p>The scanner follows the Longest Match rule. In case of a tie in length, the token defined first in the specification takes priority. How many tokens will be generated for the input string \"$\\verb|if20if|$\"?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{KEYWORD\\_IF: \\verb|if|}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{ID: [a-z][0-9]*}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{NUM: [0-9]+}$<br/></span>"
            ],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"517988\"></a><div itemprop=\"text\">Since $[a-z][0-9]^*$ allows only one letter followed by digits, $\\texttt{if20}$ is not an $\\texttt{ID}$.<br/> <br/> Hence, $\\texttt{if20if} \\Rightarrow \\texttt{if} \\;|\\; \\texttt{20} \\;|\\; \\texttt{if}$<br/> <br/> So, the number of tokens generated is $\\boxed{3}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/517984/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #517984</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following regular expression over the alphabet $\\Sigma=\\{a, b\\}$ that represents a specific class of tokens in a new programming language:<br/>$$<br/>r=(a+b)^* a b b<br/>$$<br/>A lexical analyzer uses a Minimal Deterministic Finite Automaton (DFA) to recognize this pattern. If the DFA is constructed using the standard powerset construction from an NFA, how many states will the <strong>Minimal DFA </strong>contain?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"529475\"></a><div itemprop=\"text\"><p> </p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7416920683109887720\"/></p><p>Answer : <b>4 States</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/515929/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #515929</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a language that allows identifiers to start with a digit if they contain at least one letter. How would this impact the design of the Lexical Analyzer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">IT WOULD SIMPLIFY THE DFA BY MERGING CONSTANTS AND IDENTIFIERS<br/></span>",
                "<span style=\"display: inline;\">IT WOULD HAVE NO IMPACT ON THE DFA STRUCTURE<br/></span>",
                "<span style=\"display: inline;\">MIN DFA WILL REQUIRE $3$ STATES FOR THIS PURPOSE<br/></span>",
                "<span style=\"display: inline;\">THE LEXICAL ANALYZER WOULD BE UNABLE TO PROCESS SUCH A LANGUAGE</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"513579\"></a><div itemprop=\"text\">Option C is correct.<br/> <br/> Min DFA will require $3$ states.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513578/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #513578</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer uses the following patterns to recognize three tokens $T_1, T_2$, and $T_3$ over the alphabet $\\{x, y, z\\}$.</p><p>$$<br/>\\begin{aligned}<br/>&amp; T_1: x ?(y \\mid z)^* y \\\\<br/>&amp; T_2: y ?(x \\mid z)^* x \\\\<br/>&amp; T_3: z^{+}(x \\mid y) ?<br/>\\end{aligned}<br/>$$</p><p>$y?$ means $0$ or $1$ occurrence of $y$.<br/><br/>The analyzer outputs the token that matches the <strong>longest possible prefix.</strong> If there is a tie in length, it prioritizes the token with the lowest index $($e.g., $T_1$ over $T_2)$.</p><p>If the string $zxxyzyx$ is processed by the analyzer, which one of the following is the sequence of tokens it outputs?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T3,~T2,~T1$<br/></span>",
                "<span style=\"display: inline;\">$T2, ~T1, ~T2$<br/></span>",
                "<span style=\"display: inline;\">$T2, ~T1, ~T3$<br/></span>",
                "<span style=\"display: inline;\">$T1,~T2,~T3$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"513051\"></a><div itemprop=\"text\">Using longext prefix rule, $zxx$ is matches with $T2, ~yzy$ matches with $T1$ and $x$ with $T2$ hence $B$ is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513050/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #513050</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following rule: an identifier must start with a digit and can be followed by any number of letters or digits. What is the correct regular expression?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">letter (letter $\\mid$ digit)$^{*}$<br/></span>",
                "<span style=\"display: inline;\">(digit $\\mid$ letter)$^{*}$ digit<br/></span>",
                "<span style=\"display: inline;\">digit (digit $\\mid$ letter)$^{*}$<br/></span>",
                "<span style=\"display: inline;\">digit$^{+}$ letter$^{*}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"511141\"></a><div itemprop=\"text\">Correct ans- option C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/511112/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #511112</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following snippet of a specialized programming language:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">printf(\"Result: %d\\n\", x+++--y); // Process result /* Update count count = count * 2; */</pre><p>the number of tokens in the code is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"509728\"></a><div itemprop=\"text\"><ol><li><strong>printf</strong> (Identifier)<br/> </li><li><strong>( </strong>(Separator)<br/> </li><li><strong>\"Result:%d\\n\"</strong> (String Literal - treated as one single token)<br/> </li><li><strong>, </strong>(Separator)<br/> </li><li><strong>x </strong>(Identifier)<br/> </li><li><strong>++</strong> (Increment Operator-Maximal Munch takes $\\verb|++|$ over $\\verb|+|$)<br/> </li><li><strong>+</strong> (Addition Operator)<br/> </li><li><strong>--</strong> (Decrement Operator - Maximal Munch takes $\\verb|--|$ over $\\verb|-|$ )<br/> </li><li><strong>y</strong> (Identifier)<br/> </li><li><strong>)</strong> (Separator)<br/> </li><li><strong>;</strong> (Separator)<br/> </li></ol><p><strong>Excluded Elements:</strong></p><ul><li>$\\verb|// Process result|$ (Single-line comment - Ignored)<br/> </li><li>$\\verb|/* Update count ... */|$ (Multi-line comment - Ignored)<br/> </li><li>All spaces between operators and identifiers.<br/> </li></ul><p><strong>Total Token Count</strong>$: \\mathbf{11}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/509724/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #509724</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer recognizes the following set of tokens defined by regular expressions:</p><p>Given the input string \"aaaba\", determine how many tokens will be generated using the Maximal Munch (Longest Prefix Match) rule.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Token $1\\left(T_1\\right)$ : $a$<br/></span>",
                "<span style=\"display: inline;\">Token $2\\left(T_2\\right)$ : $a a$<br/></span>",
                "<span style=\"display: inline;\">Token 3 ( $T_3$ ): $a^* b$ (zero or more 'a's followed by a single ' b ')<br/></span>",
                "<span style=\"display: inline;\">Token $4\\left(T_4\\right)$ : $b a$</span>"
            ],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"508157\"></a><div itemprop=\"text\">T3 T1 will be generated<br/> <br/> Hence the answer is 2</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508155/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #508155</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following snippet of code in a C-like language:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">if(x_val &gt;= 20.5) count = count + 1;</pre><p><br/>Assuming the standard lexical rules (where keywords, identifiers, operators, and constants are distinct tokens), how many tokens are generated by the lexical analyzer for this statement?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "20.5",
            "solution": "<div class=\"solution-content\"><a name=\"508553\"></a><div itemprop=\"text\"><ol><li>if</li><li>(</li><li>x_val</li><li>&gt;=</li><li>20.5</li><li>)</li><li>count</li><li>=</li><li>count</li><li>+</li><li>1</li><li>;</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/508154/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #508154</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program fragment processed by a compiler that follows the standard phases of compilation. Focus only on <strong>lexical analysis (token generation).</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() { int x = 10; float y = x+++--x; return 0; }</pre><p><br/>Which of the following statements are <strong>TRUE</strong> regarding <strong>token generation</strong> for the expression $\\verb|x+++--x|$ ?<br/><br/><strong>(Select all that apply)</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The lexer generates the token sequence: $\\verb|ID(x) ++ + -- ID(x)|$<br/></span>",
                "<span style=\"display: inline;\">The lexer generates the token sequence: $\\verb|ID(x) + ++ -- ID(x)|$<br/></span>",
                "<span style=\"display: inline;\">The lexer treats $\\verb|+++|$ as a single token.<br/></span>",
                "<span style=\"display: inline;\">The lexer treats $\\verb|--|$ as a single token.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507607\"></a><div itemprop=\"text\"><p>Correct Answer : <strong>A and D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507606/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #507606</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Compiler Design (Lexical Analysis & Compiler Basics - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 4",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following expression:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int x = 5, y = 2; int z = x+++y; /* Line 2 */</pre><p><br/>How does the Lexical Analyzer generate tokens for the expression $\\verb|x+++y|$ in Line $2$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">TOKENS: [ID:x], [OP:+], [OP:+], [OP:+], [ID:y]<br/></span>",
                "<span style=\"display: inline;\">TOKENS: [ID:x], [OP:++], [OP:+], [ID:y]<br/></span>",
                "<span style=\"display: inline;\">TOKENS: [ID:x], [OP:+], [OP:++], [ID:y]<br/></span>",
                "<span style=\"display: inline;\">LEXICAL ERROR: UNKNOWN OPERATOR '+++'</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"507602\"></a><div itemprop=\"text\">Correct Answer : B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/507601/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #507601</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is typically <strong>NOT</strong> a task performed by the compiler during the token generation phase?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">IDENTIFYING KEYWORDS AND IDENTIFIERS<br/></span>",
                "<span style=\"display: inline;\">CHECKING IF AN EXPRESSION HAS BALANCED PARENTHESES<br/></span>",
                "<span style=\"display: inline;\">ENTERING IDENTIFIERS INTO THE SYMBOL TABLE<br/></span>",
                "<span style=\"display: inline;\">STRIPPING OUT COMMENTS AND WHITESPACE</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"507600\"></a><div itemprop=\"text\">Correct Answer : B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/507599/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #507599</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following snippet of C code</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() { /* Line 1 */ int a = 5, b = 10; /* Line 2 */ if (a &lt; b) then { /* Line 3 */ a = a + 1; /* Line 4 */ } }</pre><p><br/>Identify the compiler's primary response during the compilation process:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">NO COMPILATION ERROR<br/></span>",
                "<span style=\"display: inline;\">A LEXICAL ERROR<br/></span>",
                "<span style=\"display: inline;\">A SYNTACTIC ERROR<br/></span>",
                "<span style=\"display: inline;\">A SEMANTIC ERROR</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"507598\"></a><div itemprop=\"text\"><p><strong>LEXICAL ANALYSIS:</strong> The scanner looks at the word $\\verb|then|$. In many languages (like Pascal or Basic), $\\verb|then|$ is a valid keyword. In C, the scanner simply sees the characters $\\verb|t-h-e-n|$ and identifies them as a valid <strong>identifier</strong> (like a variable name). Since it is a valid sequence of characters, there is <strong>no Lexical Error.</strong></p><p><strong>Syntax ANALYSIS</strong>: $\\verb|if(a &lt; b) then }|$ is <strong>not</strong> a valid syntax<br/><br/>Either $\\verb|{ }|$ should come immediately after if or there should be semicolon after then</p><p>Hence it will <strong>generate syntactic error</strong><br/><br/><strong>Correct option: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507597/go-classes-dpp-compiler-compilation-phases\" target=\"_blank\">GATE Overflow #507597</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following snippet of C code</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() { /* Line 1 */ int x = 10, y = 5; /* Line 2 */ int result; /* Line 3 */ reslt = x + y; /* Line 4 */ }</pre><p><br/>Identify the compiler's primary response during the compilation process:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">NO COMPILATION ERROR<br/></span>",
                "<span style=\"display: inline;\">A LEXICAL ERROR<br/></span>",
                "<span style=\"display: inline;\">A SYNTACTIC ERROR<br/></span>",
                "<span style=\"display: inline;\">A SEMANTIC ERROR</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"507595\"></a><div itemprop=\"text\"><p><strong>LEXICAL ANALYSIS:</strong> The scanner sees $\\verb|reslt|$ and identifies it as a valid <strong>identifier</strong> (a string of characters starting with a letter). It does not care if the variable was declared yet. Therefore, there is no lexical error.</p><p><strong>SYNTACTIC ANALYSIS:</strong> The parser checks the structure. It sees $\\verb|identifier = identifier + identifier;|$ . This follows the correct grammar for an assignment statement in C. Therefore, there is no syntax error.</p><p><strong>SEMANTIC ANALYSIS:</strong> This is where the compiler checks the <strong>Symbol Table</strong>. It looks for the declaration of $\\verb|reslt|$. Since only $\\verb|result|$ (spelled differently) was declared, the compiler realizes $\\verb|reslt|$ is an \"undeclared identifier.\" This is a <strong>Semantic Error.</strong></p><p><strong>Correct Answer: D. A SEMANTIC ERROR</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507593/go-classes-dpp-compiler-compilation-phases\" target=\"_blank\">GATE Overflow #507593</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A programmer writes the following invalid C statement: $\\verb|int total_val#ue =10;|$ .<br/><br/>Assuming the compiler adheres to a standard compilation model, which component is primarily responsible for detecting the error and what is the classification of this error?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Semantic Analyzer; Semantic Error<br/></span>",
                "<span style=\"display: inline;\">Lexical Analyzer (Scanner); Lexical Error<br/></span>",
                "<span style=\"display: inline;\">Lexical Analyzer (Scanner); Syntactic Error<br/></span>",
                "<span style=\"display: inline;\">Parser (Syntax Analyzer); Syntactic Error</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"511551\"></a><div itemprop=\"text\">B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/505533/go-classes-dpp-compiler-compilation-error\" target=\"_blank\">GATE Overflow #505533</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>Consider line number $\\textbf{4}$ of the following C-program.</strong><br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() { /* Line 1 */ int value, result; /* Line 2 */ value = 100; /* Line 3 */ result = value @ 5; /* Line 4 */ printf(\"%d\", result); /* Line 5 */ }</pre><p><br/><strong>Identify the compiler's response while creating the object-module:</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only a syntactic error <br/></span>",
                "<span style=\"display: inline;\">Only a semantic error <br/></span>",
                "<span style=\"display: inline;\">Only a lexical error <br/></span>",
                "<span style=\"display: inline;\">Both lexical and syntactic errors</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505524\"></a><div itemprop=\"text\"><p><strong>Analyzing Line 4:</strong> $\\verb|result = value @ 5;|$<br/><br/>When the compiler's lexical analyzer (scanner) reaches the character $\\verb|@|$ in Line $4$, it attempts to group it with adjacent characters to form a valid C token:</p><ul><li>It checks if $\\verb|@|$ is a valid single-character operator. It is not.<br/> </li><li>It checks if it is part of a multi-character operator (like $\\verb|==|$, $\\verb|!=|$, etc.). <strong>It is not.</strong><br/> </li></ul><p>Since the character $\\verb|@|$ is not a valid character for forming any legal token in C (it is not part of an identifier, keyword, constant, or recognized operator), the scanner cannot classify it.<br/><br/>This failure to recognize and generate a legal token occurs during the <strong>lexical analysis phase</strong> and is classified as a <strong>lexical error.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505522/go-classes-dpp-compiler-compilation-error\" target=\"_blank\">GATE Overflow #505522</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A lexical analyzer uses the following regular expressions (REs) to recognize four tokens, $T_1, T_2$, $T_3$, and $T_4$, over the alphabet $\\Sigma=\\{a, b, c\\}$.</p><p>The analyzer follows two standard rules:</p><p>If the analyzer is processing the input string:<br/>$$\\textbf{bbacabc}$$<br/>What is the complete sequence of tokens generated by the lexical analyzer?</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$T_2, T_1, T_3$<br/> </li><li>$T_1,T_3,T_4$<br/> </li><li>$T_1,T_3$<br/> </li><li>$T_1,T_3,T_4$</li></ol><p><strong>Given Details:</strong></p><ul><li>$T_1:(a \\mid b)^* a$</li><li>$T_2:(a \\mid b)^* b$</li><li>$T_3: c(a|b| c)^*$</li><li>$T_4:(a|b| c) c$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Longest Possible Prefix Match: The longest matching prefix is selected.</span>",
                "<span style=\"display: inline;\">Precedence: If two or more tokens match the same longest prefix, the token rule specified earliest takes precedence ( $T_1&gt;T_2&gt;T_3&gt;T_4$ ).</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"504283\"></a><div itemprop=\"text\"><p>Longest prefix \"$\\text{bba}$\" is matched with $T_1,$<br/><br/>Now starting with $\\text{c}$, we have only one token $\\rightarrow ~T_3$ which eats the remaining expression.</p><p>Hence $T_1,T_3$ will be the match here.<br/><br/>Option <strong>C</strong> is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504282/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #504282</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C code snippet:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">float val = 2.0; /* Check Condition */ if (val &lt;= MAX) { val /= 2; }</pre><p><br/>What is the total number of tokens identified by the lexical analyzer for the given code snippet (ignoring whitespace)?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "504281",
            "solution": "<div class=\"solution-content\"><a name=\"504550\"></a><div itemprop=\"text\">17 tokens<br/> <br/> float ,val , = , 2.0 , ; , if , ( , val , &lt;= , MAX , ) , { , val , /= , 2 , ; , } .</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504281/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #504281</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of tokens in the following C statement is:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">for (i = 0; i != 10; i++) { sum += i; }</pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$18$<br/></span>",
                "<span style=\"display: inline;\">$21$<br/></span>",
                "<span style=\"display: inline;\">$16$<br/></span>",
                "<span style=\"display: inline;\">$19$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507439\"></a><div itemprop=\"text\"><table data-path-to-node=\"3\"><thead><tr><td><strong>Token No.</strong></td><td><strong>Token</strong></td><td><strong>Type</strong></td></tr></thead><tbody><tr><td>1</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,1,1,0\">for</code></td><td>Keyword</td></tr><tr><td>2</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,2,1,0\">(</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>3</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,3,1,0\">i</code></td><td>Identifier</td></tr><tr><td>4</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,4,1,0\">=</code></td><td>Operator</td></tr><tr><td>5</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,5,1,0\">0</code></td><td>Constant (Integer)</td></tr><tr><td>6</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,6,1,0\">;</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>7</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,7,1,0\">i</code></td><td>Identifier</td></tr><tr><td>8</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,8,1,0\">!=</code></td><td>Operator (Relational)</td></tr><tr><td>9</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,9,1,0\">10</code></td><td>Constant (Integer)</td></tr><tr><td>10</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,10,1,0\">;</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>11</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,11,1,0\">i</code></td><td>Identifier</td></tr><tr><td>12</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,12,1,0\">++</code></td><td>Operator (Increment)</td></tr><tr><td>13</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,13,1,0\">)</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>14</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,14,1,0\">{</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>15</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,15,1,0\">sum</code></td><td>Identifier</td></tr><tr><td>16</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,16,1,0\">+=</code></td><td>Operator (Assignment)</td></tr><tr><td>17</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,17,1,0\">i</code></td><td>Identifier</td></tr><tr><td>18</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,18,1,0\">;</code></td><td>Punctuator / Special Symbol</td></tr><tr><td>19</td><td><code data-index-in-node=\"0\" data-path-to-node=\"3,19,1,0\">}</code></td><td>Punctuator / Special Symbol</td></tr></tbody></table></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503836/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #503836</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The number of tokens in the following C statement is<br/> <br/> $\\verb|if(a &gt; b &amp;&amp; c &lt;= 10) { result = a + b; }|$</div></span>",
            "image": "",
            "options": [],
            "answer": "18",
            "solution": "<div class=\"solution-content\"><a name=\"503976\"></a><div itemprop=\"text\">tokens : if , ( , a , &gt; , b , &amp;&amp; , c , &lt;= , 10 , ) , { , result , = , a , + , b , ; , } .<br/> <br/> Ans : 18 tokens.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503833/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #503833</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Compiler Design (Lexical Analysis & Compiler Basics - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 5",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a simplified programming language where the following rules define tokens:<br/><br/>1. Identifier (ID): A sequence of one or more letters (A-Z, a-z).<br/><br/>2. Number (NUM): A sequence of one or more digits (0-9).<br/><br/>3. Operator (OP): The symbols $+,-, *, /$.<br/><br/>4. Assignment Operator (ASSIGN): The symbol :=.<br/><br/>5. Separator (SEP): The symbol ;.<br/><br/>6. Comparison Operator (COMP): The symbol $&lt;=$.<br/><br/>7. Parenthesis (PAREN): The symbols ( and ).<br/><br/>8. Whitespace: Ignored.</p><p>The lexical analyzer uses the longest match rule and prioritizes multi-character tokens (like := , &lt;=) over single-character tokens (like $=\\ll$ ).</p><p>How many tokens are generated from the following input expression?</p><p>$$<br/>\\operatorname{var} 1:=\\mathrm{x}&lt;=10^*(\\mathrm{y}+2) ;<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathbf{1 2}$ <br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{1 3}$ <br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{1 4}$ <br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{1 5}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"505699\"></a><div itemprop=\"text\">Option B :13</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503439/go-classes-dpp-compiler-lexical-analyzer\" target=\"_blank\">GATE Overflow #503439</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a language that defines valid identifiers and valid integers. The tokens are defined by the following regular expressions:<br/><br/><br/><strong>1. IDENTIFIER (ID):</strong> Must start with a lowercase letter, followed by zero or more lowercase letters or digits.</p><p>$$<br/>R E_{\\mathrm{ID}}=(a|b| \\ldots \\mid z)(a|b| \\ldots|z| 0|1| \\ldots \\mid 9)^*<br/>$$</p><p><br/><strong>2. INTEGER (INT):</strong> A non-empty string of digits.</p><p>$$<br/>R E_{\\mathrm{INT}}=(0|1| \\ldots \\mid 9)^{+}<br/>$$</p><p><br/>The alphabet $\\Sigma$ consists of the $26$ lowercase letters and the $10$ digits ( $\\Sigma= \\{a, b, \\ldots, z, 0,1, \\ldots, 9\\})$.<br/><br/>The minimum number of states in the Deterministic Finite Automaton (DFA) that recognizes the combined language $L=L(\\mathrm{ID}) \\cup L(\\mathrm{INT})$ is $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"502580\"></a><div itemprop=\"text\"><p><strong>1. Initial States:</strong> We need an <strong>initial state</strong> $(S_0)$ which represents the start of scanning.<br/><br/><strong>2. Recognizing INT:</strong></p><ul><li>From $S_0$, on any <strong>digit</strong> $(0-9)$, move to state $S_1$.<br/> </li><li>$S_1$ is an <strong>accepting state</strong> for INT.<br/> </li><li>From $S_1$, on any <strong>digit,</strong> stay in $S_1$.<br/> </li></ul><p><strong>3. Recognizing ID:</strong></p><ul><li>From $S_0$, on any <strong>letter</strong> $(a-z)$, move to state $S_2$.<br/> </li><li>$S_2$ is an <strong>accepting state</strong> for ID.<br/> </li><li>From $S_2$, on any <strong>letter or digit,</strong> stay in $S_2$.<br/> </li></ul><p><strong>4. Handling Conflicts/Errors:</strong></p><ul><li>From $S_0$, on an <strong>error input </strong>(e.g., non-digit, non-letter like $\\verb|#|$), move to a <strong>Trap/Error state </strong>$(S_E)$.<br/> </li><li>From $S_1$, on any<strong> letter</strong> (which is not allowed for INT), move to the <strong>Trap state</strong> $(S_E)$.<br/> </li><li>From $S_2$, on any <strong>other input</strong> (like $\\verb|#|$), move to $S_E$.<br/> </li></ul><p>Minimum no of states $=4$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502579/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #502579</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following multi-line C code snippet:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int *ptr_arr[MAX_VAL], x = 0; /* Token counting starts from the next line */ do { ptr_arr[x] = &amp;x; } while ((x++ &lt; MAX_VAL - 1) &amp;&amp; (ptr_arr[x] != NULL)); </pre><p><br/>What is the total number of tokens generated by the lexical analyzer for the code</p></div></span>",
            "image": "",
            "options": [],
            "answer": "43",
            "solution": "<div class=\"solution-content\"><a name=\"502214\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{cl}<br/> \\text{Token No.} &amp; \\text{Lexeme} \\\\<br/> <br/> \\mathbf{1} &amp; \\verb|int| \\\\<br/> \\mathbf{2} &amp; \\verb|*| \\\\<br/> \\mathbf{3} &amp; \\verb|ptr_arr| \\\\<br/> \\mathbf{4} &amp; \\verb|[| \\\\<br/> \\mathbf{5} &amp; \\verb|MAX_VAL| \\\\<br/> \\mathbf{6} &amp; \\verb|]| \\\\<br/> \\mathbf{7} &amp; \\verb|,| \\\\<br/> \\mathbf{8} &amp; \\verb|x| \\\\<br/> \\mathbf{9} &amp; \\verb|=| \\\\<br/> \\mathbf{10} &amp; \\verb|0| \\\\<br/> \\mathbf{11} &amp; \\verb|;| \\\\<br/> \\mathbf{12} &amp; \\verb|do| \\\\<br/> \\mathbf{13} &amp; \\verb|{| \\\\<br/> \\mathbf{14} &amp; \\verb|ptr_arr| \\\\<br/> \\mathbf{15} &amp; \\verb|[| \\\\<br/> \\mathbf{16} &amp; \\verb|x| \\\\<br/> \\mathbf{17} &amp; \\verb|]| \\\\<br/> \\mathbf{18} &amp; \\verb|=| \\\\<br/> \\mathbf{19} &amp; \\verb|&amp;| \\\\<br/> \\mathbf{20} &amp; \\verb|x| \\\\<br/> \\mathbf{21} &amp; \\verb|;| \\\\<br/> \\mathbf{22} &amp; \\verb|}| \\\\<br/> \\mathbf{23} &amp; \\verb|while| \\\\<br/> \\mathbf{24} &amp; \\verb|(| \\\\<br/> \\mathbf{25} &amp; \\verb|(| \\\\<br/> \\mathbf{26} &amp; \\verb|x| \\\\<br/> \\mathbf{27} &amp; \\verb|++| \\\\<br/> \\mathbf{28} &amp; \\verb|&lt;| \\\\<br/> \\mathbf{29} &amp; \\verb|MAX_VAL| \\\\<br/> \\mathbf{30} &amp; \\verb|-| \\\\<br/> \\mathbf{31} &amp; \\verb|1| \\\\<br/> \\mathbf{32} &amp; \\verb|)| \\\\<br/> \\mathbf{33} &amp; \\verb|&amp;&amp;| \\\\<br/> \\mathbf{34} &amp; \\verb|(| \\\\<br/> \\mathbf{35} &amp; \\verb|ptr_arr| \\\\<br/> \\mathbf{36} &amp; \\verb|[| \\\\<br/> \\mathbf{37} &amp; \\verb|x| \\\\<br/> \\mathbf{38} &amp; \\verb|]| \\\\<br/> \\mathbf{39} &amp; \\verb|!=| \\\\<br/> \\mathbf{40} &amp; \\verb|NULL| \\\\<br/> \\mathbf{41} &amp; \\verb|)| \\\\<br/> \\mathbf{42} &amp; \\verb|)| \\\\<br/> \\mathbf{43} &amp; \\verb|;| \\\\<br/> \\end{array}<br/> \\]<br/> <br/> Total no of token $=\\boxed{43}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502213/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #502213</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>The number of tokens in the following C statement is</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">if(ptr-&gt;count++ &gt;= 10 &amp;&amp; !flag)</pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$13$<br/></span>",
                "<span style=\"display: inline;\">$14$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502212\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{|c|c|c|}<br/> \\hline<br/> \\text{Token Number} &amp; \\text{Lexeme} &amp; \\text{Token Type} \\\\<br/> \\hline<br/> 1 &amp; \\verb|if| &amp; \\text{Keyword} \\\\<br/> 2 &amp; \\verb|(| &amp; \\text{Separator} \\\\<br/> 3 &amp; \\verb|ptr| &amp; \\text{Identifier} \\\\<br/> 4 &amp; \\verb|-&gt;| &amp; \\text{Operator} \\\\<br/> 5 &amp; \\verb|count| &amp; \\text{Identifier} \\\\<br/> 6 &amp; \\verb|++| &amp; \\text{Operator} \\\\<br/> 7 &amp; \\verb|&gt;=| &amp; \\text{Operator} \\\\<br/> 8 &amp; \\verb|10| &amp; \\text{Constant} \\\\<br/> 9 &amp; \\verb|&amp;&amp;| &amp; \\text{Operator} \\\\<br/> 10 &amp; \\verb|!| &amp; \\text{Operator} \\\\<br/> 11 &amp; \\verb|flag| &amp; \\text{Identifier} \\\\<br/> 12 &amp; \\verb|)| &amp; \\text{Separator} \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> Total no of tokens $=12$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502209/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #502209</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A C program contains a call to a function named $\\verb|calculate_area|$ in $\\verb|main()|$, but the function definition itself is entirely missing from all source files and linked libraries.</p><p>What type of error will most likely be generated, and at which stage of the program creation process?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A <strong>COMPILER</strong> error during the <strong>COMPILATION</strong> stage.<br/></span>",
                "<span style=\"display: inline;\">A <strong>LINKER </strong>error during the <strong>LINKING</strong> stage.<br/></span>",
                "<span style=\"display: inline;\">A <strong>SYNTACTIC</strong> error during the <strong>PREPROCESSING</strong> stage.<br/></span>",
                "<span style=\"display: inline;\">A <strong>RUNTIME</strong> error after the program is <strong>EXECUTED.</strong></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502378\"></a><div itemprop=\"text\">Well, compiler won't have any issues as tokens will be generated and since there's no mistake in syntax or wrong writing compiler will proceed with compilation stage.<br/> <br/> But after that when linker will start linking every libraries to the file it will read fn call and will start to look for the defination but it won't get thus it will throw linker error<br/> <br/> Syntax error cannot happen as there's no wrong code written.<br/> <br/> Runtime error cannot occur as the execution won't start linker will not let to pursue execution.<br/> <br/> Thus option #B# is the answer</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502201/go-classes-dpp-compiler-compilation-phase\" target=\"_blank\">GATE Overflow #502201</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$\\text { The number of tokens in the following three lines of } C \\text { code is: }$<br/> <br/> $\\verb|int calculate(double r) { return (int)(2 * PI * r) - 1; }|$</div></span>",
            "image": "",
            "options": [],
            "answer": "22",
            "solution": "<div class=\"solution-content\"><a name=\"501507\"></a><div itemprop=\"text\"><p> </p><p>$\\verb|int calculate(double r) { return (int) (2 * PI * r)-1 ;}|$</p><p><br/>Tokens:</p><ol><li>$\\verb|int|$<br/> </li><li>$\\verb|calculate|$<br/> </li><li>$\\verb|( |$<br/> </li><li>$\\verb|double|$<br/> </li><li>$\\verb|r|$<br/> </li><li>$\\verb|)|$<br/> </li><li>$\\{$<br/> </li><li>$\\verb|return|$<br/> </li><li>$\\verb|( |$<br/> </li><li>$\\verb|int|$<br/> </li><li>$\\verb|)|$<br/> </li><li>$\\verb|( |$<br/> </li><li>$\\verb|2|$<br/> </li><li>$\\verb|*|$<br/> </li><li>$\\verb|PI|$<br/> </li><li>$\\verb|*|$<br/> </li><li>$\\verb|r|$<br/> </li><li>$\\verb|)|$<br/> </li><li>$\\verb|-|$<br/> </li><li>$\\verb|1|$<br/> </li><li>$\\verb|;|$<br/> </li><li>$\\verb|}|$<br/> </li></ol><p><br/><strong>Total $\\textbf{=22}$</strong><br/><br/><br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501500/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #501500</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of tokens in the following C statement is:<br/><br/>\\[<br/>\\begin{array}{l}<br/>\\texttt{for (int k = 0; k &lt; SIZE_MAX - 1; k = ((k + 1) * 2 - 1) % MAX_VAL)} \\\\<br/>\\texttt{\\{} \\\\<br/>\\texttt{ if (k == 0) break;} \\\\<br/>\\texttt{\\}}<br/>\\end{array}<br/>\\]<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$35$<br/></span>",
                "<span style=\"display: inline;\">$37$<br/></span>",
                "<span style=\"display: inline;\">$38$<br/></span>",
                "<span style=\"display: inline;\">$39$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501511\"></a><div itemprop=\"text\"><p>Ans - D </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">1 for 14 k 27 % 2 ( 15 = 28 MAX_VAL 3 int 16 ( 29 ) 4 k 17 ( 30 { 5 = 18 k 31 if 6 0 19 + 32 ( 7 ; 20 1 33 k 8 k 21 ) 34 == 9 &lt; 22 * 35 0 10 SIZE_MAX 23 2 36 ) 11 - 24 - 37 break 12 1 25 1 38 ; 13 ; 26 ) 39 } </pre><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501492/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #501492</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of tokens in the following C code is $\\_\\_\\_\\_$. </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">y = ++x *(z-- + 1);</pre><p> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "12.1",
            "solution": "<div class=\"solution-content\"><a name=\"500870\"></a><div itemprop=\"text\"><p><strong>Answer is 12.</strong></p><table border=\"1\" cellpadding=\"1\" style=\"width: 100px; border-spacing: 1px;\"><tbody><tr><td>1.</td><td> y</td></tr><tr><td>2.</td><td> =</td></tr><tr><td>3.</td><td> ++</td></tr><tr><td>4.</td><td> x</td></tr><tr><td>5.</td><td> *</td></tr><tr><td>6.</td><td> (</td></tr><tr><td>7.</td><td> z</td></tr><tr><td>8.</td><td> --</td></tr><tr><td>9.</td><td> +</td></tr><tr><td>10.</td><td> 1</td></tr><tr><td>11.</td><td> )</td></tr><tr><td>12.</td><td> ;</td></tr></tbody></table><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500791/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #500791</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\"><b id=\"docs-internal-guid-e0bed3b3-7fff-95be-7cf3-790b16d19624\">The number of tokens in the following C code is</b></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">if(count &gt;= MAX_ITEMS) { printf(\"Limit Reached\\n\"); } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$13$<br/></span>",
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$17$<br/></span>",
                "<span style=\"display: inline;\">$19$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500911\"></a><div itemprop=\"text\"><ol data-path-to-node=\"32\" start=\"1\"><li><p data-path-to-node=\"32,0,0\"><code>if</code> $\\rightarrow$ <b>Keyword</b> (1)</p></li><li><p data-path-to-node=\"32,1,0\"><code>(</code> $\\rightarrow$ <b>Separator</b> (2)</p></li><li><p data-path-to-node=\"32,2,0\"><code>count</code> $\\rightarrow$ <b>Identifier</b> (3)</p></li><li><p data-path-to-node=\"32,3,0\"><code>&gt;=</code> $\\rightarrow$ <b>Operator</b> (Relational) (4)</p></li><li><p data-path-to-node=\"32,4,0\"><code>MAX_ITEMS</code> $\\rightarrow$ <b>Identifier</b> (5)</p></li><li><p data-path-to-node=\"32,5,0\"><code>)</code> $\\rightarrow$ <b>Separator</b> (6)</p></li><li><p data-path-to-node=\"32,6,0\"><code>{</code> $\\rightarrow$ <b>Separator</b> (7)</p></li><li><p data-path-to-node=\"32,7,0\"><code>printf</code> $\\rightarrow$ <b>Identifier</b> (8)</p></li><li><p data-path-to-node=\"32,8,0\"><code>(</code> $\\rightarrow$ <b>Separator</b> (9)</p></li><li><p>\"Limit Reached\\n\" $\\rightarrow$ String Literal (10)</p><p>(Note: The entire string, including the quotes and escape sequence, is ONE token)</p></li><li><p data-path-to-node=\"32,10,0\"><code>)</code> $\\rightarrow$ <b>Separator</b> (11)</p></li><li><p data-path-to-node=\"32,11,0\"><code>;</code> $\\rightarrow$ <b>Separator</b> (12)</p></li><li><p data-path-to-node=\"32,12,0\"><code>}</code> $\\rightarrow$ <b>Separator</b> (13)</p></li></ol><p data-path-to-node=\"33\"><b>Total Count:</b> 13</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500789/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #500789</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of tokens in the following C statement is $\\_\\_\\_\\_$ .<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">scanf(\"%d %f\",&amp;num,&amp;value);</pre><p> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"500364\"></a><div itemprop=\"text\">1. scanf<br/> 2. (<br/> 3. \"\\%d \\%f\" (string literal - 1 token)<br/> 4. ,<br/> 5. &amp;<br/> 6. num<br/> 7.,<br/> 8. &amp;<br/> 9. value<br/> 10. )<br/> 11. ;<br/> <br/> Count = 11</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500363/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #500363</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Compiler Design (Lexical Analysis & Compiler Basics - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 6",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of tokens in the following C statement is $\\_\\_\\_\\_$</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">for(int k=0; k&lt;MAX; k++) { sum += data[k];}</pre><p> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "23",
            "solution": "<div class=\"solution-content\"><a name=\"500361\"></a><div itemprop=\"text\">1. for<br/> 2.1<br/> 3. int<br/> 4. k<br/> 5. $=$<br/> 6.0<br/> 7 .;<br/> 8. k<br/> 9. &lt;<br/> 10. MAX<br/> 11.;<br/> <br/> 12, k<br/> 13. ++<br/> 14.)<br/> 15. {<br/> 16. sum<br/> 17. +=<br/> 18. data<br/> 19. [<br/> 20. k<br/> 21.]<br/> 22.;<br/> 23. }<br/> <br/> Count = 23</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500360/go-classes-dpp-compiler-lexical-analysis\" target=\"_blank\">GATE Overflow #500360</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Reverse Polish Notation (RPN) is a notation for expressions in which operators follow their operands.</p><p>For eg,</p><p>$\\begin{aligned} \\texttt{3 4 +} &amp;\\quad \\text{represents } 3+4\\\\ \\texttt{4 sqrt} &amp;\\quad \\text{represents } \\sqrt{4}\\\\ \\texttt{5 -} &amp;\\quad \\text{represents unary negation of } 5 \\end{aligned}$</p><p>Consider two grammars describing RPN expressions.</p><p><strong>Grammar $\\mathbf{G}_\\mathbf{1}:$</strong></p><p>$\\begin{aligned} \\mathrm{RPN} &amp;\\rightarrow \\mathrm{RPN}\\ \\mathrm{RPN}\\ \\mathrm{binOp} \\mid \\mathrm{RPN}\\ \\mathrm{unaryOp}\\mid \\mathrm{number}\\\\[4pt] \\mathrm{binOp} &amp;\\rightarrow +\\mid-\\mid *\\mid /\\\\ \\mathrm{unaryOp} &amp;\\rightarrow -\\mid\\mathrm{sqrt} \\end{aligned}$</p><p><strong>Grammar $\\mathbf{G}_\\mathbf{2}:$</strong></p><p>$\\begin{aligned} \\mathrm{RPN} &amp;\\rightarrow \\mathrm{number}\\ \\mathrm{REST}\\\\[4pt] \\mathrm{REST} &amp;\\rightarrow [\\ \\mathrm{number}\\ \\mathrm{REST}\\ \\mathrm{binOp}\\ \\mathrm{REST}\\mid\\mathrm{unaryOp}\\ ]\\\\[4pt] \\mathrm{binOp} &amp;\\rightarrow +\\mid-\\mid *\\mid /\\\\ \\mathrm{unaryOp} &amp;\\rightarrow -\\mid\\mathrm{sqrt} \\end{aligned}$</p><p>Here, square brackets in $\\mathrm{G}_2$ denote an optional construct, which may also derive the empty string.</p><p>Analyze both grammars to determine whether they satisfy the $LL(1)$ conditions.</p><p>Which statement is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both $\\mathrm{G}_1$ and $\\mathrm{G}_2$ satisfy the $LL(1)$ conditions.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{G}_1$ is not $LL(1)$ because of left recursion, and $\\mathrm{G}_2$ is not $LL(1)$ because $-$ belongs to both $\\mathrm{FIRST}(\\mathrm{REST})-\\{\\varepsilon\\}$ and $\\mathrm{FOLLOW}(\\mathrm{REST})$.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{G}_1$ is not $LL(1)$ because of left recursion, but $\\mathrm{G}_2$ is $LL(1)$ because its optional production eliminates all parsing conflicts.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{G}_1$ is $LL(1)$, but $\\mathrm{G}_2$ is not $LL(1)$ because the two alternatives inside $\\mathrm{REST}$ both begin with $\\mathrm{number}$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\">Question Discussed on GATE Overflow. Refer to: <a href=\"https://gateoverflow.in/557948/go-classes-dpp-gate-cs-compiler-design-ll-1-grammar-conditions\" target=\"_blank\">GO Classes DPP | GATE CS | Compiler Design | LL(1) Grammar Conditions</a></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar for Boolean expressions:</p><p>$$\\begin{aligned} E &amp;\\rightarrow T\\mid E\\ \\mathrm{or}\\ T\\\\ T &amp;\\rightarrow F\\mid T\\ \\mathrm{and}\\ F\\\\ F &amp;\\rightarrow \\mathrm{id}\\mid\\mathrm{not}\\ F\\mid(E) \\end{aligned}$$</p><p>After eliminating immediate left recursion, the grammar can be represented as:</p><p>$$\\begin{aligned} E &amp;\\rightarrow TE'\\\\ E' &amp;\\rightarrow \\mathrm{or}\\ TE'\\mid\\varepsilon\\\\ T &amp;\\rightarrow FT'\\\\ T' &amp;\\rightarrow \\mathrm{and}\\ FT'\\mid\\varepsilon\\\\ F &amp;\\rightarrow \\mathrm{id}\\mid\\mathrm{not}\\ F\\mid(E) \\end{aligned}$$</p><p>Construct the $LL(1)$ predictive parsing table for the transformed grammar.</p><p>Which of the following entries are CORRECT?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$~M[E',\\mathrm{or}]=E'\\rightarrow\\varepsilon$<br/></span>",
                "<span style=\"display: inline;\">$~M[E',)]=E'\\rightarrow\\varepsilon$<br/></span>",
                "<span style=\"display: inline;\">$~M[T',\\mathrm{or}]=T'\\rightarrow\\varepsilon$<br/></span>",
                "<span style=\"display: inline;\">$~M[T',\\mathrm{and}]=T'\\rightarrow\\mathrm{and}\\ FT'$<br/></span>",
                "<span style=\"display: inline;\">$~M[F,\\mathrm{not}]=F\\rightarrow\\mathrm{id}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\">Question Discussed on GATE Overflow. Refer to: <a href=\"https://gateoverflow.in/557945/go-classes-dpp-gate-cs-compiler-design-ll-1-parsing\" target=\"_blank\">GO Classes DPP | GATE CS | Compiler Design | LL(1) Parsing</a></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar: $$\\begin{aligned} A &amp;\\rightarrow sCng\\mid\\varepsilon\\\\ B &amp;\\rightarrow Cr\\mid t\\\\ C &amp;\\rightarrow Bi\\mid t \\end{aligned}$$ Assume $A$ is the start symbol.</p><p>Does this grammar satisfy the $LL(1)$ condition?</p><p>Which of the following correctly identifies the multiply defined entries in its predictive parsing table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only $M[A,s]$ contains multiple productions.<br/></span>",
                "<span style=\"display: inline;\">Both $M[B,t]$ and $M[C,t]$ contain multiple productions.<br/></span>",
                "<span style=\"display: inline;\">Both $M[A,\\$]$ and $M[B,t]$ contain multiple productions.<br/></span>",
                "<span style=\"display: inline;\">The parsing table has no multiply defined entries, so the grammar is $LL(1)$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\">Question Discussed on GATE Overflow. Refer to: <a href=\"https://gateoverflow.in/557944/go-classes-dpp-gate-cs-compiler-design-ll-1-parsing\" target=\"_blank\">GO Classes DPP | GATE CS | Compiler Design | LL(1) Parsing</a></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar: $$\\begin{aligned} R &amp;\\rightarrow aTCo\\mid o\\\\ T &amp;\\rightarrow m\\mid\\varepsilon\\\\ C &amp;\\rightarrow n\\mid\\varepsilon \\end{aligned}$$ Here, $R$ is the start symbol.</p><p>Is this grammar suitable for constructing a top-down $LL(1)$ predictive parser?</p><p>Which of the following statements is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The grammar is not $LL(1)$ because both $T$ and $C$ contain epsilon productions.<br/></span>",
                "<span style=\"display: inline;\">The grammar is $LL(1)$, with $M[T,n]=T\\rightarrow\\varepsilon$ and $M[C,o]=C\\rightarrow\\varepsilon$.<br/></span>",
                "<span style=\"display: inline;\">The grammar is $LL(1)$, with $M[T,n]=T\\rightarrow m$ and $M[C,o]=C\\rightarrow\\varepsilon$.<br/></span>",
                "<span style=\"display: inline;\">The grammar is not $LL(1)$ because the entry $M[R,o]$ contains two productions.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"557943\"></a><div itemprop=\"text\"><p>The presence of epsilon productions does not automatically make a grammar non-$LL(1)$.</p><p>A grammar is $LL(1)$ if each combination of a nonterminal and one lookahead terminal determines at most one applicable production.</p><p>Now,</p><p>$R\\rightarrow aTCo\\mid o$</p><p>The FIRST sets of the alternatives are:</p><p>$\\mathrm{FIRST}(aTCo)=\\{a\\}$</p><p>$\\mathrm{FIRST}(o)=\\{o\\}$</p><p>Since $\\{a\\}\\cap\\{o\\}=\\varnothing$, there is no FIRST/FIRST conflict for $R$.</p><p>Now, $T\\rightarrow m\\mid\\varepsilon$</p><p>We have $\\mathrm{FIRST}(m)=\\{m\\}$</p><p>Now determine $\\mathrm{FOLLOW}(T)$.</p><p>From $R\\rightarrow aTCo$</p><p>$T$ is followed by $Co$.</p><p>Since $C\\rightarrow n\\mid\\varepsilon$, the suffix can begin with $n$ or, if $C$ disappears, with $o$.</p><p>$\\therefore \\mathrm{FOLLOW}(T)=\\{n,o\\}$</p><p>Now,</p><p>$\\mathrm{FIRST}(m)\\cap\\mathrm{FOLLOW}(T)=\\{m\\}\\cap\\{n,o\\}=\\varnothing$</p><p>Therefore, the epsilon alternative creates no conflict.</p><p>The table entries are:</p><p>$\\begin{aligned} M[T,m]&amp;=T\\rightarrow m\\\\ M[T,n]&amp;=T\\rightarrow\\varepsilon\\\\ M[T,o]&amp;=T\\rightarrow\\varepsilon \\end{aligned}$</p><p>Now,</p><p>$C\\rightarrow n\\mid\\varepsilon$</p><p>Here $~\\mathrm{FIRST}(n)=\\{n\\}$</p><p>From $~R\\rightarrow aTCo~$ the terminal $o$ immediately follows $C$.</p><p>$\\therefore \\mathrm{FOLLOW}(C)=\\{o\\}$</p><p>Now $~\\mathrm{FIRST}(n)\\cap\\mathrm{FOLLOW}(C)=\\{n\\}\\cap\\{o\\}=\\varnothing$</p><p>Thus, there is no FIRST/FOLLOW conflict for $C$.</p><p>The table entries are:</p><p>$\\begin{aligned} M[C,n]&amp;=C\\rightarrow n\\\\ M[C,o]&amp;=C\\rightarrow\\varepsilon \\end{aligned}$</p><p>The predictive parsing table is : </p><p>$\\begin{array}{|c|c|c|c|c|} \\hline \\textbf{Nonterminal} &amp; \\textbf{a} &amp; \\textbf{m} &amp; \\textbf{n} &amp; \\textbf{o}\\\\ \\hline R &amp; R\\rightarrow aTCo &amp; \\text{Error} &amp; \\text{Error} &amp; R\\rightarrow o\\\\ \\hline T &amp; \\text{Error} &amp; T\\rightarrow m &amp; T\\rightarrow\\varepsilon &amp; T\\rightarrow\\varepsilon\\\\ \\hline C &amp; \\text{Error} &amp; \\text{Error} &amp; C\\rightarrow n &amp; C\\rightarrow\\varepsilon\\\\ \\hline \\end{array}$</p><p>All other entries, including the end-marker column, are errors.</p><p>Every non-error cell contains exactly one production.</p><p>Hence,</p><p>$\\boxed{\\text{The grammar is LL(1)}}$</p><p><br/><strong>A : Incorrect. </strong>Epsilon productions are allowed in $LL(1)$ grammars when they do not cause parsing-table conflicts.</p><p><strong>B : Correct. </strong>Both specified epsilon entries are valid, and the grammar is $LL(1)$.</p><p><strong>C : Incorrect. </strong>The production $T\\rightarrow m$ cannot be selected on lookahead $n$.</p><p><strong>D : Incorrect. </strong>The two productions of $R$ begin with distinct terminals, $a$ and $o$.</p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557942/go-classes-dpp-gate-cs-compiler-design-ll-1-parsing\" target=\"_blank\">GATE Overflow #557942</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar:</p><p>$$\\begin{aligned} \\mathrm{program} &amp;\\rightarrow \\{\\ \\mathrm{stmts}\\ \\}\\\\ \\mathrm{stmts} &amp;\\rightarrow \\mathrm{stmt}\\ \\mathrm{stmts}\\mid\\lambda\\\\ \\mathrm{stmt} &amp;\\rightarrow \\mathrm{ID}=\\mathrm{exp};\\\\ \\mathrm{exp} &amp;\\rightarrow \\mathrm{ID}\\ \\mathrm{tail}\\\\ \\mathrm{tail} &amp;\\rightarrow +\\mathrm{exp}\\mid\\lambda \\end{aligned}$$</p><p>Here, $\\lambda$ represents the empty string.</p><p>Construct the $LL(1)$<strong> predictive parsing table</strong> for this grammar.</p><p>Which of the following correctly specifies the entries $M[\\mathrm{stmts},\\}]$, $M[\\mathrm{tail},;]$, and $M[\\mathrm{exp},\\mathrm{ID}]$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} M[\\mathrm{stmts},\\}] &amp;= \\mathrm{stmts}\\rightarrow\\mathrm{stmt}\\ \\mathrm{stmts}\\\\ M[\\mathrm{tail},;] &amp;= \\mathrm{tail}\\rightarrow\\lambda\\\\ M[\\mathrm{exp},\\mathrm{ID}] &amp;= \\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} M[\\mathrm{stmts},\\}] &amp;= \\mathrm{stmts}\\rightarrow\\lambda\\\\ M[\\mathrm{tail},;] &amp;= \\mathrm{tail}\\rightarrow\\lambda\\\\ M[\\mathrm{exp},\\mathrm{ID}] &amp;= \\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} M[\\mathrm{stmts},\\}] &amp;= \\mathrm{stmts}\\rightarrow\\lambda\\\\ M[\\mathrm{tail},;] &amp;= \\mathrm{tail}\\rightarrow+\\mathrm{exp}\\\\ M[\\mathrm{exp},\\mathrm{ID}] &amp;= \\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} M[\\mathrm{stmts},\\}] &amp;= \\mathrm{stmts}\\rightarrow\\lambda\\\\ M[\\mathrm{tail},;] &amp;= \\mathrm{tail}\\rightarrow\\lambda\\\\ M[\\mathrm{exp},\\mathrm{ID}] &amp;= \\mathrm{Error} \\end{aligned}$</p></span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"557941\"></a><div itemprop=\"text\"><p>An $LL(1)$ predictive parsing table is constructed using the $\\text{FIRST}$ and $\\text{FOLLOW}$ sets of the grammar.</p><p>For a production $~A\\rightarrow\\alpha~$ we follow two rules:</p><ol><li>For every terminal $a\\in\\mathrm{FIRST}(\\alpha)$, enter $A\\rightarrow\\alpha$ in $M[A,a]$.<br/> </li><li>If $\\varepsilon\\in\\mathrm{FIRST}(\\alpha)$, enter $A\\rightarrow\\alpha$ in $M[A,b]$ for every $b\\in\\mathrm{FOLLOW}(A)$.</li></ol><p> </p><p>Now,</p><p>From $~\\mathrm{stmt}\\rightarrow\\mathrm{ID}=\\mathrm{exp};$</p><p>we get $~\\mathrm{FIRST}(\\mathrm{stmt})=\\{\\mathrm{ID}\\}$</p><p>For $~\\mathrm{stmts}\\rightarrow\\mathrm{stmt}\\ \\mathrm{stmts}\\mid\\lambda$</p><p>we obtain $~\\mathrm{FIRST}(\\mathrm{stmts})=\\{\\mathrm{ID},\\lambda\\}$</p><p>For $~\\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail}$</p><p>we have $~\\mathrm{FIRST}(\\mathrm{exp})=\\{\\mathrm{ID}\\}$</p><p>And $~\\mathrm{tail}\\rightarrow+\\mathrm{exp}\\mid\\lambda$</p><p>gives $~\\mathrm{FIRST}(\\mathrm{tail})=\\{+,\\lambda\\}$</p><p>Now,</p><p>Consider $\\mathrm{program}\\rightarrow\\{\\ \\mathrm{stmts}\\ \\}$</p><p>The terminal $\\texttt{\\}}$ immediately follows $\\mathrm{stmts}$.</p><p>$\\therefore \\mathrm{FOLLOW}(\\mathrm{stmts})=\\{\\texttt{\\}}\\}$</p><p>Since $~\\mathrm{stmts}\\rightarrow\\lambda~$ the epsilon production is entered for every terminal in $\\mathrm{FOLLOW}(\\mathrm{stmts})$.</p><p>Thus,</p><p>$\\boxed{M[\\mathrm{stmts},\\}]=\\mathrm{stmts}\\rightarrow\\lambda}$</p><p>Now consider,</p><p>$~\\begin{aligned} \\mathrm{stmt} &amp;\\rightarrow\\mathrm{ID}=\\mathrm{exp};\\\\ \\mathrm{exp} &amp;\\rightarrow\\mathrm{ID}\\ \\mathrm{tail} \\end{aligned}$</p><p>Since $;$ immediately follows $\\mathrm{exp}$ in the $\\mathrm{stmt}$ production:</p><p>$\\mathrm{FOLLOW}(\\mathrm{exp})=\\{;\\}$</p><p>Because $\\mathrm{tail}$ occurs at the end of $~\\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail}$</p><p>we have $~\\mathrm{FOLLOW}(\\mathrm{exp})\\subseteq\\mathrm{FOLLOW}(\\mathrm{tail})$</p><p>$\\therefore \\mathrm{FOLLOW}(\\mathrm{tail})=\\{;\\}$</p><p>Since $\\mathrm{tail}$ can derive epsilon,</p><p>$\\boxed{M[\\mathrm{tail},;]=\\mathrm{tail}\\rightarrow\\lambda}$</p><p>The production is $~\\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail}$</p><p>Its right-hand side begins with the terminal $\\mathrm{ID}$.</p><p>Thus,</p><p>$\\boxed{M[\\mathrm{exp},\\mathrm{ID}]=\\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail}}$</p><p><br/>So, the complete predictive Parsing Table is</p><p>$$\\begin{array}{|l|c|c|c|c|c|} \\hline \\textbf{Nonterminal} &amp; \\texttt{\\{} &amp; \\texttt{\\}} &amp; \\mathrm{ID} &amp; + &amp; ;\\\\ \\hline \\mathrm{program} &amp; \\{\\ \\mathrm{stmts}\\ \\} &amp; \\text{Error} &amp; \\text{Error} &amp; \\text{Error} &amp; \\text{Error}\\\\ \\hline \\mathrm{stmts} &amp; \\text{Error} &amp; \\lambda &amp; \\mathrm{stmt}\\ \\mathrm{stmts} &amp; \\text{Error} &amp; \\text{Error}\\\\ \\hline \\mathrm{stmt} &amp; \\text{Error} &amp; \\text{Error} &amp; \\mathrm{ID}=\\mathrm{exp}; &amp; \\text{Error} &amp; \\text{Error}\\\\ \\hline \\mathrm{exp} &amp; \\text{Error} &amp; \\text{Error} &amp; \\mathrm{ID}\\ \\mathrm{tail} &amp; \\text{Error} &amp; \\text{Error}\\\\ \\hline \\mathrm{tail} &amp; \\text{Error} &amp; \\text{Error} &amp; \\text{Error} &amp; +\\mathrm{exp} &amp; \\lambda\\\\ \\hline \\end{array}$$</p><p>All entries under the additional lookahead symbols $=$ and $\\$$ (EOF) are errors.</p><p>The table has no multiply defined entries, so the grammar is $LL(1)$.<br/> </p><p><strong>A : Incorrect.</strong></p><p>$\\mathrm{stmts}$ must use its epsilon production on lookahead $\\texttt{\\}}$.</p><p><strong>B : Correct.</strong></p><p>All three entries follow directly from the FIRST/FOLLOW-based table construction algorithm.</p><p><strong>C : Incorrect.</strong></p><p>$\\mathrm{tail}\\rightarrow+\\mathrm{exp}$ is selected on lookahead $+$, not $;$.</p><p><strong>D : Incorrect.</strong></p><p>$\\mathrm{exp}\\rightarrow\\mathrm{ID}\\ \\mathrm{tail}$ must be selected when the lookahead is $\\mathrm{ID}$.</p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557938/go-classes-dpp-gate-cs-compiler-design-ll-1-parsing-table\" target=\"_blank\">GATE Overflow #557938</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Construct an <strong>unambiguous grammar</strong> for expressions involving identifiers ($\\mathrm{id}$) and the operators $@$ and $?$ subject to the following requirements:</p><p>The grammar should accept expressions such as $\\mathrm{id}\\ @\\ \\mathrm{id}\\ ?\\ \\mathrm{id}$</p><p>Which of the following grammars satisfies all these requirements?</p><p><strong>Given Details:</strong></p><ul><li>$@$ is right associative.</li><li>$?$ is left associative.</li><li>$@$ has lower precedence than $?$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} E &amp;\\rightarrow E@T\\mid T\\\\ T &amp;\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} E &amp;\\rightarrow T@E\\mid T\\\\ T &amp;\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} E &amp;\\rightarrow T@E\\mid T\\\\ T &amp;\\rightarrow \\mathrm{id}?T\\mid\\mathrm{id} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} E &amp;\\rightarrow E?T\\mid T\\\\ T &amp;\\rightarrow \\mathrm{id}@T\\mid\\mathrm{id} \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557851\"></a><div itemprop=\"text\"><p>Here it combines two different associativity rules with a precedence requirement.</p><p>We cannot simply make every production left recursive or right recursive.</p><p>Since $@$ has lower precedence than $?$ , expressions containing $?$ must be grouped before applying $@$.</p><p>The grammar should therefore have,</p><ul><li>$E$: Lower-precedence expressions involving $@$<br/> </li><li>$T$: Higher-precedence expressions involving $?$</li></ul><p>This ensures that $?$ binds more tightly.</p><p>For eg, $\\mathrm{id}@\\mathrm{id}?\\mathrm{id}$ must be interpreted as $\\mathrm{id}@(\\mathrm{id}?\\mathrm{id})$ rather than $(\\mathrm{id}@\\mathrm{id})?\\mathrm{id}$</p><p>Now enforce right associativity of $@$,</p><p>Right associativity requires,</p><p>$a@b@c=a@(b@c)$</p><p>At the lower-precedence level, use:</p><p>$E\\rightarrow T@E\\mid T$</p><p>The recursion occurs on the right.</p><p>Consider,</p><p>$\\mathrm{id}@\\mathrm{id}@\\mathrm{id}$</p><p>The grammar derives,</p><p>$E\\Rightarrow T@E$</p><p>$\\Rightarrow \\mathrm{id}@E$</p><p>$\\Rightarrow \\mathrm{id}@T@E$</p><p>$\\Rightarrow \\mathrm{id}@\\mathrm{id}@T$</p><p>$\\Rightarrow \\mathrm{id}@\\mathrm{id}@\\mathrm{id}$</p><p>The resulting parse-tree grouping is $\\boxed{\\mathrm{id}@(\\mathrm{id}@\\mathrm{id})}$</p><p>Thus, $@$ is right associative.</p><p>Now, Enforce Left Associativity of $?$</p><p>Left associativity requires, </p><p>$a?b?c=(a?b)?c$</p><p>Use,</p><p>$T\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id}$</p><p>The recursion occurs on the left.</p><p>For $\\mathrm{id}?\\mathrm{id}?\\mathrm{id}$ we have,</p><p>$T\\Rightarrow T?\\mathrm{id}$</p><p>$\\Rightarrow T?\\mathrm{id}?\\mathrm{id}$</p><p>$\\Rightarrow \\mathrm{id}?\\mathrm{id}?\\mathrm{id}$</p><p>The resulting parse-tree grouping is $\\boxed{(\\mathrm{id}?\\mathrm{id})?\\mathrm{id}}$</p><p>Thus, $?$ is left associative.</p><p>Now,</p><p>The complete grammar becomes:</p><p>$\\boxed{\\begin{aligned} E &amp;\\rightarrow T@E\\mid T\\\\ T &amp;\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}}$</p><p>Lets verify it,</p><p>Consider $\\mathrm{id}@\\mathrm{id}?\\mathrm{id}@\\mathrm{id}$,</p><p>Since $?$ has higher precedence, it groups before $@$:</p><p>$\\mathrm{id}@(\\mathrm{id}?\\mathrm{id})@\\mathrm{id}$</p><p>Since $@$ is right associative, the complete grouping is:</p><p>$\\boxed{\\mathrm{id}@((\\mathrm{id}?\\mathrm{id})@\\mathrm{id})}$</p><p>This satisfies all three constraints.<br/> </p><p><strong>Option Analysis :</strong></p><p><strong>A : Incorrect</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow E@T\\mid T\\\\ T &amp;\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}$</p><p>Both $@$ and $?$ are left associative because both recursive productions are left recursive.</p><p>However, $@$ must be right associative.</p><p><strong>B : Correct</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow T@E\\mid T\\\\ T &amp;\\rightarrow T?\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}$</p><p>This grammar gives:</p><ul><li>$@$ : Right associativity</li><li>$?$ : Left associativity</li><li>$?$ : Higher precedence than $@$</li></ul><p>All requirements are satisfied.</p><p><strong>C : Incorrect</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow T@E\\mid T\\\\ T &amp;\\rightarrow \\mathrm{id}?T\\mid\\mathrm{id} \\end{aligned}$</p><p>The operator $?$ is also right associative.</p><p>The question requires it to be left associative.</p><p><strong>D : Incorrect</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow E?T\\mid T\\\\ T &amp;\\rightarrow \\mathrm{id}@T\\mid\\mathrm{id} \\end{aligned}$</p><p>This gives $@$ higher precedence than $?$ , reversing the required relationship.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557849/go-classes-dpp-gate-cs-compiler-design-unambiguous-grammar\" target=\"_blank\">GATE Overflow #557849</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three grammars for languages containing branching, sequencing, and variables.</p><p><strong>Grammar $\\mathbf{1}:$</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E\\\\ E &amp;\\rightarrow E\\ \\texttt{then}\\ E\\ \\texttt{end}\\\\ E &amp;\\rightarrow \\texttt{id} \\end{aligned}$</p><p><strong>Grammar $\\mathbf{2}:$</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E\\ \\texttt{end}\\\\ E &amp;\\rightarrow E\\ \\texttt{then}\\ E\\ \\texttt{end}\\\\ E &amp;\\rightarrow \\texttt{id} \\end{aligned}$</p><p><strong>Grammar $\\mathbf{3}:$</strong></p><p>$\\begin{aligned} E &amp;\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E\\\\ E &amp;\\rightarrow \\texttt{do}\\ E\\ \\texttt{then}\\ E\\\\ E &amp;\\rightarrow \\texttt{id} \\end{aligned}$</p><p>Which of the following correctly identifies the ambiguous grammars?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Grammar $1$ only<br/></span>",
                "<span style=\"display: inline;\">Grammars $1$ and $2$ only<br/></span>",
                "<span style=\"display: inline;\">Grammars $1$ and $3$ only<br/></span>",
                "<span style=\"display: inline;\">All three grammars</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557848\"></a><div itemprop=\"text\"><p>A grammar is ambiguous if at least one string has two distinct parse trees or, equivalently, two distinct leftmost derivations.</p><p>We examine the grammars separately.</p><p><strong>Analyze Grammar $\\mathbf{1}$</strong></p><p>Consider the string $\\texttt{if id then id else id then id end}$,</p><p>The grammar contains,</p><p>$E\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E$</p><p>and</p><p>$E\\rightarrow E\\ \\texttt{then}\\ E\\ \\texttt{end}$</p><p><br/>The string admits two distinct structural interpretations.</p><p><strong>Interpretation $\\mathbf{1}:$ Sequencing outside the conditional</strong></p><p>$(\\texttt{if id then id else id})\\ \\texttt{then id end}$</p><p>The top-level production is:</p><p>$E\\rightarrow E\\ \\texttt{then}\\ E\\ \\texttt{end}$</p><p>The first $E$ expands into the conditional expression.</p><p><strong>Interpretation $\\mathbf{2}:$ Sequencing inside the else branch</strong></p><p>$\\texttt{if id then id else}\\ (\\texttt{id then id end})$</p><p>The top-level production is,</p><p>$E\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E$</p><p>The last $E$ expands into the sequencing expression.</p><p>Both produce exactly the same terminal string but have different parse trees.</p><p>$\\boxed{\\therefore \\text{Grammar 1 is ambiguous}}$</p><p><br/><strong>Analyze Grammar $\\mathbf{2}$</strong></p><p>Grammar $2$ modifies the conditional production by adding a terminating $\\texttt{end}$:</p><p>$E\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E\\ \\texttt{end}$</p><p>Now the conditional construct has an explicit closing delimiter.</p><p>This prevents the sequencing ambiguity demonstrated in Grammar 1. In particular, the sequence:</p><p>$\\texttt{if id then id else id end then id end}$</p><p>must treat the first $\\texttt{end}$ as closing the conditional, followed by the outer sequencing construct.</p><p>The delimiters establish the nesting of the constructs.</p><p>$\\boxed{\\therefore \\text{Grammar 2 is unambiguous}}$<br/> </p><p><strong>Analyze Grammar $\\mathbf{3}$</strong></p><p>Grammar $3$ contains,</p><p>$\\begin{aligned} E &amp;\\rightarrow \\texttt{if}\\ E\\ \\texttt{then}\\ E\\ \\texttt{else}\\ E\\\\ E &amp;\\rightarrow \\texttt{do}\\ E\\ \\texttt{then}\\ E\\\\ E &amp;\\rightarrow \\texttt{id} \\end{aligned}$</p><p>Here, the alternatives begin with distinct terminal symbols:</p><ul><li>$\\texttt{if}$ for the conditional construct<br/> </li><li>$\\texttt{do}$ for the second construct<br/> </li><li>$\\texttt{id}$ for an identifier</li></ul><p>Unlike Grammar $1$, there is no production of the form:</p><p>$E\\rightarrow E\\ \\texttt{then}\\ E\\ \\texttt{end}$</p><p>that would allow a previously completed expression to be extended by attaching a sequencing construct after it.</p><p>The $\\texttt{if}$ and $\\texttt{do}$ constructs have distinct starting keywords, and their internal delimiters determine their component expressions.</p><p>$\\boxed{\\therefore \\text{Grammar 3 is also unambiguous}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557847/go-classes-dpp-gate-cs-compiler-design-grammar-ambiguity\" target=\"_blank\">GATE Overflow #557847</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following ambiguous expression grammar</p><p>$$\\mathrm{exp}\\rightarrow \\mathrm{exp}+\\mathrm{exp}\\mid \\mathrm{exp}*\\mathrm{exp}\\mid \\mathrm{id}$$</p><p>Construct a grammar for the same language that enforces <strong>multiplication having higher precedence than addition</strong>, but remains ambiguous only because associativity is not enforced.</p><p>Which of the following grammars satisfies these conditions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{exp} &amp;\\rightarrow \\mathrm{exp}+\\mathrm{term}\\mid\\mathrm{term}\\\\ \\mathrm{term} &amp;\\rightarrow \\mathrm{term}*\\mathrm{id}\\mid\\mathrm{id} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{exp}\\rightarrow \\mathrm{exp}+\\mathrm{exp}\\mid\\mathrm{exp}*\\mathrm{exp}\\mid\\mathrm{id}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{exp} &amp;\\rightarrow \\mathrm{exp}*\\mathrm{exp}\\mid\\mathrm{term}\\\\ \\mathrm{term} &amp;\\rightarrow \\mathrm{term}+\\mathrm{term}\\mid\\mathrm{id} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{exp} &amp;\\rightarrow \\mathrm{exp}+\\mathrm{exp}\\mid\\mathrm{term}\\\\ \\mathrm{term} &amp;\\rightarrow \\mathrm{term}*\\mathrm{term}\\mid\\mathrm{id} \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557843\"></a><div itemprop=\"text\"><p>The question requires us to solve one source of ambiguity while deliberately retaining another.</p><p>We must,</p><ol><li>Enforce multiplication having higher precedence than addition.<br/> </li><li>Leave associativity ambiguous.<br/> </li><li>Preserve the language generated by the original grammar.<br/> </li></ol><p>Lets understand the original ambiguity.</p><p>The original grammar is,</p><p>$\\mathrm{exp}\\rightarrow\\mathrm{exp}+\\mathrm{exp}\\mid\\mathrm{exp}*\\mathrm{exp}\\mid\\mathrm{id}$</p><p>Consider $\\mathrm{id}+\\mathrm{id}*\\mathrm{id}$,</p><p>Two parse-tree groupings are possible,</p><p>$\\mathrm{id}+(\\mathrm{id}*\\mathrm{id})\\quad$ and $\\quad(\\mathrm{id}+\\mathrm{id})*\\mathrm{id}$</p><p>Thus, the grammar does not enforce operator precedence.</p><p>Now consider $\\mathrm{id}+\\mathrm{id}+\\mathrm{id}$,</p><p>Two groupings are again possible, </p><p>$(\\mathrm{id}+\\mathrm{id})+\\mathrm{id}\\quad$ and $\\quad\\mathrm{id}+(\\mathrm{id}+\\mathrm{id})$</p><p>This demonstrates associativity ambiguity.</p><p>Now, separate the operator precedence levels,</p><p>To make multiplication bind more tightly than addition, introduce a lower-level nonterminal $\\mathrm{term}$.</p><p>Use,</p><p>$\\begin{aligned} \\mathrm{exp} &amp;\\rightarrow \\mathrm{exp}+\\mathrm{exp}\\mid\\mathrm{term}\\\\ \\mathrm{term} &amp;\\rightarrow \\mathrm{term}*\\mathrm{term}\\mid\\mathrm{id} \\end{aligned}$</p><p>An addition operand can contain a multiplication expression, but a multiplication operand cannot contain an unparenthesized addition expression.</p><p>Thus, multiplication receives higher precedence.</p><p>Now, check whether associativity remains ambiguous</p><p>Consider $\\mathrm{id + id + id}$</p><p>Because the grammar still contains $\\mathrm{exp}\\rightarrow\\mathrm{exp}+\\mathrm{exp}$ both groupings remain possible,</p><p>$(\\mathrm{id}+\\mathrm{id})+\\mathrm{id}\\quad$ and $\\quad\\mathrm{id}+(\\mathrm{id}+\\mathrm{id})$</p><p>Similarly, since $\\mathrm{term}\\rightarrow\\mathrm{term}*\\mathrm{term}$ the string $\\mathrm{id * id * id}$ can have two groupings:</p><p>$(\\mathrm{id}*\\mathrm{id})*\\mathrm{id}\\quad$ and $\\quad\\mathrm{id}*(\\mathrm{id}*\\mathrm{id})$</p><p>Therefore, associativity remains ambiguous at both precedence levels.</p><p>Lets verify operator precedence,</p><p>Consider $\\mathrm{id + id * id}$</p><p>The only valid grouping is now $\\mathrm{id}+(\\mathrm{id}*\\mathrm{id})$</p><p>The competing grouping $(\\mathrm{id}+\\mathrm{id})*\\mathrm{id}$ is not possible because a $\\mathrm{term}$ cannot derive an addition expression.</p><p>Thus, precedence ambiguity has been eliminated.</p><p>Now,</p><p><strong>A : Incorrect.</strong> Enforces both precedence and left associativity. The grammar is unambiguous for these operators.</p><p><strong>B : Incorrect.</strong> Retains both precedence and associativity ambiguity.</p><p><strong>C : Incorrect.</strong> Gives addition higher precedence than multiplication.</p><p><strong>D : Correct.</strong> Enforces multiplication precedence while retaining ambiguity caused by associativity.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557840/go-classes-dpp-gate-cs-compiler-design-associativity-ambiguity\" target=\"_blank\">GATE Overflow #557840</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar:</p><p>$$\\begin{aligned} A &amp;\\rightarrow x=B;\\\\ B &amp;\\rightarrow B+B\\mid y \\end{aligned}$$</p><p>Here, $A,B$ are nonterminals, while $x$, $y$, $+$, $=$, and $;$ are terminals.</p><p>The grammar is ambiguous. Which of the following produces an equivalent unambiguous grammar in which $+$ is <strong>left associative</strong>?</p><p>In every option, the production for $A$ remains $A\\rightarrow x=B;$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B\\rightarrow y+B\\mid y$<br/></span>",
                "<span style=\"display: inline;\">$B\\rightarrow B+B\\mid y$<br/></span>",
                "<span style=\"display: inline;\">$B\\rightarrow B+y\\mid y$<br/></span>",
                "<span style=\"display: inline;\">$B\\rightarrow y+y\\mid y$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557838\"></a><div itemprop=\"text\"><p>The original production is,</p><p>$B\\rightarrow B+B\\mid y$</p><p>Consider the string,</p><p>$x = y + y + y;$</p><p>There are two possible groupings,</p><p>$(y+y)+y\\quad$ and $\\quad y+(y+y)$</p><p>The grammar permits both because either occurrence of $B$ in $B\\rightarrow B+B$ can expand recursively.</p><p>Thus, the same terminal string has two different parse trees.</p><p>Now,</p><p>For left associativity, the required grouping is $(y+y)+y$</p><p>We want a grammar in which only the left operand can contain further additions at the same level.</p><p>Consider,</p><p>$B\\rightarrow B+y\\mid y$</p><p>This allows recursion on the left but requires the right operand to be the single terminal $y$.</p><p>Lets verify the derivation,</p><p>Starting from $A:$</p><p>$A\\Rightarrow x=B;$</p><p>Apply $B\\rightarrow B+y:$</p><p>$\\Rightarrow x=B+y;$</p><p>Apply it again,</p><p>$\\Rightarrow x=B+y+y;$</p><p>Finally, use $B\\rightarrow y:$</p><p>$\\Rightarrow x=y+y+y;$</p><p>The grammar forces the parse-tree grouping $\\boxed{((y+y)+y)}$</p><p>There is no alternative parse grouping because the right operand in the recursive production is always $y$.</p><p>Lets verify Language Equivalence,</p><p>The original grammar generates assignments containing one or more $y$ operands connected by $+$.</p><p>The new grammar generates precisely the same set of expressions,</p><p>$\\begin{aligned} &amp;x = y;\\\\ &amp;x = y + y;\\\\ &amp;x = y + y + y;\\\\ &amp;\\vdots \\end{aligned}$</p><p>Only the parse-tree structure has changed.<br/> </p><p><strong>Lets analyze the options :</strong></p><p><strong>A : Incorrect</strong></p><p>The production $B\\rightarrow y+B\\mid y$ uses right recursion, which forces right associativity rather than the required left associativity.</p><p><strong>B : Incorrect</strong></p><p>The production $B\\rightarrow B+B\\mid y$ is the original ambiguous production.</p><p><strong>C : Correct</strong></p><p>The production $B\\rightarrow B+y\\mid y$ preserves the language while enforcing left associativity.</p><p><strong>D : Incorrect</strong></p><p>The production $B\\rightarrow y+y\\mid y$ generates only expressions containing one or two $y$ operands, rather than an arbitrary positive number.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557837/go-classes-dpp-gate-cs-compiler-design-ambiguous-to-unambiguous-grammar\" target=\"_blank\">GATE Overflow #557837</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three grammars for expressions involving the binary operators $-$ and $*$ and operands $a$, $b$, and $c$.</p><p><strong>Grammar $\\textbf{G}_\\textbf{1}:$</strong></p><p>$\\begin{aligned} \\mathrm{Expression} &amp;\\rightarrow \\mathrm{Term}\\mid \\mathrm{Expression}-\\mathrm{Term}\\\\ \\mathrm{Term} &amp;\\rightarrow \\mathrm{Factor}\\mid \\mathrm{Term}*\\mathrm{Factor}\\\\ \\mathrm{Factor} &amp;\\rightarrow a\\mid b\\mid c \\end{aligned}$</p><p><strong>Grammar $\\textbf{G}_\\textbf{2}:$</strong></p><p>$\\begin{aligned} \\mathrm{Expression} &amp;\\rightarrow \\mathrm{Term}\\mid \\mathrm{Term}-\\mathrm{Expression}\\\\ \\mathrm{Term} &amp;\\rightarrow \\mathrm{Factor}\\mid \\mathrm{Factor}*\\mathrm{Term}\\\\ \\mathrm{Factor} &amp;\\rightarrow a\\mid b\\mid c \\end{aligned}$</p><p><strong>Grammar $\\textbf{G}_\\textbf{3}:$</strong></p><p>$\\begin{aligned} \\mathrm{Expression} &amp;\\rightarrow \\mathrm{Term}\\mid \\mathrm{Term}*\\mathrm{Expression}\\\\ \\mathrm{Term} &amp;\\rightarrow \\mathrm{Factor}\\mid \\mathrm{Factor}-\\mathrm{Term}\\\\ \\mathrm{Factor} &amp;\\rightarrow a\\mid b\\mid c \\end{aligned}$</p><p>Which grammar or grammars implement the usual precedence and associativity of subtraction and multiplication?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$G_1$<br/></span>",
                "<span style=\"display: inline;\">$G_2$<br/></span>",
                "<span style=\"display: inline;\">$G_3$<br/></span>",
                "<span style=\"display: inline;\">None of the above.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"557836\"></a><div itemprop=\"text\"><p>We need to check two properties:</p><ol><li>Multiplication has higher precedence than subtraction.<br/> </li><li>Both multiplication and subtraction are left associative.</li></ol><p><br/><strong>Lets analyze Grammar $\\mathbf{G}_\\mathbf{1}:$</strong></p><p>The productions are:</p><p>$\\begin{aligned} E &amp;\\rightarrow T\\mid E-T\\\\ T &amp;\\rightarrow F\\mid T*F\\\\ F &amp;\\rightarrow a\\mid b\\mid c \\end{aligned}$</p><p>The grammar places subtraction at the Expression level and multiplication at the Term level.</p><p>Consequently, multiplication binds more tightly than subtraction.</p><p>Consider $a - b * c$,</p><p>The grammar forces $a-(b*c)$ rather than $(a-b)*c$</p><p>Now consider $a - b - c$,</p><p>The production $E\\rightarrow E-T$ is left recursive, forcing the grouping $(a-b)-c$</p><p>Similarly, $T\\rightarrow T*F$ makes multiplication left associative.</p><p>Therefore, <strong>$\\mathbf{G}_\\mathbf{1}$ satisfies both requirements.</strong></p><p><br/><strong>Grammar $\\mathbf{G}_\\mathbf{2}:$</strong></p><p>The productions are:</p><p>$\\begin{aligned} E &amp;\\rightarrow T\\mid T-E\\\\ T &amp;\\rightarrow F\\mid F*T \\end{aligned}$</p><p>Multiplication still has higher precedence than subtraction.</p><p>However, the recursive productions are right recursive.</p><p>For $a - b - c$, the grouping becomes $a-(b-c)$</p><p>Likewise $a * b * c$, groups as $a*(b*c)$</p><p>Hence, <strong>$\\mathrm{G}_2$</strong> uses right associativity rather than the required left associativity.</p><p><strong>$\\mathbf{G}_\\mathbf{2}$ is incorrect.</strong><br/> </p><p><strong>Grammar $\\mathbf{G}_\\mathbf{3}:$</strong></p><p>The productions are:</p><p>$\\begin{aligned} E &amp;\\rightarrow T\\mid T*E\\\\ T &amp;\\rightarrow F\\mid F-T \\end{aligned}$</p><p>Here, subtraction occurs at the lower grammar level, so it has higher precedence than multiplication.</p><p>For $a - b * c$, the grammar groups the expression as $(a-b)*c$</p><p>This reverses the usual precedence.</p><p>Furthermore, the recursive productions produce right-associative grouping.</p><p>Thus, <strong>$\\mathbf{G}_\\mathbf{3}$ is incorrect.</strong></p><p><br/><strong>Comparison :</strong></p><p>$\\begin{array}{|l|c|c|c|} \\hline \\textbf{Property} &amp; \\textbf{G1} &amp; \\textbf{G2} &amp; \\textbf{G3}\\\\ \\hline *\\text{ higher precedence than }- &amp; \\text{Yes} &amp; \\text{Yes} &amp; \\text{No}\\\\ \\hline \\text{Subtraction left associative} &amp; \\text{Yes} &amp; \\text{No} &amp; \\text{No}\\\\ \\hline \\text{Multiplication left associative} &amp; \\text{Yes} &amp; \\text{No} &amp; \\text{No}\\\\ \\hline \\text{Meets both requirements} &amp; \\text{Yes} &amp; \\text{No} &amp; \\text{No}\\\\ \\hline \\end{array}$</p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557833/go-classes-dpp-gate-cs-compiler-design-grammar-operator-precedence\" target=\"_blank\">GATE Overflow #557833</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following three grammars.</p><p>$$\\begin{array}{ccc} \\textbf{Grammar 1} \\qquad &amp; \\qquad\\textbf{Grammar 2}\\qquad &amp; \\qquad\\textbf{Grammar 3}\\\\ <br/>\\begin{aligned} A &amp;\\rightarrow BC\\\\ B &amp;\\rightarrow Ax\\mid x\\\\ C &amp;\\rightarrow yC\\mid y \\end{aligned} \\qquad &amp; \\qquad\\begin{aligned} A &amp;\\rightarrow BC\\\\ B &amp;\\rightarrow Ax\\mid x\\mid\\varepsilon\\\\ C &amp;\\rightarrow yC\\mid y \\end{aligned} \\qquad &amp; \\qquad\\begin{aligned} A &amp;\\rightarrow BC\\\\ B &amp;\\rightarrow Ax\\mid x\\mid\\varepsilon\\\\ C &amp;\\rightarrow yC\\mid y\\mid\\varepsilon \\end{aligned} \\end{array}$$</p><p>Assume $A$ is the start symbol in each grammar.</p><p>For each of the following statements about <strong>FIRST and FOLLOW sets</strong>, determine whether the stated set holds for the indicated grammar(s). <em>Select all correct statements.</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{FIRST}(A)=\\{x,y\\}$ holds for Grammar $2$ only.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{FOLLOW}(A)=\\{\\$,x\\}$ holds for all three grammars.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{FOLLOW}(B)=\\{\\$,x,y\\}$ holds for Grammars $2$ and $3$.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{FIRST}(C)=\\{y\\}$ holds for Grammars $1$ and $2$ only.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{FOLLOW}(C)=\\{\\$,x\\}$ holds for Grammar $1$ only.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"557810\"></a><div itemprop=\"text\"><p>The FIRST and FOLLOW sets for all three grammars are,</p><p>$$\\begin{array}{|l|c|c|c|} \\hline \\textbf{Set} &amp; \\textbf{Grammar 1} &amp; \\textbf{Grammar 2} &amp; \\textbf{Grammar 3}\\\\ \\hline \\mathrm{FIRST}(A) &amp; \\{x\\} &amp; \\{x,y\\} &amp; \\{x,y,\\varepsilon\\}\\\\ \\hline \\mathrm{FIRST}(B) &amp; \\{x\\} &amp; \\{x,\\varepsilon\\} &amp; \\{x,\\varepsilon\\}\\\\ \\hline \\mathrm{FIRST}(C) &amp; \\{y\\} &amp; \\{y\\} &amp; \\{y,\\varepsilon\\}\\\\ \\hline \\mathrm{FOLLOW}(A) &amp; \\{\\$,x\\} &amp; \\{\\$,x\\} &amp; \\{\\$,x\\}\\\\ \\hline \\mathrm{FOLLOW}(B) &amp; \\{y\\} &amp; \\{y\\} &amp; \\{y,\\$,x\\}\\\\ \\hline \\mathrm{FOLLOW}(C) &amp; \\{\\$,x\\} &amp; \\{\\$,x\\} &amp; \\{\\$,x\\}\\\\ \\hline \\end{array}$$</p><p><strong>A : Correct</strong></p><p>Only Grammar $2$ has $\\mathrm{FIRST}(A)=\\{x,y\\}$. </p><p>Grammar $3$ additionally contains $\\varepsilon$, since both $B$ and $C$ are nullable.</p><p><br/><strong>B : Correct</strong></p><p>Since $A$ is the start symbol, $\\$\\in\\mathrm{FOLLOW}(A)$. Also, $B\\rightarrow Ax$ places $x$ in $\\mathrm{FOLLOW}(A)$. </p><p>This holds for all three grammars.</p><p><br/><strong>C : Incorrect</strong></p><p>In Grammar $2$, $C$ is not nullable, so $\\mathrm{FOLLOW}(B)=\\{y\\}$. The stated set holds only for Grammar $3$.</p><p><br/><strong>D : Correct</strong></p><p>In Grammars $1$ and $2$, $C$ derives strings beginning with $y$, but not $\\varepsilon$. </p><p>Grammar $3$ additionally permits $C\\rightarrow\\varepsilon$.</p><p><br/><strong>E : Incorrect</strong></p><p>From $A\\rightarrow BC$, $\\mathrm{FOLLOW}(A)$ is included in $\\mathrm{FOLLOW}(C)$ because $C$ occurs at the end.</p><p>Therefore, $\\mathrm{FOLLOW}(C)=\\{\\$,x\\}$ in all three grammars.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557685/go-classes-dpp-gate-cs-compiler-design-first-%26-follow\" target=\"_blank\">GATE Overflow #557685</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the <strong>FIRST and FOLLOW sets</strong> for the following grammar:</p><p>$$\\begin{aligned} S &amp;\\rightarrow aSbB\\mid gA\\\\ A &amp;\\rightarrow CB\\mid cAh\\\\ B &amp;\\rightarrow d\\mid fC\\mid C\\\\ C &amp;\\rightarrow\\varepsilon \\end{aligned}$$</p><p>Here, $S$ is the start symbol.</p><p>Which of the following correctly gives $\\mathrm{FIRST}(A)$ and $\\mathrm{FOLLOW}(C)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\mathrm{FIRST}(A)=\\{c,d,f,\\varepsilon\\}$</p><p>$\\mathrm{FOLLOW}(C)=\\{d,f,b,h,\\$\\}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\mathrm{FIRST}(A)=\\{c,d,f\\}$</p><p>$\\mathrm{FOLLOW}(C)=\\{d,f,b,h,\\$\\}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\mathrm{FIRST}(A)=\\{c,d,f,\\varepsilon\\}$</p><p>$\\mathrm{FOLLOW}(C)=\\{b,h,\\$\\}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\mathrm{FIRST}(A)=\\{c,d,f,\\varepsilon\\}$</p><p>$\\mathrm{FOLLOW}(C)=\\{d,f,b,\\$\\}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557809\"></a><div itemprop=\"text\"><p>Consider the grammar:</p><p>\\[ \\begin{aligned} S&amp;\\rightarrow aSbB\\mid gA\\\\ A&amp;\\rightarrow CB\\mid cAh\\\\ B&amp;\\rightarrow d\\mid fC\\mid C\\\\ C&amp;\\rightarrow\\varepsilon \\end{aligned} \\]</p><p>The FIRST set of a non-terminal contains all terminals that can appear as the first symbol of a string derived from that non-terminal. It also contains \\(\\varepsilon\\) if the non-terminal can derive the empty string.</p><p>Finding \\(\\mathrm{FIRST}(A)\\)</p><p>First, consider the production:</p><p>\\[ C\\rightarrow\\varepsilon \\]</p><p>Since \\(C\\) directly derives the empty string,</p><p>\\[ \\mathrm{FIRST}(C)=\\{\\varepsilon\\} \\]</p><p>Now consider:</p><p>\\[ B\\rightarrow d\\mid fC\\mid C \\]</p><p>The production \\(B\\rightarrow d\\) contributes the terminal \\(d\\), while \\(B\\rightarrow fC\\) contributes \\(f\\).</p><p>Since \\(B\\rightarrow C\\) and \\(C\\rightarrow\\varepsilon\\), the non-terminal \\(B\\) can also derive \\(\\varepsilon\\).</p><p>Therefore,</p><p>\\[ \\boxed{\\mathrm{FIRST}(B)=\\{d,f,\\varepsilon\\}} \\]</p><p>Now examine the productions of \\(A\\):</p><p>\\[ A\\rightarrow CB\\mid cAh \\]</p><p>In the production \\(A\\rightarrow CB\\), the first non-terminal \\(C\\) derives \\(\\varepsilon\\). Therefore, the string \\(CB\\) can begin with any terminal in \\(\\mathrm{FIRST}(B)\\).</p><p>Since both \\(C\\) and \\(B\\) can derive \\(\\varepsilon\\), the entire string \\(CB\\) can also derive \\(\\varepsilon\\).</p><p>Thus,</p><p>\\[ \\mathrm{FIRST}(CB)=\\{d,f,\\varepsilon\\} \\]</p><p>The other production,</p><p>\\[ A\\rightarrow cAh \\]</p><p>begins with the terminal \\(c\\), so it contributes \\(c\\) to \\(\\mathrm{FIRST}(A)\\).</p><p>Combining the results,</p><p>\\[ \\boxed{\\mathrm{FIRST}(A)=\\{c,d,f,\\varepsilon\\}} \\]</p><p>Finding \\(\\mathrm{FOLLOW}(C)\\)</p><p>The FOLLOW set of a non-terminal contains all terminals that can appear immediately after it in a sentential form. It also contains the end-of-input marker \\(\\$\\) for the start symbol.</p><p>We first determine the FOLLOW sets of the other non-terminals that contribute to \\(\\mathrm{FOLLOW}(C)\\).</p><p>Since \\(S\\) is the start symbol,</p><p>\\[ \\$\\in\\mathrm{FOLLOW}(S) \\]</p><p>Consider:</p><p>\\[ S\\rightarrow aSbB \\]</p><p>The non-terminal \\(S\\) on the right-hand side is immediately followed by the terminal \\(b\\).</p><p>Therefore,</p><p>\\[ b\\in\\mathrm{FOLLOW}(S) \\]</p><p>Hence,</p><p>\\[ \\boxed{\\mathrm{FOLLOW}(S)=\\{b,\\$\\}} \\]</p><p>Now consider the production:</p><p>\\[ S\\rightarrow gA \\]</p><p>Since \\(A\\) appears at the end of the production, everything in \\(\\mathrm{FOLLOW}(S)\\) must also belong to \\(\\mathrm{FOLLOW}(A)\\).</p><p>Thus,</p><p>\\[ \\{b,\\$\\}\\subseteq\\mathrm{FOLLOW}(A) \\]</p><p>In the production</p><p>\\[ A\\rightarrow cAh \\]</p><p>the non-terminal \\(A\\) is immediately followed by the terminal \\(h\\).</p><p>Therefore,</p><p>\\[ h\\in\\mathrm{FOLLOW}(A) \\]</p><p>Combining these contributions,</p><p>\\[ \\boxed{\\mathrm{FOLLOW}(A)=\\{b,h,\\$\\}} \\]</p><p>Next, consider the non-terminal \\(B\\).</p><p>In</p><p>\\[ S\\rightarrow aSbB \\]</p><p>\\(B\\) appears at the end, so \\(\\mathrm{FOLLOW}(S)\\) is included in \\(\\mathrm{FOLLOW}(B)\\).</p><p>Similarly, in</p><p>\\[ A\\rightarrow CB \\]</p><p>\\(B\\) appears at the end, so \\(\\mathrm{FOLLOW}(A)\\) is also included in \\(\\mathrm{FOLLOW}(B)\\).</p><p>Therefore,</p><p>\\[ \\begin{aligned} \\mathrm{FOLLOW}(B) &amp;=\\mathrm{FOLLOW}(S)\\cup\\mathrm{FOLLOW}(A)\\\\ &amp;=\\{b,\\$\\}\\cup\\{b,h,\\$\\} \\end{aligned} \\]</p><p>Hence,</p><p>\\[ \\boxed{\\mathrm{FOLLOW}(B)=\\{b,h,\\$\\}} \\]</p><p>Finally, determine \\(\\mathrm{FOLLOW}(C)\\).</p><p>Consider the production:</p><p>\\[ A\\rightarrow CB \\]</p><p>Here, \\(C\\) is followed by \\(B\\).</p><p>According to the FOLLOW-set rule, all terminals in \\(\\mathrm{FIRST}(B)\\), excluding \\(\\varepsilon\\), must be included in \\(\\mathrm{FOLLOW}(C)\\).</p><p>Since</p><p>\\[ \\mathrm{FIRST}(B)=\\{d,f,\\varepsilon\\}, \\]</p><p>we obtain</p><p>\\[ \\{d,f\\}\\subseteq\\mathrm{FOLLOW}(C) \\]</p><p>Also, since \\(B\\Rightarrow\\varepsilon\\), the symbols in \\(\\mathrm{FOLLOW}(A)\\) must be included in \\(\\mathrm{FOLLOW}(C)\\).</p><p>Therefore,</p><p>\\[ \\{b,h,\\$\\}\\subseteq\\mathrm{FOLLOW}(C) \\]</p><p>Now consider:</p><p>\\[ B\\rightarrow fC \\]</p><p>Here, \\(C\\) appears at the end, so</p><p>\\[ \\mathrm{FOLLOW}(B)\\subseteq\\mathrm{FOLLOW}(C) \\]</p><p>Similarly, in</p><p>\\[ B\\rightarrow C, \\]</p><p>\\(C\\) again appears at the end, contributing \\(\\mathrm{FOLLOW}(B)\\) to \\(\\mathrm{FOLLOW}(C)\\).</p><p>Combining all contributions,</p><p>\\[ \\begin{aligned} \\mathrm{FOLLOW}(C) &amp;=\\{d,f\\}\\cup\\mathrm{FOLLOW}(A)\\cup\\mathrm{FOLLOW}(B)\\\\ &amp;=\\{d,f\\}\\cup\\{b,h,\\$\\}\\cup\\{b,h,\\$\\} \\end{aligned} \\]</p><p>Therefore,</p><p>\\[ \\boxed{\\mathrm{FOLLOW}(C)=\\{d,f,b,h,\\$\\}} \\]</p><p>The required FIRST and FOLLOW sets are,</p><p>\\[ \\boxed{ \\begin{aligned} \\mathrm{FIRST}(A)&amp;=\\{c,d,f,\\varepsilon\\}\\\\[4pt] \\mathrm{FOLLOW}(C)&amp;=\\{d,f,b,h,\\$\\} \\end{aligned} } \\]</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557684/go-classes-dpp-gate-cs-compiler-design-first-%26-follow\" target=\"_blank\">GATE Overflow #557684</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Compute <strong>FIRST and FOLLOW</strong> for the following grammar:</p><p>$$S\\rightarrow S(S)S\\mid\\varepsilon$$</p><p>Here, $S$ is the start symbol.</p><p>Which of the following correctly gives $\\mathrm{FIRST}(S)$ and $\\mathrm{FOLLOW}(S)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{FIRST}(S)=\\{(,\\varepsilon\\},\\quad \\mathrm{FOLLOW}(S)=\\{(,),\\$\\}$</p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{FIRST}(S)=\\{\\varepsilon\\},\\quad \\mathrm{FOLLOW}(S)=\\{),\\$\\}$</p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{FIRST}(S)=\\{(,\\varepsilon\\},\\quad \\mathrm{FOLLOW}(S)=\\{),\\$\\}$</p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{FIRST}(S)=\\{(,)\\},\\quad \\mathrm{FOLLOW}(S)=\\{(,),\\$\\}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557808\"></a><div itemprop=\"text\"><p>Consider the grammar,</p><p>$S\\rightarrow S(S)S\\mid\\varepsilon$</p><p>The FIRST set of a nonterminal contains all terminals that can appear as the first symbol of a string derived from that nonterminal. It also contains $\\varepsilon$ if the nonterminal can derive the empty string.</p><p>Since the production $S\\rightarrow\\varepsilon$ is present, we have,</p><p>$\\varepsilon\\in\\mathrm{FIRST}(S)$</p><p>Now consider the production:</p><p>$S\\rightarrow S(S)S$</p><p>The first symbol on the right-hand side is $S$, which can derive $\\varepsilon$. Therefore, the first $S$ can disappear, making the terminal $\\texttt{(}$ the first symbol.</p><p>For eg,</p><p>$S\\Rightarrow S(S)S\\Rightarrow(\\varepsilon)\\varepsilon\\Rightarrow()$</p><p>Hence,</p><p>$(\\ \\in\\mathrm{FIRST}(S)$</p><p>No other terminal can appear at the beginning of a string derived from $S$.</p><p>Therefore,</p><p>$\\boxed{\\mathrm{FIRST}(S)=\\{(,\\varepsilon\\}}$</p><p>Now,</p><p>The FOLLOW set of a nonterminal contains all terminals that can appear immediately after that nonterminal in a sentential form. It also contains the end-of-input marker $\\$$ if the nonterminal is the start symbol.</p><p>Since $S$ is the start symbol,</p><p>$\\$\\in\\mathrm{FOLLOW}(S)$</p><p>Consider the production again:</p><p>$S\\rightarrow S(S)S$</p><p>The nonterminal $S$ occurs three times on the right-hand side.</p><p>Now,</p><p>The first $S$ is immediately followed by the terminal $\\texttt{(}$.</p><p>By the FOLLOW-set rule, if a terminal immediately follows a nonterminal, that terminal must belong to its FOLLOW set.</p><p>Thus,</p><p>$(\\ \\in\\mathrm{FOLLOW}(S)$</p><p>The second $S$ appears inside the parentheses and is immediately followed by the terminal $\\texttt{)}$.</p><p>Therefore,</p><p>$)\\ \\in\\mathrm{FOLLOW}(S)$</p><p>The third $S$ appears at the end of the production.</p><p>For a production $A\\rightarrow\\alpha B$, the FOLLOW set of $A$ is included in the FOLLOW set of $B$.</p><p>Here, both $A$ and $B$ are $S$. Therefore, this occurrence only adds $\\mathrm{FOLLOW}(S)$ to itself and introduces no new symbols.</p><p>Combining all the symbols obtained,</p><p>$\\boxed{\\mathrm{FOLLOW}(S)=\\{(,),\\$\\}}$</p><p>Hence, the required FIRST and FOLLOW sets are:</p><p>$\\boxed{\\begin{aligned} \\mathrm{FIRST}(S)&amp;=\\{(,\\varepsilon\\}\\\\ \\mathrm{FOLLOW}(S)&amp;=\\{(,),\\$\\} \\end{aligned}}$</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557681/go-classes-dpp-gate-cs-compiler-design-first-%26-follow\" target=\"_blank\">GATE Overflow #557681</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Compute <strong>FIRST and FOLLOW sets</strong> for the following grammar:</p><p>$$\\begin{aligned} E &amp;\\rightarrow TE'\\\\ E' &amp;\\rightarrow +TE'\\mid\\varepsilon\\\\ T &amp;\\rightarrow FT'\\\\ T' &amp;\\rightarrow *FT'\\mid\\varepsilon\\\\ F &amp;\\rightarrow (E)\\mid\\mathrm{id} \\end{aligned}$$</p><p>Which of the following correctly gives $\\mathrm{FIRST}(E')$, $\\mathrm{FIRST}(T')$, $\\mathrm{FOLLOW}(E)$, $\\mathrm{FOLLOW}(T)$, and $\\mathrm{FOLLOW}(F)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{FIRST}(E') &amp;=\\{+,\\varepsilon\\}\\\\ \\mathrm{FIRST}(T') &amp;=\\{*,\\varepsilon\\}\\\\ \\mathrm{FOLLOW}(E) &amp;=\\{),\\$\\}\\\\ \\mathrm{FOLLOW}(T) &amp;=\\{+,),\\$\\}\\\\ \\mathrm{FOLLOW}(F) &amp;=\\{*,+,),\\$\\} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{FIRST}(E') &amp;=\\{+\\}\\\\ \\mathrm{FIRST}(T') &amp;=\\{*\\}\\\\ \\mathrm{FOLLOW}(E) &amp;=\\{),\\$\\}\\\\ \\mathrm{FOLLOW}(T) &amp;=\\{+,),\\$\\}\\\\ \\mathrm{FOLLOW}(F) &amp;=\\{*,+,),\\$\\} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{FIRST}(E') &amp;=\\{+,\\varepsilon\\}\\\\ \\mathrm{FIRST}(T') &amp;=\\{*,\\varepsilon\\}\\\\ \\mathrm{FOLLOW}(E) &amp;=\\{),\\$\\}\\\\ \\mathrm{FOLLOW}(T) &amp;=\\{+,),\\$\\}\\\\ \\mathrm{FOLLOW}(F) &amp;=\\{+,),\\$\\} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{FIRST}(E') &amp;=\\{+,\\varepsilon\\}\\\\ \\mathrm{FIRST}(T') &amp;=\\{*,\\varepsilon\\}\\\\ \\mathrm{FOLLOW}(E) &amp;=\\{),\\$\\}\\\\ \\mathrm{FOLLOW}(T) &amp;=\\{*,),\\$\\}\\\\ \\mathrm{FOLLOW}(F) &amp;=\\{+,),\\$\\} \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557680\"></a><div itemprop=\"text\"><p>Start with the nonterminal \\(F\\):</p><p>$F\\rightarrow(E)\\mid id$</p><p>The alternatives begin with $($ and $id$.</p><p>$\\therefore FIRST(F)=\\{(,id\\}$</p><p>For, $T'\\rightarrow *FT'\\mid\\varepsilon$ </p><p>we get, $FIRST(T')=\\{*,\\varepsilon\\}$</p><p>For, $T\\rightarrow FT'$ since \\(F\\) is not nullable:</p><p>$FIRST(T)=FIRST(F)=\\{(,id\\}$</p><p>For, $E'\\rightarrow +TE'\\mid\\varepsilon$</p><p>we get, $FIRST(E')=\\{+,\\varepsilon\\}$</p><p>Finally,</p><p>$E\\rightarrow TE'$</p><p>Since \\(T\\) is not nullable:</p><p>$FIRST(E)=FIRST(T)=\\{(,id\\}$</p><p>Now.</p><p>Since \\(E\\) is the start symbol, $\\$\\in FOLLOW(E)$</p><p>Also, $F\\rightarrow(E)$</p><p>Here, $)$ immediately follows \\(E\\).</p><p>$\\boxed{\\therefore FOLLOW(E)=\\{),\\$\\}}$</p><p>Now from,</p><p>$E\\rightarrow TE'$</p><p>\\(E'\\) occurs at the end.</p><p>$\\therefore FOLLOW(E)\\subseteq FOLLOW(E')$</p><p>Hence,</p><p>$FOLLOW(E')=\\{),\\$\\}$</p><p>Consider $E\\rightarrow TE' $</p><p>The symbols following \\(T\\) are described by \\(E'\\).</p><p>Since,</p><p>$FIRST(E')=\\{+,\\varepsilon\\}$</p><p>we add $+$ to \\(FOLLOW(T)\\).</p><p>Because \\(E'\\) can derive epsilon, we also add \\(FOLLOW(E)\\).</p><p>$ FOLLOW(T)=\\{+\\}\\cup\\{),\\$\\} $</p><p>$ \\boxed{FOLLOW(T)=\\{+,),\\$\\}}$</p><p>The occurrence of \\(T\\) in \\(E'\\rightarrow +TE'\\) gives the same resulting symbols.</p><p>From,</p><p>$ T\\rightarrow FT' $</p><p>\\(T'\\) appears at the end, so,</p><p>$FOLLOW(T)\\subseteq FOLLOW(T') $</p><p>$\\therefore FOLLOW(T')=\\{+,),\\$\\} $</p><p>Consider, $T\\rightarrow FT'$</p><p>Since,</p><p>$FIRST(T')=\\{*,\\varepsilon\\}$</p><p>we add <code>*</code> to \\(FOLLOW(F)\\).</p><p>Because \\(T'\\) can derive epsilon, we also add \\(FOLLOW(T)\\).</p><p>Thus,</p><p>$ FOLLOW(F)=\\{*\\}\\cup FOLLOW(T) $</p><p>$ \\boxed{FOLLOW(F)=\\{*,+,),\\$\\}} $</p><p><br/>Complete FIRST and FOLLOW Table</p><p>$\\begin{array}{|c|c|c|} \\hline \\textbf{Nonterminal} &amp; \\textbf{FIRST} &amp; \\textbf{FOLLOW}\\\\ \\hline E &amp; \\{(,\\mathrm{id}\\} &amp; \\{),\\$\\}\\\\ \\hline E' &amp; \\{+,\\varepsilon\\} &amp; \\{),\\$\\}\\\\ \\hline T &amp; \\{(,\\mathrm{id}\\} &amp; \\{+,),\\$\\}\\\\ \\hline T' &amp; \\{*,\\varepsilon\\} &amp; \\{+,),\\$\\}\\\\ \\hline F &amp; \\{(,\\mathrm{id}\\} &amp; \\{*,+,),\\$\\}\\\\ \\hline \\end{array}$</p><p>So,</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><p><strong>Correct.</strong> Includes epsilon in the appropriate FIRST sets and propagates all relevant FOLLOW symbols.</p></li><li><p><strong>Incorrect.</strong> Omits epsilon from both \\(FIRST(E')\\) and \\(FIRST(T')\\).</p></li><li><p><strong>Incorrect.</strong> Omits $*$ from \\(FOLLOW(F)\\).</p></li><li><p><strong>Incorrect.</strong> Misassigns the operator symbols that may follow \\(T\\) and \\(F\\).</p></li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557678/go-classes-dpp-gate-cs-compiler-design-first-%26-follow\" target=\"_blank\">GATE Overflow #557678</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar:</p><p>$$\\begin{aligned} S' &amp;\\rightarrow S\\ \\texttt{\\$}\\\\ S &amp;\\rightarrow Ab\\\\ A &amp;\\rightarrow aB\\mid a\\\\ B &amp;\\rightarrow b \\end{aligned}$$</p><p>Here, $\\varepsilon$ denotes the empty string and $\\texttt{\\$}$ denotes the end-of-input marker.</p><p>Compute the <strong>nullable status, FIRST sets and FOLLOW sets</strong> for the nonterminals $S,A,B$.</p><p>Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{Nullable}(S)&amp;=\\mathrm{Nullable}(A)=\\mathrm{Nullable}(B)=\\mathrm{False} \\end{aligned}$<br/>$\\quad\\begin{array}{ll} \\mathrm{FIRST}(S)=\\{a\\} &amp; \\mathrm{FOLLOW}(S)=\\{\\texttt{\\$}\\}\\\\ \\mathrm{FIRST}(A)=\\{a\\} &amp; \\mathrm{FOLLOW}(A)=\\{b\\}\\\\ \\mathrm{FIRST}(B)=\\{b\\} &amp; \\mathrm{FOLLOW}(B)=\\{b\\} \\end{array}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{Nullable}(S)&amp;=\\mathrm{Nullable}(A)=\\mathrm{Nullable}(B)=\\mathrm{False} \\end{aligned}$<br/>$\\quad\\begin{array}{ll} \\mathrm{FIRST}(S)=\\{a\\} &amp; \\mathrm{FOLLOW}(S)=\\{\\texttt{\\$}\\}\\\\ \\mathrm{FIRST}(A)=\\{a,b\\} &amp; \\mathrm{FOLLOW}(A)=\\{b\\}\\\\ \\mathrm{FIRST}(B)=\\{b\\} &amp; \\mathrm{FOLLOW}(B)=\\{\\texttt{\\$}\\} \\end{array}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\mathrm{Nullable}(A)=\\mathrm{True}$<br/>$\\quad\\begin{array}{ll} \\mathrm{FIRST}(S)=\\{a,b\\} &amp; \\mathrm{FOLLOW}(S)=\\{\\texttt{\\$}\\}\\\\ \\mathrm{FIRST}(A)=\\{a,\\varepsilon\\} &amp; \\mathrm{FOLLOW}(A)=\\{b\\}\\\\ \\mathrm{FIRST}(B)=\\{b\\} &amp; \\mathrm{FOLLOW}(B)=\\{b\\} \\end{array}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{Nullable}(S)&amp;=\\mathrm{Nullable}(A)=\\mathrm{Nullable}(B)=\\mathrm{False} \\end{aligned}$<br/>$\\quad\\begin{array}{ll} \\mathrm{FIRST}(S)=\\{a\\} &amp; \\mathrm{FOLLOW}(S)=\\{b,\\texttt{\\$}\\}\\\\ \\mathrm{FIRST}(A)=\\{a\\} &amp; \\mathrm{FOLLOW}(A)=\\{\\texttt{\\$}\\}\\\\ \\mathrm{FIRST}(B)=\\{b\\} &amp; \\mathrm{FOLLOW}(B)=\\{b\\} \\end{array}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557676\"></a><div itemprop=\"text\"><p>None of the nonterminals \\(S,A,B\\) can derive \\(\\varepsilon\\). </p><p>\\[ \\therefore \\mathrm{Nullable}(S)=\\mathrm{Nullable}(A)=\\mathrm{Nullable}(B)=\\mathrm{False} \\]</p><p>Now,</p><p>From \\(B\\rightarrow b\\), we obtain \\(\\mathrm{FIRST}(B)=\\{b\\}\\).</p><p>Both options of \\(A\\rightarrow aB\\mid a\\) begin with \\(a\\), so \\(\\mathrm{FIRST}(A)=\\{a\\}\\).</p><p>Since \\(S\\rightarrow Ab\\) and \\(A\\) is not nullable, \\(\\mathrm{FIRST}(S)=\\{a\\}\\).</p><p>Now,</p><ul><li><p>From \\(S'\\rightarrow S\\ \\$\\), we obtain \\(\\mathrm{FOLLOW}(S)=\\{\\$\\}\\).</p></li><li><p>From \\(S\\rightarrow Ab\\), terminal \\(b\\) immediately follows \\(A\\), so \\(\\mathrm{FOLLOW}(A)=\\{b\\}\\).</p></li><li><p>From \\(A\\rightarrow aB\\), \\(B\\) appears at the end. Therefore, \\(\\mathrm{FOLLOW}(B)=\\mathrm{FOLLOW}(A)=\\{b\\}\\).</p></li></ul><p>Thus, the correct sets are:</p><p>\\[ \\begin{array}{c|c|c|c} \\text{Nonterminal}&amp;\\text{Nullable}&amp;\\text{FIRST}&amp;\\text{FOLLOW}\\\\ \\hline S&amp;\\text{False}&amp;\\{a\\}&amp;\\{\\$\\}\\\\ A&amp;\\text{False}&amp;\\{a\\}&amp;\\{b\\}\\\\ B&amp;\\text{False}&amp;\\{b\\}&amp;\\{b\\} \\end{array} \\]</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557674/go-classes-dpp-gate-cs-compiler-design-first-%26-follow\" target=\"_blank\">GATE Overflow #557674</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar:</p><p>$$\\begin{aligned} P &amp;\\rightarrow Rb\\\\ R &amp;\\rightarrow PSa\\mid c\\\\ S &amp;\\rightarrow P\\mid b \\end{aligned}$$</p><p>The grammar does not satisfy the $LL(1)$ condition.</p><p>Which of the following grammars generates the same language and is suitable for $LL(1)$ parsing?</p><p>Here, $P$ is the start symbol, and $T$ is a newly introduced nonterminal.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} P &amp;\\rightarrow cbT\\\\ T &amp;\\rightarrow PabT\\mid babT\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} P &amp;\\rightarrow cbT\\\\ T &amp;\\rightarrow PabT\\mid babT \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} P &amp;\\rightarrow cbT\\\\ T &amp;\\rightarrow PabT\\mid bT\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} P &amp;\\rightarrow cT\\\\ T &amp;\\rightarrow PabT\\mid babT\\mid\\varepsilon \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557673\"></a><div itemprop=\"text\"><p>Substitute \\(R\\rightarrow PSa\\mid c\\) into \\(P\\rightarrow Rb\\):</p><p>\\[ P\\rightarrow PSab\\mid cb \\]</p><p>Now substitute \\(S\\rightarrow P\\mid b\\):</p><p>\\[ P\\rightarrow PPab\\mid Pbab\\mid cb \\]</p><p>This grammar contains immediate left recursion.</p><p>Using the standard transformation,</p><p>\\[ A\\rightarrow A\\alpha_1\\mid A\\alpha_2\\mid\\beta \\]</p><p>becomes,</p><p>\\[ \\begin{aligned} A&amp;\\rightarrow\\beta T\\\\ T&amp;\\rightarrow\\alpha_1T\\mid\\alpha_2T\\mid\\varepsilon \\end{aligned} \\]</p><p>We obtain,</p><p>\\[ \\boxed{ \\begin{aligned} P&amp;\\rightarrow cbT\\\\ T&amp;\\rightarrow PabT\\mid babT\\mid\\varepsilon \\end{aligned} } \\]</p><p>This preserves the original language and removes left recursion.</p><p>For $LL(1)$ verification,</p><p>\\[ FIRST(PabT)=\\{c\\} \\]</p><p>\\[ FIRST(babT)=\\{b\\} \\]</p><p>The third alternative derives \\(\\varepsilon\\), and,</p><p>\\[ FOLLOW(T)=\\{a,\\$\\} \\]</p><p>These sets are pairwise disjoint, so the grammar satisfies the $LL(1)$ condition.</p><p>B is incorrect because it omits \\(\\varepsilon\\), preventing the recursive suffix from terminating.</p><p>C is incorrect because replacing \\(babT\\) with \\(bT\\) changes the generated language.</p><p>D is incorrect because it omits the mandatory terminal \\(b\\) from the base production \\(cb\\).</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557671/go-classes-dpp-gate-cs-compiler-design-indirect-left-recursion\" target=\"_blank\">GATE Overflow #557671</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the grammar $G=(V,T,P,S)$, where, $V=\\{A,S\\},~T=\\{a,b,c\\}$ and the productions are:</p><p>$$\\begin{aligned} S &amp;\\rightarrow Aa\\mid ac\\\\ A &amp;\\rightarrow Sb\\mid Ac\\mid b \\end{aligned}$$</p><p>Identify the <strong>direct and indirect left recursion</strong> in the grammar and transform it into an equivalent grammar with <strong>no left recursion</strong>.</p><p>Which of the following is a valid transformation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow Aa\\mid ac\\\\ A &amp;\\rightarrow acbA'\\mid bA'\\\\ A' &amp;\\rightarrow abA'\\mid cA'\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow Aa\\mid ac\\\\ A &amp;\\rightarrow acbA'\\mid bA'\\\\ A' &amp;\\rightarrow abA'\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow Aa\\mid ac\\\\ A &amp;\\rightarrow acbA'\\mid bA'\\\\ A' &amp;\\rightarrow A'ab\\mid A'c\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow Aa\\mid ac\\\\ A &amp;\\rightarrow acbA'\\mid bA'\\\\ A' &amp;\\rightarrow ab\\mid c\\mid\\varepsilon \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557670\"></a><div itemprop=\"text\"><p>This grammar contains both direct and indirect left recursion.</p><p>Consider,</p><p>\\[ A\\rightarrow Ac \\]</p><p>The right-hand side begins with the same nonterminal \\(A\\).</p><p>Therefore, it is directly left recursive.</p><p>Now consider,</p><p>\\[ S\\rightarrow Aa \\]</p><p>Since,</p><p>\\[ A\\rightarrow Sb \\]</p><p>we obtain,</p><p>\\[ S\\Rightarrow Aa\\Rightarrow Sba \\]</p><p>Therefore, \\(S\\) is indirectly left recursive.</p><p>Similarly,</p><p>\\[ A\\Rightarrow Sb\\Rightarrow Aab \\]</p><p>demonstrates indirect left recursion involving \\(A\\).</p><p>Now, Substitute productions to expose immediate left recursion</p><p>We choose the nonterminal order \\(S,A\\).</p><p>The productions of \\(S\\) are:</p><p>\\[ S\\rightarrow Aa\\mid ac \\]</p><p>The productions of \\(A\\) are:</p><p>\\[ A\\rightarrow Sb\\mid Ac\\mid b \\]</p><p>Replace \\(S\\) in the production \\(A\\rightarrow Sb\\) using the alternatives for \\(S\\):</p><p>\\[ A\\rightarrow(Aa)b\\mid(ac)b\\mid Ac\\mid b \\]</p><p>Simplifying,</p><p>\\[ A\\rightarrow Aab\\mid acb\\mid Ac\\mid b \\]</p><p>Now the indirect left recursion has been exposed as immediate left recursion.</p><p>Now, Separate recursive and nonrecursive productions</p><p>The recursive alternatives are,</p><p>\\[ A\\rightarrow Aab \\]</p><p>\\[ A\\rightarrow Ac \\]</p><p>Therefore,</p><p>\\[ \\alpha_1=ab,\\qquad\\alpha_2=c \\]</p><p>The nonrecursive alternatives are:</p><p>\\[ \\beta_1=acb,\\qquad\\beta_2=b \\]</p><p>Apply the general elimination formula</p><p>For,</p><p>\\[ A\\rightarrow A\\alpha_1\\mid A\\alpha_2\\mid\\beta_1\\mid\\beta_2 \\]</p><p>replace the productions with,</p><p>\\[ A\\rightarrow\\beta_1A'\\mid\\beta_2A' \\]</p><p>\\[ A'\\rightarrow\\alpha_1A'\\mid\\alpha_2A'\\mid\\varepsilon \\]</p><p>Substituting the values,</p><p>\\[ A\\rightarrow acbA'\\mid bA' \\]</p><p>\\[ A'\\rightarrow abA'\\mid cA'\\mid\\varepsilon \\]</p><p>Now,</p><p>The productions of \\(S\\) remain unchanged:</p><p>\\[ \\boxed{ \\begin{aligned} S&amp;\\rightarrow Aa\\mid ac\\\\ A&amp;\\rightarrow acbA'\\mid bA'\\\\ A'&amp;\\rightarrow abA'\\mid cA'\\mid\\varepsilon \\end{aligned} } \\]</p><p>There is no longer any left recursion.</p><ul><li><p>\\(A\\) begins with a terminal in both alternatives.</p></li><li><p>\\(A'\\) begins with $a, c$ or produces epsilon.</p></li><li><p>\\(S\\rightarrow Aa\\) cannot lead back to \\(S\\) as its leftmost symbol because \\(A\\) now begins with a terminal.</p></li></ul><p><br/>Lets analyze the options,</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><p><strong>Correct.</strong> Both recursive suffixes $ab$ and $c$ are preserved, with epsilon permitting termination.</p></li><li><p><strong>Incorrect.</strong> The recursive alternative corresponding to \\(A\\rightarrow Ac\\) has been omitted.</p></li><li><p><strong>Incorrect.</strong> \\(A'\\rightarrow A'ab\\) and \\(A'\\rightarrow A'c\\) introduce immediate left recursion.</p></li><li><p><strong>Incorrect.</strong> It permits only one recursive suffix, whereas the original grammar allows arbitrarily many repetitions.</p></li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557668/go-classes-dpp-gate-cs-compiler-design-indirect-left-recursion\" target=\"_blank\">GATE Overflow #557668</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following <strong>context-free grammar</strong>. It corresponds roughly to the syntax of lists in LISP. $S$ is the start symbol, and the terminals are $\\texttt{a}$, $\\texttt{,}$, $\\texttt{(}$, and $\\texttt{)}$.</p><p>$$\\begin{aligned} S &amp;\\rightarrow \\texttt{()}\\mid\\texttt{a}\\mid\\texttt{(}A\\texttt{)}\\\\ A &amp;\\rightarrow S\\mid A\\texttt{,}S \\end{aligned}$$</p><p>Rewrite this grammar to make it suitable for <strong>recursive descent parsing</strong>.</p><p>Which of the following gives an equivalent grammar after <strong>removing the common prefix and eliminating left recursion</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow \\texttt{a}\\mid\\texttt{(}S'\\\\ S' &amp;\\rightarrow \\texttt{)}\\mid A\\texttt{)}\\\\ A &amp;\\rightarrow SA'\\\\ A' &amp;\\rightarrow \\texttt{,}SA'\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow \\texttt{a}\\mid\\texttt{(}S'\\\\ S' &amp;\\rightarrow \\texttt{)}\\mid A\\texttt{)}\\\\ A &amp;\\rightarrow S\\mid A\\texttt{,}S \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow \\texttt{a}\\mid\\texttt{(}S'\\\\ S' &amp;\\rightarrow \\texttt{)}\\mid A\\texttt{)}\\\\ A &amp;\\rightarrow SA'\\\\ A' &amp;\\rightarrow \\texttt{,}SA' \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow \\texttt{a}\\mid\\texttt{(}S'\\\\ S' &amp;\\rightarrow \\texttt{)}\\mid A\\texttt{)}\\\\ A &amp;\\rightarrow SA'\\\\ A' &amp;\\rightarrow SA'\\mid\\varepsilon \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557722\"></a><div itemprop=\"text\"><p>$$\\textbf{Working Out}$$</p><p style=\"text-align:center\"><img alt=\"\" height=\"816\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1707782831846430652\" width=\"800\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557666/go-classes-dpp-gate-cs-compiler-design-left-recursion-elimination\" target=\"_blank\">GATE Overflow #557666</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar: $$\\begin{aligned} S &amp;\\rightarrow AB\\mid c\\\\ A &amp;\\rightarrow a\\mid\\varepsilon\\\\ B &amp;\\rightarrow b\\mid Bb \\end{aligned}$$ The grammar contains left recursion.</p><p>Which of the following transformations eliminates left recursion and makes the grammar suitable for $LL(1)$ parsing without changing the language?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow AB\\mid c\\\\ A &amp;\\rightarrow a\\mid\\varepsilon\\\\ B &amp;\\rightarrow bB'\\\\ B' &amp;\\rightarrow bB'\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow AB\\mid c\\\\ A &amp;\\rightarrow a\\mid\\varepsilon\\\\ B &amp;\\rightarrow bB'\\\\ B' &amp;\\rightarrow bB'\\mid b \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow AB\\mid c\\\\ A &amp;\\rightarrow a\\mid\\varepsilon\\\\ B &amp;\\rightarrow bB'\\\\ B' &amp;\\rightarrow bB' \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} S &amp;\\rightarrow AB\\mid c\\\\ A &amp;\\rightarrow a\\mid\\varepsilon\\\\ B &amp;\\rightarrow B'b\\\\ B' &amp;\\rightarrow B'b\\mid\\varepsilon \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557662\"></a><div itemprop=\"text\"><p>A grammar is immediately left recursive when it contains a production of the form:</p><p>$A\\rightarrow A\\alpha$</p><p>In the given grammar:</p><p>$B\\rightarrow b\\mid Bb$</p><p>The production $B\\rightarrow Bb$ is immediately left recursive.</p><p>Now,</p><p>The general form is $A\\rightarrow A\\alpha\\mid\\beta$</p><p>For the given production:</p><p>$\\alpha=b,\\qquad\\beta=b$</p><p>Now,</p><p>Replace, $A\\rightarrow A\\alpha\\mid\\beta$</p><p>with:</p><p>$A\\rightarrow\\beta A'$</p><p>$A'\\rightarrow\\alpha A'\\mid\\varepsilon$</p><p>Applying this to $B$:</p><p>$B\\rightarrow bB'$</p><p>$B'\\rightarrow bB'\\mid\\varepsilon$</p><p>Now,</p><p>The original grammar for $B$ generates $:b,\\ bb,\\ bbb,\\ bbbb,\\ldots$</p><p>Thus,</p><p>$L(B)=\\{b^n\\mid n\\geq 1\\}$</p><p>The transformed grammar also generates:</p><p>$B\\Rightarrow bB'\\Rightarrow b$</p><p>$B\\Rightarrow bB'\\Rightarrow bbB'\\Rightarrow bb$</p><p>$B\\Rightarrow bB'\\Rightarrow bbB'\\Rightarrow bbbB'\\Rightarrow bbb$</p><p>Therefore, both versions generate the same language.</p><p>Now,</p><p>The productions for $S$ remain,</p><p>$S\\rightarrow AB\\mid c$</p><p>Since,</p><p>$A\\rightarrow a\\mid\\varepsilon$</p><p>and $B$ generates one or more occurrences of $b$, the grammar generates strings such as, $b,bb, ab, abb, c $</p><p>The transformed grammar preserves these possibilities.</p><p>Furthermore, the alternatives of $S$ begin with $a$ or $b$, and $c$, respectively. They can therefore be distinguished using one symbol of lookahead.</p><p>Now,</p><p><strong>A : Correct</strong></p><p>Eliminates immediate left recursion and preserves the language.</p><p><strong>B : Incorrect</strong></p><p>Forces the suffix $B'$ to generate at least one additional $\\texttt{b}$, excluding the string $\\texttt{b}$.</p><p><strong>C : Incorrect</strong></p><p>The nonterminal $B'$ has no terminating production, so it cannot generate a finite terminal string.</p><p><strong>D : Incorrect</strong></p><p>The production $B'\\rightarrow B'b$ is still immediately left recursive.</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557660/go-classes-dpp-gate-cs-compiler-design-left-recursion-elimination\" target=\"_blank\">GATE Overflow #557660</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following productions for declarations in a language similar to C:</p><p>$\\begin{aligned}<br/>\\mathrm{decl}\\rightarrow{}&amp;\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{SEMICOLON} \\mid{}\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON} \\end{aligned}$</p><p>These productions have a <strong>common prefix</strong>.</p><p>Which of the following is the correct <strong>left-factored form</strong> of the productions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{declTail}\\\\ \\mathrm{declTail}&amp;\\rightarrow\\mathrm{SEMICOLON}\\mid\\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{SEMICOLON}\\ \\mathrm{declTail}\\\\ \\mathrm{declTail}&amp;\\rightarrow\\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\mid\\varepsilon \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{declTail}\\\\ \\mathrm{declTail}&amp;\\rightarrow\\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON} \\end{aligned}$<br/> </p></span>",
                "<span style=\"display: inline;\"><p>$\\quad\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{declTail}\\\\ \\mathrm{declTail}&amp;\\rightarrow\\mathrm{SEMICOLON}\\mid\\mathrm{ASSIGN}\\ \\mathrm{INTLIT} \\end{aligned}$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"557659\"></a><div itemprop=\"text\"><p>Left factoring is a grammar transformation used to eliminate common prefixes from alternatives of the same nonterminal.</p><p>Consider the general production,</p><p>$A\\rightarrow\\alpha\\beta_1\\mid\\alpha\\beta_2$</p><p>Here, $\\alpha$ is the common prefix.</p><p>The equivalent left-factored grammar is,</p><p>$A\\rightarrow\\alpha A'$</p><p>$A'\\rightarrow\\beta_1\\mid\\beta_2$</p><p><br/>Lets Identify the Common Prefix</p><p>The original grammar is:</p><p>$\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{SEMICOLON}\\mid\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON} \\end{aligned}$</p><p>Both alternatives begin with $\\mathrm{TYPE}\\ \\mathrm{ID}$</p><p>$\\therefore \\alpha=\\mathrm{TYPE}\\ \\mathrm{ID}$</p><p>Now, Lets identify the remaining suffixes</p><p>After removing the common prefix, the suffixes are,</p><p>$\\beta_1=\\mathrm{SEMICOLON}$</p><p>$\\beta_2=\\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON}$</p><p>Now,</p><p>Let the new nonterminal be $\\mathrm{declTail}$.</p><p>The transformed grammar becomes,</p><p>$\\begin{aligned} \\mathrm{decl}&amp;\\rightarrow\\mathrm{TYPE}\\ \\mathrm{ID}\\ \\mathrm{declTail}\\\\ \\mathrm{declTail}&amp;\\rightarrow\\mathrm{SEMICOLON}\\mid\\mathrm{ASSIGN}\\ \\mathrm{INTLIT}\\ \\mathrm{SEMICOLON} \\end{aligned}$</p><p>The resulting grammar retains both forms of declarations.</p><p>For eg, it can derive $\\texttt{int x;}$ and $\\texttt{int x = 10;}$</p><p>The common prefix $\\mathrm{TYPE}\\ \\mathrm{ID}$ is now recognized before the parser chooses between the two suffixes.</p><p>So,</p><p><strong>A : Correct</strong></p><p>Removes the common prefix while preserving both original productions.</p><p><strong>B : Incorrect</strong></p><p>Generates an extra semicolon before the assignment operator.</p><p><strong>C : Incorrect</strong></p><p>Eliminates declarations without an initializer.</p><p><strong>D : Incorrect</strong></p><p>Does not require the final semicolon for initialized declarations.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/557658/go-classes-dpp-gate-cs-compiler-design-left-factoring\" target=\"_blank\">GATE Overflow #557658</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 3",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is <strong>FALSE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A compiler is designed with knowledge of both the source programming language and the target instruction set architecture.<br/></span>",
                "<span style=\"display: inline;\">The number of static instructions in a program can be determined by examining its assembly code.<br/></span>",
                "<span style=\"display: inline;\">A compiler can take assembled code for one instruction set architecture and efficiently generate object or machine code for another architecture.<br/></span>",
                "<span style=\"display: inline;\">Translating assembly instructions into machine code is generally simpler than translating C source code into assembly.<br/></span>",
                "<span style=\"display: inline;\">Compiler optimizations generally occur before the final assembly code is produced.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556588\"></a><div itemprop=\"text\"><p>A compiler normally translates a source program into a target representation suitable for a particular architecture.</p><p>The target <strong>Instruction Set Architecture (ISA)</strong> determines the available machine instructions, registers, addressing modes, and other machine-level properties.</p><p>Different architectures may have different instruction formats and registers.</p><p>For example, code generated for an <strong>x$\\mathbf{86}$</strong> architecture cannot generally be executed directly by a processor supporting only the <strong>ARM</strong> instruction set.</p><p><strong>Now analyze the options :</strong></p><p><strong>A : True</strong></p><p>A conventional compiler must understand the syntax and semantics of the source language and generate code suitable for its target architecture.</p><p><strong>B : True</strong></p><p>Static instructions are the instructions present in the program representation, as opposed to the number of instructions actually executed at runtime.</p><p>An assembly listing can be used to determine the static instruction count represented by that listing.</p><p><strong>C : False</strong></p><p>A conventional compiler does not generally take already-assembled code for one ISA and automatically produce efficient machine code for a different ISA.</p><p>Once high-level source code has been compiled into low-level instructions, important source-level information may be lost, complicating translation and optimization.</p><p>Specialised <strong>binary translation</strong> and <strong>recompilation systems</strong> can perform cross-ISA translation, so the statement is not an absolute impossibility.</p><p>The issue is its general claim about conventional compilers and efficient output.</p><p><strong>D : True</strong></p><p>Assembly-to-machine-code conversion involves relatively direct translation of instructions and operands into binary encodings.</p><p>In contrast, high-level-language compilation requires substantially more analysis, including program semantics, intermediate representation, and code generation.</p><p><strong>E : True</strong></p><p>Many compiler optimizations operate on intermediate representations before assembly generation.</p><p>Although machine-level and post-assembly optimizations also exist, the statement is generally correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556584/go-classes-dpp-gate-cs-compiler-design-isa\" target=\"_blank\">GATE Overflow #556584</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A programmer accidentally writes multiplication instead of division while implementing a calculation. Which of the following detects this mistake automatically?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both compiler and interpreter<br/></span>",
                "<span style=\"display: inline;\">Compiler only<br/></span>",
                "<span style=\"display: inline;\">Interpreter only<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"556579\"></a><div itemprop=\"text\"><p>Consider the following program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int a = 20; int b = 5; int result = a * b;\">int a = 20; int b = 5; int result = a * b;</pre><p>Suppose the programmer intended to calculate:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int result = a / b;\">int result = a / b;</pre><p>However, the actual program performs <strong>multiplication</strong> instead of <strong>division</strong>.</p><p>The program is <strong>syntactically and semantically valid</strong>. Both operators are legal for integer operands.</p><p>The compiler checks whether the program follows the rules of the programming language, not whether every calculation matches the programmer's intentions.</p><p>Lets see the options now,</p><p><strong>A : Incorrect</strong></p><p>Neither automatically knows that division was intended.</p><p><strong>B : Incorrect</strong></p><p>The multiplication expression is valid.</p><p><strong>C : Incorrect</strong></p><p>An interpreter executes the specified operation and cannot infer the intended operation merely from this code.</p><p><strong>D : Correct</strong></p><p>This is a <strong>logical error</strong> that ordinarily requires testing, review, or an external specification to identify.</p><p>Therefore, </p><p><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556577/go-classes-dpp-gate-cs-compiler-design-detection-of-logical-errors\" target=\"_blank\">GATE Overflow #556577</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following arammar $G$ :$$<br/>\\begin{aligned}<br/>&amp; S \\rightarrow(L) \\mid a \\\\<br/>&amp; L \\rightarrow L, S \\mid S<br/>\\end{aligned}<br/>$$<br/>Which of the following statement(s) is/are TRUE regarding the parsing of grammar $G$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE GRAMMAR IS $\\mathrm{LR(0)}$.<br/></span>",
                "<span style=\"display: inline;\">THE GRAMMAR IS $\\mathrm{LL(1)}$.<br/></span>",
                "<span style=\"display: inline;\">THE grammar is $\\mathrm{SLR(1)}$.<br/></span>",
                "<span style=\"display: inline;\">THE GRAMMAR IS AN OPERATOR GRAMMAR.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"520939\"></a><div itemprop=\"text\"><p><strong>B, D</strong></p><p><strong>Conflicts occur in both SLR(1) and LR(0) </strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520537/go-classes-dpp-compiler-grammar\" target=\"_blank\">GATE Overflow #520537</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with terminal set $\\Sigma=\\{a, b, c, d\\}$ and non-terminal set $V=\\{S, A, B\\}$ :</p><p>$$<br/>\\begin{gathered}<br/>S \\rightarrow a A b \\mid b B a \\\\<br/>A \\rightarrow c S \\mid \\epsilon \\\\<br/>B \\rightarrow d S \\mid \\epsilon<br/>\\end{gathered}<br/>$$</p><p><br/>Which of the following statements is/are CORRECT regarding the $\\mathrm{LL(1)}$ parsing table for grammar $G$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE $\\mathrm{FIRST}(S)$ SET CONTAINS $\\{a, b\\}$.<br/></span>",
                "<span style=\"display: inline;\">THE $\\mathrm{FOLLOW}(A)$ SET CONTAINS $\\{b\\}$.<br/></span>",
                "<span style=\"display: inline;\">THERE IS A REDUCE-REDUCE CONFLICT IN THE PARSING TABLE.<br/></span>",
                "<span style=\"display: inline;\">THE GRAMMAR $G$ IS $\\mathrm{LL(1)}$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"518645\"></a><div itemprop=\"text\"><ol><li><strong>FIRST Sets</strong><br/> <ul><li>$\\operatorname{FIRST}(S)=\\{a, b\\}$<br/> </li><li>$\\operatorname{FIRST}(A)=\\{c, \\epsilon\\}$<br/> </li><li>$\\operatorname{FIRST}(B)=\\{d, \\epsilon\\}$<br/> </li></ul></li><li><strong>FOLLOW Sets</strong><br/> <ul><li>$\\operatorname{FOLLOW}(S)=\\{\\$\\} \\cup\\{\\operatorname{FIRST}(b)$ from $S \\rightarrow a A b\\} \\cup\\{F I R S T(a)$ from $S \\rightarrow b B a\\}$<br/> <ul><li>$\\operatorname{FOLLOW}(S)=\\{\\$, b, a\\}$<br/> </li></ul></li><li>$\\operatorname{FOLLOW}(A)=\\{b\\}($ from $S \\rightarrow a A b)$<br/> </li><li>$\\operatorname{FOLLOW}(B)=\\{a\\}($ from $S \\rightarrow b B a)$<br/> </li></ul></li></ol><p>(A) IS CORRECT: $F I R S T(S)=\\{a, b\\}$.<br/><br/>(B) IS CORRECT: FOLLOW $(A)=\\{b\\}$.<br/><br/>(C) IS INCORRECT: There are no conflicts; it is a deterministic $L L(1)$ table.<br/><br/>(D) IS CORRECT: The grammar satisfies all $L L(1)$ conditions.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518644/go-classes-dpp-compiler-ll-1-parser\" target=\"_blank\">GATE Overflow #518644</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with start symbol $S$ :</p><p>$$<br/>\\begin{aligned}<br/>&amp; S \\rightarrow L=R \\\\<br/>&amp; S \\rightarrow R \\\\<br/>&amp; L \\rightarrow * R \\\\<br/>&amp; L \\rightarrow i d . \\\\<br/>&amp; R \\rightarrow L<br/>\\end{aligned}<br/>$$</p><p><br/>Let $I$ be the set of $L R(1)$ items. During the construction of the canonical $L R(1)$ parsing table, a state contains the following items:</p><p>$$<br/>\\begin{aligned}<br/>&amp; L \\rightarrow i d \\cdot,[=] \\\\<br/>&amp; R \\rightarrow L^{\\cdot},[\\$]<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following statements is <strong>TRUE</strong> regarding this state?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THERE IS A SHIFT-REDUCE CONFLICT.<br/></span>",
                "<span style=\"display: inline;\">THERE IS A REDUCE-REDUCE CONFLICT.<br/></span>",
                "<span style=\"display: inline;\">THERE IS NO CONFLICT IN THIS STATE FOR AN $\\mathrm{LR(1)}$ PARSER.<br/></span>",
                "<span style=\"display: inline;\">THIS STATE WILL RESULT IN A REDUCE-REDUCE CONFLICT ONLY IN AN $\\mathrm{SLR(1)}$ PARSER.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"517996\"></a><div itemprop=\"text\"><p>$\\text { For LR(1) parser: }$</p><ul><li>Lookahead for Item $1: \\{=\\}$<br/> </li><li>Lookahead for Item $2: \\{\\$\\}$</li></ul><p>Since the intersection of these sets is empty $(\\{=\\} \\cap\\{\\$\\}=\\emptyset$ ), there is<strong> NO Reduce-Reduce conflict</strong> in $L R(1)$. Additionally, since there are no items in this state where the dot is followed by a terminal (e.g., $A \\rightarrow \\alpha \\cdot a \\beta$ ), there is <strong>NO Shift-Reduce conflict.</strong></p><p>$$<br/>\\operatorname{FOLLOW}(L)=\\operatorname{FOLLOW}(R)=\\{=, \\$\\}<br/>$$</p><p><br/><strong>Why the Conflict Occurs in</strong> $SLR(1)$<br/><br/>In the state given:</p><ul><li>$L \\rightarrow i d \\cdot,[=]$<br/> </li><li>$R \\rightarrow L \\cdot,[\\$]$<br/> </li></ul><p>An $S L R(1)$ <strong>parser</strong> does not use the specific $L R(1)$ lookaheads [=] and [\\$]. Instead, it allows a reduction based on the FOLLOW sets:</p><ul><li>Reduction $1(L \\rightarrow i d)$ : Occurs for any input in $F O L L O W(L)$, which is $\\{=, \\$\\}$.<br/> </li><li>Reduction $2(R \\rightarrow L)$ : Occurs for any input in $\\operatorname{FOLLOW}(R)$, which is $\\{=\\$\\}$.</li></ul><p>Because both $=$ and $\\$$ are in both sets, the $S L R(1)$ parser faces a <strong>Reduce-Reduce conflict</strong> for both symbols.</p><p>That's why $LR(0)$ parser will also raise $RR$ conflict<br/><br/>Since the option D says only in $\\operatorname{slr}(1)$ parser<br/><br/>Hence it is wrong</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/517995/go-classes-dpp-compiler-parsing\" target=\"_blank\">GATE Overflow #517995</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following context-free grammar:</p><p>$$<br/>\\begin{aligned}<br/>&amp; E \\rightarrow T R \\\\<br/>&amp; R \\rightarrow+T R \\mid \\epsilon \\\\<br/>&amp; T \\rightarrow F Y \\\\<br/>&amp; Y \\rightarrow * F Y \\mid \\epsilon \\\\<br/>&amp; F \\rightarrow(E) \\mid i d<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following statements regarding the FIRST and FOLLOW sets of this grammar is FALSE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left.\\operatorname{FOLLOW}(T)=\\left\\{{ }^*,+,\\right), \\$\\right\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{FIRST}(R)=\\{+$, epsilon $\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{FOLLOW}(Y)=\\{+),, \\$\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{FIRST}(E)=\\{($, id $\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513577\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; \\operatorname{FIRST}(\\mathrm{R})=\\{+, \\epsilon\\} \\\\<br/> &amp; \\operatorname{FIRST}(\\mathrm{E})=\\{(, \\text { id }\\} \\\\<br/> &amp; \\operatorname{FOLLOW}(\\mathrm{T})=\\{+, \\$,)\\} \\\\<br/> &amp; \\operatorname{FOLLOW}(\\mathrm{Y})=\\{+, \\$,)\\}<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513576/go-classes-dpp-compiler-first-and-follow-set\" target=\"_blank\">GATE Overflow #513576</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with non-terminals $\\{S, A, B, C\\}$ and terminals $\\{a, b, c, d, g\\}$ :</p><p>$$<br/>\\begin{aligned}<br/>&amp; S \\rightarrow A B \\\\<br/>&amp; A \\rightarrow a A \\mid \\epsilon \\\\<br/>&amp; B \\rightarrow b B \\mid C \\\\<br/>&amp; C \\rightarrow c C \\mid d \\mid \\epsilon<br/>\\end{aligned}<br/>$$</p><p><br/>What is the FOLLOW set of the non-terminal $A$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{a, b, c, d\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{b, c, d, \\$\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{b, c, d\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{B, b, c, d, \\$\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513575\"></a><div itemprop=\"text\">$\\{b, c, d, \\$\\}$<br/> <br/> Since $S \\rightarrow A B$, $\\operatorname{FOLLOW}(\\mathrm{A})$ contains $\\operatorname{FIRST}(\\mathrm{B})$. Because $B$ is nullable ( $\\mathrm{B} \\rightarrow \\mathrm{C} \\rightarrow \\epsilon$ ), $\\operatorname{FOLLOW}(\\mathrm{A})$ also inherits $\\operatorname{FOLLOW}(\\mathrm{S})$, which is $\\{\\$\\}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513574/go-classes-dpp-compiler-follow-set\" target=\"_blank\">GATE Overflow #513574</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with terminal set $\\{i d, \\&amp;, \\oplus, \\odot,()$,$\\} :$</p><p>Which of the following statements is <strong>TRUE</strong> regarding the operators $\\&amp;$, $\\oplus$, and $\\odot$ ?</p><p><strong>Given Details:</strong></p><ul><li>$E::=E \\& T \\mid T$</li><li>$T::=F \\oplus T \\mid F$</li><li>$F::=F \\odot i d|(E)| i d$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">ALL THREE OPERATORS ARE LEFT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">'$\\&amp;$' AND '$\\odot$' ARE LEFT ASSOCIATIVE, WHILE '$\\oplus$' IS RIGHT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">'$\\&amp;$' IS RIGHT ASSOCIATIVE, WHILE ' $\\oplus$ ' AND ' $\\odot$ ' ARE LEFT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">'$\\&amp;$' HAS THE HIGHEST PRECEDENCE AND IS LEFT ASSOCIATIVE</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"511252\"></a><div itemprop=\"text\">Answer: (B) '&amp;' AND $\\odot$' ARE LEFT ASSOCIATIVE, WHILE $\\oplus$' IS RIGHT ASSOCIATIVE' <br/> The associativity of an operator in a grammar is determined by the position of the recursive non-terminal relative to the operator in the production rule: <br/> <br/> • Left recursion $A \\to A \\text{ op } B$ indicates left associativity. <br/> • Right recursion $A \\to B \\text{ op } A$ indicates right associativity. <br/> <br/> Applying this to the given grammar: <br/> <br/> • For the $\\&amp;$ operator, the production $E ::= E\\&amp;T$ has left recursion, so $\\&amp;$ is left associative. <br/> • For the $\\oplus$ operator, the production $T ::= F\\oplus T$ has right recursion, so $\\oplus$ is right associative. <br/> • For the $\\odot$ operator, the production $F ::= F\\odot id$ has left recursion, so $\\odot$ is left associative. <br/> <br/> Therefore, the statement in option B is the true statement.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/511110/go-classes-dpp-compiler-associativity\" target=\"_blank\">GATE Overflow #511110</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In the following grammar defining operations on identifiers:</p><p>Which of the following is<strong> TRUE</strong>?</p><p><strong>Given Details:</strong></p><ul><li>$A::=B \\# A \\mid B$</li><li>$B::=B \\diamond C \\mid C$</li><li>$C::=i d$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">BOTH '$\\#$' AND '$\\diamond$' ARE LEFT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">BOTH '$\\#$' AND '$\\diamond$' ARE RIGHT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">'$\\#$' IS LEFT ASSOCIATIVE WHILE '$\\diamond$' IS RIGHT ASSOCIATIVE</span>",
                "<span style=\"display: inline;\">'$\\#$' IS RIGHT ASSOCIATIVE WHILE '$\\diamond$' IS LEFT ASSOCIATIVE</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"511130\"></a><div itemprop=\"text\">Option D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/511109/go-classes-dpp-compiler-associativity\" target=\"_blank\">GATE Overflow #511109</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar where uppercase letters are non-terminals and lowercase/symbols are terminals:</p><p>\\[ \\begin{aligned} E&amp;\\rightarrow E\\uparrow T\\mid T\\\\ T&amp;\\rightarrow f\\cdot T\\mid f\\\\ A&amp;\\rightarrow g\\mid\\varepsilon\\\\ B&amp;\\rightarrow g\\mid\\varepsilon\\\\ S&amp;\\rightarrow Ac\\mid Bd \\end{aligned} \\]</p><p>Which of the following statements is/are correct regarding this grammar?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE OPERATOR ' $\\uparrow$ ' IS RIGHT ASSOCIATIVE WHILE '$\\cdot$' IS LEFT ASSOCIATIVE.<br/></span>",
                "<span style=\"display: inline;\">THE GRAMMAR IS $\\operatorname{LL}(1)$ BECAUSE IT CONTAINS NO EPSILON PRODUCTIONS FOR THE TOP-LEVEL SYMBOL $E$.<br/></span>",
                "<span style=\"display: inline;\">THE OPERATOR ' $\\uparrow$ ' IS LEFT ASSOCIATIVE WHILE '$\\cdot$' IS RIGHT ASSOCIATIVE.<br/></span>",
                "<span style=\"display: inline;\">THE GRAMMAR IS NOT $\\operatorname{LL}(1)$ .</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"510479\"></a><div itemprop=\"text\"><p>The associativity of an operator can be determined from the recursive structure of the grammar.</p><p>Consider the production: $$E\\rightarrow E\\uparrow T\\mid T$$ This is <strong>left-recursive</strong>, meaning consecutive occurrences of $\\uparrow$ are grouped from left to right.</p><p>For eg, $f\\uparrow f\\uparrow f=(f\\uparrow f)\\uparrow f$</p><p>Thus, $\\uparrow$ is <strong>left-associative</strong>.</p><p>Similarly consider,</p><p>$$T\\rightarrow f\\cdot T\\mid f$$</p><p>This is <strong>right-recursive</strong>, meaning consecutive occurrences of $\\cdot$ are grouped from right to left.</p><p>For eg, $f\\cdot f\\cdot f=f\\cdot(f\\cdot f)$</p><p>Thus, $\\cdot$ is <strong>right-associative</strong>.</p><p>Therefore, <strong>Statement C is correct</strong>, while <strong>Statement A is incorrect</strong>.</p><p>The grammar is <strong>not $LL(1)$</strong> because the production $E\\rightarrow E\\uparrow T$ contains immediate left recursion, which is incompatible with $LL(1)$ predictive parsing.</p><p>Furthermore, for $S\\rightarrow Ac\\mid Bd$</p><p>We have,</p><p>$FIRST(Ac)=\\{g,c\\}$</p><p>$FIRST(Bd)=\\{g,d\\}$</p><p>Since,</p><p>$FIRST(Ac)\\cap FIRST(Bd)=\\{g\\}\\neq\\varnothing$</p><p>Both productions compete for the parsing-table entry $M[S,g]$, resulting in an $<strong>LL(1)$ conflict</strong>.</p><p>Therefore, <strong>Statement B is incorrect</strong>, while <strong>Statement D is correct</strong>.</p><p><br/><strong>Answer : C and D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510478/go-classes-dpp-compiler-associativity\" target=\"_blank\">GATE Overflow #510478</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 4",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar rules:</p><p>$$<br/>\\begin{aligned}<br/>&amp; S \\rightarrow A b \\mid B a \\\\<br/>&amp; A \\rightarrow d \\mid \\epsilon \\\\<br/>&amp; B \\rightarrow d \\mid \\epsilon<br/>\\end{aligned}<br/>$$</p><p><br/>Why is this grammar <strong>NOT</strong> $\\mathrm{LL}(1)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The grammar is $\\mathrm{LL}(1)$ because it is in Greibach Normal Form<br/></span>",
                "<span style=\"display: inline;\">The grammar is $\\mathrm{LL}(1)$ because it is not left-recursive<br/></span>",
                "<span style=\"display: inline;\">The grammar is $\\mathrm{LL}(1)$ because $\\operatorname{FIRST}(A) \\cap \\operatorname{FIRST}(B)=\\emptyset$<br/></span>",
                "<span style=\"display: inline;\">The grammar is not $\\mathrm{LL}(1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"510476\"></a><div itemprop=\"text\">$\\text { THE GRAMMAR IS NOT LL(1) BECAUSE } F I R S T(A b) \\cap F I R S T(B a) \\neq \\emptyset \\text {. }$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510475/go-classes-dpp-compiler-ll-1-parser\" target=\"_blank\">GATE Overflow #510475</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar. Uppercase letters are non-terminals, lowercase letters are terminals, and $\\epsilon$ is the empty string.</p><p><br/>What is $\\operatorname{FIRST}(S)$?</p><p><strong>Given Details:</strong></p><ul><li>$S \\rightarrow A B \\mid g h$</li><li>$A \\rightarrow C D$</li><li>$B \\rightarrow b \\mid \\epsilon$</li><li>$C \\rightarrow a \\mid \\epsilon$</li><li>$D \\rightarrow f S \\mid \\epsilon$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{a, f, g\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, f, g, b\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, f, g, b, \\epsilon\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, f, g, \\epsilon\\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"514969\"></a><div itemprop=\"text\"><p>Answer option C<br/><br/>First(S) ={first(AB),first(gh)}<br/><br/>First(AB)={first(A)}<br/>First(A)={first(CD)}<br/>First(CD)={first(C)}<br/>First(C)= {a,€}<br/><br/>Since C is nullable in CD, we go to the next non terminal symbol i.e., D. Now first(D)= {f}.<br/><br/>Since D is also nullable in CD we go to the next non-terminal in AB i.e, B. Now first(B)={b}.<br/><br/><i>(Nullable means having epsilon in its production)</i><br/><br/>Lastly, first(gh)={g}.<br/><br/>Finally, First(S) ={a,b,f,g}.<br/><br/><br/><br/>Now, the first(S) also contains epsilon even if it does not have epsilon in its production because S is deriving epsilon in one or more steps.(<a href=\"https://gateoverflow.in/510474/go-classes-dpp-compiler-first-set?show=510591#c510591\" rel=\"nofollow\" target=\"_blank\">Reference.</a>)<br/><br/>I.e, S=&gt;AB =&gt; CD B =&gt; €€€=&gt; €.<br/><br/>So we can conclude that S can have epsilon in its <b>first set</b> because it can derive the epsilon indirectly.<br/><br/>Finally the first set of S is {a,f,b,g,€}. Option C</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510474/go-classes-dpp-compiler-first-set\" target=\"_blank\">GATE Overflow #510474</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following context-free grammar where uppercase letters are non-terminals and lowercase letters are terminals:</p><p><br/>What is $\\operatorname{FOLLOW}(C)$?</p><p><strong>Given Details:</strong></p><ul><li>$A \\rightarrow b C D E$</li><li>$C \\rightarrow f g \\mid g$</li><li>$D \\rightarrow h \\mid \\epsilon$</li><li>$E \\rightarrow f$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{D\\}$</span>",
                "<span style=\"display: inline;\">$\\{h\\}$</span>",
                "<span style=\"display: inline;\">$\\{h, f\\}$</span>",
                "<span style=\"display: inline;\">$\\{h, \\$\\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"510590\"></a><div itemprop=\"text\">Answer option C <br/> <br/> Follow(C) ={ first(D),first(E)}.<br/> <br/> First(D) = {h,€}.<br/> First(E) = {f}.<br/> <br/> Finally, Follow(C) ={h,f}.<br/> <br/> Follow(C) contains first(E) because first(D) is nullable(means contains € in the production).</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510472/go-classes-dpp-compiler-follow\" target=\"_blank\">GATE Overflow #510472</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following context-free grammar:<br/>Productions:</p><p>What is the FOLLOW(A) for this grammar?</p><p><strong>Given Details:</strong></p><ul><li>$S \\rightarrow A$</li><li>$S \\rightarrow B$</li><li>$A \\rightarrow a A b$</li><li>$A \\rightarrow \\epsilon$</li><li>$B \\rightarrow c B d$</li><li>$B \\rightarrow g$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{b, \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{b\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, b, \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{b, c, g\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508550\"></a><div itemprop=\"text\">$(A.)$<br/> <br/> $S\\rightarrow A$ so $ \\$ \\in Follow(A)$<br/> <br/> $A\\rightarrow aAb$ so $ b \\in Follow(A)$<br/> <br/> hence $Follow(A) \\in (\\$,b)$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508165/go-classes-dpp-compiler-follow-set\" target=\"_blank\">GATE Overflow #508165</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar:</p><p>What is the FOLLOW(T) for this grammar?</p><p><strong>Given Details:</strong></p><ul><li>$E \\rightarrow T R$</li><li>$R \\rightarrow+T R$</li><li>$R \\rightarrow \\epsilon$</li><li>$T \\rightarrow F Y$</li><li>$Y \\rightarrow * F Y$</li><li>$Y \\rightarrow \\epsilon$</li><li>$F \\rightarrow(E)$</li><li>$F \\rightarrow i d$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{+, ), \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{*, +, ), \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{+, \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{*, )\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508164\"></a><div itemprop=\"text\"><p>From $E \\rightarrow T R$ :</p><ul><li>$\\operatorname{FOLLOW}(T)$ contains (FIRST(R) - $\\{\\epsilon\\}$ ).<br/> </li><li>$\\operatorname{FIRST}(R)$ is $\\{+, \\epsilon\\}$.<br/> </li><li>Therefore, + is added to FOLLOW(T).</li></ul><p>Handling the $\\epsilon$ in $R$ :</p><ul><li>Since $R \\rightarrow \\epsilon, \\operatorname{FOLLOW}(T)$ must also include everything in FOLLOW( E).</li></ul><p>Determining FOLLOW $(E)$ :</p><ul><li>$E$ is the start symbol, so $\\$$ is added to FOLLOW( $E$ ).<br/> </li><li>From $F \\rightarrow(E)$, the terminal ) follows $E$, so it is added to $\\operatorname{FOLLOW}(E)$.<br/> </li><li>Thus, $\\operatorname{FOLLOW}(E)=\\{\\$,)$$\\} .$</li></ul><p>Combining results:</p><ul><li>$\\operatorname{FOLLOW}(T)=\\{+,), \\$\\}$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/508161/go-classes-dpp-compiler-follow-set\" target=\"_blank\">GATE Overflow #508161</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar: $$S \\rightarrow A B A \\rightarrow a|\\epsilon B \\rightarrow b| S$$<br/>Which of the following represents the correct FIRST(S)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{a, b, \\epsilon\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a, b\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a, \\epsilon\\}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"511152\"></a><div itemprop=\"text\">Option B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508158/go-classes-dpp-compiler-first-set\" target=\"_blank\">GATE Overflow #508158</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with the set of non-terminals $\\{S, A, B\\}$ and terminals $\\{a, b, c, d\\}$ :</p><p>$$<br/>S \\rightarrow A B c, A \\rightarrow a|\\epsilon, B \\rightarrow b| \\epsilon<br/>$$</p><p><br/>Which of the following is the correct $\\operatorname{FIRST}(\\mathrm{S})$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{a, b, c, \\epsilon\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a, b, c\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a, \\epsilon\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{a, b, \\epsilon\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"506267\"></a><div itemprop=\"text\">Opton B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/506215/go-classes-dpp-compiler-first-set\" target=\"_blank\">GATE Overflow #506215</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $G$ with start symbol $E$ :</p><p>Which of the following statement(s) is/are <strong>FALSE</strong> regarding the $\\text{FIRST}$ and $\\text{FOLLOW}$ sets of this grammar?</p><p><strong>Given Details:</strong></p><ul><li>$E \\rightarrow T R$</li><li>$R \\rightarrow+T R \\mid \\epsilon$</li><li>$T \\rightarrow f$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{FIRST}(R)=\\{+, \\epsilon\\}$</span>",
                "<span style=\"display: inline;\">$\\operatorname{FOLLOW}(R)=\\operatorname{FOLLOW}(E)$</span>",
                "<span style=\"display: inline;\">$\\epsilon \\in \\operatorname{FOLLOW}(T)$</span>",
                "<span style=\"display: inline;\">The end-of-input marker $(\\$)$ is an element of $\\operatorname{FOLLOW}(E)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"506214\"></a><div itemprop=\"text\"><p><strong>A is TRUE:</strong> For the production $R \\rightarrow+T R \\mid \\epsilon$, the first symbol of the first alternative is the terminal ' + ', and the second alternative is ' $\\epsilon$ '. Therefore, $\\operatorname{FIRST}(R)=\\{+, \\epsilon\\}$.</p><p><strong>B is TRUE:</strong> According to the rule for FOLLOW sets, in a production $A \\rightarrow \\alpha B$, everything in $\\operatorname{FOLLOW}(A)$ is added to $\\operatorname{FOLLOW}(B)$. Here, in $E \\rightarrow T R, R$ is at the end of the production, so $\\operatorname{FOLLOW}(R)=\\operatorname{FOLLOW}(E)$.<br/><br/><strong>C is FALSE:</strong> The symbol $\\epsilon$ (epsilon) is <strong>never</strong> a member of any $FOLLOW$ set. $FOLLOW$ sets only contain terminals and the end-marker $\\$$. While $T$ can be followed by things that derive $\\epsilon$, the $\\epsilon$ symbol itself is not included.</p><p><strong>D is TRUE:</strong> By definition, the end-of-input marker (\\$) is always added to the $FOLLOW$ set of the start symbol (in this case, $E$ ).</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/506212/go-classes-dpp-compiler-first-and-follow\" target=\"_blank\">GATE Overflow #506212</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statement(s) is/are <strong>FALSE</strong> while computing $\\textbf{FIRST}$ and $\\textbf{FOLLOW}$ sets for a Context-Free Grammar?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $X \\rightarrow \\alpha$ is a production, then everything in $\\operatorname{FIRST}(\\alpha)$ is added to $\\operatorname{FIRST}(X)$.<br/></span>",
                "<span style=\"display: inline;\">The epsilon symbol ( $\\epsilon$ ) can be a member of a $\\text{FOLLOW}$ set if a non-terminal can derive the empty string.<br/></span>",
                "<span style=\"display: inline;\">If there is a production $A \\rightarrow \\alpha B \\beta$, then everything in $\\operatorname{FIRST}(\\beta)$ except $\\epsilon$ is added to $\\text{FOLLOW(B)}$.<br/></span>",
                "<span style=\"display: inline;\">For the start symbol $S$, the end-of-input marker $(\\$)$ is always placed in $\\text{FOLLOW(S)}$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"506211\"></a><div itemprop=\"text\"><p><strong>A is TRUE:</strong> This is the basic rule for computing FIRST sets. If a non-terminal $X$ derives a string $\\alpha$, the first terminals of $\\alpha$ are also the first terminals of $X$.</p><p><strong>B is FALSE: </strong>The epsilon symbol ( $\\epsilon$ ) is <strong>never</strong> included in a $FOLLOW$ set.$ FOLLOW$ sets only contain terminals and the end-of-input marker (\\$). If a non-terminal can derive $\\epsilon$, it affects how we calculate the FOLLOW sets of adjacent symbols, but $\\epsilon$ itself does not enter the set.</p><p><strong>C is TRUE: </strong>In a production like $A \\rightarrow \\alpha B \\beta$, the symbols that can follow $B$ are exactly the symbols that can start $\\beta$. We exclude $\\epsilon$ because $FOLLOW$ sets only contain actual lookahead tokens.</p><p><strong>D is TRUE:</strong> By convention, the $FOLLOW$ set of the start symbol always contains the end-marker (\\$), signifying the end of the input string.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/506210/go-classes-dpp-compiler-first-and-follow\" target=\"_blank\">GATE Overflow #506210</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the grammar defined by the following production rules, with three operators: ⊕ (circle plus), $\\ominus$ (circle minus), and $\\odot$ (dot operator). The terminal value represents a numerical value.</p><p>Which one of the following statements about the operators $\\oplus, \\ominus$, and $\\odot$ is TRUE?</p><p><strong>Given Details:</strong></p><ul><li>$P \\rightarrow Q \\oplus P \\mid Q$</li><li>$Q \\rightarrow Q \\ominus R \\mid R$</li><li>$R \\rightarrow$ value $\\odot R \\mid$ value</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The $\\ominus$ operator has the lowest precedence (is evaluated last).</span>",
                "<span style=\"display: inline;\">The $\\oplus$ operator is left associative.</span>",
                "<span style=\"display: inline;\">The precedence order is $\\odot&gt;\\ominus&gt;\\oplus$.</span>",
                "<span style=\"display: inline;\">The $\\odot$ operator is left associative.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503432\"></a><div itemprop=\"text\"><ul><li>Operator $\\odot$ (Governed by $R$ ): $R$ is built directly from the terminal (value). It is at the base of the expression hierarchy, meaning it must be evaluated first. HIGHEST Precedence.<br/> </li><li>Operator $\\ominus$ (Governed by $Q$ ): $Q$ is built from $R$. It is evaluated second. MIDDLE Precedence.<br/> </li><li>Operator $\\oplus$ (Governed by $P$ ): $P$ is built from $Q$. It is evaluated last. LOWEST Precedence.</li></ul><p>Precedence Order: $\\odot&gt;\\ominus&gt;\\oplus$.</p><p>Associativity Analysis (Determined by Recursion)</p><ul><li>Operator $\\oplus$ (Governed by $P$ ): $P \\rightarrow Q \\oplus \\mathbf{P}$. Right recursion. ⊕ is RIGHT ASSOCIATIVE.<br/> </li><li>Operator $\\ominus$ (Governed by $Q$ ): $Q \\rightarrow \\mathbf{Q} \\ominus R$. Left recursion. $\\ominus$ is LEFT ASSOCIATIVE.<br/> </li><li>Operator $\\odot$ (Governed by $R$ ): $R \\rightarrow$ value $\\odot \\mathbf{R}$. Right recursion. $\\odot$ is RIGHT ASSOCIATIVE.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503430/go-classes-dpp-compiler-operator-precedence\" target=\"_blank\">GATE Overflow #503430</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 5)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 5",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 8,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>Consider the following context-free grammar:</strong></p><p><br/><strong>What is </strong>$\\operatorname{FOLLOW}\\left(T^{\\prime}\\right)$<strong> ?</strong></p><p><strong>Given Details:</strong></p><ul><li>$E \\rightarrow T E^{\\prime}$</li><li>$E^{\\prime} \\rightarrow+T E^{\\prime} \\mid \\epsilon$</li><li>$T \\rightarrow F T^{\\prime}$</li><li>$T^{\\prime} \\rightarrow * F T^{\\prime} \\mid \\epsilon$</li><li>$F \\rightarrow(E) \\mid i$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{*\\}$</span>",
                "<span style=\"display: inline;\">$\\{+, \\$,)\\}$</span>",
                "<span style=\"display: inline;\">$\\{+,)\\}$</span>",
                "<span style=\"display: inline;\">$\\{+, \\$,), \\epsilon\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502208\"></a><div itemprop=\"text\"><p><strong>Locate </strong>$\\mathbf{T}^{\\prime}: T^{\\prime}$ appears at the end of the productions $T \\rightarrow F \\mathbf{T}^{\\prime}$ and $T^{\\prime} \\rightarrow * F \\mathbf{T}^{\\prime}$.</p><ul><li>Because $T^{\\prime}$ is the last symbol in $T \\rightarrow F T^{\\prime}$, everything that follows $T$ must also follow $T^{\\prime}$.<br/> </li><li>Therefore, $\\operatorname{FOLLOW}\\left(T^{\\prime}\\right)=\\operatorname{FOLLOW}(T)$.<br/> </li></ul><p><strong>Find</strong> $\\operatorname{FOLLOW}\\mathrm{(T)}$<strong>:</strong> We look for $T$ in the grammar ( $E \\rightarrow \\mathbf{T} E^{\\prime}$ ).</p><ul><li>$T$ is followed by $E^{\\prime}$.<br/> </li><li>So, $\\operatorname{FOLLOW}(T)$ includes $\\operatorname{FIRST}\\left(E^{\\prime}\\right)$ (excluding $\\epsilon$ ).<br/> </li><li>$\\operatorname{FIRST}\\left(E^{\\prime}\\right)=\\{+, \\epsilon\\}$. So, we add $+$ .<br/> </li></ul><p><strong>Handle Epsilon again:</strong> Since $E^{\\prime}$ can be $\\epsilon, \\operatorname{FOLLOW}(T)$ also includes $\\operatorname{FOLLOW}(E)$.<br/><br/><br/>$E$ is the start symbol (conventionally), so it includes the end-of-input marker $\\textbf{\\$}$.<br/><br/>$E$ also appears inside parentheses in $F \\rightarrow(E)$. So it is followed by ).<br/><br/>$\\operatorname{FOLLOW}(E)=\\{ ), \\$\\}$.<br/><br/>$\\left.\\operatorname{FOLLOW}\\left(T^{\\prime}\\right)=\\{+,), \\$\\right\\}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502206/go-classes-dpp-compiler-follow-set\" target=\"_blank\">GATE Overflow #502206</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>Consider the following context-free grammar:</strong></p><p><strong>What is</strong> $\\operatorname{FOLLOW}(B)$ <strong>?</strong><br/> </p><p><strong>Given Details:</strong></p><ul><li>$A \\rightarrow b B C$</li><li>$B \\rightarrow d \\mid \\epsilon$</li><li>$C \\rightarrow a \\mid f$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{C\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, f, \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{a, f\\}$</span>",
                "<span style=\"display: inline;\">$\\{d, a, f\\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"502256\"></a><div itemprop=\"text\">ans C<br/> <br/> FOLLOW(B)={a,f}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502205/go-classes-dpp-compiler-follow-set\" target=\"_blank\">GATE Overflow #502205</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following Grammar $G$, with $A$ as the start symbol. The grammar $G$ has three incomplete productions denoted by (1), (2), and (3).</p><p>$$<br/>\\begin{aligned}<br/>&amp; A \\rightarrow r B T \\mid(1) \\\\<br/>&amp; B \\rightarrow p A S \\mid(2) \\\\&amp; S \\rightarrow t \\\\<br/>&amp; T \\rightarrow(3) \\mid \\epsilon<br/>\\end{aligned}<br/>$$</p><p><br/>The set of terminals is $\\{p, q, r, s, t\\}$. The FIRST and FOLLOW sets of the different non-terminals are as follows:</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\operatorname{FIRST}(A)=\\{r, p\\} \\\\<br/>&amp; \\operatorname{FIRST}(B)=\\{p, \\epsilon\\} \\\\<br/>&amp; \\operatorname{FIRST}(T)=\\{q, \\epsilon\\} \\\\<br/>&amp; \\operatorname{FOLLOW}(A)=\\{t, \\$\\} \\\\<br/>&amp; \\operatorname{FOLLOW}(B)=\\{t,q, \\$\\}\\\\<br/>&amp; \\operatorname{FOLLOW}(T)=\\{t, \\$\\}<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following options correctly fills in the incomplete information?(select all that apply)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">(1) $A \\rightarrow p C$ (2) $B \\rightarrow \\epsilon$ (3) $T \\rightarrow q$<br/></span>",
                "<span style=\"display: inline;\">(1) $A \\rightarrow p C$ (2) $B \\rightarrow t$ (3) $T \\rightarrow q B$<br/></span>",
                "<span style=\"display: inline;\">(1) $A \\rightarrow p S$ (2) $B \\rightarrow \\epsilon$ (3) $T \\rightarrow q$<br/></span>",
                "<span style=\"display: inline;\">(1) $A \\rightarrow p t$ (2) $B \\rightarrow \\epsilon$ (3) $T \\rightarrow q B$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"500788\"></a><div itemprop=\"text\"><p>The grammar and given sets are:</p><p>$$<br/>\\begin{aligned}<br/>&amp; A \\rightarrow r B T \\mid(1) \\\\<br/>&amp; B \\rightarrow p A S \\mid(2) \\\\<br/>&amp; T \\rightarrow(3) \\mid \\epsilon<br/>\\end{aligned}<br/>$$</p><ul><li>$\\operatorname{FIRST}(A)=\\{r, p\\}$<br/> </li><li>$\\operatorname{FIRST}(B)=\\{p, \\epsilon\\}$<br/> </li><li>$\\boldsymbol{\\operatorname { F i R S t }}(T)=\\{q, \\epsilon\\}$</li></ul><p>We will use the FIRST sets to determine the incomplete productions (1), (2), and (3).</p><p>Step 1: Determine Production (2) $B \\rightarrow$ (2)</p><ul><li>$\\boldsymbol{\\operatorname { F I R S T }}(B)=\\{p, \\epsilon\\}$.<br/> </li><li>The production $B \\rightarrow p A S$ contributes $\\operatorname{FIRST}(p A S)=\\{p\\}$.<br/> </li><li>Thus, the production (2) must contribute the remaining symbol, $\\epsilon$.</li></ul><p>$$<br/>(2)=\\epsilon<br/>$$</p><ul><li>This eliminates Option B, which has $B \\rightarrow t$.</li></ul><div><p>Step 2: Determine Production (1) $A \\rightarrow(1)$</p><ul><li>$\\boldsymbol{\\operatorname { F I R S T }}(A)=\\{r, p\\}$.<br/> </li><li>The production $A \\rightarrow r B T$ contributes $\\mathbf{F I R S T}(r B T)=\\{r\\}$.<br/> </li><li>Thus, the production (1) must contribute the remaining symbol, $p$.</li></ul><p>$\\boldsymbol{\\operatorname { F I R S T }}((1))=\\{p\\}$</p><ul><li>Checking the remaining options (A, C, D):<br/> </li><li>A: $A \\rightarrow p C$ has $\\operatorname{FIRST}(\\mathbf{p} C)=\\{p\\}$. (Possible)<br/> </li><li>C: $A \\rightarrow p S$ has FIRST(p $S$ ) $=\\{p\\}$. (Possible)<br/> </li><li>D: $A \\rightarrow p t$ has $\\operatorname{FIRST}(\\mathbf{p} t)=\\{p\\}$. (Possible)</li></ul><p>Step 3: Determine Production (3) $T \\rightarrow$ (3)</p><ul><li>$\\boldsymbol{\\operatorname { F I R S T }}(T)=\\{q, \\epsilon\\}$.<br/> </li><li>The production $T \\rightarrow \\epsilon$ contributes $\\epsilon$.<br/> </li><li>Thus, the production (3) must contribute the remaining symbol, $q$.</li></ul><p>$\\boldsymbol{\\operatorname { F I R S T }}((3))=\\{q\\}$</p><ul><li>Checking the remaining options (A, C, D):<br/> </li><li>A: $T \\rightarrow q$ has $\\operatorname{FIRST}(\\mathbf{q})=\\{q\\}$. (Possible)<br/> </li><li>C: $T \\rightarrow q$ has $\\operatorname{FIRST}(\\mathbf{q})=\\{q\\}$. (Possible)<br/> </li><li>D: $T \\rightarrow q B$ has $\\operatorname{FIRST}(\\mathbf{q} B)=\\{q\\}$. (Possible)</li></ul><p><strong>Hence, A, C, and D are correct</strong></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500787/go-classes-dpp-compiler-first-and-follow\" target=\"_blank\">GATE Overflow #500787</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following Grammar:</p><p>What is FOLLOW( $B$ )?</p><p><strong>Given Details:</strong></p><ul><li>$A \\rightarrow p B C D$</li><li>$B \\rightarrow q r \\mid \\epsilon$</li><li>$C \\rightarrow s \\mid t$</li><li>$D \\rightarrow u$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{\\mathbf{s}, \\mathbf{t}\\}$</span>",
                "<span style=\"display: inline;\">$\\{\\mathbf{s}, \\mathbf{t}, \\mathbf{u}\\}$</span>",
                "<span style=\"display: inline;\">$\\{\\mathbf{s}, \\mathbf{t}, \\$\\}$</span>",
                "<span style=\"display: inline;\">$\\{\\mathbf{q}, \\mathbf{r}\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500950\"></a><div itemprop=\"text\">FOLLOW (B) = FIRST(C) = {s,t}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500785/go-classes-dpp-compiler-follow\" target=\"_blank\">GATE Overflow #500785</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">consider the following grammar given below:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; S \\rightarrow A a B \\mid \\epsilon \\\\<br/> &amp; A \\rightarrow b S B \\mid \\epsilon \\\\<br/> &amp; B \\rightarrow A b \\mid B<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\text { A. } \\mathbf{F I R S T}(\\mathbf{A})=\\{b, \\epsilon\\}, \\mathbf{F O L L O W}(\\mathbf{A})=\\{a, b\\}, \\mathbf{F I R S T}(\\mathbf{B})=\\{a, b, \\epsilon\\}, \\\\<br/> &amp; \\mathbf{F O L L O W}(\\mathbf{B})=\\{a, b, \\S\\} \\\\\\\\<br/> &amp; \\text { B. } \\mathbf{F I R S T}(\\mathbf{A})=\\{b, \\epsilon\\}, \\mathbf{F O L L O W}(\\mathbf{A})=\\{a, b\\}, \\mathbf{F I R S T}(\\mathbf{B})=\\{b\\}, \\\\<br/> &amp; \\mathbf{F O L L O W}(\\mathbf{B})=\\{a, b, \\S\\} \\\\\\\\<br/> &amp; \\text { C. } \\mathbf{F I R S T}(\\mathbf{A})=\\{b, \\epsilon\\}, \\mathbf{F O L L O W}(\\mathbf{A})=\\{a, b, \\$\\}, \\mathbf{F I R S T}(\\mathbf{B})=\\{a, b, \\epsilon\\}, \\\\<br/> &amp; \\mathbf{F O L L O W}(\\mathbf{B})=\\{a, b, \\S\\} \\\\\\\\<br/> &amp; \\text { D. } \\mathbf{F I R S T}(\\mathbf{A})=\\{b, \\epsilon\\}, \\mathbf{F O L L O W}(\\mathbf{A})=\\{a, b, \\$\\}, \\mathbf{F I R S T}(\\mathbf{B})=\\{b\\}, \\\\<br/> &amp; \\mathbf{F O L L O W}(\\mathbf{B})=\\{a, b\\}<br/> \\end{aligned}<br/> $$</div></span>",
            "image": "",
            "options": [],
            "answer": "500783",
            "solution": "<div class=\"solution-content\"><a name=\"501303\"></a><div itemprop=\"text\">Option B, is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500783/go-classes-dpp-compiler-first-and-follow\" target=\"_blank\">GATE Overflow #500783</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the following expression grammar:</p><p>$$<br/>\\begin{gathered}<br/>E \\rightarrow E+T|T * E| T \\\\<br/>T \\rightarrow T / F \\mid F \\\\<br/>F \\rightarrow \\mathrm{id}<br/>\\end{gathered}<br/>$$</p><p><br/>Which of the following is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$*$ has higher precedence than $+$<br/></span>",
                "<span style=\"display: inline;\">$/$ has higher precedence than $*$<br/></span>",
                "<span style=\"display: inline;\">$+$ is left-associative<br/></span>",
                "<span style=\"display: inline;\">$*$ is right-associative</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"500515\"></a><div itemprop=\"text\"><p><strong>Given grammar:</strong></p><p>$E \\rightarrow E \\,+\\, T \\;\\mid\\; T \\,*\\, E \\;\\mid\\; T$</p><p>$T \\rightarrow T \\,/\\, F \\;\\mid\\; F$</p><p>$F \\rightarrow id$</p><p>----------------------------</p><p><strong>● Operator appearance by grammar level:</strong></p><p>The operator $/$ appears in the rule for $T$: </p><p> $T \\rightarrow T \\,/\\, F$</p><p>The operators $+$ and $*$ appear in the rules for $E$: </p><p> $E \\rightarrow E \\,+\\, T \\;\\mid\\; T \\,*\\, E$</p><p>Since $T$ is lower in the grammar hierarchy than $E$, any parsing involving $/$</p><p>must complete before any reductions that involve $+$ or $*$. </p><p>Thus $/$ binds more tightly than both $+$ and $*$ (i.e., it has higher precedence).</p><p>----------------------------</p><p><strong>● Associativity</strong></p><p>$+$ is left-associative because $E \\rightarrow E \\,+\\, T$ is left-recursive</p><p>$*$ is right-associative because $E \\rightarrow T \\,*\\, E$ is right-recursive</p><p>$/$ is left-associative because $T \\rightarrow T \\,/\\, F$ is left-recursive</p><p>----------------------------</p><p><strong>● Final Evaluation of statements:</strong></p><p>A. * has higher precedence than + → False </p><p>B. / has higher precedence than * → True </p><p>C. + is left-associative → True </p><p>D. * is right-associative → True</p><p><strong>Final Answer: $B, C, D$</strong><br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500369/go-classes-dpp-compiler-operator-precedence\" target=\"_blank\">GATE Overflow #500369</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Compiler Design (Bottom-Up Parsing (LR Parsers - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Bottom-Up Parsing (LR Parsers - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Bottom-Up Parsing (LR Parsers (Practice Set 1)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar $g$ :</p><p>$$<br/>\\begin{gathered}<br/>s \\rightarrow l=r \\mid r \\\\<br/>l \\rightarrow * r \\mid i d \\\\<br/>r \\rightarrow l<br/>\\end{gathered}<br/>$$</p><p>Which of the following statements is/are correct regarding the parsing of grammar $g$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">the grammar $g$ is $l r(0)$ because there are no shift-reduce or reduce-reduce conflicts.<br/></span>",
                "<span style=\"display: inline;\">the grammar $g$ is $\\operatorname{slr}(1)$ because all shift-reduce conflicts can be resolved using follow sets.<br/></span>",
                "<span style=\"display: inline;\">there is a shift-reduce conflict in the $\\operatorname{slr}(1)$ parsing table for the state containing the items $\\{s \\rightarrow l \\cdot=r, r \\rightarrow l \\cdot\\}$.<br/></span>",
                "<span style=\"display: inline;\">the grammar $g$ is $\\operatorname{lalr}(1)$ but not $\\operatorname{slr}(1)$.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"518660\"></a><div itemprop=\"text\"><p>Since $\\mathrm{follow(r)}$ contains '$=$'<br/><br/>Hence option <strong>C</strong> is correct.<br/><br/>That's why $\\mathrm{A}, \\mathrm{B}$ are incorrect.<br/> </p><p><strong>why it is $l r(1)$ ?</strong><br/><br/>an $\\operatorname{lr}(1)$ parser uses specific <strong>lookaheads</strong> rather than the global follow set. when we build $\\operatorname{lr}(1)$ items for state $i_2$, the lookaheads are restricted:</p><ul><li>$[s \\rightarrow l \\cdot=r, \\mathbb{\\$}]$<br/> </li><li>$[r \\rightarrow l, \\mathrm{~S}]$</li></ul><p><br/><strong>the resolution:</strong></p><ul><li>the <strong>shift </strong>action $(s \\rightarrow l \\cdot=r)$ only happens if the next symbol is $=$.<br/> </li><li>the <strong>reduction </strong>$(r \\rightarrow l \\cdot)$ only happens if the next symbol is $\\$$.<br/> </li><li>since $=$ and $\\$$ are distinct, there is <strong>no conflict</strong> in $\\operatorname{lr}(1)$.<br/> </li></ul><p>in this grammar, merging states does not create any new conflicts that weren't already there in the $\\operatorname{lr}(1)$ table.</p><p>Hence it is $\\operatorname{lalr}(1)$ also</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518659/go-classes-dpp-compiler-lr-parser\" target=\"_blank\">GATE Overflow #518659</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An $\\mathrm{LR(1)}$ parser is being constructed for a grammar. If a particular state in the corresponding $\\mathrm{LR}(1)$ canonical collection contains the item $[A \\rightarrow \\alpha \\cdot, a]$, which of the following statements is <strong>ALWAYS</strong> true regarding the behavior of the parser in this state?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The parser will perform a reduce action on any input symbol that is $\\operatorname{FOLLOW}(A)$.<br/></span>",
                "<span style=\"display: inline;\">The parser will perform a reduce action ONLY if the current lookahead symbol is $a$.<br/></span>",
                "<span style=\"display: inline;\">There is a shift-reduce conflict if $a$ is also in $\\operatorname{FIRST}(\\beta)$ for some item $[B \\rightarrow \\gamma \\cdot a \\beta, b]$. <strong>Otherwise, an S-R conflict doesn't occur.</strong><br/></span>",
                "<span style=\"display: inline;\">The parser will transition to a new state regardless of the lookahead symbol.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"516813\"></a><div itemprop=\"text\"><p>In an LR(1) parser, an item of the form</p><p>$$<br/>[A \\rightarrow \\alpha \\cdot, a]<br/>$$</p><p>means:</p><ul><li>The production $\\mathrm{A} \\rightarrow \\alpha$ is complete.<br/> </li><li>The parser should reduce by $\\mathbf{A} \\rightarrow \\alpha$ only when the lookahead symbol is a.</li></ul><p><br/>Why option C is false:<br/><br/><strong>the parser can shift directly on</strong> $\\verb|a|$ <strong>if and only if</strong> the $\\mathrm{LR(1)}$ state contains an item with dot before $\\verb|a|$, i.e.</p><p>$$<br/>[B \\rightarrow \\gamma \\cdot a \\beta, b]<br/>$$</p><p><br/>If the <strong>same state</strong> also contains</p><p>$$<br/>[A \\rightarrow \\alpha \\cdot, a]<br/>$$</p><p>then the parser faces a <strong>shift-reduce conflict</strong> on $\\verb|a|$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516811/go-classes-dpp-compiler-lr-1-parser\" target=\"_blank\">GATE Overflow #516811</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following augmented grammar with $\\{+, \\uparrow, a, b\\}$ as the set of terminals. Note that $\\epsilon$ represents the empty string.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; S^{\\prime} \\rightarrow S \\\\<br/> &amp; S \\rightarrow A+S \\\\<br/> &amp; S \\rightarrow b \\\\<br/> &amp; A \\rightarrow a A \\uparrow \\\\<br/> &amp; A \\rightarrow \\epsilon<br/> \\end{aligned}<br/> $$<br/> <br/> Let $I_0=\\operatorname{CLOSURE}\\left(\\left\\{S^{\\prime} \\rightarrow \\bullet S\\right\\}\\right)$.<br/> <br/> The number of items in the set $\\operatorname{GOTO}\\left(I_0, a\\right)$ is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "513041",
            "solution": "<div class=\"solution-content\"><a name=\"513043\"></a><div itemprop=\"text\"><p>We start with the augmented production and expand the closure.</p><ol><li>$S^{\\prime} \\rightarrow \\bullet S~($Initial$)$<br/> </li><li>$S \\rightarrow \\bullet A+S ~($From $S)$<br/> </li><li>$S \\rightarrow \\bullet b~($From $S)$<br/> </li><li>$A \\rightarrow \\bullet a A \\uparrow~($From $A)$<br/> </li><li>$A \\rightarrow \\bullet~($From $A$ - this is the $\\epsilon$ production$)$<br/> </li></ol><p>The set $\\operatorname{GOTO}\\left(I_0, a\\right)$ contains the following items:</p><ol><li>$A \\rightarrow a \\bullet A \\uparrow$<br/> </li><li>$A \\rightarrow \\bullet a A \\uparrow$<br/> </li><li>$A \\rightarrow \\bullet$<br/> </li></ol><p>The number of items in the set is $\\mathbf{3}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513041/go-classes-dpp-compiler-lr-parser\" target=\"_blank\">GATE Overflow #513041</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following augmented grammar with $\\{+, *,(),, i d\\}$ as the set of terminals.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; T^{\\prime} \\rightarrow T \\\\<br/> &amp; T \\rightarrow T+F \\\\<br/> &amp; T \\rightarrow F \\\\<br/> &amp; F \\rightarrow F * P \\\\<br/> &amp; F \\rightarrow P \\\\<br/> &amp; P \\rightarrow(T) \\\\<br/> &amp; P \\rightarrow i d<br/> \\end{aligned}<br/> $$<br/> <br/> Let $I_0=\\operatorname{CLOSURE}\\left(\\left\\{T^{\\prime} \\rightarrow \\bullet T\\right\\}\\right)$.<br/> <br/> The number of items in the set $\\operatorname{GOTO}\\left(\\operatorname{GOTO}\\left(I_0, F\\right), *\\right)$ is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "513039",
            "solution": "<div class=\"solution-content\"><a name=\"513040\"></a><div itemprop=\"text\"><p>We start with the augmented production and expand the closure.</p><ul><li>$T^{\\prime} \\rightarrow \\boldsymbol{\\bullet} T$<br/> </li><li>$T \\rightarrow \\bullet T+F~($from $T)$<br/> </li><li>$T \\rightarrow \\bullet F~($from $T)$<br/> </li><li>$F \\rightarrow \\bullet F * P~($from $F)$<br/> </li><li>$F \\rightarrow \\bullet P~($from $F)$<br/> </li><li>$P \\rightarrow \\bullet(T)~($from $P)$<br/> </li><li>$P \\rightarrow \\bullet i d~($from $P)$<br/> </li></ul><p><strong>Compute</strong> $I_1=\\operatorname{GOTO}\\left(I_0, F\\right)$<br/> </p><p><strong>$I_1$ contains:</strong></p><ul><li>$T \\rightarrow F_{\\bullet}$<br/> </li><li>$F \\rightarrow F \\bullet * P$<br/> </li></ul><p>The set $I_2=\\operatorname{GOTO}\\left(\\operatorname{GOTO}\\left(I_0, F\\right), *\\right)$ consists of the following items:</p><ol><li>$F \\rightarrow F * \\bullet P$<br/> </li><li>$P \\rightarrow \\bullet(T)$<br/> </li><li>$P \\rightarrow$ id<br/> </li></ol><p>The number of items in the set is $\\mathbf{3}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513039/go-classes-dpp-compiler-lr-parser\" target=\"_blank\">GATE Overflow #513039</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following augmented grammar where $S^{\\prime}$ is the start symbol, uppercase letters are non-terminals, and $\\{\\oplus, \\otimes, i d,()$,$\\}$ are terminals:</p><p>If $I_k$ is a set of $L R(0)$ items containing $\\{[S \\rightarrow A . \\otimes S],[S \\rightarrow A]$.$\\} , how many items are$ contained in $\\operatorname{goto}\\left(I_k, \\otimes\\right)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S^{\\prime} \\rightarrow S$<br/></span>",
                "<span style=\"display: inline;\">$S \\rightarrow A \\otimes S \\mid A$<br/></span>",
                "<span style=\"display: inline;\">$A \\rightarrow B \\oplus A \\mid B$<br/></span>",
                "<span style=\"display: inline;\">$B \\rightarrow(S) \\mid i d$<br/></span>"
            ],
            "answer": "510481",
            "solution": "<div class=\"solution-content\"><a name=\"510482\"></a><div itemprop=\"text\"><p>To find $\\operatorname{goto}\\left(I_k, \\otimes\\right)$ :</p><ol><li>Move the dot over the symbol $\\otimes:\\{[S \\rightarrow A \\otimes . S]\\}$<br/> </li><li>Compute the <strong>closure </strong>of this item. Since the dot is before $S$, we add all productions of<br/> <ul><li>$[S \\rightarrow . A \\otimes S]$<br/> </li><li>$[S \\rightarrow . A]$<br/> </li></ul></li><li>Now the dot is before $A$ in those new items, so we add all productions of $A$ :<br/> <ul><li>$[A \\rightarrow . B \\oplus A]$<br/> </li><li>$[A \\rightarrow . B]$<br/> </li></ul></li><li>Now the dot is before $B$, so we add all productions of $B$ :<br/> <ul><li>$[B \\rightarrow$. $(S)]$<br/> </li><li>$[B \\rightarrow . i d]$<br/> </li></ul></li></ol><p>Total item count for $\\operatorname{goto}\\left(I_k, \\otimes\\right)$ : $\\mathbf{7}$<strong> items.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510481/go-classes-dpp-compiler-lr-0-parser\" target=\"_blank\">GATE Overflow #510481</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following grammar:<br/> <br/> $(1) ~S \\rightarrow a A b$<br/> <br/> $(2) ~A \\rightarrow a A b$<br/> <br/> $(3) ~A \\rightarrow c$<br/> <br/> <br/> The number of reduction steps taken by a bottom-up parser while accepting the string $aaacbbb$ is:</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"509723\"></a><div itemprop=\"text\"><p>Bottom up parser follows RMD in reverse<br/><br/>Number of steps in RMD and RMD in reverse will be same<br/><br/><strong>Rightmost Derivation:</strong></p><ol><li>$S \\Longrightarrow a A b$ (Step 1)<br/> </li><li>$S \\Longrightarrow a(a A b) b=a a A b b$ (Step 2)<br/> </li><li>$S \\Longrightarrow a a(a A b) b b=a a a A b b b$ (Step 3)<br/> </li><li>$S \\Longrightarrow a a a(c) b b b=a a a c b b b$ (Step 4)<br/> </li></ol><p>Hence number of steps$=4$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/509722/go-classes-dpp-compiler-bottom-up-parser\" target=\"_blank\">GATE Overflow #509722</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A canonical set of items in an $\\operatorname{LR}(0)$ parser is given below:<br/><br/>$(1) ~E \\rightarrow T .+E$<br/><br/>$(2) ~F \\rightarrow T$.<br/><br/>$(3) ~T \\rightarrow i d$<br/><br/><br/>On input symbol $+$, the set has:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A SHIFT-REDUCE CONFLICT AND A REDUCE-REDUCE CONFLICT<br/></span>",
                "<span style=\"display: inline;\">A SHIFT-REDUCE CONFLICT BUT NOT A REDUCE-REDUCE CONFLICT<br/></span>",
                "<span style=\"display: inline;\">A REDUCE-REDUCE CONFLICT BUT NOT A SHIFT-REDUCE CONFLICT<br/></span>",
                "<span style=\"display: inline;\">NEITHER A SHIFT-REDUCE NOR A REDUCE-REDUCE CONFLICT</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"509719\"></a><div itemprop=\"text\"><p><strong>Item</strong> $\\textbf(1):E \\rightarrow T$. $+E$ indicates that if the parser sees the symbol $+$ , it can perform a <strong>SHIFT</strong> action.</p><p><strong>Item</strong> $\\textbf(2):F \\rightarrow T$. is a complete item (the dot is at the end), which indicates the parser can perform a <strong>REDUCE</strong> action.</p><p>Since the set contains both a <strong>Shift</strong> possibility on symbol $+$ and a <strong>Reduce</strong> possibility, it results in a <strong>Shift-Reduce conflict.</strong></p><p>There is only one reduction item $(F \\rightarrow T.)$, so there is no <strong>Reduce-Reduce conflict.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/509716/go-classes-dpp-compiler-lr-parser\" target=\"_blank\">GATE Overflow #509716</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-pm-slice=\"1 1 []\">Consider the following grammar:</p><p>$$<br/>\\begin{aligned}<br/>R &amp;\\rightarrow xPy\\mid xQ\\\\<br/>P &amp;\\rightarrow \\varepsilon\\\\<br/>Q &amp;\\rightarrow \\varepsilon<br/>\\end{aligned}<br/>$$</p><p>The following is a canonical LR$(0)$ item set obtained after reading the terminal $(x):$</p><p>$$<br/>I_5=<br/>\\begin{cases}<br/>R&amp;\\rightarrow x\\cdot Py\\\\<br/>R&amp;\\rightarrow x\\cdot Q\\\\<br/>P&amp;\\rightarrow \\cdot\\\\<br/>Q&amp;\\rightarrow \\cdot<br/>\\end{cases}$$</p><p>Here, $(P\\rightarrow\\cdot)$ and $(Q\\rightarrow\\cdot)$ represent completed items for the epsilon productions.</p><p>Which of the following describes the conflicts present in state $(I_5)$ of the LR$(0)$ parser?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A shift-reduce conflict on symbol $(P)$ and a reduce-reduce conflict on symbol $(y)$.<br/></span>",
                "<span style=\"display: inline;\">A shift-reduce conflict on symbol $(P)$, but no reduce-reduce conflict.<br/></span>",
                "<span style=\"display: inline;\">A reduce-reduce conflict only.<br/></span>",
                "<span style=\"display: inline;\">A shift-reduce conflict on symbol $(y)$ and a reduce-reduce conflict on symbol $(\\$)$ (end-of-input).</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"511858\"></a><div itemprop=\"text\">C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504279/go-classes-dpp-compiler-lr-parser\" target=\"_blank\">GATE Overflow #504279</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar.</p><p>The number of <strong>reduction steps</strong> taken by a bottom-up parser while accepting the string $\\textbf{ccccbb}$ is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S \\rightarrow X Y \\mid a$<br/></span>",
                "<span style=\"display: inline;\">$X \\rightarrow c X \\mid c$<br/></span>",
                "<span style=\"display: inline;\">$Y \\rightarrow Y b \\mid b$<br/></span>"
            ],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"501499\"></a><div itemprop=\"text\"><p><strong>Rightmost Derivation (RMD) Order</strong><br/><br/>We always replace the <strong>rightmost</strong> non-terminal in each step.</p><p>\\[<br/>\\begin{array}{|l|l|l|l|}<br/>\\hline<br/>\\text{Step #} &amp; \\text{Derivation} &amp; \\text{Rule Applied} &amp; \\text{Non-terminal Replaced} \\\\<br/>\\hline<br/>0 &amp; S &amp; \\text{Start} &amp; \\\\<br/>\\hline<br/>1 &amp; XY &amp; S \\rightarrow X Y &amp; S \\\\<br/>\\hline<br/>2 &amp; XYb &amp; Y \\rightarrow Y b &amp; \\mathbf{Y} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>3 &amp; Xbb &amp; Y \\rightarrow b &amp; \\mathbf{Y} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>4 &amp; c X b b &amp; X \\rightarrow c X &amp; \\mathbf{X} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>5 &amp; ccXbb &amp; X \\rightarrow c X &amp; \\mathbf{X} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>6 &amp; cccXbb &amp; X \\rightarrow c X &amp; \\mathbf{X} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>7 &amp; c c c c b &amp; X \\rightarrow c &amp; \\mathbf{X} \\text{ (Rightmost)} \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>Bottom up parser uses RMD in reverse<br/><br/>No of steps in RMD and RMD in reverse will be same<br/><br/>Hence answer is $7$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501498/go-classes-dpp-compiler-bottom-up-parser\" target=\"_blank\">GATE Overflow #501498</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the <strong>maximum</strong> number of <strong>reduce moves</strong> that can be taken by a bottom-up parser for a grammar with <strong>no epsilon and no unit-production</strong> (i.e., of type $A \\rightarrow \\epsilon$ and $A \\rightarrow \\alpha$ ) to parse a string with $\\textbf{7}$ <strong>tokens</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$13$<br/></span>",
                "<span style=\"display: inline;\">$2^7$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"501497\"></a><div itemprop=\"text\">The maximum number of reduce moves for a string of length $n$ under these specific constraints (no $\\epsilon$-productions and no unit-productions) is given by the formula $\\mathbf{n - 1}$.<br/> <br/> Hence B is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501496/go-classes-dpp-compiler-bottom-up-parser\" target=\"_blank\">GATE Overflow #501496</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Compiler Design (Bottom-Up Parsing (LR Parsers - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Bottom-Up Parsing (LR Parsers - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Bottom-Up Parsing (LR Parsers (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following two sets of $\\mathrm{LR}(1)$ items of an $\\mathrm{LR}(1)$ grammar.<br/><br/>\\[<br/>\\begin{array}{l|l}<br/>\\text{Set } I_1 &amp; \\text{Set } I_2 \\\\<br/>\\hline<br/>S \\rightarrow A \\cdot b,\\ \\mathbf{c} / d &amp; S \\rightarrow A \\cdot b,\\ \\mathbf{a} / \\mathbf{s} \\\\<br/>A \\rightarrow \\cdot e,\\ \\mathbf{b} &amp; A \\rightarrow \\cdot e,\\ \\mathbf{b} \\\\<br/>A \\rightarrow \\cdot f,\\ \\mathbf{b} &amp; A \\rightarrow \\cdot f,\\ \\mathbf{b}<br/>\\end{array}<br/>\\]</p><p><br/>Which of the following statements related to merging of the two sets in the corresponding <strong>LALR</strong> parser is/are <strong>FALSE</strong>?</p><div><br/><br/> </div><p><strong>Given Details:</strong></p><ul><li>Cannot be merged since the kernel items have different look-ahead sets.</li><li>Can be merged and will not result in any Shift-Reduce (S-R) or Reduce-Reduce (R-R) conflicts.</li><li>Can be merged but will result in a <strong>Reduce-Reduce (R-R) conflict </strong>on look-ahead symbol b.</li><li>Cannot be merged because the <strong>GOTO</strong> action on symbol $\\mathbf{b}$ from $I_1$ and $I_2$ would lead to different target LR(1) states.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1, 2 and 4 only</span>",
                "<span style=\"display: inline;\">3 only</span>",
                "<span style=\"display: inline;\">1 and 2 only</span>",
                "<span style=\"display: inline;\">1, 3 and 4 only</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"501494\"></a><div itemprop=\"text\"><p>Two LR(1) sets can be merged into a single LALR(1) set if and only if they have the <strong>same kernel items.</strong></p><ul><li><strong>Kernel of</strong> $I_1:\\{S \\rightarrow A \\cdot b, ~A \\rightarrow \\cdot e, ~A \\rightarrow \\cdot f\\}$<br/> </li><li><strong>Kernel of</strong> $I_2:\\{S \\rightarrow A \\cdot b, ~A \\rightarrow \\cdot e, ~A \\rightarrow \\cdot f\\}$<br/> </li></ul><p>Since the kernel items are identical (disregarding the look-aheads), the two sets <strong>CAN be merged.</strong><br/> </p><p>The merged LALR(1) set $I_{12}$ contains no Reduce items, therefore, it <strong>cannot</strong> have an S-R or R-R conflict.</p><p><br/><em>Statement 4:</em> Cannot be merged because the $\\textbf{GOTO}$ action on symbol $\\mathbf{b}$ from $I_1$ and $I_2$ would lead to two different sets.</p><p><strong>FALSE.</strong> Since $I_1$ and $I_2$ have identical kernels, $\\operatorname{GOTO}\\left(I_1, b\\right)$ and $\\operatorname{GOTO}\\left(I_2, b\\right)$ will lead to two $\\operatorname{LR}(1)$ sets that are mergeable (i.e., they have the same kernel). The GOTO actions do not prevent the merging of $I_1$ and $I_2$.<br/> </p><p>Hence $1,3,4$ are false</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501493/go-classes-dpp-compiler-bottom-up-parser\" target=\"_blank\">GATE Overflow #501493</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - Compiler Design (Syntax Directed Translation (SDT - Part 1)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Syntax Directed Translation (SDT - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Syntax Directed Translation (SDT (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A programming language does not allow integer division operation. This is generally detected in the phase of</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Lexical Analysis<br/></span>",
                "<span style=\"display: inline;\">Syntax Analysis<br/></span>",
                "<span style=\"display: inline;\">Semantic Analysis<br/></span>",
                "<span style=\"display: inline;\">None of the other options</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556734\"></a><div itemprop=\"text\"><p>Consider the following expression:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int a = 10; int b = 2; int c = a / b;\" dir=\"ltr\">int a = 10; int b = 2; int c = a / b;</pre><p>Suppose the programming language does not permit division when both operands are integers.</p><p>We need to determine which compilation phase generally detects this violation.</p><p><strong>A : Lexical Analysis</strong></p><p>Lexical analysis identifies tokens such as identifiers, constants, and operators.</p><p>For example, it can recognize $\\texttt{a}$, $\\texttt{/}$, and $\\texttt{b}$ as valid tokens. However, it does not ordinarily check whether division is permitted for the operand types.</p><p>Hence, A is incorrect.</p><p><br/><strong>B : Syntax Analysis</strong></p><p>Syntax analysis determines whether an expression follows the grammatical rules of the language.</p><p>For example, the expression $\\texttt{a / b}$ may be grammatically valid because it follows the structure:</p><p>\\[ E \\rightarrow E / E \\]</p><p>However, syntactic validity does not guarantee that an operation is permitted for the types of its operands.</p><p>Hence, B is incorrect under the usual separation of syntax and semantics.</p><p><br/><strong>C : Semantic Analysis</strong></p><p>Semantic analysis checks whether an expression is meaningful and valid according to the language's semantic rules.</p><p>It performs checks such as type compatibility and whether operators are applicable to their operands.</p><p>If integer division is prohibited, the semantic analyzer can reject the expression because both operands are integers.</p><p>Hence, C is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556733/go-classes-dpp-gate-cs-compiler-design-type-checking\" target=\"_blank\">GATE Overflow #556733</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the use of a symbol table in compiler design?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Finding the scope of an identifier<br/></span>",
                "<span style=\"display: inline;\">Type checking<br/></span>",
                "<span style=\"display: inline;\">Maintaining information about program entities and their names<br/></span>",
                "<span style=\"display: inline;\">All of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"556576\"></a><div itemprop=\"text\"><p>A <strong>symbol table</strong> is a data structure maintained by a compiler to store information about identifiers used in the source program.</p><p>A typical symbol-table entry may contain:</p><p>$$\\begin{array}{|l|l|} \\hline \\textbf{Attribute} &amp; \\textbf{Example}\\\\ \\hline \\text{Identifier name} &amp; \\texttt{count}\\\\ \\text{Data type} &amp; \\texttt{int}\\\\ \\text{Scope} &amp; \\text{Local}\\\\ \\text{Storage information} &amp; \\text{Stack offset}\\\\ \\hline \\end{array}$$</p><p>Consider the following C program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int x = 10; void fun() { float x = 5.5; }\">int x = 10; void fun() { float x = 5.5; }</pre><p>The identifier $\\texttt{x}$ appears twice, but the two declarations refer to different variables with different types and scopes. </p><p>Symbol-table information helps the compiler resolve each occurrence correctly.</p><p><strong>Option Analysis</strong></p><p><strong>A : Correct</strong></p><p>Scope information helps determine which declaration an identifier refers to.</p><p><strong>B : Correct</strong></p><p>Semantic analysis uses symbol-table information to check type compatibility.</p><p><strong>C : Correct</strong></p><p>The table stores information about variables, functions, parameters, and other identifiers.</p><p>All three statements describe valid uses of symbol-table information.</p><p><br/>Therefore,</p><p><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556574/go-classes-dpp-gate-cs-compiler-design-symbol-table\" target=\"_blank\">GATE Overflow #556574</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following Syntax Directed Translation (SDT) scheme where $S$ is the start symbol and $id.\\mathrm{val}$ represents the numerical value of an identifier:</p><p>$$<br/>\\begin{gathered}<br/>S \\rightarrow E \\quad\\{\\text { print }(E . \\text { val })\\} \\\\<br/>E \\rightarrow E_1+T \\quad\\left\\{E . \\text { val }=E_1 . \\text { val }+T . \\text { val }\\right\\} \\\\<br/>E \\rightarrow T \\quad\\{E . \\text { val }=T . \\text { val }\\} \\\\<br/>T \\rightarrow T_1 * F \\quad\\left\\{T . \\text { val }=T_1 . \\text { val } \\times \\text { F.val }\\right\\} \\\\<br/>T \\rightarrow F \\quad\\{T . \\text { val }=F . \\text { val }\\} \\\\<br/>F \\rightarrow(E) \\quad\\{\\text { F.val }=\\text { E.val }\\} \\\\<br/>F \\rightarrow i d \\quad\\{\\text { F.val }=i d . \\text { val }\\}<br/>\\end{gathered}<br/>$$</p><p><br/>Which of the following statement(s) is/are TRUE regarding this SDT?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE UNDERLYING GRAMMAR IS AMBIGUOUS.<br/></span>",
                "<span style=\"display: inline;\">THE ATTRIBUTES IN THIS SDD ARE ENTIRELY SYNTHESIZED.<br/></span>",
                "<span style=\"display: inline;\">THE SDT CAN BE EVALUATED DURING BOTTOM-UP PARSING WITHOUT ANY MODIFICATIONS.<br/></span>",
                "<span style=\"display: inline;\">FOR THE INPUT $3 + 4 * 5$, THE PRINTED VALUE WILL BE 35 IF THE OPERATORS ARE TREATED AS LEFT-ASSOCIATIVE.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"520525\"></a><div itemprop=\"text\">The grammar is the standard expression grammar which is unambiguous (A is false). All values flow upward from children to parents, making them synthesized (B is true). Since all actions are at the ends of productions, it is an S-attributed definition, which can be easily handled by a bottom-up parser (C is true). For D, the value would be $23$ (standard precedence), not $35$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/520524/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #520524</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following L-attributed Syntax Directed Definition (SDD). $S$ is the start symbol, and S.val is a synthesized attribute. A.inh is an inherited attribute.</p><p>For the input string <strong>id id</strong> where the lexical values of the two <strong>id</strong> tokens are $\\mathbf{3}$ and $\\mathbf{4}$ respectively, what is the value of $S.val$?</p><p><strong>Given Details:</strong></p><ul><li>$S \\rightarrow A B \\quad\\{A . i n h=5 ; S . v a l=A . v a l+B . v a l\\}$</li><li>$A \\rightarrow id \\quad\\{ A.val = A.inh × id.lexval \\}$</li><li>$B \\rightarrow id \\quad\\{B. val = id.lexval +2\\}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$</span>",
                "<span style=\"display: inline;\">$21$</span>",
                "<span style=\"display: inline;\">$23$</span>",
                "<span style=\"display: inline;\">$25$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"519231\"></a><div itemprop=\"text\"><p>This problem involves an <strong>L-attributed definition</strong>, where inherited attributes $($like $A.inh)$ are passed down or across the tree, and synthesized attributes (like $S.val$ and $A.val)$ are passed up.</p><p><strong>Initialize </strong>$A.inh:$ According to the first production, $A.inh$ is set to $5$.<br/><br/><strong>Evaluate</strong> $A.val:$ The second production states $A.val =A . i n h \\times \\mathrm{id}_1. lexval$ .</p><ul><li>Given $\\mathrm{id}_1.lexval =3$ :<br/> </li><li>$A.val =5 \\times 3=15$.<br/> </li></ul><p><strong>Evaluate</strong> $B.val:$ The third production states $B.val =\\mathrm{id}_2.lexval +2$.</p><ul><li>Given $\\mathrm{id}_2.lexval =4$ :<br/> </li><li>$B.val =4+2=6$.<br/> </li></ul><p><strong>Evaluate</strong> $S.val:$ Finally, $S.val = A.val + B.val$.</p><ul><li>$S.val =15+6=21$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/519230/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #519230</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following syntax-directed translation scheme (SDTS) where $S$ is the start symbol:</p><p>$$<br/>\\begin{aligned}<br/>&amp; S \\rightarrow E\\{\\text { print }(\\text { E.val })\\} \\\\<br/>&amp; E \\rightarrow E_1+T\\left\\{\\text { E.val }=E_1 . \\text { val } \\times T . \\text { val }\\right\\} \\\\<br/>&amp; E \\rightarrow T\\{\\text { E.val }=T . \\text { val }\\} \\\\<br/>&amp; T \\rightarrow T_1 * F\\left\\{T . \\text { val }=T_1 . \\text { val }+F . \\text { val }\\right\\} \\\\<br/>&amp; T \\rightarrow F\\{T . \\text { val }=F . \\text { val }\\} \\\\<br/>&amp; F \\rightarrow \\text { id }\\{F . \\text { val }=\\text { id.lexval }\\}<br/>\\end{aligned}<br/>$$</p><p>What is the output printed by the SDTS for the input expression: $2+3 \\star 5$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$17$<br/></span>",
                "<span style=\"display: inline;\">$16$<br/></span>",
                "<span style=\"display: inline;\">$40$<br/></span>",
                "<span style=\"display: inline;\">$25$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"519223\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"449\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8975938737261727520\" width=\"339\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/519221/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #519221</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following SDT scheme used to evaluate an expression. The synthesized attribute $\\mathrm{val}$ stores the numerical value.<br/> \\[<br/> \\begin{aligned}<br/> E &amp;\\rightarrow E_1 + T \\quad \\{\\, E.\\text{val} = E_1.\\text{val} + T.\\text{val} \\,\\} \\\\<br/> E &amp;\\rightarrow T \\quad \\{\\, E.\\text{val} = T.\\text{val} \\,\\} \\\\<br/> T &amp;\\rightarrow T_1 * F \\quad \\{\\, T.\\text{val} = T_1.\\text{val} \\times F.\\text{val} \\,\\} \\\\<br/> T &amp;\\rightarrow F \\quad \\{\\, T.\\text{val} = F.\\text{val} \\,\\} \\\\<br/> F &amp;\\rightarrow (E) \\quad \\{\\, F.\\text{val} = E.\\text{val} \\,\\} \\\\<br/> F &amp;\\rightarrow \\text{digit} \\quad \\{\\, F.\\text{val} = \\text{digit.lexval} \\,\\}<br/> \\end{aligned}<br/> \\]<br/> For the input string $3 * 4+5 *(2+1)$, what is the value of $E.\\mathrm{val}$ at the root of the dependency graph?</div></span>",
            "image": "",
            "options": [],
            "answer": "27",
            "solution": "<div class=\"solution-content\"><a name=\"518647\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"392\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8156724186628974573\" width=\"450\"/></p><p><br/>$E.\\mathrm{val}=12+15=27.$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518646/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #518646</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following Syntax-Directed Translation (SDT) scheme with the grammar rules and actions provided below:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; S \\rightarrow S_1 \\# T\\left\\{S . \\mathrm{val}=S_1 . \\mathrm{val}-T . \\mathrm{val}\\right\\} \\\\<br/> &amp; S \\rightarrow T\\{S . \\mathrm{val}=T . \\mathrm{val}\\} \\\\<br/> &amp; T \\rightarrow T_1 \\% i d\\left\\{T . \\mathrm{val}=T_1 . \\mathrm{val} \\times i d . \\mathrm{val}\\right\\} \\\\<br/> &amp; T \\rightarrow i d\\{T . \\mathrm{val}=i d . \\mathrm{val}\\}<br/> \\end{aligned}<br/> $$<br/> <br/> What is the value of $S.\\mathrm{val}$ for the input expression$: 10 \\# 2 \\% 3 \\# 4$?</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"517991\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"343\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2514637253845592931\" width=\"348\"/></p><p>Final answer is $0$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/517989/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #517989</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a syntax tree for the expression $a+b * c-d / e$. If the expression is evaluated using a post-order traversal of this tree, and the values at the leaves are $a=2, b=3, c=4, d= 10, e=2$, what is the final value computed at the root?<br/> <br/> (Assume standard operator precedence)</div></span>",
            "image": "",
            "options": [],
            "answer": "9",
            "solution": "<div class=\"solution-content\"><a name=\"516807\"></a><div itemprop=\"text\">The expression follows standard operator precedence (Multiplication/Division before Addition/Subtraction). The tree evaluates $b * c=12$ and $d / e=5$. Then it performs $a+12=14$, and finally $14-5=9$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516806/go-classes-dpp-compiler-syntax-tree\" target=\"_blank\">GATE Overflow #516806</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the expression tree shown below. Each leaf represents a numerical value, which can be chosen from the set $\\{-1,1\\}$. Over all possible choices of the values at the leaves, what is the <strong>MAXIMUM</strong> possible value of the expressiog represented by the tree?</p><p style=\"text-align:center\"><img alt=\"\" height=\"299\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3735247249495655761\" width=\"602\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3735247249495655761",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"516805\"></a><div itemprop=\"text\"><ol><li><strong>THE LEAVES (LEVEL 3)</strong> Each leaf can be either $-1$ or $1$.<br/> </li><li><strong>LEVEL 2 NODES (FROM LEFT TO RIGHT)</strong><ul><li><strong>MULTIPLICATION NODE ($\\times$):</strong> Possible values are $1 \\times 1=1,(-1) \\times(-1)=1$, or $1 \\times (-1)=-1$.<br/> <ul><li><strong>Range</strong>: $\\{-1,1\\}$<br/> </li></ul></li><li><strong>DIVISION NODE ($÷$):</strong> Possible values are $1 / 1-1,(-1) /(-1)-1,1 /(-1)-1$, or $(-1) / 1--1$.<br/> <ul><li><strong>Range:</strong> $\\{-1,1\\}$<br/> </li></ul></li><li><strong>SUBTRACTION NODE ($-$):</strong> Possible values are $1-1=0,(-1)-(-1)=0,1$ -$(-1)=2$, or $(-1)-1=-2$.<br/> <ul><li>Range: $\\{-2,0,2\\}$<br/> </li></ul></li><li><strong>MULTIPLICATION NODE ($\\times$):</strong> Same logic as the first node.<br/> <ul><li>Range: $\\{-1,1\\}$<br/> </li></ul></li></ul></li><li><strong>LEVEL 1 NODES</strong><ul><li><strong>LEFT ADDITION NODE ($+$):</strong> Combines the first × node $\\{-1,1\\}$ and the ÷ node $\\{-1,1\\}$.<br/> <ul><li><strong>Maximum:</strong> $1+1=2$. Minimum: $-1+(-1)=-2$.<br/> </li><li><strong>Range:</strong> $\\{-2,0,2\\}$<br/> </li></ul></li><li><strong>RIGHT MULTIPLICATION NODE ($\\times$):</strong> Combines the - node $\\{-2,0,2\\}$ and the $x$ node $\\{-1,1\\}$.<br/> <ul><li><strong>Maximum:</strong> $2 \\times 1=2$ or $-2 \\times-1=2$.<br/> </li><li><strong>Range:</strong> $\\{-2,0,2\\}$<br/><br/> <ul></ul></li></ul></li></ul></li><li><strong>THE ROOT NODE ($\\times$)</strong> The root multiplies the results of the two Level 1 nodes. Both subtrees have a maximum possible value of $2$ and a minimum of $-2$.<br/> <ul><li>To maximize the product: $2 \\times 2=4$ or $(-2) \\times(-2)=4$.</li></ul></li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516799/go-classes-dpp-compiler-expression-evaluation\" target=\"_blank\">GATE Overflow #516799</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following S-attributed SDT scheme used to calculate the value of an expression. The grammar generates simple arithmetic additions and is suitable for an LR parser.</p><p>\\[<br/>\\begin{array}{ll}<br/>\\text{Production} &amp; \\text{Semantic Rules} \\\\<br/>E \\rightarrow E_1 + T &amp; E.\\text{val} = E_1.\\text{val} + T.\\text{val} \\\\<br/>E \\rightarrow T &amp; E.\\text{val} = T.\\text{val} \\\\<br/>T \\rightarrow \\mathbf{id} &amp; T.\\text{val} = \\mathbf{id}.\\text{lexval}<br/>\\end{array}<br/>\\]</p><p>If the input string is $3+5+2$, what is the sequence of values stored on the semantic stack for the attribute val immediately after each reduction of the type $E \\rightarrow E_1+T$ occurs?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8,10$<br/></span>",
                "<span style=\"display: inline;\">$3, 5, 2$<br/></span>",
                "<span style=\"display: inline;\">$3, 8, 10$<br/></span>",
                "<span style=\"display: inline;\">$5,2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"515932\"></a><div itemprop=\"text\"><p><strong>Initial Reductions:</strong></p><ul><li><strong>id</strong> $(3)$ is reduced to $T$, then $T$ is reduced to $E$. Stack has $E . v a l=3$.<br/> </li><li><strong>id</strong> $(5)$ is reduced to $T$. Stack now has $E(3)$ and $T(5)$.<br/> </li></ul><p><strong>First $E \\rightarrow E_1+T$ Reduction:</strong></p><ul><li>The parser reduces $E(3)+T(5)$ to a new $E$.<br/> </li><li>E.val $=3+5=\\mathbf{8}$.<br/> </li></ul><p><strong>Next Steps:</strong></p><ul><li><strong>id</strong> $(2)$ is reduced to $T$. Stack now has $E$ $(8)$ and $T$ $(2)$.<br/> </li></ul><p><strong>Second $E \\rightarrow E_1+T$ Reduction:</strong></p><ul><li>The parser reduces $E(8)+T(2)$ to the final $E$.<br/> </li><li>E.val $=8+2=\\mathbf{1 0}$.</li></ul><p>The sequence of values produced by the specific reduction $E \\rightarrow E_1+T$ is $\\mathbf{8 , 1 0}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/515931/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #515931</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - Compiler Design (Syntax Directed Translation (SDT - Part 2)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Syntax Directed Translation (SDT - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 8,
    "topicsCovered": "Syntax Directed Translation (SDT (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>The attributes of three operators in a custom language are given below:</strong><br/>\\begin{array}{llll}<br/>\\text { OPERATOR } &amp; \\text { PRECEDENCE } &amp; \\text { ASSOCIATIVITY } &amp; \\text { ARITY } \\\\<br/>\\text { # (Square) } &amp; \\text { HIGH } &amp; \\text { RIGHT } &amp; \\text { UNARY (Postfix) } \\\\<br/>\\text { ^ (Power) } &amp; \\text { MEDIUM } &amp; \\text { RIGHT } &amp; \\text { BINARY } \\\\<br/>+ \\text { (Plus) } &amp; \\text { LOW } &amp; \\text { LEFT } &amp; \\text { BINARY }<br/>\\end{array}</p><p><br/><strong>OPERATOR DEFINITIONS:</strong></p><p><strong>Evaluate the following expression:</strong></p><p>$$<br/>5+2 ~^{\\wedge} ~2 ~\\# ~^{\\wedge}~ 2<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathbf{x \\#}=x^2$ (Square the number before it)<br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x}^{\\wedge} \\mathbf{y}=x^y$ (Standard power)<br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x + y}=x+y$ (Standard addition)<br/></span>"
            ],
            "answer": "65541",
            "solution": "<div class=\"solution-content\"><a name=\"513048\"></a><div itemprop=\"text\">Using the given rules, the expression can be written as : $5+2$ raise to $\\left(\\left(2^2\\right)^2\\right)= 5+2^{16}=5+65536=65541$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513047/go-classes-dpp-compiler-expression-evaluation\" target=\"_blank\">GATE Overflow #513047</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>The attributes of three symbolic operators are given below:</strong></p><p>\\[<br/>\\begin{array}{llll}<br/>\\text{OPERATOR} &amp; \\text{PRECEDENCE} &amp; \\text{ASSOCIATIVITY} &amp; \\text{ARITY} \\\\<br/>\\&amp; &amp; \\text{HIGH} &amp; \\textbf{RIGHT} &amp; \\text{Binary} \\\\<br/>1 &amp; \\text{MEDIUM} &amp; \\text{LEFT} &amp; \\text{Binary} \\\\<br/>\\Longrightarrow &amp; \\text{LOW} &amp; \\text{LEFT} &amp; \\text{Binary}<br/>\\end{array}<br/>\\]</p><p><br/><strong>Rules for this language:</strong></p><p>The value of the expression $10 \\Longrightarrow 2 ~\\&amp;~ 3 ~\\&amp;~ 2 ~\\|~ 5$ in this language is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A \\& B$ is defined as $(A \\times B)$<br/></span>",
                "<span style=\"display: inline;\">$A \\| B$ is defined as $(A+B)$<br/></span>",
                "<span style=\"display: inline;\">$A \\Longrightarrow B$ is defined as $(A-B)$<br/></span>"
            ],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"513045\"></a><div itemprop=\"text\">Using the given rules, the expression can be written as $10-((2 * 3 * 2)+5)=10-17 =-7$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513044/go-classes-dpp-compiler-expression-evaluation\" target=\"_blank\">GATE Overflow #513044</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the Prefix (Polish Notation) expression:</p><p>$$<br/>+* / \\mathbf{A} \\mathbf{B} \\mathbf{C}-\\mathbf{D} \\mathbf{E}<br/>$$</p><p><br/>And the following operand values: $A=12, B=4, C=2, D=10$, $E=5$.<br/><br/>Assuming standard integer arithmetic for all operators, what is the final value represented by the expression tree?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$29$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$11$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505531\"></a><div itemprop=\"text\">The Prefix expression corresponds to the Infix expression<br/> <br/> $(((A / B) \\times C)+(D-E))$.<br/> <br/> Evaluating this as $((12 / 4) \\times 2)+ (10-5)$ yields $(3 \\times 2)+5=11$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/505530/go-classes-dpp-compiler-expression-tree\" target=\"_blank\">GATE Overflow #505530</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the tree shown below.</p><p style=\"text-align:center\"><img alt=\"\" height=\"269\" src=\"https://cdn.mathpix.com/snip/images/DBt2hCjalN3JIW5WVafBvUOMGNDNyKWoYvKc5rEDU6k.original.fullsize.png\" width=\"588\"/></p><p><br/>Each leaf represents a numerical value, which can be chosen to be either $\\mathbf{0}$ or $\\mathbf{2}$.<br/><br/>Over all possible choices of the values at the leaves, the <strong>minimum possible value</strong> of the expression represented by the tree is:</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/DBt2hCjalN3JIW5WVafBvUOMGNDNyKWoYvKc5rEDU6k.original.fullsize.png",
            "options": [],
            "answer": "48",
            "solution": "<div class=\"solution-content\"><a name=\"505687\"></a><div itemprop=\"text\">-48: (-2*4)*(4+(2-0))</div><br><br><small>Source: <a href=\"https://gateoverflow.in/505528/go-classes-dpp-compiler-expression-tree\" target=\"_blank\">GATE Overflow #505528</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar for a simplified block structure. The translation scheme uses : synthesized attribute $L$.count to track the total number of statements and an inherited attribute start_index to denote the beginning index of the block.</p><p>Evaluation Rule: Inherited attributes (start_index) are computed and passed top-down before any synthesized attributes (count) are computed bottom-up. Actions (print statements) fire when the associated production is reduced.</p><p>\\[<br/>\\begin{array}{ll}<br/>\\text{Production Rule} &amp; \\text{Semantic Rule (Action)} \\\\[6pt]<br/>S \\rightarrow \\text{BEGIN } L \\text{ END} &amp; L.\\text{start index} = S.\\text{start index},\\ \\text{print(\"Total statements:\", } L.\\text{count)} \\\\[6pt]<br/>L \\rightarrow L_1\\ \\text{STMT} &amp; L_1.\\text{start index} = L.\\text{start index},\\ L.\\text{count} = L_1.\\text{count} + 1 \\\\[6pt]<br/>L \\rightarrow \\text{STMT} &amp; \\text{print(\"Statement index:\", } L.\\text{start index)},\\ L.\\text{count} = 1<br/>\\end{array}<br/>\\]</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">STATEMENT INDEX: 5, TOTAL STATEMENTS: 1<br/></span>",
                "<span style=\"display: inline;\">STATEMENT INDEX: 5, STATEMENT INDEX: 6, TOTAL STATEMENTS: 2<br/></span>",
                "<span style=\"display: inline;\">STATEMENT INDEX: 5, TOTAL STATEMENTS: 2<br/></span>",
                "<span style=\"display: inline;\">STATEMENT INDEX: 6, STATEMENT INDEX: 5, TOTAL STATEMENTS: 2</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"503438\"></a><div itemprop=\"text\"><ul><li>$S \\rightarrow$ BEGIN $L_{\\text {full }}$ END<br/> </li><li>$L_{\\text {full }} \\rightarrow L_{\\text {base }} \\mathrm{STMT}_2$<br/> </li><li>$L_{\\text {base }} \\rightarrow \\mathrm{STMT}_1$</li></ul><p>The inherited attribute $L$.start_index flows down the parse tree, carrying the starting index. The print action for the index occurs on the base case ( $L \\rightarrow$ STMT).</p><ul><li>S.start_index $=5$ (Initial)</li><li>Rule $S \\rightarrow$ BEGIN $L$ END:</li><li>$L_{\\text {full }} \\cdot$ start_index $=S$.start_index $=\\mathbf{5}$</li><li>Rule $L \\rightarrow L_1$ STMT (for $L_{\\text {full }}$ ):</li><li>$L_{\\text {base }} \\cdot$ start_index $=L_{\\text {full }} \\cdot$ start_index $=\\mathbf{5}$</li><li>Rule $L \\rightarrow$ STMT (for $L_{\\text {base }}$ ):</li><li>Action 1 (Print Index): print(\"Statement index: \", $L_{\\text {base }}$.start index)</li><li>Output 1: Statement index: 5</li></ul><p>The synthesized attribute $L$.count flows up the tree, tallying the statements as the subtrees complete. The final print action occurs on the $S$ rule.</p><ul><li>Rule $L \\rightarrow$ STMT (for $L_{\\text {base }}$ ):</li><li>$L_{\\text {base }} \\cdot$ count $=1$</li><li>Rule $L \\rightarrow L_1$ STMT (for $L_{\\text {full }}$ ):</li><li>$L_{\\text {full }} \\cdot$ count $=L_{\\text {base }} \\cdot$ count $+1=1+1=\\mathbf{2}$</li><li>Rule $S \\rightarrow$ BEGIN $L$ END:</li><li>Action 2 (Print Count): print(\"Total statements: \", $L_{\\text {full }}$.count)</li><li>Output 2: Total statements: 2</li></ul><p>Option C is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503437/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #503437</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following expression grammar with three operators: ⊕, $\\ominus$, and $\\odot$. A Syntax-Directed Translation (SDT) scheme is defined for the grammar using synthesized attribute val (value). All operators are assumed to be left-to-right associative for this SDT scheme, regardless of the grammar's structure, and their precedence is determined by the grammar's hierarchy.<br/> <br/> The rules for evaluation are:<br/> <br/> 1. Precedence: $\\odot$ (Highest) $&gt;\\ominus$ (Middle) $&gt;\\oplus$ (Lowest).<br/> <br/> 2. Associativity: All operators evaluate from left-to-right (Left Associative).<br/> <br/> \\[<br/> \\begin{array}{ll}<br/> \\text{Production Rule} &amp; \\text{Semantic Rule (Action)} \\\\[6pt]<br/> P \\rightarrow Q \\oplus P_1 &amp; P.\\mathrm{val} = Q.\\mathrm{val} + P_1.\\mathrm{val} \\\\[4pt]<br/> P \\rightarrow Q &amp; P.\\mathrm{val} = Q.\\mathrm{val} \\\\[4pt]<br/> Q \\rightarrow Q_1 \\ominus R &amp; Q.\\mathrm{val} = Q_1.\\mathrm{val} - R.\\mathrm{val} \\\\[4pt]<br/> Q \\rightarrow R &amp; Q.\\mathrm{val} = R.\\mathrm{val} \\\\[4pt]<br/> R \\rightarrow \\text{value} \\odot R_1 &amp; R.\\mathrm{val} = \\text{value}.\\mathrm{val} \\times R_1.\\mathrm{val} \\\\[4pt]<br/> R \\rightarrow \\text{value} &amp; R.\\mathrm{val} = \\text{value}.\\mathrm{val}<br/> \\end{array}<br/> \\]<br/> <br/> Assuming the terminal value is an integer, what is the computed value of the expression $10 \\ominus 5 \\oplus 3 \\odot 2 ?$</div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"503435\"></a><div itemprop=\"text\"><p>The expression must be grouped based on precedence: © (Highest) → θ (Middle) → ⊕ (Lowest).</p><p>$$<br/>10 \\ominus 5 \\oplus(3 \\odot 2)<br/>$$</p><p><br/>Evaluation within Precedence Groups (Left Associativity)<br/>The groups are:<br/><br/>Group: $3 \\odot 2$. Calculation: $3 \\times 2=6$.</p><ul><li>Remaining Expression: $10 \\ominus 5 \\oplus 6$.</li></ul><p>Now, we evaluate the remaining operators $(\\ominus, \\oplus)$ from left to right as per the problem statement's rule.</p><ul><li>Step 1 (Leftmost): $10 \\ominus$ 5. Calculation: $10-5=5$.<br/> </li><li>Step 2 (Remaining): $5 \\oplus 6$. Calculation: $5+6=11$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503434/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #503434</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following grammar with semantic actions inside braces:</p><p>If we perform a leftmost derivation for the string $a a b b b$ and execute the actions as soon as the leftmost nonterminal in the sentential form is replaced, what is the printed output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S \\rightarrow a A \\quad$ {print \"1\"}<br/></span>",
                "<span style=\"display: inline;\">$S \\rightarrow b \\quad$ {print \" 2 \" }<br/></span>",
                "<span style=\"display: inline;\">$A \\rightarrow S b \\quad$ {print \" 3 \" }</span>"
            ],
            "answer": "13132",
            "solution": "<div class=\"solution-content\"><a name=\"500376\"></a><div itemprop=\"text\">13132</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500367/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #500367</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A shift-reduce parser carries out the actions specified within braces immediately after reducing with the corresponding rule of the grammar:</p><p>What is the translation of $a a b c c$ using the syntax-directed translation scheme described by the above rules?</p><p><strong>Given Details:</strong></p><ul><li>$A \\rightarrow a B \\quad$ {print \"1\"}</li><li>$A \\rightarrow b \\quad$ {print \"2\"}</li><li>$B \\rightarrow A c$ {print \"3\"}</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$23131$</span>",
                "<span style=\"display: inline;\">$21323$</span>",
                "<span style=\"display: inline;\">$21321$</span>",
                "<span style=\"display: inline;\">$12312$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500366\"></a><div itemprop=\"text\"><p>1. $A \\rightarrow a B$<br/><br/>2. $A \\rightarrow b$<br/><br/>3. $B \\rightarrow A c$</p><p>Input string: $a a b c c$<br/><br/>We want the rightmost derivation in reverse (reductions).</p><p>Rightmost Derivation</p><p><br/>Start symbol: $A$</p><p><br/>Step 1:</p><p>$$<br/>\\begin{aligned}<br/>&amp; A \\rightarrow a B \\\\<br/>&amp; a B<br/>\\end{aligned}<br/>$$</p><p><br/>Step 2:</p><p>$$<br/>\\begin{aligned}<br/>&amp; B \\rightarrow A c \\\\<br/>&amp; \\text { a Ac }<br/>\\end{aligned}<br/>$$</p><p><br/>Step 3:</p><p>$$<br/>\\begin{aligned}<br/>&amp; A \\rightarrow a B \\\\<br/>&amp; a a B c<br/>\\end{aligned}<br/>$$</p><p><br/>Step 4:</p><p>$$<br/>\\begin{aligned}<br/>&amp; B \\rightarrow A c \\\\<br/>&amp; \\text { a a Acc }<br/>\\end{aligned}<br/>$$</p><p><br/>Step 5:</p><p>$$<br/>\\begin{aligned}<br/>&amp; A \\rightarrow b \\\\<br/>&amp; a a b c c<br/>\\end{aligned}<br/>$$</p><p><br/>So the rightmost derivation is:</p><p>$$<br/>A \\Rightarrow a B \\Rightarrow a A c \\Rightarrow a a B c \\Rightarrow a a A c c \\Rightarrow a a b c c<br/>$$</p><p>Reduction steps in a bottom-up parser correspond to reversing the rightmost derivation:<br/><br/>1. Start with $a a b c c$<br/><br/>2. Reduce $b \\rightarrow A$ using $A \\rightarrow b$ (print \" 2 \") → a a A c c<br/><br/>3. Reduce $A c \\rightarrow B$ using $B \\rightarrow A c$ (print \" 3 \") → а а в C<br/><br/>4. Reduce $a B \\rightarrow A$ using $A \\rightarrow a B$ (print \"1\") → a A c<br/><br/>5. Reduce $A c \\rightarrow B$ using $B \\rightarrow A c$ (print \" 3 \") → а в<br/><br/>6. Reduce $a B \\rightarrow A$ using $A \\rightarrow a B$ (print \" 1 \") → A<br/><br/><strong>matches with option A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500365/go-classes-dpp-compiler-sdt\" target=\"_blank\">GATE Overflow #500365</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - Compiler Design (Intermediate Code Generation & Basic Blocks - Part 1)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Intermediate Code Generation & Basic Blocks - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Intermediate Code Generation & Basic Blocks (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In the standard compilation pipeline where a compiler produces assembly code, machine code is first generated by which of the following?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Compiler<br/></span>",
                "<span style=\"display: inline;\">Assembler<br/></span>",
                "<span style=\"display: inline;\">Linker<br/></span>",
                "<span style=\"display: inline;\">Loader</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"556572\"></a><div itemprop=\"text\"><p>In the specified compilation pipeline, the compiler translates source code into assembly code. </p><p>The assembler then translates assembly instructions into machine code, typically producing an object file. </p><p>The linker combines object files and resolves external references, while the loader loads the executable into memory.</p><p style=\"text-align:center\"><img alt=\"\" height=\"226\" src=\"https://cdn.mathpix.com/snip/images/osuKixmOQAwTqj2_09r26m24r0ZaxlpNA6drfSVkT58.original.fullsize.png\" width=\"800\"/></p><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556570/go-classes-dpp-gate-cs-compiler-design-machine-code-generation\" target=\"_blank\">GATE Overflow #556570</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Bottom-Up parser for a grammar $G$. During the parsing of an input string $w$, the parser reaches a configuration where the stack contains the prefix $\\alpha$ and the remaining input is $a x$. If the parser decides to perform a 'Reduce' action using the production $A \\rightarrow \\beta$, which of the following must be TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a$ IS THE FIRST SYMBOL OF $\\beta$<br/></span>",
                "<span style=\"display: inline;\">THE PARSER IS GUARANTEED TO BE AN $\\operatorname{LR}(0)$ PARSER<br/></span>",
                "<span style=\"display: inline;\">$\\alpha$ IS A SUFFIX OF $\\beta$<br/></span>",
                "<span style=\"display: inline;\">$\\beta$ IS A SUFFIX OF $\\alpha$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"526620\"></a><div itemprop=\"text\"><h1 data-end=\"233\" data-section-id=\"1iqqs5y\" data-start=\"213\">Given Situation</h1><ul data-end=\"337\" data-start=\"235\"><li data-end=\"258\" data-section-id=\"296w1a\" data-start=\"235\">Stack contains: <strong data-end=\"258\" data-start=\"253\">α</strong></li><li data-end=\"284\" data-section-id=\"jm1v8h\" data-start=\"259\">Input remaining: <strong data-end=\"284\" data-start=\"278\">ax</strong></li><li data-end=\"337\" data-section-id=\"1ezsztd\" data-start=\"285\"><p data-end=\"305\" data-start=\"287\">Parser performs: A→β</p></li></ul><p data-end=\"305\" data-start=\"287\">so stack will contain <strong data-end=\"258\" data-start=\"253\">αn</strong>β where n is number <br/>so β is a suffix of α<br/>hence option D is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520536/go-classes-dpp-compiler-bottom-up-parser\" target=\"_blank\">GATE Overflow #520536</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C-style code segment:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while (a &lt; b) { if (c &lt; d) x = y + z; else x = y - z; }</pre><p><br/>Assume this code is translated into <strong>Three-Address Code (TAC)</strong> using the minimum number of labels required to ensure:</p><p>What is the <strong>minimum</strong> number of labels required to represent this control flow?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The $\\verb|while|$ condition is evaluated at the start of every iteration.<br/></span>",
                "<span style=\"display: inline;\">The $\\verb|if-else|$ control flow correctly branches to either the $\\verb|if|$ block or the $\\verb|else|$ block.<br/></span>",
                "<span style=\"display: inline;\">Control returns to the $\\verb|while|$ condition check after the $\\verb|if-else|$ statement finishes.<br/></span>",
                "<span style=\"display: inline;\">There is a single exit label immediately following the loop.<br/></span>"
            ],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"515984\"></a><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">L1: if a &lt; b goto L2 // Label 1: Loop Header goto L4 // Label 4: Loop Exit L2: if c &lt; d goto L3 // Label 2: If-Condition x = y - z // Fall-through for 'else' goto L1 L3: x = y + z // Label 3: If-True block goto L1 L4: ... // End of Loop</pre><p><br/>$\\text { Minimum number of labels required is } 4$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/515983/go-classes-dpp-compiler-tac\" target=\"_blank\">GATE Overflow #515983</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following Three-Address Code $(3AC)$ sequence. Partition the code into basic blocks and determine the total number of blocks.<br/> \\[<br/> \\begin{array}{ll}<br/> \\textbf{Line No.} &amp; \\textbf{Instruction} \\\\<br/> 3001 &amp; \\verb|i = 1| \\\\<br/> 3002 &amp; \\verb|j = 1| \\\\<br/> 3003 &amp; \\verb|t1 = i * 10| \\\\<br/> 3004 &amp; \\verb|t2 = t1 + j| \\\\<br/> 3005 &amp; \\verb|if t2 &lt; 100 goto 3008| \\\\<br/> 3006 &amp; \\verb|a[t2] = 0| \\\\<br/> 3007 &amp; \\verb|goto 3009| \\\\<br/> 3008 &amp; \\verb|a[t2] = 1| \\\\<br/> 3009 &amp; \\verb|j = j + 1| \\\\<br/> 3010 &amp; \\verb|if j &lt;= 10 goto 3003| \\\\<br/> 3011 &amp; \\verb|i = i + 1| \\\\<br/> 3012 &amp; \\verb|if i &lt;= 10 goto 3002| \\\\<br/> 3013 &amp; \\verb|t3 = i - 1| \\\\<br/> 3014 &amp; \\verb|if t3 == 0 goto 3017| \\\\<br/> 3015 &amp; \\verb|res = a[t3]| \\\\<br/> 3016 &amp; \\verb|goto 3018| \\\\<br/> 3017 &amp; \\verb|res = -1| \\\\<br/> 3018 &amp; \\verb|return res| \\\\<br/> \\end{array}<br/> \\]<br/> THE NUMBER OF BASIC BLOCKS IS $\\_\\_\\_\\_$ . (Answer in integer)</div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"511224\"></a><div itemprop=\"text\"><p>ans is 11 <img alt=\"\" height=\"704\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8745016172187572392\" width=\"281\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/511111/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #511111</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Refer to the given $3$-address code sequence below. If this code sequence is split into basic blocks, determine the total number of basic blocks.<br/> <br/> \\[<br/> \\begin{array}{ll}<br/> \\textbf{Line No.} &amp; \\textbf{Instruction} \\\\<br/> 2001 &amp; \\verb|sum = 0| \\\\<br/> 2002 &amp; \\verb|i = 1| \\\\<br/> 2003 &amp; \\verb|j = 1| \\\\<br/> 2004 &amp; \\verb|t1 = i * 4| \\\\<br/> 2005 &amp; \\verb|t2 = a[t1]| \\\\<br/> 2006 &amp; \\verb|sum = sum + t2| \\\\<br/> 2007 &amp; \\verb|j = j + 1| \\\\<br/> 2008 &amp; \\verb|if j &lt;= 20 goto 2004| \\\\<br/> 2009 &amp; \\verb|i = i + 1| \\\\<br/> 2010 &amp; \\verb|if i &lt;= 10 goto 2003| \\\\<br/> 2011 &amp; \\verb|k = 1| \\\\<br/> 2012 &amp; \\verb|t3 = k * 8| \\\\<br/> 2013 &amp; \\verb|b[t3] = 0| \\\\<br/> 2014 &amp; \\verb|k = k + 1| \\\\<br/> 2015 &amp; \\verb|if k &lt;= 5 goto 2012| \\\\<br/> 2016 &amp; \\verb|return sum| \\\\<br/> \\end{array}<br/> \\]<br/> The number of basic blocks is $\\_\\_\\_\\_$ . (Answer in integer)</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"511229\"></a><div itemprop=\"text\">total 7 basic blocks</div><br><br><small>Source: <a href=\"https://gateoverflow.in/511107/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #511107</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the intermediate code given below:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">(1) x = 10 (2) if x &gt; 0 goto (5) (3) x = x + 1 (4) goto (6) (5) x = x - 1 (6) y = x</pre><p>The number of nodes and edges in the control-flow graph constructed for the above code, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$ AND $6$<br/></span>",
                "<span style=\"display: inline;\">$7$ AND $8$<br/></span>",
                "<span style=\"display: inline;\">$6$ AND $7$<br/></span>",
                "<span style=\"display: inline;\">$4$ AND $5$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"509714\"></a><div itemprop=\"text\"><p><strong>Identify Leaders:</strong></p><ul><li>$(1):$ First statement.<br/> </li><li>$(3):$ Follows a conditional jump.<br/> </li><li>$(5):$ Target of a jump.<br/> </li><li>$(6):$ Target of a jump / Follows a jump.<br/> </li></ul><p><strong>Basic Blocks (BB):</strong></p><ul><li>$\\mathrm{B1}: (1)-(2)$<br/> </li><li>$\\mathrm{B2}: (3)-(4)$<br/> </li><li>$\\mathrm{B3}: (5)$<br/> </li><li>$\\mathrm{B4}: (6)$<br/> </li></ul><p><strong>Nodes: </strong>$4$ Basic Blocks $+ 1$ Start $+ 1$ End $= \\mathbf{6}$ <strong>NODES</strong><br/> </p><p><strong>Edges:</strong></p><ul><li>$\\text{Start} \\rightarrow \\mathrm{B1}$<br/> </li><li>$\\mathrm{B1} \\rightarrow \\mathrm{B2}$ (if false)<br/> </li><li>$\\mathrm{B1} \\rightarrow \\mathrm{B3}$ (if true)<br/> </li><li>$\\mathrm{B2} \\rightarrow \\mathrm{B4}$ (goto)<br/> </li><li>$\\mathrm{B3} \\rightarrow \\mathrm{B4}$ (fall through)<br/> </li><li>$\\mathrm{B4} \\rightarrow \\text{End}$<br/> </li></ul><p>Total edges $=6$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/509712/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #509712</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the intermediate code given below:<br/> </p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">(1) i = 0 (2) sum = 0 (3) t1 = i * 4 (4) sum = sum + t1 (5) i = i + 1 (6) if i &lt; 10 goto (3) (7) return sum</pre><p>The number of nodes and edges in the control-flow graph constructed for the above code, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$ AND $5$<br/></span>",
                "<span style=\"display: inline;\">$4$ AND $4$<br/></span>",
                "<span style=\"display: inline;\">$5$ AND $5$<br/></span>",
                "<span style=\"display: inline;\">$5$ AND $6$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"509711\"></a><div itemprop=\"text\"><p><strong>Identify Leaders:</strong></p><ul><li>Statement $(1)$ is a leader (start).<br/> </li><li>Statement $(3)$ is a leader (target of a jump).<br/> </li><li>Statement $(7)$ is a leader (statement following a jump).<br/> </li></ul><p><strong>Basic Blocks (BB):</strong></p><ul><li>$\\mathbf{B1}: (1)-(2)$<br/> </li><li>$\\mathbf{B2}: (3)-(6)$<br/> </li><li>$\\mathbf{B3}: (7)$<br/> </li></ul><p><strong>Nodes:</strong> $3$ Basic Blocks $+ 1$ Start $+ 1$ End $= \\mathbf{5}$<strong> NODES</strong><br/> </p><p><strong>Edges:</strong> * Start → $\\mathbf{B1}(1)$</p><ul><li>$\\mathrm{B1} \\rightarrow \\mathrm{B2}(1)$<br/> </li><li>$\\mathrm{B2} \\rightarrow \\mathrm{B2} ~($loop back$) ~(1)$<br/> </li><li>$\\mathrm{B2} \\rightarrow \\mathrm{B3} ~($exit loop$) ~(1)$<br/> </li><li>$\\mathrm{B3} \\rightarrow$ End $(1)$<br/> </li><li>Total $= \\textbf{5}$ <strong>EDGES</strong></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/509706/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #509706</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block:</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\mathrm{t} 1=\\mathrm{a}+\\mathrm{b} \\\\<br/>&amp; \\mathrm{t} 2=\\mathrm{c}+\\mathrm{d} \\\\<br/>&amp; \\mathrm{t} 3=\\mathrm{t} 1 * 2 \\\\<br/>&amp; \\mathrm{a}=\\mathrm{t} 2-\\mathrm{a} \\\\<br/>&amp; \\mathrm{t} 4=\\mathrm{t} 3 / \\mathrm{a}<br/>\\end{aligned}<br/>$$</p><p><br/><strong>The minimum number of NODES and minimum DIRECTED EDGES present in the DAG representation of the above basic block, respectively, are:</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$9$ and $12$<br/></span>",
                "<span style=\"display: inline;\">$7$ and $9$<br/></span>",
                "<span style=\"display: inline;\">$10$ and $13$<br/></span>",
                "<span style=\"display: inline;\">$10$ and $10$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"505695\"></a><div itemprop=\"text\">Option D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504278/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #504278</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block:</p><p>$$<br/>\\begin{aligned}<br/>&amp; w=x+y \\\\<br/>&amp; z=w * 2 \\\\<br/>&amp; x=y+z \\\\<br/>&amp; w=x-y<br/>\\end{aligned}<br/>$$</p><p>The total number of nodes and the number of distinct arithmetic operator symbols in the DAG representation of the above basic block, without algebraic simplification, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$ and $3$<br/></span>",
                "<span style=\"display: inline;\">$9$ and $7$<br/></span>",
                "<span style=\"display: inline;\">$6$ and $3$<br/></span>",
                "<span style=\"display: inline;\">$8$ and $4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"511860\"></a><div itemprop=\"text\">A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504276/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #504276</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the intermediate code given below:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">(1) x = 1 (2) L0: y = 2 (3) if x &lt; 5 goto L1 (4) x = x + 1 (5) goto L0 (6) L1: z = 0 (7) if y &gt; 0 goto L2 (8) y = y - 1 (9) L2: z = z + y (10) return z</pre><p><br/>The number of <strong>nodes</strong> and <strong>edges</strong> in the control-flow-graph constructed for the above code, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$ and $8$<br/></span>",
                "<span style=\"display: inline;\">$8$ and $10$<br/></span>",
                "<span style=\"display: inline;\">$8$ and $9$<br/></span>",
                "<span style=\"display: inline;\">$6$ and $7$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503838\"></a><div itemprop=\"text\">No of leaders $=6 ~(1,2,4,6,8,9)$<br/> <br/> No of nodes (including start and end node) $=6+2=8$<br/> <br/> No of sequential edges (including start and end node) $=4+2=6$<br/> <br/> No of goto edges $=3$<br/> <br/> Total no of edges $=6+3=9$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503837/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #503837</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - Compiler Design (Intermediate Code Generation & Basic Blocks - Part 2)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Intermediate Code Generation & Basic Blocks - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "27 Min",
    "totalMarks": 9,
    "topicsCovered": "Intermediate Code Generation & Basic Blocks (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the intermediate code given below:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">(1) i = 0 (2) t1 = 2 * i (3) j = 10 (4) L1: t2 = t1 + j (5) a[t2] = 5 (6) j = j - 1 (7) if j &gt; 0 goto L1 (8) t3 = 1 (9) L2: i = i + t3 (10) t3 = 0 (11) if i &lt; 5 goto L2 (12) return t3</pre><p> </p><p>The number of <strong>nodes</strong> and <strong>edges</strong> in the control-flow-graph constructed for the above code, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ and $6$<br/></span>",
                "<span style=\"display: inline;\">$6$ and $7$<br/></span>",
                "<span style=\"display: inline;\">$4$ and $5$<br/></span>",
                "<span style=\"display: inline;\">$7$ and $8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503835\"></a><div itemprop=\"text\">No of leaders $=5 ~(1,4,8,9,12)$<br/> <br/> No of nodes (including start and end node) $=5+2=7$<br/> <br/> No of sequential edges (including start and end node) $=4+2=6$<br/> <br/> No of goto edges $=2$<br/> <br/> Total no of edges $=6+2=8$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503834/go-classes-dpp-compiler-basic-blocks\" target=\"_blank\">GATE Overflow #503834</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the grammar defined by the following production rules, with two operators ★ (star) and $\\dagger$ (dagger):</p><p>Which one of the following statements about the associativity of the operators $\\star$ and $\\dagger$ is TRUE?</p><p><strong>Given Details:</strong></p><ul><li>$A \\rightarrow B \\dagger C$</li><li>$B \\rightarrow B \\star D \\mid D$</li><li>$C \\rightarrow E \\dagger C \\mid E$</li><li>$D \\rightarrow$ num</li><li>$E \\rightarrow$ num</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">★ is right associative, while † is left associative</span>",
                "<span style=\"display: inline;\">Both ★ and † are left associative</span>",
                "<span style=\"display: inline;\">★ is left associative, while † is right associative</span>",
                "<span style=\"display: inline;\">Both * and † are right associative</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503429\"></a><div itemprop=\"text\"><ul><li>Operator ★: Defined by $B \\rightarrow \\mathbf{B} \\star D$. This is left recursion, making ★ LEFT ASSOCIATIVE.<br/> </li><li>Operator † : Defined by $C \\rightarrow E \\dagger \\mathrm{C}$. This is right recursion, making † RIGHT associative.</li></ul><p>The correct option is $\\mathbf{C}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503428/go-classes-dpp-compiler-operator-precedence\" target=\"_blank\">GATE Overflow #503428</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $C$ code segment, where $S_1$ and $S_2$ are mutually exclusive basic blocks (they are within an $\\verb|if-else|$ structure):<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">// Preceding Block B0 x = a + b; // Basic Block S1 (IF branch) c = a + b; d = x * 2; // Basic Block S2 (ELSE branch) e = 2 * x; f = 3 * a + 3 * b;</pre><p><br/>When generating the overall compiler intermediate representation for optimization, these blocks are represented internally.</p><p>Assuming the constant folding optimization $3 \\times(a+b)$ is applied, the minimum number of nodes in the Directed Acyclic Graph (DAG) for the entire set of expressions $\\textbf{c, d, e, f}$ that are computed <strong>after</strong> the preceding block $\\mathbf{B0}$ is $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"502578\"></a><div itemprop=\"text\"><p><strong>Optimization Step (Line $f$ )</strong>: Apply constant folding/strength reduction:</p><ul><li>$\\verb|f = 3 * a + 3 * b;| \\rightarrow \\verb|f = 3 * (a + b);|$<br/> </li></ul><p><strong>GCSE Analysis (Input from </strong>$B 0$<strong> ):</strong></p><ul><li>$\\textbf{B0}$ computes $a+b$, and stores the result in $\\mathbf{x}$. The value $a+b$ is available.<br/> </li></ul><p><strong>Computing $c, d, e, f$ (Minimal DAG Nodes):</strong></p><ul><li>$\\mathbf{c}=\\mathbf{a}+\\mathbf{b}$<strong>;</strong> This value is already computed in $B 0$ and stored as $\\mathbf{x}$. No new node needed. <strong>REUSE</strong> $\\mathbf{x}$'s value.<br/> </li><li>$\\mathbf{d}=\\mathbf{x*2}$<strong>;</strong> Requires $x$ (from $B 0$ ) and the constant $\\mathbf{2}$.<br/> </li><li>$\\mathbf{e}=\\mathbf{2*x}$<strong>;</strong> This is the same operation as $x * 2$ (due to commutativity). <strong>REUSE</strong> the node for $d$.<br/> </li><li>$\\mathbf{f}=(\\mathbf{3*(a+b)})$<strong>;</strong> This is equivalent to $3 * x$. Requires the constant $\\mathbf{3}$ and the value $\\mathbf{x}$.<br/> </li></ul><p><strong>Leaf Nodes (Inputs/Constants needed after $B0$):</strong></p><ul><li>The value of $\\mathbf{x}$ (the result of $a+b$ ).<br/> </li><li>The constant <strong>$\\mathbf{2}$</strong> .<br/> </li><li>The constant <strong>$\\mathbf{3}$</strong> .<br/> </li><li><strong>Total: $\\mathbf{3}$ LEAF NODES</strong><br/> </li></ul><p>Interior Nodes (Operations needed after B0):</p><ul><li><strong>Op 1: </strong>$\\mathbf{x} * \\mathbf{2}$ (Used for $d$ and $e$ ).<br/> </li><li><strong>Op 2: </strong>$\\mathbf{3} * \\mathbf{x}$ (Used for $f$ ).<br/> </li><li><strong>Total: $\\mathbf{2}$ OPERATOR NODES</strong><br/> </li></ul><p><br/><strong>Total Nodes: </strong>$3$ (Leaves) $+$ $2$ (Operators) $= \\mathbf{5 ~nodes.}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502576/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #502576</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $C$ code segment:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">x = y * z; p = q + 5; r = y * z; s = x + r; t = p + 1; </pre><p><br/>In a compiler, this code segment is represented internally as a directed acyclic graph (DAG) for optimization.</p><p>The number of <strong>edges</strong> in the minimum DAG representation of this code segment is $\\_\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"502570\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"285\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6842318073602477271\" width=\"442\"/></p><p><br/><br/>No of edges $=8$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502569/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #502569</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following intermediate code segment:<br/>\\[<br/>\\begin{array}{l}<br/>\\verb|(1) a = 1| \\\\<br/>\\verb|(2) if a &gt; 0 goto (4)| \\\\<br/>\\verb|(3) a = a * 2| \\\\<br/>\\verb|(4) b = 5| \\\\<br/>\\verb|(5) if b &lt; 10 goto (10)| \\\\<br/>\\verb|(6) a = a + b| \\\\<br/>\\verb|(7) b = b + 1| \\\\<br/>\\verb|(8) b = b * 3| \\\\<br/>\\verb|(9) goto (5)| \\\\<br/>\\verb|(10) return a|<br/>\\end{array}<br/>\\]<br/>The number of <strong>nodes</strong> and <strong>edges</strong> in the <strong>control-flow graph</strong> constructed for the above code, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$ and $7$<br/></span>",
                "<span style=\"display: inline;\">$8$ and $10$<br/></span>",
                "<span style=\"display: inline;\">$5$ and $6$<br/></span>",
                "<span style=\"display: inline;\">$6$ and $8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501189\"></a><div itemprop=\"text\">There are 6 leaders: $1,3,4,5,6,10$<br/> <br/> Hence no of nodes $=6+2=8$<br/> <br/> there are $7$ sequential edges (including $2$ edges for entry and exit node) and $3$ goto edges<br/> <br/> so no of edges $=7+3=10$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501188/go-classes-dpp-compiler-control-flow-graph\" target=\"_blank\">GATE Overflow #501188</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following intermediate code segment:</p><pre>(1) x = 0 (2) y = 10 (3) if x &lt; y goto (5) (4) x = x + 1 (5) z = x * 2 (6) y = y - 1 (7) if y &gt; 0 goto (3) (8) return z </pre><p>The number of nodes and edges in the control-flow graph (CFG) constructed for the above code, <strong>including separate ENTRY and EXIT nodes and without code optimization</strong>, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$ and $7$<br/></span>",
                "<span style=\"display: inline;\">$5$ and $6$<br/></span>",
                "<span style=\"display: inline;\">$6$ and $7$<br/></span>",
                "<span style=\"display: inline;\">$7$ and $8$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"501184\"></a><div itemprop=\"text\"><p>A statement is called a leader if it satisfies any of the following conditions:</p><ol><li>It is the first statement of the program.<br/> </li><li>It is the target of a conditional or unconditional jump.<br/> </li><li>It immediately follows a conditional or unconditional jump.</li></ol><p>Applying these rules:</p><ul><li>Statement $(1)$ is the first statement.</li><li>Statement $(3)$ is the target of the jump at statement $(7)$.</li><li>Statement $(4)$ immediately follows the conditional jump at statement $(3)$.</li><li>Statement $(5)$ is the target of the jump at statement $(3)$.</li><li>Statement $(8)$ immediately follows the conditional jump at statement $(7)$.</li></ul><p>Therefore, the leaders are $\\boxed{1,\\ 3,\\ 4,\\ 5,\\ 8}$.</p><p>Now, </p><p>Lets divide the code into basic blocks</p><p>A basic block is a maximal sequence of consecutive statements with a single entry point and no intermediate jumps or branches.</p><p>Using the identified leaders, the basic blocks are:</p><p>$$<br/>\\begin{array}{|c|l|}<br/>\\hline<br/>\\text{Basic Block} &amp; \\text{Statements} \\\\ \\hline<br/>B_1 &amp; (1)\\ x=0,\\quad (2)\\ y=10 \\\\ \\hline<br/>B_2 &amp; (3)\\ \\text{if } x0 \\text{ goto (3)} \\\\ \\hline<br/>B_5 &amp; (8)\\ \\text{return } z \\\\ \\hline<br/>\\end{array}<br/>$$</p><p>$\\therefore \\text{Number of basic blocks}=\\boxed{5}$</p><p>Now,</p><p>An edge exists between two basic blocks if control can transfer directly from one block to the other.</p><p>$$\\begin{array}{|c|c|l|}\\hline \\text{Edge} &amp; \\text{Control Flow} &amp; \\text{Reason}\\\\\\hline 1 &amp; B_1\\rightarrow B_2 &amp; \\text{Sequential execution}\\\\\\hline 2 &amp; B_2\\rightarrow B_3 &amp; \\text{Condition }x0\\text{ is true}\\\\\\hline 6 &amp; B_4\\rightarrow B_5 &amp; \\text{Condition }y&gt;0\\text{ is false}\\\\\\hline\\end{array}$$</p><p>$\\therefore \\text{Edges between basic blocks}=\\boxed{6}$</p><p>Now,</p><p>It is explicitly said that separate ENTRY and EXIT nodes must be included.</p><p>Hence, two additional nodes are added:</p><ul><li><strong>ENTRY:</strong> Represents the beginning of program execution.<br/> </li><li><strong>EXIT:</strong> Represents termination of program execution.</li></ul><p>Two additional edges are also introduced:</p><p>$\\mathrm{ENTRY}\\rightarrow B_1$</p><p>$B_5\\rightarrow\\mathrm{EXIT}$</p><p>Therefore, the total number of nodes is:</p><p>$\\text{Total nodes}=5+2=\\boxed{7}$</p><p>The total number of edges is:</p><p>$\\text{Total edges}=6+2=\\boxed{8}$</p><p><br/><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501182/go-classes-dpp-compiler-control-flow-graph\" target=\"_blank\">GATE Overflow #501182</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $3$-address code sequence. This code is divided into basic blocks. How many basic blocks are there? (Answer as an integer)<br/><br/> </p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1: i = 0 2: sum = 0 3: t1 = i &lt; 10 4: if t1 == 0 goto 11 5: t2 = i * 4 6: t3 = arr[t2] 7: sum = sum + t3 8: i = i + 1 9: goto 3 10: goto 14 11: avg = sum / 10 12: print avg 13: goto 10 14: end </pre><p> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"500021\"></a><div itemprop=\"text\"><ul><li>Rule 1: First instruction is leader: $\\mathbf{1}$<br/> </li><li>Rule 2: Jump targets: goto $11 \\rightarrow 11$ is leader, goto $3 \\rightarrow 3$ is leader, goto $14 \\rightarrow 14$ is leader, goto 10 -10 is leader<br/> </li><li>Rule 3: Instructions after jumps: after $\\mathbf{4}$ (conditional) $\\boldsymbol{\\rightarrow} \\mathbf{5}$ is leader, after $\\mathbf{9}$ (unconditional) $\\boldsymbol{\\rightarrow} \\mathbf{1 0}$ is leader (already counted), after 13 (unconditional) $\\boldsymbol{\\rightarrow} \\mathbf{1 4}$ is leader (already counted)</li></ul><p>Leaders: <strong>1, 3, 5, 10, 11, 14</strong></p><p>No. of basic blocks = no. of leaders = <strong>6</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500020/go-classes-dpp-compiler-basic-block\" target=\"_blank\">GATE Overflow #500020</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $3$-address code sequence. This code is divided into basic blocks. How many basic blocks are there? (Answer as an integer)<br/><br/> </p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1: a = 1 2: b = 2 3: if a &gt; b goto 7 4: c = a + b 5: d = c *2 6: goto 8 7: c = a - b 8: a = c + 1 9: print a </pre><p> </p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"500013\"></a><div itemprop=\"text\"><ul><li>Rule 1: First instruction is leader: 1<br/> </li><li>Rule 2: Jump targets: goto $7 \\rightarrow 7$ is leader, goto $8 \\rightarrow 8$ is leader<br/> </li><li>Rule 3: Instructions after jumps: after instruction 3 (conditional jump) $\\rightarrow \\mathbf{4}$ is leader, after instruction 6 (unconditional jump) -7 is leader (already counted)</li></ul><p>Leaders: <strong>1, 4, 7, 8</strong><br/><br/>No of basic blocks = no. of leaders = <strong>4</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500012/go-classes-dpp-compiler-basic-block\" target=\"_blank\">GATE Overflow #500012</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following sequence of $3$-address code. This code is divided into basic blocks. How many basic blocks are there? (Answer as an integer)<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\verb|2001: x = 0| \\\\<br/> &amp; \\verb|2002: y = 20| \\\\<br/> &amp; \\verb|2003: i = 1| \\\\<br/> &amp; \\verb|2004: t1 = i * 4| \\\\<br/> &amp; \\verb|2005: t2 = arr[t1]| \\\\<br/> &amp; \\verb|2006: if t2 &gt; y goto 2010| \\\\<br/> &amp; \\verb|2007: x = x + t2| \\\\<br/> &amp; \\verb|2008: i = i + 1| \\\\<br/> &amp; \\verb|2009: if i &lt;= 15 goto 2004| \\\\<br/> &amp; \\verb|2010: y = y / 2| \\\\<br/> &amp; \\verb|2011: if y != 0 goto 2003| \\\\<br/> &amp; \\verb|2012: result = x|<br/> \\end{aligned}<br/> $$<br/> </div></span>",
            "image": "",
            "options": [],
            "answer": "2010",
            "solution": "<div class=\"solution-content\"><a name=\"499997\"></a><div itemprop=\"text\"><ul><li>$\\verb|goto 2010|$ $ \\rightarrow 2010$ is leader<br/> </li><li>$\\verb|goto 2004|$ $ \\rightarrow 2004$ is leader<br/> </li><li>$\\verb|goto 2003|$ $ \\rightarrow 2003$ is leader<br/><br/> </li><li>After $2006$ (conditional jump): $2007$ is leader<br/> </li><li>After $2009$ (conditional jump): $2010$ is leader<br/> </li><li>After $2011$ (conditional jump): $2012$ is leader<br/> </li></ul><p>Leaders: $\\mathbf{2001, 2003, 2004, 2007, 2010, 2012}$<br/> </p><p>No of basic blocks $=$ no of leaders $=6$<br/><br/>Further detail for explanation (not needed when solving in exam):<br/><br/><strong>Block</strong> $\\mathbf{1}: 2001-2002$ (ends before leader $2003$)</p><p>\\begin{aligned}<br/>&amp; 2001: x=0 \\\\<br/>&amp; 2002: y=20<br/>\\end{aligned}</p><p>(Next is leader $2003$, so block ends)<br/><br/><br/><strong>Block </strong>$\\mathbf{2}: 2003$ (only one instruction, because next is leader 2004)</p><p>$$<br/>\\text { 2003: i = } 1<br/>$$</p><p><br/><strong>Block</strong> $\\mathbf{3}: 2004-2006$</p><p>$$<br/>\\begin{aligned}<br/>&amp; 2004: \\mathrm{t} 1=\\mathrm{i} * 4 \\\\<br/>&amp; 2005: \\mathrm{t} 2=\\operatorname{arr}[\\mathrm{t} 1] \\\\<br/>&amp; 2006: \\text { if } \\mathrm{t} 2&gt;\\mathrm{y} \\text { goto } 2010\\\\<br/>&amp;\\text{(ends with a jump)}<br/>\\end{aligned}<br/>$$</p><p><strong>Block</strong> $\\mathbf{4}: 2007-2009$</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\text { 2007: } x=x+t 2 \\\\<br/>&amp; \\text { 2008: } i=i+1 \\\\<br/>&amp; \\text { 2009: if } i&lt;=15 \\text { goto } 2004\\\\<br/>&amp;\\text{(ends with a jump)}<br/>\\end{aligned}<br/>$$</p><p><br/><strong>Block</strong> $\\mathbf{5}: 2010-2011$</p><p>$$<br/>\\begin{aligned}<br/>&amp;2010: y=y / 2\\\\<br/>&amp;2009\\text{: if }y ~!=0 \\text{ goto } 2003\\\\<br/>&amp;\\text{(ends with a jump)}<br/>\\end{aligned}<br/>$$</p><p><br/><br/><strong>Block</strong> $6: 2012$</p><p>$$<br/>\\begin{aligned}<br/>&amp;2012: \\text{result = }x\\\\<br/>&amp;\\text{(last instruction, ends program)}<br/>\\end{aligned}<br/>$$<br/><br/>We have: $\\textbf{Block 1, Block 2, Block 3, Block 4, Block 5, Block 6}$</p><p>$$<br/>\\text { Total = } \\mathbf{6}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/499990/go-classes-dpp-compiler-basic-block\" target=\"_blank\">GATE Overflow #499990</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - Compiler Design (Code Optimization & Data Flow Analysis - Part 1)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 1",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following statement :<br/> <br/> \"A lexical analyzer drops some unnecessary information such as punctuations.\"<br/> <br/> Enter $1$ for True or $0$ for False.</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"556919\"></a><div itemprop=\"text\"><p>The lexical analyzer reads the source program and converts character sequences into tokens.</p><p>During this process, it normally removes characters or sequences that are unnecessary for subsequent syntactic analysis, such as insignificant whitespace and comments.</p><p>However, punctuation symbols are not generally discarded, because they may be essential for determining the grammatical structure of the program.</p><p>Consider,</p><p>$\\texttt{int a = 10;}$</p><p>The token sequence includes:</p><p>$\\texttt{&lt;int&gt; &lt;id,a&gt; &lt;=&gt; &lt;num,10&gt; &lt;;&gt;}$</p><p>Notice that the semicolon <code>;</code> is retained as a token.</p><p>It indicates the end of the declaration statement.</p><p>Similarly, parentheses, commas, brackets, and braces frequently serve as important syntactic delimiters.</p><p>For eg,</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"if (a &gt; b) { a = b; }\">if (a &gt; b) { a = b; }</pre><p>The parentheses and braces are essential for identifying the condition and the statement block.</p><p>Therefore, although a lexical analyzer may discard insignificant whitespace and comments, it cannot generally discard punctuation.</p><p><strong>Answer $: \\mathbf{0}$ (False)</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556918/go-classes-dpp-gate-cs-compiler-design-lexical-analyzer\" target=\"_blank\">GATE Overflow #556918</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Intermediate code helps in</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Program Analysis<br/></span>",
                "<span style=\"display: inline;\">Code optimization<br/></span>",
                "<span style=\"display: inline;\">Retargeting code<br/></span>",
                "<span style=\"display: inline;\">Code check</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"556740\"></a><div itemprop=\"text\"><p>Intermediate code is a representation of the source program generated between source-language analysis and final target-code generation.</p><p>One important advantage of intermediate code is that it separates the compiler's source-language-dependent front end from its target-machine-dependent back end.</p><p>Suppose a compiler system supports three source languages and two target architectures.</p><p>Without a common intermediate representation, independently implementing every source-to-target combination could require:</p><p>$3\\times2=6$ translation paths.</p><p>With a common intermediate representation, the system can instead be organized using:</p><p>$3+2=5$ front-end and back-end components.</p><p>This modular architecture makes it easier to support additional target architectures without redesigning each source-language front end.<br/> </p><p><strong>A : Program Analysis</strong></p><p>Intermediate representations can support program analyses, including <strong>control-flow analysis</strong> and <strong>data-flow analysis</strong>.</p><p>Therefore, <strong>A describes a valid benefit.</strong></p><p><br/><strong>B : Code Optimization</strong></p><p>Intermediate code is frequently used for optimization.</p><p>For eg,</p><p>$\\begin{array}{l} \\mathrm{t1=5*4}\\\\ \\mathrm{x=t1} \\end{array}$</p><p>After constant folding, $\\mathrm{x=20}$</p><p>Therefore, <strong>B also describes a genuine benefit.</strong></p><p><br/><strong>C : Retargeting Code</strong></p><p>A common intermediate representation allows different target back ends to be developed while reusing source-language analysis and many optimization passes.</p><p>Thus, retargeting becomes easier.</p><p><br/><strong>D : Code Check</strong></p><p>The phrase is imprecise. Intermediate representations may support validation and consistency checks, but that is not the primary benefit being tested here.</p><p><br/><strong>Answer : A, B, C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556738/go-classes-dpp-gate-cs-compiler-design-intermediate-code\" target=\"_blank\">GATE Overflow #556738</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is an advantage of using an intermediate code in your compiler?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Optimizations may be implemented once and reused across multiple target assembly languages.<br/></span>",
                "<span style=\"display: inline;\">It is compulsory when using an abstract syntax tree because both representations share identical node types.<br/></span>",
                "<span style=\"display: inline;\">It provides another type-checking phase that guarantees every expression is valid.<br/></span>",
                "<span style=\"display: inline;\">It directly converts the symbol table into executable instructions.<br/></span>",
                "<span style=\"display: inline;\">It automatically handles register allocation through graph colouring.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"556585\"></a><div itemprop=\"text\"><p>An <strong>intermediate representation (IR)</strong> is a representation of a source program used between the source-language analysis and target-code generation stages.</p><p>Consider a compiler supporting two programming languages, <strong>C</strong> and <strong>Java</strong>, and three target architectures, <strong>x86</strong>, <strong>ARM</strong>, and <strong>RISC-V</strong>.</p><p>Without a shared intermediate representation, separate source-to-target translation paths may be required.</p><p style=\"text-align:center\"><img alt=\"\" height=\"284\" src=\"https://cdn.mathpix.com/snip/images/4BkOF7F4ocPMMS4rZAbPh8nSlfUB_6YWc76ygAzfYxA.original.fullsize.png\" width=\"694\"/></p><p>With a common IR, the front ends translate the source languages into the same intermediate representation. </p><p>Optimizations implemented at the IR level can then be reused for different target architectures.</p><p><strong>Lets analyze the options :</strong></p><p><strong>A : Correct</strong></p><p>Common IR optimizations can be shared across multiple target back ends.</p><p><strong>B : Incorrect</strong></p><p>An abstract syntax tree does not require a separate IR with identical node types.</p><p><strong>C : Incorrect</strong></p><p>IR does not automatically provide an additional type-checking guarantee.</p><p><strong>D : Incorrect</strong></p><p>A symbol table stores information about program entities. IR does not simply turn its entries into executable instructions.</p><p><strong>E : Incorrect</strong></p><p>Register allocation requires additional compiler algorithms. Merely using IR does not perform register allocation.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/556583/go-classes-dpp-gate-cs-compiler-design-intermediate-code\" target=\"_blank\">GATE Overflow #556583</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block of intermediate code:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1. a = 10 2. b = a + 5 3. c = b * 2 4. a = c - b 5. d = a + b</pre><p>Assuming that only the variable $\\verb|d|$ is \"live\" at the exit of this basic block, identify which statements are considered <strong>Dead Code</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">STATEMENT $1$ ONLY<br/></span>",
                "<span style=\"display: inline;\">STATEMENT $3$ ONLY<br/></span>",
                "<span style=\"display: inline;\">STATEMENT $1$ AND STATEMENT $3$<br/></span>",
                "<span style=\"display: inline;\">NONE OF THE STATEMENTS ARE DEAD CODE</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"527811\"></a><div itemprop=\"text\">Going from bottom to top--&gt;<br/> <br/> before d=a+b<br/> {Live variable={a,b} cuz d will be killed after assignment<br/> next statement a=c-b (live because a is live after this statement)<br/> <br/> live variable before a=c-b {b,c} cuz a will be killed<br/> next statement is c=b*2 as c is alive right after it ,its not deadcode<br/> <br/> live variable before c=b*2 {a,b}<br/> therefore statement b=a+5 is alive.<br/> <br/> before b=a+5<br/> live variable is a and hence statement 1 i.e. a=10 is alive \"<br/> <br/> hence option D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/519233/go-classes-dpp-compiler-dead-code-elimination\" target=\"_blank\">GATE Overflow #519233</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In the context of Code Optimization, consider the following code segment inside a loop:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">for (i = 0; i &lt; n; i++) { x = y + z; a[i] = 2 * i + x; }</pre><p>Moving the statement $\\verb|x = y + z;|$ outside the loop is an example of which optimization technique?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">DEAD CODE ELIMINATION<br/></span>",
                "<span style=\"display: inline;\">STRENGTH REDUCTION<br/></span>",
                "<span style=\"display: inline;\">CONSTANT FOLDING<br/></span>",
                "<span style=\"display: inline;\">LOOP INVARIANT CODE MOTION</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"519227\"></a><div itemprop=\"text\">LOOP INVARIANT CODE MOTION<br/> <br/> This technique moves expressions that yield the same result in every iteration out of the loop to save redundant computations.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/519226/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #519226</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block of three-address code:</p><p>Assuming '$\\mathrm{a}$' and '$\\mathrm{b}$' are live at the end of the block, which of the following represents the optimized code after applying Common Subexpression Elimination (CSE) and Copy Propagation?</p><p><strong>Given Details:</strong></p><ul><li>$\\mathrm{t 1=a+b}$</li><li>$\\mathrm{t 2=c* d}$</li><li>$\\mathrm{t} 3=\\mathrm{t} 1+\\mathrm{t} 2$</li><li>$\\mathrm{a=t 3}$</li><li>$\\mathrm{t 4=c*d}$</li><li>$\\mathrm{b}=\\mathrm{t} 1+\\mathrm{t} 4$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{t 1=a+b ; ~t 2=c* d ; ~a=t 1+t 2 ; ~b=t 1+t 2}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{t1 = a + b; ~t2 = c * d; ~t3 = t1 + t2; ~a = t3; ~t4 = c * d; b = t1 + t4}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{t 1=a+b ; ~t 2=c* d ; ~a=t 1+t 2 ; ~b=a}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{t1= a+b; ~a = t1+ (c*d); ~b = t1 + (c*d)}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518658\"></a><div itemprop=\"text\"><ol><li><strong>Common Subexpression Elimination (CSE)</strong><br/> <ul><li>In line $5, ~\\mathrm{c * d}$ is a common subexpression already computed in line $2$ and stored in $\\mathrm{t 2}. We replace $\\mathrm{t 4=c * d}$ with $\\mathrm{t 4=t 2}$.<br/> </li><li>Now line $6$ becomes $\\mathrm{b=t 1+t 2}$.<br/> </li><li> Notice that $+1++2$ was already computed in line $3$ and stored in $+3$. Thus, we can replace the expression in line $6$ with $\\mathrm{t 3}$, making it $\\mathrm{b}=\\mathrm{t} 3$.<br/> </li></ul></li><li><strong>Copy Propagation</strong><br/> <ul><li>In line $4$, $\\mathrm{a=t 3}$. Since $\\mathrm{a}$ is now a copy of $\\mathrm{t 3}$, we can propagate this.<br/> </li><li>In line $6$, instead of $\\mathrm{b=t 3}$, we can use the value assigned to $\\mathrm{a}$.<br/> </li><li>The final optimized assignments for the live variables $\\mathrm{a}$ and $\\mathrm{b}$ both rely on the shared computation of $\\mathrm{t1 + t2}$.<br/> </li></ul></li></ol><p><strong>Final optimized code:</strong><br/>$$<br/>\\begin{aligned}<br/>&amp; t 1=a+b \\\\<br/>&amp; t 2=c * d \\\\<br/>&amp; a=t 1+t 2 \\\\<br/>&amp; b=a<br/>\\end{aligned}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518655/go-classes-dpp-compiler-cse\" target=\"_blank\">GATE Overflow #518655</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following sequence of three-address code (TAC) instructions:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1. i = 1 2. j = 1 3. t1 = 5 * i 4. t2 = t1 + j 5. a[t2] = 0 6. j = j + 1 7. if j &lt;= 5 goto (3) 8. i = i + 1 9. if i &lt;= 5 goto (2)</pre><p>Which of the following optimization techniques can be successfully applied to this code to reduce the number of multiplications performed inside the inner loop?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">CONSTANT FOLDING<br/></span>",
                "<span style=\"display: inline;\">CODE MOTION<br/></span>",
                "<span style=\"display: inline;\">LOOP UNROLLING<br/></span>",
                "<span style=\"display: inline;\">DEAD CODE ELIMINATION</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518000\"></a><div itemprop=\"text\"><p><strong>Analysis:</strong> In the inner loop $($instructions $3-7)$, the expression $\\verb|t1 = 5 * i|$ is calculated. However, $\\verb|i|$ is constant relative to the inner loop; it only changes in the outer loop $($instruction $8)$.</p><p><strong>Code Motion: </strong>Specifically, $\\verb|t1 = 5 * i|$ is a loop-invariant for the inner loop and can be moved outside to the outer loop. This reduces the total number of multiplications from $25$ down to $5$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/517998/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #517998</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block of Three-Address Code:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1. a = 1 2. b = a + 1 3. c = a + b 4. a = c + b 5. return a</pre><p>A variable is live at a point if its current value will be used in the future before being redefined. Assuming only the variable $\\mathrm{a}$ is live at the exit of this block, which variables are live immediately after statement $2$ has executed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{\\mathrm{a, b}\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{\\mathrm{b, c}\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{\\mathrm{a}, \\mathrm{b}, \\mathrm{c}\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{\\mathrm{a, c}\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"517994\"></a><div itemprop=\"text\">After 5: $\\{\\mathrm{a}\\}$ is live (given).<br/> <br/> After 4: To compute $\\mathrm{a=c+b}$, we need $\\mathrm{c}$ and $\\mathrm{b}$. So $\\{\\mathrm{c}, \\mathrm{b}\\}$ are live.<br/> <br/> After 3: To compute $\\mathrm{c}=\\mathrm{a}+\\mathrm{b}$, we need $\\mathrm{a}$ and $\\mathrm{b}$. However, $\\mathrm{b}$ is also needed for the later instruction (line 4). So $\\{\\mathrm{a}, \\mathrm{b}\\}$ are live.<br/> <br/> Immediately after statement 2, we need both $\\mathrm{a}$ and $\\mathrm{b}$ to satisfy the requirements of statements 3 and 4 .<br/> <br/> The live set is $\\{\\mathrm{a}, \\mathrm{b}\\}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/517992/go-classes-dpp-compiler-live-variable-analysis\" target=\"_blank\">GATE Overflow #517992</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following three-address code sequence used for a loop:</p><pre class=\"prettyprint linenums lang-python\" data-pbcklang=\"python\" data-pbcktabsize=\"4\">i = 0 L1: t1 = i * 4 t2 = base + t1 val = load t2 i = i + 1 if i &lt; 100 goto L1</pre><p>Which optimization technique would most effectively transform this code to reduce the number of multiplications inside the loop, and what would be the resulting change to line $2$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Constant Folding; $\\verb|t1 = 0|$<br/></span>",
                "<span style=\"display: inline;\">Dead Code Elimination; Line $2$ is removed entirely.<br/></span>",
                "<span style=\"display: inline;\">Strength Reduction; $\\verb|t1 = t1 + 4|$ (with initialization $\\verb|t1 = 0|$ before the loop). <br/></span>",
                "<span style=\"display: inline;\">Loop Unrolling; The loop body is copied $100$ times to remove the branch.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"516816\"></a><div itemprop=\"text\">Strength Reduction replaces a \"heavy\" operation like multiplication inside a loop with a \"lighter\" one like addition. By initializing $\\verb|t1|$ to $0$ and adding $4$ in each iteration, the compiler eliminates the costly $\\verb|i*4|$ calculation.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516815/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #516815</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\">In a compiler's optimization phase, a Directed Acyclic Graph (DAG) is often used instead of a standard syntax tree to represent expressions. Consider the expression: $a=(b+c) *(b+ c)+(b+c)$ What is the minimum number of internal nodes (representing operators) required in a DAG to represent this expression?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "516808",
            "solution": "<div class=\"solution-content\"><a name=\"516809\"></a><div itemprop=\"text\">A DAG eliminates redundant sub-expressions. The sub-expression ( $b+c$ ) is computed once $($1st node: $+)$. This result is then multiplied by itself $($2nd node$: ×)$. Finally, the result of the multiplication is added to the original $(b+c)$ result $($3rd node$: +)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516808/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #516808</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - Compiler Design (Code Optimization & Data Flow Analysis - Part 2)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 2",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following basic block consisting of three-address code instructions. Assume that only the variable $\\verb|x|$ is \"live\" at the exit of this basic block.</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1. a = 10 2. b = a + 5 3. c = a * b 4. d = c + a 5. x = b + 1</pre><p>Which of the following variables are <strong>DEAD</strong> immediately after the execution of instruction $3$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\verb|a|$, $\\verb|c|$, $\\verb|d|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|c|$, $\\verb|d|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|d|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|b|$, $\\verb|c|$, $\\verb|d|$</span>"
            ],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"535289\"></a><div itemprop=\"text\"><p><span style=\"color:#c0392b;\">{} = live</span></p><p>1. a = 10 </p><p><span style=\"color:#c0392b;\">{a} = live</span></p><p>2. b= a+5 </p><p><span style=\"color:#c0392b;\">{a,b} = live</span></p><p>3. c= a*b</p><p><span style=\"color:#c0392b;\">{b,c,a} = live</span></p><p>4. d= c+a</p><p><span style=\"color:#c0392b;\">{b} = live</span></p><p>5. x= b+1 </p><p><span style=\"color:#c0392b;\">{x} = live</span></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/515988/go-classes-dpp-compiler-live-variable-analysis\" target=\"_blank\">GATE Overflow #515988</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a compiler's optimization phase, a Directed Acyclic Graph (DAG) is constructed for the following basic block:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">1. t1 = a + b 2. t2 = c * d 3. t3 = t1 + t2 4. t4 = a + b 5. t5 = t4 + t2 </pre><p>Assuming that $\\verb|t1|$, $\\verb|t2|$, $\\verb|t3|$, $\\verb|t4|$, and $\\verb|t5|$ are all local temporary variables and $\\verb|a|$, $\\verb|b|$, $\\verb|c|$, $\\verb|d|$ are the only initial values, how many <strong>nodes</strong>(including leaf nodes and operator nodes) will be in the final optimized DAG representation of this basic block?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "515980",
            "solution": "<div class=\"solution-content\"><a name=\"515982\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"242\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5905519675022338880\" width=\"276\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/515980/go-classes-dpp-compiler-dag\" target=\"_blank\">GATE Overflow #515980</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$\\text { Consider the following C code segment: }$</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">inline int square(int s) { return s * s; } void process(int n, int a[]) { int x = 10; int y = x; // Copy of x for (int i = 0; i &lt; n; i++) { a[i] = y * i; int val = square(i); // Assume n is always a multiple of 4 // } }</pre><p>Which of the following is/are not true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THERE IS SCOPE FOR COPY PROPAGATION IN THIS CODE<br/></span>",
                "<span style=\"display: inline;\">THERE IS SCOPE FOR LOOP UNROLLING IN THIS CODE<br/></span>",
                "<span style=\"display: inline;\">THE CODE EXHIBITS CONSTANT FOLDING AT RUNTIME<br/></span>",
                "<span style=\"display: inline;\">THERE IS SCOPE FOR DEADCODE ELIMINATION IN THIS CODE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513573\"></a><div itemprop=\"text\"><ul><li><strong>COPY PROPAGATION (Option A is TRUE):</strong> The variable $y$ is assigned the value of $x$. The compiler can replace the use of $y$ in $y * i$ with the constant $10$ , propagating the value and potentially eliminating the variable $y$ entirely.<br/> </li><li><strong>LOOP UNROLLING (Option B is TRUE):</strong> Since the loop logic is simple and we are given that $n$ is a multiple of $4$, the compiler can duplicate the loop body and increment $i$ by $4$ each time to reduce the overhead of the condition check ( $i&lt;n$ ).<br/> </li><li><strong>DEAD CODE ELIMINATION (Option D is TRUE):</strong> The if $(1==0)$ condition is mathematically impossible to satisfy. The compiler identifies this block as unreachable and can remove it from the final binary to save space.<br/> </li></ul><p><strong>Why Option C is FALSE:</strong> As mentioned before, <strong>Constant Folding</strong> (like changing $5 * 2$ to $10$ ) is a <strong>compile-time</strong> process. The compiler performs the calculation while building the program so that the CPU doesn't have to do it during execution. Stating it happens at \"runtime\" is technically incorrect.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513572/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #513572</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C code segment:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int a = 10, b = 20; for (int i = 0; i &lt; n; i++) { int constant_val = a * b + 5; for (int j = 0; j &lt; n; j++) { int temp = i * 8; arr[i][j] = temp + j; if (0) { printf(\"Debugging: %d\", arr[i][j]); } } }</pre><p><br/>Which one of the following is FALSE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE CODE CONTAINS LOOP INVARIANT COMPUTATION<br/></span>",
                "<span style=\"display: inline;\">THERE IS SCOPE FOR STRENGTH REDUCTION IN THIS CODE<br/></span>",
                "<span style=\"display: inline;\">THERE IS SCOPE FOR DEAD CODE ELIMINATION IN THIS CODE<br/></span>",
                "<span style=\"display: inline;\">THERE IS SCOPE FOR COMMON SUB-EXPRESSION ELIMINATION IN THIS CODE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513571\"></a><div itemprop=\"text\"><p><strong>Loop Invariant Computation (Option A is TRUE):</strong> The expression $\\verb|int constant_val = a * b + 5;|$ inside the outer loop does not depend on the loop variable $\\verb|i|$. It can be moved outside the entire loop structure.</p><p><strong>Strength Reduction (Option B is TRUE): </strong>The expression $\\verb|temp = i * 8|$ involves a multiplication. A compiler can replace this with a bitwise shift $(i \\ll 3)$ or by using addition in each iteration of the loop, which are \"cheaper\" operations.</p><p><strong>Dead Code Elimination (Option C is TRUE):</strong> The block $\\verb|if (0)| ~\\{ ~\\ldots ~\\}$ will never execute because the condition is always false. The compiler can remove this entire block of code during the optimization phase.</p><p><strong>Common Sub-expression Elimination (Option D is FALSE):</strong> In this specific snippet, there are no identical expressions calculated multiple times that could be replaced by a single variable. Each calculation $\\verb|(a * b + 5|$, $\\verb|i * 8|$, and $\\verb|temp + j|)$ is unique within its scope.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513570/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #513570</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which one of the following is <strong>FALSE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A flow graph is a directed graph where nodes represent basic blocks and edges represent the flow of control.<br/></span>",
                "<span style=\"display: inline;\">Copy Propagation is an optimization that replaces the use of a variable with its assigned value if that value is another variable.<br/></span>",
                "<span style=\"display: inline;\">Constant Folding can only be performed on local variables within a single basic block and never across a whole function.<br/></span>",
                "<span style=\"display: inline;\">Dead Code Elimination uses Live Variable analysis to remove instructions that compute values never subsequently used.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"506207\"></a><div itemprop=\"text\"><p><strong>A is TRUE:</strong> This is the standard definition of a Control Flow Graph (CFG). It maps the paths that can be taken during execution.</p><p><strong>B is TRUE: Copy Propagation</strong> replaces instances of a variable (e.g., $x=y$ ) by substituting $y$ for $x$ later in the code to reduce the number of variables and assignments.</p><p><strong>C is FALSE: Constant Folding</strong> (and Constant Propagation) can be performed both locally (within a block) and globally (across the entire function/procedure) using data flow analysis. It is not restricted to a single basic block.</p><p><strong>D is TRUE:</strong> If <strong>Live Variable analysis</strong> shows that a variable is \"dead\" (not used before its next assignment), the instruction that assigned its previous value is useless and can be safely deleted via <strong>Dead Code Elimination.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/506206/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #506206</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which one of the following is<strong> FALSE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Reaching Definitions analysis is a forward data flow analysis problem.<br/></span>",
                "<span style=\"display: inline;\">Live Variable analysis is used to determine which variables hold values that may be needed in the future, aiding in Register Allocation.<br/></span>",
                "<span style=\"display: inline;\">Loop Invariant Code Motion involves moving computations that produce the same result in every iteration to the loop pre-header.<br/></span>",
                "<span style=\"display: inline;\">$x=y * 8 \\Rightarrow x=y \\ll 3$ is an example of Constant Folding.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"506205\"></a><div itemprop=\"text\"><p><strong>A is TRUE:</strong> Reaching Definitions is a <strong>forward </strong>analysis because it tracks which definitions \"reach\" a point from the preceding code.</p><p><strong>B is TRUE:</strong> Live Variable analysis is <strong>backward</strong> analysis and is the primary tool used for efficient <strong>Register Allocation.</strong></p><p><strong>C is TRUE:</strong> Moving code to a <strong>pre-header</strong> ensures it runs only once instead of every time the loop iterates.</p><p><strong>D is FALSE:</strong> This is actually <strong>Strength Reduction</strong> (replacing a heavy operation with a lighter one). <strong>Constant Folding</strong> is when the compiler evaluates an expression like $5+3$ and replaces it with $8.$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/506204/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #506204</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following ANSI C code segment:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">w = 5 - y-&gt;f_one - x - 2; for (j = 1; j &lt; 150; j = j + 3) { if (j &lt; w) { a = a + y-&gt;f_two; b = b + 5 - x; } else { a = a + 5-x; b = b + y-&gt;f_two; } }</pre><p><br/><strong>Assumptions:</strong></p><p>The number of <strong>arithmetic operations</strong> (addition or subtraction) and the <strong>dereference operations </strong>(of the form $y \\rightarrow f \\_one$ or $y \\rightarrow f \\_two$ ) in the <strong>optimized code</strong>, respectively, are:<br/> </p><p><strong>Given Details:</strong></p><ul><li>1. The variable $\\mathbf{y}$ points to a $\\verb|struct|$ (allocated on the heap) containing two fields, $\\mathbf{f\\_one}$ and $\\mathbf{f\\_two}$.</li><li>The local variables $\\mathbf{w}, \\mathbf{x}, \\mathbf{a}, \\mathbf{b}$, and $\\mathbf{j}$ are allotted to registers.</li><li><strong>Common Sub-expression Elimination (CSE) optimization</strong> is applied to the code.</li><li>Subtraction is treated as an arithmetic operation equivalent to addition for counting purposes (i.e., $A-B$ counts as one operation).</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$153$ and $2$</span>",
                "<span style=\"display: inline;\">$149$ and $2$</span>",
                "<span style=\"display: inline;\">$151$ and $302$</span>",
                "<span style=\"display: inline;\">$248$ and $152$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505527\"></a><div itemprop=\"text\"><p>Let's introduce register temporaries $T_1=y \\rightarrow f\\_one$, $T_2=y \\rightarrow f\\_two$, and $T_3=5-x$.<br/><br/>The temporaries are computed once:</p><ol><li>$T_1=y \\rightarrow f\\_one: \\mathbf{1}$ <strong>dereference.</strong><br/> </li><li>$T_2=y \\rightarrow f\\_two: \\mathbf{1}$ <strong>dereference.</strong><br/> </li><li>$T_3=5-x : 1$ <strong>arithmetic operation</strong> (subtraction).<br/> </li></ol><p>$$<br/>\\begin{aligned}<br/>&amp; W=5-x-2-T 1 \\\\\\\\<br/>&amp; W=T 3-2-T 1<br/>\\end{aligned}<br/>$$</p><p><br/>\\[<br/>\\begin{array}{lll}<br/>\\text{Phase} &amp; \\text{Arithmetic Operations} &amp; \\text{Dereference Operations} \\\\<br/>\\textbf{Initialization} &amp;<br/>1\\ \\text{(for }T_3\\text{)} + 2\\ \\text{(for }w\\text{)} = 3 &amp;<br/>1\\ \\text{(for }T_1\\text{)} + 1\\ \\text{(for }T_2\\text{)} = 2<br/>\\end{array}<br/>\\]<br/><br/>The loop runs for $50$ times and in each iteration, no of arithmetic operations performed is $3$<br/><br/>Total no of arithmetic operations performed $=50 * 3+3=153$<br/><br/>Total no of dereference operations performed $= 2$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505526/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #505526</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The program below uses six temporary variables $a, b, c, d, e, f$.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">a = 5 b = 1 c = a - b d = a + c e = b + d f = c + e a = 2 * d e = 10 return a + e + f</pre><p><br/>Assuming that all operations take their operands from registers, what is the <strong>minimum number of registers</strong> needed to execute this program without spilling?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$6$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503832\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{|l|l|l|l|}<br/> \\hline<br/> \\text{Line} &amp; \\text{Original Instruction} &amp; \\text{Your Replacement} &amp; \\text{Variable Used (in } R_1, R_2, R_3 \\text{)} \\\\<br/> \\hline<br/> 1 &amp; a = 5 &amp; R_1 = 5 &amp; R_1 \\\\<br/> \\hline<br/> 2 &amp; b = 1 &amp; R_2 = 1 &amp; R_2 \\\\<br/> \\hline<br/> 3 &amp; c = a - b &amp; R_3 = R_1 - R_2 &amp; R_3 \\\\<br/> \\hline<br/> --&amp; --- &amp; --- &amp; --- \\\\<br/> \\hline<br/> 4 &amp; d = a + c &amp; R_1 = R_1 + R_3 &amp; R_1 \\text{ reused for } d \\\\<br/> \\hline<br/> 5 &amp; e = b + d &amp; R_2 = R_2 + R_1 &amp; R_2 \\text{ reused for } e \\\\<br/> \\hline<br/> 6 &amp; f = c + e &amp; R_3 = R_3 + R_2 &amp; R_3 \\text{ reused for } f \\\\<br/> \\hline<br/> --&amp; --- &amp; --- &amp; --- \\\\<br/> \\hline<br/> 7 &amp; a = 2 \\times d &amp; R_1 = 2 \\times R_1 &amp; R_1 \\text{ reused for new } a \\\\<br/> \\hline<br/> 8 &amp; e = 10 &amp; R_2 = 10 &amp; R_2 \\text{ reused for new } e \\\\<br/> \\hline<br/> 9 &amp; \\text{return } a + e + f &amp; \\textbf{return } R_1 + R_2 + R_3 &amp; \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> <br/> $\\text { Thus min number of registers required is } 3 \\text {. }$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503830/go-classes-dpp-compiler-register-allocation\" target=\"_blank\">GATE Overflow #503830</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $C$ code segment:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">x = y + 1; // Line 1 y = x - 2; // Line 2 z = x + y; // Line 3 x = 5; // Line 4 y =z * 2; // Line 5</pre><p><br/>In the context of instruction-level parallelism, a dependency exists if two statements access the same memory location, and at least one access is a write.</p><p>The total number of distinct <strong>Output (Write-After-Write, WAW)</strong> data dependencies in this code segment is $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"502662\"></a><div itemprop=\"text\">2<br/> <br/> 1 for X Line 1 and Line 4<br/> <br/> Another one for Y Line 2 and Line 5</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502575/go-classes-dpp-compiler-data-dependency\" target=\"_blank\">GATE Overflow #502575</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following $C$ code segment:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">A[i] = A[i] + 1; // Line 1 j = i + 1; // Line 2 A[j] = A[i] * 2; // Line 3 k = i; // Line 4 A[k] = A[k] + 1; // Line 5 </pre><p><br/>In the context of data-flow analysis for code optimization, we are interested in <strong>Write-After-Read (WAR)</strong> dependencies.</p><p>Ignoring all loops and function calls, the number of distinct <strong>Write-After-Read (WAR)</strong> data dependencies in this code segment is $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"502573\"></a><div itemprop=\"text\"><p><strong>Dependency $L_3 \\rightarrow L_5$ (The potential WAR):</strong><br/> </p><ul><li>$L_3$ : Reads $\\mathbf{A}[\\mathbf{i}]$ (The location at index $i$)<br/> </li><li>$L_5$ : Writes $\\mathbf{A}[\\mathbf{k}]$ (The location at index $k$)<br/> </li></ul><p><br/>Since $L_4$ sets $\\mathbf{k}=\\mathbf{i}$, the locations are guaranteed to be the same: $\\mathbf{A}[\\mathbf{i}]$ is the same memory cell as $\\mathbf{A}[\\mathbf{k}]$.</p><ul><li>$L_3$ reads $\\mathbf{A}[\\mathbf{i}]$.<br/> </li><li>$L_5$ writes $\\mathbf{A}[\\mathbf{i}]$.<br/> </li><li>Therefore, a WAR dependency $\\mathbf{L}_3 \\rightarrow \\mathbf{L}_5$ <strong>exists.</strong><br/> </li></ul><p>Hence the correct answer is 1</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502571/go-classes-dpp-compiler-data-dependency\" target=\"_blank\">GATE Overflow #502571</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - Compiler Design (Code Optimization & Data Flow Analysis - Part 3)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 3",
    "subject": "cd",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following code segment:</p><p>\\[<br/>\\begin{array}{l}<br/>\\verb|z = a - b;|\\\\<br/>\\verb|x = 3 * z;|\\\\<br/>\\verb|y = z + 10;|\\\\<br/>\\verb|z = x + y;|\\\\<br/>\\verb|a = y / 2;|\\\\<br/>\\verb|x = a * z;|<br/>\\end{array}<br/>\\]<br/>The minimum number of <strong>total variables</strong> required to convert the above code segment to <strong>static single assignment form</strong> is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"501197\"></a><div itemprop=\"text\"><p>\\[<br/>\\begin{array}{ccc}<br/>\\text{Line} &amp; \\text{Original Variable} &amp; \\text{New SSA Version Created} \\\\<br/>(1) &amp; z &amp; z_{1} \\\\<br/>(2) &amp; x &amp; x_{1} \\\\<br/>(3) &amp; y &amp; y_{1} \\\\<br/>(4) &amp; z &amp; z_{2} \\\\<br/>(5) &amp; a &amp; a_{1} \\\\<br/>(6) &amp; x &amp; x_{2} \\\\<br/>\\end{array}<br/>\\]</p><p><br/>We count the unique variable versions required:<br/><br/>1. <strong>Definitions in Code:</strong> $\\mathbf{z_1}, \\mathbf{x_1}, \\mathbf{y_1}, \\mathbf{z_2}, \\mathbf{a_1}, \\mathbf{x_2}$ ($6$ unique versions)<br/><br/>2. <strong>Used Inputs (Original Versions):</strong> $\\mathbf{a}$ (used in line $1$) and $\\mathbf{b}$ (used in line $1$). ($2$ unique versions)<br/><br/>$$<br/>\\begin{gathered}<br/>\\text { Total SSA Variables }=(\\text { New Versions Created })+(\\text { Input Variables Used }) \\\\\\\\<br/>\\qquad \\text { Total SSA Variables }=6+2=\\mathbf{8}<br/>\\end{gathered}<br/>$$</p><p><br/>The minimum number of total variables required is $\\mathbf{8 .}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501195/go-classes-dpp-compiler-ssa\" target=\"_blank\">GATE Overflow #501195</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the control flow graph given below:<br/><br/>\\[\\begin{array}{lll}<br/>\\text { Basic Block } &amp; \\text { Statements } &amp; \\text { Control Flow Edges } \\\\<br/>\\textbf { B1 } &amp; i=1 &amp; \\mathrm{~B} 1 \\rightarrow \\mathrm{~B} 2 \\\\<br/>\\textbf { B2 } &amp; i=i+1 ; j=1 &amp; \\mathrm{~B} 2 \\rightarrow \\mathrm{~B} 3 \\\\<br/>\\textbf { B3 } &amp; k=i * 2 &amp; \\mathrm{~B} 3 \\rightarrow \\mathrm{~B} 4 \\\\<br/>\\textbf { B4 } &amp; j=j+k &amp; \\mathrm{~B} 4 \\rightarrow \\mathrm{~B} 2 \\text { (Loop) }<br/>\\end{array}\\]<br/><br/>The variables which are <strong>live</strong> at the <strong>EXIT</strong> of basic block $\\mathbf{2}$ are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{i, j, k}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{i, j}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{i, k}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{j, k}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501791\"></a><div itemprop=\"text\"><p>A variable is considered \"live\" at a point in the program if its current value might be used later on some execution path before being redefined. To find the live variables at the exit of B2, we must look at its successors in the CFG, which is only B3 and also the loop edge back to B2 from B4. <button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"f8634c35-a02d-45fb-b17a-0f9b976ee6d3\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgEEAE\" data-wiz-attrbind=\"disabled=ykyIRb_r_C5gNJc;class=ykyIRb_r_UpSNec;\" tabindex=\"0\"></button></p><ul data-complete=\"true\" data-processed=\"true\"><li data-complete=\"true\" data-hveid=\"CAEIBRAA\" data-sae=\"\"><strong data-complete=\"true\">From B2 to B3:</strong> The statement in B3 is <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k = i * 2</code>. This statement uses the value of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> (on the right side) but defines <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> (on the left side). Therefore, at the entry of B3, <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> and the current value of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> (although uninitialized in this path, we assume initialisation) are live. The value of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> is not used in B3.</li><li data-complete=\"true\" data-hveid=\"CAEIBRAB\" data-sae=\"\"><strong data-complete=\"true\">From B3 to B4:</strong> The statement in B4 is <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j = j + k</code>. This statement uses the values of both <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> and <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> before redefining <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code>.</li><li data-complete=\"true\" data-hveid=\"CAEIBRAC\" data-sae=\"\"><strong data-complete=\"true\">From B4 back to B2 (Loop):</strong> After B4, the control goes back to B2. The statement in B2 is <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i = i + 1; j = 1</code>. This uses the value of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> before redefining it, and redefines <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code>. <button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"7dbf5e42-dd84-4a83-982a-a6a410dd7dd6\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgFEAM\" data-wiz-attrbind=\"disabled=ykyIRb_1j_C5gNJc;class=ykyIRb_1j_UpSNec;\" tabindex=\"0\"></button></li></ul><p>Tracing backwards from B4 through B3: The values of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code>, <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code>, and <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> are used in the loop path starting from B3 and B4.<br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/>However, considering the exit of B2, the values of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> and <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> are used in subsequent blocks before any redefinition on some path:<button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"ea235c35-310e-4be4-9949-05ca0fcc15e7\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgGEAE\" data-wiz-attrbind=\"disabled=ykyIRb_1v_C5gNJc;class=ykyIRb_1v_UpSNec;\" tabindex=\"0\"></button></p><ul data-complete=\"true\" data-processed=\"true\"><li data-complete=\"true\" data-hveid=\"CAEIBxAA\" data-sae=\"\"><code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> is used in B2 (<code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i=i+1</code>) and B3 (<code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k=i*2</code>) without an intervening redefinition from B2's exit.</li><li data-complete=\"true\" data-hveid=\"CAEIBxAB\" data-sae=\"\"><code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> is used in B4 (<code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j=j+k</code>) without an intervening redefinition from B2's exit in this specific loop iteration, since B2 only defines <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> at its entry point, not its exit.<button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"86ecb153-c1e5-4258-9995-6685ef2fc65c\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgHEAI\" data-wiz-attrbind=\"disabled=ykyIRb_29_C5gNJc;class=ykyIRb_29_UpSNec;\" tabindex=\"0\"></button></li></ul><p>The variables <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> and <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code> are live at the exit of B2 because their values are needed later. The variable <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> is defined <em data-complete=\"true\" data-processed=\"true\">within</em> B3 and used <em data-complete=\"true\" data-processed=\"true\">after</em> that point, but the value of <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">k</code> before B3 is not used. <button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"77bd50d8-9931-49df-91a8-a801ba47a7bd\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgIEAE\" data-wiz-attrbind=\"disabled=ykyIRb_2j_C5gNJc;class=ykyIRb_2j_UpSNec;\" tabindex=\"0\"></button></p><p>Therefore, the variables live at the exit of basic block 2 are only <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">i</code> and <code data-complete=\"true\" data-sae=\"\" dir=\"ltr\">j</code>.<button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"89bca04b-4175-4e8d-84e9-14beab09bce4\" data-ved=\"2ahUKEwjtjqSpgq2RAxUHV2wGHUyiLaAQye0OegYIAQgJEAE\" data-wiz-attrbind=\"disabled=ykyIRb_2q_C5gNJc;class=ykyIRb_2q_UpSNec;\" tabindex=\"0\"></button></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501194/go-classes-dpp-compiler-lva\" target=\"_blank\">GATE Overflow #501194</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the control flow graph below :<br/><br/>\\[<br/>\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\text{Basic Block} &amp; \\text{Statements} &amp; \\text{Control Flow Edges} \\\\<br/>\\hline<br/>\\textbf{B1} &amp; a=b+c ;\\ d=a * 2 &amp; \\text{B1} \\to \\text{B2} \\\\<br/>\\hline<br/>\\textbf{B2} &amp; e=d-1 ;\\ f=e / 2 &amp; \\text{B2} \\to \\text{B3},\\text{B2} \\to \\text{B4}\\ \\text{(Conditional Split)} \\\\<br/>\\hline<br/>\\textbf{B3} &amp; d=f+5 &amp; \\text{B3} \\to \\text{B4} \\\\<br/>\\hline<br/>\\textbf{B4} &amp; g=a+d &amp; \\text{B4} \\to \\text{Exit} \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/><br/>The variables which are <strong>live</strong> both at the statement in basic block $\\textbf{3}$ (entry) and at the statement in basic block $\\textbf{4}$ (entry) of the above control flow graph are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{a, d, f}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{a, d}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{a, f}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{a}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"503348\"></a><div itemprop=\"text\">Variables Live at entry :<br/> <br/> B3: f, a<br/> <br/> B4: a, d<br/> <br/> Thus 'a' is there in both, Answer(D)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501190/go-classes-dpp-compiler-lva\" target=\"_blank\">GATE Overflow #501190</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The minimum number of arithmetic operations required to evaluate the polynomial<br/> <br/> $$<br/> P(X)=2 X^6-3 X^5+4 X^4-X^3+5 X^2+6 X-7<br/> $$<br/> <br/> for a given value of $X$, using only one temporary variable, is:</div></span>",
            "image": "",
            "options": [],
            "answer": "12",
            "solution": "<div class=\"solution-content\"><a name=\"500011\"></a><div itemprop=\"text\">$$<br/> P(X)=2 X^6-3 X^5+4 X^4-X^3+5 X^2+6 X-7<br/> $$<br/> <br/> Factor $X$ from first 6 terms:<br/> <br/> $$<br/> P(X)=X\\left(2 X^5-3 X^4+4 X^3-X^2+5 X+6\\right)-7<br/> $$<br/> <br/> Again: $2 X^5-3 X^4+4 X^3-X^2+5 X+6=X\\left(2 X^4-3 X^3+4 X^2-X+5\\right)+6$<br/> So:<br/> <br/> $$<br/> P(X)=X\\left(X\\left(2 X^4-3 X^3+4 X^2-X+5\\right)+6\\right)-7<br/> $$<br/> <br/> Again: $2 X^4-3 X^3+4 X^2-X+5=X\\left(2 X^3-3 X^2+4 X-1\\right)+5$<br/> So:<br/> <br/> $$<br/> P(X)=X\\left(X\\left(X\\left(2 X^3-3 X^2+4 X-1\\right)+5\\right)+6\\right)-7<br/> $$<br/> <br/> Again: $2 X^3-3 X^2+4 X-1=X\\left(2 X^2-3 X+4\\right)-1$<br/> <br/> So:<br/> <br/> $$<br/> P(X)=X\\left(X\\left(X\\left(X\\left(2 X^2-3 X+4\\right)-1\\right)+5\\right)+6\\right)-7<br/> $$<br/> <br/> Again: $2 X^2-3 X+4=X(2 X-3)+4$<br/> So:<br/> <br/> $$<br/> P(X)=X(X(X(X(X(2 X-3)+4)-1)+5)+6)-7<br/> $$<br/> <br/> 1. $t \\leftarrow 2 \\cdot X$ (1 mult)<br/> <br/> 2. $t \\leftarrow t-3$ (1 add)<br/> <br/> 3. $t \\leftarrow t \\cdot X+4$ (1 mult + 1 add)<br/> <br/> 4. $t \\leftarrow t \\cdot X-1$ (1 mult + 1 add)<br/> <br/> 5. $t \\leftarrow t \\cdot X+5$ (1 mult + 1 add)<br/> <br/> 6. $t \\leftarrow t \\cdot X+6$ (1 mult + 1 add)<br/> <br/> 7. $t \\leftarrow t \\cdot X-7$ (1 mult + 1 add)<br/> <br/> Total $=6+6=12$ operations.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500010/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #500010</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The minimum number of arithmetic operations (additions and multiplications) required to evaluate the polynomial<br/> <br/> $$<br/> P(X)=X^5+3 X^4+2 X^3+7 X^2+8 X+9<br/> $$<br/> <br/> for a given value of $X$, using only one temporary variable, is:</div></span>",
            "image": "",
            "options": [],
            "answer": "500008",
            "solution": "<div class=\"solution-content\"><a name=\"500009\"></a><div itemprop=\"text\">$$<br/> P(X)=X^5+3 X^4+2 X^3+7 X^2+8 X+9<br/> $$<br/> <br/> Factor $X$ from first 5 terms:<br/> <br/> $$<br/> P(X)=X\\left(X^4+3 X^3+2 X^2+7 X+8\\right)+9<br/> $$<br/> <br/> Again: $X^4+3 X^3+2 X^2+7 X+8=X\\left(X^3+3 X^2+2 X+7\\right)+8$<br/> So:<br/> <br/> $$<br/> P(X)=X\\left(X\\left(X^3+3 X^2+2 X+7\\right)+8\\right)+9<br/> $$<br/> <br/> Again: $X^3+3 X^2+2 X+7=X\\left(X^2+3 X+2\\right)+7$<br/> So:<br/> <br/> $$<br/> P(X)=X(X(X(X(X+3)+2)+7)+8)+9<br/> $$<br/> <br/> Let $t=X$<br/> <br/> $t \\leftarrow X+3$<br/> <br/> $t \\leftarrow t \\cdot X+2$<br/> <br/> $t \\leftarrow t \\cdot X+7$<br/> <br/> $t \\leftarrow t \\cdot X+8$<br/> <br/> $t \\leftarrow t \\cdot X+9$<br/> <br/> That's $4$ multiplications and $5$ additions $\\rightarrow$ $9$ operations.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500008/go-classes-dpp-compiler-code-optimization\" target=\"_blank\">GATE Overflow #500008</a></small></div>"
        }
    ]
});
