import { GitCommit, Tag } from "@phosphor-icons/react/dist/ssr";

const changes = [
  {
    version: "v0.9.0",
    date: "Jan 18, 2024",
    title: "Major Performance Upgrade",
    description: "Re-wrote the rendering engine to support 10M+ rows with 60fps scrolling. Added virtualized heavy data grid.",
    badges: ["Performance", "Core"]
  },
  {
    version: "v0.8.5",
    date: "Jan 10, 2024",
    title: "New AI Chat Interface",
    description: "Introduced the new context-aware AI Assistant. It can now answer questions about your loaded datasets and generate charts automatically.",
    badges: ["AI", "Feature"]
  },
  {
    version: "v0.8.0",
    date: "Dec 22, 2023",
    title: "Private Beta Launch",
    description: "Initial release for private beta testers. Includes basic CSV import, bar/line/scatter charts, and project saving.",
    badges: ["Release"]
  }
];

export default function ChangelogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-chassis">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-surface border border-primary/10">
                <Tag size={12} className="text-signal" />
                <span className="text-xs font-mono font-medium text-secondary">Release Notes</span>
            </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Changelog
          </h1>
          <p className="text-lg text-secondary max-w-xl mx-auto">
            Stay up to date with the latest improvements, fixes, and features added to Insyte.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-primary/10 ml-4 md:ml-0 md:pl-0 space-y-16">
            
          {changes.map((change, index) => (
            <div key={change.version} className="relative flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:left-auto md:right-full md:mr-8 top-2 w-2.5 h-2.5 rounded-full bg-signal ring-4 ring-chassis" />
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-mono font-bold text-primary">{change.version}</span>
                        <div className="flex gap-2">
                            {change.badges.map(b => (
                                <span key={b} className="px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wide bg-primary/5 text-secondary border border-primary/5">
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                    <span className="text-xs text-tertiary font-mono mt-1 md:mt-0">{change.date}</span>
                </div>
                
                <h3 className="text-xl font-medium text-primary mb-3">{change.title}</h3>
                <p className="text-secondary leading-relaxed border-l-2 border-primary/5 pl-4 md:border-none md:pl-0">
                    {change.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
