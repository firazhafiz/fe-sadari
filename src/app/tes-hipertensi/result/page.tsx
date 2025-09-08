"use client";
import React, { useEffect, useState } from "react";
import { Activity, Apple, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { useAnswerContext } from "@/context/answerContext";
import { hasilHipertensi } from "@/data/hasil";
import { useRouter } from "next/navigation";
import { Answer } from "@/types";
import { TbHomeMove } from "react-icons/tb";

type UserData = {
  id: number;
  nama: string;
  alamat: string | null;
  tanggal_lahir: Date | null;
  no_hp: string | null;
  answers: Answer[];
};

export default function Result() {
  const { submittedUserId, clearAllData } = useAnswerContext();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!submittedUserId) {
      // If no submitted user ID, redirect to start page
      router.push("/tes-hipertensi/start");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/answers?userId=${submittedUserId}`);
        const result = await response.json();

        if (result.success && result.data) {
          setUserData(result.data);
        } else {
          setError(result.error || "Failed to fetch user data");
        }
      } catch (err) {
        setError("Network error occurred");
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [submittedUserId, router]);

  // Calculate total score and result
  const calculateResult = () => {
    if (!userData || !userData.answers.length) return null;

    const latestAnswer = userData.answers[0];
    const totalScore = latestAnswer.details.reduce((total, detail) => total + detail.score, 0);
    const maxPossibleScore = 110;

    const percentage = Math.min((totalScore / maxPossibleScore) * 100, 100);

    // Determine result category based on percentage
    const getResultCategory = (percentage: number) => {
      if (percentage <= 20) return hasilHipertensi[0]; // Normal (0-20%)
      if (percentage <= 40) return hasilHipertensi[1]; // Pre-Hipertensi (21-40%)
      if (percentage <= 60) return hasilHipertensi[2]; // Hipertensi Tahap 1 (41-60%)
      if (percentage <= 80) return hasilHipertensi[3]; // Hipertensi Tahap 2 (61-80%)
      return hasilHipertensi[4]; // Krisis Hipertensi (>80%)
    };

    return {
      percentage,
      resultCategory: getResultCategory(percentage),
      totalScore,
    };
  };

  const result = calculateResult();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat hasil tes...</p>
        </div>
      </div>
    );
  }

  if (error || !userData || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Terjadi Kesalahan</h2>
          <p className="text-gray-600 mb-4">{error || "Data tidak ditemukan"}</p>
          <button
            onClick={() => {
              clearAllData();
              router.push("/tes-hipertensi/start");
            }}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            Mulai Tes Ulang
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-teal-50">
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
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${result.resultCategory.warna}, ${result.resultCategory.warna}dd)`,
                        }}>
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">Status Kesehatan</h3>
                      <p className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: result.resultCategory.warna }}>
                        {Math.round(result.percentage)}%
                      </p>
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                          backgroundColor: `${result.resultCategory.warna}20`,
                        }}>
                        <div
                          className="w-2 h-2 rounded-full animate-pulse"
                          style={{
                            backgroundColor: result.resultCategory.warna,
                          }}></div>
                        <span className="font-medium" style={{ color: result.resultCategory.warna }}>
                          {result.resultCategory.kategori}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center max-w-[500px]">
                  <p className="text-gray-700 leading-relaxed text-lg">{result.resultCategory.penjelasan}</p>
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
                    <h3 className="font-bold text-gray-800">{result.resultCategory.aktivitas_fisik.judul}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {result.resultCategory.aktivitas_fisik.rekomendasi.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Diet Recommendations */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 -lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Apple className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800">{result.resultCategory.diet.judul}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {result.resultCategory.diet.rekomendasi.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Things to Avoid */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 -lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-800">{result.resultCategory.avoid.judul}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {result.resultCategory.avoid.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Information */}
              {result.resultCategory.informasi_tambahan && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 text-center">
                    <strong>Informasi Tambahan:</strong> {result.resultCategory.informasi_tambahan}
                  </p>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 text-center">
                  ⚠️ <strong>Peringatan:</strong> Hasil tes ini hanya untuk screening awal dan tidak menggantikan diagnosis medis. Konsultasikan dengan dokter untuk pemeriksaan yang lebih akurat.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl  p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Jaga Kesehatan Anda</h3>
              <p className="text-gray-600 mb-6">Lakukan pemeriksaan rutin dan terapkan gaya hidup sehat untuk mempertahankan kondisi optimal Anda.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    clearAllData();
                    router.push("/tes-hipertensi/start");
                  }}
                  className="px-8 cursor-pointer py-3 bg-gradient-to-br from-teal-400 to-teal-600 text-white font-semibold rounded-md transition-all duration-300 hover:scale-105">
                  Tes Ulang
                </button>
                <button onClick={() => window.print()} className="px-8 cursor-pointer py-3 border-2 border-teal-600 text-teal-600 font-semibold rounded-md hover:bg-teal-200/20 transition-all duration-300">
                  Cetak Hasil
                </button>
                <button
                  onClick={() => {
                    clearAllData();
                    router.push("/");
                  }}
                  className="px-8 flex justify-center items-center gap-2 cursor-pointer py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-md hover:bg-gray-50 transition-all duration-300">
                  <TbHomeMove className="text-lg" />
                  Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
