export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  productCount: number;
  priceRange: string;
  keywords: string[];
  application: string[];
}

export const categories: Category[] = [
  {
    id: "student",
    name: "Mikroskop Edukasi / Student",
    slug: "student",
    description: "Mikroskop entry-level untuk praktikum siswa SMP, SMA, dan mahasiswa. Desain kokoh, ringan, dan mudah dioperasikan.",
    longDescription: "Mikroskop edukasi (student microscope) dirancang khusus untuk kebutuhan praktikum siswa dan mahasiswa. Tersedia dalam konfigurasi monokuler dan binokuler dengan perbesaran 40x-1000x. Bodi kokoh, lensa achromatic, dan iluminasi LED built-in membuatnya tahan lama untuk penggunaan intensif di laboratorium sekolah. Tersedia model cordless (battery-powered) untuk fleksibilitas penggunaan di lapangan.",
    icon: "graduation-cap",
    productCount: 4,
    priceRange: "Rp 1.500.000 - Rp 5.000.000",
    keywords: ["mikroskop untuk sekolah", "mikroskop edukasi", "mikroskop monokuler", "harga mikroskop murah", "mikroskop pelajar"],
    application: ["SMP", "SMA", "Universitas", "Praktikum Biologi"]
  },
  {
    id: "laboratory",
    name: "Mikroskop Laboratorium",
    slug: "laboratory",
    description: "Mikroskop compound profesional untuk riset, diagnostik klinik, dan analisis laboratorium. Optik plan/infinity.",
    longDescription: "Mikroskop laboratorium (laboratory compound microscope) merupakan instrumen optik profesional yang dirancang untuk penggunaan riset dan diagnostik klinis. Dilengkapi dengan sistem optik plan atau infinity yang menghasilkan gambar datar sempurna dari tepi ke tepi field of view. Tersedia konfigurasi binokuler dan trinokuler, dengan kemampuan upgrade ke dark field, phase contrast, polarizing, fluorescence, dan DIC. Standar untuk laboratorium universitas, rumah sakit, klinik patologi, dan mikrobiologi.",
    icon: "microscope",
    productCount: 4,
    priceRange: "Rp 5.000.000 - Rp 35.000.000",
    keywords: ["mikroskop laboratorium", "mikroskop binokuler", "mikroskop trinokuler", "harga mikroskop binokuler", "mikroskop lab"],
    application: ["Riset Universitas", "Lab Klinik", "Patologi", "Mikrobiologi", "Hematologi"]
  },
  {
    id: "stereo",
    name: "Mikroskop Stereo Zoom",
    slug: "stereo",
    description: "Untuk pengamatan 3D objek padat dengan zoom kontinyu. Ideal untuk inspeksi, diseksi, geologi, dan QC elektronik.",
    longDescription: "Mikroskop stereo zoom (stereomicroscope) memberikan tampilan tiga dimensi dari objek padat yang tidak tembus cahaya. Dengan sistem zoom kontinyu (umumnya 0.7x-4.5x, setara 7x-45x total), pengguna dapat memperbesar objek secara halus tanpa jeda perbesaran. Dilengkapi LED ring illumination untuk pencahayaan merata. Digunakan secara luas dalam inspeksi komponen elektronik (PCB), quality control manufaktur, gemologi, entomologi, botani, paleontologi, dan forensik.",
    icon: "eye",
    productCount: 3,
    priceRange: "Rp 4.500.000 - Rp 18.000.000",
    keywords: ["mikroskop stereo", "harga mikroskop stereo", "mikroskop stereo zoom", "stereo microscope"],
    application: ["QC Elektronik", "Geologi", "Botani", "Forensik", "Inspeksi PCB"]
  },
  {
    id: "digital",
    name: "Mikroskop Digital / LCD",
    slug: "digital",
    description: "Terintegrasi kamera dan layar LCD untuk pengamatan, pengukuran, dan dokumentasi real-time.",
    longDescription: "Mikroskop digital mengintegrasikan sistem pencitraan (kamera CMOS/CCD) langsung ke dalam unit mikroskop, menampilkan gambar real-time pada layar LCD built-in atau monitor eksternal melalui koneksi HDMI/USB. Mendukung capture foto (JPEG), perekaman video, dan pengukuran digital langsung di layar. Beberapa model dilengkapi sistem operasi Android dengan touchscreen. Ideal untuk quality control industri, pendidikan interaktif, dokumentasi laboratorium, dan telepathology.",
    icon: "monitor",
    productCount: 3,
    priceRange: "Rp 6.000.000 - Rp 28.000.000",
    keywords: ["mikroskop digital", "harga mikroskop digital", "mikroskop LCD", "digital microscope"],
    application: ["QC Industri", "Edukasi Interaktif", "Dokumentasi", "Presentasi"]
  },
  {
    id: "metallurgical",
    name: "Mikroskop Metalurgi",
    slug: "metalurgi",
    description: "Untuk analisis struktur logam, material, dan permukaan opak. Iluminasi refleksi (epi-illumination).",
    longDescription: "Mikroskop metalurgi (metallurgical microscope) dirancang khusus untuk mengamati sampel opak (tidak tembus cahaya) seperti logam, paduan, keramik, komposit, dan semikonduktor. Menggunakan sistem iluminasi refleksi (epi-illumination/reflected light) yang menyinari sampel dari atas melalui objektif. Tersedia konfigurasi upright dan inverted, dengan kemampuan bright field, dark field, polarizing, DIC, dan fluorescence. Standar untuk laboratorium metalurgi, quality control material, dan industri semikonduktor.",
    icon: "factory",
    productCount: 2,
    priceRange: "Rp 12.000.000 - Rp 65.000.000",
    keywords: ["mikroskop metalurgi", "metallurgical microscope", "mikroskop material", "mikroskop inspeksi logam"],
    application: ["Metalurgi", "QC Material", "Semikonduktor", "Riset Material"]
  },
  {
    id: "polarizing",
    name: "Mikroskop Polarisasi",
    slug: "polarisasi",
    description: "Untuk analisis mineral, kristal, dan material birefringent menggunakan cahaya terpolarisasi.",
    longDescription: "Mikroskop polarisasi (polarizing microscope) dilengkapi polarizer dan analyzer untuk mengamati sifat optik material birefringent. Digunakan secara luas dalam petrografi (analisis batuan tipis), mineralogi, geologi, farmasi (identifikasi kristal), dan forensik. Meja preparat berputar 360° dengan skala vernier memungkinkan pengukuran sudut pemadaman dan karakter optik mineral secara presisi.",
    icon: "diamond",
    productCount: 1,
    priceRange: "Rp 8.000.000 - Rp 25.000.000",
    keywords: ["mikroskop polarisasi", "polarizing microscope", "mikroskop geologi", "mikroskop mineral"],
    application: ["Geologi", "Petrografi", "Mineralogi", "Farmasi"]
  },
  {
    id: "fluorescent",
    name: "Mikroskop Fluorescence",
    slug: "fluorescence",
    description: "Untuk pengamatan sampel yang diberi pewarnaan fluoresen. Digunakan dalam riset biomedis dan imunologi.",
    longDescription: "Mikroskop fluorescence menggunakan sumber cahaya eksitasi (LED atau lampu merkuri) dan filter set khusus (B/G/UV/V) untuk membuat sampel yang diberi pewarnaan fluoresen bercahaya dengan latar belakang gelap. Teknik ini vital dalam biologi molekuler, imunofluorescence, FISH (Fluorescence In Situ Hybridization), dan diagnosis penyakit tropis seperti TB (menggunakan pewarnaan auramine). Tersedia dalam konfigurasi upright trinokuler dengan modul epi-fluorescence yang dapat dilepas.",
    icon: "zap",
    productCount: 1,
    priceRange: "Rp 25.000.000 - Rp 85.000.000",
    keywords: ["mikroskop fluorescence", "fluorescence microscope", "mikroskop fluoresen", "mikroskop riset"],
    application: ["Riset Biomedis", "Imunologi", "Biologi Molekuler", "Patologi"]
  },
  {
    id: "inverted",
    name: "Mikroskop Inverted",
    slug: "inverted",
    description: "Objektif di bawah, untuk pengamatan kultur sel dalam flask/petri dish tanpa membuka wadah.",
    longDescription: "Mikroskop inverted (terbalik) menempatkan sumber cahaya dan kondensor di atas, sementara objektif berada di bawah meja preparat. Desain ini memungkinkan pengamatan sel hidup langsung di dalam wadah kultur (flask, petri dish, well plate) tanpa perlu memindahkan sampel. Standar untuk laboratorium kultur sel, IVF (In Vitro Fertilization), dan riset biologi sel. Tersedia dalam konfigurasi phase contrast dan fluorescence.",
    icon: "flip-vertical",
    productCount: 1,
    priceRange: "Rp 15.000.000 - Rp 75.000.000",
    keywords: ["mikroskop inverted", "inverted microscope", "mikroskop kultur sel", "mikroskop terbalik"],
    application: ["Kultur Sel", "IVF", "Biologi Sel", "Tissue Culture"]
  }
];
