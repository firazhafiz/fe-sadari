import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f0f3bd] py-12 mt-12">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <Link href="/">
            <p className="flex items-center gap-2 mb-4">
              <Image
                src={"/assets/logo-sadari.png"}
                width={32}
                height={32}
                className="h-8 w-auto"
                alt="SADARI 4LIFE Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-navy">
                SADARI 4LIFE
              </span>
            </p>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed">
            Platform edukasi kesehatan yang membantu Anda memahami, mencegah,
            dan mengenali risiko{" "}
            <span className="font-semibold">hipertensi</span>. Kami percaya
            bahwa langkah kecil hari ini bisa menyelamatkan masa depan Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Navigasi
          </h2>
          <ul className="text-gray-600 font-medium space-y-3">
            <li>
              <Link href="/tes-hipertensi" className="hover:underline">
                Tes Hipertensi
              </Link>
            </li>
            <li>
              <a href="#tentang" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="#gejala" className="hover:underline">
                Gejala
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:underline">
                Tips Pencegahan
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:underline">
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* CTA singkat */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
            Ayo Mulai Sehat
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Jangan tunggu sampai terlambat. Cek risiko hipertensi Anda sekarang
            dan temukan cara sederhana untuk hidup lebih sehat.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src={"/assets/instagram.png"}
              width={28}
              height={30}
              className="h-auto"
              alt="SADARI 4LIFE Logo"
            />
            <p className="text-gray-600 text-sm">sadari4life </p>
          </div>
          <div className="flex items-center gap-2 ">
            <Image
              src={"/assets/email.png"}
              width={28}
              height={32}
              className="h-auto"
              alt="SADARI 4LIFE Logo"
            />
            <p className="text-gray-600 text-sm">sadari4life@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        © 2025 SADARI 4LIFE. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
