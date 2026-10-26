import os
import re
import urllib.request
import time
from bs4 import BeautifulSoup

def download_image(url, local_path):
    if not os.path.exists(local_path):
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
            out_file.write(response.read())

def extract_and_add_question(html_file, js_file, test_series_name, image_folder):
    os.makedirs(image_folder, exist_ok=True)
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    question_span = soup.select_one('h3 span')
    if not question_span:
        question_span = soup.select_one('h3')
    if not question_span:
        print("Error: Could not find valid question in test.html")
        return

    question_text = ""
    question_image = ""
    
    # Extract images in question first
    images = question_span.find_all('img')
    if images:
        img_url = images[0]['src']
        img_name = img_url.split('/')[-1].split('?')[0]
        local_img_path = f"{image_folder}/{img_name}"
        download_image(img_url, local_img_path)
        question_image = local_img_path
        for img in images:
            img.extract()

    def clean_elem(el):
        if not el:
            return ""
        # 1. Remove preview, CHTML, MathML assistive
        for prev in el.find_all(class_='MathJax_Preview'):
            prev.decompose()
        for chtml in el.find_all(class_='MathJax_CHTML'):
            chtml.decompose()
        for noscript in el.find_all('noscript'):
            noscript.decompose()
        for mml in el.find_all('span', class_='MJX_Assistive_MathML'):
            mml.decompose()

        # 2. Replace script math/tex with MathJax syntax \\( ... \\) or \\[ ... \\]
        for s in el.find_all('script', type=lambda t: t and 'math/tex' in t):
            mode = s.get('type', '')
            tex = (s.string or '').strip()
            tex_escaped = tex.replace('\\\\', '\\\\\\\\').replace('\\', '\\\\')
            if 'mode=display' in mode:
                s.replace_with(f" <span>\\\\[ {tex_escaped} \\\\]</span> ")
            else:
                s.replace_with(f" <span>\\\\( {tex_escaped} \\\\)</span> ")

        # 3. Preserve br tags
        for br in el.find_all('br'):
            br.replace_with('__BR_TOKEN__')

        # 4. Handle math notation like <strong><em>S</em><sub>1</sub></strong>
        html = str(el)
        html = re.sub(r'<strong>\s*<em>\s*([A-Za-z])\s*</em>\s*<sub>\s*([^<]+)\s*</sub>\s*</strong>\s*<strong>\s*:\s*</strong>', r'<b><span>\\\\( \1_\2 \\\\)</span>:</b>', html)
        html = re.sub(r'<strong>\s*<em>\s*([A-Za-z])\s*</em>\s*<sub>\s*([^<]+)\s*</sub>\s*</strong>\s*:\s*', r'<b><span>\\\\( \1_\2 \\\\)</span>:</b> ', html)
        html = re.sub(r'<em>\s*([A-Za-z])\s*</em>\s*<sub>\s*([^<]+)\s*</sub>', r'<span>\\\\( \1_\2 \\\\)</span>', html)
        temp_soup = BeautifulSoup(html, 'html.parser')

        # 5. Handle sub and sup cleanly
        for sub in temp_soup.find_all('sub'):
            sub_t = sub.get_text().strip()
            sub.replace_with(f"_{{{sub_t}}}")
        for sup in temp_soup.find_all('sup'):
            sup_t = sup.get_text().strip()
            sup.replace_with(f"^{{{sup_t}}}")

        # Preserve bold, strong, italic formatting
        for b in temp_soup.find_all(['b', 'strong']):
            b.insert_before('__B_START__')
            b.insert_after('__B_END__')
            b.unwrap()
        for i_tag in temp_soup.find_all(['i', 'em']):
            i_tag.insert_before('__I_START__')
            i_tag.insert_after('__I_END__')
            i_tag.unwrap()

        text = temp_soup.get_text(separator=' ', strip=True)
        text = text.replace('__BR_TOKEN__', '<br><br>')
        text = text.replace('__B_START__', '<b>').replace('__B_END__', '</b>')
        text = text.replace('__I_START__', '<i>').replace('__I_END__', '</i>')
        text = re.sub(r'<\s*([bi])\s*>\s+', r'<\1>', text)
        text = re.sub(r'\s+<\s*/([bi])\s*>', r'</\1>', text)
        text = re.sub(r'[‘\'"]\s*<([bi])>', r'‘<\1>', text)
        text = re.sub(r'</([bi])>\s*[’\'"]', r'</\1>’', text)
        text = re.sub(r'</([bi])>\s+%', r'</\1>%', text)
        text = re.sub(r'[ \t\r\f\v]+', ' ', text)
        text = re.sub(r'(\n|\r)+', ' ', text)
        text = re.sub(r'_\{([^}]+)\}', r'<sub>\1</sub>', text)
        text = re.sub(r'\^\{([^}]+)\}', r'<sup>\1</sup>', text)
        text = re.sub(r'\s*<sub>', '<sub>', text)
        text = re.sub(r'\s*<sup>', '<sup>', text)
        text = re.sub(r'</(sub|sup)>\s+([,.:;?!])', r'</\1>\2', text)
        text = text.replace('&nbsp;', ' ')
        text = re.sub(r'\s+', ' ', text).strip()
        text = re.sub(r'(\s*<br><br>\s*)+', '<br><br>', text)
        text = re.sub(r'(\s*<br>\s*)+', '<br><br>', text)
        # Clean any awkward spaces before colons
        text = text.replace('</b> :', '</b>:')
        return text

    # Get question text
    q_parts = []
    for p in question_span.find_all(['p', 'div']):
        t = clean_elem(p)
        if t:
            q_parts.append(t)
    if not q_parts:
        question_text = clean_elem(question_span)
    else:
        question_text = "<br><br>".join(q_parts)

    question_text = question_text.replace('"', '\\"')
    
    options = []
    labels = soup.find_all('label')
    for label in labels:
        img = label.find('img')
        if img:
            img_url = img['src']
            img_name = img_url.split('/')[-1].split('?')[0]
            local_img_path = f"{image_folder}/{img_name}"
            download_image(img_url, local_img_path)
            options.append(f"'<img src=\"{local_img_path}\" class=\"opt-img\">'")
        else:
            btn = label.find('button')
            opt_tag = btn if btn else label
            opt_text = clean_elem(opt_tag)
            opt_text = re.sub(r'^[A-D]\.\s*', '', opt_text)
            opt_text = opt_text.replace("'", "\\'")
            options.append(f"'{opt_text}'")
            
    correct_answer = "A"
    correct_ans_element = soup.find(string=re.compile("Correct Answer:"))
    if correct_ans_element:
        ans_span = correct_ans_element.find_next('span')
        if ans_span:
            correct_answer = ans_span.get_text(strip=True)
            
    solution_html = ""
    solution_h2 = soup.find('h2', string=re.compile("Solution"))
    if solution_h2:
        parent = solution_h2.parent
        sol_container = parent.find('div', class_=re.compile('text-greyFont')) or parent.find('div', class_=re.compile('text-gray-700'))
        if not sol_container:
            sol_container = parent.find_all('div')[-1] if parent.find_all('div') else None

        img_tags = []
        if sol_container:
            for img in sol_container.find_all('img'):
                img_url = img.get('src')
                if img_url:
                    img_name = img_url.split('/')[-1].split('?')[0]
                    local_img_path = f"{image_folder}/{img_name}"
                    download_image(img_url, local_img_path)
                    img.replace_with(f"__IMG_SRC_{local_img_path}__")

        for img in parent.find_all('img'):
            img_url = img.get('src')
            if img_url:
                img_name = img_url.split('/')[-1].split('?')[0]
                local_img_path = f"{image_folder}/{img_name}"
                download_image(img_url, local_img_path)
                img_tags.append(f"<img src='{local_img_path}' alt='Detailed Solution'>")
                img.extract()

        sol_text = ""
        if sol_container:
            sol_parts = []
            for sp in sol_container.find_all(['p', 'li', 'div']):
                st = clean_elem(sp)
                if st:
                    sol_parts.append(st)
            if sol_parts:
                sol_text = "<br><br>".join(sol_parts)
            else:
                sol_text = clean_elem(sol_container)
            sol_text = re.sub(r'__IMG_SRC_(.*?)__', r"<br><img src='\1' alt='Detailed Solution'><br>", sol_text)
            sol_text = re.sub(r'^(<br>)+|(<br>)+$', '', sol_text.strip())
            sol_text = re.sub(r'(<br>\s*){3,}', '<br><br>', sol_text)
            sol_text = sol_text.replace('"', '\\"').strip()

        combined_sol = []
        if sol_text:
            combined_sol.append(sol_text)
        if img_tags:
            combined_sol.extend(img_tags)
        solution_html = "<br><br>".join(combined_sol)

    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    test_idx = js_content.find(f'name: "{test_series_name}"')
    if test_idx == -1:
        print(f"Error: Could not find test '{test_series_name}' in {js_file}")
        return

    # Check if this exact question is already in the test section
    test_end_check = js_content.find('});', test_idx)
    current_test_block = js_content[test_idx:test_end_check] if test_end_check != -1 else js_content[test_idx:]
    if question_text and question_text in current_test_block:
        print(f"[{time.strftime('%H:%M:%S')}] Duplicate detected! Question already exists in '{test_series_name}'. Skipping.")
        return
    if question_image and question_image in current_test_block:
        print(f"[{time.strftime('%H:%M:%S')}] Duplicate image detected! Question already exists in '{test_series_name}'. Skipping.")
        return

    # Determine marks
    marks = 1
    # Count existing marks to determine 1 or 2 mark question
    after_test = js_content[test_idx:]
    # Check if this test is empty or has existing questions
    q_bracket_idx = after_test.find('questions:')
    if q_bracket_idx != -1:
        q_section = after_test[q_bracket_idx:after_test.find('});')]
        existing_q_count = q_section.count('marks:')
        # In TWT, first 9 are 1 mark, remaining (10 to 17) are 2 marks
        if existing_q_count >= 9:
            marks = 2

    q_type = "MCQ" if len(options) > 0 else "NAT"
    neg_mark = round(0.33 * marks, 2) if len(options) > 0 else 0

    if q_type == "NAT":
        range_match = re.findall(r'[-+]?\d*\.?\d+', correct_answer)
        if len(range_match) == 2 and ("[" in correct_answer or "to" in correct_answer or "," in correct_answer):
            c_min = float(range_match[0]) if "." in range_match[0] else int(range_match[0])
            c_max = float(range_match[1]) if "." in range_match[1] else int(range_match[1])
            answer_js = f"[{c_min}, {c_max}]"
        else:
            try:
                if "." in correct_answer:
                    answer_js = str(float(correct_answer))
                else:
                    answer_js = str(int(correct_answer))
            except ValueError:
                answer_js = f'"{correct_answer}"'
    elif "," in correct_answer:
        q_type = "MSQ"
        neg_mark = 0
        ans_list = sorted([ans.strip() for ans in correct_answer.split(",")])
        answer_js = str(ans_list).replace("'", '"')
    else:
        answer_js = f'"{correct_answer}"'

    options_str = ",\n                ".join(options)
    
    # Check if questions array is currently empty: questions: []
    # or questions: [\n ... \n ]
    empty_q_match = re.search(r'questions:\s*\[\s*\]', after_test)
    
    new_q_obj = f"""        {{
            marks: {marks},
            neg: {neg_mark},
            type: "{q_type}",
            text: "{question_text}",
            image: "{question_image}",
            options: [
                {options_str}
            ],
            answer: {answer_js},
            solution: "{solution_html}"
        }}"""

    if empty_q_match and empty_q_match.start() < after_test.find('});'):
        # Empty array
        target_str = empty_q_match.group(0)
        replacement = f"""questions: [\n{new_q_obj}\n    ]"""
        new_after = after_test.replace(target_str, replacement, 1)
        updated_js = js_content[:test_idx] + new_after
    else:
        # Array already has items, insert before the closing `]` of questions
        test_end = after_test.find('});')
        test_block = after_test[:test_end]
        last_bracket = test_block.rfind(']')
        if last_bracket != -1:
            insertion_pos = test_idx + last_bracket
            # Check if there is already a question, add comma
            prefix = ",\n"
            updated_js = js_content[:insertion_pos].rstrip().rstrip(',') + prefix + new_q_obj + "\n    " + js_content[insertion_pos:]
        else:
            print("Error: Could not locate closing bracket of questions array.")
            return

    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(updated_js)
    print(f"[{time.strftime('%H:%M:%S')}] Question successfully added to '{test_series_name}'!")

if __name__ == "__main__":
    html_source = "test.html"
    registry_file = "js/pyq-registry.js"
    test_name = "TWT - computer organization and architecture-2"
    image_dir = "images/twt-coa-2"
    
    # Process current test.html if not empty
    if os.path.exists(html_source) and os.path.getsize(html_source) > 0:
        print(f"[{time.strftime('%H:%M:%S')}] Processing existing {html_source}...")
        extract_and_add_question(html_source, registry_file, test_name, image_dir)
    
    last_mtime = os.path.getmtime(html_source) if os.path.exists(html_source) else 0
        
    print(f"Watching for changes in {html_source} (Press Ctrl+C to stop)...")
    
    while True:
        try:
            if os.path.exists(html_source):
                current_mtime = os.path.getmtime(html_source)
                if current_mtime > last_mtime:
                    print(f"[{time.strftime('%H:%M:%S')}] Change detected in {html_source}! Processing...")
                    time.sleep(0.5) # Wait for file write to complete
                    extract_and_add_question(html_source, registry_file, test_name, image_dir)
                    last_mtime = os.path.getmtime(html_source)
        except Exception as e:
            print("Error:", e)
        time.sleep(1)
