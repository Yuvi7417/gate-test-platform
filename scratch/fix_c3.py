import re
with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    text = f.read()

def replace_func(match):
    block = match.group(0)
    # Replace literal '\\n<span style=' with '\n<span style='
    block = block.replace('\\\\n<span style="color: #999;', '\n<span style="color: #999;')
    return block

new_text = re.sub(r'name: "SWT - C-Programing-3"[\s\S]*?(?=name: "|$)', replace_func, text)

with open('h:/yuvraj dutt/js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_text)
