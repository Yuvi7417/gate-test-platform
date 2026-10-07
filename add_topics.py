import re

topics_map = {
    'TWT-Operating System(CPU Scheduling-II)': 'Round Robin Scheduling, Time Quantum, SRTF, Preemptive Scheduling, Real-time Tasks',
    'TWT-Operating System(CPU Scheduling-III)': 'Scheduling Criteria, Turnaround Time, Waiting Time, Response Time, Priority Scheduling',
    'TWT-Operating System(CPU Scheduling-IV)': 'Multilevel Feedback Queues, Aging, Context Switching, Preemptive vs Non-Preemptive',
    'TWT-Operating System(CPU Scheduling-V)': 'Priority Scheduling, Optimal Non-preemptive Scheduling, Time Quantum Bounds, Throughput',
    'TWT-Operating System(Process Synchronization-I)': 'Binary Semaphores, Shared Variables, Critical Section, Producer-Consumer, Concurrency Anomalies',
    'TWT-Operating System(Process Synchronization-II)': 'Counting Semaphores, Mutual Exclusion, Progress, Bounded Waiting, Hardware Instructions (Test-and-Set)',
    'TWT-Operating System(Process Synchronization-III)': 'Monitors, Bounded Buffer, Readers-Writers Problem, Barrier Synchronization, Fetch-and-Set',
    'TWT-Operating System(Process Synchronization-IV)': 'Peterson\'s Algorithm, Starvation, Race Conditions, Mutex Locks, Synchronization Constraints',
    'TWT-Operating System(Deadlock-I)': 'Deadlock Necessary Conditions, Resource Allocation Graph, Safe State, Banker\'s Algorithm',
    'TWT-Operating System(Deadlock-II)': 'Deadlock Prevention, Deadlock Avoidance, Safe Sequence Calculation, Resource Claim Matrix',
    'TWT-Operating System(Deadlock-III)': 'Dining Philosophers Problem, Deadlock-free Resource Conditions, Resource Preemption, Rollback'
}

with open('js/pyq-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

count = 0
for name, topics in topics_map.items():
    pattern = rf'(name:\s*"{re.escape(name)}",\s*\n\s*date:\s*"[^"]*",)'
    replacement = rf'\1\n    topicsCovered: "{topics}",'
    new_content, n = re.subn(pattern, replacement, content)
    if n > 0:
        content = new_content
        count += n
    else:
        print(f"Failed to match: {name}")

print(f"Successfully added topicsCovered to {count} tests.")

with open('js/pyq-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)
