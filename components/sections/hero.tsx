import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-chassis">
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
      
      <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl px-6">
        {/* Status Indicator */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-primary/5 bg-surface/50 px-4 py-1.5 backdrop-blur-sm shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_0_0_1px_rgba(255,255,255,0.5)]">
          <div className="h-2 w-2 rounded-full bg-signal animate-pulse shadow-[0_0_8px_var(--signal)]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-secondary font-bold">
            Pre-launch Protocol Active
          </span>
        </div>

        {/* Main Heading with Industrial Serif */}
        <h1 className="text-6xl md:text-8xl font-serif font-normal tracking-tight text-primary mb-6 drop-shadow-sm leading-[0.95] z-10 relative">
          AI-Powered Analytics, <br />
          <span className="text-primary/40 italic">Without the Friction</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-secondary max-w-2xl mb-12 font-sans font-normal leading-relaxed">
          Build Tableau- and Power BI-level analytics with a faster workflow, 
          modern architecture, and AI-assisted intelligence — without sacrificing control.
        </p>

        {/* CTA Group */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          <Button variant="default" size="default">
            JOIN THE WAITLIST
          </Button>
          
          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-tertiary uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" /> 
              DESKTOP NATIVE
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full" /> 
              LOCAL FIRST
            </span>
          </div>
        </div>

        {/* Decorative Hardware Elements */}
        <div className="absolute bottom-12 left-0 w-full flex justify-between px-12 opacity-30 pointer-events-none mix-blend-multiply">
             <div className="flex gap-1">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-6 bg-primary/20" />
                 ))}
             </div>
             <div className="flex gap-1">
                 {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-6 bg-primary/20" />
                 ))}
             </div>
        </div>
      </div>
    </section>
  );
}
