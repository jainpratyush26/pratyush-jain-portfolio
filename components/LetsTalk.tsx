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

export default function LetsTalk() {
  const [selected, setSelected] = useState<string | null>(null);
  const [charCount, setCharCount] = useState(0);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="letstalk" className="py-28 px-6 bg-[#f2f0eb]">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-black/45 text-base leading-relaxed max-w-md mx-auto">
            Pick what fits best and drop me a note — I&apos;ll get back to you within a couple of days.
          </p>
        </div>

        {sent ? (
          <div className="bg-white rounded-2xl border border-emerald-200 p-10 text-center shadow-sm">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-lg font-bold text-[#111] mb-2">Message sent</h3>
            <p className="text-black/45 text-sm">Thanks for reaching out. I&apos;ll be in touch soon.</p>
            <button
              onClick={() => { setSent(false); setSelected(null); setCharCount(0); }}
              className="mt-6 text-sm text-indigo-600 font-semibold hover:underline"
            >
              Send another
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-black/[0.07] shadow-sm overflow-hidden">

            {/* Use-case selector */}
            <div className="p-6 border-b border-black/[0.06]">
              <p className="text-xs font-bold text-black/40 uppercase tracking-widest mb-4">
                What can I help with?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {USE_CASES.map((uc) => {
                  const isSelected = selected === uc.id;
                  return (
                    <button
                      key={uc.id}
                      type="button"
                      onClick={() => setSelected(isSelected ? null : uc.id)}
                      className={`flex items-center gap-3 text-left rounded-xl px-4 py-3 border transition-all duration-200 ${
                        isSelected
                          ? "border-indigo-400 bg-indigo-50 shadow-sm"
                          : "border-black/[0.08] hover:border-black/20 hover:bg-black/[0.02]"
                      }`}
                    >
                      <span className="text-lg w-7 text-center shrink-0">{uc.icon}</span>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${isSelected ? "text-indigo-700" : "text-[#111]"}`}>
                          {uc.label}
                        </p>
                        <p className="text-xs text-black/35 mt-0.5 leading-snug">{uc.sublabel}</p>
                      </div>
                      {isSelected && (
                        <span className="ml-auto shrink-0 w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-black/40 text-xs font-bold uppercase tracking-widest block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-2.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-black/40 text-xs font-bold uppercase tracking-widest block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-2.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-black/40 text-xs font-bold uppercase tracking-widest">
                    Message
                  </label>
                  <span className={`text-xs font-medium ${charCount > 900 ? "text-rose-500" : "text-black/25"}`}>
                    {charCount}/1000
                  </span>
                </div>
                <textarea
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell me a bit about what you're working on or what you're looking for…"
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors duration-200 shadow-sm disabled:opacity-50"
              >
                Send message
              </button>

              <p className="text-center text-xs text-black/25">
                No spam, no newsletters. Just a conversation.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
