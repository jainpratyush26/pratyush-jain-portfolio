// Inline SVG wordmarks — always load, no external dependency, crisp at any scale
const logos = [
  {
    name: "IIM Ahmedabad",
    svg: (
      <svg viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 28, width: "auto" }}>
        <text x="0" y="14" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="currentColor" letterSpacing="0.5">IIM</text>
        <text x="0" y="26" fontFamily="Georgia, serif" fontSize="9" fontWeight="400" fill="currentColor" letterSpacing="0.3">Ahmedabad</text>
      </svg>
    ),
  },
  {
    name: "Morgan Stanley",
    svg: (
      <svg viewBox="0 0 130 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 18, width: "auto" }}>
        <text x="0" y="15" fontFamily="-apple-system, sans-serif" fontSize="13" fontWeight="600" fill="currentColor" letterSpacing="0.2">Morgan Stanley</text>
      </svg>
    ),
  },
  {
    name: "Kearney",
    svg: (
      <svg viewBox="0 0 90 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 18, width: "auto" }}>
        <text x="0" y="15" fontFamily="-apple-system, sans-serif" fontSize="14" fontWeight="700" fill="currentColor" letterSpacing="-0.3">Kearney</text>
      </svg>
    ),
  },
  {
    name: "Delivery Hero",
    svg: (
      <svg viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 18, width: "auto" }}>
        <text x="0" y="15" fontFamily="-apple-system, sans-serif" fontSize="13" fontWeight="600" fill="currentColor" letterSpacing="0.1">Delivery Hero</text>
      </svg>
    ),
  },
  {
    name: "noon",
    svg: (
      <svg viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 22, width: "auto" }}>
        <text x="0" y="18" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.5">noon</text>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f9f8f6] border-t border-black/[0.06]">

      {/* Logo strip */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-b border-black/[0.05]">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="text-black/20 select-none"
            >
              {logo.svg}
            </div>
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
            href="https://www.linkedin.com/in/pratyush-jain-78126591"
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
