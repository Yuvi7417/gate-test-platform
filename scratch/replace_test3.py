import re
import os

content = open('js/full-test-registry.src.js', 'r', encoding='utf-8').read()
start_idx = content.rfind('name: "FST - Mock test-3"')
end_idx = content.find('registerTest({', start_idx + 10)
if end_idx == -1:
    end_idx = len(content)

test_block = content[start_idx:end_idx]

# get base numbers
files = os.listdir('js/questions/fst-mock-test-3')
image_files = [f for f in files if re.match(r'^(\d+)(\.\d+)?\.(png|jpg)$', f)]
base_dict = {}
for f in image_files:
    m = re.match(r'^(\d+)', f)
    if m:
        base = int(m.group(1))
        if 8 <= base <= 74:
            if base not in base_dict:
                base_dict[base] = []
            base_dict[base].append(f)

for base in base_dict:
    base_dict[base].sort()

base_numbers = sorted(list(base_dict.keys()))

parts = test_block.split('solution: ')
print(f"Questions: {len(parts)-1}")
print(f"Base numbers: {len(base_numbers)}")

# We will just replace `solution: `` ` with `solution: `<img src='js/questions/fst-mock-test-3/X.png' ...>`
new_parts = [parts[0]]
for i in range(1, len(parts)):
    if i - 1 < len(base_numbers):
        base = base_numbers[i - 1]
        images = base_dict[base]
        
        # Sort images correctly so X.png comes before X.1.png
        # The default string sort does "15.1.png" before "15.png" because "." comes before "p".
        # So we need a custom sort.
        def sort_key(f):
            if f.endswith('.png') and '.' not in f[:-4]: return 0
            if f.endswith('.jpg') and '.' not in f[:-4]: return 0
            return 1
        
        images.sort(key=lambda x: (sort_key(x), x))
        
        img_tags = []
        for img in images:
            img_tags.append(f"<img src='js/questions/fst-mock-test-3/{img}' alt='solution' style='max-width:100%; border-radius: 8px;'>")
            
        solution_str = "``"
        if img_tags:
            solution_str = "`" + "<br/>".join(img_tags) + "`"
            
        # replace the empty `` or whatever is there
        # parts[i] starts with ``\n    },\n
        # we need to find the first comma after the solution
        end_sol = parts[i].find('}')
        if parts[i].startswith('``'):
            new_parts.append(solution_str + parts[i][2:])
        else:
            # just in case it's not empty
            first_backtick = parts[i].find('`')
            second_backtick = parts[i].find('`', first_backtick + 1)
            new_parts.append(solution_str + parts[i][second_backtick+1:])
    else:
        new_parts.append(parts[i])

new_test_block = 'solution: '.join(new_parts)
new_content = content[:start_idx] + new_test_block + content[end_idx:]

with open('scratch/full-test-registry.src.js.new', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Created scratch/full-test-registry.src.js.new")
