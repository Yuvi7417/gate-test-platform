import os
import re
import sys
import json
import urllib.parse
import urllib.request
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

IMG_DIR = r'h:\yuvraj dutt\images\twt-calculus'
os.makedirs(IMG_DIR, exist_ok=True)

ROMAN_NUMS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

def download_image(url, save_path):
    if not os.path.exists(save_path):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response, open(save_path, 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Failed to download image {url}: {e}")

def process_mathjax(soup_el):
    if not soup_el:
        return ""
    el = BeautifulSoup(str(soup_el), 'html.parser').find()
    if not el:
        return ""

    # Replace KaTeX spans with \( ... \)
    for katex in el.find_all(class_='katex'):
        anno = katex.find('annotation', encoding='application/x-tex')
        if not anno:
            anno = katex.find('annotation')
        if anno:
            tex = anno.get_text()
            katex.replace_with(f"\\( {tex} \\)")
        else:
            katex.decompose()

    # Decompose noscript
    for noscript in el.find_all('noscript'):
        noscript.decompose()

    # Process images if any
    for img in el.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        if src:
            if src.startswith('/'):
                dl_url = "https://practicepaper.in" + src
            elif not src.startswith('http'):
                dl_url = "https://practicepaper.in/" + src
            else:
                dl_url = src
            filename = src.split('/')[-1]
            filename = urllib.parse.urlparse(filename).path
            save_path = os.path.join(IMG_DIR, filename)
            download_image(dl_url, save_path)
            img.attrs = {}
            img['src'] = f'images/twt-calculus/{filename}'

    html_text = el.decode_contents()

    # Preserve <pre> blocks
    pre_blocks = []
    def save_pre(match):
        pre_blocks.append(match.group(0))
        return f"__PRE_BLOCK_{len(pre_blocks)-1}__"

    html_text = re.sub(r'<pre.*?>.*?</pre>', save_pre, html_text, flags=re.DOTALL)
    html_text = re.sub(r'\s+', ' ', html_text).strip()
    for i, pre in enumerate(pre_blocks):
        html_text = html_text.replace(f"__PRE_BLOCK_{i}__", pre)

    # Escape for JS template literals
    html_text = html_text.replace('\\', '\\\\')
    html_text = html_text.replace('`', '\\`')
    html_text = html_text.replace('${', '\\${')
    html_text = html_text.replace('<pre>', '<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">')
    return f'<span style="display: inline;">{html_text}</span>'

def parse_html_to_questions(html_file):
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    cards = soup.find_all('div', class_='pp-question-card')
    questions = []

    for idx, card in enumerate(cards):
        # 1. Header parsing (Type & Marks)
        header = card.find('div', class_='pp-q-header')
        marks_badge = header.find(class_='pp-badge-marks') if header else None
        marks_text = marks_badge.get_text(strip=True) if marks_badge else "1 Mark"
        marks = 2 if '2' in marks_text else 1

        badge = header.find(class_='pp-badge') if header else None
        badge_text = badge.get_text(strip=True).upper() if badge else "MCQ"
        if "MSQ" in badge_text:
            q_type = "MSQ"
        elif "NAT" in badge_text:
            q_type = "NAT"
        else:
            q_type = "MCQ"

        neg = 0.33 if marks == 1 else 0.66
        if q_type != "MCQ":
            neg = 0

        # 2. Question Text
        q_text_el = card.find('div', class_='pp-q-text')
        text_html = process_mathjax(q_text_el)

        # 3. Options & Answers
        options = []
        answer = []

        opts_ul = card.find('ul', class_='pp-options')
        if opts_ul and q_type != "NAT":
            letters = ['A', 'B', 'C', 'D', 'E']
            for opt_idx, li in enumerate(opts_ul.find_all('li', class_='pp-option')):
                opt_text_el = li.find(class_='pp-opt-text')
                opt_html = process_mathjax(opt_text_el)
                options.append(opt_html)

                if 'pp-correct' in li.get('class', []):
                    answer.append(letters[opt_idx])

        # If NAT
        if q_type == "NAT":
            nat_row = card.find(class_='pp-nat-row')
            if nat_row:
                b = nat_row.find('b')
                if b:
                    nums = re.findall(r'[-+]?\d*\.?\d+', b.get_text())
                    if len(nums) == 2:
                        n1 = float(nums[0]) if '.' in nums[0] else int(nums[0])
                        n2 = float(nums[1]) if '.' in nums[1] else int(nums[1])
                        answer = [n1, n2]
                    elif len(nums) == 1:
                        n1 = float(nums[0]) if '.' in nums[0] else int(nums[0])
                        answer = n1

        # Format answer for output
        if q_type == "MCQ":
            ans_val = answer[0] if answer else "A"
        elif q_type == "MSQ":
            ans_val = answer
        else: # NAT
            ans_val = answer

        # 4. Solution
        sol_box = card.find('div', class_='pp-solution-box')
        link = "#"
        if sol_box:
            for a in sol_box.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    link = a['href']
                    break

        # Context links
        ctx = card.find('span', class_='pp-ctx-links')
        link_div_html = ""
        if ctx:
            ctx_copy = BeautifulSoup(str(ctx), 'html.parser').find()
            for a in ctx_copy.find_all('a'):
                a['style'] = "color:#2f6d1a; text-decoration:none"
                a['target'] = "_blank"
            link_div_html = ctx_copy.decode_contents().strip()
            link_div_html = re.sub(r'\s+', ' ', link_div_html)

        expl_text = ""
        if sol_box:
            sol_copy = BeautifulSoup(str(sol_box), 'html.parser').find()
            for lbl in sol_copy.find_all(class_='pp-solution-label'):
                lbl.decompose()
            for a in sol_copy.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    a.decompose()
            expl_text = process_mathjax(sol_copy)

        solution_html = (
            f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; '
            f'padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  '
            f'<strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  '
            f'{expl_text}<br><br>'
            f'<a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">'
            f'Click here for detail solution by gateoverflow</a>'
            f'<div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;">{link_div_html}</div></div>'
        )

        q_obj = {
            "marks": marks,
            "neg": neg,
            "type": q_type,
            "text": text_html,
            "image": "",
            "options": options,
            "answer": ans_val,
            "solution": solution_html
        }
        questions.append(q_obj)

    return questions

def format_question_js(q):
    lines = []
    lines.append("        {")
    lines.append(f"            marks: {q['marks']},")
    lines.append(f"            neg: {q['neg']},")
    lines.append(f"            type: \"{q['type']}\",")
    lines.append(f"            text: `{q['text']}`,")
    lines.append(f"            image: \"\",")
    lines.append("            options: [")
    for i, opt in enumerate(q['options']):
        comma = "," if i < len(q['options']) - 1 else ""
        lines.append(f"                `{opt}`{comma}")
    lines.append("            ],")
    if q['type'] == 'MSQ':
        ans_str = json.dumps(q['answer'])
    elif q['type'] == 'MCQ':
        ans_str = json.dumps(q['answer'])
    else: # NAT
        if isinstance(q['answer'], list):
            ans_str = json.dumps(q['answer'])
        elif isinstance(q['answer'], (int, float)):
            ans_str = str(q['answer'])
        else:
            ans_str = json.dumps(q['answer'])
    lines.append(f"            answer: {ans_str},")
    lines.append(f"            solution: `{q['solution']}`")
    lines.append("        }")
    return "\n".join(lines)

def add_questions_to_registry(questions, js_file, test_series="cse-gate-2027", base_name="TWT-Engineering Mathematics(Calculus", test_date="sep 08, 2026", max_per_test=15):
    if not os.path.exists(js_file):
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write('')

    with open(js_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Filter out duplicates against the entire file content
    new_qs = []
    for q in questions:
        m_link = re.search(r'href="(https://gateoverflow\.in/\d+/[^"#]+)', q['solution'])
        if m_link and m_link.group(1) in content:
            print(f"Skipping duplicate (GO link): {m_link.group(1)}")
            continue
        snippet = q['text'][:80].replace('\\', '')
        if snippet in content.replace('\\', ''):
            print(f"Skipping duplicate (snippet): {snippet[:40]}...")
            continue
        new_qs.append(q)

    if not new_qs:
        print("No new questions to add.")
        return

    # Find which test we are currently working on
    # Check all Calculus-I, Calculus-II, etc.
    series_idx = 0
    while True:
        current_test_name = f"{base_name}-{ROMAN_NUMS[series_idx]})"
        test_pattern = r'(name:\s*["\']' + re.escape(current_test_name) + r'["\'].*?questions:\s*\[)(.*?)(\n\s*\]\s*,?\s*\n*\}\s*\);?)'
        match = re.search(test_pattern, content, re.DOTALL)
        if match:
            existing_qs_block = match.group(2)
            existing_count = len(re.findall(r'marks:\s*\d', existing_qs_block))
            if existing_count < max_per_test:
                # Can fit in this test!
                space_left = max_per_test - existing_count
                to_insert_here = new_qs[:space_left]
                remaining_qs = new_qs[space_left:]

                new_formatted = [format_question_js(q) for q in to_insert_here]
                to_insert = ",\n".join(new_formatted)
                has_existing = bool(existing_qs_block.strip())
                separator = ",\n" if has_existing else "\n"

                replacement = match.group(1) + existing_qs_block.rstrip() + separator + to_insert + match.group(3)
                content = content[:match.start()] + replacement + content[match.end():]
                print(f"Added {len(to_insert_here)} questions to '{current_test_name}' (Now has {existing_count + len(to_insert_here)}/{max_per_test})")

                if remaining_qs:
                    new_qs = remaining_qs
                    series_idx += 1
                    continue
                else:
                    break
            else:
                # Test is already full (15/15), move to next series
                series_idx += 1
                continue
        else:
            # Current test doesn't exist yet, create it!
            to_insert_here = new_qs[:max_per_test]
            remaining_qs = new_qs[max_per_test:]

            new_test = f"""\nregisterTest({{
    series: "{test_series}",
    name: "{current_test_name}",
    date: "{test_date}",
    questions: [
"""
            for i, q in enumerate(to_insert_here):
                comma = "," if i < len(to_insert_here) - 1 else ""
                new_test += format_question_js(q) + comma + "\n"
            new_test += """    ],
});
"""
            content = content.rstrip() + "\n" + new_test
            print(f"Created new test '{current_test_name}' with {len(to_insert_here)}/{max_per_test} questions")

            if remaining_qs:
                new_qs = remaining_qs
                series_idx += 1
                continue
            else:
                break

    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(content.strip() + "\n")

if __name__ == '__main__':
    html_file = sys.argv[1] if len(sys.argv) > 1 else r'h:\yuvraj dutt\test.html'
    qs = parse_html_to_questions(html_file)
    print(f"Extracted {len(qs)} questions from {html_file}")
    add_questions_to_registry(qs, r'h:\yuvraj dutt\js\pyq-registry.js')
