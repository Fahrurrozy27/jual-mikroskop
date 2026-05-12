import { faqData } from "@/data/faq";
import { Product } from "@/data/products";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "JualMikroskop.id",
    url: "https://jualmikroskop.id",
    logo: "https://jualmikroskop.id/logo.png",
    description:
      "Distributor dan supplier mikroskop laboratorium terpercaya di Indonesia. Menyediakan mikroskop binokuler, trinokuler, digital, dan stereo untuk kebutuhan pendidikan, riset, dan industri.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Laboratorium No. 88",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12345",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-812-9086-4275",
      contactType: "sales",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://www.instagram.com/jualmikroskop.id",
      "https://www.facebook.com/jualmikroskop.id",
    ],
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://jualmikroskop.id${product.image}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: "Laboratory Microscope",
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://jualmikroskop.id${item.url}`,
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JualMikroskop.id",
    url: "https://jualmikroskop.id",
    description:
      "Distributor dan supplier mikroskop laboratorium terpercaya di Indonesia",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jualmikroskop.id/produk?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}
