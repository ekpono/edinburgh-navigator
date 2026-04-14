"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "overview",      label: "📊 Overview" },
  { id: "rent",          label: "🏠 Rent by Area" },
  { id: "food",          label: "🛒 Food & Shopping" },
  { id: "utilities",     label: "⚡ Bills & Utilities" },
  { id: "help",          label: "🤝 Getting Help" },
];

const RENT_DATA = [
  { area: "City Centre / Old Town", studio: "£900–£1,200", one: "£1,100–£1,600", two: "£1,500–£2,400", note: "Royal Mile, Grassmarket, Cowgate. Premium location, higher prices. Best for walking to work." },
  { area: "New Town / West End", studio: "£900–£1,300", one: "£1,200–£1,800", two: "£1,600–£2,800", note: "Georgian flats. Often converted tenements — beautiful but sometimes cold. Very central." },
  { area: "Leith", studio: "£750–£1,000", one: "£950–£1,400", two: "£1,200–£1,800", note: "Increasingly popular, good tram link to city centre. Best value close-to-centre option." },
  { area: "Stockbridge / Comely Bank", studio: "£850–£1,100", one: "£1,100–£1,600", two: "£1,400–£2,200", note: "Desirable village feel. Close to Botanic Garden. Very popular with young professionals." },
  { area: "Marchmont / Bruntsfield / Morningside", studio: "£800–£1,100", one: "£1,050–£1,550", two: "£1,350–£2,000", note: "Family-friendly, near The Meadows. Popular student area. Excellent independent shops." },
  { area: "Portobello", studio: "£700–£950", one: "£900–£1,300", two: "£1,200–£1,700", note: "Edinburgh's beach neighbourhood. Relaxed community vibe. 3 miles from centre by bus." },
  { area: "Gorgie / Dalry / Slateford", studio: "£650–£900", one: "£800–£1,150", two: "£1,000–£1,500", note: "Affordable and improving area. Good transport links. Close to Tynecastle stadium." },
  { area: "Corstorphine / Murrayfield", studio: "£700–£950", one: "£900–£1,300", two: "£1,200–£1,700", note: "Suburban and family-oriented. Easy Tram access. Near Edinburgh Zoo and airport." },
  { area: "Liberton / Gilmerton / Gracemount", studio: "£600–£800", one: "£750–£1,050", two: "£950–£1,350", note: "South Edinburgh suburbs. Most affordable areas. Buses to city centre take 20–30 min." },
  { area: "Currie / Balerno / Juniper Green", studio: "£550–£750", one: "£700–£1,000", two: "£900–£1,300", note: "Outer southwest Edinburgh. Rural feel, good schools. Bus commute 40–50 min to centre." },
];

const SUPERMARKETS = [
  { name: "Lidl", type: "Discount", locations: "Gorgie, Leith, Longstone, Gracemount, Causewayside, Granton", tipical_shop: "£40–60/week", verdict: "Best value overall. Fresh produce, bakery, and middle aisle specials." },
  { name: "Aldi", type: "Discount", locations: "Craigmillar, Portobello, Longstone, Murrayfield", tipical_shop: "£40–65/week", verdict: "Similar to Lidl. Good for meat, dairy, and weekly staples." },
  { name: "Asda", type: "Budget-mid", locations: "Leith, Chesser, The Jewel (Eastfield)", tipical_shop: "£55–80/week", verdict: "Good value, large stores. Rollback prices. Strong own-brand range." },
  { name: "Tesco", type: "Mid-range", locations: "Multiple across Edinburgh", tipical_shop: "£60–90/week", verdict: "Clubcard saves money. Wide range. Metro stores in city centre (pricier)." },
  { name: "Sainsbury's", type: "Mid-range", locations: "Longstone, Cameron Toll, St Andrew Square, Murrayfield", tipical_shop: "£65–95/week", verdict: "Nectar card discounts. Good Taste the Difference range." },
  { name: "Morrisons", type: "Mid-range", locations: "Wester Hailes, Portobello, Craigleith", tipical_shop: "£60–85/week", verdict: "Strong fresh counters. Market Street in-store butcher/bakery." },
  { name: "M&S Food", type: "Premium", locations: "Gyle, Princes Street, Cameron Toll, various", tipical_shop: "£90–130/week", verdict: "Exceptional quality, higher prices. Ready meals and deli worth the splurge." },
  { name: "Waitrose", type: "Premium", locations: "Comely Bank, Morningside, Stockbridge", tipical_shop: "£100–150/week", verdict: "Highest quality produce. myWaitrose free newspaper and coffee." },
];

export default function CostOfLivingPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader
        title="Cost of Living in Edinburgh"
        subtitle="Rent, food, bills, and budget tips for life in Scotland's capital"
      />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Cost of <span className="text-green-500">Living.</span>
          </h1>
          <p className="text-sm text-slate-600">
            Edinburgh is the most expensive city in Scotland, and one of the priciest in the UK outside London. But Scottish benefits, free prescriptions, and free bus travel for many residents significantly offset these costs.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Avg 1-bed rent", value: "£1,100", note: "Per month (city centre)" },
              { label: "Bus single", value: "£1.80", note: "Lothian Buses" },
              { label: "Pint of beer", value: "£4.50–6", note: "City centre pub" },
              { label: "Prescriptions", value: "FREE", note: "All NHS prescriptions in Scotland" },
            ].map((s) => (
              <div key={s.label} className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <div className="text-base font-bold text-green-700">{s.value}</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "overview" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Monthly budget estimates (single person)</h3>
              <div className="space-y-0">
                {[
                  { category: "Rent (1-bed, outer Edinburgh)", low: "£750", mid: "£950", high: "£1,200" },
                  { category: "Food & groceries", low: "£150", mid: "£220", high: "£350" },
                  { category: "Electricity & gas", low: "£80", mid: "£120", high: "£180" },
                  { category: "Water & council tax (Band B)", low: "£120", mid: "£120", high: "£120" },
                  { category: "Internet (broadband)", low: "£25", mid: "£35", high: "£50" },
                  { category: "Transport (Lothian Buses Ridacard)", low: "£0 (if under 22)", mid: "£75", high: "£75" },
                  { category: "Phone", low: "£15", mid: "£25", high: "£45" },
                  { category: "Eating out / socialising", low: "£50", mid: "£150", high: "£400" },
                  { category: "Clothing, household misc", low: "£30", mid: "£70", high: "£150" },
                ].map((row, i) => (
                  <div key={row.category} className={`grid grid-cols-4 py-2.5 text-xs ${i % 2 === 0 ? "bg-slate-50" : "bg-white"} rounded-lg px-3`}>
                    <div className="text-slate-700 font-medium col-span-1">{row.category}</div>
                    <div className="text-emerald-700 font-semibold text-center">{row.low}</div>
                    <div className="text-amber-700 font-semibold text-center">{row.mid}</div>
                    <div className="text-red-600 font-semibold text-center">{row.high}</div>
                  </div>
                ))}
                <div className="grid grid-cols-4 py-2.5 px-3 bg-slate-900 rounded-lg mt-1">
                  <div className="text-white font-bold text-xs">Total estimate</div>
                  <div className="text-emerald-400 font-bold text-xs text-center">~£1,220</div>
                  <div className="text-amber-400 font-bold text-xs text-center">~£1,765</div>
                  <div className="text-red-400 font-bold text-xs text-center">~£2,570</div>
                </div>
                <div className="grid grid-cols-4 mt-1 px-3 text-xs text-slate-400">
                  <div />
                  <div className="text-center">Budget</div>
                  <div className="text-center">Moderate</div>
                  <div className="text-center">Comfortable</div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <h3 className="font-bold text-emerald-900 text-sm mb-2">Scotland saves you money on…</h3>
                <ul className="space-y-1.5">
                  {[
                    "✓ All NHS prescriptions — FREE (saves up to £120/year vs England)",
                    "✓ Bus travel under 22 or over 60 — FREE",
                    "✓ University tuition (Scottish domiciled) — FREE",
                    "✓ Eye tests — FREE for all",
                    "✓ Dental check-ups — free for under-26s and over-60s",
                    "✓ Free school meals P1–P5 (saves ~£500/year per child)",
                  ].map((item) => (
                    <li key={item} className="text-xs text-emerald-800">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="font-bold text-amber-900 text-sm mb-2">Edinburgh is expensive for…</h3>
                <ul className="space-y-1.5">
                  {[
                    "⚠ Rent — up 14.7% in one year, one of UK's fastest-rising",
                    "⚠ Festival season (August) — pubs, restaurants, Airbnbs double or triple",
                    "⚠ Parking — city centre pay-and-display from £4/hour",
                    "⚠ Tourist-area restaurants — stick to side streets",
                    "⚠ Short-term lets — strict licensing, limited supply drives prices up",
                    "⚠ Energy bills — old stone tenement buildings can be draughty",
                  ].map((item) => (
                    <li key={item} className="text-xs text-amber-800">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Edinburgh average salaries</h3>
              {[
                { role: "Software engineer", salary: "£45,000–£75,000", note: "Strong tech sector — Amazon, Skyscanner, FanDuel" },
                { role: "NHS Band 5 nurse", salary: "£30,229–£37,664", note: "NHS Lothian — NHS pay scales" },
                { role: "Teacher (probationary)", salary: "£32,217", note: "Local authority, after probation period" },
                { role: "Retail / hospitality", salary: "£22,000–£27,000", note: "Scottish Living Wage is £12.00/hr (2024)" },
                { role: "Financial services", salary: "£38,000–£65,000", note: "Edinburgh is a major UK financial centre" },
                { role: "University lecturer", salary: "£40,000–£60,000", note: "University of Edinburgh, Heriot-Watt, Napier" },
              ].map((r) => (
                <div key={r.role} className="flex items-start justify-between py-2 border-b border-slate-100 last:border-0 gap-3">
                  <div>
                    <div className="font-semibold text-slate-900 text-xs">{r.role}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{r.note}</div>
                  </div>
                  <div className="text-xs font-bold text-green-700 flex-shrink-0">{r.salary}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "rent" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Edinburgh rental market:</strong> Rents have risen sharply — up ~14.7% in 2022–23. Competition is fierce, especially in summer and at university start (September). Have references, proof of income (3x monthly rent), and ID ready before viewing.
              </p>
            </div>
            <div className="space-y-3">
              {RENT_DATA.map((r) => (
                <div key={r.area} className="bg-white rounded-xl border border-slate-200 p-4">
                  <div className="font-bold text-slate-900 text-sm mb-2">📍 {r.area}</div>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <div className="text-xs font-bold text-slate-700">{r.studio}</div>
                      <div className="text-xs text-slate-400 mt-0.5">Studio</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <div className="text-xs font-bold text-slate-700">{r.one}</div>
                      <div className="text-xs text-slate-400 mt-0.5">1 bed</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-2 text-center">
                      <div className="text-xs font-bold text-slate-700">{r.two}</div>
                      <div className="text-xs text-slate-400 mt-0.5">2 bed</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{r.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Where to find rentals</h3>
              <div className="space-y-1.5">
                {[
                  { name: "Rightmove", url: "https://www.rightmove.co.uk/property-to-rent/find.html?locationIdentifier=REGION%5E475", desc: "Largest UK portal — most Edinburgh listings" },
                  { name: "Citylets", url: "https://www.citylets.co.uk/", desc: "Scotland's leading rental portal — Edinburgh-focused" },
                  { name: "ESPC", url: "https://www.espc.com/search/?type=property-to-let", desc: "Edinburgh Solicitors Property Centre — trusted local agent" },
                  { name: "SpareRoom", url: "https://www.spareroom.co.uk/flatshare/scotland/edinburgh", desc: "Best for flatsharing and house shares" },
                  { name: "Gumtree Edinburgh", url: "https://www.gumtree.com/flats-houses/edinburgh", desc: "Direct landlord listings — less regulated, check carefully" },
                ].map((l) => (
                  <a key={l.name} href={l.url} target="_blank" rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div>
                      <div className="text-xs font-semibold text-slate-900">{l.name}</div>
                      <div className="text-xs text-slate-400">{l.desc}</div>
                    </div>
                    <span className="text-xs text-green-600 font-bold flex-shrink-0 ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "food" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Supermarket comparison</h3>
              <p className="text-xs text-slate-500 mb-4">Budget picks: Aldi and Lidl consistently 20–30% cheaper than mid-range supermarkets for equivalent products.</p>
              <div className="space-y-3">
                {SUPERMARKETS.map((s) => (
                  <div key={s.name} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{s.name}</div>
                        <div className={`text-xs font-semibold mt-0.5 ${s.type === "Discount" ? "text-emerald-600" : s.type === "Premium" ? "text-violet-600" : "text-amber-600"}`}>{s.type}</div>
                      </div>
                      <div className="text-xs font-bold text-slate-700 text-right">
                        {s.tipical_shop}<span className="text-slate-400 font-normal">/week</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 mb-1">📍 {s.locations}</div>
                    <div className="text-xs text-slate-600 italic">{s.verdict}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Food price benchmarks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { item: "Pint of milk (2L)", price: "£1.20–1.60" },
                  { item: "Large white loaf", price: "£1.00–1.50" },
                  { item: "Dozen eggs", price: "£2.00–3.50" },
                  { item: "Chicken breast (500g)", price: "£3.50–5.00" },
                  { item: "Cheddar (400g)", price: "£2.50–4.00" },
                  { item: "Pasta (500g)", price: "£0.70–1.50" },
                  { item: "Pint of beer (pub)", price: "£4.50–6.50" },
                  { item: "Coffee (flat white)", price: "£3.00–4.50" },
                  { item: "Meal for 2 (mid restaurant)", price: "£45–80" },
                  { item: "Takeaway pizza (large)", price: "£12–18" },
                  { item: "Edinburgh fish & chips", price: "£8–12" },
                  { item: "Farmers' market veg box", price: "£12–20" },
                ].map((p) => (
                  <div key={p.item} className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-600">{p.item}</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">{p.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Budget food tips for Edinburgh</h3>
              <div className="space-y-2">
                {[
                  { tip: "Edinburgh Farmers' Markets", desc: "Saturday at Castle Terrace and Sunday at Stockbridge Market — fresh, local produce, often cheaper than supermarkets for seasonal veg." },
                  { tip: "OLIO app", desc: "Free food-sharing app — neighbours give away surplus food for free. Very active in Edinburgh." },
                  { tip: "Too Good To Go app", desc: "Buy surplus food from Edinburgh restaurants and cafés at 1/3 price at end of day." },
                  { tip: "Asian supermarkets", desc: "Wing Lee Hong (Dumbiedykes), International Food Store (Leith Walk), New Asia (Nicholson St) offer much cheaper rice, noodles, spices, and fresh veg." },
                  { tip: "Lidl/Aldi Thursdays", desc: "New weekly specials drop every Thursday. The 'middle aisle' has incredible value on non-food items too." },
                  { tip: "Lidl bakery", desc: "Hot rolls, croissants, and bread from in-store bakeries from around 50p — closing time sees further reductions." },
                ].map((t) => (
                  <div key={t.tip} className="border-b border-slate-100 last:border-0 pb-2 last:pb-0">
                    <div className="font-semibold text-slate-900 text-xs">{t.tip}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "utilities" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Typical utility costs in Edinburgh (2024)</h3>
              <div className="space-y-3">
                {[
                  { utility: "Electricity & gas (combined)", cost: "£80–180/month", note: "Depends heavily on flat size and age. Old stone tenements can be expensive to heat. Look for EPC rating C or above when renting.", tip: "Compare on USwitch or Compare the Market. Scottish Power, OVO, and Octopus are common suppliers." },
                  { utility: "Water (Scottish Water)", cost: "~£25–35/month", note: "Charged through council tax in most Edinburgh properties — you don't choose your supplier. Scottish Water is one of the UK's highest-rated water companies.", tip: "Check your council tax bill — water charges are included." },
                  { utility: "Council tax (Band B — most tenements)", cost: "£121/month (single person: 25% discount)", note: "Edinburgh council tax rates 2024/25: Band A £975, Band B £1,137, Band C £1,300, Band D £1,462 per year.", tip: "Single occupancy gets 25% discount. Students get full exemption. Apply at edinburgh.gov.uk/council-tax." },
                  { utility: "Internet / broadband", cost: "£25–55/month", note: "Edinburgh has excellent full-fibre coverage from Openreach, Virgin Media, and community fibre providers.", tip: "Check comparison sites. Students: university halls include internet. Many providers offer 6-month student deals." },
                  { utility: "TV licence", cost: "£13.25/month (£169.50/year)", note: "Required if you watch live TV or use BBC iPlayer. Under-22s do not get a discount — no Scottish exemption.", tip: "Students living in halls: one licence may cover the building — check with your halls." },
                  { utility: "Mobile phone", cost: "£15–45/month", note: "VOXI (Vodafone) and giffgaff offer good SIM-only deals. Coverage in Edinburgh city centre is generally good.", tip: "Under-22s: check for student SIM deals at VOXI, Three, or giffgaff — often £10–15/month unlimited." },
                ].map((u) => (
                  <div key={u.utility} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="font-bold text-slate-900 text-sm">{u.utility}</div>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex-shrink-0">{u.cost}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-1.5">{u.note}</p>
                    <div className="text-xs text-sky-600 bg-sky-50 rounded-lg px-2.5 py-1.5">💡 {u.tip}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "help" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Food banks in Edinburgh</h3>
              <p className="text-xs text-slate-500 mb-3 leading-relaxed">Food banks require a referral — this can come from a GP, social worker, health visitor, Citizens Advice, or many other agencies. No one is turned away in a genuine emergency.</p>
              <div className="space-y-2">
                {[
                  { name: "Edinburgh Foodbank (Trussell Trust)", locations: "Gorgie, Muirhouse, Craigmillar, Wester Hailes, Restalrig, Newhaven", contact: "07710 288 543", link: "https://edinburgh.foodbank.org.uk/" },
                  { name: "Cyrenians Food Bank", locations: "Norton Park and partner sites across Edinburgh", contact: "0131 475 2354", link: "https://www.cyrenians.scot/" },
                  { name: "Social Bite", locations: "Hunter Square, Shandwick Place", contact: "Edinburgh city centre cafés", link: "https://social-bite.co.uk/" },
                  { name: "Community Larder (Greyfriars Kirk)", locations: "Greyfriars Place, EH1 2QQ", contact: "Refer via church or Citizens Advice", link: "https://www.greyfriarskirk.com/" },
                ].map((fb) => (
                  <div key={fb.name} className="border border-slate-100 rounded-xl p-3">
                    <div className="font-semibold text-slate-900 text-xs">{fb.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">📍 {fb.locations}</div>
                    <div className="text-xs text-slate-500 mt-0.5">📞 {fb.contact}</div>
                    <a href={fb.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-green-600 hover:underline mt-1 inline-block">Website →</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Benefits you may be entitled to</h3>
              <div className="space-y-2">
                {[
                  { name: "Universal Credit", desc: "Main UK working-age benefit — covers housing costs, children, disability. Apply at gov.uk/universal-credit." },
                  { name: "Scottish Child Payment", desc: "£26.70/week per child under 16 for low-income families. Apply at mygov.scot." },
                  { name: "Council Tax Reduction", desc: "Reduction or exemption on council tax for low-income households. Apply at edinburgh.gov.uk." },
                  { name: "Discretionary Housing Payment", desc: "Extra help with rent if UC doesn't cover full housing costs. Apply to the council." },
                  { name: "Edinburgh Helps — local crisis fund", desc: "Emergency grants for Edinburgh residents in financial crisis — food, fuel, white goods. Contact your local council office or CAB." },
                  { name: "Water Tariff Helpline", desc: "Scottish Water offers payment plans and support for low-income customers. Call 0800 0778 778." },
                  { name: "Fuel vouchers", desc: "Emergency fuel vouchers available via CAB and foodbanks — especially in winter. Ask when collecting a food parcel." },
                ].map((b) => (
                  <div key={b.name} className="border border-slate-100 rounded-xl p-3">
                    <div className="font-semibold text-slate-900 text-xs">{b.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-5">
              <strong className="text-sm">Free money/debt advice</strong>
              <p className="text-xs text-slate-300 mt-1 mb-3">Citizens Advice Edinburgh offer free, confidential advice on all financial matters — benefits, debt, energy costs. No appointment needed for drop-in sessions.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.citizensadviceedinburgh.org.uk/" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Citizens Advice Edinburgh →
                </a>
                <a href="https://www.stepchange.org/" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  StepChange Debt Charity →
                </a>
                <a href="https://www.mygov.scot/benefits-calculator/" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Benefits calculator →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
