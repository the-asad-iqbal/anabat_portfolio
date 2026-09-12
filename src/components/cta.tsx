import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="start-a-project"
      className="mx-auto max-w-295 scroll-mt-8 px-5 sm:px-8 py-14 font-sans lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.14em] text-[#72757b]">
          HAVE A PROJECT IN MIND?
        </p>

        <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tighter text-[#252525]">
          Let&apos;s talk
          <br />
          <span className="text-[#0866ff]">about your edit.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[#72757b] md:text-lg">
          Share the idea, the footage, and what you need from the final video.
        </p>

        <Link
          href="/contact"
          className="group mt-9 inline-flex min-h-12 items-center justify-center gap-8 rounded-lg bg-[#0866ff] px-5 sm:px-8 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0057df] active:translate-y-0"
        >
          Start a conversation
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
