import re
from bs4 import BeautifulSoup

def escape_js_string(s):
    parts = re.split(r'(<pre.*?</pre>)', s, flags=re.DOTALL)
    for i in range(len(parts)):
        if not parts[i].startswith('<pre'):
            parts[i] = parts[i].replace('\n', ' ')
            parts[i] = re.sub(r'\s+', ' ', parts[i])
            parts[i] = parts[i].replace('<p></p>', '')
    s = "".join(parts).strip()
    return s.replace('\\', '\\\\').replace('`', '\\`')

with open('h:/yuvraj dutt/test.html', 'r', encoding='utf-8') as f:
    html = f.read()
soup = BeautifulSoup(html, 'html.parser')

q15 = soup.find_all('div', class_='res_question')[14]
text_div = q15.find('div', class_='res_question_text')

for pre in text_div.find_all('pre'):
    ol = pre.find('ol')
    if ol:
        lines = []
        for i, li in enumerate(ol.find_all('li', recursive=False)):
            inner_html = "".join([str(c) for c in li.contents])
            line_num = f'<span style="color: #999; margin-right: 15px; display: inline-block; width: 20px; text-align: right;">{i+1}</span>'
            lines.append(line_num + inner_html)
        if lines:
            code_text = '\n'.join(lines)
            parsed_pre = BeautifulSoup(f'<pre style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; font-family: monospace; font-size: 14px; line-height: 1.5;">{code_text}</pre>', 'html.parser').pre
            pre.replace_with(parsed_pre)

print("AFTER DOM REPLACE:")
html_str = "".join([str(c) for c in text_div.contents]).strip()
print(html_str)

print("AFTER escape_js_string:")
print(escape_js_string(html_str))
