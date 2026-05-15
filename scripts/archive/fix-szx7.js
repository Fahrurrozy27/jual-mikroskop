const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const szx7Specs = {
  "Optical System": "Galilean type optical system",
  "Zoom microscope body": "Zoom range 0.8X \u2013 5.6X (zoom ratio 1:7), Lead-free",
  "Observation tube": "1.SZX-BI45: 45\u00B0 binocular, 45\u00B0 inclination\n2.SZX2-TR30: 30\u00B0 trinocular, 30\u00B0 inclination\n3.SZX2-TR30PT: 30\u00B0 trinocular, 30\u00B0 inclination\n4.SZX2-LTTR: Ergonomic long tilting trinocular, 5 \u2013 45\u00B0 variable inclination\nInterpupillary distance adjustable range: 50 \u2013 76 mm\nAll observation tubes: Lead-free",
  "Extendable eyepoint adjuster": "SZX2-EEPA: Height adjustment range: 30 \u2013 150 mm (with a scale attached)",
  "Objectives": "DFPL0.5X-4, DFPL0.75X-4, DFPLAPO1X-4, SZX-ACH1X, DFPLAPO1.25X, SZX-ACH1.25X-2, DFPL1.5X-4, DFPL2X-4",
  "Eyepiece": "WHSZ series",
  "Dimensions": "194 mm \u00D7 253 mm \u00D7 403 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
};

const regex = new RegExp('(id: "oly-szx7"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex, '$1' + JSON.stringify(szx7Specs));
fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed SZX7 specs.');
