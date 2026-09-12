import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center justify-center px-6 py-20 font-[Manrope,Arial,sans-serif] md:px-12">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#252525]">
                    Good footage.
                    <br />
                    <span className="text-[#0866ff]">Unforgettable stories.</span>
                </h1>

                <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#72757b] md:text-lg">
                    I turn your footage into films that feel. Thoughtful cuts, beautiful
                    color, and sound that stays.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/work"
                        className="group inline-flex min-h-12 items-center justify-center gap-8 rounded-lg bg-[#0866ff] px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0057df] active:translate-y-0"
                    >
                        Explore the work

                        <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                            ↗
                        </span>
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#e8e8e9] bg-[#f0f0f1] px-6 text-sm font-semibold text-[#252525] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e7e7eb] active:translate-y-0"
                    >
                        Behind the edit
                    </Link>
                </div>
            </div>
        </section>
    );
}