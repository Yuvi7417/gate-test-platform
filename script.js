const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('test1.html', 'utf8'));
const qTextContainer = $('.res_question_text').eq(3);
const ols = qTextContainer.find('ol').not('pre ol');
console.log('Valid ols:', ols.length);
if(ols.length > 0) {
  console.log('Li count:', ols.last().find('> li').length);
}
