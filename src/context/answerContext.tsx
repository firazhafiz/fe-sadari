"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { FormAnswer, CreateAnswerRequest, ApiResponse, CreateAnswerResponse } from "@/types";

type AnswerContextType = {
  // User data
  formAnswer: FormAnswer | null;
  setFormAnswer: (formAnswer: FormAnswer | null) => void;
  submittedUserId: number | null;
  setSubmittedUserId: (userId: number | null) => void;

  saveAnswer: (questionId: number, answer: string, score: number) => void;
  getAnswer: (questionId: number) => string | null;

  // Submit answers to API
  submitAnswers: () => Promise<{ success: boolean; data?: CreateAnswerResponse; error?: string }>;

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
  const [submittedUserId, setSubmittedUserId] = useState<number | null>(null);
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

  const submitAnswers = async (): Promise<{ success: boolean; data?: CreateAnswerResponse; error?: string }> => {
    if (!formAnswer || !formAnswer.user || formAnswer.answers.length === 0) {
      return {
        success: false,
        error: "No answers to submit",
      };
    }

    try {
      const requestData: CreateAnswerRequest = {
        user: {
          nama: formAnswer.user.nama,
          alamat: formAnswer.user.alamat,
          tanggal_lahir: formAnswer.user.tanggal_lahir,
          no_hp: formAnswer.user.no_hp,
        },
        hasil_persen: formAnswer.hasil_persen,
        details: formAnswer.answers.map((answer) => ({
          soalId: answer.soalId,
          jawaban: answer.jawaban,
          score: answer.score,
        })),
      };

      const response = await fetch("/api/answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const result: ApiResponse<CreateAnswerResponse> = await response.json();

      if (result.success && result.data) {
        // Store the submitted user ID and clear form data
        setSubmittedUserId(result.data.user.id || null);
        setFormAnswer(null);
        return {
          success: true,
          data: result.data,
        };
      } else {
        return {
          success: false,
          error: result.error || "Failed to submit answers",
        };
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      return {
        success: false,
        error: "Network error occurred",
      };
    }
  };

  const clearAllData = () => {
    setFormAnswer(null);
    setSubmittedUserId(null);
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
    submittedUserId,
    setSubmittedUserId,
    submitAnswers,
    showExitModal,
    setShowExitModal,
    confirmExit,
    cancelExit,
    clearAllData,
  };

  return <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>;
};
