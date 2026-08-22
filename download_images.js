const fs = require('fs');
const path = require('path');
const https = require('https');
const cheerio = require('cheerio');

const inputFile = process.argv[2];
const imgDir = path.join(__dirname, 'images', 'quiz', process.argv[3]);

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

let htmlRaw = fs.readFileSync(inputFile, 'utf8');
const $ = cheerio.load(htmlRaw);

const qDivs = $('.res_question').toArray();
let imageIndex = 1;

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

async function run() {
    for (const qDiv of qDivs) {
        const $q = $(qDiv);
        const qImages = $q.find('.res_question_text img').toArray();
        for (const img of qImages) {
            const src = $(img).attr('src');
            if (src && src.startsWith('http')) {
                let ext = src.split('.').pop().split('?')[0];
                if (!['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext.toLowerCase())) ext = 'png';
                const filename = `q_img${imageIndex++}.${ext}`;
                const filepath = path.join(imgDir, filename);
                console.log(`Downloading ${src} to ${filepath}`);
                try {
                    await downloadImage(src, filepath);
                } catch (e) {
                    console.error("Error downloading:", e.message);
                }
            }
        }
        
        const sImages = $q.find('.res_actual_solution img').toArray();
        for (const img of sImages) {
            const src = $(img).attr('src');
            if (src && src.startsWith('http')) {
                let ext = src.split('.').pop().split('?')[0];
                if (!['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext.toLowerCase())) ext = 'png';
                const filename = `q_img${imageIndex++}.${ext}`;
                const filepath = path.join(imgDir, filename);
                console.log(`Downloading ${src} to ${filepath}`);
                try {
                    await downloadImage(src, filepath);
                } catch (e) {
                    console.error("Error downloading:", e.message);
                }
            }
        }
    }
    console.log("Image download complete.");
}

run();
