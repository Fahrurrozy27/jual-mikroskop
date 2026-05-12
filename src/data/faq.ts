export interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

export const faqData: FAQItem[] = [
  {
    question: "Bagaimana cara melakukan pemesanan (B2B) untuk instansi?",
    answer: "Untuk pengadaan instansi pemerintah, sekolah, rumah sakit, maupun perusahaan swasta, Anda dapat menghubungi tim sales kami via WhatsApp atau Email. Kami akan membantu menyusun penawaran harga resmi (Quotation) sesuai spesifikasi teknis dan anggaran yang Anda butuhkan.",
    keywords: ["cara beli mikroskop", "pengadaan mikroskop", "penawaran harga"]
  },
  {
    question: "Apakah pembelian mikroskop dilengkapi Faktur Pajak (PPN)?",
    answer: "Ya, JualMikroskop.id adalah perusahaan berbadan hukum (PKP). Setiap transaksi pembelian akan dilengkapi dengan Faktur Pajak PPN 11% yang valid dan dokumen legalitas perusahaan yang lengkap untuk keperluan administrasi instansi Anda.",
    keywords: ["faktur pajak", "ppn 11%", "legalitas"]
  },
  {
    question: "Apakah produk yang dijual bergaransi resmi?",
    answer: "Tentu. Seluruh produk mikroskop yang kami jual adalah 100% original dan dilengkapi dengan garansi resmi dari pabrik (berkisar antara 1 hingga 3 tahun tergantung merek). Kami menjamin ketersediaan sparepart dan layanan perbaikan.",
    keywords: ["garansi resmi", "garansi mikroskop", "original"]
  },
  {
    question: "Apakah menyediakan layanan kalibrasi dan sertifikatnya?",
    answer: "Ya, kami menyediakan layanan kalibrasi mikroskop sesuai standar mutu. Setiap pembelian unit tertentu atau berdasarkan permintaan, mikroskop akan dikirim bersama Sertifikat Kalibrasi resmi yang diakui secara nasional (KAN).",
    keywords: ["sertifikat kalibrasi", "kalibrasi mikroskop"]
  },
  {
    question: "Bagaimana sistem pengiriman ke luar kota atau luar pulau?",
    answer: "Kami melayani pengiriman ke seluruh wilayah Indonesia. Kami bekerja sama dengan layanan ekspedisi terpercaya (kargo udara/darat/laut) yang dilengkapi dengan asuransi pengiriman dan packing kayu standar alat optik agar barang sampai dengan aman.",
    keywords: ["pengiriman mikroskop", "luar kota", "packing kayu"]
  },
  {
    question: "Apakah tim JualMikroskop.id bisa mendampingi penyusunan RAB?",
    answer: "Sangat bisa. Jika Anda masih dalam tahap perencanaan anggaran (RAB), tim konsultan teknis kami siap memberikan referensi spesifikasi teknis, brosur, dan estimasi harga terbaru agar pengajuan anggaran instansi Anda akurat dan efisien.",
    keywords: ["bantu rab", "spesifikasi teknis", "anggaran pengadaan"]
  },
  {
    question: "Apakah ada fasilitas training atau pelatihan penggunaan alat?",
    answer: "Ya, kami menyediakan layanan instalasi (commissioning) dan pelatihan operasional (training) untuk end-user di lokasi laboratorium Anda. Teknisi bersertifikat kami akan memastikan tim Anda memahami cara penggunaan dan perawatan mikroskop dengan benar.",
    keywords: ["training mikroskop", "pelatihan", "instalasi"]
  }
];
