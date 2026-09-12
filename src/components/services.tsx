const styles: Record<string, string> = {
    section:
        "mx-auto w-full max-w-7xl scroll-mt-8 px-5 pt-14 pb-8 text-[#252525] sm:px-8 lg:px-12 lg:pt-16",
    heading:
        "mb-9 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end md:gap-10 [&_h2]:text-[clamp(2rem,5vw,4.5rem)] [&_h2]:font-semibold [&_h2]:leading-[1.02] [&_h2]:tracking-[-0.055em] [&_h2_span]:text-[#0866ff]",
    eyebrow: "mb-6 text-[11px] font-medium tracking-[0.14em] text-[#72757b]",
    intro: "max-w-90 text-[15px] leading-[1.8] text-[#72757b] md:max-w-75",
    stack: "relative isolate",
    card: "relative mb-8 grid min-w-0 grid-cols-1 gap-6 rounded-[18px] border border-[#e8e8e9] bg-[#fafafa] p-5 shadow-[0_-12px_32px_-24px_rgb(37_37_37/16%)] last:mb-0 focus-within:z-1 sm:p-6 lg:mb-12 lg:min-h-115 lg:grid-cols-2 lg:gap-12 lg:rounded-3xl lg:pl-12 [@media(min-width:1024px)_and_(min-height:760px)]:sticky [@media(min-width:1024px)_and_(min-height:760px)]:top-10 motion-reduce:static",
    copy: "flex min-w-0 flex-col items-start justify-center lg:py-5 [&_h3]:text-[clamp(1.5rem,2.8vw,2.25rem)] [&_h3]:font-semibold [&_h3]:leading-[1.15] [&_h3]:tracking-[-0.045em]",
    number:
        "mb-5 text-xs font-semibold text-[#0866ff] tabular-nums lg:mb-8 [&_span]:ml-1.5 [&_span]:font-normal [&_span]:text-[#72757b]",
    description: "mt-4 max-w-98 text-sm leading-[1.85] text-[#72757b] lg:mt-5",
    formats:
        "mt-5 mb-4 flex list-none flex-wrap gap-2 lg:mt-6 lg:mb-7 [&_li]:rounded-md [&_li]:border [&_li]:border-[#e3e5e8] [&_li]:px-2.5 [&_li]:py-1.5 [&_li]:text-xs [&_li]:text-[#62666c]",
    link: "inline-flex min-h-11 items-center justify-between gap-5 text-sm font-semibold text-[#0866ff] [&_span]:shrink-0 [&_span]:text-lg hover:underline hover:underline-offset-4",
    visual:
        "flex min-w-0 flex-col justify-between overflow-hidden rounded-[14px] border border-[#e2e9f5] bg-[#edf3ff] p-4 sm:p-6",
    visualMeta:
        "flex justify-between text-[10px] tracking-[0.12em] text-[#63799c]",
    preview: "grid min-h-40 flex-1 items-center py-4 lg:min-h-50 lg:py-6",
    frames: "mx-auto flex w-full max-w-85 items-center justify-center gap-3",
    frame:
        "relative aspect-[9/14] w-[26%] translate-y-2 -rotate-8 rounded-lg border border-[#c0d3f4] bg-linear-145 from-[#e0ebff] to-[#b1ceff] [&>span]:absolute [&>span]:top-2.5 [&>span]:left-2.5 [&>span]:text-[9px] [&>span]:text-[#587aac] [&:nth-child(2)]:z-1 [&:nth-child(2)]:translate-y-0 [&:nth-child(2)]:rotate-0 [&:nth-child(2)]:border-[#0866ff] [&:nth-child(2)]:bg-[#0866ff] [&:nth-child(2)]:bg-none [&:nth-child(2)]:shadow-[0_16px_28px_-16px_#0866ff80] [&:nth-child(2)>span]:text-[#c7dcff] [&:nth-child(3)]:rotate-8",
    play: "absolute inset-0 grid place-items-center text-[22px] text-white",
    visualLabel:
        "mb-4 text-center text-xs font-medium tracking-tight text-[#40608e] lg:mb-6 lg:text-sm",
    timeline: "relative border-t border-[#cddcf3] pt-3.5",
    track:
        "flex gap-1 [&_i]:h-4 [&_i]:flex-1 [&_i]:rounded-sm [&_i]:bg-[#99bfff] [&_i:nth-child(2)]:flex-[1.7] [&_i:nth-child(2)]:bg-[#0866ff] [&_i:nth-child(3)]:flex-[0.6]",
    audioTrack:
        "mt-1 h-2 rounded-xs bg-[repeating-linear-gradient(90deg,#aec8ec_0_2px,#dce7f8_2px_5px)]",
    playhead:
        "absolute top-2 -bottom-1 left-[42%] w-px bg-[#252525] before:absolute before:-top-0.5 before:-left-0.75 before:size-1.75 before:bg-[#252525] before:[clip-path:polygon(0_0,100%_0,50%_100%)]",
    short: "",
    long: "[&_[data-frame]]:aspect-[9/20] [&_[data-frame]]:w-[13%] [&_[data-frame]]:translate-y-0 [&_[data-frame]]:rotate-0 [&_[data-frame]:nth-child(2)]:aspect-[16/10] [&_[data-frame]:nth-child(2)]:w-[70%]",
    brand:
        "bg-[#f0f1f4]! border-[#e5e6e9]! [&_[data-frame]]:aspect-square [&_[data-frame]]:w-[24%] [&_[data-frame]]:rounded-xl [&_[data-frame]:nth-child(2)]:w-[42%]",
    podcast: "",
    waveform:
        "flex h-24 items-center justify-center gap-1 lg:h-38 lg:gap-1.25 [&_i]:w-1 [&_i]:min-w-0 [&_i]:rounded [&_i]:bg-[#0866ff] [&_i:nth-child(3n)]:bg-[#8ab7ff]",
};

const services = [
    {
        title: "Short-form editing",
        description:
            "Make the first seconds count. Reels, Shorts, and TikToks shaped with strong hooks, clean captions, and a pace that keeps people watching.",
        formats: ["Reels & TikToks", "YouTube Shorts", "Content repurposing"],
        label: "Small format. Big impression.",
        kind: "short",
    },
    {
        title: "YouTube & long-form",
        description:
            "Give your story room to breathe. From talking-head videos to documentaries, I bring structure, thoughtful cuts, and sound that holds it all together.",
        formats: [
            "YouTube videos",
            "Talking-head edits",
            "Documentary-style films",
        ],
        label: "A story worth staying for.",
        kind: "long",
    },
    {
        title: "Brand & product videos",
        description:
            "Put what you do in the best light. Polished edits for product demos, reviews, and ads, with considered color, clear messaging, and purposeful motion.",
        formats: ["Product demos", "Social ads", "Reviews & testimonials"],
        label: "Every frame, on brand.",
        kind: "brand",
    },
    {
        title: "Podcast editing",
        description:
            "Keep the conversation flowing. Clean audio, seamless camera cuts, and shareable highlights turn your recording into an episode ready to publish.",
        formats: ["Full episodes", "Multicam editing", "Highlight clips"],
        label: "Good conversations. Great cuts.",
        kind: "podcast",
    },
];

function EditVisual({ kind, label }: { kind: string; label: string }) {
    return (
        <div className={`${styles.visual} ${styles[kind]}`} aria-hidden="true">
            <div className={styles.visualMeta}>
                <span>{kind === "short" ? "9:16" : "16:9"}</span>
            </div>
            <div className={styles.preview}>
                {kind === "podcast" ? (
                    <div className={styles.waveform}>
                        {Array.from({ length: 35 }, (_, index) => (
                            <i
                                key={index}
                                style={{
                                    height: `${18 + ((index * 17 + (index % 5) * 13) % 68)}%`,
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.frames}>
                        <div data-frame className={styles.frame}>
                            <span>01</span>
                        </div>
                        <div data-frame className={styles.frame}>
                            <span>02</span>
                            <div className={styles.play}>▶</div>
                        </div>
                        <div data-frame className={styles.frame}>
                            <span>03</span>
                        </div>
                    </div>
                )}
            </div>
            <p className={styles.visualLabel}>{label}</p>
            <div className={styles.timeline}>
                <div className={styles.track}>
                    <i />
                    <i />
                    <i />
                    <i />
                </div>
                <div className={styles.audioTrack} />
                <div className={styles.playhead} />
            </div>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={styles.section}
        >
            <div className={styles.heading}>
                <div>
                    <p className={styles.eyebrow}>WHAT I CAN DO FOR YOU</p>
                    <h2 id="services-heading">
                        Your footage.
                        <br />
                        <span>The right edit.</span>
                    </h2>
                </div>
                <p className={styles.intro}>
                    From a fifteen-second hook to the full story. Editing that fits your
                    format, and feels like you.
                </p>
            </div>
            <div className={styles.stack}>
                {services.map((service, index) => (
                    <article
                        key={service.kind}
                        className={styles.card}
                        aria-labelledby={`service-${service.kind}`}
                    >
                        <div className={styles.copy}>
                            <span className={styles.number}>
                                0{index + 1}
                                <span> / 04</span>
                            </span>
                            <h3 id={`service-${service.kind}`}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            <ul className={styles.formats}>
                                {service.formats.map((format) => (
                                    <li key={format}>{format}</li>
                                ))}
                            </ul>
                            <a
                                href="/contact"
                                className={styles.link}
                                aria-label={`Start a project: ${service.title}`}
                            >
                                Let’s talk about your edit <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                        <EditVisual kind={service.kind} label={service.label} />
                    </article>
                ))}
            </div>
        </section>
    );
}
