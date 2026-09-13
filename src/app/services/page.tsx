import type { Metadata } from "next";
import Image from "next/image";
import SitePage from "@/components/site-page";
import ServicesSection from "@/components/services";
import { ProcessSection, FAQSection } from "@/components/portfolio-sections";
import CTASection from "@/components/cta";
import servicesHeroImage from "../../../public/one-editor-every-format.png";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Short-form, YouTube, brand, product, and podcast editing, built around what you are trying to say.",
};
export default function ServicesPage() {
  return (
    <SitePage>
      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-8 px-5 pt-14 pb-3 text-[#252525] sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(25rem,1.1fr)] lg:gap-4 lg:px-12 lg:pt-18 lg:pb-9">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            VIDEO EDITING SERVICES
          </p>
          <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[1.06] tracking-[-0.055em]">
            One editor.
            <br />
            <span className="text-[#0866ff]">Every format.</span>
          </h1>
          <p className="mt-7 max-w-135 leading-[1.85] text-[#72757b]">
            Fifteen-second hook or full-length feature. I shape the edit around
            what you need it to do.
          </p>
        </div>
        <Image
          src={servicesHeroImage}
          alt="A video-editing workspace connecting video, audio, typography, imagery, and motion tools"
          className="mx-auto h-auto w-full max-w-170"
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
      </div>
      <ServicesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </SitePage>
  );
}
