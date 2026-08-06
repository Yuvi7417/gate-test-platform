const { execSync } = require('child_process');
const fs = require('fs');

const tests = [
  { file: 'test1.html', dir: 'wqt-dbms4', name: 'WQT - DBMS-4 | Normal Forms' },
  { file: 'test2.html', dir: 'wqt-dbms5', name: 'WQT - DBMS-5 | Normalization' },
  { file: 'test3.html', dir: 'wqt-dbms6', name: 'WQT - DBMS-6 | Normalization' },
  { file: 'test4.html', dir: 'wqt-dbms7', name: 'WQT - DBMS-7 | Relational Algebra' }
];

let allContent = '';

for (const t of tests) {
  console.log(`Processing ${t.file}...`);
  // parse_quiz
  execSync(`node parse_quiz.js "${t.file}" "temp_${t.dir}.js" "${t.dir}" "weekly-cs-gate-2027" "${t.name}"`, { stdio: 'inherit' });
  // read and append to allContent
  allContent += '\n\n' + fs.readFileSync(`temp_${t.dir}.js`, 'utf8');
  // delete temp file
  fs.unlinkSync(`temp_${t.dir}.js`);

  // download images
  console.log(`Downloading images for ${t.file}...`);
  execSync(`node download_images.js "${t.file}" "images/quiz/${t.dir}"`, { stdio: 'inherit' });
}

// Append all at once
const registryFile = 'js/quiz-test-registry.src.js';
let registry = fs.readFileSync(registryFile, 'utf8').trim();
fs.writeFileSync(registryFile, registry + allContent + '\n');

console.log('All tests appended to registry successfully.');
