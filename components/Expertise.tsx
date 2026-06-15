const industries = [
  {
    name: "Food Delivery",
    icon: "🍔",
    desc: "Scaling restaurant marketplaces, demand-side growth, supply optimisation and unit economics in hyperlocal delivery.",
    color: "bg-rose-50 border-rose-200 text-rose-700",
    dot: "bg-rose-400",
  },
  {
    name: "Quick Commerce",
    icon: "⚡",
    desc: "Built dark store networks and rider-on-demand platforms from 0→1. Deep expertise in slot design, dark store economics and basket growth.",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    dot: "bg-violet-400",
  },
  {
    name: "Retail & D2C",
    icon: "🛍",
    desc: "Category strategy, seller growth and marketplace economics across grocery, pharmacy, beauty and FMCG verticals.",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    dot: "bg-sky-400",
  },
  {
    name: "Logistics & Supply Chain",
    icon: "📦",
    desc: "End-to-end logistics as a service design — fleet, routing, last-mile economics — launched across 5+ countries.",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-400",
  },
];

const domains = [
  {
    name: "Growth Strategy",
    desc: "Market entry, GTM design and revenue model architecture — from early-stage to scaled operations.",
    icon: "↗",
    bg: "bg-indigo-600",
  },
  {
    name: "Digital Marketing",
    desc: "Performance marketing, CRM, lifecycle and channel mix — driving acquisition and retention at scale.",
    icon: "◈",
    bg: "bg-violet-600",
  },
  {
    name: "P&L Management",
    desc: "Full P&L ownership across multi-market businesses — unit economics, margin levers and operating model design.",
    icon: "⊕",
    bg: "bg-emerald-600",
  },
  {
    name: "International Expansion",
    desc: "Scaling across LATAM, APAC, EU and MENA — including market entry playbooks, local network building and cross-border operational setup.",
    icon: "🌐",
    bg: "bg-sky-600",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 px-6 bg-[#f9f8f6]">
      <div className="max-w-6xl mx-auto">
        {/* Industry expertise */}
        <div className="mb-20">
          <div className="mb-10">
            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Industries</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">Industry Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className={`group bg-white border ${ind.color.replace("text-", "border-").split(" ")[1]} rounded-2xl p-6 hover:shadow-md transition-all duration-300 shadow-sm`}
              >
                <div className="text-3xl mb-4">{ind.icon}</div>
                <h3 className="font-bold text-[#111] text-base mb-2">{ind.name}</h3>
                <p className="text-black/45 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Domain expertise */}
        <div>
          <div className="mb-10">
            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">Domains</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">Domain Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.map((d) => (
              <div
                key={d.name}
                className="group bg-white border border-black/[0.07] rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all duration-300 shadow-sm flex flex-col"
              >
                {/* Icon row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${d.bg} w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm shrink-0`}>
                    {d.icon}
                  </div>
                  <div className="w-px h-5 bg-black/[0.07]" />
                </div>
                {/* Text */}
                <h3 className="font-bold text-[#111] text-sm leading-snug mb-2">{d.name}</h3>
                <p className="text-black/40 text-xs leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
