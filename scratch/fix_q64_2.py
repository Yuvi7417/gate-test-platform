import re

content = open('js/full-test-registry.src.js', encoding='utf-8').read()

start = content.find('Minimum how many registers would be needed to perform register allocation with no spilling?</p> <p></p>`,')
if start != -1:
    end = content.find('answer: "5",', start)
    if end != -1:
        # replace type: "MCQ" with type: "NAT" above it
        mcq_idx = content.rfind('type: "MCQ",', 0, start)
        content = content[:mcq_idx] + 'type: "NAT",' + content[mcq_idx+12:]
        
        # We need to replace the start block
        # Add the code to text and empty options
        
        # find the end of the text string
        text_end = content.find('`,', start)
        
        options_start = content.find('options: [', text_end)
        options_end = content.find('],', options_start)
        
        code = """
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
<p></p>`,"""
        
        # Replace the `</p> <p></p>`, part with `</p>` + code
        content = content[:start] + 'Minimum how many registers would be needed to perform register allocation with no spilling?</p>' + code + content[text_end+2:options_start] + 'options: [\n      ],' + content[options_end+2:]
        
        with open('js/full-test-registry.src.js', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Replaced successfully")
    else:
        print("end not found")
else:
    print("start not found")

