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
    
    const metaText = $q.find('.res_qs_meta').text();
    const marksMatch = metaText.match(/Award:\s*([\d.]+)/i);
    const marks = marksMatch ? parseFloat(marksMatch[1]) : 1;
    const penaltyMatch = metaText.match(/Penalty:\s*([\d.]+)/i);
    const penalty = penaltyMatch ? parseFloat(penaltyMatch[1]) : 0;
    
    let type = 'MCQ';
    if (metaText.includes('Numerical')) type = 'NAT';
    else if (metaText.includes('Multiple Select')) type = 'MSQ';
    
    // Extract text and handle images
    const $qTextContainer = $q.find('.res_question_text');
    $qTextContainer.find('style').remove();
    $qTextContainer.find('.MathJax_Preview, .mjx-chtml, .MJX_Assistive_MathML, .MathJax, script[type^="math/tex"]').remove();
    
    // Images in question
    const qImages = $q.find('img').toArray();
    for (const img of qImages) {
      const src = $(img).attr('src');
      if (src) {
        let ext = src.split('.').pop().split('?')[0];
        if (!['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext.toLowerCase())) {
            ext = 'png';
        }
        const filename = `q_img${imageIndex++}.${ext}`;
        $(img).attr('src', `/images/quiz/${imgDir}/${filename}`);
        $(img).removeAttr('width').removeAttr('height');
        $(img).css('max-width', '75%');
      }
    }
    
    $qTextContainer.find('mjx-container').each(function() {
      const $math = $(this).find('math').first();
      if ($math.length > 0) {
         $(this).replaceWith($math.prop('outerHTML'));
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
    
    if (htmlContent.startsWith('<span style="display: inline;">') && htmlContent.endsWith('</span>')) {
        htmlContent = htmlContent.substring(31, htmlContent.length - 7);
    }
    
    // Answer
    // Answer
    const correctText = $q.find('.res_solution').text();
    let answer = null;
    if (type === 'MCQ' || type === 'MSQ') {
      const ansMatch = correctText.match(/Correct\s*Answer:\s*([A-D](?:[,\s;]+[A-D])*)/i);
      if (ansMatch) {
        const ansLetters = ansMatch[1].split(/[,;]/).map(s => s.trim().toUpperCase()).filter(s => s);
        if (type === 'MCQ') {
          answer = ansLetters[0]; 
        } else {
          answer = ansLetters; 
        }
      }
    } else if (type === 'NAT') {
      const ansMatch = correctText.match(/Correct\s*Answer:\s*([\d.-]+)(?:\s*to\s*([\d.-]+))?/i);
      if (ansMatch) {
        if (ansMatch[2]) {
          answer = [parseFloat(ansMatch[1]), parseFloat(ansMatch[2])];
        } else {
          answer = parseFloat(ansMatch[1]);
        }
      }
    }
    const $solutionContainer = $q.find('.res_actual_solution');
    $solutionContainer.find('h4').remove();
    let solutionHtml = $solutionContainer.html() ? $solutionContainer.html().trim() : '';
    solutionHtml = removeNewlinesOutsidePre(solutionHtml);
    if (solutionHtml.startsWith('<span style="display: inline;">') && solutionHtml.endsWith('</span>')) {
        solutionHtml = solutionHtml.substring(31, solutionHtml.length - 7);
    }
    
    questions.push({
      type: type,
      marks: marks,
      neg: penalty,
      text: escapeBackticks(htmlContent),
      options: options.map(opt => escapeBackticks(opt)),
      answer: answer,
      solution: escapeBackticks(solutionHtml)
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
    } else if (q.answer) {
        jsContent += `      answer: "${q.answer}",\n`;
    } else {
        jsContent += `      answer: "null",\n`;
    }
    
    jsContent += `      solution: \`${q.solution}\`\n`;
    jsContent += `    },\n`;
    qNum++;
  }
  
  jsContent += `  ]\n});\n`;
  
  fs.writeFileSync(outputFile, jsContent);
  console.log(`Successfully parsed ${inputFile} into ${outputFile}`);
}

parse().catch(console.error);
