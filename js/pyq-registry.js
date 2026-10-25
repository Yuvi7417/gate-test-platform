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
            text: `<span style="display: inline;">Consider the following table named Student in a relational database. The primary key of this table is rollNum.<br><span>\\( \\begin{array}{|c|c|c|c|} \\hline \\\\ rollNum&name&gender&marks \\\\ \\hline 1&Naman&M&62\\\\ \\hline 2&Aliya&F&70 \\\\ \\hline 3&Aliya &F&80 \\\\ \\hline 4&James&M&82\\\\ \\hline 5&Swati&F&65\\\\ \\hline \\end{array} \\)</span> <br>The SQL query below is executed on this database.<br> <br><code> SELECT * FROM Student WHERE gender = 'F' AND marks &gt; 65; </code><br><br>The number of rows returned by the query is ______</span>`,
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
            text: `<span style="display: inline;">The relation scheme given below is used to store information about the employees of a company, where empId is the key and deptId indicates the department to which the employee is assigned. Each employee is assigned to exactly one department.<br><br> <span>\\( \\textsf{emp($\\underline{\\textsf{empId}}$, name, gender, salary, deptId)} \\)</span><br><br> Consider the following SQL query:<br><code> select deptId, count(*) from emp where gender = "female" and salary &gt; (select avg(salary) from emp) group by deptId;</code><br>The above query gives, for each department in the company, the number of female employees whose salary is greater than the average salary of</span>`,
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
            text: `<span style="display: inline;">Given relations R(w,x) and S(y,z), the result of<br>SELECT DISTINCT w,x<br>FROM R,S<br>is guaranteed to be same as R, if</span>`,
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
            text: `<span style="display: inline;"><span>\\( \\begin{array}{|l|l|l|l|l|} \\hline \\textbf{Employee} & \\textbf{Department} & \\textbf{OT allowance} \\\\ \\hline \\text{RAMA} & \\text{Mechanical} & \\text{5000} \\\\\\hline \\text{GOPI} & \\text{Electrical} & \\text{2000} \\\\\\hline \\text{SINDHU} & \\text{Computer} & \\text{4000} \\\\\\hline \\text{MAHESH} & \\text{Civil} & \\text{1500} \\\\\\hline \\end{array} \\)</span><br>What is the output of the following SQL query?<br><br><code> select count(*) from ((select Employee, Department from Overtime_allowance) natural join (select Department, OT_allowance from Overtime_allowance) as T);</code><br></span>`,
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
            text: `<span style="display: inline;">The SQL query<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>SELECT columns<br>FROM TableA<br>RIGHT OUTER JOIN TableB<br>ON A.columnName = B.columnName<br>WHERE A.columnName IS NULL</code></pre><br>returns the following:</span>`,
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
            text: `<span style="display: inline;">Consider a relational database containing the following schemas. <br><img src="images/twt-dbms/q13_2020.jpg"><br>The primary key of each table is indicated by underlining the constituent fields.<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>SELECT s.sno, s.sname<br>&nbsp;&nbsp;&nbsp;&nbsp;FROM Suppliers s, Catalogue c<br>&nbsp;&nbsp;&nbsp;&nbsp;WHERE s.sno=c.sno AND<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cost &gt; (SELECT AVG (cost)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM Catalogue<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WHERE pno = 'P4'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GROUP BY pno) ;</code></pre><br>The number of rows returned by the above SQL query is</span>`,
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
            text: `<span style="display: inline;">A relational database contains two tables Student and Performance as shown below: <br><img src="images/twt-dbms/q51_2019.jpg"><br>The primary key of the Student table is Roll_no. For the Performance table, the columns Roll_no. and Subject_code together from the primary key. Consider the SQL query given below:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>SELECT S.Student_name, sum(P.Marks)<br>FROM Student S, Performance P<br>WHERE P.Marks &gt; 84<br>GROUP BY S.Student_name;</code></pre><br>The number of rows returned by the above SQL query is _________ .</span>`,
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
            text: `<span style="display: inline;">Consider the set of relations given below and the SQL query that follows:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>Students: (Roll_number, Name, Date_of_birth)<br>Courses: (Course_number, Course_name, Instructor)<br>Grades: (Roll_number, Course_number, Grade)<br><br>SELECT DISTINCT Name<br>FROM Students, Courses, Grades<br>WHERE Students.Roll_number = Grades.Roll_number<br>&nbsp;&nbsp;&nbsp;&nbsp;AND Courses.Instructor = Sriram<br>&nbsp;&nbsp;&nbsp;&nbsp;AND Courses.Course_number = Grades.Course_number<br>&nbsp;&nbsp;&nbsp;&nbsp;AND Grades.Grade = A</code></pre><br>Which of the following sets is computed by the above query?</span>`,
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
