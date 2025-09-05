"use client";
import { useAnswerContext } from "@/context/answerContext";

export default function ExitConfirmModal() {
  const { showExitModal, confirmExit, cancelExit } = useAnswerContext();

  if (!showExitModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl px-6 py-6 shadow-lg max-w-md mx-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Keluar dari Tes?</h3>
          <p className="text-gray-600 mb-6">Semua jawaban dan data user akan dihapus. Apakah Anda yakin ingin keluar?</p>

          <div className="flex gap-3 justify-center">
            <button onClick={cancelExit} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">
              Batal
            </button>
            <button onClick={confirmExit} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              Ya, Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
