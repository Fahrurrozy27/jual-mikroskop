import Link from "next/link";
import {
  Microscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  FileText,
} from "lucide-react";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">JualMikroskop</span>
                <span className="text-lg font-bold text-accent-400">.id</span>
              </div>
            </Link>
            <p className="text-sm text-surface-400 leading-relaxed mb-4">
              Distributor dan supplier mikroskop laboratorium terpercaya di
              Indonesia. Melayani kebutuhan alat lab untuk instansi pendidikan,
              rumah sakit, klinik, dan industri.
            </p>
            <p className="text-sm text-surface-400 leading-relaxed mb-4">
              Dikelola secara resmi oleh <a href="https://haianlab.com" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors font-medium">PT. Haian Saintika Eltanindo</a>.
            </p>
            <div className="flex flex-col gap-2 text-sm text-surface-400">
              <a href="tel:+6281290864275" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Phone className="w-4 h-4" /> 0812-9086-4275
              </a>
              <a href="mailto:info@jualmikroskop.id" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <Mail className="w-4 h-4" /> info@jualmikroskop.id
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> 
                <span>Jl. Pangeran Sogiri No.135B, Tanah Baru, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16154</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Senin - Jumat, 08:00 - 17:00 WIB
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Produk Mikroskop
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/produk?kategori=${cat.slug}`}
                    className="text-sm text-surface-400 hover:text-accent-400 transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/produk"
                  className="text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors"
                >
                  Lihat Semua Produk →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Informasi
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tentang" className="text-sm text-surface-400 hover:text-accent-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-surface-400 hover:text-accent-400 transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-surface-400 hover:text-accent-400 transition-colors">
                  Minta Penawaran (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-surface-400 hover:text-accent-400 transition-colors">
                  Blog Mikroskopedia
                </Link>
              </li>

            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Layanan Kami
            </h3>
            <ul className="space-y-2.5 text-sm text-surface-400">
              <li>🔬 Penjualan Mikroskop Lab</li>
              <li>🔧 Service & Perbaikan</li>
              <li>📋 Kalibrasi Berkala</li>
              <li>📦 Pengadaan Instansi / B2B</li>
              <li>🎓 Training Penggunaan</li>
              <li>📄 Penerbitan Faktur Pajak</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-surface-500 text-center sm:text-left">
            © {new Date().getFullYear()} JualMikroskop.id — Distributor Mikroskop Laboratorium Terpercaya di Indonesia.
            <br className="sm:hidden" />
            {" "}All rights reserved.
          </p>
          <p className="text-xs text-surface-600">
            Powered by{" "}
            <a
              href="https://haianlab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400 hover:text-accent-300 transition-colors font-medium"
            >
              Haian Lab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
