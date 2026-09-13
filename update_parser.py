import sys
import os

with open('h:/yuvraj dutt/parser.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Modify logic to just look at Swt-OS-Part3
code = code.replace(
"""# Find last question number
matches = re.findall(r'Question (\d+) Explanation', reg_content)
q_num = int(matches[-1]) + 1 if matches else 1""",
"""
import re
part3_match = re.search(r'name:\s*"Swt-OS-Part3"', reg_content)
q_num = 1
if part3_match:
    part3_text = reg_content[part3_match.start():]
    matches = re.findall(r'Question (\d+) Explanation', part3_text)
    if matches:
        q_num = int(matches[-1]) + 1
else:
    q_num = 1
"""
)

# And wait, the user wants me to append to Swt-OS-Part3, not just the end of the file.
# Since Swt-OS-Part3 is currently the last block in the file and it's closed with `]\n});`, 
# the existing logic that does: `reg_content = re.sub(r'[\s,]*\]\s*\}\);?\s*$', ',\n', reg_content)` 
# will correctly open it and append to it!
# Wait, it WILL append to the last test block. Which is now Swt-OS-Part3!

with open('h:/yuvraj dutt/parser.py', 'w', encoding='utf-8') as f:
    f.write(code)
print('parser.py updated')
