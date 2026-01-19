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

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24 border border-dashed border-primary/10 rounded-2xl bg-surface/50">
            <h2 className="text-3xl font-serif text-primary mb-4">Coming Soon</h2>
            <p className="text-secondary max-w-md text-center leading-relaxed">
                We're currently focused on building the core product. Check back later for deep dives into our engineering challenges and solutions.
            </p>
        </div>
      </div>
    </main>
  );
}
