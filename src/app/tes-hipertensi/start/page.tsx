"use client";
import Image from "next/image";
import { soalHipertensi } from "@/data/soal";
import { useState } from "react";

export default function Start() {
  const totalSoal = soalHipertensi.length;
  const [currentSoal, setCurrentSoal] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (currentSoal < totalSoal - 1) {
      const nextSoal = currentSoal + 1;
      setCurrentSoal(nextSoal);
      setProgress(((nextSoal + 1) / totalSoal) * 100);
    }
  };

  const handlePrev = () => {
    if (currentSoal > 0) {
      const prevSoal = currentSoal - 1;
      setCurrentSoal(prevSoal);
      setProgress(((prevSoal + 1) / totalSoal) * 100);
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-start w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-6">
      <div className="w-full max-w-3xl bg-white p-4 sm:p-6">
        {/* Logo & Title */}
        <div className="flex gap-3 sm:gap-4 items-center justify-center">
          <Image src={"/assets/logo-sadari.png"} width={64} height={64} alt="SADARI 4LIFE Logo" className="h-12 sm:h-16 w-auto" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">SADARI 4LIFE</h2>
        </div>

        {/* Konten Pertanyaan */}
        <div className="flex flex-col items-start mt-8">
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className={`bg-[#4CAF50] h-2 `} style={{ width: `${progress}%` }}></div>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            Pertanyaan ke {soalHipertensi[currentSoal].id} dari {totalSoal}
          </p>

          {/* Pertanyaan */}
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-start">{soalHipertensi[currentSoal].soal}</p>
        </div>

        {/* Pilihan Jawaban */}
        <div className="flex flex-col gap-4 mt-8">
          {soalHipertensi[currentSoal].pilihan.map((item, idx) => (
            <div key={idx} className="w-full bg-gray-200 rounded-xl py-4 sm:py-6 px-4 sm:px-6 cursor-pointer shadow-md hover:bg-slate-300 transition-all ease-in-out duration-200 text-slate-800 font-medium text-start">
              {item.text}
            </div>
          ))}
        </div>

        {/* Button Navigasi */}
        <div className="flex justify-center gap-8 sm:gap-12 mt-8">
          <div onClick={handlePrev} className="bg-navy rounded-full p-2 cursor-pointer">
            <Image src="/assets/button_arrow.png" alt="previous" width={30} height={30} className="h-6 sm:h-8 w-auto transform rotate-180" />
          </div>
          <div onClick={handleNext} className="bg-navy rounded-full p-2 cursor-pointer">
            <Image src="/assets/button_arrow.png" alt="next" width={30} height={30} className="h-6 sm:h-8 w-auto" />
          </div>
        </div>

        {/* Button keluar */}
        <div className="absolute bottom-4 right-4 mt-6">
          <button className="bg-[#FF4E4E] text-white text-sm sm:text-base cursor-pointer rounded-md px-4 sm:px-6 py-2 sm:py-3">Keluar</button>
        </div>
      </div>
    </div>
  );
}
