import { ChartBar, Lightning, Cpu, ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

function ChartGraphic() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 px-8 pb-24 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]">
      <div className="w-14 h-20 rounded-lg bg-panel border border-primary/10 p-2 flex flex-col">
        <div className="text-[9px] font-mono text-secondary truncate mb-2">dat...</div>
        <div className="space-y-1.5 flex-1">
          <div className="h-1.5 w-full bg-signal/60 rounded" />
          <div className="h-1.5 w-3/4 bg-signal/40 rounded" />
          <div className="h-1.5 w-full bg-signal/30 rounded" />
        </div>
      </div>
      <div className="w-14 h-24 rounded-lg bg-panel border border-primary/10 p-2 flex flex-col">
        <div className="text-[9px] font-mono text-secondary truncate mb-2">sal...</div>
        <div className="space-y-1.5 flex-1">
          <div className="h-1.5 w-full bg-signal/70 rounded" />
          <div className="h-1.5 w-1/2 bg-signal/50 rounded" />
          <div className="h-1.5 w-3/4 bg-signal/40 rounded" />
          <div className="h-1.5 w-full bg-signal/30 rounded" />
        </div>
      </div>
      <div className="w-14 h-16 rounded-lg bg-panel border border-primary/10 p-2 flex flex-col">
        <div className="text-[9px] font-mono text-secondary truncate mb-2">met...</div>
        <div className="space-y-1.5 flex-1">
          <div className="h-1.5 w-full bg-signal/50 rounded" />
          <div className="h-1.5 w-2/3 bg-signal/30 rounded" />
        </div>
      </div>
    </div>
  );
}

function NotificationGraphic() {
  const notifications = [
    { color: "bg-signal", label: "Chart updated", time: "2m ago" },
    { color: "bg-emerald-500", label: "Data synced", time: "5m ago" },
    { color: "bg-blue-500", label: "Export ready", time: "12m ago" },
  ];
  return (
    <div className="absolute top-8 right-4 left-4 space-y-2 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
      {notifications.map((n, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-panel/80 border border-primary/5"
        >
          <div className={`w-2.5 h-2.5 rounded-full ${n.color}`} />
          <span className="text-sm text-primary flex-1 font-medium">{n.label}</span>
          <span className="text-xs text-tertiary">{n.time}</span>
        </div>
      ))}
    </div>
  );
}

function IntegrationGraphic() {
  const nodes = [
    { x: 55, y: 15, color: "bg-signal" },
    { x: 70, y: 45, color: "bg-blue-500" },
    { x: 55, y: 75, color: "bg-emerald-500" },
    { x: 70, y: 105, color: "bg-violet-500" },
  ];
  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 140">
        {nodes.map((node, i) => (
          <line
            key={i}
            x1="25"
            y1="60"
            x2={node.x - 5}
            y2={node.y + 5}
            stroke="var(--tertiary)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />
        ))}
      </svg>
      <div className="absolute left-4 top-12 w-10 h-10 rounded-xl bg-panel border border-primary/10 flex items-center justify-center">
        <Cpu size={20} weight="duotone" className="text-signal" />
      </div>
      <div className="absolute left-4 top-24 w-8 h-8 rounded-lg bg-inset flex items-center justify-center">
        <ArrowsClockwise size={14} className="text-tertiary" />
      </div>
      {nodes.map((node, i) => (
        <div
          key={i}
          className={`absolute w-5 h-5 rounded-full ${node.color}`}
          style={{ left: `${node.x}%`, top: node.y }}
        />
      ))}
    </div>
  );
}

function WorkflowGraphic() {
  const days = ["Mo", "Tu", "We", "Th", "Fr"];
  const cells = [
    [0.4, 0.7, 0.5, 0.8, 0.6],
    [0.6, 0.5, 0.9, 0.4, 0.7],
  ];
  return (
    <div className="absolute top-6 right-4 left-4 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]">
      <div className="rounded-xl bg-panel/80 border border-primary/10 p-4">
        <div className="text-[10px] font-mono text-secondary uppercase tracking-widest mb-3">
          Workflow
        </div>
        <div className="grid grid-cols-5 gap-2 text-[9px] font-mono text-tertiary text-center mb-2">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="space-y-2">
          {cells.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-5 gap-2">
              {row.map((opacity, colIdx) => (
                <div
                  key={colIdx}
                  className="aspect-[4/3] rounded-md bg-signal"
                  style={{ opacity }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: ChartBar,
    name: "Visual Analytics",
    description: "Drag-and-drop charts with statistical overlays.",
    className: "col-span-3 lg:col-span-1",
    background: ChartGraphic,
  },
  {
    icon: Lightning,
    name: "Live Feedback",
    description: "Instant visual output as you build.",
    className: "col-span-3 lg:col-span-2",
    background: NotificationGraphic,
  },
  {
    icon: Cpu,
    name: "AI-Powered",
    description: "Suggestions and automation that accelerate your workflow.",
    className: "col-span-3 lg:col-span-2",
    background: IntegrationGraphic,
  },
  {
    icon: ArrowsClockwise,
    name: "Multi-Worksheet",
    description: "Iterate across worksheets and compose dashboards.",
    className: "col-span-3 lg:col-span-1",
    background: WorkflowGraphic,
  },
];

export function FeaturesGrid() {
  return (
    <section className="relative py-24 md:py-32 bg-chassis">
      <div className="container mx-auto max-w-6xl px-6">
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
        </div>

        <div className="grid grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const Background = feature.background;
            return (
              <div
                key={feature.name}
                className={cn(
                  "group relative min-h-[280px] rounded-2xl bg-surface border border-primary/5 overflow-hidden",
                  "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_2px_8px_rgba(0,0,0,0.04)]",
                  feature.className
                )}
              >
                <Background />
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-12 bg-gradient-to-t from-surface via-surface/95 to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-inset flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
                      <Icon size={16} weight="duotone" className="text-signal" />
                    </div>
                    <h3 className="text-base font-sans font-semibold text-primary">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">
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
