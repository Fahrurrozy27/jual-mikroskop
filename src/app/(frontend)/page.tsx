import Link from "next/link";
import Image from "next/image";
import {
  Microscope,
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  FileText,
  Headphones,
  Building2,
  GraduationCap,
  FlaskConical,
  Factory,
  Star,
  ChevronRight,
  Eye,
  Camera,
  Monitor,
  Zap,
  Diamond,
  FlipVertical,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FullPageLink from "@/components/ui/FullPageLink";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import FeaturedProducts from "@/components/FeaturedProducts";

const categoryIcons: Record<string, React.ReactNode> = {
  student: <GraduationCap className="w-8 h-8" />,
  laboratory: <Microscope className="w-8 h-8" />,
  stereo: <Eye className="w-8 h-8" />,
  digital: <Monitor className="w-8 h-8" />,
  metallurgical: <Factory className="w-8 h-8" />,
  polarizing: <Diamond className="w-8 h-8" />,
  fluorescent: <Zap className="w-8 h-8" />,
  inverted: <FlipVertical className="w-8 h-8" />,
};

const trustItems = [
  { icon: <ShieldCheck className="w-5 h-5" />, label: "Teknisi Profesional" },
  { icon: <Award className="w-5 h-5" />, label: "Sertifikat Kalibrasi" },
  { icon: <Truck className="w-5 h-5" />, label: "Kirim Se-Indonesia" },
  { icon: <FileText className="w-5 h-5" />, label: "Faktur Pajak & PPN" },
];

const whyUs = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Distributor Resmi",
    desc: "Kami merupakan distributor resmi berbagai merk mikroskop ternama dengan jaminan keaslian produk dan garansi penuh dari pabrik.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Support Pengadaan",
    desc: "Tim kami berpengalaman mendampingi proses pengadaan instansi — dokumen lengkap mulai dari penawaran hingga serah terima.",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Teknisi Bersertifikat",
    desc: "Layanan instalasi, training penggunaan, service, dan kalibrasi berkala oleh teknisi yang telah tersertifikasi oleh prinsipal.",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "After-Sales Terpercaya",
    desc: "Garansi resmi, ketersediaan spare part, dan layanan purnajual responsif menjamin investasi mikroskop Anda terlindungi jangka panjang.",
  },
];

const audiences = [
  { icon: <GraduationCap className="w-6 h-6" />, name: "Sekolah & Universitas", count: "350+" },
  { icon: <FlaskConical className="w-6 h-6" />, name: "Laboratorium Klinik", count: "120+" },
  { icon: <Factory className="w-6 h-6" />, name: "Industri & QC", count: "85+" },
  { icon: <Building2 className="w-6 h-6" />, name: "Instansi Pemerintah", count: "60+" },
];

const row1Logos = [
  "brin.webp", "inalum.webp", "indo-ethanol.webp", "itb.webp", "jbcocoa.webp", "klinik-citra.webp"
];
const row2Logos = [
  "krakatau-water.webp", "lh-papua.webp", "patra-sk.webp", "pdam-tirta-giri-nata.webp", "playfield.webp", "pln.webp", "qbic.webp"
];
const row3Logos = [
  "rs-bali-royal.webp", "rs-estomihi.webp", "rs-hastien.webp", "rsud-arrozy.webp", "samator.webp", "ut.webp"
];

export default async function Home() {
  // Fetching static data directly

  return (
    <>
      {/* ======= HERO SECTION ======= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <div 
          className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: "url('https://www.euromex.com/en/uploads/producten/producten_product/IS.1153-PLi_B-APL_1.png')",
            backgroundSize: "60%",
            backgroundPosition: "right 10%",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="hero-pattern absolute inset-0 opacity-80" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500/20 border border-accent-500/30 rounded-full text-xs font-semibold text-accent-300 mb-6">
                <Zap className="w-3.5 h-3.5" />
                Mitra Terpercaya Pengadaan Alat Laboratorium
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Jual Mikroskop{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                  Laboratorium
                </span>{" "}
                Berkualitas Tinggi
              </h1>
              <p className="text-lg md:text-xl text-surface-300 leading-relaxed mb-8 max-w-xl">
                Distributor dan supplier mikroskop laboratorium untuk kebutuhan
                pendidikan, riset, klinik, dan industri. Garansi resmi,
                sertifikat kalibrasi, dan harga kompetitif untuk pengadaan B2B.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produk"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-accent-500/25 transition-all text-base"
                >
                  Lihat Katalog Produk
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all text-base"
                >
                  Minta Penawaran B2B
                </Link>
              </div>
              {/* Quick Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-accent-400">1-3 Thn</p>
                  <p className="text-xs text-surface-400 mt-0.5">Garansi Produk</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-accent-400">24/7</p>
                  <p className="text-xs text-surface-400 mt-0.5">Konsultasi Teknis</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-extrabold text-accent-400">100%</p>
                  <p className="text-xs text-surface-400 mt-0.5">Produk Original</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ======= TRUST BAR ======= */}
      <section className="bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center py-2">
                <div className="text-accent-600">{item.icon}</div>
                <span className="text-sm font-semibold text-surface-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CATEGORY GRID ======= */}
      <section className="py-16 lg:py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-3">
              Jenis Mikroskop yang Tersedia
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai tipe mikroskop laboratorium untuk memenuhi kebutuhan edukasi, riset, diagnostik, dan industri Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
            {categories.map((cat) => {
              const categoryBackgrounds: Record<string, string> = {
                student: "/images/categories/student.webp",
                edukasi: "/images/categories/student.webp",
                laboratory: "/images/categories/laboratory.webp",
                laboratorium: "/images/categories/laboratory.webp",
                stereo: "/images/categories/digital.webp",
                "stereo-zoom": "/images/categories/digital.webp",
                digital: "/images/categories/bacteria.webp",
                lcd: "/images/categories/bacteria.webp",
                "digital-lcd": "/images/categories/bacteria.webp",
                metallurgical: "/images/categories/metallurgical.webp",
                metalurgi: "/images/categories/metallurgical.webp",
                polarizing: "/images/categories/polarizing.webp",
                polarisasi: "/images/categories/polarizing.webp",
                fluorescent: "/images/categories/fluorescent.webp",
                fluorescence: "/images/categories/fluorescent.webp",
                inverted: "/images/categories/inverted.webp",
                default: "/images/categories/laboratory.webp",
              };
              
              const bgUrl = categoryBackgrounds[cat.slug] || categoryBackgrounds.default;
              
              const actualProductCount = products.filter(p => {
                if (Array.isArray(p.category)) {
                  return p.category.includes(cat.slug);
                }
                return p.category === cat.slug;
              }).length;

              return (
                <Link
                  key={cat.id}
                  href={`/produk?kategori=${cat.slug}`}
                  className="group relative rounded-2xl border border-surface-200 overflow-hidden hover:border-primary-400 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300 min-h-[220px] flex flex-col justify-end p-6"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${bgUrl}')` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-300 transition-colors">
                      {cat.name.replace(" / Student", "").replace("Edukasi / Student", "Edukasi")}
                    </h3>
                    <p className="text-xs text-surface-300 leading-snug mb-4 line-clamp-3">
                      {cat.description.replace(/,? ?geologi/gi, "")}
                    </p>
                    <div className="flex items-center justify-between text-surface-200">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-white/10 rounded-lg backdrop-blur-sm">
                        {actualProductCount} Produk
                      </span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-accent-300 transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* ======= WHY CHOOSE US ======= */}
      <section className="py-16 lg:py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-3">
              Mengapa Memilih JualMikroskop<span className="text-accent-500">.id</span>?
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Kami bukan sekadar toko online — kami adalah mitra laboratorium Anda dengan layanan end-to-end.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-surface-200 p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 text-primary-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">{item.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= AUDIENCE / CLIENTS ======= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-3">
              Dipercaya oleh Berbagai Institusi Terkemuka
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Dari sekolah negeri hingga laboratorium riset tingkat nasional, kami melayani berbagai segmen pelanggan.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:gap-10 overflow-hidden w-full max-w-6xl mx-auto">
            {/* Row 1: 6 logos */}
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 w-full">
              {row1Logos.map((logo) => (
                <div key={logo} className="relative flex-1 min-w-[50px] max-w-[120px] aspect-[2/1] opacity-75 hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <Image
                    src={`/images/customers/${logo}`}
                    alt="Customer Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 15vw, 10vw"
                  />
                </div>
              ))}
            </div>
            
            {/* Row 2: 7 logos */}
            <div className="flex flex-row flex-nowrap items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-12 w-full px-2 lg:-mx-4">
              {row2Logos.map((logo) => (
                <div key={logo} className="relative flex-1 min-w-[45px] max-w-[110px] aspect-[2/1] opacity-75 hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <Image
                    src={`/images/customers/${logo}`}
                    alt="Customer Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 12vw, 8vw"
                  />
                </div>
              ))}
            </div>

            {/* Row 3: 6 logos */}
            <div className="flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 w-full">
              {row3Logos.map((logo) => (
                <div key={logo} className="relative flex-1 min-w-[50px] max-w-[120px] aspect-[2/1] opacity-75 hover:opacity-100 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <Image
                    src={`/images/customers/${logo}`}
                    alt="Customer Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    sizes="(max-width: 768px) 15vw, 10vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA SECTION ======= */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Butuh Penawaran untuk Pengadaan Mikroskop?
          </h2>
          <p className="text-lg text-surface-300 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menyusun spesifikasi teknis, penawaran harga, dan
            dokumen pendukung lainnya. Konsultasi gratis tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-accent-500/25 transition-all text-base"
            >
              Minta Penawaran Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <FullPageLink
              href={`/terimakasih?redirect=${encodeURIComponent("https://wa.me/6281290864275?text=Halo,%20saya%20ingin%20konsultasi%20pengadaan%20mikroskop%20untuk%20laboratorium")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all text-base"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-400" />
              Konsultasi via WhatsApp
            </FullPageLink>
          </div>
        </div>
      </section>

      {/* ======= SEO CONTENT BLOCK ======= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 mb-4">
              JualMikroskop<span className="text-accent-500">.id</span> — Distributor Terpercaya di Indonesia
            </h2>
            <p className="text-surface-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Sebagai distributor dan supplier alat optik mikroskopis, kami memberikan kemudahan dan kepastian untuk setiap pengadaan mikroskop di seluruh wilayah Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-surface-50 rounded-2xl p-6 lg:p-8 border border-surface-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                <Microscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-3">Tipe Paling Lengkap</h3>
              <p className="text-surface-600 leading-relaxed text-sm">
                Menyediakan <strong>mikroskop laboratorium</strong> (binokuler & trinokuler), <strong>mikroskop digital</strong>, <strong>mikroskop stereo zoom</strong>, <strong>mikroskop metalurgi</strong>, <strong>mikroskop polarisasi</strong>, <strong>fluorescence</strong>, hingga <strong>inverted</strong>.
              </p>
            </div>

            <div className="bg-surface-50 rounded-2xl p-6 lg:p-8 border border-surface-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-6 text-accent-600">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-3">Lintas Sektor Institusi</h3>
              <p className="text-surface-600 leading-relaxed text-sm">
                Melayani pengadaan B2B untuk <strong>sekolah dan universitas</strong>, <strong>laboratorium klinik dan rumah sakit</strong>, fasilitas <strong>riset</strong>, biologi, kedokteran, farmasi, geologi, hingga <strong>quality control industri</strong>.
              </p>
            </div>

            <div className="bg-surface-50 rounded-2xl p-6 lg:p-8 border border-surface-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-primary-950 mb-3">Administrasi & After-Sales</h3>
              <p className="text-surface-600 leading-relaxed text-sm">
                Investasi instansi aman dengan <strong>faktur pajak (PPN 11%)</strong>, <strong>sertifikat kalibrasi</strong>, spesifikasi teknis lengkap, dukungan <strong>teknisi bersertifikat</strong>, perbaikan, dan <strong>garansi resmi</strong> pabrik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
