import Link from "next/link";
import PageHeader from "@/components/page-header";

const EDINBURGH = {
  name: "Edinburgh",
  lat: 55.9533,
  lon: -3.1883,
};

type OpenWeatherResponse = {
  name: string;
  dt: number;
  timezone: number;
  weather: { main: string; description: string; icon: string }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  wind: { speed: number; deg: number; gust?: number };
  visibility?: number;
  clouds: { all: number };
  sys: { sunrise: number; sunset: number };
};

const EMOJI: Record<string, string> = {
  Thunderstorm: "⛈️",
  Drizzle: "🌦️",
  Rain: "🌧️",
  Snow: "❄️",
  Clear: "☀️",
  Clouds: "☁️",
  Mist: "🌫️",
  Smoke: "🌫️",
  Haze: "🌫️",
  Dust: "🌫️",
  Fog: "🌫️",
  Sand: "🌫️",
  Ash: "🌫️",
  Squall: "💨",
  Tornado: "🌪️",
};

const formatTemp = (value: number) => `${Math.round(value)}°C`;
const toMph = (value: number) => Math.round(value * 2.23694);
const toKm = (value?: number) => (value ? `${(value / 1000).toFixed(1)} km` : "—");
const timeInEdinburgh = (timestamp: number) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  }).format(new Date(timestamp * 1000));

const windDirection = (deg: number) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(deg / 45) % 8];
};

async function getWeather() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) return { error: "missing" as const };

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.set("lat", String(EDINBURGH.lat));
  url.searchParams.set("lon", String(EDINBURGH.lon));
  url.searchParams.set("units", "metric");
  url.searchParams.set("appid", apiKey);

  const response = await fetch(url.toString(), { next: { revalidate: 600 } });
  if (!response.ok) {
    return {
      error: "fetch" as const,
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = (await response.json()) as OpenWeatherResponse;
  return { data } as const;
}

export default async function WeatherPage() {
  const result = await getWeather();

  console.log("Weather API result:", result); // Debug log to check the API response
  const weather = result.error ? null : result.data;
  const condition = weather?.weather?.[0];
  const emoji = condition ? EMOJI[condition.main] ?? "🌤️" : "🌤️";

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Weather" subtitle="Live conditions across Edinburgh" />

      <div className="px-5 py-6 max-w-6xl mx-auto space-y-6">
        <section className="relative overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 sm:p-8">
          <div className="absolute -top-24 -right-20 size-64 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 size-72 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1.1fr,1fr]">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                <span className="text-base">🌦️</span>
                <span>Live conditions • {EDINBURGH.name}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  Edinburgh Sky
                  <span className="block text-sky-600">right now.</span>
                </h1>
                <p className="text-sm text-slate-600 max-w-lg">
                  A quick read of the city&apos;s current conditions, wind, humidity, and visibility.
                  Updated every 10 minutes using OpenWeather.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/transport"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  🚌 Check transport impact
                </Link>
                <Link
                  href="/visitor"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-slate-300"
                >
                  🏴 Plan a day out
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-500">Now</div>
                {weather ? (
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl font-bold text-slate-900">{formatTemp(weather.main.temp)}</div>
                      <div className="text-3xl">{emoji}</div>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-700 capitalize">{condition?.description}</div>
                    <div className="mt-3 text-xs text-slate-500">
                      Feels like <strong className="text-slate-700">{formatTemp(weather.main.feels_like)}</strong>
                      <span className="px-2 text-slate-300">•</span>
                      High {formatTemp(weather.main.temp_max)} / Low {formatTemp(weather.main.temp_min)}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-sky-100 px-3 py-1 text-[11px] font-semibold text-sky-800">
                      Updated {timeInEdinburgh(weather.dt)}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 text-sm text-slate-600">
                    {result.error === "missing" ? (
                      <span>Add <code className="font-mono">OPENWEATHER_API_KEY</code> to load live data.</span>
                    ) : (
                      <div className="space-y-1">
                        <div>Live weather data is unavailable right now.</div>
                        {"status" in result && (
                          <div className="text-xs text-slate-500">
                            OpenWeather responded with {result.status} {result.statusText}.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-500">Sky + Air</div>
                <div className="mt-3 grid gap-3 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Cloud cover</span>
                    <span className="font-semibold text-slate-900">{weather ? `${weather.clouds.all}%` : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Humidity</span>
                    <span className="font-semibold text-slate-900">{weather ? `${weather.main.humidity}%` : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Visibility</span>
                    <span className="font-semibold text-slate-900">{weather ? toKm(weather.visibility) : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pressure</span>
                    <span className="font-semibold text-slate-900">{weather ? `${weather.main.pressure} hPa` : "—"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunrise / Sunset</span>
                    <span className="font-semibold text-slate-900">
                      {weather ? `${timeInEdinburgh(weather.sys.sunrise)} • ${timeInEdinburgh(weather.sys.sunset)}` : "—"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wind</div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {weather ? `${toMph(weather.wind.speed)} mph` : "—"}
                </div>
                <div className="text-xs text-slate-500 mt-1">Direction {weather ? windDirection(weather.wind.deg) : "—"}</div>
              </div>
              <div className="size-16 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-2xl">
                💨
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              {weather?.wind.gust ? `Gusts up to ${toMph(weather.wind.gust)} mph.` : "Gusts vary by neighbourhood."}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Layering Guide</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <div className="flex items-center justify-between rounded-xl bg-amber-50 px-3 py-2">
                <span>Base</span>
                <span className="font-semibold">Tee + light knit</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2">
                <span>Outer</span>
                <span className="font-semibold">Waterproof shell</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <span>Extras</span>
                <span className="font-semibold">Umbrella, scarf</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">Edinburgh weather shifts quickly — keep a light layer handy.</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white shadow-sm">
            <div className="text-xs font-bold text-white/60 uppercase tracking-widest">Quick Links</div>
            <div className="mt-4 space-y-2 text-sm">
              {[
                { label: "Met Office Edinburgh", href: "https://www.metoffice.gov.uk/weather/forecast/gcvwr3zrw" },
                { label: "Flood warnings", href: "https://floodline.sepa.org.uk/floodings" },
                { label: "Transport disruptions", href: "https://trafficscotland.org/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
                >
                  <span>{link.label}</span>
                  <span className="text-sky-300">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
