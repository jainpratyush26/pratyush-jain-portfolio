"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise",  label: "Expertise" },
  { href: "#services",   label: "Services" },
  { href: "#letstalk",   label: "Let's Talk" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f9f8f6]/92 backdrop-blur-md border-b border-black/[0.06] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">PJ</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/45 hover:text-black transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#letstalk"
            className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-200 font-medium shadow-sm"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-black/50 hover:text-black"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-3 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#f9f8f6] border-t border-black/[0.06] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-black/60 hover:text-black font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
