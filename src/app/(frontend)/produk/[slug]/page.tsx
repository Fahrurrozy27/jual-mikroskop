import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all products (SSG)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | JualMikroskop.id",
      description: "Produk mikroskop yang Anda cari tidak ditemukan.",
    };
  }

  const categoryId = Array.isArray(product.category) ? product.category[0] : product.category;
  const category = categories.find((c) => c.slug === categoryId) || categories.find((c) => c.id === categoryId);

  const title = `Jual ${product.name} | ${product.brand} - JualMikroskop.id`;
  const description = `${product.name} (${product.model}) dari ${product.brand}. ${product.description} Spesifikasi utama: ${product.magnification}, ${product.eyepiece}. Hubungi kami untuk penawaran harga B2B terbaik.`;

  return {
    title,
    description,
    keywords: [product.name, product.model, product.brand, category?.name || "Mikroskop", "Jual Mikroskop Laboratorium"],
    openGraph: {
      title,
      description,
      url: `https://jualmikroskop.id/produk/${product.slug}`,
      siteName: "JualMikroskop.id",
      images: [
        {
          url: `https://jualmikroskop.id${product.image}`,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `https://jualmikroskop.id/produk/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const categoryId = Array.isArray(product.category) ? product.category[0] : product.category;
  const category = categories.find((c) => c.slug === categoryId) || categories.find((c) => c.id === categoryId);

  // JSON-LD Product Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://jualmikroskop.id${product.image}`,
    "description": product.description,
    "sku": product.model,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    }
  };

  // Calculate Related Articles (SILO logic)
  const productTags = product.tags || [];
  let relatedArticles = articles
    .filter((article) => {
      const hasMatchingTag = article.tags.some((tag) => productTags.includes(tag));
      const hasMatchingCategory = Array.isArray(product.category) 
        ? product.category.some(c => article.category.toLowerCase().includes(c.toLowerCase()))
        : article.category.toLowerCase().includes(product.category.toLowerCase());
      
      return hasMatchingTag || hasMatchingCategory;
    });

  // Fallback: If no strict match, just show the latest 3 articles
  if (relatedArticles.length === 0) {
    relatedArticles = articles;
  }
  
  relatedArticles = relatedArticles.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} category={category} relatedArticles={relatedArticles} />
    </>
  );
}
