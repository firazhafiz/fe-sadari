import Image from "next/image";

const steps = [
  "Olahraga rutin 30 menit sehari.",
  "Kurangi garam, jaga tekanan darah.",
  "Kelola stres dengan meditasi, yoga.",
  "Cek tekanan darah secara berkala.",
];

export default function Tips() {
  return (
    <section className="relative w-full flex justify-center items-center px-4 py-24 bg-navy rounded-b-none overflow-hidden">
      {/* Curved top shape (no shadow) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Kurva: kiri bawah (lebih dalam), tengah sedang, kanan atas (lebih tinggi) */}
          <path d="M0,0 L100,0 L100,10 C75,15 25,22 0,35 Z" fill="#ffffff" />
        </svg>
      </div>
      {/* Texture Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/assets/texture.svg"
          alt="texture"
          fill
          className="object-cover object-left opacity-2"
          priority
        />
      </div>
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0">
        {/* Left: Logo, Title, Desc, Button */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-2 md:gap-6 max-w-md">
          <Image
            src="/assets/logo-sadari.png"
            alt="Sadari 4Life"
            width={150}
            height={150}
            className="mb-8"
            priority
          />
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
            Friendly Tips
          </h2>
          <p className="text-gray-100 font-light text-lg mb-4 text-center md:text-left">
            Cek tekanan daarahmu sekarang, untuk kesehatan di masa depan.
          </p>
          <a
            href="#order"
            className="mt-2 px-8 py-3 rounded-md bg-white text-navy text-lg font-semibold shadow hover:bg-gray-100 transition-colors"
          >
            Tes Sekarang
          </a>
        </div>
        {/* Right: Steps */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-lg">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white rounded-full px-6 py-4 shadow-md font-medium"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-navy text-white font-bold md:text-lg text-base">
                {idx + 1}
              </span>
              <span className="text-black/90 font-medium text-xs md:text-lg">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
