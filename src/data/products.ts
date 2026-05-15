export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string | string[];
  brand: string;
  model: string;
    image: string;
  magnification: string;
  eyepiece: string;
  illumination: string;
  application: string;
  description: string;
  specs: Record<string, string>;
  extraInfo?: {
    features?: string[];
    observationImages?: string[];
  };
  inStock: boolean;
  featured: boolean;
  badge?: string;
}

export const products: Product[] = [
  // ===== OLYMPUS CATALOG PRODUCTS =====
  {
    id: "oly-cx23", name: "Olympus CX23", slug: "olympus-cx23",
    category: "student", brand: "Olympus", model: "CX23",
    image: "/images/products/olympus/cx23.png",
    magnification: "40x - 1000x", eyepiece: "10X", illumination: "LED",
    application: "Educational microscopy",
    description: "Berfokus pada peningkatan alur kerja untuk mikroskop edukasi, mikroskop tegak CX23 memerlukan pengaturan minimal. Sistem ini mudah dibawa, digunakan, dan disimpan di ruang kelas dengan desain yang ringkas dan ringan.",
    specs: {"Illumination":"Built-in transmitted illumination system,\nLED power consumption 0.5 W (nominal values)","Focusing":"Stage height movement (coarse movement stroke 15 mm)\nFine focus graduation: 2.5 μm","Revolving nosepiece":"Fixed quadruple nosepiece","Stage":"Wire movement mechanical fixed stage\nTraveling range: 76 mm (X) x 30 mm (Y), specimen holder,\nspecimen position scale","Observation tube":"30° inclined binocular tube\nInterpupillary distance adjustment range: 48 – 75 mm\nEyepoint adjustment: 370.0 – 432.9 mm","Objectives":"Plan Achromat, anti-fungus\n4X NA: 0.10 W.D.: 27.8 mm\n10X NA: 0.25 W.D.: 8.0 mm\n40X NA: 0.65 W.D.: 0.6 mm\n100X Oil NA: 1.25 W.D.: 0.13 mm (CX23LEDRFS1 only)","Eyepiece":"(10X) Field Number (FN): 20 (anti-fungus)","Accessories":"Reflection mirror (CH20-MM), 15X eyepiece (WHSZ15X-H: FN 12,\nanti-fungus), Dedicated wooden case, Eyepiece micrometer,\nDarkfield stop (CH2-DS+CH2-FH)","Dimensions":"Binocular: 198 mm × 398 mm × 386 mm\n(W × D × H)","WeightApprox.":"5.9 kg"},
    extraInfo: {
      features: [
        "User-friendly microscope offers ergonomic components to ease sample handling",
        "Plan achromat objectives help ensure image clarity and flatness throughout the field of view",
        "Ergonomic grips add safety when retrieving the microscope from high places",
        "The arm is angled to keep users' wrists in a comfortable, neutral position",
        "An inward-facing rotating nosepiece facilitates a larger working area above the stage"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-cx33", name: "Olympus CX33", slug: "olympus-cx33",
    category: ["laboratory", "student"], brand: "Olympus", model: "CX33",
    image: "/images/products/olympus/cx33_43.png",
    magnification: "40x - 1000x", eyepiece: "10X", illumination: "LED",
    application: "Everyday brightfield and darkfield observations",
    description: "Mikroskop CX33 adalah pilihan tepat untuk pengamatan medan terang (brightfield) dan medan gelap (darkfield) sehari-hari dalam satu konfigurasi yang mudah.",
    specs: {"Observation Tube":"Binocular/Tilting binocular/Trinocular","Nosepiece":"Fixed quadruple nosepiece with inward tilt","Stage":"Size: 188 mm (W) × 134 mm (D)\nTraveling range: 76 mm (X) × 50 mm (Y)\nSpecimen holder: Double slide holder","Condenser":"Abbe condenser, with built-in daylight filter","Focusing":"Stage height movement by roller guide (rack & pinion)\nStroke per rotation: 36.8 mm\nFull stroke range: 25 mm\nUpper limit stopped by simplified pre-focusing dial\nTension adjustment on coarse focus adjustment knob","Illumination":"Built-in transmitted Köhler illuminator LED\n100 – 120 V/220 – 240 V ~ 0.85/0.45 A 50/60 Hz","Dimensions":"211 mm × 397 mm × 430 mm\n(W × D × H)","WeightApprox.":"7.0 kg","Accessories":"Dual-observation attachment, phase contrast attachment,\ndrawing attachment, simple polarisasi attachment, digital\ncamera adapter etc."},
    extraInfo: {
      features: [
        "Ergonomic Routine Microscope",
        "Conforms to your hands, minimizing fatigue during long periods of routine observation",
        "Control knobs positioned to maximize ergonomics and improve work efficiency",
        "Set a specimen with one hand while adjusting the focus and operating the stage with the other",
        "Optional camera port available for digital imaging"
      ]
    },
    inStock: true, featured: true
  },
  {
    id: "oly-cx43", name: "Olympus CX43", slug: "olympus-cx43",
    category: ["laboratory", "student"], brand: "Olympus", model: "CX43",
    image: "/images/products/olympus/cx33_43.png",
    magnification: "40x - 1000x", eyepiece: "10X", illumination: "LED",
    application: "Brightfield, darkfield, phase contrast, simple polarization, and fluorescence",
    description: "Mikroskop CX43 yang serbaguna menawarkan pengamatan medan terang, medan gelap, fase kontras, polarisasi sederhana, dan fluoresensi. Untuk fleksibilitas tambahan, sistem ini dapat mendukung hingga lima lensa objektif UIS2.",
    specs: {"Observation Tube":"Binocular/Tilting binocular/Trinocular","Nosepiece":"Fixed quintuple nosepiece with inward tilt","Stage":"Size: 188 mm (W) × 134 mm (D)\nTraveling range: 76 mm (X) × 50 mm (Y)\nSpecimen holder: Double slide holder","Condenser":"Universal condenser / Abbe condenser","Focusing":"Stage height movement by roller guide (rack & pinion)\nStroke per rotation: 36.8 mm\nFull stroke range: 25 mm\nUpper limit stopper\nTension adjustment on coarse focus adjustment knob","Illumination":"Built-in transmitted Köhler illuminator LED\n100 – 120 V/220 – 240 V ~ 0.85/0.45 A 50/60 Hz","Dimensions":"211 mm × 376 mm × 393 mm (standard configuration)\n(W × D × H)","WeightApprox.":"7.3 kg","Accessories":"Dual-observation attachment, phase contrast attachment,\ndrawing attachment, simple polarisasi attachment, digital\ncamera adapter etc."},
    extraInfo: {
      features: [
        "Ergonomic Routine Microscope designed for multiple observation methods",
        "Conforms to your hands to reduce fatigue during extended periods",
        "Support up to five UIS2 objectives",
        "Set a specimen with one hand while adjusting focus and stage with the other",
        "Optional camera port available for digital imaging"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-bx43", name: "Olympus BX43", slug: "olympus-bx43",
    category: "laboratory", brand: "Olympus", model: "BX43",
    image: "/images/products/olympus/bx43.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22) / Super Widefield (FN 26.5)", illumination: "LED/Halogen",
    application: "Manual System Microscope",
    description: "Mikroskop BX43 memungkinkan Anda memilih antara konfigurasi hemat biaya dan tingkat lanjut, tergantung pada kebutuhan Anda. Komponen modular, seperti tabung pengamatan ergonomis dan meja sediaan (stage), memudahkan penyesuaian mikroskop untuk aplikasi Anda.",
    specs: {"Illumination":"Built-in Köhler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source","Focusing":"Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper, Torque adjustment for coarse adjustment knobs, Stage mounting position variable, High sensitivity fine focusing knob (minimum adjustment gradations: 1 μm)","Nosepiece":"Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece","Stage":"Ceramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available (non-stick grooved coaxial, plain, rotatable stages are also available)","Observation tube":"Widefield tilting, telescopic and lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular","Condenser":"Abbe (NA 1.1), for 4X – 100X\nSwing out Achromatic (NA 0.9), for 1.25X – 100X (swing-out: 1.25X – 4X)\nAchromatic Aplanatic (NA 1.4), for 10X – 100X\nPhase contrast, darkfield (NA 1.1), [phase contrast: for 10X – 100X, darkfield: for 10X – 100X (up to NA 0.80)]\nUniversal (NA 0.9), for 1.25X – 100X [swing-out: 1.25X – 4X, with oil top lens: (NA 1.4)]\nLow (NA 0.75), for 2X – 100X (Dry)\nUltra low (NA 0.16), for 1.25X – 4X\nDarkfield dry (NA 0.8 – 0.92), for 10X – 100X\nDarkfield oil (NA 1.20 – 1.40), for 10X – 100X","Dimensions":"274.5 mm × 362 mm × 410 mm (Standard configuration)\n(W × D × H)","Weight":"13.2 kg (Standard configuration)"},
    extraInfo: {
      features: [
        "Modular components for a customized configuration",
        "Ergonomic observation tubes and stages",
        "Light intensity manager switch to maintain brightness when changing magnifications",
        "High color rendering index LED light source for accurate color reproduction",
        "Highly adaptable for cost-efficient or advanced setups"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-bx53", name: "Olympus BX53", slug: "olympus-bx53",
    category: "fluorescence", brand: "Olympus", model: "BX53",
    image: "/images/products/olympus/bx53.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22) / Super Widefield (FN 26.5)", illumination: "LED/Halogen",
    application: "Semi-Motorized Fluorescence Microscope",
    description: "Mikroskop fluoresensi semi-bermotor BX53 dapat dikonfigurasi untuk memenuhi hampir semua kebutuhan penelitian. Mikroskop ini mendukung berbagai aplikasi pencitraan fluoresensi dan menawarkan fitur canggih untuk kemudahan operasi serta fleksibilitas proses.",
    specs: {"Illumination":"Built-in Köhler illumination for transmitted light, Light preset switch, LED light intensity indicator, Built-in filters (LBD-IF, ND6, ND25, optional) high color rendering index LED","Focusing":"Vertical stage movement: 25 mm stage stroke with coarse adjustment limit stopper, Torque adjustment for coarse adjustment knobs, Stage mounting position variable, High sensitivity fine focusing knob (minimum adjustment gradations: 1 μm)","Nosepiece":"Interchangeable reversed quintuple/coded quintuple, sextuple/coded sextuple, septuple/coded septuple nosepiece\nMotorized 9-position","Stage":"Ceramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available","Observation tube":"Widefield tilting, telescoping, lifting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield erect image trinocular\nWidefield ergo binocular\nWidefield tilting binocular\nWidefield binocular\nSuper widefield trinocular\nSuper widefield erect image tilting trinocular","Condenser":"Abbe (NA 1.1), for 4X – 100X\nSwing out Achromatic (NA 0.9), for 1.25X – 100X (swing-out: 1.25X – 4X)\nAchromatic Aplanatic (NA 1.4), for 10X – 100X\nPhase contrast, darkfield (NA 1.1), [phase contrast: for 10X – 100X, darkfield: for 10X – 100X (up to NA 0.80)]\nUniversal (NA 0.9), for 1.25X – 100X [swing-out: 1.25X – 4X, with oil top lens: (NA 1.4)]\nLow (NA 0.75), for 2X – 100X (Dry)\nUltra low (NA 0.16), for 1.25X – 4X\nDarkfield dry (NA 0.8 – 0.92), for 10X – 100X\nDarkfield oil (NA 1.20 – 1.40), for 10X – 100X","Dimensions":"274.5 mm × 614 mm × 469 mm (Epifluorescence configuration)\n(W × D × H)","Weight":"21 kg (Epifluorescence configuration)"},
    extraInfo: {
      features: [
        "Configurable for advanced fluorescence imaging applications",
        "Semi-motorized components for process flexibility",
        "High sensitivity fine focusing knob for precise adjustment",
        "Built-in filters and light preset switch",
        "Excellent optical performance for research applications"
      ]
    },
    inStock: true, featured: true
  },
  {
    id: "oly-bx63", name: "Olympus BX63", slug: "olympus-bx63",
    category: "laboratory", brand: "Olympus", model: "BX63",
    image: "/images/products/olympus/bx63.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22) / Super Widefield (FN 26.5)", illumination: "LED/Halogen",
    application: "Motorized Microscope",
    description: "Mikroskop BX63 sepenuhnya dikendalikan oleh metode pengamatan dan dapat disesuaikan dengan kebutuhan spesifik Anda. *Nosepiece* bermotor dan kondensor universal bermotor tersinkronisasi, sehingga menghemat waktu dan mengurangi risiko kesalahan.",
    specs: {"Illumination":"Built-in Köhler illumination for transmitted light, LED light intensity indicator, motorized field stop\nHigh color rendering index LED light source\n12 V 100 W halogen bulb (pre-centered)","Focusing":"Built-in motorized nosepiece focus\nStroke: 20 mm, minimum increment: 0.01 μm, maximum speed: 5 mm/s","Nosepiece":"Motorized septuple revolving nosepiece\nInterchangeable reversed coded septuple nosepiece","Stage":"Ultrasonic stage (stroke: X: 76 mm × Y: 52 mm, maximum speed: 30 mm/s)\nCeramic-coated coaxial stage with left or right hand drive control: with rotating mechanism and torque adjustment mechanism, optional rubber grips available\nCross stage with short left handle","Observation tube":"Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield erect image trinocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular","Condenser":"Motorized universal condenser (NA 0.9, motorized 8-position turret, aperture stop, polarisasi filter in/out mechanism and top lens swing out mechanism), for 1.25X – 100X [swing-out 1.25X – 4X, with oil top lens: (NA 1.4)]\nSwing out Achromatic (NA 0.9), for 1.25X – 100X (swing-out: 1.25X – 4X)\nAchromatic Aplanatic (NA 1.4), for 10X – 100X\nUniversal (NA 0.9), for 1.25X – 100X [swing-out: 1.25X – 4X, with oil top lens: (NA 1.4)]\nUltra low (NA 0.16), for 1.25X – 4X\nDarkfield dry (NA 0.8 – 0.92), for 10X – 100X\nDarkfield oil (NA 1.20 – 1.40), for 10X – 100X","Other features":"ND filter wheel, high-performance control box U-RTCE\nMotorized 9-position","Dimensions":"294.5 mm × 740.5 mm × 582.5 mm (Epifluorescence configuration)\n(W × D × H)","Weight":"35 kg (Epifluorescence configuration)"},
    extraInfo: {
      features: [
        "Fully motorized system for automated workflows",
        "Motorized nosepiece and universal condenser synchronize automatically",
        "Ultrasonic stage for high-precision, smooth movement",
        "Minimum focus adjustment gradation of 0.01 μm",
        "Touch panel controller for intuitive operation"
      ]
    },
    inStock: true, featured: false, badge: "Premium"
  },
  {
    id: "oly-bx46", name: "Olympus BX46", slug: "olympus-bx46",
    category: "laboratory", brand: "Olympus", model: "BX46",
    image: "/images/products/olympus/bx46.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22)", illumination: "LED",
    application: "Clinical Routine Microscope",
    description: "Dirancang khusus untuk memenuhi tuntutan mikroskopi rutin yang berulang, mikroskop BX46 dilengkapi dengan meja sediaan (*stage*) pada posisi rendah, tabung pengamatan yang dapat dimiringkan dan diperpanjang, serta manajemen intensitas cahaya.",
    specs: {"Illumination":"Built-in Köhler illumination for transmitted light, light intensity manager switch\nHigh color rendering index LED light source","Focusing":"Fixed low stage nosepiece focus\n15 mm focus stroke with coarse adjustment limit stop\nTorque adjustment for coarse adjustment knobs\nHigh sensitivity fine focusing knob (adjustment gradations: 1 μm)","Nosepiece":"Fixed reversed coded quintuple nosepiece","Stage":"Ceramic-coated coaxial stage with left or right hand ultra low drive control, rotating mechanism and torque adjustment mechanism (low torque, plain, and rotating stages are also available)","Observation tube":"Widefield tilting, telescoping, lifting binocular\nWidefield tilting binocular\nWidefield tilting trinocular\nWidefield trinocular\nWidefield ergo binocular\nWidefield binocular\n(FN 22)","Condenser":"Built-in condenser (NA 0.9) 1.25X – 100X (swing out: 1.25X – 2X)","Dimensions":"274.5 mm × 362 mm × 410 mm (Standard configuration)\n(W × D × H)","Weight":"17 kg (Standard configuration)"},
    extraInfo: {
      features: [
        "Ultra-low positioned stage reduces arm fatigue during repetitive tasks",
        "Tilting, telescoping, and lifting binocular tube for perfect posture",
        "Light intensity manager remembers brightness settings for each objective",
        "High color rendering index LED provides daylight-like illumination",
        "Ergonomically designed for long clinical routine work"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-bx51wi", name: "Olympus BX51WI", slug: "olympus-bx51wi",
    category: "laboratory", brand: "Olympus", model: "BX51WI",
    image: "/images/products/olympus/bx51wi.png",
    magnification: "40x - 1000x", eyepiece: "10X", illumination: "Halogen/LED",
    application: "Fixed Stage Upright Microscope",
    description: "Mikroskop *fixed stage* BX51WI memberikan stabilitas luar biasa dan ruang yang luas untuk aplikasi penelitian elektrofisiologi dan ilmu saraf yang melibatkan mikromanipulasi.",
    specs: {"Illumination":"Transmitted light 12 V 100 W halogen Köhler illumination;\nLight adjustment: less than DC2 V~12 V (continuous adjustment)","Focusing":"Nosepiece focus by roller guide;\nStroke per rotation: fine: 0.1 mm, coarse: 15 mm;\nMaximum stroke: 25 mm; Coarse lower limit stopper mechanism,\nTorque adjustment mechanism for coarse focus","Nosepiece":"Swing, Slide, Single position, Swing-slide","Stage":"Mechanical, bridge","Observation tube":"magnification change unit (FN 22), Trinocular (FN 22), erect image trinocular (FN 22), double port","Condenser":"8-position universal, long working distance oblique, long working distance DIC, swing-out","Dimensions":"317.5 mm × 567 mm × 503.8 mm (Epifluorescence Configuration)\n(W × D × H)","Weight":"19 kg (Epifluorescence Configuration)"},
    extraInfo: {
      features: [
        "Fixed stage design for maximum stability during patch-clamp experiments",
        "Vibration-free nosepiece movement",
        "High IR transmission objectives for deep tissue imaging",
        "Ample workspace for placing multiple micromanipulators",
        "Front-mounted controls to minimize hand movement and vibration"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-bx53p", name: "Olympus BX53-P", slug: "olympus-bx53p",
    category: "polarisasi", brand: "Olympus", model: "BX53-P",
    image: "/images/products/olympus/bx53p.png",
    magnification: "40x - 1000x", eyepiece: "10X (with crosshair)", illumination: "Halogen/LED",
    application: "Polarizing Microscope",
    description: "Mikroskop polarisasi BX53-P memberikan performa luar biasa dalam aplikasi cahaya terpolarisasi menggunakan optik *infinity-corrected* UIS2. Mikroskop ini menghasilkan gambar yang cerah dan kontras tinggi untuk mengidentifikasi kristal dan mineral.",
    specs: {"Illumination":"High intensity high color rendering index LED, Köhler illumination","Focusing":"Coarse & fine coaxial handle; full stroke: 25 mm;\nminimum fine adjustment: 1 μm","Nosepiece":"Detachable quadruple nosepiece with centering adjustment function","Stage":"Circular rotatable stage with centering adjustment function and attachable mechanical stage.\n360° graduated in 1° increments, lockable in any position","Observation tube":"Trinocular (FN 22)","Condenser":"Achromat strain-free condenser with built-in 360° rotatable polarizer (NA 0.18 – 0.9)","Polarizing intermediate tube":"Swing-out focusable Bertrand lens with slot for 360° rotatable analyzer for conoscopic & orthoscopic observation (U-CPA)","Test plate":"1 wavelength (1λ), 1/4 wavelength (1/4λ)","Compensators":"Berek, Senarmont, Brace-Köhler, quartz wedge, etc. (6 types available)","Dimensions":"274 mm × 436 mm × 535 mm\n(W × D × H)","Weight":"16 kg"},
    extraInfo: {
      features: [
        "Strain-free optics for exact polarization analysis",
        "Centerable revolving nosepiece ensures optical alignment",
        "High-precision circular rotating stage with click stops",
        "Accommodates various compensators for measuring retardation",
        "Conoscopic observation capability with Bertrand lens"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-bx53led", name: "Olympus BX53LED+MDO", slug: "olympus-bx53led",
    category: "laboratory", brand: "Olympus", model: "BX53LED+MDO",
    image: "/images/products/olympus/bx53led.png",
    magnification: "40x - 1000x", eyepiece: "10X", illumination: "LED",
    application: "Multi-Discussion System",
    description: "The Multi-Discussion Observation (MDO) system enables multiple observers to view the same specimen simultaneously, making it ideal for clinical conferences and educational settings.",
    specs: {"Illumination":"High-intensity 14-LED light source specifically designed to maintain brightness across all viewing heads","Configuration":"Base BX53/BX43 microscope with Multi-Discussion attachments","Observers":"Configurations available from 2 up to 26 observers","Pointer":"LED pointer with adjustable brightness and multiple colors (arrow shape)","Observation tube":"Binocular or Trinocular for each observer"},
    extraInfo: {
      features: [
        "Simultaneous viewing for up to 26 people",
        "Consistent brightness and color temperature for all observers",
        "Built-in LED pointer for the primary observer to highlight features",
        "Ideal for pathology consultations and medical training",
        "Uniform orientation of images for all viewers"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-sz61", name: "Olympus SZ61 / SZ51", slug: "olympus-sz61",
    category: "stereo", brand: "Olympus", model: "SZ61 / SZ51",
    image: "/images/products/olympus/sz61.png",
    magnification: "SZ61: 6.7x-45x / SZ51: 8x-40x", eyepiece: "10X (FN 22)", illumination: "LED",
    application: "Stereo Microscope",
    description: "The SZ61 and SZ51 stereo microscopes deliver excellent optical performance and reliability for routine work. The Greenough optical system provides excellent flatness and depth of field.",
    specs: {"Optical System":"Greenough type optical system","Optical component":"Lead-free","Zoom ratio":"SZ61: 1:6.7 (0.67X - 4.5X)\nSZ51: 1:5 (0.8X - 4.0X)","Working distance":"110 mm","Tube inclination angle":"45° or 60°","Video camera adaptability":"SZ61TR / SZ51TR: C-mount (0.5X built in)","Auxiliary objective":"Mounting by screwing into the thread at the bottom of frame (M48 threadx0.75)","Eyepiece":"WHSZ series","Dimensions":"194 mm × 253 mm × 368 mm (Standard Set Configuration)\n(W × D × H)"},
    extraInfo: {
      features: [
        "Greenough optical system for flat, high-contrast images",
        "ComfortView eyepieces for greater comfort and faster work",
        "Long 110 mm working distance provides ample room for manipulation",
        "ESD safe design prevents static damage to specimens",
        "Available with 45° or 60° inclination tubes for varying workstation heights"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-szx7", name: "Olympus SZX7", slug: "olympus-szx7",
    category: "stereo", brand: "Olympus", model: "SZX7",
    image: "/images/products/olympus/szx7.png",
    magnification: "8x - 56x", eyepiece: "10X (FN 22)", illumination: "LED/Halogen",
    application: "Stereo Microscope",
    description: "The SZX7 stereo microscope features a Galilean optical system for outstanding image quality and a wide 7:1 zoom ratio. It provides accurate color reproduction and high-resolution images.",
    specs: {"Optical System":"Galilean type optical system","Zoom microscope body":"Zoom range 0.8X – 5.6X (zoom ratio 1:7), Lead-free","Observation tube":"1.SZX-BI45: 45° binocular, 45° inclination\n2.SZX2-TR30: 30° trinocular, 30° inclination\n3.SZX2-TR30PT: 30° trinocular, 30° inclination\n4.SZX2-LTTR: Ergonomic long tilting trinocular, 5 – 45° variable inclination\nInterpupillary distance adjustable range: 50 – 76 mm\nAll observation tubes: Lead-free","Extendable eyepoint adjuster":"SZX2-EEPA: Height adjustment range: 30 – 150 mm (with a scale attached)","Objectives":"DFPL0.5X-4, DFPL0.75X-4, DFPLAPO1X-4, SZX-ACH1X, DFPLAPO1.25X, SZX-ACH1.25X-2, DFPL1.5X-4, DFPL2X-4","Eyepiece":"WHSZ series","Dimensions":"194 mm × 253 mm × 403 mm (Standard Set Configuration)\n(W × D × H)"},
    extraInfo: {
      features: [
        "Galilean optical system for advanced modularity",
        "Excellent resolving power with accurate color reproduction",
        "A wide variety of objectives available for different magnifications and working distances",
        "Ergonomic design with optional tilting observation tube",
        "Click-stop mechanism for easy magnification reproducibility"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-szx16", name: "Olympus SZX16", slug: "olympus-szx16",
    category: "stereo", brand: "Olympus", model: "SZX16",
    image: "/images/products/olympus/szx16.png",
    magnification: "7x - 115x", eyepiece: "10X (FN 22)", illumination: "LED/Halogen",
    application: "Research Stereo Microscope",
    description: "The SZX16 research stereo microscope features an ultra-high zoom ratio of 16.4:1. With its advanced optics and high numerical aperture, it bridges the gap between macro and micro imaging.",
    specs: {"Optical system":"Telescope type system","Zoom range":"0.7X – 11.5X (zoom ratio 1: 16.4)","Total mag. range":"2.1X – 690X (with SDFPLAPO2XPFC)","Aperture diaphragm":"Built-in","Zoom click stop":"Click stop equipped (releasable)","Working distance":"141 mm (with SDFPLFL0.3X) – 20 mm (with SDFPLAPO2XPFC)","Observation tube":"SZX2-TR30/SZX2-TR30PT: 30 degree trinocular, 30° inclination\nSZX2-TTR/SZX2-TTRPT: tilting trinocular, 5 – 45° variable inclination\nSZX-BI45: 45° binocular, 45° inclination\nSZX-BI30: 30° binocular, 30° inclination\nSZX2-LTTR: Ergonomic long tilting trinocular, 5 – 45° variable inclination","Extendable eyepoint adjuster":"SZX2-EEPA: Height adjustment range: 30 – 150 mm (with a scale attached)","Objective":"SDFPLAPO2XPFC, SDFPLAPO1.6XPF, SDFPLAPO1XPF, SDFPLAPO0.8X, SDFPLAPO0.5XPF, SDFLPLFL0.3X","Eyepiece":"WHN10X-H (FN 22), WHSZ10X-H (FN 22), WHSZ15X-H (FN 16), WHSZ20X-H (FN 12.5), WHSZ30X-H (FN 7)","Focusing":"SZX2-FOA: Motorized focus unit, focusing stroke 78 mm\nSZX2-FOFH: Fine focusing unit for heavy loading, stroke 80 mm\nSZX2-FOF: Fine focusing unit, coarse handle stroke 80 mm, fine handle stroke 80 mm\nSZX2-FO: Focusing unit, coarse handle stroke 80 mm","Accessories":"Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.","Dimensions":"268 mm × 386 mm × 413 mm (Standard Set Configuration)\n(W × D × H)"},
    extraInfo: {
      features: [
        "Unprecedented 16.4:1 zoom ratio for seamless macro-to-micro viewing",
        "Astigmatism-free SDF objectives provide ultra-high resolution (up to 900 LP/mm)",
        "Unmatched depth of field and extended focal imaging capabilities",
        "Motorized focus and zoom options for automated imaging workflows",
        "Perfect for advanced life science research and materials science"
      ]
    },
    inStock: true, featured: true
  },
  {
    id: "oly-szx10", name: "Olympus SZX10", slug: "olympus-szx10",
    category: "stereo", brand: "Olympus", model: "SZX10",
    image: "/images/products/olympus/szx10.png",
    magnification: "6.3x - 63x", eyepiece: "10X (FN 22)", illumination: "LED/Halogen",
    application: "Research Stereo Microscope",
    description: "The SZX10 research stereo microscope provides natural, distortion-free imaging with excellent depth of field and an optimized 10:1 zoom ratio.",
    specs: {"Optical system":"Telescope type system","Zoom range":"0.63X – 6.3X (zoom ratio 1: 10.0)","Total mag. range":"3.15X – 378X (with DFPL2X-4)","Aperture diaphragm":"Built-in","Zoom click stop":"Click stop equipped (releasable)","Working distance":"171 mm (with DFPL 0.5X) – 33.5 mm (with DFPL2X-4)","Observation tube":"SZX2-TR30/SZX2-TR30PT: 30 degree trinocular, 30° inclination\nSZX2-TTR/SZX2-TTRPT: tilting trinocular, 5 – 45° variable inclination\nSZX-BI45: 45° binocular, 45° inclination\nSZX-BI30: 30° binocular, 30° inclination\nSZX2-LTTR: Ergonomic long tilting trinocular, 5 – 45° variable inclination","Extendable eyepoint adjuster":"SZX2-EEPA: Height adjustment range: 30 – 150 mm (with a scale attached)","Objective":"DFPL1.5X-4, DFPL2X-4, DFPLAPO1.25X, SZX-ACH1.25X-2, DFPLAPO1X-4, SZX-ACH1X, DFPL0.5X-4, DFPL0.75X-4","Eyepiece":"WHN10X-H (FN 22), WHSZ10X-H (FN 22), WHSZ15X-H (FN 16), WHSZ20X-H (FN 12.5), WHSZ30X-H (FN 7)","Focusing":"SZX2-FOA: Motorized focus unit, focusing stroke 78 mm\nSZX2-FOFH: Fine focusing unit for heavy loading, stroke 80 mm\nSZX2-FOF: Fine focusing unit, coarse handle stroke 80 mm, fine handle stroke 80 mm\nSZX2-FO: Focusing unit, coarse handle stroke 80 mm","Accessories":"Fluorescence illuminator, coaxial illuminator, light beam splitter, drawing attachment, side by side discussion tube, etc.","Dimensions":"268 mm × 386 mm × 410 mm (Standard Set Configuration)\n(W × D × H)"},
    extraInfo: {
      features: [
        "Distortion-free imaging with natural color reproduction",
        "High NA objectives for detailed sample analysis",
        "Built-in aperture diaphragm for controlling depth of field and contrast",
        "Modular design accommodates various lighting and imaging accessories",
        "Ergonomic components to prevent fatigue during long observations"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-ckx53", name: "Olympus CKX53", slug: "olympus-ckx53",
    category: "inverted", brand: "Olympus", model: "CKX53",
    image: "/images/products/olympus/ckx53.png",
    magnification: "40x - 400x", eyepiece: "10X (FN 22)", illumination: "LED",
    application: "Inverted Cell Culture Microscope",
    description: "The CKX53 inverted microscope provides high-quality phase contrast and brightfield imaging in a compact design. It streamlines the cell culture workflow with its easy-to-use operation and stable observation.",
    specs: {"Illumination":"Entry: Brightfield, Phase Contrast\nStandard: Brightfield, Phase Contrast, Fluorescence","Focusing":"Revolving nosepiece vertical movement system using the coarse and fine focusing knobs.\nStroke: 20 mm (Focal point: up to 18.5 mm from the plain stage top surface)\nStroke per rotation: 36.8 mm (Coarse), 0.3 mm (Fine)","Plain stage":"252 mm (D) × 200 mm (W)\nExchangeable transparent insert plate is incorporated\nXY coaxial knob place on right side of the plain stage","Mechanical stage":"Microplate holder equipped with the escape function\nstage stroke: X = 110 mm, Y = 74 mm\nSubstage: 180 mm (D) × 70 mm (W)","Condenser":"Maximum numerical aperture: 0.3\nWorking distance: 72 mm\nApplicable objective magnification 2X, 4X, 10X, 20X and 40X\nup to 190 mm height tissue flask can be loaded on the stage without detachable condenser","Observation tube":"Fixed Trinocular tube, inclined 45 degrees\nInterpupillary distance 48 – 75 mm\nLight path: eyepiece/camera port = 100/0 ⇔ 0/100","Dimensions":"200 mm × 498 mm × 454 mm (Phase contrast entry configuration)\n(W × D × H)","Weight":"6.9 kg / 7.1 kg / 8.4 kg / 12.5 kg"},
    extraInfo: {
      features: [
        "Integrated Phase Contrast (iPC) system eliminates the need to change ring slits for 4X, 10X, 20X, and 40X objectives",
        "Compact footprint fits easily inside a clean bench",
        "Inverted design optimized for checking cell culture in flasks and multi-well plates",
        "Long-lasting LED provides uniform illumination and saves energy",
        "Optional fluorescence observation capability"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-ix73", name: "Olympus IX73", slug: "olympus-ix73",
    category: "inverted", brand: "Olympus", model: "IX73",
    image: "/images/products/olympus/ix73.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22)", illumination: "LED/Halogen",
    application: "Inverted Research Microscope",
    description: "The IX73 inverted microscope is designed for routine to advanced research applications. Its modular deck system allows you to add or swap components like fluorescence turrets and magnification changers.",
    specs: {"Optical system":"UIS2 optical system","Revolving nosepiece":"Coded sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure\nMotorized sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure","Focus":"Stroke: 10 mm\nMinimum increment: 0.01 μm,\nMaximum nosepiece movement speed: 3 mm/s","Intermediate port":"2 ports (IX73P2F), 1 port (IX73P1F)","Light path selection":"Manual 0:100/50:50/100:0 (Left side port: BI port)","Observation tube":"Widefield (FN 22)\nWidefield tilting binocular\nWidefield binocular","Stage":"Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm, including stage insert plate (ø25 mm), stage insert plate exchangeable (Ø110 mm)\nCross stage with right handle: Stage stroke: X: 50 mm x Y: 50 mm, including stage insert plate (ø25 mm), stage insert plate exchangeable (Ø110 mm)\nMechanical stage with right handle: Stage stroke: X: 114 mm x Y: 75 mm, stage position locking function","Condenser":"Mid long working distance: NA 0.5, W.D. 45 mm, 4 positions for optical devices (for ø50 mm, relief contrast optical devices rotatable)\nMotorized middle long working distance: NA 0.5, W.D. 45 mm, 4 positions for optical devices (for ø50 mm, relief contrast optical devices rotatable)","Transmitted light illuminator":"Pillar tilt mechanism (30° inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High color reproductive LED light source\n12 V, 100 W halogen bulb (pre-centered)","Operating environment":"Indoor use\nAmbient temperature: 5° to 40°C (41° to 104°F)\nMaximum relative humidity: 80% for temperatures up to 31°C (88°F), decreasing linearly to 50% at 40°C (104°F)\nSupply voltage fluctuations: Not to exceed ±10% of the normal voltage"},
    extraInfo: {
      features: [
        "Modular deck design for unprecedented customization and flexibility",
        "High rigidity frame ensures stability for time-lapse and live-cell imaging",
        "Fly-eye lens fluorescence illuminator provides incredibly even illumination",
        "Supports advanced imaging techniques like TIRF and spinning disk confocal",
        "Ergonomic manual controls for quick and intuitive operation"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-ix83", name: "Olympus IX83", slug: "olympus-ix83",
    category: "inverted", brand: "Olympus", model: "IX83",
    image: "/images/products/olympus/ix83.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22)", illumination: "LED/Halogen",
    application: "Motorized Inverted Microscope",
    description: "The fully motorized IX83 inverted microscope is the ultimate platform for live-cell imaging. Its highly rigid deck structure provides outstanding stability for long-term time-lapse experiments.",
    specs: {"Optical system":"UIS2 optical system","Revolving nosepiece":"Motorized sextuple revolving nosepiece (DIC slider attachable), simple waterproof structure","Focus":"Stroke: 10.5 mm\nMinimum increment: 0.01 μm,\nMaximum nosepiece movement speed: 3 mm/s","Focus compensator":"TruFocus: Offset method (Focus search, one-shot focus, continuous focus), Class 1 laser product, laser wavelength: 830 nm\nZ drift compensator","Intermediate port":"1 port (IX83P1ZF)","Light path selection":"Motorized 0:100/50:50/100:0 (Left side port: BI port)","Observation tube":"Widefield (FN 22)\nWidefield tilting binocular\nWidefield binocular","Stage":"Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm, including stage insert plate (ø25 mm), stage insert plate exchangeable (Ø110 mm)\nCross stage with right handle: Stage stroke: X: 50 mm x Y: 50 mm, including stage insert plate (ø25 mm), stage insert plate exchangeable (Ø110 mm)\nMechanical stage with right handle: Stage stroke: X: 114 mm x Y: 75 mm, stage position locking function\nMotorized stage: IX5-SSA: Stage stroke: X: 116 mm x Y: 78 mm, maximum stage movement speed: 40 mm/s, Knob controller","Condenser":"Long working distance universal: NA 0.55, W.D. 27 mm, 5 positions for optical devices (3 positions for ø30 mm and 2 position for ø38 mm)\nMotorized long working distance: W.D. 27 mm, NA 0.55, motorized turret with 7 position slots for optical devices (3 positions for ø30 mm and 4 positions for ø38 mm), motorized aperture and polarizer\nUltra long working distance: NA 0.3, W.D. 73.3 mm, 4 positions for optical devices (for ø29 mm)","Fluorescence illuminator":"L-shaped fluorescence illuminator with fly-eye lens (IX3-RFALFE)\nL-shaped design with exchangeable FS and AS modules, slider shutter and ND filter pocket","Fluorescence mirror turret":"Motorized fluorescence mirror turret (IX3-RFACA)\nCoded fluorescence mirror turret (IX3-RFACS)\nMotorized turret with 8 positions, built-in shutter, simple waterproof structure","Fluorescence light source":"LED and LDP light source (U-LGPS)\n3rd party LED light source","Transmitted light illuminator":"Pillar tilt mechanism (30° inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High color rendering LED (IX3-LHLEDC)\n12 V 100 W halogen (U-LH100L)","Imaging software":"cellSens Standard\ncellSens Dimension","Accessories":"TruFocus system (IX3-ZDC2)\nRemote correction collar controller (IX3-RCC)\nReal-time controller (U-RTC/U-RTCe)\nIncubation housing","Operating environment":"Indoor use\nAmbient temperature: 5° to 40°C (41° to 104°F)\nMaximum relative humidity: 80% for temperatures up to 31°C (88°F), decreasing linearly to 50% at 40°C (104°F)\nSupply voltage fluctuations: Not to exceed ±10% of the normal voltage"},
    extraInfo: {
      features: [
        "Fully motorized operation for complex, multi-dimensional (X, Y, Z, T, λ) imaging",
        "Z-drift compensation (ZDC) module keeps samples perfectly in focus over days",
        "Ultrasonic motorized stage offers silent, smooth, and highly precise movement",
        "Modular decks allow integration of TIRF, FRAP, and multiphoton modules",
        "Superior thermal and mechanical stability for live-cell experiments"
      ]
    },
    inStock: true, featured: true, badge: "Premium"
  },
  {
    id: "oly-ix85", name: "Olympus IX85", slug: "olympus-ix85",
    category: "inverted", brand: "Olympus", model: "IX85",
    image: "/images/products/olympus/ix85.png",
    magnification: "40x - 1000x", eyepiece: "10X (FN 22)", illumination: "LED/Laser",
    application: "Advanced Research Inverted Microscope",
    description: "IX85 adalah mikroskop riset *inverted* generasi terbaru, menampilkan desain sistem terbuka (*open-stand*) dengan opsi kustomisasi yang ekstensif untuk resolusi super dan aplikasi konfokal tingkat lanjut.",
    specs: {"Optical system":"UIS2 optical system","Microscope frame":"IX85P1ZF / IX85P2ZF","Revolving nosepiece":"Motorized 6-position revolving nosepiece (DIC slider attachable)\nSimple water proof structure\nOne position for Automated Correction Collar","Focus":"Stroke: 10.5 mm\nMinimum increment: 0.01 μm,\nMaximum nosepiece movement speed: 3 mm/s","Intermediate Magnification Changer":"3 positions (Coded): 1X / 1.6X / 2X","Deck insert layer":"1 layer / 2 layers","Light path selection":"Motorized 4 positions\nEyepiece 100%, left 100%, right 100%, eyepiece 50%/left 50%","Maximum port field number":"Left/Right side port: FN26.5 / FN18\nBI port: FN22\nDeck right side port: FN18","Observation tube":"U-BI90 Wide field binocular\nU-TBI90BK Wide field tilting binocular\nU-TR30-2/U-TR30NIR Wide field trinocular\nWidefield (FN22)","Stage":"Mechanical stage with left handle: Stage stroke: X: 50 mm x Y: 43 mm\nMechanical stage with right handle: Stage stroke: X: 116 mm x Y: 78 mm, stage position locking function\nRight handle stage: Stage stroke: X: 50 mm x Y: 50 mm\nGliding stage: Upper circular stage 360° rotatable, 20 mm (X/Y) travel\nPlain stage: 232 mm (X) x 240 mm (Y) stage size, stage insert plate exchangeable (ø110 mm)\nMotorized stage: IX5-SSA: Stage stroke: X: 116 mm x Y: 78 mm, maximum stage movement speed: 40 mm/s, Knob controller","Condenser":"Long working distance universal: NA 0.55, W.D. 27 mm 5 positions for optical devices (3 positions for ø30 mm and 2 position for ø38 mm)\nMotorized long working distance: W.D. 27 mm, NA 0.55, motorized turret with 7 position slots for optical devices, motorized aperture and polarizer\nUltra long working distance: NA 0.3, W.D. 73.3 mm, 4 positions for optical devices (for ø29 mm)","Transmitted light illuminator":"Pillar tilt mechanism (30° inclination angle, with vibration reducing mechanism),\nCondenser holder (with 88 mm stroke, refocusing mechanism),\nField iris diaphragm adjustable, 4 filter holders\nLight source: High power LED light source","Focus compensator":"TruFocus: Offset method (Focus search, one-shot focus, continuous focus), Class 1 laser product, laser wavelength: 830 nm\nZ drift compensator","Control unit":"Control unit (IX5-MCZ): ON/OFF, DIA LED power, DIA LED ON/OFF, 4 customizable buttons\nNosepiece position, light path selection, filter turret position, FL shutter","Control box":"PC interface: USB (Type-C), RS-232C","Fluorescence illuminator":"L-shape-fluorescence illuminator ND filter pocket\nL-shaped design with exchangeable FS and AS modules, slider shutter","Fluorescence mirror turret":"Motorized fluorescence mirror turret\nMotorized turret with 8 positions, built-in shutter, simple waterproof structure","Fluorescence light source":"U-LGPS: LED and LDP light source, Class 1 laser product\n3rd party LED light source","Imaging software":"cellSens Standard\ncellSens Dimension","Super resolution processing":"Olympus super-resolution (OSR) filter","Accessories":"TruFocus system (IX3-ZDC2)\nRemote correction collar controller (IX3-RCC)\nReal-time controller (U-RTC/U-RTCe)\nIncubation housing\nConfocal scanner: Spinning disk confocal scanner\nTIRF Illuminator: cellTIRF","Dimensions":"540 mm (D) x 321 mm (W) x 667 mm (H) / 540 mm (D) x 321 mm (W) x 732 mm (H)\n(IX85 Microscope frame with illumination pillar)","Operating environment":"Indoor use\nAmbient temperature: 5° to 40°C (41° to 104°F)\nMaximum relative humidity: 80% for temperatures up to 31°C (88°F), decreasing linearly to 50% at 40°C (104°F)\nSupply voltage fluctuations: Not to exceed ±10% of the normal voltage"},
    extraInfo: {
      features: [
        "Open-stand architecture provides massive space for custom optical setups",
        "Optimized for cutting-edge techniques like super-resolution and multiphoton",
        "Exceptional frame rigidity to handle heavy camera and laser modules without vibration",
        "Advanced real-time focus tracking for long-term experiments",
        "Seamless integration with cellSens software for fully automated workflows"
      ]
    },
    inStock: true, featured: false
  },
  {
    id: "oly-fv5000", name: "Olympus FLUOVIEW FV5000", slug: "olympus-fv5000",
    category: "fluorescence", brand: "Olympus", model: "FV5000",
    image: "/images/products/olympus/fv5000.png",
    magnification: "Varies", eyepiece: "Varies", illumination: "Laser",
    application: "Confocal Laser Scanning Microscope",
    description: "The FLUOVIEW FV5000 confocal laser scanning microscope redefines 3D imaging with unparalleled speed, sensitivity, and macro-to-micro capabilities for deep tissue and live-cell research.",
    specs: {"Scanner":"Galvanometer scanner: 64 x 64 – 8192 x 8192 pixels, 0.2 μs/pixel – 1000 μs/pixel\nResonant scanner: 512 x 512 pixels, 1024 x 1024 pixels, 2048 x 2048 pixels","Field number":"20 (for both scanner types)","Spectral confocal detector":"Detector: SilVIR detector (cooled SiPM, broadband type/red-shifted type)\nMaximum channels: Six channels\nSpectral method: VPH, detectable wavelength range: 400 nm - 900 nm","Laser":"VIS laser: 405 nm, 445 nm, 488 nm, 514 nm, 561 nm, 594 nm, 640 nm\nNIR laser: 685 nm, 730 nm, 785 nm","Laser power monitor":"Built in","Image":"High dynamic range photon counting (1G cps, 16-bit)"},
    extraInfo: {
      features: [
        "Silicone oil immersion objectives for deep, bright imaging of thick tissues",
        "Resonant scanner enables ultra-fast imaging to capture dynamic cellular events",
        "High-sensitivity GaAsP detectors minimize laser power to reduce phototoxicity",
        "Intuitive macro-to-micro workflow for navigating large specimens",
        "TruSpectral detection technology for high-resolution spectral unmixing"
      ]
    },
    inStock: true, featured: false, badge: "Premium"
  },
  {
    id: "oly-ep50", name: "Olympus EP50", slug: "olympus-ep50",
    category: "digital", brand: "Olympus", model: "EP50",
    image: "/images/products/olympus/ep50.png",
    magnification: "N/A", eyepiece: "N/A", illumination: "N/A",
    application: "Wireless Educational Camera",
    description: "The EP50 color camera makes digital classroom documentation easy. With its built-in WLAN network, students can use their smartphones or tablets to view, capture, and share images wirelessly.",
    specs: {"Image Sensor":"Color CMOS","Sensor Size":"1/1.8 inch (7.140 mm × 4.980 mm)","Resolution":"2592 x 1944 pixels (Snapshot only)\n1920 x 1080 pixels (HDMI, WLAN, on PC)","Pixel Size":"2.4 × 2.4 μm","A/D Converter":"8 bits","Exposure Times":"1 ms – 918 ms","Live Frame Rates":"Up to 60 fps (HDMI output, 1920 x 1080 pixels)\nUp to 25 fps (WLAN output, 1920 x 1080 pixels)\nUp to 30 fps (on PC, 1920 x 1080 pixels)\nSnapshot only (2592 x 1944 pixels)","Data Transfer":"HDMI, WLAN (using the WLAN adapter), Ethernet (using the USB-to-Ethernet adapter)","PC Control":"Microsoft Windows 10 (64 bit)\nMicrosoft Windows 11 (64 bit)","Camera Mount":"C-mount","Storage":"SD (HC I; UHS-I, Class 10)","Dimensions":"78 mm × 65 mm × 88 mm (3.08 in. × 2.56 in. × 3.47 in.)\n(W × D × H)","Weight":"Approx. 470 g (1.04 lb)"},
    extraInfo: {
      features: [
        "Stand-alone operation without a PC using a monitor and mouse via HDMI",
        "Create a local wireless network for up to 6 mobile devices",
        "Fast 60 fps frame rate provides smooth, lag-free live viewing",
        "Perfect for interactive digital classrooms and training environments",
        "Easy-to-use OSD menu for capturing images and recording video directly to an SD card"
      ]
    },
    inStock: true, featured: false, badge: "Camera"
  },
  {
    id: "oly-lc35", name: "Olympus LC35", slug: "olympus-lc35",
    category: "digital", brand: "Olympus", model: "LC35",
    image: "/images/products/olympus/lc35.png",
    magnification: "N/A", eyepiece: "N/A", illumination: "N/A",
    application: "Standard Microscope Camera",
    description: "The LC35 microscope camera delivers excellent value for standard brightfield imaging applications. It provides detailed, accurate color images for routine documentation.",
    specs: {"Image Sensor":"Color CMOS","Sensor Size":"1/2.5-inch","Resolution (max)":"2160 x 1620 pixels\n1920 x 1080 pixels (full HD 16:9)\n1296 x 972 pixels (fast mode)","Pixel Size":"2.64 × 2.64 μm","A/D Converter (Bit Depth)":"10-bits","Exposure Time":"25 μs – 1.5 s","Live Frame Rates":"Up to 19 fps at 2160 x 1620 pixels (full resolution)\nUp to 25 fps at 1920 x 1080 pixels (full HD)\nUp to 40 fps at 1296 x 972 pixels (fast mode)","Data Transfer":"USB 3.1 Gen1 Type-C","PC Requirements":"CPU: Intel® Xenon, Intel® Core i5, i7, i9, or the equivalent\nRAM: 8 GB\nRecommended: 4 or more physical CPU cores, 8 GB RAM (dual channel)","PC Control":"Windows 10 64-bit","Imaging Platform":"cellSens Entry, Standard, and Dimension v. 3.2 or higher\nOlympus Stream Start, Basic, and Essentials v.2.5 or higher\nPRECiV Capture, Core, and Pro v1.1 or higher\nLCmicro\nDP2-TWAIN","Camera Mount":"C-mount","Dimensions":"47 mm × 46 mm × 28.8 mm (1.9 in. × 1.7 in. × 1.13 in.)\n(W × D × H)","Weight":"Approx. 33 g (1.16 oz)"},
    extraInfo: {
      features: [
        "Cost-effective solution for brightfield documentation",
        "USB 3.1 interface for fast data transfer and responsive live images",
        "Accurate color reproduction for H&E and other common stains",
        "Seamless integration with Olympus imaging software",
        "Compact design easily fits on any microscope"
      ]
    },
    inStock: true, featured: false, badge: "Camera"
  },
  {
    id: "oly-dp23", name: "Olympus DP23", slug: "olympus-dp23",
    category: "digital", brand: "Olympus", model: "DP23",
    image: "/images/products/olympus/dp23.png",
    magnification: "N/A", eyepiece: "N/A", illumination: "N/A",
    application: "Color Microscope Camera",
    description: "The DP23 digital microscope camera delivers high-resolution images and excellent color accuracy for clinical research, life science, and materials science applications.",
    specs: {"Camera type":"C-mount CCD camera head","Image Sensor":"1/1.8 inch color CCD","Effective pixels":"2.83 million pixels (total pixels: 2.98 million pixels)","Scanning mode":"Progressive scan","Color filter":"RGB primary color on-chip filters","Maximum recorded pixels":"2.76 megapixels (1920 x 1440)","Recording range":"7.08 mm (H) × 5.31 mm (V), 8.8 mm (diagonal length)","ISO Sensitivity":"Equivalent to ISO 200/400/800","Camera mount":"C-mount","Image size":"Stand Alone: TIFF 1920 x 1440, JPEG-LOW (1/2.7) 1920 x 1080, JPEG-HIGH (1/8) 960 x 720\nPC Connection: File format according to cellSens specifications","Video recording":"AVI 960 x 720","Live image display (frame rate)":"1920 x 1440: 25 fps / 25 fps\n1920 x 1080: 30 fps / 28 fps\n960 x 720: 25 fps / 25 fps"},
    extraInfo: {
      features: [
        "Smart image averaging feature reduces noise for crystal-clear images",
        "Wide field of view captures more of your sample in a single shot",
        "Exceptional color fidelity for demanding staining evaluations",
        "Fast 60 fps live image makes panning and focusing comfortable",
        "Network capabilities for easy image sharing"
      ]
    },
    inStock: true, featured: false, badge: "Camera"
  },
  {
    id: "oly-dp28", name: "Olympus DP28", slug: "olympus-dp28",
    category: "digital", brand: "Olympus", model: "DP28",
    image: "/images/products/olympus/dp28.png",
    magnification: "N/A", eyepiece: "N/A", illumination: "N/A",
    application: "4K Color Microscope Camera",
    description: "The DP28 camera delivers stunning 4K resolution images, providing incredible detail and accurate color for conferences, teaching, and publication-ready documentation.",
    specs: {"Camera type":"Single chip color CCD camera","Image Sensor":"2/3 inch color CCD","Effective pixels":"5.05 megapixels (total: 5.24 megapixels)","Scanning mode":"Progressive scan","Color filter":"RGB Bayer primary color filter","Recording range":"8.45 mm (H) × 6.62 mm (V), 10.733 mm (diagonal length)","Maximum recorded pixels":"4.7 megapixels (2448 x 1920)","ISO Sensitivity":"Equivalent to ISO 100/200/400","Camera mount":"C-mount","Image size":"Stand-alone: TIFF 2448 x 1920, JPEG-LOW (1/2.7) 1920 x 1080, JPEG-HIGH (1/8) 1224 x 960\nPC connection: File format according to cellSens specifications","Video (AVI)":"1224 x 960","Live image display (frame rate)":"2448 x 1920: 15 fps / 15 fps\n1920 x 1080: 22 fps / 22 fps\n1224 x 960: 30 fps / 30 fps"},
    extraInfo: {
      features: [
        "Breathtaking 4K resolution on a large 1-inch sensor",
        "Global shutter eliminates rolling shutter artifacts for distortion-free panning",
        "Olympus Smart Image Averaging (OSIA) actively suppresses noise without leaving artifacts",
        "Ideal for presenting detailed pathology or histology slides on large 4K monitors",
        "Incredible color accuracy and sensitivity"
      ]
    },
    inStock: true, featured: false, badge: "Camera"
  },
  {
    id: "oly-dp75", name: "Olympus DP75", slug: "olympus-dp75",
    category: "digital", brand: "Olympus", model: "DP75",
    image: "/images/products/olympus/dp75.png",
    magnification: "N/A", eyepiece: "N/A", illumination: "N/A",
    application: "High-Performance Hybrid Camera",
    description: "The DP75 is a high-performance hybrid camera that captures brightfield and fluorescence images with exceptional quality, eliminating the need to switch between multiple cameras.",
    specs: {"Camera type":"Single-chip color camera (pixel shifting)\nCooling system: Peltier device (active cooling)","Image Sensor":"1.1-inch, 12.37-megapixel color CMOS image sensor","Scanning mode":"Progressive scan","Camera mount":"C-mount","Effective image resolution":"8192 x 6000 (pixel shifting)\n4096 x 3000 (3CMOS mode)\n4096 x 3000 (1 x 1)\n3840 x 2160 (1 x 1) (by cropped)\n2048 x 1500 (2 x 2)\n2048 x 1500 (1 x 1)\n1920 x 1080 (1 x 1), ROI","ISO Sensitivity":"ISO 100/200/400/800/1600/3200","A/D":"12-bit","Live frame rate":"4096 x 3000 (1 x 1): 22 fps\n2048 x 1500 (1 x 1): 44 fps\n2048 x 1500 (2 x 2): 22 fps\n1920 x 1080 (1 x 1): 60 fps","Macro optical system":"Built-in, 0.07x macro optics","Anti-vibration mechanism":"Built-in","Magnification changer":"Color/Monochrome 0.5x fixed","Focusing":"Motorized focusing with automatic control","Stage":"Motorized XY stage with automatic control","Transmitted illuminator":"Built-in Köhler illumination for transmitted light,\nTransmitted high color rendering LED\nCondenser: WD 45 mm, including PHL, PH1, PH2, and PH3","Objectives":"Choose from 25 available objectives (4X–100X)\nSix-position motorized revolving nosepiece\nMotorized aberration correction: One motorized position, five standard positions","Observation Method":"Brightfield, fluorescence, phase contrast, gradient contrast","Sample holder":"Glass slides (3 slides), 35 mm dish (3 dishes), microplate, general","Fluorescence":"Fluorescence illuminator with fly-eye lens\nChoose from 18 mirror cubes; eight-position motorized mirror turret\nHigh brightness light guide light source (U-LGPS), motorized ND filter changer (100%, 25%, and 6%)","Camera Color":"6.41 megapixels, 1/1.8 color CMOS","Camera Monochrome":"6.41 megapixels, 1/1.8 monochrome CMOS"},
    extraInfo: {
      features: [
        "Dual functionality captures stunning color images and highly sensitive fluorescence",
        "Linear cooling minimizes thermal noise for faint fluorescence signals",
        "Pixel-shift technology produces ultra-high resolution images",
        "Fast live frame rates for smooth navigation across the specimen",
        "Simplifies microscope setups by combining two cameras into one"
      ]
    },
    inStock: true, featured: false, badge: "Premium"
  },
// ===== OPTILAB CATALOG PRODUCTS =====
  {
    id: "op-cat-1", name: "OptiLab Iris-2 Binocular", slug: "optilab-iris-2-binocular",
    category: ["laboratory", "student"], brand: "OptiLab", model: "Iris-2 Binocular",
    image: "/images/products/optilab-iris-2.png",
    magnification: "40x - 1000x", eyepiece: "WF 10x/20 mm", illumination: "3W LED Illumination System",
    application: "Klinik, Lab",
    description: "Mikroskop biologi binokuler yang didesain ergonomis, ideal untuk penggunaan klinis, laboratorium, pengajaran, dan demonstrasi. Dilengkapi sistem pencahayaan asferis dan fitur backup baterai Li-ion.",
    specs: { "Illumination": "3W LED Illumination System", "Focusing": "Coaxial Coarse and Fine Focusing Knobs, Travel Range: 26mm, Scale: 2um", "Nosepiece": "Quadplex, Quintuple (Optional)", "Stage": "Stage Size 145mm x 140mm, Travel: 76mm x 52mm, Scale 0.1mm, Two Slide Holder. Optional: Integrated Stage", "Condenser": "Abbe N.A 1.25 (Iris Diaphragm)", "Eyepiece": "WF 10x/20 mm (Standard), WF 10x/18 mm (Optional)", "Objective": "Finity Plan 4X, 10X, 40X/0.65 (S), 100X/1.25 (Oil) (S). Optional: Infinity Plan Objectives, Plan 20X, Plan 60X", "Head": "Binocular Seidentopf, Inclined 30°, Rotatable 360°, Interpupilary Distance 48-75 mm. Optional: Trinocular Head", "Back Up System": "Li-ion Battery 3000 mAH" },
    inStock: true, featured: false, badge: "TKDN (Optional)"
  },
  {
    id: "op-cat-2", name: "OptiLab Iris-4 Binocular", slug: "optilab-iris-4-binocular",
    category: ["laboratory", "student"], brand: "OptiLab", model: "Iris-4 Binocular",
    image: "/images/products/optilab-iris-4.png",
    magnification: "40x - 1000x", eyepiece: "WF 10x/20 mm", illumination: "3W LED Illumination System",
    application: "Klinik, Lab, Riset",
    description: "Mikroskop biologi binokuler dengan sistem optik infinity plan untuk resolusi dan definisi terbaik. Cocok untuk aplikasi klinis dan laboratorium tingkat lanjut.",
    specs: { "Illumination": "3W LED Illumination System", "Focusing": "Coaxial Coarse and Fine Focusing Knobs, Travel Range: 26mm, Scale: 2um", "Nosepiece": "Quadplex, Quintuple (Optional)", "Stage": "Stage Size 145mm x 140mm, Travel: 76mm x 52mm, Scale 0.1mm, Two Slide Holder. Optional: Integrated Stage", "Condenser": "Abbe N.A 1.25 (Iris Diaphragm)", "Eyepiece": "WF 10x/20 mm (Standard), WF 10x/18 mm (Optional)", "Objective": "Infinity Plan 4X, 10X, 40X (S), 100X (Oil) (S). Optional: Finity Plan Objectives, Plan 20X, Plan 60X", "Head": "Binocular Seidentopf, Inclined 30°, Rotatable 360°, Interpupilary Distance 48-75 mm. Optional: Trinocular Head", "Back Up System": "Li-ion Battery 3000 mAH" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-3", name: "OptiLab Iris-4 Trinocular", slug: "optilab-iris-4-trinocular",
    category: ["laboratory", "student"], brand: "OptiLab", model: "Iris-4 Trinocular",
    image: "/images/products/optilab-iris-4.png",
    magnification: "40x - 1000x", eyepiece: "WF 10x/20 mm", illumination: "3W LED Illumination System",
    application: "Dokumentasi, Klinik, Lab, Riset",
    description: "Mikroskop biologi trinokuler dengan port kamera untuk dokumentasi digital. Sistem optik infinity plan memberikan gambar yang luar biasa tajam.",
    specs: { "Illumination": "3W LED Illumination System", "Focusing": "Coaxial Coarse and Fine Focusing Knobs, Travel Range: 26mm, Scale: 2um", "Nosepiece": "Quadplex, Quintuple (Optional)", "Stage": "Stage Size 145mm x 140mm, Travel: 76mm x 52mm, Scale 0.1mm, Two Slide Holder. Optional: Integrated Stage", "Condenser": "Abbe N.A 1.25 (Iris Diaphragm)", "Eyepiece": "WF 10x/20 mm (Standard), WF 10x/18 mm (Optional)", "Objective": "Infinity Plan 4X, 10X, 40X (S), 100X (Oil) (S). Optional: Finity Plan Objectives, Plan 20X, Plan 60X", "Head": "Trinocular Seidentopf, Inclined 30°, Rotatable 360°, Interpupilary Distance 48-75 mm, Light Distribution 20:80. Optional: Binocular Head", "Back Up System": "Li-ion Battery 3000 mAH" },
    inStock: true, featured: true, badge: "TKDN"
  },
  {
    id: "op-cat-4", name: "OptiLab Iris-4 Stereo Binocular", slug: "optilab-iris-4-stereo-binocular",
    category: "stereo", brand: "OptiLab", model: "Iris-4 Stereo Binocular",
    image: "/images/products/optilab-stereo-bino-v2.png",
    magnification: "6.8x - 47x", eyepiece: "WF 10X/24 mm", illumination: "3W LED (Transmiting & Reflecting)",
    application: "Industri, Elektronik, Mineral",
    description: "Mikroskop stereo binokuler dengan rasio zoom tinggi, banyak digunakan di bidang logam, mineral, dan elektronik. Desain modern dan ergonomis.",
    specs: { "Illumination": "Transmiting 3W LED, Reflecting 3W LED", "Eyepiece": "WF 10X/24 mm", "Zoom Ratio": "1:6.8", "Magnification": "6.8 - 47X", "Head Type": "Binocular Stereo", "Viewing Angle": "35°", "Stereo Angle": "12°", "Working Distance": "110 mm", "Field Diameter": "23 mm", "Interpupillary Distance": "50 - 75 mm", "Focusing Distance": "Pilar Stand 115mm / Guide Rail Stand 80mm", "Battery": "Li-ion Battery 3000 mAH", "Base": "330x300mm", "Plate": "Black & White" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-5", name: "OptiLab Iris-4 Stereo Trinocular", slug: "optilab-iris-4-stereo-trinocular",
    category: "stereo", brand: "OptiLab", model: "Iris-4 Stereo Trinocular",
    image: "/images/products/optilab-stereo-trino-v2.png",
    magnification: "6.8x - 47x", eyepiece: "WF 10X/24 mm", illumination: "3W LED (Transmiting & Reflecting)",
    application: "Industri, Dokumentasi Digital",
    description: "Mikroskop stereo trinokuler dengan rasio zoom tinggi dan port tambahan untuk kamera digital. Ideal untuk analisis dan dokumentasi spesimen 3D.",
    specs: { "Illumination": "Transmiting 3W LED, Reflecting 3W LED", "Eyepiece": "WF 10X/24 mm", "Zoom Ratio": "1:6.8", "Magnification": "6.8 - 47X", "Head Type": "Trinocular Stereo", "Viewing Angle": "35°", "Stereo Angle": "12°", "Working Distance": "110 mm", "Field Diameter": "23 mm", "Interpupillary Distance": "50 - 75 mm", "Focusing Distance": "Pilar Stand 115mm / Guide Rail Stand 80mm", "Battery": "Li-ion Battery 3000 mAH", "Base": "330x300mm", "Plate": "Black & White" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-6", name: "OptiLab Advance Lite", slug: "optilab-advance-lite",
    category: "digital", brand: "OptiLab", model: "Advance Lite",
    image: "/images/products/optilab-advance.png",
    magnification: "Tergantung Mikroskop", eyepiece: "Digital (PC/Laptop)", illumination: "N/A",
    application: "Dokumentasi Dasar, Edukasi",
    description: "Kamera digital untuk mikroskop dengan sensor Sony IMX307. Mendukung dokumentasi foto dan video dalam format Full HD yang dihubungkan melalui USB 2.0.",
    specs: { "Sensor": "1/2.8\"", "Output Interface": "USB 2.0", "Resolusi Foto": "1920x1080", "Resolusi Video": "26 fps@640x480, 38 fps@960x540, 38 fps@1920x1080", "Software": "Optilab Viewer 4", "System Minimum": "Intel core i3 or Higher, 2GB RAM, 500MB Hard disk space", "OS": "Windows 7/8/10 – 32/64 bit", "Exposure & White Balance": "Automatic and Manual", "Mount": "C-mount to 23.2mm Adapter (With Reduction Lens Included)" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-7", name: "OptiLab Advance Observer", slug: "optilab-advance-observer",
    category: "digital", brand: "OptiLab", model: "Advance Observer",
    image: "/images/products/optilab-advance.png",
    magnification: "Tergantung Mikroskop", eyepiece: "Digital (PC/Laptop)", illumination: "N/A",
    application: "Lab, Riset, Telepathology",
    description: "Kamera digital mikroskop kelas menengah dengan sensor Sony IMX335 (5MP). Mampu merekam video dan mengambil foto resolusi tinggi untuk kebutuhan analitik.",
    specs: { "Sensor": "1/2.8\"", "Output Interface": "USB 2.0", "Resolusi Foto": "2592x1944", "Resolusi Video": "20fps 960x760, 26 fps@1280x960, 26 fps@2592x1944", "Software": "Optilab Viewer 4", "System Minimum": "Intel core i3 or Higher, 2GB RAM, 500MB Hard disk space", "OS": "Windows 7/8/10 – 32/64 bit", "Exposure & White Balance": "Automatic and Manual", "Mount": "C-mount to 23.2mm Adapter (With Reduction Lens Included)" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-8", name: "OptiLab Advance Plus", slug: "optilab-advance-plus",
    category: "digital", brand: "OptiLab", model: "Advance Plus",
    image: "/images/products/optilab-advance.png",
    magnification: "Tergantung Mikroskop", eyepiece: "Digital (PC/Laptop)", illumination: "N/A",
    application: "Dokumentasi Profesional, Publikasi",
    description: "Kamera digital mikroskop premium dengan sensor Sony IMX577. Mengambil gambar resolusi 4K (3840x3040) dengan kualitas superior untuk riset dan publikasi.",
    specs: { "Sensor": "1/2.3\"", "Output Interface": "USB 2.0", "Resolusi Foto": "3840x3040", "Resolusi Video": "20fps 1920x1520, 20fps 3840x3040", "Software": "Optilab Viewer 4", "System Minimum": "Intel core i3 or Higher, 2GB RAM, 500MB Hard disk space", "OS": "Windows 7/8/10 – 32/64 bit", "Exposure & White Balance": "Automatic and Manual", "Mount": "C-mount to 23.2mm Adapter (With Reduction Lens Included)" },
    inStock: true, featured: true, badge: "TKDN"
  },
  {
    id: "op-cat-9", name: "OptiLab Sigma Full HD", slug: "optilab-sigma-full-hd",
    category: "digital", brand: "OptiLab", model: "Sigma Full HD",
    image: "/images/products/optilab-sigma.png",
    magnification: "Tergantung Mikroskop", eyepiece: "HDMI Monitor / PC", illumination: "N/A",
    application: "Presentasi, Diskusi Kasus",
    description: "Kamera digital mikroskop yang dilengkapi output ganda HDMI dan USB. Dilengkapi software internal untuk penggunaan tanpa PC (melalui mouse dan monitor).",
    specs: { "Sensor": "1/2.8” Sony IMX415", "Output Interface": "HDMI + USB 2.0", "Resolusi Foto": "1920x1080 (Full HD)", "Resolusi Video": "60fps @1920x1080 (HDMI), 30fps @1920x1080 (USB)", "Storage": "SD Card", "Software": "Internal Software (HDMI + Mouse) & Optilab Viewer 4", "System Minimum": "Intel core i3 or Higher, 2GB RAM, 500MB Hard disk space", "OS": "Windows 7/8/10 – 32/64 bit", "Exposure & White Balance": "Automatic and Manual", "Mount": "C-mount to 23.2mm Adapter (With Reduction Lens Included)" },
    inStock: true, featured: false, badge: "TKDN"
  },
  {
    id: "op-cat-10", name: "OptiLab Sigma 4K", slug: "optilab-sigma-4k",
    category: "digital", brand: "OptiLab", model: "Sigma 4K",
    image: "/images/products/optilab-sigma.png",
    magnification: "Tergantung Mikroskop", eyepiece: "HDMI Monitor / PC", illumination: "N/A",
    application: "High-End Riset, Konferensi",
    description: "Kamera mikroskop resolusi 4K ultra-high definition dengan output HDMI dan USB 3.0. Menghasilkan gambar paling detail untuk observasi presisi tinggi.",
    specs: { "Sensor": "1/1.8” Sony IMX678", "Output Interface": "HDMI + USB 3.0", "Resolusi Foto": "3840 x 2160 (4K)", "Resolusi Video": "72fps 3840x2160 (HDMI), 30 fps 3840x2160 (USB)", "Storage": "SD Card & Flashdisk", "Software": "Internal Software (HDMI + Mouse) & Optilab Viewer 4", "System Minimum": "Intel core i3 or Higher, 2GB RAM, 500MB Hard disk space", "OS": "Windows 7/8/10 – 32/64 bit", "Exposure & White Balance": "Automatic and Manual", "Mount": "C-mount to 23.2mm Adapter (With Reduction Lens Included)" },
    inStock: true, featured: true, badge: "TKDN"
  },
  {
    id: "op-cat-11", name: "OptiLab NVeCam", slug: "optilab-nvecam",
    category: "digital", brand: "OptiLab", model: "NVeCam",
    image: "/images/products/optilab-nvecam.png",
    magnification: "Digital", eyepiece: "Smartphone/Laptop", illumination: "Built-in LED",
    application: "Screening Kanker Serviks, IVA",
    description: "Kamera khusus skrining serviks (Cervical Screening Camera) yang sangat membantu mendeteksi kanker serviks melalui metode IVA. Mendukung koneksi WiFi tanpa aplikasi tambahan.",
    specs: { "Resolusi": "640 x 480 pixel", "Data Transmission": "WLAN 2.4 GHz", "User Interface": "Webpage", "Battery": "Lithium 3000mAh", "Input Power": "DC 5V 2A", "Field of View": "19 degree/6 cm", "Object Focal Distance": "18 cm", "Dimension": "140 x 55 x 60 mm" },
    inStock: true, featured: true, badge: "TKDN"
  },
  {
    id: "bone-1", name: "B-ONE BTNC-8-4100", slug: "bone-btnc-8-4100",
    category: ["laboratory", "digital", "student"], brand: "B-ONE", model: "BTNC-8-4100",
    image: "/images/products/b-one-btnc-clean.png",
    magnification: "40x - 1000x", eyepiece: "WF10x", illumination: "6V 20W Halogen",
    application: "Klinik, Edukasi, Laboratorium",
    description: "Mikroskop biologis dengan LCD screen 8-inch dan kamera CCD terintegrasi. Memiliki eyepiece bidang pandang luas dan objektif achromatic untuk gambar yang jernih.",
    specs: {
      "Viewing head": "4x, 10x, 40x(s), 100x(s, oil)",
      "Huygens eyepiecesng head": "Wide field eyepiece: WF10x (WF16x optional)",
      "Mechanical tube length": "160mm",
      "Object to primary image distance": "195mm",
      "Viewing head ": "Compensation free binocular head inclined at 45°",
      "Stage size": "Double layer mechanical stage size 132x140mm, moving range 75x45mm",
      "Focusing": "Coaxial coarse and fine adjustment, focusing range 30mm, focusing interval 0,002mm",
      "Condenser": "Abbe NA= 1,25 with iris diaphragm & filter",
      "Illumination": "6V 20W halogen lamp, adjustable brightness",
      "Display": "8 inch lcd display",
      "Power": "AC 220V ±22V output 6V",
      "Nett weight": "6,5kg",
      "Dimension (including binocular)": "185x270x400mm"
    },
    inStock: true, featured: true, badge: "New"
  },
  {
    id: "biobase-szm-45", name: "Biobase SZM-45", slug: "biobase-szm-45",
    category: ["stereo"], brand: "Biobase", model: "SZM-45",
    image: "/images/products/szm45.jpg",
    magnification: "7x - 45x (Zoom 0.7x~4.5x)", eyepiece: "WF10X", illumination: "LED lights (Uplighting & Downlighting)",
    application: "Inspeksi PCB, Riset, Edukasi",
    description: "Stereo Zoom Microscope tipe binokuler dengan perbesaran zoom kontinu 0.7X~4.5X dan lampu LED ganda.",
    specs: {
      "Observation Head": "Binocular observation head tilted 45°",
      "Eyepiece": "High point wide field of view adjustable eyepiece WF10X",
      "Zoom Objective": "0.7X~4.5X",
      "Zoom Ratio": "6.4:1",
      "Working Distance": "100mm",
      "Focusing Bracket": "Focusing frame adjustment knob",
      "Interpupillary Distance": "5.4~7.6mm",
      "Uplighting": "LED lights",
      "Downlighting": "LED lights",
      "Power Supply": "AC100~240V, 50/60Hz",
      "Package": "Foam carton",
      "Packing Size": "500*260*370 mm",
      "Gross Weight": "8 kg"
    },
    inStock: true, featured: true
  },
  {
    id: "biobase-szm-45t", name: "Biobase SZM-45T", slug: "biobase-szm-45t",
    category: ["stereo"], brand: "Biobase", model: "SZM-45T",
    image: "/images/products/szm45t.jpg",
    magnification: "7x - 45x (Zoom 0.7x~4.5x)", eyepiece: "WF10X", illumination: "LED lights (Uplighting & Downlighting)",
    application: "Dokumentasi, Inspeksi PCB, Riset",
    description: "Stereo Zoom Microscope tipe trinokuler dengan port kamera, perbesaran zoom kontinu 0.7X~4.5X dan lampu LED ganda.",
    specs: {
      "Observation Head": "Trinocular body tilted 45°",
      "Eyepiece": "High point wide field of view adjustable eyepiece WF10X",
      "Zoom Objective": "0.7X~4.5X",
      "Zoom Ratio": "6.4:1",
      "Working Distance": "100mm",
      "Focusing Bracket": "Focusing frame adjustment knob",
      "Interpupillary Distance": "5.4~7.6mm",
      "Uplighting": "LED lights",
      "Downlighting": "LED lights",
      "Power Supply": "AC100~240V, 50/60Hz",
      "Package": "Foam carton",
      "Packing Size": "500*260*370 mm",
      "Gross Weight": "8 kg"
    },
    inStock: true, featured: true, badge: "Trinocular"
  },
  {
    id: "biobase-st-20", name: "Biobase ST-20", slug: "biobase-st-20",
    category: ["stereo"], brand: "Biobase", model: "ST-20",
    image: "/images/products/st20.jpg",
    magnification: "20x", eyepiece: "WF10X", illumination: "Natural light binocular",
    application: "Edukasi Dasar, Inspeksi Sederhana",
    description: "Stereo Microscope ST-20 dengan pencahayaan alami (Natural light) dan objektif tetap 2X.",
    specs: {
      "Lighting": "Natural light binocular",
      "Observation Head & Main Body": "Straight head",
      "Objective Lens": "2X",
      "Working Distance": "80mm",
      "Eyepiece": "WF10X",
      "Power Supply": "/",
      "Packing Size": "300*200*150mm",
      "Gross Weight": "3kg"
    },
    inStock: true, featured: true
  },
  {
    id: "biobase-st-40", name: "Biobase ST-40", slug: "biobase-st-40",
    category: ["stereo"], brand: "Biobase", model: "ST-40",
    image: "/images/products/st40.jpg",
    magnification: "20x & 40x", eyepiece: "WF10X", illumination: "Transmissive illuminator / oblique light",
    application: "Edukasi, Laboratorium",
    description: "Stereo Microscope ST-40 dengan iluminasi ganda, kepala binokuler miring yang dapat diputar, dan objektif 2X & 4X (rotasi 90°).",
    specs: {
      "Lighting": "Transmissive illuminator/oblique light binocular",
      "Observation Head & Main Body": "Tilt observation, rotatable body",
      "Objective Lens": "2X&4X, rotate 90°",
      "Working Distance": "57mm",
      "Eyepiece": "WF10X",
      "Power Supply": "AC100~240V, 50/60Hz",
      "Packing Size": "360*170*290mm",
      "Gross Weight": "6kg"
    },
    inStock: true, featured: true
  },
  {
    id: "biobase-st-60", name: "Biobase ST-60", slug: "biobase-st-60",
    category: ["stereo"], brand: "Biobase", model: "ST-60",
    image: "/images/products/st60.jpg",
    magnification: "20x & 40x", eyepiece: "WF10X", illumination: "Ring light binocular",
    application: "Inspeksi, Perbaikan Elektronik",
    description: "Stereo Microscope ST-60 dengan ring light, kepala binokuler miring yang dapat berputar 360°, dan objektif 2X & 4X (rotasi 360°).",
    specs: {
      "Lighting": "Ring light binocular",
      "Observation Head & Main Body": "Tilt viewing body can be rotated 360°",
      "Objective Lens": "2X&4X, 360° rotation",
      "Working Distance": "100mm",
      "Eyepiece": "WF10X",
      "Power Supply": "AC100~240V, 50/60Hz",
      "Packing Size": "400*250*360mm",
      "Gross Weight": "8kg"
    },
    inStock: true, featured: true
  }
,
  {
    "id": "euromex-microblue",
    "name": "Euromex MicroBlue",
    "slug": "euromex-microblue",
    "category": [
          "student"
    ],
    "brand": "Euromex",
    "model": "MicroBlue",
    "image": "/images/products/euromex/microblue.png",
    "magnification": "40x - 1000x",
    "eyepiece": "WF 10x/18 mm",
    "illumination": "1W LED / NeoLED",
    "application": "Edukasi Dasar, Sekolah",
    "description": "Mikroskop biologi level entri yang ideal untuk pendidikan dengan pencahayaan LED yang terang.",
    "specs": {
      "Eyepiece(s)": "Wide field WF 10x/18 mm secured eyepiece with pointer. The eyepieces of the binocular models are supplied without pointer",
      "Head": "Monocular models have a 45° inclined tube. Binocular and trinocular models have 45° inclined tubes, adjustable interpupillary distance between 48 and 75 mm and a ± 5 diopter adjustment on the left tube. All heads are 360° rotatable. Models with an integrated USB-2.0 camera are supplied with a 1.3 MP 1/2.5\" CMOS sensor with 1772 x 952 pixels or a 5.0 MP 1/2.8\" CMOS sensor with 2560 x 1920 pixel resolution. The trinocular head has a fixed light path beam splitter (50:50) and generates an erect image. The MicroBlue can also be equipped with an LCD screen",
      "Nosepiece": "Revolving nosepiece for three or four reversed objectives on ball bearings",
      "Objectives": "Achromatic 4x/0.10, 10x/0.25 and S40x/0.65. Models with S60X or S100x oil immersion are also available. The S40x, S60x and S100x oil immersion objectives are spring loaded. All optics are anti-fungus treated and anti-reflection coated for maximum light throughput",
      "Focusing": "Coaxial coarse and fine adjustments, 200 graduations, 15 μm per graduation, 3 mm per rotation, total travel range is approximately 15 mm. Supplied with an adjustable rack stop to prevent damage to sample and objectives",
      "Stage": "All models are supplied with a 115 x 100 mm stage with integrated 55 x 20 mm mechanical X-Y stage, except for the basic model MB.1001(-LCD), which is supplied with a 105 x 105 mm stage and two non-removable clamps",
      "Condenser": "Height adjustable Abbe condenser N.A. 1.25 with iris diaphragm and filter holder, except for the MB.1001(-LCD) model, which is equipped with a single N.A. 0.65 condenser with built-in iris diaphragm",
      "Dual Illumination System": "1 W white (Neo)LED™: 6000 – 6500 K, ideal for standard observations with crisp, cool lighting. 1 W halogen colored (Neo)LED™: 3000 – 3200 K, enhances contrast for specific applications such as transparent objects. All MicroBlue microscopes are supplied with rechargeable AA batteries for cordless operation and with an external 5V DC power adapter",
      "Camera And Software": "Models with an integrated 5.0 MP camera are compatible with ImageFocus Plus software and with an integrated 1.3 MP CMOS USB-2.0 camera are compatible with ImageFocus 4. Besides capturing images and videos, this software allows measurements on still and live images and annotations on captured images. Compatible with Windows 10 and higher, both 32 and 64 bits configurations",
      "LCD Screen": "All the MicroBlue LCD microscopes are equipped with a 7” LCD screen. Images can be saved directly to a micro SD card in JPEG format. Screen resolution 1920 x 1080 @ 30 fps, image resolution up to 1844 x 1080 pixels. Videos can be shot in AVI format, resolution 1280 x 720. Basic measurement function (line) with calibration",
      "Anti-Theft Slot": "At the back of the microscope a Kensington Security slot is placed, which can be used to secure the instrument from theft",
      "Package Content": "Supplied with 100-240 Vac / 5 Vdc USB power adapter, USB-2 cable (except for the LCD models, which are supplied with an extra mains adapter), three rechargeable AA batteries, dust cover, user manual and 5 ml immersion oil for models with an S100x oil objective. Including a white filter. All packed in a polystyrene box"
    },
    "inStock": true,
    "featured": true,
    "badge": "Education"
  },
  {
    "id": "euromex-ecoblue",
    "name": "Euromex EcoBlue",
    "slug": "euromex-ecoblue",
    "category": [
          "student"
    ],
    "brand": "Euromex",
    "model": "EcoBlue",
    "image": "/images/products/euromex/ecoblue.png",
    "magnification": "40x - 1000x",
    "eyepiece": "WF 10x/18 mm",
    "illumination": "1W NeoLED",
    "application": "Edukasi Menengah, Biologi Dasar",
    "description": "Mikroskop tangguh dengan ergonomi yang sangat baik, direkomendasikan untuk pengguna edukasi tingkat lanjut.",
    "specs": {
          "Eyepiece(s)": "Wide field WF 10x/18 mm eyepiece with pointer. The eyepieces of the binocular and trinocular models are supplied without pointer",
          "Head": "Monocular models with 45° inclined tubes. Binocular and trinocular models have 30° inclined tubes. The interpupillary distance is adjustable between 48 and 75 mm. All binocular and trinocular models have a ± 5 diopter adjustment on the left tube. All heads are 360° rotatable. The trinocular head has a fixed light path beam splitter (50:50)",
          "Nosepiece": "Reversed revolving nosepiece for four objectives on ball bearings. Models for polarization are supplied with swing-out analyzer",
          "Objectives": "Achromatic 4x/0.10, 10x/0.25, S40x/0.65 and S100x oil/1.25 objectives. The S40x, S60x and S100x oil immersion objectives are spring loaded. The HLED-S models for polarization are equipped with semi-plan objectives",
          "Focusing": "Coaxial coarse and fine adjustments, 200 graduations, 12.5 µm per graduation, 2.5 mm per rotation, total travel range is approximately 15 mm. Supplied with an adjustable rack stop",
          "Stage": "Plain 123 x 119 mm stage with two non-removable object clamps. Plain 123 x 128 mm stage with integrated 70 x 27 mm mechanical X-Y stage",
          "Condenser": "Height adjustable color coded Abbe condenser N.A. 1.25 with iris diaphragm and filter holder",
          "Dual Illumination System": "1 W white (Neo)LED™: 6000 – 6500 K. 1 W halogen colored (Neo)LED™: 3000 – 3200 K. All models are supplied with three rechargeable AA batteries for cordless operation"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-bioblue",
    "name": "Euromex BioBlue",
    "slug": "euromex-bioblue",
    "category": [
          "student"
    ],
    "brand": "Euromex",
    "model": "BioBlue",
    "image": "/images/products/euromex/bioblue.png",
    "magnification": "40x - 1000x",
    "eyepiece": "WF 10x/18 mm",
    "illumination": "1W NeoLED",
    "application": "Laboratorium Sekolah, Universitas",
    "description": "Seri unggulan dengan lensa Semi-Plan, menghasilkan resolusi dan ketajaman tinggi untuk riset tingkat mahasiswa.",
    "specs": {
          "Eyepiece(s)": "Wide field WF 10x/18 mm secured eyepieces with pointer for monocular models. The BioBlue EVO models are supplied with WF 10x/20 mm eyepieces",
          "Heads": "Monocular models with 45° inclined tubes. Binocular and trinocular models have 30° inclined tubes, interpupillary distance is adjustable between 48 and 75 mm and equipped with a ± 5 diopter adjustment on the left tube. All heads are 360° rotatable",
          "Nosepiece": "Reversed quadruple nosepiece on ball bearings",
          "Objectives": "All models are supplied with semi plan 4x/0.10, 10x/0.25 and S40x/0.65 objectives. Models with an S60x/0.85 or S100x/1.25 oil immersion objective are also available",
          "Focusing": "Coaxial coarse and fine adjustments with 200 graduations. Precision 2 μm per graduation. Total travel range is approximately 23 mm. Supplied with an adjustable rack stop. The BioBlue is equipped with a quick focus aid",
          "Stage": "130 x 130 mm with mechanical 70 x 28 mm X-Y translation stage except for models BB.4200 and BB.4205",
          "Condenser": "Height adjustable Abbe condenser N.A. 1.25 with iris diaphragm and filter holder",
          "Dual Illumination System": "1 W white (Neo)LED™: 6000 – 6500 K. 1 W halogen colored (Neo)LED™: 3000 – 3200 K. The EVO models are equipped with Köhler NeoLED™ illumination"
    },
    "inStock": true,
    "featured": true,
    "badge": "Best Seller"
  },
  {
    "id": "euromex-biobluelab",
    "name": "Euromex BioBlue.Lab",
    "slug": "euromex-biobluelab",
    "category": [
      "laboratory",
      "education"
    ],
    "brand": "Euromex",
    "model": "BioBlue.Lab",
    "image": "/images/products/euromex/biobluelab.png",
    "magnification": "40x - 1000x",
    "eyepiece": "WF 10x/20 mm",
    "illumination": "3W NeoLED",
    "application": "Universitas, Rutin Laboratorium",
    "description": "Mikroskop laboratorium tingkat lanjut dengan fitur rackless stage dan lensa plan infinity.",
    "specs": {
          "Eyepieces": "Wide field WF 10x/20 mm eyepieces",
          "Head": "All models have 30° inclined Ø 30 mm tubes. The interpupillary distance is adjustable between 48 to 75 mm. All models have a ±5 diopter adjustment on the left tube. All heads are 360° rotatable",
          "Nosepiece": "Reversed quadruple nosepiece on ball bearings. Slot for analyzer",
          "Objectives": "All microscopes are equipped with plan and plan IOS objectives. Optional 20x/0.40 and S60x/0.85 objectives are also available",
          "Focusing": "Coaxial coarse and fine adjustments, 200 graduations, 1.5 µm per graduation, 0.3 mm per rotation, total travel range is approximately 28 mm. Supplied with an adjustable rack stop",
          "Stage": "Rackless 150 x 140 mm stage with mechanical 75 x 30 mm X-Y translation stage",
          "Condenser": "Height adjustable Abbe condenser N.A. 1.25 with iris diaphragm and filter holder",
          "Illumination": "Binocular and trinocular models are supplied with an adjustable 3 W NeoLED™ illumination system. Power supply with integrated 100-240 Vac"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-bluescope",
    "name": "Euromex BlueScope",
    "slug": "euromex-bluescope",
    "category": [
          "laboratory"
    ],
    "brand": "Euromex",
    "model": "BlueScope",
    "image": "/images/products/euromex/bluescope.png",
    "magnification": "40x - 1000x",
    "eyepiece": "WF 10x/18 mm",
    "illumination": "NeoLED",
    "application": "Edukasi Digital",
    "description": "Solusi lengkap mikroskop edukasi yang mendukung pengamatan digital dengan fitur modern.",
    "specs": {
          "Eyepiece(s)": "Wide field WF 10x/20 mm secured eyepieces. The eyepiece of monocular models is supplied with pointer",
          "Head": "Monocular models with 45° inclined tubes. Binocular and trinocular models have 30° inclined tubes, interpupillary distance is adjustable between 48 and 75 mm. All heads are 360° rotatable",
          "Nosepiece": "Reversed quadruple nosepiece on ball bearings",
          "Objectives": "All models are supplied with semi plan 4x/0.10, 10x/0.25 and S40x/0.65 objectives. Models with an S60x/0.85 or S100x/1.25 oil immersion objective are also available",
          "Focusing": "Coaxial coarse and fine adjustments with 200 graduations. Precision 2 μm per graduation. Supplied with an adjustable rack stop. The BlueScope is equipped with a quick focus aid",
          "Stage": "Rackless 140 x 140 mm stage with integrated 75 x 30 mm mechanical X-Y stage",
          "Condenser": "Height adjustable color coded Abbe condenser N.A. 1.25 with iris diaphragm and filter holder",
          "Dual Illumination System": "3 W white (Neo)LED™: 6000 – 6500 K. 3 W halogen colored (Neo)LED™: 3000 – 3200 K. The models are equipped with Köhler NeoLED™ illumination"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-stereoblue-edu",
    "name": "Euromex StereoBlue (Edu)",
    "slug": "euromex-stereoblue-edu",
    "category": [
          "stereo",
          "student"
    ],
    "brand": "Euromex",
    "model": "StereoBlue",
    "image": "/images/products/euromex/stereoblue.png",
    "magnification": "7x - 45x Zoom",
    "eyepiece": "WF 10x/20 mm",
    "illumination": "3W LED Dual",
    "application": "Inspeksi Preparat, Botani",
    "description": "Mikroskop stereo dengan rentang zoom 0.7x - 4.5x yang ideal untuk pengamatan spesimen utuh.",
    "specs": {
          "Eyepieces": "Pair of WF 10x/21 mm secured eyepieces supplied with eyecups",
          "Head": "Binocular or trinocular 45° inclined tubes. Diopter adjustment on both eyepieces. Interpupillary distance adjustable between 55 mm and 75 mm. Trinocular head is supplied with a fixed light path beam splitter",
          "Dual Magnification Objectives": "Nosepiece with dual 1x/3x or 2x/4x revolving objectives. Magnifications 10x/30x or 20x/40x",
          "Zoom Objective": "Zoom stereo 0.7x to 4.5x parfocal objective. Magnification from 7x to 45x",
          "EVO Zoom Objective": "Zoom stereo 0.5x to 5.5x parfocal objective. Magnification from 5x to 55x",
          "Stand": "The rack & pinion and pillar stands are equipped with ergonomic flat bases, complete with two object clamps and Ø 60 mm transparent and black/white stage plates. The ergonomic universal and boom stand are ideal for viewing large samples or working under the microscope"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-nexiuszoom",
    "name": "Euromex NexiusZoom",
    "slug": "euromex-nexiuszoom",
    "category": [
          "stereo"
    ],
    "brand": "Euromex",
    "model": "NexiusZoom",
    "image": "/images/products/euromex/nexiuszoom.png",
    "magnification": "6.5x - 45x Zoom",
    "eyepiece": "WF 10x/22 mm",
    "illumination": "3W LED",
    "application": "Inspeksi Industri, PCB",
    "description": "Mikroskop stereo profesional yang tangguh untuk industri dan penelitian dengan bidang pandang luas.",
    "specs": {
          "Eyepieces": "The standard NexiusZoom is supplied with a pair of HWF 10x/22 mm eyepieces. The NexiusZoom EVO is supplied with a pair of HWF 10x/23 mm eyepieces",
          "Head": "Binocular or trinocular heads with 45° inclined tubes. Both eyepieces with ± 5 diopter adjustments. Interpupillary distance adjustable between 54 mm and 75 mm. Trinocular head is supplied with a fixed light path beam splitter",
          "Objectives": "The standard NexiusZoom is supplied with a 1:6.7 zoom objective with 0.67x to 4.5x magnifications, a field of view from 33 mm to 4.9 mm. Working distance 110 mm",
          "Stand": "Ergonomic pillar or rack & pinion stand with 3 W incident and 3 W transmitted LED illuminations. Ergonomic universal or boom stands, without illumination",
          "Stage": "180 x 155mm mechanical X-Y stage with 76 x 55mm translation stage and transparent glass plate for NexiusZoom",
          "Illumination": "3 W transmitted and incident LED illuminators with internal power supply 100-240 V"
    },
    "inStock": true,
    "featured": true,
    "badge": "Industry"
  },
  {
    "id": "euromex-nexiuszoom-evo",
    "name": "Euromex NexiusZoom EVO",
    "slug": "euromex-nexiuszoom-evo",
    "category": [
          "stereo"
    ],
    "brand": "Euromex",
    "model": "NexiusZoom EVO",
    "image": "/images/products/euromex/nexiuszoomevo.png",
    "magnification": "6.5x - 55x Zoom",
    "eyepiece": "WF 10x/22 mm",
    "illumination": "3W LED",
    "application": "Quality Control, Microelectronics",
    "description": "Versi evolusi dari NexiusZoom dengan rentang zoom yang lebih panjang hingga 55x.",
    "specs": {
          "Eyepieces": "The NexiusZoom EVO is supplied with a pair of HWF 10x/23 mm eyepieces",
          "Head": "Binocular or trinocular heads with 45° inclined tubes. Both eyepieces with ± 5 diopter adjustments. Interpupillary distance adjustable between 54 mm and 75 mm. Trinocular head is supplied with a fixed light path beam splitter",
          "EVO Objectives": "The NexiusZoom EVO is supplied with a 1:8.4 zoom objective with 0.65x to 5.5x magnifications, a field of view from 35.4 mm to 4.2 mm. Working distance 110 mm",
          "Stand": "Ergonomic pillar or rack & pinion stand with 3 W incident and 3 W transmitted LED illuminations. Ergonomic universal or boom stands, without illumination",
          "Stage": "180 x 155mm mechanical X-Y stage with 76 x 55mm translation stage and transparent glass plate for NexiusZoom",
          "Illumination": "3 W transmitted and incident LED illuminators with internal power supply 100-240 V"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-ultrazoom",
    "name": "Euromex UltraZoom",
    "slug": "euromex-ultrazoom",
    "category": [
          "stereo"
    ],
    "brand": "Euromex",
    "model": "UltraZoom",
    "image": "/images/products/euromex/ultrazoom.png",
    "magnification": "8x - 50x Zoom",
    "eyepiece": "WF 10x/22 mm",
    "illumination": "Various options",
    "application": "Material Science, Industri Lanjut",
    "description": "Mikroskop stereo tingkat atas dengan resolusi luar biasa dan koreksi apochromatic parsial.",
    "specs": {
          "Eyepieces": "Pair of EWF 10x/23 mm eyepieces",
          "Head": "Ergonomic 0-30° tilting head or binocular 20° head. Diopter ± 5 adjustment on both eyepieces and interpupillary distance from 55 to 75 mm. Both heads have a photo port with 1x c-mount for 1” cameras",
          "Central Zoom Unit": "Zoom ratio 1:18 for total magnifications from 0.75 to 13.5x",
          "Common Main Objective": "Standard supplied with a 1x plan apochromatic Common Main Objective, working distance 60 mm. The objective has an anti-reflection coating for maximum light throughput and is anti-fungus treated",
          "Stand": "Large ergonomic stand with 180 mm object plate. Oblique Contrast Illumination slider. Coaxial coarse and fine adjustment"
    },
    "inStock": true,
    "featured": true
  },

  {
    "id": "euromex-be-18",
    "name": "Euromex BE-18 Series",
    "slug": "euromex-be-18",
    "category": [
          "stereo"
    ],
    "brand": "Euromex",
    "model": "BE-18",
    "image": "/images/products/euromex/be18.png",
    "magnification": "10x, 20x (Fixed)",
    "eyepiece": "WF 10x/20 mm",
    "illumination": "Incident/Transmitted",
    "application": "Inspeksi Cepat, Jalur Perakitan",
    "description": "Mikroskop stereo kokoh dengan perbesaran ganda, sangat handal untuk inspeksi rutin di pabrik.",
    "specs": {
          "Eyepieces": "Pair of WF 10x/20 mm",
          "Head": "Binocular 45° inclined tube. Interpupillary distance adjustable between 55 and 75 mm",
          "Stand": "Stable overhanging heavy base stand with pillar",
          "Focusing Adjustment": "Coarse adjustment with tension control",
          "Illumination": "Incident 1 W LED illumination 44 cm on flexible arm. Intensity is adjustable",
          "Objectives": "The BE-18 series comes with interchangeable objectives mounted in a slider. Magnifications vary from 2.5x to 40x. Working distance varies from 119 mm to 230 mm"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-iscope",
    "name": "Euromex iScope",
    "slug": "euromex-iscope",
    "category": [
      "laboratory",
      "clinical"
    ],
    "brand": "Euromex",
    "model": "iScope",
    "image": "/images/products/euromex/iscope.png",
    "magnification": "40x - 1000x",
    "eyepiece": "EWF 10x/22 mm",
    "illumination": "3W NeoLED Köhler",
    "application": "Klinik, Riset Medis",
    "description": "Mikroskop laboratorium mutakhir dengan optik E-Plan / Plan IOS dan sistem cerdas iCare sensor.",
    "specs": {
          "Eyepieces": "Extended plan wide field EWF 10x/20 mm eyepieces and EWF 10x/22 mm eyepieces with 20 mm field of view and adjustable diopter on the left eyepiece",
          "Head": "Binocular and trinocular models. Optional tilting head. Multihead and face-to-face dual head systems available",
          "Nosepiece": "Revolving quintuple reversed nosepiece for max. five objectives",
          "Objectives": "E-plan, plan and plan phase objectives. E-plan, plan and plan phase IOS objectives",
          "Stage": "156 x 138 mm stage equipped with integrated 79 x 52 mm mechanical X-Y stage. 187/230 x 140 mm rackless stage equipped with double slide holder and integrated 79 x 52 mm mechanical X-Y stage",
          "Condenser": "Height adjustable Abbe N.A. 1.25 condenser for brightfield. Cardioid mirror darkfield condenser",
          "Illumination": "3 W NeoLED™ Köhler illumination. Cardioid mirror darkfield condenser with 5 W NeoLED™ illumination",
          "Smart Light Control (SLC)": "Automatically remembers the last used illumination intensity for each objective",
          "iCare sensor": "Energy saving sensor automatically switches off the illumination when the microscope is not used"
    },
    "inStock": true,
    "featured": true,
    "badge": "Lab"
  },

  {
    "id": "euromex-delphi-x-inv",
    "name": "Euromex Delphi-X Inverso",
    "slug": "euromex-delphi-x-inv",
    "category": [
          "laboratory",
          "inverted"
    ],
    "brand": "Euromex",
    "model": "Delphi-X Inverso",
    "image": "/images/products/euromex/delphi-xinverso.png",
    "magnification": "40x - 600x",
    "eyepiece": "SWF 10x/22 mm",
    "illumination": "5W LED / 100W Halogen",
    "application": "Kultur Sel, IVF, Life Science",
    "description": "Mikroskop inverted profesional untuk observasi sel hidup dan kultur jaringan pada cawan petri atau flask.",
    "specs": {
          "Eyepieces": "Pair of HWF plan 10x/25 mm or 10x/22 mm eyepieces with diopter adjustment (optional)",
          "Head": "Trinocular 45° inclined tubes. Interpupillary distance of 47 to 78 mm. Trinocular head with 100-0, 80/20 and 0/100 positions",
          "Nosepiece": "Revolving sextuple nosepiece on ball-bearings. The nosepiece can be equipped with DIC prisms for the 10x, 20x, 40x and 60x objectives",
          "Objectives": "High numerical infinity semi-apochromatic long working distance plan phase Fluarex PLPHFi 10x/0.30, 20x/0.45, S40x/0.60 IOS objectives. Optional 4x/0.13 and 60x/0.70 IOS objectives are also available",
          "Stage": "Stage 340 x 230 mm, equipped with a coaxial mechanical 130 x 85 mm X-Y stage",
          "Illumination": "5 W LED or 100 W halogen transmitted illumination"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-oxion-inv",
    "name": "Euromex Oxion Inverso",
    "slug": "euromex-oxion-inv",
    "category": [
          "laboratory",
          "fluorescence",
          "inverted"
    ],
    "brand": "Euromex",
    "model": "Oxion Inverso",
    "image": "/images/products/euromex/oxioninverso.png",
    "magnification": "100x - 400x",
    "eyepiece": "DIN WF 10x/22 mm",
    "illumination": "5W LED Phase Contrast",
    "application": "Observasi Sel, Mikrobiologi",
    "description": "Inverted microscope yang kuat dan sangat populer untuk analisis biologi rutin dengan fase kontras.",
    "specs": {
          "Eyepieces": "Pair of HWF plan 10x/22 mm eyepieces",
          "Head": "Trinocular 45° inclined tubes with extended low and high positions for eyepieces. One diopter adjustment on left eyepiece. Interpupillary distance of 54 to 75 mm. Trinocular head with 100-0 % and 0-100 % positions",
          "Nosepiece": "Revolving quintuple nosepiece on ball-bearings",
          "Objectives": "Infinity color corrected long working distance plan 10x/0.25, 20x/0.40, 40x/0.60 IOS objectives. Optional 60x/0.70 IOS objective is also available",
          "Objectives For Phase Contrast": "Infinity color corrected long working distance plan phase 10x/0.25, 20x/0.40, 40x/0.60 IOS objectives",
          "Fluarex Objectives For Brightfield": "Infinity color corrected long working distance plan Fluarex 10x/0.30, 20x/0.45, 40x/0.65 IOS objectives. Optional plan Fluarex 60x/0.75 IOS objective is also available",
          "Fluarex Objectives For Phase Contrast": "Infinity color corrected long working distance plan Fluarex 10x/0.30 and plan phase Fluarex 20x/0.45 and S40x/0.65 IOS objectives",
          "Stage": "Stage 250 x 230 mm equipped with a coaxial mechanical 120 x 78 mm X-Y stage",
          "Illumination": "5 W LED transmitted illumination"
    },
    "inStock": true,
    "featured": true
  },
  {
    "id": "euromex-bscope",
    "name": "Euromex bScope",
    "slug": "euromex-bscope",
    "category": [
      "laboratory"
    ],
    "brand": "Euromex",
    "model": "bScope",
    "image": "/images/products/euromex/bscope.png",
    "magnification": "40x - 1000x",
    "eyepiece": "HWF 10x/20 mm",
    "illumination": "3W NeoLED",
    "application": "Veteriner, Biologi Rutin",
    "description": "Mikroskop serbaguna, kokoh, ringan dengan sistem penyimpanan kabel yang pintar.",
    "specs": {
          "Eyepiece(s)": "High wide field HWF 10x/20 mm secured eyepiece(s) with 20 mm field of view",
          "Head": "Monocular, binocular and trinocular models. Diopter adjustment on both tubes. Trinocular head comes with a Ø 23.2 mm tube",
          "Nosepiece": "Reversed ball-bearing quadruple or quintuple nosepiece with slot for polarization filter",
          "Objectives": "E-plan, E-plan IOS and plan IOS objectives. Plan phase IOS objectives",
          "Focusing": "Double coaxial, low-positioned coarse and fine adjustments with 180 graduations. Precision 1.1 µm, 200 µm per rotation, total travel range is approximately 19 mm. Supplied with an adjustable rack stop. The coarse adjustment is equipped with friction control",
          "Stage": "Scratch resistant 152/197 x 131 mm stage with integrated 75 x 36 mm rackless mechanical X-Y stage, Vernier scale, soft-close removable specimen holder",
          "Condenser": "Height adjustable Abbe N.A. 1.25 condenser for brightfield comes with an iris diaphragm and swing-out filter holder. The condenser is color coded",
          "Illumination": "3 W NeoLED™ adjustable illumination system. Darkfield cardioid condenser with 3 W NeoLED™"
    },
    "inStock": true,
    "featured": true
  }
];
