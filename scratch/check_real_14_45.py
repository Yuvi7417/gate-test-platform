content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')

print("Q14 current options (parts[14]):")
print(parts[14][:100])

print("\nQ45 current options (parts[45]):")
print(parts[45][:100])
