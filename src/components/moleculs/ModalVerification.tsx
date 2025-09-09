"use client";
import { ArrowDownToLine } from "lucide-react";
import { useState } from "react";

export default function ModalVerification({ isOpen, onClose }: { isOpen: boolean; onClose?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email dan password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setLoading(false);
        const err = await res.json();
        setError(err.message || "Email atau password salah");
        return;
      }

      // ambil csv sebagai blob
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      // buat link download
      const a = document.createElement("a");
      a.href = url;
      a.download = "hasil-tes.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setLoading(false);
      setError("");
      setPassword("");
      setEmail("");

      // close modal kalau sukses
      onClose?.();
    } catch (error) {
      setError("Terjadi kesalahan saat mengunduh CSV");
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setError("");
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 mx-4">
        <h2 className="text-xl font-semibold text-center mb-4 text-slate-800">Verifikasi Admin</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-800 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy placeholder:text-slate-400"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-slate-800">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-800 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy placeholder:text-slate-400"
              placeholder="Masukkan password"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mt-8">{error}</p>}

          <div className="flex justify-between gap-3 mt-8">
            <button type="button" onClick={handleCancel} className="w-1/2 cursor-pointer bg-gray-300 text-gray-800 rounded-lg py-2 hover:bg-gray-400 transition">
              Batal
            </button>
            <button type="submit" className="w-1/2 bg-navy text-white rounded-lg py-2 hover:bg-navy/90 cursor-pointer transition">
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span>Unduh</span>
                  <ArrowDownToLine className="w-4 h-4" />
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
