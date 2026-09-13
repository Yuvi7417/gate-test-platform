import re
f = 'js/questions/pw-test-registry.js'
with open(f, 'r', encoding='utf-8') as file:
    content = file.read()

match = re.search(r'name:\s*"TWT-c programming"', content)
if match:
    start_idx = match.start()
    before = content[:start_idx]
    after = content[start_idx:]
    
    # We want to replace <pre><code> with <pre class="prettyprint linenums lang-c_cpp"><code>
    after = after.replace('<pre><code>', '<pre class="prettyprint linenums lang-c_cpp"><code>')
    # and if any <pre> lacks the <code>, just <pre> alone:
    after = after.replace('<pre>', '<pre class="prettyprint linenums lang-c_cpp">')
    # But wait, replacing <pre> alone after replacing <pre><code> might double-replace if not careful!
    # Let's just do a regex replace for <pre> that doesn't have class.
    after = re.sub(r'<pre>(?! class)', '<pre class="prettyprint linenums lang-c_cpp">', after)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(before + after)
    print('Updated.')
else:
    print('Not found.')
