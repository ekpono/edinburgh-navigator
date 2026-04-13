import type { Metadata } from "next";
import { NEIGHBOURHOODS, avgRent } from "@/lib/neighbourhoods";
import NeighbourhoodGrid from "@/components/neighbourhood-grid";

export const metadata: Metadata = {
  title: "Neighbourhood Guide — Edinburgh Navigator",
  description:
    "Find your Edinburgh. Compare 20 neighbourhoods by rent, transport, lifestyle and vibes — with honest guides for people moving to the city.",
};

const lowestRent = Math.min(...NEIGHBOURHOODS.map((n) => n.rents.oneBed.min));
const highestRent = Math.max(...NEIGHBOURHOODS.map((n) => n.rents.oneBed.max));
const tramNeighbourhoods = NEIGHBOURHOODS.filter((n) => n.transport.tram).length;

export default function NeighbourhoodsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <span>🏰</span>
              Edinburgh Neighbourhood Guide
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Find your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                Edinburgh
              </span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              Moving to Edinburgh? Every neighbourhood tells a different story. We&apos;ve
              researched all 20 to give you honest, practical breakdowns — rents, transport,
              vibe scores, and who each area actually suits.
            </p>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: `${NEIGHBOURHOODS.length}`, label: "Areas covered" },
                { value: `£${lowestRent}`, label: "Lowest 1-bed from" },
                { value: `${tramNeighbourhoods}`, label: "Tram-connected" },
                { value: "6", label: "Vibe dimensions" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scottish context banner */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-amber-800 flex items-start sm:items-center gap-2">
            <span className="text-base flex-shrink-0">⚖️</span>
            <span>
              <strong>Moving from England or Wales?</strong> Scottish tenancy law is different —
              no-fault eviction is banned, and the Private Residential Tenancy replaced Assured
              Shorthold Tenancies in 2017. Our{" "}
              <span className="underline cursor-pointer">Tenancy Rights guide</span> explains
              what this means for you.
            </span>
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* How to use tip */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">💡</span>
          <div className="text-sm text-slate-600">
            <strong className="text-slate-800">How to use this guide:</strong> Use the filters
            below to narrow by area, budget, and lifestyle. Hit the{" "}
            <strong className="text-slate-800">+ button</strong> on up to 3 cards to compare
            them side by side. Click{" "}
            <strong className="text-slate-800">View guide</strong> for the full neighbourhood
            breakdown.
          </div>
        </div>

        <NeighbourhoodGrid />
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-900 text-white mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">More guides coming soon</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Scottish tenancy rights, NHS registration, council tax, schools catchments
            — everything you need when moving to Edinburgh.
          </p>
        </div>
      </section>
    </div>
  );
}
