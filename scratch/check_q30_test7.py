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
    if len(parts) > 30:
        print("Q30 Options block:")
        opts_end = parts[30].find('],')
        print(parts[30][:opts_end])
    else:
        print("Q30 not found")
