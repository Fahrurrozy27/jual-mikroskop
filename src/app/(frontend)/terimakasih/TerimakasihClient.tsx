"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function TerimakasihClient() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(1);
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    // Read the redirect URL from search parameters, or fallback to default
    const paramUrl = searchParams.get("redirect");
    const defaultUrl = "https://wa.me/6281290864275?text=Halo,%20saya%20tertarik%20dengan%20produk%20mikroskop%20di%20JualMikroskop.id";
    const targetUrl = paramUrl ? decodeURIComponent(paramUrl) : defaultUrl;
    setRedirectUrl(targetUrl);

    // Countdown interval (1s)
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Timeout to redirect after 1 second (1000ms)
    const timeout = setTimeout(() => {
      // Use replace so they don't get stuck in a back-button loop
      window.location.replace(targetUrl);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [searchParams]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl border border-surface-200 p-8 md:p-10 shadow-sm text-center flex flex-col items-center">
        
        {/* Pulsing Loading Spinner & Icon Container */}
        <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
          {/* Pulsing outer rings for aesthetics */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-15" />
          <div className="absolute inset-2 bg-green-500 rounded-full animate-pulse opacity-25" />
          
          {/* Center WhatsApp icon circle */}
          <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
            <WhatsAppIcon className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        {/* Simplistic, clean thank you text centered */}
        <h1 className="text-3xl font-extrabold text-primary-950 tracking-tight mb-3">
          Terima Kasih!
        </h1>
        
        <p className="text-base text-surface-600 font-medium mb-8 leading-relaxed max-w-sm">
          Menghubungkan Anda ke WhatsApp resmi kami...
        </p>

        {/* Fallback & active redirection button */}
        <a
          href={redirectUrl || "#"}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full md:w-auto"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          Hubungi via WhatsApp Sekarang
        </a>

        {/* Tiny hint */}
        <p className="text-xs text-surface-400 mt-4">
          Jika tidak teralihkan otomatis dalam 1 detik, silakan klik tombol di atas.
        </p>

      </div>
    </div>
  );
}
