"use client";

import { useEffect, useState } from "react";

const HOLD_DURATION = 1400;
const EXIT_DURATION = 850;

export default function LoadingScreen() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const holdDuration = prefersReducedMotion ? 250 : HOLD_DURATION;
    const exitDuration = prefersReducedMotion ? 100 : EXIT_DURATION;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, holdDuration);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = previousOverflow;
    }, holdDuration + exitDuration);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-100 grid place-items-center overflow-hidden bg-[#0866ff] text-white transition-transform duration-850 ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:duration-100 ${isLeaving ? "-translate-y-full" : "translate-y-0"}`}
      role="status"
      aria-label="Loading Anabat"
    >
      <div
        className="flex origin-center animate-[loader-logo-arrive_700ms_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-1.5 motion-reduce:animate-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 48 36"
          className="h-auto w-[clamp(2.75rem,6vw,4.25rem)] animate-[loader-mark-rock_900ms_550ms_cubic-bezier(0.34,1.56,0.64,1)_both] motion-reduce:animate-none"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M8 10h32l-8 16H0z"
            transform="rotate(-25 20 18) translate(3 0)"
          />
        </svg>
        <span className="font-sans text-[clamp(2.35rem,6vw,4.5rem)] leading-none font-bold tracking-[-0.065em]">
          anabat
          <span className="inline-block animate-[loader-dot-pulse_650ms_650ms_ease-in-out_both] text-[#8ab7ff] motion-reduce:animate-none">
            .
          </span>
        </span>
      </div>
    </div>
  );
}
