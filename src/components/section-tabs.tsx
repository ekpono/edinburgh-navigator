"use client";

interface Tab {
  id: string;
  label: string;
}

interface SectionTabsProps {
  tabs: Tab[];
  active: string;
  onChange: (id: string) => void;
}

export default function SectionTabs({ tabs, active, onChange }: SectionTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
            active === t.id
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
