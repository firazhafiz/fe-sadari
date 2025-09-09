import { HeroScrollDemo } from "@/components/organisms/Hero";
import Gejala from "@/components/organisms/Gejala";
import About from "@/components/organisms/About";
import Tips from "@/components/organisms/Tips";
import TestimoniLeft from "@/components/organisms/TestimoniLeft";
import TestimoniRight from "@/components/organisms/TestimoniRight";
import TestimoniTitle from "@/components/atoms/TestimoniTitle";
import ModalWrapper from "@/components/organisms/ModalWrapper";
import Navbar from "@/components/moleculs/Navbar";
import BannerHeader from "@/components/moleculs/BannerHeader";
import ButtonScroll from "@/components/moleculs/ScrollButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-22">
      <section>
        <Navbar />
        <BannerHeader />
        <ButtonScroll />
      </section>
      <section>
        <HeroScrollDemo />
      </section>
      <section id="tentang">
        <About />
      </section>
      <section id="gejala">
        <Gejala />
      </section>
      <section id="tips" className="pb-30">
        <Tips />
      </section>
      <section id="testimonials">
        <TestimoniTitle />
      </section>
      <section>
        <TestimoniLeft />
      </section>
      <section>
        <TestimoniRight />
      </section>
      <section>
        <ModalWrapper />
      </section>
    </main>
  );
}
