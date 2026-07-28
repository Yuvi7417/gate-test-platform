import json

content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()
start_idx = content.rfind('name: "FST - Mock test-9"')
if start_idx == -1:
    print("Test 9 not found")
else:
    test_block = content[start_idx:]
    end_idx = test_block.find('registerTest({')
    if end_idx != -1:
        test_block = test_block[:end_idx]
        
    parts = test_block.split('type: "')
    if len(parts) > 39:
        print("Q39 Type block:")
        # The part right after `type: "`
        end_quote = parts[39].find('"')
        print(parts[39][:end_quote])
    else:
        print("Q39 not found")
