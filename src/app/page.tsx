import { HeroScrollDemo } from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <Header />
      </section>
      <section>
        <HeroScrollDemo />
      </section>
    </main>
  );
}
