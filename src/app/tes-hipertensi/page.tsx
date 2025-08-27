import BannerHeader from "@/components/moleculs/BannerHeader";
import Navbar from "@/components/moleculs/Navbar";
import Footer from "@/components/organisms/Footer";
import Tes from "@/components/organisms/Tes";

export default function TestHipertensi() {
  return (
    <main className="min-h-screen bg-white pt-22">
      <section>
        <Navbar />
      </section>
      <section>
        <BannerHeader />
      </section>
      <section>
        <Tes />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
