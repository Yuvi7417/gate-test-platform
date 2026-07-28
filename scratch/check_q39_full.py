import json

content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()
start_idx = content.rfind('name: "FST - Mock test-9"')
test_block = content[start_idx:]
end_idx = test_block.find('registerTest({')
if end_idx != -1:
    test_block = test_block[:end_idx]

parts = test_block.split('marks: ')
if len(parts) > 39:
    print(parts[39])
