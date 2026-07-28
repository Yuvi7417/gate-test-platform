content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
parts = test.split('options: [')
if len(parts) > 63:
    print('Q64 parts[63]:', parts[63][:200])
    print('Text:', parts[62][-400:])
