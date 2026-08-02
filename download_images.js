const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const https = require('https');
const http = require('http');

const inputFile = process.argv[2];
const outDir = process.argv[3];

if (!inputFile || !outDir) {
    console.error("Usage: node download_images.js <input.html> <outDir>");
    process.exit(1);
}

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

let htmlRaw = fs.readFileSync(inputFile, 'utf8');
const $ = cheerio.load(htmlRaw);

const qDivs = $('.res_question').toArray();
let imageIndex = 1;
let downloadPromises = [];

for (const qDiv of qDivs) {
    const $q = $(qDiv);
    const num = $q.find('.res_qs_num b').text().replace('Q #', '').trim();
    const $qTextContainer = $q.find('.res_question_text');
    
    const qImages = $qTextContainer.find('img').toArray();
    for (const img of qImages) {
        const src = $(img).attr('src');
        if (src && src.startsWith('http')) {
            const ext = 'png';
            const filename = `q${num}_img${imageIndex++}.${ext}`;
            const filepath = path.join(outDir, filename);
            console.log(`Downloading ${src} to ${filepath}`);
            
            const client = src.startsWith('https') ? https : http;
            const p = new Promise((resolve, reject) => {
                client.get(src, (res) => {
                    if (res.statusCode !== 200) {
                        reject(new Error(`Failed to get '${src}' (${res.statusCode})`));
                        return;
                    }
                    const fileStream = fs.createWriteStream(filepath);
                    res.pipe(fileStream);
                    fileStream.on('finish', () => {
                        fileStream.close();
                        resolve();
                    });
                }).on('error', (err) => {
                    reject(err);
                });
            });
            downloadPromises.push(p);
        }
    }
}

Promise.all(downloadPromises).then(() => {
    console.log("All images downloaded successfully.");
}).catch((err) => {
    console.error("Error downloading some images:", err);
});
