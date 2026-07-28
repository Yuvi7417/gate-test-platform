import re

with open('js/full-test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the FST - Mock test-2 block
start_idx = content.find('name: "FST - Mock test-2"')
if start_idx == -1:
    print("Test not found!")
    exit(1)

# Find the next test to limit the scope
end_idx = content.find('registerTest({', start_idx)
if end_idx == -1:
    end_idx = len(content)

test_block = content[start_idx:end_idx]

parts = test_block.split('solution: `')

if len(parts) < 40:
    print(f"Only found {len(parts)-1} questions in the test.")
else:
    for i in range(1, 40):
        # i is the question number (1-indexed)
        end_backtick = parts[i].find('`')
        if end_backtick != -1:
            if i <= 18:
                if i == 15:
                    new_sol = f"<img src='js/questions/fst-mock-test-2/15.1.png' alt='solution' style='max-width:100%; border-radius: 8px;'><br><img src='js/questions/fst-mock-test-2/15.12.png' alt='solution' style='max-width:100%; border-radius: 8px;'>"
                else:
                    new_sol = f"<img src='js/questions/fst-mock-test-2/{i}.1.png' alt='solution' style='max-width:100%; border-radius: 8px;'>"
            else:
                # 19 to 39
                new_sol = f"<img src='js/questions/fst-mock-test-2/{i}.png' alt='solution' style='max-width:100%; border-radius: 8px;'>"
            
            parts[i] = new_sol + parts[i][end_backtick:]

    new_test_block = 'solution: `'.join(parts)
    new_content = content[:start_idx] + new_test_block + content[end_idx:]
    
    with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated solutions 1 to 39 successfully.")
