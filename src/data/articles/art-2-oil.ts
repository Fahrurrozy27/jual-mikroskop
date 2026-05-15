import { Article } from "../types";

export const article2: Article = {
  id: "art-2",
  slug: "cara-pakai-oil-immersion-100x",
  title: "Cara Benar Pakai Oil Immersion 100x Tanpa Ngerusak Lensa Objektif (SOP Pabrikan)",
  excerpt: "Lensa 100x wajib pakai minyak imersi untuk menembus batas refraksi cahaya. Tapi kalau asal tetes dan malas bersihin, siap-siap lensa berjamur dan coating-nya rusak. Ikuti panduan standar pabrikan ini!",
  category: "Tutorial Penggunaan",
  date: "12 Mei 2024",
  readTime: "9 min read",
  image: "/images/articles/microscope-2.png",
  author: { 
    name: "Evans Abqoury", 
    role: "Optics & Microscope Tech Consultant", 
    avatar: "https://ui-avatars.com/api/?name=Evans+Abqoury&background=0284c7&color=fff" 
  },
  tags: ["Oil Immersion", "Perawatan", "Lensa 100x", "Refraction", "Microbiology"],
  content: `
    <h2>The Science Behind Oil Immersion: Kenapa Harus Pakai Minyak?</h2>
    <p>Pernahkah kamu mencoba menggunakan lensa objektif 100x pada mikroskop <em>brightfield</em> standar, namun mendapati gambar yang gelap gulita, buram, dan resolusinya hancur lebur? Jangan panik, mikroskopmu tidak rusak. Alasan utamanya murni karena hukum fisika: <strong>Refraksi Cahaya (Pembiasan)</strong>.</p>
    
    <p>Di antara kaca objek (<em>cover glass</em>) dan bagian ujung lensa objektif 100x, terdapat celah sempit berisi udara. Udara memiliki indeks bias ($n$) sebesar 1.0003, sementara kaca preparat dan lensa objektif memiliki indeks bias sekitar 1.515. Berdasarkan Hukum Snellius, ketika cahaya melintasi medium dengan indeks bias berbeda (kaca ke udara), sinar cahaya akan dibiaskan menjauhi garis normal dan "menyebar" terbuang ke luar lensa [1]. Akibatnya, hanya sedikit kerucut cahaya pembentuk gambar yang berhasil ditangkap oleh lensa dengan bukaan sangat kecil (<em>Numerical Aperture</em> tinggi) seperti lensa 100x.</p>

    <blockquote>
      <strong>Prinsip Imersi Optik:</strong> Untuk menyelamatkan sinar cahaya yang terbuang tersebut, kita harus "menghilangkan" udara di antara kaca objek dan lensa. Caranya adalah dengan meneteskan cairan yang memiliki indeks bias persis sama dengan kaca ($n = 1.515$). Cairan inilah yang disebut <strong>Immersion Oil</strong> (Minyak Imersi). Dengan menyatukan medium bias, Numerical Aperture (NA) sebuah lensa objektif bisa menembus angka ideal 1.25, memberikan daya urai (resolusi) hingga 0.2 mikrometer [2].
    </blockquote>

    <h2>SOP Penggunaan Minyak Imersi (Wajib Ditaati)</h2>
    <p>Minyak imersi sangat kental dan lengket. Banyak pemula, mahasiswa praktikan, bahkan analis junior di laboratorium klinik yang melakukan kesalahan fatal: <strong>Meneteskan terlalu banyak minyak dan secara tidak sengaja mengenai lensa 40x</strong>. Ingat, lensa 40x adalah lensa kering (<em>dry objective</em>). Jika masuk minyak ke dalam segel optik lensa 40x, gambarnya akan selamanya menjadi buram seperti melihat melalui kaca berembun yang kotor [3].</p>
    
    <p>Berikut adalah <em>Standard Operating Procedure</em> (SOP) penggunaan mikroskop dengan minyak imersi yang dirujuk dari panduan keselamatan instrumen Nikon dan Olympus [4]:</p>

    <h3>Langkah 1: Observasi Kering (<em>Dry Observation</em>)</h3>
    <ol>
      <li>Lakukan pengamatan mulai dari perbesaran 10x, lalu naik ke 40x.</li>
      <li>Temukan area target yang ingin kamu teliti secara spesifik (misalnya koloni bakteri, sel neutrofil, atau basil TBC). Tempatkan target tersebut persis di titik tengah <em>crosshair</em> okuler.</li>
      <li><strong>Fokuskan secara sempurna</strong> menggunakan <em>Fine Focus</em> pada lensa 40x.</li>
    </ol>

    <h3>Langkah 2: Meneteskan Minyak (Momen Krusial)</h3>
    <ol start="4">
      <li>Putar <em>nosepiece</em> (revolver mikroskop) sehingga lensa objektif bergeser. Berhenti di posisi "kosong" (tengah-tengah) antara lensa 40x dan lensa 100x.</li>
      <li>Ambil botol aplikator <em>immersion oil</em> (Gunakan minyak sintetis tipe A atau B yang bebas Polychlorinated Biphenyls / PCBs demi keamanan kesehatan) [5].</li>
      <li>Teteskan <strong>1 TETES KECIL</strong> secara vertikal tepat di atas kaca penutup (<em>cover slip</em>) area targetmu. Jangan pernah menyentuhkan ujung aplikator ke kaca preparat untuk mencegah kontaminasi!</li>
    </ol>

    <h3>Langkah 3: Mengamati (Immersion Phase)</h3>
    <ol start="7">
      <li>Putar kembali <em>nosepiece</em> hingga lensa 100x terkunci pada posisinya (bunyi <em>klik</em>). Ujung lensa (<em>front element</em>) akan menyentuh genangan minyak dan meratakannya tanpa ada gelembung udara.</li>
      <li><strong>PERINGATAN KERAS:</strong> Jangan pernah memutar <em>Coarse Focus</em> (Makrometer) saat menggunakan lensa 100x! Celah kerja (<em>Working Distance</em>) lensa 100x hanya sekitar 0.13 mm. Sedikit putaran makrometer akan menabrakkan lensa menembus kaca, merusak sampel, dan lebih parahnya, memecahkan ujung optik lensa yang bernilai mahal.</li>
      <li>Gunakan secara eksklusif <strong>Kenop Mikrometer (<em>Fine Focus</em>)</strong> maju-mundur secara perlahan hingga gambar bakteri atau sel darah terlihat sangat jelas.</li>
    </ol>

    <h2>Cleaning is Mandatory: Pembersihan Pasca Penggunaan</h2>
    <p><em>Real talk:</em> Kemalasan membersihkan minyak imersi adalah penyebab 90% kerusakan fatal pada mikroskop di institusi pendidikan. Minyak imersi pabrikan moderen tidak mengering dengan cepat, namun jika dibiarkan selama berhari-hari akan menarik debu dari udara, mengeras menjadi seperti lem, dan berfungsi ganda sebagai "makanan" bagi spora jamur (<em>Fungus</em>).</p>

    <p>Ikuti langkah pembersihan ini segera setelah selesai observasi harian:</p>
    <ul>
      <li>Turunkan meja preparat (<em>stage</em>) ke posisi terendah. Keluarkan preparat.</li>
      <li>Siapkan <strong>Lens Paper</strong> (Kertas lensa tanpa debu/serat). Jangan gunakan tisu wajah, kapas biasa, atau ujung jas lab! Serat kasarnya akan menimbulkan goresan mikro pada <em>anti-reflective coating</em> lensa.</li>
      <li>Lipat <em>lens paper</em> memanjang, basahi sedikit ujungnya dengan larutan pembersih optik (pabrikan merekomendasikan Petroleum Ether absolut atau campuran Alkohol/Eter rasio 7:3. Alternatif teraman adalah <strong>Isopropanol Absolut &gt;90%</strong>) [4].</li>
      <li>Tempelkan kertas ke bagian bawah lensa objektif 100x, dan usap memutar ke luar secara spiral <strong>SATU KALI JALAN</strong>. Jangan gosok bolak-balik karena hanya akan meratakan kembali minyak yang terangkat.</li>
      <li>Buang kertasnya. Ulangi proses di atas dengan kertas baru yang dibasahi hingga lensa benar-benar bersih dan kering.</li>
    </ul>

    <h2>Rekomendasi Alat untuk Analis Rutin</h2>
    <p>Jika lab kamu melakukan <em>screening</em> Hematologi atau Mikrobiologi setiap hari (penggunaan rutin lensa 100x oil), pertimbangkan untuk menggunakan mikroskop kelas atas yang memiliki <em>immersion protection design</em> (rancangan fisik objektif yang melindungi komponen internalnya dari rembesan minyak), seperti lensa Plan Achromat pada <strong>Olympus CX23</strong> atau lensa Plan Apochromat pada seri <strong>Olympus BX53</strong>. Keduanya dirancang tahan banting di lingkungan <em>heavy-duty</em> asalkan rutinitas pembersihan ditaati.</p>

    <br/>
    <hr/>
    <h3>Referensi Ilmiah & Footnotes</h3>
    <ol class="text-sm text-surface-500 list-decimal pl-4 space-y-2 mt-4">
      <li>Hecht, E. (2017). <em>Optics (5th Edition)</em>. Pearson Education. (Pembahasan Fisika mengenai Snell's Law & Indeks Bias).</li>
      <li>Murphy, D. B., & Davidson, M. W. (2012). <em>Fundamentals of Light Microscopy and Electronic Imaging</em>. John Wiley & Sons.</li>
      <li>World Health Organization (WHO). (1998). <em>Maintenance and Repair of Laboratory, Diagnostic Imaging, and Hospital Equipment</em>. (Bab 3: Perawatan Mikroskop Binokuler).</li>
      <li>Olympus Life Science. <em>Microscope Cleaning and Maintenance Manual</em>. Whitepaper Teknis Pemeliharaan Lensa Optik (Section: Immersion Oil Removal).</li>
      <li>U.S. Environmental Protection Agency (EPA). (1979). <em>Polychlorinated Biphenyls (PCBs) Manufacturing, Processing, Distribution in Commerce, and Use Prohibitions</em>. Federal Register. (Dasar pelarangan minyak imersi berbasis PCB karena karsinogenik).</li>
    </ol>
  `
};
