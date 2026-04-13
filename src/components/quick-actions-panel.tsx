import type { TaskItem } from "@/lib/edinburgh-data";

interface QuickActionsPanelProps {
  title: string;
  actions: TaskItem[];
}

export default function QuickActionsPanel({ title, actions }: QuickActionsPanelProps) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5">
      <h3 className="text-base font-bold text-slate-900">{title}</h3>
      <div className="mt-4 grid gap-2">
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 transition-colors"
          >
            <span className="mr-2">{action.emoji}</span>
            {action.title}
          </a>
        ))}
      </div>
    </section>
  );
}
