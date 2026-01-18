const steps = [
  {
    step: "01",
    title: "Drag & Drop",
    description: "Drag fields into rows, columns, and encodings",
  },
  {
    step: "02",
    title: "Instant Output",
    description: "Immediately see visual output with sensible defaults",
  },
  {
    step: "03",
    title: "Refine",
    description: "Refine with precise configuration controls",
  },
  {
    step: "04",
    title: "Iterate",
    description: "Iterate across worksheets without breaking context",
  },
  {
    step: "05",
    title: "Build",
    description: "Build dashboards from validated analytical views",
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32 bg-chassis scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              User Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6">
            Workflow Experience
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            The workflow is designed to feel familiar to experienced BI users 
            while removing unnecessary friction.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-panel border border-primary/5 flex items-center justify-center mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.08)] z-10">
                  <span className="text-lg font-mono font-bold text-signal">{item.step}</span>
                </div>
                <h3 className="text-base font-sans font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed max-w-[180px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
