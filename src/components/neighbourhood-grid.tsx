"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  NEIGHBOURHOODS,
  AREA_LABELS,
  LIFESTYLE_LABELS,
  avgRent,
  type Neighbourhood,
  type AreaOfCity,
  type LifestyleTag,
} from "@/lib/neighbourhoods";
import CompareModal from "./compare-modal";

const BUDGET_OPTIONS = [
  { label: "Any budget", min: 0, max: Infinity },
  { label: "Under £800/mo", min: 0, max: 800 },
  { label: "£800–1,000/mo", min: 800, max: 1000 },
  { label: "£1,000–1,200/mo", min: 1000, max: 1200 },
  { label: "£1,200+/mo", min: 1200, max: Infinity },
];

const LIFESTYLE_OPTIONS: LifestyleTag[] = [
  "students",
  "families",
  "professionals",
  "creative",
  "quiet",
  "lively",
  "affordable",
  "seaside",
  "suburban",
];

const VIBE_LABELS: Record<string, string> = {
  nightlife: "Nightlife",
  family: "Family",
  greenSpace: "Green Space",
  transport: "Transport",
  affordability: "Affordability",
  community: "Community",
};

function VibeDots({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`size-2 rounded-full transition-colors ${
            i <= score ? "bg-current opacity-90" : "bg-current opacity-15"
          }`}
        />
      ))}
    </div>
  );
}

function TransportBadge({ tram, walkToCentre }: { tram: boolean; walkToCentre: number }) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500">
      <span title="Walk to centre">🚶 {walkToCentre} min</span>
      {tram && <span title="Tram available" className="text-emerald-600 font-medium">🚋 Tram</span>}
    </div>
  );
}

function NeighbourhoodCard({
  n,
  selected,
  onToggleCompare,
  compareDisabled,
}: {
  n: Neighbourhood;
  selected: boolean;
  onToggleCompare: (n: Neighbourhood) => void;
  compareDisabled: boolean;
}) {
  const rent = avgRent(n);

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex flex-col overflow-hidden ${
        selected ? "border-slate-800 shadow-md" : "border-slate-100"
      }`}
    >
      {/* Colour accent bar */}
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: n.color }}
      />

      {/* Selected badge */}
      {selected && (
        <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
          Comparing
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <span
            className="text-3xl size-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: n.color + "18" }}
          >
            {n.emoji}
          </span>
          <div className="min-w-0">
            <h2 className="font-bold text-slate-900 text-lg leading-tight">{n.name}</h2>
            <p className="text-xs text-slate-500 mt-0.5 truncate">{n.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
          {n.description.split(".")[0]}.
        </p>

        {/* Stats row */}
        <div
          className="rounded-xl p-3 mb-4 grid grid-cols-2 gap-2"
          style={{ backgroundColor: n.color + "10" }}
        >
          <div>
            <div className="text-xs text-slate-500 mb-0.5">Avg 1-bed</div>
            <div className="font-bold text-slate-900">
              £{rent.toLocaleString()}<span className="text-xs font-normal text-slate-500">/mo</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-0.5">To centre</div>
            <div className="font-bold text-slate-900">
              {n.transport.walkToCentre}<span className="text-xs font-normal text-slate-500"> min</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {n.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                backgroundColor: n.color + "18",
                color: n.color,
              }}
            >
              {LIFESTYLE_LABELS[tag]}
            </span>
          ))}
          {n.transport.tram && (
            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700">
              🚋 Tram
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={`/neighbourhoods/${n.slug}`}
            className="flex-1 text-center text-sm font-semibold py-2 px-3 rounded-xl text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: n.color }}
          >
            View guide
          </Link>
          <button
            onClick={() => onToggleCompare(n)}
            disabled={compareDisabled && !selected}
            className={`text-sm font-medium py-2 px-3 rounded-xl border-2 transition-all ${
              selected
                ? "border-slate-800 bg-slate-800 text-white"
                : compareDisabled
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800"
            }`}
            title={compareDisabled && !selected ? "Max 3 neighbourhoods" : "Add to comparison"}
          >
            {selected ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NeighbourhoodGrid() {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState<AreaOfCity | "all">("all");
  const [budgetIdx, setBudgetIdx] = useState(0);
  const [lifestyle, setLifestyle] = useState<LifestyleTag | null>(null);
  const [compareList, setCompareList] = useState<Neighbourhood[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const budget = BUDGET_OPTIONS[budgetIdx];

  const filtered = useMemo(() => {
    return NEIGHBOURHOODS.filter((n) => {
      const rent = avgRent(n);
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        n.name.toLowerCase().includes(q) ||
        n.tagline.toLowerCase().includes(q) ||
        n.tags.some((t) => t.includes(q)) ||
        n.postcode.toLowerCase().includes(q);
      const matchesArea = area === "all" || n.area === area;
      const matchesBudget = rent >= budget.min && rent <= budget.max;
      const matchesLifestyle = !lifestyle || n.tags.includes(lifestyle);
      return matchesSearch && matchesArea && matchesBudget && matchesLifestyle;
    });
  }, [search, area, budgetIdx, lifestyle]);

  function toggleCompare(n: Neighbourhood) {
    setCompareList((prev) => {
      if (prev.find((x) => x.slug === n.slug)) {
        return prev.filter((x) => x.slug !== n.slug);
      }
      if (prev.length >= 3) return prev;
      return [...prev, n];
    });
  }

  function clearFilters() {
    setSearch("");
    setArea("all");
    setBudgetIdx(0);
    setLifestyle(null);
  }

  const hasFilters = search || area !== "all" || budgetIdx !== 0 || lifestyle;

  return (
    <div className="relative">
      {/* Filter bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-6 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search neighbourhoods…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent placeholder:text-slate-400"
            />
          </div>

          {/* Area */}
          <select
            value={area}
            onChange={(e) => setArea(e.target.value as AreaOfCity | "all")}
            className="py-2.5 px-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white text-slate-700 cursor-pointer"
          >
            <option value="all">All areas</option>
            {(Object.keys(AREA_LABELS) as AreaOfCity[]).map((a) => (
              <option key={a} value={a}>
                {AREA_LABELS[a]} Edinburgh
              </option>
            ))}
          </select>

          {/* Budget */}
          <select
            value={budgetIdx}
            onChange={(e) => setBudgetIdx(Number(e.target.value))}
            className="py-2.5 px-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white text-slate-700 cursor-pointer"
          >
            {BUDGET_OPTIONS.map((b, i) => (
              <option key={i} value={i}>
                {b.label}
              </option>
            ))}
          </select>
        </div>

        {/* Lifestyle pills */}
        <div className="mt-3 flex flex-wrap gap-2">
          {LIFESTYLE_OPTIONS.map((tag) => (
            <button
              key={tag}
              onClick={() => setLifestyle(lifestyle === tag ? null : tag)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                lifestyle === tag
                  ? "bg-slate-900 text-white border-slate-900"
                  : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800 bg-white"
              }`}
            >
              {LIFESTYLE_LABELS[tag]}
            </button>
          ))}
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-red-200 text-red-500 hover:bg-red-50 transition-all bg-white"
            >
              Clear all ×
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500">
          {filtered.length === NEIGHBOURHOODS.length
            ? `All ${filtered.length} neighbourhoods`
            : `${filtered.length} of ${NEIGHBOURHOODS.length} neighbourhoods`}
        </p>
        {compareList.length > 0 && (
          <button
            onClick={() => setShowCompare(true)}
            className="text-sm font-semibold text-slate-900 flex items-center gap-2 hover:underline"
          >
            <span className="bg-slate-900 text-white text-xs rounded-full size-5 flex items-center justify-center">
              {compareList.length}
            </span>
            Compare selected
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-slate-500 text-sm">No neighbourhoods match your filters.</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-sm font-medium text-slate-900 underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((n) => (
            <NeighbourhoodCard
              key={n.slug}
              n={n}
              selected={!!compareList.find((x) => x.slug === n.slug)}
              onToggleCompare={toggleCompare}
              compareDisabled={compareList.length >= 3}
            />
          ))}
        </div>
      )}

      {/* Floating compare bar */}
      {compareList.length >= 2 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900 text-white rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-4 border border-slate-700">
          <div className="flex items-center gap-2">
            {compareList.map((n) => (
              <div key={n.slug} className="flex items-center gap-1.5">
                <span className="text-sm font-medium">{n.emoji} {n.name}</span>
                <button
                  onClick={() => toggleCompare(n)}
                  className="text-slate-400 hover:text-white transition-colors text-xs leading-none"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="h-5 w-px bg-slate-600" />
          <button
            onClick={() => setShowCompare(true)}
            className="text-sm font-bold bg-white text-slate-900 px-4 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Compare
          </button>
          <button
            onClick={() => setCompareList([])}
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Clear
          </button>
        </div>
      )}

      {/* Compare modal */}
      {showCompare && (
        <CompareModal
          neighbourhoods={compareList}
          onClose={() => setShowCompare(false)}
        />
      )}
    </div>
  );
}
