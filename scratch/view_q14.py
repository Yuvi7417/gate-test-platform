content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')

print('Q14 (index 13) block:')
# Print the end of parts[13] before 'options: [' and the start of parts[14]
text_start = parts[13].rfind('text:')
print(parts[13][:150]) # This is after `options: [` of Q13, so it contains Q13 options and then Q14 text
print("\n---")
print(parts[14][:150]) # This is after `options: [` of Q14, so it contains Q14 options and Q15 text
