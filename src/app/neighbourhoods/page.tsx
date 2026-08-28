import type { Metadata } from "next";
import { NEIGHBOURHOODS, avgRent } from "@/lib/neighbourhoods";
import NeighbourhoodGrid from "@/components/neighbourhood-grid";
import PageHeader from "@/components/page-header";
import Band from "@/components/band";

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
    <div className="min-h-full">
      <PageHeader
        section="Getting about"
        title="Find your Edinburgh"
        subtitle="Honest breakdowns of all 20 neighbourhoods — rents, transport, vibe, and who each area actually suits"
      />

      <Band label="At a glance" meta={`${NEIGHBOURHOODS.length} areas`} ground="ink">
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
          Moving to Edinburgh? Every neighbourhood tells a different story. We&apos;ve
          researched all 20 to give you honest, practical breakdowns — rents, transport,
          vibe scores, and who each area actually suits.
        </p>
        <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6">
          {[
            { value: `${NEIGHBOURHOODS.length}`, label: "Areas covered" },
            { value: `£${lowestRent}`, label: "Lowest 1-bed from" },
            { value: `${tramNeighbourhoods}`, label: "Tram-connected" },
            { value: "6", label: "Vibe dimensions" },
          ].map(({ value, label }) => (
            <div key={label} className="border-t-2 border-amber-400 pt-3">
              <div className="display text-3xl text-white tabular-nums">{value}</div>
              <div className="mt-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-amber-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </Band>

      {/* Scottish context banner */}
      <section className="bg-amber-50 border-b border-amber-50">
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
          <div className="text-sm text-slate-700">
            <strong className="text-slate-900">How to use this guide:</strong> Use the filters
            below to narrow by area, budget, and lifestyle. Hit the{" "}
            <strong className="text-slate-900">+ button</strong> on up to 3 cards to compare
            them side by side. Click{" "}
            <strong className="text-slate-900">View guide</strong> for the full neighbourhood
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
