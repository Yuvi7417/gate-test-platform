import bs4
import re
import json
import os
import urllib.request

html_content = open('test.html', encoding='utf-8').read().replace('&nbsp;', ' ').replace('\xa0', ' ')
soup = bs4.BeautifulSoup(html_content, 'html.parser')

scripts = soup.find_all('script', type=lambda t: t and t.startswith('math/tex'))
for script in scripts:
    tex = script.string or ""
    is_display = 'mode=display' in script.get('type', '')
    replacement = f"\\({tex}\\)" if not is_display else f"$$ {tex} $$"
    
    parent = script.parent
    for preview in parent.find_all('span', class_='MathJax_Preview'):
        preview.decompose()
    for chtml in parent.find_all('span', class_=lambda c: c and 'MathJax_CHTML' in c):
        chtml.decompose()
        
    script.replace_with(replacement)

img_dir = "js/questions/fst-mock-test-6"
os.makedirs(img_dir, exist_ok=True)

imgs = soup.select('.res_question_text img')
for i, img in enumerate(imgs, 1):
    src = img.get('src')
    if src:
        try:
            req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                img_data = response.read()
            with open(f"{img_dir}/{i}.png", "wb") as f:
                f.write(img_data)
        except Exception as e:
            print(f"Failed to download image {i} from {src}: {e}")
    img['src'] = f"js/questions/fst-mock-test-6/{i}.png"

qs_divs = soup.select('.res_question')
questions = []

for q in qs_divs:
    type_str = q.select_one('.res_qs_type').text.strip()
    if 'Multiple Choice' in type_str:
        q_type = "MCQ"
    elif 'Numerical' in type_str:
        q_type = "NAT"
    elif 'Multiple Select' in type_str:
        q_type = "MSQ"
    else:
        q_type = "UNKNOWN"
        
    marks_str = q.select_one('.res_qs_marks').text
    marks = int(re.search(r'\d+', marks_str).group())
    
    neg_str = q.select_one('.res_qs_penalty').text
    neg = float(re.search(r'[\d.]+', neg_str).group())
    
    text_div = q.select_one('.res_question_text')
    
    options = []
    
    ols = text_div.find_all('ol')
    for ol in reversed(ols):
        if not ol.find_parent('pre'):
            lis = ol.find_all('li', recursive=False)
            if len(lis) > 0:
                options = ["".join(str(c) for c in li.contents).strip() for li in lis]
                ol.decompose()
                break
    
    if not options:
        grid_div = text_div.find('div', style=lambda s: s and 'grid' in s)
        if grid_div:
            cells = grid_div.find_all('div', recursive=False)
            if len(cells) % 4 == 0 and len(cells) > 0:
                for r in range(len(cells)//4):
                    options.append(''.join(str(c) for c in cells[r*4+1:r*4+4]).strip())
                grid_div.decompose()
                
    if not options:
        flex_col = text_div.find('div', style=lambda s: s and 'flex-direction:column' in s.replace(' ', ''))
        if flex_col:
            rows = flex_col.find_all('div', recursive=False)
            if len(rows) == 4:
                for row in rows:
                    cells = row.find_all('div', recursive=False)
                    options.append(''.join(str(c) for c in cells[1:]).strip())
                flex_col.decompose()

    if not options:
        ps = text_div.find_all(['p', 'div'])
        opt_ps = []
        for p in ps:
            t = p.text.strip()
            if t.startswith('A.') or t.startswith('B.') or t.startswith('C.') or t.startswith('D.'):
                opt_ps.append(p)
        if len(opt_ps) == 4:
            for p in opt_ps:
                content = "".join(str(c) for c in p.contents).strip()
                content = re.sub(r'^[A-D]\.\s*', '', content)
                options.append(content)
                p.decompose()

    if not options:
        html_str = "".join(str(c) for c in text_div.contents)
        div_match = re.search(r'<div[^>]*>\s*A\.\s*(.*?)<br/>\s*B\.\s*(.*?)<br/>\s*C\.\s*(.*?)<br/>\s*D\.\s*(.*?)\s*</div>', html_str, flags=re.DOTALL)
        if div_match:
            options = [div_match.group(i).strip() for i in range(1, 5)]
            html_str = html_str[:div_match.start()] + html_str[div_match.end():]
            text_div = bs4.BeautifulSoup(html_str, 'html.parser')
            
    text_html = "".join(str(c) for c in text_div.contents).strip()
    
    ans_badge = q.select_one('.correct_solution')
    ans_text = ans_badge.text if ans_badge else ""
    
    if len(options) > 0 and q_type == "NAT":
        if 'Correct Answer:' in ans_text:
            ans_val_tmp = ans_text.split('Correct Answer:')[1].strip()
            if ';' in ans_val_tmp or ',' in ans_val_tmp or len(ans_val_tmp) > 1:
                q_type = "MSQ"
            else:
                q_type = "MCQ"
        else:
            q_type = "MCQ"
            
    if 'Correct Answer:' in ans_text:
        ans_val = ans_text.split('Correct Answer:')[1].strip()
        if q_type == "MSQ":
            answer = [x.strip() for x in ans_val.split(';')]
        elif q_type == "NAT":
            answer = ans_val
        else:
            answer = ans_val
    else:
        answer = ""
        
    question_obj = {
        "marks": marks,
        "neg": neg,
        "type": q_type,
        "text": text_html,
        "options": options,
        "answer": answer
    }
    questions.append(question_obj)

out = []
out.append('registerTest({')
out.append('  series: "cs-gate-classes",')
out.append('  name: "FST - Mock test-6",')
out.append('  date: "November 27, 2026",')
out.append('  questions: [')

for q in questions:
    out.append('    {')
    out.append(f'      marks: {q["marks"]},')
    neg_val = 0 if q["neg"] == 0.0 else q["neg"]
    out.append(f'      neg: {neg_val},')
    out.append(f'      type: "{q["type"]}",')
    
    def flatten(html_str):
        html_str = html_str.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')
        parts = re.split(r'(<pre.*?>.*?</pre>)', html_str, flags=re.DOTALL | re.IGNORECASE)
        for i in range(len(parts)):
            if i % 2 == 0:
                parts[i] = re.sub(r'\s+', ' ', parts[i]).replace('\n', '').replace('\r', '')
            else:
                parts[i] = parts[i].replace('\r', '').replace('\n', '\\n')
        return "".join(parts).strip()

    t = flatten(q["text"])
    out.append(f'      text: `{t}`,')
    out.append('      image: "",')
    
    out.append('      options: [')
    for opt in q["options"]:
        o = flatten(opt)
        out.append(f'        `{o}`,')
    out.append('      ],')
    
    ans_str = json.dumps(q["answer"])
    out.append(f'      answer: {ans_str},')
    out.append('      solution: ``')
    out.append('    },')

out.append('  ]')
out.append('});')

with open('js/full-test-registry.src.js', 'a', encoding='utf-8') as f:
    f.write('\n' + '\n'.join(out) + '\n')

print("Extraction completed!")
