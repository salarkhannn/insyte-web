const capabilities = [
  {
    title: "Visual Analytics",
    features: [
      "Bar, line, area, scatter, pie, and advanced composite charts",
      "Small multiples, dual-axis charts, reference lines, bands, and distributions",
      "Median lines, averages, percentiles, and custom reference markers",
      "Quadrants, trend lines, and statistical overlays",
      "Interactive tooltips, brushing, and cross-filtering",
    ],
  },
  {
    title: "Multi-Worksheet Projects",
    features: [
      "Create multiple worksheets within a single project",
      "Each worksheet can have its own data mappings, calculations, and visuals",
      "Worksheets can be combined into dashboards or analyzed independently",
      "Reusable fields, measures, and calculated logic across worksheets",
    ],
  },
  {
    title: "Large-Scale Data Handling",
    features: [
      "Automatic aggregation and sampling for large datasets",
      "Progressive rendering to avoid UI freezes",
      "Intelligent downsampling while preserving visual accuracy",
      "Level-of-detail style aggregation when plotting dense data",
    ],
  },
  {
    title: "Calculations & Transformations",
    features: [
      "Calculated fields and derived measures",
      "Aggregations, ratios, moving averages, and window functions",
      "Conditional logic and bucketing",
      "Explicit control over grouping and granularity",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 md:py-32 bg-chassis scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Feature Set
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Key Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-2xl bg-panel border border-primary/5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-inset flex items-center justify-center text-xs font-mono text-secondary shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-sans font-semibold text-primary">
                  {capability.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-tertiary mt-2" />
                    <span className="text-sm text-secondary leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
