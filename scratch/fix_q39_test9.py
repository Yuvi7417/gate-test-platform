content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()

start_idx = content.rfind('name: "FST - Mock test-9"')
test_block = content[start_idx:]
end_idx = test_block.find('registerTest({')
if end_idx != -1:
    test_block = test_block[:end_idx]
    post_block = content[start_idx + end_idx:]
else:
    post_block = ""

parts = test_block.split('marks: ')

# We want to replace the `type: "MCQ"` with `type: "NAT"`
# And move the options into the `text`

q39_part = parts[39]

# Replace MCQ with NAT
q39_part = q39_part.replace('type: "MCQ"', 'type: "NAT"')

# Extract the options strings
options_start = q39_part.find('options: [')
options_end = q39_part.find('],', options_start)

options_str = q39_part[options_start + len('options: ['):options_end].strip()

# Create ul list for the text
options_lines = [line.strip().strip('`,') for line in options_str.split('\n') if line.strip()]

ul_html = "<ul>"
for line in options_lines:
    if line:
        ul_html += f"<li>{line}</li>"
ul_html += "</ul>"

# Now we find the end of the text string
text_start = q39_part.find('text: `')
text_end = q39_part.find('`,', text_start)

original_text = q39_part[text_start + len('text: `'):text_end]

# We should insert the UL before the last <p> if there's one, or just append it.
# The original text ends with <p>The number of states in a minimum state DFA for \\(L\\) is ? </p> <p></p>
# It's better to insert the UL right after "defined as follows:<br/> </p>"
insert_point = original_text.find('defined as follows:<br/> </p>') + len('defined as follows:<br/> </p>')
new_text = original_text[:insert_point] + ul_html + original_text[insert_point:]

# Now reconstruct q39_part
q39_part = q39_part[:text_start] + 'text: `' + new_text + '`,' + q39_part[text_end+2:options_start] + 'options: [],' + q39_part[options_end+2:]

parts[39] = q39_part

new_test_block = 'marks: '.join(parts)
new_content = content[:start_idx] + new_test_block + post_block

with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Q39 format fixed.")
