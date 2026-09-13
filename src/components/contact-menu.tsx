"use client";

import { useEffect, useId, useRef, useState } from "react";
import { contactEmail } from "@/lib/portfolio";

const whatsappUrl = "https://api.whatsapp.com/send?phone=923260971496";
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent("Video editing project inquiry")}`;

function Icon({ kind }: { kind: "chat" | "mail" | "copy" | "check" }) {
  if (kind === "chat") return (
    <svg aria-hidden="true" className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.6 5.96L.02 24l6.26-1.64a11.9 11.9 0 0 0 5.77 1.47h.01C18.64 23.83 24 18.48 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.06 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.9-9.92a9.85 9.85 0 0 1 7.02 2.91A9.85 9.85 0 0 1 22 11.91c0 5.47-4.45 9.91-9.94 9.91Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.01-1.03 2.48s1.06 2.88 1.2 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
  if (kind === "mail") return (
    <svg aria-hidden="true" className="shrink-0" width="20" height="20" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M2 20h4V9L0 4.5V18a2 2 0 0 0 2 2" />
      <path fill="#34A853" d="M18 20h4a2 2 0 0 0 2-2V4.5L18 9" />
      <path fill="#EA4335" d="M6 9v-5l6 4.5L18 4v5l-6 4.5" />
      <path fill="#FBBC04" d="M18 4v5l6-4.5V4a2 2 0 0 0-3.2-1.6" />
      <path fill="#C5221F" d="M0 4v.5L6 9V4L3.2 2.4A2 2 0 0 0 0 4" />
    </svg>
  );
  return (
    <svg aria-hidden="true" className="shrink-0" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {kind === "check" ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="13" rx="3" /><path d="M15 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2" /></>}
    </svg>
  );
}

export default function ContactMenu() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(""), 3500);
    return () => window.clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus("Email copied!");
    } catch {
      setStatus("Couldn’t copy. Please try again.");
    }
  }

  const row = "flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left text-sm font-medium text-[#36383d] transition-colors duration-150 hover:bg-[#f0f5ff] hover:text-[#0866ff] focus-visible:bg-[#f0f5ff] focus-visible:outline-offset-[-2px] motion-reduce:transition-none";

  return (
    <div ref={root} className="relative" onBlur={(event) => {
      // A click on panel padding can blur the button without moving focus.
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }} onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        event.stopPropagation();
        setOpen(false);
        trigger.current?.focus();
      }
    }}>
      <button ref={trigger} type="button" aria-expanded={open} aria-controls={id}
        onClick={() => { setOpen(!open); setStatus(""); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setOpen(true);
            requestAnimationFrame(() => panel.current?.querySelector<HTMLElement>("a, button:not(:disabled)")?.focus());
          }
        }}
        className={`group inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-4 text-[13px] font-semibold text-white transition-[background-color,border-color,box-shadow] duration-200 sm:gap-4 sm:px-5 sm:text-sm motion-reduce:transition-none ${open ? "border-[#0866ff] bg-[#0866ff] shadow-[0_4px_14px_#0866ff25]" : "border-[#252525] bg-[#252525] hover:border-[#0866ff] hover:bg-[#0866ff] hover:shadow-[0_4px_14px_#0866ff20]"}`}>
        Let’s talk
        <span className={`flex size-5 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-45" : "group-hover:rotate-90"}`}>
          <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>

      <div ref={panel} id={id} inert={!open} className={`absolute right-0 top-full z-30 mt-3 w-[min(18rem,calc(100vw-6rem))] origin-top-right rounded-2xl border border-[#e9eaed] bg-white p-2 shadow-[0_12px_40px_-12px_#17253b30] transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-1 scale-[0.98] opacity-0"}`}>
        <ul className="space-y-1">
          <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={row}><Icon kind="chat" />Chat on WhatsApp<span aria-hidden="true" className="ml-auto text-[#9a9ca0]">↗</span></a></li>
          <li><a href={gmailUrl} target="_blank" rel="noopener noreferrer" className={row}><Icon kind="mail" />Mail via Gmail<span aria-hidden="true" className="ml-auto text-[#9a9ca0]">↗</span></a></li>
          <li className="mt-1 border-t border-[#f0f0f2] pt-1"><button type="button" onClick={copyEmail} aria-label={`Copy email address ${contactEmail}`} className={`${row} cursor-pointer justify-between gap-2 text-xs`}><span className="min-w-0 break-all">{contactEmail}</span><span className={status === "Email copied!" ? "text-[#168548]" : "text-[#8a8c91]"}><Icon kind={status === "Email copied!" ? "check" : "copy"} /></span></button></li>
        </ul>
        <p role="status" className={status && status !== "Email copied!" ? "px-3 py-2 text-xs text-[#72757b]" : "sr-only"}>{status}</p>
      </div>
    </div>
  );
}
