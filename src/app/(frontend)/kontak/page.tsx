import type { Metadata } from "next";
import { Suspense } from "react";
import KontakPageClient from "./KontakPageClient";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hubungi Kami — Minta Penawaran Mikroskop Laboratorium",
  description:
    "Hubungi JualMikroskop.id untuk minta penawaran harga mikroskop laboratorium, konsultasi pengadaan instansi, atau informasi produk. Tim kami siap melayani via WhatsApp, email, dan telepon.",
  alternates: {
    canonical: "https://jualmikroskop.id/kontak",
  },
};

export default function KontakPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Hubungi Kami", url: "/kontak" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense>
        <KontakPageClient />
      </Suspense>
    </>
  );
}
