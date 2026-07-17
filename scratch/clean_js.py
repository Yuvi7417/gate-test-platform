import re

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('name: "SWT - Digital Logic-2",')
if start_idx == -1:
    print('Not found')
    exit(1)

text_part = content[start_idx:]
text_part = re.sub(r'marks:\s*(\d+)\.0,', r'marks: \1,', text_part)
text_part = re.sub(r'neg:\s*(\d+)\.0,', r'neg: \1,', text_part)

def minify_string(match):
    s = match.group(1)
    s = s.replace('\n', ' ')
    s = re.sub(r'\s+', ' ', s)
    s = s.replace('<p></p>', '')
    return '`' + s.strip() + '`'

text_part = re.sub(r'`(.*?)`', minify_string, text_part, flags=re.DOTALL)

content = content[:start_idx] + text_part

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Cleaned JS!')
