import type { ReactNode } from "react";

interface BandProps {
  /** Rail label. Omit it and the band runs full width with no rail at all —
      an empty rail is worse than no rail. */
  label?: string;
  /** Second line in the rail: a count, a date, whatever is actually true. */
  meta?: string;
  ground?: "paper" | "white" | "ink" | "plum";
  children: ReactNode;
  className?: string;
}

/* A full-bleed horizontal section. Bands stack edge to edge and are separated
   by a rule rather than by gutters, so content sits on the page instead of
   floating above it in cards. */
export default function Band({ label, meta, ground = "paper", children, className = "" }: BandProps) {
  const dark = ground === "ink" || ground === "plum";
  return (
    <section className={`band band-${ground} ${className}`}>
      <div className="band-inner">
        {label ? (
          <div className="split">
            <div className="split-label">
              <span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{label}</span>
              {meta && (
                <span className={`block mt-2 font-mono text-[0.625rem] ${dark ? "text-white/40" : "text-slate-500"}`}>
                  {meta}
                </span>
              )}
            </div>
            <div className="min-w-0">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
