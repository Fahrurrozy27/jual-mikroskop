const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const updates = {
  'oly-cx23': 'student',
  'oly-bx53': 'fluorescent',
  'oly-bx53p': 'polarizing',
  'oly-ckx53': 'inverted',
  'oly-ix73': 'inverted',
  'oly-ix83': 'inverted',
  'oly-ix85': 'inverted',
  'oly-fv5000': 'fluorescent'
};

for (const [id, newCat] of Object.entries(updates)) {
  const regex = new RegExp('id: "' + id + '"([\\s\\S]*?)category: "[^"]+"');
  content = content.replace(regex, 'id: "' + id + '"$1category: "' + newCat + '"');
}

// Any remaining "industrial" should be "laboratory"
content = content.replace(/category: "industrial"/g, 'category: "laboratory"');
content = content.replace(/category: "digital"/g, 'category: "digital"'); // keep digital

fs.writeFileSync('src/data/products.ts', content);
