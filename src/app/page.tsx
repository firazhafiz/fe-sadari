import { HeroScrollDemo } from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import Gejala from "@/components/organisms/Gejala";
import ScrollButton from "@/components/moleculs/ScrollButton";
import About from "@/components/organisms/About";
import Tips from "@/components/organisms/Tips";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <Header />
        <ScrollButton />
      </section>
      <section>
        <HeroScrollDemo />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Gejala />
      </section>
      <section className="pb-40">
        <Tips />
      </section>
    </main>
  );
}
