import re

content = open('js/full-test-registry.src.js', encoding='utf-8').read()

old_block = """{
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<p></p> <p>Consider the following program. Assuming that all operations take their operands from registers, Minimum how many registers would be needed to perform register allocation with no spilling?</p> <p></p>`,
      image: "",
      options: [
        `\\( A = 7; \\)`,
        `\\( B = A + 2; \\)`,
        `\\( C = A + B; \\)`,
        `\\( D = C + B; \\)`,
        `\\( B = C + B; \\)`,
        `\\( A = A + B; \\)`,
        `\\( E = C + D; \\)`,
        `\\( F = C + D; \\)`,
        `\\( G = A + B; \\)`,
        `\\( H = E + F; \\)`,
      ],
      answer: "5",
      solution: ``
    },"""

new_block = """{
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider the following program. Assuming that all operations take their operands from registers, Minimum how many registers would be needed to perform register allocation with no spilling?</p>
<pre>
A = 7;
B = A + 2;
C = A + B;
D = C + B;
B = C + B;
A = A + B;
E = C + D;
F = C + D;
G = A + B;
H = E + F;
</pre>
<p></p>`,
      image: "",
      options: [
      ],
      answer: "5",
      solution: ``
    },"""

if old_block in content:
    new_content = content.replace(old_block, new_block)
    with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print("Old block not found exactly as specified!")
