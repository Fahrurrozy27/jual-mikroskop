const fs = require('fs');

const ckx53Specs = {
  "Illumination": "Entry: Brightfield, Phase Contrast\nStandard: Brightfield, Phase Contrast, Fluorescence",
  "Focusing": "Revolving nosepiece vertical movement system using the coarse and fine focusing knobs.\nStroke: 20 mm (Focal point: up to 18.5 mm from the plain stage top surface)\nStroke per rotation: 36.8 mm (Coarse), 0.3 mm (Fine)",
  "Plain stage": "252 mm (D) \u00D7 200 mm (W)\nExchangeable transparent insert plate is incorporated\nXY coaxial knob place on right side of the plain stage",
  "Mechanical stage": "Microplate holder equipped with the escape function\nstage stroke: X = 110 mm, Y = 74 mm\nSubstage: 180 mm (D) \u00D7 70 mm (W)",
  "Condenser": "Maximum numerical aperture: 0.3\nWorking distance: 72 mm\nApplicable objective magnification 2X, 4X, 10X, 20X and 40X\nup to 190 mm height tissue flask can be loaded on the stage without detachable condenser",
  "Observation tube": "Fixed Trinocular tube, inclined 45 degrees\nInterpupillary distance 48 \u2013 75 mm\nLight path: eyepiece/camera port = 100/0 \u21D4 0/100",
  "Dimensions": "200 mm \u00D7 498 mm \u00D7 454 mm (Phase contrast entry configuration)\n(W \u00D7 D \u00D7 H)",
  "Weight": "6.9 kg / 7.1 kg / 8.4 kg / 12.5 kg"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = new RegExp('(id: "oly-ckx53"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex, '$1' + JSON.stringify(ckx53Specs));
fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed CKX53 specs.');
