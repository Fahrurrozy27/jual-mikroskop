const fs = require('fs');

const bx46Specs = {
  "Illumination": "Built-in K\u00F6hler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source",
  "Focusing": "Fixed low stage nosepiece focus\n15 mm focus stroke with coarse adjustment limit stop\nTorque adjustment for coarse adjustment knobs\nHigh sensitivity fine focusing knob (adjustment gradations: 1 \u03BCm)",
  "Nosepiece": "Fixed reversed coded quintuple nosepiece",
  "Stage": "Ceramic-coated coaxial stage with left or right hand ultra low drive control, rotating mechanism and torque adjustment mechanism (low torque, plain, and rotating stages are also available)",
  "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular\n(FN 22)",
  "Condenser": "Built-in condenser (NA 0.9) 1.25X \u2013 100X (swing out: 1.25X \u2013 2X)",
  "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm (Standard configuration)\n(W \u00D7 D \u00D7 H)",
  "Weight": "17 kg (Standard configuration)"
};

const bx51wiSpecs = {
  "Illumination": "Light adjustment: less than DC2 V~12 V (continuous adjustment)\nTransmitted light 12 V 100 W halogen K\u00F6hler illumination;",
  "Focusing": "Maximum stroke: 25 mm; Coarse lower limit stopper mechanism,\nTorque adjustment mechanism for coarse focus\nStroke per rotation: fine: 0.1 mm, coarse: 15 mm;\nNosepiece focus by roller guide;",
  "Nosepiece": "Swing, Slide, Single position, Swing-slide",
  "Stage": "Mechanical, bridge",
  "Observation tube": "Trinocular (FN 22), erect image trinocular (FN 22), double port\nmagnification change unit (FN 22)",
  "Condenser": "8-position universal, long working distance oblique, long working distance DIC, swing-out",
  "Dimensions": "317.5 mm \u00D7 567 mm \u00D7 503.8 mm (Epifluorescence Configuration)\n(W \u00D7 D \u00D7 H)",
  "Weight": "19 kg (Epifluorescence Configuration)"
};

const bx53pSpecs = {
  "Illumination": "High intensity high color rendering index LED, K\u00F6hler illumination",
  "Focusing": "Coarse & fine coaxial handle; full stroke: 25 mm;\nminimum fine adjustment: 1 \u03BCm",
  "Nosepiece": "Detachable quadruple nosepiece with centering adjustment function",
  "Stage": "Circular rotatable stage with centering adjustment function and attachable mechanical stage.\n360\u00B0 graduated in 1\u00B0 increments, lockable in any position",
  "Observation tube": "Trinocular (FN 22)",
  "Condenser": "Achromat strain-free condenser with built-in 360\u00B0 rotatable polarizer (NA 0.18 \u2013 0.9)",
  "Polarizing intermediate tube": "Swing-out focusable Bertrand lens with slot for 360\u00B0 rotatable analyzer for conoscopic & orthoscopic observation (U-CPA)",
  "Test plate": "1 wavelength (1\u03BB), 1/4 wavelength (1/4\u03BB)",
  "Compensators": "Berek, Senarmont, Brace-K\u00F6hler, quartz wedge, etc. (6 types available)",
  "Dimensions": "274 mm \u00D7 436 mm \u00D7 535 mm\n(W \u00D7 D \u00D7 H)",
  "Weight": "16 kg"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const regex46 = new RegExp('(id: "oly-bx46"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex46, '$1' + JSON.stringify(bx46Specs));

const regex51wi = new RegExp('(id: "oly-bx51wi"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex51wi, '$1' + JSON.stringify(bx51wiSpecs));

const regex53p = new RegExp('(id: "oly-bx53p"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex53p, '$1' + JSON.stringify(bx53pSpecs));

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed BX46, BX51WI, BX53-P specs.');
