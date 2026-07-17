import os
import re
import json
from bs4 import BeautifulSoup
import urllib.request

output_dir = 'js/questions/digital_logic_3'
os.makedirs(output_dir, exist_ok=True)

with open('test.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
img_counter = 1

def process_html_content(tag):
    global img_counter
    if not tag: return ""
    
    for math_script in tag.find_all('script', type='math/tex'):
        math_text = math_script.string.strip() if math_script.string else ""
        math_script.replace_with(f'\\( {math_text} \\)')
    
    for math_script in tag.find_all('script', type=re.compile(r'math/tex;.*mode\s*=\s*display.*')):
        math_text = math_script.string.strip() if math_script.string else ""
        math_script.replace_with(f'\\[ {math_text} \\]')

    for img in tag.find_all('img'):
        src = img.get('src', '')
        if src.startswith('http'):
            try:
                ext = '.png'
                if '.jpg' in src: ext = '.jpg'
                if '.gif' in src: ext = '.gif'
                filename = f"img_{img_counter}{ext}"
                local_path = os.path.join(output_dir, filename)
                
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                    out_file.write(response.read())
                    
                img['src'] = f"{output_dir}/{filename}"
                img_counter += 1
            except Exception as e:
                print(f"Failed to download image {src}: {e}")
    for el in tag.find_all(class_='MathJax_Preview'): el.decompose()
    for el in tag.find_all(class_='MathJax_CHTML'): el.decompose()
    for el in tag.find_all(class_='MathJax'): el.decompose()
    for el in tag.find_all(id=re.compile(r'^MathJax-Element-.*-Frame$')): el.decompose()
        
    return "".join([str(c) for c in tag.contents]).strip()

questions_data = []
for div in soup.find_all('div', class_='res_question'):
    q_data = {'marks': 1.0, 'neg': 0.0, 'type': 'MCQ', 'answer': "", 'solution': "", 'options': []}
    
    meta_div = div.find('div', class_='res_qs_meta')
    if meta_div:
        for span in meta_div.find_all('span'):
            text = span.get_text(strip=True).lower()
            if 'award:' in text:
                try: q_data['marks'] = float(text.split(':')[1].strip())
                except: pass
            elif 'penalty:' in text:
                try: q_data['neg'] = float(text.split(':')[1].strip())
                except: pass
            elif 'multiple choice' in text: q_data['type'] = 'MCQ'
            elif 'multiple select' in text: q_data['type'] = 'MSQ'
            elif 'numerical' in text: q_data['type'] = 'NAT'
                
    text_div = div.find('div', class_='res_question_text')
    if text_div:
        lists = text_div.find_all(['ol', 'ul'], recursive=False)
        if not lists:
            lists = text_div.find_all(['ol', 'ul'])
        if lists:
            lst = lists[-1]
            q_data['options'] = [process_html_content(li) for li in lst.find_all('li', recursive=False)]
            lst.extract()
        
    q_data['text'] = process_html_content(text_div)
    
    # ans_area could be res_answer_area or res_solution directly depending on HTML structure
    ans_area = div.find('div', class_='res_answer_area')
    if not ans_area:
        ans_area = div.find('div', class_='res_solution')
        
    if ans_area:
        ans_span = ans_area.find('span', class_='correct_solution')
        if ans_span:
            ans_text = ans_span.get_text(strip=True)
            match = re.search(r'Correct\s*Answer:\s*(.*)', ans_text, re.IGNORECASE)
            ans_str = match.group(1).strip() if match else ans_text
                
            if q_data['type'] == 'MSQ':
                q_data['answer'] = [a.strip() for a in re.split(r'[,;]', ans_str) if a.strip()]
            elif q_data['type'] == 'NAT':
                try: q_data['answer'] = float(ans_str) if '-' not in ans_str else ans_str
                except: q_data['answer'] = ans_str
            else:
                q_data['answer'] = ans_str
                
        # Solution content is usually wrapped in a specific div inside res_solution or res_answer_area
        sol_div = div.find('div', class_='res_solution')
        if sol_div:
            # We want to extract the text of solution without the Correct Answer spans
            # So we create a copy or extract the relevant parts
            sol_copy = BeautifulSoup(str(sol_div), 'html.parser')
            for span in sol_copy.find_all('span', class_='res_qs_bottom_meta1'):
                span.decompose()
            sol_content = process_html_content(sol_copy)
            # Remove any leading <div class="res_solution"> wrapper by just getting inner HTML if needed
            q_data['solution'] = sol_content

    questions_data.append(q_data)

def escape_js_string(s):
    s = s.replace('\n', ' ')
    s = re.sub(r'\s+', ' ', s)
    s = s.replace('<p></p>', '')
    s = s.strip()
    return s.replace('\\', '\\\\').replace('`', '\\`')

js_lines = ["registerTest({", '  series: "cs-gate-classes",', '  name: "SWT - Digital Logic-3",', '  date: "July 15, 2026",', '  questions: [']
for q in questions_data:
    js_lines.append('    {')
    
    marks_str = str(int(q["marks"])) if q["marks"].is_integer() else str(q["marks"])
    neg_str = str(int(q["neg"])) if q["neg"].is_integer() else str(q["neg"])
    
    js_lines.append(f'      marks: {marks_str},')
    js_lines.append(f'      neg: {neg_str},')
    js_lines.append(f'      type: "{q["type"]}",')
    js_lines.append('      text: `'+escape_js_string(q["text"])+'`,')
    js_lines.append('      image: "",')
    
    if q["options"]:
        js_lines.append('      options: [')
        for opt in q["options"]: js_lines.append('        `'+escape_js_string(opt)+'`,')
        js_lines.append('      ],')
    else:
        js_lines.append('      options: [],')
        
    ans_val = q["answer"]
    if q["type"] == "MSQ": js_lines.append(f'      answer: {json.dumps(ans_val)},')
    elif q["type"] == "NAT": js_lines.append(f'      answer: {ans_val if isinstance(ans_val, (int, float)) else f'"{ans_val}"'},')
    else: js_lines.append(f'      answer: "{ans_val}",')
        
    js_lines.append('      solution: `'+escape_js_string(q["solution"])+'`')
    js_lines.append('    },')
js_lines.extend(['  ]', '});\n'])

insert_code = "\n".join(js_lines)

with open('js/test-registry.js', 'r', encoding='utf-8') as f: content = f.read()

lines = content.splitlines(keepends=True)
lines.insert(5564, insert_code + "\n\n")

with open('js/test-registry.js', 'w', encoding='utf-8') as f: f.writelines(lines)
print("Updated test with answers!")
