const fs = require('fs');
const content = fs.readFileSync('src/data/products.ts', 'utf8');
const lines = content.split('\n');
for (let i = 700; i < lines.length; i++) {
  if (lines[i].includes('"slug": "euromex-')) {
    console.log(lines[i].trim());
    console.log(lines[i+1].trim());
    console.log(lines[i+2].trim());
    console.log(lines[i+3].trim());
  }
}
