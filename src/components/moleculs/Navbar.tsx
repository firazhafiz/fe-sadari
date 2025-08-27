"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#tes", label: "Tes" },
    { href: "#tentang", label: "Tentang" },
    { href: "#gejala", label: "Gejala" },
    { href: "#tips", label: "Tips" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <>
      <nav className={`w-full fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image src="/assets/logo-sadari.png" alt="SADARI 4LIFE Logo" width={48} height={48} priority />
            <span className="text-lg text-navy font-bold tracking-wide">SADARI 4LIFE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-md text-slate-800">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-80 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMobileMenu} />

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Image src="/assets/logo-sadari.png" alt="SADARI 4LIFE Logo" width={32} height={32} priority />
              <span className="text-sm text-navy font-bold tracking-wide">SADARI 4LIFE</span>
            </div>
            <button onClick={closeMobileMenu} className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`px-6 py-4 text-lg text-slate-800 hover:bg-gray-50 hover:text-navy transition-colors border-b border-gray-50 ${index === navLinks.length - 1 ? "border-b-0" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer (Optional) */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-sm text-gray-500">© 2024 SADARI 4LIFE</p>
          </div>
        </div>
      </div>
    </>
  );
}
