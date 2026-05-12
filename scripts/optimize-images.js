const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [
  path.join(__dirname, '../public/images/products'),
  path.join(__dirname, '../public/images/customers'),
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  let optimizedCount = 0;

  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const inputPath = path.join(dir, file);
        const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

        if (!fs.existsSync(outputPath)) {
          console.log(`Optimizing: ${file} -> WebP`);
          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);
          optimizedCount++;
        }
      }
    }
  }

  console.log(`Optimization complete! Processed ${optimizedCount} images.`);
}

optimizeImages().catch(console.error);
