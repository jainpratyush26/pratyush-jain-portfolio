"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#f2f0eb]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
          Let&apos;s connect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-6">
          Work together
        </h2>
        <p className="text-black/45 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Whether you&apos;re building something new, navigating a critical inflection point, or
          looking for a thought partner — I&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              label: "Email",
              value: "pratyush@example.com",
              href: "mailto:pratyush@example.com",
              icon: "✉",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/pratyushjain",
              href: "https://linkedin.com/in/pratyushjain",
              icon: "in",
            },
            {
              label: "Twitter / X",
              value: "@pratyushjain",
              href: "https://twitter.com/pratyushjain",
              icon: "𝕏",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-white border border-black/[0.07] rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all duration-300 shadow-sm text-left"
            >
              <div className="text-2xl mb-3">{c.icon}</div>
              <p className="text-black/30 text-xs mb-1 uppercase tracking-wide font-semibold">{c.label}</p>
              <p className="text-black/70 text-sm font-semibold group-hover:text-indigo-600 transition-colors">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-white border border-black/[0.07] rounded-2xl p-10 shadow-sm text-left">
          <h3 className="text-xl font-bold text-[#111] mb-1">Send a message</h3>
          <p className="text-black/40 text-sm mb-8">I typically respond within 48 hours.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-black/45 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-black/45 text-xs mb-1.5 block font-semibold uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-black/45 text-xs mb-1.5 block font-semibold uppercase tracking-wide">What can I help with?</label>
              <textarea
                rows={4}
                placeholder="Tell me about your situation..."
                className="w-full bg-[#f9f8f6] border border-black/[0.1] rounded-xl px-4 py-3 text-sm text-black placeholder-black/25 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-colors duration-200 shadow-sm"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
