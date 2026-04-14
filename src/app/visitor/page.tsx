"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";
import { SERVICE_CONTACTS } from "@/lib/edinburgh-data";

const TABS = [
  { id: "itineraries", label: "Itineraries" },
  { id: "top", label: "Top Attractions" },
  { id: "around", label: "Getting Around" },
  { id: "daytrips", label: "Day Trips" },
  { id: "events", label: "What's On" },
  { id: "tips", label: "Practical Tips" },
  { id: "food", label: "Food & Drink" },
];

type Stop = { time: string; place: string; desc: string; cost: string; tip?: string };
type Itinerary = {
  id: string; emoji: string; title: string; subtitle: string;
  badge: string; badgeColour: string; headerColour: string;
  stops: Stop[]; notes: string[];
};

const ITINERARIES: Itinerary[] = [
  {
    id: "1day",
    emoji: "⚡",
    title: "1 Day in Edinburgh",
    subtitle: "The essential loop — Old Town, the Castle, and Princes Street",
    badge: "1 Day",
    badgeColour: "bg-sky-100 text-sky-700",
    headerColour: "bg-sky-50 border-sky-200",
    stops: [
      { time: "9:00 am", place: "Edinburgh Castle", desc: "Start early to beat the crowds. See the Scottish Crown Jewels, the Stone of Destiny, and panoramic views over the city. Allow 2 hours.", cost: "£17.50 adults · Book online", tip: "The One O'Clock Gun fires every weekday at 13:00 — time your visit to hear it." },
      { time: "11:30 am", place: "Royal Mile stroll", desc: "Walk downhill from the Castle Esplanade through the heart of the Old Town. Dip into a close — try Bakehouse Close or Anchor Close. Stop at St Giles' Cathedral (free).", cost: "Free" },
      { time: "1:00 pm", place: "Lunch near the Grassmarket", desc: "Head down Victoria Street (one of Edinburgh's most photogenic streets) to the Grassmarket. Lots of pubs and cafés. The Mosque Kitchen nearby offers the best budget food in the city.", cost: "£5–15" },
      { time: "2:30 pm", place: "National Museum of Scotland", desc: "A 5-minute walk from the Grassmarket. World-class free museum — Scottish history, science, and culture. Even an hour is well worth it.", cost: "Free", tip: "Head to the rooftop terrace for a free view over Old Town." },
      { time: "4:30 pm", place: "Calton Hill", desc: "Head east along Princes Street and climb Calton Hill — 5 minutes from the top of Leith Walk. Outstanding 360° panorama of the city. Perfect late-afternoon light.", cost: "Free" },
      { time: "6:30 pm", place: "Dinner — New Town or Royal Mile", desc: "The New Town (George Street, Thistle Street) has excellent restaurants across all budgets. Dishoom on St Andrew Square is popular — book ahead.", cost: "£15–35" },
      { time: "8:30 pm", place: "Evening drink — a real Scottish pub", desc: "Finish at The Bow Bar (West Bow) for Scottish ales and whiskies, or The Last Drop in the Grassmarket for a lively atmosphere.", cost: "£4–10 per drink" },
    ],
    notes: [
      "Total walking: approx. 5–6 km, mostly downhill from the Castle",
      "Buy Edinburgh Castle tickets online the day before",
      "Comfortable shoes essential — cobbles and hills throughout",
    ],
  },
  {
    id: "48hours",
    emoji: "🗓",
    title: "48 Hours in Edinburgh",
    subtitle: "Two full days covering the city's highlights and a taste of Leith",
    badge: "2 Days",
    badgeColour: "bg-violet-100 text-violet-700",
    headerColour: "bg-violet-50 border-violet-200",
    stops: [
      { time: "Day 1 · 9:00 am", place: "Arthur's Seat", desc: "Start with the hike — 45–60 min at a moderate pace. Begin at the Holyrood Park car park or from Dunsapie Loch. Incredible views in every direction.", cost: "Free", tip: "Start early — it gets very busy by 10:30 am in summer." },
      { time: "Day 1 · 11:30 am", place: "Palace of Holyroodhouse", desc: "At the bottom of the Royal Mile. The King's official Scottish residence — state apartments and the haunting ruins of Holyrood Abbey.", cost: "£18 adults" },
      { time: "Day 1 · 1:00 pm", place: "Royal Mile lunch & walk uphill", desc: "Grab lunch (The Elephant House café where J.K. Rowling wrote Harry Potter is nearby) then walk the full length of the Royal Mile uphill.", cost: "£8–15" },
      { time: "Day 1 · 2:30 pm", place: "Edinburgh Castle", desc: "Arrive in the afternoon when morning crowds thin. Crown Jewels, Great Hall, and views towards Fife and the Pentland Hills.", cost: "£17.50 adults · Book online" },
      { time: "Day 1 · 5:00 pm", place: "Grassmarket & Victoria Street", desc: "Wind down through Victoria Street (a curving, colourful street of independent shops). Browse the Grassmarket for a pre-dinner drink.", cost: "Free" },
      { time: "Day 1 · 7:00 pm", place: "Dinner: Old Town", desc: "Try Timberyard (booking essential, worth it) or a more casual meal on the Cowgate. End at The Bow Bar for whisky.", cost: "£20–45" },
      { time: "Day 2 · 9:30 am", place: "Scottish National Gallery", desc: "Start Day 2 with world-class art — free, uncrowded at opening. Vermeer, Raphael, and Scotland's greatest painters. Magnificent neoclassical building on the Mound.", cost: "Free" },
      { time: "Day 2 · 11:00 am", place: "Princes Street & New Town", desc: "Cross to the New Town — explore the Georgian streets, Charlotte Square, and Princes Street Gardens. Scottish National Portrait Gallery is free and worth 30 min.", cost: "Free" },
      { time: "Day 2 · 1:00 pm", place: "Lunch in Stockbridge", desc: "Walk north through the New Town to Stockbridge — Edinburgh's most charming neighbourhood. Excellent cafés, Sunday Farmers Market, and the Water of Leith Walkway.", cost: "£8–15" },
      { time: "Day 2 · 3:00 pm", place: "Royal Botanic Garden", desc: "10-minute walk from Stockbridge. 70 acres of free outdoor gardens. The glasshouses (small fee) are excellent. Quiet, beautiful, and underrated.", cost: "Garden free · Glasshouses £6.50" },
      { time: "Day 2 · 5:00 pm", place: "Leith for dinner", desc: "Head down to Leith — Edinburgh's port district. Walk along The Shore (waterfront), have a drink, and dinner at one of the outstanding restaurants.", cost: "£20–45", tip: "The Kitchin is here for a special occasion (book weeks ahead). For casual: Kanpai Sushi or The Kitchin's sister café." },
    ],
    notes: [
      "Day 1 is Old Town focused; Day 2 covers New Town, Stockbridge, and Leith",
      "Buy a Lothian Buses day ticket (£4.50) for Day 2 to avoid extra walking",
      "Total walking across 2 days: approx. 15–18 km",
    ],
  },
  {
    id: "kids",
    emoji: "👨‍👩‍👧‍👦",
    title: "Weekend with Kids",
    subtitle: "Family-friendly Edinburgh — interactive, outdoor, and budget-aware",
    badge: "Family",
    badgeColour: "bg-emerald-100 text-emerald-700",
    headerColour: "bg-emerald-50 border-emerald-200",
    stops: [
      { time: "Day 1 · 9:30 am", place: "Dynamic Earth", desc: "Best Edinburgh attraction for children — immersive journey from the Big Bang to now. Interactive exhibits, volcano simulation, and ice cave. Allow 2.5 hours.", cost: "£16 adults / £10 children (3–14)", tip: "Book online for a small discount. Check for school holiday family deals." },
      { time: "Day 1 · 12:30 pm", place: "Holyrood Park picnic", desc: "Pick up supplies and have a picnic in Holyrood Park with views of Arthur's Seat. Lots of open space for kids. Ducks at St Margaret's Loch.", cost: "Free (food extra)" },
      { time: "Day 1 · 2:00 pm", place: "Gentle Arthur's Seat walk", desc: "For older children (7+): take the gentler Dunsapie route for a shorter, less steep climb with amazing views. For younger children, walk around the loch instead.", cost: "Free" },
      { time: "Day 1 · 4:30 pm", place: "National Museum of Scotland", desc: "One of the best free museums in the UK for children — hands-on science galleries, Dolly the sheep, giant whale skeleton, and Scottish history. Allow 1.5–2 hours.", cost: "Free", tip: "Pick up a children's activity trail from the front desk." },
      { time: "Day 1 · 7:00 pm", place: "Dinner — family-friendly", desc: "Gordon's Trattoria on the Royal Mile is great for families (Italian, relaxed, reasonable prices). Or head to a local pub — Scottish pubs are family-friendly until 9 pm.", cost: "£12–25 per head" },
      { time: "Day 2 · 10:00 am", place: "Edinburgh Castle", desc: "Children love the castle — Crown Jewels, Stone of Destiny, and the dog cemetery. The One O'Clock Gun firing at 1 pm is a highlight.", cost: "£17.50 adults / £10.50 children", tip: "Children under 5 are free." },
      { time: "Day 2 · 1:00 pm", place: "Lunch on the Royal Mile", desc: "Deacon Brodie's Tavern (right on the Royal Mile) is reliable, spacious, and kids are welcome.", cost: "£10–20" },
      { time: "Day 2 · 2:30 pm", place: "Royal Botanic Garden", desc: "Bus 23 or 27 from George IV Bridge to the Botanics — huge grounds for children to explore, a pond with ducks, and peaceful for parents too.", cost: "Free (outdoor gardens)" },
      { time: "Day 2 · 4:30 pm", place: "Portobello Beach", desc: "If weather allows — bus 26 or 45 from the city centre (25 min). Edinburgh's sandy beach with a promenade and ice cream shops. Kids love it.", cost: "Free", tip: "The water is cold! But kids rarely care." },
    ],
    notes: [
      "Under-5s are free at Edinburgh Castle — bring proof of age if queried",
      "Lothian Buses: under-5s travel free; ages 5–15 pay child fare",
      "The Real Mary King's Close is not recommended for children under 10 (dark, intense)",
      "Most restaurants welcome children — ask about kids' menus",
    ],
  },
  {
    id: "rainy",
    emoji: "☔",
    title: "Rainy Day Edinburgh",
    subtitle: "A full indoor day — world-class museums, history, food, and live music",
    badge: "Indoors",
    badgeColour: "bg-slate-100 text-slate-600",
    headerColour: "bg-slate-50 border-slate-200",
    stops: [
      { time: "10:00 am", place: "National Museum of Scotland", desc: "World-class, free, and could fill an entire day alone. Scottish history from ancient times to the present, science and technology, fashion, and global cultures. Excellent café on site.", cost: "Free", tip: "The rooftop terrace has glass cover — you can look out even in rain." },
      { time: "12:00 pm", place: "Lunch at the Museum café or nearby", desc: "The Museum has a good café on multiple levels. Alternatively, Hideout Café (Candlemaker Row, 2 min walk) is excellent for soup and sandwiches.", cost: "£7–14" },
      { time: "1:30 pm", place: "Real Mary King's Close", desc: "Underground tour of Edinburgh's buried 17th-century streets — entirely indoors, guided, and fascinating. Book ahead as tours sell out.", cost: "From £17 adults", tip: "Tours leave every 20–30 minutes — book the next slot when you arrive if not pre-booked." },
      { time: "3:00 pm", place: "Scotch Whisky Experience", desc: "Right next to the Castle — guided barrel ride through the history of Scotch whisky, followed by a tasting. Even non-drinkers find the history fascinating.", cost: "From £16 (Silver Tour)" },
      { time: "4:30 pm", place: "Scottish National Gallery", desc: "5-minute walk down the Mound. Exceptional European and Scottish paintings in a grand neoclassical building. Free entry, café inside.", cost: "Free", tip: "Look for Raeburn's 'The Skating Minister' — Edinburgh's most iconic painting." },
      { time: "6:00 pm", place: "Dinner in the New Town", desc: "Dishoom (St Andrew Square) is perfect for a warming curry on a rainy evening — book ahead or join the queue. Contini on George Street for Italian.", cost: "£15–30" },
      { time: "8:00 pm", place: "Jazz Bar or Sandy Bell's", desc: "The Jazz Bar (Chambers Street basement) has live jazz from 9 pm almost every night. Or Sandy Bell's (Forrest Road) for free, spontaneous Scottish folk music — one of Edinburgh's best-kept secrets.", cost: "Free–£5", tip: "Sandy Bell's is a tiny pub with world-class folk sessions. No cover charge, just buy a drink." },
    ],
    notes: [
      "All main stops are indoors or fully covered",
      "A Lothian Buses day ticket (£4.50) is worth buying even for a rainy day",
      "The underground streets of Mary King's Close stay cool year-round — bring a layer",
      "Several museums have free lockers — leave coats and umbrellas if carrying a lot",
    ],
  },
];

export default function VisitorPage() {
  const [tab, setTab] = useState("itineraries");
  const [activeItinerary, setActiveItinerary] = useState("1day");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["visitscotland-icentre", "princes-street-gardens", "waverley-station"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Visitor Guide" subtitle="Everything you need for Edinburgh" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Visitor <span className="text-rose-500">Guide.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh - Scotland's capital, a UNESCO World Heritage city, and one of Europe's most beautiful and walkable cities. Here's everything you need to get the most from your visit.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              { label: "🏰 UNESCO Heritage", note: "Old & New Towns" },
              { label: "🎭 August Festivals", note: "World's biggest arts event" },
              { label: "🏔️ Arthur's Seat", note: "Volcano in the city" },
              { label: "🥃 Whisky Capital", note: "Scotch Whisky Experience" },
            ].map((b) => (
              <div key={b.label} className="bg-rose-50 border border-rose-200 rounded-xl px-3 py-2">
                <div className="text-xs font-semibold text-slate-900">{b.label}</div>
                <div className="text-xs text-slate-500">{b.note}</div>
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

        {tab === "itineraries" && (
          <div className="space-y-4">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p className="text-xs text-rose-800 leading-relaxed">
                <strong>Pick your itinerary below</strong> — each one is timed, budgeted, and written for Edinburgh specifically. All stops are reachable by foot or public transport.
              </p>
            </div>

            {/* Itinerary selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ITINERARIES.map((it) => (
                <button
                  key={it.id}
                  onClick={() => setActiveItinerary(it.id)}
                  className={`rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                    activeItinerary === it.id
                      ? "border-slate-900 bg-slate-900 shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <span className="text-2xl block mb-2">{it.emoji}</span>
                  <div className={`text-xs font-bold leading-tight ${activeItinerary === it.id ? "text-white" : "text-slate-900"}`}>
                    {it.title.split(" in ")[0].split(" with ")[0]}
                  </div>
                  <span className={`inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    activeItinerary === it.id ? "bg-white/20 text-white" : it.badgeColour
                  }`}>
                    {it.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Active itinerary detail */}
            {ITINERARIES.filter((it) => it.id === activeItinerary).map((it) => (
              <div key={it.id}>
                {/* Header */}
                <div className={`rounded-xl border p-5 mb-4 ${it.headerColour}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{it.emoji}</span>
                    <div>
                      <div className="font-bold text-slate-900 text-base">{it.title}</div>
                      <div className="text-xs text-slate-600 mt-0.5">{it.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-200" />
                  <div className="space-y-3">
                    {it.stops.map((stop, i) => (
                      <div key={i} className="flex gap-4">
                        {/* Dot */}
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="size-[10px] rounded-full bg-slate-900 ring-2 ring-white ring-offset-1 ml-[15px]" />
                        </div>
                        {/* Card */}
                        <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 min-w-0">
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="text-xs font-semibold text-slate-400 mb-0.5">{stop.time}</div>
                              <div className="font-bold text-slate-900 text-sm">{stop.place}</div>
                            </div>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg font-medium flex-shrink-0">{stop.cost}</span>
                          </div>
                          <div className="text-xs text-slate-600 mt-2 leading-relaxed">{stop.desc}</div>
                          {stop.tip && (
                            <div className="mt-2 text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-800">
                              💡 {stop.tip}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="font-bold text-slate-700 text-xs mb-2">📋 Good to know</div>
                  <ul className="space-y-1.5">
                    {it.notes.map((note, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-slate-400 flex-shrink-0">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "top" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <strong className="text-sm text-emerald-900">💡 Edinburgh is remarkably free</strong>
              <p className="text-xs text-emerald-800 mt-1">Many of Edinburgh's best attractions are completely free — including national museums, galleries, parks, and Arthur's Seat. You can have an excellent 2–3 day visit spending very little.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">🟢 Free Attractions</h3>
              <div className="space-y-3">
                {[
                  { name: "Arthur's Seat", desc: "Ancient volcanic hill rising 251m within the city — 20 min walk from the Royal Mile. Stunning 360° views of the city, Firth of Forth, and the Pentland Hills. Best on a clear morning.", time: "Allow 1.5–2 hours", location: "Holyrood Park, EH8" },
                  { name: "Royal Mile & Old Town", desc: "The spine of Edinburgh's Old Town — from Edinburgh Castle (top) to the Palace of Holyroodhouse (bottom). Lined with closes (alleyways), pubs, and history. Free to walk; paid entry to key buildings.", time: "Allow 2–3 hours", location: "EH1" },
                  { name: "National Museum of Scotland", desc: "World-class free museum covering Scottish history, science, technology, nature, and culture. Includes Dolly the sheep and the Lewis Chessmen. Excellent café on the rooftop.", time: "Allow 3–4 hours", location: "Chambers St, EH1 1JF" },
                  { name: "Scottish National Gallery", desc: "Free, outstanding collection of European and Scottish art — Vermeer, Raphael, Titian, and the world's best collection of Scottish painting. On the Mound, in a magnificent neoclassical building.", time: "Allow 1.5–2 hours", location: "The Mound, EH2 2EL" },
                  { name: "Royal Botanic Garden Edinburgh", desc: "70 acres of stunning gardens including the world-famous glasshouses (small entry fee), rock garden, woodland, and Chinese Hillside. Free to enter the outdoor gardens. Café on site.", time: "Allow 2 hours", location: "Inverleith Row, EH3 5LR" },
                  { name: "Greyfriars Kirkyard", desc: "One of Edinburgh's most atmospheric churchyards — historic graves, vaults, and the story of Greyfriars Bobby (the loyal dog). Free to visit. Part of the Grassmarket area.", time: "Allow 30–45 min", location: "Candlemaker Row, EH1 2QQ" },
                  { name: "Calton Hill", desc: "Central viewpoint with the Nelson Monument and National Monument (Scotland's 'Disgrace'). 5-minute climb from Princes Street for panoramic views. Spectacular at sunset.", time: "Allow 45 min", location: "EH7 5AA" },
                  { name: "The Meadows", desc: "Edinburgh's most popular park — great for a picnic with views of Arthur's Seat. Active, social, and always busy in good weather. The Meadows festival happens here in summer.", time: "Anytime", location: "EH9 — south of Old Town" },
                ].map((a) => (
                  <div key={a.name} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-slate-900 text-sm">{a.name}</div>
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex-shrink-0 font-semibold">Free</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">📍 {a.location} · ⏱ {a.time}</div>
                    <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">🎟 Paid Attractions (worth it)</h3>
              <div className="space-y-3">
                {[
                  { name: "Edinburgh Castle", price: "£17.50 adults / £10.50 children", desc: "Scotland's most visited paid attraction. Crown Jewels, One O'Clock Gun, Scottish War Memorial, and incredible views. Book online to avoid queues. Allow 2–3 hours.", link: "https://www.edinburghcastle.scot/" },
                  { name: "Real Mary King's Close", price: "From £17 adults", desc: "Underground guided tour through Edinburgh's buried streets — fascinating social history. Popular — book in advance. One of Edinburgh's most unique experiences.", link: "https://www.realmarykingsclose.com/" },
                  { name: "Scotch Whisky Experience", price: "From £16 (Silver Tour)", desc: "Guided tour through the world of Scotch whisky, with tasting. Excellent introduction for first-timers. Also a great restaurant.", link: "https://www.scotchwhiskyexperience.co.uk/" },
                  { name: "Dynamic Earth", price: "From £16 adults / £10 children", desc: "Science museum covering Earth's history from the Big Bang. Interactive, great for children and science enthusiasts. Under Salisbury Crags.", link: "https://www.dynamicearth.co.uk/" },
                  { name: "Palace of Holyroodhouse", price: "£18 adults / £11 children", desc: "The official Scottish residence of the King — state apartments, Queen Mary's rooms, and the ruins of Holyrood Abbey. Not open when the Royal family is in residence.", link: "https://www.rct.uk/visit/palace-of-holyroodhouse" },
                  { name: "Scottish Parliament", price: "Free (tours from £10)", desc: "Free to visit the public areas, or book a guided tour. The building itself is architecturally controversial and fascinating. Debates can be observed from the public gallery.", link: "https://www.parliament.scot/visit" },
                ].map((a) => (
                  <div key={a.name} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-slate-900 text-sm">{a.name}</div>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex-shrink-0 font-semibold">{a.price}</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">{a.desc}</div>
                    <a href={a.link} target="_blank" rel="noreferrer" className="inline-block mt-1 text-xs font-semibold text-rose-600 hover:underline">Book →</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "around" && (
          <div className="space-y-3">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
              <strong className="text-sm text-sky-900">Edinburgh is very walkable</strong>
              <p className="text-xs text-sky-800 mt-1 leading-relaxed">The city centre (Old Town and New Town) is compact. Castle to Princes Street: 5 min walk. Royal Mile to Grassmarket: 5 min. Most central attractions are within 20 minutes' walk of each other. Wear comfortable shoes — Edinburgh is hilly.</p>
            </div>

            {[
              {
                method: "🚌 Day bus ticket — £4.50",
                detail: "Best value for visitors. Buy on the Lothian Buses app or from the driver. Unlimited travel on all Lothian Buses routes all day. Single is £1.80 but the day ticket pays off quickly.",
                tip: "Buy on the app before boarding — you need exact change otherwise",
              },
              {
                method: "🚋 Tram from the airport — £8.50",
                detail: "If flying in, the tram from Edinburgh Airport to the city centre (Princes Street / St Andrew Square) takes 35 minutes and runs every 7–8 minutes. Much less stress than taxis.",
                tip: "Buy ticket at airport tram stop — not on board",
              },
              {
                method: "🗺 Edinburgh Pass",
                detail: "The Edinburgh City Pass gives free entry to 30+ attractions including Edinburgh Castle, Dynamic Earth, and Scotch Whisky Experience. 1-day (£62), 2-day (£77), 3-day (£87). Worth it if you plan to visit multiple paid attractions.",
                tip: "Check what's included — free attractions don't count",
              },
              {
                method: "🚲 Cycling — Just Eat Cycles",
                detail: "E-bikes and regular bikes available from docking stations. 30p/min, £1 unlock fee. Good for longer trips like cycling to Portobello beach or along the Water of Leith.",
                tip: "Download the app before you need a bike",
              },
              {
                method: "🚕 Taxis",
                detail: "Licensed black cabs can be hailed on the street or booked via City Cabs (0131 228 1211). Uber and Bolt also operate. Short city journeys typically £5–10. Airport to city centre £25–40.",
                tip: "Avoid unlicensed cabs — use the taxi rank or a licensed app",
              },
            ].map((item) => (
              <div key={item.method} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm mb-1">{item.method}</div>
                <div className="text-xs text-slate-600 leading-relaxed mb-2">{item.detail}</div>
                <div className="text-xs bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-800">
                  💡 {item.tip}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "daytrips" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-500 leading-relaxed">Edinburgh is perfectly placed for day trips across Scotland and northern England. All destinations below are accessible by public transport.</p>
            </div>
            {[
              {
                dest: "Rosslyn Chapel",
                time: "30 min by bus (37)",
                desc: "The Da Vinci Code chapel — stunning medieval stonework, Green Man carvings, and centuries of mystery. Book tickets in advance, especially in summer.",
                price: "£9.50 adults",
                transport: "Lothian Buses 37 from city centre",
                emoji: "⛪",
              },
              {
                dest: "Stirling & Stirling Castle",
                time: "~55 min by train",
                desc: "The 'Gateway to the Highlands' — Stirling Castle (home of Mary Queen of Scots), the Wallace Monument, and the Bannockburn battlefield. A full day's history.",
                price: "Castle from £16.50 adults",
                transport: "ScotRail from Waverley, every 30 min",
                emoji: "🏰",
              },
              {
                dest: "St Andrews",
                time: "~1hr by bus or car",
                desc: "Scotland's golf capital and ancient university town — ruins of St Andrews Cathedral, Castle, West Sands beach (Chariots of Fire), and the Old Course.",
                price: "Town is free; cathedral ruins from £7",
                transport: "Bus from Edinburgh Bus Station",
                emoji: "⛳",
              },
              {
                dest: "Loch Lomond & The Trossachs",
                time: "~1hr 15min by car or train + bus",
                desc: "Scotland's first national park — Loch Lomond, walking, cycling, and boat trips. Balloch is the main gateway. Train to Balloch via Glasgow.",
                price: "Free to visit; activities extra",
                transport: "Train Edinburgh→Glasgow→Balloch",
                emoji: "🏔️",
              },
              {
                dest: "Glencoe",
                time: "~2.5hr by bus or car",
                desc: "Scotland's most dramatic glen — the site of the 1692 massacre, stunning mountains, and epic walking. Glencoe Visitor Centre is worth a visit.",
                price: "Free to visit (parking charge); NTS centre £8",
                transport: "CityLink bus from Edinburgh Bus Station",
                emoji: "🏔️",
              },
              {
                dest: "The Kelpies & Falkirk Wheel",
                time: "~1hr by car or train",
                desc: "Scotland's giant steel horse sculptures (30 metres tall) and the world's only rotating boat lift. A unique and photogenic engineering wonder.",
                price: "Kelpies free; Wheel from £14.50",
                transport: "Train to Falkirk Grahamston, then walk",
                emoji: "🐴",
              },
              {
                dest: "East Lothian Coast",
                time: "30–45 min by train",
                desc: "North Berwick, Dunbar, Tantallon Castle, and the Bass Rock (largest gannet colony in the world). Outstanding coastal walks and seafood.",
                price: "Free beaches; Bass Rock boat trip £18",
                transport: "ScotRail from Waverley to North Berwick",
                emoji: "🌊",
              },
              {
                dest: "Glasgow",
                time: "~50 min by train",
                desc: "Scotland's largest city — Kelvingrove Art Gallery (free), Riverside Museum (free), vibrant food and music scene. Very different character from Edinburgh.",
                price: "Museums mostly free",
                transport: "ScotRail from Waverley, every 15 min peak",
                emoji: "🏙️",
              },
            ].map((trip) => (
              <div key={trip.dest} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{trip.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="font-bold text-slate-900 text-sm">{trip.dest}</div>
                      <div className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">⏱ {trip.time}</div>
                    </div>
                    <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">{trip.desc}</div>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <div className="text-xs"><span className="text-slate-400">Price:</span> <span className="font-medium text-slate-700">{trip.price}</span></div>
                      <div className="text-xs"><span className="text-slate-400">Getting there:</span> <span className="font-medium text-slate-700">{trip.transport}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "events" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Annual Events Calendar</h3>
              <p className="text-xs text-slate-500">A quick guide to the main annual events so visitors can time trips.</p>
              <div className="mt-4 space-y-3">
                {[
                  {
                    date: "April 30",
                    name: "Beltane Fire Festival",
                    desc: "Torchlit procession and performances on Calton Hill celebrating the arrival of summer.",
                    type: "Ticketed",
                  },
                  {
                    date: "Early May",
                    name: "Edinburgh Marathon Festival",
                    desc: "Full marathon and shorter races across the city and East Lothian coast.",
                    type: "Ticketed",
                  },
                  {
                    date: "Late May",
                    name: "Edinburgh International Children's Festival",
                    desc: "Theatre and arts festival focused on young audiences.",
                    type: "Ticketed",
                  },
                  {
                    date: "June",
                    name: "Royal Highland Show",
                    desc: "Scotland's biggest agricultural show at Ingliston.",
                    type: "Ticketed",
                  },
                  {
                    date: "July",
                    name: "Edinburgh Jazz & Blues Festival",
                    desc: "Concerts across the city; includes some free outdoor gigs.",
                    type: "Mixed",
                  },
                  {
                    date: "Aug 1–25",
                    name: "Edinburgh Festival Fringe",
                    desc: "World's largest arts festival — comedy, theatre, music, and street performances.",
                    type: "Mixed",
                  },
                  {
                    date: "August",
                    name: "Edinburgh International Festival",
                    desc: "Prestigious performances in classical music, theatre, dance, and opera.",
                    type: "Ticketed",
                  },
                  {
                    date: "September",
                    name: "Doors Open Day",
                    desc: "Free access to historic buildings normally closed to the public.",
                    type: "Free",
                  },
                  {
                    date: "Oct/Nov",
                    name: "Scottish International Storytelling Festival",
                    desc: "Storytelling events in historic venues and pubs.",
                    type: "Ticketed",
                  },
                  {
                    date: "Nov–Dec",
                    name: "Edinburgh Christmas Markets",
                    desc: "Festive markets, ice rink, and light shows in the city centre.",
                    type: "Free",
                  },
                  {
                    date: "Dec 30–Jan 1",
                    name: "Hogmanay",
                    desc: "New Year celebrations, street party, and fireworks.",
                    type: "Ticketed",
                  },
                ].map((event) => (
                  <div key={event.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{event.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{event.date}</div>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          event.type === "Free"
                            ? "bg-emerald-50 text-emerald-700"
                            : event.type === "Mixed"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 mt-2 leading-relaxed">{event.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <strong className="text-sm text-rose-900">Book early for August</strong>
              <p className="text-xs text-rose-800 mt-1">Accommodation can sell out months ahead during the Fringe and International Festival.</p>
            </div>
          </div>
        )}

        {tab === "tips" && (
          <div className="space-y-3">
            {[
              {
                category: "🌦 Weather",
                colour: "bg-blue-50 border-blue-200",
                titleColour: "text-blue-900",
                tips: [
                  "Pack layers and a waterproof — Edinburgh weather changes rapidly and it rains year-round",
                  "Average summer temp is 18–19°C (not hot!). Winters are mild but wet and windy",
                  "August (festival month) can be warm but is also very busy and expensive",
                  "Best weather is May–June and September — fewer crowds, pleasant temperatures",
                ],
              },
              {
                category: "💷 Money",
                colour: "bg-amber-50 border-amber-200",
                titleColour: "text-amber-900",
                tips: [
                  "Bank of Scotland, RBS, and Clydesdale Bank issue Scottish banknotes — legally valid but some shops (especially in England) may refuse them. Request Bank of England notes if needed",
                  "Card payments are widely accepted — contactless everywhere",
                  "Tipping: not obligatory but 10–15% in restaurants is appreciated; round up for taxis",
                  "Cash machines (ATMs) are plentiful on Princes Street, the Royal Mile, and near supermarkets",
                ],
              },
              {
                category: "🗓 When to Visit",
                colour: "bg-rose-50 border-rose-200",
                titleColour: "text-rose-900",
                tips: [
                  "August: Edinburgh Fringe Festival — world's largest arts festival. Incredible but very expensive, crowded, and accommodation books out months ahead",
                  "December: Christmas markets and Hogmanay (Scots New Year) — festive and atmospheric",
                  "May/June and September/October: Best for calm, cheaper prices, and good weather",
                  "January–March: Quietest and cheapest. Can be cold and wet but the city feels local and authentic",
                ],
              },
              {
                category: "🗣 Scottish Language & Culture",
                colour: "bg-purple-50 border-purple-200",
                titleColour: "text-purple-900",
                tips: [
                  "Scots language phrases: 'Braw' = excellent/beautiful, 'Dreich' = grey/drizzly weather, 'Wee' = small, 'Aye' = yes, 'Nae bother' = no problem",
                  "Edinburgh Scots accent is different from Glasgow — generally clearer for international visitors",
                  "Scottish culture is warm and sociable — striking up conversations in pubs is perfectly normal",
                  "Haggis is genuinely delicious — try it at least once. Cranachan (cream, raspberries, oats, whisky) is the dessert equivalent",
                ],
              },
              {
                category: "🏥 Health & Safety",
                colour: "bg-emerald-50 border-emerald-200",
                titleColour: "text-emerald-900",
                tips: [
                  "NHS Scotland: if you need urgent medical care, go to the Royal Infirmary of Edinburgh A&E (51 Little France Crescent, EH16 4SA) or an NHS minor injury unit",
                  "EU/EEA citizens: your EHIC/GHIC card is valid in Scotland for emergency NHS treatment",
                  "Prescriptions are free in Scotland — if prescribed medication by an NHS doctor, you pay nothing",
                  "Edinburgh is generally very safe. Take normal city precautions around the Royal Mile tourist areas and late at night on Cowgate",
                ],
              },
              {
                category: "♿ Accessibility",
                colour: "bg-slate-50 border-slate-200",
                titleColour: "text-slate-900",
                tips: [
                  "The Old Town is very hilly and cobbled — electric wheelchairs and powerchairs have access to most main attractions but some closes (alleyways) are inaccessible",
                  "Lothian Buses are wheelchair accessible; Edinburgh Trams are fully accessible",
                  "Edinburgh Castle has limited accessibility due to its historic nature — contact them in advance",
                  "VisitScotland publishes an Edinburgh Accessibility Guide at visitscotland.com",
                ],
              },
            ].map((section) => (
              <div key={section.category} className={`rounded-xl border p-4 ${section.colour}`}>
                <div className={`font-bold text-sm mb-3 ${section.titleColour}`}>{section.category}</div>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {tab === "food" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish Food to Try</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Haggis", desc: "Scotland's national dish — minced sheep offal with oatmeal, onion, and spices, traditionally served with neeps (turnip) and tatties (potatoes). Delicious despite the description." },
                  { name: "Scotch Pie", desc: "A double-crust meat pie specific to Scotland — eaten as a cheap hot snack at football grounds and bakeries. Usually mutton filling. A local institution." },
                  { name: "Tablet", desc: "Scottish confectionery — denser, crumblier, and richer than fudge. Made with condensed milk and sugar. Available in any souvenir shop." },
                  { name: "Cranachan", desc: "Traditional Scottish dessert — toasted oatmeal, fresh raspberries, cream, and whisky. Found on most Scottish restaurant dessert menus in summer." },
                  { name: "Cullen Skink", desc: "A thick Scottish soup made from smoked haddock, potatoes, and onions. A warming starter — try it at any traditional Scottish restaurant." },
                  { name: "Irn-Bru", desc: "Scotland's other national drink — a bright orange fizzy drink. Hugely popular, distinctly Scottish, and slightly difficult to describe. You must try it." },
                ].map((f) => (
                  <div key={f.name} className="border border-slate-100 rounded-xl p-3">
                    <div className="font-bold text-slate-900 text-xs mb-1">{f.name}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Where to Eat — By Budget</h3>
              <div className="space-y-4">
                {[
                  {
                    level: "🟢 Budget (under £10)",
                    places: [
                      { name: "Greggs / Subway", desc: "Ubiquitous bakery chains — cheap, quick, everywhere" },
                      { name: "Mosque Kitchen", desc: "Brilliantly cheap Pakistani/Indian food near the Meadows. Cash only, outdoor seating, huge portions." },
                      { name: "Kebab Mahal", desc: "Edinburgh institution on Nicolson Street. Huge portions, very cheap, late night option." },
                      { name: "Any Wetherspoons", desc: "Full meal under £10. The Standing Order (George Street) and The Foot of the Walk (Leith) are the main ones." },
                    ],
                  },
                  {
                    level: "🟡 Mid-range (£15–30)",
                    places: [
                      { name: "Dishoom (St Andrew Square)", desc: "Edinburgh branch of the iconic Indian restaurant. Bombay-style food. Book ahead — very popular." },
                      { name: "Timberyard", desc: "Seasonal Scottish tasting menu in a converted timber yard. Award-winning, booking essential." },
                      { name: "The Gardener's Cottage", desc: "Communal tables, daily-changing Scottish menu. Cosy and unique Edinburgh experience." },
                      { name: "Contini", desc: "Edinburgh's best Italian — George Street location, excellent antipasti and pasta." },
                    ],
                  },
                  {
                    level: "🔴 Splurge (£40+)",
                    places: [
                      { name: "The Kitchin (Leith)", desc: "Michelin-starred Scottish restaurant from Tom Kitchin. Exceptional tasting menus. Book months ahead." },
                      { name: "Restaurant Martin Wishart", desc: "Another Michelin star in Leith. Refined French-Scottish cuisine. Special occasion dining." },
                      { name: "Number One (Balmoral Hotel)", desc: "Grand Princes Street setting, Michelin star. Classic Edinburgh fine dining." },
                    ],
                  },
                ].map((tier) => (
                  <div key={tier.level}>
                    <div className="font-semibold text-slate-800 text-xs mb-2">{tier.level}</div>
                    <div className="space-y-1.5">
                      {tier.places.map((p) => (
                        <div key={p.name} className="flex items-start gap-2 text-xs">
                          <span className="text-slate-300 flex-shrink-0 mt-0.5">•</span>
                          <div><span className="font-semibold text-slate-800">{p.name}</span> — <span className="text-slate-500">{p.desc}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">🥃 Scottish Whisky</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Edinburgh has dozens of whisky bars. A good dram starts around £5–10. Key whisky regions to try: Islay (peaty, smoky), Speyside (fruit, honey), Highland (complex), Lowland (lighter).</p>
              <div className="space-y-1.5">
                {[
                  { name: "The Scotch Malt Whisky Society (Leith)", desc: "Private club with extensive cask selections — day membership available" },
                  { name: "Whiski Bar (Royal Mile)", desc: "200+ whiskies, knowledgeable staff, good for beginners" },
                  { name: "Cadenhead's Whisky Shop (Canongate)", desc: "Edinburgh's oldest independent bottler — shop and tasting room" },
                ].map((w) => (
                  <div key={w.name} className="text-xs">
                    <span className="font-semibold text-slate-800">{w.name}</span>
                    <span className="text-slate-500"> — {w.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
