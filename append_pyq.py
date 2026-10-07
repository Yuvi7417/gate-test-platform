import os
import re
import urllib.parse
import requests
from bs4 import BeautifulSoup

img_dir = r'h:\yuvraj dutt\images\pyq-os'
os.makedirs(img_dir, exist_ok=True)

def download_image(url, save_path):
    try:
        if not os.path.exists(save_path):
            resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
            if resp.status_code == 200:
                with open(save_path, 'wb') as f:
                    f.write(resp.content)
                print(f"Downloaded {save_path}")
            else:
                print(f"HTTP {resp.status_code} for {url}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_mathjax(soup_el):
    if not soup_el:
        return ""
    for katex in soup_el.find_all(class_='katex'):
        anno = katex.find('annotation', encoding='application/x-tex')
        if anno:
            tex = anno.get_text()
            katex.replace_with(f"\\( {tex} \\)")
            
    for noscript in soup_el.find_all('noscript'):
        noscript.decompose()
        
    for img in soup_el.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        if src:
            if src.startswith('/'):
                dl_url = "https://practicepaper.in" + src
            elif not src.startswith('http'):
                dl_url = "https://practicepaper.in/" + src
            else:
                dl_url = src
                
            path_parts = [p for p in urllib.parse.urlparse(src).path.split('/') if p]
            if len(path_parts) >= 2:
                filename = f"{path_parts[-2]}_{path_parts[-1]}"
            else:
                filename = path_parts[-1]
            save_path = os.path.join(img_dir, filename)
            download_image(dl_url, save_path)
            
            img.attrs = {}
            img['src'] = f'images/pyq-os/{filename}'
            
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
        
    cards = soup.find_all(class_='pp-question-card')
    questions = []
    
    for card in cards:
        badges = [b.get_text(strip=True) for b in card.find_all(class_='pp-badge')]
        q_type = 'MCQ'
        for b in badges:
            if 'NAT' in b:
                q_type = 'NAT'
            elif 'MSQ' in b:
                q_type = 'MSQ'
                
        marks = 1
        for b in badges:
            m = re.search(r'(\d+)\s*Mark', b, re.I)
            if m:
                marks = int(m.group(1))
                
        neg = 0.33 if marks == 1 else 0.66
        if q_type != 'MCQ':
            neg = 0
            
        q_text_el = card.find(class_='pp-q-text')
        text_html = process_mathjax(q_text_el)
        
        options = []
        answer = []
        
        opt_els = card.find_all(class_='pp-option')
        for i, opt in enumerate(opt_els):
            mark_el = opt.find(class_='pp-opt-mark')
            raw_letter = mark_el.get_text(strip=True) if mark_el else ''
            letter = raw_letter if raw_letter in ['A', 'B', 'C', 'D', 'E'] else chr(ord('A') + i)
            is_corr = 'pp-correct' in opt.get('class', [])
            
            opt_text_el = opt.find(class_='pp-opt-text')
            opt_html = process_mathjax(opt_text_el) if opt_text_el else ''
            options.append(opt_html)
            if is_corr:
                answer.append(letter)
                
        if q_type == 'NAT':
            nat_el = card.find(class_='pp-nat-answer')
            if nat_el:
                b_tag = nat_el.find('b')
                raw_ans_text = b_tag.get_text(strip=True) if b_tag else nat_el.get_text(strip=True).replace('Correct answer:', '').strip()
                parts = re.split(r'[\u2013\u2014\-:]', raw_ans_text)
                parts = [p.strip() for p in parts if p.strip()]
                if len(parts) == 2:
                    answer = [f"{parts[0]}:{parts[1]}"]
                elif len(parts) == 1:
                    answer = [parts[0]]
                    
        sol_el = card.find(class_='pp-solution-box')
        link = '#'
        if sol_el:
            for a in sol_el.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    link = a['href']
                    break
                    
        ctx_el = card.find(class_='pp-ctx-links')
        link_div_html = ''
        if ctx_el:
            for a in ctx_el.find_all('a'):
                a['style'] = "color:#2f6d1a; text-decoration:none"
                a['target'] = "_blank"
            link_div_html = ctx_el.decode_contents().strip()
            link_div_html = re.sub(r'\s+', ' ', link_div_html)
            
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

def format_questions_js(questions):
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
                ans_str = f'"{q["answer"]}"'
            
        lines.append(f"            answer: {ans_str},")
        lines.append(f"            solution: `{q['solution']}`")
        lines.append("        },")
    return "\n".join(lines)

if __name__ == '__main__':
    new_qs = extract_questions()
    print(f"Extracted {len(new_qs)} new questions")
    
    with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'r', encoding='utf-8') as f:
        existing_js = f.read()
        
    # Append new questions inside the last questions array: `questions: [\n    ]` or before the last `]`
    last_bracket = existing_js.rfind(']')
    if last_bracket != -1:
        # Check if the array is currently empty
        pre_bracket = existing_js[:last_bracket]
        post_bracket = existing_js[last_bracket:]
        formatted = format_questions_js(new_qs)
        updated_js = pre_bracket + formatted + "\n    " + post_bracket
    else:
        print("Could not find closing bracket")
        exit(1)
        
    with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
        f.write(updated_js)
        
    print("Successfully appended to pyq-registry.js")
