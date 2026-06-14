const jobs = [
  {
    role: "VP of Growth & Strategy",
    company: "TechVenture Co.",
    period: "2022 — Present",
    location: "Dubai, UAE",
    bullets: [
      "Led end-to-end P&L ownership for a $200M+ revenue business unit.",
      "Scaled GMV 3× in 18 months through channel expansion and pricing strategy.",
      "Built and led a 30-person cross-functional growth team across 4 markets.",
    ],
  },
  {
    role: "Head of Strategy & Operations",
    company: "E-commerce Platform",
    period: "2019 — 2022",
    location: "Bangalore, India",
    bullets: [
      "Drove category expansion into 3 new verticals, contributing $80M incremental revenue.",
      "Designed and executed market entry playbooks for Southeast Asia.",
      "Partnered with C-suite on 5-year strategic roadmap and capital allocation.",
    ],
  },
  {
    role: "Strategy Consultant",
    company: "Global Management Consulting Firm",
    period: "2016 — 2019",
    location: "New York, USA & London, UK",
    bullets: [
      "Advised Fortune 500 clients on growth strategy, M&A, and market entry.",
      "Delivered $300M+ in identified value across consumer, retail, and fintech sectors.",
      "Led teams of 4–8 consultants on 6–12 week high-impact engagements.",
    ],
  },
  {
    role: "Associate — Investment Banking",
    company: "Bulge Bracket Bank",
    period: "2014 — 2016",
    location: "Mumbai, India",
    bullets: [
      "Executed M&A and capital markets transactions worth $2B+ in aggregate deal value.",
      "Built financial models and strategic rationale for cross-border acquisitions.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="md:pl-10 relative group">
                {/* Dot */}
                <div className="hidden md:block absolute left-0 top-2 w-2 h-2 rounded-full bg-indigo-500 -translate-x-[3px] ring-4 ring-[#080808]" />

                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-indigo-300 text-sm">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-sm">{job.period}</p>
                      <p className="text-white/30 text-xs mt-0.5">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-white/50 text-sm flex gap-2">
                        <span className="text-indigo-500 mt-1 shrink-0">›</span>
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
