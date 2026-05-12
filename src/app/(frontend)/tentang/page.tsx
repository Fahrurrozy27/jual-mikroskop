import type { Metadata } from "next";
import Link from "next/link";
import {
  Microscope,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Award,
  Truck,
  Users,
  Building2,
  GraduationCap,
  FlaskConical,
  Factory,
  CheckCircle2,
  ArrowRight,
  Wrench,
  FileCheck,
  Headphones,
  BookOpen,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tentang Kami — Distributor Mikroskop Laboratorium Terpercaya",
  description:
    "JualMikroskop.id adalah distributor dan supplier mikroskop laboratorium terpercaya di Indonesia. 15+ tahun pengalaman melayani 600+ institusi pendidikan, klinik, dan industri. Garansi resmi, sertifikat kalibrasi, layanan purnajual profesional.",
  alternates: {
    canonical: "https://jualmikroskop.id/tentang",
  },
};

const stats = [
  { value: "5,000+", label: "Unit Terjual", icon: <Microscope className="w-6 h-6" /> },
  { value: "600+", label: "Klien Aktif", icon: <Users className="w-6 h-6" /> },
  { value: "15+", label: "Tahun Pengalaman", icon: <Award className="w-6 h-6" /> },
  { value: "34", label: "Provinsi Terjangkau", icon: <Truck className="w-6 h-6" /> },
];

const values = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Kualitas Terjamin",
    desc: "Setiap mikroskop yang kami jual adalah produk original dengan garansi resmi dari pabrik. Kami tidak pernah menjual produk refurbished atau non-original.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Customer-First",
    desc: "Kepuasan pelanggan adalah prioritas utama kami. Tim sales dan teknis kami selalu siap mendampingi dari proses konsultasi hingga after-sales support.",
  },
  {
    icon: <Target className="w-7 h-7" />,
    title: "Integritas Bisnis",
    desc: "Transparansi harga, kelengkapan dokumen legal (faktur pajak, sertifikat), dan komitmen pada timeline pengiriman menjadi fondasi kepercayaan klien kami.",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Inovasi Berkelanjutan",
    desc: "Kami terus memperluas portofolio produk dan meningkatkan layanan dengan mengikuti perkembangan teknologi mikroskopi terkini.",
  },
];

const services = [
  { icon: <Microscope className="w-6 h-6" />, title: "Penjualan Mikroskop", desc: "Berbagai tipe dan brand untuk semua kebutuhan lab" },
  { icon: <Wrench className="w-6 h-6" />, title: "Service & Perbaikan", desc: "Penanganan oleh teknisi berpengalaman dan bersertifikat" },
  { icon: <FileCheck className="w-6 h-6" />, title: "Kalibrasi Berkala", desc: "Sesuai standar ISO dengan sertifikat kalibrasi resmi" },
  { icon: <Building2 className="w-6 h-6" />, title: "Pengadaan Instansi", desc: "Pendampingan lengkap dari RAB hingga serah terima" },
  { icon: <BookOpen className="w-6 h-6" />, title: "Training Penggunaan", desc: "Pelatihan operasional dan perawatan untuk tim lab Anda" },
  { icon: <Headphones className="w-6 h-6" />, title: "Support Teknis", desc: "Konsultasi teknis responsif via WhatsApp dan email" },
];

const certifications = [
  "ISO 9001:2015",
  "Sertifikat Distributor Resmi",
  "Sertifikat Kalibrasi KAN",
  "NPWP & SIUP Lengkap",
  "Terdaftar di LPSE",
  "Rekanan Pemerintah",
];

const clients = [
  { icon: <GraduationCap className="w-5 h-5" />, name: "Universitas Indonesia" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Institut Teknologi Bandung" },
  { icon: <GraduationCap className="w-5 h-5" />, name: "Universitas Gadjah Mada" },
  { icon: <FlaskConical className="w-5 h-5" />, name: "RSUD Dr. Soetomo" },
  { icon: <FlaskConical className="w-5 h-5" />, name: "Lab Klinik Prodia" },
  { icon: <Factory className="w-5 h-5" />, name: "PT Astra International" },
  { icon: <Building2 className="w-5 h-5" />, name: "BPOM RI" },
  { icon: <Building2 className="w-5 h-5" />, name: "Kemenkes RI" },
];

export default function TentangPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-surface-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white font-medium">Tentang Kami</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Mitra Terpercaya untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                Laboratorium Anda
              </span>
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              <strong>JualMikroskop<span className="text-accent-500">.id</span></strong> adalah unit bisnis yang berfokus pada penyediaan mikroskop
              laboratorium berkualitas tinggi untuk institusi pendidikan, laboratorium klinik,
              pusat riset, dan departemen quality control industri di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary-600">
                  {stat.icon}
                </div>
                <p className="text-3xl font-extrabold text-primary-700">{stat.value}</p>
                <p className="text-sm text-surface-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-950 mb-4">
                Profil Perusahaan
              </h2>
              <div className="space-y-4 text-surface-600 leading-relaxed">
                <p>
                  Dengan pengalaman lebih dari <strong>15 tahun</strong> di industri peralatan laboratorium
                  Indonesia, kami telah membangun reputasi sebagai distributor mikroskop yang
                  mengedepankan kualitas produk, transparansi harga, dan layanan purnajual yang responsif.
                </p>
                <p>
                  Kami memahami bahwa investasi mikroskop laboratorium bukan sekadar pembelian alat — melainkan
                  investasi jangka panjang yang mempengaruhi kualitas riset, diagnostik, dan pendidikan.
                  Oleh karena itu, setiap transaksi kami dampingi dari konsultasi kebutuhan, penyusunan
                  spesifikasi teknis, hingga instalasi, training, dan maintenance berkala.
                </p>
                <p>
                  Sebagai rekanan terdaftar di berbagai platform pengadaan pemerintah (LPSE), kami
                  berpengalaman menangani proses pengadaan instansi dengan kelengkapan dokumen yang
                  dibutuhkan — termasuk penerbitan faktur pajak, surat jaminan, dan sertifikat kalibrasi
                  yang sesuai standar.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-10 flex items-center justify-center">
              <Microscope className="w-40 h-40 text-primary-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-950 mb-3 text-center">Nilai-Nilai Kami</h2>
          <p className="text-lg text-surface-600 text-center mb-10 max-w-2xl mx-auto">
            Prinsip yang melandasi setiap keputusan bisnis dan interaksi dengan pelanggan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-surface-50 rounded-2xl border border-surface-200 p-6 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 text-primary-600">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-surface-900 mb-2">{v.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-950 mb-3 text-center">Layanan Lengkap Kami</h2>
          <p className="text-lg text-surface-600 text-center mb-10 max-w-2xl mx-auto">
            Bukan hanya jual beli — kami menyediakan ekosistem layanan laboratorium menyeluruh.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="bg-white rounded-2xl border border-surface-200 p-6 flex items-start gap-4 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 text-accent-600">
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-surface-900 mb-1">{svc.title}</h3>
                  <p className="text-sm text-surface-500">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-primary-950 mb-3">Sertifikasi & Legalitas</h2>
          <p className="text-lg text-surface-600 mb-10 max-w-2xl mx-auto">
            Jaminan kredibilitas dan kepatuhan kami terhadap standar nasional dan internasional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 bg-primary-50 border border-primary-200 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-semibold text-primary-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-primary-950 mb-3">Klien & Mitra Kami</h2>
          <p className="text-lg text-surface-600 mb-10 max-w-2xl mx-auto">
            Dipercaya oleh institusi terkemuka di seluruh Indonesia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <div key={i} className="bg-white rounded-xl border border-surface-200 p-4 flex items-center gap-3 hover:border-primary-200 transition-colors">
                <div className="text-primary-500">{client.icon}</div>
                <span className="text-sm font-medium text-surface-700">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Siap Bermitra dengan Kami?
          </h2>
          <p className="text-lg text-surface-300 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi kebutuhan mikroskop laboratorium Anda.
            Kami siap membantu dari pemilihan produk hingga proses pengadaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Hubungi Kami <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/produk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Lihat Katalog Produk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
