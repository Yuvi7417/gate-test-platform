import sys
import re

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove orphaned MathJax placeholders like <span class="mjx-chtml MJXc-display" style="text-align: center;"></span>
content = re.sub(r'<span class="mjx-chtml[^"]*"[^>]*></span>\s*', '', content)

# 2. Fix math delimiters
def fix_display_math(match):
    body = match.group(1)
    body = body.replace('&amp;nbsp;', ' ')
    body = body.replace('&nbsp;', ' ')
    body = body.replace('&amp;', '&')
    body = body.replace('&lt;', '<')
    body = body.replace('&gt;', '>')
    body = body.replace('&quot;', '"')
    return f'\\[{body}\\]'

def fix_inline_math(match):
    body = match.group(1)
    body = body.replace('&amp;nbsp;', ' ')
    body = body.replace('&nbsp;', ' ')
    body = body.replace('&amp;', '&')
    body = body.replace('&lt;', '<')
    body = body.replace('&gt;', '>')
    body = body.replace('&quot;', '"')
    return f'\\({body}\\)'

content = re.sub(r'\\\[([\s\S]*?)\\\]', fix_display_math, content)
content = re.sub(r'\\\(([\s\S]*?)\\\)', fix_inline_math, content)

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Sanitization of pyq-registry.js completed successfully!")
