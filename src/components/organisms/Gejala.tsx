import Image from "next/image";

export default function Gejala() {
  return (
    <div className="lg:min-h-screen pt-20 pb-40">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="text-lg text-gray-600  tracking-wide">Kenali Gejala</p>
          <h3 className="text-5xl font-bold text-gray-800 mt-2 max-w-3xl">
            Hipertensi yang Sering Diabaikan
          </h3>
        </div>
        <div className="relative font-delius w-full flex justify-center px-40 items-center mt-4">
          <Image
            src={"/assets/gejala.svg"}
            alt="gejala"
            width={450}
            height={450}
            className="  mt-16"
          />

          {/* left */}
          <div className="py-5 px-10 absolute top-10 left-72 transform rotate-12 bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Mimisan</p>
          </div>

          <div className="py-5 px-8 absolute  left-56 transform -rotate-12  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Pusing</p>
          </div>

          <div className="py-5 px-8 absolute bottom-8 left-64 transform -rotate-4  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Sesak Nafas</p>
          </div>

          {/* right */}
          <div className="py-5 px-10 absolute top-10 right-72 transform -rotate-12  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Nyeri Dada</p>
          </div>

          <div className="py-5 px-8 absolute  right-56 transform rotate-4  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Kelelahan</p>
          </div>

          <div className="py-5 px-8 absolute bottom-8 right-64 transform rotate-6  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-2xl font-medium text-gray-800">Sakit Kepala</p>
          </div>
        </div>
      </div>
    </div>
  );
}
