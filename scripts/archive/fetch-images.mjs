import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import * as cheerio from 'cheerio';

const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'products');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function downloadAndConvert(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', async () => {
          try {
            const buffer = Buffer.concat(chunks);
            const outputPath = path.join(OUT_DIR, filename);
            await sharp(buffer)
              .resize(800, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
              .webp({ quality: 80 })
              .toFile(outputPath);
            console.log(`✅ Saved: ${filename}`);
            resolve(outputPath);
          } catch (err) {
            console.error(`❌ Error converting ${filename}:`, err.message);
            reject(err);
          }
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function scrapeOptoEdu() {
  const targetUrls = [
    'https://www.optoedu.com/a11-student-86.html',
    'https://www.optoedu.com/a12-laboratory-87.html',
    'https://www.optoedu.com/a23-continous-zoom-95.html',
    'https://www.optoedu.com/a3-digital-microscope-49.html',
    'https://www.optoedu.com/a13-metallurgical-88.html'
  ];

  let imageIndex = 1;
  const prefixes = ['student', 'lab', 'stereo', 'digital', 'metallurgical'];

  for (let i = 0; i < targetUrls.length; i++) {
    const pageUrl = targetUrls[i];
    const prefix = prefixes[i];
    console.log(`\nScraping ${pageUrl}...`);
    
    try {
      const response = await fetch(pageUrl);
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // OptoEdu product images usually inside product-item or similar. 
      // We'll just grab images that look like products (path contains /photo/)
      const images = [];
      $('img').each((_, el) => {
        const src = $(el).attr('src');
        if (src && src.includes('/photo/') && src.endsWith('.jpg')) {
          let fullUrl = src;
          if (!fullUrl.startsWith('http')) {
            fullUrl = `https://www.optoedu.com${fullUrl}`;
          }
          if (!images.includes(fullUrl)) {
            images.push(fullUrl);
          }
        }
      });

      console.log(`Found ${images.length} images for ${prefix}. Downloading up to 4...`);
      
      for (let j = 0; j < Math.min(images.length, 4); j++) {
        const filename = `${prefix}-${j + 1}.webp`;
        await downloadAndConvert(images[j], filename);
      }
    } catch (err) {
      console.error(`Failed to scrape ${pageUrl}:`, err.message);
    }
  }
}

scrapeOptoEdu().then(() => {
  console.log('\n🎉 Finished downloading and converting images.');
});
