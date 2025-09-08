"use client";
import { useState } from "react";
import { useAnswerContext } from "@/context/answerContext";
import { FormAnswer } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar28 } from "@/components/atoms/DatePicker";
import { userFormSchema } from "@/validation/userForm.schema";
import * as yup from "yup";

export default function UserForm({ onComplete }: { onComplete: () => void }) {
  const { setFormAnswer } = useAnswerContext();
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    tanggal_lahir: "",
    no_hp: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using Yup
    try {
      await userFormSchema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const fieldErrors: Partial<Record<keyof typeof formData, string>> = {};
        err.inner.forEach((issue) => {
          const path = issue.path as keyof typeof formData | undefined;
          if (path && !fieldErrors[path]) fieldErrors[path] = issue.message;
        });
        setErrors(fieldErrors);
        return; // block submit
      }
    }

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
        <div className="grid w-full md:max-w-none items-center gap-1.5">
          <Label htmlFor="name">Nama Lengkap</Label>
          <Input
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
            type="input"
            id="name"
            placeholder="Masukkan Nama Anda"
          />
          {errors.nama && (
            <p className="text-xs text-red-600 mt-1">{errors.nama}</p>
          )}
        </div>

        <div className="grid gap-1.5">
          <label
            htmlFor="alamat"
            className="block text-sm font-medium text-gray-700"
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
          {errors.alamat && (
            <p className="text-xs text-red-600 mt-1">{errors.alamat}</p>
          )}
        </div>

        <div className="grid w-full md:max-w-none items-center gap-1.5">
          <Calendar28
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, tanggal_lahir: value }))
            }
            label="Tanggal Lahir"
          />
          {errors.tanggal_lahir && (
            <p className="text-xs text-red-600 mt-1">{errors.tanggal_lahir}</p>
          )}
        </div>

        <div className="grid w-full md:max-w-none items-center gap-1.5">
          <Label htmlFor="phone">No Handphone</Label>
          <Input
            type="text"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, no_hp: e.target.value }))
            }
            id="phone"
            placeholder="628xxxxxxxxx"
          />
          {errors.no_hp && (
            <p className="text-xs text-red-600 mt-1">{errors.no_hp}</p>
          )}
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
