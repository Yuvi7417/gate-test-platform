content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]

idx = test.find('A = 7;')
if idx != -1:
    print('Found A=7 at index', idx)
    print(test[idx-200:idx+300])
