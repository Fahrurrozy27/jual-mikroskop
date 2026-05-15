const fs = require('fs');

const szx16Specs = {
  "Optical system": "Telescope type system",
  "Zoom range": "0.7X \u2013 11.5X (zoom ratio 1: 16.4)",
  "Total mag. range": "2.1X \u2013 690X (with SDFPLAPO2XPFC)",
  "Aperture diaphragm": "Built-in",
  "Zoom click stop": "Click stop equipped (releasable)",
  "Working distance": "141 mm (with SDFPLFL0.3X) \u2013 20 mm (with SDFPLAPO2XPFC)",
  "Observation tube": "SZX2-TR30/SZX2-TR30PT: 30 degree trinocular, 30\u00B0 inclination\nSZX2-TTR/SZX2-TTRPT: tilting trinocular, 5 \u2013 45\u00B0 variable inclination\nSZX-BI45: 45\u00B0 binocular, 45\u00B0 inclination\nSZX-BI30: 30\u00B0 binocular, 30\u00B0 inclination\nSZX2-LTTR: Ergonomic long tilting trinocular, 5 \u2013 45\u00B0 variable inclination",
  "Extendable eyepoint adjuster": "SZX2-EEPA: Height adjustment range: 30 \u2013 150 mm (with a scale attached)",
  "Objective": "SDFPLAPO2XPFC, SDFPLAPO1.6XPF, SDFPLAPO1XPF, SDFPLAPO0.8X, SDFPLAPO0.5XPF, SDFLPLFL0.3X",
  "Eyepiece": "WHN10X-H (FN 22), WHSZ10X-H (FN 22), WHSZ15X-H (FN 16), WHSZ20X-H (FN 12.5), WHSZ30X-H (FN 7)",
  "Focusing": "SZX2-FOA: Motorized focus unit, focusing stroke 78 mm\nSZX2-FOFH: Fine focusing unit for heavy loading, stroke 80 mm\nSZX2-FOF: Fine focusing unit, coarse handle stroke 80 mm, fine handle stroke 80 mm\nSZX2-FO: Focusing unit, coarse handle stroke 80 mm",
  "Accessories": "Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.",
  "Dimensions": "268 mm \u00D7 386 mm \u00D7 413 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
};

const szx10Specs = {
  "Optical system": "Telescope type system",
  "Zoom range": "0.63X \u2013 6.3X (zoom ratio 1: 10.0)",
  "Total mag. range": "3.15X \u2013 378X (with DFPL2X-4)",
  "Aperture diaphragm": "Built-in",
  "Zoom click stop": "Click stop equipped (releasable)",
  "Working distance": "171 mm (with DFPL 0.5X) \u2013 33.5 mm (with DFPL2X-4)",
  "Observation tube": "SZX2-TR30/SZX2-TR30PT: 30 degree trinocular, 30\u00B0 inclination\nSZX2-TTR/SZX2-TTRPT: tilting trinocular, 5 \u2013 45\u00B0 variable inclination\nSZX-BI45: 45\u00B0 binocular, 45\u00B0 inclination\nSZX-BI30: 30\u00B0 binocular, 30\u00B0 inclination\nSZX2-LTTR: Ergonomic long tilting trinocular, 5 \u2013 45\u00B0 variable inclination",
  "Extendable eyepoint adjuster": "SZX2-EEPA: Height adjustment range: 30 \u2013 150 mm (with a scale attached)",
  "Objective": "DFPL1.5X-4, DFPL2X-4, DFPLAPO1.25X, SZX-ACH1.25X-2, DFPLAPO1X-4, SZX-ACH1X, DFPL0.5X-4, DFPL0.75X-4",
  "Eyepiece": "WHN10X-H (FN 22), WHSZ10X-H (FN 22), WHSZ15X-H (FN 16), WHSZ20X-H (FN 12.5), WHSZ30X-H (FN 7)",
  "Focusing": "SZX2-FOA: Motorized focus unit, focusing stroke 78 mm\nSZX2-FOFH: Fine focusing unit for heavy loading, stroke 80 mm\nSZX2-FOF: Fine focusing unit, coarse handle stroke 80 mm, fine handle stroke 80 mm\nSZX2-FO: Focusing unit, coarse handle stroke 80 mm",
  "Accessories": "Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.",
  "Dimensions": "268 mm \u00D7 386 mm \u00D7 410 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const regex16 = new RegExp('(id: "oly-szx16"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex16, '$1' + JSON.stringify(szx16Specs));

const regex10 = new RegExp('(id: "oly-szx10"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex10, '$1' + JSON.stringify(szx10Specs));

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed SZX16 and SZX10 specs.');
