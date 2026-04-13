"use client";

import { useEffect, useMemo, useState } from "react";
import type { Service } from "@/lib/edinburgh-data";
import { formatDistance, haversineDistance } from "@/lib/location";
import ServiceCard from "@/components/service-card";

interface NearbyPanelProps {
  title: string;
  services: Service[];
  maxResults?: number;
}

export default function NearbyPanel({ title, services, maxResults = 5 }: NearbyPanelProps) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [postcode, setPostcode] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("Location not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setGeoError("Location access is off. Use a postcode instead.");
      },
      { enableHighAccuracy: false, timeout: 6000, maximumAge: 300000 }
    );
  }, []);

  const scored = useMemo(() => {
    if (!userLocation) return [];
    return services
      .filter((service) => service.geo)
      .map((service) => ({
        service,
        distance: haversineDistance(userLocation, service.geo as { lat: number; lng: number }),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, maxResults);
  }, [services, userLocation, maxResults]);

  const postcodeMatches = useMemo(() => {
    const trimmed = postcode.trim().toUpperCase();
    if (trimmed.length < 2) return [];
    return services.filter((service) => service.address?.toUpperCase().includes(trimmed)).slice(0, maxResults);
  }, [postcode, services, maxResults]);

  const list = userLocation ? scored.map((item) => ({ ...item, service: item.service })) : postcodeMatches.map((service) => ({ service }));

  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">We use your location or postcode to show nearby help.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          placeholder="Postcode or area (e.g. EH1)"
          className="w-full sm:w-72 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        {geoError && <span className="text-xs text-amber-600">{geoError}</span>}
      </div>

      <div className="mt-4 grid gap-3">
        {list.length === 0 && (
          <div className="text-sm text-slate-500">No nearby matches yet. Try a postcode like EH1 or EH6.</div>
        )}

        {userLocation &&
          scored.map((item) => (
            <div key={item.service.id} className="relative">
              <div className="absolute right-3 top-3 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                {formatDistance(item.distance)} away
              </div>
              <ServiceCard service={item.service} variant="compact" />
            </div>
          ))}

        {!userLocation &&
          postcodeMatches.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
      </div>
    </section>
  );
}
