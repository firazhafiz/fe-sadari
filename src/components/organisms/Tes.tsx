import Image from "next/image";
import TesForm from "../moleculs/TesForm";
import Link from "next/link";

type TesProps = {
  mobileTitleClass?: string;
  mobileTitleMaxWClass?: string;
};

export default function Tes({
  mobileTitleClass = "text-2xl",
  mobileTitleMaxWClass = "max-w-sm",
}: TesProps) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-start">
      {/* Mobile-only title at top (customizable size and max-width via props) */}
      <h1
        className={`md:hidden ${mobileTitleClass} ${mobileTitleMaxWClass} font-extrabold text-slate-900 leading-tight`}
      >
        Tes Screening Hipertensi by{" "}
        <span className="text-[#FD567E]">SADARI 4LIFE</span>
      </h1>

      <div className="flex justify-center">
        <Image
          src="/assets/flyer-tes.png"
          alt="Flyer Tes"
          width={375}
          height={540}
          className="rounded-xl shadow-sm object-cover"
          priority
        />
      </div>
      <div className="w-full max-w-xl">
        <h1 className="hidden md:block text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Tes Screening Hipertensi by{" "}
          <span className="text-[#FD567E]">SADARI 4LIFE</span>
        </h1>
        <p className="mt-3 text-slate-700 text-sm md:text-base max-w-xl">
          Tes ini dirancang untuk membantu kamu menganalisis resiko terkena
          penyakit hipertensi sejak dini.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Panduan Pengisian
          </h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-700 text-sm md:text-base">
            <li>
              Setiap peserta tes wajib mengisi form data diri terlebih dahulu.
            </li>
            <li>
              Gak ada jawaban yang benar atau salah. Isilah dengan jujur sesuai
              keadaanmu.
            </li>
            <li>Santai aja, tes ini gak diberi waktu, kok.</li>
            <li>
              Cari tempat yang nyaman dan kondusif supaya kamu lebih fokus.
            </li>
            <li>
              Jika kamu keluar di tengah tes, maka seluruh proses tes dan
              jawaban akan hilang.
            </li>
            <li>
              Hasil tes bisa kamu dapatkan setelah mengisi semua pertanyaan
              dengan lengkap.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/tes-hipertensi/start"
            className="px-6 py-3 rounded-sm border-1 border-[#0686F9] text-navy text-sm md:text-base font-semibold hover:bg-[#0686F9] hover:text-white transition-all"
          >
            Tes Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}
