"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { EDINBURGH_STATS, RESIDENT_TOP_TASKS, VISITOR_TOP_TASKS } from "@/lib/edinburgh-data";
import SupportFinder from "@/components/support-finder";
import PageHeader from "@/components/page-header";
import TaskPanel from "@/components/task-panel";

function AnimatedStatCard({ data }: { data: { stat: string; label: string; detail: string } }) {
  const [display, setDisplay] = useState("0");
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const raw = data.stat.replace(/[^0-9.]/g, "");
    const suffix = data.stat.replace(/[0-9.,]/g, "");
    const target = parseFloat(raw);
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1800, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay((Number.isInteger(target) ? Math.round(e * target).toLocaleString() : (e * target).toFixed(1)) + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [data.stat]);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="text-3xl font-bold text-slate-900 mb-1">{display}</div>
      <div className="font-semibold text-slate-700 text-sm mb-1">{data.label}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{data.detail}</div>
    </div>
  );
}

const QUICK_LINKS = [
  { href: "/crisis", label: "Crisis Support", emoji: "🚨", color: "#ef4444", desc: "Emergency lines & rights" },
  { href: "/housing", label: "Housing", emoji: "🏘️", color: "#2563eb", desc: "Rights, finding a home" },
  { href: "/health", label: "NHS Scotland", emoji: "🏥", color: "#059669", desc: "GP, mental health, prescriptions" },
  { href: "/transport", label: "Transport", emoji: "🚌", color: "#ea580c", desc: "Buses, trams, cycling, airport" },
  { href: "/visitor", label: "Visitor Guide", emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", color: "#e11d48", desc: "Attractions, tips, day trips" },
  { href: "/employment", label: "Employment", emoji: "💼", color: "#7c3aed", desc: "Jobs, benefits, training" },
  { href: "/neighbourhoods", label: "Neighbourhoods", emoji: "🗺️", color: "#0891b2", desc: "Compare Edinburgh areas" },
  { href: "/faqs", label: "Council FAQs", emoji: "❓", color: "#d97706", desc: "Quick answers, searchable" },
];

export default function HomePage() {
  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Edinburgh" subtitle="Scotland's capital city" />

      <div className="p-5 space-y-6 w-full max-w-6xl mx-auto">
        {/* Hero */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">
            Edinburgh <span className="text-sky-500">Navigator.</span>
          </h1>
          <p className="text-slate-700 font-medium mb-4">
            Bridging the gap between 530,680 residents and essential services.
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
            <h4 className="font-semibold text-sky-600 mb-2 text-sm">Our Purpose</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Edinburgh faces a <strong>housing crisis</strong> with 28,400 households on the waiting list,
              a <strong>5% council tax hike</strong> in 2024, and rents rising{" "}
              <strong>14.7% in a single year</strong>. This platform gives every resident direct
              access to their legal rights, Scottish benefits, and the services that exist to help them.
            </p>
          </div>
        </div>

        {/* Support Finder */}
        <SupportFinder />

        {/* Resident vs Visitor */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="text-xs uppercase tracking-wide text-slate-400 font-semibold">I live in Edinburgh</div>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Resident Hub</h3>
            <p className="text-sm text-slate-600 mt-1">Housing, health, council tasks, and everyday services.</p>
            <Link
              href="/resident"
              className="inline-flex mt-4 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Open Resident Hub
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="text-xs uppercase tracking-wide text-slate-400 font-semibold">I'm visiting</div>
            <h3 className="text-lg font-bold text-slate-900 mt-2">Visitor Essentials</h3>
            <p className="text-sm text-slate-600 mt-1">Airport to city, transport tips, and quick wins.</p>
            <Link
              href="/visitor-essentials"
              className="inline-flex mt-4 bg-rose-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-rose-500 transition-colors"
            >
              Open Visitor Essentials
            </Link>
          </div>
        </div>

        <TaskPanel title="Top 5 Resident Tasks" subtitle="Most common needs for locals" tasks={RESIDENT_TOP_TASKS} />
        <TaskPanel title="Top 5 Visitor Tasks" subtitle="Fast starts for short stays" tasks={VISITOR_TOP_TASKS} />

        {/* Quick links */}
        <div>
          <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Jump to a section</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {QUICK_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="size-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ backgroundColor: item.color + "18" }}
                >
                  {item.emoji}
                </div>
                <div className="font-bold text-slate-900 text-sm group-hover:underline">{item.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Edinburgh by the numbers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.values(EDINBURGH_STATS).map((s) => (
              <AnimatedStatCard key={s.label} data={s} />
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Community & Context</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "BJeA2hs4iP0", title: "Edinburgh: The City Explained" },
              { id: "YBXVcwy3vPE", title: "Living in Edinburgh — Resident Perspectives", start: 32 },
            ].map((v) => (
              <div key={v.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="aspect-video bg-slate-900">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${v.id}${v.start ? `?start=${v.start}` : ""}`}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-3 text-sm font-semibold text-slate-800">{v.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scottish difference note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h3 className="font-bold text-amber-900 mb-2">⚖️ Moving from England or Wales?</h3>
          <p className="text-sm text-amber-800 leading-relaxed">
            Scotland has a separate legal system, NHS, benefits structure, and tenancy law.
            Key differences: <strong>prescriptions are free</strong>, no-fault eviction is{" "}
            <strong>banned</strong>, and many benefits are delivered by{" "}
            <strong>Social Security Scotland</strong>, not the DWP. Use the sections in this
            guide to understand what applies to you.
          </p>
        </div>
      </div>
    </div>
  );
}
