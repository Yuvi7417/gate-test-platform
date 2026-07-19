import os
import re

with open('h:/yuvraj dutt/js/test-registry.src.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('name: "TWT - C-Programing-2"')
q7_start = content.find('What will be the output of the following program', idx)
start = content.rfind('{', 0, q7_start)
end = content.find('},', q7_start)
q7_text = content[start:end+2]

code_html = """
<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
    <div style="flex: 1; min-width: 300px;">
        <h4 style="text-align: center; margin-bottom: 10px;">f1.c</h4>
<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; font-family: monospace; font-size: 14px; line-height: 1.5;">
#include &lt;stdio.h&gt;
int x;
static int y;
void f()
{
    x = 2;
    y = 3;
}
void g(int a)
{
    int x = 1;
    static int y;

    if (a == 0)
    {
        y = 0;
    }
    else {
        y += x;
    }
    printf("g: %d %d\\n", x, y);

}
void p()
{
    printf("p: %d %d\\n", x, y);
}
</pre>
    </div>
    <div style="flex: 1; min-width: 300px;">
        <h4 style="text-align: center; margin-bottom: 10px;">f2.c</h4>
<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border: 1px solid #ddd; overflow-x: auto; font-family: monospace; font-size: 14px; line-height: 1.5;">
#include &lt;stdio.h&gt;
extern void g(int);
void p();
extern void f();
extern int x;
static int y;

void s() {
    printf("s: %d %d\\n", x, y);
}
main() {
    g(0);
    f();
    g(1);
    p();
    s();
}
</pre>
    </div>
</div>
"""

# The original image tag
img_pattern = re.compile(r'<img.*?src="https://lh6.googleusercontent.com/p2oOVtxzMAZc-DD6wt9Q46DBCB8FLbCkTXeAwoAYRnHLyhYsZYePLQPMwG_34wglBJsrFdRYRCYOjqbtd_SSFE16scpeMd4YLBYfyWCvA8SZ0F2iCEyZHZMu_OcGRZv3iQ-EAUOi".*?>')

new_q7_text = img_pattern.sub(code_html.replace('\n', '\\n').replace('"', '\\"'), q7_text)

content = content[:start] + new_q7_text + content[end+2:]

with open('h:/yuvraj dutt/js/test-registry.src.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected Q7 code successfully!")
