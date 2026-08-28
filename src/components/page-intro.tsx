import type { ReactNode } from "react";

interface PageIntroProps {
  /** Short rail label for this band. */
  label?: string;
  /** The standfirst — one or two sentences on what this page is for. */
  children: ReactNode;
  /** Optional Scotland-specific note, rendered as the green entitlement plate. */
  note?: ReactNode;
  /** Heading for the note, when it needs one. */
  noteTitle?: string;
}

/* Replaces the intro card that opened all 19 section pages — a white rounded
   box holding a second copy of the page title with a differently-coloured
   accent word on every page. The title now lives once, in the masthead. */
export default function PageIntro({ label = "In brief", children, note, noteTitle }: PageIntroProps) {
  return (
    <section className="band band-white">
      <div className="band-inner">
        <div className="split">
          <div className="split-label">
            <span className="eyebrow">{label}</span>
          </div>
          <div>
            <div className="text-lg sm:text-xl leading-relaxed text-slate-900">{children}</div>
            {note && (
              <div className="mt-7 border-l-2 border-emerald-700 bg-emerald-50 px-5 py-4">
                {noteTitle && (
                  <div className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-emerald-900 mb-2">
                    {noteTitle}
                  </div>
                )}
                <div className="text-[0.9375rem] text-emerald-900 leading-relaxed">{note}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
