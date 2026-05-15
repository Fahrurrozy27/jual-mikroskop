const fs = require('fs');

const mapping = {
  'euromex-microblue': ['student'],
  'euromex-ecoblue': ['student'],
  'euromex-bioblue': ['student'],
  'euromex-bluescope': ['laboratory'],
  'euromex-stereoblue-edu': ['stereo', 'student'],
  'euromex-nexiuszoom': ['stereo'],
  'euromex-nexiuszoom-evo': ['stereo'],
  'euromex-ultrazoom': ['stereo'],
  'euromex-be-18': ['stereo'],
  'euromex-delphi-x-inv': ['laboratory', 'inverted'],
  'euromex-oxion-inv': ['laboratory', 'fluorescent', 'inverted']
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

for (const [slug, cats] of Object.entries(mapping)) {
  const regex = new RegExp('(\"id\": \"' + slug + '\"[\\s\\S]*?\"category\": )(\\[[^\\]]*\\])');
  const match = content.match(regex);
  if (match) {
    content = content.replace(regex, '$1' + JSON.stringify(cats, null, 6).replace(/\n/g, '\n    ').replace(/ {4}\]/, '    ]'));
  }
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Categories updated correctly!');
