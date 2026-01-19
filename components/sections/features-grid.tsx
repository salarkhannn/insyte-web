import { cn } from "@/lib/utils";
import { AppPreviewGraphic } from "@/components/graphics/app-preview";
import { BigFilesGraphic } from "@/components/graphics/big-files-graphic";
import { ImportFilesGraphic } from "@/components/graphics/import-files-graphic";
import { ProjectHistoryGraphic } from "@/components/graphics/project-history-graphic";



const features = [
  {
    name: "Ask your data. Get a chart.",
    description: "Go from a question to a clean visualization—with a clear explanation of what Insyte did.",
    className: "col-span-3 row-span-2 lg:col-span-2 lg:row-span-3",
    background: AppPreviewGraphic,
    isLarge: true,
  },
  {
    name: "Big files, smooth experience.",
    description: "Explore large datasets safely: paginated tables and smart point-reduction when visuals get dense.",
    className: "col-span-3 lg:col-span-1",
    background: BigFilesGraphic,
  },
  {
    name: "Import the files you actually have.",
    description: "Open CSV, Excel, or JSON, inspect columns instantly, and start analyzing in seconds.",
    className: "col-span-3 lg:col-span-1",
    background: ImportFilesGraphic,
  },
  {
    name: "Projects that remember your work.",
    description: "Save complete analysis sessions—sheets, visuals, and query history—so insights stay reproducible.",
    className: "col-span-3 lg:col-span-1",
    background: ProjectHistoryGraphic,
  },
];

export function FeaturesGrid() {
  return (
    <section className="relative bg-chassis">
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              Platform Overview
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            What Insyte Is
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Insyte is a professional, desktop-grade analytics application designed for serious data work.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 auto-rows-[240px]">
          {features.map((feature) => {
            const Background = feature.background;
            const isLarge = 'isLarge' in feature && feature.isLarge;
            return (
              <div
                key={feature.name}
                className={cn(
                  "group relative rounded-2xl bg-surface border border-primary/5 overflow-hidden",
                  feature.className
                )}
              >
                <Background />
                {/* Inner glow effect - full card */}
                <div className="absolute inset-0 z-10 shadow-[inset_0_0_50px_var(--surface)] pointer-events-none rounded-2xl" />
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface via-surface/95 to-transparent",
                  isLarge ? "p-8 pt-16" : "p-5 pt-10"
                )}>
                  <h3 className={cn(
                    "font-semibold text-primary mb-2",
                    isLarge ? "text-lg" : "text-base"
                  )}>
                    {feature.name}
                  </h3>
                  <p className={cn(
                    "text-secondary leading-relaxed",
                    isLarge ? "text-base" : "text-sm"
                  )}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
