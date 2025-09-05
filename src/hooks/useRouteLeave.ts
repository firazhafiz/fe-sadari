import { useEffect } from "react";
import { useAnswerContext } from "@/context/answerContext";

export const useRouteLeave = () => {
  const { setShowExitModal, formAnswer } = useAnswerContext();

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Check if user is in the middle of a quiz
      if (formAnswer && formAnswer.answers.length > 0) {
        e.preventDefault();
        e.returnValue = "Semua jawaban akan hilang jika Anda meninggalkan halaman ini.";
        return e.returnValue;
      }
    };

    const handlePopState = (e: PopStateEvent) => {
      // Check if user is in the middle of a quiz
      if (formAnswer && formAnswer.answers.length > 0) {
        e.preventDefault();
        setShowExitModal(true);
        // Prevent navigation by pushing the current state back
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    // Add event listeners
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    // Push initial state to prevent back navigation
    if (formAnswer && formAnswer.answers.length > 0) {
      window.history.pushState(null, "", window.location.pathname);
    }

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [setShowExitModal, formAnswer]);
};
