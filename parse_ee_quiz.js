const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const https = require('https');

const inputFile = process.argv[2];
const imgDirName = process.argv[3];
const imgDirPath = path.join(__dirname, 'images', 'quiz', imgDirName);

if (!fs.existsSync(imgDirPath)) {
    fs.mkdirSync(imgDirPath, { recursive: true });
}

async function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                   .on('error', reject)
                   .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
            }
        }).on('error', reject);
    });
}

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
    let htmlRaw = fs.readFileSync(inputFile, 'utf8');
    
    // MathJax formatting
    htmlRaw = htmlRaw.replace(/<script type="math\/tex".*?>(.*?)<\/script>/gs, (match, p1) => {
        let safeP1 = p1.replace(/\\/g, '\\\\').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `\\\\( ${safeP1} \\\\)`;
    });
    htmlRaw = htmlRaw.replace(/<script type="math\/tex; mode=display".*?>(.*?)<\/script>/gs, (match, p1) => {
        let safeP1 = p1.replace(/\\/g, '\\\\').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `\\$\\$ ${safeP1} \\$\\$`;
    });
    
    const $ = cheerio.load(htmlRaw);
    const qDivs = $('.res_question').toArray();
    let questions = [];
    let imageIndex = 1;

    for (const qDiv of qDivs) {
        const $q = $(qDiv);
        const metaText = $q.find('.res_qs_meta').text();
        
        const marksMatch = metaText.match(/Award:\s*([\d.]+)/i);
        const marks = marksMatch ? parseFloat(marksMatch[1]) : 1;
        
        let type = 'MCQ';
        if (metaText.includes('Numerical')) type = 'NAT';
        else if (metaText.includes('Multiple Select') || metaText.includes('MSQ')) type = 'MSQ';
        
        let neg = 0;
        if (type === 'MCQ') {
            neg = (marks === 1) ? 0.33 : 0.66;
        }

        const $qTextContainer = $q.find('.res_question_text');
        $qTextContainer.find('style').remove();
        $qTextContainer.find('.MathJax_Preview, .mjx-chtml, .MJX_Assistive_MathML, .MathJax, script[type^="math/tex"]').remove();

        // Download and rewrite images
        const qImages = $q.find('img').toArray();
        for (const img of qImages) {
            const src = $(img).attr('src');
            if (src && src.startsWith('http')) {
                let ext = src.split('.').pop().split('?')[0];
                if (!['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext.toLowerCase())) ext = 'png';
                const filename = `q_img${imageIndex++}.${ext}`;
                const filepath = path.join(imgDirPath, filename);
                await downloadImage(src, filepath);
                $(img).attr('src', `images/quiz/${imgDirName}/${filename}`);
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
                $ol.remove();
            }
        }

        let htmlContent = $qTextContainer.html().trim();
        htmlContent = removeNewlinesOutsidePre(htmlContent);
        if (htmlContent.startsWith('<span style="display: inline;">') && htmlContent.endsWith('</span>')) {
            htmlContent = htmlContent.substring(31, htmlContent.length - 7);
        }

        const correctText = $q.find('.res_solution').text();
        let answer = null;
        if (type === 'MCQ' || type === 'MSQ') {
            const ansMatch = correctText.match(/Correct\s*Answer:\s*([A-D](?:[,\s;]+[A-D])*)/i);
            if (ansMatch) {
                const ansLetters = ansMatch[1].split(/[,;]/).map(s => s.trim().toUpperCase()).filter(s => s);
                answer = type === 'MCQ' ? ansLetters[0] : ansLetters;
            }
        } else if (type === 'NAT') {
            const ansMatch = correctText.match(/Correct\s*Answer:\s*([\d.-]+)(?:\s*to\s*([\d.-]+))?/i);
            if (ansMatch) {
                answer = ansMatch[2] ? [parseFloat(ansMatch[1]), parseFloat(ansMatch[2])] : parseFloat(ansMatch[1]);
            }
        }

        const $solutionContainer = $q.find('.res_actual_solution');
        $solutionContainer.find('h4').remove();
        let solutionHtml = $solutionContainer.html() ? $solutionContainer.html().trim() : '';
        solutionHtml = removeNewlinesOutsidePre(solutionHtml);
        if (solutionHtml.startsWith('<span style="display: inline;">') && solutionHtml.endsWith('</span>')) {
            solutionHtml = solutionHtml.substring(31, solutionHtml.length - 7);
        }

        questions.push({ type, marks, neg, text: escapeBackticks(htmlContent), options: options.map(escapeBackticks), answer, solution: escapeBackticks(solutionHtml) });
    }

    // Sort: 1 mark first, then 2 marks
    questions.sort((a, b) => a.marks - b.marks);

    let jsContent = '';
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
        } else if (typeof q.answer === 'number' || q.answer) {
            jsContent += `      answer: "${q.answer}",\n`;
        } else {
            jsContent += `      answer: "null",\n`;
        }

        jsContent += `      solution: \`${q.solution}\`\n`;
        jsContent += `    },\n`;
    }

    const regFile = 'js/ee-test-registry.src.js';
    let regContent = fs.readFileSync(regFile, 'utf8');
    
    const newTest = `
registerTest({
  series: "ee-gate-pyq-2027",
  name: "EE - ",
  date: "March 07, 2026",
  questions: [
${jsContent}  ]
});
`;
    
    fs.writeFileSync(regFile, regContent + newTest, 'utf8');
    console.log("Parsing and downloading completed successfully. Appended to registry.");
}

parse().catch(console.error);
