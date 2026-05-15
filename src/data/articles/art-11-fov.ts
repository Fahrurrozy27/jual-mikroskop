import { Article } from "../types";

export const article11: Article = {
  id: "art-11",
  slug: "field-of-view-18mm-vs-22mm-ngaruh-banget",
  title: "Field of View (FOV) 18mm vs 22mm: Emang Ngaruh Banget Buat Mata?",
  excerpt: "Sering denger spesifikasi 'Lensa Okuler 10x/20' tapi nggak ngerti angka 20 itu buat apa? Itu adalah Field Number (FN)! Cari tahu kenapa selisih beberapa milimeter bisa menyelamatkan nyawa (dan matamu) di lab.",
  category: "Tutorial Penggunaan",
  date: "30 Mei 2024",
  readTime: "7 min read",
  image: "/images/articles/microscope-11.png",
  author: { 
    name: "Evans Abqoury", 
    role: "Optics & Microscope Tech Consultant", 
    avatar: "https://ui-avatars.com/api/?name=Evans+Abqoury&background=0284c7&color=fff" 
  },
  tags: ["Lensa Okuler", "Field of View", "Ergonomi", "Optik"],
  content: `
    <h2>Misteri Angka di Balik Lensa Okuler</h2>
    <p>Coba cabut salah satu tabung lensa mata (Okuler) mikroskop kamu dan lihat ukiran tulisan di badannya. Kamu pasti akan menemukan tulisan seperti <strong>WF 10X/18</strong> atau <strong>10X/22</strong>. Angka "10X" sudah pasti merujuk pada kekuatan perbesaran (sepuluh kali lipat). Tapi, apa arti angka yang ada di belakang garis miring tersebut?</p>
    
    <p>Angka 18, 20, atau 22 itu disebut sebagai <strong>Field Number (FN)</strong>. Sederhananya, FN adalah ukuran diameter lubang batas cahaya (<em>baffle</em>) di dalam lensa okuler yang dinyatakan dalam satuan milimeter (mm). FN inilah yang akan secara langsung menentukan seberapa luas <strong>Field of View (FOV)</strong> atau lapang pandang nyata yang bisa kamu intip ke dalam kaca preparat [1].</p>

    <blockquote>
      <strong>Singkatnya:</strong> Semakin besar angka FN, semakin lebar "jendela" pandanganmu ke spesimen. Lensa FN 22mm akan memberikan gambar pemandangan sel yang jauh lebih luas dibandingkan FN 18mm.
    </blockquote>

    <h2>Rumus Matematis Menghitung Luas Area Nyata</h2>
    <p>Berapa sih sebenarnya luas area kaca preparat yang berhasil kamu intip? Fisika optik punya rumus paten untuk menghitung diameter <em>Real Field of View</em> (FOV asli) yang mendarat di preparat [2]:</p>
    
    <div class="p-6 bg-surface-100 rounded-2xl border border-surface-300 text-center my-6">
      <span class="font-mono text-lg font-bold text-surface-800">FOV Nyata = Field Number (FN) / Perbesaran Lensa Objektif</span>
    </div>

    <p><strong>Mari kita simulasikan:</strong><br/>
    Kamu sedang memakai <strong>Lensa Objektif 40x</strong>.<br/>
    - Skenario A (Pakai Okuler FN 18): FOV Nyata = 18 / 40 = <strong>0.45 mm</strong>.<br/>
    - Skenario B (Pakai Okuler FN 22): FOV Nyata = 22 / 40 = <strong>0.55 mm</strong>.</p>

    <p>Kelihatannya selisih 0.1 mm itu kecil banget kan? Tunggu sampai kita hitung "Luas Area Lingkaran" pandangnya (Rumus $L = \pi \times r^2$). Lensa dengan FN 22 ternyata memberikan <strong>area pandang 50% lebih luas</strong> dibandingkan FN 18! [3]</p>

    <h2>Mengapa Ini Ngaruh Banget di Lapangan (Dunia Medis)?</h2>
    <p>Bagi mahasiswa yang sekadar mengamati irisan bawang merah, perbedaan ini mungkin tidak terasa. Tapi di dunia diagnostik medis dan patologi anatomi, lensa <em>Wide-Field</em> (FN 20 atau 22) adalah sebuah <em>game-changer</em> yang menyangkut nyawa dan efisiensi waktu.</p>

    <h3>1. Menemukan Target Langka Lebih Cepat</h3>
    <p>Bayangkan kamu sedang melakukan <em>screening</em> puluhan slide Apus Darah Tepi (ADT) pasien untuk mencari keberadaan parasit Malaria (<em>Plasmodium</em>) yang jumlahnya sangat sedikit (infeksi ringan). Dengan FN 18, pandanganmu sempit. Kamu harus menggeser-geser meja mekanis (<em>scanning</em>) ratusan kali bolak-balik untuk menutupi seluruh area kaca preparat. Dengan FN 22, pandanganmu sangat luas, satu kali intipan bisa mencakup area puluhan sel darah sekaligus. Waktu analisismu bisa dipangkas hingga setengahnya [4].</p>

    <h3>2. Mengurangi Tunnel Vision (Kelelahan Mata)</h3>
    <p>Melihat ke dalam lensa ber-FN 18 rasanya seperti mengintip spesimen dari ujung sedotan minuman. Sangat sempit dan memicu efek <em>Tunnel Vision</em> yang membuat otot siliaris mata cepat menegang. FN 22 memberikan sensasi visual lega yang sangat ergonomis (mata rileks layaknya melihat layar bioskop lebar). Penyakit kelelahan mata klinis (<em>Asthenopia</em>) dapat berkurang drastis bagi analis yang bertugas di depan mikroskop selama 8 jam sehari [5].</p>

    <h2>Cara Pintar Upgrade Lensa</h2>
    <p>Penting dicatat: Kamu <strong>tidak bisa</strong> asal membeli okuler ber-FN 22 lalu menancapkannya ke mikroskop murahan yang didesain untuk FN 18. Kenapa? Karena prisma binokuler mikroskop tersebut ukurannya kecil. Memaksa memasang okuler ber-FN besar di prisma kecil hanya akan menghasilkan gambar melingkar dengan pinggiran hitam legam (efek <em>Vignetting</em> parah) [2].</p>

    <p>Oleh karena itu, instansi medis selalu disarankan langsung berinvestasi pada bodi mikroskop yang desain pabriknya sudah <em>native Wide-Field</em>, seperti <strong>Olympus CX23</strong> (FN 20) atau seri <em>flagship</em> seperti <strong>Olympus BX53</strong> (mendukung FN 22 <em>Super Wide Field</em>). Kalau Anda butuh konsultasi untuk meningkatkan efisiensi lab Anda, tim <strong>JualMikroskop.id</strong> siap membantu mencarikan opsi <em>Wide Field</em> terbaik yang ada di pasaran.</p>

    <br/>
    <hr/>
    <h3>Referensi Ilmiah & Footnotes</h3>
    <ol class="text-sm text-surface-500 list-decimal pl-4 space-y-2 mt-4">
      <li>Davidson, M. W. (2012). <em>Microscope Eyepieces (Oculars)</em>. Olympus Microscopy Resource Center.</li>
      <li>Gundlach, H. (1993). <em>Optics of the Light Microscope</em>. Dalam <em>Handbook of Biological Confocal Microscopy</em> (pp. 1-14). Springer.</li>
      <li>Abramowitz, M. (1985). <em>Microscope: Basics and Beyond</em>. Olympus Corporation. (Matematika relasi luas area pandang).</li>
      <li>Garcia, L. S. (2007). <em>Diagnostic Medical Parasitology</em> (5th Ed.). ASM Press. (Membahas efisiensi scanning mikroskopik parasit).</li>
      <li>Thomson, S. (2018). <em>Ergonomics in the Clinical Laboratory: Minimizing Asthenopia and Musculoskeletal Disorders</em>. ASCP Reviews.</li>
    </ol>
  `
};
