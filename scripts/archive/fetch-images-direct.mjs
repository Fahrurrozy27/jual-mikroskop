import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const OUT_DIR = path.join(process.cwd(), 'public', 'images', 'products');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function downloadAndConvert(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects if necessary, but CDN links should be direct
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
        console.error(`❌ Failed to download ${url}: ${response.statusCode}`);
        resolve(null);
      }
    }).on('error', (err) => {
      console.error(`❌ Error downloading ${url}:`, err.message);
      resolve(null);
    });
  });
}

const imagesToDownload = [
  // OptoEdu Real URLs
  { url: 'https://yunpan.cdn.site.joinf.com/2469193113797632/2023/05/80d614a8b5f72743504e0f8b12d53b72.jpg', name: 'lab-1.webp' },
  { url: 'https://yunpan.cdn.site.joinf.com/2469193113797632/2023/05/2a2b48ed914578ac561da846433d09a7.jpg', name: 'lab-2.webp' },
  { url: 'https://yunpan.cdn.site.joinf.com/2469193113797632/2025/09/6605f3df4c855201dc15d64b1f92d1d2.jpg', name: 'student-1.webp' },
  
  // Generic high-quality microscope placeholders from Unsplash (for the rest)
  { url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800&auto=format&fit=crop', name: 'digital-1.webp' },
  { url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop', name: 'stereo-1.webp' },
  { url: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800&auto=format&fit=crop', name: 'metallurgical-1.webp' },
  { url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop', name: 'polarizing-1.webp' },
  { url: 'https://images.unsplash.com/photo-1614935151651-0bea6508abb0?q=80&w=800&auto=format&fit=crop', name: 'fluorescence-1.webp' },
  { url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop', name: 'inverted-1.webp' }
];

async function run() {
  console.log(`Downloading ${imagesToDownload.length} images...`);
  for (const img of imagesToDownload) {
    await downloadAndConvert(img.url, img.name);
  }
  console.log('🎉 All done!');
}

run();
