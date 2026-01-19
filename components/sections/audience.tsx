const personas = [
  "Data analysts and data scientists",
  "Product and growth teams",
  "Business intelligence engineers",
  "Founders and operators who rely on data",
  "Organizations that have outgrown spreadsheets but want more flexibility than legacy BI tools",
];

export function Audience() {
  return (
    <section className="relative py-24 bg-chassis">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Target Audience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Who Insyte Is For
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {personas.map((persona, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-panel border border-primary/5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-signal" />
                <span className="text-primary">{persona}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
