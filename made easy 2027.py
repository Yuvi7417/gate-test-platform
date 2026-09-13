import os
import re
import urllib.request
import time
from bs4 import BeautifulSoup

def download_image(url, local_path):
    if not os.path.exists(local_path):
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
            out_file.write(response.read())

def extract_and_add_question(html_file, js_file, test_series_name, image_folder):
    os.makedirs(image_folder, exist_ok=True)
    with open(html_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    question_span = soup.select_one('h3 span')
    if not question_span:
        print("Error: Could not find valid question in test.html")
        return

    question_text = ""
    question_image = ""
    
    # Extract images first
    images = question_span.find_all('img')
    if images:
        img_url = images[0]['src']
        img_name = img_url.split('/')[-1]
        local_img_path = f"{image_folder}/{img_name}"
        download_image(img_url, local_img_path)
        question_image = local_img_path
        for img in images:
            img.extract() # remove from DOM so it doesn't leave blank spots in text

    question_text = question_span.get_text(separator='<br>', strip=True)
    if question_text:
        question_text = re.sub(r'\s+', ' ', question_text)
    
    question_text = question_text.replace('"', '\\"')
    
    options = []
    labels = soup.find_all('label')
    for label in labels:
        img = label.find('img')
        if img:
            img_url = img['src']
            img_name = img_url.split('/')[-1]
            local_img_path = f"{image_folder}/{img_name}"
            download_image(img_url, local_img_path)
            options.append(f"'<img src=\"{local_img_path}\" style=\"max-width:150px;\">'")
        else:
            btn = label.find('button')
            opt_text = btn.get_text(separator='<br>', strip=True) if btn else label.get_text(separator='<br>', strip=True)
            opt_text = re.sub(r'\s+', ' ', opt_text)
            opt_text = opt_text.replace("'", "\\'")
            options.append(f"'{opt_text}'")
            
    correct_answer = "A"
    correct_ans_element = soup.find(string=re.compile("Correct Answer:"))
    if correct_ans_element:
        ans_span = correct_ans_element.find_next('span')
        if ans_span:
            correct_answer = ans_span.get_text(strip=True)
            
    solution_html = ""
    solution_div = soup.find('h2', string=re.compile("Solution"))
    if solution_div:
        sol_container = solution_div.find_next_sibling('div')
        if sol_container:
            img = sol_container.find('img')
            if img:
                img_url = img['src']
                img_name = img_url.split('/')[-1]
                local_img_path = f"{image_folder}/{img_name}"
                download_image(img_url, local_img_path)
                solution_html = f"<img src='{local_img_path}' alt='Detailed Solution'>"
            else:
                sol_html = sol_container.get_text(separator='<br>', strip=True)
                sol_html = sol_html.replace(f"Correct Answer:{correct_answer}", "").replace(f"Correct Answer: {correct_answer}", "")
                sol_html = re.sub(r'\s+', ' ', sol_html)
                sol_html = re.sub(r'(<br>\s*)+', '<br>', sol_html)
                sol_html = sol_html.replace('"', '\\"').strip('<br>').strip()
                solution_html = sol_html

    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    marks = 1
    test_idx = js_content.find(f'name: "{test_series_name}"')
    if test_idx != -1 and "TWT" in test_series_name:
        end_idx = js_content.find('  ],\n});', test_idx)
        if end_idx != -1:
            test_content = js_content[test_idx:end_idx]
            if test_content.count("marks:") >= 9:
                marks = 2

    q_type = "MCQ" if len(options) > 0 else "NAT"
    neg_mark = round(0.33 * marks, 2) if len(options) > 0 else 0
    answer_js = f'"{correct_answer}"'

    if "," in correct_answer:
        q_type = "MSQ"
        neg_mark = 0
        ans_list = [ans.strip() for ans in correct_answer.split(",")]
        answer_js = str(ans_list).replace("'", '"')

    options_str = ",\n        ".join(options)
    new_question_js = f"""    {{
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
    }},
"""

    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    test_idx = js_content.find(f'name: "{test_series_name}"')
    if test_idx != -1:
        end_idx = js_content.find('  ],\n});', test_idx)
        if end_idx != -1:
            updated_js = js_content[:end_idx] + new_question_js + js_content[end_idx:]
            with open(js_file, 'w', encoding='utf-8') as f:
                f.write(updated_js)
            print(f"[{time.strftime('%H:%M:%S')}] Question successfully added!")
            return
            
    print("Error: Could not find insertion point in JS file.")

if __name__ == "__main__":
    html_source = "test.html"
    registry_file = "js/test-registry.src.js"
    test_name = "TWT - Compiler Design-1"
    image_dir = "images/Compiler Design-1"
    
    last_mtime = os.path.getmtime(html_source) if os.path.exists(html_source) else 0
    print(f"Watching for changes in {html_source}...")
    
    while True:
        try:
            if os.path.exists(html_source):
                current_mtime = os.path.getmtime(html_source)
                if current_mtime > last_mtime:
                    print(f"[{time.strftime('%H:%M:%S')}] Change detected! Processing...")
                    time.sleep(1) # Wait for file write to complete
                    extract_and_add_question(html_source, registry_file, test_name, image_dir)
                    last_mtime = os.path.getmtime(html_source)
        except Exception as e:
            print("Error:", e)
        time.sleep(2)
