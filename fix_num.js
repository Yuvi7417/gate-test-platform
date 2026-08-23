const fs = require('fs');
let code = fs.readFileSync('h:\\yuvraj dutt\\js\\quiz-test-registry.src.js', 'utf8');
let i = 1;
code = code.replace(/\/images\/quiz\/wqt-aptitude-6\/ques_img\.png/g, () => '/images/quiz/wqt-aptitude-6/ques_img' + (i++) + '.png');
fs.writeFileSync('h:\\yuvraj dutt\\js\\quiz-test-registry.src.js', code);
console.log('Fixed numbering! ' + (i - 1) + ' matches replaced.');
