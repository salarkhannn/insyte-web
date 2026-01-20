import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Engineering Blog",
  description:
    "Insights from the Insyte team on data visualization, improved analytics workflows, and the future of desktop analytics software.",
  alternates: {
    canonical: "https://useinsyte.vercel.app/blog",
  },
  openGraph: {
    title: "Engineering Blog | Insyte",
    description:
      "Insights on data visualization, analytics workflows, and the future of desktop analytics.",
    url: "https://useinsyte.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-32 pb-24 bg-chassis">
        <article className="container mx-auto max-w-4xl px-6">
          {/* Header */}
          <header className="mb-20">
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
              Thoughts on data visualization, improved workflows, and the future
              of analytics software.
            </p>
          </header>

          {/* Empty State */}
          <section className="flex flex-col items-center justify-center py-24 border border-dashed border-primary/10 rounded-2xl bg-surface/50">
            <h2 className="text-3xl font-serif text-primary mb-4">Coming Soon</h2>
            <p className="text-secondary max-w-md text-center leading-relaxed">
              We&apos;re currently focused on building the core product. Check
              back later for deep dives into our engineering challenges and
              solutions.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
