import type { Metadata } from "next";
import Image from "next/image";
import SitePage from "@/components/site-page";
import { WorkSection, ShowreelSection } from "@/components/portfolio-sections";
import CTASection from "@/components/cta";
import workHeroImage from "../../../public/see-the-story-feel-the-edit.png";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore Anabat’s video editing work and showreel.",
};
export default function WorkPage() {
  return (
    <SitePage>
      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-8 px-5 pt-14 pb-3 text-[#252525] sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(25rem,1.1fr)] lg:gap-4 lg:px-12 lg:pt-18 lg:pb-9">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            THE PORTFOLIO
          </p>
          <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[1.06] tracking-[-0.055em]">
            See the story.
            <br />
            <span className="text-[#0866ff]">Feel the edit.</span>
          </h1>
          <p className="mt-7 max-w-135 leading-[1.85] text-[#72757b]">
            A space for the films, videos, and details that define my work.
          </p>
        </div>
        <Image
          src={workHeroImage}
          alt="A cinematic filmstrip flowing through edited scenes and timeline markers"
          className="mx-auto h-auto w-full max-w-170"
          priority
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
      </div>
      <WorkSection full />
      <ShowreelSection />
      <CTASection />
    </SitePage>
  );
}
