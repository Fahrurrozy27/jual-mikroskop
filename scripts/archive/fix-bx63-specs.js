const fs = require('fs');

const bx63Specs = {
  "Illumination": "Built-in K\u00F6hler illumination for transmitted light, LED light intensity indicator, motorized field stop\nHigh color rendering index LED light source\n12 V 100 W halogen bulb (pre-centered)",
  "Focusing": "Built-in motorized nosepiece focus\nStroke: 20 mm, minimum increment: 0.01 \u03BCm, maximum speed: 5 mm/s",
  "Nosepiece": "Motorized septuple revolving nosepiece\nInterchangeable reversed coded septuple nosepiece",
  "Stage": "Ultrasonic stage (stroke: X: 76 mm \u00D7 Y: 52 mm, maximum speed: 30 mm/s)\nCeramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available\nCross stage with short left handle",
  "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield erect image trinocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular",
  "Condenser": "Motorized universal condenser (NA 0.9, motorized 8-position turret, aperture stop, polarizing filter in/out mechanism and top lens swing out mechanism), for 1.25X \u2013 100X [swing-out 1.25X \u2013 4X, with oil top lens: (NA 1.4)]\nSwing out Achromatic (NA 0.9), for 1.25X \u2013 100X (swing-out: 1.25X \u2013 4X)\nAchromatic Aplanatic (NA 1.4), for 10X \u2013 100X\nUniversal (NA 0.9), for 1.25X \u2013 100X [swing-out: 1.25X \u2013 4X, with oil top lens: (NA 1.4)]\nUltra low (NA 0.16), for 1.25X \u2013 4X\nDarkfield dry (NA 0.8 \u2013 0.92), for 10X \u2013 100X\nDarkfield oil (NA 1.20 \u2013 1.40), for 10X \u2013 100X",
  "Other features": "ND filter wheel, high-performance control box U-RTCE\nMotorized 9-position",
  "Dimensions": "294.5 mm \u00D7 740.5 mm \u00D7 582.5 mm (Epifluorescence configuration)\n(W \u00D7 D \u00D7 H)",
  "Weight": "35 kg (Epifluorescence configuration)"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');
const regex = new RegExp('(id: "oly-bx63"[\\s\\S]*?specs: )\\{([^}]*)\\}');
content = content.replace(regex, '$1' + JSON.stringify(bx63Specs));
fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Fixed BX63 specs.');
