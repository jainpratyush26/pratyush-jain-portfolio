const projects = [
  {
    title: "0→1 Market Launch — GCC",
    description:
      "Built and launched an e-commerce vertical from scratch across UAE and Saudi Arabia. Designed the go-to-market, assembled the team, and hit $50M GMV in year one.",
    tags: ["Market Entry", "E-commerce", "P&L", "Team Building"],
    outcome: "$50M GMV in Y1",
  },
  {
    title: "Pricing Engine Redesign",
    description:
      "Led a cross-functional project to rebuild dynamic pricing infrastructure for a quick-commerce platform, improving contribution margin by 4pp across 10,000+ SKUs.",
    tags: ["Pricing Strategy", "Data", "Quick Commerce", "Margin"],
    outcome: "+4pp contribution margin",
  },
  {
    title: "Southeast Asia Expansion Playbook",
    description:
      "Created the operational and strategic playbook for expanding into 3 SE Asian markets simultaneously — covering regulatory, supply chain, and consumer acquisition.",
    tags: ["Southeast Asia", "Strategy", "Expansion", "Consulting"],
    outcome: "3 markets in 9 months",
  },
  {
    title: "Growth Org Design",
    description:
      "Redesigned the growth function structure for a Series C startup — including hiring plan, OKR framework, and cross-team accountability model that reduced decision latency by 60%.",
    tags: ["Org Design", "Growth", "Leadership", "OKRs"],
    outcome: "60% faster decisions",
  },
  {
    title: "M&A Target Screening — Retail",
    description:
      "Led strategic screens and financial modelling across 20+ acquisition targets in the retail sector, culminating in a $120M cross-border acquisition recommendation.",
    tags: ["M&A", "Finance", "Retail", "Investment Banking"],
    outcome: "$120M deal mandate",
  },
  {
    title: "Category Diversification — 3 New Verticals",
    description:
      "Drove category expansion strategy into beauty, sports, and home segments on a major e-commerce platform, adding $80M in annualised revenue within 24 months.",
    tags: ["Category Growth", "E-commerce", "Revenue"],
    outcome: "+$80M revenue",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Projects
          </h2>
          <p className="text-white/40 mt-4 max-w-xl">
            A selection of strategic and operational initiatives I&apos;ve led or been central to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col hover:border-indigo-500/25 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4 gap-2">
                <h3 className="font-semibold text-white text-base leading-snug group-hover:text-indigo-200 transition-colors">
                  {p.title}
                </h3>
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-indigo-400 text-sm font-semibold">{p.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
