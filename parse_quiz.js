const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const https = require('https');

const html = fs.readFileSync('test.html', 'utf8');
const $ = cheerio.load(html);

const questions = [];
const imageDir = path.join(__dirname, 'images', 'quiz', 'wqt-dl1');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

let imageIndex = 1;
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

async function parse() {
  const qDivs = $('.res_question').toArray();
  for (const qDiv of qDivs) {
    const $q = $(qDiv);
    const num = $q.find('.res_qs_num b').text().replace('Q #', '').trim();
    
    const marksText = $q.find('.res_qs_marks').text();
    const penaltyText = $q.find('.res_qs_penalty').text();
    const marks = parseFloat(marksText.replace('Award: ', '')) || 1;
    const penalty = parseFloat(penaltyText.replace('Penalty: ', '')) || 0;
    
    // Type
    const typeText = $q.find('.res_qs_type').text();
    let type = 'MCQ';
    if (typeText.includes('Numerical')) type = 'NAT';
    else if (typeText.includes('Multiple Select')) type = 'MSQ';
    
    // Extract text and handle images
    const $qTextContainer = $q.find('.res_question_text');
    
    // Images in question
    const qImages = $qTextContainer.find('img').toArray();
    for (const img of qImages) {
      const src = $(img).attr('src');
      if (src && src.startsWith('http')) {
        const ext = 'png';
        const filename = `q${num}_img${imageIndex++}.${ext}`;
        const filepath = path.join(imageDir, filename);
        await downloadImage(src, filepath);
        $(img).attr('src', `/images/quiz/wqt-dl1/${filename}`);
        $(img).removeAttr('width').removeAttr('height');
        $(img).css('max-width', '100%');
      }
    }
    
    // Convert mathjax previews back to readable text (optional, but keep it as is if there's script tags)
    // Actually the standard parser we used earlier just grabbed the raw html:
    // Remove the annoying MathJax_Preview and mjx-chtml spans and just keep the <script type="math/tex">
    $qTextContainer.find('.MathJax_Preview').remove();
    $qTextContainer.find('.mjx-chtml').remove();
    $qTextContainer.find('.MJX_Assistive_MathML').remove();
    
    // If it's a multiple choice, extract options
    const options = [];
    const $ol = $qTextContainer.find('ol').first();
    if ($ol.length > 0) {
      const $lis = $ol.find('> li').toArray();
      $lis.forEach(li => {
        options.push($(li).html().trim());
      });
      $ol.remove(); // Remove options from main text
    }
    
    let htmlContent = $qTextContainer.html().trim();
    
    // Answer
    const correctText = $q.find('.correct_solution').text();
    let answer = null;
    let correct = [];
    if (type === 'MCQ' || type === 'MSQ') {
      const ansMatch = correctText.match(/Correct Answer: ([A-Z, ]+)/);
      if (ansMatch) {
        const ansLetters = ansMatch[1].split(',').map(s => s.trim());
        if (type === 'MCQ') {
          answer = ansLetters[0]; // e.g., 'B'
        } else {
          answer = ansLetters; // e.g., ['A', 'C']
        }
      }
    } else if (type === 'NAT') {
      const ansMatch = correctText.match(/Correct Answer: ([\d.-]+)(?:\s*to\s*([\d.-]+))?/);
      if (ansMatch) {
        if (ansMatch[2]) {
          answer = [parseFloat(ansMatch[1]), parseFloat(ansMatch[2])];
        } else {
          answer = parseFloat(ansMatch[1]);
        }
      }
    }
    
    questions.push({
      num: parseInt(num),
      type: type,
      marks: marks,
      penalty: penalty,
      text: htmlContent,
      options: options.length > 0 ? options : undefined,
      answer: answer
    });
  }
  
  const jsContent = `
window.registerTest({
  series: "quiz",
  name: "WQT - Digital logic-1",
  questions: ${JSON.stringify(questions, null, 4)}
});
`;

  fs.appendFileSync('js/quiz-test-registry.src.js', jsContent);
  console.log('Done parsing ' + questions.length + ' questions!');
}

parse().catch(console.error);
