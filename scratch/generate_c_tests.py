import os
import re
import json
from bs4 import BeautifulSoup
import urllib.request

output_dir1 = 'js/questions/c_programming_1'
os.makedirs(output_dir1, exist_ok=True)
output_dir2 = 'js/questions/c_programming_2'
os.makedirs(output_dir2, exist_ok=True)

with open('h:/yuvraj dutt/test.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# We process images for C1, but we don't actually download if they exist.
# Actually, the user's HTML points to some src. We'll just change the src to c_programming_1/img_X.png
def escape_js_string(s):
    parts = re.split(r'(<pre.*?</pre>)', s, flags=re.DOTALL)
    for i in range(len(parts)):
        if not parts[i].startswith('<pre'):
            parts[i] = parts[i].replace('\n', ' ')
            parts[i] = re.sub(r'\s+', ' ', parts[i])
            parts[i] = parts[i].replace('<p></p>', '')
    s = "".join(parts).strip()
    return s.replace('\\', '\\\\').replace('`', '\\`')

def process_html_content(tag, img_prefix):
    # Process MathJax
    for math_script in tag.find_all('script', type='math/tex'):
        math_text = math_script.string.strip() if math_script.string else ""
        math_script.replace_with(f'\\( {math_text} \\)')
    
    for math_script in tag.find_all('script', type=re.compile(r'math/tex;.*mode\s*=\s*display.*')):
        math_text = math_script.string.strip() if math_script.string else ""
        math_script.replace_with(f'\\[ {math_text} \\]')

    # Replace images
    img_counter = 1
    for img in tag.find_all('img'):
        src = img.get('src', '')
        # Always rename them to img_X.png
        ext = '.png'
        if '.jpg' in src: ext = '.jpg'
        if '.gif' in src: ext = '.gif'
        filename = f"img_{img_counter}{ext}"
        img['src'] = f"{img_prefix}/{filename}"
        img_counter += 1
                
    # Remove MathJax preview spans and frames
    for el in tag.find_all(class_='MathJax_Preview'): el.decompose()
    for el in tag.find_all(class_='MathJax_CHTML'): el.decompose()
    for el in tag.find_all(class_='MathJax'): el.decompose()
    for el in tag.find_all(id=re.compile(r'^MathJax-Element-.*-Frame$')): el.decompose()
        
    # Format code blocks
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

    content = "".join([str(c) for c in tag.contents]).strip()
    return content

def extract_questions(soup, img_prefix):
    questions_data = []
    question_divs = soup.find_all('div', class_='res_question')
    for div in question_divs:
        q_data = {}
        meta_div = div.find('div', class_='res_qs_meta')
        marks, neg, q_type = 1, 0, 'MCQ'
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
        ol = None
        if text_div:
            for possible_ol in text_div.find_all('ol', recursive=False):
                if 'linenums' not in possible_ol.get('class', []):
                    ol = possible_ol
                    break
        if ol:
            for li in ol.find_all('li', recursive=False):
                opt_html = process_html_content(li, img_prefix)
                options_list.append(opt_html)
            ol.extract()
            
        q_text_html = process_html_content(text_div, img_prefix)
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
    for i, q in enumerate(q_data_list):
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
    js_code += "  ]\n});"
    return js_code

# We MUST parse twice because we modify the soup in place!
soup1 = BeautifulSoup(html, 'html.parser')
q1 = extract_questions(soup1, "js/questions/c_programming_1")
c1_js = generate_js(q1, "TWT - C-Programing-1", "July 18, 2026")

soup2 = BeautifulSoup(html, 'html.parser')
q2 = extract_questions(soup2, "js/questions/c_programming_2")
c2_js = generate_js(q2, "TWT - C-Programing-2", "July 25, 2026")

# Now inject both into test-registry.src.js
with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace C-Programing-1
idx1 = content.find('name: "TWT - C-Programing-1"')
start_idx1 = content.rfind('registerTest({', 0, idx1)
end_idx1 = content.find('  ]\n});', idx1) + 7
content = content[:start_idx1] + c1_js + content[end_idx1:]

# Replace C-Programing-2
idx2 = content.find('name: "TWT - C-Programing-2"')
start_idx2 = content.rfind('registerTest({', 0, idx2)
end_idx2 = content.find('  ]\n});', idx2) + 7
content = content[:start_idx2] + c2_js + content[end_idx2:]

with open('h:/yuvraj dutt/js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected perfectly!")
