import re

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('name: "SWT - Digital Logic-1",')
end_idx = content.find('});', start_idx) + 3

block = content[start_idx:end_idx]

# We want to replace `$ ... $` with `$...$`
# And `$$ ... $$` with `$$...$$`
# Be careful not to replace spaces inside the math expression, only the ones immediately after the opening $ and before the closing $
# Actually, the spaces were added exactly as `$ ` and ` $`.
# We can just regex replace `\$ (.*?) \$` with `$\1$`
# Let's use a function to do it safely

def replacer_inline(match):
    # match.group(1) is the math content
    return f"${match.group(1).strip()}$"

def replacer_display(match):
    return f"$${match.group(1).strip()}$$"

block = re.sub(r'\$\$\s*(.*?)\s*\$\$', replacer_display, block)
block = re.sub(r'\$\s*(.*?)\s*\$', replacer_inline, block)

new_content = content[:start_idx] + block + content[end_idx:]

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Math spaces fixed!")
