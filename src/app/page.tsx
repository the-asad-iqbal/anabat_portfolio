import CTASection from "@/components/cta";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div id="top" className="min-h-screen min-w-full bg-white">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <CTASection />
      <Footer />
    </div>
  );
}
