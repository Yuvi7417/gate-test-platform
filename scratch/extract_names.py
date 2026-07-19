import re
with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    text = f.read()
names = []
for match in re.finditer(r'name:\s*\"([^\"]+)\"', text):
    names.append(match.group(1))
with open('h:/yuvraj dutt/scratch/names.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(names))
