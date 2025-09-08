"use client";
import { useEffect, useRef } from "react";
import { useAnswerContext } from "@/context/answerContext";
import { useRouter } from "next/navigation";

export default function ExitConfirmModal() {
  const { showExitModal, confirmExit, cancelExit } = useAnswerContext();
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close on Escape
  useEffect(() => {
    if (!showExitModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cancelExit();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showExitModal, cancelExit]);

  if (!showExitModal) return null;

  const handleBackdropClick = () => cancelExit();
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  const handleConfirm = () => {
    // Clear any saved answers/state via context, then redirect to home
    confirmExit();
    router.push("/");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
      aria-hidden
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-title"
        aria-describedby="exit-desc"
        onClick={stop}
        className="w-full max-w-md mx-4 rounded-2xl py-6 bg-white/90 shadow-lg ring-1 ring-black/5 backdrop-saturate-150 animate-in zoom-in-95 slide-in-from-bottom-2 duration-200"
      >
        <div className="px-6 pt-6 pb-4 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-[#FF5656]"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.75 5.25a.75.75 0 1 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-1.5 9a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 id="exit-title" className="text-lg font-semibold text-gray-900">
            Keluar dari Tes?
          </h3>
          <p id="exit-desc" className="mt-2 text-sm text-gray-600">
            Semua jawaban dan data user akan dihapus. Apakah Anda yakin ingin
            keluar?
          </p>
        </div>
        <div className="px-6 pb-6 flex items-center justify-center gap-3">
          <button
            onClick={cancelExit}
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-slate-700 hover:bg-gray-100 cursor-pointer transition-all"
          >
            Batal
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded-md bg-[#FF5656] text-white hover:bg-red-400 transition-all cursor-pointer shadow"
          >
            Ya, Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
