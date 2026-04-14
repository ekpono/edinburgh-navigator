"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { EDINBURGH_STATS } from "@/lib/edinburgh-data";
import SupportFinder from "@/components/support-finder";

function AnimatedStat({ stat, label, detail }: { stat: string; label: string; detail: string }) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const raw = stat.replace(/[^0-9.]/g, "");
    const suffix = stat.replace(/[0-9.,]/g, "");
    const target = parseFloat(raw);
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1800, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplay(
        (Number.isInteger(target)
          ? Math.round(ease * target).toLocaleString()
          : (ease * target).toFixed(1)) + suffix
      );
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [stat]);

  return (
    <div className="flex-1 text-center px-4 py-5">
      <div className="text-2xl sm:text-3xl font-bold text-white">{display}</div>
      <div className="text-xs font-semibold text-slate-300 mt-1">{label}</div>
      <div className="text-xs text-slate-500 mt-0.5 leading-tight hidden sm:block">{detail}</div>
    </div>
  );
}

const SECTIONS = [
  { href: "/crisis",        emoji: "🚨", label: "Crisis Support",   desc: "Emergency lines & legal rights",      bg: "bg-red-50",    border: "border-red-200",    accent: "text-red-600" },
  { href: "/housing",       emoji: "🏘️", label: "Housing",          desc: "Tenancy law, deposits, eviction",      bg: "bg-blue-50",   border: "border-blue-200",   accent: "text-blue-600" },
  { href: "/health",        emoji: "🏥", label: "Health & NHS",      desc: "GP, prescriptions, mental health",     bg: "bg-emerald-50",border: "border-emerald-200",accent: "text-emerald-600" },
  { href: "/transport",     emoji: "🚌", label: "Transport",         desc: "Buses, trams, cycling, airport",       bg: "bg-orange-50", border: "border-orange-200", accent: "text-orange-600" },
  { href: "/employment",    emoji: "💼", label: "Employment",        desc: "Jobs, Scottish benefits, training",    bg: "bg-violet-50", border: "border-violet-200", accent: "text-violet-600" },
  { href: "/neighbourhoods",emoji: "🗺️", label: "Neighbourhoods",   desc: "Compare areas, rents, lifestyle",      bg: "bg-cyan-50",   border: "border-cyan-200",   accent: "text-cyan-600" },
  { href: "/environment",   emoji: "♻️", label: "Clean Edinburgh",  desc: "Bins, recycling, report problems",     bg: "bg-lime-50",   border: "border-lime-200",   accent: "text-lime-600" },
  { href: "/community",     emoji: "🤝", label: "Community",         desc: "Groups, events, map, faith",           bg: "bg-teal-50",   border: "border-teal-200",   accent: "text-teal-600" },
  { href: "/youth",         emoji: "🎓", label: "Youth & Rights",    desc: "Under-22 free buses, EMA, support",   bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-600" },
  { href: "/budget",        emoji: "💷", label: "Tax & Budget",      desc: "Council tax, reductions, help",        bg: "bg-amber-50",  border: "border-amber-200",  accent: "text-amber-600" },
  { href: "/visitor",       emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", label: "Visitor Guide", desc: "Attractions, tips, day trips",          bg: "bg-rose-50",   border: "border-rose-200",   accent: "text-rose-600" },
  { href: "/entertainment",  emoji: "🎉", label: "Entertainment",     desc: "Pubs, restaurants, skating & fun",      bg: "bg-pink-50",   border: "border-pink-200",   accent: "text-pink-600" },
  { href: "/faqs",          emoji: "❓", label: "Council FAQs",      desc: "Searchable answers to common questions",bg: "bg-slate-50",  border: "border-slate-200",  accent: "text-slate-600" },
];

export default function HomePage() {
  return (
    <div className="min-h-full bg-slate-50">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gradient glow */}
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

        <div className="relative px-5 pt-10 pb-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-7">
            <span>🏰</span>
            <span className="text-xs font-semibold text-white/70 tracking-wide uppercase">Edinburgh, Scotland</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-3">
            Your guide to<br />
            <span className="text-sky-400">Scotland's capital.</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
            Housing rights, NHS Lothian, Scottish benefits, transport, and council services —
            ask anything below.
          </p>

          {/* AI Chat — hero centrepiece */}
          <SupportFinder />
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10">
          <div className="max-w-4xl mx-auto flex divide-x divide-white/10">
            {Object.values(EDINBURGH_STATS).map((s) => (
              <AnimatedStat key={s.label} stat={s.stat} label={s.label} detail={s.detail} />
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────────────── */}
      <div className="px-5 py-8 max-w-4xl mx-auto space-y-8">

        {/* Resident / Visitor split */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/housing"
            className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 size-32 rounded-full bg-blue-50 -translate-y-1/2 translate-x-1/2" />
            <span className="relative text-3xl block mb-3">🏘️</span>
            <div className="relative">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">I live in Edinburgh</div>
              <div className="font-bold text-slate-900 text-lg leading-tight">Resident services</div>
              <div className="text-sm text-slate-500 mt-1.5 leading-relaxed">Housing, health, benefits, council services, and your rights under Scottish law.</div>
              <div className="mt-4 text-xs font-bold text-blue-600 group-hover:underline">Explore →</div>
            </div>
          </Link>

          <Link
            href="/visitor"
            className="group relative bg-slate-900 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 size-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <span className="relative text-3xl block mb-3">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
            <div className="relative">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">I'm visiting</div>
              <div className="font-bold text-white text-lg leading-tight">Visitor guide</div>
              <div className="text-sm text-slate-400 mt-1.5 leading-relaxed">Top attractions, getting around, day trips, food, and practical tips for your stay.</div>
              <div className="mt-4 text-xs font-bold text-sky-400 group-hover:underline">Explore →</div>
            </div>
          </Link>
        </div>

        {/* Section grid */}
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">All Sections</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group rounded-xl border p-4 hover:-translate-y-0.5 hover:shadow-sm transition-all ${s.bg} ${s.border}`}
              >
                <span className="text-2xl block mb-2">{s.emoji}</span>
                <div className="font-bold text-slate-900 text-sm leading-tight">{s.label}</div>
                <div className={`text-xs mt-1 leading-snug ${s.accent}`}>{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video guides */}
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Watch & Learn</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/YBXVcwy3vPE?start=32"
                  title="Edinburgh guide video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/BJeA2hs4iP0"
                  title="Edinburgh guide video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scotland note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <span className="text-2xl flex-shrink-0">⚖️</span>
          <div>
            <div className="font-bold text-amber-900 text-sm mb-1">Moving from England or Wales?</div>
            <p className="text-xs text-amber-800 leading-relaxed">
              Scotland has a separate legal system, NHS, and benefits structure.
              Key differences: <strong>prescriptions are free</strong>, no-fault eviction is{" "}
              <strong>banned</strong>, and many benefits are run by{" "}
              <strong>Social Security Scotland</strong> — not the DWP.
            </p>
          </div>
        </div>

        {/* Emergency strip */}
        <div className="bg-slate-900 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white text-sm">Need immediate help?</div>
            <div className="text-xs text-slate-400 mt-0.5">Edinburgh Crisis Centre is free and available 24/7</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="text-center">
              <div className="font-mono font-bold text-white text-lg">999</div>
              <div className="text-xs text-slate-500">Emergency</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="font-mono font-bold text-sky-400 text-lg">0808 801 0414</div>
              <div className="text-xs text-slate-500">Crisis Centre 24/7</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="font-mono font-bold text-white text-lg">0808 800 4444</div>
              <div className="text-xs text-slate-500">Shelter Scotland</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
