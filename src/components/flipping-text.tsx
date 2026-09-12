"use client"

import * as React from "react"
import { MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface FlippingTextProps
    extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    text: string
}

export const FlippingText = React.forwardRef<HTMLSpanElement, FlippingTextProps>(
    ({ text, className, onMouseEnter, onMouseLeave, ...props }, ref) => {
        const [isFlipped, setIsFlipped] = React.useState(false)

        return (
            <span
                ref={ref}
                className={cn("relative inline-block overflow-hidden", className)}
                aria-label={text}
                onMouseEnter={(event) => {
                    setIsFlipped(true)
                    onMouseEnter?.(event)
                }}
                onMouseLeave={(event) => {
                    setIsFlipped(false)
                    onMouseLeave?.(event)
                }}
                {...props}
            >
                <span aria-hidden="true">
                    {[...text].map((character, index) => {
                        const content = character === " " ? "\u00a0" : character

                        return (
                            <span
                                key={`${character}-${index}`}
                                className="relative inline-block overflow-hidden"
                            >
                                <MotionConfig
                                    transition={{
                                        delay: index * 0.025,
                                        duration: 0.3,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <motion.span
                                        className="inline-block text-current"
                                        animate={{ y: isFlipped ? "-110%" : "0%" }}
                                    >
                                        {content}
                                    </motion.span>
                                    <motion.span
                                        className="absolute left-0 top-0 inline-block text-current"
                                        initial={{ y: "110%" }}
                                        animate={{ y: isFlipped ? "0%" : "110%" }}
                                    >
                                        {content}
                                    </motion.span>
                                </MotionConfig>
                            </span>
                        )
                    })}
                </span>
            </span>
        )
    }
)

FlippingText.displayName = "FlippingText"

export default FlippingText
