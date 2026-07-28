import json

content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()
start_idx = content.rfind('name: "FST - Mock test-7"')
if start_idx == -1:
    print("Test 7 not found")
else:
    test_block = content[start_idx:]
    end_idx = test_block.find('registerTest({')
    if end_idx != -1:
        test_block = test_block[:end_idx]
        
    parts = test_block.split('options: [')
    if len(parts) > 9:
        print("Q9 Options block:")
        # parts[9] corresponds to Q9 options
        opts_end = parts[9].find('],')
        print(parts[9][:opts_end])
    else:
        print("Q9 not found")
