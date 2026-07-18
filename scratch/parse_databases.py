import os
import re
import urllib.request
from bs4 import BeautifulSoup

def clean_text(text):
    if not text:
        return ""
    return ' '.join(text.split())

def main():
    with open('test.html', 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    img_dir = 'js/questions/databases_3'
    os.makedirs(img_dir, exist_ok=True)

    test_name = 'TWT - Databases-3'
    questions = []
    
    q_divs = soup.find_all('div', class_='res_question')
    img_counter = 1
    
    for idx, q in enumerate(q_divs):
        # Extract metadata
        marks_str = q.find(lambda tag: tag.name == 'span' and 'Award:' in tag.text)
        marks = float(marks_str.text.replace('Award:', '').strip()) if marks_str else 1.0
        
        neg_str = q.find(lambda tag: tag.name == 'span' and 'Penalty:' in tag.text)
        neg = float(neg_str.text.replace('Penalty:', '').strip()) if neg_str else 0.0
        
        type_str = q.find('span', class_='res_qs_type')
        q_type = 'MCQ'
        if type_str:
            t = type_str.text.lower()
            if 'numerical' in t:
                q_type = 'NAT'
            elif 'select' in t:
                q_type = 'MSQ'
                
        # Question text and image
        q_text_div = q.find('div', class_='res_question_text')
        
        # Download images and replace src
        for img in q_text_div.find_all('img'):
            src = img.get('src', '')
            if src.startswith('http'):
                img_path = f"{img_dir}/img_{img_counter}.png"
                try:
                    urllib.request.urlretrieve(src, img_path)
                    img['src'] = img_path
                except Exception as e:
                    print(f"Failed to download image {src}: {e}")
                img_counter += 1
                
        # Clean MathJax scripts or extraneous elements?
        for el in q_text_div.find_all(class_=['MathJax_Preview', 'MJX_Assistive_MathML', 'mjx-chtml']):
            el.decompose()
            
        for script in q_text_div.find_all('script', type=re.compile('math/tex')):
            tex = script.string.strip()
            # Double escape backslashes for Javascript template literals
            tex = tex.replace('\\', '\\\\')
            # Remove &nbsp; or &amp;nbsp; which breaks MathJax
            tex = tex.replace('&nbsp;', ' ').replace('&amp;nbsp;', ' ')
            # Replace script element with a plain string instead of a tag
            script.replace_with(f"\\\\( {tex} \\\\)")

        # Options
        options = []
        ol = q_text_div.find('ol', style="list-style-type:upper-alpha")
        if not ol:
            # Fallback to last ol if no style provided
            ols = q_text_div.find_all('ol')
            if ols:
                ol = ols[-1]
                
        if ol:
            for li in ol.find_all('li', recursive=False):
                opts_html = "".join([str(c) for c in li.contents]).strip()
                opts_html = clean_text(opts_html)
                options.append(opts_html)
            ol.decompose()
            
        q_html = "".join([str(c) for c in q_text_div.contents]).strip()
        q_html = clean_text(q_html)
        # Avoid removing actual <p> tags but clean random whitespace between tags
        q_html = re.sub(r'>\s+<', '><', q_html)
        
        # Add gaps between paragraphs to satisfy user request
        q_html = q_html.replace('</p><p>', '</p><br/><p>')
        
        # Answer
        ans_span = q.find('span', class_='correct_solution')
        ans_text = ans_span.text.replace('Correct Answer:', '').strip() if ans_span else ""
        if q_type == 'NAT':
            ans = float(ans_text) if ans_text else 0.0
        elif q_type == 'MSQ':
            if ';' in ans_text:
                ans = [c.strip() for c in ans_text.split(';')]
            else:
                ans = [c.strip() for c in ans_text.split(',')]
        else:
            ans = ans_text
            
        # Solution
        sol_div = q.find('div', class_='res_solution')
        sol_html = '<div class="res_solution"> </div>'
        
        q_obj = {
            'marks': marks,
            'neg': neg,
            'type': q_type,
            'text': q_html,
            'image': "",
            'options': options,
            'answer': ans,
            'solution': sol_html
        }
        questions.append(q_obj)

    # Generate output string
    out = []
    out.append("registerTest({")
    out.append(f'  series: "cs-gate-classes",')
    out.append(f'  name: "{test_name}",')
    out.append(f'  date: "July 18, 2026",')
    out.append(f'  questions: [')
    
    for q in questions:
        out.append("    {")
        # Format marks/neg as integers if they are .0, else floats
        marks_val = int(q['marks']) if q['marks'].is_integer() else q['marks']
        neg_val = int(q['neg']) if q['neg'].is_integer() else q['neg']
        out.append(f"      marks: {marks_val},")
        out.append(f"      neg: {neg_val},")
        out.append(f'      type: "{q["type"]}",')
        out.append(f"      text: `{q['text']}`,")
        out.append(f'      image: "{q["image"]}",')
        if q["options"]:
            out.append("      options: [")
            for o in q["options"]:
                out.append(f"        `{o}`,")
            out.append("      ],")
        else:
            out.append("      options: [],")
        
        if isinstance(q['answer'], str):
            out.append(f'      answer: "{q["answer"]}",')
        elif isinstance(q['answer'], list):
            ans_str = ", ".join([f'"{x}"' for x in q['answer']])
            out.append(f'      answer: [{ans_str}],')
        else:
            out.append(f'      answer: {q["answer"]},')
            
        out.append(f"      solution: `{q['solution']}`")
        out.append("    },")
        
    out.append("  ]")
    out.append("});")
    
    insert_code = "\n".join(out)
    
    # Insert before MADE EASY 2026
    with open('js/test-registry.src.js', 'r', encoding='utf-8') as f:
        content = f.read()
        
    target = "// MADE EASY 2026 CSE ALL INDIA ONLINE TEST SERIES"
    if target in content:
        new_content = content.replace(target, insert_code + "\n\n\n" + target)
        with open('js/test-registry.src.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully inserted the test!")
    else:
        print("Target not found.")

if __name__ == '__main__':
    main()
