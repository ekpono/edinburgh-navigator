"use client";

import { useEffect, useState } from "react";
import type { Service } from "@/lib/edinburgh-data";

const STORAGE_KEY = "edinburgh-saved-places";

type SavedPlace = Pick<Service, "id" | "name" | "category" | "address" | "phone" | "website" | "hours" | "badge">;

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

function writeSaved(items: SavedPlace[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export default function SavePlaceButton({ service }: { service: Service }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const items = readSaved();
    setSaved(items.some((item) => item.id === service.id));
  }, [service.id]);

  const toggleSave = () => {
    const items = readSaved();
    if (items.some((item) => item.id === service.id)) {
      const next = items.filter((item) => item.id !== service.id);
      writeSaved(next);
      setSaved(false);
      return;
    }

    const entry: SavedPlace = {
      id: service.id,
      name: service.name,
      category: service.category,
      address: service.address,
      phone: service.phone,
      website: service.website,
      hours: service.hours,
      badge: service.badge,
    };
    writeSaved([...items, entry]);
    setSaved(true);
  };

  return (
    <button
      type="button"
      onClick={toggleSave}
      className={`inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 font-semibold text-sm transition-colors ${
        saved
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-slate-200 text-slate-600 hover:border-slate-400"
      }`}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}

export { STORAGE_KEY };
