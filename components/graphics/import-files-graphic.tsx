"use client";

export function ImportFilesGraphic() {
  const files = [
    { name: "revenue_q4_final.csv", size: "2.4 MB", type: "CSV" },
    { name: "customer_churn_2024.xlsx", size: "890 KB", type: "XLSX" },
    { name: "api_response_log.json", size: "145 KB", type: "JSON" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-4 top-8 bottom-0 flex flex-col gap-2">
        {files.map((file, i) => (
          <div 
            key={i}
            className="group relative flex items-center gap-3 p-2 rounded-lg bg-surface border border-primary/10 shadow-sm hover:border-signal/20 hover:shadow-md transition-all duration-300"
          >
            {/* File Icon */}
            <div className="w-8 h-8 rounded bg-panel border border-primary/5 flex items-center justify-center shrink-0">
              <span className="text-[6px] font-bold text-secondary font-mono">{file.type}</span>
            </div>
            
            {/* File Details */}
            <div className="flex-1 min-w-0">
              <div className="text-[8px] font-medium text-primary truncate">{file.name}</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[6px] text-tertiary">{file.size}</span>
                <span className="w-0.5 h-0.5 rounded-full bg-signal" />
                <span className="text-[6px] text-tertiary">Ready to import</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="w-5 h-5 rounded hover:bg-panel flex items-center justify-center border border-transparent hover:border-primary/5">
              <span className="text-[8px] text-primary">→</span>
            </div>
          </div>
        ))}

        {/* Upload Zone Hint */}
        <div className="mt-1 rounded-lg border border-dashed border-primary/10 bg-panel/30 p-3 flex flex-col items-center justify-center text-center">
          <span className="text-[7px] text-secondary font-medium">Drop files to upload</span>
          <span className="text-[6px] text-tertiary mt-0.5">Support for CSV, Excel, JSON, Parquet</span>
        </div>
      </div>
    </div>
  );
}
