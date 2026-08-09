const fs = require('fs');
let registry = fs.readFileSync('js/quiz-test-registry.src.js', 'utf8');
let out5 = fs.readFileSync('scratch/out5.js', 'utf8');
registry += '\n\n' + out5 + '\n';
fs.writeFileSync('js/quiz-test-registry.src.js', registry);
console.log("Appended Aptitude test 5 to registry.");
