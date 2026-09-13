import re
f = 'js/questions/pw-test-registry.js'
text = open(f, encoding='utf-8').read()
text = re.sub(r'registerTest\(\{\s*series:\s*"pw-cs-gate-2026",\s*name:\s*"TWT-c programming",\s*date:\s*"sep 04, 2026",\s*questions:\s*\[\s*\]\s*\}\);\s*', '', text)
open(f, 'w', encoding='utf-8').write(text)
print("Duplicate removed.")
