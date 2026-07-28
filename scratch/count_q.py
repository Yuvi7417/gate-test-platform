content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()
start_idx = content.rfind('name: "FST - Mock test-3"')
test_block = content[start_idx:content.find('registerTest({', start_idx)]
parts = test_block.split('solution: ')
print(len(parts)-1)
