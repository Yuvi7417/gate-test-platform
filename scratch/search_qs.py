import json

with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()
    
idx = content.find('name: "TWT - C-Programing-2"')
for keyword in ['q3()', 'g(g(2))', 'int find(', 'int y = 20', 'int Count(']:
    q_idx = content.find(keyword, idx)
    start = content.rfind('{', idx, q_idx)
    end = content.find('},', q_idx)
    q_str = content[start:end+2]
    print(f"\n--- MATCH for {keyword} ---")
    print(q_str[:200])
