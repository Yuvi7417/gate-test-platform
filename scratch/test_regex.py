import re
html = '<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp">'
html = re.sub(r'\blang-[a-zA-Z0-9_]+\b', '', html)
print(html)
