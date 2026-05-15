const fs = require('fs');

const models = [
  {
    slug: "bx43",
    specs: {
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper, Torque adjustment for coarse adjustment knobs, Stage mounting position variable, High sensitivity fine focusing knob (minimum adjustment gradations: 1 \u03BCm)",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece",
      "Stage": "Ceramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available (non-stick grooved coaxial, plain, rotatable stages are also available)",
      "Observation tube": "Widefield tilting, telescopic and lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular",
      "Condenser": "Abbe (NA 1.1), for 4X \u2013 100X\nSwing out Achromatic (NA 0.9), for 1.25X \u2013 100X (swing-out: 1.25X \u2013 4X)\nAchromatic Aplanatic (NA 1.4), for 10X \u2013 100X\nPhase contrast, darkfield (NA 1.1), [phase contrast: for 10X \u2013 100X, darkfield: for 10X \u2013 100X (up to NA 0.80)]\nUniversal (NA 0.9), for 1.25X \u2013 100X [swing-out: 1.25X \u2013 4X, with oil top lens: (NA 1.4)]\nLow (NA 0.75), for 2X \u2013 100X (Dry)\nUltra low (NA 0.16), for 1.25X \u2013 4X\nDarkfield dry (NA 0.8 \u2013 0.92), for 10X \u2013 100X\nDarkfield oil (NA 1.20 \u2013 1.40), for 10X \u2013 100X",
      "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm (Standard configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "13.2 kg (Standard configuration)"
    }
  },
  {
    slug: "bx53",
    specs: {
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light, Light preset switch, LED light intensity indicator, Built-in filters (LBD-IF, ND6, ND25, optional) high color rendering index LED",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper, Torque adjustment for coarse adjustment knobs, Stage mounting position variable, High sensitivity fine focusing knob (minimum adjustment gradations: 1 \u03BCm)",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece\nMotorized 9-position",
      "Stage": "Ceramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available",
      "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular",
      "Condenser": "Abbe (NA 1.1), for 4X \u2013 100X\nSwing out Achromatic (NA 0.9), for 1.25X \u2013 100X (swing-out: 1.25X \u2013 4X)\nAchromatic Aplanatic (NA 1.4), for 10X \u2013 100X\nPhase contrast, darkfield (NA 1.1), [phase contrast: for 10X \u2013 100X, darkfield: for 10X \u2013 100X (up to NA 0.80)]\nUniversal (NA 0.9), for 1.25X \u2013 100X [swing-out: 1.25X \u2013 4X, with oil top lens: (NA 1.4)]\nLow (NA 0.75), for 2X \u2013 100X (Dry)\nUltra low (NA 0.16), for 1.25X \u2013 4X\nDarkfield dry (NA 0.8 \u2013 0.92), for 10X \u2013 100X\nDarkfield oil (NA 1.20 \u2013 1.40), for 10X \u2013 100X",
      "Dimensions": "274.5 mm \u00D7 614 mm \u00D7 469 mm (Epifluorescence configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "21 kg (Epifluorescence configuration)"
    }
  },
  {
    slug: "bx63",
    specs: {
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light, LED light intensity indicator, motorized field stop\nHigh color rendering index LED light source\n12 V 100 W halogen bulb (pre-centered)",
      "Focusing": "Built-in motorized nosepiece focus\nStroke: 20 mm, minimum increment: 0.01 \u03BCm, maximum speed: 5 mm/s",
      "Nosepiece": "Motorized septuple revolving nosepiece\nInterchangeable reversed coded septuple nosepiece",
      "Stage": "Ultrasonic stage (stroke: X: 76 mm \u00D7 Y: 52 mm, maximum speed: 30 mm/s)\nCeramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available\nCross stage with short left handle",
      "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield erect image trinocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular",
      "Condenser": "Motorized universal condenser (NA 0.9, motorized 8-position turret, aperture stop, polarizing filter in/out mechanism and top lens swing out mechanism), for 1.25X \u2013 100X [swing-out 1.25X \u2013 4X, with oil top lens: (NA 1.4)]",
      "Dimensions": "294.5 mm \u00D7 740.5 mm \u00D7 582.5 mm (Epifluorescence configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "35 kg (Epifluorescence configuration)"
    }
  },
  {
    slug: "bx46",
    specs: {
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper\nTorque adjustment for coarse adjustment knobs",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple nosepiece",
      "Stage": "Low-positioned ceramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism",
      "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield tilting binocular",
      "Condenser": "Abbe (NA 1.1), for 4X \u2013 100X\nSwing out Achromatic (NA 0.9), for 1.25X \u2013 100X",
      "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm\n(W \u00D7 D \u00D7 H)",
      "Weight": "12.8 kg"
    }
  },
  {
    slug: "bx51wi",
    specs: {
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source",
      "Focusing": "Fixed low stage nosepiece focus\n15 mm focus stroke with coarse adjustment limit stop\nTorque adjustment for coarse adjustment knobs\nHigh sensitivity fine focusing knob (adjustment gradations: 1 \u03BCm)",
      "Nosepiece": "Fixed reversed coded quintuple nosepiece",
      "Stage": "Ceramic-coated coaxial stage with left or right hand ultra low drive control, rotating mechanism and torque adjustment mechanism (low torque, plain, and rotating stages are also available)",
      "Observation tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular",
      "Condenser": "Built-in condenser (NA 0.9) 1.25X \u2013 100X (swing out: 1.25X \u2013 2X)",
      "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm (Standard configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "17 kg (Standard configuration)"
    }
  },
  {
    slug: "bx53p",
    specs: {
      "Illumination": "12V 100W halogen or LED transmitted light",
      "Focusing": "Coarse & fine coaxial handle; full stroke: 25 mm; minimum fine adjustment: 1 \u03BCm",
      "Nosepiece": "Detachable quadruple nosepiece with centering adjustment function",
      "Stage": "Circular rotatable stage with centering adjustment function and attachable mechanical stage. 360\u00B0 graduated in 1\u00B0 increments, lockable in any position",
      "Observation tube": "Trinocular (FN 22)",
      "Condenser": "Achromat strain-free condenser with built-in 360\u00B0 rotatable polarizer (NA 0.18 \u2013 0.9)",
      "Polarizer/Analyzer": "360\u00B0 rotatable analyzer\n360\u00B0 rotatable polarizer with scale",
      "Compensator": "Test plate 1 wavelength (1\u03BB), 1/4 wavelength (1/4\u03BB)\nBerek, Senarmont, Brace-K\u00F6hler, quartz wedge, etc.",
      "Dimensions": "274 mm \u00D7 436 mm \u00D7 535 mm\n(W \u00D7 D \u00D7 H)",
      "Weight": "16 kg"
    }
  },
  {
    slug: "bx53led",
    specs: {
      "Illumination": "High-intensity 14-LED light source specifically designed to maintain brightness across all viewing heads",
      "Configuration": "Base BX53/BX43 microscope with Multi-Discussion attachments",
      "Observers": "Configurations available from 2 up to 26 observers",
      "Pointer": "LED pointer with adjustable brightness and multiple colors (arrow shape)",
      "Observation tube": "Binocular or Trinocular for each observer"
    }
  },
  {
    slug: "sz61",
    specs: {
      "Optical system": "Greenough type optical system",
      "Zoom ratio": "SZ61: 1:6.7 (0.67X - 4.5X)\nSZ51: 1:5 (0.8X - 4.0X)",
      "Working distance": "110 mm",
      "Tube inclination angle": "45\u00B0 or 60\u00B0",
      "Video camera adaptability": "SZ61TR / SZ51TR: C-mount (0.5X built in)",
      "Dimensions": "194 mm \u00D7 253 mm \u00D7 368 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
    }
  },
  {
    slug: "szx7",
    specs: {
      "Optical system": "Galilean type optical system",
      "Zoom microscope body": "Zoom range 0.8X \u2013 5.6X (zoom ratio 1:7)",
      "Observation tube": "1.SZX-BI45: 45\u00B0 binocular, 45\u00B0 inclination\n2.SZX2-TR30: 30\u00B0 trinocular, 30\u00B0 inclination\n3.SZX2-TR30PT: 30\u00B0 trinocular, 30\u00B0 inclination\n4.SZX2-LTTR: Ergonomic long tilting trinocular, 5 \u2013 45\u00B0 variable inclination\nInterpupillary distance adjustable range: 50 \u2013 76 mm\nSZX2-EEPA: Height adjustment range: 30 \u2013 150 mm eyepoint adjuster",
      "Objectives": "DFPL0.5X-4, DFPL0.75X-4, DFPLAPO1X-4, SZX-ACH1X, DFPLAPO1.25X, SZX-ACH1.25X-2, DFPL1.5X-4, DFPL2X-4",
      "Eyepiece": "WHSZ series",
      "Dimensions": "194 mm \u00D7 253 mm \u00D7 403 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
    }
  },
  {
    slug: "szx16",
    specs: {
      "Optical system": "Galilean type optical system",
      "Zoom ratio": "16.4:1 (0.7X - 11.5X)",
      "Observation tube": "Trinocular\nTilting binocular\nAdvanced tilting trinocular",
      "Objectives": "SDFPLAPO2.5X, SDFPLAPO2X, SDFPLAPO1.6X, SDFPLAPO1X, SDFPLAPO0.8X, SDFPLAPO0.5X",
      "Focusing": "SZX2-FOA: Motorized focus unit, focusing stroke 78 mm\nSZX2-FOFH: Fine focusing unit for heavy loading, stroke 80 mm\nSZX2-FOF: Fine focusing unit, coarse handle stroke 80 mm, fine handle stroke 80 mm\nSZX2-FO: Focusing unit, coarse handle stroke 80 mm",
      "Accessories": "Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.",
      "Dimensions": "268 mm \u00D7 386 mm \u00D7 413 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
    }
  },
  {
    slug: "szx10",
    specs: {
      "Optical system": "Galilean type optical system",
      "Zoom ratio": "10:1 (0.63X - 6.3X)",
      "Observation tube": "Trinocular, tilting binocular",
      "Objectives": "DFPLAPO1X, DFPLAPO1.2X, SZX-ACH1X, DFPL0.75X, DFPL0.5X",
      "Focusing": "Manual coarse and fine focus",
      "Accessories": "Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.",
      "Dimensions": "268 mm \u00D7 386 mm \u00D7 410 mm (Standard Set Configuration)\n(W \u00D7 D \u00D7 H)"
    }
  },
  {
    slug: "ckx53",
    specs: {
      "Optical system": "UIS2 infinity-corrected system",
      "Observation tube": "Binocular\nTrinocular (tilting optional)",
      "Stage": "Plain stage with various specimen holders (multi-well plates, petri dishes, flasks)\nOptional mechanical stage",
      "Condenser": "Detachable ultra-long working distance condenser (NA 0.3, W.D. 72 mm)",
      "Focusing": "Coaxial coarse and fine focus, roller guide mechanism",
      "Illumination": "Long-life LED transmitted illumination",
      "Dimensions": "227 mm \u00D7 352 mm \u00D7 454 mm\n(W \u00D7 D \u00D7 H)",
      "WeightApprox.": "3.1 kg (6.8 lb)"
    }
  },
  {
    slug: "ix73",
    specs: {
      "Observation tube": "Binocular\nTrinocular\nTilting binocular",
      "Stage": "Mechanical stage\nMotorized stage\nGliding stage",
      "Condenser": "Long working distance (NA 0.3/0.55)\nUltra-long working distance",
      "Focusing": "Manual coaxial coarse and fine focus",
      "Illumination": "100W halogen\nLED transmitted light\nVarious fluorescence illuminators"
    }
  },
  {
    slug: "ix83",
    specs: {
      "Observation tube": "Binocular\nTrinocular\nTilting binocular",
      "Stage": "Ultrasonic motorized stage\nMechanical stage",
      "Condenser": "Motorized long working distance condenser",
      "Focusing": "Motorized Z-drive with 0.01 \u03BCm step size",
      "Illumination": "Motorized transmitted and reflected light systems",
      "System Control": "Touch panel controller\ncellSens software"
    }
  },
  {
    slug: "ix85",
    specs: {
      "Frame Design": "Open-stand architecture with multiple ports and expanded deck capacity",
      "Focusing": "Ultra-precise motorized Z-drive",
      "Z-Drift": "Advanced real-time Z-drift compensation hardware"
    }
  },
  {
    slug: "fv5000",
    specs: {
      "Scanner Type": "Galvanometer scanner\nOptional resonant scanner",
      "Detectors": "High-sensitivity GaAsP photomultiplier tubes (PMT)\nMultialkali PMTs",
      "Lasers": "Multiple solid-state laser lines (405, 445, 488, 514, 561, 640 nm, etc.)",
      "Resolution": "Super-resolution module available (FV-OSR)",
      "Frame": "Upright (BX63) or Inverted (IX83) configuration"
    }
  },
  {
    slug: "ep50",
    specs: {
      "Sensor": "1/1.8 inch CMOS",
      "Resolution": "5.0 Megapixels (2592 \u00D7 1944)",
      "Frame Rate": "Up to 60 fps at Full HD (via HDMI)\nUp to 30 fps via WLAN",
      "Output Interfaces": "HDMI, WLAN, USB 2.0, Ethernet",
      "Storage": "SD Card slot",
      "Software": "On-screen display (OSD) software\nEPview app for mobile devices"
    }
  },
  {
    slug: "lc35",
    specs: {
      "Sensor": "1/2.5 inch CMOS",
      "Resolution": "3.5 Megapixels",
      "Frame Rate": "Up to 40 fps at full resolution",
      "Output Interfaces": "USB 3.1 Gen 1",
      "Color Depth": "12-bit",
      "Software": "cellSens / OLYMPUS Stream"
    }
  },
  {
    slug: "dp23",
    specs: {
      "Sensor": "1/1.8 inch CMOS",
      "Resolution": "6.4 Megapixels (3088 \u00D7 2076)",
      "Frame Rate": "Up to 60 fps at full resolution",
      "Output Interfaces": "USB 3.1 Gen 1",
      "Color Depth": "12-bit",
      "Software": "cellSens / OLYMPUS Stream"
    }
  },
  {
    slug: "dp28",
    specs: {
      "Sensor": "1 inch CMOS",
      "Resolution": "8.9 Megapixels (4K UHD: 4096 \u00D7 2160)",
      "Frame Rate": "Up to 32 fps at 4K resolution",
      "Output Interfaces": "USB 3.1 Gen 1",
      "Color Depth": "12-bit",
      "Software": "cellSens / OLYMPUS Stream"
    }
  },
  {
    slug: "dp75",
    specs: {
      "Sensor": "High-sensitivity CMOS",
      "Resolution": "High-resolution multi-axis shift technology",
      "Imaging Modes": "Color (brightfield) and Monochrome (fluorescence)",
      "Cooling": "Active cooling for low-noise fluorescence imaging",
      "Output Interfaces": "High-speed USB"
    }
  }
];

let content = fs.readFileSync('src/data/products.ts', 'utf8');

models.forEach(model => {
  const regex = new RegExp('(id: "oly-' + model.slug + '"[\\s\\S]*?specs: )\\{([^}]*)\\}');
  const match = content.match(regex);
  if (match) {
    const newSpecs = JSON.stringify(model.specs);
    content = content.replace(regex, '$1' + newSpecs);
  }
});

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Done fixing all specs.');
