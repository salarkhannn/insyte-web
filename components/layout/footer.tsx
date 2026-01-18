export function Footer() {
  return (
    <footer className="relative py-12 bg-inset border-t border-primary/5">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-signal flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 bg-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight uppercase text-primary">
                Insyte
              </span>
              <span className="text-xs text-tertiary">
                AI-powered analytics for professionals
              </span>
            </div>
          </div>

          <div className="text-xs text-tertiary font-mono">
            © {new Date().getFullYear()} Insyte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
