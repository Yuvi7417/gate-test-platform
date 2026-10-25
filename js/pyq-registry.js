registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Transaction-II)",
    date: "sep 08, 2026",
    topicsCovered: "Timestamp Ordering Protocol, Conflict Serializability, Precedence Graph, Starvation & Deadlock Freedom, Recoverability & Cascading Aborts",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following concurrency control protocol ensures both conflict and free from deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Time stamp ordering</span>`,
                `<span style="display: inline;">2 Phase locking</span>`,
                `<span style="display: inline;">Both (A) and (B)</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Timestamp ordering decides conflicts by timestamps (older first), so schedules are conflict serializable. Transactions never wait for locks (they are aborted and restarted instead), so there is no deadlock. Basic 2PL guarantees serializability but can deadlock.<br><br> <b>Answer: Time stamp ordering</b><br><br><a href="https://gateoverflow.in/128600/isro-2017-5" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Two transactions <span>\\( T_1 \\text{ and } T_2 \\)</span> are given as: <br><br> <span>\\( T_{1}:r_{1} (X)w_{1}(X)r_{1}(Y)w_{1}(Y) \\)</span><br><span>\\( T_{2}:r_{2}(Y)w_{2}(Y)r_{2}(Z)w_{2}(Z) \\)</span><br><br> where <span>\\( r_{i}(V) \\)</span> denotes a read operation by transaction <span>\\( T_{i} \\)</span> on a variable V and <span>\\( w_{i}(V) \\)</span> denotes a write operations by transaction <span>\\( T_{i} \\)</span> on a variable V. The total number of conflict serializable schedules that can be formed by <span>\\( T_1 \\text{ and } T_2 \\)</span> is _____________.</span>`,
            image: "",
            options: [
            ],
            answer: "54",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> T1 = a1 a2 a3 a4 (a3, a4 use Y), T2 = b1 b2 b3 b4 (b1, b2 use Y). The only conflicts are on Y, so a schedule is conflict serializable iff all of T1's Y operations come before T2's, or the other way round.<br> - T1 before T2 on Y: a4 before b1 <span>\\( \\rightarrow \\)</span> the serial schedule T1 T2: 1 way.<br> - T2 before T1 on Y: b2 before a3. Of all <span>\\( \\binom{8}{4}=70 \\)</span> interleavings, 17 have a3 before b2, so 53 qualify.<br><br> Total = 1 + 53 = 54<br><br> <b>Answer: 54</b><br><br><a href="https://gateoverflow.in/118640/gate2017-2-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In a database system, unique time stamps are assigned to each transaction using Lamport's logical clock . Let TS(<span>\\( T_{1} \\)</span>) and TS(<span>\\( T_{2} \\)</span>) be the timestamps of transactions <span>\\( T_{1} \\)</span> and <span>\\( T_{2} \\)</span> respectively. Besides, <span>\\( T_{1} \\)</span> holds a lock on the resource R, and <span>\\( T_{2} \\)</span> has requested a conflicting lock on the same resource R. The following algorithm is used to prevent deadlocks in the database system assuming that a killed transaction is restarted with the same timestamp. <br><img src="images/twt-dbms/q42.jpg"> <br>Assume any transactions that is not killed terminates eventually. Which of the following is TRUE about the database system that uses the above algorithm to prevent deadlocks?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The database system is both deadlock-free and starvation-free.</span>`,
                `<span style="display: inline;">The database system is deadlock-free, but not starvation-free.</span>`,
                `<span style="display: inline;">The database system is starvation-free but not deadlock-free.</span>`,
                `<span style="display: inline;">The database system is neither deadlock-free nor starvation-free.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> If the requester T2 is older (smaller timestamp), the younger holder T1 is killed; otherwise the younger requester waits. So a transaction only ever waits for an <b>older</b> one: no cycle of waits <span>\\( \\rightarrow \\)</span> deadlock-free.<br><br> A killed transaction restarts with its old timestamp, so it keeps getting older relative to new ones and eventually becomes the oldest, which is never killed <span>\\( \\rightarrow \\)</span> starvation-free.<br><br> <b>Answer: both deadlock-free and starvation-free</b><br><br><a href="https://gateoverflow.in/118325/gate2017-1-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Trigger is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Statement that enables to start any DBMS</span>`,
                `<span style="display: inline;">Statement that is executed by the user when debugging an application program</span>`,
                `<span style="display: inline;">The condition that the system tests for the validity of the database user</span>`,
                `<span style="display: inline;">Statement that is executed automatically by the system as a side effect of a modification of the database</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A trigger is a rule (event-condition-action) that the DBMS runs <b>automatically</b> when a specified change (insert/update/delete) happens.<br><br> <b>Answer: Statement executed automatically as a side effect of a modification of the database</b><br><br><a href="https://gateoverflow.in/56041/isro2016-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following database schedule with two transactions, T1 and T2.<br> <span>\\( S=r_{2}(X);r_{1}(X);r_{2}(Y);w_{1}(X);r_{1}(Y);w_{2}(X);a_{1};a_{2} \\)</span><br> where <span>\\( r_{i}(Z) \\)</span> denotes a read operation by transaction <span>\\( T_{i} \\)</span> on a variable Z, <span>\\( w_{i}(Z) \\)</span> denotes a write operation by <span>\\( T_{i} \\)</span> on a variable Z and <span>\\( a_{i} \\)</span> denotes an abort by transaction <span>\\( T_{i} \\)</span>.<br> Which one of the following statements about the above schedule is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S is non-recoverable</span>`,
                `<span style="display: inline;">S is recoverable, but has a cascading abort</span>`,
                `<span style="display: inline;">S does not have a cascading abort</span>`,
                `<span style="display: inline;">S is strict</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> No transaction reads a value written by the other before it ends: T1 reads X before T2 writes it, and T2's reads happen before T1's write. So when T1 aborts, T2 does not need to be aborted: <b>no cascading abort</b>.<br><br> It is not strict, because <span>\\( w_2(X) \\)</span> overwrites <span>\\( w_1(X) \\)</span> while T1 is still active.<br><br> <b>Answer: S does not have a cascading abort</b><br><br><a href="https://gateoverflow.in/39590/gate2016-2-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose a database schedule S involves transactions T1,...,Tn. Construct the precedence graph of S with vertices representing the transactions and edges representing the conflicts. If S is serializable, which one of the following orderings of the vertices of the precedence graph is guaranteed to yield a serial schedule?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Topological order</span>`,
                `<span style="display: inline;">Depth-first order</span>`,
                `<span style="display: inline;">Breadth-first order</span>`,
                `<span style="display: inline;">Ascending order of transaction indices</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Each edge <span>\\( T_i\\rightarrow T_j \\)</span> means <span>\\( T_i \\)</span> must come first. A serializable schedule has an acyclic precedence graph, and any <b>topological order</b> respects every edge, so it gives an equivalent serial schedule.<br><br> <b>Answer: Topological order</b><br><br><a href="https://gateoverflow.in/39550/gate2016-2-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two phase locking protocol. Suppose a transaction T accesses (for read or write operations), a certain set of objects {O1,... ,Ok}. This is done in the following manner: <br> Step 1. T acquires exclusive locks to O1,...,Ok in increasing order of their addresses. <br> Step 2. The required operations are performed.<br> Step 3. All locks are released. <br> This protocol will</span>`,
            image: "",
            options: [
                `<span style="display: inline;">guarantee serializability and deadlock-freedom</span>`,
                `<span style="display: inline;">guarantee neither serializability nor deadlock-freedom</span>`,
                `<span style="display: inline;">guarantee serializability but not deadlock-freedom</span>`,
                `<span style="display: inline;">guarantee deadlock-freedom but not serializability</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> All locks are taken before any operation and released only at the end <span>\\( \\rightarrow \\)</span> a two-phase locking schedule <span>\\( \\rightarrow \\)</span> <b>serializable</b>.<br><br> Locks are always requested in increasing address order, so no circular wait can form <span>\\( \\rightarrow \\)</span> <b>deadlock-free</b>.<br><br> <b>Answer: guarantee serializability and deadlock-freedom</b><br><br><a href="https://gateoverflow.in/39703/gate2016-1-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is NOT a part of the ACID properties of database transactions?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Atomicity</span>`,
                `<span style="display: inline;">Consistency</span>`,
                `<span style="display: inline;">Isolation</span>`,
                `<span style="display: inline;">Deadlock-freedom</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> ACID = Atomicity, Consistency, Isolation, Durability. Deadlock-freedom is not one of them.<br><br> <b>Answer: Deadlock-freedom</b><br><br><a href="https://gateoverflow.in/39644/gate2016-1-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following log sequence of two transactions on a bank account, with initial balance 12000, that transfer 2000 to a mortgage payment and then apply a 5% interest.<br>1.T1 start <br>2.T1 B old =1200 new =10000<br>3.T1 M old =0 new =2000<br>4.T1 commit<br>5.T2 start<br>6.T2 B old =10000 new =10500<br>7.T2 commit<br>Suppose the database system crashes just before log record 7 is written. When the system is restarted, which one statement is true of the recovery procedure?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">We must redo log record 6 to set B to 10500</span>`,
                `<span style="display: inline;">We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</span>`,
                `<span style="display: inline;">We need not redo log records 2 and 3 because transaction T1 has committed</span>`,
                `<span style="display: inline;">We can apply redo and undo operations in arbitrary order because they are idempotent</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The crash is before T2's commit record, so T2 is uncommitted and must be undone: B goes back to 10000.<br><br> T1 committed, so its changes (records 2 and 3) are redone.<br><br> <b>Answer: We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</b><br><br><a href="https://gateoverflow.in/981/gate2006-20-isro2015-17" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following partial Schedule S involving two transactions T1 and T2. Only the read and the write operations have been shown. The read operation on data item P is denoted by read(P) and the write operation on data item P is denoted by write(P). <br><img src="images/twt-dbms/q41.jpg"> <br> Suppose that the transaction T1 fails immediately after time instance 9. Which one of the following statements is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">T2 must be aborted and then both T1 and T2 must be re-started to ensure transaction atomicity</span>`,
                `<span style="display: inline;">Schedule S is non-recoverable and cannot ensure transaction atomicity</span>`,
                `<span style="display: inline;">Only T2 must be aborted and then re-started to ensure transaction atomicity</span>`,
                `<span style="display: inline;">Schedule S is recoverable and can ensure atomicity and nothing else needs to be done</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> T2 reads A (time 7) after T1 wrote it (time 2), and T2 commits at time 8 before T1 commits.<br><br> When T1 fails, T2 has already committed using a value of A that must be rolled back. Its effects cannot be undone, so S is non-recoverable.<br><br> <b>Answer: Schedule S is non-recoverable and cannot ensure transaction atomicity</b><br><br><a href="https://gateoverflow.in/8482/gate2015-3-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a simple checkpointing protocol and the following set of operations in the log. <br> (start, T4); (write, T4, y, 2, 3); (start, T1); (commit, T4); (write, T1, z, 5, 7); <br>(checkpoint);<br> (start, T2); (write, T2, x, 1, 9); (commit, T2); (start, T3), (write, T3, z, 7, 2); <br> If a crash happens now and the system tries to recover using both undo and redo operations, what are the contents of the undo list and the redo list?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Undo: T3, T1; Redo: T2</span>`,
                `<span style="display: inline;">Undo: T3, T1; Redo: T2, T4</span>`,
                `<span style="display: inline;">Undo: none; Redo: T2, T4, T3, T1</span>`,
                `<span style="display: inline;">Undo: T3, T1, T4; Redo: T2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Checking each statement:<br>- T4 committed before the checkpoint <span>\\( \\rightarrow \\)</span> already safe, nothing to do.<br> - T1 started before the checkpoint and never committed <span>\\( \\rightarrow \\)</span> undo.<br> - T2 committed after the checkpoint <span>\\( \\rightarrow \\)</span> redo.<br> - T3 never committed <span>\\( \\rightarrow \\)</span> undo.<br><br> <b>Answer: Undo: T3, T1; Redo: T2</b><br><br><a href="https://gateoverflow.in/8246/gate2015-2-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following transaction involving two bank accounts x and y. <br><br> read(x); x:=x-50; write(x); read(y); y:=y+50; write(y) <br><br> The constraint that the sum of the accounts x and y should remain constant is that of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Atomicity</span>`,
                `<span style="display: inline;">Consistency</span>`,
                `<span style="display: inline;">Isolation</span>`,
                `<span style="display: inline;">Durability</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Keeping x + y constant is an integrity rule of the database, which the transaction must preserve. That is the consistency property.<br><br> <b>Answer: Consistency</b><br><br><a href="https://gateoverflow.in/8047/gate2015-2-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the transactions T1, T2, and T3 and the schedules S1 and S2 given below. <br> T1 : r1(x); r1(Z) ; w1(x); w1(Z) <br> T2 : r2(x); r2(Z); w2(Z) <br> T3 : r3(x); r3(x); w3(Y)<br> <br> S1: r1(x); r3(Y); r3(x); r2(Y); r2(Z); w3(Y); w2(Z); r1(Z); w1(x); w1(Z) <br> S2: r1(x); r3(Y); r2(Y); r3(x); r1(Z); r2(Z); w3(Y); w1(x); w2(Z); w1(Z) <br> Which one of the following statements about the schedules is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only S1 is conflict-serializable</span>`,
                `<span style="display: inline;">Only S2 is conflict-serializable.</span>`,
                `<span style="display: inline;">Both S1 and S2 are conflict-serializable</span>`,
                `<span style="display: inline;">Neither S1 nor S2 is conflict-serializable</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>S1:</b> r2(Y) before w3(Y): T2<span>\\( \\rightarrow \\)</span>T3; r3(x) before w1(x): T3<span>\\( \\rightarrow \\)</span>T1; r2(Z), w2(Z) before r1(Z), w1(Z): T2<span>\\( \\rightarrow \\)</span>T1. No cycle <span>\\( \\rightarrow \\)</span> serializable (T2, T3, T1).<br><br> <b>S2:</b> r1(Z) before w2(Z): T1<span>\\( \\rightarrow \\)</span>T2; r2(Z) before w1(Z): T2<span>\\( \\rightarrow \\)</span>T1. Cycle <span>\\( \\rightarrow \\)</span> not serializable.<br><br> <b>Answer: Only S1 is conflict-serializable</b><br><br><a href="https://gateoverflow.in/2063/gate2014-3-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following schedule S of transactions T1, T2, T3, T4: <br><img src="images/twt-dbms/q29.jpg"> <br> Which one of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S is conflict-serializable but not recoverable</span>`,
                `<span style="display: inline;">S is not conflict-serializable but is recoverable</span>`,
                `<span style="display: inline;">S is both conflict-serializable and recoverable</span>`,
                `<span style="display: inline;">S is neither conflict-serializable nor is it recoverable</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Order: R2(X), W3(X), C3, W1(X), C1, W2(Y), R2(Z), C2, R4(X), R4(Y), C4.<br><br> Conflict edges: T2<span>\\( \\rightarrow \\)</span>T3, T2<span>\\( \\rightarrow \\)</span>T1, T3<span>\\( \\rightarrow \\)</span>T1 (on X), T1<span>\\( \\rightarrow \\)</span>T4, T3<span>\\( \\rightarrow \\)</span>T4 (on X), T2<span>\\( \\rightarrow \\)</span>T4 (on Y). No cycle <span>\\( \\rightarrow \\)</span> conflict serializable (T2, T3, T1, T4).<br><br> T4 reads X from T1 and Y from T2, and both commit before T4 commits <span>\\( \\rightarrow \\)</span> recoverable.<br><br> <b>Answer: S is both conflict-serializable and recoverable</b><br><br><a href="https://gateoverflow.in/1988/gate2014-2-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following four schedules due to three transactions (indicated by the subscript) using read and write on a data item x, denoted by r(x) and w(x) respectively. Which one of them is conflict serializable?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">r1(x); r2(x); w1(x); r3(x); w2(x)</span>`,
                `<span style="display: inline;">r2(x); r1(x); w2(x); r3(x); w1(x)</span>`,
                `<span style="display: inline;">r3(x); r2(x); r1(x); w2(x); w1(x)</span>`,
                `<span style="display: inline;">r2(x); w2(x); r3(x); r1(x); w1(x)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> For r2(x); w2(x); r3(x); r1(x); w1(x): conflicts give T2 <span>\\( \\rightarrow \\)</span> T3, T2 <span>\\( \\rightarrow \\)</span> T1 and T3 <span>\\( \\rightarrow \\)</span> T1. No cycle <span>\\( \\rightarrow \\)</span> equivalent to T2, T3, T1.<br><br> Each of the other schedules has a cycle (e.g. option 1: r1 before w2 gives T1 <span>\\( \\rightarrow \\)</span> T2, and r2 before w1 gives T2 <span>\\( \\rightarrow \\)</span> T1).<br><br> <b>Answer: r2(x); w2(x); r3(x); r1(x); w1(x)</b><br><br><a href="https://gateoverflow.in/1796/gate2014-1-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Transaction-III)",
    date: "sep 08, 2026",
    topicsCovered: "Isolation Levels, Conflict Serializability, Precedence Graph, Equivalent Serial Schedule, 2PL Protocol vs Timestamp Ordering",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is the highest isolation level in transaction management?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Serializable</span>`,
                `<span style="display: inline;">Repeated Read</span>`,
                `<span style="display: inline;">Committed Read</span>`,
                `<span style="display: inline;">Uncommitted Read</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The standard SQL isolation levels in increasing order of isolation are: <b>Read Uncommitted &lt; Read Committed &lt; Repeatable Read &lt; Serializable</b>. Thus, <b>Serializable</b> provides the highest isolation level.<br><br><b>Answer: Serializable</b><br><br><a href="https://gateoverflow.in/43855/isro-2013-23" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following transactions with data items P and Q initialized to zero:<br> T1 :read (P); read (Q); if P = 0 then Q := Q + 1 ; write (Q). T2 : read (Q); read (P); if Q = 0 then P := P + 1 ; write (P). <br> Any non-serial interleaving of T1 and T2 for concurrent execution leads to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a serializable schedule</span>`,
                `<span style="display: inline;">a schedule that is not conflict serializable</span>`,
                `<span style="display: inline;">a conflict serializable schedule</span>`,
                `<span style="display: inline;">a schedule for which a precedence graph cannot be drawn</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In any interleaving that is not serial:<br> - T1 reads P before T2 writes P <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T2<br> - T2 reads Q before T1 writes Q <span>\\( \\rightarrow \\)</span> T2 <span>\\( \\rightarrow \\)</span> T1<br><br> The precedence graph has a cycle, so the schedule is not conflict serializable.<br><br> <b>Answer: a schedule that is not conflict serializable</b><br><br><a href="https://gateoverflow.in/1612/gate2012-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the equivalent serial schedule for the following transactions? <br><img src="images/twt-dbms/q15.jpg"><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( T_1 - T_2 - T_3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T_3 - T_1 - T_2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T_2 - T_1 - T_3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T_1 - T_3 - T_2 \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Conflicts in time order:<br> - T3 W(Y) before T1 R(Y), W(Y) <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T1<br> - T3 W(Z) before T2 W(Z) <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2<br> - T1 W(Y) before T2 R(Y); T1 W(X) before T2 R(X) <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T2<br><br> Serial order: T3 <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T2<br><br> <b>Answer: <span>\\( T_3-T_1-T_2 \\)</span></b><br><br><a href="https://gateoverflow.in/52269/isro2011-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following schedule for transactions T1, T2 and T3: <br><img src="images/twt-dbms/q42_2010.jpg"><br> Which one of the schedules below is the correct serialization of the above?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">T1 <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2</span>`,
                `<span style="display: inline;">T2 <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T3</span>`,
                `<span style="display: inline;">T2 <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T1</span>`,
                `<span style="display: inline;">T3 <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Conflicts:<br> - T1 R(X), W(X) before T3 W(X) <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T3<br> - T1 W(X) before T2 R(X) <span>\\( \\rightarrow \\)</span> T1 <span>\\( \\rightarrow \\)</span> T2<br> - T3 R(Y) before T2 W(Y) <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2<br> - T3 W(X) before T2 R(X), W(X) <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2<br><br> Order: T1 <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2<br><br> <b>Answer: T1 <span>\\( \\rightarrow \\)</span> T3 <span>\\( \\rightarrow \\)</span> T2</b><br><br><a href="https://gateoverflow.in/2343/gate2010-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following concurrency control protocols ensure both conflict serializability and freedom from deadlock?<br> I. 2-phase locking <br> II. Time-stamp ordering</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">Both I and II</span>`,
                `<span style="display: inline;">Neither I nor II</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Checking each statement:<br>- 2PL guarantees conflict serializability but can deadlock.<br> - Timestamp ordering is serializable in timestamp order and never waits in a cycle (it aborts instead) <span>\\( \\rightarrow \\)</span> deadlock-free.<br><br> <b>Answer: II only</b><br><br><a href="https://gateoverflow.in/2196/gate2010-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following scenarios may lead to an irrecoverable error in a database system?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A transaction writes a data item after it is read by an uncommitted transaction</span>`,
                `<span style="display: inline;">A transaction reads a data item after it is read by an uncommitted transaction</span>`,
                `<span style="display: inline;">A transaction reads a data item after it is written by a committed transaction</span>`,
                `<span style="display: inline;">A transaction reads a data item after it is written by an uncommitted transaction</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A schedule is <b>non-recoverable</b> (or irrecoverable) when a transaction <span>\\( T_j \\)</span> reads a data item written by an uncommitted transaction <span>\\( T_i \\)</span> (dirty read) and commits before <span>\\( T_i \\)</span>. If <span>\\( T_i \\)</span> subsequently aborts, <span>\\( T_j \\)</span> cannot be rolled back because it has already committed, leading to an irrecoverable state.<br><br><b>Answer: A transaction reads a data item after it is written by an uncommitted transaction</b><br><br><a href="https://gateoverflow.in/919/gate2003-29-isro2009-73" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following contains complete record of all activity that affected the contents of a database during a certain period of time?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Transaction log</span>`,
                `<span style="display: inline;">Query language</span>`,
                `<span style="display: inline;">Report writer</span>`,
                `<span style="display: inline;">Data manipulation language</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A <b>transaction log</b> (or redo/undo log) records all actions and modifications (insert, update, delete, commit, rollback) performed on the database by transactions in chronological order. It is crucial for ACID recovery and checkpointing.<br><br><b>Answer: Transaction log</b><br><br><a href="https://gateoverflow.in/50569/isro2009-71" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider two transactions T1 and T2, and four schedules S1, S2, S3, S4 of T1 and T2 as given below: <br><br> <span>\\( T_{1}:R_{1}[x]W_{1}[x]W_{1}[y] \\)</span><br> <span>\\( T_{2}:R_{2}[x]R_{2}[x]W_{1}[y] \\)</span><br> <span>\\( S_{1}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{1}[y]W_{2}[y] \\)</span><br> <span>\\( S_{2}:R_{1}[x]R_{2}[x]R_{2}[y]W_{1}[x]W_{2}[y]W_{1}[y] \\)</span><br> <span>\\( S_{3}:R_{1}[x]W_{1}[x]R_{2}[x]W_{1}[y]R_{2}[y]W_{2}[y] \\)</span><br> <span>\\( S_{4}:R_{2}[x]R_{2}[y]R_{1}[x]W_{1}[x]W_{1}[y]W_{2}[y] \\)</span><br><br> Which of the above schedules are conflict-serializable?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1 and S2</span>`,
                `<span style="display: inline;">S2 and S3</span>`,
                `<span style="display: inline;">S3 only</span>`,
                `<span style="display: inline;">S4 only</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Analyzing conflicts for each schedule between <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span>:<br>- <b><span>\\( S_1 \\)</span>:</b> <span>\\( R_2[x] \\)</span> before <span>\\( W_1[x] \\implies T_2 \\rightarrow T_1 \\)</span>; <span>\\( W_1[y] \\)</span> before <span>\\( W_2[y] \\implies T_1 \\rightarrow T_2 \\)</span>. Cycle exists <span>\\( \\rightarrow \\)</span> Not conflict-serializable.<br>- <b><span>\\( S_2 \\)</span>:</b> <span>\\( R_2[x] \\)</span> before <span>\\( W_1[x] \\implies T_2 \\rightarrow T_1 \\)</span>; <span>\\( R_2[y], W_2[y] \\)</span> before <span>\\( W_1[y] \\implies T_2 \\rightarrow T_1 \\)</span>. Acyclic (topological order: <span>\\( T_2, T_1 \\)</span>) <span>\\( \\rightarrow \\)</span> <b>Conflict-serializable</b>.<br>- <b><span>\\( S_3 \\)</span>:</b> <span>\\( R_1[x], W_1[x] \\)</span> before <span>\\( R_2[x] \\implies T_1 \\rightarrow T_2 \\)</span>; <span>\\( W_1[y] \\)</span> before <span>\\( R_2[y], W_2[y] \\implies T_1 \\rightarrow T_2 \\)</span>. Acyclic (topological order: <span>\\( T_1, T_2 \\)</span>) <span>\\( \\rightarrow \\)</span> <b>Conflict-serializable</b>.<br>- <b><span>\\( S_4 \\)</span>:</b> <span>\\( R_2[x] \\)</span> before <span>\\( W_1[x] \\implies T_2 \\rightarrow T_1 \\)</span>; <span>\\( W_1[y] \\)</span> before <span>\\( W_2[y] \\implies T_1 \\rightarrow T_2 \\)</span>. Cycle exists <span>\\( \\rightarrow \\)</span> Not conflict-serializable.<br><br>Therefore, <b><span>\\( S_2 \\)</span> and <span>\\( S_3 \\)</span></b> are conflict-serializable.<br><br><b>Answer: S2 and S3</b><br><br><a href="https://gateoverflow.in/1329/gate2009-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following three schedules of transactions T1, T2 and T3. <br>[Notation: In the following NYO represents the action Y (R for read, W for write) performed by transaction N on object O.]<br><br><span>\\( \\begin{array}{lllllllllll} \\hline(S 1) & 2 R A & 2 W A & 3 R C & 2 W B & 3 W A & 3 W C & 1 R A & 1 R B & 1 W A & 1 W B \\\\ \\hline(S 2) & 3 R C & 2 R A & 2 W A & 2 W B & 3 W A & 1 R A & 1 R B & 1 W A & 1 W B & 3 W C \\\\ \\hline(S 3) & 2 R A & 3 R C & 3 W A & 2 W A & 2 W B & 3 W C & 1 R A & 1 R B & 1 W A & 1 W B \\\\ \\hline \\end{array} \\)</span><br><br>Which of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1, S2 and S3 are all conflict equivalent to each other</span>`,
                `<span style="display: inline;">No two of S1, S2 and S3 are conflict equivalent to each other</span>`,
                `<span style="display: inline;">S2 is conflict equivalent to S3, but not to S1</span>`,
                `<span style="display: inline;">S1 is conflict equivalent to S2, but not to S3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Two schedules are conflict equivalent if all pairs of conflicting operations appear in the same relative order.<br>Comparing pairs of conflicting operations:<br>- In <span>\\( S_1 \\)</span> and <span>\\( S_2 \\)</span>: On object A, <span>\\( 2WA \\)</span> precedes <span>\\( 3WA \\)</span>, and <span>\\( 3WA \\)</span> precedes <span>\\( 1RA, 1WA \\)</span> in both. On object B, <span>\\( 2WB \\)</span> precedes <span>\\( 1RB, 1WB \\)</span> in both. On object C, <span>\\( 3RC \\)</span> precedes <span>\\( 3WC \\)</span> (same transaction). All conflicting pairs have the exact same relative order in <span>\\( S_1 \\)</span> and <span>\\( S_2 \\implies S_1 \\)</span> is <b>conflict equivalent to <span>\\( S_2 \\)</span></b>.<br>- In <span>\\( S_3 \\)</span>: <span>\\( 3WA \\)</span> precedes <span>\\( 2WA \\)</span>, whereas in <span>\\( S_1 \\)</span> and <span>\\( S_2 \\)</span>, <span>\\( 2WA \\)</span> precedes <span>\\( 3WA \\)</span>. This conflict order is reversed, so <span>\\( S_3 \\)</span> is not conflict equivalent to <span>\\( S_1 \\)</span> or <span>\\( S_2 \\)</span>.<br><br>Therefore, <b><span>\\( S_1 \\)</span> is conflict equivalent to <span>\\( S_2 \\)</span>, but not to <span>\\( S_3 \\)</span></b>.<br><br><b>Answer: S1 is conflict equivalent to S2, but not to S3</b><br><br><a href="https://gateoverflow.in/3374/gate2008-it-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is correct with respect to Two phase commit protocol?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ensures serializability</span>`,
                `<span style="display: inline;">Prevents Deadlock</span>`,
                `<span style="display: inline;">Detects Deadlock</span>`,
                `<span style="display: inline;">Recover from Deadlock</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The <b>Two-Phase Commit (2PC)</b> protocol is a distributed consensus algorithm that coordinates all participating nodes to either commit or abort a transaction together. In distributed database systems, 2PC ensures global atomicity and consistency, thereby helping maintain overall <b>serializability</b> across distributed transactions.<br><br><b>Answer: Ensures serializability</b><br><br><a href="https://gateoverflow.in/49627/isro2007-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two transactions : T1 and T2. <br> T1:read (A);<br> read (B);<br> if A = 0 then B <span>\\( \\leftarrow \\)</span> B + 1;<br> write (B);<br><br> T2 : read (B);<br> read (A);<br> if B <span>\\( \\neq \\)</span> 0 then A <span>\\( \\leftarrow \\)</span> A - 1;<br> write (A);<br><br> Which of the following schemes, using shared and exclusive locks, satisfy the requirements for strict two phase locking for the above transactions?<br><img src="images/twt-dbms/q66.jpg"><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">B</span>`,
                `<span style="display: inline;">C</span>`,
                `<span style="display: inline;">D</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In <b>Strict Two-Phase Locking (Strict 2PL)</b>:<br>1. A transaction must acquire a shared lock (S) before reading, and an exclusive lock (X) before writing.<br>2. All exclusive (X) locks acquired by a transaction must be held until the transaction commits or aborts.<br>In scheme (C), T1 requests an exclusive lock on B before writing and holds it until the end, and shared locks are obtained before reads without premature release of exclusive locks, satisfying Strict 2PL.<br><br><b>Answer: C</b><br><br><a href="https://gateoverflow.in/3511/gate2007-it-66" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following schedules involving two transactions. Which one of the following statements is TRUE? <br> <span>\\( S_1 :r_1(X); r_1(Y); r_2(X); r_2(Y); w_2(Y); w_1(X) \\)</span> <br> <span>\\( S_2 :r_1(X); r_2(X); r_2(Y); w_2(Y); r_1(Y); w_1(X) \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both S1 and S2 are conflict serializable.</span>`,
                `<span style="display: inline;">S1 is conflict serializable and S2 is not conflict serializable.</span>`,
                `<span style="display: inline;">S1 is not conflict serializable and S2 is conflict serializable.</span>`,
                `<span style="display: inline;">Both S1 and S2 are not conflict serializable.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Analyzing conflicts between \\( T_1 \\) and \\( T_2 \\):<br>- <b>For \\( S_1 \\):</b> \\( r_1(Y) \\) precedes \\( w_2(Y) \\implies T_1 \\rightarrow T_2 \\); \\( r_2(X) \\) precedes \\( w_1(X) \\implies T_2 \\rightarrow T_1 \\). This creates a cycle (\\( T_1 \\leftrightarrow T_2 \\)), so <b>\\( S_1 \\) is NOT conflict serializable</b>.<br>- <b>For \\( S_2 \\):</b> \\( w_2(Y) \\) precedes \\( r_1(Y) \\implies T_2 \\rightarrow T_1 \\); \\( r_2(X) \\) precedes \\( w_1(X) \\implies T_2 \\rightarrow T_1 \\). The precedence graph is acyclic with single edge \\( T_2 \\rightarrow T_1 \\), so <b>\\( S_2 \\) IS conflict serializable</b>.<br><br><b>Answer: S1 is not conflict serializable and S2 is conflict serializable.</b><br><br><a href="https://gateoverflow.in/1262/gate2007-64#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following log sequence of two transactions on a bank account, with initial balance 12000,that transfer 2000 to a mortgage payment and, then apply a 5% interest. <br><br> 1. T1 start <br> 2. T1 B old = 12000 new = 10000 <br> 3. T1 M old = 0 ne = 2000<br> 4. T1 commit <br> 5. T2 start<br> 6. T2 B old = 10000 new = 10500 <br> 7. T2 commit<br><br> Suppose the database system crashed just before log record 7 is written. When the system is restarted, which one statement is true of the recovery procedure?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">We must redo log record 6 to set B to 10500</span>`,
                `<span style="display: inline;">We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</span>`,
                `<span style="display: inline;">We need not redo log records 2 and 3 because transaction T1 has committed</span>`,
                `<span style="display: inline;">We can apply redo and undo operations in arbitrary order because they are idempotent</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> At the time of crash (just before record 7), transaction <span>\\( T_1 \\)</span> has committed, while transaction <span>\\( T_2 \\)</span> is active and uncommitted.<br>Under standard undo/redo logging recovery:<br>- Active/uncommitted transactions must be <b>undone</b>: record 6 of <span>\\( T_2 \\)</span> is undone to restore B to 10000.<br>- Committed transactions must be <b>redone</b> to ensure durability: records 2 and 3 of <span>\\( T_1 \\)</span> are redone.<br><br><b>Answer: We must undo log record 6 to set B to 10000 and then redo log records 2 and 3</b><br><br><a href="https://gateoverflow.in/981/gate2006-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A company maintains records of sales made by its salespersons and pays them commission based on each individual's total sales made in a year. This data is maintained in a table with following schema:<br> salesinfo = (salespersonid, totalsales, commission)<br> In a certain year, due to better business results, the company decides to further reward its salespersons by enhancing the commission paid to them as per the following formula:<br> If commission <span>\\( \\leq 50000 \\)</span>, enhance it by 2%<br> If <span>\\( 50000 < \\text{commission} \\leq 100000 \\)</span>, enhance it by 4%<br> If <span>\\( \\text{commission} > 100000 \\)</span>, enhance it by 6%<br> The IT staff has written three different SQL scripts to calculate enhancement for each slab, each of these scripts is to run as a separate transaction as follows:<br> T1<br> <br> Update salesinfo Set commission = commission * 1.02 Where commission &lt;= 50000;<br> <br> T2<br> <br>Update salesinfo Set commission = commission * 1.04 Where commission &gt; 50000 and commission &lt;= 100000; <br> <br> T3<br><br> Update salesinfo Set commission = commission * 1.06 Where commission &gt; 100000;<br> <br>Which of the following options of running these transactions will update the commission of all salespersons correctly</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Execute T1 followed by T2 followed by T3</span>`,
                `<span style="display: inline;">Execute T2, followed by T3; T1 running concurrently throughout</span>`,
                `<span style="display: inline;">Execute T3 followed by T2; T1 running concurrently throughout</span>`,
                `<span style="display: inline;">Execute T3 followed by T2 followed by T1</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> If we run T1 first, someone with a commission near 50000 (say 49500) gets updated by 2% to 50490. Then when T2 runs, this same salesperson's commission now falls in the slab &gt; 50000 and &lt;= 100000, getting updated a second time by 4%! This is incorrect double enhancement.<br><br>To avoid updated values jumping into subsequent slabs, we must process the slabs in <b>descending order</b> of commission: <b>T3 followed by T2 followed by T1</b>.<br><br><b>Answer: Execute T3 followed by T2 followed by T1</b><br><br><a href="https://gateoverflow.in/3830/gate2005-it-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Amongst the ACID properties of a transaction, the 'Durability' property requires that the changes made to the database by a successful transaction persist</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Except in case of an Operating System crash</span>`,
                `<span style="display: inline;">Except in case of a Disk crash</span>`,
                `<span style="display: inline;">Except in case of a power failure</span>`,
                `<span style="display: inline;">Always, even if there is a failure of any kind</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>Durability</b> guarantees that once a transaction has committed, its updates and changes will survive permanently in the database, even in the event of any system crash, power outage, or OS/hardware failure.<br><br><b>Answer: Always, even if there is a failure of any kind</b><br><br><a href="https://gateoverflow.in/3769/gate2005-it-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(SQL-I)",
    date: "sep 08, 2026",
    topicsCovered: "Correlated Subqueries, Natural Joins, Aggregate Functions, Nested Subqueries, Division in SQL, Group By & Uncorrelated Subqueries",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><br> <span>\\( \\text{Students} (\\underline{\\text{rollno: integer}}\\text{, name: string, age: integer, cgpa: real}) \\)</span><br> <span>\\( \\text{Courses} (\\underline{\\text{courseno: integer}}\\text{, cname: string, credits: integer}) \\)</span><br> <span>\\( \\text{Enrolled} (\\underline{\\text{rollno: integer}}\\text{, }\\underline{\\text{courseno: integer}}\\text{, grade: string}) \\)</span><br><br> Which of the following options is/are correct SQL query/queries to retrieve the names of the students enrolled in course number (i.e. courseno) 1470?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">SELECT S.name FROM Students S WHERE EXISTS (SELECT * FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</span>`,
                `<span style="display: inline;">SELECT S.name FROM Students S WHERE SIZEOF (SELECT * FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno) &gt; 0</span>`,
                `<span style="display: inline;">SELECT S.name FROM Students S WHERE 0 &lt; (SELECT COUNT(*) FROM Enrolled E WHERE E.courseno = 1470 AND E.rollno = S.rollno)</span>`,
                `<span style="display: inline;">SELECT S.name FROM Students S NATURAL JOIN Enrolled E WHERE E.courseno = 1470</span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> All of the standard relational-algebra-equivalent SQL formulations for "students who have an Enrolled row with courseno=1470" are valid:<br>- <b>Option A:</b> Uses <b><span>\\( \\text{EXISTS} \\)</span></b> with a correlated subquery, which checks if at least one matching enrollment row exists for student S.<br>- <b>Option C:</b> Uses scalar subquery <b><span>\\( \\text{COUNT(*)} > 0 \\)</span></b> which counts matching rows and checks if the count is greater than 0.<br>- <b>Option D:</b> Uses <b><span>\\( \\text{NATURAL JOIN} \\)</span></b> between Students and Enrolled (joining on common attribute <code>rollno</code>) filtered by <code>courseno = 1470</code>.<br><br>Option B uses <code>SIZEOF</code>, which is not a valid standard SQL keyword.<br><br><b>Answer: A, C, D</b><br><br><a href="https://gateoverflow.in/460849/gate-cse-2025-set-2-question-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following database tables of a sports league. <br><br> player(pid,pname,age) <br>coach(cid,cname) <br>team(tid,tname,city,cid) <br>members(pid,tid) <br><br> An instance of the table and an SQL query are given. <br><img src="images/twt-dbms/q45_2025.webp"><br> The value returned by the given SQL query is _________. (Answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "26",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> From the given table instances:<br>- <code>coach</code>: (101, Ricky), (102, Mark), (103, Trevor)<br>- <code>team</code>: (10, MI, Mumbai, 102), (20, DC, Delhi, 101), (30, PK, Mohali, 103)<br>- <code>members</code>: (1, 10), (2, 30), (3, 10), (4, 20)<br>- <code>player</code>: (1, Jasprit, 31), (2, Atharva, 24), (3, Ishan, 26), (4, Axar, 30)<br><br>Evaluating the nested subquery:<br>1. <span>\\( C.cname = \\text{'Mark'} \\implies cid = 102 \\)</span>.<br>2. <span>\\( T.cid = 102 \\implies tid = 10 \\)</span> (team MI).<br>3. <span>\\( M.tid = 10 \\implies pid \\in \\{1, 3\\} \\)</span>.<br>4. The outer query finds <span>\\( \\text{MIN}(age) \\)</span> for players with <span>\\( pid \\in \\{1, 3\\} \\)</span>: Jasprit (age 31) and Ishan (age 26).<br><br><span>\\( \\text{MIN}(31, 26) = 26 \\)</span>.<br><br><b>Answer: 26</b><br><br><a href="https://gateoverflow.in/460035/gate-cse-2025-set-1-question-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following table named Student in a relational database. The primary key of this table is rollNum.<br><span>\\( \\begin{array}{|c|c|c|c|} \\hline \\\\ rollNum&name&gender&marks \\\\ \\hline 1&Naman&M&62\\\\ \\hline 2&Aliya&F&70 \\\\ \\hline 3&Aliya &F&80 \\\\ \\hline 4&James&M&82\\\\ \\hline 5&Swati&F&65\\\\ \\hline \\end{array} \\)</span> <br>The SQL query below is executed on this database.<br> <br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> * <b>FROM</b> <span style="color: #7b1fa2;">Student</span> <b>WHERE</b> <span style="color: #7b1fa2;">gender</span> = <span style="color: #22863a;">'F'</span> <b>AND</b> <span style="color: #7b1fa2;">marks</span> &gt; 65;</code></pre><br><br>The number of rows returned by the query is ______</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Filtering rows satisfying <code>gender = 'F'</code> AND <code>marks &gt; 65</code>:<br>- (1, Naman, M, 62): gender is M <span>\\( \\rightarrow \\)</span> False<br>- (2, Aliya, F, 70): gender is F and marks = 70 &gt; 65 <span>\\( \\rightarrow \\)</span> <b>True</b><br>- (3, Aliya, F, 80): gender is F and marks = 80 &gt; 65 <span>\\( \\rightarrow \\)</span> <b>True</b><br>- (4, James, M, 82): gender is M <span>\\( \\rightarrow \\)</span> False<br>- (5, Swati, F, 65): marks = 65 is not strictly greater than 65 <span>\\( \\rightarrow \\)</span> False<br><br>Both rows (rollNum 2 and rollNum 3) satisfy the condition, so exactly <b>2</b> rows are returned.<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/399260/gate-cse-2023-question-51#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the relational database with the following four schemas and their respective instances.<br><br><img src="images/twt-dbms/q46_2022.jpg"><br>The number of rows returned by the above SQL query is ___</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The query selects student roll numbers for whom the set difference <code>(courses offered by department D01) EXCEPT (courses registered by the student)</code> is empty (<code>NOT EXISTS</code>). In other words, it finds students who registered for <b>all</b> courses offered by department D01.<br><br>Courses offered by department D01 = {C11, C12}.<br>- <b>S01:</b> Registered for {C11, C12} <span>\\( \\implies \\)</span> {C11, C12} EXCEPT {C11, C12} = <span>\\( \\emptyset \\implies \\)</span> <b>Selected</b><br>- <b>S02:</b> Registered for {C11} <span>\\( \\implies \\)</span> {C11, C12} EXCEPT {C11} = {C12} <span>\\( \\neq \\emptyset \\)</span><br>- <b>S03:</b> Registered for {C21, C22, C23} <span>\\( \\implies \\)</span> {C11, C12} EXCEPT {C21, C22, C23} = {C11, C12} <span>\\( \\neq \\emptyset \\)</span><br>- <b>S04:</b> Registered for {C11, C12} <span>\\( \\implies \\)</span> {C11, C12} EXCEPT {C11, C12} = <span>\\( \\emptyset \\implies \\)</span> <b>Selected</b><br>- <b>S05:</b> Registered for {C11, C21} <span>\\( \\implies \\)</span> {C11, C12} EXCEPT {C11, C21} = {C12} <span>\\( \\neq \\emptyset \\)</span><br><br>Therefore, exactly 2 students (S01 and S04) satisfy the condition, returning <b>2</b> rows.<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/371890/Gate-cse-2022-question-46#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The relation scheme given below is used to store information about the employees of a company, where empId is the key and deptId indicates the department to which the employee is assigned. Each employee is assigned to exactly one department.<br><br> <span>\\( \\textsf{emp($\\underline{\\textsf{empId}}$, name, gender, salary, deptId)} \\)</span><br><br> Consider the following SQL query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">deptId</span>, <span style="color: #6f6b15;">count(*)</span><br><b>FROM</b> <span style="color: #7b1fa2;">emp</span><br><b>WHERE</b> <span style="color: #7b1fa2;">gender</span> = <span style="color: #22863a;">"female"</span><br>&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">salary</span> &gt; (<b>SELECT</b> <span style="color: #6f6b15;">avg</span>(<span style="color: #7b1fa2;">salary</span>) <b>FROM</b> <span style="color: #7b1fa2;">emp</span>)<br><b>GROUP BY</b> <span style="color: #7b1fa2;">deptId</span>;</code></pre><br>The above query gives, for each department in the company, the number of female employees whose salary is greater than the average salary of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">employees in the department</span>`,
                `<span style="display: inline;">employees in the company</span>`,
                `<span style="display: inline;">female employees in the department</span>`,
                `<span style="display: inline;">female employees in the company</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In the query:<br><code>salary &gt; (select avg(salary) from emp)</code><br>The subquery <code>(select avg(salary) from emp)</code> is an uncorrelated subquery executed without any WHERE clause or department restriction. Therefore, it computes the overall average salary of <b>all employees in the company</b>.<br><br><b>Answer: employees in the company</b><br><br><a href="https://gateoverflow.in/357509/gate-cse-2021-set-2-question-31#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given relations R(w,x) and S(y,z), the result of<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">w</span>, <span style="color: #7b1fa2;">x</span><br><b>FROM</b> <span style="color: #7b1fa2;">R</span>, <span style="color: #7b1fa2;">S</span></code></pre><br>is guaranteed to be same as R, if</span>`,
            image: "",
            options: [
                `<span style="display: inline;">R has no duplicates and S is non-empty</span>`,
                `<span style="display: inline;">R and S have no duplicates</span>`,
                `<span style="display: inline;">S has no duplicates and R is non-empty</span>`,
                `<span style="display: inline;">R and S have the same number of tuples</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> R <span>\\( \\times \\)</span> S repeats each R tuple |S| times; DISTINCT w, x removes the repeats. The result equals R only if S is non-empty (otherwise the product is empty) and R has no duplicates (DISTINCT would remove them).<br><br> <b>Answer: R has no duplicates and S is non-empty</b><br><br><a href="https://gateoverflow.in/213548/isro2018-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two tables and four queries in SQL. <br> <img src="images/twt-dbms/q12_2018.jpg"> <br>Which one of the queries above is certain to have an output that is a superset of the outputs of the other three queries?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Query 1</span>`,
                `<span style="display: inline;">Query 2</span>`,
                `<span style="display: inline;">Query 3</span>`,
                `<span style="display: inline;">Query 4</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Checking each statement:<br>- Query 1 (inner join): matching rows only.<br> - Query 2 (left outer): matching rows + unmatched Book rows.<br> - Query 3 (right outer): matching rows + unmatched Stock rows.<br> - Query 4 (<b>full outer</b>): matching rows + unmatched rows from both sides, so it always contains the other three.<br><br> <b>Answer: Query 4</b><br><br><a href="https://gateoverflow.in/204086/gate2018-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\begin{array}{|l|l|l|l|l|} \\hline \\textbf{Employee} & \\textbf{Department} & \\textbf{OT allowance} \\\\ \\hline \\text{RAMA} & \\text{Mechanical} & \\text{5000} \\\\\\hline \\text{GOPI} & \\text{Electrical} & \\text{2000} \\\\\\hline \\text{SINDHU} & \\text{Computer} & \\text{4000} \\\\\\hline \\text{MAHESH} & \\text{Civil} & \\text{1500} \\\\\\hline \\end{array} \\)</span><br>What is the output of the following SQL query?<br><br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #6f6b15;">count(*)</span><br><b>FROM</b> (<br>&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> <span style="color: #7b1fa2;">Employee</span>, <span style="color: #7b1fa2;">Department</span> <b>FROM</b> <span style="color: #7b1fa2;">Overtime_allowance</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>NATURAL JOIN</b><br>&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> <span style="color: #7b1fa2;">Department</span>, <span style="color: #7b1fa2;">OT_allowance</span> <b>FROM</b> <span style="color: #7b1fa2;">Overtime_allowance</span>) <b>AS</b> T<br>);</code></pre><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">16</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The two subqueries are joined on their common column, Department. Each department appears once, so each (Employee, Department) row matches exactly one (Department, OT_allowance) row: 4 rows.<br><br> <b>Answer: 4</b><br><br><a href="https://gateoverflow.in/128552/isro2017-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following database table named top_scorer. <br><img src="images/twt-dbms/q49_2017.jpg"> <br> Consider the following SQL query: <br><img src="images/twt-dbms/q49a_2017.jpg"> <br> The number of tuples returned by the above SQL query is ___________.</span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Checking each statement:<br>- No player is from Spain, so "<span>\\( \\gt \\)</span> ALL (empty set)" is true for everyone.<br> - "<span>\\( \\gt \\)</span> ANY (German goals: 16, 14, 11, 10, 10)" means goals <span>\\( \\gt \\)</span> 10 (the smallest).<br><br> Players with more than 10 goals: Klose, Ronaldo, G Muller, Fontaine, Pele, Klinsmann, Kocsis = 7<br><br> <b>Answer: 7</b><br><br><a href="https://gateoverflow.in/118391/gate2017-2-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a database that has the relation schema EMP (EmpId, EmpName, and DeptName). An instance of the schema EMP and a SQL query on it are given below. <br><img src="images/twt-dbms/q20_2017.jpg"> The output of executing the SQL query is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "2.6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The inner query counts employees per department: AA 4, AB 3, AC 3, AD 2, AE 1. Every (DeptName, Num) pair is in that result, so all five rows are kept.<br><br> AVG = (4 + 3 + 3 + 2 + 1) / 5 = 13 / 5 = 2.6<br><br> <b>Answer: 2.6</b><br><br><a href="https://gateoverflow.in/118303/gate2017-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The SQL query<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">columns</span><br><b>FROM</b> <span style="color: #7b1fa2;">TableA</span><br><b>RIGHT OUTER JOIN</b> <span style="color: #7b1fa2;">TableB</span><br><b>ON</b> A.<span style="color: #7b1fa2;">columnName</span> = B.<span style="color: #7b1fa2;">columnName</span><br><b>WHERE</b> A.<span style="color: #7b1fa2;">columnName</span> <b>IS NULL</b></code></pre><br>returns the following:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">All rows in Table B, which meets equality condition above and, none from Table A which meets the condition.</span>`,
                `<span style="display: inline;">All rows in Table A, which meets equality condition above and none from Table B, which meets the condition.</span>`,
                `<span style="display: inline;">All rows in Table B, which meets the equality condition</span>`,
                `<span style="display: inline;">All rows in Table A, which meets the equality condition</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> RIGHT OUTER JOIN keeps every row of TableB; rows with no match in TableA get NULLs for A's columns. WHERE A.columnName IS NULL keeps only those unmatched rows, i.e. rows of B that have <b>no</b> matching row in A.<br><br> (This question was excluded from ISRO's evaluation because of its unclear wording.)<br><br><b>Answer: All rows in Table B, which meets equality condition above and, none from Table A which meets the condition.</b><br><br>NOTE: Question is excluded from the evaluation due to ambiguity.<br><br><a href="https://gateoverflow.in/331400/isro2020-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Properties of 'DELETE' and 'TRUNCATE' commands indicate that</span>`,
            image: "",
            options: [
                `<span style="display: inline;">After the execution of 'TRUNCATE' operation, COMMIT, and ROLLBACK statements cannot be performed to retrieve the lost data, while 'DELETE' allow it</span>`,
                `<span style="display: inline;">After the execution of 'DELETE' and 'TRUNCATE' operation retrieval is easily possible for the lost data</span>`,
                `<span style="display: inline;">After the execution of 'DELETE' operation, COMMIT and ROLLBACK statements can be performed to retrieve the lost data, while TRUNCATE do not allow it</span>`,
                `<span style="display: inline;">After the execution of 'DELETE' and 'TRUNCATE' operation no retrieval is possible for the lost data</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> DELETE is a DML command: it is logged row by row, so it can be <b>rolled back</b> before commit. TRUNCATE is a DDL command that commits implicitly, so the data cannot be recovered with ROLLBACK.<br><br> Options 1 and 3 say the same thing.<br><br><b>Answer: Options A and C</b><br><br><a href="https://gateoverflow.in/331428/isro2020-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relational database containing the following schemas. <br><img src="images/twt-dbms/q13_2020.jpg"><br>The primary key of each table is indicated by underlining the constituent fields.<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> s.<span style="color: #7b1fa2;">sno</span>, s.<span style="color: #7b1fa2;">sname</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Suppliers</span> s, <span style="color: #7b1fa2;">Catalogue</span> c<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> s.<span style="color: #7b1fa2;">sno</span> = c.<span style="color: #7b1fa2;">sno</span> <b>AND</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #7b1fa2;">cost</span> &gt; (<b>SELECT</b> <span style="color: #6f6b15;">AVG</span>(<span style="color: #7b1fa2;">cost</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Catalogue</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> <span style="color: #7b1fa2;">pno</span> = <span style="color: #22863a;">'P4'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>GROUP BY</b> <span style="color: #7b1fa2;">pno</span>);</code></pre><br>The number of rows returned by the above SQL query is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Subquery: average cost of P4 = (200 + 250) / 2 = 225.<br><br> Catalogue rows with cost <span>\\( \\gt \\)</span> 225: (S2, P5, 250), (S3, P1, 250), (S3, P5, 300), (S3, P4, 250) <span>\\( \\rightarrow \\)</span> 4 rows.<br><br> Each joins with exactly one supplier, and there is no DISTINCT, so 4 rows are returned.<br><br><b>Answer: 4</b><br><br><a href="https://gateoverflow.in/333218/gate2020-cs-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A relational database contains two tables Student and Performance as shown below: <br><img src="images/twt-dbms/q51_2019.jpg"><br>The primary key of the Student table is Roll_no. For the Performance table, the columns Roll_no. and Subject_code together from the primary key. Consider the SQL query given below:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> S.<span style="color: #7b1fa2;">Student_name</span>, <span style="color: #6f6b15;">sum</span>(P.<span style="color: #7b1fa2;">Marks</span>)<br><b>FROM</b> <span style="color: #7b1fa2;">Student</span> S, <span style="color: #7b1fa2;">Performance</span> P<br><b>WHERE</b> P.<span style="color: #7b1fa2;">Marks</span> &gt; 84<br><b>GROUP BY</b> S.<span style="color: #7b1fa2;">Student_name</span>;</code></pre><br>The number of rows returned by the above SQL query is _________ .</span>`,
            image: "",
            options: [
            ],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> There is <b>no join condition</b>, so FROM makes a cross product: every student is paired with every Performance row.<br><br> WHERE Marks <span>\\( \\gt \\)</span> 84 keeps the 5 performance rows with marks 86, 95, 90, 89, 92, and each is paired with all 5 students.<br><br> GROUP BY Student_name gives one row per student name <span>\\( \\rightarrow \\)</span> 5 rows.<br><br><b>Answer: 5</b><br><br><a href="https://gateoverflow.in/302797/gate2019-cs-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the set of relations given below and the SQL query that follows:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><span style="color: #7b1fa2;">Students</span>: (<span style="color: #7b1fa2;">Roll_number</span>, <span style="color: #7b1fa2;">Name</span>, <span style="color: #7b1fa2;">Date_of_birth</span>)<br><span style="color: #7b1fa2;">Courses</span>: (<span style="color: #7b1fa2;">Course_number</span>, <span style="color: #7b1fa2;">Course_name</span>, <span style="color: #7b1fa2;">Instructor</span>)<br><span style="color: #7b1fa2;">Grades</span>: (<span style="color: #7b1fa2;">Roll_number</span>, <span style="color: #7b1fa2;">Course_number</span>, <span style="color: #7b1fa2;">Grade</span>)<br><br><b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">Name</span><br><b>FROM</b> <span style="color: #7b1fa2;">Students</span>, <span style="color: #7b1fa2;">Courses</span>, <span style="color: #7b1fa2;">Grades</span><br><b>WHERE</b> <span style="color: #7b1fa2;">Students</span>.<span style="color: #7b1fa2;">Roll_number</span> = <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Roll_number</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Courses</span>.<span style="color: #7b1fa2;">Instructor</span> = <span style="color: #22863a;">'Sriram'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Courses</span>.<span style="color: #7b1fa2;">Course_number</span> = <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Course_number</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Grade</span> = <span style="color: #22863a;">'A'</span></code></pre><br>Which of the following sets is computed by the above query?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Names of Students who have got an A grade in all courses taught by Sriram</span>`,
                `<span style="display: inline;">Names of Students who have got an A grade in all courses</span>`,
                `<span style="display: inline;">Names of Students who have got an A grade in at least one of the courses taught by Sriram</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The joins pair each student with a grade row and its course. The conditions keep rows where the course is taught by Sriram and the grade is A. DISTINCT then lists every student with <b>at least one</b> such row; nothing checks "all courses".<br><br><b>Answer: Names of Students who have got an A grade in at least one of the courses taught by Sriram</b><br><br><a href="https://gateoverflow.in/213546/isro2018-42" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },

    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(SQL-II)",
    date: "sep 08, 2026",
    topicsCovered: "Correlated Subqueries, Having Clause, Group By, NOT IN Nested Queries, ALL & ANY Quantifiers",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The relation book (title,price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">title</span><br><b>FROM</b> <span style="color: #7b1fa2;">book</span> <b>AS</b> B<br><b>WHERE</b> (<b>SELECT</b> <span style="color: #6f6b15;">count(*)</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">book</span> <b>AS</b> T<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> T.<span style="color: #7b1fa2;">price</span> &gt; B.<span style="color: #7b1fa2;">price</span>) &lt; 5</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Titles of the four most expensive books</span>`,
                `<span style="display: inline;">Title of the fifth most inexpensive book</span>`,
                `<span style="display: inline;">Title of the fifth most expensive book</span>`,
                `<span style="display: inline;">Titles of the five most expensive books</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> For each book B, the subquery counts how many books T have a strictly higher price (<code>T.price &gt; B.price</code>).<br><br>If this count is <code>&lt; 5</code> (i.e. 0, 1, 2, 3, or 4 books are more expensive), then B is among the top 5 most expensive books in the relation.<br><br><b>Answer: Titles of the five most expensive books</b><br><br><a href="https://gateoverflow.in/1400/gate2005-77-isro2016-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following database table named water_schemes : <br><img src="images/twt-dbms/q52_2016.jpg"><br> The number of tuples returned by the following SQL query is __________. <br><img src="images/twt-dbms/q52a_2016.jpg"></span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Evaluating district totals in <code>water_schemes</code>:<br>- Ajmer: 20<br>- Bikaner: 10 + 10 + 20 = 40<br>- Churu: 10 + 20 = 30<br>- Dungargarh: 10<br><br>Average of district totals = <span>\\( \\frac{20 + 40 + 30 + 10}{4} = \\frac{100}{4} = 25 \\)</span>.<br><br>The query filters for districts with total capacity <code>&gt;= 25</code>, which are <b>Bikaner (40)</b> and <b>Churu (30)</b>.<br>Therefore, exactly <b>2</b> tuples are returned.<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/39604/gate2016-2-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following schema:<br><code>Emp (Empcode, Name, Sex, Salary, Deptt)</code><br><br>A simple SQL query is executed as follows:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">Deptt</span><br><b>FROM</b> <span style="color: #7b1fa2;">Emp</span><br><b>WHERE</b> <span style="color: #7b1fa2;">sex</span> = <span style="color: #22863a;">'Male'</span><br><b>GROUP BY</b> <span style="color: #7b1fa2;">Dept</span><br><b>HAVING</b> <span style="color: #6f6b15;">avg</span>(<span style="color: #7b1fa2;">Salary</span>) &gt; (<b>SELECT</b> <span style="color: #6f6b15;">avg</span>(<span style="color: #7b1fa2;">Salary</span>) <b>FROM</b> <span style="color: #7b1fa2;">Emp</span>)</code></pre>The output will be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Average salary of male employee is the average salary of the organization</span>`,
                `<span style="display: inline;">Average salary of male employee is less than the average salary of the organization</span>`,
                `<span style="display: inline;">Average salary of male employee is equal to the average salary of the organization</span>`,
                `<span style="display: inline;">Average salary of male employee is more than the average salary of the organization</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The subquery <code>(SELECT avg(Salary) FROM Emp)</code> calculates the overall average salary across all employees in the entire organization.<br><br>The outer query filters for male employees (<code>WHERE sex = 'Male'</code>), groups them by department (<code>GROUP BY Deptt</code>), and retains only those departments where <code>avg(Salary) &gt; overall_avg</code>.<br><br>Thus, it outputs departments where the average salary of male employees is greater than the average salary of the entire organization.<br><br><b>Answer: Average salary of male employee is more than the average salary of the organization</b><br><br><a href="https://gateoverflow.in/51196/isro2015-23" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><code>Suppliers (sid, sname, city, street)</code><br><code>Parts (pid, pname, color)</code><br><code>Catalog (sid, pid, cost)</code><br><br>Consider the following relational query on the database:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> S.<span style="color: #7b1fa2;">name</span><br><b>FROM</b> <span style="color: #7b1fa2;">Suppliers</span> S<br><b>WHERE</b> S.<span style="color: #7b1fa2;">sid</span> <b>NOT IN</b> (<b>SELECT</b> C.<span style="color: #7b1fa2;">sid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Catalog</span> C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> C.<span style="color: #7b1fa2;">pid</span> <b>NOT IN</b> (<b>SELECT</b> P.<span style="color: #7b1fa2;">pid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Parts</span> P<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> P.<span style="color: #7b1fa2;">color</span> &lt;&gt; <span style="color: #22863a;">'blue'</span>))</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Find the names of all suppliers who have supplied non-blue part.</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have not supplied non-blue part.</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have supplied only non-blue parts</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have not supplied only non-blue part.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Working from the innermost subquery outward:<br>1. <code>SELECT P.pid FROM Parts P WHERE P.color &lt;&gt; 'blue'</code> returns all non-blue part IDs.<br>2. <code>WHERE C.pid NOT IN (...)</code> selects catalog entries for parts that are NOT non-blue (i.e. blue parts).<br>3. <code>WHERE S.sid NOT IN (...)</code> selects suppliers who do NOT supply blue parts, i.e., suppliers who supply only non-blue parts (or supply nothing).<br><br>As per the official examination key, Option A/C is credited.<br><br><b>Answer: Find the names of all suppliers who have supplied non-blue part.</b><br><br><a href="https://gateoverflow.in/1339/gate-cse-2009-question-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relation:<br><code>Cinema(theater, address, capacity)</code><br><br>Which of the following options will be needed at the end of the SQL query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> P1.<span style="color: #7b1fa2;">address</span><br><b>FROM</b> <span style="color: #7b1fa2;">Cinema</span> P1</code></pre>such that it always finds the addresses of theaters with maximum capacity?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">WHERE P1.capacity <span>\\( \\geq \\)</span> All (select P2.capacity from Cinema P2)</span>`,
                `<span style="display: inline;">WHERE P1.capacity <span>\\( \\geq \\)</span> Any (select P2.capacity from Cinema P2)</span>`,
                `<span style="display: inline;">WHERE P1.capacity <span>\\( \\gt \\)</span> All (select max(P2.capacity) from Cinema P2)</span>`,
                `<span style="display: inline;">WHERE P1.capacity <span>\\( \\gt \\)</span> Any (select max(P2.capacity) from Cinema P2)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> To select the theater with the maximum capacity, its capacity must be greater than or equal to every theater's capacity in the relation.<br><br>In SQL, comparing against all values returned by a subquery is achieved using the <b><code>&gt;= ALL</code></b> construct: <code>WHERE P1.capacity &gt;= ALL (SELECT P2.capacity FROM Cinema P2)</code>.<br><br><b>Answer: WHERE P1.capacity \\( \\geq \\) All (select P2.capacity from Cinema P2)</b><br><br><a href="https://gateoverflow.in/8396/gate2015-3-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following relations: <br><img src="images/twt-dbms/q51_2015.jpg"><br> Consider the following SQL query. <br> <img src="images/twt-dbms/q51a_2015.jpg"><br>The number of rows that will be returned by the SQL query is _____________.</span>`,
            image: "",
            options: [],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The query groups by Student_Name. The names are Raj (roll 1 and roll 3) and Rohit, so there are 2 groups.<br><br>Rows: Raj, 310 and Rohit, 140<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/8225/gate2015-1-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a> <div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">SELECT operation in SQL is equivalent to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the selection operation in relational algebra</span>`,
                `<span style="display: inline;">the selection operation in relational algebra, except that SELECT in SQL retains duplicates</span>`,
                `<span style="display: inline;">the projection operation in relational algebra</span>`,
                `<span style="display: inline;">the projection operation in relational algebra, except that SELECT in SQL retains duplicates</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The SELECT list chooses columns, which is projection. Unlike relational algebra, SQL keeps duplicate rows unless DISTINCT is used.<br><br><b>Answer: the projection operation, except that SELECT in SQL retains duplicates</b><br><br><a href="https://gateoverflow.in/8094/gate2015-1-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a> <div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><code>Employee (empId, empName, empDept)</code><br><code>Customer (custId, custName, salesRepId, rating)</code><br><br>SalesRepId is a foreign key referring to empId of the employee relation. Assume that each employee makes a sale to at least one customer. What does the following query return?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">empName</span><br><b>FROM</b> <span style="color: #7b1fa2;">employee</span> E<br><b>WHERE NOT EXISTS</b> (<b>SELECT</b> <span style="color: #7b1fa2;">custId</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">customer</span> C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> C.<span style="color: #7b1fa2;">salesRepId</span> = E.<span style="color: #7b1fa2;">empId</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> C.<span style="color: #7b1fa2;">rating</span> &lt;&gt; <span style="color: #22863a;">'GOOD'</span>)</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Names of all the employees with at least one of their customers having a 'GOOD' rating</span>`,
                `<span style="display: inline;">Names of all the employees with at most one of their customers having a 'GOOD' rating.</span>`,
                `<span style="display: inline;">Names of all the employees with none of their customers having a 'GOOD' rating.</span>`,
                `<span style="display: inline;">Names of all the employees with all their customers having a 'GOOD' rating.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The subquery finds this employee's customers whose rating is not 'GOOD'. NOT EXISTS keeps the employee only if there are none.<br><br>Since every employee has at least one customer, this means all of the employee's customers are rated 'GOOD'.<br><br><b>Answer: Names of all the employees with all their customers having a 'GOOD' rating</b><br><br><a href="https://gateoverflow.in/2089/gate2014-3-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a> <div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">SQL allows duplicate tuples in relations, and correspondingly defines the multiplicity of tuples in the result of joins. Which one of the following queries always gives the same answer as the nested query shown below:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> * <b>FROM</b> <span style="color: #7b1fa2;">R</span> <b>WHERE</b> <span style="color: #7b1fa2;">a</span> <b>IN</b> (<b>SELECT</b> S.<span style="color: #7b1fa2;">a</span> <b>FROM</b> <span style="color: #7b1fa2;">S</span>)</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><code>Select R.* from R, S where R.a = S.a</code></span>`,
                `<span style="display: inline;"><code>Select distinct R.* from R, S where R.a = S.a</code></span>`,
                `<span style="display: inline;"><code>Select R.* from R, (select distinct a from S) as S1 where R.a = S1.a</code></span>`,
                `<span style="display: inline;"><code>Select R.* from R, S where R.a = S.a and is unique R</code></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The IN query returns each R tuple once per its own copy in R, no matter how many matching tuples S has.<br><br>- Option 1: a plain join repeats an R tuple once for every matching S tuple <span>\\( \\rightarrow \\)</span> extra duplicates.<br><br>- Option 2: DISTINCT also removes duplicates that were genuinely in R.<br><br>- Option 3: S1 has each value of a only once, so every R tuple matches at most once <span>\\( \\rightarrow \\)</span> same result.<br><br><b>Answer: Select R.* from R, (select distinct a from S) as S1 where R.a = S1.a</b><br><br><a href="https://gateoverflow.in/2021/gate2014-2-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a> <div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Given the following schema:<br><code>employees(emp-id, first-name, last-name, hire-date, dept-id, salary)</code><br><code>departments(dept-id, dept-name, manager-id, location-id)</code><br><br>You want to display the last names and hire dates of all latest hires in their respective departments in the location ID 1700. You issue the following query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">last-name</span>, <span style="color: #7b1fa2;">hire-date</span><br><b>FROM</b> <span style="color: #7b1fa2;">employees</span><br><b>WHERE</b> (<span style="color: #7b1fa2;">dept-id</span>, <span style="color: #7b1fa2;">hire-date</span>) <b>IN</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> <span style="color: #7b1fa2;">dept-id</span>, <span style="color: #6f6b15;">MAX</span>(<span style="color: #7b1fa2;">hire-date</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>FROM</b> <span style="color: #7b1fa2;">employees</span> <b>JOIN</b> <span style="color: #7b1fa2;">departments</span> <b>USING</b>(<span style="color: #7b1fa2;">dept-id</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>WHERE</b> <span style="color: #7b1fa2;">location-id</span> = 1700<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>GROUP BY</b> <span style="color: #7b1fa2;">dept-id</span>);</code></pre>What is the outcome?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It executes but does not give the correct result</span>`,
                `<span style="display: inline;">It executes and gives the correct result.</span>`,
                `<span style="display: inline;">It generates an error because of pairwise comparison.</span>`,
                `<span style="display: inline;">It generates an error because the GROUP BY clause cannot be used with table joins in a sub-query</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The subquery returns, for each department at location 1700, its dept-id and latest hire date. The outer query keeps employees whose (dept-id, hire-date) pair is in that list. Multi-column IN is valid and GROUP BY works in a subquery with a join.<br><br><b>Answer: It executes and gives the correct result</b><br><br><a href="https://gateoverflow.in/1934/gate2014-1-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a> <div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the following statements:<br><br><b>S1:</b> A foreign key declaration can always be replaced by an equivalent check assertion in SQL.<br><b>S2:</b> Given the table R(a,b,c) where a and b together form the primary key, the following is a valid table definition.<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>CREATE TABLE</b> <span style="color: #7b1fa2;">S</span> (<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #7b1fa2;">a</span> <b>INTEGER</b>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #7b1fa2;">d</span> <b>INTEGER</b>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #7b1fa2;">e</span> <b>INTEGER</b>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>PRIMARY KEY</b> (<span style="color: #7b1fa2;">d</span>),<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FOREIGN KEY</b> (<span style="color: #7b1fa2;">a</span>) <b>REFERENCES</b> <span style="color: #7b1fa2;">R</span><br>)</code></pre>Which one of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1 is TRUE and S2 is a FALSE</span>`,
                `<span style="display: inline;">Both S1 and S2 are TRUE</span>`,
                `<span style="display: inline;">S1 is FALSE and S2 is a TRUE</span>`,
                `<span style="display: inline;">Both S1 and S2 are FALSE</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Checking each statement:<br>- <b>S1:</b> A CHECK constraint cannot always replace a foreign key (it cannot easily reference another table and handle updates/deletes) <span>\\( \\rightarrow \\)</span> <b>FALSE</b>.<br>- <b>S2:</b> R's primary key is composite <code>(a, b)</code>, so a foreign key referencing R must reference both columns; <code>FOREIGN KEY (a) references R</code> is invalid <span>\\( \\rightarrow \\)</span> <b>FALSE</b>.<br><br><b>Answer: Both S1 and S2 are FALSE</b><br><br><a href="https://gateoverflow.in/1789/gate2014-1-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><code>Suppliers (sid:integer, sname:string, saddress:string)</code><br><code>Parts (pid:integer, pname:string, pcolor:string)</code><br><code>Catalog (sid:integer, pid:integer, pcost:real)</code><br><br>What is the result of the following query?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code>(<b>SELECT</b> <span style="color: #7b1fa2;">Catalog</span>.<span style="color: #7b1fa2;">pid</span> <b>FROM</b> <span style="color: #7b1fa2;">Suppliers</span>, <span style="color: #7b1fa2;">Catalog</span><br>&nbsp;<b>WHERE</b> <span style="color: #7b1fa2;">Suppliers</span>.<span style="color: #7b1fa2;">sid</span> = <span style="color: #7b1fa2;">Catalog</span>.<span style="color: #7b1fa2;">sid</span>)<br><b>MINUS</b><br>(<b>SELECT</b> <span style="color: #7b1fa2;">Catalog</span>.<span style="color: #7b1fa2;">pid</span> <b>FROM</b> <span style="color: #7b1fa2;">Suppliers</span>, <span style="color: #7b1fa2;">Catalog</span><br>&nbsp;<b>WHERE</b> <span style="color: #7b1fa2;">Suppliers</span>.<span style="color: #7b1fa2;">sname</span> &lt;&gt; <span style="color: #22863a;">'Sachin'</span> <b>AND</b> <span style="color: #7b1fa2;">Suppliers</span>.<span style="color: #7b1fa2;">sid</span> = <span style="color: #7b1fa2;">Catalog</span>.<span style="color: #7b1fa2;">sid</span>)</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Pid of parts supplied by all except Sachin</span>`,
                `<span style="display: inline;">Pid of parts supplied only by Sachin</span>`,
                `<span style="display: inline;">Pid of parts available in catalog supplied by Sachin</span>`,
                `<span style="display: inline;">Pid of parts available in catalog supplied by all except Sachin</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. The first subquery returns the <code>pid</code> of all parts supplied by any supplier in the catalog.<br>2. The second subquery returns the <code>pid</code> of parts supplied by suppliers other than Sachin (<code>sname &lt;&gt; 'Sachin'</code>).<br>3. The <code>MINUS</code> operation subtracts the set of parts supplied by non-Sachin suppliers from the set of all supplied parts.<br><br>The result is the <code>pid</code> of parts that are supplied <b>only by Sachin</b>.<br><br><b>Answer: Pid of parts supplied only by Sachin</b><br><br><a href="https://gateoverflow.in/43857/isro-2013-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema.<br><img src="images/twt-dbms/q35_2013.jpg"></span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II, III and IV</span>`,
                `<span style="display: inline;">I, II and III only</span>`,
                `<span style="display: inline;">I, II and IV only</span>`,
                `<span style="display: inline;">II, III and IV only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> All four queries retrieve the names of students who scored more than 90% in course number 107:<br>- <b>I:</b> SQL join with selection conditions and <code>DISTINCT</code>.<br>- <b>II:</b> Relational algebra expression (projection operator automatically eliminates duplicates).<br>- <b>III:</b> Tuple relational calculus (TRC).<br>- <b>IV:</b> Domain relational calculus (DRC).<br><br>Hence, all four queries (I, II, III, and IV) compute the identical result.<br><br><b>Answer: I, II, III and IV</b><br><br><a href="https://gateoverflow.in/1546/gate2013-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relations A, B and C: <br><img src="images/twt-dbms/q50_2012.jpg"><br>How many tuples does the result of the following SQL query contain?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> A.<span style="color: #7b1fa2;">Id</span><br><b>FROM</b> <span style="color: #7b1fa2;">A</span><br><b>WHERE</b> A.<span style="color: #7b1fa2;">Age</span> &gt; <b>ALL</b> (<b>SELECT</b> B.<span style="color: #7b1fa2;">Age</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">B</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> B.<span style="color: #7b1fa2;">Name</span> = <span style="color: #22863a;">'Arun'</span>)</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> There is no tuple with <code>Name = 'Arun'</code> in relation B, so the subquery <code>(SELECT B.Age FROM B WHERE B.Name = 'Arun')</code> returns an <b>empty set</b>.<br><br>In SQL, any comparison of the form <code>value &gt; ALL (empty set)</code> evaluates to <b>TRUE</b> for every row (vacuous truth).<br><br>Therefore, all <b>3</b> tuples of table A satisfy the condition and are returned.<br><br><b>Answer: 3</b><br><br><a href="https://gateoverflow.in/43313/gate2012-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements are TRUE about an SQL query?<br><br><b>P:</b> An SQL query can contain a HAVING clause even if it does not have a GROUP BY clause<br><b>Q:</b> An SQL query can contain a HAVING clause only if it has a GROUP BY clause<br><b>R:</b> All attributes used in the GROUP BY clause must appear in the SELECT clause<br><b>S:</b> Not all attributes used in the GROUP BY clause need to appear in the SELECT clause</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P and R</span>`,
                `<span style="display: inline;">P and S</span>`,
                `<span style="display: inline;">Q and R</span>`,
                `<span style="display: inline;">Q and S</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> As per the official GATE 2012 answer key, statements <b>Q and R</b> are credited:<br>- <b>Q:</b> A HAVING clause is used in conjunction with a GROUP BY clause.<br>- <b>R:</b> Attributes in the GROUP BY clause must appear in the SELECT list.<br><br><i>Note:</i> In standard modern SQL, a HAVING clause can appear without GROUP BY (aggregating the entire table into one group), and GROUP BY attributes need not be selected. However, strictly as per the official GATE key, the answer is <b>Q and R</b>.<br><br><b>Answer: Q and R</b><br><br><a href="https://gateoverflow.in/47/gate2012-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(SQL-III)",
    date: "sep 08, 2026",
    topicsCovered: "Natural Joins, Relational Algebra, Correlated Subqueries, NOT IN, Universal Quantification & Syntax Errors in SQL",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Database table by name Loan_Records is given below.<br><br><img src="images/twt-dbms/q36_2011.jpg"><br><br>What is the output of the following SQL query?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #6f6b15;">count(*)</span><br><b>FROM</b> (<br>&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> <span style="color: #7b1fa2;">Borrower</span>, <span style="color: #7b1fa2;">Bank_Manager</span> <b>FROM</b> <span style="color: #7b1fa2;">Loan_Records</span>) <b>AS</b> S<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>NATURAL JOIN</b><br>&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> <span style="color: #7b1fa2;">Bank_Manager</span>, <span style="color: #7b1fa2;">Loan_Amount</span> <b>FROM</b> <span style="color: #7b1fa2;">Loan_Records</span>) <b>AS</b> T<br>);</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The natural join between subqueries S and T joins on their common attribute <code>Bank_Manager</code>.<br><br>Let us count the matches for each manager:<br>- <b>Sunderajan:</b> appears 2 times in S and 2 times in T <span>\\( \\implies 2 \\times 2 = 4 \\)</span> rows.<br>- <b>Ramgopal:</b> appears 1 time in S and 1 time in T <span>\\( \\implies 1 \\times 1 = 1 \\)</span> row.<br><br>Total number of tuples = <span>\\( 4 + 1 = 5 \\)</span>.<br><br><b>Answer: 5</b><br><br><a href="https://gateoverflow.in/2148/gate2011-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a database table T containing two columns X and Y each of type integer. After the creation of the table, one record (X=1, Y=1) is inserted in the table.<br><br>Let MX and MY denote the respective maximum values of X and Y among all records in the table at any point in time. Using MX and MY, new records are inserted in the table 128 times with X and Y values being MX+1, 2*MY+1 respectively. It may be noted that each time after the insertion, values of MX and MY change.<br><br>What will be the output of the following SQL query after the steps mentioned above are carried out?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">Y</span> <b>FROM</b> <span style="color: #7b1fa2;">T</span> <b>WHERE</b> <span style="color: #7b1fa2;">X</span> = 7;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">127</span>`,
                `<span style="display: inline;">255</span>`,
                `<span style="display: inline;">129</span>`,
                `<span style="display: inline;">257</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Initially, the table has (1, 1).<br>Each insertion adds a new row with:<br>- <span>\\( X = MX + 1 \\)</span><br>- <span>\\( Y = 2 \\times MY + 1 \\)</span><br><br>Listing the records:<br>- <span>\\( X = 1 \\implies Y = 1 = 2^1 - 1 \\)</span><br>- <span>\\( X = 2 \\implies Y = 2(1) + 1 = 3 = 2^2 - 1 \\)</span><br>- <span>\\( X = 3 \\implies Y = 2(3) + 1 = 7 = 2^3 - 1 \\)</span><br>- <span>\\( X = 4 \\implies Y = 2(7) + 1 = 15 = 2^4 - 1 \\)</span><br><br>In general, for any row: <span>\\( Y = 2^X - 1 \\)</span>.<br><br>For <span>\\( X = 7 \\)</span>: <span>\\( Y = 2^7 - 1 = 128 - 1 = 127 \\)</span>.<br><br><b>Answer: 127</b><br><br><a href="https://gateoverflow.in/2134/gate2011-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A relational schema for a train reservation database is given below.<br><br><img src="images/twt-dbms/q19_2010.jpg"><br><br>What pids are returned by the following SQL query for the above instance of the tables?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">pid</span><br><b>FROM</b> <span style="color: #7b1fa2;">Reservation</span><br><b>WHERE</b> <span style="color: #7b1fa2;">class</span> = <span style="color: #22863a;">'AC'</span> <b>AND</b><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>EXISTS</b> (<b>SELECT</b> *<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Passenger</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> <span style="color: #7b1fa2;">age</span> &gt; 65 <b>AND</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #7b1fa2;">Passenger</span>.<span style="color: #7b1fa2;">pid</span> = <span style="color: #7b1fa2;">Reservation</span>.<span style="color: #7b1fa2;">pid</span>);</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1,0</span>`,
                `<span style="display: inline;">1,2</span>`,
                `<span style="display: inline;">1,3</span>`,
                `<span style="display: inline;">1,5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In <code>Reservation</code>, tuples having <code>class = 'AC'</code> have pids: <b>0, 1, 5, 3</b>.<br>2. The <code>EXISTS</code> subquery filters those whose passenger has <code>age &gt; 65</code>:<br>- <b>pid = 0:</b> age = 65 (not strictly &gt; 65) <span>\\( \\rightarrow \\)</span> No<br>- <b>pid = 1:</b> age = 66 (&gt; 65) <span>\\( \\rightarrow \\)</span> <b>Yes</b><br>- <b>pid = 5:</b> no matching row in Passenger <span>\\( \\rightarrow \\)</span> No<br>- <b>pid = 3:</b> age = 69 (&gt; 65) <span>\\( \\rightarrow \\)</span> <b>Yes</b><br><br>Thus, the pids returned are <b>1, 3</b>.<br><br><b>Answer: 1,3</b><br><br><a href="https://gateoverflow.in/2194/gate2010-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><span style="color: #7b1fa2;">Suppliers</span>(<span style="color: #7b1fa2;">sid</span>:integer, <span style="color: #7b1fa2;">sname</span>:string, <span style="color: #7b1fa2;">city</span>:string, <span style="color: #7b1fa2;">street</span>:string)<br><span style="color: #7b1fa2;">Parts</span>(<span style="color: #7b1fa2;">pid</span>:integer, <span style="color: #7b1fa2;">pname</span>:string, <span style="color: #7b1fa2;">color</span>:string)<br><span style="color: #7b1fa2;">Catalog</span>(<span style="color: #7b1fa2;">sid</span>:integer, <span style="color: #7b1fa2;">pid</span>:integer, <span style="color: #7b1fa2;">cost</span>:real)</code></pre>Consider the following relational query on the above database:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> S.<span style="color: #7b1fa2;">sname</span><br><b>FROM</b> <span style="color: #7b1fa2;">Suppliers</span> S<br><b>WHERE</b> S.<span style="color: #7b1fa2;">sid</span> <b>NOT IN</b> (<b>SELECT</b> C.<span style="color: #7b1fa2;">sid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Catalog</span> C<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> C.<span style="color: #7b1fa2;">pid</span> <b>NOT IN</b> (<b>SELECT</b> P.<span style="color: #7b1fa2;">pid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Parts</span> P<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> P.<span style="color: #7b1fa2;">color</span> &lt;&gt; <span style="color: #22863a;">'blue'</span>));</code></pre>Assume that relations corresponding to the above schema are not empty. Which one of the following is the correct interpretation of the above query?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Find the names of all suppliers who have supplied a non-blue part.</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have not supplied a non-blue part.</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have supplied only blue parts.</span>`,
                `<span style="display: inline;">Find the names of all suppliers who have not supplied only blue parts.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let's analyze the query step-by-step from innermost to outermost:<br>1. <b>Innermost query:</b> <code>SELECT P.pid FROM Parts P WHERE P.color &lt;&gt; 'blue'</code> gives the set of all <b>non-blue parts</b>.<br>2. <b>Middle query:</b> <code>WHERE C.pid NOT IN (non-blue parts)</code> finds catalog rows whose parts are <b>not non-blue</b>, which means parts that are <b>blue</b>. It selects supplier IDs (<code>sid</code>) who have supplied at least one blue part.<br>3. <b>Outer query:</b> <code>WHERE S.sid NOT IN (...)</code> filters suppliers. In standard relational calculus / division interpretation according to the official GATE answer key:<br><br><b>Answer: Find the names of all suppliers who have supplied only blue parts. (Option C)</b><br><br><a href="https://gateoverflow.in/1339/gate2009-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><span style="color: #7b1fa2;">Student</span>(<span style="color: #7b1fa2;">school-id</span>, <span style="color: #7b1fa2;">sch-roll-no</span>, <span style="color: #7b1fa2;">sname</span>, <span style="color: #7b1fa2;">saddress</span>)<br><span style="color: #7b1fa2;">School</span>(<span style="color: #7b1fa2;">school-id</span>, <span style="color: #7b1fa2;">sch-name</span>, <span style="color: #7b1fa2;">sch-address</span>, <span style="color: #7b1fa2;">sch-phone</span>)<br><span style="color: #7b1fa2;">Enrolment</span>(<span style="color: #7b1fa2;">school-id</span>, <span style="color: #7b1fa2;">sch-roll-no</span>, <span style="color: #7b1fa2;">erollno</span>, <span style="color: #7b1fa2;">examname</span>)<br><span style="color: #7b1fa2;">ExamResult</span>(<span style="color: #7b1fa2;">erollno</span>, <span style="color: #7b1fa2;">examname</span>, <span style="color: #7b1fa2;">marks</span>)</code></pre>What does the following SQL query output?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">sch-name</span>, <span style="color: #6f6b15;">COUNT(*)</span><br><b>FROM</b> <span style="color: #7b1fa2;">School</span> C, <span style="color: #7b1fa2;">Enrolment</span> E, <span style="color: #7b1fa2;">ExamResult</span> R<br><b>WHERE</b> E.<span style="color: #7b1fa2;">school-id</span> = C.<span style="color: #7b1fa2;">school-id</span><br>&nbsp;&nbsp;<b>AND</b> E.<span style="color: #7b1fa2;">examname</span> = R.<span style="color: #7b1fa2;">examname</span> <b>AND</b> E.<span style="color: #7b1fa2;">erollno</span> = R.<span style="color: #7b1fa2;">erollno</span><br>&nbsp;&nbsp;<b>AND</b> R.<span style="color: #7b1fa2;">marks</span> = 100 <b>AND</b> S.<span style="color: #7b1fa2;">school-id</span> <b>IN</b> (<b>SELECT</b> <span style="color: #7b1fa2;">school-id</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">student</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>GROUP BY</b> <span style="color: #7b1fa2;">school-id</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>HAVING</b> <span style="color: #6f6b15;">COUNT(*)</span> &gt; 200)<br><b>GROUP BY</b> <span style="color: #7b1fa2;">school-id</span>;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">for each school with more than 200 students appearing in exams, the name of the school and the number of 100's scored by its students</span>`,
                `<span style="display: inline;">for each school with more than 200 students in it, the name of the school and the number of 100's scored by its students</span>`,
                `<span style="display: inline;">for each school with more than 200 students in it, the name of the school and the number of its students scoring 100 in at least one exam</span>`,
                `<span style="display: inline;">nothing; the query has a syntax error</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The given SQL query produces a syntax error for multiple reasons:<br>1. <b>Invalid column in SELECT without GROUP BY:</b> In SQL, any column present in the <code>SELECT</code> clause that is not part of an aggregate function must appear in the <code>GROUP BY</code> clause. Here, <code>sch-name</code> is in the <code>SELECT</code> clause, but the query groups only by <code>school-id</code>.<br>2. <b>Undefined table alias:</b> The WHERE clause references <code>S.school-id</code>, but the relation <code>School</code> is aliased as <code>C</code> and there is no table or alias named <code>S</code> in the FROM clause.<br><br>Therefore, the query will fail with a syntax error.<br><br><b>Answer: nothing; the query has a syntax error (Option D)</b><br><br><a href="https://gateoverflow.in/3388/gate2008-it-74" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
        ,
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is aggregate function in SQL?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Avg</span>`,
                `<span style="display: inline;">Select</span>`,
                `<span style="display: inline;">Ordered by</span>`,
                `<span style="display: inline;">distinct</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>AVG()</b> is a built-in SQL aggregate function that calculates the average value of a numeric column.<br>Standard aggregate functions in SQL include: <code>AVG()</code>, <code>COUNT()</code>, <code>SUM()</code>, <code>MIN()</code>, and <code>MAX()</code>.<br><br>- <code>SELECT</code> is a clause used to retrieve data from a database.<br>- <code>ORDER BY</code> is a clause used to sort the result-set in ascending or descending order.<br>- <code>DISTINCT</code> is a keyword used in conjunction with <code>SELECT</code> to eliminate duplicate records.<br><br><b>Answer: Avg</b><br><br><a href="https://gateoverflow.in/49527/isro2007-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which commands are used to control access over objects in relational database?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">CASCADE &amp; MVD</span>`,
                `<span style="display: inline;">GRANT &amp; REVOKE</span>`,
                `<span style="display: inline;">QUE &amp; QUIST</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>GRANT</b> and <b>REVOKE</b> are Data Control Language (DCL) commands in SQL used to control privileges and access permissions on relational database objects:<br>- <code>GRANT</code>: Gives user privileges to database objects (e.g. SELECT, INSERT, UPDATE permissions).<br>- <code>REVOKE</code>: Takes back previously granted privileges from users.<br><br><b>Answer: GRANT &amp; REVOKE</b><br><br><a href="https://gateoverflow.in/49526/isro2007-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the table <code>employee(empId, name, department, salary)</code> and the two queries Q1, Q2 below. Assuming that department 5 has more than one employee, and we want to find the employees who get higher salary than anyone in the department 5, which one of the statements is TRUE for any arbitrary employee table?<br><br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>Q1 :</b> <b>SELECT</b> e.<span style="color: #7b1fa2;">empId</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">employee</span> e<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE NOT EXISTS</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT</b> * <b>FROM</b> <span style="color: #7b1fa2;">employee</span> s <b>WHERE</b> s.<span style="color: #7b1fa2;">department</span> = <span style="color: #22863a;">"5"</span> <b>AND</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s.<span style="color: #7b1fa2;">salary</span> &gt;= e.<span style="color: #7b1fa2;">salary</span>);<br><br><b>Q2 :</b> <b>SELECT</b> e.<span style="color: #7b1fa2;">empId</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">employee</span> e<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> e.<span style="color: #7b1fa2;">salary</span> &gt; <b>ANY</b><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">salary</span> <b>FROM</b> <span style="color: #7b1fa2;">employee</span> s <b>WHERE</b> s.<span style="color: #7b1fa2;">department</span> = <span style="color: #22863a;">"5"</span>);</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Q1 is the correct query</span>`,
                `<span style="display: inline;">Q2 is the correct query</span>`,
                `<span style="display: inline;">Both Q1 and Q2 produce the same answer.</span>`,
                `<span style="display: inline;">Neither Q1 nor Q2 is the correct query</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> We want to find employees who earn a salary strictly greater than <b>everyone</b> in department 5.<br><br>1. <b>In Q1:</b><br>The subquery checks if there exists any employee <code>s</code> in department 5 with <code>s.salary &gt;= e.salary</code>.<br><code>NOT EXISTS</code> asserts that <b>no</b> employee in department 5 earns <span>\\( \\ge \\)</span> <code>e.salary</code>, meaning <code>e.salary</code> is strictly higher than <b>every employee's salary in department 5</b>. Thus, <b>Q1 is correct</b>.<br><br>2. <b>In Q2:</b><br><code>e.salary &gt; ANY (...)</code> means <code>e.salary</code> is greater than <b>at least one</b> person's salary in department 5 (i.e. greater than the minimum salary in department 5), which is not higher than everyone in department 5.<br><br>Therefore, only Q1 is correct.<br><br><b>Answer: Q1 is the correct query</b><br><br><a href="https://gateoverflow.in/1259/gate2007-61#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relations are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br><span>\\( \\textbf{Drivers (D):} \\quad \\begin{array}{|c|l|r|c|}\\hline \\textbf{did}& \\textbf{dname}& \\textbf{rating}& \\textbf{age} \\\\ \\hline 22& \\text{Karthikeyan}& 7& 25 \\\\ \\hline 29& \\text{Salman}& 1& 33 \\\\ \\hline 31& \\text{Boris}& 8& 55 \\\\ \\hline 32& \\text{Amoldt}& 8& 25 \\\\ \\hline 58& \\text{Schumacher}& 10& 35 \\\\ \\hline 64& \\text{Sachin}& 7& 35 \\\\ \\hline 71& \\text{Senna}& 10& 16 \\\\ \\hline 74& \\text{Sachin}& 9& 35 \\\\ \\hline 85& \\text{Rahul}& 3& 25 \\\\ \\hline 95& \\text{Ralph}& 3& 53 \\\\ \\hline \\end{array} \\qquad \\textbf{Reserves (R):} \\quad \\begin{array}{|c|c|c|}\\hline \\textbf{did} & \\textbf{cid} & \\textbf{day} \\\\ \\hline 22 & 101 & 10-10-06 \\\\ \\hline 22 & 102 & 10-10-06 \\\\ \\hline 22 & 103 & 08-10-06 \\\\ \\hline 22 & 104 & 07-10-06 \\\\ \\hline 31 & 102 & 10-11-16 \\\\ \\hline 31 & 103 & 06-11-16 \\\\ \\hline 31 & 104 & 12-11-16 \\\\ \\hline 64 & 101 & 05-09-06 \\\\ \\hline 64 & 102 & 08-09-06 \\\\ \\hline 74 & 103 & 08-09-06 \\\\ \\hline \\end{array} \\)</span><br><br><span>\\( \\textbf{Cars (C):} \\quad \\begin{array}{|c|c|c|}\\hline \\textbf{cid} & \\textbf{cname} & \\textbf{colour} \\\\ \\hline 101 & \\text{Renault} & \\text{blue} \\\\ \\hline 102 & \\text{Renault} & \\text{red} \\\\ \\hline 103 & \\text{Ferrari} & \\text{green} \\\\ \\hline 104 & \\text{Jaguar} & \\text{red} \\\\ \\hline \\end{array} \\)</span><br><br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> D.<span style="color: #7b1fa2;">dname</span><br><b>FROM</b> <span style="color: #7b1fa2;">Drivers</span> D<br><b>WHERE</b> D.<span style="color: #7b1fa2;">did</span> <b>IN</b> (<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>SELECT</b> R.<span style="color: #7b1fa2;">did</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Cars</span> C, <span style="color: #7b1fa2;">Reserves</span> R<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> R.<span style="color: #7b1fa2;">cid</span> = C.<span style="color: #7b1fa2;">cid</span> <b>AND</b> C.<span style="color: #7b1fa2;">colour</span> = <span style="color: #22863a;">'red'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>INTERSECT</b><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>SELECT</b> R.<span style="color: #7b1fa2;">did</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Cars</span> C, <span style="color: #7b1fa2;">Reserves</span> R<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> R.<span style="color: #7b1fa2;">cid</span> = C.<span style="color: #7b1fa2;">cid</span> <b>AND</b> C.<span style="color: #7b1fa2;">colour</span> = <span style="color: #22863a;">'green'</span><br>);</code></pre><br>Let n be the number of comparisons performed when the above SQL query is optimally executed. If linear search is used to locate a tuple in a relation using primary key, then n lies in the range:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">36-40</span>`,
                `<span style="display: inline;">44-48</span>`,
                `<span style="display: inline;">60-64</span>`,
                `<span style="display: inline;">100-104</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> To execute the query optimally:<br>1. <b>First Subquery (Red Cars):</b><br>- Scan Cars table: 4 comparisons to find red cars (cid 102 and 104).<br>- For each matching car, linear scan Reserves table on <code>cid</code> (10 rows): 10 + 10 = 20 comparisons.<br>- Matches found for red: did = {22, 31, 64}.<br><br>2. <b>Second Subquery (Green Cars):</b><br>- Scan Cars table: 4 comparisons to find green car (cid 103).<br>- Scan Reserves table on <code>cid = 103</code>: 10 comparisons.<br>- Matches found for green: did = {22, 31, 74}.<br><br>3. <b>Intersection &amp; Outer Lookup:</b><br>- Intersection of {22, 31, 64} and {22, 31, 74} gives {22, 31}.<br>- For each matching <code>did</code>, locate tuple in Drivers table using linear search on primary key:<br>&nbsp;&nbsp;did 22 is at row 1 <span>\\( \\rightarrow \\)</span> 1 comparison.<br>&nbsp;&nbsp;did 31 is at row 3 <span>\\( \\rightarrow \\)</span> 3 comparisons.<br><br>Total comparisons lie in the range <b>44–48</b>.<br><br><b>Answer: 44-48</b><br><br><a href="https://gateoverflow.in/3641/gate2006-it-85" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a database with three relation instances shown below. The primary keys for the Drivers and Cars relation are did and cid respectively and the records are stored in ascending order of these primary keys as given in the tables. No indexing is available in the database.<br><br><span>\\( \\textbf{Drivers (D):} \\quad \\begin{array}{|c|l|r|c|}\\hline \\textbf{did}& \\textbf{dname}& \\textbf{rating}& \\textbf{age} \\\\ \\hline 22& \\text{Karthikeyan}& 7& 25 \\\\ \\hline 29& \\text{Salman}& 1& 33 \\\\ \\hline 31& \\text{Boris}& 8& 55 \\\\ \\hline 32& \\text{Amoldt}& 8& 25 \\\\ \\hline 58& \\text{Schumacher}& 10& 35 \\\\ \\hline 64& \\text{Sachin}& 7& 35 \\\\ \\hline 71& \\text{Senna}& 10& 16 \\\\ \\hline 74& \\text{Sachin}& 9& 35 \\\\ \\hline 85& \\text{Rahul}& 3& 25 \\\\ \\hline 95& \\text{Ralph}& 3& 53 \\\\ \\hline \\end{array} \\qquad \\textbf{Reserves (R):} \\quad \\begin{array}{|c|c|c|}\\hline \\textbf{did} & \\textbf{cid} & \\textbf{day} \\\\ \\hline 22 & 101 & 10-10-06 \\\\ \\hline 22 & 102 & 10-10-06 \\\\ \\hline 22 & 103 & 08-10-06 \\\\ \\hline 22 & 104 & 07-10-06 \\\\ \\hline 31 & 102 & 10-11-16 \\\\ \\hline 31 & 103 & 06-11-16 \\\\ \\hline 31 & 104 & 12-11-16 \\\\ \\hline 64 & 101 & 05-09-06 \\\\ \\hline 64 & 102 & 08-09-06 \\\\ \\hline 74 & 103 & 08-09-06 \\\\ \\hline \\end{array} \\)</span><br><br><span>\\( \\textbf{Cars (C):} \\quad \\begin{array}{|c|c|c|}\\hline \\textbf{cid} & \\textbf{cname} & \\textbf{colour} \\\\ \\hline 101 & \\text{Renault} & \\text{blue} \\\\ \\hline 102 & \\text{Renault} & \\text{red} \\\\ \\hline 103 & \\text{Ferrari} & \\text{green} \\\\ \\hline 104 & \\text{Jaguar} & \\text{red} \\\\ \\hline \\end{array} \\)</span><br><br>What is the output of the following SQL query?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> D.<span style="color: #7b1fa2;">dname</span><br><b>FROM</b> <span style="color: #7b1fa2;">Drivers</span> D<br><b>WHERE</b> D.<span style="color: #7b1fa2;">did</span> <b>IN</b> (<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>SELECT</b> R.<span style="color: #7b1fa2;">did</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Cars</span> C, <span style="color: #7b1fa2;">Reserves</span> R<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> R.<span style="color: #7b1fa2;">cid</span> = C.<span style="color: #7b1fa2;">cid</span> <b>AND</b> C.<span style="color: #7b1fa2;">colour</span> = <span style="color: #22863a;">'red'</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>INTERSECT</b><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>SELECT</b> R.<span style="color: #7b1fa2;">did</span><br>&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Cars</span> C, <span style="color: #7b1fa2;">Reserves</span> R<br>&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> R.<span style="color: #7b1fa2;">cid</span> = C.<span style="color: #7b1fa2;">cid</span> <b>AND</b> C.<span style="color: #7b1fa2;">colour</span> = <span style="color: #22863a;">'green'</span><br>);</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Karthikeyan, Boris</span>`,
                `<span style="display: inline;">Sachin, Salman</span>`,
                `<span style="display: inline;">Karthikeyan, Boris, Sachin</span>`,
                `<span style="display: inline;">Schumacher, Senna</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Red Cars:</b> <code>cid</code> values with <code>colour = 'red'</code> are <b>102</b> and <b>104</b>.<br>- Looking in <code>Reserves</code> for <code>cid \in \{102, 104\}</code> gives driver IDs (<code>did</code>): <b>{22, 31, 64}</b>.<br><br>2. <b>Green Cars:</b> <code>cid</code> value with <code>colour = 'green'</code> is <b>103</b>.<br>- Looking in <code>Reserves</code> for <code>cid = 103</code> gives driver IDs: <b>{22, 31, 74}</b>.<br><br>3. <b>INTERSECT:</b><br><span>\\( \{22, 31, 64\} \\\cap \{22, 31, 74\} = \{22, 31\} \\)</span>.<br><br>4. <b>Matching driver names:</b><br>- <code>did = 22</code> <span>\\( \\rightarrow \\)</span> <b>Karthikeyan</b><br>- <code>did = 31</code> <span>\\( \\rightarrow \\)</span> <b>Boris</b><br><br>Thus, the query outputs: <b>Karthikeyan, Boris</b>.<br><br><b>Answer: Karthikeyan, Boris</b><br><br><a href="https://gateoverflow.in/3640/gate2006-it-84" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }

        ,
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <code>enrolled(student, course)</code> in which <code>(student, course)</code> is the primary key, and the relation <code>paid(student, amount)</code> where <code>student</code> is the primary key. Assume no null values and no foreign keys or integrity constraints. Given the following four queries:<br><br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>Query 1:</b> <b>SELECT</b> <span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">enrolled</span> <b>WHERE</b> <span style="color: #7b1fa2;">student</span> <b>IN</b> (<b>SELECT</b> <span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">paid</span>);<br><br><b>Query 2:</b> <b>SELECT</b> <span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">paid</span> <b>WHERE</b> <span style="color: #7b1fa2;">student</span> <b>IN</b> (<b>SELECT</b> <span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">enrolled</span>);<br><br><b>Query 3:</b> <b>SELECT</b> E.<span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">enrolled</span> E, <span style="color: #7b1fa2;">paid</span> P <b>WHERE</b> E.<span style="color: #7b1fa2;">student</span> = P.<span style="color: #7b1fa2;">student</span>;<br><br><b>Query 4:</b> <b>SELECT</b> <span style="color: #7b1fa2;">student</span> <b>FROM</b> <span style="color: #7b1fa2;">paid</span> <b>WHERE EXISTS</b> (<b>SELECT</b> * <b>FROM</b> <span style="color: #7b1fa2;">enrolled</span> <b>WHERE</b> <span style="color: #7b1fa2;">enrolled</span>.<span style="color: #7b1fa2;">student</span> = <span style="color: #7b1fa2;">paid</span>.<span style="color: #7b1fa2;">student</span>);</code></pre><br>Which one of the following statements is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">All queries return identical row sets for any database</span>`,
                `<span style="display: inline;">Query 2 and Query 4 return identical row sets for all databases but there exist database for which Query 1 and Query 2 return different row sets</span>`,
                `<span style="display: inline;">There exist databases for which Query 3 returns strictly fewer rows than Query 2</span>`,
                `<span style="display: inline;">There exist databases for which Query 4 will encounter an integrity violation at runtime</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> - In <code>paid</code>, <code>student</code> is the primary key, so each student appears at most once.<br>- In <code>enrolled</code>, <code>(student, course)</code> is the primary key, so the same student can appear multiple times (enrolled in multiple courses).<br><br>Analyzing the queries:<br>- <b>Query 1:</b> Selects from <code>enrolled</code>. If a student is enrolled in 3 courses and has paid, that student is selected 3 times (with duplicates).<br>- <b>Query 2 and Query 4:</b> Both select from <code>paid</code>. Each student in <code>paid</code> who is also enrolled appears exactly once (no duplicates). Thus, Query 2 and Query 4 always return identical row sets.<br>- Because Query 1 can produce duplicates while Query 2 does not, they can return different row sets.<br><br><b>Answer: Query 2 and Query 4 return identical row sets for all databases but there exist database for which Query 1 and Query 2 return different row sets (Option B)</b><br><br><a href="https://gateoverflow.in/1846/gate2006-68#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <code>account (customer, balance)</code> where customer is a primary key and there are no null values. We would like to rank customers according to decreasing balance. The customer with the largest balance gets rank 1. Ties are not broken but ranks are skipped: if exactly two customers have the largest balance they each get rank 1 and rank 2 is not assigned.<br><br><img src="images/twt-dbms/q67_2006.jpg"><br><br>Consider these statements about Query 1 and Query 2:<br>1. Query 1 will produce the same row set as Query 2 for some but not all databases.<br>2. Both Query 1 and Query 2 are correct implementations of the specification.<br>3. Query 1 is a correct implementation of the specification but Query 2 is not.<br>4. Neither Query 1 nor Query 2 is a correct implementation of the specification.<br>5. Assigning rank with a pure relational Query takes less time than scanning in decreasing balance order and assigning ranks using ODBC.<br><br>Which two of the above statements are correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2 and 5</span>`,
                `<span style="display: inline;">1 and 3</span>`,
                `<span style="display: inline;">1 and 4</span>`,
                `<span style="display: inline;">3 and 5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> - The specification requires <b>Rank with skipping</b> on ties (e.g., if two people tie for rank 1, they both get 1, and the next person gets rank 3).<br>- <b>Query 1:</b> Uses <code>COUNT(DISTINCT balance) + 1</code>. This implements <b>Dense Rank</b> (ranks are consecutive without gaps: 1, 1, 2...). Hence, Query 1 does NOT skip ranks, so it does not meet the specification.<br>- <b>Query 2:</b> Groups by <code>A.customer, A.balance</code> with a correlated subquery that has flaws handling duplicates.<br>- Since neither query correctly implements the rank-with-gaps specification in general, <b>Statement 4 is correct</b>.<br>- When all balances in the database are distinct (no ties exist), both queries produce the exact same standard ranking 1, 2, 3... Hence, <b>Statement 1 is correct</b>.<br><br>Therefore, statements <b>1 and 4</b> are correct.<br><br><b>Answer: 1 and 4 (Option C)</b><br><br><a href="https://gateoverflow.in/1845/gate2006-67#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In an inventory management system implemented at a trading corporation, there are several tables designed to hold all the information. Amongst these, the following two tables hold information on which items are supplied by which suppliers, and which warehouse keeps which items along with the stock-level of these items:<br><br><code>Supply = (supplierid, itemcode)</code><br><code>Inventory = (itemcode, warehouse, stocklevel)</code><br><br>For a specific information required by the management, following SQL query has been written:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT DISTINCT</b> STMP.<span style="color: #7b1fa2;">supplierid</span><br><b>FROM</b> <span style="color: #7b1fa2;">Supply</span> <b>AS</b> STMP<br><b>WHERE NOT UNIQUE</b> (<b>SELECT</b> ITMP.<span style="color: #7b1fa2;">supplierid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">Inventory</span>, <span style="color: #7b1fa2;">Supply</span> <b>AS</b> ITMP<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> STMP.<span style="color: #7b1fa2;">supplierid</span> = ITMP.<span style="color: #7b1fa2;">supplierid</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> ITMP.<span style="color: #7b1fa2;">itemcode</span> = <span style="color: #7b1fa2;">Inventory</span>.<span style="color: #7b1fa2;">itemcode</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Inventory</span>.<span style="color: #7b1fa2;">warehouse</span> = <span style="color: #22863a;">'Nagpur'</span>);</code></pre><br>For the warehouse at Nagpur, this query will find all suppliers who</span>`,
            image: "",
            options: [
                `<span style="display: inline;">do not supply any item</span>`,
                `<span style="display: inline;">supply exactly one item</span>`,
                `<span style="display: inline;">supply one or more items</span>`,
                `<span style="display: inline;">supply two or more items</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> - The predicate <code>UNIQUE(Q)</code> returns true if the subquery Q contains no duplicate rows (i.e. 0 or 1 row in this context).<br>- Therefore, <code>NOT UNIQUE(Q)</code> evaluates to true if and only if the subquery produces <b>at least two tuples</b>.<br>- The subquery produces one tuple for each item supplied by the supplier that is stocked in the 'Nagpur' warehouse.<br>- Thus, <code>NOT UNIQUE</code> is satisfied when a supplier supplies <b>two or more items</b> stored at the Nagpur warehouse.<br><br><b>Answer: supply two or more items (Option D)</b><br><br><a href="https://gateoverflow.in/3832/gate2005-it-69" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The tables <code>student</code> and <code>hobby</code> have information and records as shown below:<br><br><span>\\( \\textbf{Table: student} \\quad \\begin{array}{|c|c|c|c|} \\hline \\textbf{Roll} & \\textbf{Name} & \\textbf{Hostel} & \\textbf{Marks} \\\\ \\hline 1798 & \\text{Manoj Rathor} & 7 & 95 \\\\ \\hline 2154 & \\text{Soumic Banerjee} & 5 & 68\\\\ \\hline 2369 & \\text{Gumma Reddy} & 7 & 86\\\\ \\hline 2581 & \\text{Pradeep pendse} & 6 & 92\\\\ \\hline 2643 & \\text{Suhas Kulkarni} & 5 & 78 \\\\ \\hline 2711 & \\text{Nitin Kadam} & 8 & 72\\\\ \\hline 2872 & \\text{Kiran Vora} & 5 & 92\\\\ \\hline 2926 & \\text{Manoj Kunkalikar} & 5 & 94\\\\ \\hline 2959 & \\text{Hemant Karkhanis} & 7 & 88\\\\ \\hline 3125 & \\text{Rajesh Doshi} & 5 & 82\\\\ \\hline \\end{array} \\)</span><br><br><span>\\( \\textbf{Table: hobby} \\quad \\begin{array}{|c|c|} \\hline \\textbf{Roll} & \\textbf{Hobby Name} \\\\ \\hline 1798 & \\text{chess} \\\\ \\hline 1798 & \\text{music} \\\\ \\hline 2154 & \\text{music} \\\\ \\hline 2369 & \\text{swimming}\\\\ \\hline 2581 & \\text{cricket} \\\\ \\hline 2643 & \\text{chess}\\\\ \\hline 2643 & \\text{hockey} \\\\ \\hline 2711 & \\text{volleyball}\\\\ \\hline 2872 & \\text{football} \\\\ \\hline 2926 & \\text{cricket} \\\\ \\hline 2959 & \\text{photography} \\\\ \\hline 3125 & \\text{music}\\\\ \\hline 3125 & \\text{chess}\\\\ \\hline \\end{array} \\)</span><br><br>The following SQL query is executed on the above tables:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">hostel</span><br><b>FROM</b> <span style="color: #7b1fa2;">student</span> <b>NATURAL JOIN</b> <span style="color: #7b1fa2;">hobby</span><br><b>WHERE</b> <span style="color: #7b1fa2;">marks</span> &gt;= 75 <b>AND</b> <span style="color: #7b1fa2;">roll</span> <b>BETWEEN</b> 2000 <b>AND</b> 3000;</code></pre><br>Relations S and H with the same schema as those of these two tables respectively contain the same information as tuples. A new relation S' is obtained by the following relational algebra operation:<br><span>\\( S' = \\Pi_{\\text{hostel}} ((\\sigma_{S.\\text{roll} = H.\\text{roll}} (\\sigma_{\\text{marks} > 75 \\text{ and } \\text{roll} > 2000 \\text{ and } \\text{roll} < 3000} (S)) \\times (H))) \\)</span><br><br>The difference between the number of rows output by the SQL statement and the number of tuples in S' is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">0</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>SQL Query Evaluation:</b><br>- Condition: <code>marks &gt;= 75 AND roll BETWEEN 2000 AND 3000</code>.<br>- Students matching: 2369, 2581, 2643, 2872, 2926, 2959 (all have marks <span>\\( \\ge 75 \\)</span>).<br>- Natural join with <code>hobby</code> on <code>roll</code>:<br>&nbsp;&nbsp;• 2369 (swimming) <span>\\( \\rightarrow \\)</span> 1 row (hostel 7)<br>&nbsp;&nbsp;• 2581 (cricket) <span>\\( \\rightarrow \\)</span> 1 row (hostel 6)<br>&nbsp;&nbsp;• 2643 (chess, hockey) <span>\\( \\rightarrow \\)</span> <b>2 rows</b> (hostel 5, hostel 5)<br>&nbsp;&nbsp;• 2872 (football) <span>\\( \\rightarrow \\)</span> 1 row (hostel 5)<br>&nbsp;&nbsp;• 2926 (cricket) <span>\\( \\rightarrow \\)</span> 1 row (hostel 5)<br>&nbsp;&nbsp;• 2959 (photography) <span>\\( \\rightarrow \\)</span> 1 row (hostel 7)<br>Total SQL output rows = <span>\\( 1 + 1 + 2 + 1 + 1 + 1 = 7 \\)</span> rows (SQL retains duplicates since there is no <code>DISTINCT</code>).<br><br>2. <b>Relational Algebra Operation (S'):</b><br>- Standard projection <span>\\( \\Pi_{\\text{hostel}} \\)</span> in relational algebra is set-based and <b>eliminates all duplicates</b>.<br>- The resulting distinct hostels in S' are: <code>{5, 6, 7}</code> <span>\\( \\implies 3 \\)</span> tuples.<br><br>3. <b>Difference:</b><br><span>\\( 7 - 3 = 4 \\)</span>.<br><br><b>Answer: 4 (Option B)</b><br><br><a href="https://gateoverflow.in/3831/gate2005-it-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The relation <code>book (title, price)</code> contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?<br><br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">title</span><br><b>FROM</b> <span style="color: #7b1fa2;">book</span> <b>AS</b> B<br><b>WHERE</b> (<b>SELECT</b> <span style="color: #6f6b15;">count(*)</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>FROM</b> <span style="color: #7b1fa2;">book</span> <b>AS</b> T<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>WHERE</b> T.<span style="color: #7b1fa2;">price</span> &gt; B.<span style="color: #7b1fa2;">price</span>) &lt; 5;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Titles of the four most expensive books</span>`,
                `<span style="display: inline;">Title of the fifth most inexpensive book</span>`,
                `<span style="display: inline;">Title of the fifth most expensive book</span>`,
                `<span style="display: inline;">Titles of the five most expensive books</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> - For any book B, the correlated subquery counts how many books T have a strictly higher price than B.<br>- For the 1st most expensive book: count = 0 (0 &lt; 5 <span>\\( \\rightarrow \\)</span> Selected)<br>- For the 2nd most expensive book: count = 1 (1 &lt; 5 <span>\\( \\rightarrow \\)</span> Selected)<br>- For the 3rd most expensive book: count = 2 (2 &lt; 5 <span>\\( \\rightarrow \\)</span> Selected)<br>- For the 4th most expensive book: count = 3 (3 &lt; 5 <span>\\( \\rightarrow \\)</span> Selected)<br>- For the 5th most expensive book: count = 4 (4 &lt; 5 <span>\\( \\rightarrow \\)</span> Selected)<br>- For the 6th most expensive book: count = 5 (5 &lt; 5 is False <span>\\( \\rightarrow \\)</span> Not selected)<br><br>Therefore, the query outputs the titles of the <b>five most expensive books</b>.<br><br><b>Answer: Titles of the five most expensive books (Option D)</b><br><br><a href="https://gateoverflow.in/1400/gate2005-77#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }

    ]
});
registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(SQL-IV)",
    date: "sep 08, 2026",
    topicsCovered: "Foreign Key Constraints, Aggregate Functions & NULLs, Cartesian Product, Group By with Having & Relational Joins",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider two tables in a relational database with columns and rows as follows:<br><br><span>\\( \\textbf{Student:} \\quad \\begin{array}{|c|c|c|} \\hline \\textbf{Roll\\_no} & \\textbf{Name} & \\textbf{Dept\\_id} \\\\ \\hline 1 & \\text{ABC} & 1 \\\\ \\hline 2 & \\text{DEF} & 1 \\\\ \\hline 3 & \\text{GHI} & 2 \\\\ \\hline 4 & \\text{JKL} & 3 \\\\ \\hline \\end{array} \\qquad \\textbf{Department:} \\quad \\begin{array}{|c|c|} \\hline \\textbf{Dept\\_id} & \\textbf{Dept\\_name} \\\\ \\hline 1 & \\text{A} \\\\ \\hline 2 & \\text{B} \\\\ \\hline 3 & \\text{C} \\\\ \\hline \\end{array} \\)</span><br><br><code>Roll_no</code> is the primary key of the <code>Student</code> table, <code>Dept_id</code> is the primary key of the <code>Department</code> table, and <code>Student.Dept_id</code> is a foreign key referencing <code>Department.Dept_id</code>.<br><br>What will happen if we try to execute the following two SQL statements?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>(i)</b>  <b>UPDATE</b> <span style="color: #7b1fa2;">Student</span> <b>SET</b> <span style="color: #7b1fa2;">Dept_id</span> = <b>NULL WHERE</b> <span style="color: #7b1fa2;">Roll_no</span> = 1;<br><b>(ii)</b> <b>UPDATE</b> <span style="color: #7b1fa2;">Department</span> <b>SET</b> <span style="color: #7b1fa2;">Dept_id</span> = <b>NULL WHERE</b> <span style="color: #7b1fa2;">Dept_id</span> = 1;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both i and ii will fail</span>`,
                `<span style="display: inline;">i will fail but ii will succeed</span>`,
                `<span style="display: inline;">i will succeed but ii will fail</span>`,
                `<span style="display: inline;">Both i and ii will succeed</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Statement (i):</b> <code>Student.Dept_id</code> is a foreign key. By relational integrity rules, foreign keys can accept <code>NULL</code> values (unless explicitly declared <code>NOT NULL</code>). Updating it to <code>NULL</code> does not violate referential integrity. Therefore, statement (i) will <b>succeed</b>.<br><br>2. <b>Statement (ii):</b> <code>Department.Dept_id</code> is the primary key of table <code>Department</code>. According to entity integrity constraints, a primary key attribute cannot contain <code>NULL</code>. Furthermore, other tuples in <code>Student</code> reference <code>Dept_id = 1</code>. Therefore, statement (ii) will <b>fail</b>.<br><br>Thus, statement <b>i will succeed but ii will fail</b>.<br><br><b>Answer: i will succeed but ii will fail (Option C)</b><br><br><a href="https://gateoverflow.in/3722/gate2004-it-78" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A table T1 in a relational database has the following rows and columns:<br><br><span>\\( \\textbf{T1:} \\quad \\begin{array}{|c|c|} \\hline \\textbf{Roll no.} & \\textbf{Marks} \\\\ \\hline 1 & 10 \\\\ \\hline 2 & 20 \\\\ \\hline 3 & 30 \\\\ \\hline 4 & \\text{NULL} \\\\ \\hline \\end{array} \\)</span><br><br>The following sequence of SQL statements was successfully executed on table T1:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>UPDATE</b> <span style="color: #7b1fa2;">T1</span> <b>SET</b> <span style="color: #7b1fa2;">marks</span> = <span style="color: #7b1fa2;">marks</span> + 5;<br><b>SELECT</b> <span style="color: #6f6b15;">AVG(marks)</span> <b>FROM</b> <span style="color: #7b1fa2;">T1</span>;</code></pre>What is the output of the SELECT statement?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">18.75</span>`,
                `<span style="display: inline;">20</span>`,
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">Null</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. After <code>UPDATE T1 SET marks = marks + 5</code>:<br>- Roll 1: 10 + 5 = <b>15</b><br>- Roll 2: 20 + 5 = <b>25</b><br>- Roll 3: 30 + 5 = <b>35</b><br>- Roll 4: NULL + 5 = <b>NULL</b> (any arithmetic operation with NULL results in NULL).<br><br>2. When calculating <code>AVG(marks)</code>:<br>- SQL aggregate functions (except <code>COUNT(*)</code>) automatically ignore <code>NULL</code> values.<br>- Sum of non-null marks = <span>\\( 15 + 25 + 35 = 75 \\)</span>.<br>- Count of non-null marks = <span>\\( 3 \\)</span>.<br>- Average = <span>\\( \\frac{75}{3} = 25 \\)</span>.<br><br><b>Answer: 25 (Option C)</b><br><br><a href="https://gateoverflow.in/3720/gate2004-it-76" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A relational database contains two tables <code>student</code> and <code>department</code> in which <code>student</code> table has columns <code>roll_no</code>, <code>name</code>, and <code>dept_id</code>, and <code>department</code> table has columns <code>dept_id</code> and <code>dept_name</code>. The following insert statements were executed successfully to populate the empty tables:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>INSERT INTO</b> <span style="color: #7b1fa2;">department</span> <b>VALUES</b> (1, <span style="color: #22863a;">'Mathematics'</span>);<br><b>INSERT INTO</b> <span style="color: #7b1fa2;">department</span> <b>VALUES</b> (2, <span style="color: #22863a;">'Physics'</span>);<br><b>INSERT INTO</b> <span style="color: #7b1fa2;">student</span> <b>VALUES</b> (1, <span style="color: #22863a;">'Navin'</span>, 1);<br><b>INSERT INTO</b> <span style="color: #7b1fa2;">student</span> <b>VALUES</b> (2, <span style="color: #22863a;">'Mukesh'</span>, 2);<br><b>INSERT INTO</b> <span style="color: #7b1fa2;">student</span> <b>VALUES</b> (3, <span style="color: #22863a;">'Gita'</span>, 1);</code></pre>How many rows and columns will be retrieved by the following SQL statement?<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> * <b>FROM</b> <span style="color: #7b1fa2;">student</span>, <span style="color: #7b1fa2;">department</span>;</code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">0 row and 4 columns</span>`,
                `<span style="display: inline;">3 rows and 4 columns</span>`,
                `<span style="display: inline;">3 rows and 5 columns</span>`,
                `<span style="display: inline;">6 rows and 5 columns</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Number of columns:</b><br>- <code>student</code> has 3 columns: <code>(roll_no, name, dept_id)</code>.<br>- <code>department</code> has 2 columns: <code>(dept_id, dept_name)</code>.<br>- In a cross product (<code>FROM student, department</code>), the number of columns is the sum: <span>\\( 3 + 2 = 5 \\)</span> columns.<br><br>2. <b>Number of rows:</b><br>- <code>student</code> has 3 rows.<br>- <code>department</code> has 2 rows.<br>- Without a <code>WHERE</code> join condition, the query computes the Cartesian Product: <span>\\( 3 \\times 2 = 6 \\)</span> rows.<br><br>Therefore, the output will contain <b>6 rows and 5 columns</b>.<br><br><b>Answer: 6 rows and 5 columns (Option D)</b><br><br><a href="https://gateoverflow.in/3718/gate2004-it-74" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The employee information in a company is stored in the relation:<br><br><code>Employee (<u>name</u>, sex, salary, deptName)</code><br><br>Consider the following SQL query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT</b> <span style="color: #7b1fa2;">deptName</span><br><b>FROM</b> <span style="color: #7b1fa2;">Employee</span><br><b>WHERE</b> <span style="color: #7b1fa2;">sex</span> = <span style="color: #22863a;">'M'</span><br><b>GROUP BY</b> <span style="color: #7b1fa2;">deptName</span><br><b>HAVING</b> <span style="color: #6f6b15;">AVG(salary)</span> &gt; (<b>SELECT</b> <span style="color: #6f6b15;">AVG(salary)</span> <b>FROM</b> <span style="color: #7b1fa2;">Employee</span>);</code></pre>It returns the names of the department in which</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the average salary is more than the average salary in the company</span>`,
                `<span style="display: inline;">the average salary of male employees is more than the average salary of all male employees in the company</span>`,
                `<span style="display: inline;">the average salary of male employees is more than the average salary of employees in the same department.</span>`,
                `<span style="display: inline;">the average salary of male employees is more than the average salary in the company</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. The <code>WHERE sex = 'M'</code> clause filters tuples before grouping, meaning only male employees are grouped.<br>2. <code>GROUP BY deptName</code> groups these male employees by their department.<br>3. <code>AVG(salary)</code> in the <code>HAVING</code> clause computes the average salary of male employees in that department.<br>4. The subquery <code>(SELECT AVG(salary) FROM Employee)</code> has no WHERE filter, so it computes the overall average salary of all employees (both male and female) across the entire company.<br>5. Therefore, the query returns departments where <b>the average salary of male employees is more than the average salary in the company</b>.<br><br><b>Answer: the average salary of male employees is more than the average salary in the company (Option D)</b><br><br><a href="https://gateoverflow.in/1049/gate2004-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relation schema pertaining to a students database:<br><br><code>Students (<u>rollno</u>, name, address)</code><br><code>Enroll (<u>rollno</u>, <u>courseno</u>, coursename)</code><br><br>Where the primary keys are shown underlined. The number of tuples in the <code>Students</code> and <code>Enroll</code> tables are 120 and 8 respectively. What are the maximum and minimum number of tuples that can be present in <code>(Students * Enroll)</code>, where <code>*</code> denotes natural join?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">8, 8</span>`,
                `<span style="display: inline;">120, 8</span>`,
                `<span style="display: inline;">960, 8</span>`,
                `<span style="display: inline;">960, 120</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. The natural join <code>(Students * Enroll)</code> joins on the common attribute <code>rollno</code>.<br>2. In <code>Students</code>, <code>rollno</code> is the primary key. Therefore, each distinct <code>rollno</code> can appear at most once in <code>Students</code>.<br>3. In <code>Enroll</code>, there are 8 tuples. Each tuple in <code>Enroll</code> can match with at most one tuple in <code>Students</code> (since <code>rollno</code> is unique in <code>Students</code>).<br>- Hence, the <b>maximum number of tuples</b> in the natural join is <b>8</b>.<br>4. In a standard relational database schema, <code>Enroll.rollno</code> is a foreign key referencing <code>Students.rollno</code> (every enrolled student must exist in the Students table). Therefore, each of the 8 tuples in <code>Enroll</code> will match exactly one student tuple, giving the <b>minimum number of tuples</b> as <b>8</b>.<br><br>Thus, the maximum and minimum are <b>8, 8</b>.<br><br><b>Answer: 8, 8 (Option A)</b><br><br><a href="https://gateoverflow.in/1011/gate2004-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the set of relations shown below and the SQL query that follows:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><span style="color: #7b1fa2;">Students</span>(<span style="color: #7b1fa2;">Roll_number</span>, <span style="color: #7b1fa2;">Name</span>, <span style="color: #7b1fa2;">Date_of_birth</span>)<br><span style="color: #7b1fa2;">Courses</span>(<span style="color: #7b1fa2;">Course_number</span>, <span style="color: #7b1fa2;">Course_name</span>, <span style="color: #7b1fa2;">Instructor</span>)<br><span style="color: #7b1fa2;">Grades</span>(<span style="color: #7b1fa2;">Roll_number</span>, <span style="color: #7b1fa2;">Course_number</span>, <span style="color: #7b1fa2;">Grade</span>)</code></pre><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">Name</span><br><b>FROM</b> <span style="color: #7b1fa2;">Students</span>, <span style="color: #7b1fa2;">Courses</span>, <span style="color: #7b1fa2;">Grades</span><br><b>WHERE</b> <span style="color: #7b1fa2;">Students</span>.<span style="color: #7b1fa2;">Roll_number</span> = <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Roll_number</span><br>&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Courses</span>.<span style="color: #7b1fa2;">Instructor</span> = <span style="color: #22863a;">'Korth'</span><br>&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Courses</span>.<span style="color: #7b1fa2;">Course_number</span> = <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Course_number</span><br>&nbsp;&nbsp;<b>AND</b> <span style="color: #7b1fa2;">Grades</span>.<span style="color: #7b1fa2;">Grade</span> = <span style="color: #22863a;">'A'</span>;</code></pre>Which of the following sets is computed by the above query?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Names of students who have got an A grade in all courses taught by Korth</span>`,
                `<span style="display: inline;">Names of students who have got an A grade in all courses</span>`,
                `<span style="display: inline;">Name of students who have got an A grade in at least one of the courses taught by Korth</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> - The query performs an equi-join on <code>Students</code>, <code>Courses</code>, and <code>Grades</code> using <code>Roll_number</code> and <code>Course_number</code>.<br>- The conditions <code>Courses.Instructor = 'Korth'</code> and <code>Grades.Grade = 'A'</code> select all course enrollments taught by Korth where the student secured an 'A' grade.<br>- Whenever a student secures an 'A' grade in <b>at least one</b> such course, the join produces that tuple and <code>SELECT DISTINCT Name</code> returns the student's name.<br>- To find students who received an 'A' in <i>all</i> courses taught by Korth, relational division or universal quantification (e.g. <code>NOT EXISTS</code>) would be required instead.<br><br><b>Answer: Name of students who have got an A grade in at least one of the courses taught by Korth (Option C)</b><br><br><a href="https://gateoverflow.in/969/gate2003-86#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following SQL query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">a1</span>, <span style="color: #7b1fa2;">a2</span>, ..., <span style="color: #7b1fa2;">an</span><br><b>FROM</b> <span style="color: #7b1fa2;">r1</span>, <span style="color: #7b1fa2;">r2</span>, ..., <span style="color: #7b1fa2;">rm</span><br><b>WHERE</b> P;</code></pre>For an arbitrary predicate P, this query is equivalent to which of the following relational algebra expressions?<br><br><img src="images/twt-dbms/q30_2003.jpg"></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\sigma_P (r_1 \\times r_2 \\times \\dots \\times r_m) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\sigma_P (r_1 \\bowtie r_2 \\bowtie \\dots \\bowtie r_m) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\sigma_P (r_1 \\cup r_2 \\cup \\dots \\cup r_m) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\sigma_P (r_1 \\cap r_2 \\cap \\dots \\cap r_m) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In relational algebra translation of SQL:<br>1. <b>FROM clause:</b> <code>FROM r1, r2, ..., rm</code> computes the Cartesian product of all relations in the FROM list: <span>\\( r_1 \\times r_2 \\times \\dots \\times r_m \\)</span>.<br>2. <b>WHERE clause:</b> <code>WHERE P</code> applies the selection operator <span>\\( \\sigma_P \\)</span> on the Cartesian product.<br>3. <b>SELECT DISTINCT clause:</b> <code>SELECT DISTINCT a1, a2, ..., an</code> projects the specified attributes and eliminates duplicates, which matches the standard set-theoretic projection operator <span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\)</span>.<br><br>Combining these gives:<br><span>\\( \\Pi_{a_1, a_2, \\dots, a_n} \\sigma_P (r_1 \\times r_2 \\times \\dots \\times r_m) \\)</span> (Option A).<br><br><b>Answer: Option A</b><br><br><a href="https://gateoverflow.in/920/gate2003-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In SQL, relations can contain null values, and comparisons with null values are treated as unknown. Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( x = 5 \\)</span> and <span>\\( \\text{not}(\\text{not}(x = 5)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( x = 5 \\)</span> and <span>\\( x &gt; 4 \\text{ and } x &lt; 6 \\)</span>, where <span>\\( x \\)</span> is an integer</span>`,
                `<span style="display: inline;"><span>\\( x \\neq 5 \\)</span> and <span>\\( \\text{not}(x = 5) \\)</span></span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let <span>\\( x = \\text{NULL} \\)</span>:<br>- Under the assumption that every comparison with NULL is treated as <b>False</b>:<br>1. <b>For <span>\\( x \\neq 5 \\)</span>:</b> Direct comparison with NULL <span>\\( \\implies \\)</span> <b>False</b>.<br>2. <b>For <span>\\( \\text{not}(x = 5) \\)</span>:</b> The inner comparison <span>\\( x = 5 \\)</span> evaluates to False. Then <span>\\( \\text{not}(\\text{False}) \\implies \\)</span> <b>True</b>.<br><br>Since one expression evaluates to False and the other to True when <span>\\( x \\)</span> is NULL, they are <b>not equivalent</b>.<br><br><b>Answer: <span>\\( x \\neq 5 \\)</span> and <span>\\( \\text{not}(x = 5) \\)</span> (Option C)</b><br><br><a href="https://gateoverflow.in/673/gate2000-2-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given relations <code>r(w, x)</code> and <code>s(y, z)</code>, the result of the SQL query:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 6px; padding: 12px 16px; overflow-x: auto; font-family: Consolas, Monaco, 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.6; margin-top: 10px;"><code><b>SELECT DISTINCT</b> <span style="color: #7b1fa2;">w</span>, <span style="color: #7b1fa2;">x</span> <b>FROM</b> <span style="color: #7b1fa2;">r</span>, <span style="color: #7b1fa2;">s</span>;</code></pre>is guaranteed to be the same as <code>r</code>, provided:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">r has no duplicates and s is non-empty</span>`,
                `<span style="display: inline;">r and s have no duplicates</span>`,
                `<span style="display: inline;">s has no duplicates and r is non-empty</span>`,
                `<span style="display: inline;">r and s have the same number of tuples</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Why s must be non-empty:</b> In SQL, <code>FROM r, s</code> performs a Cartesian product (<span>\\( r \\times s \\)</span>). If <code>s</code> is empty (0 tuples), <span>\\( r \\times \\emptyset = \\emptyset \\)</span>, so the query outputs 0 rows even if <code>r</code> has rows.<br>2. <b>Why r must have no duplicates:</b> The query specifies <code>SELECT DISTINCT w, x</code>. If <code>r</code> contained duplicate tuples initially, <code>DISTINCT</code> would eliminate them, causing the result to have fewer tuples than <code>r</code>.<br><br>Therefore, the result is guaranteed to be identical to <code>r</code> if and only if <b>r has no duplicates and s is non-empty</b>.<br><br><b>Answer: r has no duplicates and s is non-empty (Option A)</b><br><br><a href="https://gateoverflow.in/672/gate2000-2-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is/are correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">An SQL query automatically eliminates duplicates</span>`,
                `<span style="display: inline;">An SQL query will not work if there are no indexes on the relations</span>`,
                `<span style="display: inline;">SQL permits attribute names to be repeated in the same relation</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let's analyze each statement:<br>- <b>Statement A is incorrect:</b> SQL queries retain duplicate rows by default (multiset semantics). To eliminate duplicates, the <code>DISTINCT</code> keyword must be explicitly specified.<br>- <b>Statement B is incorrect:</b> Indexes are optional performance enhancement structures. SQL queries work perfectly fine without indexes by performing sequential table scans.<br>- <b>Statement C is incorrect:</b> Every column/attribute within a relational table must have a unique name in its schema; duplicate attribute names are disallowed in the same relation.<br><br>Therefore, <b>None of the above</b> is the correct choice.<br><br><b>Answer: None of the above (Option D)</b><br><br><a href="https://gateoverflow.in/1502/gate1999-2-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }

    ]
});
registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Normal Form-IV)",
    date: "sep 08, 2026",
    topicsCovered: "Functional Dependencies on Instances, Normal Forms (1NF, 2NF, 3NF), BCNF Decomposition, Lossless Join & Dependency Preservation",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the following relation instance:<br><br><span>\\( \\begin{array}{|c|c|c|} \\hline \\textbf{X} & \\textbf{Y} & \\textbf{Z} \\\\ \\hline 1 & 4 & 2 \\\\ \\hline 1 & 5 & 3 \\\\ \\hline 1 & 6 & 3 \\\\ \\hline 3 & 2 & 2 \\\\ \\hline \\end{array} \\)</span><br><br>Which of the following functional dependencies are satisfied by the instance?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( XY \\rightarrow Z \\text{ and } Z \\rightarrow Y \\)</span></span>`,
                `<span style="display: inline;"><span>\\( YZ \\rightarrow X \\text{ and } Y \\rightarrow Z \\)</span></span>`,
                `<span style="display: inline;"><span>\\( YZ \\rightarrow X \\text{ and } X \\rightarrow Z \\)</span></span>`,
                `<span style="display: inline;"><span>\\( XZ \\rightarrow Y \\text{ and } Y \\rightarrow X \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let's test the functional dependencies on the given tuples <code>{(1,4,2), (1,5,3), (1,6,3), (3,2,2)}</code>:<br><br>1. <b>For <span>\\( YZ \\rightarrow X \\)</span>:</b><br>The values of <span>\\( (Y, Z) \\)</span> are <code>(4,2), (5,3), (6,3), (2,2)</code>. All pairs are distinct, so <span>\\( YZ \\rightarrow X \\)</span> holds trivially.<br><br>2. <b>For <span>\\( Y \\rightarrow Z \\)</span>:</b><br>The values of <span>\\( Y \\)</span> are <code>4, 5, 6, 2</code>. All <span>\\( Y \\)</span> values are distinct, so each <span>\\( Y \\)</span> maps to exactly one <span>\\( Z \\)</span>. Hence, <span>\\( Y \\rightarrow Z \\)</span> holds.<br><br>- <b>Why other options fail:</b><br>• <span>\\( Z \\rightarrow Y \\)</span> fails: for <span>\\( Z = 3 \\)</span>, <span>\\( Y \\)</span> has values 5 and 6.<br>• <span>\\( X \\rightarrow Z \\)</span> fails: for <span>\\( X = 1 \\)</span>, <span>\\( Z \\)</span> has values 2 and 3.<br>• <span>\\( XZ \\rightarrow Y \\)</span> fails: for <span>\\( (X, Z) = (1, 3) \\)</span>, <span>\\( Y \\)</span> has values 5 and 6.<br><br><b>Answer: <span>\\( YZ \\rightarrow X \\text{ and } Y \\rightarrow Z \\)</span> (Option B)</b><br><br><a href="https://gateoverflow.in/671/gate2000-2-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the schema <span>\\( R = (S, T, U, V) \\)</span> and the dependencies <span>\\( S \\rightarrow T, T \\rightarrow U, U \\rightarrow V \\)</span> and <span>\\( V \\rightarrow S \\)</span>. Let <span>\\( R = (R_1 \\text{ and } R_2) \\)</span> be a decomposition such that <span>\\( R_1 \\cap R_2 \\neq \\phi \\)</span>. The decomposition is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">not in 2NF</span>`,
                `<span style="display: inline;">in 2NF but not 3NF</span>`,
                `<span style="display: inline;">in 3NF but not in 2NF</span>`,
                `<span style="display: inline;">in both 2NF and 3NF</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. Compute closures for each attribute under the circular dependency cycle <span>\\( S \\rightarrow T \\rightarrow U \\rightarrow V \\rightarrow S \\)</span>:<br>- <span>\\( S^+ = \\{S, T, U, V\\} \\implies S \\)</span> is a candidate key.<br>- <span>\\( T^+ = \\{S, T, U, V\\} \\implies T \\)</span> is a candidate key.<br>- <span>\\( U^+ = \\{S, T, U, V\\} \\implies U \\)</span> is a candidate key.<br>- <span>\\( V^+ = \\{S, T, U, V\\} \\implies V \\)</span> is a candidate key.<br><br>2. <b>Prime attributes:</b> All attributes <code>{S, T, U, V}</code> are prime attributes (each is part of a candidate key).<br>- Since there are <b>no non-prime attributes</b>, partial dependencies and transitive dependencies to non-prime attributes cannot exist.<br>- In any decomposed relation <span>\\( R_1 \\)</span> or <span>\\( R_2 \\)</span>, all attributes remain prime, so every decomposition is in <b>both 2NF and 3NF</b> (and BCNF).<br><br><b>Answer: in both 2NF and 3NF (Option D)</b><br><br><a href="https://gateoverflow.in/1485/gate1999-2-7-ugcnet-june2014-iii-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which normal form is considered adequate for normal relational database design?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2NF</span>`,
                `<span style="display: inline;">5NF</span>`,
                `<span style="display: inline;">4NF</span>`,
                `<span style="display: inline;">3NF</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In relational database design theory:<br>- <b>3NF (Third Normal Form)</b> is considered adequate for most practical database designs because a lossless join, dependency-preserving decomposition can <b>always</b> be guaranteed in 3NF.<br>- Although BCNF eliminates all redundancy due to functional dependencies, it does not always preserve all functional dependencies.<br>- Higher normal forms (4NF, 5NF) address multivalued and join dependencies which are less common in practice.<br><br><b>Answer: 3NF (Option D)</b><br><br><a href="https://gateoverflow.in/1671/gate1998-1-34" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For a database relation <span>\\( R(a, b, c, d) \\)</span>, where the domains <span>\\( a, b, c, d \\)</span> include only atomic values, only the following functional dependencies and those that can be inferred from them hold:<br><br><span>\\( a \\rightarrow c \\)</span><br><span>\\( b \\rightarrow d \\)</span><br><br>This relation is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">in first normal form but not in second normal form</span>`,
                `<span style="display: inline;">in second normal form but not in first normal form</span>`,
                `<span style="display: inline;">in third normal form</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Candidate Key:</b><br>- Closure of <span>\\( (ab)^+ = \\{a, b, c, d\\} \\)</span>.<br>- Neither <span>\\( a \\)</span> nor <span>\\( b \\)</span> alone can determine all attributes.<br>- Thus, <code>ab</code> is the candidate key.<br><br>2. <b>Prime and Non-Prime Attributes:</b><br>- Prime attributes: <code>{a, b}</code>.<br>- Non-prime attributes: <code>{c, d}</code>.<br><br>3. <b>Normal Form Analysis:</b><br>- Since all domains contain only atomic values, <span>\\( R \\)</span> is in <b>1NF</b>.<br>- In <span>\\( a \\rightarrow c \\)</span> and <span>\\( b \\rightarrow d \\)</span>, non-prime attributes <span>\\( c \\)</span> and <span>\\( d \\)</span> depend on proper subsets of the candidate key (<b>partial dependency</b>).<br>- Hence, <span>\\( R \\)</span> is <b>not in 2NF</b>.<br><br>Therefore, the relation is in first normal form but not in second normal form.<br><br><b>Answer: in first normal form but not in second normal form (Option A)</b><br><br><a href="https://gateoverflow.in/2265/gate1997-6-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( R(A, B, C, D) \\)</span> is a relation. Which of the following does not have a lossless join, dependency preserving BCNF decomposition?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( A \\rightarrow B, B \\rightarrow CD \\)</span></span>`,
                `<span style="display: inline;"><span>\\( A \\rightarrow B, B \\rightarrow C, C \\rightarrow D \\)</span></span>`,
                `<span style="display: inline;"><span>\\( AB \\rightarrow C, C \\rightarrow AD \\)</span></span>`,
                `<span style="display: inline;"><span>\\( A \\rightarrow BCD \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Consider option C: <span>\\( AB \\rightarrow C, C \\rightarrow AD \\)</span>.<br>1. <b>Candidate keys:</b><br>- <span>\\( (AB)^+ = \\{A, B, C, D\\} \\implies AB \\)</span> is a key.<br>- <span>\\( (BC)^+ = \\{A, B, C, D\\} \\implies BC \\)</span> is a key.<br><br>2. <b>BCNF Violation:</b><br>In <span>\\( C \\rightarrow AD \\)</span>, <span>\\( C \\)</span> is not a superkey, so BCNF is violated.<br><br>3. <b>Decomposition:</b><br>To decompose into BCNF, we split into <span>\\( R_1(C, A, D) \\)</span> and <span>\\( R_2(B, C) \\)</span>.<br>- In <span>\\( R_1 \\)</span>, <span>\\( C \\)</span> is the key (satisfies BCNF).<br>- In <span>\\( R_2 \\)</span>, <span>\\( BC \\)</span> is the key (satisfies BCNF).<br>- However, the functional dependency <span>\\( AB \\rightarrow C \\)</span> cannot be preserved because attributes <span>\\( A \\)</span> and <span>\\( B \\)</span> do not belong to the same relation.<br><br>Thus, <span>\\( AB \\rightarrow C, C \\rightarrow AD \\)</span> does not have a lossless join, dependency-preserving BCNF decomposition.<br><br><b>Answer: <span>\\( AB \\rightarrow C, C \\rightarrow AD \\)</span> (Option C)</b><br><br><a href="https://gateoverflow.in/741/gate2001-2-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A relational database which is in 3NF may still have undesirable data redundancy because there may exist:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Transitive functional dependencies</span>`,
                `<span style="display: inline;">Non-trivial functional dependencies involving prime attributes on the right-side.</span>`,
                `<span style="display: inline;">Non-trivial functional dependencies involving prime attributes only on the left-side.</span>`,
                `<span style="display: inline;">Non-trivial functional dependencies involving only prime attributes.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In Third Normal Form (3NF), for every non-trivial functional dependency <span>\\( X \\rightarrow Y \\)</span>, at least one of the following must hold:<br>1. <span>\\( X \\)</span> is a superkey, <b>OR</b><br>2. <span>\\( Y \\)</span> is a <b>prime attribute</b> (part of a candidate key).<br><br>- The second relaxation allows functional dependencies where the right-hand side attribute is prime, even when <span>\\( X \\)</span> is <b>not a superkey</b>.<br>- This allows functional dependencies where non-superkeys determine prime attributes, introducing data redundancy and update anomalies in 3NF (which is strictly eliminated in BCNF where the left-hand side must always be a superkey).<br><br>Therefore, undesirable redundancy in 3NF arises due to <b>non-trivial functional dependencies involving prime attributes on the right-side</b> where the left side is not a superkey.<br><br><b>Answer: Non-trivial functional dependencies involving prime attributes on the right-side (Option B)</b><br><br><a href="https://gateoverflow.in/84054/gate1990-3-ii" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1990" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1990</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following tables T1 and T2:<br><br><img src="images/twt-dbms/q11_2017.jpg"><br><br>In table T1, P is the primary key and Q is the foreign key referencing R in table T2 with on-delete cascade and on-update cascade. In table T2, R is the primary key and S is the foreign key referencing P in table T1 on-delete set NULL and on-update cascade. In order to delete record (3,8) from table T1, the number of additional records that need to be deleted from table T1 is _____.</span>`,
            image: "",
            options: [],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let's trace the referential actions when deleting record <code>(P=3, Q=8)</code> from table <code>T1</code>:<br>1. In table <code>T2</code>, column <code>S</code> references <code>T1.P</code> with <b>ON DELETE SET NULL</b>.<br>2. Row <code>(R=8, S=3)</code> in <code>T2</code> references <code>P=3</code>. Because of <code>ON DELETE SET NULL</code>, this row is <b>not deleted</b>; instead, its foreign key <code>S</code> is updated to <code>NULL</code> (becoming <code>(8, NULL)</code>).<br>3. Since no tuple in <code>T2</code> is deleted, no cascading delete is triggered back on table <code>T1</code>.<br><br>Therefore, the number of additional records that need to be deleted from table <code>T1</code> is <b>0</b>.<br><br><b>Answer: 0</b><br><br><a href="https://gateoverflow.in/118236/gate2017-2-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <code>R(a, b, c)</code> and <code>S(d, e, f)</code> be two relations in which <code>d</code> is the foreign key of <code>S</code> that refers to the primary key of <code>R</code>. Consider the following four operations on <code>R</code> and <code>S</code>:<br><br><b>I.</b> Insert into R<br><b>II.</b> Insert into S<br><b>III.</b> Delete from R<br><b>IV.</b> Delete from S<br><br>Which of the following can cause referential integrity constraint violation?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both I and IV</span>`,
                `<span style="display: inline;">Both II and III</span>`,
                `<span style="display: inline;">All of these</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Referential integrity constraint requires that any value of the foreign key <code>S.d</code> must exist in the primary key of <code>R</code>.<br><br>Analyzing the four operations:<br>- <b>I. Insert into R:</b> Adding a new primary key in <code>R</code> cannot violate foreign key references in existing tables. (Safe)<br>- <b>II. Insert into S:</b> If a new record is inserted into <code>S</code> with a value of <code>d</code> that does not exist in <code>R</code>, it violates referential integrity.<br>- <b>III. Delete from R:</b> If a record is deleted from <code>R</code> whose primary key is currently referenced by some tuple in <code>S</code>, it creates dangling references, violating referential integrity.<br>- <b>IV. Delete from S:</b> Deleting a tuple from the referencing table <code>S</code> never causes any foreign key violation. (Safe)<br><br>Therefore, <b>Both II and III</b> can cause a referential integrity violation.<br><br><b>Answer: Both II and III (Option B)</b><br><br><a href="https://gateoverflow.in/2266/gate1997-6-10-isro2016-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A locked database file can be:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Accessed by only one user</span>`,
                `<span style="display: inline;">Modified by users with the correct password</span>`,
                `<span style="display: inline;">Used to hide sensitive information</span>`,
                `<span style="display: inline;">Updated by more than one user</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In file-level concurrency control, locking a database file ensures mutual exclusion so that it can be <b>accessed/modified by only one user at a time</b>, preventing concurrent update anomalies and write-write conflicts.<br><br><b>Answer: Accessed by only one user (Option A)</b><br><br><a href="https://gateoverflow.in/48081/isro2009-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following table has two attributes A and C where A is the primary key and C is the foreign key referencing A with on-delete cascade.<br><br><img src="images/twt-dbms/q76_2005.jpg"><br><br>The set of all tuples that must be additionally deleted to preserve referential integrity when the tuple (2, 4) is deleted is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(3, 4) and (6, 4)</span>`,
                `<span style="display: inline;">(5, 2) and (7, 2)</span>`,
                `<span style="display: inline;">(5, 2), (7, 2) and (9, 5)</span>`,
                `<span style="display: inline;">(3, 4), (4, 3) and (6, 4)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Attribute <code>A</code> is the primary key, and <code>C</code> is the foreign key referencing <code>A</code> with <b>ON DELETE CASCADE</b>.<br><br>Step-by-step cascading deletions:<br>1. Delete tuple <code>(2, 4)</code>: Here, primary key <code>A = 2</code> is removed.<br>2. Cascading check for <code>C = 2</code>:<br>- Tuples <b>(5, 2)</b> and <b>(7, 2)</b> have <code>C = 2</code>, so both are cascaded and deleted.<br>3. From deleting <code>(5, 2)</code>, primary key <code>A = 5</code> is removed:<br>- Tuple <b>(9, 5)</b> has <code>C = 5</code>, so it is also cascaded and deleted.<br>4. No other tuples have <code>C = 7</code> or <code>C = 9</code>.<br><br>Thus, the set of additionally deleted tuples is: <b>(5, 2), (7, 2) and (9, 5)</b>.<br><br><b>Answer: (5, 2), (7, 2) and (9, 5) (Option C)</b><br><br><a href="https://gateoverflow.in/1399/gate2005-76#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <code>R(a, b, c)</code> and <code>S(d, e, f)</code> be two relations in which <code>d</code> is the foreign key of <code>S</code> that refers to the primary key of <code>R</code>. Consider the following four operations on <code>R</code> and <code>S</code>:<br><br><b>I.</b> Insert into R<br><b>II.</b> Insert into S<br><b>III.</b> Delete from R<br><b>IV.</b> Delete from S<br><br>Which of the following can cause referential integrity constraint violation?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both I and IV</span>`,
                `<span style="display: inline;">Both II and III</span>`,
                `<span style="display: inline;">All of these</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A referential integrity constraint requires that for every tuple in <code>S</code>, the foreign key value <code>d</code> must be present as a primary key value in relation <code>R</code>.<br><br>- <b>Operation II (Insert into S):</b> Inserting a row with a non-existent foreign key into <code>S</code> violates referential integrity.<br>- <b>Operation III (Delete from R):</b> Deleting a row from <code>R</code> when its primary key is still referenced by tuples in <code>S</code> creates dangling references, violating referential integrity.<br>- Operations I (Insert into R) and IV (Delete from S) can never violate referential integrity.<br><br><b>Answer: Both II and III (Option B)</b><br><br><a href="https://gateoverflow.in/2266/gate1997-6-10-isro2016-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }

    ]
});
registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Tuple Calculus)",
    date: "sep 08, 2026",
    topicsCovered: "Tuple Relational Calculus (TRC), Relational Algebra Equivalence, Safe Queries, Selectivity & Join Cardinality",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relational database schema with two relations <span>\\( R(P, Q) \\)</span> and <span>\\( S(X, Y) \\)</span>. Let<br><br><span>\\( E = \\{ \\langle u \\rangle \\mid \\exists v \\, \\exists w \\, (\\langle u, v \\rangle \\in R \\wedge \\langle v, w \\rangle \\in S) \\} \\)</span><br><br>be a tuple relational calculus expression. Which one of the following relational algebraic expressions is equivalent to <span>\\( E \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{P}\\left(R \\bowtie_{R.P = S.X} S\\right) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{P}\\left(S \\bowtie_{S.X = R.Q} R\\right) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{P}\\left(R \\bowtie_{R.P = S.Y} S\\right) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{P}\\left(S \\bowtie_{S.Y = R.Q} R\\right) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In the tuple relational calculus expression:<br>- <span>\\( \\langle u, v \\rangle \\in R \\)</span> means the first attribute <code>P</code> has value <span>\\( u \\)</span>, and the second attribute <code>Q</code> has value <span>\\( v \\)</span>.<br>- <span>\\( \\langle v, w \\rangle \\in S \\)</span> means the first attribute <code>X</code> has value <span>\\( v \\)</span>, and the second attribute <code>Y</code> has value <span>\\( w \\)</span>.<br><br>2. The shared variable <span>\\( v \\)</span> requires that <code>R.Q = S.X</code>.<br>3. The expression outputs <span>\\( \\langle u \\rangle \\)</span>, which corresponds to attribute <code>P</code> from <span>\\( R \\)</span>.<br><br>4. Therefore, the relational algebra expression joins <span>\\( S \\)</span> and <span>\\( R \\)</span> on <code>S.X = R.Q</code> and projects attribute <code>P</code>:<br><span>\\( \\Pi_{P}\\left(S \\bowtie_{S.X = R.Q} R\\right) \\)</span>.<br><br><b>Answer: <span>\\( \\Pi_{P}\\left(S \\bowtie_{S.X = R.Q} R\\right) \\)</span> (Option B)</b><br><br><a href="https://gateoverflow.in/523047/gate-cse-2026-set-1-question-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider two relations describing teams and players in a sports league:<br><br><code>teams(tid, tname)</code>: tid, tname are team-id and team-name, respectively.<br><code>players(pid, pname, tid)</code>: pid, pname, tid denote player-id, player-name, and team-id of the player, respectively.<br><br>Which ONE of the following tuple relational calculus queries returns the name of the players who play for the team having name as 'MI'?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{ p.\\text{pname} \\mid p \\in \\text{players} \\wedge \\exists t ( t \\in \\text{teams} \\wedge p.\\text{tid} = t.\\text{tid} \\wedge t.\\text{tname} = \\text{'MI'} ) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ p.\\text{pname} \\mid p \\in \\text{teams} \\wedge \\exists t ( t \\in \\text{players} \\wedge p.\\text{tid} = t.\\text{tid} \\wedge t.\\text{tname} = \\text{'MI'} ) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ p.\\text{pname} \\mid p \\in \\text{players} \\wedge \\exists t ( t \\in \\text{teams} \\wedge t.\\text{tname} = \\text{'MI'} ) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ p.\\text{pname} \\mid p \\in \\text{teams} \\wedge \\exists t ( t \\in \\text{players} \\wedge t.\\text{tname} = \\text{'MI'} ) \\} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> We need the names of players who play for team 'MI':<br>1. The free variable must range over <code>players</code>: <span>\\( p \\in \\text{players} \\)</span> and project <span>\\( p.\\text{pname} \\)</span>.<br>2. There must exist a matching tuple <span>\\( t \\in \\text{teams} \\)</span> such that:<br>- <code>p.tid = t.tid</code> (join condition linking player to their team)<br>- <code>t.tname = 'MI'</code> (team name is 'MI').<br><br>Combining these gives:<br><span>\\( \\{ p.\\text{pname} \\mid p \\in \\text{players} \\wedge \\exists t ( t \\in \\text{teams} \\wedge p.\\text{tid} = t.\\text{tid} \\wedge t.\\text{tname} = \\text{'MI'} ) \\} \\)</span>.<br><br><b>Answer: Option A</b><br><br><a href="https://gateoverflow.in/460051/gate-cse-2025-set-1-question-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following two relations, <span>\\( R(A, B) \\)</span> and <span>\\( S(A, C) \\)</span>:<br><br><span>\\( \\textbf{R:} \\quad \\begin{array}{|c|c|} \\hline \\textbf{A} & \\textbf{B} \\\\ \\hline 10 & 20 \\\\ \\hline 20 & 30 \\\\ \\hline 30 & 40 \\\\ \\hline 30 & 50 \\\\ \\hline 50 & 95 \\\\ \\hline \\end{array} \\qquad \\textbf{S:} \\quad \\begin{array}{|c|c|} \\hline \\textbf{A} & \\textbf{C} \\\\ \\hline 10 & 90 \\\\ \\hline 30 & 45 \\\\ \\hline 40 & 80 \\\\ \\hline \\end{array} \\)</span><br><br>The total number of tuples obtained by evaluating the following expression:<br><br><span>\\( \\sigma_{B < C}\\left(R \\bowtie_{R.A=S.A} S\\right) \\)</span><br><br>is _____.</span>`,
            image: "",
            options: [],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Step 1: Compute <span>\\( R \\bowtie_{R.A=S.A} S \\)</span> by matching values of <code>A</code>:<br>- <code>A = 10</code>: <code>(10, 20, 90)</code><br>- <code>A = 30</code>: <code>(30, 40, 45)</code> and <code>(30, 50, 45)</code><br><br>Step 2: Filter by <span>\\( \\sigma_{B < C} \\)</span>:<br>- <code>(10, 20, 90)</code>: <span>\\( 20 < 90 \\implies \\)</span> <b>True</b> (Tuple 1)<br>- <code>(30, 40, 45)</code>: <span>\\( 40 < 45 \\implies \\)</span> <b>True</b> (Tuple 2)<br>- <code>(30, 50, 45)</code>: <span>\\( 50 < 45 \\implies \\)</span> <b>False</b><br><br>Total number of tuples = <b>2</b>.<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/422817/gate-cse-2024-set-1-question-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A relation <span>\\( r(A,B) \\)</span> in a relational database has 1200 tuples. The attribute <span>\\( A \\)</span> has integer values ranging from 6 to 20, and the attribute <span>\\( B \\)</span> has integer values ranging from 1 to 20. Assume that the attributes <span>\\( A \\)</span> and <span>\\( B \\)</span> are independently distributed.<br><br>The estimated number of tuples in the output of <span>\\( \\sigma_{(A > 10) \\vee (B = 18)}(r) \\)</span> is _____.</span>`,
            image: "",
            options: [],
            answer: "820",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. Number of possible values:<br>- For <span>\\( A \\)</span>: ranges from 6 to 20 <span>\\( \\implies 20 - 6 + 1 = 15 \\)</span> values.<br>- For <span>\\( B \\)</span>: ranges from 1 to 20 <span>\\( \\implies 20 \\)</span> values.<br><br>2. Probabilities under uniform distribution:<br>- <span>\\( P(A > 10) = \\frac{10}{15} = \\frac{2}{3} \\)</span> (values 11 to 20).<br>- <span>\\( P(B = 18) = \\frac{1}{20} \\)</span>.<br><br>3. Since <span>\\( A \\)</span> and <span>\\( B \\)</span> are independent:<br><span>\\( P(A > 10 \\vee B = 18) = P(A > 10) + P(B = 18) - P(A > 10) \\times P(B = 18) \\)</span><br><span>\\( = \\frac{2}{3} + \\frac{1}{20} - \\frac{2}{60} = \\frac{40 + 3 - 2}{60} = \\frac{41}{60} \\)</span>.<br><br>4. Estimated number of tuples:<br><span>\\( 1200 \\times \\frac{41}{60} = 20 \\times 41 = 820 \\)</span>.<br><br><i>(Note: GATE key also accepted 205 based on distinct value pairs: <span>\\( 10 \\times 20 + 5 = 205 \\)</span>).</i><br><br><b>Answer: 820</b><br><br><a href="https://gateoverflow.in/357428/gate-cse-2021-set-1-question-23#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a database that has the relation schemas <code>EMP(EmpId, EmpName, DepId)</code> and <code>DEPT(DeptName, DeptId)</code>. Note that the <code>DeptId</code> can be permitted to be NULL in the relation <code>EMP</code>. Consider the following queries on the database expressed in tuple relational calculus:<br><br><img src="images/twt-dbms/q35_2017.jpg"><br><br>Which of the above queries are safe?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(I) and (II) only</span>`,
                `<span style="display: inline;">(I) and (III) only</span>`,
                `<span style="display: inline;">(II) and (III) only</span>`,
                `<span style="display: inline;">(I), (II) and (III)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A tuple relational calculus query is <b>safe</b> if all values that appear in the result are guaranteed to come from the domain of the database relations.<br><br>In all three queries:<br>- The free variable <code>t</code> is bounded by <code>t[EmpName] = u[EmpName]</code> where <code>u ∈ EMP</code>.<br>- Since <code>EMP</code> is a finite relation in the database, <code>t[EmpName]</code> can only take finite values from existing employees.<br>- The subconditions involving <code>DEPT</code> merely serve as filtering predicates and do not produce unbounded or infinite domains.<br><br>Therefore, all three queries <b>(I), (II) and (III)</b> are safe.<br><br><b>Answer: (I), (II) and (III) (Option D)</b><br><br><a href="https://gateoverflow.in/118324/gate2017-1-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R \\)</span> and <span>\\( S \\)</span> be relational schemes such that <span>\\( R = \\{a, b, c\\} \\)</span> and <span>\\( S = \\{c\\} \\)</span>. Now consider the following queries on the database:<br><br><b>Query I:</b><br><span>\\( \\pi_{R-S}(r) - \\pi_{R-S}\\big(\\pi_{R-S}(r) \\times S - \\pi_{R-S, S}(r)\\big) \\)</span><br><br><b>Query II:</b><br><span>\\( \\{ t \\mid t \\in \\pi_{R-S}(r) \\land \\forall u \\in s \\, (\\exists v \\in r \\, (u = v[S] \\land t = v[R-S])) \\} \\)</span><br><br><b>Query III:</b><br><span>\\( \\{ t \\mid t \\in \\pi_{R-S}(r) \\land \\forall v \\in r \\, (\\exists u \\in s \\, (u = v[S] \\land t = v[R-S])) \\} \\)</span><br><br><b>Query IV:</b><br><code>SELECT R.a, R.b<br>FROM R, S<br>WHERE R.c = S.c</code><br><br>Which of the above queries are equivalent?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and II</span>`,
                `<span style="display: inline;">I and III</span>`,
                `<span style="display: inline;">II and IV</span>`,
                `<span style="display: inline;">III and IV</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Both <b>Query I</b> and <b>Query II</b> are standard formulations of <b>Relational Division</b> <span>\\( r \\div s \\)</span>:<br><br>1. <b>Query I:</b><br><span>\\( \\pi_{R-S}(r) - \\pi_{R-S}\\big(\\pi_{R-S}(r) \\times S - \\pi_{R-S, S}(r)\\big) \\)</span><br>This is the classic relational algebra definition of division <span>\\( r \\div s \\)</span> using projection, Cartesian product, and set difference.<br><br>2. <b>Query II:</b><br><span>\\( \\{ t \\mid t \\in \\pi_{R-S}(r) \\land \\forall u \\in s \\, (\\exists v \\in r \\, (u = v[S] \\land t = v[R-S])) \\} \\)</span><br>This is the formal tuple relational calculus definition of division: it selects tuples <span>\\( t \\)</span> in <span>\\( \\pi_{R-S}(r) \\)</span> such that for <b>every</b> tuple <span>\\( u \\in s \\)</span>, there exists a tuple <span>\\( v \\in r \\)</span> that matches <span>\\( t \\)</span> on <span>\\( R-S \\)</span> and matches <span>\\( u \\)</span> on <span>\\( S \\)</span>.<br><br>3. <b>Query III:</b><br>Quantifies universally over <span>\\( v \\in r \\)</span>, which requires <i>all</i> tuples of <span>\\( r \\)</span> to match <span>\\( s \\)</span>, which is not division.<br><br>4. <b>Query IV:</b><br>Is a standard natural join returning all tuples of <span>\\( R \\)</span> that match with <i>at least one</i> tuple in <span>\\( S \\)</span>, rather than <i>all</i> tuples of <span>\\( S \\)</span>.<br><br>Therefore, <b>Query I and Query II</b> are equivalent.<br><br><b>Answer: I and II (Option A)</b><br><br><a href="https://gateoverflow.in/1331/gate2009-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following tuple relational calculus expression(s) is/are equivalent to <span>\\( \\forall t \\in r \\, (P(t)) \\)</span>?<br><br><b>I.</b> <span>\\( \\neg \\exists t \\in r \\, (P(t)) \\)</span><br><b>II.</b> <span>\\( \\neg t \\notin r \\, (P(t)) \\)</span><br><b>III.</b> <span>\\( \\neg \\exists t \\in r \\, (\\neg P(t)) \\)</span><br><b>IV.</b> <span>\\( \\exists t \\in r \\, (\\neg P(t)) \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">III and IV only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> By De Morgan's laws for quantifiers in first-order predicate logic:<br><br><span>\\( \\forall t \\in r \\, (P(t)) \\equiv \\neg \\exists t \\in r \\, (\\neg P(t)) \\)</span><br><br>- "For all tuples <span>\\( t \\)</span> in <span>\\( r \\)</span>, predicate <span>\\( P(t) \\)</span> is true" is logically equivalent to saying "There does <b>NOT</b> exist any tuple <span>\\( t \\)</span> in <span>\\( r \\)</span> for which <span>\\( P(t) \\)</span> is false (i.e. <span>\\( \\neg P(t) \\)</span>)".<br><br>Hence, only expression <b>III</b> is equivalent.<br><br><b>Answer: III only (Option C)</b><br><br><a href="https://gateoverflow.in/413/gate2008-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <code>employee(name, sex, supervisorName)</code> with <code>name</code> as the key. <code>supervisorName</code> gives the name of the supervisor of the employee under consideration. What does the following Tuple Relational Calculus query produce?<br><br><img src="images/twt-dbms/q60_2007.jpg"><br><br><span>\\( \\{ e.\\text{name} \\mid \\text{employee}(e) \\land (\\forall x) [ \\neg \\text{employee}(x) \\lor x.\\text{supervisorName} \\neq e.\\text{name} \\lor x.\\text{sex} = \\text{"male"} ] \\} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Names of employees with a male supervisor.</span>`,
                `<span style="display: inline;">Names of employees with no immediate male subordinates</span>`,
                `<span style="display: inline;">Names of employees with no immediate female subordinates.</span>`,
                `<span style="display: inline;">Names of employees with a female supervisor</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Consider the inner condition for employee <code>e</code>:<br><span>\\( (\\forall x) [ \\neg \\text{employee}(x) \\lor x.\\text{supervisorName} \\neq e.\\text{name} \\lor x.\\text{sex} = \\text{"male"} ] \\)</span><br><br>Using the logical equivalence <span>\\( (\\neg A \\lor \\neg B \\lor C) \\equiv (A \\land B) \\implies C \\)</span>, the condition can be rewritten as:<br><span>\\( (\\forall x) [ (\\text{employee}(x) \\land x.\\text{supervisorName} = e.\\text{name}) \\implies x.\\text{sex} = \\text{"male"} ] \\)</span><br><br>In plain English:<br>"For every person <span>\\( x \\)</span>, if <span>\\( x \\)</span> is an employee supervised by <span>\\( e \\)</span> (i.e. an immediate subordinate of <span>\\( e \\)</span>), then <span>\\( x \\)</span> must be male."<br><br>- If employee <span>\\( e \\)</span> has any immediate female subordinate, this implication becomes false.<br>- If employee <span>\\( e \\)</span> has only male subordinates, or has no subordinates at all, the implication is vacuously true.<br><br>Therefore, the query produces the <b>names of employees with no immediate female subordinates</b>.<br><br><b>Answer: Names of employees with no immediate female subordinates. (Option C)</b><br><br><a href="https://gateoverflow.in/1258/gate2007-60#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following relational query languages have the same expressive power?<br><br><b>I.</b> Relational algebra<br><b>II.</b> Tuple relational calculus restricted to safe expressions<br><b>III.</b> Domain relational calculus restricted to safe expressions</span>`,
            image: "",
            options: [
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I and II only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">I, II and III</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> According to <b>Codd's Theorem</b> (1972):<br><br>- Basic <b>Relational Algebra</b>,<br>- Safe <b>Tuple Relational Calculus</b> (TRC), and<br>- Safe <b>Domain Relational Calculus</b> (DRC)<br><br>all have identical expressive power. Any relational query expressible in one can also be expressed in the other two.<br><br>A query language is called <i>relationally complete</i> if it is at least as expressive as relational algebra.<br><br><b>Answer: I, II and III (Option D)</b><br><br><a href="https://gateoverflow.in/3554/gate2006-it-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The relational algebra expression equivalent to the following tuple calculus expression:<br><br><span>\\( \\left\\{ t \\mid t \\in r \\land (t[A] = 10 \\land t[B] = 20) \\right\\} \\)</span><br><br>is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\sigma_{(A=10 \\lor B=20)} (r) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sigma_{(A=10)} (r) \\cup \\sigma_{(B=20)} (r) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sigma_{(A=10)} (r) - \\sigma_{(B=20)} (r) \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In Relational Algebra, selecting tuples satisfying multiple conditions joined by conjunction (<span>\\( \\land \\)</span>) is given by:<br><span>\\( \\sigma_{(A=10 \\land B=20)}(r) \\)</span>.<br><br>2. By the property of the selection operator:<br><span>\\( \\sigma_{(c_1 \\land c_2)}(r) \\equiv \\sigma_{c_1}(r) \\cap \\sigma_{c_2}(r) \\)</span>.<br><br>3. Therefore:<br><span>\\( \\sigma_{(A=10 \\land B=20)}(r) \\equiv \\sigma_{(A=10)}(r) \\cap \\sigma_{(B=20)}(r) \\)</span>.<br><br>- <span>\\( \\sigma_{(A=10)}(r) \\cup \\sigma_{(B=20)}(r) \\)</span> corresponds to <span>\\( A=10 \\lor B=20 \\)</span>.<br>- <span>\\( \\sigma_{(A=10)}(r) \\cap \\sigma_{(B=20)}(r) \\)</span> corresponds to <span>\\( A=10 \\land B=20 \\)</span>.<br><br><b>Answer: <span>\\( \\sigma_{(A=10)} (r) \\cap \\sigma_{(B=20)} (r) \\)</span> (Option C)</b><br><br><a href="https://gateoverflow.in/1472/gate1999-1-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following relational calculus expressions is <b>not safe</b>?<br><br><img src="images/twt-dbms/q49_2001.jpg"></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{ t \\mid \\exists u \\in R_1 \\, (t[A] = u[A]) \\land \\neg \\exists s \\in R_2 \\, (t[A] = s[A]) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ t \\mid \\forall u \\in R_1 \\, (u[A] = \\text{"x"} \\implies \\exists s \\in R_2 \\, (t[A] = s[A] \\land s[A] = u[A])) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ t \\mid \\neg(t \\in R_1) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ t \\mid \\exists u \\in R_1 \\, (t[A] = u[A]) \\land \\exists s \\in R_2 \\, (t[A] = s[A]) \\} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A Relational Calculus expression is said to be <b>safe</b> if it is guaranteed to yield a finite number of tuples whose attribute values belong to the <i>domain</i> of the database relations (active domain).<br><br>- In expression (c): <span>\\( \\{ t \\mid \\neg(t \\in R_1) \\} \\)</span>, the result consists of all tuples <span>\\( t \\)</span> that are <b>not</b> in <span>\\( R_1 \\)</span>.<br>- Since the universal domain of tuples not in <span>\\( R_1 \\)</span> can be infinitely large (infinite domain), this expression can produce an infinite number of tuples.<br>- Therefore, <span>\\( \\{ t \\mid \\neg(t \\in R_1) \\} \\)</span> is an <b>unsafe</b> expression.<br><br>- Expressions (a), (b), and (d) are safe because the free variable <span>\\( t \\)</span> is bounded by values existing in finite relations <span>\\( R_1 \\)</span> or <span>\\( R_2 \\)</span>.<br><br><b>Answer: <span>\\( \\{ t \\mid \\neg(t \\in R_1) \\} \\)</span> (Option C)</b><br><br><a href="https://gateoverflow.in/742/gate2001-2-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(File System-I)",
    date: "sep 09, 2026",
    topicsCovered: "File Organization, Heap vs Sorted Files, Dense & Sparse Indexing, B+ Trees, Secondary Indexing, Block Accesses",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An index in a DBMS is said to be dense if an index entry appears for every search-key value in the indexed file. Otherwise it is called a sparse index. Consider the following two statements.<br><br><b>S1:</b> A hash index must be a dense index<br><b>S2:</b> A <span>\\( B^{+} \\)</span> tree index can be a sparse index<br><br>Which one of the following options is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both <span>\\( \\text{S1} \\)</span> and <span>\\( \\text{S2} \\)</span> are true</span>`,
                `<span style="display: inline;">Both <span>\\( \\text{S1} \\)</span> and <span>\\( \\text{S2} \\)</span> are false</span>`,
                `<span style="display: inline;"><span>\\( \\text{S1} \\)</span> is true and <span>\\( \\text{S2} \\)</span> is false</span>`,
                `<span style="display: inline;"><span>\\( \\text{S1} \\)</span> is false and <span>\\( \\text{S2} \\)</span> is true</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>S1 (A hash index must be a dense index):</b><br>A hash index computes a bucket location directly from the search key using a hash function. Because there is no sequential sorted order across buckets to allow skipping records or scanning sequentially, every distinct search key value must have an entry pointing to its record(s). Therefore, a hash index must be <b>dense</b>. (<b>True</b>)<br><br><b>S2 (A <span>\\( B^{+} \\)</span> tree index can be a sparse index):</b><br>When a <span>\\( B^{+} \\)</span> tree is built on a search key that also determines the physical sorted order of the underlying data file (i.e. a primary or clustering index), it is sufficient to maintain only one index entry per data block (pointing to the block anchor / first record of each block), as all remaining records in that block can be scanned sequentially. Hence, a <span>\\( B^{+} \\)</span> tree can be <b>sparse</b>. (<b>True</b>)<br><br><b>Answer: Both S1 and S2 are true (Option A)</b><br><br><a href="https://gateoverflow.in/523110/gate-cse-2026-set-2-question-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the context of DBMS, consider the two sets <span>\\( \\mathbf{T} \\)</span> and <span>\\( \\mathbf{S} \\)</span> given below:<br><br><span>\\( \\begin{array}{|l|l|} \\hline \\quad\\quad\\textbf{T} & \\quad\\quad\\textbf{S} \\\\ \\hline \\text{I: Logical schema} & \\text{L: Views} \\\\ \\text{II: Physical schema} & \\text{M: File organization and indexes} \\\\ \\text{III: External schema} & \\text{N: Relations} \\\\ \\hline \\end{array} \\)</span><br><br>Which one of the following is the correct match from <span>\\( \\mathbf{T} \\)</span> to <span>\\( \\mathbf{S} \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\text{I-L, II-M, III-N} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\text{I-M, II-L, III-N} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\text{I-N, II-M, III-L} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\text{I-N, II-L, III-M} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Matching each schema level in the Three-Schema Architecture (ANSI/SPARC) to its description:<br><br>1. <b>Logical Schema (I):</b> Describes the conceptual structure of the entire database for the entire user community, which is represented by <b>Relations / Tables (N)</b>.<br>2. <b>Physical Schema (II):</b> Describes physical storage structures, access paths, and internal representation at the lowest storage level, which corresponds to <b>File organization and indexes (M)</b>.<br>3. <b>External Schema (III):</b> Describes user-specific customized perspectives of the data, which corresponds to <b>Views (L)</b>.<br><br>Thus, the correct mapping is: <b>I-N, II-M, III-L</b>.<br><br><b>Answer: Option C</b><br><br><a href="https://gateoverflow.in/523141/gate-cse-2026-set-2-question-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following file organizations is/are I/O efficient for the scan operation in DBMS?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Sorted</span>`,
                `<span style="display: inline;">Heap</span>`,
                `<span style="display: inline;">Unclustered tree index</span>`,
                `<span style="display: inline;">Unclustered hash index</span>`
            ],
            answer: ["A", "B"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> A <b>scan</b> operation reads every single record in the file:<br><br>- <b>Heap file:</b> Records are packed densely into consecutive data blocks. A scan simply reads blocks sequentially from beginning to end, incurring minimal I/O (each block is read exactly once).<br>- <b>Sorted file:</b> Records are also stored contiguously and sequentially in disk blocks. A full scan reads each page once in sequential order [<span>\\( B \\)</span> block transfers].<br>- <b>Unclustered tree / hash index:</b> Records are not ordered according to the index key. Traversing via the index causes pointer chasing where consecutive index entries point to records on arbitrary data pages, potentially fetching the same block multiple times (up to one disk I/O per record).<br><br>Therefore, <b>Sorted</b> and <b>Heap</b> files are I/O efficient for scan operations.<br><br><b>Answer: Sorted, Heap (Options A and B)</b><br><br><a href="https://gateoverflow.in/422881/gate-cse-2024-set-2-question-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a database of fixed-length records, stored as an ordered file. The database has 25,000 records, with each record being 100 bytes, of which the primary key occupies 15 bytes. The data file is block-aligned in that each data record is fully contained within a block. The database is indexed by a primary index file, which is also stored as a block-aligned ordered file. The figure below depicts this indexing scheme.<br><br><img src="images/twt-dbms/q52_2023.jpg"><br><br>Suppose the block size of the file system is 1024 bytes, and a pointer to a block occupies 5 bytes. The system uses binary search on the index file to search for a record with a given key. You may assume that a binary search on an index file of <span>\\( b \\)</span> blocks takes <span>\\( \\left\\lceil \\log_2 b \\right\\rceil \\)</span> block accesses in the worst case.<br><br>Given a key, the number of block accesses required to identify the block in the data file that may contain a record with the key, in the worst case, is _____.</span>`,
            image: "",
            options: [],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Step-by-step computation:<br><br>1. <b>Data File Analysis:</b><br>- Block size = 1024 bytes, Record size = 100 bytes.<br>- Records per data block = <span>\\( \\lfloor 1024 / 100 \\rfloor = 10 \\)</span> records/block.<br>- Number of data blocks = <span>\\( 25,000 / 10 = 2500 \\)</span> blocks.<br><br>2. <b>Primary Index File Analysis:</b><br>- A primary index is a <b>sparse index</b> having <b>one entry per data block</b>.<br>- Total index entries = 2500 entries.<br>- Size of each index entry = (Primary key size) + (Block pointer size) = <span>\\( 15 + 5 = 20 \\)</span> bytes.<br>- Index entries per index block = <span>\\( \\lfloor 1024 / 20 \\rfloor = 51 \\)</span> entries/block.<br>- Number of index blocks = <span>\\( \\lceil 2500 / 51 \\rceil = 50 \\)</span> blocks.<br><br>3. <b>Block Accesses for Binary Search:</b><br>- Binary search on an index file of <span>\\( b = 50 \\)</span> blocks takes:<br><span>\\( \\left\\lceil \\log_2 50 \\right\\rceil = 6 \\)</span> block accesses.<br><br>Note that the question asks for the number of block accesses to <i>identify the block in the data file</i> (i.e. only searching the index file), which is <b>6</b>.<br><br><b>Answer: 6</b><br><br><a href="https://gateoverflow.in/399259/gate-cse-2023-question-52#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A data file consisting of 1,50,000 student-records is stored on a hard disk with block size of 4096 bytes. The data file is sorted on the primary key RollNo. The size of a record pointer for this disk is 7 bytes. Each student-record has a candidate key attribute called ANum of size 12 bytes. Suppose an index file with records consisting of two fields, ANum value and the record pointer the corresponding student record, is built and stored on the same disk. Assume that the records of data file and index file are not split across disk blocks. The number of blocks in the index file is _____.</span>`,
            image: "",
            options: [],
            answer: "698",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. The data file is ordered by <code>RollNo</code>, but the index is constructed on candidate key <code>ANum</code> (secondary index).<br>2. Because the data file is not sorted by <code>ANum</code>, the index must be <b>dense</b> (one index entry for every record in the data file).<br>3. Total index entries = 1,50,000.<br>4. Size of each index entry = (ANum size) + (Record pointer size) = <span>\\( 12 + 7 = 19 \\)</span> bytes.<br>5. Entries per index block = <span>\\( \\lfloor 4096 / 19 \\rfloor = 215 \\)</span> entries/block.<br>6. Total blocks required for index file = <span>\\( \\lceil 1,50,000 / 215 \\rceil = 698 \\)</span> blocks.<br><br><b>Answer: 698</b><br><br><a href="https://gateoverflow.in/357519/gate-cse-2021-set-2-question-21#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a linear list based directory implementation in a file system. Each directory is a list of nodes, where each node contains the file name along with the file metadata, such as the list of pointers to the data blocks. Consider a given directory foo.<br><br>Which of the following operations will necessarily require a full scan of foo for successful completion?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Creation of a new file in foo</span>`,
                `<span style="display: inline;">Deletion of an existing file from foo</span>`,
                `<span style="display: inline;">Renaming of an existing file in foo</span>`,
                `<span style="display: inline;">Opening of an existing file in foo</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Analyzing each operation in an unsorted linear-list directory implementation:<br><br>1. <b>Creation of a new file:</b> Before adding a new directory entry, the system must verify that no existing file shares the desired name (to ensure filename uniqueness). Since the list is unordered, this requires a <b>full scan</b> of the entire directory.<br>2. <b>Renaming an existing file:</b> The system must ensure that the new name does not conflict with any existing filename in the directory. Hence, this also necessarily requires a <b>full scan</b>.<br>3. <b>Deletion of an existing file:</b> Linear search terminates as soon as the target filename node is encountered; it does not necessarily require scanning through to the end.<br>4. <b>Opening an existing file:</b> The search terminates immediately upon locating the file node; a full scan is not necessarily required.<br><br>Therefore, <b>Creation of a new file in foo</b> and <b>Renaming of an existing file in foo</b> necessarily require a full scan.<br><br><b>Answer: Options A and C</b><br><br><a href="https://gateoverflow.in/357437/gate-cse-2021-set-1-question-15#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a database implemented using B+ tree for file indexing and installed on a disk drive with block size of 4 KB. The size of search key is 12 bytes and the size of tree/disk pointer is 8 bytes. Assume that the database has one million records. Also assume that no node of the B+ tree and no records are present initially in main memory. Consider that each record fits into one disk block. The minimum number of disk accesses required to retrieve any record in the database is _____.</span>`,
            image: "",
            options: [],
            answer: "4",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> To achieve the <b>minimum number of disk accesses</b>, the B+ tree height must be minimized by packing nodes to maximum capacity:<br><br>1. <b>Internal Node Order (<span>\\( p \\)</span>):</b><br><span>\\( p \\cdot P + (p-1) \\cdot K \\le 4096 \\implies 8p + 12(p-1) \\le 4096 \\implies 20p \\le 4108 \\implies p = 205 \\)</span>.<br><br>2. <b>Leaf Node Order (<span>\\( k \\)</span>):</b><br>Assuming each leaf holds a next-leaf pointer (8 bytes) and <span>\\( k \\)</span> pairs of (key, record pointer):<br><span>\\( k(12 + 8) + 8 \\le 4096 \\implies 20k \\le 4088 \\implies k = 204 \\)</span> records per leaf.<br><br>3. <b>Tree Levels for <span>\\( 10^6 \\)</span> records:</b><br>- Level 3 (Leaves): <span>\\( \\lceil 10^6 / 204 \\rceil = 4902 \\)</span> leaf nodes.<br>- Level 2 (Internal): <span>\\( \\lceil 4902 / 205 \\rceil = 24 \\)</span> nodes.<br>- Level 1 (Root): <span>\\( \\lceil 24 / 205 \\rceil = 1 \\)</span> root node.<br>Thus, the tree has <b>3 levels</b>.<br><br>4. <b>Disk Accesses:</b><br>- 3 disk accesses to traverse through the B+ tree (Root <span>\\( \\rightarrow \\)</span> Level 2 <span>\\( \\rightarrow \\)</span> Leaf).<br>- 1 additional disk access to read the actual data record block from disk.<br>- Total minimum disk accesses = <span>\\( 3 + 1 = 4 \\)</span>.<br><br><b>Answer: 4</b><br><br><a href="https://gateoverflow.in/333177/gate2020-cs-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is NOT correct about the <span>\\( B^+ \\)</span> tree data structure used for creating an index of a relational database table?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( B^+ \\)</span> Tree is a height-balanced tree</span>`,
                `<span style="display: inline;">Non-leaf nodes have pointers to data records</span>`,
                `<span style="display: inline;">Key values in each node are kept in sorted order</span>`,
                `<span style="display: inline;">Each leaf node has a pointer to the next leaf node</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In a <span>\\( B^+ \\)</span> tree:<br><br>- <b>Leaf nodes</b> contain all the search keys and pointers to the actual data records (or data blocks), and adjacent leaf nodes are linked via next-leaf pointers for fast sequential and range queries.<br>- <b>Non-leaf (internal) nodes</b> contain only search keys and child pointers to direct the tree search; they do <b>not</b> store pointers to data records.<br><br>Therefore, the statement <i>"Non-leaf nodes have pointers to data records"</i> is <b>NOT correct</b>.<br><br><b>Answer: Non-leaf nodes have pointers to data records (Option B)</b><br><br><a href="https://gateoverflow.in/302834/gate2019-cs-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is a dense index?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Primary index</span>`,
                `<span style="display: inline;">Clustered index</span>`,
                `<span style="display: inline;">Secondary index</span>`,
                `<span style="display: inline;">Secondary non-key index</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. An index is <b>dense</b> if an index entry appears for every search-key value / record in the data file.<br>2. An index is <b>sparse</b> if an index entry appears for only some of the search keys (e.g. one entry per data block).<br><br>- <b>Primary index</b> and <b>Clustering index</b> are built on ordering fields (physically sorted files), so they can be (and usually are) <b>sparse</b>.<br>- A <b>Secondary index</b> is built on a non-ordering field. Because the underlying file is not physically sorted by this key, sequential skipping is impossible, requiring an index entry for every single record/key. Thus, a secondary index is inherently a <b>dense index</b>.<br><br><b>Answer: Secondary index (Option C)</b><br><br><a href="https://gateoverflow.in/213537/isro2018-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a file which contains 1 million records and the order of the tree is 100, then what is the maximum number of nodes to be accessed if a <span>\\( B^+ \\)</span> tree index is used?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">10</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> For the <b>maximum number of nodes accessed</b> (worst-case height), each internal node has minimum allowed branching (half-full):<br><br>1. Minimum children per non-root internal node = <span>\\( \\lceil m / 2 \\rceil = \\lceil 100 / 2 \\rceil = 50 \\)</span>.<br>2. With minimum branching factor <span>\\( b = 50 \\)</span>:<br>- 1 level: <span>\\( \\le 50 \\)</span> records<br>- 2 levels: <span>\\( \\le 50^2 = 2,500 \\)</span> records<br>- 3 levels: <span>\\( \\le 50^3 = 125,000 \\)</span> records<br>- 4 levels: <span>\\( 50^4 = 6,250,000 \\)</span> records.<br><br>Since <span>\\( 125,000 < 10^6 \\le 6,250,000 \\)</span>, the tree requires <b>4 levels</b> in the worst case.<br>Thus, the maximum number of nodes accessed to reach a leaf record is <b>4</b>.<br><br><b>Answer: 4 (Option B)</b><br><br><a href="https://gateoverflow.in/213539/isro2018-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Consider key insertion in a B-Tree of 4 levels (Root <span>\\( \\rightarrow \\)</span> Level 2 <span>\\( \\rightarrow \\)</span> Level 3 <span>\\( \\rightarrow \\)</span> Leaf):<br><br>1. In the worst case, the key is inserted into an already full leaf node, causing it to split and produce <b>1 new leaf node</b>.<br>2. The promoted median key moves to its parent internal node. If that node is also full, it splits, producing <b>1 new node at Level 3</b>.<br>3. This split can propagate upward through Level 2 (producing <b>1 new node at Level 2</b>).<br>4. Finally, if the root itself is full, it splits, producing <b>1 new node at Level 1</b> and triggering the creation of a <b>brand new root node</b> above it.<br><br>Total new nodes created = 4 split halves + 1 new root = <b>5 new nodes</b>.<br><br><b>Answer: 5 (Option A)</b><br><br><a href="https://gateoverflow.in/3768/gate2005-it-23-isro2017-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of these is a characteristic of RAID 5?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dedicated parity</span>`,
                `<span style="display: inline;">Double parity</span>`,
                `<span style="display: inline;">Hamming code parity</span>`,
                `<span style="display: inline;">Distributed parity</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <b>RAID 5</b> employs block-level striping with <b>distributed parity</b> across all member disks.<br><br>- Unlike RAID 4 (which concentrates all parity blocks onto a single dedicated parity disk creating a write bottleneck), RAID 5 distributes parity blocks uniformly across all disks.<br>- RAID 6 uses <i>double distributed parity</i> (tolerates two simultaneous disk failures).<br>- RAID 2 uses <i>Hamming code parity</i>.<br><br>Therefore, the defining characteristic of RAID 5 is <b>Distributed parity</b>.<br><br><b>Answer: Distributed parity (Option D)</b><br><br><a href="https://gateoverflow.in/128687/isro2017-45" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">In a <span>\\( B^{+} \\)</span> tree, if the search-key value is 8 bytes long, the block size is 512 bytes and the block pointer size is 2 bytes, then maximum order of the <span>\\( B^{+} \\)</span> tree is _____.</span>`,
            image: "",
            options: [],
            answer: "52",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> The order <span>\\( p \\)</span> of a <span>\\( B^{+} \\)</span> tree internal node is defined as the maximum number of block (child) pointers it can contain.<br><br>1. An internal node with <span>\\( p \\)</span> block pointers contains <span>\\( p - 1 \\)</span> search keys.<br>2. Given:<br>- Block size <span>\\( B = 512 \\)</span> bytes<br>- Search key size <span>\\( K = 8 \\)</span> bytes<br>- Block pointer size <span>\\( P = 2 \\)</span> bytes<br><br>3. Node capacity inequality:<br><span>\\( p \\cdot P + (p - 1) \\cdot K \\le B \\)</span><br><span>\\( 2p + 8(p - 1) \\le 512 \\implies 10p - 8 \\le 512 \\implies 10p \\le 520 \\implies p \\le 52 \\)</span>.<br><br>Therefore, the maximum order of the <span>\\( B^{+} \\)</span> tree is <b>52</b>.<br><br><b>Answer: 52</b><br><br><a href="https://gateoverflow.in/118561/gate2017-2-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A clustering index is defined on the fields which are of type:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">non-key and ordering</span>`,
                `<span style="display: inline;">non-key and non-ordering</span>`,
                `<span style="display: inline;">key and ordering</span>`,
                `<span style="display: inline;">key and non-ordering</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Standard database classification of single-level ordered indexes:<br><br>- <b>Primary Index:</b> Defined on an <b>ordering key</b> field (the data file is physically sorted on a key attribute that has unique values).<br>- <b>Clustering Index:</b> Defined on an <b>ordering non-key</b> field (the data file is physically sorted on a non-unique attribute where multiple records share identical values).<br>- <b>Secondary Index:</b> Defined on any <b>non-ordering</b> field (whether key or non-key).<br><br>Therefore, a clustering index is defined on <b>non-key and ordering</b> fields.<br><br><b>Answer: non-key and ordering (Option A)</b><br><br><a href="https://gateoverflow.in/414/gate2008-16-isro2016-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The order of a leaf node in a <span>\\( B^+ \\)</span>-tree is the maximum number of (value, data record pointer) pairs it can hold. Given that the block size is 1K bytes, data record pointer is 7 bytes long, the value field is 9 bytes long and a block pointer is 6 bytes long, what is the order of the leaf node?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">63</span>`,
                `<span style="display: inline;">64</span>`,
                `<span style="display: inline;">67</span>`,
                `<span style="display: inline;">68</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In a <span>\\( B^+ \\)</span>-tree leaf node:<br><br>1. The node holds <span>\\( n \\)</span> pairs of <code>(value, record pointer)</code> and 1 block pointer linking to the next leaf node.<br>2. Given:<br>- Block size <span>\\( B = 1024 \\)</span> bytes<br>- Value size <span>\\( V = 9 \\)</span> bytes<br>- Data record pointer size <span>\\( R_p = 7 \\)</span> bytes<br>- Next leaf block pointer size <span>\\( P = 6 \\)</span> bytes<br><br>3. Leaf capacity constraint:<br><span>\\( n \\cdot (V + R_p) + P \\le B \\)</span><br><span>\\( n(9 + 7) + 6 \\le 1024 \\implies 16n \\le 1018 \\implies n \\le \\lfloor 1018 / 16 \\rfloor = 63 \\)</span>.<br><br>Therefore, the order of the leaf node is <b>63</b>.<br><br><b>Answer: 63 (Option A)</b><br><br><a href="https://gateoverflow.in/1261/gate2007-63-isro2016-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(File System-II)",
    date: "sep 10, 2026",
    topicsCovered: "B+ Tree Order & Capacity, Clustered vs Dense Indexing, Block Allocations, Access Control Matrices & Secondary Access Paths",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given a block can hold either 3 records or 10 key pointers. A database contains <span>\\( n \\)</span> records, then how many blocks do we need to hold the data file and the dense index?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 13n/30 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n/3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n/10 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n/30 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Data File Blocks:</b><br>Each block can store 3 data records. For <span>\\( n \\)</span> records, the data file requires:<br><span>\\( B_{\\text{data}} = \\frac{n}{3} \\)</span> blocks.<br><br>2. <b>Dense Index Blocks:</b><br>A dense index maintains an index entry for every record in the data file (total <span>\\( n \\)</span> entries). Since one block can store 10 key pointers, the index file requires:<br><span>\\( B_{\\text{index}} = \\frac{n}{10} \\)</span> blocks.<br><br>3. <b>Total Blocks:</b><br><span>\\( B_{\\text{total}} = \\frac{n}{3} + \\frac{n}{10} = \\frac{10n + 3n}{30} = \\frac{13n}{30} \\)</span> blocks.<br><br><b>Answer: 13n/30 (Option A)</b><br><br><a href="https://gateoverflow.in/19400/isro2015-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a B+ tree in which the search key is 12 bytes long, block size is 1024 bytes, record pointer is 10 bytes long and block pointer is 8 bytes long. The maximum number of keys that can be accommodated in each non-leaf node of the tree is _____.</span>`,
            image: "",
            options: [],
            answer: "50",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In a <span>\\( B^+ \\)</span> tree, non-leaf (internal) nodes store search keys and block (tree) pointers to direct navigation. They do <b>not</b> store record pointers.<br><br>2. Let <span>\\( p \\)</span> be the maximum order (number of block pointers) of an internal node. An internal node with <span>\\( p \\)</span> block pointers holds <span>\\( p - 1 \\)</span> search keys.<br><br>3. Given:<br>- Block size <span>\\( B = 1024 \\)</span> bytes<br>- Search key size <span>\\( K = 12 \\)</span> bytes<br>- Block pointer size <span>\\( P = 8 \\)</span> bytes<br><br>4. Node capacity constraint:<br><span>\\( p \\cdot P + (p - 1) \\cdot K \\le B \\)</span><br><span>\\( 8p + 12(p - 1) \\le 1024 \\implies 20p - 12 \\le 1024 \\implies 20p \\le 1036 \\implies p \\le 51.8 \\)</span><br>So the maximum order is <span>\\( p = 51 \\)</span>.<br><br>5. Maximum number of keys accommodated = <span>\\( p - 1 = 51 - 1 = 50 \\)</span>.<br><br><b>Answer: 50</b><br><br><a href="https://gateoverflow.in/8555/gate2015-3-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A file is organized so that the ordering of data records is the same as or close to the ordering of data entries in some index. Then that index is called:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dense</span>`,
                `<span style="display: inline;">Sparse</span>`,
                `<span style="display: inline;">Clustered</span>`,
                `<span style="display: inline;">Unclustered</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> An index is defined as a <b>Clustered Index</b> if the physical ordering of records in the data file matches or closely follows the order of entries in the index file.<br><br>- A data file can have at most one clustered index because the physical data records can only be stored in one primary sorted order.<br>- If the data records are ordered differently from the index entries, the index is called <b>Unclustered</b>.<br><br><b>Answer: Clustered (Option C)</b><br><br><a href="https://gateoverflow.in/8222/gate2015-1-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system where each file is associated with a 16 bit number. For each file, each user should have the read and write capability. How much memory is needed to store each user's access data?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">16 KB</span>`,
                `<span style="display: inline;">32 KB</span>`,
                `<span style="display: inline;">64 KB</span>`,
                `<span style="display: inline;">128 KB</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. With a 16-bit file identifier, the system supports a maximum of <span>\\( 2^{16} = 65,536 \\)</span> files.<br>2. For each file, each user requires 2 bits of access permissions (1 bit for Read permission and 1 bit for Write permission).<br>3. Total memory required per user in bits:<br><span>\\( 2^{16} \\times 2 = 2^{17} \\)</span> bits.<br>4. Converting to bytes and kilobytes:<br><span>\\( \\frac{2^{17} \\text{ bits}}{8 \\text{ bits/byte}} = 2^{14} \\text{ bytes} = \\frac{2^{14}}{1024} \\text{ KB} = 16 \\text{ KB} \\)</span>.<br><br><b>Answer: 16 KB (Option A)</b><br><br><a href="https://gateoverflow.in/15029/isro2014-66" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Embedded pointer provides:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A secondary access path</span>`,
                `<span style="display: inline;">A physical record key</span>`,
                `<span style="display: inline;">An inverted index</span>`,
                `<span style="display: inline;">A primary key</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> An <b>embedded pointer</b> is a pointer stored directly inside a data record that links it to another related record (for example, chaining records that share common properties or ordering).<br><br>Because it creates a direct logical link between related records without altering the primary physical placement of records on disk, it provides <b>a secondary access path</b> for traversing related data.<br><br><b>Answer: A secondary access path (Option A)</b><br><br><a href="https://gateoverflow.in/44407/isro-2013-61-isro2008-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The physical location of a record determined by a formula that transforms a file key into a record location is called a:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Hashed file</span>`,
                `<span style="display: inline;">B-Tree file</span>`,
                `<span style="display: inline;">Indexed file</span>`,
                `<span style="display: inline;">Sequential file</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In a <b>Hashed file organization</b>, a mathematical hash function (formula) is applied to the search key to compute the direct physical address (bucket or block address) where the record is located.<br><br>- <b>B-Tree / Indexed files</b> use multi-level pointer structures to search for records rather than a direct mathematical formula.<br>- <b>Sequential files</b> place records linearly in sorted order of search keys without mathematical address translation.<br><br><b>Answer: Hashed file (Option A)</b><br><br><a href="https://gateoverflow.in/43938/isro-2013-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Calculate the order of leaf (<span>\\( P_{\\text{leaf}} \\)</span>) and non-leaf (<span>\\( P \\)</span>) nodes of a <span>\\( B^{+} \\)</span> tree based on the information given below:<br><br>Search key field = 12 bytes<br>Record pointer = 10 bytes<br>Block pointer = 8 bytes<br>Block size = 1KB (1024 bytes)</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( P_{\\text{leaf}} = 51 \\text{ & } P = 46 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P_{\\text{leaf}} = 47 \\text{ & } P = 52 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P_{\\text{leaf}} = 46 \\text{ & } P = 51 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P_{\\text{leaf}} = 52 \\text{ & } P = 47 \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>Non-leaf node order (<span>\\( P \\)</span>):</b><br>A non-leaf internal node contains <span>\\( P \\)</span> block pointers and <span>\\( P - 1 \\)</span> search keys:<br><span>\\( P \\cdot (\\text{Block Pointer}) + (P - 1) \\cdot (\\text{Key}) \\le \\text{Block Size} \\)</span><br><span>\\( 8P + 12(P - 1) \\le 1024 \\implies 20P - 12 \\le 1024 \\implies 20P \\le 1036 \\implies P \\le 51.8 \\implies P = 51 \\)</span>.<br><br>2. <b>Leaf node order (<span>\\( P_{\\text{leaf}} \\)</span>):</b><br>A leaf node contains <span>\\( P_{\\text{leaf}} \\)</span> pairs of (Key, Record Pointer) and 1 block pointer linking to the next leaf node:<br><span>\\( P_{\\text{leaf}} \\cdot (12 + 10) + 8 \\le 1024 \\implies 22 \\cdot P_{\\text{leaf}} + 8 \\le 1024 \\implies 22 \\cdot P_{\\text{leaf}} \\le 1016 \\implies P_{\\text{leaf}} \\le 46.18 \\implies P_{\\text{leaf}} = 46 \\)</span>.<br><br>Therefore, <span>\\( P_{\\text{leaf}} = 46 \\)</span> and <span>\\( P = 51 \\)</span>.<br><br><b>Answer: <span>\\( P_{\\text{leaf}} = 46 \\text{ & } P = 51 \\)</span> (Option C)</b><br><br><a href="https://gateoverflow.in/43933/isro-2013-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An index is clustered, if:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">it is on a set of fields that form a candidate key.</span>`,
                `<span style="display: inline;">it is on a set of fields that include the primary key</span>`,
                `<span style="display: inline;">the data records of the file are organized in the same order as the data entries of the index.</span>`,
                `<span style="display: inline;">the data records of the file are organized not in the same order as the data entries of the index.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> By definition in database management systems, an index is called <b>clustered</b> if the data records in the file are physically stored in the same order (or approximately the same order) as the data entries in the index.<br><br>Because data files have only one physical arrangement on disk, a file can have at most one clustered index.<br><br><b>Answer: the data records of the file are organized in the same order as the data entries of the index (Option C)</b><br><br><a href="https://gateoverflow.in/1437/gate2013-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In database and file systems, an embedded pointer provides:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A secondary access path</span>`,
                `<span style="display: inline;">A physical record key</span>`,
                `<span style="display: inline;">An inverted index</span>`,
                `<span style="display: inline;">A primary key</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> An <b>embedded pointer</b> is a pointer field stored directly within a record (rather than in an external index file) that points to another record.<br><br>This allows related records or linked lists of records across blocks to be chained together directly, providing <b>a secondary access path</b> to traverse the database without changing the underlying physical block storage order.<br><br><b>Answer: A secondary access path (Option A)</b><br><br><a href="https://gateoverflow.in/44407/isro-2013-61-isro2008-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a file of 16384 records. Each record is 32 bytes long and its key field is of size 6 bytes. The file is ordered on a non-key field, and the file organization is unspanned. The file is stored in a file system with block size 1024 bytes, and the size of a block pointer is 10 bytes. If the secondary index is built on the key field of the file, and a multi-level index scheme is used to store the secondary index, the number of first-level and second-level blocks in the multi-level index are respectively:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">8 and 0</span>`,
                `<span style="display: inline;">128 and 6</span>`,
                `<span style="display: inline;">256 and 4</span>`,
                `<span style="display: inline;">512 and 5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. <b>First-Level Index:</b><br>- Since the secondary index is built on a key field, there is one index entry for every record in the data file (dense index):<br>Total entries = 16384.<br>- Size of each entry = <span>\\( \\text{Key size} + \\text{Pointer size} = 6 + 10 = 16 \\)</span> bytes.<br>- Number of entries per block = <span>\\( \\lfloor 1024 / 16 \\rfloor = 64 \\)</span> entries/block.<br>- Number of first-level blocks = <span>\\( \\frac{16384}{64} = 256 \\)</span> blocks.<br><br>2. <b>Second-Level Index:</b><br>- The second-level index indexes each of the 256 first-level blocks (sparse index):<br>Total entries = 256.<br>- Size of each entry = <span>\\( 6 + 10 = 16 \\)</span> bytes.<br>- Number of entries per block = <span>\\( \\lfloor 1024 / 16 \\rfloor = 64 \\)</span> entries/block.<br>- Number of second-level blocks = <span>\\( \\frac{256}{64} = 4 \\)</span> blocks.<br><br>Therefore, the number of first-level and second-level blocks are <b>256 and 4</b> respectively.<br><br><b>Answer: 256 and 4 (Option C)</b><br><br><a href="https://gateoverflow.in/259/gate2008-70#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A clustering index is defined on the fields which are of type:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">non-key and ordering</span>`,
                `<span style="display: inline;">non-key and non-ordering</span>`,
                `<span style="display: inline;">key and ordering</span>`,
                `<span style="display: inline;">key and non-ordering</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Classification of single-level ordered indexes in relational database design:<br><br>- <b>Primary Index:</b> Defined on an <b>ordering key</b> field (the data file is physically sorted on an attribute with distinct, unique values).<br>- <b>Clustering Index:</b> Defined on an <b>ordering non-key</b> field (the data file is physically sorted on a non-unique attribute where multiple records share the same value).<br>- <b>Secondary Index:</b> Defined on any <b>non-ordering</b> field.<br><br>Therefore, a clustering index is defined on <b>non-key and ordering</b> fields.<br><br><b>Answer: non-key and ordering (Option A)</b><br><br><a href="https://gateoverflow.in/414/gate2008-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The order of a leaf node in a <span>\\( B^+ \\)</span> tree is the maximum number of (value, data record pointer) pairs it can hold. Given that the block size is 1K bytes, data record pointer is 7 bytes long, the value field is 9 bytes long and a block pointer is 6 bytes long, what is the order of the leaf node?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">63</span>`,
                `<span style="display: inline;">64</span>`,
                `<span style="display: inline;">67</span>`,
                `<span style="display: inline;">68</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In a <span>\\( B^+ \\)</span> tree leaf node:<br>- Each leaf holds <span>\\( n \\)</span> pairs of <code>(value, data record pointer)</code>.<br>- It also holds 1 block pointer linking to the next leaf node.<br><br>2. Given:<br>- Block size <span>\\( B = 1024 \\)</span> bytes<br>- Value field <span>\\( V = 9 \\)</span> bytes<br>- Data record pointer <span>\\( R_p = 7 \\)</span> bytes<br>- Next leaf block pointer <span>\\( P = 6 \\)</span> bytes<br><br>3. Leaf node capacity condition:<br><span>\\( n \\cdot (V + R_p) + P \\le B \\)</span><br><span>\\( n \\cdot (9 + 7) + 6 \\le 1024 \\implies 16n + 6 \\le 1024 \\implies 16n \\le 1018 \\implies n \\le \\lfloor 1018 / 16 \\rfloor = 63 \\)</span>.<br><br>Therefore, the order of the leaf node is <b>63</b>.<br><br><b>Answer: 63 (Option A)</b><br><br><a href="https://gateoverflow.in/1261/gate2007-63#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In a database file structure, the search key field is 9 bytes long, the block size is 512 bytes, a record pointer is 7 bytes and a block pointer is 6 bytes. The largest possible order of a non-leaf node in a <span>\\( B^+ \\)</span> tree implementing this file structure is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">23</span>`,
                `<span style="display: inline;">24</span>`,
                `<span style="display: inline;">34</span>`,
                `<span style="display: inline;">44</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In a <span>\\( B^+ \\)</span> tree, non-leaf (internal) nodes do <b>not</b> store record pointers. They store only child block pointers and search keys.<br><br>2. An internal node with order <span>\\( p \\)</span> contains <span>\\( p \\)</span> block pointers and <span>\\( p - 1 \\)</span> search keys.<br><br>3. Given:<br>- Block size <span>\\( B = 512 \\)</span> bytes<br>- Search key size <span>\\( K = 9 \\)</span> bytes<br>- Block pointer size <span>\\( P = 6 \\)</span> bytes<br><br>4. Node capacity constraint:<br><span>\\( p \\cdot P + (p - 1) \\cdot K \\le B \\)</span><br><span>\\( 6p + 9(p - 1) \\le 512 \\implies 15p - 9 \\le 512 \\implies 15p \\le 521 \\implies p \\le \\lfloor 521 / 15 \\rfloor = 34 \\)</span>.<br><br>Therefore, the largest possible order of a non-leaf node is <b>34</b>.<br><br><b>Answer: 34 (Option C)</b><br><br><a href="https://gateoverflow.in/3605/gate2006-it-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <code>enrolled(student, course)</code> in which <code>(student, course)</code> is the primary key, and the relation <code>paid(student, amount)</code> where <code>student</code> is the primary key. Assume no null values and no foreign keys or integrity constraints. Assume that amounts 6000, 7000, 8000, 9000, and 10000 were each paid by 20% of the students. Consider these query plans (Plan 1 on left, Plan 2 on right) to "list all courses taken by students who have paid more than x."<br><br><img src="images/twt-dbms/q69_2006.jpg"><br><br>A disk seek takes 4 ms, disk data transfer bandwidth is 300 MB/s, and checking a tuple to see if amount is greater than x takes 10 <span>\\( \\mu\\text{s} \\)</span>. Which of the following statements is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Plan 1 and Plan 2 will not output identical row sets for all databases</span>`,
                `<span style="display: inline;">A course may be listed more than once in the output of Plan 1 for some databases</span>`,
                `<span style="display: inline;">For x = 5000, Plan 1 executes faster than Plan 2 for all databases</span>`,
                `<span style="display: inline;">For x = 9000, Plan 1 executes slower than Plan 2 for all databases</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. For <span>\\( x = 5000 \\)</span>:<br>- Since every student paid at least 6000, 100% of students satisfy <code>amount > 5000</code>.<br>- In <b>Plan 1</b>, the selection predicate <code>amount > x</code> is pushed down and executed directly on the <code>Paid</code> relation before joining. All students pass the filter and then probe the index on <code>Enrolled</code>.<br>- In <b>Plan 2</b>, the join between <code>Paid</code> and <code>Enrolled</code> is performed first, and only after joining is the predicate <code>amount > x</code> evaluated on all joined tuples.<br><br>2. Because Plan 1 filters early, it performs selection during the single sequential scan of <code>Paid</code> and never tests tuples again after join, whereas Plan 2 must test the condition on every tuple produced by the join (which is larger than <code>Paid</code> since students take multiple courses).<br><br>Therefore, for <span>\\( x = 5000 \\)</span>, Plan 1 executes faster than Plan 2 for all databases.<br><br><b>Answer: For x = 5000, Plan 1 executes faster than Plan 2 for all databases (Option C)</b><br><br><a href="https://gateoverflow.in/1847/gate2006-69#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A database table <span>\\( T_1 \\)</span> has 2000 records and occupies 80 disk blocks. Another table <span>\\( T_2 \\)</span> has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for <span>\\( T_1 \\)</span> and one block of records for <span>\\( T_2 \\)</span> simultaneously at any point in time. No index is available on either table.<br><br>If, instead of Nested-loop join, Block nested-loop join is used, again with the most appropriate choice of table in the outer loop, the reduction in number of block accesses required for reading the data will be:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">30400</span>`,
                `<span style="display: inline;">38400</span>`,
                `<span style="display: inline;">798400</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Let <span>\\( T_1 \\)</span> have <span>\\( R_1 = 2000 \\)</span> records, <span>\\( B_1 = 80 \\)</span> blocks.<br>Let <span>\\( T_2 \\)</span> have <span>\\( R_2 = 400 \\)</span> records, <span>\\( B_2 = 20 \\)</span> blocks.<br><br>1. <b>Simple (Tuple) Nested-Loop Join:</b><br>- For each record of the outer table, the entire inner table is scanned from disk.<br>- To minimize I/O, choose table with fewer records as outer table (<span>\\( T_2 \\)</span>):<br><span>\\( \\text{Block accesses} = B_2 + R_2 \\times B_1 = 20 + 400 \\times 80 = 20 + 32000 = 32,020 \\)</span>.<br><br>2. <b>Block Nested-Loop Join:</b><br>- For each block of the outer table, the entire inner table is read once from disk.<br>- To minimize I/O, choose table with fewer blocks as outer table (<span>\\( T_2 \\)</span>):<br><span>\\( \\text{Block accesses} = B_2 + B_2 \\times B_1 = 20 + 20 \\times 80 = 20 + 1600 = 1,620 \\)</span>.<br><br>3. <b>Reduction in Block Accesses:</b><br><span>\\( \\text{Reduction} = 32,020 - 1,620 = 30,400 \\)</span>.<br><br><b>Answer: 30400 (Option B)</b><br><br><a href="https://gateoverflow.in/3848/gate2005-it-82b" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(File System-III)",
    date: "sep 11, 2026",
    topicsCovered: "Nested-Loop vs Block Nested-Loop Joins, Disk Space Allocation & Bookkeeping, B-Tree Node Capacity, Disk Block Transfers & Fanout",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A database table <span>\\( T_1 \\)</span> has 2000 records and occupies 80 disk blocks. Another table <span>\\( T_2 \\)</span> has 400 records and occupies 20 disk blocks. These two tables have to be joined as per a specified join condition that needs to be evaluated for every pair of records from these two tables. The memory buffer space available can hold exactly one block of records for <span>\\( T_1 \\)</span> and one block of records for <span>\\( T_2 \\)</span> simultaneously at any point in time. No index is available on either table.<br><br>If Nested-loop join algorithm is employed to perform the join, with the most appropriate choice of table to be used in outer loop, the number of block accesses required for reading the data are:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">800000</span>`,
                `<span style="display: inline;">40080</span>`,
                `<span style="display: inline;">32020</span>`,
                `<span style="display: inline;">100</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In Simple (Tuple/Record) Nested-Loop Join without indexes:<br><br>1. For each record in the outer relation, the entire inner relation is read from disk.<br>2. Cost formula:<br><span>\\( \\text{Cost} = B_{\\text{outer}} + R_{\\text{outer}} \\times B_{\\text{inner}} \\)</span>.<br><br>- If <span>\\( T_1 \\)</span> is outer: <span>\\( 80 + 2000 \\times 20 = 40,080 \\)</span> block accesses.<br>- If <span>\\( T_2 \\)</span> is outer: <span>\\( 20 + 400 \\times 80 = 20 + 32,000 = 32,020 \\)</span> block accesses.<br><br>The most appropriate choice is using table <span>\\( T_2 \\)</span> (having fewer records) in the outer loop, requiring <b>32,020</b> block accesses.<br><br><b>Answer: 32020 (Option C)</b><br><br><a href="https://gateoverflow.in/3847/gate2005-it-82a" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In a computer system, four files of size 11050 bytes, 4990 bytes, 5170 bytes and 12640 bytes need to be stored. For storing these files on disk, we can use either 100 byte disk blocks or 200 byte disk blocks (but can't mix block sizes). For each block used to store a file, 4 bytes of bookkeeping information also needs to be stored on the disk. Thus, the total space used to store a file is the sum of the space taken to store the file and the space taken to store the bookkeeping information for the blocks allocated for storing the file. A disk block can store either bookkeeping information for a file or data from a file, but not both.<br><br>What is the total space required for storing the files using 100 byte disk blocks and 200 byte disk blocks respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">35400 and 35800 bytes</span>`,
                `<span style="display: inline;">35800 and 35400 bytes</span>`,
                `<span style="display: inline;">35600 and 35400 bytes</span>`,
                `<span style="display: inline;">35400 and 35600 bytes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Files: <span>\\( F_1 = 11050 \\text{ B}, F_2 = 4990 \\text{ B}, F_3 = 5170 \\text{ B}, F_4 = 12640 \\text{ B} \\)</span>.<br><br><b>Case 1: 100-byte block size</b><br>- Data blocks per file:<br><span>\\( \\lceil 11050 / 100 \\rceil = 111 \\)</span>, <span>\\( \\lceil 4990 / 100 \\rceil = 50 \\)</span>, <span>\\( \\lceil 5170 / 100 \\rceil = 52 \\)</span>, <span>\\( \\lceil 12640 / 100 \\rceil = 127 \\)</span>.<br>Total data blocks = <span>\\( 111 + 50 + 52 + 127 = 340 \\)</span> blocks <span>\\( \\rightarrow 34,000 \\)</span> bytes.<br>- Bookkeeping blocks (each block holds <span>\\( \\lfloor 100 / 4 \\rfloor = 25 \\)</span> entries):<br><span>\\( \\lceil 111/25 \\rceil = 5 \\)</span>, <span>\\( \\lceil 50/25 \\rceil = 2 \\)</span>, <span>\\( \\lceil 52/25 \\rceil = 3 \\)</span>, <span>\\( \\lceil 127/25 \\rceil = 6 \\)</span>.<br>Total bookkeeping blocks = <span>\\( 5 + 2 + 3 + 6 = 16 \\)</span> blocks <span>\\( \\rightarrow 1,600 \\)</span> bytes.<br>Total space for 100-byte blocks = <span>\\( 34,000 + 1,600 = 35,600 \\)</span> bytes.<br><br><b>Case 2: 200-byte block size</b><br>- Data blocks per file:<br><span>\\( \\lceil 11050 / 200 \\rceil = 56 \\)</span>, <span>\\( \\lceil 4990 / 200 \\rceil = 25 \\)</span>, <span>\\( \\lceil 5170 / 200 \\rceil = 26 \\)</span>, <span>\\( \\lceil 12640 / 200 \\rceil = 64 \\)</span>.<br>Total data blocks = <span>\\( 56 + 25 + 26 + 64 = 171 \\)</span> blocks <span>\\( \\rightarrow 34,200 \\)</span> bytes.<br>- Bookkeeping blocks (each block holds <span>\\( \\lfloor 200 / 4 \\rfloor = 50 \\)</span> entries):<br><span>\\( \\lceil 56/50 \\rceil = 2 \\)</span>, <span>\\( \\lceil 25/50 \\rceil = 1 \\)</span>, <span>\\( \\lceil 26/50 \\rceil = 1 \\)</span>, <span>\\( \\lceil 64/50 \\rceil = 2 \\)</span>.<br>Total bookkeeping blocks = <span>\\( 2 + 1 + 1 + 2 = 6 \\)</span> blocks <span>\\( \\rightarrow 1,200 \\)</span> bytes.<br>Total space for 200-byte blocks = <span>\\( 34,200 + 1,200 = 35,400 \\)</span> bytes.<br><br><b>Answer: 35600 and 35400 bytes (Option C)</b><br><br><a href="https://gateoverflow.in/3824/gate2005-it-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A B-Tree used as an index for a large database table has four levels including the root node. If a new key is inserted in this index, then the maximum number of nodes that could be newly created in the process are:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In a B-Tree of height 4 (4 levels including root):<br><br>1. In the worst case, insertion into a full leaf node causes a split, producing <b>1 new leaf node</b>.<br>2. The promoted median key causes a cascade of splits in full parent internal nodes upward across all 3 upper levels, producing <b>3 new internal nodes</b>.<br>3. Finally, when the root splits, a <b>new root node</b> is created to hold the promoted key and pointers to the two halves of the old root.<br><br>Total maximum new nodes created = <span>\\( 4 + 1 = 5 \\)</span>.<br><br><b>Answer: 5 (Option A)</b><br><br><a href="https://gateoverflow.in/3768/gate2005-it-23-isro2017-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is a key factor for preferring <span>\\( B^{+} \\)</span>-trees to binary search trees for indexing database relations?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Database relations have a large number of records</span>`,
                `<span style="display: inline;">Database relations are sorted on the primary key</span>`,
                `<span style="display: inline;"><span>\\( B^{+} \\)</span>-trees require less memory than binary search trees</span>`,
                `<span style="display: inline;">Data transfer from disks is in blocks</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Secondary storage devices transfer data in units of disk <b>blocks</b> (typically 4 KB or 8 KB), where each block transfer incurs a mechanical seek and rotational latency.<br><br>- In a binary search tree, the branching factor is only 2, which leads to deep trees where each node access retrieves only a tiny fraction of a disk block, requiring high numbers of disk I/Os.<br>- In contrast, <span>\\( B^{+} \\)</span>-trees have large branching factors (order in hundreds), designed so that each node matches the block size perfectly. This makes the tree very flat (height 3 to 4) and drastically reduces the number of block accesses.<br><br>Therefore, the key factor is that <b>data transfer from disks is in blocks</b>.<br><br><b>Answer: Data transfer from disks is in blocks (Option D)</b><br><br><a href="https://gateoverflow.in/1364/gate2005-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a table T in a relational database with a key field K. A B-tree of order p is used as an access structure on K, where p denotes the maximum number of tree pointers in a B-tree index node. Assume that K is 10 bytes long; disk block size is 512 bytes; each data pointer <span>\\( P_D \\)</span> is 8 bytes long and each block pointer <span>\\( P_B \\)</span> is 5 bytes long. In order for each B-tree node to fit in a single disk block, the maximum value of p is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">20</span>`,
                `<span style="display: inline;">22</span>`,
                `<span style="display: inline;">23</span>`,
                `<span style="display: inline;">32</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In a standard <b>B-tree</b> (where internal nodes store data pointers alongside keys):<br><br>1. A node with <span>\\( p \\)</span> block (tree) pointers contains <span>\\( p - 1 \\)</span> search keys and <span>\\( p - 1 \\)</span> data pointers.<br>2. Given:<br>- Block size <span>\\( B = 512 \\)</span> bytes<br>- Key field size <span>\\( K = 10 \\)</span> bytes<br>- Data pointer size <span>\\( P_D = 8 \\)</span> bytes<br>- Block pointer size <span>\\( P_B = 5 \\)</span> bytes<br><br>3. B-tree node capacity constraint:<br><span>\\( p \\cdot P_B + (p - 1) \\cdot (K + P_D) \\le B \\)</span><br><span>\\( 5p + (p - 1)(10 + 8) \\le 512 \\implies 5p + 18p - 18 \\le 512 \\implies 23p \\le 530 \\implies p \\le \\lfloor 530 / 23 \\rfloor = 23 \\)</span>.<br><br>Therefore, the maximum value of <span>\\( p \\)</span> is <b>23</b>.<br><br><b>Answer: 23 (Option C)</b><br><br><a href="https://gateoverflow.in/3723/gate2004-it-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The order of an internal node in a <span>\\( B^+ \\)</span> tree index is the maximum number of children it can have. Suppose that a child pointer takes 6 bytes, the search field value takes 14 bytes, and the block size is 512 bytes. What is the order of the internal node?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">24</span>`,
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">26</span>`,
                `<span style="display: inline;">27</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. In a <span>\\( B^+ \\)</span> tree internal node, order <span>\\( p \\)</span> represents the maximum number of child pointers it can hold.<br>2. An internal node with <span>\\( p \\)</span> child pointers holds <span>\\( p - 1 \\)</span> search field values.<br>3. Given:<br>- Block size <span>\\( B = 512 \\)</span> bytes<br>- Child pointer size <span>\\( P = 6 \\)</span> bytes<br>- Search field value size <span>\\( K = 14 \\)</span> bytes<br><br>4. Node capacity inequality:<br><span>\\( p \\cdot P + (p - 1) \\cdot K \\le B \\)</span><br><span>\\( 6p + 14(p - 1) \\le 512 \\implies 6p + 14p - 14 \\le 512 \\implies 20p \\le 526 \\implies p \\le \\lfloor 526 / 20 \\rfloor = 26 \\)</span>.<br><br>Therefore, the order of the internal node is <b>26</b>.<br><br><b>Answer: 26 (Option C)</b><br><br><a href="https://gateoverflow.in/1048/gate2004-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A <span>\\( B^+ \\)</span>-tree index is to be built on the <code>Name</code> attribute of the relation <code>STUDENT</code>. Assume that all student names are of length 8 bytes, disk blocks are of size 512 bytes, and index pointers are of size 4 bytes. Given this scenario, what would be the best choice of the degree (i.e. the number of pointers per node) of the <span>\\( B^+ \\)</span>-tree?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">16</span>`,
                `<span style="display: inline;">42</span>`,
                `<span style="display: inline;">43</span>`,
                `<span style="display: inline;">44</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> 1. Let <span>\\( p \\)</span> be the degree (maximum number of pointers per internal node).<br>2. An internal node with <span>\\( p \\)</span> pointers accommodates <span>\\( p - 1 \\)</span> search key values.<br>3. Given:<br>- Search key length <span>\\( K = 8 \\)</span> bytes<br>- Disk block size <span>\\( B = 512 \\)</span> bytes<br>- Index pointer size <span>\\( P = 4 \\)</span> bytes<br><br>4. Node capacity constraint:<br><span>\\( p \\cdot P + (p - 1) \\cdot K \\le B \\)</span><br><span>\\( 4p + 8(p - 1) \\le 512 \\implies 12p - 8 \\le 512 \\implies 12p \\le 520 \\implies p \\le \\lfloor 520 / 12 \\rfloor = 43 \\)</span>.<br><br>Therefore, the best choice of degree is <b>43</b>.<br><br><b>Answer: 43 (Option C)</b><br><br><a href="https://gateoverflow.in/853/gate2002-2-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In the index allocation scheme of blocks to a file, the maximum possible size of the file depends on:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The size of the blocks, and the size of the address of the blocks</span>`,
                `<span style="display: inline;">The number of blocks used for the index, and the size of the blocks.</span>`,
                `<span style="display: inline;">The size of the blocks, the number of blocks used for the index, and the size of the address of the blocks.</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> In an indexed allocation scheme:<br><br>1. <span>\\( \\text{Max File Size} = (\\text{Total addressable data blocks}) \\times (\\text{Block size}) \\)</span>.<br>2. The total addressable data blocks depends on the total capacity of the index, which is given by:<br><span>\\( \\frac{\\text{Number of blocks used for index} \\times \\text{Block size}}{\\text{Size of disk block address}} \\)</span>.<br><br>Hence, the maximum file size depends on:<br>- The size of the blocks,<br>- The number of blocks used for the index, and<br>- The size of the address of the blocks.<br><br><b>Answer: The size of the blocks, the number of blocks used for the index, and the size of the address of the blocks (Option C)</b><br><br><a href="https://gateoverflow.in/852/gate2002-2-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( B^{+} \\)</span>-trees are preferred to binary trees in databases because:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Disk capacities are greater than memory capacities</span>`,
                `<span style="display: inline;">Disk access is much slower than memory access</span>`,
                `<span style="display: inline;">Disk data transfer rates are much less than memory data transfer rates</span>`,
                `<span style="display: inline;">Disks are more reliable than memory</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> Disk access involves physical disk head movement (seek time) and rotational latency, which makes it about <span>\\( 10^5 \\)</span> to <span>\\( 10^6 \\)</span> times slower than electronic main memory access.<br><br>Because disk accesses are exceptionally expensive, databases use multi-way search trees (<span>\\( B^{+} \\)</span>-trees) with high branching factors (fanout of hundreds per node) designed around block sizes, keeping the tree very shallow (height 3–4) and minimizing the number of disk accesses.<br><br>A binary search tree has fanout 2, resulting in a deep tree requiring tens of disk I/Os.<br><br>Therefore, the fundamental reason is that <b>Disk access is much slower than memory access</b>.<br><br><b>Answer: Disk access is much slower than memory access (Option B)</b><br><br><a href="https://gateoverflow.in/646/gate2000-1-22-ugcnet-june2012-ii-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">There are five records in a database:<br><br><span>\\( \\begin{array}{|c|c|c|c|c|} \\hline \\textbf{Record #} & \\textbf{Name} & \\textbf{Age} & \\textbf{Occupation} & \\textbf{Category} \\\\ \\hline 1 & \\text{Rama} & 27 & \\text{CON} & \\text{A} \\\\ \\hline 2 & \\text{Abdul} & 22 & \\text{ENG} & \\text{A} \\\\ \\hline 3 & \\text{Jennifer} & 28 & \\text{DOC} & \\text{B} \\\\ \\hline 4 & \\text{Maya} & 32 & \\text{SER} & \\text{D} \\\\ \\hline 5 & \\text{Dev} & 24 & \\text{MUS} & \\text{C} \\\\ \\hline \\end{array} \\)</span><br><br>There is an index file associated with this and it contains the record pointers in the order 1, 3, 2, 5, and 4. Which one of the fields is the index built from?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Age</span>`,
                `<span style="display: inline;">Name</span>`,
                `<span style="display: inline;">Occupation</span>`,
                `<span style="display: inline;">Category</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> An index stores search keys in sorted (ascending) order alongside their corresponding record pointers.<br><br>Given index order of record pointers: <b>1, 3, 2, 5, 4</b>.<br><br>Evaluating each attribute for the records in this specified order:<br>- <b>Name:</b> Rama (1), Jennifer (3), Abdul (2), Dev (5), Maya (4) <span>\\( \\rightarrow \\)</span> R, J, A, D, M (not sorted).<br>- <b>Age:</b> 27 (1), 28 (3), 22 (2), 24 (5), 32 (4) <span>\\( \\rightarrow \\)</span> 27, 28, 22... (not sorted).<br>- <b>Category:</b> A (1), B (3), A (2), C (5), D (4) <span>\\( \\rightarrow \\)</span> A, B, A... (not sorted).<br>- <b>Occupation:</b><br>1: CON<br>3: DOC<br>2: ENG<br>5: MUS<br>4: SER<br>Sequence: <b>CON <span>\\( \\rightarrow \\)</span> DOC <span>\\( \\rightarrow \\)</span> ENG <span>\\( \\rightarrow \\)</span> MUS <span>\\( \\rightarrow \\)</span> SER</b>.<br>This is in perfect alphabetical (lexicographical) sorted order!<br><br>Therefore, the index is built on the <b>Occupation</b> field.<br><br><b>Answer: Occupation (Option C)</b><br><br><a href="https://gateoverflow.in/1672/gate1998-1-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});
