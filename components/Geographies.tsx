const regions = [
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Bahrain"],
    note: "Current base · deep market knowledge",
    icon: "🌍",
  },
  {
    name: "South Asia",
    countries: ["India", "Sri Lanka", "Bangladesh"],
    note: "Home market · extensive operator experience",
    icon: "🌏",
  },
  {
    name: "Southeast Asia",
    countries: ["Indonesia", "Vietnam", "Philippines", "Malaysia"],
    note: "Market entry & expansion execution",
    icon: "🌏",
  },
  {
    name: "North America & Europe",
    countries: ["USA", "United Kingdom", "Germany"],
    note: "Advisory & consulting engagements",
    icon: "🌎",
  },
];

const industries = [
  { name: "E-commerce & Retail", color: "bg-indigo-500/20 text-indigo-300 border-indigo-500/20" },
  { name: "Fintech & Payments", color: "bg-purple-500/20 text-purple-300 border-purple-500/20" },
  { name: "Consumer Tech", color: "bg-pink-500/20 text-pink-300 border-pink-500/20" },
  { name: "Quick Commerce", color: "bg-blue-500/20 text-blue-300 border-blue-500/20" },
  { name: "FMCG / CPG", color: "bg-teal-500/20 text-teal-300 border-teal-500/20" },
  { name: "Logistics & Supply Chain", color: "bg-orange-500/20 text-orange-300 border-orange-500/20" },
  { name: "SaaS / B2B Tech", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/20" },
  { name: "Investment Banking", color: "bg-green-500/20 text-green-300 border-green-500/20" },
  { name: "Management Consulting", color: "bg-rose-500/20 text-rose-300 border-rose-500/20" },
];

export default function Geographies() {
  return (
    <section id="geographies" className="py-28 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Reach
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Geographies & Industries
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Geographies */}
          <div>
            <h3 className="text-lg font-semibold text-white/70 mb-6">Where I&apos;ve worked</h3>
            <div className="space-y-4">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{r.icon}</span>
                    <h4 className="font-semibold text-white">{r.name}</h4>
                  </div>
                  <p className="text-white/30 text-xs mb-3">{r.note}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.countries.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/5"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold text-white/70 mb-6">Industries I know deeply</h3>
            <div className="flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind.name}
                  className={`text-sm px-4 py-2 rounded-full border ${ind.color} font-medium`}
                >
                  {ind.name}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Years experience" },
                { value: "4", label: "Continents" },
                { value: "$500M+", label: "P&L managed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="text-white/40 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
