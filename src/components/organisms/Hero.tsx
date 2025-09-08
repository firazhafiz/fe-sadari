"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Link from "next/link";

type HeroProps = {
  mobileButtonClass?: string;
  mobileButtonPosition?: React.CSSProperties;
};

export function HeroScrollDemo({
  mobileButtonClass = "px-5 py-2.5 text-sm",
  mobileButtonPosition = {
    top: "31%",
    right: "-7%",
    transform: "translate(-50%, -50%)",
  },
}: HeroProps) {
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
            <h1 className="md:text-4xl text-2xl font-extralight text-slate-800">
              Selamat datang di <br />
              <span className="text-5xl md:text-8xl text-[#FD567E] font-bold mt-1 leading-none">
                SADARi 4LIFE
              </span>
            </h1>
          </>
        }
      >
        <div className="relative">
          <img
            src={`/assets/flyer-tes.png`}
            alt="hero"
            height={720}
            width={880}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
          {/* Desktop button (md and up) */}
          <Link
            href={"/tes-hipertensi"}
            className="absolute z-10 hidden md:inline-flex items-center justify-center rounded-full bg-[#FD567E] px-6 py-3 text-white shadow-lg hover:opacity-90 transition-opacity"
            style={overlayPosition}
          >
            Tes Sekarang
          </Link>
          {/* Mobile button (below md) - customizable */}
          <Link
            href={"/tes-hipertensi"}
            className={`absolute z-10 inline-flex md:hidden items-center justify-center rounded-full text-xs bg-[#FD567E] text-white shadow-lg hover:opacity-90 transition-opacity ${mobileButtonClass}`}
            style={mobileButtonPosition}
          >
            Tes Sekarang
          </Link>
        </div>
      </ContainerScroll>
    </div>
  );
}
