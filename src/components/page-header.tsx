interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
      <div>
        <h2 className="font-bold text-base">{title}</h2>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
      <div className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
        Emergency? Call 999
      </div>
    </header>
  );
}
