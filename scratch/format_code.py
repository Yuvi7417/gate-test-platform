import re
import os

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('name: "SWT - Digital Logic-1",')
if start_idx == -1:
    print("Could not find the test block")
    exit(1)

# Find the end of this block
end_idx = content.find('});', start_idx) + 3

block = content[start_idx:end_idx]

# 1. Replace marks: 1.0 -> marks: 1
block = re.sub(r'marks:\s*(\d+)\.0,', r'marks: \1,', block)

# 2. Replace empty solution
block = re.sub(r'solution:\s*`<div class="res_solution">[\s\n]*</div>`', r'solution: ``', block)

# 3. Format text: `...` into a single line
def text_replacer(match):
    text_content = match.group(1)
    # Remove empty <p></p>
    text_content = re.sub(r'<p>\s*</p>', '', text_content)
    # Replace newlines with space
    text_content = text_content.replace('\n', ' ').replace('\r', '')
    # Reduce multiple spaces
    text_content = re.sub(r'\s+', ' ', text_content).strip()
    return f'text: `{text_content}`'

block = re.sub(r'text:\s*`([^`]+)`', text_replacer, block)

# 4. Format options into a single line if needed (but the user said "ek line me hona chaiye code vo sab kero")
# For options, maybe also remove newlines?
def options_replacer(match):
    opt_content = match.group(1)
    opt_content = re.sub(r'<p>\s*</p>', '', opt_content)
    opt_content = opt_content.replace('\n', ' ').replace('\r', '')
    opt_content = re.sub(r'\s+', ' ', opt_content).strip()
    return f'`{opt_content}`'

# we'll find all options and apply
# Wait, options are like `...`, 
# Actually, the options are already mostly on one line, but some have newlines:
# `\( \mathrm{P}=1, \mathrm{Q}=0 ; \quad \quad \mathrm{P}=1, \mathrm{Q}=0 ; \qquad \qquad&nbsp;\qquad \qquad \mathrm{P}=1, \mathrm{Q}=0 \)
#                     or 
# \( \mathrm{P}=0, \mathrm{Q}=1 \)`
# I'll just remove newlines inside backticks generally for options too
# Wait, replacing all backticks contents inside the block? No, just options.
def option_line_replacer(match):
    full_match = match.group(0)
    # remove newlines inside backticks
    parts = full_match.split('`')
    for i in range(1, len(parts), 2):
        parts[i] = parts[i].replace('\n', ' ').replace('\r', '')
        parts[i] = re.sub(r'\s+', ' ', parts[i]).strip()
    return '`'.join(parts)

# Find options arrays
block = re.sub(r'options:\s*\[(.*?)\]', option_line_replacer, block, flags=re.DOTALL)

# Reassemble
new_content = content[:start_idx] + block + content[end_idx:]

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Formatting fixed!")
