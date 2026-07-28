import re
content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-3"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
if len(parts) > 9:
    opts_part = parts[9].split('],')[0]
    print('Q9 options:\n' + opts_part)
