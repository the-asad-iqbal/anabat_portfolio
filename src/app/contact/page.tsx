import type { Metadata } from "next";
import SitePage from "@/components/site-page";
import ContactForm from "@/components/contact-form";
import { contactEmail } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Prepare a video editing brief for Anabat. Share your idea, footage, timeline, and deliverables.",
};
export default function ContactPage() {
  return (
    <SitePage>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 pt-14 pb-3 text-[#252525] sm:px-8 lg:px-12 lg:pt-25 lg:pb-9 [&_h1]:text-[clamp(2.75rem,7vw,6rem)] [&_h1]:font-semibold [&_h1]:leading-[1.06] [&_h1]:tracking-[-0.055em] [&_h1_span]:text-[#0866ff] [&>p:last-child]:mt-7 [&>p:last-child]:max-w-135 [&>p:last-child]:leading-[1.85] [&>p:last-child]:text-[#72757b]">
        <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
          START A PROJECT
        </p>
        <h1>
          What are
          <br />
          <span>you making?</span>
        </h1>
        <p>
          Tell me about the idea, the footage, and where you want the video to
          go.
        </p>
      </div>
      <section
        className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em] grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-12 [&_aside_h2]:text-[32px]"
        aria-label="Project inquiry"
      >
        <aside>
          <h2>
            Start with
            <br />
            what you know.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-[#72757b]">
            You don’t need a finished brief. A few details about your project
            are enough to start shaping it.
          </p>
          <p className="mt-6 text-[15px] leading-[1.9] text-[#72757b]">
            Only your name, email, and project description are required.
          </p>
          {contactEmail && (
            <a
              className="mt-5 inline-flex min-h-11 max-w-full items-center gap-6 wrap-anywhere text-sm font-semibold text-[#0866ff] hover:underline hover:underline-offset-5"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail} ↗
            </a>
          )}
        </aside>
        <ContactForm email={contactEmail} />
      </section>
    </SitePage>
  );
}
