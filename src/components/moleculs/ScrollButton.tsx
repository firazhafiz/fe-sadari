"use client";
import Image from "next/image";
import Arrow from "../../../public/assets/arrow_up.png";
import { useEffect, useState } from "react";

export default function ButtonScroll() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
    const start = window.scrollY || window.pageYOffset;
    const duration = 1800;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      const current = Math.floor(start * (1 - eased));
      window.scrollTo(0, current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };
  return (
    <div
      className={`size-12 bg-navy rounded-full fixed bottom-5 right-5 z-50 cursor-pointer flex items-center justify-center transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClick}
    >
      <Image src={Arrow} alt="arrow" className="size-6 " />
    </div>
  );
}
