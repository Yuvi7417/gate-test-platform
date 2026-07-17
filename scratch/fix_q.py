import json
import re

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

# I will find the SWT - Digital Logic-2 block.
# Actually, I'll just use regex to find and replace the specific strings in the file.
# Since I know the exact content of Q2, Q5, Q7, Q8, Q17 from e62ea89, I can replace them directly.

# Q2:
q2_bad = """      text: `<p style="text-align:center"><img alt="" height="159" src="js/questions/digital_logic_2/img_2.png" width="460"/></p> <p><br/>Analyze the following statements.</p> <p><br/>The analysis allows us to conclude that</p> <ol style="list-style-type:upper-alpha"> <li>statements I and II are true.<br/> </li> <li>statement III is true.<br/> </li> <li>statement IV is true.<br/> </li> <li>statement II is true.</li> </ol> <p> </p>`,
      image: "",
      options: [
        `The circuit shown is a sequential circuit.<br/>`,
        `The circuit shown is a combinational circuit.<br/>`,
        `The circuit shown implements a four-state Mealy machine.<br/>`,
        `The circuit shown implements a four-state Moore machine.`,
      ],"""

q2_good = """      text: `<p style="text-align:center"><img alt="" height="159" src="js/questions/digital_logic_2/img_2.png" width="460"/></p> <p><br/>Analyze the following statements.</p> <ol style="list-style-type:upper-roman"> <li>The circuit shown is a sequential circuit.<br/> </li> <li>The circuit shown is a combinational circuit.<br/> </li> <li>The circuit shown implements a four-state Mealy machine.<br/> </li> <li>The circuit shown implements a four-state Moore machine.</li> </ol> <p><br/>The analysis allows us to conclude that</p>`,
      image: "",
      options: [
        `statements I and II are true.`,
        `statement III is true.`,
        `statement IV is true.`,
        `statement II is true.`,
      ],"""

# Q5:
q5_bad = """      text: `<p>Consider the following Boolean expressions:</p> <p><br/><br/>Consider the following statements:</p> <ol style="list-style-type:upper-roman"> <li>A is equivalent to B.<br/> </li> <li>C is equivalent to D.<br/> </li> <li>A is equivalent to D.<br/> </li> <li>B is equivalent to C.</li> </ol> <p><br/><br/>Which of the above options are true?</p> <ol style="list-style-type:upper-alpha"> <li>Only statements I and III are true.<br/> </li> <li>Only statements II and IV are true.<br/> </li> <li>All statements are true.<br/> </li> <li>All statements are false.</li> </ol> <p> </p>`,
      image: "",
      options: [
        `\\( (a \\cdot b)+(c \\cdot d \\cdot e) \\)<br/>`,
        `\\( (a \\cdot b) \\cdot(c \\cdot d \\cdot e) \\) <br/>`,
        `\\( (a+b) \\cdot(c+d+e) \\)<br/>`,
        `\\( \\overline{(a+b)}+\\overline{(c+d+e)} \\)`,
      ],"""

q5_good = """      text: `<p>Consider the following Boolean expressions:</p> <ol style="list-style-type:upper-roman"> <li>\\( (a \\cdot b)+(c \\cdot d \\cdot e) \\)<br/> </li> <li>\\( (a \\cdot b) \\cdot(c \\cdot d \\cdot e) \\) <br/> </li> <li>\\( (a+b) \\cdot(c+d+e) \\)<br/> </li> <li>\\( \\overline{(a+b)}+\\overline{(c+d+e)} \\)</li> </ol> <p><br/><br/>Consider the following statements:</p> <ol style="list-style-type:upper-roman"> <li>A is equivalent to B.<br/> </li> <li>C is equivalent to D.<br/> </li> <li>A is equivalent to D.<br/> </li> <li>B is equivalent to C.</li> </ol> <p><br/><br/>Which of the above options are true?</p>`,
      image: "",
      options: [
        `Only statements I and III are true.`,
        `Only statements II and IV are true.`,
        `All statements are true.`,
        `All statements are false.`,
      ],"""

# Q7:
q7_bad = """      text: `<p style="text-align:center"><img alt="" height="173" src="js/questions/digital_logic_2/img_5.png" width="500"/></p> <p><br/>Considering the digital circuit shown, analyze the following statements.</p> <p><br/>The analysis allows us to conclude that</p> <ol style="list-style-type:upper-alpha"> <li>statement III is true.<br/> </li> <li>none of the statements are true.<br/> </li> <li>statement I is true.<br/> </li> <li>statement II is true.</li> </ol> <p> </p>`,
      image: "",
      options: [
        `The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=\\mathrm{AB}+\\mathrm{CD}+\\mathrm{E} \\)<br/>`,
        `The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=(\\mathrm{A+B)}(\\mathrm{C+D)E} \\) <br/>`,
        `The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=\\mathrm{(A B C)+(D E)} \\)`,
      ],"""

q7_good = """      text: `<p style="text-align:center"><img alt="" height="173" src="js/questions/digital_logic_2/img_5.png" width="500"/></p> <p><br/>Considering the digital circuit shown, analyze the following statements.</p> <ol style="list-style-type:upper-roman"> <li>The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=\\mathrm{AB}+\\mathrm{CD}+\\mathrm{E} \\)<br/> </li> <li>The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=(\\mathrm{A+B)}(\\mathrm{C+D)E} \\) <br/> </li> <li>The Boolean function implemented by the circuit can be defined by: \\( \\mathrm{S}=\\mathrm{(A B C)+(D E)} \\)</li> </ol> <p><br/>The analysis allows us to conclude that</p>`,
      image: "",
      options: [
        `statement III is true.`,
        `none of the statements are true.`,
        `statement I is true.`,
        `statement II is true.`,
      ],"""

# Q8:
q8_bad = """      text: `<p>Consider the multiplexer circuit in the following figure</p> <p style="text-align:center"><img alt="" height="376" src="js/questions/digital_logic_2/img_6.png" width="500"/></p> <p><br/>Consider the following statements:</p> <p>Select the<strong> CORRECT </strong>option:</p> <ol style="list-style-type:upper-alpha"> <li>statement I is correct.<br/> </li> <li>statement II is correct.<br/> </li> <li>statement III is correct.<br/> </li> <li>Only statements I and II are correct.</li> </ol> <p> </p>`,
      image: "",
      options: [
        `If \\( \\mathrm{S1}=0 \\) and \\( \\mathrm{S2}=0 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D1} \\)<br/>`,
        `If \\( \\mathrm{S1}=0 \\) and \\( \\mathrm{S2}=1 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D2} \\)<br/>`,
        `If \\( \\mathrm{S1}=1 \\) and \\( \\mathrm{S2}=1 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D0} \\)<br/>`,
      ],"""

q8_good = """      text: `<p>Consider the multiplexer circuit in the following figure</p> <p style="text-align:center"><img alt="" height="376" src="js/questions/digital_logic_2/img_6.png" width="500"/></p> <p><br/>Consider the following statements:</p> <ol style="list-style-type:upper-roman"> <li>If \\( \\mathrm{S1}=0 \\) and \\( \\mathrm{S2}=0 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D1} \\)<br/> </li> <li>If \\( \\mathrm{S1}=0 \\) and \\( \\mathrm{S2}=1 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D2} \\)<br/> </li> <li>If \\( \\mathrm{S1}=1 \\) and \\( \\mathrm{S2}=1 \\), then \\( \\mathrm{X} \\) will always have the same value as \\( \\mathrm{D0} \\)<br/> </li> </ol> <p>Select the<strong> CORRECT </strong>option:</p>`,
      image: "",
      options: [
        `statement I is correct.`,
        `statement II is correct.`,
        `statement III is correct.`,
        `Only statements I and II are correct.`,
      ],"""

# Q17:
q17_bad = """      text: `<p>Consider four \\( 4 \\)-variable Boolean functions \\( f_{1}, f_{2}, f_{3} \\) expressed in sum-of-minterms \\( (\\Sigma m) \\) form: </p> <ul> <li> \\( f_{1}(A, B, C, D)=\\sum(0,1,2,4,5) \\)<br/> </li> <li> \\( f_{2}(A, B, C, D)=\\sum(0,4,8,12) \\)<br/> </li> <li> \\( f_{3}(A, B, C, D)=\\sum(1,2,5,9) \\)<br/> </li> <li> \\( f_{4}(A, B, C, D)=\\sum(1,5) \\) </li> </ul> <p><br/><strong>The Circuit</strong><br/><br/>The functions are processed through the following logic gates to produce the final output \\( \\mathbf{Z} \\) : </p> <div> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( Z=\\sum(0,2,4,8,12) \\)<br/> </li> <li> \\( Z=\\sum(0,1,2,4,8,12) \\)<br/> </li> <li> \\( Z=\\sum(0,2,4,5,8,12) \\)<br/> </li> <li> \\( Z=\\sum(1,5,9) \\) </li> </ol> </div> <p></p>`,
      image: "",
      options: [
        `\\( f_{1} \\) and \\( f_{2} \\) are the inputs to an \\( \\mathbf{OR} \\) gate. Let the output be \\( G_{1} \\).<br/>`,
        `\\( f_{3} \\) and \\( f_{4} \\) are the inputs to an \\( \\mathbf{AND} \\) gate. Let the output be \\( G_{2} \\).<br/>`,
        `\\( G_{1} \\) and \\( G_{2} \\) are the inputs to an \\( \\mathbf{XOR} \\) gate. The final output is \\( \\mathbf{Z} \\).<br/><br/>`,
      ],"""

q17_good = """      text: `<p>Consider four \\( 4 \\)-variable Boolean functions \\( f_{1}, f_{2}, f_{3} \\) expressed in sum-of-minterms \\( (\\Sigma m) \\) form: </p> <ul> <li> \\( f_{1}(A, B, C, D)=\\sum(0,1,2,4,5) \\)<br/> </li> <li> \\( f_{2}(A, B, C, D)=\\sum(0,4,8,12) \\)<br/> </li> <li> \\( f_{3}(A, B, C, D)=\\sum(1,2,5,9) \\)<br/> </li> <li> \\( f_{4}(A, B, C, D)=\\sum(1,5) \\) </li> </ul> <p><br/><strong>The Circuit</strong><br/><br/>The functions are processed through the following logic gates to produce the final output \\( \\mathbf{Z} \\) : </p> <ul> <li> \\( f_{1} \\) and \\( f_{2} \\) are the inputs to an \\( \\mathbf{OR} \\) gate. Let the output be \\( G_{1} \\).<br/> </li> <li> \\( f_{3} \\) and \\( f_{4} \\) are the inputs to an \\( \\mathbf{AND} \\) gate. Let the output be \\( G_{2} \\).<br/> </li> <li> \\( G_{1} \\) and \\( G_{2} \\) are the inputs to an \\( \\mathbf{XOR} \\) gate. The final output is \\( \\mathbf{Z} \\).<br/><br/> </li> </ul>`,
      image: "",
      options: [
        `\\( Z=\\sum(0,2,4,8,12) \\)`,
        `\\( Z=\\sum(0,1,2,4,8,12) \\)`,
        `\\( Z=\\sum(0,2,4,5,8,12) \\)`,
        `\\( Z=\\sum(1,5,9) \\)`,
      ],"""

# Let's verify that the replacements are correct in terms of replacing what's currently in the file.
for (b, g) in [(q2_bad, q2_good), (q5_bad, q5_good), (q7_bad, q7_good), (q8_bad, q8_good), (q17_bad, q17_good)]:
    if b in content:
        content = content.replace(b, g)
    else:
        print("COULD NOT FIND:")
        print(b[:100])

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced!")
