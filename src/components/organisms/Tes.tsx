"use client";
import Image from "next/image";
import TesForm from "../moleculs/TesForm";
import Link from "next/link";
import { Button } from "../ui/button";
import ExportButton from "../atoms/ButtonExport";

type TesProps = {
  mobileTitleClass?: string;
  mobileTitleMaxWClass?: string;
};

export default function Tes({ mobileTitleClass = "text-2xl", mobileTitleMaxWClass = "max-w-sm" }: TesProps) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-start">
      {/* Mobile-only title at top (customizable size and max-width via props) */}
      <h1 className={`md:hidden ${mobileTitleClass} ${mobileTitleMaxWClass} font-extrabold text-slate-900 leading-tight`}>
        Tes Screening Hipertensi by <span className="text-[#FD567E]">SADARI 4LIFE</span>
      </h1>

      <div className="flex justify-center">
        <Image src="/assets/flyer-tes.png" alt="Flyer Tes" width={375} height={540} className="rounded-xl shadow-sm object-cover" priority />
      </div>
      <div className="w-full max-w-xl">
        <h1 className="hidden md:block text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Tes Screening Hipertensi by <span className="text-[#FD567E]">SADARI 4LIFE</span>
        </h1>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Tes ini bertujuan untuk</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 text-sm md:text-base">
            <li>Mendeteksi risiko hipertensi sejak dini .</li>
            <li>Memberikan edukasi tentang faktor-faktor yang mempengaruhi tekanan darah.</li>
            <li>Membantu Anda mengambil langkah awal untuk menjaga kesehatan.</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">Cara Mengikuti Tes</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 text-sm md:text-base">
            <li>Masukan data diri Anda.</li>
            <li>Jawab 20 pertanyaan dengan jujur dan sesuai kondisi Anda.</li>
            <li>
              Setelah selesai, Anda akan mendapatkan:
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>Persentase risiko hipertensi.</li>
                <li>Kategori tekanan darah Anda.</li>
                <li> Saran gaya hidup dan tindak lanjut.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <Link href="/tes-hipertensi/start" className="px-6 py-3 rounded-sm border-1 border-navy text-navy text-sm md:text-base font-semibold hover:bg-navy hover:text-white transition-all">
            Tes Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
