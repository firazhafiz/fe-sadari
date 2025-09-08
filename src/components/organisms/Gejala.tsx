import Image from "next/image";

export default function Gejala() {
  return (
    <div className="lg:min-h-screen pt-30 pb-8">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl">
          <p className="text-base md:text-lg text-gray-600 tracking-wide">
            Kenali Gejala
          </p>
          <h3 className="text-xl max-w-md sm:text-3xl md:max-w-lg md:text-3xl lg:text-5xl font-bold text-gray-800 mt-2 leading-tight">
            Hipertensi yang Sering Diabaikan
          </h3>
        </div>
        <div className="relative font-delius w-full flex justify-center px-0 md:px-20 lg:px-40 items-center mt-4">
          <Image
            src={"/assets/gejala.svg"}
            alt="gejala"
            width={450}
            height={450}
            className=" h-[200px] w-[200px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]  mt-16"
          />

          {/* left */}
          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute top-10 left-5 md:left-24 lg:left-72 transform rotate-10 bg-white border rounded-xl lg:rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Mimisan
            </p>
          </div>

          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute left-4 md:left-16 lg:left-56 transform -rotate-12  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Pusing
            </p>
          </div>

          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute bottom-8 left-2 md:left-24 lg:left-64 transform -rotate-4  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Sesak Nafas
            </p>
          </div>

          {/* right */}
          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute top-10 right-5 md:right-24 lg:right-72 transform -rotate-12  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Nyeri Dada
            </p>
          </div>

          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute  right-4 md:right-9 lg:right-56 transform rotate-4  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Kelelahan
            </p>
          </div>

          <div className="py-1 px-3 md:py-3 md:px-5 lg:py-5 lg:px-10 absolute bottom-8 right-2 md:right-12 lg:right-64 transform rotate-6  bg-white border rounded-2xl shadow-navy shadow-md/30">
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-800">
              Sakit Kepala
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
