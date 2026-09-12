import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function NotFound() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#f7f7f5] font-(family-name:--font-manrope) text-[#252525]">
      <Navbar />

      <main className="relative isolate mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl grid-cols-1 items-center gap-2 px-6 pt-6 pb-28 md:grid-cols-[minmax(0,0.92fr)_minmax(28rem,1.08fr)] md:gap-[clamp(2rem,5vw,6rem)] md:px-12 md:py-[clamp(2rem,6vw,5.5rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-45 bg-[linear-gradient(#dedfdf_1px,transparent_1px),linear-gradient(90deg,#dedfdf_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(circle_at_73%_49%,black,transparent_61%)]"
        />

        <section className="order-2 z-10 -mt-11 md:order-1 md:mt-0">
          <h1 className="max-w-[11ch] text-[clamp(3.25rem,15vw,5rem)] leading-[0.94] font-semibold tracking-[-0.065em] md:text-[clamp(3.4rem,6vw,6rem)]">
            This frame went
            <br />
            <span className="text-[#0866ff]">off script.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[clamp(0.95rem,1.3vw,1.08rem)] leading-7 text-[#71747a]">
            The page you&apos;re looking for was moved, deleted, or perhaps never
            made the final cut.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/"
              className="group inline-flex min-h-13.5 items-center justify-center gap-9 rounded-xl bg-[#0866ff] px-5 text-[0.82rem] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0057df] motion-reduce:transform-none"
            >
              Back to home
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none">↗</span>
            </Link>
            <Link
              href="/work"
              className="group hidden min-h-13.5 items-center justify-center gap-9 rounded-xl border border-[#dddfe1] bg-white/65 px-5 text-[0.82rem] font-bold transition duration-200 hover:-translate-y-0.5 hover:bg-[#252525] hover:text-white min-[421px]:inline-flex motion-reduce:transform-none"
            >
              View selected work
              <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">→</span>
            </Link>
          </div>
        </section>

        <div className="relative min-h-88 perspective-[1000px] md:min-h-[clamp(27rem,52vw,37rem)]" aria-hidden="true">
          <span className="absolute inset-[14%_5%] animate-pulse rounded-full bg-[#0866ff]/20 blur-[70px] motion-reduce:animate-none" />
          <div className="absolute top-1/2 left-1/2 w-[min(34rem,94vw)] -translate-x-1/2 -translate-y-1/2 -rotate-2 animate-[pulse_5.5s_ease-in-out_infinite] overflow-hidden rounded-2xl motion-reduce:animate-none md:w-[min(44rem,64vw)] md:rounded-3xl">
            <Image
              src="/404_image.png"
              alt=""
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 800px) 94vw, 55vw"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </main>

      <footer className="relative mx-auto flex max-w-7xl justify-between border-t border-[#e0e1e2] px-6 py-5 text-[0.62rem] font-semibold tracking-[0.1em] text-[#888b90] uppercase md:absolute md:right-0 md:bottom-0 md:left-0 md:px-12 md:py-6">
        <span>Independent video editor</span>
        <span className="hidden md:inline">Karachi · Available worldwide</span>
      </footer>
    </div>
  );
}
