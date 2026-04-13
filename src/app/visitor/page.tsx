"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";
import { SERVICE_CONTACTS } from "@/lib/edinburgh-data";

const TABS = [
  { id: "top", label: "Top Attractions" },
  { id: "around", label: "Getting Around" },
  { id: "daytrips", label: "Day Trips" },
  { id: "tips", label: "Practical Tips" },
  { id: "food", label: "Food & Drink" },
];

export default function VisitorPage() {
  const [tab, setTab] = useState("top");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["visitscotland-icentre", "princes-street-gardens", "waverley-station"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Visitor Guide" subtitle="Everything you need for Edinburgh" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Visitor <span className="text-rose-500">Guide.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh — Scotland's capital, a UNESCO World Heritage city, and one of Europe's most beautiful and walkable cities. Here's everything you need to get the most from your visit.</p>
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
