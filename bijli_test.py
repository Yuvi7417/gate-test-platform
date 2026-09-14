import json
import os
import base64
import re
from bs4 import BeautifulSoup

def process_html_images(html_content, img_dir, img_prefix, img_counter):
    if not html_content:
        return html_content, img_counter
    soup = BeautifulSoup(html_content, 'html.parser')
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if src.startswith('data:image'):
            # Extract base64 data
            header, encoded = src.split(',', 1)
            ext = header.split(';')[0].split('/')[1]
            if ext == 'jpeg': ext = 'jpg'
            
            img_filename = f"img_{img_counter}.{ext}"
            img_path = os.path.join(img_dir, img_filename)
            
            with open(img_path, 'wb') as f:
                f.write(base64.b64decode(encoded))
            
            img['src'] = f"js/questions/{img_prefix}/{img_filename}"
            img_counter += 1
            
    return str(soup), img_counter

def clean_backticks(js_content):
    def replacer(match):
        text = match.group(0)
        # Replace one or more whitespace characters (including newlines) with a single space
        return re.sub(r'\s+', ' ', text)
    return re.sub(r'`[^`]*`', replacer, js_content)

def process_test_file(html_file, js_file, img_prefix, series_name, test_name, test_date):
    img_dir = os.path.join(os.path.dirname(js_file), 'questions', img_prefix)
    os.makedirs(img_dir, exist_ok=True)
    
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    questions = []
    img_counter = 1
    
    for qcard in soup.find_all(class_='qcard'):
        marks = float(qcard.get('data-right', 1))
        if marks.is_integer():
            marks = int(marks)
            
        qtype = qcard.get('data-qtype', 'MCQ')
        
        # Apply negative marking logic based on type and marks
        if qtype == 'MCQ':
            if marks == 1:
                neg = 0.33
            elif marks == 2:
                neg = 0.66
            else:
                neg = 0
        else:
            # MSQ and NAT have 0 negative marks
            neg = 0
        
        # Extract text
        qtext_div = qcard.find(class_='qtext')
        text_html = ""
        if qtext_div:
            inner_html = "".join([str(c) for c in qtext_div.contents]).strip()
            text_html, img_counter = process_html_images(inner_html, img_dir, img_prefix, img_counter)
        
        # Extract options
        options = []
        opts_div = qcard.find(class_='opts')
        if opts_div:
            for opt_label in opts_div.find_all('label', class_='opt'):
                div = opt_label.find('div')
                if div:
                    b_tag = div.find('b')
                    if b_tag:
                        b_tag.decompose() # Remove the bold "A.", "B.", etc.
                    opt_inner_html = "".join([str(c) for c in div.contents]).strip()
                    opt_html, img_counter = process_html_images(opt_inner_html, img_dir, img_prefix, img_counter)
                    options.append(opt_html)
                    
        # Extract answer
        answer = qcard.get('data-correct', '')
        if qtype == 'MSQ':
            answer = [ans.strip() for ans in answer.split(',') if ans.strip()]
            if not answer:
                answer = qcard.get('data-correct', '').split(',')
        elif qtype == 'NAT':
            low = qcard.get('data-nat-low', '')
            high = qcard.get('data-nat-high', '')
            if low == high and low:
                answer = low
            elif low and high:
                answer = f"{low} - {high}"
            else:
                answer = qcard.get('data-correct', '')
        
        # Extract solution
        solution_html = ""
        sol_details = qcard.find('details', class_='solution')
        if sol_details:
            summary = sol_details.find('summary')
            if summary:
                summary.decompose()
            sol_inner = "".join([str(c) for c in sol_details.contents]).strip()
            solution_html, img_counter = process_html_images(sol_inner, img_dir, img_prefix, img_counter)
            
        q_obj = {
            "marks": marks,
            "neg": neg,
            "type": qtype,
            "text": text_html,
            "image": "",
            "options": options,
            "answer": answer,
            "solution": solution_html
        }
        questions.append(q_obj)
        
    # Sort the first 10 questions (1 marks then 2 marks)
    first_10 = questions[:10]
    first_10.sort(key=lambda x: x['marks'])
    
    # Sort the remaining questions (1 marks then 2 marks)
    rest = questions[10:]
    rest.sort(key=lambda x: x['marks'])
    
    questions = first_10 + rest

    # Build JS output string
    js_content = "registerTest({\n"
    js_content += f"  series: \"{series_name}\",\n"
    js_content += f"  name: \"{test_name}\",\n"
    js_content += f"  date: \"{test_date}\",\n"
    js_content += "  questions: [\n"
    
    for i, q in enumerate(questions):
        js_content += "    {\n"
        js_content += f"      marks: {q['marks']},\n"
        js_content += f"      neg: {q['neg']},\n"
        js_content += f"      type: \"{q['type']}\",\n"
        
        text_safe = q['text'].replace('`', '\\`')
        js_content += f"      text: `{text_safe}`,\n"
        js_content += f"      image: \"\",\n"
        
        js_content += "      options: [\n"
        for j, opt in enumerate(q['options']):
            opt_safe = opt.replace('`', '\\`')
            js_content += f"        `{opt_safe}`" + ("," if j < len(q['options'])-1 else "") + "\n"
        js_content += "      ],\n"
        
        if isinstance(q['answer'], list):
            ans_str = json.dumps(q['answer'])
            js_content += f"      answer: {ans_str},\n"
        else:
            js_content += f"      answer: \"{q['answer']}\",\n"
            
        sol_safe = q['solution'].replace('`', '\\`')
        js_content += f"      solution: `{sol_safe}`\n"
        
        js_content += "    }" + ("," if i < len(questions)-1 else "") + "\n"
        
    js_content += "  ]\n});\n"
    
    # Clean whitespace and gaps inside backticks for proper HTML display
    cleaned_js_content = clean_backticks(js_content)
    
    with open(js_file, 'a', encoding='utf-8') as f:
        f.write("\n" + cleaned_js_content)
        
    print(f"Extracted {len(questions)} questions and {img_counter-1} images.")
    print(f"Saved cleanly formatted registry to {js_file}")

if __name__ == "__main__":
    # Settings for this specific test
    HTML_FILE = r'h:\yuvraj dutt\test.html'
    JS_FILE = r'h:\yuvraj dutt\js\cse-2026-test-registry.src.js'
    IMG_PREFIX = 'advance_level_test4_full_syllabus_gate_2026_cs'
    SERIES = 'cse-gate-2026-pyq'
    TEST_NAME = 'FST - Advance Level Test-4'
    DATE = 'Sep 13, 2026'

    process_test_file(HTML_FILE, JS_FILE, IMG_PREFIX, SERIES, TEST_NAME, DATE)
