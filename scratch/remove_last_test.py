import re

# Read test-registry.js
with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the "SWT - Digital Logic-2" test
start_idx = content.find('name: "SWT - Digital Logic-2",')
if start_idx != -1:
    # Find the actual start of the registerTest block
    block_start = content.rfind('registerTest({', 0, start_idx)
    if block_start != -1:
        # Cut it out
        content = content[:block_start]
        with open('js/test-registry.js', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Removed old SWT - Digital Logic-2 test")
    else:
        print("Could not find start of registerTest")
else:
    print("Test not found, maybe already removed")
