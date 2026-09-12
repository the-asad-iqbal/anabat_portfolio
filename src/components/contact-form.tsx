"use client";

import { useState } from "react";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState("");
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const brief = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${value || "Not specified"}`)
      .join("\n\n");
    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Project inquiry from ${data.get("Name")}`)}&body=${encodeURIComponent(brief)}`;
      setStatus(
        "Your email app will open with your brief. Review it and press Send there to send your inquiry.",
      );
    } else {
      const url = URL.createObjectURL(
        new Blob([brief], { type: "text/plain;charset=utf-8" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = "project-brief.txt";
      link.click();
      URL.revokeObjectURL(url);
      setStatus(
        "Your brief has been downloaded. It has not been sent to Anabat.",
      );
    }
  }
  return (
    <form
      className="min-w-0 rounded-[20px] border border-[#e8e8e9] bg-[#fafafa] p-5 sm:p-8 [&_label]:mb-6 [&_label]:block [&_label]:min-w-0 [&_label]:text-sm [&_label]:font-medium [&_label>span]:text-[#0866ff] [&_input]:mt-2.5 [&_input]:block [&_input]:min-h-12 [&_input]:w-full [&_input]:min-w-0 [&_input]:rounded-lg [&_input]:border [&_input]:border-[#dfe1e5] [&_input]:bg-white [&_input]:p-3 [&_input]:text-base [&_select]:mt-2.5 [&_select]:block [&_select]:min-h-12 [&_select]:w-full [&_select]:min-w-0 [&_select]:rounded-lg [&_select]:border [&_select]:border-[#dfe1e5] [&_select]:bg-white [&_select]:p-3 [&_select]:text-base [&_textarea]:mt-2.5 [&_textarea]:block [&_textarea]:min-h-12 [&_textarea]:w-full [&_textarea]:min-w-0 [&_textarea]:resize-y [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-[#dfe1e5] [&_textarea]:bg-white [&_textarea]:p-3 [&_textarea]:text-base"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        <label>
          Your name <span>*</span>
          <input name="Name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email address <span>*</span>
          <input
            name="Email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
          />
        </label>
        <label>
          Company or channel
          <input
            name="Company or channel"
            autoComplete="organization"
            maxLength={200}
          />
        </label>
        <label>
          Project type
          <select name="Project type" defaultValue="">
            <option value="">Select a format</option>
            <option>Short-form</option>
            <option>YouTube / long-form</option>
            <option>Brand / product</option>
            <option>Podcast</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>
        What are you making? <span>*</span>
        <textarea
          name="Project description"
          rows={5}
          required
          maxLength={3000}
          placeholder="The idea, the audience, and what you’d like the video to do."
        />
      </label>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        <label>
          Footage and final length
          <input
            name="Footage and final length"
            placeholder="e.g. 1 hour of footage, 8-minute edit"
            maxLength={200}
          />
        </label>
        <label>
          Preferred deadline
          <input name="Deadline" type="date" />
        </label>
        <label>
          Budget range
          <input
            name="Budget"
            placeholder="Include your currency"
            maxLength={100}
          />
        </label>
        <label>
          Reference or footage link
          <input
            name="Reference link"
            type="url"
            placeholder="https://"
            maxLength={500}
          />
        </label>
      </div>
      <p className="my-4 text-xs leading-[1.8] text-[#72757b]">
        {email
          ? "This opens your email app with your brief. Nothing is sent until you send that email."
          : "Online inquiries aren’t available yet. You can prepare and download your brief here; it won’t be sent."}
      </p>
      <button
        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-between gap-4 rounded-lg bg-[#0866ff] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0057df] sm:w-auto sm:gap-8"
        type="submit"
      >
        {email ? "Continue to email" : "Download your brief"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <p role="status" className="my-4 text-xs leading-[1.8] text-[#72757b]">
        {status}
      </p>
    </form>
  );
}
