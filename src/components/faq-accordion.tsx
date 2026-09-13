"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState } from "react";

type FAQAccordionProps = {
  items: readonly (readonly [question: string, answer: string])[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div>
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div className="border-b border-[#e3e5e8] first:border-t" key={question}>
            <h3>
              <button
                type="button"
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-[15px] font-medium"
                aria-controls={answerId}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {question}
                <motion.span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-[#0866ff]"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  +
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-label={question}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-sm leading-[1.85] text-[#72757b]">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      </div>
    </MotionConfig>
  );
}
