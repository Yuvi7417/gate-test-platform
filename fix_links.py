import re

with open('js/ese-ce-test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('registerTest(')

new_blocks = []
for block in blocks:
    if not block:
        new_blocks.append(block)
        continue
    
    if '"SWT - Standards and Quality practices"' in block:
        block = block.replace('/images/quiz/ese-ce-swt-sm/', '/images/quiz/ese-ce-swt-sqp/')
    elif '"SWT - Engineering Aptitude"' in block:
        block = block.replace('/images/quiz/ese-ce-swt-sm/', '/images/quiz/ese-ce-swt-aptitude/')
    elif '"SWT - Current issues National and International"' in block:
        block = block.replace('/images/quiz/ese-ce-swt-sm/', '/images/quiz/ese-ce-swt-current/')
    elif '"SWT - Building Materials"' in block:
        block = block.replace('/images/quiz/ese-ce-swt-sm/', '/images/quiz/ese-ce-swt-building/')
    elif '"SWT - Surveying and Geology"' in block:
        block = block.replace('/images/quiz/ese-ce-swt-sm/', '/images/quiz/ese-ce-swt-surveying/')
        
    new_blocks.append(block)
    
new_content = 'registerTest('.join(new_blocks)

with open('js/ese-ce-test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
