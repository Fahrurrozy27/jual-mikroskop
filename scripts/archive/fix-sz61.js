const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const sz61Specs = {
  "Optical System": "Greenough type optical system",
  "Optical component": "Lead-free",
  "Zoom ratio": "SZ61: 1:6.7 (0.67X - 4.5X)\nSZ51: 1:5 (0.8X - 4.0X)",
  "Working distance": "110 mm",
  "Tube inclination angle": "45\u00B0 or 60\u00B0",
  "Video camera adaptability": "SZ61TR / SZ51TR: C-mount (0.5X built in)",
  "Auxiliary objective": "Mounting by screwing into the thread at the bottom of frame (M48 threadx0.75)",
  "Eyepiece": "WHSZ series",
  "Dimensions": "194 mm \u00D7 253 mm \u00D7 368 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
};

const regex = new RegExp('(id: "oly-sz61"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex, '$1' + JSON.stringify(sz61Specs));
fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed SZ61 specs.');
