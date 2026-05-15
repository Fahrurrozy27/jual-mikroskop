const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// === IX73 ===
const ix73Specs = {
  "Optical system": "UIS2 optical system",
  "Revolving nosepiece": "Coded sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure\nMotorized sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure",
  "Focus": "Stroke: 10 mm\nMinimum increment: 0.01 \u03BCm,\nMaximum nosepiece movement speed: 3 mm/s",
  "Intermediate port": "2 ports (IX73P2F), 1 port (IX73P1F)",
  "Light path selection": "Manual 0:100/50:50/100:0 (Left side port: BI port)",
  "Observation tube": "Widefield (FN 22)\nWidefield tilting binocular\nWidefield binocular",
  "Stage": "Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm, including stage insert plate (\u00F825 mm), stage insert plate exchangeable (\u00D8110 mm)\nCross stage with right handle: Stage stroke: X: 50 mm x Y: 50 mm, including stage insert plate (\u00F825 mm), stage insert plate exchangeable (\u00D8110 mm)\nMechanical stage with right handle: Stage stroke: X: 114 mm x Y: 75 mm, stage position locking function",
  "Condenser": "Mid long working distance: NA 0.5, W.D. 45 mm, 4 positions for optical devices (for \u00F850 mm, relief contrast optical devices rotatable)\nMotorized middle long working distance: NA 0.5, W.D. 45 mm, 4 positions for optical devices (for \u00F850 mm, relief contrast optical devices rotatable)",
  "Transmitted light illuminator": "Pillar tilt mechanism (30\u00B0 inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High color reproductive LED light source\n12 V, 100 W halogen bulb (pre-centered)",
  "Operating environment": "Indoor use\nAmbient temperature: 5\u00B0 to 40\u00B0C (41\u00B0 to 104\u00B0F)\nMaximum relative humidity: 80% for temperatures up to 31\u00B0C (88\u00B0F), decreasing linearly to 50% at 40\u00B0C (104\u00B0F)\nSupply voltage fluctuations: Not to exceed \u00B110% of the normal voltage"
};

// === IX83 ===
const ix83Specs = {
  "Optical system": "UIS2 optical system",
  "Revolving nosepiece": "Motorized sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure",
  "Focus": "Stroke: 10.5 mm\nMinimum increment: 0.01 \u03BCm,\nMaximum nosepiece movement speed: 3 mm/s",
  "Focus compensator": "TruFocus: Offset method (Focus search, one-shot focus, continuous focus), Class 1 laser product, laser wavelength: 830 nm\nZ drift compensator",
  "Intermediate port": "1 port (IX83P1ZF)",
  "Light path selection": "Motorized 0:100/50:50/100:0 (Left side port: BI port)",
  "Observation tube": "Widefield (FN 22)\nWidefield tilting binocular\nWidefield binocular",
  "Stage": "Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm, including stage insert plate (\u00F825 mm), stage insert plate exchangeable (\u00D8110 mm)\nCross stage with right handle: Stage stroke: X: 50 mm x Y: 50 mm, including stage insert plate (\u00F825 mm), stage insert plate exchangeable (\u00D8110 mm)\nMechanical stage with right handle: Stage stroke: X: 114 mm x Y: 75 mm, stage position locking function\nMotorized stage: IX5-SSA: Stage stroke: X: 116 mm x Y: 78 mm, maximum stage movement speed: 40 mm/s, Knob controller",
  "Condenser": "Long working distance universal: NA 0.55, W.D. 27 mm, 5 positions for optical devices (3 positions for \u00F830 mm and 2 position for \u00F838 mm)\nMotorized long working distance: W.D. 27 mm, NA 0.55, motorized turret with 7 position slots for optical devices (3 positions for \u00F830 mm and 4 positions for \u00F838 mm), motorized aperture and polarizer\nUltra long working distance: NA 0.3, W.D. 73.3 mm, 4 positions for optical devices (for \u00F829 mm)",
  "Fluorescence illuminator": "L-shaped fluorescence illuminator with fly-eye lens (IX3-RFALFE)\nL-shaped design with exchangeable FS and AS modules, slider shutter and ND filter pocket",
  "Fluorescence mirror turret": "Motorized fluorescence mirror turret (IX3-RFACA)\nCoded fluorescence mirror turret (IX3-RFACS)\nMotorized turret with 8 positions, built-in shutter, simple waterproof structure",
  "Fluorescence light source": "LED and LDP light source (U-LGPS)\n3rd party LED light source",
  "Transmitted light illuminator": "Pillar tilt mechanism (30\u00B0 inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High color rendering LED (IX3-LHLEDC)\n12 V 100 W halogen (U-LH100L)",
  "Imaging software": "cellSens Standard\ncellSens Dimension",
  "Accessories": "TruFocus system (IX3-ZDC2)\nRemote correction collar controller (IX3-RCC)\nReal-time controller (U-RTC/U-RTCe)\nIncubation housing",
  "Operating environment": "Indoor use\nAmbient temperature: 5\u00B0 to 40\u00B0C (41\u00B0 to 104\u00B0F)\nMaximum relative humidity: 80% for temperatures up to 31\u00B0C (88\u00B0F), decreasing linearly to 50% at 40\u00B0C (104\u00B0F)\nSupply voltage fluctuations: Not to exceed \u00B110% of the normal voltage"
};

// === IX85 ===
const ix85Specs = {
  "Optical system": "UIS2 optical system",
  "Microscope frame": "IX85P1ZF / IX85P2ZF",
  "Revolving nosepiece": "Motorized 6-position revolving nosepiece (DIC slider attachable)\nSimple water proof structure\nOne position for Automated Correction Collar",
  "Focus": "Stroke: 10.5 mm\nMinimum increment: 0.01 \u03BCm,\nMaximum nosepiece movement speed: 3 mm/s",
  "Intermediate Magnification Changer": "3 positions (Coded): 1X / 1.6X / 2X",
  "Deck insert layer": "1 layer / 2 layers",
  "Light path selection": "Motorized 4 positions\nEyepiece 100%, left 100%, right 100%, eyepiece 50%/left 50%",
  "Maximum port field number": "Left/Right side port: FN26.5 / FN18\nBI port: FN22\nDeck right side port: FN18",
  "Observation tube": "U-BI90 Wide field binocular\nU-TBI90BK Wide field tilting binocular\nU-TR30-2/U-TR30NIR Wide field trinocular\nWidefield (FN22)",
  "Stage": "Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm\nMechanical stage with right handle: Stage stroke: X: 116 mm x Y: 78 mm, stage position locking function\nRight handle stage: Stage stroke: X: 50 mm x Y: 50 mm\nGliding stage: Upper circular stage 360\u00B0 rotatable, 20 mm (X/Y) travel\nPlain stage: 232 mm (X) x 240 mm (Y) stage size, stage insert plate exchangeable (\u00F8110 mm)\nMotorized stage: IX5-SSA: Stage stroke: X: 116 mm x Y: 78 mm, maximum stage movement speed: 40 mm/s, Knob controller",
  "Condenser": "Long working distance universal: NA 0.55, W.D. 27 mm 5 positions for optical devices (3 positions for \u00F830 mm and 2 position for \u00F838 mm)\nMotorized long working distance: W.D. 27 mm, NA 0.55, motorized turret with 7 position slots for optical devices, motorized aperture and polarizer\nUltra long working distance: NA 0.3, W.D. 73.3 mm, 4 positions for optical devices (for \u00F829 mm)",
  "Transmitted light illuminator": "Pillar tilt mechanism (30\u00B0 inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High power LED light source",
  "Focus compensator": "TruFocus: Offset method (Focus search, one-shot focus, continuous focus), Class 1 laser product, laser wavelength: 830 nm\nZ drift compensator",
  "Control unit": "Control unit (IX5-MCZ): ON/OFF, DIA LED power, DIA LED ON/OFF, 4 customizable buttons\nNosepiece position, light path selection, filter turret position, FL shutter",
  "Control box": "PC interface: USB (Type-C), RS-232C",
  "Fluorescence illuminator": "L-shape-fluorescence illuminator ND filter pocket\nL-shaped design with exchangeable FS and AS modules, slider shutter",
  "Fluorescence mirror turret": "Motorized fluorescence mirror turret\nMotorized turret with 8 positions, built-in shutter, simple waterproof structure",
  "Fluorescence light source": "U-LGPS: LED and LDP light source, Class 1 laser product\n3rd party LED light source",
  "Imaging software": "cellSens Standard\ncellSens Dimension",
  "Super resolution processing": "Olympus super-resolution (OSR) filter",
  "Accessories": "TruFocus system (IX3-ZDC2)\nRemote correction collar controller (IX3-RCC)\nReal-time controller (U-RTC/U-RTCe)\nIncubation housing\nConfocal scanner: Spinning disk confocal scanner\nTIRF Illuminator: cellTIRF",
  "Dimensions": "540 mm (D) x 321 mm (W) x 667 mm (H) / 540 mm (D) x 321 mm (W) x 732 mm (H)\n(IX85 Microscope frame with illumination pillar)",
  "Operating environment": "Indoor use\nAmbient temperature: 5\u00B0 to 40\u00B0C (41\u00B0 to 104\u00B0F)\nMaximum relative humidity: 80% for temperatures up to 31\u00B0C (88\u00B0F), decreasing linearly to 50% at 40\u00B0C (104\u00B0F)\nSupply voltage fluctuations: Not to exceed \u00B110% of the normal voltage"
};

// === FV5000 ===
const fv5000Specs = {
  "Scanner": "Galvanometer scanner: 64 x 64 \u2013 8192 x 8192 pixels, 0.2 \u03BCs/pixel \u2013 1000 \u03BCs/pixel\nResonant scanner: 512 x 512 pixels, 1024 x 1024 pixels, 2048 x 2048 pixels",
  "Field number": "20 (for both scanner types)",
  "Spectral confocal detector": "Detector: SilVIR detector (cooled SiPM, broadband type/red-shifted type)\nMaximum channels: Six channels\nSpectral method: VPH, detectable wavelength range: 400 nm - 900 nm",
  "Laser": "VIS laser: 405 nm, 445 nm, 488 nm, 514 nm, 561 nm, 594 nm, 640 nm\nNIR laser: 685 nm, 730 nm, 785 nm",
  "Laser power monitor": "Built in",
  "Image": "High dynamic range photon counting (1G cps, 16-bit)"
};

// === EP50 ===
const ep50Specs = {
  "Image Sensor": "Color CMOS",
  "Sensor Size": "1/1.8 inch (7.140 mm \u00D7 4.980 mm)",
  "Resolution": "2592 x 1944 pixels (Snapshot only)\n1920 x 1080 pixels (HDMI, WLAN, on PC)",
  "Pixel Size": "2.4 \u00D7 2.4 \u03BCm",
  "A/D Converter": "8 bits",
  "Exposure Times": "1 ms \u2013 918 ms",
  "Live Frame Rates": "Up to 60 fps (HDMI output, 1920 x 1080 pixels)\nUp to 25 fps (WLAN output, 1920 x 1080 pixels)\nUp to 30 fps (on PC, 1920 x 1080 pixels)\nSnapshot only (2592 x 1944 pixels)",
  "Data Transfer": "HDMI, WLAN (using the WLAN adapter), Ethernet (using the USB-to-Ethernet adapter)",
  "PC Control": "Microsoft Windows 10 (64 bit)\nMicrosoft Windows 11 (64 bit)",
  "Camera Mount": "C-mount",
  "Storage": "SD (HC I; UHS-I, Class 10)",
  "Dimensions": "78 mm \u00D7 65 mm \u00D7 88 mm (3.08 in. \u00D7 2.56 in. \u00D7 3.47 in.)\n(W \u00D7 D \u00D7 H)",
  "Weight": "Approx. 470 g (1.04 lb)"
};

// === LC35 ===
const lc35Specs = {
  "Image Sensor": "Color CMOS",
  "Sensor Size": "1/2.5-inch",
  "Resolution (max)": "2160 x 1620 pixels\n1920 x 1080 pixels (full HD 16:9)\n1296 x 972 pixels (fast mode)",
  "Pixel Size": "2.64 \u00D7 2.64 \u03BCm",
  "A/D Converter (Bit Depth)": "10-bits",
  "Exposure Time": "25 \u03BCs \u2013 1.5 s",
  "Live Frame Rates": "Up to 19 fps at 2160 x 1620 pixels (full resolution)\nUp to 25 fps at 1920 x 1080 pixels (full HD)\nUp to 40 fps at 1296 x 972 pixels (fast mode)",
  "Data Transfer": "USB 3.1 Gen1 Type-C",
  "PC Requirements": "CPU: Intel\u00AE Xenon, Intel\u00AE Core i5, i7, i9, or the equivalent\nRAM: 8 GB\nRecommended: 4 or more physical CPU cores, 8 GB RAM (dual channel)",
  "PC Control": "Windows 10 64-bit",
  "Imaging Platform": "cellSens Entry, Standard, and Dimension v. 3.2 or higher\nOlympus Stream Start, Basic, and Essentials v.2.5 or higher\nPRECiV Capture, Core, and Pro v1.1 or higher\nLCmicro\nDP2-TWAIN",
  "Camera Mount": "C-mount",
  "Dimensions": "47 mm \u00D7 46 mm \u00D7 28.8 mm (1.9 in. \u00D7 1.7 in. \u00D7 1.13 in.)\n(W \u00D7 D \u00D7 H)",
  "Weight": "Approx. 33 g (1.16 oz)"
};

// === DP23 ===
const dp23Specs = {
  "Camera type": "C-mount CCD camera head",
  "Image Sensor": "1/1.8 inch color CCD",
  "Effective pixels": "2.83 million pixels (total pixels: 2.98 million pixels)",
  "Scanning mode": "Progressive scan",
  "Color filter": "RGB primary color on-chip filters",
  "Maximum recorded pixels": "2.76 megapixels (1920 x 1440)",
  "Recording range": "7.08 mm (H) \u00D7 5.31 mm (V), 8.8 mm (diagonal length)",
  "ISO Sensitivity": "Equivalent to ISO 200/400/800",
  "Camera mount": "C-mount",
  "Image size": "Stand Alone: TIFF 1920 x 1440, JPEG-LOW (1/2.7) 1920 x 1080, JPEG-HIGH (1/8) 960 x 720\nPC Connection: File format according to cellSens specifications",
  "Video recording": "AVI 960 x 720",
  "Live image display (frame rate)": "1920 x 1440: 25 fps / 25 fps\n1920 x 1080: 30 fps / 28 fps\n960 x 720: 25 fps / 25 fps"
};

// === DP28 ===
const dp28Specs = {
  "Camera type": "Single chip color CCD camera",
  "Image Sensor": "2/3 inch color CCD",
  "Effective pixels": "5.05 megapixels (total: 5.24 megapixels)",
  "Scanning mode": "Progressive scan",
  "Color filter": "RGB Bayer primary color filter",
  "Recording range": "8.45 mm (H) \u00D7 6.62 mm (V), 10.733 mm (diagonal length)",
  "Maximum recorded pixels": "4.7 megapixels (2448 x 1920)",
  "ISO Sensitivity": "Equivalent to ISO 100/200/400",
  "Camera mount": "C-mount",
  "Image size": "Stand-alone: TIFF 2448 x 1920, JPEG-LOW (1/2.7) 1920 x 1080, JPEG-HIGH (1/8) 1224 x 960\nPC connection: File format according to cellSens specifications",
  "Video (AVI)": "1224 x 960",
  "Live image display (frame rate)": "2448 x 1920: 15 fps / 15 fps\n1920 x 1080: 22 fps / 22 fps\n1224 x 960: 30 fps / 30 fps"
};

// === DP75 ===
const dp75Specs = {
  "Camera type": "Single-chip color camera (pixel shifting)\nCooling system: Peltier device (active cooling)",
  "Image Sensor": "1.1-inch, 12.37-megapixel color CMOS image sensor",
  "Scanning mode": "Progressive scan",
  "Camera mount": "C-mount",
  "Effective image resolution": "8192 x 6000 (pixel shifting)\n4096 x 3000 (3CMOS mode)\n4096 x 3000 (1 x 1)\n3840 x 2160 (1 x 1) (by cropped)\n2048 x 1500 (2 x 2)\n2048 x 1500 (1 x 1)\n1920 x 1080 (1 x 1), ROI",
  "ISO Sensitivity": "ISO 100/200/400/800/1600/3200",
  "A/D": "12-bit",
  "Live frame rate": "4096 x 3000 (1 x 1): 22 fps\n2048 x 1500 (1 x 1): 44 fps\n2048 x 1500 (2 x 2): 22 fps\n1920 x 1080 (1 x 1): 60 fps",
  "Macro optical system": "Built-in, 0.07x macro optics",
  "Anti-vibration mechanism": "Built-in",
  "Magnification changer": "Color/Monochrome 0.5x fixed",
  "Focusing": "Motorized focusing with automatic control",
  "Stage": "Motorized XY stage with automatic control",
  "Transmitted illuminator": "Built-in K\u00F6hler illumination for transmitted light,\nTransmitted high color rendering LED\nCondenser: WD 45 mm, including PHL, PH1, PH2, and PH3",
  "Objectives": "Choose from 25 available objectives (4X\u2013100X)\nSix-position motorized revolving nosepiece\nMotorized aberration correction: One motorized position, five standard positions",
  "Observation Method": "Brightfield, fluorescence, phase contrast, gradient contrast",
  "Sample holder": "Glass slides (3 slides), 35 mm dish (3 dishes), microplate, general",
  "Fluorescence": "Fluorescence illuminator with fly-eye lens\nChoose from 18 mirror cubes; eight-position motorized mirror turret\nHigh brightness light guide light source (U-LGPS), motorized ND filter changer (100%, 25%, and 6%)",
  "Camera Color": "6.41 megapixels, 1/1.8 color CMOS",
  "Camera Monochrome": "6.41 megapixels, 1/1.8 monochrome CMOS"
};

const allSpecs = {
  "oly-ix73": ix73Specs,
  "oly-ix83": ix83Specs,
  "oly-ix85": ix85Specs,
  "oly-fv5000": fv5000Specs,
  "oly-ep50": ep50Specs,
  "oly-lc35": lc35Specs,
  "oly-dp23": dp23Specs,
  "oly-dp28": dp28Specs,
  "oly-dp75": dp75Specs
};

let fixedCount = 0;
for (const [id, specs] of Object.entries(allSpecs)) {
  const regex = new RegExp('(id: "' + id + '"[\\s\\S]*?specs: )\\{([^}]*)\\}');
  const newContent = content.replace(regex, '$1' + JSON.stringify(specs));
  if (newContent !== content) {
    content = newContent;
    fixedCount++;
    console.log('Fixed: ' + id);
  } else {
    console.log('NOT FOUND: ' + id);
  }
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Done! Fixed ' + fixedCount + ' products.');
