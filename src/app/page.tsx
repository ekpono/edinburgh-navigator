"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { EDINBURGH_STATS } from "@/lib/edinburgh-data";
import SupportFinder from "@/components/support-finder";
import Crag from "@/components/crag";

function AnimatedStat({ stat, label, detail }: { stat: string; label: string; detail: string }) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(stat);
      return;
    }
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
    <div className="border-t-2 border-amber-600 pt-4">
      <div className="display text-4xl sm:text-5xl text-white tabular-nums">{display}</div>
      <div className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-amber-400">{label}</div>
      <p className="mt-2 text-sm text-white/60 leading-relaxed">{detail}</p>
    </div>
  );
}

/* The directory, grouped the same way the sidebar is. Colour is gone from
   these entries on purpose — eighteen pastel tints said nothing except that
   there were eighteen of them. */
const DIRECTORY: { group: string; items: { href: string; label: string; desc: string }[] }[] = [
  {
    group: "Urgent",
    items: [
      { href: "/crisis", label: "Crisis support", desc: "Emergency lines, homelessness, legal rights tonight" },
    ],
  },
  {
    group: "Home & health",
    items: [
      { href: "/housing", label: "Housing", desc: "Tenancy law, deposits, eviction, repairs" },
      { href: "/health", label: "Health & NHS", desc: "GP registration, prescriptions, mental health" },
      { href: "/childcare", label: "Childcare", desc: "Funded hours, nurseries, family payments" },
      { href: "/schools", label: "Schools", desc: "Catchments, applying, additional support, free meals" },
    ],
  },
  {
    group: "Money",
    items: [
      { href: "/cost-of-living", label: "Cost of living", desc: "Rent, food, energy bills, where to get help" },
      { href: "/budget", label: "Tax & council tax", desc: "Bands, reductions, discounts, arrears" },
      { href: "/employment", label: "Work & benefits", desc: "Jobs, free training, Social Security Scotland" },
    ],
  },
  {
    group: "Getting about",
    items: [
      { href: "/transport", label: "Transport", desc: "Buses, trams, cycling, the airport" },
      { href: "/weather", label: "Weather", desc: "Live conditions and wind off the Forth" },
      { href: "/neighbourhoods", label: "Neighbourhoods", desc: "Compare areas, rents, what living there is like" },
    ],
  },
  {
    group: "The city",
    items: [
      { href: "/environment", label: "Bins & recycling", desc: "Collections, bulky uplift, reporting problems" },
      { href: "/community", label: "Community", desc: "Groups, events, places of worship" },
      { href: "/youth", label: "Youth & rights", desc: "Under-22 free bus travel, EMA, support" },
      { href: "/entertainment", label: "Going out", desc: "Pubs, restaurants, what's on" },
      { href: "/culture", label: "Scottish culture", desc: "Language, customs, the year's calendar" },
    ],
  },
  {
    group: "Visiting",
    items: [
      { href: "/visitor-essentials", label: "Visitor essentials", desc: "The short version, for a first trip" },
      { href: "/visitor", label: "Visitor guide", desc: "Attractions, getting around, day trips" },
    ],
  },
  {
    group: "Reference",
    items: [{ href: "/faqs", label: "Council FAQs", desc: "Searchable answers to what people actually ask" }],
  },
];

const HELPLINES = [
  { number: "999", label: "Emergency", tel: "999" },
  { number: "0808 801 0414", label: "Crisis Centre, 24/7", tel: "08088010414" },
  { number: "0808 800 4444", label: "Shelter Scotland", tel: "08088004444" },
];

export default function HomePage() {
  return (
    <div className="min-h-full">
      {/* ── Masthead ────────────────────────────────────────────────── */}
      <section className="band band-plum relative overflow-hidden">
        <Crag className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-32 sm:h-48 text-amber-400/55" />
        <div className="band-inner relative py-12 sm:py-16">
          <span className="eyebrow eyebrow-dark max-w-fit">Edinburgh · Scotland</span>
          <h1 className="mt-6 text-white text-[2.5rem] sm:text-6xl max-w-3xl">
            Find out what this city already owes you.
          </h1>
          <p className="mt-5 text-lg text-white/70 leading-relaxed max-w-xl">
            Scotland has its own housing law, its own NHS, and its own benefits
            system. Most people never find out what that entitles them to. This
            is the directory.
          </p>

          <div className="mt-10 sm:mb-14 grid gap-x-10 gap-y-5 sm:grid-cols-3 max-w-3xl">
            {HELPLINES.map((h) => (
              <a key={h.number} href={`tel:${h.tel}`} className="block border-t border-white/20 pt-3 group">
                <span className="font-mono text-base sm:text-lg text-amber-400 group-hover:underline">
                  {h.number}
                </span>
                <span className="block mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-white/45">
                  {h.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ask ─────────────────────────────────────────────────────── */}
      <section className="band band-white">
        <div className="band-inner">
          <div className="split">
            <div className="split-label">
              <span className="eyebrow">Ask anything</span>
              <span className="block mt-2 font-mono text-[0.625rem] text-slate-500">Scottish law</span>
            </div>
            <div className="min-w-0">
              <SupportFinder />
            </div>
          </div>
        </div>
      </section>

      {/* ── Directory ───────────────────────────────────────────────── */}
      <section className="band band-paper">
        <div className="band-inner">
          <div className="split">
            <div className="split-label">
              <span className="eyebrow">The directory</span>
              <span className="block mt-2 font-mono text-[0.625rem] text-slate-500">20 sections</span>
            </div>
            <div className="min-w-0 space-y-9">
              {DIRECTORY.map(({ group, items }) => (
                <div key={group}>
                  <h2 className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-slate-500 pb-2 border-b border-slate-200">
                    {group}
                  </h2>
                  <div className="entries">
                    {items.map((item) => (
                      <Link key={item.href} href={item.href} className="entry group flex items-baseline gap-4 hover:bg-white transition-colors">
                        <span className="flex-1 min-w-0">
                          <span className="block text-base font-semibold text-slate-900 group-hover:underline decoration-amber-600 decoration-2 underline-offset-4">
                            {item.label}
                          </span>
                          <span className="block mt-0.5 text-sm text-slate-700 leading-relaxed">{item.desc}</span>
                        </span>
                        <span aria-hidden className="flex-shrink-0 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Edinburgh now ───────────────────────────────────────────── */}
      <section className="band band-ink">
        <div className="band-inner">
          <div className="split">
            <div className="split-label">
              <span className="eyebrow eyebrow-dark">Edinburgh now</span>
              <span className="block mt-2 font-mono text-[0.625rem] text-white/40">Council figures</span>
            </div>
            <div className="min-w-0 grid gap-8 sm:grid-cols-3">
              {Object.values(EDINBURGH_STATS).map((s) => (
                <AnimatedStat key={s.label} stat={s.stat} label={s.label} detail={s.detail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Moving here ─────────────────────────────────────────────── */}
      <section className="band band-white">
        <div className="band-inner">
          <div className="split">
            <div className="split-label">
              <span className="eyebrow">Moving here</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl text-slate-900 max-w-xl">
                Coming from England or Wales? Almost none of what you know still applies.
              </h2>
              <div className="mt-6 border-l-2 border-emerald-700 bg-emerald-50 px-5 py-4 max-w-xl">
                <p className="text-[0.9375rem] text-emerald-900 leading-relaxed">
                  Scotland runs a separate legal system, a separate NHS, and a
                  separate benefits agency. Prescriptions are{" "}
                  <strong className="font-semibold">free</strong>. No-fault eviction is{" "}
                  <strong className="font-semibold">banned</strong> — there is no
                  Section 21 here. Many payments come from{" "}
                  <strong className="font-semibold">Social Security Scotland</strong>,
                  not the DWP, and you have to claim them separately.
                </p>
              </div>

              <div className="mt-9 grid gap-px bg-slate-200 sm:grid-cols-2 max-w-2xl">
                <Link href="/resident" className="bg-white p-6 hover:bg-slate-50 transition-colors group">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-slate-500">
                    I live here
                  </span>
                  <span className="block mt-2 text-lg font-semibold text-slate-900 group-hover:underline decoration-amber-600 decoration-2 underline-offset-4">
                    Resident hub
                  </span>
                  <span className="block mt-1.5 text-sm text-slate-700 leading-relaxed">
                    Housing, health, money, and your rights under Scottish law.
                  </span>
                </Link>
                <Link href="/visitor" className="bg-white p-6 hover:bg-slate-50 transition-colors group">
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-slate-500">
                    I&rsquo;m visiting
                  </span>
                  <span className="block mt-2 text-lg font-semibold text-slate-900 group-hover:underline decoration-amber-600 decoration-2 underline-offset-4">
                    Visitor guide
                  </span>
                  <span className="block mt-1.5 text-sm text-slate-700 leading-relaxed">
                    Attractions, getting around, day trips, and practical tips.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Watch ───────────────────────────────────────────────────── */}
      <section className="band band-paper">
        <div className="band-inner">
          <div className="split">
            <div className="split-label">
              <span className="eyebrow">On film</span>
            </div>
            <div className="min-w-0 grid gap-5 sm:grid-cols-2">
              {[
                { src: "https://www.youtube.com/embed/YBXVcwy3vPE?start=32", title: "Living in Edinburgh — a walkthrough" },
                { src: "https://www.youtube.com/embed/BJeA2hs4iP0", title: "Getting around Edinburgh" },
              ].map((v) => (
                <figure key={v.src}>
                  <div className="relative w-full bg-slate-900" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={v.src}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <figcaption className="mt-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-slate-500">
                    {v.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
