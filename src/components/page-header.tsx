interface PageHeaderProps {
  title: string;
  subtitle: string;
  /** Optional group label — the band this page sits in, matching the sidebar. */
  section?: string;
}

/* The masthead band. Every page opens on the same Edinburgh-plum plate so you
   always know you are still inside the same directory, and the 999 line sits
   in the same place on every one of them. */
export default function PageHeader({ title, subtitle, section }: PageHeaderProps) {
  return (
    <header className="band band-plum">
      <div className="band-inner py-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            {section && <span className="eyebrow eyebrow-dark mb-3 max-w-fit">{section}</span>}
            <h1 className="text-white text-3xl sm:text-[2.75rem]">{title}</h1>
            <p className="mt-2.5 text-[0.9375rem] text-white/70 leading-relaxed max-w-xl">{subtitle}</p>
          </div>
          <a
            href="tel:999"
            className="flex-shrink-0 self-start sm:self-end border-l-2 border-red-500 pl-3 py-0.5 group"
          >
            <span className="block font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/50">
              Emergency
            </span>
            <span className="display block text-red-500 text-xl leading-tight group-hover:underline">
              Call 999
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
