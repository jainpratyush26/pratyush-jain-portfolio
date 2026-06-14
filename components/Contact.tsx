"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
          Let&apos;s connect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Work together
        </h2>
        <p className="text-white/45 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
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
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300 text-left"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                {c.icon}
              </div>
              <p className="text-white/30 text-xs mb-1 uppercase tracking-wide">{c.label}</p>
              <p className="text-white/70 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-500/20 rounded-2xl p-10">
          <h3 className="text-xl font-semibold mb-2">Send a message</h3>
          <p className="text-white/40 text-sm mb-8">I typically respond within 48 hours.</p>
          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-xs mb-1.5 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-white/40 text-xs mb-1.5 block">What can I help with?</label>
              <textarea
                rows={4}
                placeholder="Tell me about your situation..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
