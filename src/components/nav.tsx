"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/neighbourhoods", label: "Neighbourhoods" },
  { href: "/entertainment", label: "Entertainment" },
  { href: "/moving-guide", label: "Moving Guide", soon: true },
  { href: "/tenancy-rights", label: "Tenancy Rights", soon: true },
  { href: "/nhs-scotland", label: "NHS Scotland", soon: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white hover:text-slate-200 transition-colors"
          >
            <span className="text-2xl">🏰</span>
            <div className="leading-tight">
              <div className="font-bold text-base tracking-tight">Edinburgh Navigator</div>
              <div className="text-xs text-slate-400 font-normal hidden sm:block">
                Your guide to the city
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.soon ? "#" : link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  } ${link.soon ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {link.label}
                  {link.soon && (
                    <span className="ml-1.5 text-xs bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded-full">
                      soon
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-700 py-3 pb-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.soon ? "#" : link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {link.soon && (
                    <span className="text-xs bg-slate-700 text-slate-400 px-2 py-0.5 rounded-full">
                      coming soon
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
