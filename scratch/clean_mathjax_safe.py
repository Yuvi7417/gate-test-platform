import re

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

def clean_mathjax(match):
    # Replace &amp; with & and &nbsp; with a standard space
    cleaned = match.group(0).replace('&amp;', '&').replace('&nbsp;', ' ')
    return cleaned

# Use non-DOTALL to safely match only on a single line
content = re.sub(r'\$\$.*?\$\$', clean_mathjax, content)
content = re.sub(r'\$(.*?)\$', clean_mathjax, content)

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Safely cleaned &amp; and &nbsp; from MathJax blocks!")
