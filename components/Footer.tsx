export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} Pratyush Jain. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Twitter", "Email"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/20 hover:text-white/60 text-sm transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
