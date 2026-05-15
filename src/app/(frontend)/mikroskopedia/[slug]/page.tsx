import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ChevronRight, Microscope } from "lucide-react";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import TableOfContents from "./TableOfContents";

// Static Generation
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | Mikroskopedia",
    };
  }

  return {
    title: `${article.title} | Mikroskopedia`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      authors: [article.author.name],
      publishedTime: article.date,
      url: `https://jualmikroskop.id/mikroskopedia/${article.slug}`,
      images: [
        {
          url: `https://jualmikroskop.id${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Generate TOC and inject IDs into headings
  const toc: { id: string; text: string; level: number }[] = [];
  let processedContent = article.content;
  
  // Use regex to find <h2> and <h3>, extract text, slugify, and replace
  let counter = 0;
  processedContent = processedContent.replace(/<(h[23])>(.*?)<\/\1>/gi, (match, tag, text) => {
    // Strip inner HTML tags from text for the slug
    const cleanText = text.replace(/<[^>]*>?/gm, '');
    const slug = cleanText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + counter++;
    
    toc.push({
      id: slug,
      text: cleanText,
      level: parseInt(tag.charAt(1)),
    });
    
    return `<${tag} id="${slug}">${text}</${tag}>`;
  });

  // Dynamic Related Products matching tags or title keywords
  const keywords = [...article.tags, article.category, article.title].join(" ").toLowerCase();
  
  const relatedProducts = products
    .filter(p => {
      const prodText = (p.name + " " + p.category + " " + p.tags?.join(" ")).toLowerCase();
      // Match if any tag matches
      return article.tags.some(tag => prodText.includes(tag.toLowerCase()));
    })
    .slice(0, 3);
    
  // Fallback to featured if none matched
  const finalRelatedProducts = relatedProducts.length > 0 
    ? relatedProducts 
    : products.filter(p => p.featured).slice(0, 3);

  // Generate JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: [`https://jualmikroskop.id${article.image}`],
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "JualMikroskop.id",
      logo: {
        "@type": "ImageObject",
        url: "https://jualmikroskop.id/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="bg-surface-50 min-h-screen py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-surface-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/" className="hover:text-primary-600 transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <Link href="/mikroskopedia" className="hover:text-primary-600 transition-colors">Mikroskopedia</Link>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-surface-900 font-medium truncate">{article.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Article Content */}
            <article className="lg:w-2/3 bg-white rounded-3xl shadow-sm border border-surface-200 overflow-hidden">
              {/* Header Image */}
              <div className="relative h-64 md:h-96 w-full bg-surface-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover mix-blend-multiply"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-800 text-xs font-bold rounded-lg shadow-sm">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Header */}
              <div className="p-6 md:p-10 lg:p-12 border-b border-surface-100">
                <h1 className="text-3xl md:text-4xl font-extrabold text-surface-900 leading-tight mb-6">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      width={40}
                      height={40}
                      className="rounded-full bg-surface-100"
                    />
                    <div>
                      <p className="font-bold text-surface-900">{article.author.name}</p>
                      <p className="text-xs text-surface-500">{article.author.role}</p>
                    </div>
                  </div>
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-surface-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div 
                className="p-6 md:p-10 lg:p-12 prose prose-lg prose-primary max-w-none text-surface-700
                           prose-headings:text-surface-900 prose-headings:font-bold prose-headings:scroll-mt-24
                           prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-xl prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tags */}
              <div className="px-6 md:px-10 lg:px-12 pb-10">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-surface-100 text-surface-600 text-sm font-medium rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3 flex flex-col gap-8">
              
              {/* Consultant Card */}
              <div className="bg-gradient-to-br from-primary-900 to-primary-950 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg border border-primary-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <Microscope className="w-6 h-6 text-accent-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Butuh Bantuan Teknis?</h3>
                  <p className="text-sm text-surface-300 mb-6 leading-relaxed">
                    Jangan ambil risiko dalam pengadaan atau perbaikan alat vital lab Anda. Konsultasikan langsung dengan {article.author.name} dan tim teknis kami.
                  </p>
                  <a
                    href="https://wa.me/6281290864275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold rounded-xl transition-colors"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </div>
              </div>

              {/* Recommended Products */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-surface-200 shadow-sm">
                <h3 className="text-lg font-bold text-surface-900 mb-6 border-b border-surface-100 pb-4">
                  Produk Relevan
                </h3>
                <div className="flex flex-col gap-5">
                  {finalRelatedProducts.map((product) => (
                    <Link href={`/produk/${product.slug}`} key={product.id} className="group flex gap-4 items-center">
                      <div className="w-20 h-20 bg-surface-50 rounded-xl flex items-center justify-center flex-shrink-0 p-2 border border-surface-100 group-hover:border-primary-300 transition-colors">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary-600 mb-1">{product.brand}</p>
                        <h4 className="text-sm font-bold text-surface-900 group-hover:text-primary-700 line-clamp-2 leading-snug">
                          {product.name}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-surface-100">
                  <Link href="/produk" className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 justify-center">
                    Lihat Semua Katalog <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Table of Contents */}
              <TableOfContents items={toc} />

            </aside>
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/mikroskopedia" className="inline-flex items-center gap-2 text-surface-500 hover:text-primary-600 font-medium transition-colors">
               <ArrowLeft className="w-4 h-4" /> Kembali ke Mikroskopedia
             </Link>
          </div>
        </div>
      </main>
    </>
  );
}
