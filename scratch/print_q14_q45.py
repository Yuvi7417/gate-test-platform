content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)

test = content[start:end]
parts = test.split('options: [')

print("Q14 Question Text:")
text_start_14 = parts[12].rfind('text: `')
print(parts[12][text_start_14:])

print("\n\nQ45 Question Text:")
text_start_45 = parts[43].rfind('text: `')
print(parts[43][text_start_45:])
