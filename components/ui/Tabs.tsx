export function Tabs({ tabs }: { tabs: string[] }) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {tabs.map((tab, i) => (
        <button key={tab} className={`rounded-lg px-3 py-1.5 text-sm ${i === 0 ? "bg-primary text-bg" : "bg-surface border border-border"}`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
