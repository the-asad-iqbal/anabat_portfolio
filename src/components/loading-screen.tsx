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
            className={`loading-screen ${isLeaving ? "loading-screen--leaving" : ""}`}
            role="status"
            aria-label="Loading Anabat"
        >
            <div className="loading-screen__logo" aria-hidden="true">
                <svg
                    viewBox="0 0 48 36"
                    className="loading-screen__mark"
                    focusable="false"
                >
                    <path
                        fill="currentColor"
                        d="M8 10h32l-8 16H0z"
                        transform="rotate(-25 20 18) translate(3 0)"
                    />
                </svg>
                <span className="loading-screen__wordmark">
                    anabat<span className="loading-screen__dot">.</span>
                </span>
            </div>
        </div>
    );
}
