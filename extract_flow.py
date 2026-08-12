import re
import os
import base64
from bs4 import BeautifulSoup

def process_images(soup_elem, img_dir, prefix):
    imgs = soup_elem.find_all('img')
    img_count = 1
    for img in imgs:
        src = img.get('src')
        if src and src.startswith('data:image'):
            # Extract base64
            header, encoded = src.split(",", 1)
            ext = 'png'
            if 'jpeg' in header or 'jpg' in header: ext = 'jpg'
            elif 'gif' in header: ext = 'gif'
            
            filename = f"{prefix}_{img_count}.{ext}"
            filepath = os.path.join(img_dir, filename)
            
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(encoded))
            
            img['src'] = f"/{img_dir}/{filename}"
            img['style'] = "max-width: 100%;"
            img_count += 1

def clean_html(html_str):
    if not html_str: return ""
    # Collapse multiple whitespaces and newlines into a single space
    html_str = re.sub(r'\s+', ' ', html_str)
    return html_str.strip()

def main():
    with open('test1.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    img_dir = "js/questions/fst-mock-level-test-1"
    os.makedirs(img_dir, exist_ok=True)
    
    questions = []
    
    for idx, qcard in enumerate(soup.find_all(class_='qcard')):
        q_num = qcard.get('data-qnum', str(idx + 1))
        
        qtype = qcard.get('data-qtype', 'MCQ')
        marks = int(float(qcard.get('data-right', 1.0)))
        
        # User condition: 1 mark neg 0.33, 2 marks neg 0.66 for MCQ only. MSQ/NAT neg 0.
        if qtype == "MCQ":
            neg = 0.33 if marks == 1 else 0.66
        else:
            neg = 0
            
        qtext_div = qcard.find('div', class_='qtext')
        if qtext_div:
            process_images(qtext_div, img_dir, f"q{q_num}")
            qtext = "".join(str(item) for item in qtext_div.contents)
            qtext = clean_html(qtext)
        else:
            qtext = ""
            
        opts = []
        opts_div = qcard.find('div', class_='opts')
        if opts_div:
            for label in opts_div.find_all('label', class_='opt'):
                process_images(label, img_dir, f"q{q_num}_opt{label.get('data-opt', '')}")
                opt_inner = label.find('div')
                if opt_inner:
                    b_tag = opt_inner.find('b')
                    if b_tag: b_tag.decompose()
                    opt_html = "".join(str(item) for item in opt_inner.contents)
                    opts.append(clean_html(opt_html))
        
        answer = qcard.get('data-correct', '')
        if not answer:
            low = qcard.get('data-nat-low', '')
            high = qcard.get('data-nat-high', '')
            if low and high:
                answer = f"{low} - {high}"
            elif low:
                answer = low
        
        # Fallback to answerline
        if not answer:
            ans_div = qcard.find('div', class_='answerline')
            if ans_div:
                b_tag = ans_div.find('b')
                if b_tag: answer = b_tag.get_text(strip=True)
                
        # Handle MSQ answer parsing
        if qtype == "MSQ":
            # If answer is like "A,B,C" or "A B C" or "AB", split it
            # Remove any brackets or quotes if present
            ans_clean = re.sub(r'[^A-D]', '', answer.upper())
            ans_list = [char for char in ans_clean]
            answer = repr(ans_list).replace("'", '"') # e.g. ["A", "B"]
        else:
            # If it's MCQ or NAT, just keep it as a string
            answer = f'"{answer}"'
                
        solution = ""
        sol_details = qcard.find('details', class_='solution')
        if sol_details:
            summary = sol_details.find('summary')
            if summary: summary.decompose()
            process_images(sol_details, img_dir, f"q{q_num}_sol")
            solution = "".join(str(item) for item in sol_details.contents)
            solution = clean_html(solution)
            
        q_obj = {
            "marks": marks,
            "neg": neg,
            "type": qtype,
            "text": qtext,
            "options": opts,
            "answer": answer,
            "solution": solution
        }
        questions.append(q_obj)
        
    # Sort questions: 1 marks first, then 2 marks
    questions.sort(key=lambda q: q['marks'])
        
    # Generate JS
    js_content = """

registerTest({
  series: "ce-gate-pyq",
  name: "FST - Mock Level Test-1",
  date: "Oct 01, 2026",
  questions: [
"""
    
    for q in questions:
        js_content += "    {\n"
        js_content += f"      marks: {q['marks']},\n"
        js_content += f"      neg: {q['neg']},\n"
        js_content += f"      type: \"{q['type']}\",\n"
        js_content += f"      text: `{q['text']}`,\n"
        js_content += f"      image: \"\",\n"
        
        if len(q['options']) > 0:
            js_content += "      options: [\n"
            for opt in q['options']:
                js_content += f"        `{opt}`,\n"
            js_content += "      ],\n"
        else:
            js_content += "      options: [],\n"
            
        js_content += f"      answer: {q['answer']},\n"
        js_content += f"      solution: `{q['solution']}`,\n"
        js_content += "    },\n"
        
    js_content += """  ]
});
"""

    with open('js/ce-test-registry.src.js', 'a', encoding='utf-8') as f:
        f.write(js_content)
        
if __name__ == '__main__':
    main()
