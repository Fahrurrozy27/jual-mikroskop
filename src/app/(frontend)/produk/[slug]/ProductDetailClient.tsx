"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  MessageCircle,
  Truck,
  Award,
  ArrowLeft
} from "lucide-react";
import { Product } from "@/data/products";
import { Category } from "@/data/categories";

export default function ProductDetailClient({ product, category }: { product: Product, category: Category | undefined }) {
  // Use specific images or fallbacks
  const imageUrl = product.image;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface-50 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-surface-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link href="/produk" className="hover:text-primary-600 transition-colors">Produk</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link href={`/produk?kategori=${product.category}`} className="hover:text-primary-600 transition-colors">
              {category?.name || "Kategori"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-surface-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/produk" className="inline-flex items-center gap-2 text-sm font-semibold text-surface-500 hover:text-primary-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Katalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Image Gallery Simulation */}
            <div className="sticky top-24">
              <div className="bg-surface-50 rounded-3xl border border-surface-200 overflow-hidden relative group aspect-square flex items-center justify-center p-8 mb-4">
                {product.badge && (
                  <span className="absolute top-6 left-6 z-10 px-3 py-1.5 bg-accent-500 text-white text-sm font-bold rounded-lg shadow-sm">
                    {product.badge}
                  </span>
                )}
                
                <div className="relative w-full h-full flex items-center justify-center">
                  {imageUrl ? (
                    <Image
                      src={imageUrl as string}
                      alt={product.name}
                      width={800}
                      height={800}
                      className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-surface-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Thumbnail strip simulation */}
              <div className="flex gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`flex-1 aspect-square rounded-xl border ${i === 1 ? 'border-primary-500 bg-white shadow-sm' : 'border-surface-200 bg-surface-50 opacity-60'} flex items-center justify-center p-2 cursor-pointer hover:opacity-100 transition-opacity overflow-hidden`}>
                    {imageUrl ? (
                      <Image
                        src={imageUrl as string}
                        alt={`Thumbnail ${i}`}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full mix-blend-multiply"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-surface-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-surface-400 uppercase tracking-wider">
                    {product.brand} • {product.model}
                  </p>
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${product.inStock !== false ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {product.inStock !== false ? "Ready Stock" : "Pre-Order"}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-4 leading-tight">
                  {product.name}
                </h1>
                  <p className="text-sm text-surface-500 font-medium mt-2">
                    Dapatkan penawaran harga khusus (B2B) untuk pengadaan instansi.
                  </p>
              </div>

              {/* Product Highlights / Bullet Points */}
              <div className="mb-8">
                <ul className="space-y-2.5 text-sm md:text-base text-surface-600">
                  <li className="flex items-start gap-2.5">
                    <div className="mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    <span>Lensa Okuler <strong>{product.eyepiece}</strong> memberikan pandangan yang luas dan jernih.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    <span>Perbesaran total <strong>{product.magnification}</strong> sangat cocok untuk aplikasi {product.application}.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    <span>Menggunakan sistem iluminasi <strong>{product.illumination}</strong> yang hemat energi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="mt-1 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                    <span>Termasuk garansi resmi 1 tahun dan dukungan teknis after-sales terjamin.</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href={`/kontak?produk=${encodeURIComponent(product.name)}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-700 text-white text-base font-bold rounded-xl shadow-lg hover:shadow-primary-600/25 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Minta Penawaran B2B
                </Link>
                <a
                  href={`https://wa.me/6281290864275?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}%20(${product.model})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-50 hover:bg-green-100 text-green-700 text-base font-bold rounded-xl border border-green-200 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi via WA
                </a>
              </div>

              {/* Quick Trust Signals */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-surface-700">Garansi 1 Tahun</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-surface-700">Sertifikat Kalibrasi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-surface-700">Faktur Pajak PPN</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-surface-700">Kirim Se-Indonesia</span>
                </div>
              </div>

            </div>
          </div>

          {/* Full Width Tabs / Details Section */}
          <div className="mt-16 pt-12 border-t border-surface-200">
            {/* Header Tabs Simulation */}
            <div className="flex items-center gap-8 mb-8 border-b border-surface-200">
              <div className="px-4 py-3 border-b-2 border-primary-600 text-primary-600 font-bold text-base md:text-lg">
                Penerangan Produk & Spesifikasi
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 prose prose-surface">
                <h3 className="text-xl font-bold text-surface-900 mb-4">Penerangan Produk</h3>
                <p className="text-surface-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="bg-surface-50 p-5 rounded-xl border border-surface-200">
                  <h4 className="font-bold text-surface-900 mb-2">Aplikasi Ideal</h4>
                  <p className="text-sm text-surface-600">{product.application}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h3 className="text-xl font-bold text-surface-900 mb-4">Spesifikasi Teknis</h3>
                <div className="rounded-xl border border-surface-200 overflow-hidden text-sm md:text-base">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-surface-200">
                        <th className="w-1/3 bg-surface-50 p-4 font-semibold text-surface-700 border-r border-surface-200">Brand</th>
                        <td className="p-4 text-surface-900">{product.brand}</td>
                      </tr>
                      <tr className="border-b border-surface-200">
                        <th className="w-1/3 bg-surface-50 p-4 font-semibold text-surface-700 border-r border-surface-200">Model</th>
                        <td className="p-4 text-surface-900">{product.model}</td>
                      </tr>
                      <tr className="border-b border-surface-200">
                        <th className="w-1/3 bg-surface-50 p-4 font-semibold text-surface-700 border-r border-surface-200">Perbesaran Total</th>
                        <td className="p-4 text-surface-900">{product.magnification}</td>
                      </tr>
                      <tr className="border-b border-surface-200">
                        <th className="w-1/3 bg-surface-50 p-4 font-semibold text-surface-700 border-r border-surface-200">Lensa Okuler (Eyepiece)</th>
                        <td className="p-4 text-surface-900">{product.eyepiece}</td>
                      </tr>
                      <tr>
                        <th className="w-1/3 bg-surface-50 p-4 font-semibold text-surface-700 border-r border-surface-200">Sistem Iluminasi</th>
                        <td className="p-4 text-surface-900">{product.illumination}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 bg-surface-50 border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-950 mb-4">Informasi Tambahan {product.name}</h2>
          <div className="prose prose-surface">
            <p>
              <strong>JualMikroskop<span className="text-accent-500">.id</span></strong> adalah distributor resmi untuk produk {product.brand} di Indonesia.
              Pembelian <strong>{product.name}</strong> ({product.model}) melalui kami dijamin 100% original, 
              dilengkapi dengan garansi resmi, dan didukung oleh teknisi bersertifikat untuk layanan purnajual 
              seperti perbaikan dan kalibrasi rutin.
            </p>
            <p>
              Untuk instansi pemerintah, sekolah, universitas, maupun perusahaan swasta, kami memfasilitasi 
              pembelian melalui sistem pengadaan resmi, menerbitkan faktur pajak (PPN 11%), serta membantu 
              penyusunan dokumen Rencana Anggaran Biaya (RAB) dan spesifikasi teknis. Hubungi kami segera untuk 
              mendapatkan penawaran harga terbaik.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
