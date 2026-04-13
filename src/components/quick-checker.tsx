"use client";

import { useState } from "react";

interface QuickCheckerProps {
  title: string;
  question: string;
  yesText: string;
  noText: string;
  yesResult: string;
  noResult: string;
  href?: string;
  hrefLabel?: string;
}

export default function QuickChecker({
  title,
  question,
  yesText,
  noText,
  yesResult,
  noResult,
  href,
  hrefLabel,
}: QuickCheckerProps) {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  const result = answer === "yes" ? yesResult : answer === "no" ? noResult : null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{question}</p>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setAnswer("yes")}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
            answer === "yes" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          {yesText}
        </button>
        <button
          onClick={() => setAnswer("no")}
          className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-colors ${
            answer === "no" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          {noText}
        </button>
      </div>

      {result && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          {result}
          {href && hrefLabel && (
            <a href={href} target="_blank" rel="noreferrer" className="ml-2 text-slate-900 font-semibold underline">
              {hrefLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
