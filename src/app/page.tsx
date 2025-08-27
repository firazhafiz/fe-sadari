import { HeroScrollDemo } from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import Aboute from "@/components/ui/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <Header />
      </section>
      <section>
        <HeroScrollDemo />
      </section>
      <section>
        <Aboute />
      </section>
    </main>
  );
}
