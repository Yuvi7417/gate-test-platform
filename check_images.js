const fs = require('fs');
const cheerio = require('cheerio');

const files = ['test1.html', 'test2.html', 'test3.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let htmlRaw = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(htmlRaw);

    const qDivs = $('.res_question').toArray();
    for (const qDiv of qDivs) {
        const $q = $(qDiv);
        const num = $q.find('.res_qs_num b').text().replace('Q #', '').trim();
        
        // all images in this question block
        const allImages = $q.find('img').toArray();
        // images in text
        const textImages = $q.find('.res_question_text img').toArray();
        // images in options/elsewhere (excluding mathjax possibly?)
        
        for (const img of allImages) {
            const src = $(img).attr('src');
            if (src && src.startsWith('http')) {
                const inText = textImages.includes(img);
                console.log(`[${file} Q${num}] Image: ${src} (inText: ${inText})`);
            }
        }
    }
}
