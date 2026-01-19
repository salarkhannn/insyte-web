"use client";

export function ProjectHistoryGraphic() {
  const history = [
    { day: "Today", projects: [
      { name: "SaaS Metrics Q3", type: "Analysis", time: "10:24 AM" },
      { name: "User Retention Cohorts", type: "Visualization", time: "09:12 AM" }
    ]},
    { day: "Yesterday", projects: [
      { name: "Marketing Spend ROI", type: "Dashboard", time: "4:45 PM" }
    ]}
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-4 top-6 bottom-0 overflow-hidden">
        <div className="space-y-4">
          {history.map((group, groupIndex) => (
            <div key={group.day}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[7px] font-medium text-tertiary uppercase tracking-wider">{group.day}</span>
                <div className="h-px bg-primary/5 flex-1" />
              </div>
              <div className="space-y-1.5">
                {group.projects.map((project, i) => (
                  <div 
                    key={i}
                    className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-panel border border-transparent hover:border-primary/5 transition-colors"
                  >
                    {/* Project Icon */}
                    <div className="w-5 h-5 rounded-[2px] bg-surface border border-primary/10 flex items-center justify-center shrink-0 shadow-sm">
                      <div className={`w-2 h-2 rounded-[0.5px] ${i === 0 && groupIndex === 0 ? 'bg-signal' : 'bg-tertiary/40'}`} />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] font-medium text-primary truncate">{project.name}</span>
                        <span className="text-[6px] text-tertiary ml-2">{project.time}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[6px] text-tertiary">{project.type}</span>
                        {i === 0 && groupIndex === 0 && (
                          <span className="text-[5px] text-signal font-medium bg-signal/5 px-1 rounded-sm">Active</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
