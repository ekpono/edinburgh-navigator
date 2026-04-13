"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "edinburgh-postcode";

export default function PostcodeAlertsPanel() {
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) setPostcode(stored);
  }, []);

  const save = () => {
    const trimmed = postcode.trim().toUpperCase();
    setPostcode(trimmed);
    window.localStorage.setItem(STORAGE_KEY, trimmed);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">Postcode Alerts</h3>
          <p className="text-sm text-slate-500 mt-1">Save your postcode for quick links.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <input
          type="text"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          placeholder="Enter postcode (e.g. EH6 6QQ)"
          className="w-full sm:w-64 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <button
          onClick={save}
          className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold"
        >
          Save
        </button>
      </div>

      <div className="mt-4 grid gap-2 text-sm">
        <a
          href="https://www.edinburgh.gov.uk/bin-collection-days"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700"
        >
          Bin collection day {postcode ? `(${postcode})` : ""}
        </a>
        <a
          href="https://www.edinburgh.gov.uk/roadworks"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700"
        >
          Roadworks and disruptions
        </a>
        <a
          href="https://www.edinburgh.gov.uk/events"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700"
        >
          Local events and listings
        </a>
      </div>
    </section>
  );
}
