import os
import re
import add_series2

if __name__ == '__main__':
    html_path = r'h:\yuvraj dutt\test1.html'
    qs = add_series2.extract_questions(html_path)
    print(f"Extracted {len(qs)} questions for Layer-III")
    for i, q in enumerate(qs, 31):
        print(f"Q{i}: type={q['type']}, marks={q['marks']}, ans={q['answer']}")
        
    formatted_qs = add_series2.format_questions_js(qs)
    
    new_test_block = f"""
registerTest({{
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Data Link Layer-III)",
    date: "oct 20, 2026",
    topicsCovered: "Framing, Error Detection and Correction, CRC, Flow and Error Control, Stop and Wait, Sliding Window Protocols, Go-Back-N, Selective Repeat, Medium Access Control, CSMA/CD, Ethernet",
    questions: [
{formatted_qs}
    ]
}});
"""

    with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'a', encoding='utf-8') as f:
        f.write(new_test_block)
        
    print("Successfully added Layer-III to pyq-registry.js!")
