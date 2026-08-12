import re
with open("js/ce-test-registry.src.js", "r", encoding="utf-8") as f:
    content = f.read()

content = re.sub(r'answer:\s*"([\d\.]+)\s*-\s*\1"', r'answer: "\1"', content)

with open("js/ce-test-registry.src.js", "w", encoding="utf-8") as f:
    f.write(content)
