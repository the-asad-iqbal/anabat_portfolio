"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
        };

        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [open]);

    return (
        <header className="relative z-50 mx-auto max-w-7xl font-[Manrope] text-[#252525] md:max-w-7xl">
            <div className="relative z-20 flex h-20 items-center justify-between px-6 md:h-25 md:px-12">
                <Link
                    href="/"
                    aria-label="Cutframe home"
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

                <nav aria-label="Main navigation" className="hidden gap-8 md:flex">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            aria-current={isActive(href) ? "page" : undefined}
                            className={`py-2 text-sm font-medium transition-colors hover:text-[#0866ff] ${isActive(href) ? "text-[#0866ff]" : "text-[#252525]"
                                }`}
                        >
                            <FlippingText text={label} />
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="group hidden min-h-11 items-center gap-5 rounded-lg border border-[#e8e8e9] bg-[#f0f0f1] px-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[#0866ff] hover:text-[#f0f0f1] active:translate-y-0 md:inline-flex motion-reduce:transform-none"
                >
                    Let’s talk
                    <span
                        aria-hidden="true"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    >
                        ↗
                    </span>
                </Link>

                <button
                    ref={toggleRef}
                    id="menu-toggle"
                    type="button"
                    aria-label={open ? "Close navigation" : "Open navigation"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                    onClick={() => setOpen((current) => !current)}
                    className={`group flex size-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-colors duration-300 md:hidden ${open ? "border-[#252525] bg-[#252525] text-white" : "border-[#e0e1e3] bg-[#fafafa] hover:border-[#c9cacc]"}`}
                >
                    <span
                        className={`h-px w-4.5 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`h-px w-4.5 bg-current transition-transform duration-300 ${open ? "translate-y-[-3.5px] -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            <nav
                ref={menuRef}
                id="mobile-navigation"
                aria-label="Mobile navigation"
                aria-hidden={!open}
                className={`fixed inset-x-0 bottom-0 top-20 z-10 flex flex-col overflow-y-auto bg-[#f6f6f4] px-6 pb-7 pt-7 transition duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
            >
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8c91]">
                    Navigation
                </p>

                <div className="border-t border-[#dfe0e1]">
                {links.map(({ href, label }, index) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(href) ? "page" : undefined}
                            tabIndex={open ? 0 : -1}
                            className={`group flex items-center justify-between border-b border-[#dfe0e1] py-4 transition-colors ${isActive(href) ? "text-[#0866ff]" : "hover:text-[#0866ff]"
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
                            <span aria-hidden="true" className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-auto pt-9">
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
                        <span aria-hidden="true" className="text-lg transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </Link>

                    <div className="mt-5 flex items-center justify-between text-[11px] font-medium text-[#8a8c91]">
                        <span>Independent video editor</span>
                        <span>Available worldwide</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
