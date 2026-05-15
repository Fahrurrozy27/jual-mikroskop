"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ChevronRight, BookOpen, Zap, Tag, Microscope, Search } from "lucide-react";
import { Article } from "@/data/types";

const categories = [
  { id: "all", label: "Semua Kategori", icon: null },
  { id: "Tutorial Penggunaan", label: "Tutorial Penggunaan", icon: <BookOpen className="w-4 h-4" /> },
  { id: "Tips Perawatan", label: "Tips Perawatan", icon: <Zap className="w-4 h-4" /> },
  { id: "Panduan Membeli", label: "Panduan Membeli", icon: <Tag className="w-4 h-4" /> },
  { id: "Studi Kasus Lab", label: "Studi Kasus Lab", icon: <Microscope className="w-4 h-4" /> },
];

export default function ArticleListClient({ initialArticles }: { initialArticles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredArticles = initialArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === "all" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <>
      {/* ======= SEARCH SECTION ======= */}
      <div className="relative max-w-2xl mx-auto -mt-24 z-20 px-4 sm:px-0">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-4 sm:left-6 flex items-center pointer-events-none z-10">
            <Search className="h-5 w-5 text-white opacity-70" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari artikel, panduan, atau istilah teknis..."
            className="block w-full pl-12 sm:pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:bg-white/20 transition-all backdrop-blur-md shadow-lg"
          />
        </div>
      </div>

      {/* ======= CATEGORIES ======= */}
      <section className="pt-20 pb-12 bg-surface-50 border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(8);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 border rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary-600 border-primary-600 text-white shadow-md"
                    : "bg-white border-surface-200 text-surface-600 hover:border-primary-300 hover:text-primary-700 hover:shadow-sm"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======= FEATURED ARTICLES ======= */}
      <section className="py-16 lg:py-24 bg-white min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-950 mb-2">
                {searchQuery ? "Hasil Pencarian" : activeCategory !== "all" ? `Kategori: ${activeCategory}` : "Artikel Terbaru"}
              </h2>
              <p className="text-surface-600">
                {filteredArticles.length} artikel ditemukan
              </p>
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedArticles.map((article, idx) => (
                <Link
                  href={`/mikroskopedia/${article.slug}`}
                  key={article.id}
                  className="group flex flex-col bg-white border border-surface-200 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="relative h-48 bg-surface-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={idx < 4}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-bold rounded-lg shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-surface-500 mb-3 font-medium">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.date}</span>
                      <span className="w-1 h-1 bg-surface-300 rounded-full" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-surface-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-surface-600 line-clamp-3 mb-5 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center text-sm font-bold text-primary-600 group-hover:text-accent-600 transition-colors">
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface-50 rounded-2xl border border-surface-200 border-dashed">
              <Search className="w-12 h-12 text-surface-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-surface-900 mb-2">Pencarian Tidak Ditemukan</h3>
              <p className="text-surface-600 max-w-md mx-auto">Maaf, kami tidak menemukan artikel yang sesuai dengan kata kunci "{searchQuery}". Coba gunakan kata kunci lain.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 px-6 py-2.5 bg-white border border-surface-300 hover:border-primary-500 hover:text-primary-600 font-semibold rounded-xl transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          )}
          
          {visibleCount < filteredArticles.length && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 8)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 hover:bg-primary-100 text-primary-700 font-semibold rounded-xl border border-primary-200 transition-colors"
              >
                Muat Lebih Banyak <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
