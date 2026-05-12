import type { Metadata } from "next";
import { Suspense } from "react";
import ProdukPageClient from "./ProdukPageClient";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Jual Mikroskop Laboratorium — Harga Terbaik & Garansi Resmi",
  description:
    "Jual mikroskop laboratorium lengkap: binokuler, trinokuler, digital, stereo, dan monokuler. Harga kompetitif, garansi resmi, sertifikat kalibrasi. Distributor terpercaya melayani pengadaan instansi di seluruh Indonesia.",
  keywords: [
    "jual mikroskop",
    "harga mikroskop",
    "mikroskop laboratorium",
    "mikroskop binokuler",
    "mikroskop trinokuler",
    "mikroskop digital",
    "mikroskop stereo",
    "harga mikroskop binokuler",
    "harga mikroskop digital",
    "distributor mikroskop",
  ],
  alternates: {
    canonical: "https://jualmikroskop.id/produk",
  },
  openGraph: {
    title: "Jual Mikroskop Laboratorium — Harga Terbaik | JualMikroskop.id",
    description: "Katalog lengkap mikroskop laboratorium: binokuler, trinokuler, digital, stereo. Garansi resmi & sertifikat kalibrasi.",
    url: "https://jualmikroskop.id/produk",
  },
};

import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default async function ProdukPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Produk Mikroskop", url: "/produk" },
  ]);
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Suspense>
        <ProdukPageClient initialProducts={products} initialCategories={categories} />
      </Suspense>
    </>
  );
}
