"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Microscope,
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import FullPageLink from "@/components/ui/FullPageLink";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Produk",
    href: "/produk",
    children: [
      { name: "Mikroskop Edukasi / Student", href: "/produk?kategori=student" },
      { name: "Mikroskop Laboratorium", href: "/produk?kategori=laboratory" },
      { name: "Mikroskop Stereo Zoom", href: "/produk?kategori=stereo" },
      { name: "Mikroskop Digital / LCD", href: "/produk?kategori=digital" },
      { name: "Mikroskop Metalurgi", href: "/produk?kategori=metallurgical" },
      { name: "Mikroskop Khusus", href: "/produk?kategori=polarizing" },
      { name: "Semua Produk", href: "/produk" },
    ],
  },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
  { name: "Mikroskopedia", href: "/blog", highlight: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm">
      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Microscope className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold text-primary-950 tracking-tight">
                JualMikroskop
              </span>
              <span className="text-lg font-bold text-accent-600">.id</span>
              <p className="text-[10px] text-surface-500 -mt-0.5 font-medium tracking-wide">
                DISTRIBUTOR MIKROSKOP LABORATORIUM
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-surface-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-surface-200 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.highlight ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-accent-600 hover:text-accent-700 bg-accent-50/50 hover:bg-accent-100 rounded-lg transition-all overflow-hidden"
                >
                  <BookOpen className="w-4 h-4 text-accent-500" />
                  {item.name}
                  <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                  </span>
                </Link>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-surface-700 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <FullPageLink
              href={`/terimakasih?redirect=${encodeURIComponent("https://wa.me/6281290864275?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20mikroskop")}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent-700 bg-accent-50 hover:bg-accent-100 rounded-lg border border-accent-200 transition-all hover:shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-green-600" />
              WhatsApp
            </FullPageLink>
            <Link
              href="/kontak"
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Minta Penawaran
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-surface-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-surface-700" />
            ) : (
              <Menu className="w-6 h-6 text-surface-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-surface-200 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      item.highlight 
                        ? 'text-accent-700 bg-accent-50 hover:bg-accent-100 flex items-center gap-2 border border-accent-100' 
                        : 'text-surface-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.highlight && <BookOpen className="w-5 h-5 text-accent-500" />}
                    {item.name}
                    {item.highlight && (
                      <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-md shadow-sm">NEW</span>
                    )}
                  </Link>
                  {item.children && (
                    <div className="pl-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-surface-500 hover:text-primary-600 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-surface-200 flex flex-col gap-3 px-4">
              <FullPageLink
                href={`/terimakasih?redirect=${encodeURIComponent("https://wa.me/6281290864275")}`}
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-accent-700 bg-accent-50 rounded-lg border border-accent-200"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-600" />
                Hubungi via WhatsApp
              </FullPageLink>
              <Link
                href="/kontak"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Minta Penawaran
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
