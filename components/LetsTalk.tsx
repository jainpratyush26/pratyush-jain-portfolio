"use client";
import { useState } from "react";

const USE_CASES = [
  {
    id: "uae",
    label: "Expanding into UAE",
    sublabel: "Market entry, GTM and local partnerships",
    icon: "🇦🇪",
  },
  {
    id: "growth",
    label: "Growth & P&L Advisory",
    sublabel: "Revenue strategy, unit economics and scaling",
    icon: "↗",
  },
  {
    id: "ai",
    label: "Integrating AI into Operations",
    sublabel: "Practical AI adoption for legacy businesses",
    icon: "◈",
  },
  {
    id: "opportunity",
    label: "A New Opportunity",
    sublabel: "Exec roles, board positions or partnerships",
    icon: "◎",
  },
  {
    id: "other",
    label: "Something Else",
    sublabel: "Tell me more in your message",
    icon: "···",
  },
];

const topicLabel = (id: string) =>
  USE_CASES.find((u) => u.id === id)?.label ?? "General enquiry";

export default function LetsTalk() {
  const [selected, setSelected] = useState<string | null>(null);
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      topic: selected ? topicLabel(selected) : null,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="letstalk" className="py-28 px-6 bg-[#f2f0eb]">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-black/40 text-base max-w-md mx-auto leading-relaxed">
            Two ways to reach me — pick what works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-start">

          {/* ── Path 1: Topmate ── */}
          <div className="bg-white border border-black/[0.07] rounded-2xl p-7 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="3" stroke="white" strokeWidth="1.8"/>
                  <path d="M3 9h18" stroke="white" strokeWidth="1.8"/>
                  <path d="M8 2v4M16 2v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M8 14h4M8 17.5h2.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#111] text-base">Schedule a call</h3>
                <p className="text-black/40 text-xs mt-0.5">Pick a time that works for you</p>
              </div>
            </div>

            <p className="text-black/50 text-sm leading-relaxed mb-6">
              Book a slot directly on my Topmate — whether it&apos;s a quick intro, a focused advisory session,
              or a mentorship conversation. No back-and-forth needed.
            </p>

            <div className="space-y-2.5 mb-7">
              {[
                "30-min intro call — free",
                "Strategy & advisory sessions",
                "Career & mentorship calls",
                "1:1 deep-dives on specific challenges",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-black/55">
                  <span className="w-4 h-4 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                      <path d="M1 3l2 2 4-4" stroke="#4338ca" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://topmate.io/pratyush_jain/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block text-center py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors duration-200 shadow-sm"
            >
              Book on Topmate →
            </a>

            <p className="text-center text-xs text-black/25 mt-3">
              Powered by{" "}
              <a href="https://topmate.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-black/50 transition-colors">
                topmate.io
              </a>
            </p>
          </div>

          {/* ── Path 2: Message form ── */}
          <div className="bg-white border border-black/[0.07] rounded-2xl shadow-sm overflow-hidden">

            {status === "sent" ? (
              <div className="p-10 text-center flex flex-col items-center justify-center min-h-[420px]">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M1.5 8l5.5 5.5L18.5 1.5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#111] mb-2">Message sent</h3>
                <p className="text-black/40 text-sm max-w-xs leading-relaxed">
                  Thanks for reaching out. I&apos;ll read every message and get back to you soon.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setSelected(null); setCharCount(0); }}
                  className="mt-6 text-sm text-indigo-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* Use-case picker */}
                <div className="p-5 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-lg bg-[#f2f0eb] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="#666" strokeWidth="1.8"/>
                        <path d="M22 6l-10 7L2 6" stroke="#666" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#111] text-base">Leave a message</h3>
                  </div>
                  <p className="text-black/35 text-xs mb-4 pl-9">I&apos;ll get back within a couple of days</p>

                  <div className="grid grid-cols-1 gap-1.5">
                    {USE_CASES.map((uc) => {
                      const isSelected = selected === uc.id;
                      return (
                        <button
                          key={uc.id}
                          type="button"
                          onClick={() => setSelected(isSelected ? null : uc.id)}
                          className={`flex items-center gap-2.5 text-left rounded-lg px-3 py-2 border text-sm transition-all duration-150 ${
                            isSelected
                              ? "border-indigo-400 bg-indigo-50"
                              : "border-black/[0.07] hover:border-black/15 hover:bg-black/[0.02]"
                          }`}
                        >
                          <span className="w-5 text-base text-center shrink-0">{uc.icon}</span>
                          <span className={`font-semibold ${isSelected ? "text-indigo-700" : "text-[#111]"}`}>
                            {uc.label}
                          </span>
                          {isSelected && (
                            <span className="ml-auto w-3.5 h-3.5 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                              <svg width="7" height="5" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="p-5 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-black/35 text-xs font-bold uppercase tracking-widest block mb-1">Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-3.5 py-2.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-black/35 text-xs font-bold uppercase tracking-widest block mb-1">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-3.5 py-2.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <label className="text-black/35 text-xs font-bold uppercase tracking-widest">Message</label>
                      <span className={`text-xs font-medium ${charCount > 900 ? "text-rose-500" : "text-black/25"}`}>
                        {charCount}/1000
                      </span>
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      maxLength={1000}
                      placeholder="Tell me what you're working on or looking for…"
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-3.5 py-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-rose-500 text-xs font-medium">
                      Something went wrong — please try again or email me directly at{" "}
                      <a href="mailto:jain.pratyush26@gmail.com" className="underline">jain.pratyush26@gmail.com</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-2.5 rounded-xl bg-[#111] hover:bg-[#333] disabled:bg-black/30 text-white text-sm font-bold transition-colors duration-200"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
