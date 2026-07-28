import re

content = open('test.html', 'r', encoding='utf-8').read()

start_idx = content.find('<div class="question-pannel"')
if start_idx == -1:
    print("No questions found.")
    exit(1)
    
questions_html = content[start_idx:]
q_blocks = questions_html.split('<div class="question-pannel"')

test_str = "name: 'FST - Mock test-5',\nquestions: [\n"

for i in range(1, len(q_blocks)):
    block = q_blocks[i]
    q_type_match = re.search(r'Question Type: (.*?)<', block)
    marks_match = re.search(r'Marks for correct answer: <font[^>]*>([\d\.]+)</font>', block)
    neg_match = re.search(r'Negative Marks: <font[^>]*>([\d\.]+)</font>', block)
    
    q_type = q_type_match.group(1).strip() if q_type_match else "MCQ"
    marks = marks_match.group(1) if marks_match else "1"
    neg = neg_match.group(1) if neg_match else "0"
    
    text_start = block.find('class="question-details">')
    text_end = block.find('<div class="options">')
    if text_end == -1:
        text_end = block.find('<div class="question-status">')
    if text_start != -1 and text_end != -1:
        q_text = block[text_start + 25:text_end].strip()
    else:
        q_text = ""
        
    options = []
    opt_blocks = block.split('<td class="display-table-cell">')
    for j in range(1, len(opt_blocks)):
        opt_text_start = opt_blocks[j].find('>') + 1
        opt_text_end = opt_blocks[j].find('</td>')
        if opt_text_end != -1:
            opt = opt_blocks[j][:opt_text_end].strip()
            # remove radio inputs from options text if any
            opt = re.sub(r'<input type="radio"[^>]*>', '', opt).strip()
            options.append(f"`{opt}`")
            
    test_str += f"""    {{
      marks: {marks},
      neg: {neg},
      type: "{q_type}",
      text: `{q_text}`,
      image: "",
      options: [
        {','.join(options)}
      ],
      answer: "",
      solution: ``
    }},\n"""

test_str += "]\n"

with open('scratch/original_test_5.txt', 'w', encoding='utf-8') as f:
    f.write(test_str)
print("Extracted.")
