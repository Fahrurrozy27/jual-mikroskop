export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  brand: string;
  model: string;
    image: string;
  magnification: string;
  eyepiece: string;
  illumination: string;
  application: string;
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  badge?: string;
}

export const products: Product[] = [
  // ===== STUDENT / EDUKASI =====
  {
    id: "s1", name: "Mikroskop Monokuler Edukasi A11.1003", slug: "mikroskop-monokuler-edukasi-a11-1003",
    category: "student", brand: "OPTO-EDU", model: "A11.1003",
    image: "/images/products/student-1.webp",
    magnification: "40x - 640x", eyepiece: "WF16x", illumination: "LED 0.5W, Battery/USB",
    application: "Praktikum SMP/SMA",
    description: "Mikroskop monokuler entry-level dengan bodi metal kokoh dan iluminasi LED cordless. Ideal untuk praktikum biologi dasar di sekolah menengah.",
    specs: { "Optical System": "Finite 160mm", "Head": "Monokuler, inklinasi 45°", "Eyepiece": "WF16x", "Objective": "4x, 10x, 40x(S)", "Nosepiece": "Triple", "Stage": "90x90mm, clip", "Focus": "Coaxial coarse & fine", "Condenser": "Disc diaphragm", "Illumination": "LED 0.5W, rechargeable", "Power": "Built-in battery / USB-C" },
    inStock: true, featured: false, badge: "Termurah"
  },
  {
    id: "s2", name: "Mikroskop Binokuler Student A11.1535-B", slug: "mikroskop-binokuler-student-a11-1535b",
    category: "student", brand: "OPTO-EDU", model: "A11.1535-B",
    image: "/images/products/student-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/18mm", illumination: "LED 1W",
    application: "Praktikum SMA/Universitas",
    description: "Mikroskop binokuler dengan optik achromatic untuk pengamatan nyaman dengan kedua mata. Desain Siedentopf ergonomis. Standar praktikum universitas.",
    specs: { "Optical System": "Finite 160mm", "Head": "Binokuler Siedentopf, 30° inklinasi, 360° rotasi", "Eyepiece": "WF10x/18mm", "Objective": "4x, 10x, 40x(S), 100x(S, Oil)", "Nosepiece": "Quadruple", "Stage": "Double layer 132x142mm", "Focus": "Coaxial coarse & fine, 0.002mm", "Condenser": "Abbe N.A. 1.25, iris diaphragm", "Illumination": "LED 1W, adjustable", "Power": "100-240V, 50/60Hz" },
    inStock: true, featured: true, badge: "Best Seller"
  },
  {
    id: "s3", name: "Mikroskop Student Cordless A11.1323-B", slug: "mikroskop-student-cordless-a11-1323b",
    category: "student", brand: "OPTO-EDU", model: "A11.1323-B",
    image: "/images/products/student-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/18mm", illumination: "LED Rechargeable",
    application: "Field Study, Sekolah",
    description: "Mikroskop binokuler portabel dengan baterai rechargeable built-in. Cocok untuk studi lapangan dan sekolah tanpa akses listrik stabil.",
    specs: { "Optical System": "Finite 160mm", "Head": "Binokuler, 30° inklinasi", "Eyepiece": "WF10x/18mm", "Objective": "4x, 10x, 40x(S), 100x(S, Oil)", "Nosepiece": "Quadruple", "Stage": "Double layer 125x130mm", "Focus": "Coaxial coarse & fine", "Condenser": "Abbe N.A. 1.25", "Illumination": "LED rechargeable, 8 jam", "Power": "Li-ion Battery + USB-C charging" },
    inStock: true, featured: false
  },
  {
    id: "s4", name: "Mikroskop Monokuler Sederhana A11.1101", slug: "mikroskop-monokuler-sederhana-a11-1101",
    category: "student", brand: "OPTO-EDU", model: "A11.1101",
    image: "/images/products/student-1.webp",
    magnification: "40x - 400x", eyepiece: "WF10x", illumination: "LED + Mirror",
    application: "Edukasi Dasar SD/SMP",
    description: "Mikroskop monokuler paling sederhana untuk pengenalan sains di tingkat SD dan SMP. Dilengkapi cermin dan LED sebagai sumber cahaya.",
    specs: { "Optical System": "Finite 160mm", "Head": "Monokuler, 45° inklinasi", "Eyepiece": "WF10x", "Objective": "4x, 10x, 40x", "Nosepiece": "Triple", "Stage": "Fixed 85x85mm, clips", "Focus": "Coarse only", "Condenser": "Disc diaphragm", "Illumination": "LED + Mirror dual source", "Power": "2x AA Battery" },
    inStock: true, featured: false
  },

  // ===== LABORATORY =====
  {
    id: "l1", name: "Mikroskop Lab Binokuler Plan A12.0910-B", slug: "mikroskop-lab-binokuler-plan-a12-0910b",
    category: "laboratory", brand: "OPTO-EDU", model: "A12.0910-B",
    image: "/images/products/lab-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/20mm (FN20)", illumination: "LED Köhler 3W",
    application: "Lab Klinik, Mikrobiologi",
    description: "Mikroskop binokuler laboratorium dengan optik plan achromatic dan Köhler illumination. Standar untuk laboratorium diagnostik klinik dan mikrobiologi.",
    specs: { "Optical System": "Finite 160mm, Plan Achromatic", "Head": "Binokuler Siedentopf, 30° inklinasi", "Eyepiece": "WF10x/20mm (FN20)", "Objective": "Plan 4x, 10x, 40x(S), 100x(S, Oil)", "Nosepiece": "Quintuple reverse", "Stage": "Rackless 160x142mm, ceramic coated", "Focus": "Coaxial, fine 0.002mm, tension adjustable", "Condenser": "Abbe N.A. 1.25, swing-out, filter holder", "Illumination": "LED Köhler 3W, adjustable", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: true, badge: "Rekomendasi"
  },
  {
    id: "l2", name: "Mikroskop Lab Trinokuler Infinity A12.2610", slug: "mikroskop-lab-trinokuler-infinity-a12-2610",
    category: "laboratory", brand: "OPTO-EDU", model: "A12.2610",
    image: "/images/products/lab-2.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/22mm (FN22)", illumination: "LED Köhler 5W",
    application: "Riset, Dokumentasi, Universitas",
    description: "Mikroskop trinokuler profesional dengan sistem optik infinity dan plan semi-APO objectives. Port kamera C-mount untuk dokumentasi. Level BX43/CX43.",
    specs: { "Optical System": "Infinity (IOS), Plan Semi-APO", "Head": "Trinokuler Siedentopf, 30° inklinasi, port 0.5x C-mount", "Eyepiece": "WF10x/22mm (FN22), adjustable diopter", "Objective": "Infinity Plan Semi-APO 4x, 10x, 20x, 40x(S), 100x(S, Oil)", "Nosepiece": "Quintuple reverse, ball-bearing", "Stage": "Rackless 180x150mm, ceramic coated", "Focus": "Coaxial, fine 0.001mm, torque adjustable", "Condenser": "Abbe-Aplanat N.A. 1.25, swing-out, slot for phase ring", "Illumination": "LED Köhler 5W, field diaphragm", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: true, badge: "Premium"
  },
  {
    id: "l3", name: "Mikroskop Lab Trinokuler A12.3630", slug: "mikroskop-lab-trinokuler-a12-3630",
    category: "laboratory", brand: "OPTO-EDU", model: "A12.3630",
    image: "/images/products/lab-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/20mm", illumination: "LED Köhler 3W",
    application: "Hematologi, Patologi, Lab Klinik",
    description: "Mikroskop trinokuler biologis dengan plan achromatic objectives. Port kamera untuk dokumentasi hasil analisis. Cocok untuk hematologi dan patologi klinik.",
    specs: { "Optical System": "Finite 160mm, Plan Achromatic", "Head": "Trinokuler, 30° inklinasi, foto port", "Eyepiece": "WF10x/20mm (FN20)", "Objective": "Plan 4x, 10x, 40x(S), 100x(S, Oil)", "Nosepiece": "Quintuple reverse", "Stage": "Rackless 160x142mm", "Focus": "Coaxial coarse & fine 0.002mm", "Condenser": "Abbe N.A. 1.25 with iris", "Illumination": "LED Köhler 3W", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },
  {
    id: "l4", name: "Mikroskop Lab Multi-Viewing A17.1093-B", slug: "mikroskop-lab-multi-viewing-a17-1093b",
    category: "laboratory", brand: "OPTO-EDU", model: "A17.1093-B",
    image: "/images/products/lab-2.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/22mm (5 kepala)", illumination: "LED Köhler 5W",
    application: "Teaching, Diskusi Patologi",
    description: "Mikroskop multi-viewing 5 kepala untuk pengamatan simultan oleh instruktur dan 4 mahasiswa. Ideal untuk diskusi kasus patologi dan pelatihan diagnostik.",
    specs: { "Optical System": "Infinity Plan Semi-APO", "Head": "Penta-head (1 main + 4 side), pointer built-in", "Eyepiece": "WF10x/22mm per head", "Objective": "Plan Semi-APO 4x, 10x, 40x, 100x Oil", "Nosepiece": "Quintuple", "Stage": "180x155mm, ceramic", "Focus": "Motorized Z optional", "Condenser": "Swing-out Abbe N.A. 1.25", "Illumination": "LED Köhler 5W", "Power": "100-240V 50/60Hz" },
    inStock: false, featured: false, badge: "Pre-Order"
  },

  // ===== STEREO ZOOM =====
  {
    id: "st1", name: "Mikroskop Stereo Zoom A23.0907-BL", slug: "mikroskop-stereo-zoom-a23-0907bl",
    category: "stereo", brand: "OPTO-EDU", model: "A23.0907-BL",
    image: "/images/products/stereo-1.webp",
    magnification: "7x - 45x (Zoom 0.7-4.5x)", eyepiece: "WF10x/20mm", illumination: "LED Ring 144 pcs",
    application: "Inspeksi PCB, Geologi, Botani",
    description: "Mikroskop stereo zoom kontinyu standar industri. LED ring 144 pcs memberikan pencahayaan merata dari segala arah. Working distance 100mm.",
    specs: { "Zoom Range": "0.7x - 4.5x (ratio 1:6.5)", "Total Magnification": "7x - 45x (with WF10x)", "Eyepiece": "WF10x/20mm, adjustable diopter", "Working Distance": "100mm", "Field of View": "30mm (at 7x) - 4.6mm (at 45x)", "Head": "Binokuler, 45° inklinasi", "Illumination": "LED Ring 144 pcs, adjustable", "Stand": "Post stand, arm adjustable height", "Stage Plate": "Black/White reversible, 95mm", "Power": "12V DC adapter" },
    inStock: true, featured: true
  },
  {
    id: "st2", name: "Mikroskop Stereo Trinokuler A23.2603-T", slug: "mikroskop-stereo-trinokuler-a23-2603t",
    category: "stereo", brand: "OPTO-EDU", model: "A23.2603-T",
    image: "/images/products/stereo-1.webp",
    magnification: "7x - 45x + USB Camera 5MP", eyepiece: "WF10x/23mm", illumination: "LED Ring 56 + Gooseneck",
    application: "QC Industri, Forensik, Dokumentasi",
    description: "Stereo zoom trinokuler dengan port kamera untuk dokumentasi digital. Dilengkapi gooseneck LED tambahan untuk pencahayaan directional.",
    specs: { "Zoom Range": "0.7x - 4.5x", "Total Magnification": "7x - 45x", "Eyepiece": "WF10x/23mm super widefield", "Port Kamera": "Trinocular, 0.5x C-mount", "Working Distance": "100mm", "Head": "Trinokuler, 45° inklinasi", "Illumination": "LED Ring 56 pcs + 2x Gooseneck LED", "Stand": "Heavy-duty pillar, boom arm optional", "Stage Plate": "Glass plate + B/W plate", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },
  {
    id: "st3", name: "Mikroskop Stereo Step Zoom A22.1201-T", slug: "mikroskop-stereo-step-zoom-a22-1201t",
    category: "stereo", brand: "OPTO-EDU", model: "A22.1201-T",
    image: "/images/products/stereo-1.webp",
    magnification: "20x / 40x (Step Zoom)", eyepiece: "WF10x", illumination: "LED Top/Bottom",
    application: "Edukasi, Diseksi Biologi",
    description: "Mikroskop stereo step zoom ekonomis dengan 2 tingkat perbesaran. Ideal untuk praktikum diseksi biologi dan pengamatan spesimen 3D di sekolah.",
    specs: { "Zoom Type": "Step zoom 2x/4x", "Total Magnification": "20x / 40x", "Eyepiece": "WF10x/20mm", "Working Distance": "57mm", "Head": "Binokuler, 45° inklinasi", "Illumination": "LED Top (incident) + Bottom (transmitted)", "Stand": "Fixed post stand", "Stage Plate": "Frosted glass + B/W plate", "Power": "100-240V 50/60Hz", "Weight": "3.2 kg" },
    inStock: true, featured: false
  },

  // ===== DIGITAL =====
  {
    id: "d1", name: "Mikroskop Digital LCD A33.5101", slug: "mikroskop-digital-lcd-a33-5101",
    category: "digital", brand: "OPTO-EDU", model: "A33.5101",
    image: "/images/products/digital-1.webp",
    magnification: "40x - 400x (Digital 1600x)", eyepiece: "LCD 9.7\" IPS Touchscreen", illumination: "LED Ring + Bottom LED",
    application: "Edukasi Interaktif, QC, Presentasi",
    description: "Mikroskop digital all-in-one dengan layar sentuh 9.7 inch IPS. Capture foto/video langsung ke SD card. Software pengukuran terintegrasi.",
    specs: { "Display": "9.7\" IPS Touchscreen, 2048x1536", "Camera Sensor": "5MP CMOS Sony IMX335", "Objective": "4x, 10x, 40x Plan Achromatic", "Digital Zoom": "Hingga 4x (total 1600x)", "Storage": "SD Card max 64GB", "Output": "HDMI, USB 2.0, Wi-Fi optional", "OS": "Android 11 built-in", "Illumination": "LED Ring (top) + LED (bottom)", "Measurement": "Length, area, angle, count software", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: true, badge: "Produk Baru"
  },
  {
    id: "d2", name: "Mikroskop Digital USB A33.5002", slug: "mikroskop-digital-usb-a33-5002",
    category: "digital", brand: "OPTO-EDU", model: "A33.5002",
    image: "/images/products/digital-1.webp",
    magnification: "40x - 1000x + USB Camera", eyepiece: "WF10x/18mm + USB 5MP", illumination: "LED 3W",
    application: "Dokumentasi Lab, Telepathology",
    description: "Mikroskop compound binokuler dengan kamera USB 5MP terintegrasi. Tampilkan gambar real-time di PC/laptop melalui software pengukuran.",
    specs: { "Optical System": "Finite 160mm", "Head": "Binokuler + camera port", "Camera": "USB 5MP CMOS, 30fps", "Eyepiece": "WF10x/18mm", "Objective": "4x, 10x, 40x(S), 100x(S, Oil)", "Software": "Measurement & annotation included", "Output": "USB 2.0 to PC", "Illumination": "LED 3W Köhler", "Stage": "140x132mm double layer", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },
  {
    id: "d3", name: "Mikroskop Digital HDMI A33.5103", slug: "mikroskop-digital-hdmi-a33-5103",
    category: "digital", brand: "OPTO-EDU", model: "A33.5103",
    image: "/images/products/digital-1.webp",
    magnification: "40x - 1000x", eyepiece: "12\" HDMI Monitor", illumination: "LED Köhler 5W",
    application: "Teaching Hospital, Konferensi",
    description: "Mikroskop digital profesional dengan monitor HDMI 12 inch terpisah. Ideal untuk teaching hospital dan presentasi konferensi patologi.",
    specs: { "Display": "12\" HDMI Monitor, 1920x1080", "Camera": "HDMI 1080p60 + USB 5MP", "Optical System": "Infinity Plan Semi-APO", "Objective": "Plan Semi-APO 4x, 10x, 40x, 100x Oil", "Software": "Full measurement suite", "Output": "HDMI + USB 3.0", "Illumination": "LED Köhler 5W", "Stage": "180x150mm ceramic", "Focus": "Coaxial fine 0.001mm", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },

  // ===== METALLURGICAL =====
  {
    id: "m1", name: "Mikroskop Metalurgi Trinokuler A13.2603-T", slug: "mikroskop-metalurgi-trinokuler-a13-2603t",
    category: "metallurgical", brand: "OPTO-EDU", model: "A13.2603-T",
    image: "/images/products/metallurgical-1.webp",
    magnification: "50x - 500x (Reflected Light)", eyepiece: "WF10x/22mm", illumination: "LED Epi 5W + Halogen 6V/20W",
    application: "Metalurgi, QC Material",
    description: "Mikroskop metalurgi trinokuler dengan iluminasi reflected light untuk analisis struktur logam dan paduan. Bright field & dark field built-in.",
    specs: { "Optical System": "Infinity Plan, Epi-illumination", "Head": "Trinokuler, foto port, 30° inklinasi", "Eyepiece": "WF10x/22mm (FN22)", "Objective": "LMPlan 5x, 10x, 20x, 50x, 100x (BD)", "Nosepiece": "Quintuple reverse", "Stage": "150x150mm, X-Y travel 75x50mm", "Illumination": "LED Epi 5W reflected + Halogen transmitted", "Observation": "Bright Field, Dark Field", "Focus": "Coaxial fine 0.001mm", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },
  {
    id: "m2", name: "Mikroskop Metalurgi Upright A13.0212-B", slug: "mikroskop-metalurgi-upright-a13-0212b",
    category: "metallurgical", brand: "OPTO-EDU", model: "A13.0212-B",
    image: "/images/products/metallurgical-1.webp",
    magnification: "50x - 500x", eyepiece: "WF10x/18mm", illumination: "LED Epi 3W",
    application: "QC Pabrik, Material Testing",
    description: "Mikroskop metalurgi binokuler kompak untuk quality control pabrik. Bright field reflected light untuk inspeksi rutin struktur material.",
    specs: { "Optical System": "Infinity Plan, Reflected Light", "Head": "Binokuler Siedentopf, 30°", "Eyepiece": "WF10x/18mm", "Objective": "LMPlan 5x, 10x, 20x, 50x", "Nosepiece": "Quadruple", "Stage": "150x150mm with clips", "Illumination": "LED Epi 3W reflected", "Observation": "Bright Field", "Focus": "Coaxial coarse & fine", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },

  // ===== POLARIZING =====
  {
    id: "p1", name: "Mikroskop Polarisasi Trinokuler A15.2604-T", slug: "mikroskop-polarisasi-trinokuler-a15-2604t",
    category: "polarizing", brand: "OPTO-EDU", model: "A15.2604-T",
    image: "/images/products/polarizing-1.webp",
    magnification: "40x - 600x (Polarized Light)", eyepiece: "WF10x/20mm, crosshair", illumination: "LED 3W Transmitted",
    application: "Geologi, Petrografi, Mineralogi",
    description: "Mikroskop polarisasi trinokuler untuk analisis sayatan tipis batuan dan mineral. Meja putar 360° dengan skala vernier, Bertrand lens built-in.",
    specs: { "Optical System": "Infinity Strain-Free Plan", "Head": "Trinokuler, foto port", "Eyepiece": "WF10x/20mm with crosshair & scale", "Objective": "Strain-Free Plan 4x, 10x, 20x, 40x, 60x", "Polarizer": "360° rotatable, removable", "Analyzer": "Slide-in, 0-90° rotatable", "Bertrand Lens": "Built-in, centering adjustable", "Stage": "Circular 360° rotating, vernier 6'", "Compensator": "λ plate, λ/4 plate, quartz wedge", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },

  // ===== FLUORESCENT =====
  {
    id: "f1", name: "Mikroskop Fluorescence LED A16.2603-T", slug: "mikroskop-fluorescence-led-a16-2603t",
    category: "fluorescent", brand: "OPTO-EDU", model: "A16.2603-T",
    image: "/images/products/lab-2.webp",
    magnification: "40x - 1000x + Fluorescence", eyepiece: "WF10x/22mm (FN22)", illumination: "LED Epi-fluorescence + LED Transmitted",
    application: "Riset Biomedis, Imunologi, TB Screening",
    description: "Mikroskop fluorescence trinokuler dengan modul epi-fluorescence LED. Filter set B/G/UV/V. LED lebih aman dan tahan lama dibanding lampu merkuri konvensional.",
    specs: { "Optical System": "Infinity Plan Semi-APO", "Head": "Trinokuler Siedentopf, 100:0/80:20", "Eyepiece": "WF10x/22mm (FN22) extra wide", "Objective": "Plan Fluor 10x, 20x, 40x, 100x Oil", "Fluorescence Module": "LED Epi-fluorescence, 4 position turret", "Filter Set": "B (Blue), G (Green), UV, V (Violet)", "Excitation Source": "High-power LED per channel", "Stage": "180x155mm ceramic, X-Y mechanical", "Illumination": "LED Transmitted 5W Köhler", "Power": "100-240V 50/60Hz" },
    inStock: false, featured: false, badge: "Pre-Order"
  },

  // ===== INVERTED =====
  {
    id: "i1", name: "Mikroskop Inverted Phase Contrast A14.0205-T", slug: "mikroskop-inverted-phase-contrast-a14-0205t",
    category: "inverted", brand: "OPTO-EDU", model: "A14.0205-T",
    image: "/images/products/inverted-1.webp",
    magnification: "100x - 400x (Inverted)", eyepiece: "WF10x/22mm", illumination: "LED Transmitted 5W",
    application: "Kultur Sel, IVF, Tissue Culture",
    description: "Mikroskop inverted trinokuler dengan phase contrast untuk pengamatan sel hidup dalam flask dan petri dish. Standar lab kultur sel dan IVF.",
    specs: { "Optical System": "Infinity Plan Phase Contrast", "Head": "Trinokuler, foto port", "Eyepiece": "WF10x/22mm", "Objective": "LWD Phase Plan 10x, 20x, 40x (long working distance)", "Phase Contrast": "Built-in phase ring slider", "Stage": "Fixed 230x225mm, specimen holder for flask/petri", "Condenser": "Long working distance condenser, swing-out", "Illumination": "LED Transmitted 5W, top-mounted", "Focus": "Coaxial coarse & fine, range 30mm", "Power": "100-240V 50/60Hz" },
    inStock: true, featured: false
  },

  // ===== NEW BRANDS (DUMMY PRODUCTS) =====
  // OLYMPUS
  {
    id: "o1", name: "Olympus CX23 Laboratory Microscope", slug: "olympus-cx23-laboratory",
    category: "laboratory", brand: "Olympus", model: "CX23",
    image: "/images/products/lab-2.webp",
    magnification: "40x - 1000x", eyepiece: "10x/20", illumination: "LED",
    application: "Klinik, Edukasi Tinggi",
    description: "Mikroskop binokuler standar industri untuk keperluan rutin laboratorium klinik dan institusi pendidikan.",
    specs: { "Optical System": "Infinity", "Head": "Binokuler" },
    inStock: true, featured: true, badge: "Populer"
  },
  {
    id: "o2", name: "Olympus SZ61 Stereo Microscope", slug: "olympus-sz61-stereo",
    category: "stereo", brand: "Olympus", model: "SZ61",
    image: "/images/products/stereo-1.webp",
    magnification: "6.7x - 45x", eyepiece: "10x/22", illumination: "LED Ring (Opsional)",
    application: "Industri, Inspeksi PCB",
    description: "Mikroskop stereo dengan rentang zoom rasio tinggi, memberikan gambar resolusi tinggi dan kedalaman fokus yang sangat baik.",
    specs: { "Zoom Ratio": "6.7:1", "Head": "Binokuler" },
    inStock: true, featured: true
  },

  // EUROMEX
  {
    id: "eu1", name: "Euromex BioBlue Lab", slug: "euromex-bioblue-lab",
    category: "laboratory", brand: "Euromex", model: "BB.1152",
    image: "/images/products/lab-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/20", illumination: "NeoLED",
    application: "Universitas, Laboratorium Rutin",
    description: "Mikroskop laboratorium Eropa dengan sistem NeoLED yang inovatif untuk pencahayaan optimal tanpa panas berlebih.",
    specs: { "Optical System": "Finite", "Head": "Binokuler" },
    inStock: true, featured: true
  },
  {
    id: "eu2", name: "Euromex NexiusZoom", slug: "euromex-nexiuszoom",
    category: "stereo", brand: "Euromex", model: "NZ.1902",
    image: "/images/products/stereo-1.webp",
    magnification: "6.7x - 45x", eyepiece: "WF10x/22", illumination: "LED 3W Top & Bottom",
    application: "Riset Material, Botani",
    description: "Mikroskop stereo zoom tangguh dengan sistem iluminasi ganda, ideal untuk pengamatan spesimen biologi dan material opak.",
    specs: { "Zoom": "0.67x - 4.5x", "Stand": "Pillar" },
    inStock: true, featured: true, badge: "Terlaris"
  },

  // DINO-LITE
  {
    id: "dl1", name: "Dino-Lite Edge 5MP AM7115MZT", slug: "dinolite-edge-5mp-am7115mzt",
    category: "digital", brand: "Dino-Lite", model: "AM7115MZT",
    image: "/images/products/digital-1.webp",
    magnification: "20x - 220x", eyepiece: "Digital (PC/Mac)", illumination: "8x White LED",
    application: "Inspeksi Manufaktur, Forensik",
    description: "Mikroskop digital genggam 5 Megapixel dengan polarizer terintegrasi dan fitur pengukuran presisi tinggi (AMR).",
    specs: { "Sensor": "5MP CMOS", "Interface": "USB 2.0", "Polarizer": "Yes" },
    inStock: true, featured: true, badge: "Premium"
  },
  {
    id: "dl2", name: "Dino-Lite Premier AM4113T", slug: "dinolite-premier-am4113t",
    category: "digital", brand: "Dino-Lite", model: "AM4113T",
    image: "/images/products/digital-1.webp",
    magnification: "10x - 200x", eyepiece: "Digital", illumination: "8x White LED",
    application: "Edukasi, Pemeriksaan Kulit",
    description: "Mikroskop digital USB 1.3MP yang serbaguna untuk kebutuhan dokumentasi dasar dan pengamatan sehari-hari.",
    specs: { "Sensor": "1.3MP", "Interface": "USB 2.0" },
    inStock: true, featured: true
  },

  // OPTILAB
  {
    id: "op1", name: "Kamera Mikroskop Optilab Advance Plus", slug: "optilab-advance-plus",
    category: "digital", brand: "Optilab", model: "Advance Plus",
    image: "/images/products/digital-1.webp",
    magnification: "Tergantung Mikroskop", eyepiece: "PC View", illumination: "N/A",
    application: "Digitalisasi Mikroskop, Telepathology",
    description: "Kamera mikroskop buatan Indonesia (TKDN) untuk mendigitalisasi mikroskop analog Anda menjadi sistem pencitraan modern.",
    specs: { "Sensor": "CMOS 5MP", "Software": "Optilab Viewer", "TKDN": "Tersertifikasi" },
    inStock: true, featured: true, badge: "TKDN"
  },
  {
    id: "op2", name: "Optilab Mikroskop Trinokuler Paket", slug: "optilab-mikroskop-trinokuler-paket",
    category: "laboratory", brand: "Optilab", model: "Pro Series",
    image: "/images/products/lab-1.webp",
    magnification: "40x - 1000x", eyepiece: "WF10x/18", illumination: "LED",
    application: "Laboratorium Klinik, Kampus",
    description: "Paket bundling mikroskop trinokuler dan kamera Optilab lengkap dengan software analisis berbahasa Indonesia.",
    specs: { "System": "Bundled Digital Microscope", "Camera": "Optilab Pro" },
    inStock: true, featured: true, badge: "Paket Lengkap"
  }
];
