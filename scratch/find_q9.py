import re
content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-3"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
for i in range(8, 12):
    if len(parts) >= i:
        print(f"Q{i}:", parts[i-1][-200:])
