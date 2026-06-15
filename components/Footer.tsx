const associations = [
  { name: "IIM Ahmedabad", short: "IIMA" },
  { name: "Morgan Stanley", short: "Morgan Stanley" },
  { name: "Kearney", short: "Kearney" },
  { name: "Delivery Hero", short: "Delivery Hero" },
  { name: "noon Food", short: "noon" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f9f8f6] border-t border-black/[0.06]">

      {/* Logo strip */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-b border-black/[0.05]">
        <p className="text-center text-[10px] font-bold text-black/18 uppercase tracking-[0.18em] mb-8">
          Associated with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {associations.map((a) => (
            <span
              key={a.name}
              title={a.name}
              className="text-sm font-semibold text-black/20 tracking-tight select-none whitespace-nowrap"
            >
              {a.short}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-black/25 text-sm font-medium">
          © {new Date().getFullYear()} Pratyush Jain
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/pratyushjain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/25 hover:text-black/60 text-sm font-medium transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://topmate.io/pratyush_jain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/25 hover:text-black/60 text-sm font-medium transition-colors duration-200"
          >
            Topmate
          </a>
          <span
            title="Substack — coming soon"
            className="text-black/15 text-sm font-medium cursor-default select-none"
          >
            Substack
          </span>
        </div>
      </div>
    </footer>
  );
}
