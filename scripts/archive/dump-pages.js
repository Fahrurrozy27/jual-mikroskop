const fs = require('fs');
const txt = fs.readFileSync('olympus-specs-raw.txt', 'utf8');
const pages = txt.split('----------------Page');

// Dump pages 19-30 to a file for analysis
let output = '';
for (let i = 19; i <= 30; i++) {
  output += '\n\n========== PAGE INDEX ' + i + ' ==========\n';
  output += pages[i];
}
fs.writeFileSync('scripts/raw-pages-ix-dp.txt', output, 'utf8');
console.log('Dumped pages 19-30');
