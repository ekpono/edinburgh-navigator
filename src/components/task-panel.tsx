import Link from "next/link";
import type { TaskItem } from "@/lib/edinburgh-data";

interface TaskPanelProps {
  title: string;
  subtitle?: string;
  tasks: TaskItem[];
}

export default function TaskPanel({ title, subtitle, tasks }: TaskPanelProps) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {tasks.map((task) => {
          const isExternal = task.href.startsWith("http") || task.href.startsWith("tel:") || task.href.startsWith("mailto:");
          const card = (
            <div className="flex items-start gap-3">
              <div className="text-xl">{task.emoji}</div>
              <div className="min-w-0">
                <div className="font-semibold text-sm text-slate-900 group-hover:underline">
                  {task.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">{task.description}</div>
                {task.updatedAt && <div className="text-xs text-slate-400 mt-2">Updated {task.updatedAt}</div>}
              </div>
            </div>
          );

          if (isExternal) {
            return (
              <a
                key={task.id}
                href={task.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                {card}
              </a>
            );
          }

          return (
            <Link
              key={task.id}
              href={task.href}
              className="group rounded-xl border border-slate-200 p-4 hover:border-slate-400 transition-colors"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
