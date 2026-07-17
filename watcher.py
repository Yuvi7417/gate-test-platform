import os
import time
import re
import urllib.request
import json
from datetime import datetime
from bs4 import BeautifulSoup

HTML_PATH = 'test.html'
JS_REGISTRY_PATH = 'js/test-registry.js'

def process_text(html_text, img_dir, folder_name, img_counter_dict):
    temp_soup = BeautifulSoup(html_text, 'html.parser')
    
    for script in temp_soup.find_all('script', type='math/tex'):
        tex = script.string if script.string else ''
        script.replace_with(f'${tex}$')
        
    for span in temp_soup.find_all('span', class_=lambda x: x and ('MathJax' in x or 'mjx' in x or 'MJX' in x)):
        span.decompose()
        
    for img in temp_soup.find_all('img'):
        src = img.get('src', '')
        if src.startswith('http'):
            img_filename = f'img_{img_counter_dict["count"]}.png'
            img_path = os.path.join(img_dir, img_filename)
            try:
                urllib.request.urlretrieve(src, img_path)
                img['src'] = f'js/questions/{folder_name}/{img_filename}'
                img_counter_dict["count"] += 1
            except Exception as e:
                print('Error downloading image:', src, e)
    
    res = str(temp_soup)
    res = res.replace(", '\\n', ", "").replace(" , ", " ")
    res = res.replace(", '\\n`", "`")
    res = res.replace("$\\text{", "").replace("}$", "")
    res = res.replace("$\\mathrm{", "").replace("}$", "")
    res = res.replace('<p>', '').replace('</p>', '<br/>').replace('&nbsp;', ' ')
    res = re.sub(r'\$(.*?)\$', lambda m: m.group(1), res)
    res = res.replace('+', ' + ').replace('=', ' = ')
    res = res.replace('&oplus;', ' &oplus; ').replace('&odot;', ' &odot; ')
    res = re.sub(r'<br/>\s*<br/>', '<br/>', res)
    
    res = res.replace('<div class = "res_question_text">', '')
    res = res.replace('<div class="res_question_text">', '')
    res = res.replace('</div>', '')
    
    res = res.replace('\\text{D}', 'D')
    res = res.replace('\\;', ' ')
    res = res.replace('\\dots', '...')
    res = res.replace('\\rightarrow', '&rarr;')
    res = res.replace('\\vee', ' &or; ')
    res = res.replace('\\wedge', ' &and; ')
    res = res.replace('\\ldots', '...')
    
    table_str = '''<table border="1" style="border-collapse:collapse; text-align:center;">
  <tr><th>Input(X)</th><th>Input(Y)</th><th>Current State</th><th>Next State</th></tr>
  <tr><td>0</td><td>0</td><td>Q</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>Q</td><td>Q&#773;</td></tr>
  <tr><td>1</td><td>1</td><td>Q</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>Q</td><td>Q</td></tr>
</table>'''
    res = re.sub(r'\\begin\{array\}.*?\\end\{array\}', table_str, res, flags=re.DOTALL)
    
    res = res.strip()
    res = re.sub(r'^<br/>\s*', '', res)
    res = re.sub(r'\s*<br/>$', '', res)
    lines = res.split('\n')
    lines = [line.strip() for line in lines]
    res = '\n'.join(lines)
    
    res = re.sub(r'\\?Q_\{(\d+)\}', r'Q<sub>\1</sub>', res)
    res = re.sub(r'A_\{(\d+)\}', r'A<sub>\1</sub>', res)
    res = re.sub(r'\\{ABCD\\}', '{ABCD}', res)
    res = re.sub(r'\\overline\{Q_\{(\d+)\}\}', r'Q<sub>\1</sub>&#773;', res)
    res = re.sub(r'\\overline\{Q\}', r'Q&#773;', res)
    res = res.replace('Q\'', 'Q&#773;')
    res = re.sub(r'_\{(\w+)\}', r'<sub>\1</sub>', res)
    
    return res

def clean_option(opt):
    opt = opt.replace('\\X', 'X').replace('\\Y', 'Y').replace('\\Q', 'Q')
    opt = opt.replace('\\ ', ' ').replace('\\\\', '')
    opt = opt.replace('\\overline{Q_{1}}', 'Q<sub>1</sub>&#773;')
    opt = opt.replace('\\overline{Q_{2}}', 'Q<sub>2</sub>&#773;')
    opt = opt.replace('\\overline{Q_{3}}', 'Q<sub>3</sub>&#773;')
    opt = re.sub(r'\\?Q_\{(\d+)\}', r'Q<sub>\1</sub>', opt)
    opt = re.sub(r'Q_\{(\d+)\}', r'Q<sub>\1</sub>', opt)
    opt = re.sub(r'\\?I_\{(\d+)\}', r'I<sub>\1</sub>', opt)
    opt = re.sub(r'I_\{(\d+)\}', r'I<sub>\1</sub>', opt)
    opt = re.sub(r'\\?D_\{(\d+)\}', r'D<sub>\1</sub>', opt)
    opt = re.sub(r'\\?A_\{(\d+)\}', r'A<sub>\1</sub>', opt)
    opt = re.sub(r'_\{(\w+)\}', r'<sub>\1</sub>', opt)
    opt = opt.strip()
    lines = [l.strip() for l in opt.split('\n')]
    return " ".join(lines)

def process_test():
    with open(HTML_PATH, 'r', encoding='utf-8') as f:
        html_content = f.read()
    if not html_content.strip(): return
    soup = BeautifulSoup(html_content, 'html.parser')
    
    test_id = datetime.now().strftime("%Y%m%d_%H%M%S")
    folder_name = f'test_{test_id}'
    img_dir = os.path.join('js', 'questions', folder_name)
    os.makedirs(img_dir, exist_ok=True)
    img_counter_dict = {"count": 1}
    
    questions = []
    for q_div in soup.find_all('div', class_='res_question'):
        type_span = q_div.find('span', class_='res_qs_type')
        q_type = type_span.text.strip() if type_span else 'MCQ'
        if 'Numerical' in q_type: type_str = 'NAT'
        elif 'Multiple Select' in q_type: type_str = 'MSQ'
        else: type_str = 'MCQ'
            
        marks_span = q_div.find('span', class_='res_qs_marks')
        marks = float(marks_span.text.replace('Award:', '').strip()) if marks_span else 1.0
        marks_str = str(int(marks)) if marks.is_integer() else str(marks)
        
        neg_span = q_div.find('span', class_='res_qs_penalty')
        neg = float(neg_span.text.replace('Penalty:', '').strip()) if neg_span else 0.0
        
        text_div = q_div.find('div', class_='res_question_text')
        options_list = []
        ol = text_div.find('ol')
        if ol:
            for li in ol.find_all('li'):
                opt_html = process_text(li.decode_contents(), img_dir, folder_name, img_counter_dict)
                opt_html = clean_option(opt_html)
                options_list.append(opt_html)
            ol.decompose()
            
        q_text = process_text(str(text_div), img_dir, folder_name, img_counter_dict)
        
        sol_div = q_div.find('div', class_='res_solution')
        ans_span = sol_div.find('span', class_='correct_solution')
        if ans_span:
            ans_text = ans_span.text.replace('Correct Answer:', '').strip()
            if type_str == 'NAT': answer = float(ans_text) if '.' in ans_text else int(ans_text)
            elif type_str == 'MSQ': answer = ans_text.split(';')
            else: answer = ans_text
        else: answer = ""

        questions.append({
            'marks': marks_str,
            'neg': neg,
            'type': type_str,
            'text': q_text,
            'options': options_list,
            'answer': answer
        })
        
    if not questions:
        print("No questions found in test.html.")
        return

    js_block = []
    js_block.append('registerTest({\n')
    js_block.append('  series: "cs-gate-classes",\n')
    js_block.append(f'  name: "New Test {test_id}",\n')
    js_block.append(f'  date: "{datetime.now().strftime("%B %d, %Y")}",\n')
    js_block.append('  questions: [\n')
    for q in questions:
        js_block.append('    {\n')
        js_block.append(f'      marks: {q["marks"]},\n')
        js_block.append(f'      neg: {q["neg"]},\n')
        js_block.append(f'      type: "{q["type"]}",\n')
        js_block.append(f'      text: `{q["text"]}`,\n')
        js_block.append('      image: "",\n')
        js_block.append('      options: [\n')
        for opt in q["options"]:
            js_block.append(f'        `{opt}`,\n')
        js_block.append('      ],\n')
        if type(q['answer']) == list:
            ans_str = str(q['answer']).replace("'", '"')
            js_block.append(f'      answer: {ans_str},\n')
        elif type(q['answer']) in [int, float]:
            js_block.append(f'      answer: {q["answer"]},\n')
        else:
            js_block.append(f'      answer: "{q["answer"]}",\n')
        js_block.append('      solution: ``\n')
        js_block.append('    },\n')
    js_block.append('  ]\n')
    js_block.append('});')
    new_test_str = "".join(js_block)

    with open(JS_REGISTRY_PATH, 'r', encoding='utf-8') as f:
        registry_text = f.read()

    idx = registry_text.rfind('registerTest({')
    if idx != -1:
        updated_text = registry_text[:idx] + new_test_str + '\n\n' + registry_text[idx:]
        with open(JS_REGISTRY_PATH, 'w', encoding='utf-8') as f:
            f.write(updated_text)
        print(f"Appended New Test {test_id} to test-registry.js successfully!")
    else:
        with open(JS_REGISTRY_PATH, 'a', encoding='utf-8') as f:
            f.write('\n\n' + new_test_str)
        print(f"Appended New Test {test_id} to end of test-registry.js successfully!")
        
    with open(HTML_PATH, 'w', encoding='utf-8') as f:
        f.write('')

if __name__ == '__main__':
    print(f"Watching {HTML_PATH} for changes...")
    last_mtime = os.stat(HTML_PATH).st_mtime if os.path.exists(HTML_PATH) else 0
    try:
        while True:
            time.sleep(2)
            if os.path.exists(HTML_PATH):
                current_mtime = os.stat(HTML_PATH).st_mtime
                if current_mtime > last_mtime:
                    last_mtime = current_mtime
                    try:
                        print("Change detected! Processing...")
                        process_test()
                    except Exception as e:
                        print(f"Error processing: {e}")
    except KeyboardInterrupt:
        print("Watcher stopped.")
