content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)
test = content[start:end]
idx1 = test.find('What is the total time for one complete packet cycle')
idx2 = test.find('Which of the following is necessarily the correct relation')

if idx1 != -1:
    q_start = test.rfind('{\n      marks', 0, idx1)
    q_num = test[:q_start].count('options: [')
    print('Q14 is actually index ' + str(q_num))

if idx2 != -1:
    q_start = test.rfind('{\n      marks', 0, idx2)
    q_num = test[:q_start].count('options: [')
    print('Q45 is actually index ' + str(q_num))
