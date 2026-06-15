const projects = [
  {
    label: "Talabat / Delivery Hero · 2021–2023",
    title: "TExpress — Rider on Demand Platform",
    summary:
      "Built and scaled Talabat's rider-on-demand business from the ground up — a platform that decoupled riders from the food delivery network and opened them up as an on-demand asset for any use case.",
    highlights: [
      "Architected the 0→1 operating model: fleet management, pricing, SLA design and partner onboarding.",
      "Scaled across food, pharmacy, grocery and general merchandise use cases across UAE, Kuwait, Bahrain and Egypt.",
      "Explored and piloted a dark store as a service model — enabling third-party retailers to plug into Talabat's logistics infrastructure.",
    ],
    tags: ["0→1", "Quick Commerce", "MENA", "Logistics"],
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    label: "Talabat / Delivery Hero · 2021–2023",
    title: "Talabat Shops — Grocery, Health & Beauty",
    summary:
      "Scaled the Talabat Shops marketplace to bring everyday essentials — think Spinneys, Carrefour, Aster and Guardian — to customers' doors in under 45 minutes.",
    highlights: [
      "Led category strategy and supplier partnerships across grocery, health and beauty verticals.",
      "Drove demand-side growth through marketing, promotions and CRM — growing basket size and repeat rates.",
      "Expanded the model from UAE across Kuwait, Bahrain and Egypt, adapting the playbook to each market.",
    ],
    tags: ["1→10", "Marketplace", "Grocery", "MENA"],
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#f2f0eb]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Highlights</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">Featured Work</h2>
          <p className="text-black/40 mt-4 text-base">Two builds I&apos;m especially proud of.</p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-black/[0.07] rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300"
            >
              <p className="text-black/30 text-xs font-semibold uppercase tracking-wide mb-2">{p.label}</p>
              <h3 className="text-xl font-bold text-[#111] mb-3">{p.title}</h3>
              <p className="text-black/55 text-sm leading-relaxed mb-5">{p.summary}</p>
              <ul className="space-y-2 mb-5">
                {p.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-black/50 leading-relaxed">
                    <span className="text-indigo-400 mt-0.5 shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05]">
                {p.tags.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${p.tagColor}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
