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
    # Remove <br/> right before </li> or at the end of </p>
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
for q_div in soup.select('.question'):
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

    # Extract marks and type
    marks = 1.0
    q_type = "MCQ"
    labels = q_div.select('.question_type_labal')
    for label in labels:
        txt = label.text.strip().upper()
        if 'MCQ' in txt: q_type = 'MCQ'
        elif 'NAT' in txt: q_type = 'NAT'
        elif 'MSQ' in txt: q_type = 'MSQ'
        
        if 'MARK' in txt:
            match = re.search(r'([\d.]+)\s*MARK', txt)
            if match:
                marks = float(match.group(1))

    # Apply negative marking rules
    neg = 0
    if q_type == "MCQ":
        if marks == 1: neg = 0.33
        elif marks == 2: neg = 0.66

    # Extract text
    text_div = q_div.select_one('.question_text')
    if text_div:
        q_text = "".join([str(c) for c in text_div.contents]).strip()
        q_text = clean_html(q_text)
    else:
        q_text = ""

    options = []
    answer = ""
    
    if q_type in ['MCQ', 'MSQ']:
        ans_table = q_div.select_one('.answer_table')
        if ans_table:
            rows = ans_table.select('tr')
            correct_opts = []
            for row in rows:
                opt_idx = row.select_one('.option_index_number')
                opt_data = row.select_one('.option_data')
                
                if opt_idx and opt_data:
                    idx_val = opt_idx.text.strip()
                    opt_html = "".join([str(c) for c in opt_data.contents]).strip()
                    options.append(clean_html(opt_html))
                    
                    if row.get('data-value') == '1':
                        correct_opts.append(idx_val)
            
            if q_type == 'MCQ' and correct_opts:
                answer = correct_opts[0]
            elif q_type == 'MSQ' and correct_opts:
                answer = correct_opts
    elif q_type == 'NAT':
        checkbtn = q_div.select_one('.checkansbtn')
        if checkbtn:
            v1 = checkbtn.get('data-value1', '').strip()
            v2 = checkbtn.get('data-value2', '').strip()
            if v1 and v2 and v1 != v2:
                answer = f"[{v1}, {v2}]"
            elif v1:
                answer = v1

    # Extract discuss link
    discuss_link = ""
    for div in q_div.select('.mtq_explanation-text'):
        a = div.select_one('a')
        if a and 'gateoverflow' in (a.get('href', '') + a.text).lower():
            discuss_link = a.get('href', '')
            break

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

q_num = 1
js_out = "\nregisterTest({\n  series: \"pw-cs-gate-2026\",\n  name: \"TWT-c programming\",\n  date: \"sep 04, 2026\",\n  questions: [\n"
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

js_out += "  ]\n});\n"

# Append to the very end of the file
reg_content += js_out

with open(registry_path, 'w', encoding='utf-8') as f:
    f.write(reg_content)

print(f"Appended {len(questions)} questions to registry under 'TWT-c programming'.")
