content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()

start_idx = content.rfind('name: "FST - Mock test-7"')
test_block = content[start_idx:]
end_idx = test_block.find('registerTest({')
if end_idx != -1:
    test_block = test_block[:end_idx]
    post_block = content[start_idx + end_idx:]
else:
    post_block = ""

parts = test_block.split('options: [')

if len(parts) > 54:
    opts_idx = parts[54].find('],')
    parts[54] = '\n        `A`,\n        `B`,\n        `C`,\n        `D`,\n      ' + parts[54][opts_idx:]

    new_test_block = 'options: ['.join(parts)
    new_content = content[:start_idx] + new_test_block + post_block

    with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Q54 fixed.")
else:
    print("Q54 not found.")
