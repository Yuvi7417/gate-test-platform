import re
with open('js/go-test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find occurrences of registerTest
matches = list(re.finditer(r'registerTest\(\s*\{\s*series:\s*"cs-gate-classes",\s*name:\s*"MST - Algo \+ DS \+ C"', content))
if len(matches) > 1:
    # Remove the first occurrence
    start_idx = matches[0].start()
    end_idx = matches[1].start()
    new_content = content[:start_idx] + content[end_idx:]
    with open('js/go-test-registry.src.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Removed duplicate test block.")
else:
    print("No duplicates found.")
