import React from "react";
import { Heart, Activity, Apple, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Result() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}></div>
      </div>

      <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          {/* Logo & Title */}
          <div className="flex gap-3 sm:gap-4 items-center justify-center mb-8">
            <Image src={"/assets/logo-sadari.png"} width={64} height={64} alt="SADARI 4LIFE Logo" className="h-12 sm:h-16 w-auto" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">SADARI 4LIFE</h2>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-3xl  overflow-hidden mb-4">
            {/* Result Header */}
            <div className=" px-8 pt-6">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-8 h-8 text-gray-700" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">Hasil Tes Anda</h2>
              </div>
            </div>

            <div className="p-8">
              {/* Main Result Card */}
              <div className="flex flex-col items-center  lg:flex-row justify-center gap-4 mb-10 ">
                {/* Status Card */}
                <div className="">
                  <div className="relative  rounded-2xl p-8 text-center group -xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-2xl opacity-0 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Status Kesehatan</h3>
                      <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">89%</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 font-medium">Normal</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center max-w-[500px]">
                  <p className="text-gray-700 leading-relaxed text-lg ">
                    Selamat! Tekanan darah Anda saat ini berada pada rentang normal, dan risiko hipertensi Anda rendah. Hasil ini menunjukkan bahwa sistem kardiovaskular Anda berfungsi dengan baik.
                  </p>
                </div>
              </div>

              {/* Recommendations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Physical Activity */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 -lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800">Aktivitas Fisik</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Olahraga ringan–sedang minimal 150 menit/minggu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Jalan cepat, bersepeda, berenang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Peregangan setiap hari</span>
                    </li>
                  </ul>
                </div>

                {/* Diet Recommendations */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 -lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Apple className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800">Pola Makan</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Konsumsi sayur, buah, dan biji-bijian</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Protein rendah lemak (ikan, ayam tanpa kulit)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Batasi garam {"<"} 5 gram/hari</span>
                    </li>
                  </ul>
                </div>

                {/* Things to Avoid */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 -lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800">Hindari</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Makanan cepat saji tinggi garam dan lemak</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Minuman manis berlebihan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Rokok dan alkohol</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl  p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jaga Kesehatan Anda</h3>
              <p className="text-gray-600 mb-6">Lakukan pemeriksaan rutin dan terapkan gaya hidup sehat untuk mempertahankan kondisi optimal Anda.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 cursor-pointer to-teal-600 text-white font-semibold rounded-xl -lg transition-all duration-300 hover:scale-105">Tes Ulang</button>
                <Link href={"/"} className="px-8 py-3 border-2 border-green-500 cursor-pointer text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300">
                  Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
