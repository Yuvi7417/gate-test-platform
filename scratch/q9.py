import re
content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-3"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
if len(parts) > 9:
    print("Q9 context:")
    print(parts[8][-300:])
    print('options: [')
    print(parts[9][:200])
