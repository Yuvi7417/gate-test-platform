import re
with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    text = f.read()

target = r'(<p><img alt="" src="https://gateoverflow.in/\?qa=blob&amp;qa_blobid=5689723434612614762"/></p>`,\s*image:\s*"",\s*options:\s*)\[\]'
new_text = re.sub(target, r'\g<1>["A", "B", "C", "D"]', text)

with open('h:/yuvraj dutt/js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print('Replaced successfully' if text != new_text else 'No replacement made')
