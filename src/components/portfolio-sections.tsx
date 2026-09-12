import Link from "next/link";
import { portfolio } from "@/lib/portfolio";

export function ShowreelSection() {
  return (
    <section
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em]"
      aria-labelledby="reel-heading"
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-8 [&>p]:max-w-80 [&>p]:text-[15px] [&>p]:leading-[1.85] [&>p]:text-[#72757b]">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            SHOWREEL
          </p>
          <h2 id="reel-heading">
            A feel for <span>the edit.</span>
          </h2>
        </div>
        <p>
          Story, pacing, color, and sound. A closer look at how they come
          together.
        </p>
      </div>
      {portfolio.reel ? (
        <video
          className="aspect-video w-full rounded-2xl bg-[#151b28] sm:rounded-3xl"
          controls
          playsInline
          preload="none"
          poster={portfolio.reel.poster}
          src={portfolio.reel.src}
          aria-label="Anabat’s editing showreel"
        />
      ) : (
        <div className="relative flex min-h-75 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#172338] px-5 pt-8 pb-18 text-center text-[#eaf1ff] sm:rounded-3xl lg:min-h-98 lg:p-10 [&>p]:text-[clamp(1.6rem,4vw,3rem)] [&>p]:font-medium [&>p]:tracking-[-0.04em] [&>span:first-child]:text-[#a9bbd6] [&>span:last-of-type]:mt-4 [&>span:last-of-type]:text-sm [&>span:last-of-type]:text-[#b7c5da]">
          <span className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            ANABAT / SHOWREEL
          </span>
          <p>The reel is on its way.</p>
          <span>A selection of edits will be available here soon.</span>
          <div
            className="absolute right-5 bottom-7 left-5 flex gap-1.5 sm:right-8 sm:left-8 [&>i]:h-3 [&>i]:flex-1 [&>i]:rounded-sm [&>i]:bg-[#364c6e] [&>i:nth-child(2)]:flex-2 [&>i:nth-child(2)]:bg-[#0866ff] [&>i:nth-child(4)]:flex-3"
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
    </section>
  );
}

export function WorkSection({ full = false }: { full?: boolean }) {
  return (
    <section
      id="work"
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em]"
      aria-labelledby="work-heading"
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-8 [&>p]:max-w-80 [&>p]:text-[15px] [&>p]:leading-[1.85] [&>p]:text-[#72757b]">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            SELECTED WORK
          </p>
          <h2 id="work-heading">
            Every project.
            <br />
            <span>A different story.</span>
          </h2>
        </div>
        {!full && (
          <Link
            className="mt-5 inline-flex min-h-11 max-w-full items-center gap-6 wrap-anywhere text-sm font-semibold text-[#0866ff] hover:underline hover:underline-offset-5"
            href="/work"
          >
            Explore the work ↗
          </Link>
        )}
      </div>
      {portfolio.projects.length ? (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {(full ? portfolio.projects : portfolio.projects.slice(0, 4)).map(
            (project) => (
              <article
                className="min-w-0 [&_video]:mb-6 [&_video]:aspect-video [&_video]:w-full [&_video]:rounded-2xl [&_video]:bg-[#172338] [&>p:last-child]:mt-4 [&>p:last-child]:text-sm [&>p:last-child]:leading-[1.85] [&>p:last-child]:text-[#72757b]"
                key={project.title}
              >
                <video
                  controls
                  playsInline
                  preload="none"
                  src={project.video}
                  aria-label={project.title}
                />
                <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
                  {project.category} · {project.role}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ),
          )}
        </div>
      ) : (
        <div className="grid min-w-0 grid-cols-1 gap-8 rounded-[20px] border border-[#e8e8e9] bg-[#fafafa] p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:p-10 [&_p]:mt-4 [&_p]:max-w-130 [&_p]:text-sm [&_p]:leading-[1.85] [&_p]:text-[#72757b]">
          <span className="text-xs tracking-[0.08em] text-[#0866ff]">
            01 / WORK
          </span>
          <div>
            <h3>Selected projects, coming soon.</h3>
            <p>
              I’m putting together a collection of work for this space. In the
              meantime, you can explore the kinds of edits I offer.
            </p>
            <Link
              href="/services"
              className="mt-5 inline-flex min-h-11 max-w-full items-center gap-6 wrap-anywhere text-sm font-semibold text-[#0866ff] hover:underline hover:underline-offset-5"
            >
              Explore services ↗
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export function TestimonialsSection() {
  if (!portfolio.testimonials.length) return null;
  return (
    <section
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em]"
      aria-labelledby="quotes-heading"
    >
      <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
        CLIENT NOTES
      </p>
      <h2 id="quotes-heading">In their words.</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {portfolio.testimonials.map((item) => (
          <figure
            className="min-w-0 rounded-[20px] bg-[#f5f7fb] p-6 sm:p-8 [&_blockquote]:text-xl [&_blockquote]:leading-relaxed sm:[&_blockquote]:text-2xl [&_figcaption]:mt-7 [&_figcaption]:text-sm [&_figcaption_span]:mt-1.5 [&_figcaption_span]:block [&_figcaption_span]:text-[#72757b]"
            key={item.name}
          >
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              {item.name}
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

const steps = [
  [
    "Start with the brief",
    "Tell me about the audience, the footage, and what the video needs to do. We agree on the scope before editing begins.",
  ],
  [
    "Build the first cut",
    "I work through the footage, shape the structure, and establish the pace. This is where the story takes form.",
  ],
  [
    "Refine the details",
    "We review the cut together. Clear, timestamped feedback helps focus revisions on what matters.",
  ],
  [
    "Prepare the delivery",
    "The final edit is checked and exported in the formats agreed for your platforms.",
  ],
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em] mt-8 border-y border-[#e8e8e9] lg:mt-14"
      aria-labelledby="process-heading"
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-8 [&>p]:max-w-80 [&>p]:text-[15px] [&>p]:leading-[1.85] [&>p]:text-[#72757b]">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
            HOW WE’LL WORK
          </p>
          <h2 id="process-heading">
            Clear steps.
            <br />
            <span>Room for the story.</span>
          </h2>
        </div>
        <p>
          From the first conversation to the final export, here’s what the
          process looks like.
        </p>
      </div>
      <ol className="mt-10 grid list-none grid-cols-1 gap-7 min-[440px]:grid-cols-2 lg:mt-14 lg:grid-cols-4 [&>li]:min-w-0 [&>li]:border-t [&>li]:border-[#cddbf2] [&>li]:pt-5 [&_p]:mt-4 [&_p]:text-sm [&_p]:leading-[1.85] [&_p]:text-[#72757b]">
        {steps.map(([title, copy], index) => (
          <li key={title}>
            <span className="mb-8 inline-block text-xs text-[#0866ff]">
              0{index + 1}
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section
      id="about"
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em] grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16"
      aria-labelledby="about-heading"
    >
      <div
        className="flex min-h-75 flex-col items-center justify-between rounded-[22px] bg-[#eef3fc] p-6 sm:p-8 lg:min-h-105 [&>span]:text-[10px] [&>span]:tracking-[0.13em] [&>span]:text-[#62738d] [&_small]:text-[10px] [&_small]:tracking-[0.13em] [&_small]:text-[#62738d] [&_strong]:text-[160px] [&_strong]:leading-none [&_strong]:font-semibold [&_strong]:tracking-[-0.09em] lg:[&_strong]:text-[210px] [&_strong_span]:text-[#0866ff]"
        aria-hidden="true"
      >
        <span>THE PERSON BEHIND THE EDIT</span>
        <strong>
          a<span>.</span>
        </strong>
        <small>ANABAT / VIDEO EDITOR</small>
      </div>
      <div>
        <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
          A LITTLE ABOUT ME
        </p>
        <h2 id="about-heading">
          Hi, I’m Anabat.
          <br />
          <span>I care about the cut.</span>
        </h2>
        <p className="mt-6 text-[15px] leading-[1.9] text-[#72757b]">
          I edit with a simple aim: help the story come through. That means
          knowing when to move quickly, when to leave a moment alone, and what
          to leave out.
        </p>
        <p className="mt-6 text-[15px] leading-[1.9] text-[#72757b]">
          My work covers short-form content, YouTube videos, brand films, and
          podcasts, with attention to structure, color, and sound.
        </p>
        {full ? (
          <p className="mt-6 text-[15px] leading-[1.9] text-[#72757b]">
            Have something in mind? Tell me what you’re making and what you want
            your audience to take away. That’s a good place to start.
          </p>
        ) : (
          <Link
            className="mt-5 inline-flex min-h-11 max-w-full items-center gap-6 wrap-anywhere text-sm font-semibold text-[#0866ff] hover:underline hover:underline-offset-5"
            href="/about"
          >
            More about me ↗
          </Link>
        )}
      </div>
    </section>
  );
}

const faqs = [
  [
    "What kinds of videos do you edit?",
    "Short-form content, YouTube and long-form videos, brand and product videos, and podcasts. Share your brief if you’re unsure where your project fits.",
  ],
  [
    "How is a project priced?",
    "The scope depends on the amount of footage, the complexity of the edit, the deliverables, and the deadline. These details help establish a clear quote before work starts.",
  ],
  [
    "How long will my edit take?",
    "Timing depends on the project. Include your preferred deadline in the brief so we can discuss a realistic schedule.",
  ],
  [
    "How do revisions work?",
    "The number of revision rounds is agreed as part of the scope. Consolidated, timestamped feedback keeps the review process clear.",
  ],
  [
    "How should I share footage?",
    "A link to a cloud folder is a good starting point. Keep the original files organized and include any brand assets, scripts, or reference videos.",
  ],
  [
    "Can I get different versions of the same video?",
    "Yes—include the platforms, aspect ratios, captions, and cutdowns you need in your brief so they can be scoped together.",
  ],
  [
    "What about music and project files?",
    "Mention any music, stock assets, or editable project files you need before the project begins. Licensing and handover requirements should be agreed in the scope.",
  ],
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="mx-auto w-full min-w-0 max-w-7xl scroll-mt-8 px-5 py-14 text-[#252525] sm:px-8 lg:px-12 lg:py-22 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:leading-[1.06] [&_h2]:font-semibold [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:leading-snug [&_h3]:tracking-[-0.035em] grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16"
      aria-labelledby="faq-heading"
    >
      <div>
        <p className="mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]">
          A FEW DETAILS
        </p>
        <h2 id="faq-heading">
          Before
          <br />
          <span>we begin.</span>
        </h2>
        <Link
          href="/contact"
          className="mt-5 inline-flex min-h-11 max-w-full items-center gap-6 wrap-anywhere text-sm font-semibold text-[#0866ff] hover:underline hover:underline-offset-5"
        >
          Have another question? ↗
        </Link>
      </div>
      <div>
        {faqs.map(([question, answer]) => (
          <details
            className="border-b border-[#e3e5e8] first:border-t [&_summary]:flex [&_summary]:min-h-14 [&_summary]:cursor-pointer [&_summary]:list-none [&_summary]:justify-between [&_summary]:gap-6 [&_summary]:py-6 [&_summary]:text-[15px] [&_summary]:font-medium [&_summary::-webkit-details-marker]:hidden [&_summary_span]:shrink-0 [&_summary_span]:text-xl [&_summary_span]:text-[#0866ff] [&[open]_summary_span]:rotate-45 [&>p]:pb-6 [&>p]:text-sm [&>p]:leading-[1.85] [&>p]:text-[#72757b]"
            key={question}
          >
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
