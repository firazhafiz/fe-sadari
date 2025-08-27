"use client";
import Image from "next/image";
import Arrow from "../../../public/assets/arrow_up.png";
import { useEffect, useState } from "react";

export default function ButtonScroll() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.top,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`size-12 bg-navy rounded-full fixed bottom-5 right-5 z-50 cursor-pointer flex items-center justify-center transition-opacity duration-500 ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={handleClick}>
      <Image src={Arrow} alt="arrow" className="size-6 " />
    </div>
  );
}
