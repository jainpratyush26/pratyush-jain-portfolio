"use client";
import { useRef } from "react";

const posts = [
  {
    tag: "Career",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    title: "Consulting as a Start — and How It Shaped Everything After",
    excerpt:
      "Why starting in strategy consulting is one of the best decisions a career can make — and the habits it builds that never leave you.",
    readTime: "8 min",
    status: "coming soon",
  },
  {
    tag: "Life",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "Relocating to Berlin: Three Years of Realisations",
    excerpt:
      "What a city of contradictions taught me about work, pace, culture — and what I thought I wanted versus what I actually needed.",
    readTime: "6 min",
    status: "coming soon",
  },
  {
    tag: "Life",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "What Has Dubai Taught Me About Myself?",
    excerpt:
      "Dubai has a way of holding a mirror up to you. Here's what I saw — and what I'm still figuring out.",
    readTime: "5 min",
    status: "coming soon",
  },
  {
    tag: "Career",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    title: "Waiting for the Right Role",
    excerpt:
      "On patience, standards, and the quiet courage it takes to not settle — even when the pressure to move is real.",
    readTime: "4 min",
    status: "coming soon",
  },
  {
    tag: "Leadership",
    tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    title: "Building a Team in the Age of AI",
    excerpt:
      "How hiring, managing and growing people is changing — and what great leadership looks like when AI can do a lot of the work.",
    readTime: "7 min",
    status: "coming soon",
  },
  {
    tag: "Productivity",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "How AI Helps Me Be Productive Every Day",
    excerpt:
      "Not theory — a practical account of the tools, habits and mindsets I've built around AI that actually make a difference.",
    readTime: "5 min",
    status: "coming soon",
  },
  {
    tag: "Life",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    title: "How Travel Has Shaped My Life",
    excerpt:
      "Across 4 continents and 15+ countries — what being constantly in motion teaches you about yourself, and other people.",
    readTime: "6 min",
    status: "coming soon",
  },
];

export default function Writing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section id="writing" className="py-24 px-6 bg-[#f9f8f6]">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2">Writing</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
              Thoughts &amp; Essays
            </h2>
            <p className="text-black/40 text-sm mt-2">
              On career, life, leadership and building in a fast-moving world.
            </p>
          </div>
          {/* Scroll arrows */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-black/[0.1] bg-white shadow-sm flex items-center justify-center text-black/50 hover:text-black hover:border-black/20 transition-all"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-black/[0.1] bg-white shadow-sm flex items-center justify-center text-black/50 hover:text-black hover:border-black/20 transition-all"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel — single row, horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {posts.map((post, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[280px] bg-white border border-black/[0.07] rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${post.tagColor}`}>
                  {post.tag}
                </span>
                <span className="text-black/25 text-xs font-medium">{post.readTime}</span>
              </div>

              <h3 className="font-bold text-[#111] text-sm leading-snug group-hover:text-indigo-700 transition-colors mb-3 flex-1">
                {post.title}
              </h3>

              <p className="text-black/40 text-xs leading-relaxed mb-5">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[0.05]">
                <span className="text-xs text-black/25 font-medium italic">{post.status}</span>
                <span className="text-black/20 group-hover:text-indigo-400 transition-colors text-base">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
