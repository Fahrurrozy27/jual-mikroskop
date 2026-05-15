const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images/products');

async function enhanceImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('optilab-') && file.endsWith('.png')) {
      const inputPath = path.join(dir, file);
      const tempPath = path.join(dir, 'temp-' + file);
      
      console.log(`Enhancing ${file}...`);
      await sharp(inputPath)
        // Upscale slightly to make it crisp, or just sharpen
        .sharpen({ sigma: 1.5, m1: 1.2, m2: 0.8, x1: 2, y2: 10, y3: 20 })
        .normalize() // Enhances contrast
        .toFile(tempPath);
        
      fs.renameSync(tempPath, inputPath);
    }
  }
  console.log('All Optilab images enhanced!');
}

enhanceImages().catch(console.error);
