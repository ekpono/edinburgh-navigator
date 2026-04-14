"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "glossary",  label: "🗣️ Glossary" },
  { id: "calendar",  label: "📅 Cultural Calendar" },
  { id: "customs",   label: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Customs & Etiquette" },
  { id: "differences", label: "⚖️ Scotland vs England" },
];

const GLOSSARY = [
  { word: "Aye", meaning: "Yes", example: "Aye, nae bother!" },
  { word: "Nae / Naw", meaning: "No / not", example: "Nae worries. / Naw, I'm fine." },
  { word: "Braw", meaning: "Great, wonderful, fine", example: "That's a braw view from Arthur's Seat." },
  { word: "Wee", meaning: "Small / little", example: "Just a wee bit further." },
  { word: "Outwith", meaning: "Outside of (formal use)", example: "This is outwith our remit." },
  { word: "Dreich", meaning: "Dull, grey, miserable weather", example: "It's a dreich day — bring a coat." },
  { word: "Och", meaning: "Oh! (mild exclamation)", example: "Och, don't worry about it." },
  { word: "Cannae", meaning: "Cannot / can't", example: "I cannae believe it." },
  { word: "Dinnae", meaning: "Don't", example: "Dinnae do that." },
  { word: "Ken", meaning: "Know / do you know", example: "D'ye ken what I mean?" },
  { word: "Blether", meaning: "Chat, gossip", example: "We had a good blether over a cuppa." },
  { word: "Bampot", meaning: "An idiot, a fool (mild insult)", example: "That bampot cut me off in traffic." },
  { word: "Gallus", meaning: "Bold, daring, confident (positive)", example: "He's dead gallus, that one." },
  { word: "Haar", meaning: "Sea fog off the Firth of Forth", example: "There's a haar rolling in — you can't see the castle." },
  { word: "Havering", meaning: "Talking nonsense, rambling", example: "Stop havering and get to the point." },
  { word: "Crabbit", meaning: "Grumpy, bad-tempered", example: "He's been crabbit all morning." },
  { word: "Bide", meaning: "Stay / live", example: "Where do you bide?" },
  { word: "Peely-wally", meaning: "Pale, sickly-looking", example: "You're looking a bit peely-wally — are you alright?" },
  { word: "Messages", meaning: "Grocery shopping", example: "I'm off to do the messages." },
  { word: "Tatties", meaning: "Potatoes", example: "Tatties and neeps with the haggis." },
  { word: "Neeps", meaning: "Turnip / swede", example: "Haggis, neeps, and tatties." },
  { word: "Loch", meaning: "Lake", example: "Loch Ness, Loch Lomond." },
  { word: "Glen", meaning: "Valley", example: "Glen Coe is stunning." },
  { word: "Bairn", meaning: "Child", example: "The bairns are at school." },
  { word: "Dram", meaning: "A measure of whisky", example: "Fancy a wee dram?" },
  { word: "Hogmanay", meaning: "Scottish New Year (31 Dec / 1 Jan)", example: "Happy Hogmanay!" },
  { word: "First-footing", meaning: "First visitor to your home after midnight on Hogmanay, bringing gifts for luck", example: "We went first-footing with whisky and coal." },
  { word: "Munro", meaning: "Scottish mountain over 3,000ft (914m)", example: "He's bagged 200 Munros." },
  { word: "Scran", meaning: "Food", example: "This scran is brilliant." },
  { word: "Ceilidh", meaning: "Traditional Scottish social dance gathering (pronounced kay-lee)", example: "There's a ceilidh at the Corn Exchange on Saturday." },
  { word: "Glaikit", meaning: "Stupid, foolish, vacant-looking", example: "Don't stand there looking glaikit." },
  { word: "Mince", meaning: "Nonsense / rubbish", example: "That's complete mince." },
  { word: "Wabbit", meaning: "Tired, exhausted", example: "I'm feeling a bit wabbit after that walk." },
  { word: "Stushie", meaning: "Fuss, commotion, argument", example: "There was a right stushie at the council meeting." },
];

const CALENDAR = [
  { month: "January", event: "Burns Night", date: "25 January", desc: "Scotland's national poet Robert Burns is celebrated with a traditional supper — haggis, neeps and tatties, whisky, and the reading of Burns's poems. Burns Suppers happen all over Edinburgh in pubs, restaurants, and homes.", free: true },
  { month: "January", event: "Hogmanay hangover", date: "1–2 January", desc: "New Year's Day and 2nd January are both Scottish public holidays. Many businesses are closed. Edinburgh is quieter than usual.", free: true },
  { month: "March/April", event: "Easter", date: "Varies", desc: "Good Friday and Easter Monday are public holidays in Scotland. Schools have a two-week Easter break.", free: true },
  { month: "April", event: "Edinburgh Science Festival", date: "Early April", desc: "The world's longest-running science festival with events across Edinburgh. Many events are free, especially for children. Runs for two weeks.", free: "Mixed" },
  { month: "May", event: "May Day Bank Holiday", date: "First Monday in May", desc: "Public holiday. Many Edinburgh businesses will be closed.", free: true },
  { month: "June", event: "Royal Highland Show", date: "Mid June", desc: "Scotland's premier agricultural show at Ingliston — livestock, farming, food, rural crafts. A beloved institution. Ticketed.", free: false },
  { month: "July", event: "T in the Park / TRNSMT", date: "Late June / early July", desc: "Scotland's biggest music festival (TRNSMT in Glasgow Green). Many Edinburgh music fans make the trip.", free: false },
  { month: "August", event: "Edinburgh Fringe Festival", date: "Whole of August", desc: "The world's largest arts festival — 3,000+ shows across 250+ venues. Street performers on the Royal Mile. A huge number of free shows.", free: "Mixed" },
  { month: "August", event: "Edinburgh International Festival", date: "August", desc: "The flagship arts festival — world-class opera, theatre, dance, and classical music. More formal and curated than the Fringe.", free: false },
  { month: "August", event: "Royal Edinburgh Military Tattoo", date: "August evenings", desc: "Spectacular military tattoo performed on the Esplanade of Edinburgh Castle. Sells out months in advance.", free: false },
  { month: "August", event: "Edinburgh International Book Festival", date: "August", desc: "The world's largest book festival in Charlotte Square Gardens. Many talks and signings — some events are free.", free: "Mixed" },
  { month: "November", event: "St Andrew's Day", date: "30 November", desc: "Scotland's national day. Not a public holiday in Edinburgh but celebrated with events, whisky tastings, and ceilidhs. The Scottish Government encourages businesses to mark it.", free: true },
  { month: "December", event: "Edinburgh Christmas Markets", date: "Mid-Nov to early Jan", desc: "European-style Christmas markets on Princes Street and George Street. Ice rink, fairground rides, food stalls. Some areas are free to walk through.", free: "Mixed" },
  { month: "December / January", event: "Hogmanay", date: "31 December – 2 January", desc: "Edinburgh's world-famous New Year celebration — street party in the city centre (ticketed), the Loony Dook sea swim at South Queensferry, and first-footing traditions.", free: "Mixed" },
];

const DIFFERENCES = [
  { category: "Legal system", scotland: "Scots Law — a distinct legal system combining civil law and common law traditions. Different courts, different terminology.", england: "English common law. Scotland's system is older and has continental European influences." },
  { category: "Healthcare", scotland: "NHS Scotland — funded and managed separately from NHS England. Free prescriptions for everyone. Free dental check-ups for under-26s and over-60s.", england: "NHS England — prescriptions cost £9.90 per item in England. Dental charges apply for most adults." },
  { category: "University tuition", scotland: "Free for Scottish and EU students domiciled in Scotland (SAAS pays fees). English students pay up to £9,250/year.", england: "£9,250/year for most home students, funded by Student Finance England." },
  { category: "Social housing", scotland: "Scottish Secure Tenancy — stronger tenant protections. No-fault eviction is banned. Private tenancies also have stronger protections under the PRT (Private Residential Tenancy).", england: "Section 21 'no fault' evictions still in use (being abolished). Different tenancy laws." },
  { category: "Child benefits", scotland: "Scottish Child Payment (£26.70/week per eligible child under 16), Best Start Grant, Bridging Payments. Run by Social Security Scotland, not DWP.", england: "Some additional benefits don't exist south of the border. UK Child Benefit applies in both." },
  { category: "Prescription charges", scotland: "All prescriptions FREE — regardless of income or medication. Has been free since 2011.", england: "£9.90 per prescription item (2024). Many exemptions apply but it's not universal." },
  { category: "Bus travel", scotland: "Free bus travel for under-22s and over-60s across Scotland. One of the most generous schemes in the UK.", england: "Free bus pass at state pension age only. No equivalent under-22 scheme." },
  { category: "Voting", scotland: "Scots can vote in Scottish Parliament and council elections at age 16. 18 for UK General Elections.", england: "18 for all elections." },
  { category: "Bank holidays", scotland: "2 January is a Scottish bank holiday (not in England). Scotland has different dates for some bank holidays.", england: "Different bank holiday calendar — check for Edinburgh-specific dates." },
  { category: "Currency", scotland: "Scottish banks (Royal Bank of Scotland, Bank of Scotland, Clydesdale) issue their own banknotes. These are legal currency but may occasionally be refused in England — carry some Bank of England notes if travelling south.", england: "Bank of England notes are always accepted throughout the UK." },
];

export default function CulturePage() {
  const [tab, setTab] = useState("glossary");
  const [search, setSearch] = useState("");

  const filtered = GLOSSARY.filter(
    (g) =>
      g.word.toLowerCase().includes(search.toLowerCase()) ||
      g.meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader
        title="Scottish Culture & Glossary"
        subtitle="Phrases, customs, festivals, and key differences from the rest of the UK"
      />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Scottish <span className="text-tartan-500" style={{ color: "#005EB8" }}>Culture.</span>
          </h1>
          <p className="text-sm text-slate-600">
            Whether you're moving from England, arriving from overseas, or just visiting — understanding Scottish culture, expressions, and customs will make Edinburgh feel like home much faster.
          </p>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "glossary" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Scots words or meanings…"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {filtered.map((g) => (
                <div key={g.word} className="bg-white rounded-xl border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-bold text-slate-900 text-sm">{g.word}</div>
                    <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded-full flex-shrink-0">{g.meaning}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1.5 italic leading-relaxed">"{g.example}"</div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 text-center text-sm text-slate-400 py-8">No matches found for "{search}"</div>
              )}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800">
                <strong>Note on pronunciation:</strong> Ceilidh = "KAY-lee", Loch = "LOKH" (with a guttural ch), Auld = "awld" (old), Nae = "nay" (no). Scots is a distinct language — not just slang — with its own rich literary tradition going back 700+ years.
              </p>
            </div>
          </div>
        )}

        {tab === "calendar" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">Edinburgh's cultural calendar is one of the busiest in Europe. August especially transforms the city — population doubles, every space becomes a venue. Book accommodation and restaurants well in advance if visiting in August.</p>
            </div>
            {CALENDAR.map((ev) => (
              <div key={ev.event} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">{ev.month} • {ev.date}</div>
                    <div className="font-bold text-slate-900 text-sm mt-0.5">{ev.event}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${ev.free === true ? "bg-emerald-100 text-emerald-700" : ev.free === false ? "bg-slate-100 text-slate-500" : "bg-amber-100 text-amber-700"}`}>
                    {ev.free === true ? "Many free" : ev.free === false ? "Ticketed" : "Mixed"}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{ev.desc}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "customs" && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Tipping",
                  icon: "💷",
                  body: "Tipping is appreciated but not mandatory. 10–15% in restaurants if service was good. Not expected in pubs when ordering at the bar. Round up taxi fares. Hotel porters appreciate £1–2 per bag.",
                  color: "amber",
                },
                {
                  title: "Queuing",
                  icon: "🚶",
                  body: "Scots queue — jumping a queue is considered extremely rude. This applies to bus stops, shops, post offices, and anywhere there's a line. Never push in.",
                  color: "blue",
                },
                {
                  title: "Hogmanay traditions",
                  icon: "🥂",
                  body: "First-footing: visit friends and family after midnight on New Year's Eve bringing gifts of whisky, coal (for warmth), salt (for food), shortbread, and black bun (fruit cake) for good luck. The first visitor matters — tall, dark-haired men are considered lucky.",
                  color: "violet",
                },
                {
                  title: "Ceilidh dancing",
                  icon: "💃",
                  body: "A ceilidh (KAY-lee) is a traditional social dance where everyone participates. Dances are called out by the band. You don't need to know the steps in advance — they're explained before each dance. Dress smartly but comfortably. Highly recommended for newcomers.",
                  color: "rose",
                },
                {
                  title: "Whisky (Scotch whisky)",
                  icon: "🥃",
                  body: "Always spelled 'whisky' (not 'whiskey') in Scotland. Ordering 'Scotch' marks you as a tourist — just say 'whisky'. Single malt is made from malted barley at a single distillery; blended whisky mixes several. Never order it with ice if you want to look local — a tiny drop of water is acceptable.",
                  color: "amber",
                },
                {
                  title: "Burns Night",
                  icon: "📜",
                  body: "On 25 January, Scotland celebrates poet Robert Burns. The centrepiece is the Burns Supper — haggis addressed with his poem 'Address to a Haggis', then neeps and tatties, then cranachan pudding. Toasts include 'The Immortal Memory' and 'The Lassies'. Expect a ceilidh afterwards.",
                  color: "orange",
                },
                {
                  title: "Scottish weather etiquette",
                  icon: "🌧️",
                  body: "Complaining about the weather is a universally acceptable conversation opener. Haar (sea fog), dreich (grey drizzle), and 'four seasons in a day' are genuinely accurate descriptions. Never leave home without a waterproof jacket. Wind on the Royal Mile is often stronger than it looks.",
                  color: "slate",
                },
                {
                  title: "Pub culture",
                  icon: "🍺",
                  body: "In Scottish pubs, you typically order at the bar — not table service, unless specifically offered. Rounds are common: each person buys a round for the group in turn. Refusing to buy a round when it's your turn is noticed. It's polite to ask for a soft drink if you're not drinking — no pressure to drink alcohol.",
                  color: "emerald",
                },
              ].map((item) => (
                <div key={item.title} className={`bg-white rounded-xl border border-slate-200 p-4`}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "differences" && (
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800 leading-relaxed">
                <strong>Moving from England or Wales?</strong> Scotland has a separate legal system, NHS, education structure, and many benefits programmes. These are not cosmetic differences — they have real practical impact on your daily life.
              </p>
            </div>
            <div className="space-y-3">
              {DIFFERENCES.map((d) => (
                <div key={d.category} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5">
                    <div className="font-bold text-slate-900 text-sm">{d.category}</div>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                    <div className="p-4">
                      <div className="text-xs font-bold text-blue-600 mb-1">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</div>
                      <p className="text-xs text-slate-700 leading-relaxed">{d.scotland}</p>
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-bold text-red-500 mb-1">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{d.england}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
