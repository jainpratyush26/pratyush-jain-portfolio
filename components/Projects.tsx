const projects = [
  {
    title: "noon Food — UAE Growth & P&L",
    description:
      "Leading growth strategy and P&L ownership for UAE's food delivery platform — driving customer acquisition, retention and contribution margin initiatives.",
    tags: ["Food Delivery", "P&L", "MENA", "Growth"],
    outcome: "Current role",
    type: "Current",
  },
  {
    title: "Talabat Express — Dark Store as a Service",
    description:
      "Built the dark store model for Talabat from scratch — site selection, operational model design, partner onboarding and scaling across UAE, Kuwait, Bahrain and Egypt.",
    tags: ["Quick Commerce", "0→1", "MENA", "Operations"],
    outcome: "0→1 across 4 markets",
    type: "Operator",
  },
  {
    title: "Shops Marketplace — MENA Scale",
    description:
      "Scaled grocery, health and beauty on Talabat Shops to become a significant revenue contributor — category strategy, supplier partnerships and demand generation.",
    tags: ["Marketplace", "1→10", "Grocery", "Beauty"],
    outcome: "1→10 growth",
    type: "Operator",
  },
  {
    title: "Global Logistics as a Service",
    description:
      "Built logistics as a service from 0→1 across Argentina, Nordics, Spain, Italy and APAC — operational playbooks, tech integrations and commercial frameworks.",
    tags: ["Logistics", "0→1", "Global", "Delivery Hero"],
    outcome: "5 markets launched",
    type: "Operator",
  },
  {
    title: "PE Due Diligence — Indian Retail",
    description:
      "Led commercial due diligence for two major private equity investments in the Indian organised retail sector — market sizing, competitive dynamics and management assessment.",
    tags: ["PE", "Consulting", "India", "Retail"],
    outcome: "2 mandates delivered",
    type: "Consulting",
  },
  {
    title: "Cost Transformation — Telecom & Auto",
    description:
      "End-to-end cost optimisation for a major Malaysian telecom player and production cost reduction for a South Korean automotive OEM — structural savings identification and implementation roadmaps.",
    tags: ["Cost Optimisation", "Consulting", "Malaysia", "South Korea"],
    outcome: "Multi-market delivery",
    type: "Consulting",
  },
];

const typeStyle: Record<string, string> = {
  Current: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Operator: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Consulting: "bg-amber-50 text-amber-700 border-amber-200",
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#f9f8f6]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">
            Selected Projects
          </h2>
          <p className="text-black/40 mt-4 max-w-xl">
            A selection of strategic and operational initiatives I&apos;ve led or been central to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-black/[0.07] rounded-2xl p-6 flex flex-col hover:border-indigo-200 hover:shadow-md transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-[#111] text-base leading-snug group-hover:text-indigo-700 transition-colors">
                  {p.title}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold shrink-0 ${typeStyle[p.type]}`}>
                  {p.type}
                </span>
              </div>
              <p className="text-black/50 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-black/[0.04] text-black/45 border border-black/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-black/[0.06]">
                  <span className="text-indigo-600 text-sm font-bold">{p.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
