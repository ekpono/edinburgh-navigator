"use client";

import { useEffect, useState } from "react";
import { buildMapsLink, toTel } from "@/lib/location";
import { STORAGE_KEY } from "@/components/save-place-button";

type SavedPlace = {
  id: string;
  name: string;
  category: string;
  address?: string;
  phone?: string;
  website?: string;
  hours?: string;
  badge?: string;
};

function readSaved() {
  if (typeof window === "undefined") return [] as SavedPlace[];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [] as SavedPlace[];
  try {
    return JSON.parse(raw) as SavedPlace[];
  } catch {
    return [] as SavedPlace[];
  }
}

export default function SavedPlacesPanel() {
  const [saved, setSaved] = useState<SavedPlace[]>([]);

  useEffect(() => {
    setSaved(readSaved());
    const onStorage = () => setSaved(readSaved());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const remove = (id: string) => {
    const next = saved.filter((item) => item.id !== id);
    setSaved(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">My Edinburgh</h3>
          <p className="text-sm text-slate-500 mt-1">Saved places for quick access.</p>
        </div>
      </div>

      {saved.length === 0 ? (
        <div className="mt-4 text-sm text-slate-500">No saved places yet. Tap “Save” on any service to add it here.</div>
      ) : (
        <div className="mt-4 space-y-3">
          {saved.map((place) => {
            const phoneHref = toTel(place.phone);
            const mapsHref = buildMapsLink(place.address);
            return (
              <div key={place.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900 text-sm">{place.name}</div>
                    {place.address && <div className="text-xs text-slate-500 mt-1">📍 {place.address}</div>}
                    {place.hours && <div className="text-xs text-slate-500 mt-1">🕐 {place.hours}</div>}
                  </div>
                  {place.badge && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                      {place.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {phoneHref && (
                    <a href={phoneHref} className="rounded-lg bg-slate-900 text-white px-3 py-1.5 font-semibold">
                      Call
                    </a>
                  )}
                  {mapsHref && (
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700"
                    >
                      Directions
                    </a>
                  )}
                  {place.website && (
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700"
                    >
                      Website
                    </a>
                  )}
                  <button
                    onClick={() => remove(place.id)}
                    className="rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
