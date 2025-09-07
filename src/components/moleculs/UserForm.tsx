"use client";
import { useState } from "react";
import { useAnswerContext } from "@/context/answerContext";
import { FormAnswer } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar28 } from "@/components/atoms/DatePicker";

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
      <h2 className="text-xl font-extrabold text-navy mb-4">Form Data Diri</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid w-full md:max-w-none items-center gap-3">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input type="input" id="name" placeholder="Masukkan Nama Anda" />
        </div>

        <div>
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Alamat
          </label>
          <textarea
            id="alamat"
            value={formData.alamat}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, alamat: e.target.value }))
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-[1px] focus:ring-navy/80 placeholder:text-gray-400 placeholder:text-sm text-sm text-slate-800"
            placeholder="Masukkan Alamat Lengkap"
            rows={3}
          />
        </div>

        <div className="grid w-full md:max-w-none items-center gap-2">
          <Calendar28 label="Tanggal Lahir" />
        </div>

        <div className="grid w-full md:max-w-none items-center gap-3">
          <Label htmlFor="phone">No Handphone</Label>
          <Input type="text" id="phone" placeholder="628xxxxxxxxx" />
        </div>

        <button
          type="submit"
          className="w-full bg-[#F3D457] text-slate-700 py-2 px-4 rounded-sm hover:-translate-y-0.5 hover:shadow-lg cursor-pointer transition-all font-semibold mt-2"
        >
          Mulai Tes
        </button>
      </form>
    </div>
  );
}
