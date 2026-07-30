const fs = require('fs');
const cheerio = require('cheerio');
const http = require('https');

const html = fs.readFileSync('test.html', 'utf8');
const $ = cheerio.load(html);

let imgIndex = 1;

$('.res_question').each((i, qDiv) => {
  const num = $(qDiv).find('.res_qs_num b').text().replace('Q #', '').trim();
  
  $(qDiv).find('.res_question_text img').each((j, img) => {
    const src = $(img).attr('src');
    if (src && src.startsWith('http')) {
      const filename = 'q' + num + '_img' + (imgIndex++) + '.png';
      console.log('Downloading', src, 'to', filename);
      
      const file = fs.createWriteStream('images/quiz/wqt-dl9/' + filename);
      http.get(src, function(response) {
        response.pipe(file);
      }).on('error', function(err) {
        console.error('Error downloading:', err);
      });
    }
  });
});
