import os
import re
import json
import urllib.parse
import requests
from bs4 import BeautifulSoup

def download_image(url, save_path):
    try:
        if not os.path.exists(save_path):
            resp = requests.get(url, timeout=10)
            if resp.status_code == 200:
                with open(save_path, 'wb') as f:
                    f.write(resp.content)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_mathjax(soup_el):
    # Find all span.katex
    for katex in soup_el.find_all(class_='katex'):
        anno = katex.find('annotation', encoding='application/x-tex')
        if anno:
            tex = anno.get_text()
            katex.replace_with(f"\\( {tex} \\)")
            
    # Process images: remove noscript and clean img tags
    for noscript in soup_el.find_all('noscript'):
        noscript.decompose()
        
    img_dir = r'h:\yuvraj dutt\images\twt-algo'
    os.makedirs(img_dir, exist_ok=True)
    
    for img in soup_el.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        if src:
            if src.startswith('/'):
                dl_url = "https://practicepaper.in" + src
            elif not src.startswith('http'):
                dl_url = "https://practicepaper.in/" + src
            else:
                dl_url = src
                
            filename = src.split('/')[-1]
            filename = urllib.parse.urlparse(filename).path
            save_path = os.path.join(img_dir, filename)
            download_image(dl_url, save_path)
            
            img.attrs = {}
            img['src'] = f'images/twt-algo/{filename}'
            
    html_text = soup_el.decode_contents()
    pre_blocks = []
    def save_pre(match):
        pre_blocks.append(match.group(0))
        return f"__PRE_BLOCK_{len(pre_blocks)-1}__"
    html_text = re.sub(r'<pre.*?>.*?</pre>', save_pre, html_text, flags=re.DOTALL)
    html_text = re.sub(r'\s+', ' ', html_text).strip()
    for i, pre in enumerate(pre_blocks):
        html_text = html_text.replace(f"__PRE_BLOCK_{i}__", pre)
    html_text = html_text.replace('\\', '\\\\')
    html_text = html_text.replace('`', '\\`')
    html_text = html_text.replace('<pre>', '<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">')
    return f'<span style="display: inline;">{html_text}</span>'

def extract_questions():
    with open(r'h:\yuvraj dutt\test.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
        
    q_texts = soup.find_all('div', class_='question_text')
    questions = []
    
    for q_text in q_texts:
        marks_str = q_text.get('data-value', '1')
        marks = int(marks_str) if marks_str.isdigit() else 1
        neg = 0.33 if marks == 1 else 0.66
        
        text_html = process_mathjax(q_text)
        
        parent = q_text.parent
        ans_table = parent.find('table', class_='answer_table')
        
        options = []
        answer = []
        if ans_table:
            rows = ans_table.find_all('tr', class_='mtq_clickable')
            for row in rows:
                opt_letter = row.find('div', class_='option_index_number').get_text(strip=True)
                is_correct = row.get('data-value') == '1'
                
                opt_data = row.find('div', class_='option_data')
                opt_html = process_mathjax(opt_data)
                options.append(opt_html)
                if is_correct:
                    answer.append(opt_letter)
        
        q_type = "MCQ" if len(answer) == 1 else "MSQ" if len(answer) > 1 else "NAT"
        if q_type != "MCQ":
            neg = 0
            
        if q_type == "NAT":
            checkbtn = parent.find('input', class_='checkansbtn')
            if checkbtn:
                val1 = checkbtn.get('data-value1', '')
                val2 = checkbtn.get('data-value2', '')
                if val1 and val2:
                    answer = [f"{val1}:{val2}"]
                elif val1:
                    answer = [val1]
            
        source = ""
        link = ""
        
        link_div = parent.find('div', class_='year_sub_chap_link')
        if link_div:
            parts = [a.get_text(strip=True) for a in link_div.find_all('a')]
            source = " | ".join(parts)
            
        link_div_html = ""
        if link_div:
            for a in link_div.find_all('a'):
                a['style'] = "color:#2f6d1a; text-decoration:none"
                a['target'] = "_blank"
            import re
            link_div_html = link_div.decode_contents().strip()
            link_div_html = re.sub(r'\s+', ' ', link_div_html)
            
        expl = parent.find('div', class_='mtq_explanation')
        if expl:
            for a in expl.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    link = a['href']
                    break
                    
        if not link:
            link = "#"
            
        solution_html = f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;">{link_div_html}</div></div>'
        
        q_obj = {
            "marks": marks,
            "neg": neg,
            "type": q_type,
            "text": text_html,
            "image": "",
            "options": options,
            "answer": answer[0] if len(answer) == 1 else answer,
            "solution": solution_html
        }
        questions.append(q_obj)
        
    return questions

def generate_js():
    questions = extract_questions()
    lines = []
    for q in questions:
        lines.append("        {")
        lines.append(f"            marks: {q['marks']},")
        lines.append(f"            neg: {q['neg']},")
        lines.append(f"            type: \"{q['type']}\",")
        lines.append(f"            text: `{q['text']}`,")
        lines.append(f"            image: \"\",")
        
        lines.append("            options: [")
        for i, opt in enumerate(q['options']):
            comma = "," if i < len(q['options']) - 1 else ""
            lines.append(f"                `{opt}`{comma}")
        lines.append("            ],")
        
        if q['type'] == 'MSQ':
            ans_str = '["' + '", "'.join(q['answer']) + '"]'
        elif q['type'] == 'MCQ':
            ans_str = f'"{q["answer"]}"'
        else:
            if q['answer'] and isinstance(q['answer'], list):
                ans_str = f'"{q["answer"][0]}"'
            else:
                ans_str = '""'
            
        lines.append(f"            answer: {ans_str},")
        lines.append(f"            solution: `{q['solution']}`")
        lines.append("        },")
        
    return "\n".join(lines)

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

target = r'(name:\s*"TWT-Algorithm\(Asymptotic Notation-II\)",\s*date:\s*"sep 08, 2026",\s*questions:\s*\[\s*)(.*?)(\s*\]\s*\n\}\);)'
new_qs = generate_js()

def replacer(match):
    return match.group(1) + match.group(2) + "\n" + new_qs + "\n" + match.group(3)

new_js = re.sub(target, replacer, js_content, flags=re.DOTALL)

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print(f"Extracted and appended {len(extract_questions())} questions")
