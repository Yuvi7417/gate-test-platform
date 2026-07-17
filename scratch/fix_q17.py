import json
import re

with open('js/test-registry.js', 'r', encoding='utf-8') as f:
    content = f.read()

q17_bad = '''      text: `<p>Consider four \\( 4 \\)-variable Boolean functions \\( f_{1}, f_{2}, f_{3} \\) expressed in sum-of-minterms \\( (\\Sigma m) \\) form: </p> <ul> <li> \\( f_{1}(A, B, C, D)=\\sum(0,1,2,4,5) \\)<br/> </li> <li> \\( f_{2}(A, B, C, D)=\\sum(0,4,8,12) \\)<br/> </li> <li> \\( f_{3}(A, B, C, D)=\\sum(1,2,5,9) \\)<br/> </li> <li> \\( f_{4}(A, B, C, D)=\\sum(1,5) \\) </li> </ul> <p><br/><strong>The Circuit</strong><br/><br/>The functions are processed through the following logic gates to produce the final output \\( \\mathbf{Z} \\) : </p> <div> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( Z=\\sum(0,2,4,8,12) \\)<br/> </li> <li> \\( Z=\\sum(0,1,2,4,8,12) \\)<br/> </li> <li> \\( Z=\\sum(0,2,4,5,8,12) \\)<br/> </li> <li> \\( Z=\\sum(1,5,9) \\) </li> </ol> </div>`,
      image: "",
      options: [
        `\\( f_{1} \\) and \\( f_{2} \\) are the inputs to an \\( \\mathbf{OR} \\) gate. Let the output be \\( G_{1} \\).<br/>`,
        `\\( f_{3} \\) and \\( f_{4} \\) are the inputs to an \\( \\mathbf{AND} \\) gate. Let the output be \\( G_{2} \\).<br/>`,
        `\\( G_{1} \\) and \\( G_{2} \\) are the inputs to an \\( \\mathbf{XOR} \\) gate. The final output is \\( \\mathbf{Z} \\).<br/><br/>`,
      ],'''

q17_good = '''      text: `<p>Consider four \\( 4 \\)-variable Boolean functions \\( f_{1}, f_{2}, f_{3} \\) expressed in sum-of-minterms \\( (\\Sigma m) \\) form: </p> <ul> <li> \\( f_{1}(A, B, C, D)=\\sum(0,1,2,4,5) \\)<br/> </li> <li> \\( f_{2}(A, B, C, D)=\\sum(0,4,8,12) \\)<br/> </li> <li> \\( f_{3}(A, B, C, D)=\\sum(1,2,5,9) \\)<br/> </li> <li> \\( f_{4}(A, B, C, D)=\\sum(1,5) \\) </li> </ul> <p><br/><strong>The Circuit</strong><br/><br/>The functions are processed through the following logic gates to produce the final output \\( \\mathbf{Z} \\) : </p> <ul> <li> \\( f_{1} \\) and \\( f_{2} \\) are the inputs to an \\( \\mathbf{OR} \\) gate. Let the output be \\( G_{1} \\).<br/> </li> <li> \\( f_{3} \\) and \\( f_{4} \\) are the inputs to an \\( \\mathbf{AND} \\) gate. Let the output be \\( G_{2} \\).<br/> </li> <li> \\( G_{1} \\) and \\( G_{2} \\) are the inputs to an \\( \\mathbf{XOR} \\) gate. The final output is \\( \\mathbf{Z} \\).<br/><br/> </li> </ul>`,
      image: "",
      options: [
        `\\( Z=\\sum(0,2,4,8,12) \\)`,
        `\\( Z=\\sum(0,1,2,4,8,12) \\)`,
        `\\( Z=\\sum(0,2,4,5,8,12) \\)`,
        `\\( Z=\\sum(1,5,9) \\)`,
      ],'''

if q17_bad in content:
    content = content.replace(q17_bad, q17_good)
    print("Replaced!")
else:
    print("COULD NOT FIND!")

with open('js/test-registry.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Done!")
