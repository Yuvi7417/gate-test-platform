import append_pyq

qs = append_pyq.extract_questions()
formatted_qs = append_pyq.format_questions_js(qs)

new_test_block = f"""
registerTest({{
    series: "cse-gate-2027",
    name: "TWT-Digital Logic(Number System-VIII)",
    date: "sep 20, 2026",
    topicsCovered: "Number Systems, Base Conversion, Binary Arithmetic, 1's and 2's Complement, Floating Point Representation",
    questions: [
{formatted_qs}
    ]
}});
"""

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.rstrip() + '\n' + new_test_block

with open(r'h:\yuvraj dutt\js\pyq-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully created and added new Number System series!")
