content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]

idx = test.find('A = 7;')
if idx != -1:
    q_start = test.rfind('{\n      marks', 0, idx)
    q_end = test.find('},', idx)
    print(test[q_start:q_end+2])
