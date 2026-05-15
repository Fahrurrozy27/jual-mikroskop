const fs = require('fs');
const path = require('path');

const models = [
  // Upright
  { slug: "cx23", name: "Olympus CX23", model: "CX23", cat: "laboratory", app: "Edukasi, Klinik", mag: "40x - 1000x", ill: "LED", desc: "Mikroskop rutin ergonomis dan ringan, ideal untuk edukasi dan laboratorium klinis dasar.", eye: "10X" },
  { slug: "cx33", name: "Olympus CX33", model: "CX33", cat: "laboratory", app: "Klinik, Lab", mag: "40x - 1000x", ill: "LED", desc: "Mikroskop biologi untuk pengamatan rutin sehari-hari, nyaman digunakan berkat desain ergonomis.", eye: "10X" },
  { slug: "cx43", name: "Olympus CX43", model: "CX43", cat: "laboratory", app: "Klinik, Riset", mag: "40x - 1000x", ill: "LED", desc: "Mikroskop biologi serbaguna dengan berbagai metode pengamatan: brightfield, darkfield, dan fase kontras.", eye: "10X" },
  { slug: "bx43", name: "Olympus BX43", model: "BX43", cat: "laboratory", app: "Klinik, Riset", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Sistem manual yang fleksibel, mendukung berbagai komponen modular untuk aplikasi spesifik.", eye: "10X" },
  { slug: "bx53", name: "Olympus BX53", model: "BX53", cat: "laboratory", app: "Riset Lanjut", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Sistem mikroskop fluoresensi semi-motorized yang canggih untuk berbagai kebutuhan riset yang kompleks.", eye: "10X" },
  { slug: "bx63", name: "Olympus BX63", model: "BX63", cat: "laboratory", app: "Riset Lanjut", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Mikroskop bermotor penuh (fully motorized) untuk presisi tingkat tinggi dan kemudahan pengoperasian via software.", eye: "10X" },
  { slug: "bx46", name: "Olympus BX46", model: "BX46", cat: "laboratory", app: "Klinik, Patologi", mag: "40x - 1000x", ill: "LED", desc: "Didesain khusus untuk ergonomi maksimal pada pemeriksaan rutin klinis dan patologi yang memakan waktu lama.", eye: "10X" },
  { slug: "bx51wi", name: "Olympus BX51WI", model: "BX51WI", cat: "laboratory", app: "Elektrofisiologi", mag: "40x - 1000x", ill: "Halogen", desc: "Mikroskop upright fixed-stage yang dirancang untuk riset elektrofisiologi dengan stabilitas tinggi.", eye: "10X" },
  
  // Polarizing
  { slug: "bx53-p", name: "Olympus BX53-P", model: "BX53-P", cat: "industrial", app: "Geologi, Mineralogi", mag: "40x - 1000x", ill: "Halogen", desc: "Mikroskop polarisasi canggih untuk analisis detail struktur kristal, mineral, dan polimer.", eye: "10X" },
  { slug: "bx53led-mdo", name: "Olympus BX53LED+MDO", model: "BX53LED+MDO", cat: "laboratory", app: "Diskusi Medis", mag: "40x - 1000x", ill: "LED", desc: "Sistem multi-diskusi (Multi-Discussion Observation) untuk kolaborasi tim dan edukasi patologi.", eye: "10X" },

  // Stereo
  { slug: "sz61", name: "Olympus SZ61", model: "SZ61", cat: "stereo", app: "Industri, Biologi", mag: "6.7x - 45x", ill: "LED", desc: "Mikroskop stereo dengan rasio zoom 6.7:1, memberikan gambar 3D yang sangat tajam dan reproduksi warna presisi.", eye: "10X" },
  { slug: "sz51", name: "Olympus SZ51", model: "SZ51", cat: "stereo", app: "Industri, Biologi", mag: "8x - 40x", ill: "LED", desc: "Mikroskop stereo dengan rasio zoom 5:1, ideal untuk inspeksi rutin di berbagai bidang.", eye: "10X" },
  { slug: "szx7", name: "Olympus SZX7", model: "SZX7", cat: "stereo", app: "Riset Lanjut", mag: "8x - 56x", ill: "LED/Halogen", desc: "Mikroskop stereo Galileo dengan sistem optik infinity, memberikan gambar beresolusi tinggi dan bidang pandang luas.", eye: "10X" },
  { slug: "szx16", name: "Olympus SZX16", model: "SZX16", cat: "stereo", app: "Riset Lanjut", mag: "7x - 115x", ill: "LED/Halogen", desc: "Sistem stereo zoom tertinggi (16.4:1) untuk riset mendalam, dirancang untuk makro dan mikro inspeksi.", eye: "10X" },
  { slug: "szx10", name: "Olympus SZX10", model: "SZX10", cat: "stereo", app: "Riset Lanjut", mag: "6.3x - 63x", ill: "LED/Halogen", desc: "Mikroskop stereo untuk pencitraan alami dengan reproduksi warna sangat tinggi tanpa distorsi.", eye: "10X" },

  // Inverted
  { slug: "ckx53", name: "Olympus CKX53", model: "CKX53", cat: "laboratory", app: "Kultur Sel", mag: "40x - 400x", ill: "LED", desc: "Mikroskop inverted kompak yang memberikan kualitas gambar luar biasa untuk pengamatan kultur sel.", eye: "10X" },
  { slug: "cm30", name: "Olympus CM30", model: "CM30", cat: "digital", app: "Monitoring Inkubator", mag: "Digital", ill: "LED", desc: "Sistem monitoring inkubasi cerdas untuk melacak status kultur sel secara remote 24/7.", eye: "Digital" },
  { slug: "ix73", name: "Olympus IX73", model: "IX73", cat: "laboratory", app: "Kultur Sel, Riset", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Sistem mikroskop inverted manual/semi-motorized yang dapat dikustomisasi dengan sistem 'deck'.", eye: "10X" },
  { slug: "ix83", name: "Olympus IX83", model: "IX83", cat: "laboratory", app: "Riset Lanjut", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Mikroskop inverted fully motorized dengan desain stabil untuk live cell imaging jangka panjang.", eye: "10X" },
  { slug: "ix85", name: "Olympus IX85", model: "IX85", cat: "laboratory", app: "Riset Lanjut", mag: "40x - 1000x", ill: "LED/Halogen", desc: "Varian tertinggi dari seri IX, optimal untuk advanced fluorescence dan pencitraan sel hidup super resolusi.", eye: "10X" },

  // Laser
  { slug: "fv5000", name: "Olympus FV5000", model: "FV5000", cat: "laboratory", app: "Riset Kompleks", mag: "Variatif", ill: "Laser", desc: "Mikroskop confocal laser scanning generasi terbaru yang mendefinisikan ulang kecepatan dan sensitivitas pencitraan 3D/4D.", eye: "10X" },

  // Cameras
  { slug: "ep50", name: "Olympus EP50", model: "EP50", cat: "digital", app: "Edukasi, Klinik", mag: "N/A", ill: "N/A", desc: "Kamera warna 5-megapixel dengan fitur WiFi, mengubah mikroskop menjadi sistem nirkabel.", eye: "N/A" },
  { slug: "lc35", name: "Olympus LC35", model: "LC35", cat: "digital", app: "Rutin Lab", mag: "N/A", ill: "N/A", desc: "Kamera mikroskop resolusi standar untuk dokumentasi gambar brightfield sehari-hari yang efisien.", eye: "N/A" },
  { slug: "dp23", name: "Olympus DP23", model: "DP23", cat: "digital", app: "Riset, Patologi", mag: "N/A", ill: "N/A", desc: "Kamera cerdas 6.4-megapixel yang mampu menangkap detail halus untuk patologi dan riset sains material.", eye: "N/A" },
  { slug: "dp28", name: "Olympus DP28", model: "DP28", cat: "digital", app: "Riset, Patologi", mag: "N/A", ill: "N/A", desc: "Kamera mikroskop 4K resolusi tinggi (8.9 megapixel) yang menyajikan gambar super detail untuk konferensi dan publikasi.", eye: "N/A" },
  { slug: "dp75", name: "Olympus DP75", model: "DP75", cat: "digital", app: "Fluorescence Riset", mag: "N/A", ill: "N/A", desc: "Kamera mikroskop warna/monokrom hybrid resolusi ultra untuk aplikasi brightfield maupun fluorescence low-light.", eye: "N/A" },
];

let output = `\n  // ===== OLYMPUS CATALOG PRODUCTS =====\n`;

models.forEach((m, idx) => {
  const isFeatured = ['bx53', 'cx33', 'szx16', 'ix83'].includes(m.slug);
  const badge = ['bx63', 'ix83', 'fv5000', 'dp75'].includes(m.slug) ? "Premium" : m.cat === 'digital' ? "Kamera" : undefined;
  
  output += `  {
    id: "oly-${m.slug}", name: "${m.name}", slug: "olympus-${m.slug}",
    category: "${m.cat}", brand: "Olympus", model: "${m.model}",
    image: "/images/products/olympus-${m.slug}.png",
    magnification: "${m.mag}", eyepiece: "${m.eye}", illumination: "${m.ill}",
    application: "${m.app}",
    description: "${m.desc}",
    specs: { "Brand": "Olympus", "Model": "${m.model}", "Tipe": "${m.cat === 'stereo' ? 'Stereo' : m.cat === 'digital' ? 'Kamera Digital' : 'Biological Upright/Inverted'}" },
    extraInfo: {
      features: [
        "Sistem Optik Olympus (UIS2 / Infinity Plan)",
        "Dukungan kalibrasi resmi dan garansi distributor",
        "Kompatibel dengan berbagai modul aksesori Olympus"
      ]
    },
    inStock: true, featured: ${isFeatured}${badge ? `, badge: "${badge}"` : ''}
  },
`;
});

fs.writeFileSync(path.join(__dirname, 'olympus-data.ts'), output);
console.log('Generated olympus-data.ts');
