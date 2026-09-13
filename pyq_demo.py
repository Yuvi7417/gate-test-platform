import os
import re
import json
from bs4 import BeautifulSoup

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
        
    for img in soup_el.find_all('img'):
        src = img.get('src', '')
        if src:
            filename = src.split('/')[-1]
            img.attrs = {}
            img['src'] = f'images/twt-algo/{filename}'
            
    html_text = soup_el.decode_contents()
    html_text = re.sub(r'\s+', ' ', html_text).strip()
    html_text = html_text.replace('\\', '\\\\')
    return f'<span style="display: inline;">{html_text}</span>'

def extract_questions():
    with open(r'h:\yuvraj dutt\test.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
        
    q_texts = soup.find_all('div', class_='question_text')
    
    questions = []
    
    for q_text in q_texts:
        marks = int(q_text.get('data-value', 1))
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
            
        source = ""
        link = ""
        
        link_div = parent.find('div', class_='year_sub_chap_link')
        if link_div:
            parts = [a.get_text(strip=True) for a in link_div.find_all('a')]
            source = " | ".join(parts)
            
        expl = parent.find('div', class_='mtq_explanation')
        if expl:
            for a in expl.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    link = a['href']
                    break
                    
        if not link:
            link = "#"
            
        solution_html = f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: {source}</span></div>'
        
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
            ans_str = '""'
            
        lines.append(f"            answer: {ans_str},")
        lines.append(f"            solution: `{q['solution']}`")
        lines.append("        },")
        
    return "\n".join(lines)

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

target = r'(name:\s*"TWT-Algorithm\(Asymptotic Notation-I\)",\s*date:\s*"sep 08, 2026",\s*questions:\s*\[\s*)(\s*\])'

new_qs = generate_js()

def replacer(match):
    return match.group(1) + new_qs + "\n" + match.group(2)

new_js = re.sub(target, replacer, js_content)

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print(f"Extracted {len(extract_questions())} questions and saved to demo.registry.src.js")
