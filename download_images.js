const fs = require('fs');
const cheerio = require('cheerio');
const http = require('http');
const https = require('https');

const html = fs.readFileSync('test.html', 'utf8');
const $ = cheerio.load(html);

let imgIndex = 1;

$('.res_question').each((i, qDiv) => {
  const num = $(qDiv).find('.res_qs_num b').text().replace('Q #', '').trim();
  
  $(qDiv).find('.res_question_text img').each((j, img) => {
    let src = $(img).attr('src');
    if (src && src.startsWith('http')) {
      const filename = 'q' + num + '_img' + (imgIndex++) + '.png';
      src = src.replace(/^http:\/\//i, 'https://');
      console.log('Downloading', src, 'to', filename);
      
      const file = fs.createWriteStream('images/quiz/wqt-dl11/' + filename);
      https.get(src, function(response) {
        if (response.statusCode !== 200) {
           console.error(`Failed to download ${src}: ${response.statusCode}`);
           return;
        }
        response.pipe(file);
      }).on('error', function(err) {
        console.error('Error downloading:', err);
      });
    }
  });
});

