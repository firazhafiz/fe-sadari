"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { FormAnswer } from "@/types";

type AnswerContextType = {
  // User data
  formAnswer: FormAnswer | null;
  setFormAnswer: (formAnswer: FormAnswer | null) => void;

  saveAnswer: (questionId: number, answer: string, score: number) => void;
  getAnswer: (questionId: number) => string | null;

  // Exit confirmation
  showExitModal: boolean;
  setShowExitModal: (show: boolean) => void;
  confirmExit: () => void;
  cancelExit: () => void;

  // Clear all data
  clearAllData: () => void;
};

const AnswerContext = createContext<AnswerContextType | undefined>(undefined);

export const useAnswerContext = () => {
  const context = useContext(AnswerContext);
  if (!context) {
    throw new Error("useAnswerContext must be used within an AnswerProvider");
  }
  return context;
};

export const AnswerProvider = ({ children }: { children: ReactNode }) => {
  const [formAnswer, setFormAnswer] = useState<FormAnswer | null>(null);
  const [showExitModal, setShowExitModal] = useState(false);

  const saveAnswer = (questionId: number, answer: string, score: number) => {
    if (formAnswer) {
      const updatedAnswers = [...formAnswer.answers];
      const existingAnswerIndex = updatedAnswers.findIndex((a) => a.soalId === questionId);

      if (existingAnswerIndex >= 0) {
        // kalau jawaban sudah ada → update
        updatedAnswers[existingAnswerIndex] = {
          ...updatedAnswers[existingAnswerIndex],
          jawaban: answer,
          score: score,
        };
      } else {
        // kalau belum ada → tambahkan
        updatedAnswers.push({
          id: Date.now(), // Use timestamp for unique ID
          soalId: questionId,
          jawaban: answer,
          score: score,
        });
      }
      setFormAnswer({
        ...formAnswer,
        answers: updatedAnswers,
      });
    }
  };

  const getAnswer = (questionId: number) => {
    if (formAnswer) {
      const existingAnswer = formAnswer.answers.find((a) => a.soalId === questionId);
      return existingAnswer?.jawaban || null;
    }
    return null;
  };

  const clearAllData = () => {
    setFormAnswer(null);
  };

  const confirmExit = () => {
    clearAllData();
    setShowExitModal(false);
    // You can add navigation logic here if needed
  };

  const cancelExit = () => {
    setShowExitModal(false);
  };

  const value: AnswerContextType = {
    formAnswer,
    getAnswer,
    saveAnswer,
    setFormAnswer,
    showExitModal,
    setShowExitModal,
    confirmExit,
    cancelExit,
    clearAllData,
  };

  return <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>;
};
