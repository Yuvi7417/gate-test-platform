const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('test.html', 'utf8');
const $ = cheerio.load(html);
console.log('Total img tags:', $('img').length);
$('img').each((i, el) => {
  console.log(`Image ${i}:`, $(el).attr('src'));
});
