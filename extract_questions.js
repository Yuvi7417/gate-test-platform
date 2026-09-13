const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

(async () => {
  const htmlPath = path.join('h:','yuvraj dutt','test.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const $ = cheerio.load(html);
  const questions = [];

  const questionDivs = $('div.question').toArray();
  
  for (const el of questionDivs) {
    const qDiv = $(el);
    const qTextDiv = qDiv.find('.question_text');
    
    // Convert code blocks to prettyprint
    const preTags = qTextDiv.find('pre').toArray();
    for (const pre of preTags) {
        const preEl = $(pre);
        const codeEl = preEl.find('code');
        const rawCode = codeEl.length ? codeEl.html() : preEl.html();
        // Convert html entities back for rawcode attribute (simplified)
        const unescaped = rawCode.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
        preEl.empty();
        preEl.html(rawCode);
        preEl.attr('class', 'prettyprint linenums lang-c_cpp');
        preEl.attr('data-linenums', 'true');
        preEl.attr('data-pbcklang', 'c_cpp');
        preEl.attr('data-pbcktabsize', '');
        preEl.attr('dir', 'ltr');
        preEl.attr('data-rawcode', unescaped);
    }

    let qType = "MCQ";
    const typeLabel = qDiv.find('.question_type_labal').text();
    if (typeLabel.includes('NAT')) qType = "NAT";
    if (typeLabel.includes('MSQ')) qType = "MSQ";

    let marks = 1, neg = 0.33;
    if (typeLabel.includes('2 Marks')) { marks = 2; neg = 0.66; }
    if (qType === "NAT") neg = 0; 

    let qTextHtml = qTextDiv.html() || '';
    qTextHtml = qTextHtml.trim();

    let imagePath = '';
    const imgTags = qTextDiv.find('img').toArray();
    if (imgTags.length > 0) {
      for (const img of imgTags) {
        const src = $(img).attr('src');
        if (src && !src.startsWith('data:')) {
          const url = src;
          const imgName = path.basename(url.split('?')[0]);
          const relPath = path.posix.join('images', 'quiz', imgName);
          const destPath = path.join('h:','yuvraj dutt', relPath);
          const destDir = path.dirname(destPath);
          if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
          try {
            const res = await fetch(url);
            if (res.ok) {
              const fileStream = fs.createWriteStream(destPath);
              await new Promise((resolve, reject) => {
                res.body.pipe(fileStream);
                res.body.on('error', reject);
                fileStream.on('finish', resolve);
              });
              qTextHtml = qTextHtml.replace(url, relPath);
            }
          } catch (e) {}
        }
      }
    }

    const options = [];
    let answer = qDiv.attr('data-answer') || '';
    const ansRangeText = qDiv.find('.answer-range').text();
    if (ansRangeText) {
        const match = ansRangeText.match(/Answer Range:\s*([^\s]+)/i);
        if (match && match[1]) answer = match[1];
    }

    let solutionLink = '';
    const solAnchor = qDiv.find('.mtq_explanation-text a');
    if (solAnchor.length) solutionLink = solAnchor.attr('href');
    const solutionHtml = solutionLink ? `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="${solutionLink}" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>` : '';

    questions.push({
      marks: marks,
      neg: neg,
      type: qType,
      text: `\`<span style="display: inline;"> ${qTextHtml.replace(/`/g, '\\`')} </span>\``,
      image: imagePath,
      options,
      answer,
      solution: `\`${solutionHtml}\``,
    });
  }

  const regPath = path.join('h:','yuvraj dutt','js','questions','pw-test-registry.js');
  let regContent = fs.readFileSync(regPath, 'utf-8');
  
  // Replace the questions array specifically for 'TWT-c programming'
  const startRegex = /name:\s*"TWT-c programming"[\s\S]*?questions:\s*\[/;
  const match = regContent.match(startRegex);
  if (match) {
      const startIdx = match.index + match[0].length;
      let openBrackets = 1;
      let endIdx = startIdx;
      for (let i = startIdx; i < regContent.length; i++) {
          if (regContent[i] === '[') openBrackets++;
          if (regContent[i] === ']') openBrackets--;
          if (openBrackets === 0) {
              endIdx = i;
              break;
          }
      }
      
      const newArrayInner = '\n' + questions.map(q => {
          const opts = q.options.length ? q.options.map(o => `        \`${o}\``).join(',\n') : '';
          return `    {\n` +
            `      marks: ${q.marks},\n` +
            `      neg: ${q.neg},\n` +
            `      type: "${q.type}",\n` +
            `      text: ${q.text},\n` +
            `      image: "${q.image}",\n` +
            `      options: [\n${opts}\n      ],\n` +
            `      answer: "${q.answer}",\n` +
            `      solution: ${q.solution}\n` +
            `    }`;
      }).join(',\n') + '\n  ';
      
      regContent = regContent.slice(0, startIdx) + newArrayInner + regContent.slice(endIdx);
      fs.writeFileSync(regPath, regContent, 'utf-8');
      console.log(`Replaced registry block with ${questions.length} formatted questions.`);
  } else {
      console.log("Could not find TWT-c programming block");
  }
})();
