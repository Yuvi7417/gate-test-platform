import re
import os
import urllib.request
from bs4 import BeautifulSoup

def download_image(url, filepath):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_images(soup_elem, img_dir, prefix, img_counter):
    imgs = soup_elem.find_all('img')
    for img in imgs:
        src = img.get('src')
        if not src: continue
        ext = src.split('.')[-1].split('?')[0]
        if ext.lower() not in ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp']: ext = 'png'
        filename = f"{prefix}_{img_counter[0]}.{ext}"
        filepath = os.path.join("images", img_dir, filename)
        
        if not os.path.exists(filepath):
            print(f"Downloading {src} to {filepath}")
            download_image(src, filepath)
            
        img['src'] = f"images/{img_dir}/{filename}"
        img['style'] = "max-width: 100%;"
        img_counter[0] += 1

def clean_html(html_str):
    if not html_str: return ""
    html_str = re.sub(r'\s+', ' ', html_str)
    
    html_str = re.sub(r'<script[^>]*?type="math/tex; mode=display"[^>]*?>(.*?)</script>', lambda m: rf"$$ {m.group(1)} $$", html_str, flags=re.DOTALL)
    html_str = re.sub(r'<script[^>]*?type="math/tex"[^>]*?>(.*?)</script>', lambda m: rf"\( {m.group(1)} \)", html_str, flags=re.DOTALL)
    
    html_str = re.sub(r'\b(?:lang|language)-[a-zA-Z0-9_]+\b', '', html_str)
    
    html_str = html_str.replace("\\", "\\\\")
    html_str = html_str.replace("`", "\\`")
    return html_str.strip()

def main():
    html_file = "test.html"
    test_name = "MST - Algo + DS + C"
    img_dir = "MST4"
    
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
    
    full_img_dir = os.path.join("images", img_dir)
    os.makedirs(full_img_dir, exist_ok=True)
    
    questions = []
    
    for idx, qdiv in enumerate(soup.find_all('div', class_='res_question')):
        q_num = qdiv.get('data-orignum', str(idx + 1))
        img_counter = [1]
        
        marks = 1
        marks_span = qdiv.find('span', class_='res_qs_marks')
        if marks_span:
            m = re.search(r'Award:\s*([\d.]+)', marks_span.text)
            if m: marks = float(m.group(1))
            
        neg = 0
        neg_span = qdiv.find('span', class_='res_qs_penalty')
        if neg_span:
            m = re.search(r'Penalty:\s*([\d.]+)', neg_span.text)
            if m: neg = float(m.group(1))
            
        qtype_span = qdiv.find('span', class_='res_qs_type')
        qtype_text = qtype_span.text if qtype_span else ""
        if "Multiple Select" in qtype_text: qtype = "MSQ"
        elif "Numerical" in qtype_text: qtype = "NAT"
        else: qtype = "MCQ"

        qtext_div = qdiv.find('div', class_='res_question_text')
        opts = []
        if qtext_div:
            if qtype != 'NAT':
                # find ol with style upper-alpha or type='a' for options
                ol = qtext_div.find('ol', style=lambda s: s and 'upper-alpha' in s)
                if not ol:
                    ol = qtext_div.find('ol', type=lambda t: t and t.lower() == 'a')
                if not ol:
                    ols = [o for o in qtext_div.find_all('ol') if 'linenums' not in o.get('class', [])]
                    if ols:
                        ol = ols[-1]
                if ol:
                    for li in ol.find_all('li', recursive=False):
                        for mjx in li.find_all(class_=['MathJax_Preview', 'MathJax_CHTML', 'MathJax']): mjx.decompose()
                        process_images(li, img_dir, f"q{q_num}_opt", img_counter)
                        opt_html = "".join(str(item) for item in li.contents)
                        opts.append(clean_html(opt_html))
                    ol.decompose()
                
            for mjx in qtext_div.find_all(class_=['MathJax_Preview', 'MathJax_CHTML', 'MathJax']): mjx.decompose()
            process_images(qtext_div, img_dir, f"q{q_num}", img_counter)
            qtext = "".join(str(item) for item in qtext_div.contents)
            qtext = clean_html(qtext)
        else:
            qtext = ""
            
        answer = ""
        sol_span = qdiv.find('span', class_='correct_solution')
        if sol_span:
            ans_text = sol_span.text.replace("Correct Answer:", "").strip()
            if qtype == "MSQ":
                ans_list = [a.strip() for a in ans_text.split(';') if a.strip()]
                answer = repr(ans_list).replace("'", '"')
            elif qtype == "MCQ":
                answer = f'"{ans_text}"'
            else:
                answer = ans_text # NAT answer
                if ";" in ans_text or "," in ans_text:
                     parts = [p.strip() for p in ans_text.replace(';', ',').split(',') if p.strip()]
                     if len(parts) >= 2:
                         answer = f"[{parts[0]}, {parts[1]}]"
                     else:
                         answer = f"\"{ans_text}\""

        if not answer:
            answer = '""'
            
        q_obj = {
            "marks": int(marks) if marks.is_integer() else marks,
            "neg": int(neg) if neg.is_integer() else neg,
            "type": qtype,
            "text": qtext,
            "options": opts,
            "answer": answer,
            "solution": ""
        }
        questions.append(q_obj)
        
    js_content = ""
    for q in questions:
        js_content += "        {\n"
        js_content += f"            marks: {q['marks']},\n"
        js_content += f"            neg: {q['neg']},\n"
        js_content += f"            type: \"{q['type']}\",\n"
        js_content += f"            text: `{q['text']}`,\n"
        
        if len(q['options']) > 0:
            js_content += "            options: [\n"
            for opt in q['options']:
                js_content += f"                `{opt}`,\n"
            js_content += "            ],\n"
        elif q['type'] in ['MCQ', 'MSQ']:
            js_content += "            options: [\"A\", \"B\", \"C\", \"D\"],\n"
        else:
            js_content += "            options: [],\n"
            
        js_content += f"            answer: {q['answer']},\n"
        js_content += f"            solution: `{q['solution']}`\n"
        js_content += "        },\n"

    reg_file = 'js/go-test-registry.src.js'
    
    new_test = f"""
registerTest({{
    series: "cs-gate-classes",
    name: "{test_name}",
    date: "sep 01, 2026",
    questions: [
{js_content}    ]
}});
"""
    with open(reg_file, 'a', encoding='utf-8') as f:
        f.write(new_test)
    
    print(f"Successfully processed {html_file} and appended {len(questions)} questions to {reg_file}.")

if __name__ == '__main__':
    main()
