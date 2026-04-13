"use client";

import { useEffect, useRef } from "react";
import { MAP_LOCATIONS } from "@/lib/edinburgh-data";

const CATEGORY_COLORS: Record<string, string> = {
  library: "#7c3aed",
  health: "#dc2626",
  community: "#2563eb",
  park: "#16a34a",
  employment: "#d97706",
};

export default function EdinburghMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    const L = (window as unknown as { L: typeof import("leaflet") }).L;
    if (!L) {
      // Load Leaflet dynamically
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => initMap();
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      if (!mapRef.current) return;
      const Leaflet = (window as unknown as { L: typeof import("leaflet") }).L;
      const map = Leaflet.map(mapRef.current).setView([55.9533, -3.1883], 13);
      mapInstanceRef.current = map;

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      MAP_LOCATIONS.forEach((loc) => {
        const color = CATEGORY_COLORS[loc.category] || "#64748b";
        const icon = Leaflet.divIcon({
          html: `<div style="background:${color};color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;border:2px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);">${loc.emoji}</div>`,
          className: "",
          iconSize: [32, 32],
          iconAnchor: [16, 16],
          popupAnchor: [0, -18],
        });

        Leaflet.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(`
            <div style="min-width:180px;font-family:sans-serif;">
              <strong style="font-size:13px;color:#0f172a;">${loc.emoji} ${loc.name}</strong>
              <p style="font-size:11px;color:#64748b;margin:4px 0 0;">${loc.address}</p>
              <p style="font-size:11px;color:#475569;margin:4px 0 0;">${loc.note}</p>
            </div>
          `);
      });
    }

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div ref={mapRef} style={{ height: "480px", width: "100%" }} />
    </div>
  );
}
