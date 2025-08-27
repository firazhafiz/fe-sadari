"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4"
        style={{ paddingTop: "18px", paddingBottom: "18px" }}
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
