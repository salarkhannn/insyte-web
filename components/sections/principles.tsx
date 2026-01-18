import { Lightning, Gauge, SlidersHorizontal, Brain, Wrench } from "@phosphor-icons/react/dist/ssr";

const principles = [
  {
    icon: Lightning,
    title: "Performance First",
    description: "Millions of data points without crashes or lag",
  },
  {
    icon: Gauge,
    title: "Professional by Default",
    description: "No novelty UI, no gimmicks, no assistant-style workflows",
  },
  {
    icon: SlidersHorizontal,
    title: "Explicit Control",
    description: "Power users can always see, understand, and modify what's happening",
  },
  {
    icon: Brain,
    title: "AI as Leverage",
    description: "AI accelerates setup, exploration, and iteration — never hides logic",
  },
  {
    icon: Wrench,
    title: "Production-Grade",
    description: "Designed as a real tool, not a demo or prototype",
  },
];

export function Principles() {
  return (
    <section id="principles" className="relative py-24 md:py-32 bg-panel scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Design Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Core Principles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-surface border border-primary/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-inset flex items-center justify-center mb-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                  <Icon size={24} weight="duotone" className="text-signal" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-primary mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
