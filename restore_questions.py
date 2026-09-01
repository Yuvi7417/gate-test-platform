import re
import json

def fix_newlines(text):
    parts = re.split(r'(<pre[\s\S]*?</pre>)', text, flags=re.IGNORECASE)
    for i in range(len(parts)):
        if not parts[i].lower().startswith('<pre'):
            parts[i] = re.sub(r'\s*\n\s*', ' ', parts[i])
    return "".join(parts)

def mtable_repl(m):
    content = m.group(1)
    content = content.replace('<mjx-mtr>', '<tr>').replace('</mjx-mtr>', '</tr>').replace('<mtr>', '<tr>').replace('</mtr>', '</tr>')
    content = content.replace('<mjx-mtd', '<td').replace('</mjx-mtd>', '</td>').replace('<mtd', '<td').replace('</mtd>', '</td>')
    content = re.sub(r'style="[^"]*"', '', content)
    return f'<table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center;" cellpadding="5">{content}</table>'

def clean_html(text):
    text = fix_newlines(text)
    # Remove <br/> right before </li> or at the end of <li>
    text = re.sub(r'<br\s*/?>\s*?\s*(?=(</li|</p))', '', text, flags=re.IGNORECASE)
    # Remove trailing <br> at the very end
    text = re.sub(r'<br\s*/?>\s*$', '', text, flags=re.IGNORECASE)
    # Replace non-breaking spaces
    text = text.replace('\xa0', ' ').replace('\u00a0', ' ')
    # Fix MathML tables
    text = re.sub(r'<mjx-mtable[^>]*>.*?<mjx-itable[^>]*>(.*?)</mjx-itable>.*?</mjx-mtable>', mtable_repl, text, flags=re.DOTALL|re.IGNORECASE)
    text = re.sub(r'<math[^>]*>\s*<mtable[^>]*>(.*?)</mtable>\s*</math>', mtable_repl, text, flags=re.DOTALL|re.IGNORECASE)
    return text.strip()

with open('h:/yuvraj dutt/q6_to_10.txt', 'r', encoding='utf-8') as f:
    old_text = f.read()

# We only need to process Q7, Q8, Q9, Q10 from old_text.
# Find the start of Q7 which is right after `Question 6 Explanation... </div>`
q6_end_match = re.search(r'Question 6 Explanation.*?</div>`\s*\},', old_text, flags=re.DOTALL)
q7_to_10_raw = old_text[q6_end_match.end():].strip()

# Now clean up Q7 to Q10 raw
# Wait, let's just parse the 4 objects and re-serialize them.
# The string q7_to_10_raw looks like:
# { marks: ..., text: `...`, ... }, { ... }
# Let's just apply clean_html on the `text` and `options` parts!
def process_text_match(m):
    return 'text: `' + clean_html(m.group(1)) + '`'

def process_opt_match(m):
    return '`' + clean_html(m.group(1)) + '`'

q7_to_10_clean = re.sub(r'text:\s*`([^`]*)`', process_text_match, q7_to_10_raw)
q7_to_10_clean = re.sub(r'options:\s*\[([^\]]*)\]', lambda match: 'options: [' + re.sub(r'`([^`]*)`', process_opt_match, match.group(1)) + ']', q7_to_10_clean)

# Also fix the special table in Q9 (which I had in fix_table_q9.py)!
table_html = """<table style="margin: 10px auto; border-collapse: collapse; border: 1px solid #ced4da; text-align: center; width: 50%;" cellpadding="5">
  <tr style="border-bottom: 1px solid #ced4da; background-color: #f8f9fa;">
    <th style="border-right: 1px solid #ced4da; padding: 8px;">Page</th>
    <th style="padding: 8px;">Frame Address</th>
  </tr>
  <tr>
    <td style="border-right: 1px solid #ced4da; padding: 8px;">1</td>
    <td style="padding: 8px;">4000</td>
  </tr>
  <tr>
    <td style="border-right: 1px solid #ced4da; padding: 8px;">2</td>
    <td style="padding: 8px;">5000</td>
  </tr>
  <tr>
    <td style="border-right: 1px solid #ced4da; padding: 8px;">3</td>
    <td style="padding: 8px;">6000</td>
  </tr>
  <tr>
    <td style="border-right: 1px solid #ced4da; padding: 8px;">4</td>
    <td style="padding: 8px;">7000</td>
  </tr>
</table>"""
# It matches `<math display="block" ...> ... <mtext>Page</mtext> ... </math>`
q7_to_10_clean = re.sub(r'<math display="block" xmlns="http://www.w3.org/1998/Math/MathML">\s*<mtable.*?<mtr>\s*<mtd>\s*<mtext>Page</mtext>.*?</mtable>\s*</math>', table_html, q7_to_10_clean, flags=re.IGNORECASE | re.DOTALL)

with open('h:/yuvraj dutt/js/questions/pw-test-registry.js', 'r', encoding='utf-8') as f:
    registry = f.read()

q6 = re.search(r'Question 6 Explanation.*?</div>`\s*\},', registry, flags=re.DOTALL)
q10 = re.search(r'Question 10 Explanation.*?</div>`\s*\},', registry, flags=re.DOTALL)

new_registry = registry[:q6.end()] + '\n' + q7_to_10_clean + '\n' + registry[q10.end():]

with open('h:/yuvraj dutt/js/questions/pw-test-registry.js', 'w', encoding='utf-8') as f:
    f.write(new_registry)
print('Restored Q7-Q10')
