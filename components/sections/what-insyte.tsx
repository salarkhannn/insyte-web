import { cn } from "@/lib/utils";

const features = [
  "Drag-and-drop visual analytics",
  "High-performance rendering for large datasets",
  "Multi-worksheet analytical workflows",
  "Enterprise-grade visualization features",
  "AI assistance that accelerates, not replaces, expert users",
];

export function WhatInsyte() {
  return (
    <section className="relative py-24 md:py-32 bg-panel">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-signal shadow-[0_0_8px_var(--signal-glow)]" />
              <span className="text-xs font-mono uppercase tracking-widest text-secondary">
                Platform Overview
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
              What Insyte Is
            </h2>
            <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Insyte is a professional, desktop-grade analytics application designed for serious data work. 
              Built for people who already understand data and want a tool that respects that expertise.
            </p>
          </div>

          <div className="bg-surface rounded-2xl border border-primary/5 p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="text-xs font-mono uppercase tracking-widest text-tertiary mb-6">
              Core Components
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-inset flex items-center justify-center text-xs font-mono text-secondary shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-primary pt-1.5 leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
