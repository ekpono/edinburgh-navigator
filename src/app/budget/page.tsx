"use client";

import { useState } from "react";
import { COUNCIL_TAX_BANDS, COUNCIL_TAX_EXEMPTIONS, BUDGET_FACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "tax", label: "Your Council Tax" },
  { id: "spend", label: "Where Money Goes" },
  { id: "pressures", label: "Budget Pressures" },
  { id: "help", label: "Financial Help" },
];

export default function BudgetPage() {
  const [tab, setTab] = useState("tax");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Tax & Budget" subtitle="Council tax, spending, and financial help" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Tax <span className="text-amber-500">& Budget.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh's council tax funds schools, roads, care, and housing. Understand what you pay and how to reduce it.</p>
          <div className="mt-3 grid sm:grid-cols-3 gap-3">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-amber-700">{BUDGET_FACTS.annualBudget}</div>
              <div className="text-xs text-amber-800 mt-0.5">Annual budget</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-red-700">{BUDGET_FACTS.gap}</div>
              <div className="text-xs text-red-800 mt-0.5">Funding gap</div>
            </div>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-3 text-center">
              <div className="text-xl font-bold text-slate-700">{BUDGET_FACTS.councilTaxIncrease2024}</div>
              <div className="text-xs text-slate-600 mt-0.5">Recent increase</div>
            </div>
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "tax" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Check Your Band</h3>
              <p className="text-xs text-slate-500 mb-3">Your council tax band is based on your property's 1991 valuation. Check it at the Scottish Assessors Association.</p>
              <a href="https://www.saa.gov.uk/" target="_blank" rel="noreferrer"
                className="inline-block bg-amber-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-amber-700 transition-colors">
                Check your band at saa.gov.uk →
              </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 bg-slate-50 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Edinburgh Council Tax 2024/25</h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold text-slate-500 border-b border-slate-100">
                    <th className="px-5 py-2.5 text-left">Band</th>
                    <th className="px-5 py-2.5 text-right">Annual</th>
                    <th className="px-5 py-2.5 text-right">Monthly</th>
                    <th className="px-5 py-2.5 text-left hidden sm:table-cell">Typical homes</th>
                  </tr>
                </thead>
                <tbody>
                  {COUNCIL_TAX_BANDS.map((row, i) => (
                    <tr key={row.band} className={`border-b border-slate-100 last:border-0 text-xs ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <td className="px-5 py-3 font-bold text-slate-900">Band {row.band}</td>
                      <td className="px-5 py-3 text-right font-semibold text-amber-700">{row.annual}</td>
                      <td className="px-5 py-3 text-right text-slate-600">{row.monthly}</td>
                      <td className="px-5 py-3 text-slate-500 hidden sm:table-cell">
                        {row.band === "A" ? "Smallest flats" :
                         row.band === "B" ? "Smaller flats/houses" :
                         row.band === "C" ? "Mid-size flats" :
                         row.band === "D" ? "Average houses" :
                         row.band === "E" ? "Larger family homes" :
                         row.band === "F" ? "Large houses" :
                         row.band === "G" ? "Large detached homes" :
                         "Largest/most valuable"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Discounts & Exemptions</h3>
              <div className="space-y-3">
                {COUNCIL_TAX_EXEMPTIONS.map((ex) => (
                  <div key={ex.group} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                    <div className="size-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{ex.group}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{ex.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-sm text-amber-900">Appeal your band</strong>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">If you think your property is in the wrong band, you can appeal to the Scottish Assessors Association within 6 months of moving in, or at any time if you think the band is wrong. Around 1 in 5 appeals succeed in Scotland.</p>
              <a href="https://www.saa.gov.uk/" target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs font-bold text-amber-700 hover:underline">Appeal at saa.gov.uk →</a>
            </div>
          </div>
        )}

        {tab === "spend" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4">How Edinburgh Spends Your Money</h3>
              {[
                { label: "Education & Schools", pct: 38, colour: "bg-blue-500", detail: "The largest single spend — Edinburgh employs thousands of teachers and runs 100+ schools." },
                { label: "Health & Social Care", pct: 22, colour: "bg-rose-500", detail: "Adult social care, Edinburgh Integration Joint Board, and community health services." },
                { label: "Infrastructure & Roads", pct: 11, colour: "bg-amber-500", detail: "Potholes, streetlights, bridges, pavements, and major road projects." },
                { label: "Housing & Homelessness", pct: 9, colour: "bg-teal-500", detail: `Homeless prevention, ${BUDGET_FACTS.housingSpend} housing programme over 5 years.` },
                { label: "Environment & Waste", pct: 8, colour: "bg-emerald-500", detail: "Bin collections, recycling centres, parks, and environmental health." },
                { label: "Culture & Leisure", pct: 7, colour: "bg-violet-500", detail: "Libraries, leisure centres, museums, and Edinburgh's festival support." },
                { label: "Corporate & Other", pct: 5, colour: "bg-slate-400", detail: "IT, HR, finance, legal, and Council administrative costs." },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                    <span className="text-xs font-bold text-slate-600">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-1.5">
                    <div className={`${item.colour} h-2 rounded-full transition-all`} style={{ width: `${item.pct}%` }} />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Where does Edinburgh's money come from?</strong>
              <div className="mt-3 space-y-2">
                {[
                  { source: "Scottish Government grant", pct: "51%" },
                  { source: "Council Tax", pct: "18%" },
                  { source: "Non-domestic rates (business tax)", pct: "17%" },
                  { source: "Fees, charges & ring-fenced grants", pct: "14%" },
                ].map((s) => (
                  <div key={s.source} className="flex justify-between text-xs">
                    <span className="text-slate-300">{s.source}</span>
                    <span className="font-bold text-white">{s.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "pressures" && (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-900 text-sm mb-2">Edinburgh's {BUDGET_FACTS.gap} Funding Gap</h3>
              <p className="text-xs text-red-800 leading-relaxed">Like most Scottish councils, Edinburgh faces a structural funding gap — costs rising faster than income. This affects services across the city. The council raises council tax and cuts discretionary spending to bridge the gap each year.</p>
            </div>
            {[
              {
                title: "Cost pressures",
                emoji: "📈",
                items: [
                  "Inflation — every service costs more to run",
                  "Rising demand for social care as population ages",
                  "Housing emergency — more people need emergency accommodation",
                  "Rising pupil numbers requiring more school places",
                  "Infrastructure backlog — roads, bridges, and buildings",
                ],
              },
              {
                title: "What's been cut or reduced",
                emoji: "✂️",
                items: [
                  "Reduced opening hours at some libraries and leisure centres",
                  "Fewer road and pothole repairs per year",
                  "Smaller grants to community organisations",
                  "Reduced Council-funded events programme",
                  "Efficiency savings across back-office functions",
                ],
              },
              {
                title: "What's protected",
                emoji: "🛡️",
                items: [
                  "Statutory services — homeless duty, social work, schools",
                  "NHS-integrated adult social care spending",
                  "Road safety infrastructure",
                  "Emergency out-of-hours services",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-3">{section.emoji} {section.title}</h3>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Have your say</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Edinburgh Council consults residents on budget decisions each autumn. You can respond to consultations, attend public meetings, and contact your local councillor.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <a href="https://www.edinburgh.gov.uk/budget" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-slate-700 transition-colors">
                  Budget consultation →
                </a>
                <a href="https://www.edinburgh.gov.uk/councillors" target="_blank" rel="noreferrer"
                  className="text-xs font-bold border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                  Find your councillor →
                </a>
              </div>
            </div>
          </div>
        )}

        {tab === "help" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-sm text-amber-900">Struggling to pay council tax?</strong>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">Contact Edinburgh Council immediately — do not ignore bills. They can set up payment plans, check your eligibility for reductions, and refer you to further support.</p>
              <div className="font-mono font-bold text-sm text-amber-900 mt-2">0131 608 1111</div>
            </div>

            {[
              {
                title: "Council Tax Reduction (CTR)",
                desc: "If you're on a low income or certain benefits, you may be entitled to a reduction on your council tax bill — up to 100% off. Apply through Edinburgh Council.",
                link: "https://www.edinburgh.gov.uk/council-tax-reduction",
                linkLabel: "Apply for CTR →",
                badge: "Up to 100% off",
                badgeColour: "bg-emerald-100 text-emerald-800",
              },
              {
                title: "Scottish Welfare Fund (Crisis Grants)",
                desc: "One-off crisis grants for people in severe financial hardship — can include help with essential bills, food, and household costs. Administered by Edinburgh Council.",
                link: "https://www.edinburgh.gov.uk/scottish-welfare-fund",
                linkLabel: "Apply for crisis grant →",
                badge: "One-off grant",
                badgeColour: "bg-blue-100 text-blue-800",
              },
              {
                title: "Discretionary Housing Payment",
                desc: "If Housing Benefit or the housing element of Universal Credit doesn't cover your rent, you may get a top-up. Apply through Edinburgh Council.",
                link: "https://www.edinburgh.gov.uk/discretionary-housing-payment",
                linkLabel: "Apply →",
                badge: "Rent support",
                badgeColour: "bg-violet-100 text-violet-800",
              },
              {
                title: "Fuel Poverty Support",
                desc: "Home Energy Scotland provides free advice on energy bills, grants for insulation and heating, and referrals to energy supplier social tariffs.",
                link: "https://www.homeenergyscotland.org/",
                linkLabel: "Get energy help →",
                badge: "Heating & bills",
                badgeColour: "bg-orange-100 text-orange-800",
              },
              {
                title: "Edinburgh Foodbanks",
                desc: "Trussell Trust foodbanks operate across Edinburgh — access via referral from Citizens Advice, GP, or social worker. The Basics Bank and other organisations also operate in the city.",
                link: "https://www.edinburgh.gov.uk/emergency-food",
                linkLabel: "Find your nearest →",
                badge: "Food",
                badgeColour: "bg-rose-100 text-rose-800",
              },
              {
                title: "Citizens Advice Edinburgh — Free Benefits Check",
                desc: "CAE offers free benefits checks — many households miss out on thousands of pounds of entitlements. They can also help with debt advice and budgeting support.",
                link: "https://www.cas.org.uk/bureaux/edinburgh",
                linkLabel: "Book a check →",
                badge: "Free advice",
                badgeColour: "bg-teal-100 text-teal-800",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                  <div className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeColour}`}>{item.badge}</div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs font-semibold text-amber-700 hover:underline">{item.linkLabel}</a>
              </div>
            ))}

            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Universal Credit & Benefits Advice</strong>
              <p className="text-xs text-slate-300 mt-1">For UC, DWP benefits, and Scottish benefits (ADP, Scottish Child Payment): Citizens Advice Edinburgh <strong>0131 557 1500</strong> or Social Security Scotland <strong>0800 182 2222</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
