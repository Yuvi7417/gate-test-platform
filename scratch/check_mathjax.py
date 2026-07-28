import bs4
soup = bs4.BeautifulSoup(open('test.html', encoding='utf-8'), 'html.parser')
scripts = soup.find_all('script', type=lambda t: t and t.startswith('math/tex'))
if scripts:
    print(scripts[0].parent.prettify()[:1000])
