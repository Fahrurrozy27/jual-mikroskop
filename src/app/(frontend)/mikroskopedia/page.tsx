import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Search,
  Clock,
  ChevronRight,
  Tag,
  BookMarked,
  Microscope,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { articles } from "@/data/articles";
import ArticleListClient from "./ArticleListClient";
export const metadata: Metadata = {
  title: "Mikroskopedia - Pusat Edukasi & Artikel Mikroskop | JualMikroskop.id",
  description:
    "Pelajari segala hal tentang mikroskop, mulai dari tutorial penggunaan, tips perawatan, hingga perkembangan teknologi mikroskop terbaru di Mikroskopedia.",
  openGraph: {
    title: "Mikroskopedia - Pusat Edukasi & Artikel Mikroskop",
    description:
      "Temukan panduan lengkap, tips praktis, dan artikel edukatif seputar mikroskop laboratorium, mikroskop stereo, hingga mikroskop digital.",
    url: "https://jualmikroskop.id/mikroskopedia",
    siteName: "JualMikroskop.id",
    images: [
      {
        url: "https://jualmikroskop.id/images/og-mikroskopedia.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Mikroskopedia - Edukasi Mikroskop",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const categories = [
  { id: "tutorial", label: "Tutorial Penggunaan", icon: <BookOpen className="w-4 h-4" /> },
  { id: "perawatan", label: "Tips Perawatan", icon: <Zap className="w-4 h-4" /> },
  { id: "panduan-beli", label: "Panduan Membeli", icon: <Tag className="w-4 h-4" /> },
  { id: "studi-kasus", label: "Studi Kasus Lab", icon: <Microscope className="w-4 h-4" /> },
];



export default function MikroskopediaPage() {
  return (
    <>
      {/* ======= HERO SECTION ======= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white pt-16 pb-32">
        <div className="hero-pattern absolute inset-0 opacity-80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-sm font-bold text-accent-300 mb-6">
            <BookMarked className="w-4 h-4" />
            Pusat Edukasi & Literasi Optik
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Mikrosko<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-300">pedia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-surface-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Kumpulan artikel eksklusif, tutorial penggunaan, dan panduan lengkap pengadaan instrumen laboratorium untuk memaksimalkan produktivitas Anda.
          </p>
        </div>
      </section>

      <ArticleListClient initialArticles={articles} />

      {/* ======= CTA ======= */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white border-t border-surface-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Microscope className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-extrabold text-primary-950 mb-4">
            Butuh Rekomendasi Spesifik?
          </h2>
          <p className="text-lg text-surface-600 mb-8 max-w-2xl mx-auto">
            Jangan biarkan keraguan menghambat penelitian Anda. Konsultasikan kebutuhan mikroskop Anda secara gratis dengan spesialis kami.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg hover:shadow-primary-500/30 transition-all text-base"
          >
            Konsultasi Sekarang
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
