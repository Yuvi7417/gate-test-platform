const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'test-registry.src.js');
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

const mappings = [
    { name: 'TWT - Theory of Computation-1', folder: 'twt_toc1' },
    { name: 'TWT - Theory of Computation-2', folder: 'twt_toc2' },
    { name: 'TWT - Theory of Computation-3', folder: 'twt_toc3' },
    { name: 'TWT - Theory of Computation-4', folder: 'twt_toc4' },
    { name: 'TWT - Theory of Computation-5', folder: 'twt_toc5' },
    { name: 'TWT - Theory of Computation-6', folder: 'twt_toc6' },
    { name: 'TWT - Aptitude-1', folder: 'twt_apt1' },
    { name: 'TWT - Aptitude-2', folder: 'twt_apt2' },
    { name: 'TWT - Aptitude-3', folder: 'twt_apt3' },
    { name: 'TWT - Aptitude-4', folder: 'twt_apt4' },
    { name: 'TWT - Aptitude-5', folder: 'twt_apt5' },
    { name: 'TWT - Aptitude-6', folder: 'twt_apt6' },
    { name: 'TWT - Aptitude-7', folder: 'twt_apt7' },
    { name: 'TWT - Aptitude-8', folder: 'twt_apt8' },
    { name: 'TWT - Aptitude-9', folder: 'twt_apt9' },
    { name: 'TWT - Aptitude-10', folder: 'twt_apt10' }
];

let currentFolder = null;
let imgIndex = 1;
let inTargetSection = false;

for (let i = 50000; i < lines.length; i++) {
    let line = lines[i];
    
    // Check if line contains a test name
    let match = line.match(/name:\s*"([^"]+)"/);
    if (match) {
        let testName = match[1];
        let mapping = mappings.find(m => m.name === testName);
        if (mapping) {
            currentFolder = mapping.folder;
            imgIndex = 1;
            inTargetSection = true;
            console.log(`Found test: ${testName}, mapping to folder: ${currentFolder}`);
        } else {
            // Not a target test
            if (inTargetSection) {
                console.log(`Exiting target section at test: ${testName}`);
                inTargetSection = false;
            }
            currentFolder = null;
        }
    }
    
    if (inTargetSection && currentFolder) {
        if (line.includes('solution: ``') || line.includes('solution: ""') || line.includes("solution: ''")) {
            // Check if there is an image for this index
            const imgPath = path.join(__dirname, 'images', currentFolder, `${imgIndex}.png`);
            if (fs.existsSync(imgPath)) {
                lines[i] = line.replace(/solution:\s*(``|""|'')/, `solution: \`<img src="images/${currentFolder}/${imgIndex}.png" style="width:75%;">\``);
                console.log(`Updated solution for ${currentFolder} Q${imgIndex}`);
                imgIndex++;
            } else {
                console.log(`Warning: Image not found for ${currentFolder} Q${imgIndex} at ${imgPath}`);
                imgIndex++; // Still increment to keep sync? Wait, maybe just warn.
            }
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("Done.");
