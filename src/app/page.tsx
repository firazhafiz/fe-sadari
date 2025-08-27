import { HeroScrollDemo } from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import Aboute from "@/components/ui/about";
import Gejala from "@/components/ui/Gejala";
import ScrollButton from "@/components/moleculs/ScrollButton";

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
        <Aboute />
      </section>
      <section>
        <Gejala />
      </section>
    </main>
  );
}
