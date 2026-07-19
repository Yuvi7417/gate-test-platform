import os
import re
import json
from bs4 import BeautifulSoup

with open('h:/yuvraj dutt/test.html', 'r', encoding='utf-8') as f:
    html = f.read()

def escape_js_string(s):
    parts = re.split(r'(<pre.*?</pre>)', s, flags=re.DOTALL)
    for i in range(len(parts)):
        if not parts[i].startswith('<pre'):
            parts[i] = parts[i].replace('\n', ' ')
            parts[i] = re.sub(r'\s+', ' ', parts[i])
            parts[i] = parts[i].replace('<p></p>', '')
    s = "".join(parts).strip()
    return s.replace('\\', '\\\\').replace('`', '\\`')

def process_html_content(tag):
    for math_script in tag.find_all('script', type='math/tex'):
        math_text = math_script.string.strip() if math_script.string else ""
        math_text = math_text.replace('&nbsp;', ' ').replace('\\xa0', ' ')
        math_script.replace_with(f'\\( {math_text} \\)')
    
    for math_script in tag.find_all('script', type=re.compile(r'math/tex;.*mode\s*=\s*display.*')):
        math_text = math_script.string.strip() if math_script.string else ""
        math_text = math_text.replace('&nbsp;', ' ').replace('\\xa0', ' ')
        math_script.replace_with(f'\\[ {math_text} \\]')

    for el in tag.find_all(class_='MathJax_Preview'): el.decompose()
    for el in tag.find_all(class_='MathJax_CHTML'): el.decompose()
    for el in tag.find_all(class_='MathJax'): el.decompose()
    for el in tag.find_all(id=re.compile(r'^MathJax-Element-.*-Frame$')): el.decompose()
        
    for pre in tag.find_all('pre'):
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

    html_str = "".join([str(c) for c in tag.contents]).strip()
    return html_str.replace('\xa0', ' ')

def extract_questions(soup):
    questions_data = []
    for div in soup.find_all('div', class_='res_question'):
        q_data = {}
        marks, neg, q_type = 1, 0, 'MCQ'
        meta_div = div.find('div', class_='res_qs_meta')
        if meta_div:
            for span in meta_div.find_all('span'):
                text = span.get_text(strip=True).lower()
                if 'award:' in text:
                    try: marks = float(text.split(':')[1].strip())
                    except: pass
                elif 'penalty:' in text:
                    try: neg = float(text.split(':')[1].strip())
                    except: pass
                elif 'multiple choice' in text: q_type = 'MCQ'
                elif 'multiple select' in text: q_type = 'MSQ'
                elif 'numerical' in text: q_type = 'NAT'
                    
        if marks.is_integer(): marks = int(marks)
        if neg.is_integer(): neg = int(neg)
        q_data['marks'], q_data['neg'], q_data['type'] = marks, neg, q_type
        
        text_div = div.find('div', class_='res_question_text')
        options_list = []
        if text_div and q_type != 'NAT':
            lists = text_div.find_all(['ol', 'ul'])
            valid_lists = [l for l in lists if not l.find_parent('pre')]
            if valid_lists:
                lst = valid_lists[-1]
                for li in lst.find_all('li', recursive=False):
                    options_list.append(process_html_content(li))
                lst.extract()
            
        q_text_html = process_html_content(text_div)
        q_data['text'] = f'<p></p>{q_text_html}'
        q_data['options'] = options_list
        q_data['image'] = ""
        
        ans_str = "A"
        sol_str = ""
        sol_div = div.find('div', class_='res_solution')
        if sol_div:
            for span in sol_div.find_all('span', class_='correct_solution'):
                ans_text = span.get_text(strip=True)
                if 'Correct Answer:' in ans_text:
                    ans_str = ans_text.split('Correct Answer:')[1].strip()
                    if q_type == 'MSQ': ans_str = [x.strip() for x in ans_str.split(';')]
                    elif q_type == 'NAT':
                        if 'to' in ans_str:
                            parts = ans_str.split('to')
                            ans_str = [float(parts[0].strip()), float(parts[1].strip())]
                        else:
                            try:
                                num_ans = float(ans_str)
                                if num_ans.is_integer(): ans_str = int(num_ans)
                                else: ans_str = num_ans
                            except: pass
        q_data['answer'] = ans_str
        q_data['solution'] = sol_str
        questions_data.append(q_data)
    return questions_data

def generate_js(q_data_list, test_name, test_date):
    js_code = f"""registerTest({{
  series: "cs-gate-classes",
  name: "{test_name}",
  date: "{test_date}",
  questions: [
"""
    for q in q_data_list:
        options_str = "[]"
        if q['options']:
            options_str = "[\n"
            for opt in q['options']:
                options_str += f"        `{escape_js_string(opt)}`,\n"
            options_str += "      ]"
            
        if isinstance(q['answer'], list) and len(q['answer']) > 0 and isinstance(q['answer'][0], str):
            ans_str = json.dumps(q['answer'])
        elif isinstance(q['answer'], list) and len(q['answer']) == 2 and isinstance(q['answer'][0], (int, float)):
            ans_str = f"[{q['answer'][0]}, {q['answer'][1]}]"
        elif isinstance(q['answer'], str):
            ans_str = f'"{q["answer"]}"'
        else:
            ans_str = str(q['answer'])
            
        js_code += f"""    {{
      marks: {q['marks']},
      neg: {q['neg']},
      type: "{q['type']}",
      text: `{escape_js_string(q['text'])}`,
      image: "{q['image']}",
      options: {options_str},
      answer: {ans_str},
      solution: `{escape_js_string(q['solution'])}`
    }},
"""
    js_code += "  ]\n});\n"
    return js_code

soup = BeautifulSoup(html, 'html.parser')
q3 = extract_questions(soup)
c3_js = generate_js(q3, "SWT - C-Programing-2", "August 16, 2026")

with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Append to the end of the file
with open('h:/yuvraj dutt/js/test-registry.src.js', 'a', encoding='utf-8') as f:
    f.write('\n\n' + c3_js)

print("Injected SWT - C-Programing-2 successfully!")
