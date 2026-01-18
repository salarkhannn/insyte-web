const points = [
  {
    label: "Depth",
    text: "The depth of enterprise BI",
  },
  {
    label: "Speed",
    text: "The speed of modern software",
  },
  {
    label: "Leverage",
    text: "The leverage of AI, applied responsibly",
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-24 md:py-32 bg-panel scroll-mt-20">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Our Vision
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-8">
            Why Insyte Exists
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Existing BI tools are powerful but slow to evolve. Modern tools are fast but shallow. 
            Insyte is built to close that gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-surface border border-primary/5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.06)]"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-signal mb-3">
                {point.label}
              </div>
              <p className="text-primary font-sans leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
