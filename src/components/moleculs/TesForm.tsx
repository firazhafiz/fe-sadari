"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar28 } from "@/components/atoms/DatePicker";

type TesFormData = {
  fullName: string;
  phone: string;
  birthDate: string;
  address: string;
};

export default function TesForm() {
  const [form, setForm] = useState<TesFormData>({
    fullName: "",
    phone: "",
    birthDate: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="name">Nama Lengkap</Label>
        <Input type="input" id="name" placeholder="Masukkan Nama Anda" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="phone">No Handphone</Label>
        <Input type="text" id="phone" placeholder="628xxxxxxxxx" />
      </div>
      <div className="grid w-full items-center gap-2">
        <Calendar28 label="Tanggal Lahir" placeholder="Pilih tanggal lahir" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="address">Alamat</Label>
        <Input type="text" id="address" placeholder="Jl.xxxx" />
      </div>
    </form>
  );
}
