import Link from "next/link";
import FlippingText from "@/components/flipping-text";
import { contactEmail } from "@/lib/portfolio";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl overflow-hidden pt-10 font-sans text-[#252525]">
      <div className="grid gap-10 px-5 sm:px-8 pb-10 md:grid-cols-[1.5fr_1fr] md:gap-16 lg:px-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#72757b]">
            Your next story
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            Let’s make something worth watching.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[#72757b]">
            Have footage ready or an idea taking shape? Tell me what you’re
            working on, and let’s find the story in it.
          </p>
          <Link
            href="/contact"
            className="group mt-5 inline-flex min-h-11 items-center gap-4 text-sm font-semibold text-[#0866ff] transition-colors hover:text-[#0057df]"
          >
            <FlippingText text="Let’s talk" />
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="md:pt-1">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-[#72757b]">
            Explore
          </p>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm md:min-w-56"
          >
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="w-fit py-1 font-medium transition-colors hover:text-[#0866ff]"
              >
                <FlippingText text={label} />
              </Link>
            ))}
          </nav>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-6 block w-fit max-w-full wrap-anywhere text-sm text-[#0866ff] hover:underline"
          >
            {contactEmail}
          </a>
          <p className="mt-8 max-w-xs text-sm leading-6 text-[#72757b]">
            Independent editing. Intentional storytelling. Thoughtful cuts,
            color, and sound—from the first frame to the final feeling.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-5 sm:px-8 pt-6 text-xs text-[#72757b] sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <span>© {new Date().getFullYear()} Anabat. All rights reserved.</span>

        <a
          href="#top"
          className="group inline-flex w-fit items-center gap-3 font-medium transition-colors hover:text-[#0866ff]"
        >
          <FlippingText text="Back to top" />

          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-1"
          >
            ↑
          </span>
        </a>
      </div>

      <Link
        href="/"
        aria-label="Anabat home"
        className="mt-8 block w-full px-5 sm:px-8 pb-6 lg:px-12"
      >
        <svg
          viewBox="0 0 1000 220"
          className="block h-auto w-full select-none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient
              id="footer-wordmark-fade"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.24" />
              <stop offset="100%" stopColor="white" stopOpacity="0.03" />
            </linearGradient>
            <mask id="footer-wordmark-mask">
              <rect
                width="1000"
                height="220"
                fill="url(#footer-wordmark-fade)"
              />
            </mask>
          </defs>
          <g mask="url(#footer-wordmark-mask)">
            <path d="M0 89 170 10 170 111 0 190Z" fill="#0866ff" />
            <text
              x="210"
              y="190"
              fontFamily="var(--font-manrope), Arial, sans-serif"
              fontSize="240"
              fontWeight="700"
              letterSpacing="-14"
              textLength="780"
              lengthAdjust="spacingAndGlyphs"
              fill="#252525"
            >
              anabat<tspan fill="#0866ff">.</tspan>
            </text>
          </g>
        </svg>
      </Link>
    </footer>
  );
}
