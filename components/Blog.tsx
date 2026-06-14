const posts = [
  {
    title: "Why Most Market Entry Strategies Fail in the Middle East",
    excerpt:
      "The GCC isn't one market — it's five distinct consumer cultures with different trust signals, payment preferences, and distribution realities. Here's what I learned launching across the region.",
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
  Strategy: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  Leadership: "text-purple-300 bg-purple-500/10 border-purple-500/20",
  Growth: "text-pink-300 bg-pink-500/10 border-pink-500/20",
};

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Writing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Thoughts & Essays
          </h2>
          <p className="text-white/40 mt-4">
            On growth, strategy, leadership, and building businesses across emerging markets.
          </p>
        </div>

        <div className="space-y-5">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-indigo-500/20 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${tagColors[post.tag] ?? "text-white/40 bg-white/5 border-white/10"}`}
                    >
                      {post.tag}
                    </span>
                    <span className="text-white/20 text-xs">
                      {post.date} · {post.readTime} read
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug group-hover:text-indigo-200 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <span className="text-white/20 group-hover:text-indigo-400 transition-colors text-xl mt-1 shrink-0">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm">More writing coming soon.</p>
        </div>
      </div>
    </section>
  );
}
