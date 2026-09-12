import Link from "next/link";

export default function CTASection() {
    return (
        <section className="mx-auto max-w-295 px-6 py-24 font-[Manrope,Arial,sans-serif] md:px-12 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
                <p className="mb-6 text-xs font-medium tracking-[0.14em] text-[#72757b]">
                    YOUR FOOTAGE. OUR NEXT CHAPTER.
                </p>

                <h2 className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tighter text-[#252525]">
                    Let&apos;s make
                    <br />
                    <span className="text-[#0866ff]">something matter.</span>
                </h2>

                <p className="mx-auto mt-7 max-w-lg text-base leading-7 text-[#72757b] md:text-lg">
                    Tell me what you have in mind. We&apos;ll take it from there.
                </p>

                <Link
                    href="/contact"
                    className="group mt-9 inline-flex min-h-12 items-center justify-center gap-8 rounded-lg bg-[#0866ff] px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0057df] active:translate-y-0"
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