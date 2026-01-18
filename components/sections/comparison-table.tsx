import { Check, X, Minus } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Performance",
    insyte: "Millions of rows, instant interaction",
    bi: "Slows down with large datasets",
    tableau: "Heavy client, resource intensive",
  },
  {
    feature: "Workflow",
    insyte: "Desktop-first, keyboard optimized",
    bi: "Clunky UI, many clicks",
    tableau: "Complex dialogs and modals",
  },
  {
    feature: "Visual Control",
    insyte: "Pixel-perfect, explicit config",
    bi: "Rigid templates, hard to customize",
    tableau: "Flexible but requires hacks",
  },
  {
    feature: "AI Assistance",
    insyte: "Transparent logic, no black box",
    bi: "Bolt-on Copilot features",
    tableau: "Limited automated insights",
  },
  {
    feature: "Deployment",
    insyte: "Local file or single binary",
    bi: "Complex server/cloud setup",
    tableau: "Expensive server infrastructure",
  },
];

export function ComparisonTable() {
  return (
    <section className="relative py-24 md:py-32 bg-panel">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Market Comparison
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Why Switch to Insyte?
          </h2>
        </div>

        <div className="rounded-2xl bg-surface border border-primary/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-inset border-b border-primary/5 text-xs font-mono uppercase tracking-widest text-secondary">
                <div className="col-span-1 pl-2">Feature</div>
                <div className="col-span-1 text-signal font-bold">Insyte</div>
                <div className="col-span-1">Power BI</div>
                <div className="col-span-1">Tableau</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-primary/5">
                {comparisonData.map((row, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 p-6 items-center hover:bg-black/[0.01] transition-colors">
                        <div className="col-span-1 font-sans font-medium text-primary pl-2">
                            {row.feature}
                        </div>
                        <div className="col-span-1 font-sans text-sm text-primary font-medium flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-signal" />
                            {row.insyte}
                        </div>
                         <div className="col-span-1 font-sans text-sm text-secondary flex items-center gap-2">
                            <span className="opacity-50">—</span>
                            {row.bi}
                        </div>
                         <div className="col-span-1 font-sans text-sm text-secondary flex items-center gap-2">
                            <span className="opacity-50">—</span>
                            {row.tableau}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-sm text-tertiary font-mono">
                * Comparison based on typical analyst workflows and large-scale dataset benchmarks.
            </p>
        </div>
      </div>
    </section>
  );
}
