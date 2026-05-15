const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../olympus-images');
const destDir = path.join(__dirname, '../public/images/products');

const pageToSlug = {
  7: 'cx23',
  8: 'cx33', // I'll use same for 43
  9: 'bx43',
  10: 'bx53',
  11: 'bx63',
  12: 'bx46',
  13: 'bx51wi',
  14: 'bx53-p',
  15: 'bx53led-mdo',
  16: 'sz61',
  17: 'szx7',
  18: 'szx16',
  19: 'szx10',
  20: 'ckx53',
  21: 'cm30',
  22: 'ix73',
  23: 'ix83',
  24: 'ix85',
  25: 'fv5000',
  26: 'ep50',
  27: 'lc35',
  28: 'dp23',
  29: 'dp28',
  30: 'dp75'
};

const files = fs.readdirSync(srcDir);

for (const [page, slug] of Object.entries(pageToSlug)) {
  const pageFiles = files.filter(f => f.startsWith(`img_p${page}_`));
  if (pageFiles.length === 0) continue;
  
  // Find largest file (usually the main product image)
  let largestFile = pageFiles[0];
  let maxSize = 0;
  for (const f of pageFiles) {
    const size = fs.statSync(path.join(srcDir, f)).size;
    if (size > maxSize) {
      maxSize = size;
      largestFile = f;
    }
  }
  
  // Copy it
  const destName = `olympus-${slug}.png`;
  fs.copyFileSync(path.join(srcDir, largestFile), path.join(destDir, destName));
  console.log(`Copied ${largestFile} to ${destName}`);
}
