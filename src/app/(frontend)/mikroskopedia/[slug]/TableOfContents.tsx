"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

type TOCItem = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-surface-200 shadow-sm sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
      <h3 className="text-lg font-bold text-surface-900 mb-6 border-b border-surface-100 pb-4 flex items-center gap-2">
        <List className="w-5 h-5 text-primary-600" />
        Daftar Isi
      </h3>
      <nav className="flex flex-col gap-3 text-sm">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition-colors block line-clamp-2 leading-snug \${
              item.level === 3 ? "pl-4 text-surface-500" : "font-medium text-surface-700"
            } \${
              activeId === item.id ? "text-primary-600 font-bold" : "hover:text-primary-600"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
