import CTASection from "@/components/cta";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services";
import {
  ShowreelSection,
  WorkSection,
  TestimonialsSection,
  ProcessSection,
  AboutSection,
  FAQSection,
} from "@/components/portfolio-sections";

export default function Home() {
  return (
    <div id="top" className="min-h-screen min-w-full bg-white">
      <LoadingScreen />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ShowreelSection />
        <WorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
