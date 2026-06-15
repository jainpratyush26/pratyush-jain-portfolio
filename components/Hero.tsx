"use client";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f9f8f6]"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft colour blob */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[400px] rounded-full bg-indigo-100/60 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-xs font-semibold mb-10 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Open to consulting & advisory
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 text-[#0f0f0f] leading-[1.08]">
          Pratyush Jain
        </h1>

        <p className="text-xl md:text-2xl gradient-text font-semibold mb-7 tracking-tight">
          Growth · Strategy · P&amp;L Leadership
        </p>

        <p className="text-black/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          I help businesses scale — from zero to one and one to many. From investment banking
          and strategy consulting to building global marketplaces and leading food delivery
          growth across MENA.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#experience"
            className="px-7 py-3 rounded-full bg-[#111] hover:bg-[#333] text-white text-sm font-semibold transition-colors duration-200 shadow-sm"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border-2 border-black/15 hover:border-black/30 text-black/70 hover:text-black text-sm font-semibold transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "10+", label: "Years experience" },
            { value: "15+", label: "Countries" },
            { value: "$500M+", label: "P&L managed" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="text-2xl font-bold text-[#111]">{s.value}</span>
              <span className="text-xs text-black/35 mt-0.5 uppercase tracking-wide font-medium">{s.label}</span>
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-1 justify-center mb-1">
              {["Consumer Tech", "Hyperlocal", "Quick Commerce"].map((v) => (
                <span key={v} className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-500 font-semibold">
                  {v}
                </span>
              ))}
            </div>
            <span className="text-xs text-black/35 uppercase tracking-wide font-medium">Verticals</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black/25 text-xs font-medium">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent" />
      </div>
    </section>
  );
}
