"use client";
import { useState } from "react";
import { useAnswerContext } from "@/context/answerContext";
import { FormAnswer } from "@/types";

export default function UserForm({ onComplete }: { onComplete: () => void }) {
  const { setFormAnswer } = useAnswerContext();
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    tanggal_lahir: "",
    no_hp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newFormAnswer: FormAnswer = {
      user: {
        nama: formData.nama,
        alamat: formData.alamat || undefined,
        tanggal_lahir: formData.tanggal_lahir || undefined,
        no_hp: formData.no_hp || undefined,
      },
      hasil_persen: 0,
      answers: [],
    };

    setFormAnswer(newFormAnswer);
    onComplete();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Diri</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="nama"
            required
            value={formData.nama}
            onChange={(e) => setFormData((prev) => ({ ...prev, nama: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-300 focus:text-slate-400"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        <div>
          <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-1">
            Alamat
          </label>
          <textarea
            id="alamat"
            value={formData.alamat}
            onChange={(e) => setFormData((prev) => ({ ...prev, alamat: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-300 focus:text-slate-400"
            placeholder="Masukkan alamat lengkap"
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-gray-700 mb-1">
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={(e) => setFormData((prev) => ({ ...prev, tanggal_lahir: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-300 focus:text-slate-400"
          />
        </div>

        <div>
          <label htmlFor="no_hp" className="block text-sm font-medium text-gray-700 mb-1">
            Nomor HP
          </label>
          <input
            type="tel"
            id="no_hp"
            value={formData.no_hp}
            onChange={(e) => setFormData((prev) => ({ ...prev, no_hp: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-slate-300 focus:text-slate-400"
            placeholder="08xxxxxxxxxx"
          />
        </div>

        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors font-medium">
          Mulai Tes
        </button>
      </form>
    </div>
  );
}
