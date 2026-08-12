import re
with open("js/ce-test-registry.src.js", "r", encoding="utf-8") as f:
    content = f.read()

# Update regex to match negative numbers too, e.g., "-1600 - -1600"
# ([-]?[\d\.]+) matches optional minus sign followed by digits/dots.
content, num_subs = re.subn(r'answer:\s*"([-]?[\d\.]+)\s*-\s*\1"', r'answer: "\1"', content)

with open("js/ce-test-registry.src.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Fixed {num_subs} NAT ranges.")
