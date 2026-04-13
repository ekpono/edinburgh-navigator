import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  NEIGHBOURHOODS,
  getNeighbourhood,
  getSimilarNeighbourhoods,
  avgRent,
  AREA_LABELS,
  LIFESTYLE_LABELS,
  type Neighbourhood,
} from "@/lib/neighbourhoods";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return NEIGHBOURHOODS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNeighbourhood(slug);
  if (!n) return {};
  return {
    title: `${n.name} — Edinburgh Neighbourhood Guide`,
    description: n.description,
  };
}

const VIBE_CONFIG: {
  key: keyof Neighbourhood["vibes"];
  label: string;
  emoji: string;
}[] = [
  { key: "nightlife", label: "Nightlife", emoji: "🍻" },
  { key: "family", label: "Family-friendly", emoji: "👨‍👩‍👧" },
  { key: "greenSpace", label: "Green Space", emoji: "🌳" },
  { key: "transport", label: "Transport", emoji: "🚌" },
  { key: "affordability", label: "Affordability", emoji: "💷" },
  { key: "community", label: "Community", emoji: "🤝" },
];

function VibeBar({
  score,
  color,
  label,
  emoji,
}: {
  score: number;
  color: string;
  label: string;
  emoji: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-36 text-sm text-slate-600 flex items-center gap-1.5 flex-shrink-0">
        <span>{emoji}</span>
        <span>{label}</span>
      </div>
      <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${(score / 5) * 100}%`, backgroundColor: color }}
        />
      </div>
      <div className="text-sm font-semibold text-slate-700 w-8 text-right">{score}/5</div>
    </div>
  );
}

function RentCard({
  label,
  range,
  color,
}: {
  label: string;
  range: { min: number; max: number };
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="text-xs text-slate-500 mb-1 font-medium">{label}</div>
      <div className="text-xl font-bold text-slate-900">
        £{range.min.toLocaleString()}
        <span className="text-slate-400 font-normal text-base">–</span>
        £{range.max.toLocaleString()}
      </div>
      <div className="text-xs text-slate-400 mt-0.5">per month</div>
    </div>
  );
}

export default async function NeighbourhoodDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const n = getNeighbourhood(slug);
  if (!n) notFound();

  const similar = getSimilarNeighbourhoods(n);
  const rent = avgRent(n);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back link */}
      <div className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3">
          <Link
            href="/neighbourhoods"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All neighbourhoods
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        className="text-white relative overflow-hidden"
        style={{ backgroundColor: n.color }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <div className="text-5xl mb-4">{n.emoji}</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-2">{n.name}</h1>
              <p className="text-lg opacity-80 max-w-lg">{n.tagline}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-white/15 px-3 py-1 rounded-full font-medium">
                  {n.postcode}
                </span>
                <span className="text-xs bg-white/15 px-3 py-1 rounded-full font-medium">
                  {AREA_LABELS[n.area]} Edinburgh
                </span>
                {n.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/15 px-3 py-1 rounded-full font-medium"
                  >
                    {LIFESTYLE_LABELS[tag]}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stat bubble */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 flex-shrink-0 sm:min-w-48 border border-white/20">
              <div className="text-xs opacity-70 mb-1">Average 1-bed rent</div>
              <div className="text-3xl font-bold">
                £{rent.toLocaleString()}
                <span className="text-base font-normal opacity-70">/mo</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/20 grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs opacity-70">Centre</div>
                  <div className="font-semibold">{n.transport.walkToCentre} min</div>
                </div>
                <div>
                  <div className="text-xs opacity-70">Tram</div>
                  <div className="font-semibold">{n.transport.tram ? "Yes ✓" : "No"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-8">
        {/* About + vibes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Description */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-900 text-lg mb-4">About {n.name}</h2>
            <p className="text-slate-600 leading-relaxed">{n.longDescription}</p>
          </div>

          {/* Vibe scores */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-900 text-lg mb-4">Neighbourhood vibes</h2>
            <div className="space-y-3.5">
              {VIBE_CONFIG.map(({ key, label, emoji }) => (
                <VibeBar
                  key={key}
                  score={n.vibes[key]}
                  color={n.color}
                  label={label}
                  emoji={emoji}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rents */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900 text-lg">Rental prices</h2>
            <span className="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              Typical market rates 2025
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <RentCard label="Studio" range={n.rents.studio} color={n.color} />
            <RentCard label="1 bedroom" range={n.rents.oneBed} color={n.color} />
            <RentCard label="2 bedrooms" range={n.rents.twoBed} color={n.color} />
            <RentCard label="3 bedrooms" range={n.rents.threeBed} color={n.color} />
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-xs text-amber-800">
              <strong>Scottish law note:</strong> All rentals use a Private Residential Tenancy
              (PRT). No fixed-term end date can force you to leave — only a valid{" "}
              <em>notice to leave</em> with a legal ground applies. SafeDeposits Scotland holds
              your deposit independently.
            </p>
          </div>
        </div>

        {/* Pros + Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Highlights */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <span
                className="size-7 rounded-lg flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: n.color }}
              >
                ✓
              </span>
              Why people love it
            </h2>
            <ul className="space-y-2.5">
              {n.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Watch out */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
              <span className="size-7 rounded-lg flex items-center justify-center bg-amber-500 text-white text-sm">
                !
              </span>
              Things to know
            </h2>
            <ul className="space-y-2.5">
              {n.watchOut.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">⚠</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transport */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 text-lg mb-5">Getting around</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-1">🚶</div>
              <div className="text-xs text-slate-500 mb-1">Walk to centre</div>
              <div className="font-bold text-slate-900">{n.transport.walkToCentre} min</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-1">🚋</div>
              <div className="text-xs text-slate-500 mb-1">Tram</div>
              <div className={`font-bold ${n.transport.tram ? "text-emerald-600" : "text-slate-400"}`}>
                {n.transport.tram ? `Yes — ${n.transport.tramStop}` : "Not served"}
              </div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-1">🚌</div>
              <div className="text-xs text-slate-500 mb-1">Key buses</div>
              <div className="font-bold text-slate-900 text-sm">
                {n.transport.keyBusRoutes.slice(0, 4).join(", ")}
                {n.transport.keyBusRoutes.length > 4 && ` +${n.transport.keyBusRoutes.length - 4}`}
              </div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <div className="text-2xl mb-1">🚲</div>
              <div className="text-xs text-slate-500 mb-1">Cycling</div>
              <div
                className={`font-bold capitalize ${
                  n.transport.cyclingScore === "excellent"
                    ? "text-emerald-600"
                    : n.transport.cyclingScore === "good"
                    ? "text-sky-600"
                    : n.transport.cyclingScore === "fair"
                    ? "text-amber-500"
                    : "text-red-500"
                }`}
              >
                {n.transport.cyclingScore}
              </div>
            </div>
          </div>
        </div>

        {/* Best for */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 text-lg mb-4">Who is {n.name} best for?</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {n.bestFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{ backgroundColor: n.color + "0d" }}
              >
                <span
                  className="size-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: n.color }}
                >
                  ✓
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Council tax */}
        <div
          className="rounded-2xl p-5 border text-white flex items-start gap-4"
          style={{ backgroundColor: n.color }}
        >
          <div className="text-2xl flex-shrink-0">🏛️</div>
          <div>
            <div className="font-bold text-lg">Council Tax: Band {n.councilTaxBand}</div>
            <p className="text-sm opacity-80 mt-1">
              Scottish council tax bands differ from England. Students are fully exempt — contact
              City of Edinburgh Council to apply. Single occupancy gets 25% off. Check
              your specific property band at mygov.scot.
            </p>
          </div>
        </div>

        {/* Similar neighbourhoods */}
        {similar.length > 0 && (
          <div>
            <h2 className="font-bold text-slate-900 text-lg mb-4">
              Similar neighbourhoods to consider
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {similar.map((s) => (
                <Link
                  key={s.slug}
                  href={`/neighbourhoods/${s.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-3"
                >
                  <span
                    className="text-2xl size-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: s.color + "18" }}
                  >
                    {s.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 group-hover:underline">{s.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 truncate">{s.tagline}</div>
                    <div className="text-xs font-medium mt-1.5" style={{ color: s.color }}>
                      Avg 1-bed £{avgRent(s).toLocaleString()}/mo
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/neighbourhoods"
            className="flex-1 text-center py-3 px-6 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-slate-400 transition-colors"
          >
            ← Browse all neighbourhoods
          </Link>
          <Link
            href={`/neighbourhoods?compare=${n.slug}`}
            className="flex-1 text-center py-3 px-6 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: n.color }}
          >
            Compare {n.name} with others
          </Link>
        </div>
      </div>
    </div>
  );
}
