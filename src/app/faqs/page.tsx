"use client";

import { useState, useMemo } from "react";
import { FAQS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";

const CATEGORIES = ["All", "Housing", "Health", "Benefits", "Environment", "Council", "Youth"];

const CATEGORY_COLOURS: Record<string, string> = {
  Housing: "bg-sky-100 text-sky-800",
  Health: "bg-rose-100 text-rose-800",
  Benefits: "bg-violet-100 text-violet-800",
  Environment: "bg-emerald-100 text-emerald-800",
  Council: "bg-amber-100 text-amber-800",
  Youth: "bg-purple-100 text-purple-800",
};

export default function FaqsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return FAQS.filter((faq) => {
      const matchesCat = category === "All" || faq.category === category;
      const matchesQuery = !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Council FAQs" subtitle="Common questions answered for Edinburgh residents" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Council <span className="text-sky-500">FAQs.</span></h1>
          <p className="text-sm text-slate-600">Answers to the most common questions about living in Edinburgh — housing, health, benefits, council services, and more.</p>

          <div className="mt-4">
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpenIndex(null); }}
              placeholder="Search questions… e.g. 'deposit', 'GP', 'council tax'"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-5">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => { setCategory(cat); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${category === cat ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"}`}>
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 opacity-60">
                  {FAQS.filter((f) => f.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="text-xs text-slate-400 mb-3 px-1">
          {filtered.length === FAQS.length
            ? `${FAQS.length} questions`
            : `${filtered.length} of ${FAQS.length} questions`}
          {query && ` matching "${query}"`}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <div className="font-bold text-slate-900 text-sm mb-1">No results found</div>
            <p className="text-xs text-slate-500">Try different keywords or browse all categories.</p>
            <button onClick={() => { setQuery(""); setCategory("All"); }}
              className="mt-3 text-xs font-semibold text-sky-600 hover:underline">
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-start gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</div>
                      {!isOpen && (
                        <div className="text-xs text-slate-400 mt-1 truncate">{faq.a.slice(0, 80)}…</div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full hidden sm:block ${CATEGORY_COLOURS[faq.category] || "bg-slate-100 text-slate-700"}`}>
                        {faq.category}
                      </span>
                      <span className={`text-slate-400 text-lg leading-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                        ⌄
                      </span>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3 pt-3">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CATEGORY_COLOURS[faq.category] || "bg-slate-100 text-slate-700"}`}>
                          {faq.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 bg-slate-900 text-white rounded-xl p-5">
          <h3 className="font-bold text-sm mb-1">Can't find the answer?</h3>
          <p className="text-xs text-slate-300 mb-3">Citizens Advice Edinburgh can help with almost any question about living in Edinburgh — housing, benefits, employment, debt, and more.</p>
          <div className="flex flex-wrap gap-3">
            <div>
              <div className="text-xs text-slate-400">Phone</div>
              <div className="font-mono font-bold text-sm">0131 557 1500</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Edinburgh Council</div>
              <div className="font-mono font-bold text-sm">0131 200 2000</div>
            </div>
          </div>
          <a href="https://www.edinburgh.gov.uk" target="_blank" rel="noreferrer"
            className="inline-block mt-3 text-xs font-bold text-sky-400 hover:underline">
            Edinburgh Council website →
          </a>
        </div>
      </div>
    </div>
  );
}
