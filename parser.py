import json
from bs4 import BeautifulSoup
import re

# Helper functions
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

with open('h:/yuvraj dutt/test.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

questions = []
for q_div in soup.select('.res_question'):
    # Clean up math tags before extracting
    for mjx in q_div.select('mjx-container'):
        math_tag = mjx.find('math')
        if math_tag:
            mjx.replace_with(math_tag)
            
    # Remove styles
    for style in q_div.select('style'):
        style.decompose()

    # MathJax Cleanup for scripts
    for script in q_div.find_all('script', type=re.compile(r'math/tex')):
        new_math = soup.new_tag('math', attrs={'xmlns': 'http://www.w3.org/1998/Math/MathML'})
        new_math.string = script.string
        script.replace_with(new_math)

    # Extract marks and penalty
    marks = 1.0
    penalty = 0.0
    meta_spans = q_div.select('.res_qs_meta span')
    for span in meta_spans:
        text = span.text.strip().lower()
        if 'award:' in text:
            try: marks = float(text.replace('award:', '').strip())
            except: pass
        elif 'penalty:' in text:
            try: penalty = float(text.replace('penalty:', '').strip())
            except: pass
            
    # Extract type
    q_type = "MCQ"
    if 'numerical' in [s.text.strip().lower() for s in meta_spans]:
        q_type = "NAT"
    elif 'multiple select' in [s.text.strip().lower() for s in meta_spans]:
        q_type = "MSQ"

    # Extract text
    text_div = q_div.select_one('.res_question_text')
    
    # Identify options from the last <ol> before removing it
    options = []
    if text_div and (q_type == 'MCQ' or q_type == 'MSQ'):
        ols = text_div.find_all('ol', recursive=False)
        if not ols:
            ols = text_div.find_all('ol')
            ols = [ol for ol in ols if not ol.find_parent('pre')]
            
        if ols:
            last_ol = ols[-1]
            lis = last_ol.find_all('li', recursive=False)
            for li in lis:
                opts_html = "".join([str(c) for c in li.contents]).strip()
                options.append(clean_html(opts_html))
            last_ol.decompose() 
    
    if text_div:
        q_text = "".join([str(c) for c in text_div.contents]).strip()
        q_text = clean_html(q_text)
    else:
        q_text = ""

    # Extract answer using Regex on .res_solution text
    answer = ""
    sol_div = q_div.select_one('.res_solution')
    if sol_div:
        sol_text = sol_div.text
        if q_type in ['MCQ', 'MSQ']:
            ans_match = re.search(r'Correct\s*Answer:\s*([A-E](?:[,\s;]+[A-E])*)', sol_text, re.IGNORECASE)
            if ans_match:
                ans_letters = [s.strip().upper() for s in re.split(r'[,;]', ans_match.group(1)) if s.strip()]
                answer = ans_letters[0] if q_type == 'MCQ' else ans_letters
        elif q_type == 'NAT':
            ans_match = re.search(r'Correct\s*Answer:\s*([\d.-]+)(?:\s*to\s*([\d.-]+))?', sol_text, re.IGNORECASE)
            if ans_match:
                if ans_match.group(2):
                    answer = f"[{ans_match.group(1)}, {ans_match.group(2)}]"
                else:
                    answer = ans_match.group(1)
    
    # Extract discuss link
    discuss_link = ""
    for a in q_div.select('.res_solution a'):
        if a.text and 'discuss' in a.text.lower():
            discuss_link = a.get('href', '')
            break

    # Apply negative marking rules
    neg = 0
    if q_type == "MCQ":
        if marks == 1: neg = 0.33
        elif marks == 2: neg = 0.66
    
    q_obj = {
        "marks": marks,
        "neg": neg,
        "type": q_type,
        "text": q_text,
        "image": "",
        "options": options,
        "answer": answer,
        "discuss_link": discuss_link
    }
    questions.append(q_obj)

# Append to registry
registry_path = 'h:/yuvraj dutt/js/questions/pw-test-registry.js'
with open(registry_path, 'r', encoding='utf-8') as f:
    reg_content = f.read()


import re
part3_match = re.search(r'name:\s*"Swt-OS-Part4"', reg_content)
q_num = 1
if part3_match:
    part3_text = reg_content[part3_match.start():]
    matches = re.findall(r'Question (\d+) Explanation', part3_text)
    if matches:
        q_num = int(matches[-1]) + 1
else:
    q_num = 1


js_out = ""
for q in questions:
    js_out += "    {\n"
    marks_val = int(q['marks']) if q['marks'] == int(q['marks']) else q['marks']
    js_out += f"      marks: {marks_val},\n"
    js_out += f"      neg: {q['neg']},\n"
    js_out += f"      type: \"{q['type']}\",\n"
    js_out += f"      text: `{q['text']}`,\n"
    js_out += f"      image: \"\",\n"
    
    if q['options']:
        js_out += "      options: [\n"
        for opt in q['options']:
            js_out += f"        `{opt}`,\n"
        js_out += "      ],\n"
    elif q['type'] in ['MCQ', 'MSQ']:
        js_out += "      options: [\"A\", \"B\", \"C\", \"D\"],\n"
    else:
        js_out += "      options: [],\n"
        
    if isinstance(q['answer'], list):
        js_out += f"      answer: \"{','.join(q['answer'])}\",\n"
    else:
        js_out += f"      answer: \"{q['answer']}\",\n"
        
    link = q['discuss_link']
    solution_html = (
        f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">'
        f'  <strong style="font-size: 16px; color: #000;">Question {q_num} Explanation:</strong><br>'
        f'  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a>'
        f'</div>'
    )
    js_out += f"      solution: `{solution_html}`\n"
    js_out += "    },\n"
    q_num += 1

# Strip the ending '  ]\n});' and append
reg_content = re.sub(r'[\s,]*\]\s*\}\);?\s*$', ',\n', reg_content)
reg_content += js_out
reg_content += "  ]\n});\n"

with open(registry_path, 'w', encoding='utf-8') as f:
    f.write(reg_content)

print(f"Appended {len(questions)} questions to registry.")
