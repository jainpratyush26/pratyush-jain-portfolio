const jobs = [
  {
    role: "Head of Growth & P&L",
    company: "noon Food",
    period: "2023 — Present",
    location: "Dubai, UAE",
    bullets: [
      "Leading growth and P&L initiatives for UAE's food delivery platform.",
      "Driving customer acquisition, retention, and contribution margin across the platform.",
      "Building and executing go-to-market strategies across restaurant and dark store channels.",
    ],
    tag: "Current",
  },
  {
    role: "Regional Growth & Marketplace Lead",
    company: "Talabat (Delivery Hero)",
    period: "2019 — 2023",
    location: "Dubai, UAE / Berlin, Germany",
    bullets: [
      "Built Talabat Express — a dark store as a service model scaled across MENA.",
      "Led grocery, health and beauty category growth for Talabat Shops across UAE, Kuwait, Bahrain and Egypt.",
      "Built logistics as a service (0→1) and shops marketplace (1→10) across Argentina, Nordics, Spain, Italy and APAC.",
    ],
    tag: "Operator",
  },
  {
    role: "Strategy Consultant",
    company: "Kearney",
    period: "2016 — 2019",
    location: "Gurugram, India",
    bullets: [
      "Led cost optimisation engagement for a major Malaysian telecom player.",
      "Advised a South Korean automotive OEM on production cost reduction.",
      "Delivered supply chain and warehousing optimisation for a Saudi retail conglomerate.",
      "Supported due diligence for two major PE investments in Indian retail.",
    ],
    tag: "Consulting",
  },
  {
    role: "Analyst — Investment Banking",
    company: "Morgan Stanley",
    period: "2014 — 2016",
    location: "Mumbai, India",
    bullets: [
      "Executed M&A and capital markets transactions across Indian financial services and consumer sectors.",
      "Built financial models and strategic rationale for cross-border deal mandates.",
    ],
    tag: "Finance",
  },
];

const tagColors: Record<string, string> = {
  Current: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Operator: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Consulting: "bg-violet-50 text-violet-700 border-violet-200",
  Finance: "bg-sky-50 text-sky-700 border-sky-200",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#f9f8f6]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/[0.07] hidden md:block" />
          <div className="space-y-8">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-10 relative group">
                <div className="hidden md:block absolute left-0 top-3 w-2 h-2 rounded-full bg-indigo-500 -translate-x-[3px] ring-4 ring-[#f9f8f6]" />
                <div className="bg-white border border-black/[0.07] rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all duration-300 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-[#111]">{job.role}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${tagColors[job.tag]}`}>
                          {job.tag}
                        </span>
                      </div>
                      <p className="text-indigo-600 text-sm font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-black/40 text-sm font-medium">{job.period}</p>
                      <p className="text-black/30 text-xs mt-0.5">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-black/55 text-sm flex gap-2 leading-relaxed">
                        <span className="text-indigo-400 mt-1 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
