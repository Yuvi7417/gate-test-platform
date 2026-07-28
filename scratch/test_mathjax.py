import bs4
soup = bs4.BeautifulSoup(open('test.html', encoding='utf-8'), 'html.parser')
scripts = soup.find_all('script', type=lambda t: t and t.startswith('math/tex'))
for script in scripts:
    tex = script.string
    is_display = 'mode=display' in script['type']
    replacement = f"\\\\({tex}\\\\)" if not is_display else f"$$ {tex} $$"
    
    parent = script.parent
    # Remove MathJax preview and CHTML spans that are siblings
    for preview in parent.find_all('span', class_='MathJax_Preview'):
        preview.decompose()
    for chtml in parent.find_all('span', class_=lambda c: c and 'MathJax_CHTML' in c):
        chtml.decompose()
        
    script.replace_with(replacement)

print(soup.select_one('.res_question').prettify()[:1000])
