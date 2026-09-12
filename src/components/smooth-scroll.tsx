"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.25,
      easing: (time) => 1 - Math.pow(1 - time, 4),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      anchors: {
        duration: 1.25,
        offset: 0,
      },
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
