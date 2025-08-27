"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      className={`w-full fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4"
        // style={{ paddingTop: "18px", paddingBottom: "18px" }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo-sadari.png"
            alt="SADARI 4LIFE Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-lg text-navy font-bold tracking-wide">
            SADARI 4LIFE
          </span>
        </div>
        <div className="flex items-center gap-8 text-md text-slate-800">
          <Link href="#tes" className="hover:opacity-80 transition-opacity">
            Tes
          </Link>
          <Link href="#tentang" className="hover:opacity-80 transition-opacity">
            Tentang
          </Link>
          <Link href="#gejala" className="hover:opacity-80 transition-opacity">
            Gejala
          </Link>
          <Link href="#tips" className="hover:opacity-80 transition-opacity">
            Tips
          </Link>
          <Link
            href="#testimonials"
            className="hover:opacity-80 transition-opacity"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
}
