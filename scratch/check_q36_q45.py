content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
print('Q36 text:')
text_start = parts[35].rfind('text: `')
print(parts[35][text_start:text_start+200])

print('\nQ45 text:')
text_start = parts[44].rfind('text: `')
print(parts[44][text_start:text_start+200])
