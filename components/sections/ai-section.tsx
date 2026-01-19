import { Check, X } from "@phosphor-icons/react/dist/ssr";

const aiDoes = [
  "Suggesting appropriate visualizations based on data shape",
  "Auto-generating calculated fields from natural language",
  "Explaining charts, metrics, and anomalies",
  "Speeding up repetitive configuration tasks",
];

const aiNever = [
  "Overrides user intent",
  "Produces hidden transformations",
  "Replaces explicit configuration",
  "Forces conversational workflows",
];

export function AISection() {
  return (
    <section className="relative py-24 bg-panel">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              AI Philosophy
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6">
            AI-Powered, Not AI-Driven
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Insyte uses AI to reduce friction, not to obscure logic. 
            Everything remains inspectable and editable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-surface border border-primary/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.06)]">
            <div className="text-xs font-mono uppercase tracking-widest text-signal mb-6">
              AI Assists With
            </div>
            <ul className="space-y-4">
              {aiDoes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center">
                    <Check size={14} weight="bold" className="text-signal" />
                  </div>
                  <span className="text-sm text-primary pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-inset border border-primary/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
            <div className="text-xs font-mono uppercase tracking-widest text-tertiary mb-6">
              AI Never
            </div>
            <ul className="space-y-4">
              {aiNever.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center">
                    <X size={14} weight="bold" className="text-tertiary" />
                  </div>
                  <span className="text-sm text-secondary pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
