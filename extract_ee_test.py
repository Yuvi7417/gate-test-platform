import re
import os
import base64
import sys
import urllib.request
from bs4 import BeautifulSoup

def download_image(url, filepath):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        with open(filepath, 'wb') as f:
            f.write(response.read())

def process_images(soup_elem, img_dir, prefix, img_counter):
    imgs = soup_elem.find_all('img')
    for img in imgs:
        src = img.get('src')
        if not src:
            continue
            
        ext = 'png'
        if src.startswith('data:image'):
            header, encoded = src.split(",", 1)
            if 'jpeg' in header or 'jpg' in header: ext = 'jpg'
            elif 'gif' in header: ext = 'gif'
            
            filename = f"{prefix}_{img_counter[0]}.{ext}"
            filepath = os.path.join("images", "quiz", img_dir, filename)
            
            with open(filepath, "wb") as f:
                f.write(base64.b64decode(encoded))
        elif src.startswith('http'):
            ext = src.split('.').pop().split('?')[0]
            if ext.lower() not in ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp']: ext = 'png'
            filename = f"{prefix}_{img_counter[0]}.{ext}"
            filepath = os.path.join("images", "quiz", img_dir, filename)
            
            print(f"Downloading {src} to {filepath}")
            download_image(src, filepath)
        else:
            img_counter[0] += 1
            continue
            
        img['src'] = f"images/quiz/{img_dir}/{filename}"
        img['style'] = "max-width: 100%;"
        img_counter[0] += 1

def clean_html(html_str):
    if not html_str: return ""
    html_str = re.sub(r'\s+', ' ', html_str)
    
    # Process MathJax: replace <script type="math/tex">...</script>
    html_str = re.sub(r'<script type="math/tex".*?>(.*?)</script>', lambda m: rf"\( {m.group(1)} \)", html_str, flags=re.DOTALL)
    html_str = re.sub(r'<script type="math/tex; mode=display".*?>(.*?)</script>', lambda m: rf"$$ {m.group(1)} $$", html_str, flags=re.DOTALL)
    
    # Remove MathJax preview spans
    html_str = re.sub(r'<span class="MathJax_Preview".*?</span>', '', html_str)
    
    # Escape backticks
    html_str = html_str.replace("`", "\\`")
    
    return html_str.strip()

def main():
    if len(sys.argv) < 4:
        print("Usage: python extract_ee_test.py <html_file> <test_name> <img_dir>")
        return

    html_file = sys.argv[1]
    test_name = sys.argv[2]
    img_dir = sys.argv[3]

    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    full_img_dir = os.path.join("images", "quiz", img_dir)
    os.makedirs(full_img_dir, exist_ok=True)
    
    questions = []
    
    for idx, qcard in enumerate(soup.find_all(class_='qcard')):
        q_num = qcard.get('data-qnum', str(idx + 1))
        
        qtype = qcard.get('data-qtype', 'MCQ')
        marks = int(float(qcard.get('data-right', 1.0)))
        
        if qtype == "MCQ":
            neg = 0.33 if marks == 1 else 0.66
        else:
            neg = 0
            
        img_counter = [1]
        
        qtext_div = qcard.find('div', class_='qtext')
        if qtext_div:
            # Remove scripts and mathjax classes before extracting text
            for mjx in qtext_div.find_all(class_=['MathJax_Preview', 'MathJax']): mjx.decompose()
            process_images(qtext_div, img_dir, f"q{q_num}", img_counter)
            qtext = "".join(str(item) for item in qtext_div.contents)
            qtext = clean_html(qtext)
        else:
            qtext = ""
            
        opts = []
        opts_div = qcard.find('div', class_='opts')
        if opts_div:
            for label in opts_div.find_all('label', class_='opt'):
                for mjx in label.find_all(class_=['MathJax_Preview', 'MathJax']): mjx.decompose()
                process_images(label, img_dir, f"q{q_num}_opt{label.get('data-opt', '')}", img_counter)
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
                answer = f"[{low}, {high}]"
            elif low:
                answer = low
        
        if not answer:
            ans_div = qcard.find('div', class_='answerline')
            if ans_div:
                b_tag = ans_div.find('b')
                if b_tag: answer = b_tag.get_text(strip=True)
                
        if qtype == "MSQ":
            ans_clean = re.sub(r'[^A-D]', '', answer.upper())
            ans_list = [char for char in ans_clean]
            answer = repr(ans_list).replace("'", '"')
        elif qtype == "MCQ":
            answer = f'"{answer}"'
                
        solution = ""
        sol_details = qcard.find('details', class_='solution')
        if sol_details:
            summary = sol_details.find('summary')
            if summary: summary.decompose()
            for mjx in sol_details.find_all(class_=['MathJax_Preview', 'MathJax']): mjx.decompose()
            process_images(sol_details, img_dir, f"q{q_num}_sol", img_counter)
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
        
    questions.sort(key=lambda q: q['marks'])
        
    js_content = ""
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
        elif q['type'] in ['MCQ', 'MSQ']:
            js_content += "      options: [\"A\", \"B\", \"C\", \"D\"],\n"
        else:
            js_content += "      options: [],\n"
            
        js_content += f"      answer: {q['answer']},\n"
        js_content += f"      solution: `{q['solution']}`,\n"
        js_content += "    },\n"

    reg_file = 'js/ee-test-registry.src.js'
    with open(reg_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_test = f"""
registerTest({{
  series: "ee-gate-pyq-2027",
  name: "{test_name}",
  date: "March 07, 2026",
  questions: [
{js_content}  ]
}})
"""
    # Simply append the new block to the end of the file
    with open(reg_file, 'a', encoding='utf-8') as f:
        f.write(new_test)
    
    print(f"Successfully processed {html_file} and appended to {reg_file}.")
        
if __name__ == '__main__':
    main()
