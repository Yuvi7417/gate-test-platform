import sys

with open('js/test-registry.src.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_sol = r"""      solution: `<img src='js/questions/go_discrete_mathematics_2/3.png' alt='solution' style='max-width:100%; border-radius: 8px;'><br><br><b>Detailed Video Solution:</b> <a href="https://www.youtube.com/watch?v=ZmfaSa1TKm4&t=36s" target="_blank" style="color: #007bff; text-decoration: underline;">https://www.youtube.com/watch?v=ZmfaSa1TKm4&t=36s</a> (with Complete Analysis)`
"""
lines[54487] = new_sol

with open('js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
