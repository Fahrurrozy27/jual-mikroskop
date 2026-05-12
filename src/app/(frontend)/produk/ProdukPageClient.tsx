"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Microscope,
  Star,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Check,
  ArrowRight,
} from "lucide-react";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";
import { faqData } from "@/data/faq";

const comparisonData = [
  { type: "Student / Edukasi", okuler: "1-2", perbesaran: "40x - 1000x", kamera: "❌", penggunaan: "Praktikum SMP/SMA/Univ" },
  { type: "Lab Binokuler", okuler: "2", perbesaran: "40x - 1000x", kamera: "❌", penggunaan: "Lab Klinik, Mikrobiologi" },
  { type: "Lab Trinokuler", okuler: "2 + Port Kamera", perbesaran: "40x - 1000x", kamera: "✅", penggunaan: "Riset, Dokumentasi" },
  { type: "Stereo Zoom", okuler: "2 (3D view)", perbesaran: "7x - 45x zoom", kamera: "Optional", penggunaan: "Inspeksi PCB, Geologi" },
  { type: "Digital / LCD", okuler: "LCD Screen", perbesaran: "40x - 1600x digital", kamera: "✅ Built-in", penggunaan: "QC, Edukasi, Presentasi" },
  { type: "Metalurgi", okuler: "2-3", perbesaran: "50x - 500x reflected", kamera: "✅", penggunaan: "Material, Semikonduktor" },
  { type: "Polarisasi", okuler: "2-3 + crosshair", perbesaran: "40x - 600x polarized", kamera: "✅", penggunaan: "Geologi, Mineralogi" },
  { type: "Fluorescence", okuler: "2-3", perbesaran: "40x - 1000x + Fluor", kamera: "✅", penggunaan: "Riset Biomedis, TB" },
];

export default function ProdukPageClient({ initialProducts, initialCategories }: { initialProducts: Product[], initialCategories: Category[] }) {
  const searchParams = useSearchParams();
  const initialKategori = searchParams.get("kategori") || "semua";
  const [activeCategory, setActiveCategory] = useState(initialKategori);
  const [activeBrand, setActiveBrand] = useState("semua");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const brandsList = ["Olympus/Evident", "Euromex", "Dino-Lite", "Optilab", "Others"];

  const filteredProducts = useMemo(() => {
    let result = initialProducts;
    if (activeCategory !== "semua") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeBrand !== "semua") {
      result = result.filter((p) => {
        const brandName = p.brand || "";
        if (activeBrand === "Others") {
          const mainBrands = ["olympus", "evident", "euromex", "dino-lite", "optilab", "olympus/evident"];
          return !mainBrands.includes(brandName.toLowerCase());
        }
        if (activeBrand === "Olympus/Evident") {
          const b = brandName.toLowerCase();
          return b === "olympus" || b === "evident" || b === "olympus/evident";
        }
        return brandName.toLowerCase() === activeBrand.toLowerCase();
      });
    }
    return result;
  }, [activeCategory, activeBrand, initialProducts]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface-50 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-surface-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-surface-900 font-medium">Produk Mikroskop</span>
          </nav>
        </div>
      </div>

      {/* SEO Header */}
      <section className="bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-3">
            Jual Mikroskop Laboratorium
          </h1>
          <p className="text-lg text-surface-600 max-w-3xl leading-relaxed">
            Temukan mikroskop laboratorium berkualitas tinggi untuk kebutuhan pendidikan, riset, klinik, dan industri.
            Semua produk dilengkapi garansi resmi, sertifikat kalibrasi, dan dukungan teknis profesional.
            Tersedia pengiriman ke seluruh Indonesia dengan penerbitan faktur pajak.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Filter Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 bg-white rounded-2xl border border-surface-200 p-5">
                <h3 className="text-sm font-bold text-surface-900 uppercase tracking-wider mb-4">
                  Filter Kategori
                </h3>
                <div className="space-y-1 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-surface-200 scrollbar-track-transparent">
                  <button
                    onClick={() => setActiveCategory("semua")}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === "semua"
                        ? "bg-primary-50 text-primary-700 border border-primary-200"
                        : "text-surface-600 hover:bg-surface-50"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      Semua Mikroskop
                      {activeCategory === "semua" && <Check className="w-4 h-4" />}
                    </span>
                    <span className="text-xs text-surface-400">{initialProducts.length} produk</span>
                  </button>
                  {initialCategories.map((cat) => {
                    const count = initialProducts.filter((p) => p.category === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          activeCategory === cat.id
                            ? "bg-primary-50 text-primary-700 border border-primary-200"
                            : "text-surface-600 hover:bg-surface-50"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {cat.name}
                          {activeCategory === cat.id && <Check className="w-4 h-4" />}
                        </span>
                        <span className="text-xs text-surface-400">{count} produk</span>
                      </button>
                    );
                  })}
                </div>

                {/* Brand Filter */}
                <div className="mt-6 pt-5 border-t border-surface-200">
                  <h3 className="text-sm font-bold text-surface-900 uppercase tracking-wider mb-4">
                    Brand / Merek
                  </h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveBrand("semua")}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeBrand === "semua"
                          ? "bg-primary-50 text-primary-700 border border-primary-200"
                          : "text-surface-600 hover:bg-surface-50"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        Semua Brand
                        {activeBrand === "semua" && <Check className="w-4 h-4" />}
                      </span>
                    </button>
                    {brandsList.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setActiveBrand(brand)}
                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          activeBrand === brand
                            ? "bg-primary-50 text-primary-700 border border-primary-200"
                            : "text-surface-600 hover:bg-surface-50"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          {brand}
                          {activeBrand === brand && <Check className="w-4 h-4" />}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-5 border-t border-surface-200">
                  <Link
                    href="/kontak"
                    className="block w-full text-center px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Minta Penawaran B2B
                  </Link>
                </div>
              </div>
            </aside>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilter(true)}
              className="lg:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-5 py-3 bg-primary-600 text-white text-sm font-semibold rounded-full shadow-xl"
            >
              <Filter className="w-4 h-4" />
              Filter Kategori
            </button>

            {/* Mobile Filter Overlay */}
            {showMobileFilter && (
              <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setShowMobileFilter(false)}>
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[70vh] overflow-auto animate-fade-in-up"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Filter Kategori</h3>
                    <button onClick={() => setShowMobileFilter(false)} className="p-2 hover:bg-surface-100 rounded-lg">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => { setActiveCategory("semua"); setShowMobileFilter(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeCategory === "semua" ? "bg-primary-50 text-primary-700 border border-primary-200" : "text-surface-600"}`}
                    >
                      Semua Mikroskop ({initialProducts.length})
                    </button>
                    {initialCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat.id); setShowMobileFilter(false); }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeCategory === cat.id ? "bg-primary-50 text-primary-700 border border-primary-200" : "text-surface-600"}`}
                      >
                        {cat.name} ({initialProducts.filter(p => p.category === cat.id).length})
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-surface-200">
                    <h3 className="text-base font-bold mb-4">Brand / Merek</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => { setActiveBrand("semua"); setShowMobileFilter(false); }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeBrand === "semua" ? "bg-primary-50 text-primary-700 border border-primary-200" : "text-surface-600"}`}
                      >
                        Semua Brand
                      </button>
                      {brandsList.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => { setActiveBrand(brand); setShowMobileFilter(false); }}
                          className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium ${activeBrand === brand ? "bg-primary-50 text-primary-700 border border-primary-200" : "text-surface-600"}`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-surface-500">
                  Menampilkan <strong className="text-surface-900">{filteredProducts.length}</strong> produk
                  {activeCategory !== "semua" && (
                    <> dalam kategori <strong className="text-primary-700">{initialCategories.find(c => c.id === activeCategory)?.name}</strong></>
                  )}
                  {activeBrand !== "semua" && (
                    <> dari brand <strong className="text-primary-700">{activeBrand}</strong></>
                  )}
                </p>
              </div>

              {/* Category Description */}
              {activeCategory !== "semua" && (
                <div className="bg-white rounded-xl border border-surface-200 p-5 mb-6">
                  <p className="text-sm text-surface-600 leading-relaxed">
                    {initialCategories.find(c => c.id === activeCategory)?.longDescription}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <Link
                    href={`/produk/${product.slug}`}
                    key={product.id}
                    className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-surface-50 flex items-center justify-center p-4">
                      {product.image ? (
                        <Image
                          src={product.image as string}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-surface-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
                        </div>
                      )}
                      {product.badge && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent-500 text-white text-xs font-bold rounded-lg">
                          {product.badge}
                        </span>
                      )}
                      <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full ${product.inStock ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {product.inStock ? "Ready Stock" : "Pre-Order"}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-surface-400 font-medium uppercase tracking-wider mb-1">
                        {product.brand} • {initialCategories.find(c => c.id === product.category)?.name}
                      </p>
                      <h3 className="text-base font-bold text-surface-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-surface-500 line-clamp-2 mb-3">{product.description}</p>

                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-surface-50 rounded-lg px-2.5 py-1.5">
                          <span className="text-surface-400 block">Perbesaran</span>
                          <span className="text-surface-700 font-medium">{product.magnification}</span>
                        </div>
                        <div className="bg-surface-50 rounded-lg px-2.5 py-1.5">
                          <span className="text-surface-400 block">Iluminasi</span>
                          <span className="text-surface-700 font-medium">{product.illumination}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-auto pt-4">
                        <span className="flex-1 text-center px-3 py-2.5 bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white text-sm font-semibold rounded-lg transition-colors">
                          Lihat Detail
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= COMPARISON TABLE ======= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 mb-3 text-center">
            Perbandingan Tipe Mikroskop
          </h2>
          <p className="text-base text-surface-600 text-center mb-8 max-w-2xl mx-auto">
            Panduan cepat memilih mikroskop yang tepat berdasarkan kebutuhan laboratorium Anda.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-surface-200">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-primary-950 text-white text-sm">
                  <th className="px-5 py-4 text-left font-semibold">Tipe Mikroskop</th>
                  <th className="px-5 py-4 text-left font-semibold">Okuler</th>
                  <th className="px-5 py-4 text-left font-semibold">Perbesaran</th>
                  <th className="px-5 py-4 text-center font-semibold">Port Kamera</th>
                  <th className="px-5 py-4 text-left font-semibold">Penggunaan Ideal</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className={`border-t border-surface-200 text-sm ${i % 2 === 0 ? "bg-white" : "bg-surface-50"} hover:bg-primary-50/50 transition-colors`}>
                    <td className="px-5 py-4 font-semibold text-primary-700">{row.type}</td>
                    <td className="px-5 py-4 text-surface-600">{row.okuler}</td>
                    <td className="px-5 py-4 text-surface-600">{row.perbesaran}</td>
                    <td className="px-5 py-4 text-center">{row.kamera}</td>
                    <td className="px-5 py-4 text-surface-600">{row.penggunaan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ======= FAQ SECTION ======= */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 mb-3 text-center">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base text-surface-600 text-center mb-10">
            Temukan jawaban atas pertanyaan umum seputar mikroskop laboratorium.
          </p>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-surface-200 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-surface-50 transition-colors"
                >
                  <h3 className="text-base font-semibold text-surface-900 pr-4">{faq.question}</h3>
                  {openFAQ === i ? (
                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-surface-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-sm text-surface-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= SEO BOTTOM CONTENT ======= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 mb-4">
              Panduan Memilih Mikroskop Laboratorium
            </h2>
            <p className="text-surface-600 leading-relaxed">
              Memilih <strong>mikroskop laboratorium</strong> yang tepat memerlukan pemahaman
              tentang kebutuhan spesifik instansi Anda. Berikut adalah panduan singkat kami:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-50 border border-surface-200 p-6 rounded-2xl hover:border-primary-300 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Pendidikan & Sekolah</h3>
              <p className="text-sm text-surface-600 leading-relaxed">
                Untuk tingkat SMP/SMA, <strong>mikroskop binokuler</strong> dengan perbesaran 40x-1000x dan iluminasi LED merupakan pilihan paling optimal dari segi ketahanan dan kemudahan bagi siswa.
              </p>
            </div>
            <div className="bg-surface-50 border border-surface-200 p-6 rounded-2xl hover:border-primary-300 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Riset & Universitas</h3>
              <p className="text-sm text-surface-600 leading-relaxed">
                Untuk laboratorium riset yang memerlukan dokumentasi visual untuk laporan atau presentasi, <strong>mikroskop trinokuler</strong> dengan port kamera khusus adalah investasi yang sangat tepat.
              </p>
            </div>
            <div className="bg-surface-50 border border-surface-200 p-6 rounded-2xl hover:border-primary-300 transition-colors">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">Klinik & Industri (QC)</h3>
              <p className="text-sm text-surface-600 leading-relaxed">
                Pilih mikroskop dengan <strong>optik plan-infinity</strong> untuk analisis mikrobiologi klinik. Untuk industri, <strong>mikroskop stereo zoom</strong> sangat direkomendasikan untuk inspeksi QC.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-primary-50 border border-primary-200 p-6 rounded-2xl text-center">
            <p className="text-surface-700 leading-relaxed text-sm md:text-base">
              <strong>JualMikroskop<span className="text-accent-500">.id</span></strong> menyediakan konsultasi teknis gratis. Tim kami berpengalaman mendampingi penyusunan spesifikasi teknis, pengajuan RAB, dan pengadaan B2B instansi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
