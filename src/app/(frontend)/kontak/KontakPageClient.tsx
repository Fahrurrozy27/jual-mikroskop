"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Building2,
  FileText,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const productOptions = [
  "Mikroskop Edukasi / Student",
  "Mikroskop Laboratorium (Binokuler/Trinokuler)",
  "Mikroskop Stereo Zoom",
  "Mikroskop Digital / LCD",
  "Mikroskop Metalurgi",
  "Mikroskop Polarisasi",
  "Mikroskop Fluorescence",
  "Mikroskop Inverted",
  "Aksesoris & Kamera Mikroskop",
  "Lainnya",
];

const procurementFAQ = [
  {
    q: "Apakah bisa menerbitkan faktur pajak?",
    a: "Ya, kami menerbitkan faktur pajak resmi (PPN 11%) untuk setiap transaksi. NPWP dan SIUP perusahaan kami lengkap.",
  },
  {
    q: "Bagaimana proses pengadaan untuk instansi pemerintah?",
    a: "Kami terdaftar di LPSE dan berpengalaman menangani pengadaan instansi. Tim kami siap membantu penyusunan spesifikasi teknis, RAB, dan dokumen penawaran sesuai prosedur pengadaan.",
  },
  {
    q: "Apakah tersedia garansi dan sertifikat kalibrasi?",
    a: "Setiap produk dilengkapi garansi resmi 1-3 tahun dari pabrik. Sertifikat kalibrasi tersedia dan dapat diterbitkan sesuai standar yang berlaku.",
  },
  {
    q: "Berapa lama estimasi pengiriman?",
    a: "Untuk produk ready stock, pengiriman 2-5 hari kerja ke seluruh Indonesia. Untuk produk pre-order atau impor, estimasi 2-4 minggu tergantung ketersediaan.",
  },
];

export default function KontakPageClient() {
  const searchParams = useSearchParams();
  const initialProduk = searchParams.get("produk") || "";
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const companyName = formData.get("companyName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const interestedProduct = formData.get("interestedProduct") as string;
    const unitCount = formData.get("unitCount") as string;
    const message = formData.get("message") as string;

    const waNumber = "6281290864275";
    
    let text = `Halo tim JualMikroskop.id, saya ingin meminta penawaran harga dengan detail berikut:\n\n`;
    text += `*Nama:* ${name}\n`;
    if (companyName) text += `*Instansi/Perusahaan:* ${companyName}\n`;
    text += `*Email:* ${email}\n`;
    text += `*No. Telp:* ${phone}\n`;
    text += `*Produk Diminati:* ${interestedProduct}\n`;
    if (unitCount) text += `*Estimasi Jumlah:* ${unitCount} unit\n`;
    if (message) text += `\n*Detail Kebutuhan:*\n${message}\n`;
    
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    // Buka WhatsApp di tab baru
    window.open(waUrl, "_blank");
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="hero-pattern absolute inset-0" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-surface-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white font-medium">Hubungi Kami</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Hubungi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">
                Kami
              </span>
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              Butuh penawaran harga, konsultasi spesifikasi teknis, atau informasi pengadaan?
              Tim <strong>JualMikroskop<span className="text-accent-500">.id</span></strong> siap membantu Anda. Isi form di bawah atau hubungi kami langsung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* RFQ Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-surface-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-surface-900">Form Permintaan Penawaran (RFQ)</h2>
                    <p className="text-sm text-surface-500">Kami akan merespon dalam 1x24 jam kerja</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-surface-900 mb-2">Permintaan Terkirim!</h3>
                    <p className="text-surface-600 mb-6">
                      Terima kasih atas permintaan Anda. Tim kami akan segera menghubungi Anda
                      dalam 1x24 jam kerja dengan penawaran harga terbaik.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Kirim Permintaan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Masukkan nama Anda"
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          Nama Instansi / Perusahaan
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          placeholder="Nama universitas, klinik, atau perusahaan"
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="email@instansi.ac.id"
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          No. Telepon / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+62 812-xxxx-xxxx"
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          Produk yang Diminati <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="interestedProduct"
                          required
                          defaultValue={initialProduk || ""}
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        >
                          <option value="" disabled>Pilih jenis mikroskop</option>
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                          {initialProduk && !productOptions.includes(initialProduk) && (
                            <option value={initialProduk}>{initialProduk}</option>
                          )}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                          Estimasi Jumlah Unit
                        </label>
                        <input
                          type="number"
                          name="unitCount"
                          min="1"
                          placeholder="Jumlah unit"
                          className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-surface-700 mb-1.5">
                        Detail Kebutuhan / Pesan
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Jelaskan kebutuhan spesifik Anda (spesifikasi teknis, budget, timeline, dll.)"
                        className="w-full px-4 py-3 bg-surface-50 border border-surface-200 rounded-xl text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Mengirim..." : (
                        <>
                          <Send className="w-5 h-5" />
                          Kirim Permintaan Penawaran
                        </>
                      )}
                    </button>

                    <p className="text-xs text-surface-400 text-center">
                      Dengan mengirim form ini, Anda menyetujui bahwa data Anda akan digunakan
                      untuk keperluan komunikasi penawaran produk.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-surface-900 mb-5">Kontak Langsung</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/6281290864275" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900 group-hover:text-green-700 transition-colors">WhatsApp</p>
                      <p className="text-sm text-surface-500">0812-9086-4275</p>
                      <p className="text-xs text-green-600 font-medium">Online — Respon cepat</p>
                    </div>
                  </a>
                  <a href="tel:+6281290864275" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                      <Phone className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900 group-hover:text-primary-700 transition-colors">Telepon</p>
                      <p className="text-sm text-surface-500">0812-9086-4275</p>
                    </div>
                  </a>
                  <a href="mailto:info@jualmikroskop.id" className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-200 transition-colors">
                      <Mail className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900 group-hover:text-accent-700 transition-colors">Email</p>
                      <p className="text-sm text-surface-500">info@jualmikroskop.id</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-surface-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-surface-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">Alamat Kantor</p>
                      <p className="text-sm text-surface-500">Jl. Pangeran Sogiri No.135B, Tanah Baru, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16154</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-surface-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-surface-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-surface-900">Jam Operasional</p>
                      <p className="text-sm text-surface-500">Senin - Jumat: 08:00 - 17:00 WIB</p>
                      <p className="text-sm text-surface-500">Sabtu: 08:00 - 12:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-primary-50 rounded-2xl border border-primary-200 p-6">
                <h3 className="text-base font-bold text-primary-900 mb-4">Jaminan Kami</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-800">Garansi Resmi 1-3 Tahun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-800">Sertifikat Kalibrasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-800">Penerbitan Faktur Pajak (PPN 11%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-800">Pengiriman ke Seluruh Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent-600 flex-shrink-0" />
                    <span className="text-sm text-primary-800">Support Pengadaan & RAB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-primary-950 mb-3 text-center">
            FAQ Pengadaan & Pembelian
          </h2>
          <p className="text-base text-surface-600 text-center mb-8">
            Pertanyaan umum seputar proses pembelian dan pengadaan instansi.
          </p>
          <div className="space-y-3">
            {procurementFAQ.map((faq, i) => (
              <div key={i} className="bg-surface-50 rounded-xl border border-surface-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-100 transition-colors"
                >
                  <h3 className="text-base font-semibold text-surface-900 pr-4">{faq.q}</h3>
                  {openFAQ === i ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-surface-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-sm text-surface-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
