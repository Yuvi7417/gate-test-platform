import sys
import re
import os
import json
import urllib.parse
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

IMG_DIR = r'h:\yuvraj dutt\images\gate-cse-2026-set-2'
os.makedirs(IMG_DIR, exist_ok=True)

with open(r'h:\yuvraj dutt\test.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f, 'html.parser')

qs = soup.find_all('div', class_='res_question')

def clean_and_process_element(el, q_num):
    # 1. Remove preview and chtml
    for prev in el.find_all(class_='MathJax_Preview'):
        prev.decompose()
    for chtml in el.find_all(class_='MathJax_CHTML'):
        chtml.decompose()
    for noscript in el.find_all('noscript'):
        noscript.decompose()

    # 2. Replace script math/tex with MathJax syntax \( ... \) or \[ ... \]
    for s in el.find_all('script', type=lambda t: t and 'math/tex' in t):
        mode = s.get('type', '')
        tex = s.string or ''
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
            img['src'] = f"images/gate-cse-2026-set-2/{filename}"

    # 4. Extract HTML content
    html_content = el.decode_contents()

    # Remove enclosing or extra p tags whitespace
    # Replace pre tags with styled pre
    pre_blocks = []
    def save_pre(m):
        pre_blocks.append(m.group(0))
        return f"__PRE_BLOCK_{len(pre_blocks)-1}__"

    html_content = re.sub(r'<pre.*?>.*?</pre>', save_pre, html_content, flags=re.DOTALL)
    # Normalize whitespaces outside pre
    html_content = re.sub(r'\s+', ' ', html_content).strip()
    for idx, pre in enumerate(pre_blocks):
        html_content = html_content.replace(f"__PRE_BLOCK_{idx}__", pre)

    # Style pre tags
    html_content = re.sub(
        r'<pre(?:\s+[^>]*)?>',
        '<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">',
        html_content
    )

    # Escape backticks and backslashes for JS template literal
    # When outputting to a JS file:
    # A backslash in the string must be preserved for MathJax. In JS template literal `\(` would become `\(` if not escaped or `\\(`.
    # Let's escape \ as \\, and ` as \`
    html_content = html_content.replace('\\', '\\\\')
    html_content = html_content.replace('`', '\\`')
    html_content = html_content.replace('${', '\\${')

    return f'<span style="display: inline;">{html_content}</span>'

questions_data = []

for i, q in enumerate(qs):
    q_num = i + 1
    t_raw = q.find('span', class_='res_qs_type').get_text(strip=True)
    m_raw = q.find('span', class_='res_qs_marks').get_text(strip=True)
    p_raw = q.find('span', class_='res_qs_penalty').get_text(strip=True)
    ans_raw = q.find('span', class_='correct_solution').get_text(strip=True)
    dis = q.find('span', class_='res_discuss')
    link = dis.find('a')['href'] if dis and dis.find('a') else ''
    
    # Marks and penalty
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

    # Answer parsing
    ans_val = re.sub(r'^Correct\s*Answer\s*:\s*', '', ans_raw, flags=re.I).strip()
    if q_type == 'MCQ':
        ans_js = f'"{ans_val}"'
    elif q_type == 'MSQ':
        parts = [p.strip() for p in ans_val.split(';') if p.strip()]
        ans_js = '[' + ', '.join([f'"{p}"' for p in parts]) + ']'
    else: # NAT
        if ':' in ans_val:
            p1, p2 = ans_val.split(':', 1)
            if p1.strip() == p2.strip():
                ans_js = f'"{p1.strip()}"'
            else:
                ans_js = f'"{ans_val}"'
        else:
            ans_js = f'"{ans_val}"'

    # Solution div
    solution_html = (
        f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">'
        f'  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>'
        f'  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a>'
        f'<div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a></div></div>'
    )
    solution_js = solution_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    # Text & Options
    text_div = q.find('div', class_='res_question_text')
    
    # Find options if not NAT
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
            # Remove the alpha_ol from text_div
            alpha_ol.decompose()
        else:
            print(f"Warning: No upper-alpha OL found for Q #{q_num} ({q_type})")

    # Now clean question text
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
lines.append('registerTest({')
lines.append('    series: "cse-gate-2027",')
lines.append('    name: "GATE CSE 2026 SET-2",')
lines.append('    date: "Feb 08, 2026",')
lines.append('    topicsCovered: "General Aptitude, Engineering Mathematics, Discrete Mathematics, Digital Logic, COA, Programming & DS, Algorithms, TOC, Compiler Design, Operating Systems, DBMS, Computer Networks",')
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
lines.append('});')

output_js = '\n'.join(lines) + '\n'

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Generated and saved to js/pyq-registry.js successfully!")
