import type { Metadata } from "next";
import { Tag } from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Stay up to date with the latest improvements, fixes, and features added to Insyte. View our complete release history and version notes.",
  alternates: {
    canonical: "https://useinsyte.vercel.app/changelog",
  },
  openGraph: {
    title: "Changelog | Insyte",
    description:
      "Latest improvements, fixes, and features added to Insyte desktop analytics.",
    url: "https://useinsyte.vercel.app/changelog",
  },
};

const changes = [
  {
    version: "v0.9.2",
    date: "Jan 19, 2026",
    title: "System & Export Capabilities",
    description: "Added comprehensive project management with save/load functionality and data export options for CSV, Excel, and PDF. The app now supports full persistent workflows.",
    badges: ["System", "Feature"]
  },
  {
    version: "v0.9.1",
    date: "Jan 15, 2026",
    title: "Advanced Visualization Engine",
    description: "Deployed the new visualization layer supporting 5 chart types including Bar, Line, Area, Pie, and Scatter, plus an interactive canvas view.",
    badges: ["Visuals", "UI"]
  },
  {
    version: "v0.9.0",
    date: "Jan 10, 2026",
    title: "Polars Processing Engine",
    description: "Integrated the Polars-based backend for high-performance data processing. Handles filtering, aggregation, and transformations on large datasets with near-instant speed.",
    badges: ["Performance", "Backend"]
  },
  {
    version: "v0.8.5",
    date: "Jan 05, 2026",
    title: "AI Copilot Integration",
    description: "Released the Groq-powered AI assistant. You can now ask natural language questions about your data to automatically generate queries and insights.",
    badges: ["AI", "Innovation"]
  },
  {
    version: "v0.8.0",
    date: "Dec 20, 2025",
    title: "MVP Foundation & Core Grid",
    description: "Initial release of the PowerBI-inspired app shell, multi-format data ingestion (CSV, Excel, JSON), and the high-performance AG Grid table view.",
    badges: ["Core", "Release"]
  }
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen pt-32 pb-24 bg-chassis">
        <article className="container mx-auto max-w-3xl px-6">
        {/* Header */}
        <header className="mb-20 text-center">
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
        </header>

        {/* Timeline */}
        <div className="relative border-l border-primary/10 ml-4 md:ml-0 md:pl-0 space-y-16">
            
          {changes.map((change, index) => (
            <div key={change.version} className="relative flex flex-col md:flex-row gap-8 md:gap-16 pl-8">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-signal ring-4 ring-chassis" />
              
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
        </article>
      </main>
    </>
  );
}
