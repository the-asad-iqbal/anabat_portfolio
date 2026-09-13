"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ src, poster, title, className = "" }: {
  src: string;
  poster?: string;
  title: string;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const progress = duration ? Math.min(time / duration, 1) : 0;

  async function toggle() {
    const media = video.current;
    if (!media) return;
    if (!media.paused) return media.pause();
    try {
      await media.play();
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <div className={`relative isolate overflow-hidden rounded-2xl bg-[#172338] ${className}`} role="group" aria-label={title}>
      <video
        ref={video}
        src={src}
        poster={poster}
        playsInline
        preload="none"
        className="h-full w-full object-contain"
        aria-label={title}
        onPlay={() => {
          setPlaying(true);
          document.querySelectorAll("video").forEach((other) => {
            if (other !== video.current) other.pause();
          });
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onDurationChange={(event) => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
        onError={() => setError(true)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={`${playing ? "Pause" : "Play"} ${title}`}
        className="group absolute right-4 bottom-4 z-10 grid size-12 place-items-center rounded-full bg-white/85 text-[#252525] shadow-[0_3px_14px_rgb(0_0_0/18%)] backdrop-blur-sm transition-[transform,background-color] duration-200 hover:scale-105 hover:bg-white active:scale-95 sm:right-5 sm:bottom-5 motion-reduce:transition-none"
      >
        <svg aria-hidden="true" className="absolute inset-0 size-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22.5" fill="none" stroke="#d9dde5" strokeWidth="1.5" />
          <circle
            cx="24"
            cy="24"
            r="22.5"
            fill="none"
            stroke="#0866ff"
            strokeWidth="2"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="1"
            strokeDashoffset={1 - progress}
            className="transition-[stroke-dashoffset] duration-100 ease-linear"
          />
        </svg>
        <span className="relative flex size-8 items-center justify-center rounded-full border border-[#e5e7eb] bg-white">
          <PlayIcon playing={playing} />
        </span>
      </button>
      {error && <p role="status" className="absolute inset-x-3 top-3 rounded-lg bg-black/80 p-3 text-sm text-white">Couldn&apos;t play this video. <a href={src} className="underline">Open video</a></p>}
    </div>
  );
}

function PlayIcon({ playing }: { playing: boolean }) {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{playing ? <path d="M6 4h4v16H6zm8 0h4v16h-4z" /> : <path d="m8 4 12 8-12 8z" />}</svg>;
}
