import sys
import re
import os
import json
import urllib.parse
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

IMG_DIR = r'h:\yuvraj dutt\images\gate-cse-2026-set-1'
os.makedirs(IMG_DIR, exist_ok=True)

with open(r'h:\yuvraj dutt\test.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

qs = soup.find_all('div', class_='res_question')

def clean_and_process_element(el, q_num):
    # 1. Decompose previews and chtml
    for prev in el.find_all(class_='MathJax_Preview'):
        prev.decompose()
    for chtml in el.find_all(class_='MathJax_CHTML'):
        chtml.decompose()
    for noscript in el.find_all('noscript'):
        noscript.decompose()

    # 2. Convert script math/tex to MathJax \( \) or \[ \]
    for s in el.find_all('script', type=lambda t: t and 'math/tex' in t):
        mode = s.get('type', '')
        tex = s.string or ''
        # Sanitize tex before inserting
        tex = tex.replace('&amp;nbsp;', ' ')
        tex = tex.replace('&nbsp;', ' ')
        tex = tex.replace('&amp;', '&')
        tex = tex.replace('&lt;', '<')
        tex = tex.replace('&gt;', '>')
        tex = tex.replace('&quot;', '"')
        if 'mode=display' in mode:
            s.replace_with(f"\\[ {tex} \\]")
        else:
            s.replace_with(f"\\( {tex} \\)")

    # 3. Process images
    for img in el.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        if src:
            blobid = urllib.parse.parse_qs(urllib.parse.urlparse(src).query).get('qa_blobid', ['img'])[0]
            filename = f"q{q_num}_{blobid}.png"
            img.attrs = {}
            img['src'] = f"images/gate-cse-2026-set-1/{filename}"

    # 4. Extract HTML content
    html_content = el.decode_contents()

    # Pre blocks preservation
    pre_blocks = []
    def save_pre(m):
        pre_blocks.append(m.group(0))
        return f"__PRE_BLOCK_{len(pre_blocks)-1}__"

    html_content = re.sub(r'<pre.*?>.*?</pre>', save_pre, html_content, flags=re.DOTALL)
    html_content = re.sub(r'\s+', ' ', html_content).strip()
    for idx, pre in enumerate(pre_blocks):
        html_content = html_content.replace(f"__PRE_BLOCK_{idx}__", pre)

    # Style pre tags
    html_content = re.sub(
        r'<pre(?:\s+[^>]*)?>',
        '<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">',
        html_content
    )

    # Sanitize entities inside math blocks
    def fix_display_math(match):
        body = match.group(1)
        body = body.replace('&amp;nbsp;', ' ').replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
        return f'\\[{body}\\]'

    def fix_inline_math(match):
        body = match.group(1)
        body = body.replace('&amp;nbsp;', ' ').replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
        return f'\\({body}\\)'

    html_content = re.sub(r'\\\[([\s\S]*?)\\\]', fix_display_math, html_content)
    html_content = re.sub(r'\\\(([\s\S]*?)\\\)', fix_inline_math, html_content)

    # Escape backticks and backslashes for JS template literal
    html_content = html_content.replace('\\', '\\\\')
    html_content = html_content.replace('`', '\\`')
    html_content = html_content.replace('${', '\\${')

    return f'<span style="display: inline;">{html_content}</span>'

questions_data = []

for i, q in enumerate(qs):
    q_num = i + 1
    t_raw = q.find('span', class_='res_qs_type').get_text(strip=True)
    m_raw = q.find('span', class_='res_qs_marks').get_text(strip=True)
    ans_raw = q.find('span', class_='correct_solution').get_text(strip=True)
    dis = q.find('span', class_='res_discuss')
    link = dis.find('a')['href'] if dis and dis.find('a') else ''
    
    marks = int(re.search(r'\d+', m_raw).group(0))
    if 'Choice' in t_raw:
        q_type = 'MCQ'
        neg = 0.33 if marks == 1 else 0.66
    elif 'Select' in t_raw:
        q_type = 'MSQ'
        neg = 0
    else:
        q_type = 'NAT'
        neg = 0

    ans_val = re.sub(r'^Correct\s*Answer\s*:\s*', '', ans_raw, flags=re.I).strip()
    # Normalize whitespaces inside answer
    ans_val = re.sub(r'\s+', ' ', ans_val).strip()

    if q_type == 'MCQ':
        ans_js = f'"{ans_val}"'
    elif q_type == 'MSQ':
        parts = [p.strip() for p in ans_val.split(';') if p.strip()]
        ans_js = '[' + ', '.join([f'"{p}"' for p in parts]) + ']'
    else: # NAT
        if ':' in ans_val:
            p1, p2 = [p.strip() for p in ans_val.split(':', 1)]
            # strip leading zeros if integer like 06 -> 6, but preserve decimals
            def norm_num(s):
                try:
                    f = float(s)
                    return str(int(f)) if f.is_integer() else str(f)
                except:
                    return s
            np1 = norm_num(p1)
            np2 = norm_num(p2)
            if np1 == np2:
                ans_js = f'"{np1}"'
            else:
                ans_js = f'"{np1}:{np2}"'
        else:
            ans_js = f'"{ans_val}"'

    solution_html = (
        f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">'
        f'  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>'
        f'  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a>'
        f'<div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a></div></div>'
    )
    solution_js = solution_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    text_div = q.find('div', class_='res_question_text')
    options_list = []

    if q_type != 'NAT':
        alpha_ol = None
        for candidate in text_div.find_all('ol'):
            if 'upper-alpha' in str(candidate.get('style', '')):
                alpha_ol = candidate
                break
        
        if alpha_ol:
            lis = alpha_ol.find_all('li', recursive=False)
            for li in lis:
                opt_str = clean_and_process_element(li, q_num)
                options_list.append(opt_str)
            alpha_ol.decompose()
        elif q_num == 4:
            # Special handling for Q #4 where options are separate p tags
            opt_ps = []
            for p in text_div.find_all('p'):
                clean_text = re.sub(r'[\u200b\u200c\u200d\uFEFF\s]+', ' ', p.get_text()).strip()
                if re.match(r'^[A-D]\.\s*', clean_text):
                    # Remove the "A. ", "B. ", etc prefix
                    for child in list(p.children):
                        if isinstance(child, str):
                            subbed = re.sub(r'^[A-D]\.\s*', '', child)
                            child.replace_with(subbed)
                            break
                    opt_str = clean_and_process_element(p, q_num)
                    options_list.append(opt_str)
                    p.decompose()

    text_str = clean_and_process_element(text_div, q_num)

    questions_data.append({
        'marks': marks,
        'neg': neg,
        'type': q_type,
        'text': text_str,
        'options': options_list,
        'answer_js': ans_js,
        'solution': solution_js
    })

print(f"Successfully processed {len(questions_data)} questions.")

# Generate JS code
lines = []
lines.append('\nregisterTest({')
lines.append('    series: "cse-gate-2027",')
lines.append('    name: "GATE CSE 2026 SET-1",')
lines.append('    date: "Feb 08, 2026",')
lines.append('    questions: [')

for q in questions_data:
    lines.append('        {')
    lines.append(f"            marks: {q['marks']},")
    lines.append(f"            neg: {q['neg']},")
    lines.append(f"            type: \"{q['type']}\",")
    lines.append(f"            text: `{q['text']}`,")
    lines.append('            image: "",')
    lines.append('            options: [')
    for idx_o, opt in enumerate(q['options']):
        comma = ',' if idx_o < len(q['options']) - 1 else ''
        lines.append(f"                `{opt}`{comma}")
    lines.append('            ],')
    lines.append(f"            answer: {q['answer_js']},")
    lines.append(f"            solution: `{q['solution']}`")
    lines.append('        },')

lines.append('    ]')
lines.append('});\n')

new_test_js = '\n'.join(lines)

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'r', encoding='utf-8') as f:
    existing_content = f.read()

# Append or replace GATE CSE 2026 SET-1
if 'GATE CSE 2026 SET-1' in existing_content:
    pattern = r'registerTest\(\{\s*series:\s*["\']cse-gate-2027["\'],\s*name:\s*["\']GATE CSE 2026 SET-1["\'][\s\S]*?\n\}\);'
    existing_content = re.sub(pattern, new_test_js.strip(), existing_content)
    updated_content = existing_content
else:
    updated_content = existing_content.rstrip() + '\n' + new_test_js

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Saved GATE CSE 2026 SET-1 to js/pyq-registry.js successfully!")
