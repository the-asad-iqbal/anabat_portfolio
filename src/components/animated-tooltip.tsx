"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export type TooltipItem = {
  id: number;
  name: string;
  designation: string;
  image: string;
  href?: string;
};

export function AnimatedTooltip({ items }: { items: TooltipItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);
  const rotate = useSpring(useTransform(x, [-100, 100], [-22, 22]), {
    stiffness: 100,
    damping: 15,
  });
  const translateX = useSpring(useTransform(x, [-100, 100], [-38, 38]), {
    stiffness: 100,
    damping: 15,
  });

  useEffect(
    () => () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const { left, width } = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX;
    animationFrameRef.current = requestAnimationFrame(() => {
      x.set(pointerX - left - width / 2);
    });
  };

  return (
    <div className="flex items-center justify-center" aria-label="Featured clients">
      {items.map((item) => {
        const avatar = (
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={`${item.name} profile`}
            className="relative !m-0 h-10 w-10 rounded-full border-2 border-white bg-[#eef1f5] object-cover object-top !p-0 shadow-sm transition duration-300 group-hover:z-30 group-hover:scale-105 sm:h-12 sm:w-12"
          />
        );

        return (
          <div
            className="group relative -mr-3 last:mr-0 sm:-mr-4 sm:last:mr-0"
            key={item.id}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(item.id)}
            onBlur={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  role="tooltip"
                  initial={{ opacity: 0, y: 14, scale: 0.75 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 14 },
                  }}
                  exit={{ opacity: 0, y: 12, scale: 0.75 }}
                  style={{ translateX, rotate, whiteSpace: "nowrap" }}
                  className="absolute -top-[4.75rem] left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-[#171717] px-4 py-2.5 text-xs shadow-xl"
                >
                  <div className="absolute inset-x-8 -bottom-px h-px bg-gradient-to-r from-transparent via-[#0866ff] to-transparent" />
                  <div className="relative text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-white/65">
                    {item.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${item.name} on Instagram`}
              >
                {avatar}
              </a>
            ) : (
              avatar
            )}
          </div>
        );
      })}
    </div>
  );
}
