export type AreaOfCity = "north" | "south" | "east" | "west" | "centre";
export type LifestyleTag =
  | "students"
  | "families"
  | "professionals"
  | "creative"
  | "historic"
  | "quiet"
  | "lively"
  | "affordable"
  | "seaside"
  | "suburban";
export type CyclingScore = "excellent" | "good" | "fair" | "poor";

export interface RentRange {
  min: number;
  max: number;
}

export interface Neighbourhood {
  slug: string;
  name: string;
  tagline: string;
  area: AreaOfCity;
  description: string;
  longDescription: string;
  color: string;
  textColor: string;
  emoji: string;
  postcode: string;
  coords: { lat: number; lng: number };
  tags: LifestyleTag[];
  bestFor: string[];
  rents: {
    studio: RentRange;
    oneBed: RentRange;
    twoBed: RentRange;
    threeBed: RentRange;
  };
  transport: {
    walkToCentre: number;
    tram: boolean;
    tramStop?: string;
    keyBusRoutes: string[];
    cyclingScore: CyclingScore;
  };
  highlights: string[];
  watchOut: string[];
  vibes: {
    nightlife: number;
    family: number;
    greenSpace: number;
    transport: number;
    affordability: number;
    community: number;
  };
  councilTaxBand: string;
  similarTo: string[];
}

export const NEIGHBOURHOODS: Neighbourhood[] = [
  {
    slug: "leith",
    name: "Leith",
    tagline: "Edinburgh's coolest waterfront quarter",
    area: "north",
    description:
      "Once a separate port town, Leith has reinvented itself as Edinburgh's most dynamic neighbourhood. The Shore is packed with award-winning restaurants, independent bars, and creative studios, all against a working waterfront backdrop.",
    longDescription:
      "Leith spent decades in Edinburgh's shadow, but that's long in the past. Today it's the city's most talked-about neighbourhood — a genuine mix of long-standing working-class community and an influx of young professionals, artists, and chefs who've made it Edinburgh's food and drink capital. The Shore strip alone has more Michelin-starred and critically acclaimed restaurants per square metre than almost anywhere in Scotland. Ocean Terminal brings major retail, and the Royal Yacht Britannia draws tourists year-round. Crucially, Leith feels real: it's not gentrified into blandness. Friday nights on Constitution Street buzz with a mix of regulars and newcomers. The Edinburgh Tram now runs directly to York Place in 10 minutes, making the commute entirely painless.",
    color: "#0d9488",
    textColor: "#ffffff",
    emoji: "⚓",
    postcode: "EH6",
    coords: { lat: 55.9745, lng: -3.1716 },
    tags: ["professionals", "creative", "lively", "seaside"],
    bestFor: [
      "Young professionals wanting character over convenience",
      "Foodies and restaurant lovers",
      "Creative and arts sector workers",
      "Those priced out of New Town wanting similar energy",
    ],
    rents: {
      studio: { min: 700, max: 850 },
      oneBed: { min: 900, max: 1100 },
      twoBed: { min: 1150, max: 1450 },
      threeBed: { min: 1500, max: 1900 },
    },
    transport: {
      walkToCentre: 25,
      tram: true,
      tramStop: "Newhaven / Ocean Terminal",
      keyBusRoutes: ["16", "22", "35", "36", "300"],
      cyclingScore: "excellent",
    },
    highlights: [
      "The Shore — Edinburgh's finest dining strip",
      "Royal Yacht Britannia",
      "Leith Market (Saturdays)",
      "Ocean Terminal shopping centre",
      "Water of Leith walkway",
      "Leith Depot and indie music scene",
      "Lively café culture on Easter Road",
    ],
    watchOut: [
      "Parking is genuinely difficult — most residents don't own cars",
      "Some streets away from The Shore feel isolated at night",
      "Festival season brings significant tourist overflow",
      "The tram is great but limited to one line",
    ],
    vibes: {
      nightlife: 4,
      family: 3,
      greenSpace: 2,
      transport: 5,
      affordability: 3,
      community: 5,
    },
    councilTaxBand: "B–D (typical)",
    similarTo: ["tollcross", "canonmills", "granton"],
  },
  {
    slug: "new-town",
    name: "New Town",
    tagline: "Georgian grandeur meets modern city living",
    area: "centre",
    description:
      "A UNESCO World Heritage Site and one of Europe's finest examples of Georgian urban planning. New Town offers wide boulevards, elegant sandstone tenements, and some of Edinburgh's best independent shopping on Thistle Street and Multrees Walk.",
    longDescription:
      "Built between 1765 and 1850 as Edinburgh expanded beyond the cramped Old Town, the New Town is the city's architectural crown jewel. George Street, once the main commercial spine, is now lined with upscale bars and restaurants. Princes Street to the south offers department stores with unbeatable views of the Castle. Behind the main streets, quiet residential crescents and gardens feel almost suburban in their calm. Charlotte Square is one of the UK's finest public spaces. This is where Edinburgh's lawyers, consultants, and senior professionals tend to land. The trade-off: it's expensive, and the rental market is tight. But for central living with genuine grandeur, nothing else in Edinburgh competes.",
    color: "#1e3a5f",
    textColor: "#ffffff",
    emoji: "🏛️",
    postcode: "EH2/EH3",
    coords: { lat: 55.9564, lng: -3.1961 },
    tags: ["professionals", "historic", "quiet"],
    bestFor: [
      "Senior professionals and executives",
      "Those who want to walk everywhere",
      "History and architecture lovers",
      "Couples without children",
    ],
    rents: {
      studio: { min: 950, max: 1200 },
      oneBed: { min: 1200, max: 1600 },
      twoBed: { min: 1600, max: 2200 },
      threeBed: { min: 2200, max: 3000 },
    },
    transport: {
      walkToCentre: 5,
      tram: true,
      tramStop: "St Andrew Square / Princes Street",
      keyBusRoutes: ["X24", "X26", "X27", "X15", "29"],
      cyclingScore: "good",
    },
    highlights: [
      "George Street bars and restaurants",
      "Charlotte Square and private gardens",
      "Thistle Street independent boutiques",
      "Scottish National Portrait Gallery (free)",
      "Princes Street Gardens",
      "Harvey Nichols and Multrees Walk",
      "Assembly Rooms events venue",
    ],
    watchOut: [
      "Among the most expensive areas in Edinburgh",
      "Very busy with tourists in Old Town immediately to the south",
      "On-street parking requires permit and is competitive",
      "Some flats are top-floor tenements with no lift",
    ],
    vibes: {
      nightlife: 3,
      family: 3,
      greenSpace: 3,
      transport: 5,
      affordability: 1,
      community: 3,
    },
    councilTaxBand: "D–F (typical)",
    similarTo: ["old-town", "stockbridge", "haymarket"],
  },
  {
    slug: "old-town",
    name: "Old Town",
    tagline: "Living inside Edinburgh's medieval heart",
    area: "centre",
    description:
      "The Royal Mile, Grassmarket, and Cowgate — living in Old Town puts you at the centre of everything Edinburgh is famous for. Expect stunning views, cobbled streets, and a buzzing bar scene. Also expect tourists. Many tourists.",
    longDescription:
      "Old Town is where Edinburgh began, and it remains the city's most dramatic neighbourhood. The medieval street plan — the original 'closes' and wynds running off the Royal Mile — is unlike anywhere else in Britain. Living here means Castle views from your window, a 2-minute walk to the Grassmarket's pubs, and everything the Fringe throws at you in August. The residential population is a mix of students, young professionals, and the occasional eccentric who's lived here for decades. It's genuinely vibrant year-round, not just during festivals. The Cowgate has Edinburgh's liveliest club scene. Victoria Street curves beautifully downhill to the Grassmarket. But it is noisy, sometimes raucous, and firmly tourist-territory in summer.",
    color: "#7c3aed",
    textColor: "#ffffff",
    emoji: "🏰",
    postcode: "EH1",
    coords: { lat: 55.9485, lng: -3.188 },
    tags: ["students", "historic", "lively", "professionals"],
    bestFor: [
      "Those who want to be at the centre of city life",
      "Edinburgh University students and academics",
      "People who travel frequently (great transport links)",
      "Night-owls and hospitality workers",
    ],
    rents: {
      studio: { min: 900, max: 1100 },
      oneBed: { min: 1100, max: 1500 },
      twoBed: { min: 1500, max: 2000 },
      threeBed: { min: 2000, max: 2800 },
    },
    transport: {
      walkToCentre: 2,
      tram: false,
      keyBusRoutes: ["35", "36", "6", "67", "300"],
      cyclingScore: "fair",
    },
    highlights: [
      "Edinburgh Castle",
      "The Royal Mile",
      "Grassmarket — pubs, markets, history",
      "Victoria Street (voted one of UK's most beautiful streets)",
      "Cowgate nightlife",
      "Greyfriars Kirkyard",
      "National Museum of Scotland (free)",
    ],
    watchOut: [
      "Extremely noisy during Edinburgh Fringe (August)",
      "Tourist congestion from April to October",
      "Many flats are in converted tenements with uneven standards",
      "Cobbled streets can be brutal with luggage or prams",
    ],
    vibes: {
      nightlife: 5,
      family: 1,
      greenSpace: 2,
      transport: 4,
      affordability: 2,
      community: 3,
    },
    councilTaxBand: "C–E (typical)",
    similarTo: ["new-town", "tollcross", "marchmont"],
  },
  {
    slug: "stockbridge",
    name: "Stockbridge",
    tagline: "The village Edinburgh residents actually want to live in",
    area: "west",
    description:
      "Stockbridge consistently tops 'best Edinburgh neighbourhood' lists and for good reason. It has the feel of a self-contained village — independent delis, bookshops, a Sunday market — while being a 15-minute walk from Princes Street.",
    longDescription:
      "If you could design the perfect urban neighbourhood, you'd probably end up with something like Stockbridge. The Sunday farmers' market on Saunders Street has become a genuine Edinburgh institution. The Water of Leith walkway starts here, giving access to beautiful green riverside walks. Raeburn Place has an excellent collection of independent shops, cafés, and a long-standing cinema. The area has strong community bonds — there are neighbourhood associations, local campaigns, and a sense that residents genuinely care about the place. Families and professionals dominate, which keeps it safe and pleasant without losing the warmth. The flip side: demand massively outstrips supply, rents have risen sharply, and finding a good flat requires patience.",
    color: "#166534",
    textColor: "#ffffff",
    emoji: "🌿",
    postcode: "EH3/EH4",
    coords: { lat: 55.9591, lng: -3.2099 },
    tags: ["families", "professionals", "quiet", "lively"],
    bestFor: [
      "Families with young children",
      "Professional couples settling long-term",
      "Those who want village feel with city access",
      "Dog owners (Water of Leith walks)",
    ],
    rents: {
      studio: { min: 850, max: 1050 },
      oneBed: { min: 1050, max: 1350 },
      twoBed: { min: 1350, max: 1750 },
      threeBed: { min: 1800, max: 2400 },
    },
    transport: {
      walkToCentre: 15,
      tram: false,
      keyBusRoutes: ["24", "29", "36", "42"],
      cyclingScore: "excellent",
    },
    highlights: [
      "Stockbridge Sunday Market",
      "Water of Leith walkway",
      "Inverleith Park and Royal Botanic Garden",
      "Raeburn Place independent shops",
      "The Stockbridge Tap — Edinburgh's best pub selection",
      "Odeon cinema",
      "Excellent primary school catchment",
    ],
    watchOut: [
      "High demand — good flats go very fast",
      "Rents have risen 20%+ in 3 years",
      "Limited parking — permits required",
      "The most desirable streets rarely come up",
    ],
    vibes: {
      nightlife: 3,
      family: 5,
      greenSpace: 5,
      transport: 3,
      affordability: 2,
      community: 5,
    },
    councilTaxBand: "C–E (typical)",
    similarTo: ["canonmills", "morningside", "dean-village"],
  },
  {
    slug: "morningside",
    name: "Morningside",
    tagline: "Edinburgh's most genteel suburb — and proud of it",
    area: "south",
    description:
      "Morningside is Edinburgh's quintessential middle-class suburb, with a reputation for respectability that locals both mock and enjoy. Excellent schools, quiet streets, large Victorian houses, and some of the city's best coffee shops.",
    longDescription:
      "The butt of many Edinburgh jokes, Morningside is also quietly one of the best places to live in the city if you have a family. Morningside Road is a proper high street — not just coffee shops, but a post office, bank, library, butcher, and enough restaurants to make going elsewhere unnecessary. The residential streets are wide, leafy, and quiet. Gardens are large. The Victorian and Edwardian housing stock is well-maintained. Schools — particularly South Morningside Primary — are among the most sought-after in Edinburgh. It does skew older, and if you're in your twenties and want nightlife, it's not for you. But for families or those who appreciate calm and quality of life, Morningside delivers consistently.",
    color: "#9f1239",
    textColor: "#ffffff",
    emoji: "🍂",
    postcode: "EH10",
    coords: { lat: 55.9275, lng: -3.2059 },
    tags: ["families", "quiet", "suburban", "professionals"],
    bestFor: [
      "Families with school-age children",
      "Those working from home who need peace",
      "Retirees or those downsizing",
      "Anyone who values quality over nightlife",
    ],
    rents: {
      studio: { min: 800, max: 1000 },
      oneBed: { min: 950, max: 1250 },
      twoBed: { min: 1250, max: 1600 },
      threeBed: { min: 1700, max: 2300 },
    },
    transport: {
      walkToCentre: 30,
      tram: false,
      keyBusRoutes: ["5", "11", "15", "16", "23"],
      cyclingScore: "good",
    },
    highlights: [
      "Morningside Road high street",
      "Braid Hills and Blackford Hill (walking)",
      "Hermitage of Braid nature reserve",
      "Dominion Cinema — Edinburgh's independent gem",
      "Waitrose and high-quality food shopping",
      "Excellent school catchments",
      "Multiple good coffee shops",
    ],
    watchOut: [
      "Quiet to the point of quietness in the evenings",
      "Car-dependent for most activities beyond the immediate area",
      "Bus to centre is reliable but not fast (25-35 mins)",
      "Very competitive school catchment area",
    ],
    vibes: {
      nightlife: 1,
      family: 5,
      greenSpace: 4,
      transport: 3,
      affordability: 2,
      community: 4,
    },
    councilTaxBand: "D–F (typical)",
    similarTo: ["bruntsfield", "liberton", "marchmont"],
  },
  {
    slug: "bruntsfield",
    name: "Bruntsfield",
    tagline: "Young, social, and next to the Meadows",
    area: "south",
    description:
      "Bruntsfield sits between the Meadows and Morningside, combining the best of both. The Links are great for picnics and morning runs; Bruntsfield Place is lined with excellent independent cafés and restaurants. Popular with young professionals and couples.",
    longDescription:
      "Bruntsfield has a distinctive energy — it's social without being rowdy, independent without being hipster. Bruntsfield Place is one of Edinburgh's best café strips: Cafè Tartine, Lovecrumbs, and a string of others keep the pavement busy on weekend mornings. The Links — the historic golf course and park — means green space is literally on your doorstep. The Meadows, a few minutes' walk east, is where everyone congregates in summer. Residential streets off the main road are quieter and very pleasant. The demographic is mostly 25-40 year olds: young professionals, couples, and a smattering of academics from the nearby university. It's more affordable than Stockbridge but equally pleasant, which makes it one of Edinburgh's best value mid-tier options.",
    color: "#ea580c",
    textColor: "#ffffff",
    emoji: "🌤️",
    postcode: "EH10",
    coords: { lat: 55.9376, lng: -3.2031 },
    tags: ["professionals", "lively", "creative"],
    bestFor: [
      "Young professionals in their late 20s/30s",
      "Couples without children",
      "Those who want good food and coffee on their doorstep",
      "University staff and academics",
    ],
    rents: {
      studio: { min: 800, max: 1000 },
      oneBed: { min: 950, max: 1250 },
      twoBed: { min: 1250, max: 1600 },
      threeBed: { min: 1600, max: 2100 },
    },
    transport: {
      walkToCentre: 20,
      tram: false,
      keyBusRoutes: ["11", "15", "16", "23", "45"],
      cyclingScore: "excellent",
    },
    highlights: [
      "Bruntsfield Links (historic park and golf)",
      "The Meadows (huge green space, 5 min walk)",
      "Bruntsfield Place café culture",
      "Holy Corner (good local pubs)",
      "Easy cycling to centre and university",
      "Local Waitrose and quality food shops",
      "Frequent events in the Meadows",
    ],
    watchOut: [
      "Meadows gets very busy and can be noisy in summer",
      "Limited evening economy on the residential streets",
      "Parking restricted — residents' permits only",
      "Traffic on Bruntsfield Place at peak hours",
    ],
    vibes: {
      nightlife: 3,
      family: 3,
      greenSpace: 5,
      transport: 3,
      affordability: 3,
      community: 4,
    },
    councilTaxBand: "C–D (typical)",
    similarTo: ["marchmont", "morningside", "tollcross"],
  },
  {
    slug: "marchmont",
    name: "Marchmont",
    tagline: "Student heartland with surprising quality of life",
    area: "south",
    description:
      "Dense Victorian tenements, the Meadows on the doorstep, and Edinburgh University around the corner. Marchmont is classic Edinburgh student territory — but the housing quality is genuinely good and it's increasingly popular with young professionals too.",
    longDescription:
      "Marchmont's identity is inseparable from Edinburgh University. The streets of Spottiswoode Road, Marchmont Road, and Roseneath Street have housed generations of students, and the local economy reflects it — cheap takeaways alongside excellent coffee shops, convenience stores alongside the odd interesting restaurant. But it's a mistake to dismiss it as purely student territory. The tenement flats are substantial — many have high ceilings, large rooms, and real period features. The Meadows is a 2-minute walk for most residents. Southside is immediately adjacent, adding further cafés and amenities. Young professionals who can't afford Bruntsfield or Stockbridge increasingly choose Marchmont and don't regret it.",
    color: "#d97706",
    textColor: "#ffffff",
    emoji: "📚",
    postcode: "EH9",
    coords: { lat: 55.9352, lng: -3.1877 },
    tags: ["students", "professionals", "affordable"],
    bestFor: [
      "University students",
      "Junior professionals looking for good value",
      "Those who want Meadows access",
      "Cyclists (flat routes to centre and university)",
    ],
    rents: {
      studio: { min: 700, max: 900 },
      oneBed: { min: 850, max: 1100 },
      twoBed: { min: 1100, max: 1400 },
      threeBed: { min: 1400, max: 1800 },
    },
    transport: {
      walkToCentre: 20,
      tram: false,
      keyBusRoutes: ["41", "42", "67", "24"],
      cyclingScore: "excellent",
    },
    highlights: [
      "The Meadows (on the doorstep)",
      "Warrender Swim Centre",
      "Excellent cycle routes to university and centre",
      "Good value restaurants and cafés on Roseneath Street",
      "Easy access to Bruntsfield amenities",
      "Community feel despite transient population",
    ],
    watchOut: [
      "Significant tenant turnover — can feel transient",
      "Student party noise on busy weekends",
      "Parking is extremely limited",
      "Some flats are poorly maintained by absent landlords",
    ],
    vibes: {
      nightlife: 3,
      family: 2,
      greenSpace: 5,
      transport: 3,
      affordability: 4,
      community: 3,
    },
    councilTaxBand: "B–C (typical)",
    similarTo: ["newington", "bruntsfield", "tollcross"],
  },
  {
    slug: "newington",
    name: "Newington",
    tagline: "South Side hub: affordable, connected, underrated",
    area: "south",
    description:
      "Newington (sometimes called the Southside) runs along Newington Road and Causewayside, just south of the university. It's affordable, diverse, and has Edinburgh's best selection of restaurants outside the city centre.",
    longDescription:
      "Newington is Edinburgh's most genuinely diverse area and its food scene reflects it — excellent Indian, Chinese, Turkish, Ethiopian, and Middle Eastern restaurants line Newington Road and its side streets. The area has strong student ties through its proximity to Edinburgh University and Summerhall (a thriving arts venue in a converted brewery), but it's also home to long-established families and a growing professional population. The Arthur's Seat end of Newington is particularly pleasant — greener, quieter, and with better access to Holyrood Park. The trade-off is that it can feel slightly scrappy around the main road, with traffic and the associated noise.",
    color: "#6d28d9",
    textColor: "#ffffff",
    emoji: "🎭",
    postcode: "EH9",
    coords: { lat: 55.9378, lng: -3.1826 },
    tags: ["students", "affordable", "creative", "lively"],
    bestFor: [
      "University students and recent graduates",
      "Budget-conscious professionals",
      "Food lovers who want variety",
      "Those who enjoy a diverse, eclectic neighbourhood",
    ],
    rents: {
      studio: { min: 650, max: 850 },
      oneBed: { min: 800, max: 1050 },
      twoBed: { min: 1050, max: 1350 },
      threeBed: { min: 1350, max: 1750 },
    },
    transport: {
      walkToCentre: 20,
      tram: false,
      keyBusRoutes: ["2", "7", "8", "31", "37", "47"],
      cyclingScore: "good",
    },
    highlights: [
      "Summerhall arts venue",
      "Arthur's Seat and Holyrood Park access",
      "Newington Road restaurant mile",
      "Library and local amenities",
      "Edinburgh Meadows walking distance",
      "Diverse food shopping (Asian, Middle Eastern, international)",
    ],
    watchOut: [
      "Newington Road is busy and noisy",
      "Quality varies significantly street by street",
      "Student noise on key residential streets",
      "Parking available but contested",
    ],
    vibes: {
      nightlife: 3,
      family: 2,
      greenSpace: 4,
      transport: 3,
      affordability: 5,
      community: 3,
    },
    councilTaxBand: "B–C (typical)",
    similarTo: ["marchmont", "tollcross", "liberton"],
  },
  {
    slug: "portobello",
    name: "Portobello",
    tagline: "Edinburgh's sandy secret — seaside living in the city",
    area: "east",
    description:
      "Scotland's answer to Brighton has Edinburgh's only sandy beach, a proper promenade, and a village high street independent shops. Families and creatives have been moving here for a decade, and the community is warm and distinctive.",
    longDescription:
      "Portobello is genuinely unique in Edinburgh — a seaside community with its own distinct identity that predates Edinburgh absorbing it. The beach is real sand, nearly 2 miles long, and draws swimmers, dog walkers, paddleboarders, and weekend barbecuers from across the city. The high street has resisted the homogenisation affecting most Scottish towns — you'll find a fishmonger, independent bookshop, vinyl record store, and excellent cafés rather than national chains. The indoor pool and Turkish baths are heritage assets worth knowing about. The trade-off is distance: it's 20 minutes on the bus to the centre, and the tram doesn't reach here. But for families especially, it offers a quality of life that's hard to find closer in at the same price point.",
    color: "#0369a1",
    textColor: "#ffffff",
    emoji: "🏖️",
    postcode: "EH15",
    coords: { lat: 55.9568, lng: -3.1104 },
    tags: ["families", "creative", "seaside", "affordable"],
    bestFor: [
      "Families with children (beach, space, schools)",
      "Dog owners",
      "Creative professionals working flexibly",
      "Those escaping urban density",
    ],
    rents: {
      studio: { min: 700, max: 850 },
      oneBed: { min: 800, max: 1050 },
      twoBed: { min: 1050, max: 1350 },
      threeBed: { min: 1350, max: 1750 },
    },
    transport: {
      walkToCentre: 55,
      tram: false,
      keyBusRoutes: ["26", "45", "46", "42"],
      cyclingScore: "good",
    },
    highlights: [
      "Portobello Beach (Edinburgh's only sandy beach)",
      "Portobello Swim Centre and Turkish baths",
      "Portobello High Street independent shops",
      "Weekend markets and community events",
      "Excellent independent restaurants and cafés",
      "Active community groups and residents association",
      "Quiet residential streets back from the front",
    ],
    watchOut: [
      "The commute to central Edinburgh is real — budget 30-45 mins by bus",
      "Can feel isolated in winter",
      "Beach area gets very busy on warm weekends (rare, but it happens)",
      "Less useful if your job requires frequent city-centre presence",
    ],
    vibes: {
      nightlife: 2,
      family: 5,
      greenSpace: 4,
      transport: 2,
      affordability: 4,
      community: 5,
    },
    councilTaxBand: "B–D (typical)",
    similarTo: ["trinity", "granton", "leith"],
  },
  {
    slug: "tollcross",
    name: "Tollcross",
    tagline: "Central, connected, and properly Edinburgh",
    area: "centre",
    description:
      "The junction at the heart of Edinburgh's southside. Tollcross is unfashionable in the best possible way — properly diverse, extremely well connected, and more affordable than its proximity to the centre suggests.",
    longDescription:
      "Tollcross isn't a place people brag about living in the way they do with Stockbridge or Bruntsfield, but it punches well above its weight. It's one of the most connected spots in Edinburgh — buses head in every direction, and the Meadows and Bruntsfield are a short walk south. The main road has a useful mix of supermarkets, takeaways, and practical shops. The King's Theatre brings a cultural anchor. The areas directly around Tollcross — Gilmore Place, Home Street, Viewforth — have pleasant residential streets that many people don't realise are part of the neighbourhood. For renters who want to be close to the action without paying Old Town or New Town prices, Tollcross is an excellent option.",
    color: "#b45309",
    textColor: "#ffffff",
    emoji: "🔀",
    postcode: "EH3",
    coords: { lat: 55.942, lng: -3.2038 },
    tags: ["professionals", "affordable", "lively"],
    bestFor: [
      "Young professionals who want central access on a budget",
      "Hospitality workers (close to jobs, good bus links)",
      "Those who cycle — great routes in all directions",
      "People who value convenience over prestige",
    ],
    rents: {
      studio: { min: 750, max: 950 },
      oneBed: { min: 900, max: 1150 },
      twoBed: { min: 1150, max: 1500 },
      threeBed: { min: 1500, max: 2000 },
    },
    transport: {
      walkToCentre: 12,
      tram: false,
      keyBusRoutes: ["10", "11", "15", "16", "23", "27"],
      cyclingScore: "excellent",
    },
    highlights: [
      "King's Theatre",
      "Cameo Cinema (excellent independent)",
      "Access to Bruntsfield and Meadows on foot",
      "Home Street local amenities",
      "Gilmore Place quieter residential character",
      "Canal towpath (Water of Leith nearby)",
    ],
    watchOut: [
      "The main junction is loud — avoid flats right on Tollcross itself",
      "Some blocks are student-heavy with all the usual noise",
      "Road traffic is constant",
      "Less of a local identity than nearby Bruntsfield or Marchmont",
    ],
    vibes: {
      nightlife: 3,
      family: 2,
      greenSpace: 3,
      transport: 5,
      affordability: 4,
      community: 3,
    },
    councilTaxBand: "B–C (typical)",
    similarTo: ["bruntsfield", "marchmont", "leith"],
  },
  {
    slug: "haymarket",
    name: "Haymarket",
    tagline: "The commuter's smart choice — underrated and well-connected",
    area: "west",
    description:
      "Right next to the tram and train, Haymarket has been quietly improving for years. Property is cheaper than New Town, which is a 10-minute walk east, and the tram takes you to the airport in 35 minutes.",
    longDescription:
      "Haymarket's main selling point is brutal practicality: Edinburgh's second-busiest train station, tram connections to the airport and Leith, and a growing collection of restaurants and bars. The residential streets behind the station — Morrison Street, Dalry Road, Dewar Place — are unremarkable but perfectly pleasant. The neighbourhood lacks the character of Stockbridge or the grandeur of New Town, but makes up for it in connectivity and relative affordability. For professionals who travel frequently or commute, the combination of train, tram, and proximity to the city centre is very hard to beat. There's investment coming — development around the station is ongoing and the area is uptrending.",
    color: "#334155",
    textColor: "#ffffff",
    emoji: "🚉",
    postcode: "EH12",
    coords: { lat: 55.9455, lng: -3.2219 },
    tags: ["professionals", "quiet", "affordable"],
    bestFor: [
      "Frequent travellers (train + tram + airport tram)",
      "Commuters to Glasgow (direct trains)",
      "Professionals who prioritise convenience",
      "Airport sector workers",
    ],
    rents: {
      studio: { min: 800, max: 1000 },
      oneBed: { min: 950, max: 1250 },
      twoBed: { min: 1250, max: 1600 },
      threeBed: { min: 1600, max: 2100 },
    },
    transport: {
      walkToCentre: 15,
      tram: true,
      tramStop: "Haymarket",
      keyBusRoutes: ["X25", "X30", "3", "4", "25"],
      cyclingScore: "good",
    },
    highlights: [
      "Haymarket Station (Edinburgh–Glasgow line)",
      "Edinburgh Tram (airport in 35 mins)",
      "Growing restaurant scene on Morrison Street",
      "Easy walk to New Town and Princes Street",
      "West Coates and Murrayfield nearby for green space",
    ],
    watchOut: [
      "Traffic around the station is heavy",
      "The station brings some antisocial behaviour late at night",
      "Less of a local community feel",
      "Ongoing construction may be disruptive",
    ],
    vibes: {
      nightlife: 2,
      family: 3,
      greenSpace: 2,
      transport: 5,
      affordability: 3,
      community: 2,
    },
    councilTaxBand: "C–D (typical)",
    similarTo: ["new-town", "murrayfield", "dalry"],
  },
  {
    slug: "canonmills",
    name: "Canonmills",
    tagline: "Edinburgh's hidden gem between New Town and Leith",
    area: "north",
    description:
      "Sandwiched between the glamour of New Town and the energy of Leith, Canonmills is an underrated spot that gets both right. The Water of Leith runs through it, there's a good village atmosphere, and it's far more affordable than its neighbours.",
    longDescription:
      "Canonmills doesn't have a loud identity, which is precisely why it works. It takes the best elements of its famous neighbours — New Town's quality housing stock, Leith's community feel, Stockbridge's independent shops — without the premium price tag attached to any of them. The Water of Leith walkway runs through, connecting you on foot to Stockbridge to the west and eventually Leith to the east. Eyre Place has some excellent restaurants. The area is mostly residential, mostly quiet, and mostly pleasant. For those priced out of Stockbridge but wanting something of the same feel, Canonmills is the obvious next step.",
    color: "#0891b2",
    textColor: "#ffffff",
    emoji: "🌊",
    postcode: "EH3",
    coords: { lat: 55.9638, lng: -3.2016 },
    tags: ["professionals", "quiet", "affordable"],
    bestFor: [
      "Professionals who want New Town proximity at lower cost",
      "Couples who want peace without isolation",
      "Walkers (Water of Leith access)",
      "Those who commute north — good bus connections to Leith",
    ],
    rents: {
      studio: { min: 800, max: 1000 },
      oneBed: { min: 950, max: 1200 },
      twoBed: { min: 1200, max: 1600 },
      threeBed: { min: 1600, max: 2100 },
    },
    transport: {
      walkToCentre: 15,
      tram: false,
      keyBusRoutes: ["23", "27", "36"],
      cyclingScore: "good",
    },
    highlights: [
      "Water of Leith walkway",
      "Inverleith Park (5 min walk)",
      "Royal Botanic Garden entrance nearby",
      "Eyre Place restaurant row",
      "Quiet residential streets",
      "Easy access to both Leith and New Town",
    ],
    watchOut: [
      "Limited in-area amenities — you'll go to Stockbridge or Leith",
      "No direct tram",
      "Some busy road junctions on the boundary",
      "Lower name recognition means some guests struggle to find you",
    ],
    vibes: {
      nightlife: 2,
      family: 4,
      greenSpace: 4,
      transport: 3,
      affordability: 3,
      community: 4,
    },
    councilTaxBand: "C–D (typical)",
    similarTo: ["stockbridge", "leith", "new-town"],
  },
  {
    slug: "dean-village",
    name: "Dean Village",
    tagline: "A medieval mill village hidden in the city centre",
    area: "west",
    description:
      "One of Edinburgh's most photographed spots. Dean Village is a genuine medieval milling community tucked into the Water of Leith gorge, minutes from Princes Street. It's small, extraordinarily pretty, and very sought after.",
    longDescription:
      "Dean Village feels like a film set — a cluster of historic mill buildings beside a rushing river, surrounded by woodland, yet a 10-minute walk from Princes Street. It's one of Edinburgh's smallest and most exclusive neighbourhoods. Properties rarely come to market, and when they do, they command a premium. The Water of Leith walkway begins here, the Scottish National Gallery of Modern Art is nearby, and Stockbridge is a pleasant 5-minute stroll. It's so picturesque that it attracts photographers year-round, which can make summer mornings feel busy on the footbridge. But for those who can afford it, Dean Village offers a living experience that's almost without parallel in Scotland.",
    color: "#be185d",
    textColor: "#ffffff",
    emoji: "🌸",
    postcode: "EH4",
    coords: { lat: 55.9563, lng: -3.2168 },
    tags: ["professionals", "quiet", "historic"],
    bestFor: [
      "High earners who want something truly special",
      "Those who value beauty and quiet above all",
      "Couples looking for a long-term home",
      "Art lovers (adjacent to Scottish National Gallery of Modern Art)",
    ],
    rents: {
      studio: { min: 1000, max: 1300 },
      oneBed: { min: 1200, max: 1700 },
      twoBed: { min: 1700, max: 2400 },
      threeBed: { min: 2400, max: 3500 },
    },
    transport: {
      walkToCentre: 12,
      tram: false,
      keyBusRoutes: ["19", "36", "37"],
      cyclingScore: "fair",
    },
    highlights: [
      "The Dean Village itself (medieval mills and weir)",
      "Water of Leith gorge walks",
      "Scottish National Gallery of Modern Art",
      "Immediate Stockbridge access",
      "Extraordinary peace given proximity to centre",
    ],
    watchOut: [
      "Extremely limited supply — properties rarely come available",
      "Among the priciest in Edinburgh",
      "Steep paths and steps — not ideal for mobility issues",
      "Photographer crowds on nice days",
    ],
    vibes: {
      nightlife: 1,
      family: 3,
      greenSpace: 5,
      transport: 3,
      affordability: 1,
      community: 3,
    },
    councilTaxBand: "E–G (typical)",
    similarTo: ["stockbridge", "canonmills", "new-town"],
  },
  {
    slug: "murrayfield",
    name: "Murrayfield",
    tagline: "Affluent, spacious, and very family-oriented",
    area: "west",
    description:
      "Home to Scotland's national rugby stadium and some of Edinburgh's most prestigious addresses. Murrayfield is large-house suburban territory — wide roads, big gardens, and excellent schools. Quiet except for six weekends a year.",
    longDescription:
      "Murrayfield is Edinburgh's premium western suburb, attracting senior professionals, established families, and those who want space above all. The housing stock is mostly large detached and semi-detached villas from the Edwardian and inter-war period — significant garden space, garages, and the kind of solidity that Edinburgh's tenement-heavy areas can't offer. The main downside is obvious: on international rugby days, the entire neighbourhood is gridlocked with 67,000 fans. The local primary school is excellent, and Carrick Knowe and Murrayfield Golf Club provide local green space. The tram at Murrayfield stops gives direct access to the city centre and airport.",
    color: "#065f46",
    textColor: "#ffffff",
    emoji: "🏉",
    postcode: "EH12",
    coords: { lat: 55.9468, lng: -3.252 },
    tags: ["families", "quiet", "suburban", "professionals"],
    bestFor: [
      "Established families who want space and good schools",
      "Senior professionals who want a settled, prestigious address",
      "Those who want suburban peace with tram access",
      "Rugby fans (clearly)",
    ],
    rents: {
      studio: { min: 850, max: 1100 },
      oneBed: { min: 1050, max: 1350 },
      twoBed: { min: 1400, max: 1900 },
      threeBed: { min: 1900, max: 2800 },
    },
    transport: {
      walkToCentre: 35,
      tram: true,
      tramStop: "Murrayfield Stadium / Balgreen",
      keyBusRoutes: ["12", "26", "31"],
      cyclingScore: "fair",
    },
    highlights: [
      "Murrayfield Stadium (international events)",
      "Murrayfield Ice Rink",
      "Roseburn Park",
      "Carrick Knowe Golf Course",
      "Tram link to city centre and airport",
      "Excellent school catchment",
    ],
    watchOut: [
      "Match days (6x per year) cause significant traffic and noise",
      "Essentially car-dependent for most things",
      "Tram is efficient but pricey for daily commuting",
      "Not much in the way of restaurants or culture locally",
    ],
    vibes: {
      nightlife: 1,
      family: 5,
      greenSpace: 4,
      transport: 3,
      affordability: 2,
      community: 4,
    },
    councilTaxBand: "D–G (typical)",
    similarTo: ["corstorphine", "haymarket", "morningside"],
  },
  {
    slug: "dalry",
    name: "Dalry / Gorgie",
    tagline: "Affordable, authentic, and closer to the action than people realise",
    area: "west",
    description:
      "Dalry and Gorgie form Edinburgh's most underrated affordable belt. Close to Haymarket and Tollcross, with good cycling routes to the centre, it's where people who know Edinburgh well choose to live when budgets are tight.",
    longDescription:
      "Dalry Road and Gorgie Road aren't glamorous, but they're real. The area has longstanding working-class roots and still feels like somewhere Edinburghers rather than the tourist industry live. Tynecastle Stadium (Hearts FC) is a neighbourhood landmark. The Union Canal towpath provides excellent cycling west towards Ratho and east towards the centre. There's good bus access in every direction. The housing is mostly smaller tenements — less grand than Victorian counterparts elsewhere but decent value, often well-maintained. As gentrification pressure pushes west from Tollcross, Dalry/Gorgie is the smart early mover's area.",
    color: "#b91c1c",
    textColor: "#ffffff",
    emoji: "⚽",
    postcode: "EH11",
    coords: { lat: 55.938, lng: -3.2349 },
    tags: ["affordable", "professionals", "students"],
    bestFor: [
      "Budget-conscious renters who want good city access",
      "Cyclists (excellent canal towpath access)",
      "Hearts supporters (obviously)",
      "First-time renters in Edinburgh",
    ],
    rents: {
      studio: { min: 650, max: 800 },
      oneBed: { min: 750, max: 950 },
      twoBed: { min: 950, max: 1250 },
      threeBed: { min: 1250, max: 1600 },
    },
    transport: {
      walkToCentre: 25,
      tram: false,
      keyBusRoutes: ["3", "4", "25", "33", "44"],
      cyclingScore: "excellent",
    },
    highlights: [
      "Union Canal towpath cycling/walking",
      "Tynecastle Park (Hearts FC)",
      "Good supermarket options",
      "Close to Haymarket station",
      "Easy access to Murrayfield and Saughton Park",
    ],
    watchOut: [
      "Match days around Tynecastle can be chaotic",
      "The main road is noisy and not pretty",
      "Less restaurant choice locally — you'll go elsewhere",
      "Some streets feel quite exposed and urban",
    ],
    vibes: {
      nightlife: 2,
      family: 3,
      greenSpace: 3,
      transport: 4,
      affordability: 5,
      community: 3,
    },
    councilTaxBand: "A–C (typical)",
    similarTo: ["haymarket", "tollcross", "corstorphine"],
  },
  {
    slug: "corstorphine",
    name: "Corstorphine",
    tagline: "Family suburb with a village high street and easy airport access",
    area: "west",
    description:
      "Edinburgh Zoo is here, and it sets the neighbourhood's family-friendly tone. Corstorphine has a proper high street, good schools, and the tram to the city centre and airport. Comfortable, suburban, and entirely unpretentious.",
    longDescription:
      "Corstorphine is the kind of place people from Edinburgh proper can be slightly snobbish about, and the kind of place families who actually live here wouldn't swap. It functions as a self-contained suburban town within the city, with its own high street, library, doctors, and recreational options. Edinburgh Zoo, on the Corstorphine Hill edge, is a major employer and draws tourists without significantly affecting the residential streets. The tram provides direct links to the city centre (15 min) and the airport (10 min west). The school catchment area is strong. Housing is a mix of inter-war semi-detached and more modern suburban builds. If you're moving from a city like London or Manchester and want familiar suburban comfort, Corstorphine delivers it.",
    color: "#4d7c0f",
    textColor: "#ffffff",
    emoji: "🦒",
    postcode: "EH12",
    coords: { lat: 55.941, lng: -3.2861 },
    tags: ["families", "suburban", "quiet", "affordable"],
    bestFor: [
      "Families relocating from other UK cities",
      "Those working at or near Edinburgh Airport",
      "Couples planning to start a family",
      "Those who want to own rather than rent (good supply)",
    ],
    rents: {
      studio: { min: 750, max: 950 },
      oneBed: { min: 850, max: 1100 },
      twoBed: { min: 1100, max: 1450 },
      threeBed: { min: 1400, max: 1900 },
    },
    transport: {
      walkToCentre: 45,
      tram: true,
      tramStop: "Edinburgh Gateway / Gyle",
      keyBusRoutes: ["12", "21", "26", "31"],
      cyclingScore: "good",
    },
    highlights: [
      "Edinburgh Zoo",
      "Corstorphine Hill woodland walks",
      "Local high street with independent shops",
      "Tram to city centre and airport",
      "Quiet residential streets",
      "Good school provision",
    ],
    watchOut: [
      "A long way from Edinburgh's social scene",
      "Reliant on tram/car — not walkable to centre",
      "Less character than inner-city neighbourhoods",
      "Zoo area can be busy with tourists at weekends",
    ],
    vibes: {
      nightlife: 1,
      family: 5,
      greenSpace: 4,
      transport: 4,
      affordability: 4,
      community: 4,
    },
    councilTaxBand: "C–E (typical)",
    similarTo: ["murrayfield", "liberton", "dalry"],
  },
  {
    slug: "granton",
    name: "Granton",
    tagline: "Affordable waterfront on the verge of transformation",
    area: "north",
    description:
      "Granton is Edinburgh's most ambitious regeneration project — a former industrial harbour being transformed into a sustainable waterfront district. It's the most affordable area with sea views in Edinburgh, and the tram is coming.",
    longDescription:
      "Granton is where Edinburgh is going. The council's Waterfront Edinburgh project is one of Scotland's largest regeneration programmes, transforming 130 hectares of former gas works and industrial land into a new mixed-use quarter. Current residents get Edinburgh's most affordable rents with genuine waterfront access. The community is tight-knit — long-established residents who've lived here for decades alongside newer arrivals who spotted the opportunity. Granton Square has a small selection of local shops, and Granton Harbour is genuinely beautiful on a clear day looking across to Fife. The tram extension to Granton is planned, which will fundamentally change the area's commutability. If you can stomach being slightly ahead of the gentrification curve, this is Edinburgh's best value-for-money option.",
    color: "#475569",
    textColor: "#ffffff",
    emoji: "🏗️",
    postcode: "EH5",
    coords: { lat: 55.9782, lng: -3.225 },
    tags: ["affordable", "seaside", "creative"],
    bestFor: [
      "Budget-conscious renters who want waterfront access",
      "Those who want to be ahead of the regeneration curve",
      "People working in Leith or north Edinburgh",
      "Those who value community over amenities",
    ],
    rents: {
      studio: { min: 600, max: 750 },
      oneBed: { min: 700, max: 900 },
      twoBed: { min: 900, max: 1150 },
      threeBed: { min: 1150, max: 1500 },
    },
    transport: {
      walkToCentre: 50,
      tram: false,
      keyBusRoutes: ["8", "16", "32"],
      cyclingScore: "good",
    },
    highlights: [
      "Granton Harbour and waterfront",
      "Firth of Forth views",
      "Forthquarter Park",
      "Edinburgh's lowest rents near water",
      "Strong community spirit",
      "Planned tram extension",
    ],
    watchOut: [
      "Currently underserved by amenities — you'll travel for most things",
      "No tram yet — buses to centre take 35-50 mins",
      "Some areas feel isolated, particularly evenings",
      "Regeneration timeline is uncertain",
    ],
    vibes: {
      nightlife: 1,
      family: 3,
      greenSpace: 3,
      transport: 2,
      affordability: 5,
      community: 4,
    },
    councilTaxBand: "A–B (typical)",
    similarTo: ["trinity", "leith", "portobello"],
  },
  {
    slug: "trinity",
    name: "Trinity",
    tagline: "Quiet, residential, and surprisingly close to the Firth",
    area: "north",
    description:
      "Trinity is Edinburgh's understated north coastal suburb — a quiet grid of Victorian villas and tenements, good schools, and easy Firth of Forth access at Newhaven. Popular with families who know Edinburgh well enough to overlook its low profile.",
    longDescription:
      "Trinity sits between Granton's industrial edge and Leith's energy, and inherits the best of neither — which is actually a selling point. It's just quiet, pleasant, and residential in a way that's hard to find at this price point. The tram runs along Newhaven Road to the south, connecting to Leith and the city centre. Newhaven Harbour is a short walk, with a growing cluster of good restaurants. Trinity Academy is well-regarded. The streets are wide, tree-lined in places, and the housing is solid Victorian and inter-war stock. For families who've researched Edinburgh thoroughly, Trinity keeps appearing as an intelligent choice.",
    color: "#0f766e",
    textColor: "#ffffff",
    emoji: "⛵",
    postcode: "EH5",
    coords: { lat: 55.9693, lng: -3.2205 },
    tags: ["families", "quiet", "affordable", "suburban"],
    bestFor: [
      "Families who want quiet streets and good schools",
      "Those working in Leith or north Edinburgh",
      "People who want Firth of Forth access without Portobello prices",
      "Long-term renters looking for stability",
    ],
    rents: {
      studio: { min: 700, max: 900 },
      oneBed: { min: 850, max: 1100 },
      twoBed: { min: 1100, max: 1400 },
      threeBed: { min: 1400, max: 1800 },
    },
    transport: {
      walkToCentre: 40,
      tram: true,
      tramStop: "Newhaven",
      keyBusRoutes: ["16", "32", "7"],
      cyclingScore: "good",
    },
    highlights: [
      "Newhaven Harbour and restaurants",
      "Firth of Forth coastal path",
      "Trinity Academy (good secondary school)",
      "Quiet, leafy residential streets",
      "Tram access at Newhaven",
    ],
    watchOut: [
      "Limited in-area amenities — you'll travel to Leith",
      "Can feel isolated compared to central areas",
      "Limited nightlife within walking distance",
      "Not particularly exciting, by design",
    ],
    vibes: {
      nightlife: 1,
      family: 5,
      greenSpace: 3,
      transport: 3,
      affordability: 4,
      community: 4,
    },
    councilTaxBand: "B–C (typical)",
    similarTo: ["granton", "portobello", "canonmills"],
  },
  {
    slug: "liberton",
    name: "Liberton",
    tagline: "Spacious, suburban, and an easy route to the bypass",
    area: "south",
    description:
      "Edinburgh's southern fringe — large gardens, good schools, and quick access to the A720 bypass. Liberton is unapologetically suburban and popular with families relocating from elsewhere in the UK who want more space for their money.",
    longDescription:
      "Liberton doesn't try to be fashionable, and its residents don't want it to be. The appeal is straightforward: larger-than-average housing, good schools, green space (including Liberton Golf Club and the Braid Hills nearby), and easy road access south out of the city. For families moving from cities with large suburban housing stock, Edinburgh's Victorian tenements can feel claustrophobic. Liberton offers an antidote. The high street has the basics. Buses run to the centre but the journey is 30-40 minutes. If you work from home several days a week and need to be in town occasionally, it's an excellent balance of space and access. The King's Buildings University campus is nearby, bringing some younger residents.",
    color: "#3f6212",
    textColor: "#ffffff",
    emoji: "🏡",
    postcode: "EH16",
    coords: { lat: 55.908, lng: -3.1554 },
    tags: ["families", "suburban", "quiet", "affordable"],
    bestFor: [
      "Families moving from other UK cities who want space",
      "Remote workers who need city access a few days a week",
      "Those who want garden space at reasonable cost",
      "University staff at King's Buildings campus",
    ],
    rents: {
      studio: { min: 650, max: 800 },
      oneBed: { min: 750, max: 1000 },
      twoBed: { min: 1000, max: 1300 },
      threeBed: { min: 1300, max: 1700 },
    },
    transport: {
      walkToCentre: 50,
      tram: false,
      keyBusRoutes: ["2", "7", "8", "31"],
      cyclingScore: "fair",
    },
    highlights: [
      "Liberton Tower (historic landmark)",
      "Braid Hills access",
      "Good school provision",
      "Spacious housing at Edinburgh's lowest prices",
      "Easy bypass access for driving",
    ],
    watchOut: [
      "Long commute to centre by public transport",
      "Essentially requires a car for convenience",
      "Very limited evening economy",
      "Feels disconnected from Edinburgh's city culture",
    ],
    vibes: {
      nightlife: 1,
      family: 5,
      greenSpace: 4,
      transport: 2,
      affordability: 5,
      community: 3,
    },
    councilTaxBand: "B–D (typical)",
    similarTo: ["morningside", "corstorphine", "newington"],
  },
  {
    slug: "meadowbank",
    name: "Meadowbank",
    tagline: "Athletic, up-and-coming, and quietly excellent value",
    area: "east",
    description:
      "Home to Edinburgh's new Meadowbank Sports Centre and a short walk from Holyrood Park, this east-end neighbourhood is on the up. Good transport east and west, more affordable than nearby Leith, and increasingly attractive to young professionals.",
    longDescription:
      "Meadowbank has historically sat in the gap between more celebrated neighbourhoods — not quite the centre, not quite Portobello. But its position is actually excellent: a straight run west to the city centre, east to Portobello and the coast, and south to Arthur's Seat and Holyrood. The new Meadowbank Sports Centre (rebuilt 2023) is a major asset. London Road has good transport links. The housing is an interesting mix — some Victorian tenements, some post-war housing, and newer builds near the sports centre. Rents are notably lower than Leith for comparable properties, which makes it an obvious call for value-hunters who've done their homework.",
    color: "#a16207",
    textColor: "#ffffff",
    emoji: "🏃",
    postcode: "EH7",
    coords: { lat: 55.9563, lng: -3.1615 },
    tags: ["professionals", "affordable", "lively"],
    bestFor: [
      "Sports-oriented residents",
      "Young professionals who want Leith access at lower cost",
      "Cyclists (excellent east-west routes)",
      "Those who regularly visit Holyrood Park",
    ],
    rents: {
      studio: { min: 700, max: 850 },
      oneBed: { min: 850, max: 1050 },
      twoBed: { min: 1050, max: 1350 },
      threeBed: { min: 1350, max: 1700 },
    },
    transport: {
      walkToCentre: 20,
      tram: false,
      keyBusRoutes: ["4", "5", "15", "26", "44"],
      cyclingScore: "excellent",
    },
    highlights: [
      "Meadowbank Sports Centre",
      "Holyrood Park and Arthur's Seat (walking distance)",
      "London Road Gardens",
      "Good east-west cycling routes",
      "Easy access to Leith",
      "Growing number of local cafés",
    ],
    watchOut: [
      "London Road itself is a major arterial road — noisy",
      "Fewer amenities than Leith or the centre",
      "Some parts feel transitional and unloved",
      "Limited evening options locally",
    ],
    vibes: {
      nightlife: 2,
      family: 3,
      greenSpace: 4,
      transport: 4,
      affordability: 4,
      community: 3,
    },
    councilTaxBand: "B–C (typical)",
    similarTo: ["leith", "portobello", "newington"],
  },
];

export function getNeighbourhood(slug: string): Neighbourhood | undefined {
  return NEIGHBOURHOODS.find((n) => n.slug === slug);
}

export function getNeighbourhoodsByArea(area: AreaOfCity): Neighbourhood[] {
  return NEIGHBOURHOODS.filter((n) => n.area === area);
}

export function getSimilarNeighbourhoods(neighbourhood: Neighbourhood): Neighbourhood[] {
  return neighbourhood.similarTo
    .map((slug) => getNeighbourhood(slug))
    .filter((n): n is Neighbourhood => n !== undefined);
}

export function avgRent(n: Neighbourhood): number {
  const { min, max } = n.rents.oneBed;
  return Math.round((min + max) / 2);
}

export const AREA_LABELS: Record<AreaOfCity, string> = {
  north: "North",
  south: "South",
  east: "East",
  west: "West",
  centre: "Centre",
};

export const LIFESTYLE_LABELS: Record<LifestyleTag, string> = {
  students: "Students",
  families: "Families",
  professionals: "Professionals",
  creative: "Creative",
  historic: "Historic",
  quiet: "Quiet",
  lively: "Lively",
  affordable: "Affordable",
  seaside: "Seaside",
  suburban: "Suburban",
};
