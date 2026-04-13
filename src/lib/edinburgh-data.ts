// ─── Edinburgh Stats ──────────────────────────────────────────────────────────
export const EDINBURGH_STATS = {
  homelessness: {
    stat: "28,400",
    label: "Housing Waitlist",
    detail: "Households on Edinburgh's social housing register — a 12-year high.",
  },
  poverty: {
    stat: "19%",
    label: "Child Poverty",
    detail: "1 in 5 children in Edinburgh lives in relative poverty.",
  },
  rentRise: {
    stat: "14.7%",
    label: "Rent Increase",
    detail: "Average private rent rise in Edinburgh 2022–23, well above inflation.",
  },
};

// ─── Crisis Helplines ─────────────────────────────────────────────────────────
export const CRISIS_HELPLINES = [
  { title: "Emergency Services", desc: "Life-threatening emergency — police, ambulance, fire.", num: "999", urgent: true },
  { title: "NHS 24", desc: "Urgent medical or mental health advice, 24/7.", num: "111", urgent: true },
  { title: "Edinburgh Crisis Centre", desc: "Mental health crisis support, 24/7, free, confidential.", num: "0808 801 0414", urgent: true },
  { title: "Breathing Space", desc: "Scotland's mental health helpline — evenings and weekends.", num: "0800 83 85 87", urgent: false },
  { title: "Samaritans", desc: "Free, confidential listening support, any time.", num: "116 123", urgent: false },
  { title: "Shelter Scotland", desc: "Free housing and homelessness advice.", num: "0808 800 4444", urgent: true },
  { title: "Scotland's Domestic Abuse Helpline", desc: "Free, 24/7, for anyone experiencing domestic abuse.", num: "0800 027 1234", urgent: true },
  { title: "City of Edinburgh Council Housing", desc: "Housing emergency out-of-hours service.", num: "0131 200 2000", urgent: true },
  { title: "Police Scotland (Non-Emergency)", desc: "Non-urgent police matters.", num: "101", urgent: false },
  { title: "CALM (Men in Crisis)", desc: "Free helpline for men in distress.", num: "0800 58 58 58", urgent: false },
  { title: "Papyrus (Under 35s)", desc: "Suicide prevention for young people.", num: "0800 068 41 41", urgent: false },
  { title: "Frank (Drug Advice)", desc: "Free, confidential drugs information.", num: "0300 123 6600", urgent: false },
];

// ─── Crisis Organisations ─────────────────────────────────────────────────────
export const CRISIS_ORGS = [
  {
    name: "Edinburgh Crisis Centre",
    focus: "Mental health crisis, 24/7, no referral needed",
    address: "Available by phone and via crisis cafés across Edinburgh",
    hours: "Phone line: 24/7 | Crisis cafés: evenings",
    num: "0808 801 0414",
    link: "https://www.penumbra.org.uk/services/edinburgh-crisis-centre/",
    urgent: true,
  },
  {
    name: "Shelter Scotland Edinburgh",
    focus: "Housing advice, homelessness, tenant rights",
    address: "97 McDonald Road, Edinburgh, EH7 4NJ",
    hours: "Mon–Fri 9am–5pm. Helpline: Mon–Fri 9am–5pm.",
    num: "0808 800 4444",
    link: "https://scotland.shelter.org.uk/",
    urgent: true,
  },
  {
    name: "Edinburgh Housing Advice Partnership (EHAP)",
    focus: "Free housing advice and representation for Edinburgh residents",
    address: "Norton Park, 57 Albion Road, Edinburgh, EH7 5QY",
    hours: "Mon–Fri 9am–5pm",
    num: "0131 538 8222",
    link: "https://www.edinburghhousing.org.uk/",
    urgent: false,
  },
  {
    name: "Cyrenians",
    focus: "Homelessness support, food bank, supported housing",
    address: "Norton Park, 57 Albion Road, Edinburgh, EH7 5QY",
    hours: "Mon–Fri 9am–5pm",
    num: "0131 475 2354",
    link: "https://www.cyrenians.scot/",
    urgent: false,
  },
  {
    name: "Women's Aid Edinburgh",
    focus: "Domestic abuse support, safe housing, advocacy",
    address: "Confidential location",
    hours: "Mon–Fri 9am–5pm | Helpline extended hours",
    num: "0131 315 8110",
    link: "https://www.edinburghwomensaid.org.uk/",
    urgent: true,
  },
  {
    name: "Bethany Christian Trust",
    focus: "Homelessness, food bank, community care",
    address: "Bethany House, 6 Casselbank Street, Leith, EH6 5HA",
    hours: "Mon–Fri 9am–5pm",
    num: "0131 561 8930",
    link: "https://www.bethanychristiantrust.com/",
    urgent: false,
  },
  {
    name: "Citizens Advice Edinburgh",
    focus: "Free legal, debt, benefits, housing and employment advice",
    address: "58 Dundas Street, Edinburgh, EH3 6QZ",
    hours: "Mon–Fri 9am–5pm. Drop-in available.",
    num: "0131 557 1500",
    link: "https://www.citizensadviceedinburgh.org.uk/",
    urgent: false,
  },
];

// ─── Crisis Scenarios ─────────────────────────────────────────────────────────
export const CRISIS_SCENARIOS = [
  {
    title: "If you are homeless tonight",
    color: "#fef2f2",
    border: "#ef4444",
    emoji: "🏠",
    steps: [
      "Call City of Edinburgh Council Housing out-of-hours: 0131 200 2000 — they have a 24/7 duty.",
      "Tell them you have nowhere safe to sleep tonight. They have a legal duty to assess you (Housing (Scotland) Act 1987, as amended).",
      "If you are rough sleeping, contact Streetwork Edinburgh by calling 0131 553 5880.",
      "Shelter Scotland can advise you on your rights: 0808 800 4444 (Mon–Fri 9am–5pm).",
      "Edinburgh Housing Advice Partnership (EHAP) offer same-day emergency appointments: 0131 538 8222.",
    ],
  },
  {
    title: "If you are fleeing domestic abuse",
    color: "#fdf4ff",
    border: "#a855f7",
    emoji: "💜",
    steps: [
      "If in immediate danger, call 999.",
      "Call Scotland's Domestic Abuse and Forced Marriage Helpline (free, 24/7): 0800 027 1234.",
      "Contact Women's Aid Edinburgh: 0131 315 8110 — they can help you access safe housing urgently.",
      "Under the Domestic Abuse (Protection) (Scotland) Act 2021, police can issue immediate protection orders.",
      "You have automatic priority for temporary accommodation. The council cannot make you return home.",
      "Saheliya supports BAME women experiencing abuse: 0131 622 7055.",
    ],
  },
  {
    title: "If you are in a mental health crisis",
    color: "#f0f9ff",
    border: "#2563eb",
    emoji: "🧠",
    steps: [
      "Call the Edinburgh Crisis Centre (free, 24/7): 0808 801 0414. Staffed by trained mental health workers.",
      "Call Breathing Space (evenings and weekends, free): 0800 83 85 87.",
      "Call Samaritans any time, for free: 116 123.",
      "Go to Royal Infirmary of Edinburgh A&E if you believe your life is at risk.",
      "NHS 24 (111) can connect you to out-of-hours mental health support.",
      "For under-35s at risk of suicide: Papyrus helpline 0800 068 41 41.",
    ],
  },
];

// ─── Legal Rights (Scotland) ──────────────────────────────────────────────────
export const LEGAL_RIGHTS = [
  {
    title: "Right to Assessment (Housing (Scotland) Act 1987)",
    body: "If you are homeless or at risk of becoming homeless within 2 months, the City of Edinburgh Council has a legal duty to assess your case. They cannot turn you away without a full assessment. Request a written decision if refused so you can appeal.",
  },
  {
    title: "No-Fault Eviction is Banned in Scotland",
    body: "Unlike England, landlords in Scotland cannot evict you without proving one of 18 legal grounds (Housing (Scotland) Act 1988, as amended by the Private Housing (Tenancies) (Scotland) Act 2016). No Ground 21 (landlord wants property back) exists here.",
  },
  {
    title: "Minimum Notice Periods",
    body: "Landlords must give you at least 28 days notice (if you've lived there under 6 months) or 84 days notice (over 6 months) to start an eviction process. Even then, they must apply to the First-tier Tribunal. Illegal eviction is a criminal offence.",
  },
  {
    title: "Right to Repairs (Housing (Scotland) Act 2006)",
    body: "Your landlord must maintain the property to the Repairing Standard: structurally sound, wind and watertight, safe electrical and gas installations, working heating and hot water. Report failures in writing and they must respond promptly.",
  },
  {
    title: "Local Connection Rule (Edinburgh)",
    body: "To be assessed as a local connection to Edinburgh, you need to have lived here for 6 of the last 12 months, or 3 of the last 5 years, OR have employment or close family here. However, if you are fleeing abuse, local connection rules cannot be used against you.",
  },
  {
    title: "Right to Request a Review",
    body: "If Edinburgh Council makes a decision you disagree with — such as classifying you as intentionally homeless or not in priority need — you have 21 days to request a formal review. Always get decisions in writing. Citizens Advice Edinburgh can help you appeal.",
  },
];

// ─── Health ───────────────────────────────────────────────────────────────────
export const HEALTH_SERVICES = [
  { name: "Find Your Nearest GP (NHS Lothian)", focus: "Primary care registration", action: "Search NHS Inform", link: "https://www.nhsinform.scot/find-a-gp" },
  { name: "Royal Infirmary of Edinburgh", focus: "A&E, major injuries, serious illness", action: "Little France, EH16 4SA", link: "https://www.nhslothian.scot/" },
  { name: "Western General Hospital", focus: "A&E, cancer services, neurology", action: "Crewe Road South, EH4 2XU", link: "https://www.nhslothian.scot/" },
  { name: "Lauriston Building (MIU)", focus: "Minor injuries — faster than A&E for cuts, sprains", action: "Lauriston Place, EH3 9YW", link: "https://www.nhslothian.scot/" },
  { name: "NHS Lothian Mental Health", focus: "Community Mental Health Teams (CMHT)", action: "Contact via GP referral", link: "https://www.nhslothian.scot/OurServices/MentalHealth/" },
  { name: "CAPS (Mental Health Advocacy)", focus: "Free independent advocacy for mental health patients", action: "0131 260 8861", link: "https://www.capsadvocacy.org/" },
];

export const HEALTH_FACTS = [
  { title: "Prescriptions are FREE in Scotland", body: "Unlike England, ALL NHS prescriptions in Scotland are free. This has been the case since 2011. You do not need to pay for any prescribed medication regardless of your income." },
  { title: "How to Register with a GP", body: "Find your nearest GP practice at nhsinform.scot/find-a-gp. Contact them directly — most accept registrations by phone or online. You have the right to register even without proof of address. If refused, contact NHS Lothian on 0131 536 9000." },
  { title: "Free NHS Dental in Scotland", body: "Dental treatment is free for: under 18s, pregnant women, new mothers (up to 12 months after birth), and those receiving certain benefits. All others pay NHS charges (reduced vs England). Find an NHS dentist at nhsinform.scot." },
  { title: "Your Rights as a Patient", body: "The Patient Rights (Scotland) Act 2011 gives you the right to be involved in healthcare decisions, access your records, and be treated with dignity. The 18-week Treatment Time Guarantee means most treatment should start within 18 weeks of referral." },
  { title: "Mental Health Rights", body: "The Mental Health (Care and Treatment) (Scotland) Act 2003 sets out strong patient rights. CAPS (0131 260 8861) provides free independent advocacy for anyone subject to a compulsory treatment order or informal admission." },
];

// ─── Housing ──────────────────────────────────────────────────────────────────
export const HOUSING_PLATFORMS = [
  { name: "ESPC", desc: "Edinburgh's primary property portal — buying and renting. Scottish solicitors list here first.", link: "https://www.espc.com/property/rent/edinburgh/" },
  { name: "Rightmove", desc: "UK-wide — major letting agents list here.", link: "https://www.rightmove.co.uk/property-to-rent/Edinburgh.html" },
  { name: "Zoopla", desc: "Alternative to Rightmove with some additional listings.", link: "https://www.zoopla.co.uk/to-rent/property/edinburgh/" },
  { name: "Lettingweb", desc: "Scotland-specific platform with strong Edinburgh coverage.", link: "https://www.lettingweb.com/" },
  { name: "SpareRoom", desc: "Best for room shares and HMO flat shares.", link: "https://www.spareroom.co.uk/flatshare/edinburgh" },
  { name: "OpenRent", desc: "Landlord-direct platform — often cheaper, no agency fees.", link: "https://www.openrent.co.uk/properties-to-rent/edinburgh" },
];

export const HOUSING_RENTAL_PRICES = [
  { type: "Room (shared flat)", min: 600, max: 900 },
  { type: "Studio / bedsit", min: 700, max: 1050 },
  { type: "1-bedroom flat", min: 800, max: 1600 },
  { type: "2-bedroom flat", min: 1100, max: 2200 },
  { type: "3-bedroom flat", min: 1500, max: 3000 },
];

export const TENANT_RIGHTS = [
  { title: "Private Residential Tenancy (PRT)", body: "Since December 2017, all new private tenancies in Scotland use a PRT. There is no fixed end date — you can stay as long as you want and only a valid legal ground can end the tenancy. Your security is far stronger than in England." },
  { title: "Deposit Protection", body: "Your landlord must protect your deposit with one of three approved schemes within 30 working days of receipt: SafeDeposits Scotland, Letting Protection Service Scotland, or mydeposits Scotland. Failure is a criminal offence. You can reclaim up to 3× the deposit if it wasn't protected." },
  { title: "Rent Increase Rules", body: "In a PRT, rent can only be increased once per 12-month period and you must receive 3 months notice in writing. You have the right to refer any increase you think is above market rate to a Rent Officer for independent adjudication." },
  { title: "Repairing Standard", body: "Your landlord must ensure the property meets the Repairing Standard (Housing (Scotland) Act 2006): structurally sound, wind/watertight, safe installations, working heating and hot water. Report failures in writing, and if unresolved, refer to the First-tier Tribunal." },
  { title: "Notice to Leave", body: "To end your tenancy, give at least 28 days notice in writing (if living there under 6 months) or 84 days (over 6 months). Your landlord must give the same notice periods (28 or 84 days) plus prove one of 18 legal grounds before applying to the Tribunal." },
  { title: "HMO Licensing", body: "If you live in a shared flat with 3+ unrelated people, the landlord must hold an HMO licence from the City of Edinburgh Council. An unlicensed HMO is illegal. You can check the council's HMO register online. If unlicensed, report it." },
];

export const TENANT_FAQS = [
  {
    q: "What documents should I get before moving in?",
    a: "You should receive a Private Residential Tenancy (PRT) agreement, a written inventory with photos, deposit scheme details, and the landlord or agent's registration number. Keep copies of everything.",
  },
  {
    q: "How much notice do I need to give to leave?",
    a: "Under a PRT you give 28 days notice if you've lived there under 6 months, or 84 days if you've lived there longer. Give notice in writing and keep proof.",
  },
  {
    q: "Can my landlord enter the property whenever they want?",
    a: "No. They must give at least 24 hours notice and get your permission to enter, unless there is an emergency.",
  },
  {
    q: "How do I check if my landlord is registered?",
    a: "Search the Scottish Landlord Register at landlordregistrationscotland.gov.uk. Letting a property without registration is illegal.",
  },
  {
    q: "Are letting agent fees legal in Scotland?",
    a: "No. Letting agent fees charged to tenants are illegal in Scotland. If you are asked to pay fees, report it to Trading Standards.",
  },
];

// ─── Tenant Guide Q&As ───────────────────────────────────────────────────────
export const TENANT_GUIDE_SECTIONS: Array<{
  category: string;
  emoji: string;
  colour: string;
  titleColour: string;
  questions: Array<{ q: string; a: string; action?: { label: string; url: string } }>;
}> = [
  {
    category: "Legal & Registration",
    emoji: "⚖️",
    colour: "bg-blue-50 border-blue-200",
    titleColour: "text-blue-900",
    questions: [
      {
        q: "How do I check if my landlord is legally registered?",
        a: "In Scotland, all landlords must be registered with their local council — it is a legal requirement. Unregistered landlords cannot legally let property. You can search the Scottish Landlord Register for free using your landlord's name or address. If they are not registered, report them to Edinburgh Council's Private Sector Housing team.",
        action: { label: "Search Scottish Landlord Register", url: "https://www.landlordregistrationscotland.gov.uk/" },
      },
      {
        q: "Which deposit protection scheme should my money be in?",
        a: "By law, your landlord must lodge your deposit with one of three approved third-party schemes within 30 working days of receiving it: SafeDeposits Scotland, Letting Protection Service Scotland (LPSS), or mydeposits Scotland. Your landlord must give you written confirmation of which scheme holds your deposit and your unique reference number. If they fail to protect it, you can claim up to 3× the deposit amount at the First-tier Tribunal — and it is a criminal offence.",
        action: { label: "Check SafeDeposits Scotland", url: "https://www.safedepositsscotland.com/" },
      },
      {
        q: "Can my landlord increase my rent, and how often?",
        a: "Under the Private Residential Tenancy (PRT), rent can only be increased once in any 12-month period. Your landlord must give you at least 3 months' written notice of any increase. If you believe the increase is above market rate, you have the right to refer it to a Rent Officer (Rent Service Scotland) for independent adjudication — at no cost to you. The Rent Officer's decision is binding.",
        action: { label: "Challenge a rent increase — Rent Service Scotland", url: "https://www.rpagehomes.co.uk/" },
      },
      {
        q: "What is an HMO and why does it matter?",
        a: "A House in Multiple Occupation (HMO) is a property where 3 or more unrelated people share facilities like a kitchen or bathroom. In Scotland, HMOs require a mandatory licence from Edinburgh Council's Licensing Board. Renting an unlicensed HMO is illegal and can mean the property is unsafe. You can check the Edinburgh HMO register online. If you are living in an unlicensed HMO, you can report it — and your landlord cannot legally evict you for doing so.",
        action: { label: "Check Edinburgh HMO Register", url: "https://www.edinburgh.gov.uk/licences-permits/hmo-licences" },
      },
      {
        q: "Is it legal for a letting agent to charge me a holding fee?",
        a: "No — this is illegal in Scotland. Under the Tenancy Fees (Scotland) Act 2012, letting agents cannot charge tenants any fees, including holding fees, admin fees, credit check fees, or reference fees. If you are asked to pay any fee before or during a tenancy (other than your deposit and first month's rent), report the agent to Trading Standards or the First-tier Tribunal. You may be entitled to a refund.",
        action: { label: "Report to Trading Standards — Edinburgh Council", url: "https://www.edinburgh.gov.uk/trading-standards" },
      },
    ],
  },
  {
    category: "Bills & Energy Efficiency",
    emoji: "💡",
    colour: "bg-amber-50 border-amber-200",
    titleColour: "text-amber-900",
    questions: [
      {
        q: "What is the EPC rating and why should I care?",
        a: "The Energy Performance Certificate (EPC) rates a property's energy efficiency from A (most efficient) to G (least). This directly affects your heating bills. Edinburgh has many older stone tenement buildings, which can be draughty and expensive to heat. Properties rated D or below will cost noticeably more to heat through a Scottish winter. Landlords must have a valid EPC and show it to you. Properties let to new tenants must be EPC rated E or above — though proposals to raise this to C are under discussion.",
        action: { label: "Check EPC rating for any property", url: "https://www.scottishepcregister.org.uk/" },
      },
      {
        q: "What is the difference between gas central heating and storage heaters?",
        a: "This matters a lot in Edinburgh. Gas central heating is far cheaper and easier to control — you can turn it on and off as needed. Electric storage heaters charge overnight on cheaper off-peak electricity and release heat during the day — but you have limited control over when heat is released, and they can leave you cold in the evening. Many older Edinburgh flats have storage heaters; if so, factor in significantly higher winter energy bills. Always ask the heating type before viewing.",
      },
      {
        q: "What is the Council Tax band and how much will I pay?",
        a: "Edinburgh properties are in Council Tax bands A–H based on their 1991 valuation. Edinburgh's rates are: Band A (£973/year), Band B (£1,136), Band C (£1,298), Band D (£1,460), Band E (£1,825), Band F (£2,190), Band G (£2,555), Band H (£3,121). Most Edinburgh flats are Band C or D. Check the band before committing. Full-time students pay nothing; single occupants get a 25% discount. Low-income tenants can apply for Council Tax Reduction.",
        action: { label: "Check your band — Scottish Assessors", url: "https://www.saa.gov.uk/" },
      },
    ],
  },
  {
    category: "Maintenance & Repairs",
    emoji: "🔧",
    colour: "bg-emerald-50 border-emerald-200",
    titleColour: "text-emerald-900",
    questions: [
      {
        q: "What is a 'Factor' and who handles the stair cleaning?",
        a: "Most Edinburgh flats are in shared tenements where common areas (stairs, close, garden) are shared. A 'Factor' is a property management company that maintains and insures communal areas — paid for by the flat owners (factoring fees). As a tenant, you are not usually responsible for factoring fees — ask your landlord. If there is no Factor, flat owners typically have a rotation for stair cleaning. Ask your landlord specifically: 'Who cleans the stair/close, and is there a Factor?' before signing.",
      },
      {
        q: "How quickly must my landlord fix repairs, and what if they don't?",
        a: "Under the Repairing Standard (Housing (Scotland) Act 2006), your landlord must keep the property wind and watertight, with working heating, hot water, plumbing, electrical systems, and appliances they supplied. For emergency repairs (no heating in winter, burst pipe, gas leak), they must respond within 24 hours. For urgent repairs, within a few days. For routine repairs, within a reasonable period. If your landlord refuses or delays, you can apply to the First-tier Tribunal for Scotland (Housing and Property Chamber) — for free — to compel them to make repairs.",
        action: { label: "Apply to First-tier Tribunal (free)", url: "https://www.housingandpropertychamber.scot/" },
      },
      {
        q: "Should I be worried about damp and mould?",
        a: "Yes — this is one of the most common issues in Edinburgh's older stone tenements. Signs to look for: watermarks, dark patches on walls/ceilings, musty smell, soft or flaking plaster, condensation on windows in mild weather. Since February 2023, the Repairing Standard explicitly covers damp and mould — landlords must deal with it. Before viewing, look at corners of rooms, behind wardrobes, and around window frames. Fresh paint in unusual places can mask recent issues. If you develop damp after moving in, report it in writing and keep all correspondence.",
      },
    ],
  },
  {
    category: "Lifestyle & Practicalities",
    emoji: "🏠",
    colour: "bg-purple-50 border-purple-200",
    titleColour: "text-purple-900",
    questions: [
      {
        q: "Can I negotiate a pet-friendly agreement?",
        a: "Many Edinburgh leases have 'no pets' clauses, but you can negotiate — especially for smaller, quiet pets. In Scotland, there is a total deposit limit of 2 months' rent (you cannot be charged extra for having a pet beyond this cap). Approach the landlord or agent before signing: offer to provide references from previous properties, and offer professional cleaning at the end of the tenancy. Some landlords will agree in writing. Always get any pet permission confirmed in writing — verbal agreements are harder to enforce.",
      },
      {
        q: "What does 'unfurnished' actually mean in Edinburgh?",
        a: "'Unfurnished' in Edinburgh almost always still includes white goods — fridge/freezer, washing machine, and cooker/oven. What it typically does NOT include: beds, sofas, wardrobes, desks, or any other furniture. 'Part-furnished' usually means some furniture is included. 'Fully furnished' means everything. Always ask exactly what the inventory includes before viewing, and insist on a written inventory with photos when you move in — this is your protection at the end of the tenancy when the deposit is disputed.",
      },
      {
        q: "What are the typical neighbours like? How noisy will it be?",
        a: "This varies significantly by area. Marchmont, Newington, and Tollcross have large student populations — expect more noise mid-week and weekends, especially September to June. Leith, Bruntsfield, and Morningside tend to be more mixed professional/family. Stockbridge and the New Town are generally quieter. For any property, visit at different times of day before committing. Check how thick the walls and floors are — Edinburgh tenement floors and thin partitions carry sound easily. Ask the current tenants if possible.",
      },
    ],
  },
  {
    category: "The Application Process",
    emoji: "📋",
    colour: "bg-rose-50 border-rose-200",
    titleColour: "text-rose-900",
    questions: [
      {
        q: "How fast does Edinburgh's rental market move?",
        a: "Extremely fast — Edinburgh is consistently one of the UK's most competitive rental markets. Good properties are typically let within 24–72 hours. For popular areas like Leith Walk, Marchmont, or Bruntsfield, offers can come within hours of listing. To compete: have a reference from your current landlord ready before you start looking, know your guarantor (if needed), have 1 month's deposit cash available, and be ready to sign the same day as viewing. Set up alerts on ESPC, Rightmove, and Zoopla immediately.",
      },
      {
        q: "What references will I need?",
        a: "Standard Edinburgh rental references: (1) Previous landlord reference — contact details for your current or last landlord to confirm you paid on time and kept the property well. (2) Employment/income reference — payslips (usually 3 months) or employer letter confirming salary and permanency. (3) Credit check — most agents run this via Let Alliance or Homelet. For self-employed or those without a UK credit history, a guarantor (UK-based, homeowner) is often required. Students typically need a parental guarantor.",
      },
      {
        q: "What is a pre-viewing checklist for Edinburgh properties?",
        a: "Before viewing: check the EPC rating (ask the agent), check the landlord registration number (search landlordregistrationscotland.gov.uk), check the Council Tax band (saa.gov.uk), and check if it is an HMO (edinburgh.gov.uk/hmo). During the viewing: test all heating and hot water, check for damp in corners and behind furniture, check for mobile signal and broadband availability (key for tenements), ask about the Factor and stair cleaning arrangement, ask about parking and bin storage. After viewing: ask for a copy of the inventory before you sign anything.",
      },
    ],
  },
];

export const SOCIAL_HOUSING = [
  { title: "Edinburgh Housing Register", body: "Apply at edinburgh.gov.uk/housing. You'll be assessed and assigned a priority band (A–D). Band A = most urgent. Average wait for Band C is 3–8 years for a 1-bed in popular areas. Band A cases can be housed much faster." },
  { title: "Housing Associations in Edinburgh", body: "Dunedin Canmore, Link Housing, Castle Rock Edinvar, Hillcrest, and Wheatley Group all operate in Edinburgh. You can apply to their waiting lists independently alongside the council register." },
  { title: "Common Housing Register (CHR)", body: "Edinburgh's CHR allows a single application to access both council and housing association properties. Apply online at edinburgh.gov.uk/chr." },
  { title: "Priority Bands", body: "Band A: statutory homeless, serious medical need, severely overcrowded. Band B: less urgent housing need. Band C: general housing need with some priority factor. Band D: general housing need. Medical/social assessments can move you up." },
];

// ─── Employment ───────────────────────────────────────────────────────────────
export const JOB_LISTINGS = [
  { id: 1, title: "Support Worker", org: "Cyrenians", type: "Full-time", link: "https://www.cyrenians.scot/jobs" },
  { id: 2, title: "Community Development Officer", org: "City of Edinburgh Council", type: "Full-time", link: "https://www.edinburgh.gov.uk/jobs" },
  { id: 3, title: "Café Volunteer", org: "Bethany Christian Trust", type: "Volunteer", link: "https://www.bethanychristiantrust.com/get-involved/" },
  { id: 4, title: "Retail Assistant", org: "Ocean Terminal, Leith", type: "Part-time", link: "https://www.oceanterminal.com/" },
  { id: 5, title: "Tourism & Visitor Services", org: "VisitScotland", type: "Seasonal", link: "https://www.visitscotland.com/jobs" },
];

export const TRAINING_PROVIDERS = [
  { name: "Skills Development Scotland", desc: "My World of Work platform — free career planning, skills assessment, training finder.", link: "https://www.myworldofwork.co.uk/" },
  { name: "Edinburgh College", desc: "Free and funded courses across the city — Granton, Midlothian, Milton Road and Sighthill campuses.", link: "https://www.edinburghcollege.ac.uk/" },
  { name: "Developing the Young Workforce (DYW)", desc: "Work experience, apprenticeships, and employer connections for 16–24 year olds.", link: "https://www.dyw-edinburgh.co.uk/" },
  { name: "Volunteer Edinburgh", desc: "Volunteering opportunities across Edinburgh — great for building CVs and networks.", link: "https://www.volunteeredinburgh.org.uk/" },
  { name: "Business Gateway Edinburgh", desc: "Free advice and workshops for people starting or growing a business in Edinburgh.", link: "https://www.bgateway.com/local-offices/edinburgh" },
];

export const SCOTTISH_BENEFITS = [
  { name: "Scottish Child Payment", amount: "£26.70/week", desc: "Per eligible child under 16. No application cap — claim for every child who qualifies.", link: "https://www.mygov.scot/scottish-child-payment" },
  { name: "Best Start Grant", amount: "Up to £707.25", desc: "Pregnancy & Baby Payment, Early Learning Payment, School Age Payment. For low-income families.", link: "https://www.mygov.scot/best-start-grant-best-start-foods" },
  { name: "Adult Disability Payment (ADP)", amount: "£28.70–£184.30/week", desc: "Scotland's replacement for PIP — assessed by Social Security Scotland, not DWP.", link: "https://www.mygov.scot/adult-disability-payment" },
  { name: "Child Disability Payment (CDP)", amount: "£28.70–£184.30/week", desc: "Scotland's replacement for Disability Living Allowance for under-18s.", link: "https://www.mygov.scot/child-disability-payment" },
  { name: "Scottish Welfare Fund", amount: "Varies", desc: "Emergency crisis grants and community care grants for essential items. Apply via Edinburgh Council.", link: "https://www.edinburgh.gov.uk/benefits-support/scottish-welfare-fund" },
  { name: "Carers Allowance Supplement", amount: "£288.60 twice/year", desc: "Extra payment for Scottish carers already receiving UK Carers Allowance.", link: "https://www.mygov.scot/carers-allowance-supplement" },
  { name: "Young Carer Grant", amount: "£383.75/year", desc: "For 16–18 year olds caring for a family member for 16+ hours per week.", link: "https://www.mygov.scot/young-carer-grant" },
  { name: "Job Start Payment", amount: "£314.45 or £524.05", desc: "One-off payment for 16–24 year olds (or care experienced up to 25) starting their first job.", link: "https://www.mygov.scot/job-start-payment" },
];

// ─── Environment ──────────────────────────────────────────────────────────────
export const EDINBURGH_BIN_GUIDE = [
  { bin: "Blue (Recycling)", contents: ["Paper and cardboard", "Plastic bottles and containers", "Glass bottles and jars", "Tins and cans", "Cartons and juice boxes"], not: ["Plastic bags", "Polystyrene", "Food waste", "Nappies"] },
  { bin: "Green (Food/Garden Waste)", contents: ["All food waste (cooked and raw)", "Garden waste — grass, leaves, small branches", "Compostable bags"], not: ["Plastic of any kind", "Glass", "Metal", "General rubbish"] },
  { bin: "Grey (General Waste)", contents: ["Everything that cannot be recycled", "Nappies and hygiene products", "Broken glass (wrapped)", "Vacuum cleaner bags"], not: ["Recyclables", "Food waste", "Electronic items", "Batteries"] },
];

export const RECYCLING_CENTRES = [
  { name: "Seafield Household Waste Recycling Centre", address: "Marine Esplanade, Edinburgh, EH6 7LT", hours: "Mon–Fri 8am–6pm | Sat–Sun 8am–4pm", link: "https://www.edinburgh.gov.uk/recyclingcentres" },
  { name: "Sighthill Household Waste Recycling Centre", address: "Bankhead Medway, Edinburgh, EH11 4BY", hours: "Mon–Fri 8am–6pm | Sat–Sun 8am–4pm", link: "https://www.edinburgh.gov.uk/recyclingcentres" },
  { name: "Easter Road Household Waste Recycling Centre", address: "Easter Road, Edinburgh, EH7 5RQ", hours: "Mon–Fri 8am–6pm | Sat–Sun 8am–4pm", link: "https://www.edinburgh.gov.uk/recyclingcentres" },
];

// ─── Community Locations (Map) ────────────────────────────────────────────────
export const MAP_LOCATIONS = [
  { name: "Edinburgh Central Library", lat: 55.9472, lng: -3.1929, category: "library", emoji: "📚", note: "Free internet, meeting rooms, local history collection", address: "George IV Bridge, EH1 1EG" },
  { name: "McDonald Road Library", lat: 55.9607, lng: -3.1805, category: "library", emoji: "📚", note: "Broughton area — digital skills classes", address: "McDonald Road, EH7 4LX" },
  { name: "Leith Library", lat: 55.975, lng: -3.1744, category: "library", emoji: "📚", note: "Leith's main library — job search support", address: "28–30 Ferry Road, EH6 4AE" },
  { name: "Wester Hailes Library", lat: 55.9185, lng: -3.2761, category: "library", emoji: "📚", note: "West Edinburgh — community learning hub", address: "1 West Side Plaza, EH14 2FT" },
  { name: "Portobello Library", lat: 55.9527, lng: -3.1142, category: "library", emoji: "📚", note: "Local history, children's section, free Wi-Fi", address: "14 Rosefield Avenue, EH15 1AU" },
  { name: "Royal Infirmary of Edinburgh", lat: 55.9217, lng: -3.135, category: "health", emoji: "🏥", note: "Major A&E, trauma centre", address: "51 Little France Crescent, EH16 4SA" },
  { name: "Western General Hospital", lat: 55.9618, lng: -3.2272, category: "health", emoji: "🏥", note: "A&E, oncology, neurosciences", address: "Crewe Road South, EH4 2XU" },
  { name: "Lauriston Building (MIU)", lat: 55.9423, lng: -3.2019, category: "health", emoji: "🩺", note: "Minor Injuries Unit — no A&E wait for cuts, sprains, burns", address: "Lauriston Place, EH3 9YW" },
  { name: "Cyrenians", lat: 55.9597, lng: -3.1629, category: "community", emoji: "🤲", note: "Homelessness support, food bank", address: "Norton Park, 57 Albion Road, EH7 5QY" },
  { name: "Citizens Advice Edinburgh", lat: 55.9622, lng: -3.2031, category: "community", emoji: "🤲", note: "Free advice on benefits, debt, housing, employment", address: "58 Dundas Street, EH3 6QZ" },
  { name: "Bethany Christian Trust", lat: 55.9756, lng: -3.1779, category: "community", emoji: "🤲", note: "Homelessness, food bank, care for the elderly", address: "6 Casselbank Street, Leith, EH6 5HA" },
  { name: "The Meadows", lat: 55.9394, lng: -3.1871, category: "park", emoji: "🌳", note: "Edinburgh's most popular park — tennis, sports pitches, events", address: "The Meadows, EH9" },
  { name: "Holyrood Park & Arthur's Seat", lat: 55.9437, lng: -3.1620, category: "park", emoji: "🌳", note: "Ancient volcano, stunning city views, free to enter", address: "Holyrood Park, EH8 8AY" },
  { name: "Inverleith Park", lat: 55.9653, lng: -3.2142, category: "park", emoji: "🌳", note: "Pond, sports pitches, Royal Botanic Garden adjacent", address: "Inverleith Place, EH3 5SA" },
  { name: "Saughton Park", lat: 55.9337, lng: -3.2580, category: "park", emoji: "🌳", note: "Renovated rose garden, bandstand, free events", address: "Balgreen Road, EH12 5UU" },
  { name: "Edinburgh Job Centre Plus", lat: 55.9576, lng: -3.1830, category: "community", emoji: "💼", note: "Job search support, Universal Credit, benefits advice", address: "9–13 Semple Street, EH3 8BL" },
  { name: "Scottish Parliament", lat: 55.9519, lng: -3.1742, category: "community", emoji: "🏛️", note: "MSP surgeries, public gallery, visitor centre", address: "Horse Wynd, Edinburgh, EH99 1SP" },
  { name: "City of Edinburgh Council HQ", lat: 55.9502, lng: -3.1892, category: "community", emoji: "🏛️", note: "City Chambers — housing, benefits, social care", address: "253 High Street, Edinburgh, EH1 1YJ" },
];

// ─── Community Groups ─────────────────────────────────────────────────────────
export const COMMUNITY_GROUPS = [
  { name: "Edinburgh Voluntary Organisations Council (EVOC)", focus: "Umbrella body connecting 2,500+ voluntary organisations in Edinburgh", link: "https://www.evoc.org.uk/" },
  { name: "Edinburgh & Lothians Greenspace Trust", focus: "Volunteer days, green projects, community growing", link: "https://elgt.org.uk/" },
  { name: "Volunteer Edinburgh", focus: "Find volunteering opportunities across the city", link: "https://www.volunteeredinburgh.org.uk/" },
  { name: "Community Councils", focus: "18 community councils across Edinburgh — get involved in local decisions", link: "https://www.edinburgh.gov.uk/community-councils" },
  { name: "Portobello Community Council", focus: "Active east Edinburgh community forum and events", link: "https://www.portobello.org.uk/" },
  { name: "Leith Decides", focus: "Participatory budgeting in Leith — residents vote on local spending", link: "https://www.edinburgh.gov.uk/participatory-budgeting" },
];

// ─── Youth ────────────────────────────────────────────────────────────────────
export const YOUTH_SERVICES = [
  { name: "Young Scot", focus: "National card giving discounts, opportunities and rights info for 11–26 year olds in Scotland", link: "https://youngscot.net/" },
  { name: "Pilmeny Youth Project", focus: "Leith-based youth work, programmes for 8–25 year olds", link: "https://www.pilmeny.org.uk/" },
  { name: "Edinburgh Youth Social Inclusion Partnership (YSIP)", focus: "Supports young people facing exclusion — employment, housing, wellbeing", link: "https://www.edinburgh.gov.uk/youth-social-inclusion" },
  { name: "LGBT Health & Wellbeing", focus: "Counselling, social groups, and crisis support for LGBTQ+ people in Scotland", link: "https://www.lgbthealth.org.uk/" },
  { name: "Rock Trust", focus: "Prevents and responds to youth homelessness in Edinburgh", link: "https://rocktrust.org/" },
  { name: "Youthlink Scotland", focus: "National agency for youth work — find local services", link: "https://www.youthlinkscotland.org/" },
];

export const YOUTH_RIGHTS = [
  { title: "Young Scot Card (11–26)", body: "Free card giving discounts on transport, leisure, food and culture. Also a Digital ID. Apply free at youngscot.net. Discounts at hundreds of venues across Scotland." },
  { title: "Free Bus Travel for Under 22s", body: "Since January 2022, all under-22s in Scotland get free bus travel using the Young Persons Free Bus Pass. Apply at transport.gov.scot/young-persons-free-bus-pass/." },
  { title: "Education Maintenance Allowance (EMA)", body: "If you are 16–19, staying in school or college, and from a low-income household, you may get £30/week EMA. Apply through your school or college." },
  { title: "Rights if Stopped by Police (Scotland)", body: "Police Scotland can stop and search you if they have reasonable grounds. You have the right to ask why you are being stopped and to be treated respectfully. You do not have to answer questions beyond giving your name and address if asked. Do not resist physically — challenge it legally afterwards." },
  { title: "Care Experienced Entitlements", body: "If you have been in care, you are entitled to aftercare support until age 26 (Continuing Care), free university tuition (this applies to all Scottish-domiciled students), and enhanced support from the care leaver payment through Social Security Scotland." },
];

// ─── Budget & Tax ─────────────────────────────────────────────────────────────
export const COUNCIL_TAX_BANDS = [
  { band: "A", annual: "£973", monthly: "£81" },
  { band: "B", annual: "£1,136", monthly: "£95" },
  { band: "C", annual: "£1,298", monthly: "£108" },
  { band: "D", annual: "£1,460", monthly: "£122" },
  { band: "E", annual: "£1,825", monthly: "£152" },
  { band: "F", annual: "£2,190", monthly: "£183" },
  { band: "G", annual: "£2,555", monthly: "£213" },
  { band: "H", annual: "£3,121", monthly: "£260" },
];

export const COUNCIL_TAX_EXEMPTIONS = [
  { group: "Full-time students", detail: "100% exempt — you do not pay at all. Apply via your university/college." },
  { group: "Single occupancy", detail: "25% discount — if you live alone or with full-time students." },
  { group: "Severely mentally impaired (SMI)", detail: "100% discount if you qualify, 25% if one person in household qualifies." },
  { group: "Under 18s", detail: "Invisible for council tax purposes — do not count towards occupancy." },
  { group: "Scottish Welfare Fund / CTR", detail: "Council Tax Reduction available if you are on low income or certain benefits. Apply at edinburgh.gov.uk/council-tax-reduction." },
];

export const BUDGET_FACTS = {
  increase: "5%",
  gap: "£60 Million",
  annualBudget: "£1.1 Billion",
  councilTaxIncrease2024: "5% (2024/25)",
  housingSpend: "£350 Million",
};

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    q: "How do I register with a GP in Edinburgh?",
    a: "Find your nearest practice at nhsinform.scot/find-a-gp and contact them directly. Most accept registrations online or by phone. You have the right to register even without proof of address. If refused unfairly, contact NHS Lothian on 0131 536 9000.",
    category: "Health",
  },
  {
    q: "Are prescriptions free in Scotland?",
    a: "Yes — all NHS prescriptions in Scotland are completely free, regardless of income. This has been the case since 2011 and applies to all medications prescribed by a GP or other NHS clinician.",
    category: "Health",
  },
  {
    q: "What is a Private Residential Tenancy (PRT)?",
    a: "It's Scotland's standard tenancy for private rentals since December 2017. Unlike England's Assured Shorthold Tenancy, a PRT has no fixed end date — you can stay as long as you pay rent and don't break tenancy conditions. Your landlord can only ask you to leave by proving one of 18 legal grounds.",
    category: "Housing",
  },
  {
    q: "Can my landlord evict me without a reason in Edinburgh?",
    a: "No. Scotland banned no-fault evictions in 2017. Your landlord must prove one of 18 specific grounds — such as they want to sell, move in themselves, or you have rent arrears. They must apply to the First-tier Tribunal for Scotland. An eviction without this process is illegal.",
    category: "Housing",
  },
  {
    q: "How do I apply for social housing in Edinburgh?",
    a: "Apply to the Edinburgh Housing Register at edinburgh.gov.uk/housing. You will be assessed and placed in a priority band (A–D). You can also apply directly to housing associations like Dunedin Canmore, Castle Rock Edinvar, and Link Housing.",
    category: "Housing",
  },
  {
    q: "What is the Scottish Child Payment?",
    a: "A Scottish Government benefit of £26.70 per week per eligible child under 16. It is paid to those on low incomes or certain qualifying benefits. Apply at mygov.scot/scottish-child-payment — there is no cap on how many children you can claim for.",
    category: "Benefits",
  },
  {
    q: "How do I get emergency housing in Edinburgh?",
    a: "Call City of Edinburgh Council Housing on 0131 200 2000 (available 24/7 for emergencies). Tell them you have nowhere safe to stay tonight. They have a legal duty to assess your case immediately. If rough sleeping, call Streetwork on 0131 553 5880.",
    category: "Housing",
  },
  {
    q: "How do I check my bin collection day?",
    a: "Enter your address at edinburgh.gov.uk/bincollections. Edinburgh has blue (recycling), green (food/garden), and grey (general waste) bins, collected on a rotating schedule. Collections are usually fortnightly except food waste (weekly in some areas).",
    category: "Environment",
  },
  {
    q: "How do I report fly-tipping in Edinburgh?",
    a: "Report online at edinburgh.gov.uk/report-it or call 0131 200 2000. Provide the location and any details about the waste. Fly-tipping on public land is removed by the council. For private land, the landowner is responsible.",
    category: "Environment",
  },
  {
    q: "How do I apply for a resident parking permit?",
    a: "Apply at edinburgh.gov.uk/parking-permits. You need your vehicle registration, proof of address, and your Edinburgh postcode must fall within a controlled parking zone. Permits cost from £104/year and vary by zone.",
    category: "Council",
  },
  {
    q: "How do I register to vote in Edinburgh?",
    a: "Register at gov.uk/register-to-vote. Scottish residents can vote in local and Scottish Parliament elections from age 16. You can vote in UK Parliament elections from age 18. EU citizens can vote in Scottish and local elections but not UK Parliament elections.",
    category: "Council",
  },
  {
    q: "What is the council tax band for my property?",
    a: "Check your band at saa.gov.uk (Scottish Assessors Association). Edinburgh council tax runs from Band A (£973/year) to Band H (£3,121/year). Students are fully exempt — apply via your institution. If you live alone, apply for a 25% single occupancy discount.",
    category: "Council",
  },
  {
    q: "How do I get a Young Scot card?",
    a: "Apply free at youngscot.net. Open to all 11–26 year olds in Scotland, regardless of nationality. The card gives discounts at hundreds of venues and also works as a digital ID. Under 22s can also get a free bus pass at transport.gov.scot.",
    category: "Youth",
  },
  {
    q: "What is the Adult Disability Payment (ADP)?",
    a: "ADP is Scotland's replacement for Personal Independence Payment (PIP). It is assessed and paid by Social Security Scotland (not DWP). If you are already receiving PIP, you will be transferred to ADP automatically. New claimants apply at mygov.scot/adult-disability-payment.",
    category: "Benefits",
  },
  {
    q: "Where can I get free legal advice in Edinburgh?",
    a: "Citizens Advice Edinburgh (0131 557 1500) provide free advice on housing, benefits, debt, employment, and family law. The Law Society of Scotland can refer you to a solicitor who provides a free first consultation. Legal Aid is also available for those who qualify — check at mygov.scot/legal-aid.",
    category: "Council",
  },
  {
    q: "My landlord hasn't protected my deposit — what do I do?",
    a: "This is a criminal offence in Scotland. Your landlord must protect your deposit within 30 working days with SafeDeposits Scotland, Letting Protection Service Scotland, or mydeposits Scotland. If not, you can take them to the First-tier Tribunal and recover up to 3× the deposit amount.",
    category: "Housing",
  },
  {
    q: "How do I contact Edinburgh Council out of hours?",
    a: "For housing emergencies (homelessness, dangerous buildings): 0131 200 2000, 24/7. For environmental health emergencies: 0131 200 2000. For police (non-emergency): 101. For life-threatening emergencies: 999.",
    category: "Council",
  },
  {
    q: "Are there free mental health services in Edinburgh?",
    a: "Yes. Edinburgh Crisis Centre: 0808 801 0414 (24/7, free). Breathing Space: 0800 83 85 87 (evenings and weekends). Samaritans: 116 123. CAPS advocacy for people receiving mental health treatment: 0131 260 8861. NHS Lothian CMHT via GP referral.",
    category: "Health",
  },
];

// ─── Support Finder Keywords ──────────────────────────────────────────────────
export const SUPPORT_KEYWORDS: Array<{ keywords: string[]; response: string; links?: Array<{ label: string; url: string }> }> = [
  {
    keywords: ["homeless", "nowhere to sleep", "evicted", "no home", "rough sleeping", "street"],
    response: "🏠 If you need housing help urgently, call City of Edinburgh Council Housing on 0131 200 2000 (24/7). Shelter Scotland: 0808 800 4444. If rough sleeping, call Streetwork: 0131 553 5880.",
    links: [{ label: "Housing Guide", url: "/housing" }, { label: "Crisis Support", url: "/crisis" }],
  },
  {
    keywords: ["mental health", "crisis", "depressed", "anxious", "suicidal", "self harm", "breakdown"],
    response: "🧠 Edinburgh Crisis Centre is available 24/7: 0808 801 0414. Breathing Space (evenings/weekends): 0800 83 85 87. Samaritans (anytime): 116 123. If your life is at risk, call 999.",
    links: [{ label: "Health Guide", url: "/health" }, { label: "Crisis Support", url: "/crisis" }],
  },
  {
    keywords: ["domestic abuse", "domestic violence", "partner hurting", "scared at home"],
    response: "💜 You are not alone. Scotland's Domestic Abuse Helpline (free, 24/7): 0800 027 1234. Women's Aid Edinburgh: 0131 315 8110. If in immediate danger, call 999.",
    links: [{ label: "Crisis Support", url: "/crisis" }],
  },
  {
    keywords: ["food", "hungry", "food bank", "can't eat", "no money for food"],
    response: "🍞 Cyrenians foodbank: 0131 475 2354 | Bethany Christian Trust: 0131 561 8930 | The Trussell Trust can find your nearest foodbank at trussell.org.uk/find-a-foodbank.",
    links: [{ label: "Community Hub", url: "/community" }],
  },
  {
    keywords: ["job", "unemployed", "work", "employment", "career", "cv"],
    response: "💼 My World of Work (Skills Development Scotland): myworldofwork.co.uk | Edinburgh College free courses: edinburghcollege.ac.uk | Edinburgh Job Centre: 0131 240 5000.",
    links: [{ label: "Employment Guide", url: "/employment" }],
  },
  {
    keywords: ["benefits", "universal credit", "pip", "disability", "scottish benefit"],
    response: "💷 Citizens Advice Edinburgh: 0131 557 1500 | Scottish Child Payment, ADP, Best Start Grant and more: mygov.scot | Scottish Welfare Fund for emergency grants: edinburgh.gov.uk.",
    links: [{ label: "Employment & Benefits", url: "/employment" }],
  },
  {
    keywords: ["eviction", "landlord", "notice", "section 21", "leaving"],
    response: "⚖️ Scotland banned no-fault evictions in 2017. Your landlord must prove one of 18 legal grounds. Contact Shelter Scotland free: 0808 800 4444 or Edinburgh Housing Advice Partnership: 0131 538 8222.",
    links: [{ label: "Housing Guide", url: "/housing" }, { label: "Tenancy Rights", url: "/housing" }],
  },
  {
    keywords: ["debt", "money", "council tax", "arrears", "bankrupt", "bailiff"],
    response: "💰 Citizens Advice Edinburgh provides free debt advice: 0131 557 1500. StepChange Debt Charity: 0800 138 1111. Scottish Welfare Fund for emergency grants: edinburgh.gov.uk.",
    links: [{ label: "Budget & Tax", url: "/budget" }],
  },
  {
    keywords: ["gp", "doctor", "prescription", "nhs", "hospital", "medical"],
    response: "🏥 Find a GP: nhsinform.scot/find-a-gp | Prescriptions are FREE in Scotland | NHS 24 (urgent, out of hours): 111 | A&E (Royal Infirmary): 0131 536 1000.",
    links: [{ label: "Health Guide", url: "/health" }],
  },
  {
    keywords: ["drug", "alcohol", "addiction", "substance"],
    response: "💊 Turning Point Scotland: 0808 808 0808 | FRANK (drug info): 0300 123 6600 | Edinburgh CAN services via NHS Lothian. All contacts are confidential.",
    links: [{ label: "Health Guide", url: "/health" }],
  },
  {
    keywords: ["young", "youth", "student", "teenager", "under 25", "care leaver"],
    response: "🎓 Young Scot card (free discounts + ID): youngscot.net | Free bus pass under 22: transport.gov.scot | Rock Trust for young homelessness: rocktrust.org | EMA (£30/week staying in school): via your college.",
    links: [{ label: "Youth & Rights", url: "/youth" }],
  },
  {
    keywords: ["child", "baby", "pregnant", "parent", "family", "childcare"],
    response: "👶 Scottish Child Payment: £26.70/week per child under 16 | Best Start Grant (up to £707) | Early Learning and Childcare (free 1,140 hours/year) | Health Visitor contacts via NHS Lothian.",
    links: [{ label: "Employment & Benefits", url: "/employment" }],
  },
  {
    keywords: ["recycling", "bin", "rubbish", "fly tipping", "waste"],
    response: "♻️ Check your bin day: edinburgh.gov.uk/bincollections | Report fly-tipping: edinburgh.gov.uk/report-it | Recycling centres at Seafield, Sighthill and Easter Road.",
    links: [{ label: "Clean Edinburgh", url: "/environment" }],
  },
];

export type Audience = "resident" | "visitor" | "both";

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  href: string;
  emoji: string;
  updatedAt?: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  audience: Audience;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  hours?: string;
  badge?: string;
  services?: string[];
  eligibility?: string;
  sourceUrl?: string;
  updatedAt?: string;
  verifiedAt?: string;
  geo?: { lat: number; lng: number };
  keywords?: string[];
}

export interface NewsItem {
  title: string;
  url: string;
  published: string;
}

export const RESIDENT_TOP_TASKS: TaskItem[] = [
  {
    id: "housing-emergency",
    title: "Housing emergency or eviction",
    description: "Know your rights and get urgent help.",
    href: "/crisis",
    emoji: "🏠",
    updatedAt: "Apr 2026",
  },
  {
    id: "gp-urgent",
    title: "GP registration and urgent care",
    description: "Find a GP, NHS 24, and emergency care.",
    href: "/health",
    emoji: "🏥",
    updatedAt: "Apr 2026",
  },
  {
    id: "benefits",
    title: "Benefits and council tax reduction",
    description: "What you can claim and how to apply.",
    href: "/budget",
    emoji: "💷",
    updatedAt: "Apr 2026",
  },
  {
    id: "council",
    title: "Council services and reporting",
    description: "Bins, report-it, parking permits, voting.",
    href: "/resident",
    emoji: "🏛️",
    updatedAt: "Apr 2026",
  },
  {
    id: "transport",
    title: "Transport essentials",
    description: "Bus fares, tram routes, and travel tips.",
    href: "/transport",
    emoji: "🚌",
    updatedAt: "Apr 2026",
  },
];

export const VISITOR_TOP_TASKS: TaskItem[] = [
  {
    id: "airport",
    title: "Airport to city centre",
    description: "Best ways to get into town fast.",
    href: "/visitor-essentials",
    emoji: "✈️",
    updatedAt: "Apr 2026",
  },
  {
    id: "highlights",
    title: "City highlights map",
    description: "Must-see landmarks and free spots.",
    href: "/visitor",
    emoji: "🗺️",
    updatedAt: "Apr 2026",
  },
  {
    id: "day-ticket",
    title: "Day tickets and transport",
    description: "Bus, tram, rail passes and tips.",
    href: "/transport",
    emoji: "🎫",
    updatedAt: "Apr 2026",
  },
  {
    id: "food",
    title: "Food and drink",
    description: "Local picks and budget options.",
    href: "/visitor",
    emoji: "🍴",
    updatedAt: "Apr 2026",
  },
  {
    id: "safety-weather",
    title: "Safety and weather tips",
    description: "Useful advice for staying comfortable.",
    href: "/visitor-essentials",
    emoji: "🌦️",
    updatedAt: "Apr 2026",
  },
];

export const COUNCIL_TASKS: TaskItem[] = [
  {
    id: "bins",
    title: "Check bin collections",
    description: "Find your collection day and missed bins.",
    href: "https://www.edinburgh.gov.uk/bin-collection-days",
    emoji: "♻️",
  },
  {
    id: "report-it",
    title: "Report a problem",
    description: "Fly-tipping, potholes, street issues.",
    href: "https://www.edinburgh.gov.uk/report",
    emoji: "📣",
  },
  {
    id: "parking",
    title: "Resident parking permit",
    description: "Apply or renew parking permits.",
    href: "https://www.edinburgh.gov.uk/parking-permits",
    emoji: "🅿️",
  },
  {
    id: "vote",
    title: "Register to vote",
    description: "Register online in minutes.",
    href: "https://www.gov.uk/register-to-vote",
    emoji: "🗳️",
  },
  {
    id: "council-tax-reduction",
    title: "Council tax reduction",
    description: "See if you qualify and apply.",
    href: "https://www.edinburgh.gov.uk/council-tax-reduction",
    emoji: "💷",
  },
];

export const VISITOR_FIRST_48 = [
  {
    id: "arrive",
    title: "Get into town",
    detail: "Tram or Airlink 100 from the airport to the city centre.",
  },
  {
    id: "tickets",
    title: "Buy a day ticket",
    detail: "Lothian Buses day ticket is the best value for short stays.",
  },
  {
    id: "walkable",
    title: "Plan a walkable loop",
    detail: "Old Town, Royal Mile, Princes Street Gardens, Calton Hill.",
  },
  {
    id: "free",
    title: "Use free attractions",
    detail: "National Museum of Scotland, Royal Botanic Garden, The Meadows.",
  },
  {
    id: "weather",
    title: "Pack for weather",
    detail: "Edinburgh changes quickly. Bring layers and a light rain jacket.",
  },
];

export const SERVICE_CONTACTS: Service[] = [
  {
    id: "edinburgh-council-housing",
    name: "Edinburgh Council Housing (Emergency)",
    category: "housing",
    audience: "resident",
    description: "Out-of-hours housing emergency and homelessness support.",
    address: "City Chambers, 253 High Street, EH1 1YJ",
    phone: "0131 200 2000",
    website: "https://www.edinburgh.gov.uk/housing",
    hours: "24/7 emergency line",
    badge: "Emergency",
    sourceUrl: "https://www.edinburgh.gov.uk/housing/homelessness",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    geo: { lat: 55.9502, lng: -3.1892 },
    keywords: ["homeless", "emergency", "housing", "eviction"],
  },
  {
    id: "shelter-scotland",
    name: "Shelter Scotland (Edinburgh)",
    category: "housing",
    audience: "resident",
    description: "Free housing advice and legal guidance.",
    address: "97 McDonald Road, EH7 4NJ",
    phone: "0808 800 4444",
    website: "https://scotland.shelter.org.uk/",
    hours: "Mon-Fri 9am-5pm",
    badge: "Free",
    sourceUrl: "https://scotland.shelter.org.uk/",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    geo: { lat: 55.9646, lng: -3.1748 },
    keywords: ["housing", "eviction", "rent", "landlord"],
  },
  {
    id: "edinburgh-crisis-centre",
    name: "Edinburgh Crisis Centre",
    category: "mental-health",
    audience: "resident",
    description: "24/7 mental health crisis support by phone.",
    phone: "0808 801 0414",
    website: "https://www.penumbra.org.uk/services/edinburgh-crisis-centre/",
    hours: "24/7",
    badge: "24/7",
    sourceUrl: "https://www.penumbra.org.uk/services/edinburgh-crisis-centre/",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    keywords: ["mental health", "crisis", "suicidal", "anxiety"],
  },
  {
    id: "nhs-24",
    name: "NHS 24",
    category: "health",
    audience: "resident",
    description: "Urgent medical advice and out-of-hours support.",
    phone: "111",
    website: "https://www.nhs24.scot/",
    hours: "24/7",
    badge: "Urgent",
    sourceUrl: "https://www.nhs24.scot/",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    keywords: ["urgent", "nhs", "medical", "doctor"],
  },
  {
    id: "find-gp",
    name: "Find a GP (NHS Inform)",
    category: "health",
    audience: "resident",
    description: "Search for your nearest GP practice and register.",
    website: "https://www.nhsinform.scot/find-a-gp",
    sourceUrl: "https://www.nhsinform.scot/find-a-gp",
    updatedAt: "Apr 2026",
    keywords: ["gp", "doctor", "register"],
  },
  {
    id: "royal-infirmary",
    name: "Royal Infirmary of Edinburgh A&E",
    category: "health",
    audience: "resident",
    description: "Major A&E and trauma centre.",
    address: "51 Little France Crescent, EH16 4SA",
    phone: "0131 536 1000",
    website: "https://www.nhslothian.scot/",
    hours: "24/7",
    badge: "A&E",
    sourceUrl: "https://www.nhslothian.scot/",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    geo: { lat: 55.9217, lng: -3.135 },
    keywords: ["hospital", "a&e", "emergency"],
  },
  {
    id: "citizens-advice",
    name: "Citizens Advice Edinburgh",
    category: "advice",
    audience: "resident",
    description: "Free advice on benefits, debt, housing, and work.",
    address: "58 Dundas Street, EH3 6QZ",
    phone: "0131 557 1500",
    website: "https://www.citizensadviceedinburgh.org.uk/",
    hours: "Mon-Fri 9am-5pm",
    badge: "Free",
    sourceUrl: "https://www.citizensadviceedinburgh.org.uk/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9622, lng: -3.2031 },
    keywords: ["benefits", "debt", "advice"],
  },
  {
    id: "edinburgh-housing-advice-partnership",
    name: "Edinburgh Housing Advice Partnership",
    category: "housing",
    audience: "resident",
    description: "Free housing advice and representation.",
    address: "Norton Park, 57 Albion Road, EH7 5QY",
    phone: "0131 538 8222",
    website: "https://www.edinburghhousing.org.uk/",
    hours: "Mon-Fri 9am-5pm",
    badge: "Free",
    sourceUrl: "https://www.edinburghhousing.org.uk/",
    updatedAt: "Apr 2026",
    verifiedAt: "Apr 2026",
    geo: { lat: 55.9597, lng: -3.1629 },
    keywords: ["housing", "eviction", "rights"],
  },
  {
    id: "scottish-welfare-fund",
    name: "Scottish Welfare Fund (Edinburgh)",
    category: "benefits",
    audience: "resident",
    description: "Emergency crisis grants and community care grants.",
    website: "https://www.edinburgh.gov.uk/benefits-support/scottish-welfare-fund",
    sourceUrl: "https://www.edinburgh.gov.uk/benefits-support/scottish-welfare-fund",
    updatedAt: "Apr 2026",
    keywords: ["benefits", "grant", "emergency"],
  },
  {
    id: "bin-collections",
    name: "Bin Collection Finder",
    category: "environment",
    audience: "resident",
    description: "Find your Edinburgh bin collection day.",
    website: "https://www.edinburgh.gov.uk/bin-collection-days",
    sourceUrl: "https://www.edinburgh.gov.uk/bin-collection-days",
    updatedAt: "Apr 2026",
    keywords: ["bins", "recycling", "collection"],
  },
  {
    id: "report-it",
    name: "Report It (Edinburgh Council)",
    category: "environment",
    audience: "resident",
    description: "Report fly-tipping, potholes, graffiti, and street issues.",
    website: "https://www.edinburgh.gov.uk/report",
    sourceUrl: "https://www.edinburgh.gov.uk/report",
    updatedAt: "Apr 2026",
    keywords: ["report", "pothole", "fly tipping", "graffiti"],
  },
  {
    id: "lothian-buses",
    name: "Lothian Buses",
    category: "transport",
    audience: "both",
    description: "Plan routes, tickets, and live arrivals.",
    website: "https://www.lothianbuses.com/",
    sourceUrl: "https://www.lothianbuses.com/",
    updatedAt: "Apr 2026",
    keywords: ["bus", "transport", "tickets"],
  },
  {
    id: "edinburgh-trams",
    name: "Edinburgh Trams",
    category: "transport",
    audience: "both",
    description: "Airport to Newhaven tram line and tickets.",
    website: "https://edinburghtrams.com/",
    sourceUrl: "https://edinburghtrams.com/",
    updatedAt: "Apr 2026",
    keywords: ["tram", "airport", "transport"],
  },
  {
    id: "edinburgh-airport",
    name: "Edinburgh Airport",
    category: "visitor",
    audience: "visitor",
    description: "Main airport for Edinburgh, tram and bus connections.",
    address: "Edinburgh Airport, EH12 9DN",
    website: "https://www.edinburghairport.com/",
    sourceUrl: "https://www.edinburghairport.com/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.95, lng: -3.3725 },
    keywords: ["airport", "arrival"],
  },
  {
    id: "waverley-station",
    name: "Edinburgh Waverley Station",
    category: "visitor",
    audience: "visitor",
    description: "Main rail hub in the city centre.",
    address: "Edinburgh Waverley, EH1 1BQ",
    website: "https://www.scotrail.co.uk/",
    sourceUrl: "https://www.scotrail.co.uk/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9521, lng: -3.1896 },
    keywords: ["train", "rail", "station"],
  },
  {
    id: "visitscotland-icentre",
    name: "VisitScotland iCentre",
    category: "visitor",
    audience: "visitor",
    description: "Tourist information, tickets, and local advice.",
    address: "249 High Street, EH1 1YJ",
    phone: "0131 225 4443",
    website: "https://www.visitscotland.com/info/services/edinburgh-icentre-p333471",
    hours: "Daily 9am-5pm",
    sourceUrl: "https://www.visitscotland.com/info/services/edinburgh-icentre-p333471",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9506, lng: -3.1882 },
    keywords: ["tourist", "information", "tickets"],
  },
  {
    id: "princes-street-gardens",
    name: "Princes Street Gardens",
    category: "visitor",
    audience: "visitor",
    description: "Central city park between Old and New Town.",
    address: "Princes Street Gardens, EH2 2HG",
    website: "https://www.edinburgh.gov.uk/parks",
    sourceUrl: "https://www.edinburgh.gov.uk/parks",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9524, lng: -3.1974 },
    keywords: ["park", "walk", "view"],
  },
  {
    id: "edinburgh-central-library",
    name: "Edinburgh Central Library",
    category: "community",
    audience: "resident",
    description: "Free internet access, study space, and local history.",
    address: "George IV Bridge, EH1 1EG",
    phone: "0131 242 8000",
    website: "https://www.edinburgh.gov.uk/libraries",
    hours: "Mon-Sat 10am-5pm",
    sourceUrl: "https://www.edinburgh.gov.uk/libraries",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9472, lng: -3.1929 },
    keywords: ["library", "wifi", "internet"],
  },
];

export const PHARMACIES: Service[] = [
  {
    id: "boots-princes-street",
    name: "Boots Pharmacy (Princes Street)",
    category: "pharmacy",
    audience: "resident",
    description: "Prescription services, advice, and travel health.",
    address: "42 Princes Street, EH2 2BY",
    phone: "0131 228 6061",
    website: "https://www.boots.com/stores",
    hours: "Mon-Sat 8am-7pm, Sun 10am-6pm",
    badge: "Pharmacy",
    sourceUrl: "https://www.boots.com/stores",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9536, lng: -3.1919 },
    keywords: ["pharmacy", "prescription", "boots"],
  },
  {
    id: "boots-rose-street",
    name: "Boots Pharmacy (Rose Street)",
    category: "pharmacy",
    audience: "resident",
    description: "Prescriptions, vaccinations, and advice.",
    address: "70 Rose Street, EH2 2NN",
    phone: "0131 225 3034",
    website: "https://www.boots.com/stores",
    hours: "Mon-Sat 8am-7pm, Sun 11am-5pm",
    badge: "Pharmacy",
    sourceUrl: "https://www.boots.com/stores",
    updatedAt: "Apr 2026",
    geo: { lat: 55.953, lng: -3.2016 },
    keywords: ["pharmacy", "prescription"],
  },
  {
    id: "lsd-pharmacy-leith",
    name: "LloydsPharmacy (Leith Walk)",
    category: "pharmacy",
    audience: "resident",
    description: "Prescription collection and health advice.",
    address: "211 Leith Walk, EH6 8NX",
    phone: "0131 554 3416",
    website: "https://www.lloydspharmacy.com/",
    hours: "Mon-Fri 9am-6pm, Sat 9am-1pm",
    badge: "Pharmacy",
    sourceUrl: "https://www.lloydspharmacy.com/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9657, lng: -3.1761 },
    keywords: ["pharmacy", "leith"],
  },
];

export const DENTISTS_ACCEPTING: Service[] = [
  {
    id: "nhs-dentist-search",
    name: "Find an NHS Dentist",
    category: "dentist",
    audience: "resident",
    description: "Check which practices are accepting new NHS patients.",
    website: "https://www.nhsinform.scot/scotlands-service-directory/dental",
    hours: "Online directory",
    badge: "NHS",
    sourceUrl: "https://www.nhsinform.scot/scotlands-service-directory/dental",
    updatedAt: "Apr 2026",
    keywords: ["dentist", "nhs", "teeth"],
  },
  {
    id: "bridge-street-dental",
    name: "Bridge Street Dental Care",
    category: "dentist",
    audience: "resident",
    description: "NHS and private dentistry.",
    address: "7 Bridge Street, EH15 1DB",
    phone: "0131 669 2554",
    website: "https://www.bridgestreetdentalcare.co.uk/",
    hours: "Mon-Fri 8am-6pm",
    badge: "NHS/Private",
    sourceUrl: "https://www.bridgestreetdentalcare.co.uk/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9524, lng: -3.1109 },
    keywords: ["dentist", "portobello"],
  },
  {
    id: "fountainbridge-dental",
    name: "Fountainbridge Dental Practice",
    category: "dentist",
    audience: "resident",
    description: "NHS and private services, check availability.",
    address: "22 Leamington Terrace, EH10 4RT",
    phone: "0131 229 1166",
    website: "https://www.fountainbridgedental.co.uk/",
    hours: "Mon-Fri 9am-5pm",
    badge: "NHS/Private",
    sourceUrl: "https://www.fountainbridgedental.co.uk/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9409, lng: -3.2066 },
    keywords: ["dentist", "fountainbridge"],
  },
];

export const FOOD_BANKS: Service[] = [
  {
    id: "cyrenians-foodbank",
    name: "Cyrenians Foodbank",
    category: "food",
    audience: "resident",
    description: "Emergency food support and advice services.",
    address: "Norton Park, 57 Albion Road, EH7 5QY",
    phone: "0131 475 2354",
    website: "https://www.cyrenians.scot/",
    hours: "Mon-Fri 9am-5pm",
    eligibility: "Referral or appointment required; call ahead.",
    badge: "Food support",
    sourceUrl: "https://www.cyrenians.scot/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9597, lng: -3.1629 },
    keywords: ["food", "foodbank", "emergency"],
  },
  {
    id: "bethany-foodbank",
    name: "Bethany Christian Trust Foodbank",
    category: "food",
    audience: "resident",
    description: "Emergency food parcels and support.",
    address: "Bethany House, 6 Casselbank Street, EH6 5HA",
    phone: "0131 561 8930",
    website: "https://www.bethanychristiantrust.com/",
    hours: "Mon-Fri 9am-5pm",
    eligibility: "Referral often needed; call ahead.",
    badge: "Food support",
    sourceUrl: "https://www.bethanychristiantrust.com/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9756, lng: -3.1779 },
    keywords: ["food", "foodbank", "emergency"],
  },
  {
    id: "trussell-trust",
    name: "The Trussell Trust (Find a Foodbank)",
    category: "food",
    audience: "resident",
    description: "Search for local foodbanks and eligibility.",
    website: "https://www.trusselltrust.org/get-help/find-a-foodbank/",
    eligibility: "Most foodbanks require a referral voucher.",
    badge: "Directory",
    sourceUrl: "https://www.trusselltrust.org/get-help/find-a-foodbank/",
    updatedAt: "Apr 2026",
    keywords: ["foodbank", "voucher"],
  },
];

export const COUNCIL_OFFICES: Service[] = [
  {
    id: "city-chambers",
    name: "City Chambers (Council HQ)",
    category: "council",
    audience: "resident",
    description: "Housing, council tax, benefits, and general enquiries.",
    address: "253 High Street, EH1 1YJ",
    phone: "0131 200 2000",
    website: "https://www.edinburgh.gov.uk/",
    hours: "Mon-Fri 9am-5pm",
    services: ["Housing", "Benefits", "Council tax"],
    badge: "Council",
    sourceUrl: "https://www.edinburgh.gov.uk/",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9502, lng: -3.1892 },
    keywords: ["council", "benefits", "tax"],
  },
  {
    id: "south-west-locality-office",
    name: "South West Locality Office",
    category: "council",
    audience: "resident",
    description: "Locality office for housing and social care support.",
    address: "31-33 Dale Street, EH11 2JN",
    phone: "0131 469 5000",
    website: "https://www.edinburgh.gov.uk/locality-offices",
    hours: "Mon-Fri 9am-5pm",
    services: ["Housing", "Social care"],
    badge: "Locality",
    sourceUrl: "https://www.edinburgh.gov.uk/locality-offices",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9393, lng: -3.2435 },
    keywords: ["locality", "social care"],
  },
  {
    id: "north-east-locality-office",
    name: "North East Locality Office",
    category: "council",
    audience: "resident",
    description: "Locality office for community and health partnerships.",
    address: "101-105 Leith Walk, EH6 8NP",
    phone: "0131 529 7500",
    website: "https://www.edinburgh.gov.uk/locality-offices",
    hours: "Mon-Fri 9am-5pm",
    services: ["Community", "Health partnerships"],
    badge: "Locality",
    sourceUrl: "https://www.edinburgh.gov.uk/locality-offices",
    updatedAt: "Apr 2026",
    geo: { lat: 55.9609, lng: -3.1816 },
    keywords: ["locality", "community"],
  },
];

export const RESIDENT_QUICK_ACTIONS: TaskItem[] = [
  {
    id: "call-nhs-24",
    title: "Call NHS 24",
    description: "Urgent medical advice, 24/7.",
    href: "tel:111",
    emoji: "📞",
  },
  {
    id: "report-it",
    title: "Report a problem",
    description: "Fly-tipping, potholes, street issues.",
    href: "https://www.edinburgh.gov.uk/report",
    emoji: "📣",
  },
  {
    id: "bin-day",
    title: "Check bin day",
    description: "Find your collection schedule.",
    href: "https://www.edinburgh.gov.uk/bin-collection-days",
    emoji: "♻️",
  },
  {
    id: "parking",
    title: "Parking permits",
    description: "Apply or renew resident permits.",
    href: "https://www.edinburgh.gov.uk/parking-permits",
    emoji: "🅿️",
  },
];
