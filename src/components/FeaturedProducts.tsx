"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Microscope, Star } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const brandLogos = [
  { id: "Semua", label: "Semua Brand", src: null },
  { id: "Olympus", label: "Olympus/Evident", src: "/images/brands/olympus2.png" },
  { id: "Euromex", label: "Euromex", src: "/images/brands/euromex.png" },
  { id: "Dino-Lite", label: "Dino-Lite", src: "/images/brands/dinolite.svg" },
  { id: "Optilab", label: "Optilab (TKDN)", src: "/images/brands/optilab.svg" },
  { id: "Others", label: "Others", src: null },
];

export default function FeaturedProducts() {
  const [selectedBrand, setSelectedBrand] = useState<string>("Semua");

  // Filter products by featured and optionally by brand
  const filteredProducts = products.filter((p) => {
    if (!p.featured) return false;
    if (selectedBrand === "Semua") return true;
    if (selectedBrand === "Others") {
      return !["olympus", "euromex", "dino-lite", "optilab"].includes(p.brand.toLowerCase());
    }
    return p.brand.toLowerCase() === selectedBrand.toLowerCase();
  }).slice(0, 4);

  return (
    <section className="py-16 lg:py-20 bg-white" id="produk-unggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-950 mb-3">
            Produk Unggulan
          </h2>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto mb-4">
            Mikroskop terlaris dengan rating tertinggi dari pelanggan kami.
          </p>
          <Link
            href="/produk"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Brand Filter */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {brandLogos.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={`relative flex items-center justify-center px-4 py-3 rounded-xl transition-all duration-300 border bg-white ${
                selectedBrand === brand.id
                  ? "border-primary-600 shadow-md shadow-primary-500/20 ring-2 ring-primary-100 grayscale-0"
                  : "border-surface-200 hover:border-primary-300 hover:shadow-sm grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              }`}
              style={{ minWidth: "120px", height: "64px" }}
              title={brand.label}
            >
              {brand.src ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.label}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className={`text-sm font-bold ${
                  selectedBrand === brand.id ? "text-primary-700" : "text-surface-600"
                }`}>
                  {brand.label}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                href={`/produk/${product.slug}`}
                key={product.id}
                className="group bg-white rounded-2xl border border-surface-200 overflow-hidden hover:border-primary-300 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-52 bg-surface-50 flex items-center justify-center overflow-hidden p-4">
                  {product.image ? (
                    <Image
                      src={product.image as string}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                  ) : (
                    <Microscope className="w-24 h-24 text-surface-300" />
                  )}
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-accent-500 text-white text-xs font-bold rounded-lg shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  {product.inStock ? (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Ready Stock
                    </span>
                  ) : (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                      Pre-Order
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-surface-400 font-medium uppercase tracking-wider mb-1">
                    {product.brand} • {categories.find(c => c.id === product.category)?.name || product.category}
                  </p>
                  <h3 className="text-base font-bold text-surface-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-xs text-surface-400 ml-1">(4.9)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-surface-400">Perbesaran:</span>
                    <span className="text-xs font-medium text-surface-700">{product.magnification}</span>
                  </div>
                  <div className="flex gap-2 mt-auto pt-4">
                    <span className="flex-1 text-center px-3 py-2.5 bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white text-sm font-semibold rounded-lg transition-colors">
                      Lihat Detail
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center bg-surface-50 rounded-2xl border border-surface-200">
              <Microscope className="w-12 h-12 text-surface-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-surface-900 mb-1">Tidak ada produk unggulan</h3>
              <p className="text-surface-500">Belum ada produk unggulan untuk brand {selectedBrand}.</p>
            </div>
          )}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Lihat Semua Produk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
