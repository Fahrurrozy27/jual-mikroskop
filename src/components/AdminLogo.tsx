"use client";

import React from 'react';


export function AdminLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary-600 rounded-lg p-1.5 flex items-center justify-center">
        {/* We use an inline SVG for the microscope logo to ensure it loads perfectly in Admin */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M6 18h8"></path>
          <path d="M3 22h18"></path>
          <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
          <path d="M9 14h2"></path>
          <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
          <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
        </svg>
      </div>
      <span className="text-xl font-black text-slate-900 tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
        JualMikroskop<span className="text-primary-600">.id</span>
      </span>
    </div>
  );
}

export function AdminIcon() {
  return (
    <div className="bg-primary-600 rounded-lg p-1.5 flex items-center justify-center w-8 h-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M6 18h8"></path>
        <path d="M3 22h18"></path>
        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
        <path d="M9 14h2"></path>
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
      </svg>
    </div>
  );
}
