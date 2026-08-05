const { execSync } = require('child_process');
const fs = require('fs');

const tests = [
  { file: 'test1.html', dir: 'wqt-toc5', name: 'WQT - Theory of Computation-5 | FA, CFL, DCFL' },
  { file: 'test2.html', dir: 'wqt-toc6', name: 'WQT - Theory of Computation-6 | Decidability' },
  { file: 'test3.html', dir: 'wqt-toc7', name: 'WQT - Theory of Computation-7 | Decidability' },
  { file: 'test4.html', dir: 'wqt-toc8', name: 'WQT - Theory of Computation-8 | Identify Class Language' }
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
