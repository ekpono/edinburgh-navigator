"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_CONTACTS, SUPPORT_KEYWORDS } from "@/lib/edinburgh-data";
import ServiceCard from "@/components/service-card";

export default function SupportFinder() {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();
  const match = normalized.length > 1
    ? SUPPORT_KEYWORDS.find((item) => item.keywords.some((kw) => normalized.includes(kw)))
    : null;

  const serviceMatches = normalized.length > 2
    ? SERVICE_CONTACTS.filter((service) => {
        const haystack = [service.name, service.description, service.category, ...(service.keywords ?? [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return normalized.split(" ").some((term) => haystack.includes(term));
      }).slice(0, 3)
    : [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <h3 className="font-bold text-slate-900 text-base mb-1">Support Finder</h3>
      <p className="text-sm text-slate-500 mb-3">
        Describe what you need help with and we'll point you in the right direction.
      </p>
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="e.g. I need help with rent, I'm homeless, I need a doctor…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 placeholder:text-slate-400"
        />
      </div>

      {match && (
        <div className="mt-3 p-4 bg-sky-50 border border-sky-200 rounded-xl">
          <p className="text-sm text-slate-800 leading-relaxed">{match.response}</p>
          {match.links && (
            <div className="mt-3 flex flex-wrap gap-2">
              {match.links.map((l) => (
                <Link
                  key={l.url}
                  href={l.url}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {serviceMatches.length > 0 && (
        <div className="mt-4 space-y-3">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Suggested services</div>
          {serviceMatches.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>
      )}

      {query.trim().length > 2 && !match && serviceMatches.length === 0 && (
        <p className="mt-3 text-sm text-slate-500 italic">
          No match found — try different words, or browse the sections in the sidebar.
        </p>
      )}
    </div>
  );
}
