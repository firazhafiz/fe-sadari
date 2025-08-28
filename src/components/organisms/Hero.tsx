"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Link from "next/link";

export function HeroScrollDemo() {
  const overlayPosition: React.CSSProperties = {
    top: "32%",
    right: "0%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-extralight text-slate-800">
              Selamat datang di <br />
              <span className="text-4xl md:text-[6rem] text-[#FD567E] font-bold mt-1 leading-none">SADARi 4LIFE</span>
            </h1>
          </>
        }>
        <div className="relative">
          <img src={`/assets/flyer-tes.png`} alt="hero" height={720} width={880} className="mx-auto rounded-2xl object-cover h-full object-left-top" draggable={false} />
          <Link href={"/tes-hipertensi"} className="absolute z-10 inline-flex items-center justify-center rounded-full bg-[#FD567E] px-6 py-3 text-white shadow-lg hover:opacity-90 transition-opacity" style={overlayPosition}>
            Tes Sekarang
          </Link>
        </div>
      </ContainerScroll>
    </div>
  );
}
