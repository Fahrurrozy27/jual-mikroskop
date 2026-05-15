const fs = require('fs');
const path = require('path');
const https = require('https');

const articlesDir = path.join(__dirname, '../src/data/articles');
const imagesDir = path.join(__dirname, '../public/images/articles');

// Create directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 5 High quality Wikimedia Commons images (direct jpeg links)
const imageUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Microscope-p1040294.jpg/800px-Microscope-p1040294.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Olympus_BX51_microscope.jpg/800px-Olympus_BX51_microscope.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Confocal_microscope_with_a_fluorescence_microscope.jpg/800px-Confocal_microscope_with_a_fluorescence_microscope.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Optical_microscope_nikon_alphaphot_%2B.jpg/800px-Optical_microscope_nikon_alphaphot_%2B.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Laboratory_of_Neurobiology_%289131649988%29.jpg/800px-Laboratory_of_Neurobiology_%289131649988%29.jpg"
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    };
    https.get(url, options, (res) => {
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
  console.log('Downloading images...');
  for (let i = 0; i < imageUrls.length; i++) {
    const p = path.join(imagesDir, `microscope-${i + 1}.jpg`);
    try {
      await downloadImage(imageUrls[i], p);
      console.log(`Downloaded microscope-${i + 1}.jpg`);
    } catch(err) {
      console.error(`Failed to download ${imageUrls[i]}`, err);
    }
  }
}

run();
