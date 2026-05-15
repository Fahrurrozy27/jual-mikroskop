const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

content = content.replace(/specs:\s*\{([^}]+)\}/g, (match, inner) => {
  let newInner = inner.replace(/"([^"]+)":\s*"([^"]+)"/g, (m, k, v) => {
    let newV = v;
    
    // For these keys, we split by commas not in parens, and replace with newline (\n)
    if (['Objectives', 'Accessories', 'Observation Tube', 'Observation tube', 'Focusing', 'Stage', 'Illumination', 'Nosepiece'].includes(k)) {
      newV = newV.replace(/,\s*(?![^()]*\))/g, '\\n');
    }
    
    // Fix specific cases for Objectives
    if (k === 'Objectives') {
      newV = newV.replace(/(anti-fungus):?\s*(?=[^\n])/g, '$1\\n');
      newV = newV.replace(/(anti-fungus)\\n:\\n/g, '$1:\\n');
    }

    return `"${k}": "${newV}"`;
  });
  return `specs: {${newInner}}`;
});

fs.writeFileSync('src/data/products.ts', content);
console.log("Specs formatted with newlines!");
