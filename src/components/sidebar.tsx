"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", emoji: "🏠", exact: true },
  { href: "/resident", label: "Resident Hub", emoji: "🏛️" },
  { href: "/visitor-essentials", label: "Visitor Essentials", emoji: "🧳" },
  { href: "/crisis", label: "Crisis Support", emoji: "🚨" },
  { href: "/health", label: "Health", emoji: "🏥" },
  { href: "/housing", label: "Housing", emoji: "🏘️" },
  { href: "/transport", label: "Transport", emoji: "🚌" },
  { href: "/neighbourhoods", label: "Neighbourhoods", emoji: "🗺️" },
  { href: "/employment", label: "Employment", emoji: "💼" },
  { href: "/environment", label: "Clean Edinburgh", emoji: "♻️" },
  { href: "/community", label: "Community Hub", emoji: "🤝" },
  { href: "/youth", label: "Youth & Rights", emoji: "🎓" },
  { href: "/budget", label: "Tax & Budget", emoji: "💷" },
  { href: "/faqs", label: "Council FAQs", emoji: "❓" },
  { href: "/visitor", label: "Visitor Guide", emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");
  const [simplified, setSimplified] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const storedTextSize = window.localStorage.getItem("edinburgh-text-size");
    const storedSimplified = window.localStorage.getItem("edinburgh-simplified");
    if (storedTextSize === "large") setTextSize("large");
    if (storedSimplified === "true") setSimplified(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("text-size-lg", textSize === "large");
    root.classList.toggle("simplified-mode", simplified);
    window.localStorage.setItem("edinburgh-text-size", textSize);
    window.localStorage.setItem("edinburgh-simplified", simplified ? "true" : "false");
  }, [textSize, simplified]);

  const isActive = (item: typeof NAV_ITEMS[0]) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-3.5 left-4 z-50 md:hidden flex flex-col gap-1.5 p-2 rounded-lg bg-slate-900 text-white shadow-lg"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col bg-slate-900 text-white
          w-64 transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10 flex-shrink-0">
          <div className="size-9 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
            🏰
          </div>
          <div className="leading-tight min-w-0">
            <div className="font-bold text-sm text-white">Edinburgh</div>
            <div className="text-xs text-slate-400">Navigator</div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-white/15 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-base flex-shrink-0">{item.emoji}</span>
                <span className="truncate">{item.label}</span>
                {active && (
                  <span className="ml-auto size-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Emergency pill */}
        <div className="px-4 py-4 border-t border-white/10 flex-shrink-0">
          <div className="bg-red-600/20 border border-red-500/30 rounded-xl px-3 py-2.5 text-center">
            <div className="text-xs text-red-300 mb-0.5">Life-threatening emergency?</div>
            <div className="font-bold text-white text-sm">Call 999</div>
          </div>
          <div className="mt-2 text-center">
            <span className="text-xs text-slate-500">Edinburgh Crisis Centre 24/7:</span>
            <div className="text-xs font-mono font-bold text-slate-300">0808 801 0414</div>
          </div>
        </div>

        {/* Readability controls */}
        <div className="px-4 pb-5 border-t border-white/10 flex-shrink-0">
          <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Readability</div>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setTextSize("normal")}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold border transition-colors ${
                textSize === "normal" ? "bg-white text-slate-900 border-white" : "bg-white/5 text-slate-300 border-white/10"
              }`}
            >
              Aa
            </button>
            <button
              onClick={() => setTextSize("large")}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold border transition-colors ${
                textSize === "large" ? "bg-white text-slate-900 border-white" : "bg-white/5 text-slate-300 border-white/10"
              }`}
            >
              A+
            </button>
          </div>
          <button
            onClick={() => setSimplified((prev) => !prev)}
            className={`mt-2 w-full rounded-lg py-2 text-xs font-semibold border transition-colors ${
              simplified ? "bg-white text-slate-900 border-white" : "bg-white/5 text-slate-300 border-white/10"
            }`}
          >
            {simplified ? "Simplified on" : "Simplified off"}
          </button>
        </div>
      </aside>
    </>
  );
}
