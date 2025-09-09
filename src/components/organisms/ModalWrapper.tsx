"use client";
import { useState } from "react";
import BannerHeader from "../moleculs/BannerHeader";
import ModalVerification from "../moleculs/ModalVerification";
import Navbar from "../moleculs/Navbar";
import ButtonScroll from "../moleculs/ScrollButton";
import Footer from "./Footer";

export default function ModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExportClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Footer onclick={handleExportClick} />
      <ModalVerification isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
