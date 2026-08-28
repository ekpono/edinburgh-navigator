"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* The nav is grouped by the kind of need you arrived with, not by an
   alphabetical list of departments. The grouping is the wayfinding — it is
   why the emoji that used to label each row are gone: they decorated 21 flat
   items instead of telling you where you were. */
const NAV_GROUPS: { group: string; items: { href: string; label: string; exact?: boolean }[] }[] = [
  {
    group: "Start here",
    items: [
      { href: "/", label: "Dashboard", exact: true },
      { href: "/resident", label: "Resident hub" },
    ],
  },
  {
    group: "Urgent",
    items: [{ href: "/crisis", label: "Crisis support" }],
  },
  {
    group: "Home & health",
    items: [
      { href: "/housing", label: "Housing" },
      { href: "/health", label: "Health & NHS" },
      { href: "/childcare", label: "Childcare" },
      { href: "/schools", label: "Schools" },
    ],
  },
  {
    group: "Money",
    items: [
      { href: "/cost-of-living", label: "Cost of living" },
      { href: "/budget", label: "Tax & council tax" },
      { href: "/employment", label: "Work & benefits" },
    ],
  },
  {
    group: "Getting about",
    items: [
      { href: "/transport", label: "Transport" },
      { href: "/weather", label: "Weather" },
      { href: "/neighbourhoods", label: "Neighbourhoods" },
    ],
  },
  {
    group: "The city",
    items: [
      { href: "/environment", label: "Bins & recycling" },
      { href: "/community", label: "Community" },
      { href: "/youth", label: "Youth & rights" },
      { href: "/entertainment", label: "Going out" },
      { href: "/culture", label: "Scottish culture" },
    ],
  },
  {
    group: "Visiting",
    items: [
      { href: "/visitor-essentials", label: "Visitor essentials" },
      { href: "/visitor", label: "Visitor guide" },
    ],
  },
  {
    group: "Reference",
    items: [{ href: "/faqs", label: "Council FAQs" }],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large">("normal");
  const [simplified, setSimplified] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

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

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <>
      {/* Mobile bar */}
      <div className="fixed top-0 inset-x-0 z-50 md:hidden flex items-center gap-3 h-14 px-4 bg-plum-900 border-b border-amber-600/40">
        <button
          className="flex flex-col gap-1.5 p-1.5 -ml-1.5"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-5 bg-amber-400 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-amber-400 transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-amber-400 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
        <span className="display text-white text-base">Edinburgh Navigator</span>
      </div>

      {open && (
        <div className="fixed inset-0 bg-slate-900/60 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full z-40 flex flex-col bg-plum-900 text-slate-200
          w-[17rem] transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:z-auto
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Masthead */}
        <div className="flex-shrink-0 px-6 pt-6 pb-5 border-b border-white/10">
          <Link href="/" className="block">
            <span className="display block text-white text-[1.375rem] leading-none">Edinburgh</span>
            <span className="display block text-amber-400 text-[1.375rem] leading-none">Navigator</span>
          </Link>
          <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/45 leading-relaxed">
            City services directory
          </p>
        </div>

        <nav className="flex-1 min-h-0 overflow-y-auto px-3 py-4">
          {NAV_GROUPS.map(({ group, items }) => (
            <div key={group} className="mb-4 last:mb-0">
              <div className="px-3 mb-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/35">
                {group}
              </div>
              {items.map((item) => {
                const active = isActive(item.href, item.exact);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block pl-4 pr-3 py-[0.4375rem] text-[0.9375rem] leading-snug transition-colors ${
                      active
                        ? "text-white font-semibold"
                        : "text-white/65 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-1 bottom-1 w-[3px] bg-amber-400" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Emergency — the only red in the chrome, and it never moves */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-white/10 bg-plum-950">
          <div className="text-[0.8125rem] text-white/60 leading-snug">Life-threatening emergency</div>
          <a href="tel:999" className="display block text-red-500 text-2xl leading-none mt-1 hover:underline">
            Call 999
          </a>
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="text-[0.75rem] text-white/50 leading-snug">Edinburgh Crisis Centre, 24/7</div>
            <a href="tel:08088010414" className="font-mono text-sm font-medium text-amber-400 hover:underline">
              0808 801 0414
            </a>
          </div>
        </div>

        {/* Readability */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-white/10">
          <div className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-white/35 mb-2">
            Readability
          </div>
          <div className="flex gap-2">
            {(["normal", "large"] as const).map((size) => (
              <button
                key={size}
                onClick={() => setTextSize(size)}
                aria-pressed={textSize === size}
                className={`flex-1 py-1.5 text-xs font-mono transition-colors ${
                  textSize === size
                    ? "bg-amber-400 text-plum-950 font-semibold"
                    : "bg-white/[0.07] text-white/70 hover:bg-white/[0.12]"
                }`}
              >
                {size === "normal" ? "Aa" : "A+"}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSimplified((prev) => !prev)}
            aria-pressed={simplified}
            className={`mt-2 w-full py-1.5 text-xs font-mono transition-colors ${
              simplified
                ? "bg-amber-400 text-plum-950 font-semibold"
                : "bg-white/[0.07] text-white/70 hover:bg-white/[0.12]"
            }`}
          >
            Simplified {simplified ? "on" : "off"}
          </button>
        </div>
      </aside>
    </>
  );
}
