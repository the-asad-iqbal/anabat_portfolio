import Link from "next/link";
import { AnimatedTooltip, type TooltipItem } from "./animated-tooltip";

const featuredClients: TooltipItem[] = [
  {
    id: 1,
    name: "Amra Farooq",
    designation: "@amrafarooq_",
    image: "/clients/amra-farooq.jpg",
    href: "https://www.instagram.com/amrafarooq_/",
  },
  {
    id: 2,
    name: "Josh Snow",
    designation: "@joshsnow",
    image: "/clients/josh-snow.jpg",
    href: "https://www.instagram.com/joshsnow/",
  },
  {
    id: 3,
    name: "ZWR.AI",
    designation: "@zwr.ai",
    image: "/clients/zwr-ai.jpg",
    href: "https://www.instagram.com/zwr.ai/",
  },
  {
    id: 4,
    name: "KCS Network",
    designation: "Client",
    image: "/clients/kcs-network.jpg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative isolate mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center justify-center overflow-hidden px-5 py-20 font-sans sm:px-8 lg:min-h-[calc(100svh-6.25rem)] lg:px-12">
      <HeroCurve />
      <HeroCurve mirrored />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#252525]">
          You shot it.
          <br />
          <span className="text-[#0866ff]">
            Let&apos;s make people watch it.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#72757b] md:text-lg">
          I&apos;m Anabat. I edit videos that hit their beat, hold the hook, and
          don&apos;t waste a single second of your footage.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/work"
            className="group inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-8 rounded-lg bg-[#0866ff] px-5 sm:px-8 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0057df] active:translate-y-0"
          >
            See the work
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </Link>

          <Link
            href="/#services"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-[#e8e8e9] bg-[#f0f0f1] px-5 sm:px-8 text-sm font-semibold text-[#252525] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e7e7eb] active:translate-y-0"
          >
            How I work
          </Link>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5">
          <AnimatedTooltip items={featuredClients} />
          <span className="text-xs font-medium tracking-wide text-[#72757b]">
            +10 more
          </span>
        </div>
      </div>
    </section>
  );
}

function HeroCurve({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute top-1/2 hidden h-auto w-[430px] -translate-y-1/2 text-[#0866ff] lg:block ${
        mirrored ? "-right-8 scale-x-[-1]" : "-left-8"
      }`}
      width="571"
      height="560"
      viewBox="0 0 571 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 10C232 25 356 105 329 215C309 296 217 319 143 358C48 408 73 513 291 550"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.2"
      />
    </svg>
  );
}
