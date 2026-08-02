const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const imgDir = process.argv[4];
const seriesName = process.argv[5];
const quizName = process.argv[6];
const dateStr = "Oct 01, 2026";

if (!inputFile || !outputFile || !imgDir || !seriesName || !quizName) {
    console.error("Usage: node parse_quiz.js <input.html> <output.js> <img-dir> <seriesName> <quizName>");
    process.exit(1);
}

let htmlRaw = fs.readFileSync(inputFile, 'utf8');
htmlRaw = htmlRaw.replace(/<script type="math\/tex".*?>(.*?)<\/script>/gs, (match, p1) => {
  let safeP1 = p1.replace(/\\/g, '\\\\').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `\\\\( ${safeP1} \\\\)`;
});
htmlRaw = htmlRaw.replace(/<script type="math\/tex; mode=display".*?>(.*?)<\/script>/gs, (match, p1) => {
  let safeP1 = p1.replace(/\\/g, '\\\\').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `\\$\\$ ${safeP1} \\$\\$`;
});
const $ = cheerio.load(htmlRaw);

const questions = [];
let imageIndex = 1;

function escapeBackticks(str) {
  return str.replace(/`/g, '\\`');
}

function removeNewlinesOutsidePre(html) {
    const parts = html.split(/(<pre[\s\S]*?<\/pre>)/g);
    for (let i = 0; i < parts.length; i++) {
        if (!parts[i].startsWith('<pre')) {
            parts[i] = parts[i].replace(/\r?\n\s*/g, ' ');
        }
    }
    return parts.join('');
}

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
        $(img).attr('src', `/images/quiz/${imgDir}/${filename}`);
        $(img).removeAttr('width').removeAttr('height');
        $(img).css('max-width', '75%');
      }
    }
    
    $qTextContainer.find('.MathJax_Preview').remove();
    $qTextContainer.find('.mjx-chtml').remove();
    $qTextContainer.find('.MJX_Assistive_MathML').remove();
    
    $qTextContainer.find('script[type^="math/tex"]').each(function() {
      const type = $(this).attr('type');
      let math = $(this).html();
      math = math.replace(/\\/g, '\\\\');
      
      if (type.includes('mode=display')) {
        $(this).replaceWith(`\\$\\$ ${math} \\$\\$`);
      } else {
        $(this).replaceWith(`\\\\( ${math} \\\\)`);
      }
    });
    
    // If it's a multiple choice, extract options
    const options = [];
    if (type === 'MCQ' || type === 'MSQ') {
      const $ol = $qTextContainer.find('ol').not('pre ol').last();
      if ($ol.length > 0) {
        const $lis = $ol.find('> li').toArray();
        $lis.forEach(li => {
          let optHtml = $(li).html().trim();
          optHtml = removeNewlinesOutsidePre(optHtml);
          options.push(optHtml);
        });
        $ol.remove(); // Remove options from main text
      }
    }
    
    let htmlContent = $qTextContainer.html().trim();
    htmlContent = removeNewlinesOutsidePre(htmlContent);
    
    // Answer
    const correctText = $q.find('.correct_solution').text();
    let answer = null;
    if (type === 'MCQ' || type === 'MSQ') {
      const ansMatch = correctText.match(/Correct Answer: ([A-Z, ;]+)/i);
      if (ansMatch) {
        const ansLetters = ansMatch[1].split(/[,;]/).map(s => s.trim().toUpperCase()).filter(s => s);
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
      type: type,
      marks: marks,
      neg: penalty,
      text: escapeBackticks(htmlContent),
      options: options.map(opt => escapeBackticks(opt)),
      answer: answer
    });
  }
  
  let jsContent = `registerTest({\n  series: "${seriesName}",\n  name: "${quizName}",\n  date: "${dateStr}",\n  questions: [\n`;
  
  let qNum = 1;
  for (const q of questions) {
    jsContent += `    {\n`;
    jsContent += `      marks: ${q.marks},\n`;
    jsContent += `      neg: ${q.neg},\n`;
    jsContent += `      type: "${q.type}",\n`;
    jsContent += `      text: \`${q.text}\`,\n`;
    jsContent += `      image: "",\n`;
    
    if (q.options && q.options.length > 0) {
      jsContent += `      options: [\n`;
      for (const opt of q.options) {
        jsContent += `        \`${opt}\`,\n`;
      }
      jsContent += `      ],\n`;
    } else if (q.type === 'MCQ' || q.type === 'MSQ') {
      jsContent += `      options: ["A", "B", "C", "D"],\n`;
    } else {
      jsContent += `      options: [],\n`;
    }
    
    if (Array.isArray(q.answer)) {
        if (q.type === 'NAT') {
            jsContent += `      answer: [${q.answer.join(', ')}],\n`;
        } else {
            jsContent += `      answer: [${q.answer.map(a => `"${a}"`).join(', ')}],\n`;
        }
    } else if (typeof q.answer === 'number') {
        jsContent += `      answer: "${q.answer}",\n`;
    } else {
        jsContent += `      answer: "${q.answer}",\n`;
    }
    
    jsContent += `      solution: \`<img src="/images/quiz/${imgDir}/${qNum}.png" style="max-width: 75%;">\`\n`;
    jsContent += `    },\n`;
    qNum++;
  }
  
  jsContent += `  ]\n});\n`;
  
  fs.writeFileSync(outputFile, jsContent);
  console.log(`Successfully parsed ${inputFile} into ${outputFile}`);
}

parse().catch(console.error);
