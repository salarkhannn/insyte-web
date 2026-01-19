"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const pieData = [
  { name: "PCLN", value: 80.6, color: "#4e79a7" },
  { name: "GOOG", value: 3.1, color: "#f28e2b" },
  { name: "GOOGL", value: 1.7, color: "#e15759" },
  { name: "AZO", value: 1.6, color: "#76b7b2" },
  { name: "AMZN", value: 1.4, color: "#59a14f" },
  { name: "CMG", value: 1.2, color: "#edc948" },
  { name: "Others", value: 10.4, color: "#b07aa1" },
];

export function AppPreviewGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Desktop app window */}
      <div className="absolute inset-2 rounded-lg bg-surface border border-primary/10 shadow-sm overflow-hidden flex flex-col">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-2 py-1 bg-panel border-b border-primary/10">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[6px] font-medium text-tertiary">insyte</span>
          <div className="w-6" />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chart Panel */}
          <div className="flex-1 flex flex-col overflow-hidden relative">
            {/* Chart Header */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 border-b border-primary/5">
              <span className="text-[10px] font-semibold text-primary">Average Open Stocks by Name</span>
              <span className="text-[7px] text-tertiary">(619,040 records)</span>
              <span className="text-[7px] text-[#59a14f] font-medium">◉ Data optimized</span>
            </div>
            {/* Shelves (BI Tool Style) */}
            <div className="flex border-b border-primary/5 bg-panel/30">
               <div className="flex items-center px-2 py-1 border-r border-primary/5 gap-1.5">
                  <span className="text-[6px] font-medium text-tertiary uppercase tracking-wider">Dimension</span>
                  <div className="px-1.5 py-0.5 bg-surface rounded-[2px] border border-primary/10 flex items-center gap-1">
                     <span className="text-[6px] text-primary font-medium">Company Name</span>
                     <span className="text-[5px] text-tertiary">▼</span>
                  </div>
               </div>
               <div className="flex items-center px-2 py-1 gap-1.5">
                  <span className="text-[6px] font-medium text-tertiary uppercase tracking-wider">Measure</span>
                  <div className="px-1.5 py-0.5 bg-surface rounded-[2px] border border-primary/10 flex items-center gap-1">
                     <span className="text-[6px] text-primary font-medium">Avg. Open</span>
                     <span className="text-[5px] text-tertiary">▼</span>
                  </div>
               </div>
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 relative flex items-center justify-center bg-surface/30">
              {/* Floating Marks/Legend Card */}
              <div className="absolute top-2 left-2 z-10 bg-surface/90 backdrop-blur-sm border border-primary/10 rounded-md p-2 w-20">
                 <div className="text-[6px] font-semibold text-primary mb-1.5 uppercase tracking-wider">Legend</div>
                 <div className="space-y-1">
                   {pieData.slice(0, 5).map((item) => (
                     <div key={item.name} className="flex items-center justify-between">
                       <div className="flex items-center gap-1">
                         <div className="w-1.5 h-1.5 rounded-[1px]" style={{ backgroundColor: item.color }} />
                         <span className="text-[6px] text-secondary">{item.name}</span>
                       </div>
                       <span className="text-[5px] text-tertiary font-mono">{item.value}%</span>
                     </div>
                   ))}
                   <div className="flex items-center gap-1 pt-0.5 border-t border-primary/5">
                      <span className="text-[5px] text-tertiary italic">+2 others</span>
                   </div>
                 </div>
              </div>

              <div className="w-[1080px] h-[600px] relative -ml-8">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-panel border border-primary/10 rounded px-2 py-1.5">
                              <p className="text-[8px] font-bold text-primary mb-0.5">{payload[0].name}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-[7px] text-tertiary">Value:</span>
                                <span className="text-[7px] font-mono text-signal">{payload[0].value}%</span>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius="90%"
                      dataKey="value"
                      strokeWidth={1}
                      stroke="var(--bg-surface)"
                      animationDuration={750}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Filters Bar */}
            <div className="px-2 py-1 border-t border-primary/5 flex items-center gap-2 bg-panel/30">
              <span className="text-[5px] font-medium text-tertiary uppercase tracking-wider">Filters:</span>
              <div className="flex items-center gap-1 px-1 py-0.5 bg-primary/5 rounded border border-primary/5">
                <span className="text-[5px] text-secondary">Year: 2024</span>
                <span className="text-[4px] text-tertiary">✕</span>
              </div>
              <div className="flex items-center gap-1 px-1 py-0.5 bg-primary/5 rounded border border-primary/5">
                 <span className="text-[5px] text-secondary">Region: All</span>
                 <span className="text-[4px] text-tertiary">▼</span>
              </div>
            </div>
            
            {/* Sheet Tabs */}
            <div className="flex items-center border-t border-primary/10 bg-panel">
              <div className="px-2 py-1 text-[5px] text-tertiary border-r border-primary/10">Sheet 1</div>
              <div className="px-2 py-1 text-[5px] text-tertiary border-r border-primary/10">Sheet 2</div>
              <div className="px-2 py-1 text-[5px] text-tertiary border-r border-primary/10">Sheet 3</div>
              <div className="px-2 py-1 text-[5px] text-signal font-medium bg-surface border-r border-primary/10">Sheet 4</div>
              <div className="px-1.5 py-1 text-[6px] text-tertiary">+</div>
            </div>
          </div>
          
          {/* Chat Panel */}
          {/* Chat Panel - IDE Style */}
          <div className="w-64 border-l border-primary/10 flex flex-col bg-panel">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-primary/10 h-[29px] bg-panel">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-signal rounded-full animate-pulse" />
                <span className="text-[10px] font-medium text-primary">Data Assistant</span>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-3 space-y-5 overflow-hidden font-sans">
              
              {/* Message Group 1 */}
              <div className="space-y-4">
                {/* User */}
                <div className="flex justify-end pl-4">
                  <div className="space-y-1 text-right">
                    <p className="text-[9px] text-primary leading-relaxed bg-surface border border-primary/5 px-2 py-1.5 rounded-lg rounded-tr-sm inline-block">
                      load the revenue dataset
                    </p>
                    <div className="text-[7px] text-tertiary">11:41 AM</div>
                  </div>
                </div>

                {/* AI */}
                <div className="flex justify-start pr-4">
                  <div className="space-y-2">
                    <p className="text-[9px] text-secondary leading-relaxed">
                      I've loaded 425,000 records. Found 3 key segments: Enterprise, Mid-Market, and SMB.
                    </p>
                    <div className="text-[7px] text-tertiary">11:41 AM</div>
                  </div>
                </div>
              </div>

              {/* Message Group 2 */}
              <div className="space-y-4">
                {/* User */}
                <div className="flex justify-end pl-4">
                  <div className="space-y-1 text-right">
                    <p className="text-[9px] text-primary leading-relaxed bg-surface border border-primary/5 px-2 py-1.5 rounded-lg rounded-tr-sm inline-block">
                      create a pie chart for open stocks
                    </p>
                    <div className="text-[7px] text-tertiary">11:43 AM</div>
                  </div>
                </div>

                {/* AI */}
                <div className="flex justify-start pr-4">
                  <div className="space-y-2">
                    <p className="text-[9px] text-secondary leading-relaxed">
                      Generated chart for open stock prices by company. PCLN and Others are the dominant segments.
                    </p>

                   {/* Tool Output / Attachment Card */}
                   <div className="flex items-center gap-2 px-2 py-1.5 bg-surface border border-primary/10 rounded-md max-w-fit pointer-events-none">
                     <div className="w-2.5 h-2.5 rounded-[1px] bg-blue-500/20 flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-[0.5px] bg-blue-500" />
                     </div>
                     <span className="text-[8px] font-medium text-primary">Chart Generated</span>
                     <div className="h-2 w-px bg-primary/10 mx-1" />
                     <span className="text-[8px] text-signal cursor-pointer hover:underline">View Details</span>
                   </div>
                   <div className="text-[7px] text-tertiary">11:43 AM</div>
                 </div>
              </div>
            </div>
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-primary/10 bg-surface/50">
              <div className="flex gap-2 items-center px-2 py-1.5 bg-surface border border-primary/10 rounded-md">
                 <span className="text-[10px] text-signal">›</span>
                 <span className="text-[9px] text-tertiary">Ask follow-up question...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fade gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface via-surface/80 to-transparent" />
    </div>
  );
}
