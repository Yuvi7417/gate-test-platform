import re

content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
if start == -1:
    print("Could not find FST - Mock test-5")
    exit(1)

end = content.find('registerTest', start)
if end == -1: end = len(content)

test = content[start:end]

# Split by 'options: ['
parts = test.split('options: [')

# Q14 is index 13, so it's parts[13]
def fix_options(idx):
    if len(parts) > idx:
        opts = parts[idx]
        close_idx = opts.find('],')
        if close_idx != -1:
            new_opts = '\n        `A`,\n        `B`,\n        `C`,\n        `D`,\n      ' + opts[close_idx:]
            parts[idx] = new_opts
            print(f"Fixed options for Q{idx}")

fix_options(13)

new_test = 'options: ['.join(parts)
new_content = content[:start] + new_test + content[end:]

with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fix completed.")
