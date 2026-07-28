import re
content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-3"')
end = content.find('registerTest', start)
if end == -1: end = len(content)

test = content[start:end]

# Q9 is index 8 since 0-indexed. Let's find the 9th 'options: [' in test
parts = test.split('options: [')
if len(parts) > 9:
    # parts[9] is everything after the 9th 'options: ['
    # we want to insert \`A\`, \`B\`, \`C\`, \`D\` before the closing '],'
    q9_opts = parts[9]
    close_idx = q9_opts.find('],')
    
    new_q9_opts = '\n        `A`,\n        `B`,\n        `C`,\n        `D`,\n      ' + q9_opts[close_idx:]
    
    parts[9] = new_q9_opts
    
    new_test = 'options: ['.join(parts)
    
    new_content = content[:start] + new_test + content[end:]
    open('js/full-test-registry.src.js', 'w', encoding='utf-8').write(new_content)
    print('Updated Q9 options!')
else:
    print('Could not find Q9')
