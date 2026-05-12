import { Product } from "@/data/products";

// Maps Payload CMS Product to Frontend Product Type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPayloadToProduct(doc: any): Product {
  const imageUrl = doc.image && typeof doc.image === "object" && doc.image.url ? doc.image.url : "";
  const categorySlug = doc.category && typeof doc.category === "object" ? doc.category.slug : String(doc.category || "");

  return {
    id: doc.id,
    name: doc.name,
    slug: doc.slug,
    category: categorySlug,
    brand: doc.brand,
    model: doc.model,
    image: imageUrl,
    magnification: doc.specifications?.magnification || "",
    eyepiece: doc.specifications?.eyepiece || "",
    illumination: doc.specifications?.illumination || "",
    application: doc.specifications?.application || "",
    description: doc.description || "",
    specs: {}, // Not used in UI currently
    inStock: doc.inStock ?? true,
    featured: doc.badge === "Best Seller" || doc.badge === "Rekomendasi" || doc.badge === "Premium",
    badge: doc.badge || undefined,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPayloadToCategory(doc: any): any {
  return {
    id: doc.slug,
    name: doc.name,
    slug: doc.slug,
    description: doc.description,
    longDescription: doc.description, // Can be updated if Payload adds longDescription
    icon: doc.icon || "microscope",
    productCount: 0, // Fallback if not calculated
    priceRange: "", // Fallback
    keywords: [],
    application: [],
  };
}
