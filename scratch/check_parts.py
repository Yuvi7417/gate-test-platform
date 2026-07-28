content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')

print('Q1 options (parts[1]):', parts[1][:50].replace('\n', ' '))
print('Q4 options (parts[4]):', parts[4][:50].replace('\n', ' '))
print('Q5 options (parts[5]):', parts[5][:50].replace('\n', ' '))
