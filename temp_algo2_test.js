registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Algorithm-2 | BFS and DFS Algorithms",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a graph  \\( G \\). Let  \\( T \\) be a BFS tree with root  \\( r \\).<br>Let  \\( d(u, v) \\) denote the length of the shortest path between nodes  \\( u \\) and  \\( v \\).<br>If a vertex  \\( v \\) is visited before a vertex  \\( u \\) in the BFS traversal, which of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( d(r, v)&gt;d(r, u) \\)`,
        `\\( d(r, v)=d(r, u) \\)`,
        `\\( d(r, v)&lt;d(r, u) \\)`,
        `\\( d(r, v) \\leq d(r, u) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-algo2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the tree below. The search starts from the green node at the top. The yellow node is highlighted. Whenever there is a choice among multiple children, both BFS and DFS choose the leftmost child first.<br><br><img alt="" src="/images/quiz/wqt-algo2/q2_img1.png" style="max-width: 75%;"><br><br>Which algorithm will visit the least number of nodes before reaching the yellow node?</p> <p></p>`,
      image: "",
      options: [
        `BFS`,
        `DFS`,
        `Neither BFS nor DFS will ever reach to the Yellow node`,
        `BFS and DFS visit the same number of nodes before reaching the yellow node`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( G \\) be a connected undirected graph. Suppose we perform both BFS and DFS starting from the same root vertex  \\( r \\). Which of the following is true regarding the depth of the BFS tree and the DFS tree (both rooted at  \\( r \\) )? </p> <p></p>`,
      image: "",
      options: [
        `The depth of the BFS tree is always greater than or equal to the depth of the DFS tree.`,
        `The depth of the BFS tree is always strictly smaller than the depth of the DFS tree.`,
        `The depth of the DFS tree is always greater than or equal to the depth of the BFS tree.`,
        `The depths of BFS and DFS trees are always equal.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( G \\) be a simple undirected graph and let  \\( T_{B} \\) be a breadth first search (BFS) tree of \\( G \\). For every edge  \\( (u, v) \\) of  \\( G \\), let  \\( d(u) \\) and  \\( d(v) \\) denote the depths of  \\( u \\) and  \\( v \\) in  \\( T_{B} \\).<br><br>Which of the following must necessarily hold? </p> <p></p>`,
      image: "",
      options: [
        `\\( |d(u)-d(v)| \\leq 1 \\)`,
        `\\( |d(u)-d(v)|=1 \\)`,
        `\\( |d(u)-d(v)| \\geq 1 \\)`,
        `\\( |d(u)-d(v)|=0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the given graph shown below:</p> <p><br><img alt="" src="/images/quiz/wqt-algo2/q5_img2.png" style="max-width: 75%;"><br><br>Start a depth-first search (DFS) from node  \\( 1 \\), always visiting the smallestnumbered neighbor first.<br><br>Let  \\( d(v) \\) denote the discovery time of vertex  \\( v \\), and let  \\( f(v) \\) denote its finish time.<br><br>Which of the following relations is always true? (select all that apply) </p> <p>​​​A.  \\( d(3)&lt;d(7)&lt;f(7)&lt;f(3) \\)<br>B.  \\( d(4)&lt;d(2)&lt;f(2)&lt;f(4) \\)<br>C.  \\( d(5)&lt;d(6)&lt;f(6)&lt;f(5) \\)<br>D.  \\( d(7)&lt;d(6)&lt;f(7)&lt;f(6) \\) </p> <p></p>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a directed graph with  \\( n \\) vertices arranged in a path: </p> <ul> <li>For each  \\( 1 \\leq i&lt;n \\)&nbsp;there is the forward edge \\( (i, i+1) \\). </li> <li>In addition, for every pair  \\( i&gt;j \\) there is an edge  \\( (i, j) \\). </li> </ul> <p><br>A depth-first search (DFS) is performed on this graph.<br>What are the minimum and maximum possible numbers of back edges, depending only on the order in which DFS explores vertices?<br>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `Minimum  \\( =0, \\quad \\) Maximum  \\( =n-1 \\)`,
        `Minimum  \\( =n-1, \\quad \\) Maximum  \\( =\\frac{n(n-1)}{2} \\)`,
        `Minimum  \\( =\\frac{n(n-1)}{2}, \\quad \\) Maximum  \\( =n(n-1) / 2 \\)`,
        `Minimum  \\( =n-1, \\quad \\) Maximum  \\( =n-1 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The discovery and finishing times of vertices in a DFS traversal are:<br> \\( (q, 1,16),(r, 17,20),(s, 2,7),(t, 8,15),(u, 18,19),(v, 3,6),(w, 4,5),(x, 9,12),(y, 13,14),(z, 10,11) \\) <br>If the directed edges given in the options are present in the graph, then which of these would be classified in DFS as a back edge? </p> <p></p>`,
      image: "",
      options: [
        `\\( (y, x) \\)`,
        `\\( (z, y) \\)`,
        `\\( (w, s) \\)`,
        `\\( (u, q) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The discovery and finishing times of vertices in a DFS traversal are: \\( (q, 1,16),(r, 17,20),(s, 2,7),(t, 8,15),(u, 18,19),(v, 3,6),(w, 4,5),(x, 9,12),(y, 13,14),(z, 10,11) \\) If all possible directed edges between these vertices are considered, what is the maximum number of cross edges that can exist while remaining consistent with the given discovery and finishing times? </p>`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/wqt-algo2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>We perform a DFS on a connected undirected graph  \\( G \\). </p> <ul> <li>The global time starts at 0 and is incremented by 1 whenever a vertex is discovered or finished. </li> <li>For each vertex  \\( v \\), let  \\( d(v) \\) denote its discovery time and  \\( f(v) \\) its finish time. </li> <li>Let  \\( T \\) be the DFS tree obtained. </li> </ul> <p><br>Now consider a vertex  \\( u \\) that is a leaf in  \\( T \\).<br>Which of the following statements are always correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( f(u)=d(u)+1 \\)`,
        `\\( f(u)&lt;f(\\operatorname{parent}(u)) \\)`,
        `\\( d(u)&gt;d(\\operatorname{parent}(u)) \\)`,
        `For any two leaves  \\( u \\) and  \\( v \\), if  \\( d(u)&lt;d(v) \\), then  \\( f(u)&lt;f(v) \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be a connected undirected graph, and let \\( T \\) be a DFS tree obtained from  \\( G \\).<br>For each vertex  \\( x \\), let  \\( d(x) \\) be its discovery time and  \\( f(x) \\) its finish time.<br>Suppose  \\( u \\) is a vertex in  \\( G \\), and  \\( v \\) is the first vertex discovered after the DFS has completely finished  \\( \\operatorname{exploring} u \\) (i.e., the next new vertex in traversal order after backtracking from  \\( u \\) ).<br><br>Which of the following statements is always true? </p> <p></p>`,
      image: "",
      options: [
        `\\( v \\) cannot be a leaf of the DFS tree  \\( T \\).`,
        `\\( u \\) and  \\( v \\) belong to different DFS subtrees rooted at some common ancestor.`,
        `It is possible that  \\( \\{u, v\\} \\) is an edge in  \\( G \\), but such an edge can only be a back edge (never a tree edge).`,
        `\\( u \\) cannot be the root of the DFS tree.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider an undirected graph  \\( G=(V, E) \\) with a BFS tree  \\( T \\) rooted at vertex 0 .<br>The BFS partitions the vertices into layers  \\( L_{0}, L_{1}, L_{2}, \\ldots \\), where  \\( L_{k} \\) contains all vertices at distance  \\( k \\) from the root.<br><br>Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `If two vertices in the same layer are connected by an edge, then the graph contains an odd cycle.`,
        `If two vertices in consecutive layers are connected by an edge, then the graph contains an even cycle.`,
        `Skip-level edges (edges between vertices whose layers differ by at least 2) can never exist in BFS layering.`,
        `If two vertices are at distance  \\( k \\) from the root, then they cannot be connected by any edge.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose  \\( G \\) is a connected undirected graph. An edge whose removal disconnects the graph is called a bridge. Consider a Depth-First Search (DFS) tree of \\( G \\). Which of the following statements is true regarding bridges in  \\( G \\) ? </p> <p></p>`,
      image: "",
      options: [
        `A bridge can only be a back edge in some DFS tree.`,
        `A bridge can be either a tree edge or a back edge in DFS.`,
        `Every bridge must necessarily be a tree edge in every DFS tree of  \\( G \\).`,
        `A bridge can never appear as a tree edge in a DFS tree.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Identify which of the following statements are correct.</p> <p></p>`,
      image: "",
      options: [
        `When visiting a node <span style="font-family: monospace;"> \\( \\text{v} \\) </span>&nbsp;during DFS on an undirected graph, if an adjacent node <span style="font-family: monospace;"> \\( \\text{w} \\) </span>&nbsp;is colored <span style="color:gray; font-weight:bold;">gray</span>, then this indicates a cycle only if <span style="font-family: monospace;"> \\( \\text{w} \\) </span>&nbsp;is not the parent&nbsp; of <span style="font-family: monospace;"> \\( \\text{v} \\) </span>.<br>(Gray means “discovered but not finished”.)<br>&nbsp;`,
        `For an undirected graph  \\( G \\), it is not possible for the BFS tree to have greater height than  \\( G^{\\prime} \\) s DFS tree.<br>&nbsp;`,
        `The time-complexity for using DFS to count connected components in an undirected graph is  \\( \\Theta(V(V+E)) \\).<br>&nbsp;`,
        `BFS can be used to tell if an undirected graph  \\( G \\) is bipartite by checking if a non-tree edge connects nodes on the same level.`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta> </p> <p>Consider an  \\( n \\)-vertex graph  \\( G \\) where both DFS (using recursion) and BFS (using a queue) are started from the same vertex  \\( v_1 \\). Match each type of graph in Column A with the correct behavior of DFS recursion depth and BFS maximum queue size in Column B. </p> <p> \$\$  \\begin{array}{c|c} \\textbf{Column A (Graph type)} &amp; \\textbf{Column B (Property)} \\\\ \\hline \\\\[-4pt] \\begin{aligned}[t] a.&amp;\\ \\text{Path graph on } n \\text{ vertices} \\\\ b.&amp;\\ \\text{Star graph on } n \\text{ vertices (center }= v_1\\text{)} \\\\ c.&amp;\\ \\text{Complete graph on } n \\text{ vertices} \\end{aligned} &amp; \\begin{aligned}[t] 1.&amp;\\ \\text{DFS recursion depth} \\le 1 \\\\ 2.&amp;\\ \\text{DFS recursion depth} = 2 \\\\ 3.&amp;\\ \\text{DFS recursion depth} = n-1 \\\\ 4.&amp;\\ \\text{BFS queue size} \\le 1 \\\\ 5.&amp;\\ \\text{BFS queue size} = n-1 \\end{aligned} \\end{array}  \$\$ </p> <p>The correct matching between the elements in Column A with those of Column B is:</p> <p></p>`,
      image: "",
      options: [
        `\\( a \\to (3,4),\\; b \\to (1,5),\\; c \\to (3,5) \\)`,
        `\\( a \\to (2,5),\\; b \\to (3,4),\\; c \\to (1,5) \\)`,
        `\\( a \\to (1,5),\\; b \\to (2,4),\\; c \\to (3,5) \\)`,
        `\\( a \\to (3,5),\\; b \\to (2,4),\\; c \\to (1,5) \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a directed graph  \\( G=(V, E) \\), a mother vertex is a vertex  \\( v \\) such that all other vertices in  \\( G \\) are reachable from  \\( v \\).<br>Suppose we are given a vertex  \\( v \\). Which of the following procedures correctly tests whether  \\( v \\) is a mother vertex in  \\( O(n+m) \\) time, where  \\( n=|V| \\) and  \\( m=|E| \\) ? </p> <p></p>`,
      image: "",
      options: [
        `Start DFS from  \\( v \\). If the DFS tree has exactly  \\( n-1 \\) tree edges, then  \\( v \\) is a mother vertex.`,
        `Start BFS from  \\( v \\). If BFS reaches all other  \\( n-1 \\) vertices, then  \\( v \\) is a mother vertex.`,
        `Start DFS from  \\( v \\). If DFS reaches all other  \\( n-1 \\) vertices, then  \\( v \\) is a mother vertex.`,
        `Start DFS from  \\( v \\). If the number of cross edges is zero, then  \\( v \\) is a mother vertex.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/15.png" style="max-width: 75%;">`
    },
  ]
});
