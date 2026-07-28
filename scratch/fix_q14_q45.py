import re

content = open('js/full-test-registry.src.js', encoding='utf-8').read()
start = content.find('name: "FST - Mock test-5"')
end = content.find('registerTest', start)
if end == -1: end = len(content)

test = content[start:end]

# Split by 'options: ['
parts = test.split('options: [')

def fix_options(idx):
    if len(parts) > idx:
        opts = parts[idx]
        close_idx = opts.find('],')
        if close_idx != -1:
            print(f"Current Q{idx+1} options:", opts[:close_idx+2])
            new_opts = '\n        `A`,\n        `B`,\n        `C`,\n        `D`,\n      ' + opts[close_idx:]
            parts[idx] = new_opts
            print(f"Fixed options for Q{idx+1}")
        else:
            print(f"Could not find '],' for Q{idx+1}")
    else:
        print(f"Only {len(parts)-1} questions found.")

fix_options(13)
fix_options(44)

new_test = 'options: ['.join(parts)
new_content = content[:start] + new_test + content[end:]

with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fix completed.")
