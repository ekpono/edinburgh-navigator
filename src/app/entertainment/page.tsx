"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "pubs",        label: "🍺 Pubs" },
  { id: "restaurants", label: "🍽️ Restaurants" },
  { id: "skating",     label: "⛸️ Skating" },
  { id: "parks",       label: "🌿 Parks & Gardens" },
  { id: "museums",     label: "🏛️ Museums" },
  { id: "fun",         label: "🎮 Fun & Games" },
];

const PUBS = [
  {
    name: "The Bow Bar",
    address: "80 West Bow, Grassmarket, EH1 2HH",
    desc: "A classic Victorian-era pub famed for its incredible selection of cask ales and Scottish whiskies. No fruit machines, no music — just great beer.",
    link: "https://thebowbar.co.uk/",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    tag: "Real Ale", color: "amber",
  },
  {
    name: "The Jolly Judge",
    address: "7A James Court, Lawnmarket, EH1 2PB",
    desc: "A cosy 17th-century pub hidden down a close off the Royal Mile. Low-beamed ceilings, painted barrel ceiling, and a warm welcoming atmosphere.",
    link: "https://www.jollyjudge.co.uk/",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=800&q=80",
    tag: "Historic", color: "orange",
  },
  {
    name: "Deacon Brodie's Tavern",
    address: "435 Lawnmarket, Royal Mile, EH1 2NT",
    desc: "Named after Edinburgh's notorious double-life figure who inspired Stevenson's Jekyll & Hyde. Great Royal Mile location with Scottish food and ales.",
    link: "https://www.deaconbrodiestablishment.co.uk/",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tag: "Historic", color: "yellow",
  },
  {
    name: "The Oxford Bar",
    address: "8 Young Street, Edinburgh, EH2 4JB",
    desc: "Inspector Rebus's favourite local — a no-frills Edinburgh institution immortalised by Ian Rankin's crime novels. Proper pub, proper pint.",
    link: "https://www.oxfordbar.co.uk/",
    image: "https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?auto=format&fit=crop&w=800&q=80",
    tag: "Iconic", color: "stone",
  },
  {
    name: "The Hanging Bat",
    address: "133 Lothian Road, Edinburgh, EH3 9AD",
    desc: "Craft beer paradise with rotating taps of local and international brews. Great vibe, knowledgeable staff, and a serious commitment to quality beer.",
    link: "https://thehangingbat.com/",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=800&q=80",
    tag: "Craft Beer", color: "indigo",
  },
  {
    name: "The Sheep Heid Inn",
    address: "43-45 The Causeway, Duddingston, EH15 3QA",
    desc: "Allegedly Edinburgh's oldest pub (since 1360), nestled beside Arthur's Seat. Famous for its historic skittles alley and village charm.",
    link: "https://www.thesheepheidedinburgh.co.uk/",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80",
    tag: "Oldest Pub", color: "emerald",
  },
];

const RESTAURANTS = [
  {
    name: "The Witchery by the Castle",
    address: "Castlehill, Royal Mile, EH1 2NF",
    desc: "One of Scotland's most atmospheric restaurants — gothic décor, magnificent Scottish produce, and an exceptional wine cellar. A bucket-list Edinburgh dining experience.",
    link: "https://www.thewitchery.com/",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    tag: "Fine Dining", price: "£££", color: "rose",
  },
  {
    name: "Timberyard",
    address: "10 Lady Lawson Street, Edinburgh, EH3 9DS",
    desc: "Award-winning restaurant in a converted Victorian warehouse. Hyper-local, seasonal Scottish cooking with wood-fired dishes and a remarkable larder.",
    link: "https://www.timberyard.co/",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
    tag: "Scottish", price: "£££", color: "lime",
  },
  {
    name: "The Kitchin",
    address: "78 Commercial Quay, Leith, EH6 6LX",
    desc: "Tom Kitchin's Michelin-starred restaurant in Leith. 'From Nature to Plate' philosophy — extraordinary Scottish seafood and seasonal produce.",
    link: "https://thekitchin.com/",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    tag: "Michelin Star", price: "££££", color: "sky",
  },
  {
    name: "Mother India's Café",
    address: "3-5 Infirmary Street, Edinburgh, EH1 1LT",
    desc: "Tapas-style Indian dining done brilliantly — share small plates of incredible freshly-made Indian food. Outstanding value and consistently superb quality.",
    link: "https://www.motherindiascafe.co.uk/edinburgh",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    tag: "Indian", price: "££", color: "orange",
  },
  {
    name: "Café Andaluz",
    address: "77-79 George Street, Edinburgh, EH2 3EE",
    desc: "Lively Spanish tapas bar in the heart of Edinburgh. Buzzy atmosphere, authentic flavours, and brilliant sangria — perfect for a group night out.",
    link: "https://www.cafeandaluz.com/edinburgh",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    tag: "Spanish Tapas", price: "££", color: "amber",
  },
  {
    name: "Bonsai Bar-Bistro",
    address: "46 West Richmond Street, Edinburgh, EH8 9DZ",
    desc: "Beloved neighbourhood Japanese restaurant with outstanding sushi, bento boxes, and a cosy unpretentious vibe. A hidden gem loved by locals.",
    link: "https://www.bonsai-bar-bistro.co.uk/",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    tag: "Japanese", price: "££", color: "violet",
  },
];

const SKATING = [
  {
    name: "Murrayfield Ice Rink",
    address: "Riversdale Crescent, Murrayfield, EH12 5XN",
    desc: "Edinburgh's main year-round indoor ice rink — one of the oldest in the UK. Public sessions, ice hockey, figure skating lessons, and curling.",
    link: "https://www.murrayfieldice.co.uk/",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
    tag: "Year-round", color: "sky", hours: "Mon–Sun, sessions vary — check website",
  },
  {
    name: "Edinburgh Christmas Ice Rink",
    address: "St Andrew Square, Edinburgh, EH2 2BD",
    desc: "Magical outdoor ice rink set up every year for Edinburgh's Christmas festival. Skate in the shadow of gorgeous Georgian architecture and festive lights.",
    link: "https://www.edinburghschristmas.com/",
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=800&q=80",
    tag: "Seasonal (Nov–Jan)", color: "blue", hours: "November – early January",
  },
  {
    name: "Roller Kingdom",
    address: "South Gyle Broadway, Edinburgh, EH12 9JZ",
    desc: "Edinburgh's roller skating and roller disco venue with regular sessions for all ages. Skate hire, party packages, and weekend disco nights.",
    link: "https://www.rollerkingdom.co.uk/",
    image: "https://images.unsplash.com/photo-1626163823895-82fba7c3a1d5?auto=format&fit=crop&w=800&q=80",
    tag: "Roller Skating", color: "fuchsia", hours: "Weekends and school holidays",
  },
  {
    name: "Midlothian Snowsports Centre",
    address: "Hillend, Biggar Road, Edinburgh, EH10 7DU",
    desc: "The longest artificial ski slope in the UK, just outside Edinburgh. Skiing, snowboarding, tobogganing, and sledging for all abilities.",
    link: "https://www.midlothian.gov.uk/snowsports",
    image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=800&q=80",
    tag: "Ski & Snowboard", color: "cyan", hours: "Open daily — check seasonal hours",
  },
];

const PARKS = [
  {
    name: "Holyrood Park & Arthur's Seat",
    address: "Holyrood Park, Edinburgh, EH8 8HG",
    desc: "An extinct volcano right in the heart of the city. Hike to the summit of Arthur's Seat (251m) for jaw-dropping 360° views over Edinburgh and the Firth of Forth. Free, always open.",
    link: "https://www.historicenvironment.scot/visit-a-place/places/holyrood-park/",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    tag: "Free • Iconic", color: "emerald", extra: "Free entry • Open 24/7",
  },
  {
    name: "Princes Street Gardens",
    address: "Princes Street, Edinburgh, EH2 2EQ",
    desc: "Stunning gardens split by the castle rock, right below Edinburgh Castle. Hosts the Christmas market, Hogmanay concerts, and the Ross Bandstand. Free to enter.",
    link: "https://www.edinburghprincesstreetgardens.org.uk/",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    tag: "Free • City Centre", color: "lime", extra: "Free entry • Open daily",
  },
  {
    name: "Royal Botanic Garden Edinburgh",
    address: "20A Inverleith Row, Edinburgh, EH3 5LR",
    desc: "70 acres of world-class gardens with rare plant collections, Victorian glasshouses, a café, and an art gallery. One of the finest botanic gardens in the world.",
    link: "https://www.rbge.org.uk/",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4abb3?auto=format&fit=crop&w=800&q=80",
    tag: "Free Outdoors", color: "green", extra: "Free outdoors • Glasshouses £7",
  },
  {
    name: "The Meadows",
    address: "The Meadows, Edinburgh, EH9 1QA",
    desc: "Beloved central park with vast open lawns, tree-lined avenues, and sports pitches. Popular for picnics, cycling, cricket, and the famous cherry blossom in spring.",
    link: "https://www.edinburgh.gov.uk/parks-greenspaces/meadows-bruntsfield-links",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    tag: "Free • Local Favourite", color: "teal", extra: "Free entry • Open 24/7",
  },
  {
    name: "Water of Leith Walkway",
    address: "Balerno to Leith, Edinburgh",
    desc: "A 12-mile riverside walking and cycling trail from Balerno through the city to Leith. Passes the Scottish Gallery of Modern Art, Dean Village, and beautiful green gorges.",
    link: "https://www.waterofleith.org.uk/walkway/",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    tag: "Walking Trail", color: "cyan", extra: "Free • 12 miles total",
  },
  {
    name: "Calton Hill",
    address: "Calton Hill, Edinburgh, EH7 5AA",
    desc: "Iconic hilltop monument-covered summit with the best 360° panorama in Edinburgh — the city, castle, Arthur's Seat, and the Firth of Forth all at once. Free to climb.",
    link: "https://www.edinburgh.gov.uk/parks-greenspaces/calton-hill",
    image: "https://images.unsplash.com/photo-1472214103451-9374f2be29aa?auto=format&fit=crop&w=800&q=80",
    tag: "Free • Views", color: "violet", extra: "Free entry • Open 24/7",
  },
];

const MUSEUMS = [
  {
    name: "National Museum of Scotland",
    address: "Chambers Street, Edinburgh, EH1 1JF",
    desc: "Scotland's flagship museum — a dazzling mix of Scottish history, science, technology, art, and natural history across six floors. Dolly the sheep is here. Free entry.",
    link: "https://www.nms.ac.uk/national-museum-of-scotland/",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&w=800&q=80",
    tag: "Free Entry", color: "amber", extra: "Free • Open daily 10am–5pm",
  },
  {
    name: "Scottish National Gallery",
    address: "The Mound, Edinburgh, EH2 2EL",
    desc: "Scotland's national collection of fine art — Botticelli, Raphael, El Greco, Rembrandt, Monet, and the world's best collection of Scottish paintings. Free entry.",
    link: "https://www.nationalgalleries.org/visit/scottish-national-gallery",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
    tag: "Free Entry", color: "rose", extra: "Free • Open daily 10am–5pm",
  },
  {
    name: "Scottish National Portrait Gallery",
    address: "1 Queen Street, Edinburgh, EH2 1JD",
    desc: "Stunning red sandstone Victorian building housing portraits of famous Scots through the ages — Mary Queen of Scots, Robert Burns, Sean Connery, and more. Free.",
    link: "https://www.nationalgalleries.org/visit/scottish-national-portrait-gallery",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80",
    tag: "Free Entry", color: "indigo", extra: "Free • Open daily 10am–5pm",
  },
  {
    name: "Museum of Edinburgh (Huntly House)",
    address: "142 Canongate, Royal Mile, EH8 8DD",
    desc: "The city's principal local history museum in a beautiful 16th-century building. Artefacts from Edinburgh's past including the National Covenant original. Free.",
    link: "https://www.edinburghmuseums.org.uk/venue/museum-of-edinburgh",
    image: "https://images.unsplash.com/photo-1558618047-f4e60cde4491?auto=format&fit=crop&w=800&q=80",
    tag: "Free Entry", color: "orange", extra: "Free • Tue–Sun 10am–5pm",
  },
  {
    name: "City Art Centre",
    address: "2 Market Street, Edinburgh, EH1 1DE",
    desc: "Six floors of exhibition space near Waverley station, specialising in Scottish art. Hosts major travelling exhibitions and the city's fine art collection. Free entry.",
    link: "https://www.edinburghmuseums.org.uk/venue/city-art-centre",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
    tag: "Free Entry", color: "purple", extra: "Free • Mon–Sat 10am–5pm",
  },
  {
    name: "Surgeons' Hall Museums",
    address: "Nicolson Street, Edinburgh, EH8 9DW",
    desc: "Fascinating and sometimes gruesome medical history collection, including the infamous Burke & Hare case. Pathology, dentistry, and history of surgery. Ticketed.",
    link: "https://museum.rcsed.ac.uk/",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a9de?auto=format&fit=crop&w=800&q=80",
    tag: "Ticketed", color: "slate", extra: "~£7 adults • Mon–Fri 10am–5pm",
  },
];

const FUN_AND_GAMES = [
  {
    name: "Camera Obscura & World of Illusions",
    address: "Castlehill, Royal Mile, EH1 2ND",
    desc: "Five floors of hands-on optical illusions, holograms, and mind-bending exhibits — topped by the historic Camera Obscura with a 360° live view of Edinburgh.",
    link: "https://camera-obscura.co.uk/",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
    tag: "Attractions", color: "purple", price: "~£18 adults",
  },
  {
    name: "Dynamic Earth",
    address: "Holyrood Road, Edinburgh, EH8 8AS",
    desc: "Journey through the story of our planet in this immersive science attraction. Volcanoes, polar expeditions, tropical rainforests — incredible for all ages.",
    link: "https://www.dynamicearth.co.uk/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tag: "Science", color: "emerald", price: "~£16 adults",
  },
  {
    name: "Escape Edinburgh",
    address: "Multiple locations across Edinburgh",
    desc: "Award-winning escape rooms with immersive Edinburgh-themed scenarios. Work as a team to solve puzzles and escape before the clock runs out.",
    link: "https://www.escapeedinburgh.com/",
    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?auto=format&fit=crop&w=800&q=80",
    tag: "Escape Rooms", color: "red", price: "~£20–25 per person",
  },
  {
    name: "Vault 55 Edinburgh",
    address: "55 Lothian Road, Edinburgh, EH1 2DJ",
    desc: "Edinburgh's premium social darts, ping pong, shuffleboard, and pool venue. Book a lane or table and enjoy cocktails while you play — perfect for groups.",
    link: "https://vault55.co.uk/",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    tag: "Social Sports", color: "orange", price: "From £10/hr per lane",
  },
  {
    name: "Edinburgh Zoo",
    address: "134 Corstorphine Road, Edinburgh, EH12 6TS",
    desc: "Home to giant pandas, penguins, tigers, and over 1,000 animals. Scotland's most visited paid attraction — brilliant for families and animal lovers.",
    link: "https://www.edinburghzoo.org.uk/",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&w=800&q=80",
    tag: "Zoo", color: "lime", price: "~£22 adults",
  },
  {
    name: "Bunker Bar & Arcade",
    address: "35-38 Cowgate, Edinburgh, EH1 1JR",
    desc: "Underground bar and arcade hidden in the historic Cowgate vaults. Classic arcade machines, pool tables, and a brilliant drinks menu — open late.",
    link: "https://www.bunkeredinburgh.co.uk/",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80",
    tag: "Bar & Arcade", color: "indigo", price: "Free entry",
  },
];

// Fallback colours when an image fails to load
const FALLBACK_GRADIENTS = [
  "from-slate-700 to-slate-500",
  "from-sky-700 to-sky-500",
  "from-emerald-700 to-emerald-500",
  "from-violet-700 to-violet-500",
  "from-amber-700 to-amber-500",
  "from-rose-700 to-rose-500",
];

function PlaceCard({
  name, address, desc, link, image, tag, color, extra, index = 0,
}: {
  name: string; address: string; desc: string; link: string;
  image: string; tag: string; color: string; extra?: string; index?: number;
}) {
  const tagColors: Record<string, string> = {
    amber:   "bg-amber-100 text-amber-800",
    orange:  "bg-orange-100 text-orange-800",
    yellow:  "bg-yellow-100 text-yellow-800",
    stone:   "bg-stone-100 text-stone-700",
    indigo:  "bg-indigo-100 text-indigo-800",
    emerald: "bg-emerald-100 text-emerald-800",
    rose:    "bg-rose-100 text-rose-800",
    lime:    "bg-lime-100 text-lime-800",
    sky:     "bg-sky-100 text-sky-800",
    blue:    "bg-blue-100 text-blue-800",
    cyan:    "bg-cyan-100 text-cyan-800",
    teal:    "bg-teal-100 text-teal-800",
    violet:  "bg-violet-100 text-violet-800",
    fuchsia: "bg-fuchsia-100 text-fuchsia-800",
    purple:  "bg-purple-100 text-purple-800",
    red:     "bg-red-100 text-red-800",
    green:   "bg-green-100 text-green-800",
    slate:   "bg-slate-100 text-slate-700",
  };
  const tagClass = tagColors[color] ?? "bg-slate-100 text-slate-700";
  const fallback = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`relative w-full h-44 bg-gradient-to-br ${fallback} overflow-hidden`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            // swap to a reliable picsum fallback keyed by name
            const el = e.currentTarget;
            if (!el.dataset.fallback) {
              el.dataset.fallback = "1";
              el.src = `https://picsum.photos/seed/${encodeURIComponent(name)}/800/440`;
            }
          }}
        />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${tagClass}`}>
          {tag}
        </span>
      </div>
      <div className="p-4">
        <div className="font-bold text-slate-900 text-sm mb-0.5">{name}</div>
        <div className="text-xs text-slate-500 mb-2">📍 {address}</div>
        <p className="text-xs text-slate-600 leading-relaxed mb-3">{desc}</p>
        {extra && <div className="text-xs text-slate-500 mb-2">{extra}</div>}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline"
        >
          Visit website →
        </a>
      </div>
    </div>
  );
}

export default function EntertainmentPage() {
  const [tab, setTab] = useState("pubs");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader
        title="Entertainment"
        subtitle="Pubs, restaurants, parks, museums, skating & fun across Edinburgh"
      />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Edinburgh <span className="text-pink-500">Entertainment.</span>
          </h1>
          <p className="text-sm text-slate-600">
            Centuries-old pubs, Michelin-starred dining, world-class museums, stunning parks, ice rinks, and escape rooms — Edinburgh has it all.
          </p>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "pubs" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800">
                <strong>Scottish licensing:</strong> Pubs typically close around midnight on weekdays and 1am on weekends. Drinking age is 18+.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PUBS.map((p, i) => <PlaceCard key={p.name} {...p} index={i} />)}
            </div>
            <a href="https://www.visitscotland.com/see-do/food-drink/pubs-bars/edinburgh/" target="_blank" rel="noreferrer"
              className="block text-center text-xs font-bold text-sky-600 hover:underline mt-2">
              See more Edinburgh pubs on VisitScotland →
            </a>
          </div>
        )}

        {tab === "restaurants" && (
          <div className="space-y-4">
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
              <p className="text-xs text-rose-800">
                <strong>Tip:</strong> Top restaurants book up fast, especially during the Fringe (August) and Christmas. Always book ahead online.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESTAURANTS.map((r, i) => <PlaceCard key={r.name} {...r} extra={`💷 ${r.price}`} index={i} />)}
            </div>
            <a href="https://www.visitscotland.com/see-do/food-drink/restaurants/edinburgh/" target="_blank" rel="noreferrer"
              className="block text-center text-xs font-bold text-sky-600 hover:underline mt-2">
              Explore more Edinburgh restaurants →
            </a>
          </div>
        )}

        {tab === "skating" && (
          <div className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
              <p className="text-xs text-sky-800">
                <strong>Skate hire:</strong> All venues offer skate hire. Book sessions in advance for busy weekends and school holidays.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {SKATING.map((s, i) => <PlaceCard key={s.name} {...s} extra={`⏰ ${s.hours}`} index={i} />)}
            </div>
          </div>
        )}

        {tab === "parks" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-xs text-emerald-800">
                <strong>Edinburgh outdoors:</strong> Most parks and green spaces are free and open year-round. Edinburgh is one of the greenest cities in Europe with over 100 parks and green spaces.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PARKS.map((p, i) => <PlaceCard key={p.name} {...p} index={i} />)}
            </div>
            <a href="https://www.edinburgh.gov.uk/parks-greenspaces" target="_blank" rel="noreferrer"
              className="block text-center text-xs font-bold text-sky-600 hover:underline mt-2">
              All Edinburgh parks & green spaces →
            </a>
          </div>
        )}

        {tab === "museums" && (
          <div className="space-y-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
              <p className="text-xs text-indigo-800">
                <strong>Free museums:</strong> Most of Edinburgh's major museums and galleries are completely free. National Galleries of Scotland and National Museums of Scotland offer free permanent collections.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MUSEUMS.map((m, i) => <PlaceCard key={m.name} {...m} index={i} />)}
            </div>
            <a href="https://www.edinburghmuseums.org.uk/" target="_blank" rel="noreferrer"
              className="block text-center text-xs font-bold text-sky-600 hover:underline mt-2">
              All Edinburgh city museums →
            </a>
          </div>
        )}

        {tab === "fun" && (
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-xs text-purple-800">
                <strong>Edinburgh for families:</strong> Many attractions offer discounted family tickets. Always check websites for seasonal offers and online booking discounts.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FUN_AND_GAMES.map((f, i) => <PlaceCard key={f.name} {...f} extra={`💷 ${f.price}`} index={i} />)}
            </div>
            <a href="https://www.visitscotland.com/see-do/attractions/edinburgh/" target="_blank" rel="noreferrer"
              className="block text-center text-xs font-bold text-sky-600 hover:underline mt-2">
              Discover more Edinburgh attractions on VisitScotland →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
