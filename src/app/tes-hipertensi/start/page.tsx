"use client";
import Image from "next/image";
import { soalHipertensi } from "@/data/soal";
import { useState, useEffect } from "react";
import { useAnswerContext } from "@/context/answerContext";
import ExitConfirmModal from "@/components/moleculs/ExitConfirmModal";
import { useRouteLeave } from "@/hooks/useRouteLeave";
import UserForm from "@/components/moleculs/UserForm";
import TestResult from "@/components/moleculs/TestResult";

export default function Start() {
  const { setShowExitModal, formAnswer, saveAnswer, getAnswer } = useAnswerContext();
  const totalSoal = soalHipertensi.length;
  const [currentSoal, setCurrentSoal] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useRouteLeave();

  useEffect(() => {
    if (formAnswer) {
      setShowTest(true);
    }
  }, [formAnswer]);

  // Update selected answer when current question changes
  useEffect(() => {
    const currentAnswer = getAnswer(soalHipertensi[currentSoal].id);
    if (currentAnswer) {
      const answerIndex = soalHipertensi[currentSoal].pilihan.findIndex((p) => p.text === currentAnswer);
      setSelectedAnswer(answerIndex >= 0 ? answerIndex : null);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentSoal, getAnswer]);

  // Reset modal state when question changes
  useEffect(() => {
    setShowModal(false);
  }, [currentSoal]);

  const selectAnswer = (index: number) => {
    saveAnswer(soalHipertensi[currentSoal].id, soalHipertensi[currentSoal].pilihan[index].text, soalHipertensi[currentSoal].pilihan[index].score);
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
      return;
    }

    if (currentSoal < totalSoal - 1) {
      setCurrentSoal(currentSoal + 1);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000);
      return;
    }
    handleSubmitAnswers();
  };

  const handlePrev = () => {
    if (currentSoal > 0) {
      setCurrentSoal(currentSoal - 1);
    }
  };

  // Calculate progress based on answered questions
  const calculateProgress = () => {
    if (!formAnswer) return 0;
    const answeredCount = formAnswer.answers.length;
    return (answeredCount / totalSoal) * 100;
  };

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    return selectedAnswer !== null;
  };

  const handleExit = () => {
    setShowExitModal(true);
  };

  const handleSubmitAnswers = () => {
    // Here you would typically send the data to your API
    // Show the test result
    setShowResult(true);
  };

  // Show user form if no user data
  if (!showTest) {
    return (
      <div className="min-h-screen flex justify-center items-start w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        <div className="w-full max-w-3xl">
          {/* Logo & Title */}
          <div className="flex gap-3 sm:gap-4 items-center justify-center mb-8">
            <Image src={"/assets/logo-sadari.png"} width={64} height={64} alt="SADARI 4LIFE Logo" className="h-12 sm:h-16 w-auto" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">SADARI 4LIFE</h2>
          </div>

          <UserForm onComplete={() => setShowTest(true)} />
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex justify-center items-start w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-6">
        <div className="w-full">
          {/* Logo & Title */}
          <div className="flex gap-3 sm:gap-4 items-center justify-center mb-8">
            <Image src={"/assets/logo-sadari.png"} width={64} height={64} alt="SADARI 4LIFE Logo" className="h-12 sm:h-16 w-auto" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">SADARI 4LIFE</h2>
          </div>

          <TestResult />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex justify-center items-start w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-6">
      <div className="w-full max-w-3xl bg-white p-4 sm:p-6">
        {/* Logo & Title */}
        <div className="flex gap-3 sm:gap-4 items-center justify-center">
          <Image src={"/assets/logo-sadari.png"} width={64} height={64} alt="SADARI 4LIFE Logo" className="h-12 sm:h-16 w-auto" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">SADARI 4LIFE</h2>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col items-start mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-[#4CAF50] h-2 transition-all duration-300 ease-in-out" style={{ width: `${calculateProgress()}%` }}></div>
          </div>
          <div className="flex justify-between w-full mt-2">
            <p className="text-xs sm:text-sm text-gray-600">
              Pertanyaan ke {currentSoal + 1} dari {totalSoal}
              {currentSoal === totalSoal - 1 && <span className="ml-2 text-green-600 font-medium">(Pertanyaan Terakhir)</span>}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {formAnswer?.answers.length || 0} dari {totalSoal} terjawab
            </p>
          </div>

          {/* Answer Progress */}
          {/* <AnswerProgress /> */}

          {/* Pertanyaan */}
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-800 leading-relaxed text-start">{soalHipertensi[currentSoal].soal}</p>
        </div>

        {/* Pilihan Jawaban */}
        <div className="flex flex-col gap-4 mt-8">
          {soalHipertensi[currentSoal].pilihan.map((item, idx) => (
            <div
              key={idx}
              onClick={() => selectAnswer(idx)}
              className={`w-full rounded-xl py-4 sm:py-6 px-4 sm:px-6 cursor-pointer shadow-md transition-all ease-in-out duration-200 font-medium text-start border-2 ${
                selectedAnswer === idx ? "bg-[#4CAF50] text-white border-[#4CAF50] shadow-lg scale-[1.02]" : "bg-gray-200 hover:bg-slate-300 text-slate-800 border-transparent hover:border-gray-300"
              }`}>
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswer === idx ? "border-white bg-white" : "border-gray-400"}`}>
                  {selectedAnswer === idx && <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>}
                </div>
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Button Navigasi */}
        <div className="flex justify-center gap-8 sm:gap-12 mt-8">
          <button onClick={handlePrev} disabled={currentSoal === 0} className={`rounded-full p-2 transition-all duration-200 ${currentSoal === 0 ? "bg-gray-300 cursor-not-allowed opacity-50" : "bg-navy cursor-pointer hover:bg-blue-800"}`}>
            <Image src="/assets/button_arrow.png" alt="previous" width={30} height={30} className="h-6 sm:h-8 w-auto transform rotate-180" />
          </button>

          {currentSoal === totalSoal - 1 ? (
            // Submit button for last question
            <button
              onClick={handleSubmit}
              disabled={!isCurrentQuestionAnswered()}
              className={`px-8 py-3 rounded-full transition-all duration-200 font-medium ${
                !isCurrentQuestionAnswered() ? "bg-gray-300 cursor-not-allowed opacity-50 text-gray-500" : "bg-green-500 cursor-pointer hover:bg-green-600 text-white shadow-lg"
              }`}
              title="Selesai dan Lihat Hasil">
              Selesai
            </button>
          ) : (
            // Next button for other questions
            <button
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered()}
              className={`rounded-full p-2 transition-all duration-200 ${!isCurrentQuestionAnswered() ? "bg-gray-300 cursor-not-allowed opacity-50" : "bg-navy cursor-pointer hover:bg-blue-800"}`}
              title="Lanjut">
              <Image src="/assets/button_arrow.png" alt="next" width={30} height={30} className="h-6 sm:h-8 w-auto" />
            </button>
          )}
        </div>

        {/* Button keluar */}
        <div className="absolute bottom-4 right-4 mt-6">
          <button onClick={handleExit} className="bg-[#FF4E4E] text-white text-sm sm:text-base cursor-pointer rounded-md px-4 sm:px-6 py-2 sm:py-3">
            Keluar
          </button>
        </div>
      </div>

      {/* Modal Warning */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-xl px-6 py-4 shadow-lg mx-4 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <p className="text-red-600 font-semibold">Silakan pilih jawaban terlebih dahulu!</p>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      <ExitConfirmModal />
    </div>
  );
}
