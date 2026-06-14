const posts = [
  {
    title: "Why Most Market Entry Strategies Fail in the Middle East",
    excerpt:
      "The GCC isn't one market — it's five distinct consumer cultures with different trust signals, payment preferences, and distribution realities.",
    date: "May 2025",
    readTime: "6 min",
    tag: "Strategy",
  },
  {
    title: "The P&L Mindset: What Finance Taught Me That MBA Didn't",
    excerpt:
      "Two years in investment banking gave me something business school couldn't — an instinctive understanding of how money actually flows through a business.",
    date: "March 2025",
    readTime: "5 min",
    tag: "Leadership",
  },
  {
    title: "How to Think About Pricing in High-Inflation Markets",
    excerpt:
      "When your cost base moves faster than your price points, most playbooks break. Here's the framework I've used to defend margins without killing demand.",
    date: "January 2025",
    readTime: "7 min",
    tag: "Growth",
  },
  {
    title: "Scaling a Team Across 4 Time Zones Without Losing Culture",
    excerpt:
      "Distributed teams fail for predictable reasons. Rituals, written culture, and the right async stack can make the difference between fragmentation and leverage.",
    date: "November 2024",
    readTime: "4 min",
    tag: "Leadership",
  },
];

const tagColors: Record<string, string> = {
  Strategy: "text-indigo-700 bg-indigo-50 border-indigo-200",
  Leadership: "text-violet-700 bg-violet-50 border-violet-200",
  Growth: "text-emerald-700 bg-emerald-50 border-emerald-200",
};

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6 bg-[#f9f8f6]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-3">
            Writing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">
            Thoughts & Essays
          </h2>
          <p className="text-black/40 mt-4">
            On growth, strategy, leadership, and building businesses across emerging markets.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white border border-black/[0.07] rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${tagColors[post.tag] ?? ""}`}>
                      {post.tag}
                    </span>
                    <span className="text-black/30 text-xs font-medium">
                      {post.date} · {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-[#111] font-bold text-base leading-snug group-hover:text-indigo-700 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-black/45 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <span className="text-black/20 group-hover:text-indigo-500 transition-colors text-xl mt-1 shrink-0">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-black/30 text-sm font-medium">More writing coming soon.</p>
        </div>
      </div>
    </section>
  );
}
