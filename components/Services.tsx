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
    accent: "violet",
  },
  {
    title: "Market Expansion",
    icon: "🌐",
    description:
      "End-to-end support for companies expanding into new geographies — with hands-on experience across the Middle East, India, LATAM, EU and Southeast Asia.",
    bullets: [
      "Country/market selection",
      "Regulatory & operational setup",
      "Local partnerships & network",
      "Localisation strategy",
    ],
    accent: "sky",
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
    accent: "amber",
  },
];

const cardAccent: Record<string, { border: string; icon: string; title: string }> = {
  indigo: {
    border: "hover:border-indigo-200",
    icon: "bg-indigo-50 text-indigo-600",
    title: "group-hover:text-indigo-700",
  },
  violet: {
    border: "hover:border-violet-200",
    icon: "bg-violet-50 text-violet-600",
    title: "group-hover:text-violet-700",
  },
  sky: {
    border: "hover:border-sky-200",
    icon: "bg-sky-50 text-sky-600",
    title: "group-hover:text-sky-700",
  },
  amber: {
    border: "hover:border-amber-200",
    icon: "bg-amber-50 text-amber-600",
    title: "group-hover:text-amber-700",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#f2f0eb]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            What I offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">
            Services & Mentorship
          </h2>
          <p className="text-black/40 mt-4 max-w-xl">
            Engagements range from advisory retainers to project-based consulting and ongoing mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => {
            const a = cardAccent[s.accent];
            return (
              <div
                key={s.title}
                className={`group bg-white border border-black/[0.07] ${a.border} rounded-2xl p-7 transition-all duration-300 hover:shadow-md shadow-sm`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold ${a.icon}`}>
                    {s.icon}
                  </div>
                  <h3 className={`text-base font-bold text-[#111] transition-colors ${a.title}`}>
                    {s.title}
                  </h3>
                </div>
                <p className="text-black/50 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-black/40 text-sm flex gap-2">
                      <span className="text-black/20 mt-0.5">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-indigo-600 rounded-2xl p-8 text-center">
          <p className="text-white/90 text-lg font-semibold mb-1">Not sure which fits?</p>
          <p className="text-white/60 text-sm mb-6">
            Let&apos;s have a 30-min exploratory call — no commitment required.
          </p>
          <a
            href="#contact"
            className="inline-block px-7 py-3 rounded-full bg-white text-indigo-700 text-sm font-bold hover:bg-indigo-50 transition-colors duration-200 shadow-sm"
          >
            Book a free call
          </a>
        </div>
      </div>
    </section>
  );
}
