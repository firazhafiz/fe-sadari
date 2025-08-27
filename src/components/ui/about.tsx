import Image from "next/image";

export default function Aboute() {
  return (
    <div
      className=" relative lg:min-h-screen
  flex justify-between gap-20  items-start pt-16 px-40">
      <div className=" absolute top-0 left-0 h-full w-full [clip-path:polygon(0%_0,100%_0,100%_100%,0_70%)] bg-[#FCEE21] z-0"></div>

      <div className="z-10">
        <div className="h-[540px] w-[420px] bg-blue-950 rounded-[40px] overflow-hidden">
          <Image src={"/assets/about.png"} alt="hipertensi" height={540} width={420} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="z-10">
        <h2 className="font-bold text-4xl  text-slate-900 ">Apa itu Hipertensi?</h2>
        <p className="mt-4 text-slate-700 text-lg">
          Hipertensi atau tekanan darah tinggi adalah salah satu penyakit yang sering disebut sebagai
          <span className="font-semibold">“silent killer”</span>. Banyak orang tidak menyadari dirinya mengidap hipertensi karena sering kali tidak menunjukkan gejala yang jelas. Namun, kondisi ini dapat meningkatkan risiko
          <span className="font-semibold"> serangan jantung, stroke, dan kerusakan organ vital</span> jika dibiarkan tanpa penanganan.
          <br />
          <br />
          Kabar baiknya, hipertensi bisa dicegah dan dikendalikan dengan gaya hidup sehat. Mengetahui faktor risiko sejak dini adalah langkah pertama untuk melindungi diri Anda dan orang-orang yang Anda cintai.
        </p>
        <button className="mt-4 py-3 px-6 border-2 text-slate-900 hover:text-[#FCEE21] border-slate-900 hover:bg-slate-900 transition-all ease-in-out duration-300 rounded-lg font-medium cursor-pointer">Tes Sekarang</button>
      </div>
    </div>
  );
}
