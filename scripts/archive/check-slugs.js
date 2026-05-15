const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');
const olympusMatch = content.match(/\/\/ ===== OLYMPUS CATALOG PRODUCTS =====[\s\S]+/);
if (olympusMatch) {
  const slugs = [];
  const regex = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = regex.exec(olympusMatch[0])) !== null) {
    slugs.push(m[1]);
  }
  console.log(slugs.join(', '));
}
