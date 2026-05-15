const fs = require('fs');

const bx51wiSpecs = {
  "Illumination": "Transmitted light 12 V 100 W halogen K\u00F6hler illumination;\nLight adjustment: less than DC2 V~12 V (continuous adjustment)",
  "Focusing": "Nosepiece focus by roller guide;\nStroke per rotation: fine: 0.1 mm, coarse: 15 mm;\nMaximum stroke: 25 mm; Coarse lower limit stopper mechanism,\nTorque adjustment mechanism for coarse focus",
  "Nosepiece": "Swing, Slide, Single position, Swing-slide",
  "Stage": "Mechanical, bridge",
  "Observation tube": "magnification change unit (FN 22), Trinocular (FN 22), erect image trinocular (FN 22), double port",
  "Condenser": "8-position universal, long working distance oblique, long working distance DIC, swing-out",
  "Dimensions": "317.5 mm \u00D7 567 mm \u00D7 503.8 mm (Epifluorescence Configuration)\n(W \u00D7 D \u00D7 H)",
  "Weight": "19 kg (Epifluorescence Configuration)"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = new RegExp('(id: "oly-bx51wi"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex, '$1' + JSON.stringify(bx51wiSpecs));
fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed BX51WI specs.');
