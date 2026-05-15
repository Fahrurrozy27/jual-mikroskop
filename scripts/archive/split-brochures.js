const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const pageMapping = {
  "cx23": 5,
  "cx33": 6,
  "cx43": 6,
  "bx43": 7,
  "bx53": 8,
  "bx63": 9,
  "bx46": 10,
  "bx51wi": 11,
  "bx53p": 12,
  "bx53led": 13,
  "sz61": 14,
  "sz51": 14,
  "szx7": 15,
  "szx16": 16,
  "szx10": 17,
  "ckx53": 18,
  "ix73": 20,
  "ix83": 21,
  "ix85": 22,
  "fv5000": 23,
  "ep50": 24,
  "lc35": 25,
  "dp23": 26,
  "dp28": 27,
  "dp75": 28
};

async function splitPdf() {
  const sourcePdfPath = path.join(__dirname, '../katalog-olympus.pdf');
  const outDir = path.join(__dirname, '../public/brosur');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const existingPdfBytes = fs.readFileSync(sourcePdfPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  for (const [slug, pageIndex] of Object.entries(pageMapping)) {
    const newPdf = await PDFDocument.create();
    const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageIndex]);
    newPdf.addPage(copiedPage);
    const pdfBytes = await newPdf.save();
    fs.writeFileSync(path.join(outDir, `olympus-${slug}.pdf`), pdfBytes);
    console.log(`Saved olympus-${slug}.pdf`);
  }
}

splitPdf().catch(console.error);
