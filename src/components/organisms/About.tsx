import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-12 lg:gap-20 items-center lg:items-start pt-8 md:pt-12 lg:py-12 px-4 md:px-8 lg:px-16 xl:px-40">
      {/* Background polygon - responsive */}
      <div className="absolute top-0 left-0 h-full w-full  [clip-path:polygon(0%_0,100%_0,100%_100%,0_85%)] md:[clip-path:polygon(0%_0,100%_0,100%_100%,0_75%)] lg:[clip-path:polygon(0%_0,100%_0,100%_100%,0_70%)] bg-[#f0f3bd] z-0"></div>

      {/* Image container - responsive */}
      <div className="z-10 flex-shrink-0">
        <div className="h-[360px] w-[300px] sm:h-[400px] sm:w-[320px] md:h-[450px] md:w-[360px] lg:h-[540px] lg:w-[420px] bg-blue-950 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] overflow-hidden mx-auto">
          <Image
            src="/assets/about.png"
            alt="hipertensi"
            height={540}
            width={420}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content container - responsive */}
      <div className="z-10 flex-1 max-w-none lg:max-w-lg xl:max-w-xl text-center lg:text-left">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight">
          Apa itu Hipertensi?
        </h2>

        <p className="mt-4 md:mt-6 text-slate-700 text-base sm:text-lg leading-relaxed">
          Hipertensi, atau tekanan darah tinggi, adalah kondisi ketika tekanan
          darah dalam pembuluh darah Anda lebih tinggi dari normal. Jika
          dibiarkan tanpa penanganan, hipertensi bisa menyebabkan stroke,
          serangan jantung, gangguan ginjal, dan masalah kesehatan lainnya.
          Hipertensi sering tidak menimbulkan gejala, itulah mengapa disebut
          “silent killer”. Banyak orang tidak tahu bahwa mereka mengalaminya
          sampai terjadi komplikasi.
        </p>

        <Link href="/tes-hipertensi">
          <button className="mt-6 md:mt-8 py-3 px-6 md:py-4 md:px-8 border border-slate-900 text-slate-900 hover:text-[#f0f3bd] hover:bg-slate-900 transition-all ease-in-out duration-300 rounded-md font-medium cursor-pointer text-sm sm:text-base focus:bg-slate-900 focus:text-[#f0f3bd]">
            Tes Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
}
