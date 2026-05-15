const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// The file currently has garbled characters. We'll try to replace them or just completely re-inject the models with Unicode escaped strings.

const models = [
  {
    slug: "cx23",
    specs: {
      "Illumination": "Built-in transmitted illumination system,\nLED power consumption 0.5 W (nominal values)",
      "Focusing": "Stage height movement (coarse movement stroke 15 mm)\nFine focus graduation: 2.5 \u03BCm",
      "Revolving nosepiece": "Fixed quadruple nosepiece",
      "Stage": "Wire movement mechanical fixed stage\nTraveling range: 76 mm (X) x 30 mm (Y), specimen holder,\nspecimen position scale",
      "Observation tube": "30\u00B0 inclined binocular tube\nInterpupillary distance adjustment range: 48 \u2013 75 mm\nEyepoint adjustment: 370.0 \u2013 432.9 mm",
      "Objectives": "Plan Achromat, anti-fungus\n4X NA: 0.10 W.D.: 27.8 mm\n10X NA: 0.25 W.D.: 8.0 mm\n40X NA: 0.65 W.D.: 0.6 mm\n100X Oil NA: 1.25 W.D.: 0.13 mm (CX23LEDRFS1 only)",
      "Eyepiece": "(10X) Field Number (FN): 20 (anti-fungus)",
      "Accessories": "Reflection mirror (CH20-MM), 15X eyepiece (WHSZ15X-H: FN 12,\nanti-fungus), Dedicated wooden case, Eyepiece micrometer,\nDarkfield stop (CH2-DS+CH2-FH)",
      "Dimensions": "Binocular: 198 mm \u00D7 398 mm \u00D7 386 mm\n(W \u00D7 D \u00D7 H)",
      "WeightApprox.": "5.9 kg"
    }
  },
  {
    slug: "cx33",
    specs: {
      "Observation Tube": "Binocular/Tilting binocular/Trinocular",
      "Nosepiece": "Fixed quadruple nosepiece with inward tilt",
      "Stage": "Size: 188 mm (W) \u00D7 134 mm (D)\nTraveling range: 76 mm (X) \u00D7 50 mm (Y)\nSpecimen holder: Double slide holder",
      "Condenser": "Abbe condenser, with built-in daylight filter",
      "Focusing": "Stage height movement by roller guide (rack & pinion)\nStroke per rotation: 36.8 mm\nFull stroke range: 25 mm\nUpper limit stopped by simplified pre-focusing dial\nTension adjustment on coarse focus adjustment knob",
      "Illumination": "Built-in transmitted K\u00F6hler illuminator LED\n100 \u2013 120 V/220 \u2013 240 V ~ 0.85/0.45 A 50/60 Hz",
      "Dimensions": "211 mm \u00D7 397 mm \u00D7 430 mm\n(W \u00D7 D \u00D7 H)",
      "WeightApprox.": "7.0 kg",
      "Accessories": "Dual-observation attachment, phase contrast attachment,\ndrawing attachment, simple polarizing attachment, digital\ncamera adapter etc."
    }
  },
  {
    slug: "cx43",
    specs: {
      "Observation Tube": "Binocular/Tilting binocular/Trinocular",
      "Nosepiece": "Fixed quintuple nosepiece with inward tilt",
      "Stage": "Size: 188 mm (W) \u00D7 134 mm (D)\nTraveling range: 76 mm (X) \u00D7 50 mm (Y)\nSpecimen holder: Double slide holder",
      "Condenser": "Universal condenser / Abbe condenser",
      "Focusing": "Stage height movement by roller guide (rack & pinion)\nStroke per rotation: 36.8 mm\nFull stroke range: 25 mm\nUpper limit stopper\nTension adjustment on coarse focus adjustment knob",
      "Illumination": "Built-in transmitted K\u00F6hler illuminator LED\n100 \u2013 120 V/220 \u2013 240 V ~ 0.85/0.45 A 50/60 Hz",
      "Dimensions": "211 mm \u00D7 376 mm \u00D7 393 mm (standard configuration)\n(W \u00D7 D \u00D7 H)",
      "WeightApprox.": "7.3 kg",
      "Accessories": "Dual-observation attachment, phase contrast attachment,\ndrawing attachment, simple polarizing attachment, digital\ncamera adapter etc."
    }
  },
  {
    slug: "bx43",
    specs: {
      "Observation Tube": "Widefield:\nWidefield tilting, telescopic and lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper Widefield (FN 26.5):\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece",
      "Stage": "Ceramic-coated coaxial stage with left or right hand drive control:\nwith rotating mechanism and torque adjustment mechanism, optional rubber grips available\n(non-stick grooved coaxial, plain, rotatable stages are also available)",
      "Condenser": "Abbe (NA 1.1) for 4X-100X\nSwing out Achromatic (NA 0.9) for 1.25X-100X\nAchromatic Aplanatic (NA 1.4) for 10X-100X\nPhase contrast/darkfield (NA 1.1)\nUniversal (NA 0.9)\nUltra low (NA 0.16)\nDarkfield dry/oil",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper\nTorque adjustment for coarse adjustment knobs\nStage mounting position variable\nHigh sensitivity fine focusing knob (minimum adjustment gradations: 1 \u03BCm)",
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light\nLight intensity manager switch\nHigh color rendering index LED light source",
      "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm (Standard configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "13.2 kg (Standard configuration)"
    }
  },
  {
    slug: "bx53",
    specs: {
      "Observation Tube": "Widefield:\nWidefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper Widefield (FN 26.5):\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece\nMotorized 9-position",
      "Stage": "Ceramic-coated coaxial stage with left or right hand drive control:\nwith rotating mechanism and torque adjustment mechanism, optional rubber grips available",
      "Condenser": "Abbe (NA 1.1) for 4X-100X\nSwing out Achromatic (NA 0.9) for 1.25X-100X\nAchromatic Aplanatic (NA 1.4) for 10X-100X\nPhase contrast/darkfield (NA 1.1)\nUniversal (NA 0.9)\nUltra low (NA 0.16)\nDarkfield dry/oil",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper\nTorque adjustment for coarse adjustment knobs\nStage mounting position variable\nHigh sensitivity fine focusing knob (minimum adjustment gradations: 1 \u03BCm)",
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light\nLight preset switch\nLED light intensity indicator\nBuilt-in filters (LBD-IF, ND6, ND25, optional) high color rendering index LED",
      "Dimensions": "274.5 mm \u00D7 614 mm \u00D7 469 mm (Epifluorescence configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "21 kg (Epifluorescence configuration)"
    }
  },
  {
    slug: "bx63",
    specs: {
      "Observation Tube": "Widefield:\nWidefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper Widefield (FN 26.5):\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular",
      "Nosepiece": "Motorized sextuple nosepiece with slider slot for DIC\nMotorized septuple nosepiece",
      "Stage": "Ultrasonic stage with left/right hand drive control\nTravel range: 76(X) x 52(Y) mm",
      "Condenser": "Motorized universal condenser (NA 0.9) for 1.25X - 100X",
      "Focusing": "Motorized focusing: stage stroke 25 mm\nMinimum adjustment gradations: 0.01 \u03BCm, with upper limit stopper",
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light\nLED light source, light preset switch",
      "Dimensions": "310 mm \u00D7 614 mm \u00D7 469 mm (Standard motorized configuration)\n(W \u00D7 D \u00D7 H)",
      "Weight": "28 kg (Standard motorized configuration)"
    }
  },
  {
    slug: "bx46",
    specs: {
      "Observation Tube": "Widefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield tilting binocular",
      "Nosepiece": "Interchangeable reversed quintuple/coded quintuple, sextuple nosepiece",
      "Stage": "Low-positioned ceramic-coated coaxial stage with left or right hand drive control:\nwith rotating mechanism and torque adjustment mechanism",
      "Condenser": "Abbe (NA 1.1) for 4X-100X\nSwing out Achromatic (NA 0.9) for 1.25X-100X",
      "Focusing": "Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper\nTorque adjustment for coarse adjustment knobs",
      "Illumination": "Built-in K\u00F6hler illumination for transmitted light\nLight intensity manager switch\nHigh color rendering index LED light source",
      "Dimensions": "274.5 mm \u00D7 362 mm \u00D7 410 mm\n(W \u00D7 D \u00D7 H)",
      "Weight": "12.8 kg"
    }
  },
  {
    slug: "bx51wi",
    specs: {
      "Observation Tube": "Trinocular tube\nBinocular tube",
      "Nosepiece": "Swinging nosepiece\nSliding nosepiece (reduces vibration)",
      "Stage": "Fixed stage, bridge stage, or various custom stages for micromanipulators",
      "Focusing": "Nosepiece up/down movement\nCoarse and fine coaxial handle\nFine stroke: 0.1 mm/rotation\nCoarse stroke: 15 mm/rotation",
      "Illumination": "Transmitted light 12V 100W halogen or LED\nIR-DIC compatibility",
      "Dimensions": "Depends on configuration",
      "Weight": "Depends on configuration"
    }
  },
  {
    slug: "bx53p",
    specs: {
      "Observation Tube": "Trinocular tube for polarizing observation",
      "Nosepiece": "Centerable quadruple/quintuple nosepiece",
      "Stage": "Circular rotatable stage, 360\u00B0 graduated in 1\u00B0 increments\nVernier reading to 6'",
      "Condenser": "Strain-free swing-out condenser (NA 0.9/0.15)",
      "Polarizer/Analyzer": "360\u00B0 rotatable analyzer\n360\u00B0 rotatable polarizer with scale",
      "Compensator": "1/4 \u03BB plate, tint plate (1\u03BB)\nBerek compensator\nSenarmont compensator",
      "Illumination": "12V 100W halogen or LED transmitted light"
    }
  },
  {
    slug: "bx53led",
    specs: {
      "Configuration": "Base BX53/BX43 microscope with Multi-Discussion attachments",
      "Observers": "Configurations available from 2 up to 26 observers",
      "Pointer": "LED pointer with adjustable brightness and multiple colors (arrow shape)",
      "Observation Tube": "Binocular or Trinocular for each observer",
      "Illumination": "High-intensity 14-LED light source specifically designed to maintain brightness across all viewing heads"
    }
  },
  {
    slug: "sz61",
    specs: {
      "Optical System": "Greenough optical system",
      "Zoom Ratio": "SZ61: 6.7:1 (0.67X - 4.5X)\nSZ51: 5:1 (0.8X - 4.0X)",
      "Observation Tube": "Binocular / Trinocular\n45\u00B0 or 60\u00B0 inclination",
      "Working Distance": "110 mm (with 1X objective)",
      "Focusing": "Rack and pinion focusing stand",
      "Illumination": "Various stands with LED transmitted/reflected light or external ring lights",
      "Dimensions": "Varies by stand configuration"
    }
  },
  {
    slug: "szx7",
    specs: {
      "Optical System": "Galilean optical system",
      "Zoom Ratio": "7:1 (0.8X - 5.6X)",
      "Observation Tube": "Binocular / Trinocular\nTilting binocular available",
      "Objectives": "DFPL2X, DFPL1.5X, DFPL0.75X, DFPL0.5X\nSZX-ACH1X, SZX-ACH1.25X",
      "Working Distance": "90 mm (with 1X objective)",
      "Focusing": "Coarse and fine focusing stand",
      "Illumination": "LED or halogen transmitted/reflected light bases"
    }
  },
  {
    slug: "szx16",
    specs: {
      "Optical System": "Galilean optical system",
      "Zoom Ratio": "16.4:1 (0.7X - 11.5X)",
      "Observation Tube": "Trinocular\nTilting binocular\nAdvanced tilting trinocular",
      "Objectives": "SDFPLAPO2.5X, SDFPLAPO2X, SDFPLAPO1.6X, SDFPLAPO1X, SDFPLAPO0.8X, SDFPLAPO0.5X",
      "Working Distance": "60 mm (with 1X objective)",
      "Focusing": "Motorized or manual coarse and fine focus",
      "Illumination": "Advanced LED transmitted light base, various reflected light options"
    }
  },
  {
    slug: "szx10",
    specs: {
      "Optical System": "Galilean optical system",
      "Zoom Ratio": "10:1 (0.63X - 6.3X)",
      "Observation Tube": "Trinocular, tilting binocular",
      "Objectives": "DFPLAPO1X, DFPLAPO1.2X, SZX-ACH1X, DFPL0.75X, DFPL0.5X",
      "Working Distance": "81 mm (with 1X objective)",
      "Focusing": "Manual coarse and fine focus",
      "Illumination": "LED or halogen transmitted light base, various reflected light options"
    }
  },
  {
    slug: "ckx53",
    specs: {
      "Optical System": "UIS2 infinity-corrected system",
      "Observation Tube": "Binocular\nTrinocular (tilting optional)",
      "Stage": "Plain stage with various specimen holders (multi-well plates, petri dishes, flasks)\nOptional mechanical stage",
      "Condenser": "Detachable ultra-long working distance condenser (NA 0.3, W.D. 72 mm)",
      "Focusing": "Coaxial coarse and fine focus, roller guide mechanism",
      "Illumination": "Long-life LED transmitted illumination",
      "Contrast Methods": "Integrated Phase Contrast (iPC), Brightfield, optional Fluorescence",
      "Dimensions": "227 mm \u00D7 352 mm \u00D7 454 mm\n(W \u00D7 D \u00D7 H)"
    }
  },
  {
    slug: "ix73",
    specs: {
      "Observation Tube": "Binocular\nTrinocular\nTilting binocular",
      "Frame Design": "Modular deck structure (1-deck or 2-deck configuration)",
      "Stage": "Mechanical stage\nMotorized stage\nGliding stage",
      "Condenser": "Long working distance (NA 0.3/0.55)\nUltra-long working distance",
      "Focusing": "Manual coaxial coarse and fine focus",
      "Illumination": "100W halogen\nLED transmitted light\nVarious fluorescence illuminators",
      "Fluorescence": "Manual or motorized 8-position mirror unit cassette"
    }
  },
  {
    slug: "ix83",
    specs: {
      "Observation Tube": "Binocular\nTrinocular\nTilting binocular",
      "Frame Design": "Highly rigid motorized modular deck structure (1-deck or 2-deck configuration)",
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
      "Compatibility": "Spinning disk confocal, single molecule localization microscopy (SMLM), TIRF",
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
      "Resolution": "5.0 Megapixels (2592 x 1944)",
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
      "Resolution": "6.4 Megapixels (3088 x 2076)",
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
      "Resolution": "8.9 Megapixels (4K UHD: 4096 x 2160)",
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

models.forEach(model => {
  const regex = new RegExp('(id: "oly-' + model.slug + '"[\\s\\S]*?specs: )\\{([^}]*)\\}');
  const match = content.match(regex);
  if (match) {
    const newSpecs = JSON.stringify(model.specs);
    content = content.replace(regex, '$1' + newSpecs);
  }
});

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Done fixing encoding.');
