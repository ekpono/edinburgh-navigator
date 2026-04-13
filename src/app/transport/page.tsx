"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";
import { SERVICE_CONTACTS } from "@/lib/edinburgh-data";

const TABS = [
  { id: "overview", label: "Getting Around" },
  { id: "buses", label: "Buses" },
  { id: "tram", label: "Trams & Rail" },
  { id: "cycling", label: "Cycling" },
  { id: "airport", label: "Airport" },
  { id: "parking", label: "Parking" },
];

const KEY_ROUTES = [
  { route: "1 / 34", from: "Clermiston / Wester Hailes", to: "Foot of Leith Walk / Ocean Terminal", note: "West–East cross-city" },
  { route: "3 / 3A", from: "Forth Road Bridge / Dalmeny", to: "Newington / Cameron Toll", note: "North Edinburgh via Princes Street" },
  { route: "7 / 37", from: "Newhaven / Granton", to: "Gilmerton / Lasswade", note: "Airport to South Edinburgh" },
  { route: "10 / 11", from: "Muirhouse / Pilton", to: "Morningside / Fairmilehead", note: "North–South through city centre" },
  { route: "12 / 26", from: "Gyle / Edinburgh Park", to: "Portobello / Musselburgh", note: "West–East via Princes Street" },
  { route: "22", from: "Ocean Terminal (Leith)", to: "Gyle Shopping Centre", note: "Frequent cross-city route" },
  { route: "24 / 29", from: "Torphin / Colinton", to: "Leith / Newhaven", note: "South via Morningside, Meadows" },
  { route: "25 / 44", from: "Riccarton (Heriot-Watt)", to: "Eastfield / Wallyford", note: "West to East, via Princes Street" },
  { route: "35", from: "Riccarton (Heriot-Watt)", to: "Cameron Toll", note: "University of Edinburgh campuses" },
  { route: "X27 / 27", from: "Sighthill", to: "Hunters Tryst / Aldi", note: "South-west Edinburgh" },
  { route: "Airlink 100", from: "Edinburgh Airport", to: "Waverley Bridge", note: "Airport express, every 10 min" },
  { route: "N22 / N25", from: "City Centre", to: "Various suburbs", note: "Night buses — Friday/Saturday" },
];

const TRAM_STOPS = [
  "Edinburgh Airport", "Ingliston P&R", "Edinburgh Park (Rail)", "Murrayfield Stadium",
  "Haymarket (Rail)", "West End – Princes Street", "Princes Street", "St Andrew Square",
  "York Place", "Picardy Place", "Bonnington", "Newhaven",
];

export default function TransportPage() {
  const [tab, setTab] = useState("overview");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["lothian-buses", "edinburgh-trams", "waverley-station"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Transport" subtitle="Getting around Edinburgh by bus, tram, bike, and rail" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Getting <span className="text-orange-500">Around.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh is compact and walkable in the centre, with an extensive Lothian Buses network, trams, cycling routes, and ScotRail connections across Scotland.</p>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Bus single", value: "£1.80", note: "Exact change or app" },
              { label: "Day ticket", value: "£4.50", note: "Unlimited bus travel" },
              { label: "Under 22s", value: "Free", note: "National bus pass" },
              { label: "Tram airport", value: "£8.50", note: "Single to city centre" },
            ].map((s) => (
              <div key={s.label} className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-orange-700">{s.value}</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "overview" && (
          <div className="space-y-3">
            {[
              {
                emoji: "🚌",
                title: "Lothian Buses",
                colour: "bg-orange-50 border-orange-200",
                titleColour: "text-orange-900",
                body: "Edinburgh's main bus operator runs 70+ routes across the city and suburbs. Single fare is £1.80 (exact change or Lothian Buses app). Day tickets £4.50, weekly Ridacards also available. Under-22s travel free with a Young Persons Free Bus Pass.",
              },
              {
                emoji: "🚋",
                title: "Edinburgh Trams",
                colour: "bg-sky-50 border-sky-200",
                titleColour: "text-sky-900",
                body: "One tram line runs from Edinburgh Airport through Murrayfield, Haymarket, Princes Street, St Andrew Square, York Place, and on to Newhaven. Journey from airport to city centre takes ~35 minutes. Single £8.50, day ticket £9. Cheaper and easier than taxis.",
              },
              {
                emoji: "🚂",
                title: "ScotRail",
                colour: "bg-blue-50 border-blue-200",
                titleColour: "text-blue-900",
                body: "Trains from Edinburgh Waverley and Haymarket connect to Glasgow (50 min), Dundee (1hr 20min), Aberdeen (2hr 30min), Inverness (3hr 30min), and London King's Cross (4hr 20min via LNER). Use the ScotRail app or Trainline to plan and book.",
              },
              {
                emoji: "🚲",
                title: "Cycling",
                colour: "bg-emerald-50 border-emerald-200",
                titleColour: "text-emerald-900",
                body: "Edinburgh has a growing cycling network. Just Eat Cycles provides e-bike hire across the city. Key routes: the Water of Leith Walkway (car-free), the Innocent Railway path to Portobello, and the National Cycle Network routes (NCN1 and NCN75). Cycling is free — bikes can be taken on ScotRail (book in advance).",
              },
              {
                emoji: "🚕",
                title: "Taxis & Rideshare",
                colour: "bg-yellow-50 border-yellow-200",
                titleColour: "text-yellow-900",
                body: "Licensed black cabs can be hailed or booked via City Cabs (0131 228 1211) or Central Taxis (0131 229 2468). Uber and Bolt also operate in Edinburgh. Airport to city centre by taxi is typically £25–40 depending on traffic.",
              },
              {
                emoji: "🚶",
                title: "Walking",
                colour: "bg-slate-50 border-slate-200",
                titleColour: "text-slate-900",
                body: "The Old Town and New Town are very walkable. Royal Mile to Princes Street Gardens: 5 min. Waverley to Grassmarket: 10 min. The city centre to Leith Walk top: 15 min walk. Many Edinburgh residents walk or cycle for journeys under 2 miles.",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl border p-4 ${item.colour}`}>
                <div className={`font-bold text-sm mb-1 ${item.titleColour}`}>{item.emoji} {item.title}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Plan your journey</strong>
              <div className="mt-2 space-y-1.5">
                {[
                  { label: "Lothian Buses app & planner", url: "https://www.lothianbuses.com/", desc: "Buy tickets, plan routes, live arrivals" },
                  { label: "Traveline Scotland", url: "https://www.travelinescotland.com/", desc: "Multimodal journey planner for all of Scotland" },
                  { label: "Edinburgh Trams", url: "https://edinburghtrams.com/", desc: "Tram timetables and ticketing" },
                  { label: "ScotRail", url: "https://www.scotrail.co.uk/", desc: "Train times and booking" },
                ].map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noreferrer"
                    className="flex items-center justify-between py-2 border-b border-white/10 last:border-0 hover:opacity-80 transition-opacity">
                    <div>
                      <div className="text-xs font-semibold">{link.label}</div>
                      <div className="text-xs text-slate-400">{link.desc}</div>
                    </div>
                    <span className="text-orange-400 text-xs font-bold ml-3">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "buses" && (
          <div className="space-y-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-900 text-sm mb-3">How to Pay</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { method: "Lothian Buses App", desc: "Buy a single or day ticket before you board. Scan your phone on the reader. Cheapest and most convenient." },
                  { method: "Exact cash", desc: "Drivers don't give change. Have exact £1.80 ready. If you can't, buy a slightly higher-value ticket — surplus is credited." },
                  { method: "Ridacard", desc: "Weekly (£19), monthly, or annual pass. Tap-on, tap-off. Best value if you travel daily." },
                  { method: "Day ticket £4.50", desc: "Unlimited travel all day on Lothian Buses. Buy on the app or from the driver. Great for tourists and occasional users." },
                ].map((m) => (
                  <div key={m.method} className="bg-white rounded-xl border border-orange-100 p-3">
                    <div className="font-bold text-sm text-slate-900 mb-1">{m.method}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Key Routes</h3>
                <p className="text-xs text-slate-500 mt-0.5">Edinburgh has 70+ routes — these cover most of the city</p>
              </div>
              <div className="divide-y divide-slate-100">
                {KEY_ROUTES.map((r) => (
                  <div key={r.route} className="px-5 py-3 flex items-start gap-3">
                    <div className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 min-w-[52px] text-center">
                      {r.route}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-slate-900">{r.from} → {r.to}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{r.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">🌙 Night Buses</strong>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">N-prefix routes (N22, N25, N26, N44) run on Friday and Saturday nights from the city centre to suburbs. Standard fares apply. Check the Lothian Buses app for night bus times.</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">🟢 Free Travel Under 22</strong>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">All under-22s get free bus travel on all Scottish local buses. Apply for your Young Persons Free Bus Pass at transport.gov.scot. Takes 1–2 weeks to arrive.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <strong className="text-sm text-slate-900">Real-time arrivals</strong>
              <p className="text-xs text-slate-500 mt-1 mb-2">Every bus stop has a number on the pole. Text it to 87010 to get the next arrivals by SMS, or use the Lothian Buses app.</p>
              <a href="https://lothianbuses.com/plan-my-journey" target="_blank" rel="noreferrer"
                className="inline-block text-xs font-bold bg-orange-600 text-white px-3 py-1.5 rounded-lg hover:bg-orange-700 transition-colors">
                Plan journey →
              </a>
            </div>
          </div>
        )}

        {tab === "tram" && (
          <div className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
              <h3 className="font-bold text-sky-900 text-sm mb-2">Edinburgh Trams — Line 1</h3>
              <p className="text-xs text-sky-800 leading-relaxed mb-3">One tram line runs from Edinburgh Airport to Newhaven (Leith waterfront), passing through the city centre. Trams run every 7–8 minutes at peak times.</p>
              <div className="flex flex-col gap-1.5">
                {TRAM_STOPS.map((stop, i) => (
                  <div key={stop} className="flex items-center gap-2">
                    <div className={`size-2.5 rounded-full flex-shrink-0 ${i === 0 || i === TRAM_STOPS.length - 1 ? "bg-sky-600" : "bg-sky-300"}`} />
                    <div className="text-xs text-slate-700 font-medium">{stop}</div>
                    {i === 0 && <div className="text-xs text-sky-600 font-semibold ml-auto">Start</div>}
                    {i === TRAM_STOPS.length - 1 && <div className="text-xs text-sky-600 font-semibold ml-auto">End</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Tram Fares</h3>
              {[
                { zone: "City Zone (Haymarket to Newhaven)", single: "£1.80", day: "£4.50", note: "Same as bus — use bus day ticket" },
                { zone: "Airport to City Centre", single: "£8.50", day: "£9.00", note: "Day ticket valid all day on trams" },
                { zone: "Airport to Newhaven (full line)", single: "£8.50", day: "£9.00", note: "Same price as airport to city" },
              ].map((f) => (
                <div key={f.zone} className="border-b border-slate-100 last:border-0 py-3">
                  <div className="font-semibold text-slate-900 text-xs">{f.zone}</div>
                  <div className="flex gap-4 mt-1">
                    <div className="text-xs"><span className="text-slate-400">Single</span> <span className="font-bold text-sky-700">{f.single}</span></div>
                    <div className="text-xs"><span className="text-slate-400">Day</span> <span className="font-bold text-sky-700">{f.day}</span></div>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{f.note}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">ScotRail — Key Routes from Edinburgh</h3>
              {[
                { route: "Edinburgh → Glasgow Queen Street", time: "~50 min", freq: "Every 15 min peak", price: "From £7 advance" },
                { route: "Edinburgh → Dundee", time: "~1hr 20min", freq: "Hourly", price: "From £10 advance" },
                { route: "Edinburgh → Stirling", time: "~55 min", freq: "Every 30 min", price: "From £6 advance" },
                { route: "Edinburgh → Perth", time: "~1hr 25min", freq: "Hourly", price: "From £11 advance" },
                { route: "Edinburgh → Aberdeen", time: "~2hr 30min", freq: "Hourly", price: "From £15 advance" },
                { route: "Edinburgh → Inverness", time: "~3hr 30min", freq: "Every 2hr", price: "From £20 advance" },
                { route: "Edinburgh → London (LNER/Avanti)", time: "~4hr 20min", freq: "Hourly", price: "From £30 advance" },
              ].map((r) => (
                <div key={r.route} className="border-b border-slate-100 last:border-0 py-3">
                  <div className="font-semibold text-slate-900 text-xs">{r.route}</div>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-xs text-slate-500">⏱ {r.time}</span>
                    <span className="text-xs text-slate-500">🕐 {r.freq}</span>
                    <span className="text-xs font-semibold text-sky-700">{r.price}</span>
                  </div>
                </div>
              ))}
              <a href="https://www.scotrail.co.uk/" target="_blank" rel="noreferrer"
                className="inline-block mt-3 text-xs font-bold bg-sky-600 text-white px-3 py-1.5 rounded-lg hover:bg-sky-700 transition-colors">
                Book at scotrail.co.uk →
              </a>
            </div>
          </div>
        )}

        {tab === "cycling" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 text-sm mb-2">Just Eat Cycles — Edinburgh E-bike Hire</h3>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">Over 200 e-bikes and pedal bikes available at docking stations across Edinburgh. No membership required — use the Just Eat Cycles app. 30p per minute; £1 unlock fee. Great for short trips around the city.</p>
              <a href="https://edinburghcyclehire.com/" target="_blank" rel="noreferrer"
                className="inline-block text-xs font-bold bg-emerald-700 text-white px-4 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors">
                Find nearest bike →
              </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Key Cycling Routes</h3>
              <div className="space-y-3">
                {[
                  { name: "Water of Leith Walkway", desc: "12-mile largely car-free route from Balerno through the city to Leith. Flat sections, scenic, passes through Stockbridge and Canonmills.", tags: ["Car-free", "12 miles", "Flat"] },
                  { name: "Innocent Railway Path", desc: "Off-road path from the city centre through Holyrood Park and on to Portobello seafront. One of Edinburgh's most popular cycling commute routes.", tags: ["Off-road", "4 miles", "City to coast"] },
                  { name: "NCN Route 1 (North Sea Cycle Route)", desc: "National Cycle Network route through Edinburgh connecting Leith to Musselburgh and beyond. Well-signposted.", tags: ["National Route", "Signposted"] },
                  { name: "NCN Route 75 (Clyde to Forth)", desc: "Long-distance route passing through Edinburgh from Cramond Foreshore eastward. Connects Edinburgh to Glasgow via Falkirk.", tags: ["Long distance", "National Route"] },
                  { name: "Leith Walk & Constitution Street", desc: "Edinburgh's busiest cycling corridor — protected cycle lanes from the city centre to Leith and the waterfront.", tags: ["Protected lanes", "Urban", "Busy"] },
                  { name: "Roseburn Path", desc: "Quiet traffic-free path connecting Murrayfield and the west end of Edinburgh. Good for commuters heading to the city centre.", tags: ["Traffic-free", "West Edinburgh"] },
                ].map((route) => (
                  <div key={route.name} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                    <div className="font-semibold text-slate-900 text-xs mb-1">{route.name}</div>
                    <div className="text-xs text-slate-500 leading-relaxed mb-1.5">{route.desc}</div>
                    <div className="flex flex-wrap gap-1">
                      {route.tags.map((t) => (
                        <span key={t} className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">🔒 Bike Security</strong>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Bike theft is common in Edinburgh. Always use a D-lock through the frame and rear wheel. Register your bike for free at BikeRegister.com. Report theft to Police Scotland (101) with the serial number.</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">🛠 Free Cycle Repair</strong>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Cyrenians Community Bikes and Edinburgh Bicycle Cooperative run free or low-cost repair workshops. Spokes (the Edinburgh cycling campaign) publishes free cycling maps of the city.</p>
              </div>
            </div>
          </div>
        )}

        {tab === "airport" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Edinburgh Airport (EDI)</h3>
              <p className="text-xs text-slate-500 mb-3">Located in Ingliston, ~8 miles west of the city centre. International and domestic flights. The airport has its own tram stop — Ingliston Park & Ride is adjacent.</p>
              <div className="space-y-3">
                {[
                  {
                    method: "🚋 Tram (Edinburgh Trams)",
                    time: "35 min to Princes Street",
                    price: "£8.50 single | £9 day ticket",
                    freq: "Every 7–8 min",
                    note: "Most reliable option — no traffic delays. Buy ticket at airport tram stop before boarding.",
                    colour: "border-sky-200 bg-sky-50",
                    badge: "Recommended",
                    badgeColour: "bg-sky-600 text-white",
                  },
                  {
                    method: "🚌 Airlink 100 (bus)",
                    time: "30–45 min to Waverley Bridge",
                    price: "£4.50 single | £7.50 day",
                    freq: "Every 10 min",
                    note: "Stops at Haymarket and Waverley Bridge. Cheaper than tram. Can be slower in traffic.",
                    colour: "border-orange-200 bg-orange-50",
                    badge: "Budget option",
                    badgeColour: "bg-orange-600 text-white",
                  },
                  {
                    method: "🚕 Taxi / Uber",
                    time: "25–45 min (traffic dependent)",
                    price: "£25–40 to city centre",
                    freq: "On demand",
                    note: "Useful with heavy luggage. Official taxi rank outside arrivals. Uber and Bolt available. Agree price or use meter.",
                    colour: "border-yellow-200 bg-yellow-50",
                    badge: "Convenient",
                    badgeColour: "bg-yellow-600 text-white",
                  },
                  {
                    method: "🚗 Driving / Park & Ride",
                    time: "20–40 min by car",
                    price: "Short stay from £7/hr | Long stay from £28/day",
                    freq: "N/A",
                    note: "Ingliston Park & Ride is directly adjacent and connects to trams. Long-stay parking for multi-day trips.",
                    colour: "border-slate-200 bg-slate-50",
                    badge: "Car users",
                    badgeColour: "bg-slate-600 text-white",
                  },
                ].map((opt) => (
                  <div key={opt.method} className={`rounded-xl border p-4 ${opt.colour}`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-bold text-slate-900 text-sm">{opt.method}</div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${opt.badgeColour}`}>{opt.badge}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="text-xs"><span className="text-slate-400">Time:</span> <span className="font-semibold text-slate-800">{opt.time}</span></div>
                      <div className="text-xs"><span className="text-slate-400">Price:</span> <span className="font-semibold text-slate-800">{opt.price}</span></div>
                      <div className="text-xs"><span className="text-slate-400">Freq:</span> <span className="font-semibold text-slate-800">{opt.freq}</span></div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{opt.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Edinburgh Airport info</strong>
              <div className="mt-2 space-y-1 text-xs text-slate-300">
                <div>📞 General enquiries: <span className="font-mono font-bold text-white">0844 448 8833</span></div>
                <div>🔗 <a href="https://www.edinburghairport.com/" target="_blank" rel="noreferrer" className="text-orange-400 hover:underline">edinburghairport.com</a></div>
                <div>📍 Edinburgh Airport, EH12 9DN</div>
              </div>
            </div>
          </div>
        )}

        {tab === "parking" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Park & Ride — Leave Your Car, Take Public Transport</h3>
              <div className="space-y-3">
                {[
                  { name: "Ingliston Park & Ride", location: "Near Edinburgh Airport, EH28 8NB", transport: "Tram to city centre (35 min)", spaces: "3,500 spaces", price: "From £3.50/day (includes return tram)", tip: "Best for west/airport access" },
                  { name: "Newcraighall (Musselburgh) P&R", location: "Newcraighall Road, EH15 3HS", transport: "Tram and bus connections", spaces: "650 spaces", price: "Free parking + bus/tram fare", tip: "Good for east Edinburgh access" },
                  { name: "Straiton P&R", location: "Straiton, EH20 9QB", transport: "Bus routes 31 and 37", spaces: "900 spaces", price: "Free parking + bus fare", tip: "Good for south Edinburgh access" },
                  { name: "Sheriffhall P&R", location: "Near Dalkeith, EH22", transport: "Bus routes 3 and 29", spaces: "500 spaces", price: "Free parking + bus fare", tip: "Good for A1/A68 commuters" },
                ].map((pr) => (
                  <div key={pr.name} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-slate-900 text-sm">{pr.name}</div>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full flex-shrink-0">{pr.tip}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">📍 {pr.location}</div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="text-xs"><span className="text-slate-400">Transport:</span> <span className="text-slate-700 font-medium">{pr.transport}</span></div>
                      <div className="text-xs"><span className="text-slate-400">Spaces:</span> <span className="text-slate-700 font-medium">{pr.spaces}</span></div>
                      <div className="text-xs col-span-2"><span className="text-slate-400">Price:</span> <span className="text-emerald-700 font-semibold">{pr.price}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Parking in the City Centre</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">Most of central Edinburgh is in a Controlled Parking Zone (CPZ). Pay-and-display on streets or use one of Edinburgh's multi-storey car parks.</p>
              {[
                { name: "St James Quarter", address: "St James Quarter, EH1 3AF", price: "From £3/hr" },
                { name: "Castle Terrace", address: "Castle Terrace, EH1 2EL", price: "From £4/hr" },
                { name: "Greenside Row (Omni)", address: "Greenside Row, EH1 3AA", price: "From £3/hr" },
                { name: "Waverley Mall", address: "Princes Street, EH1 1BQ", price: "From £4/hr" },
                { name: "Fringe Central (Festival only)", address: "Castlehill, EH1 2NE", price: "Festival periods" },
              ].map((cp) => (
                <div key={cp.name} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 text-xs">
                  <div>
                    <div className="font-semibold text-slate-900">{cp.name}</div>
                    <div className="text-slate-400">📍 {cp.address}</div>
                  </div>
                  <div className="text-orange-700 font-bold flex-shrink-0 ml-3">{cp.price}</div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-sm text-amber-900">Resident parking permits</strong>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">If you live in a Controlled Parking Zone, you can apply for a resident permit at edinburgh.gov.uk/parking-permits. Permits cost from £104/year and must match your registered vehicle and address.</p>
              <a href="https://www.edinburgh.gov.uk/parking-permits" target="_blank" rel="noreferrer"
                className="inline-block mt-2 text-xs font-bold text-amber-700 hover:underline">Apply for permit →</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
