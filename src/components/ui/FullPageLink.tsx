"use client";

import React from "react";

interface FullPageLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

/**
 * A link component that forces a full page load (browser reload)
 * instead of Next.js client-side SPA navigation.
 * Used for /terimakasih redirect so GTM can fully initialize on page load.
 */
export default function FullPageLink({ href, children, onClick, ...props }: FullPageLinkProps) {
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        window.location.href = href;
      }}
    >
      {children}
    </a>
  );
}
