export type Coordinates = { lat: number; lng: number };

export function toTel(phone?: string) {
  if (!phone) return undefined;
  const cleaned = phone.replace(/[^0-9+]/g, "");
  return cleaned.length > 0 ? `tel:${cleaned}` : undefined;
}

export function buildMapsLink(address?: string, coordinates?: Coordinates) {
  if (coordinates) {
    return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  }
  if (!address) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function haversineDistance(a: Coordinates, b: Coordinates) {
  const toRadians = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  return earthRadiusKm * c;
}

export function formatDistance(distanceKm: number) {
  if (distanceKm < 1) return `${Math.round(distanceKm * 1000)} m`;
  if (distanceKm < 10) return `${distanceKm.toFixed(1)} km`;
  return `${Math.round(distanceKm)} km`;
}
