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

/* Tabs sit on a rule and mark the current one with a brass underline, rather
   than floating as a row of pills. */
export default function SectionTabs({ tabs, active, onChange }: SectionTabsProps) {
  return (
    <div className="flex flex-wrap border-b border-slate-200 mb-7" role="tablist">
      {tabs.map((t) => {
        const selected = active === t.id;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(t.id)}
            className={`relative -mb-px px-4 py-2.5 text-sm transition-colors ${
              selected
                ? "font-semibold text-slate-900 border-b-2 border-amber-600"
                : "text-slate-500 border-b-2 border-transparent hover:text-slate-900 hover:border-slate-200"
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
