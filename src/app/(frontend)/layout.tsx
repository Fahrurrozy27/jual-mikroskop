import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jualmikroskop.id"),
  title: {
    default: "Jual Mikroskop Laboratorium — Distributor Terpercaya Indonesia | JualMikroskop.id",
    template: "%s | JualMikroskop.id",
  },
  description:
    "Distributor dan supplier mikroskop laboratorium terpercaya di Indonesia. Jual mikroskop binokuler, trinokuler, digital, dan stereo dengan garansi resmi, sertifikat kalibrasi, dan harga kompetitif untuk instansi pendidikan, klinik, dan industri.",
  keywords: [
    "mikroskop",
    "jual mikroskop",
    "harga mikroskop",
    "mikroskop laboratorium",
    "mikroskop binokuler",
    "mikroskop trinokuler",
    "mikroskop digital",
    "mikroskop stereo",
    "distributor mikroskop Indonesia",
    "supplier mikroskop laboratorium",
    "alat laboratorium",
    "harga mikroskop binokuler",
    "mikroskop untuk sekolah",
    "merk mikroskop terbaik",
  ],
  authors: [{ name: "JualMikroskop.id" }],
  creator: "JualMikroskop.id",
  publisher: "JualMikroskop.id",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jualmikroskop.id",
    siteName: "JualMikroskop.id",
    title: "Jual Mikroskop Laboratorium — Distributor Terpercaya Indonesia",
    description:
      "Distributor dan supplier mikroskop laboratorium terpercaya di Indonesia. Mikroskop binokuler, trinokuler, digital, dan stereo dengan garansi resmi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jual Mikroskop Laboratorium — JualMikroskop.id",
    description:
      "Distributor mikroskop laboratorium terpercaya di Indonesia. Garansi resmi, sertifikat kalibrasi, harga B2B kompetitif.",
  },
  alternates: {
    canonical: "https://jualmikroskop.id",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const siteSchema = generateWebSiteSchema();

  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Google Tag Manager - manual script for reliable loading on all pages */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6877GRB');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-surface-900 font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6877GRB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
