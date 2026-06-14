const services = [
  {
    title: "Growth Strategy",
    icon: "↗",
    description:
      "Go-to-market planning, channel strategy, and revenue model design for startups and scale-ups looking to break into new markets or accelerate in existing ones.",
    bullets: [
      "Market entry frameworks",
      "Revenue & GTM strategy",
      "Competitive positioning",
      "Growth model design",
    ],
    accent: "indigo",
  },
  {
    title: "P&L & Operating Model",
    icon: "⚡",
    description:
      "Hands-on help structuring your business model, unit economics, and operating levers to build a healthy, scalable P&L — from Series A to large enterprise.",
    bullets: [
      "Unit economics analysis",
      "Margin improvement",
      "Org & cost structure",
      "OKR & performance design",
    ],
    accent: "purple",
  },
  {
    title: "Market Expansion",
    icon: "🌐",
    description:
      "End-to-end support for companies expanding into new geographies, particularly across the Middle East, South Asia, and Southeast Asia.",
    bullets: [
      "Country/market selection",
      "Regulatory & operational setup",
      "Local partnerships",
      "Localisation strategy",
    ],
    accent: "pink",
  },
  {
    title: "Executive Mentorship",
    icon: "◎",
    description:
      "1:1 coaching for founders, aspiring operators, and mid-career professionals navigating growth roles, career pivots, or leadership transitions.",
    bullets: [
      "Founder operating advice",
      "Career strategy sessions",
      "Executive presence coaching",
      "Transition support (MBA, consulting, ops)",
    ],
    accent: "teal",
  },
];

const accentMap: Record<string, string> = {
  indigo: "border-indigo-500/20 hover:border-indigo-500/40 group-hover:text-indigo-400",
  purple: "border-purple-500/20 hover:border-purple-500/40 group-hover:text-purple-400",
  pink: "border-pink-500/20 hover:border-pink-500/40 group-hover:text-pink-400",
  teal: "border-teal-500/20 hover:border-teal-500/40 group-hover:text-teal-400",
};

const iconAccent: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10",
  purple: "text-purple-400 bg-purple-500/10",
  pink: "text-pink-400 bg-pink-500/10",
  teal: "text-teal-400 bg-teal-500/10",
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services & Mentorship
          </h2>
          <p className="text-white/40 mt-4 max-w-xl">
            Engagements range from advisory retainers to project-based consulting and ongoing mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group bg-white/[0.03] border ${accentMap[s.accent]} rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]`}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${iconAccent[s.accent]}`}
                >
                  {s.icon}
                </div>
                <h3 className={`text-lg font-semibold text-white transition-colors ${accentMap[s.accent]}`}>
                  {s.title}
                </h3>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{s.description}</p>
              <ul className="space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-white/35 text-sm flex gap-2">
                    <span className="text-white/20">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border border-indigo-500/20 rounded-2xl p-8 text-center">
          <p className="text-white/70 text-lg mb-2">Not sure which fits?</p>
          <p className="text-white/40 text-sm mb-6">
            Let&apos;s have a 30-min exploratory call — no commitment required.
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
          >
            Book a free call
          </a>
        </div>
      </div>
    </section>
  );
}
