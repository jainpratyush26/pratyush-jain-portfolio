export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-black/[0.06] bg-[#f9f8f6]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-black/30 text-sm font-medium">
          © {new Date().getFullYear()} Pratyush Jain. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "Twitter", "Email"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-black/30 hover:text-black/70 text-sm font-medium transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
