import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const posts = [
  {
    slug: "introducing-insyte",
    title: "Introducing Insyte: Analytics Without the Friction",
    excerpt: "Why we built a professional-grade analytics tool that respects your expertise while leveraging AI for speed.",
    date: "Jan 12, 2024",
    readTime: "4 min read",
    tag: "Company"
  },
  {
    slug: "future-of-ai-analytics",
    title: "The Future of AI in Data Analysis",
    excerpt: "AI shouldn't replace the analyst. It should remove the tedious parts of the job. Here's our philosophy.",
    date: "Jan 15, 2024",
    readTime: "6 min read",
    tag: "Vision"
  },
  {
    slug: "desktop-first-performance",
    title: "Why We Built a Native Desktop App",
    excerpt: "In a world of browser tabs, we chose to build a high-performance desktop application. Here is why.",
    date: "Jan 18, 2024",
    readTime: "5 min read",
    tag: "Engineering"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-chassis">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Engineering Blog
            </span>
          </div>
          <h1 className="text-5xl font-serif text-primary mb-6">
            Writing from the team.
          </h1>
          <p className="text-xl text-secondary max-w-2xl">
            Thoughts on data visualization, improved workflows, and the future of analytics software.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="space-y-12">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group block p-8 rounded-2xl bg-surface border border-primary/5 hover:border-primary/10 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wide text-signal">
                      {post.tag}
                    </span>
                    <span className="text-xs text-tertiary">|</span>
                    <span className="text-xs text-tertiary font-mono">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif text-primary mb-3 group-hover:text-signal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-secondary leading-relaxed mb-4 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-signal transition-colors">
                    Read article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
