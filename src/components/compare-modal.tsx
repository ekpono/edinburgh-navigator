"use client";

import { useEffect } from "react";
import Link from "next/link";
import { type Neighbourhood, avgRent, LIFESTYLE_LABELS } from "@/lib/neighbourhoods";

const VIBE_CONFIG: { key: keyof Neighbourhood["vibes"]; label: string; emoji: string }[] = [
  { key: "nightlife", label: "Nightlife", emoji: "🍻" },
  { key: "family", label: "Family", emoji: "👨‍👩‍👧" },
  { key: "greenSpace", label: "Green Space", emoji: "🌳" },
  { key: "transport", label: "Transport", emoji: "🚌" },
  { key: "affordability", label: "Affordability", emoji: "💷" },
  { key: "community", label: "Community", emoji: "🤝" },
];

function VibeBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${(score / 5) * 100}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-slate-500 w-6 text-right font-medium">{score}/5</span>
    </div>
  );
}

function Winner({ neighbourhoods, field, label, format }: {
  neighbourhoods: Neighbourhood[];
  field: (n: Neighbourhood) => number;
  label: string;
  format: (v: number) => string;
}) {
  const values = neighbourhoods.map((n) => ({ n, v: field(n) }));
  const best = values.reduce((a, b) => (a.v > b.v ? a : b));
  return (
    <tr className="border-t border-slate-100">
      <td className="py-2 pr-4 text-xs text-slate-500 font-medium whitespace-nowrap">{label}</td>
      {values.map(({ n, v }) => (
        <td
          key={n.slug}
          className={`py-2 px-2 text-sm text-center font-semibold ${
            v === best.v ? "text-emerald-600" : "text-slate-700"
          }`}
        >
          {format(v)}
          {v === best.v && values.filter((x) => x.v === best.v).length === 1 && (
            <span className="ml-1 text-emerald-500">★</span>
          )}
        </td>
      ))}
    </tr>
  );
}

export default function CompareModal({
  neighbourhoods,
  onClose,
}: {
  neighbourhoods: Neighbourhood[];
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-white w-full sm:max-w-5xl max-h-[92vh] sm:max-h-[85vh] sm:rounded-2xl rounded-t-2xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50 flex-shrink-0">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">Side-by-side comparison</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {neighbourhoods.map((n) => n.name).join(" vs ")}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-900"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-5">
          {/* Neighbourhood headers */}
          <div
            className={`grid gap-4 mb-6`}
            style={{ gridTemplateColumns: `repeat(${neighbourhoods.length}, 1fr)` }}
          >
            {neighbourhoods.map((n) => (
              <div
                key={n.slug}
                className="rounded-xl p-4 text-white"
                style={{ backgroundColor: n.color }}
              >
                <div className="text-2xl mb-1">{n.emoji}</div>
                <div className="font-bold text-lg leading-tight">{n.name}</div>
                <div className="text-xs opacity-80 mt-0.5">{n.tagline}</div>
                <div className="mt-3 text-xs opacity-70">{n.postcode}</div>
              </div>
            ))}
          </div>

          {/* Key stats table */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6 overflow-x-auto">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              At a glance
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs text-slate-400 font-medium pb-2 pr-4 w-28">Metric</th>
                  {neighbourhoods.map((n) => (
                    <th key={n.slug} className="text-center text-xs text-slate-400 font-medium pb-2 px-2">
                      {n.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <Winner
                  neighbourhoods={neighbourhoods}
                  field={(n) => -avgRent(n)}
                  label="Avg 1-bed rent"
                  format={(v) => `£${Math.abs(v).toLocaleString()}/mo`}
                />
                <Winner
                  neighbourhoods={neighbourhoods}
                  field={(n) => -n.transport.walkToCentre}
                  label="Walk to centre"
                  format={(v) => `${Math.abs(v)} min`}
                />
                <tr className="border-t border-slate-100">
                  <td className="py-2 pr-4 text-xs text-slate-500 font-medium">Tram</td>
                  {neighbourhoods.map((n) => (
                    <td key={n.slug} className="py-2 px-2 text-center text-sm">
                      {n.transport.tram ? (
                        <span className="text-emerald-600 font-semibold">Yes ✓</span>
                      ) : (
                        <span className="text-slate-400">No</span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="py-2 pr-4 text-xs text-slate-500 font-medium">Cycling</td>
                  {neighbourhoods.map((n) => (
                    <td key={n.slug} className="py-2 px-2 text-center text-sm text-slate-700 capitalize font-medium">
                      {n.transport.cyclingScore}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="py-2 pr-4 text-xs text-slate-500 font-medium">Council tax</td>
                  {neighbourhoods.map((n) => (
                    <td key={n.slug} className="py-2 px-2 text-center text-sm text-slate-700">
                      Band {n.councilTaxBand}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rents comparison */}
          <div className="bg-slate-50 rounded-xl p-4 mb-6 overflow-x-auto">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Monthly rents
            </h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs text-slate-400 font-medium pb-2 pr-4 w-28">Type</th>
                  {neighbourhoods.map((n) => (
                    <th key={n.slug} className="text-center text-xs text-slate-400 font-medium pb-2 px-2">
                      {n.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(["studio", "oneBed", "twoBed", "threeBed"] as const).map((type) => {
                  const labels = { studio: "Studio", oneBed: "1 bedroom", twoBed: "2 bedroom", threeBed: "3 bedroom" };
                  return (
                    <tr key={type} className="border-t border-slate-100">
                      <td className="py-2 pr-4 text-xs text-slate-500 font-medium">{labels[type]}</td>
                      {neighbourhoods.map((n) => (
                        <td key={n.slug} className="py-2 px-2 text-sm text-center text-slate-700 font-medium">
                          £{n.rents[type].min.toLocaleString()}–{n.rents[type].max.toLocaleString()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Vibe scores */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Neighbourhood vibes
            </h3>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${neighbourhoods.length}, 1fr)` }}
            >
              {neighbourhoods.map((n) => (
                <div key={n.slug} className="bg-slate-50 rounded-xl p-4 space-y-3">
                  <div className="text-sm font-bold text-slate-800 mb-2">{n.name}</div>
                  {VIBE_CONFIG.map(({ key, label, emoji }) => (
                    <div key={key}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-500">{emoji} {label}</span>
                      </div>
                      <VibeBar score={n.vibes[key]} color={n.color} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Best for */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
              Best for
            </h3>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: `repeat(${neighbourhoods.length}, 1fr)` }}
            >
              {neighbourhoods.map((n) => (
                <div key={n.slug} className="bg-slate-50 rounded-xl p-4">
                  <div className="text-sm font-bold text-slate-800 mb-2">{n.name}</div>
                  <ul className="space-y-1.5">
                    {n.bestFor.map((item) => (
                      <li key={item} className="text-xs text-slate-600 flex items-start gap-1.5">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(${neighbourhoods.length}, 1fr)` }}
          >
            {neighbourhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighbourhoods/${n.slug}`}
                onClick={onClose}
                className="text-center text-sm font-semibold py-2.5 px-4 rounded-xl text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: n.color }}
              >
                Full guide: {n.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
