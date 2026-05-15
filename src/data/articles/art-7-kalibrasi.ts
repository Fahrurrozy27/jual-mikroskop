import { Article } from "../types";

export const article7: Article = {
  id: "art-7",
  slug: "kapan-mikroskop-wajib-dikalibrasi-ulang",
  title: "Kapan Mikroskop Wajib Dikalibrasi Ulang? (Spill Regulasi Akreditasi ISO 15189)",
  excerpt: "Mikroskop bukan lemari es yang bisa dicolok dan dilupakan bertahun-tahun. Kalau lab kamu mau lolos akreditasi KAN/ISO, jadwal kalibrasi ini hukumnya wajib. Ketahui parameter mekanik dan optik apa saja yang diuji!",
  category: "Tips Perawatan",
  date: "22 Mei 2024",
  readTime: "8 min read",
  image: "/images/articles/microscope-7.png",
  author: { 
    name: "Evans Abqoury", 
    role: "Optics & Microscope Tech Consultant", 
    avatar: "https://ui-avatars.com/api/?name=Evans+Abqoury&background=0284c7&color=fff" 
  },
  tags: ["Kalibrasi", "Akreditasi", "ISO 15189", "Perawatan", "Standar KAN"],
  content: `
    <h2>Mitos Alat Optik: Beli Sekali, Dipakai Sampai Pensiun</h2>
    <p>Ini adalah penyakit kronis di banyak laboratorium konvensional: Membeli mikroskop premium seharga ratusan juta, tapi tidak pernah menganggarkan dana untuk biaya pemeliharaan tahunan. Akibatnya, dalam waktu dua hingga tiga tahun, keluhan mulai bermunculan: <em>"Kok fokusnya suka turun sendiri ya?"</em> atau <em>"Kok lensanya buram padahal udah dilap?"</em>.</p>
    
    <p>Jika instansi Anda adalah sebuah puskesmas, rumah sakit, atau lembaga riset yang mengeluarkan sertifikat hasil analisis untuk pihak ketiga, mikroskop Anda bukan lagi sekadar alat bantu lihat. Ia secara hukum berstatus sebagai <strong>Alat Ukur Medis</strong>. Dan sama seperti timbangan emas atau termometer digital, alat ukur medis <strong>WAJIB</strong> dikalibrasi secara berkala [1].</p>

    <blockquote>
      <strong>Fakta Akreditasi KAN:</strong> Komite Akreditasi Nasional (KAN) merujuk pada standar ISO 15189 (untuk Laboratorium Medik) dan ISO 17025 (untuk Laboratorium Pengujian). Kedua standar ini mengharuskan setiap instrumen yang menunjang hasil diagnosis wajib memiliki jadwal pemeliharaan pencegahan (<em>preventive maintenance</em>) dan sertifikat kalibrasi yang tertelusur (<em>traceable</em>) [2].
    </blockquote>

    <h2>Frekuensi Ideal Kalibrasi Mikroskop</h2>
    <p>Jadi, seberapa sering teknisi dari pihak ketiga (seperti agen tunggal pabrikan atau BPFK) harus datang memeriksa mikroskop lab Anda? Regulasi dan manual pabrikan (seperti Olympus dan Zeiss) menetapkan interval standar berikut:</p>
    
    <ul>
      <li><strong>Pembersihan Rutin (Analis Lab):</strong> Harian atau Mingguan.</li>
      <li><strong>Pengecekan Internal (Kepala Lab):</strong> Setiap 1 bulan (Mengecek keselarasan Koehler, bohlam lampu, dan fungsi makrometer dasar).</li>
      <li><strong>Kalibrasi Eksternal Bersertifikat:</strong> Minimal <strong>1 Tahun Sekali</strong>, atau lebih cepat jika alat bekerja <em>heavy-duty</em> 24/7 (seperti di lab patologi anatomi rumah sakit tipe A) [3].</li>
      <li><strong>Kalibrasi Kondisional:</strong> Segera lakukan kalibrasi jika mikroskop baru saja terjatuh, dipindahkan jarak jauh (ekspedisi darat/udara), atau selesai dibongkar total akibat perbaikan besar.</li>
    </ul>

    <h2>Parameter Apa Saja yang Diuji Saat Kalibrasi?</h2>
    <p>Pernahkah Anda bertanya-tanya apa yang sebenarnya dilakukan oleh teknisi bersertifikat saat mereka mengotak-atik mikroskop Anda selama berjam-jam? Proses kalibrasi tidak sekadar <em>"dilap sampai mengkilap"</em>. Berikut adalah parameter uji mutlak yang mereka lakukan:</p>

    <h3>1. Uji Kelistrikan dan Iluminasi (Electrical & Illumination Test)</h3>
    <p>Pengujian pertama bersifat elektrikal. Teknisi akan mengukur fluktuasi voltase pada catu daya (<em>power supply</em>) lampu. Lampu Halogen/LED yang voltasenya tidak stabil akan menyebabkan efek <em>flickering</em> (kedap-kedip) pada kamera, merusak hasil <em>photomicrography</em>. Teknisi juga mengecek intensitas cahaya menggunakan Lux Meter untuk memastikan tidak ada penurunan efisiensi bohlam yang bisa memanipulasi warna pewarnaan H&E [4].</p>

    <h3>2. Kalibrasi Parfokalitas dan Parsentralitas (Optomechanical Test)</h3>
    <ul>
      <li><strong>Parfokalisme (Parfocality):</strong> Kemampuan mikroskop untuk tetap berada dalam titik fokus yang tajam ketika lensa objektif diputar/diganti dari 10x ke 40x ke 100x. Jika setelah diputar gambar menjadi sangat kabur dan analis harus memutar <em>coarse focus</em> (makrometer) dari nol lagi, berarti sistem optomekaniknya telah <em>loss</em> dan harus dikencangkan ulang.</li>
      <li><strong>Parsentralitas (Parcentricity):</strong> Memastikan target spesimen yang berada tepat di tengah (berada di titik persilangan <em>crosshair</em>) pada lensa 10x, tetap akan berada di tengah ketika dipindah ke lensa 40x. Penyimpangan sentralitas biasanya diakibatkan oleh benturan pada <em>revolver nosepiece</em>.</li>
    </ul>

    <h3>3. Uji Penurunan Meja Objek (Stage Drift Test)</h3>
    <p>Ini adalah kerusakan paling menyebalkan sedunia: Kamu sudah fokus menggunakan lensa okuler, namun perlahan-lahan dalam 10 detik, gambarnya menjadi <em>blur</em> (nge-<em>drift</em>). Kenapa? Karena meja objek (<em>mechanical stage</em>) turun melorot perlahan ke bawah akibat gravitasi dan ausnya <em>rack and pinion gear</em> [5]. Teknisi akan membuka tuas pengunci, melumasi ulang roda gigi menggunakan <em>damping grease</em> khusus pabrikan, lalu mengencangkan baut tegangan (<em>tension adjustment ring</em>) menggunakan alat khusus.</p>

    <h3>4. Validasi Skala Mikrometri</h3>
    <p>Sama seperti artikel sebelumnya, jika mikroskop di lab Anda digunakan untuk mengukur ukuran sel darah, ukuran spora, atau luas area material, teknisi kalibrasi wajib menggunakan anak timbang/penggaris emas mereka: <strong>Certified Stage Micrometer</strong>. Mereka akan memverifikasi bahwa pengukuran piksel di <em>software</em> kamera (seperti pada Optilab) sudah 100% akurat tanpa <em>error margin</em> melebihi toleransi standar.</p>

    <h2>Jangan Pertaruhkan Akreditasi Lab Anda!</h2>
    <p>Ketika asesor akreditasi ISO datang berkunjung untuk melakukan audit (<em>surveillance</em>), hal pertama yang mereka minta biasanya adalah <em>Log Book</em> pemeliharaan harian dan <strong>Sertifikat Kalibrasi</strong> instrumen. Mikroskop yang dioperasikan tanpa sertifikat valid dapat menyebabkan instansi Anda mendapat status <em>Non-Conformance</em> (NC) atau ketidaksesuaian [2].</p>
    
    <p>Pastikan Anda mempercayakan perawatan mikroskop instansi Anda kepada vendor yang kredibel. Di <strong>JualMikroskop.id</strong>, kami tidak hanya menyediakan mikroskop kelas klinis seperti <strong>Olympus seri CX dan BX</strong>, tetapi juga siap mendampingi kebutuhan layanan purna jual untuk memastikan aset riset Anda beroperasi pada tingkat keandalan tertinggi.</p>

    <br/>
    <hr/>
    <h3>Referensi Ilmiah & Footnotes</h3>
    <ol class="text-sm text-surface-500 list-decimal pl-4 space-y-2 mt-4">
      <li>Plebani, M., & Lippi, G. (2010). <em>Quality in Laboratory Medicine: ISO 15189 vs ISO 17025</em>. Clinical Chemistry and Laboratory Medicine (CCLM).</li>
      <li>International Organization for Standardization (ISO). (2022). <em>Medical laboratories — Requirements for quality and competence (ISO 15189:2022)</em>. Clause 6.4 (Equipment calibration and metrological traceability).</li>
      <li>World Health Organization (WHO). (2009). <em>Laboratory Quality Management System Handbook</em>. (Section 3: Equipment Management & Maintenance).</li>
      <li>Nikon Microscopy. <em>Microscope Maintenance Guidelines</em>. Technical Manual. (Membahas prosedur cek parfokalitas & parsentalitas).</li>
      <li>Olympus Technical Solutions. <em>Addressing Coarse Focus Drift in Upright Microscopes</em>. Application Notes.</li>
    </ol>
  `
};
