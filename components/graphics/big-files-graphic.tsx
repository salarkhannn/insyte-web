"use client";

export function BigFilesGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Desktop Interface */}
      <div className="absolute inset-2 top-6 rounded-lg bg-surface border border-primary/10 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-panel border-b border-primary/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-sm bg-surface border border-primary/5">
              <div className="w-1.5 h-1.5 rounded-full bg-signal" />
              <span className="text-[6px] font-medium text-primary">Live Connection</span>
            </div>
            <span className="text-[6px] text-tertiary">1,240,500 rows</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-[1px] bg-tertiary/20" />
            <div className="w-2 h-2 rounded-[1px] bg-tertiary/20" />
          </div>
        </div>

        {/* Data Grid */}
        <div className="flex-1 overflow-hidden relative">
          {/* Header Row */}
          <div className="flex border-b border-primary/5 bg-panel/30">
            <div className="w-8 px-2 py-1 border-r border-primary/5 text-[5px] font-medium text-tertiary">#</div>
            <div className="flex-1 px-2 py-1 border-r border-primary/5 text-[5px] font-medium text-tertiary">Timestamp</div>
            <div className="flex-1 px-2 py-1 border-r border-primary/5 text-[5px] font-medium text-tertiary">Transaction ID</div>
            <div className="flex-1 px-2 py-1 border-r border-primary/5 text-[5px] font-medium text-tertiary text-right">Value</div>
            <div className="w-12 px-2 py-1 text-[5px] font-medium text-tertiary">Status</div>
          </div>

          {/* Rows */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex border-b border-primary/5 items-center hover:bg-white/5">
              <div className="w-8 px-2 py-1 text-[5px] text-tertiary font-mono">{i + 1}</div>
              <div className="flex-1 px-2 py-1 text-[5px] text-secondary">2024-03-{(10 + i).toString().padStart(2, '0')}</div>
              <div className="flex-1 px-2 py-1 text-[5px] text-primary font-mono">TRX-89{90 + i}</div>
              <div className="flex-1 px-2 py-1 text-[5px] text-primary text-right font-mono">${(1200.50 + i * 150.25).toFixed(2)}</div>
              <div className="w-12 px-2 py-1">
                <div className={`w-fit px-1 py-[1px] rounded-[2px] text-[4px] font-medium border ${
                  i % 3 === 0 ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : 
                  "bg-blue-500/10 text-blue-500 border-blue-500/20"
                }`}>
                  {i % 3 === 0 ? "VERIFIED" : "PENDING"}
                </div>
              </div>
            </div>
          ))}

          {/* Virtual Scroll Indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-panel border-l border-primary/5">
            <div className="w-full h-8 bg-tertiary/20 rounded-full mt-2" />
          </div>
        </div>

        {/* Footer */}
        <div className="px-2 py-1 bg-panel border-t border-primary/10 flex items-center justify-between">
          <span className="text-[5px] text-tertiary">Page 1 of 24,810</span>
          <div className="flex gap-1">
            <span className="text-[5px] text-primary font-medium">Next Page →</span>
          </div>
        </div>
      </div>
    </div>
  );
}
