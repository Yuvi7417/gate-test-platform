import os
import re
import urllib.parse
import requests
from bs4 import BeautifulSoup

img_dir = r'h:\yuvraj dutt\images\gate-cse-data-link-layer'
os.makedirs(img_dir, exist_ok=True)

def download_image(url, save_path):
    try:
        if not os.path.exists(save_path):
            resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
            if resp.status_code == 200:
                with open(save_path, 'wb') as f:
                    f.write(resp.content)
                print(f"Downloaded {save_path}")
            else:
                print(f"HTTP {resp.status_code} for {url}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_mathjax(soup_el):
    if not soup_el:
        return ""
    for katex in soup_el.find_all(class_='katex'):
        anno = katex.find('annotation', encoding='application/x-tex')
        if anno:
            tex = anno.get_text()
            katex.replace_with(f"\\( {tex} \\)")
            
    for skip in soup_el.find_all(class_=lambda c: c and ('google-anno-skip' in c or 'adsbygoogle' in c)):
        skip.decompose()
        
    for anno in soup_el.find_all(class_='google-anno'):
        anno_text = anno.find(class_='google-anno-t')
        text_val = anno_text.get_text() if anno_text else anno.get_text()
        anno.replace_with(text_val)

    for noscript in soup_el.find_all('noscript'):
        noscript.decompose()
        
    for img in soup_el.find_all('img'):
        src = img.get('data-src') or img.get('src', '')
        if src:
            if src.startswith('/'):
                dl_url = "https://practicepaper.in" + src
            elif not src.startswith('http'):
                dl_url = "https://practicepaper.in/" + src
            else:
                dl_url = src
                
            path_parts = [p for p in urllib.parse.urlparse(src).path.split('/') if p]
            filename = path_parts[-1]
            save_path = os.path.join(img_dir, filename)
            download_image(dl_url, save_path)
            
            img.attrs = {}
            img['src'] = f'images/gate-cse-data-link-layer/{filename}'
            
    html_text = soup_el.decode_contents()
    pre_blocks = []
    def save_pre(match):
        pre_blocks.append(match.group(0))
        return f"__PRE_BLOCK_{len(pre_blocks)-1}__"
    html_text = re.sub(r'<pre.*?>.*?</pre>', save_pre, html_text, flags=re.DOTALL)
    html_text = re.sub(r'\s+', ' ', html_text).strip()
    for i, pre in enumerate(pre_blocks):
        html_text = html_text.replace(f"__PRE_BLOCK_{i}__", pre)
    html_text = html_text.replace('\\', '\\\\')
    html_text = html_text.replace('`', '\\`')
    html_text = html_text.replace('<pre>', '<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">')
    return f'<span style="display: inline;">{html_text}</span>'

def extract_questions(filename='test.html'):
    with open(os.path.join(r'h:\yuvraj dutt', filename), 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')
        
    cards = soup.find_all(class_='pp-question-card')
    questions = []
    
    for card in cards:
        badges = [b.get_text(strip=True) for b in card.find_all(class_='pp-badge')]
        q_type = 'MCQ'
        for b in badges:
            if 'NAT' in b:
                q_type = 'NAT'
            elif 'MSQ' in b:
                q_type = 'MSQ'
                
        marks = 1
        for b in badges:
            m = re.search(r'(\d+)\s*Mark', b, re.I)
            if m:
                marks = int(m.group(1))
                
        neg = 0.33 if marks == 1 else 0.66
        if q_type != 'MCQ':
            neg = 0
            
        q_text_el = card.find(class_='pp-q-text')
        text_html = process_mathjax(q_text_el)
        
        options = []
        answer = []
        
        opt_els = card.find_all(class_='pp-option')
        for i, opt in enumerate(opt_els):
            mark_el = opt.find(class_='pp-opt-mark')
            raw_letter = mark_el.get_text(strip=True) if mark_el else ''
            letter = raw_letter if raw_letter in ['A', 'B', 'C', 'D', 'E'] else chr(ord('A') + i)
            is_corr = 'pp-correct' in opt.get('class', [])
            
            opt_text_el = opt.find(class_='pp-opt-text')
            opt_html = process_mathjax(opt_text_el) if opt_text_el else ''
            options.append(opt_html)
            if is_corr:
                answer.append(letter)
                
        if q_type == 'NAT':
            nat_el = card.find(class_='pp-nat-answer')
            if nat_el:
                b_tag = nat_el.find('b')
                raw_ans_text = b_tag.get_text(strip=True) if b_tag else nat_el.get_text(strip=True).replace('Correct answer:', '').strip()
                raw_ans_text = raw_ans_text.strip()
                parts = re.split(r'(?<=\d)\s*[\u2013\u2014\-:]\s*(?=[-\d])', raw_ans_text)
                parts = [p.strip() for p in parts if p.strip()]
                if len(parts) == 2:
                    answer = [f"{parts[0]}:{parts[1]}"]
                elif len(parts) == 1:
                    answer = [parts[0]]
                else:
                    answer = [raw_ans_text]
                    
        sol_el = card.find(class_='pp-solution-box')
        link = '#'
        if sol_el:
            for a in sol_el.find_all('a'):
                if 'gateoverflow.in' in a.get('href', ''):
                    link = a['href']
                    break
                    
        ctx_el = card.find(class_='pp-ctx-links')
        link_div_html = ''
        if ctx_el:
            for a in ctx_el.find_all('a'):
                a['style'] = "color:#2f6d1a; text-decoration:none"
                a['target'] = "_blank"
            link_div_html = ctx_el.decode_contents().strip()
            link_div_html = re.sub(r'\s+', ' ', link_div_html)
            
        solution_html = f'<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="{link}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;">{link_div_html}</div></div>'
        
        q_obj = {
            "marks": marks,
            "neg": neg,
            "type": q_type,
            "text": text_html,
            "image": "",
            "options": options,
            "answer": answer[0] if len(answer) == 1 else answer,
            "solution": solution_html
        }
        questions.append(q_obj)
        
    return questions

def format_questions_js(questions):
    lines = []
    for q in questions:
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
            if isinstance(q['answer'], list):
                ans_str = '["' + '", "'.join(q['answer']) + '"]'
            else:
                ans_str = f'["{q["answer"]}"]'
        elif q['type'] == 'MCQ':
            ans_str = f'"{q["answer"]}"'
        else:
            if q['answer'] and isinstance(q['answer'], list):
                ans_str = f'"{q["answer"][0]}"'
            else:
                ans_str = f'"{q["answer"]}"'
            
        lines.append(f"            answer: {ans_str},")
        lines.append(f"            solution: `{q['solution']}`")
        lines.append("        },")
    return "\n".join(lines)

ROMAN_NUMS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV']

if __name__ == '__main__':
    import sys
    import json
    input_file = sys.argv[1] if len(sys.argv) > 1 else 'test.html'
    
    with open(os.path.join(r'h:\yuvraj dutt', input_file), 'r', encoding='utf-8') as f:
        file_content = f.read()
        
    meta_match = re.search(r'id="pp-quiz-data"[^>]*>(.*?)</script>', file_content, re.DOTALL)
    quiz_name = ""
    if meta_match:
        try:
            quiz_meta = json.loads(meta_match.group(1)).get('meta', {})
            quiz_name = quiz_meta.get('quizName', '')
        except Exception:
            pass

    if not quiz_name:
        title_m = re.search(r'class="pp-quiz-title"[^>]*>(.*?)</', file_content, re.DOTALL)
        if title_m:
            quiz_name = title_m.group(1).strip()
        else:
            quiz_name = "Physical Layer"

    if 'Physical' in quiz_name:
        topic_title = "Physical Layer"
        topics_covered = "Transmission Media, Twisted Pair, Coaxial Cable, Fiber Optics, Network Topologies, Multiplexing, TDM, FDM, WDM, Modulation, Encoding (NRZ, Manchester), Bandwidth, Latency, Bit Rate, Baud Rate, Nyquist and Shannon Theorems"
        topic_img_sub = "gate-cse-physical-layer"
    elif 'Application' in quiz_name:
        topic_title = "Application Layer"
        topics_covered = "HTTP, FTP, SMTP, DNS, DHCP, Telnet, SSH, MIME, POP3, IMAP, Client-Server Model, Web Caching, Pipelining, Persistent Connections"
        topic_img_sub = "gate-cse-application-layer"
    elif 'Transport' in quiz_name:
        topic_title = "Transport Layer"
        topics_covered = "TCP, UDP, Sockets, Flow and Congestion Control, Sliding Window, Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery, Connection Management, 3-Way Handshake"
        topic_img_sub = "gate-cse-transport-layer"
    else:
        topic_title = "Data Link Layer"
        topics_covered = "Framing, Error Detection and Correction, CRC, Flow and Error Control, Stop and Wait, Sliding Window Protocols, Go-Back-N, Selective Repeat, Medium Access Control, CSMA/CD, Ethernet"
        topic_img_sub = "gate-cse-data-link-layer"
        
    img_dir = os.path.join(r'h:\yuvraj dutt\images', topic_img_sub)
    os.makedirs(img_dir, exist_ok=True)

    new_qs = extract_questions(input_file)
    print(f"Extracted {len(new_qs)} new questions from {input_file} (Topic: {topic_title})")
    for idx, q in enumerate(new_qs, 1):
        print(f"Q{idx}: type={q['type']}, marks={q['marks']}, ans={q['answer']}")
        
    with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'r', encoding='utf-8') as f:
        existing_js = f.read()

    last_reg_idx = existing_js.rfind('registerTest({')
    if last_reg_idx == -1:
        print("No registerTest found!")
        exit(1)
        
    last_block = existing_js[last_reg_idx:]
    
    # Check if the last registered test belongs to the same topic
    same_topic = f"({topic_title}-" in last_block
    
    # Count tests belonging to this topic
    topic_tests_count = len(re.findall(re.escape(f"({topic_title}-"), existing_js))
    
    current_q_count = len(re.findall(r'marks:\s*\d+,', last_block)) if same_topic else 15
    print(f"Topic: {topic_title}, Tests for topic: {topic_tests_count}, Last test same topic: {same_topic}, Questions in last: {current_q_count}")

    if (not same_topic) or current_q_count >= 15:
        # Start a brand new test
        next_roman = ROMAN_NUMS[topic_tests_count] if topic_tests_count < len(ROMAN_NUMS) else str(topic_tests_count + 1)
        test_name = f"TWT-Computer Network({topic_title}-{next_roman})"
        print(f"Starting new test: {test_name}")
        
        formatted_qs = format_questions_js(new_qs)
        new_test_block = f"""

registerTest({{
    series: "cse-gate-2027",
    name: "{test_name}",
    date: "oct 20, 2026",
    topicsCovered: "{topics_covered}",
    questions: [
{formatted_qs}
    ]
}});
"""
        updated_js = existing_js.rstrip() + new_test_block
    else:
        # Append to current test
        last_bracket = existing_js.rfind(']')
        if last_bracket != -1:
            pre_bracket = existing_js[:last_bracket]
            post_bracket = existing_js[last_bracket:]
            formatted = format_questions_js(new_qs)
            updated_js = pre_bracket + formatted + "\n    " + post_bracket
        else:
            print("Could not find closing bracket")
            exit(1)
            
    with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
        f.write(updated_js)
        
    print("Successfully appended to pyq-registry.js")
