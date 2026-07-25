import json
from bs4 import BeautifulSoup
import re

registry_path = 'h:/yuvraj dutt/js/test-registry.src.js'
html_path = 'h:/yuvraj dutt/test.html'

with open(registry_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

registry = "".join(lines)

html = open(html_path, encoding='utf-8').read()
soup = BeautifulSoup(html, 'html.parser')

def clean_mathjax(soup_obj):
    if not soup_obj:
        return ""
    import copy
    cloned = copy.copy(soup_obj)
    
    for span in cloned.find_all('span', class_=['MathJax_Preview', 'mjx-chtml', 'MJX_Assistive_MathML']):
        span.decompose()
        
    for script in cloned.find_all('script', type=re.compile('math/tex')):
        math_text = script.string if script.string else ""
        if 'mode=display' in script.get('type', ''):
            new_text = f"$$ {math_text} $$"
        else:
            new_text = f"\\( {math_text} \\)"
        script.replace_with(new_text)
        
    for p in cloned.find_all('p'):
        if not p.get_text(strip=True) and not p.find_all(recursive=False):
            p.decompose()

    pre_blocks = {}
    for i, pre in enumerate(cloned.find_all('pre')):
        uid = f"__PRE_BLOCK_{i}__"
        pre_blocks[uid] = str(pre)
        pre.replace_with(uid)

    raw_html = cloned.decode_contents().strip()
    raw_html = re.sub(r'\s+', ' ', raw_html)

    for uid, original_pre in pre_blocks.items():
        raw_html = raw_html.replace(uid, original_pre)

    return raw_html

def escape_js(s):
    if not isinstance(s, str): return s
    s = s.replace('\\', '\\\\')
    s = s.replace('`', '\\`')
    s = s.replace('$', '\\$')
    return s

questions = soup.find_all('div', class_='res_question')

new_test = """registerTest({
  series: "cs-gate-classes",
  name: "TWT - Engineering Mathematics-2",
  date: "November 27, 2026",
  questions: [
"""

parsed_questions = []

for idx, q in enumerate(questions):
    text_div = q.find('div', class_='res_question_text')
    solution_div = q.find('div', class_='res_solution')

    q_type = "MCQ"
    type_span = q.find('span', class_='res_qs_type')
    if type_span:
        t = type_span.get_text().strip().lower()
        if 'multiple choice' in t: q_type = 'MCQ'
        elif 'multiple select' in t: q_type = 'MSQ'
        elif 'numerical' in t: q_type = 'NAT'

    marks = 1
    marks_span = q.find('span', class_='res_qs_marks')
    if marks_span:
        m = re.search(r'Award:\s*([0-9.]+)', marks_span.get_text())
        if m: 
            val = float(m.group(1))
            marks = int(val) if val.is_integer() else val

    neg = 0.33
    neg_span = q.find('span', class_='res_qs_penalty')
    if neg_span:
        n = re.search(r'Penalty:\s*([0-9.]+)', neg_span.get_text())
        if n: 
            val = float(n.group(1))
            neg = int(val) if val.is_integer() else val

    options = []
    if text_div:
        ol_list = text_div.find_all('ol', recursive=False)
        if ol_list:
            ol = ol_list[-1]
            for li in ol.find_all('li', recursive=False):
                options.append(clean_mathjax(li))
            ol.decompose()

    text = clean_mathjax(text_div)
    text = text.replace('&amp;nbsp;', ' ').replace('&nbsp;', ' ')
    
    img_tag = q.find('img', class_='res_question_image')
    image_src = img_tag['src'] if img_tag else ""

    answer = ""
    if solution_div:
        ans_span = solution_div.find('span', class_='correct_solution')
        if ans_span:
            ans_text = ans_span.get_text().replace('Correct Answer:', '').strip()
            if q_type == "MSQ":
                answer = [x.strip() for x in ans_text.split(';')]
            elif q_type == "NAT":
                if "to" in ans_text:
                    parts = [x.strip() for x in ans_text.split("to")]
                    if len(parts) == 2 and parts[0] == parts[1]:
                        answer = parts[0]
                    else:
                        answer = ans_text
                else:
                    answer = ans_text
            else:
                answer = ans_text

    parsed_questions.append({
        'marks': marks,
        'neg': neg,
        'type': q_type,
        'text': text,
        'image': image_src,
        'options': options,
        'answer': answer,
        'solution': ''
    })

print(f"Extracted {len(parsed_questions)} questions")

for q in parsed_questions:
    options_str = "[\n"
    for opt in q['options']:
        opt = opt.replace('&amp;nbsp;', ' ').replace('&nbsp;', ' ')
        options_str += f"        `{escape_js(opt)}`,\n"
    options_str += "      ]"
    
    if q['type'] == "MSQ":
        ans_str = json.dumps(q['answer'])
    else:
        ans_str = f"\"{q['answer']}\""
        
    new_test += f"""    {{
      marks: {q['marks']},
      neg: {q['neg']},
      type: "{q['type']}",
      text: `{escape_js(q['text'])}`,
      image: "{q['image']}",
      options: {options_str},
      answer: {ans_str},
      solution: ``
    }},
"""

new_test += """  ]
});
"""

registry += "\n" + new_test

with open(registry_path, 'w', encoding='utf-8') as f:
    f.write(registry)

print("Injected TWT-4!")
