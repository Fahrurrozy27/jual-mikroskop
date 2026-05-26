import type { Metadata } from "next";
import { Suspense } from "react";
import TerimakasihClient from "./TerimakasihClient";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terima Kasih — Menghubungkan ke WhatsApp | JualMikroskop.id",
  description: "Terima kasih telah menghubungi JualMikroskop.id. Anda sedang dialihkan ke layanan WhatsApp resmi kami.",
  robots: {
    index: false, // Don't index the thank you page to prevent organic traffic clutter
    follow: true,
  },
};

export default function TerimakasihPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Terima Kasih", url: "/terimakasih" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-surface-50">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-surface-600 font-medium">Memuat...</p>
          </div>
        </div>
      }>
        <TerimakasihClient />
      </Suspense>
    </>
  );
}
