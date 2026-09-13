"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ContactMenu from "@/components/contact-menu";
import FlippingText from "@/components/flipping-text";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggleRef.current,
          ...Array.from(
            menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(
          (item): item is HTMLButtonElement | HTMLAnchorElement =>
            item !== null,
        );
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="relative z-50 mx-auto w-full max-w-7xl font-sans text-[#252525] lg:max-w-7xl">
      <div className="relative z-20 flex h-20 items-center justify-between px-5 sm:px-8 lg:h-25 lg:px-12">
        <Link
          href="/"
          aria-label="Anabat home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-1.5 text-[26px] font-bold tracking-[-1.3px]"
        >
          <span
            aria-hidden="true"
            className="inline-block rotate-[-25deg] text-[34px] text-[#0866ff] transition-transform duration-350 group-hover:rotate-[-5deg] motion-reduce:transition-none"
          >
            ▰
          </span>
          anabat
          <span className="-ml-1.5 text-[#0866ff]">.</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`py-2 text-sm font-medium transition-colors hover:text-[#0866ff] ${
                isActive(href) ? "text-[#0866ff]" : "text-[#252525]"
              }`}
            >
              <FlippingText text={label} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {!open && <ContactMenu key={pathname} />}

          <button
            ref={toggleRef}
            id="menu-toggle"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className={`group flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-colors duration-300 lg:hidden ${open ? "border-[#252525] bg-[#252525] text-white" : "border-[#e0e1e3] bg-[#fafafa] hover:border-[#c9cacc]"}`}
          >
            <span
              className={`h-px w-4.5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4.5 bg-current transition-transform duration-300 ${
                open ? "translate-y-[-3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-20 z-10 flex h-[calc(100dvh-5rem)] flex-col overflow-y-auto overscroll-contain bg-[#f6f6f4] px-5 pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] transition-[clip-path,transform,visibility] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none sm:px-8 lg:hidden ${open ? "visible translate-y-0 [clip-path:inset(0_0_0_0)] duration-500" : "invisible -translate-y-3 [clip-path:inset(0_0_100%_0)] duration-400"}`}
      >
        <p
          className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8c91] transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${open ? "translate-y-0 opacity-100 delay-150" : "-translate-y-2 opacity-0"}`}
        >
          Navigation
        </p>

        <div
          className={`border-t border-[#dfe0e1] transition-[opacity,transform] duration-250 ease-out motion-reduce:transition-none ${open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-3 opacity-0"}`}
        >
          {links.map(({ href, label }, index) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              className={`group flex items-center justify-between border-b border-[#dfe0e1] py-4 transition-colors ${
                isActive(href) ? "text-[#0866ff]" : "hover:text-[#0866ff]"
              }`}
            >
              <span className="flex items-start gap-3">
                <span className="mt-1.5 text-[10px] font-semibold tabular-nums text-[#9a9ca0]">
                  0{index + 1}
                </span>
                <span className="text-[clamp(2rem,10vw,3rem)] font-semibold leading-none tracking-[-0.055em]">
                  {label}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <div
          className={`mt-auto pt-9 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${open ? "translate-y-0 opacity-100 delay-150" : "translate-y-3 opacity-0"}`}
        >
          <p className="mb-3 max-w-60 text-sm leading-6 text-[#72757b]">
            Have a story waiting to be shaped?
          </p>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="group flex min-h-14 w-full items-center justify-between rounded-xl bg-[#0866ff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0057df]"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </Link>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-medium text-[#8a8c91]">
            <span>Independent video editor</span>
            <span>Available worldwide</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
