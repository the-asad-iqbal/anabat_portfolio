import type { Metadata } from "next";
import SitePage from "@/components/site-page";
import { AboutSection, ProcessSection } from "@/components/portfolio-sections";
import CTASection from "@/components/cta";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Anabat and learn about the approach behind the edit.",
};
export default function AboutPage() {
  return (
    <SitePage>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 pt-14 pb-3 text-[#252525] sm:px-8 lg:px-12 lg:pt-25 lg:pb-9 [&_h1]:text-[clamp(2.75rem,7vw,6rem)] [&_h1]:font-semibold [&_h1]:leading-[1.06] [&_h1]:tracking-[-0.055em] [&_h1_span]:text-[#0866ff] [&>p:last-child]:mt-7 [&>p:last-child]:max-w-135 [&>p:last-child]:leading-[1.85] [&>p:last-child]:text-[#72757b]">
        <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
          ABOUT ANABAT
        </p>
        <h1>
          Thought goes into
          <br />
          <span>every frame.</span>
        </h1>
        <p>
          Editing is a series of small decisions. Together, they change how a
          story feels.
        </p>
      </div>
      <AboutSection full />
      <ProcessSection />
      <CTASection />
    </SitePage>
  );
}
