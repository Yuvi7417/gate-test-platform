content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
print('Q14 (index 13):', parts[13][:150])
print('Q45 (index 44):', parts[44][:150])
