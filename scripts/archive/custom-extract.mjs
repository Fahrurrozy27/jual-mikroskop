import fs from 'fs';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';

const PDF_PATH = 'katalog-olympus.pdf';
const OUTPUT_DIR = 'olympus-images';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

async function extractImages() {
  const data = new Uint8Array(fs.readFileSync(PDF_PATH));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDocument = await loadingTask.promise;
  
  console.log(`PDF loaded. Total pages: ${pdfDocument.numPages}`);
  
  for (let pageNum = 7; pageNum <= 31; pageNum++) {
    try {
      console.log(`Processing page ${pageNum}...`);
      const page = await pdfDocument.getPage(pageNum);
      const ops = await page.getOperatorList();
      
      for (let i = 0; i < ops.fnArray.length; i++) {
        if (ops.fnArray[i] === pdfjsLib.OPS.paintImageXObject) {
          const imgIndex = ops.argsArray[i][0];
          try {
            const img = await page.objs.get(imgIndex);
            if (img && img.data && img.width && img.height) {
              // Usually img.data is a Uint8ClampedArray of raw pixels
              // img.kind indicates colorspace. 1 = grayscale, 2 = RGB, 3 = RGBA
              let channels = 3;
              if (img.kind === 1) channels = 1;
              if (img.kind === 3) channels = 4; // sometimes RGBA

              // Sharp requires a Buffer
              const pixelBuffer = Buffer.from(img.data);
              
              const filename = `${OUTPUT_DIR}/img_p${pageNum}_${imgIndex.replace(/[^a-zA-Z0-9]/g, '')}.png`;
              
              await sharp(pixelBuffer, {
                raw: {
                  width: img.width,
                  height: img.height,
                  channels: channels
                }
              }).toFile(filename);

              console.log(`Saved image ${filename}`);
            }
          } catch (e) {
            // Some objects might be problematic, just skip
          }
        }
      }
    } catch (e) {
      console.error(`Error on page ${pageNum}:`, e.message);
    }
  }
}

extractImages().catch(console.error);
