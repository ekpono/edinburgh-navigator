"use client";

import { useState } from "react";
import { HOUSING_PLATFORMS, HOUSING_RENTAL_PRICES, TENANT_RIGHTS, TENANT_FAQS, TENANT_GUIDE_SECTIONS, SOCIAL_HOUSING, SERVICE_CONTACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";

const TABS = [
  { id: "find", label: "Find a Home" },
  { id: "guide", label: "Tenant Guide" },
  { id: "social", label: "Social Housing" },
  { id: "rights", label: "Tenant Rights" },
  { id: "eviction", label: "Facing Eviction" },
  { id: "emergency", label: "Emergency Housing" },
];

export default function HousingPage() {
  const [tab, setTab] = useState("find");
  const [openQ, setOpenQ] = useState<string | null>(null);
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["edinburgh-council-housing", "shelter-scotland", "edinburgh-housing-advice-partnership", "citizens-advice"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Housing" subtitle="Scottish tenancy law — your rights are stronger here" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Housing <span className="text-blue-500">in Edinburgh.</span></h1>
          <p className="text-sm text-slate-600 mb-3">Edinburgh has one of the UK's most acute housing pressures — but also some of the strongest tenant protections in Britain.</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs text-blue-900"><strong>⚖️ Scotland is different:</strong> No-fault eviction is banned. No Section 21 exists here. The Private Residential Tenancy (PRT) gives you open-ended security of tenure. Your landlord cannot simply ask you to leave — they must prove a legal ground.</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "find" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Typical Edinburgh Rents (2025)</h3>
              <div className="space-y-2">
                {HOUSING_RENTAL_PRICES.map((r) => (
                  <div key={r.type} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-xs text-slate-700 font-medium">{r.type}</span>
                    <span className="text-xs font-bold text-slate-900">£{r.min.toLocaleString()}–£{r.max.toLocaleString()}/mo</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3">Ranges vary significantly by area. Leith and Dalry are more affordable; New Town and Stockbridge command the highest rents.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-xs text-amber-900">No letting agent fees in Scotland</strong>
              <p className="text-xs text-amber-800 mt-1">It is illegal for letting agents in Scotland to charge tenants fees (Tenant Fees Act 2012). If charged, report to Trading Standards.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {HOUSING_PLATFORMS.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer"
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all block">
                  <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</div>
                  <div className="text-xs font-semibold text-sky-600 mt-2">Browse listings →</div>
                </a>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <strong className="text-sm text-slate-900">Tips for Edinburgh's rental market</strong>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Good properties go within hours — have references ready before you start looking",
                  "ESPC is Scotland-specific and often lists before national sites",
                  "SpareRoom is essential for room shares (many Edinburgh flatshares here)",
                  "OpenRent (no agency fee) is growing fast in Edinburgh",
                  "Avoid any agent who asks for money before you view",
                ].map((tip, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-sky-500 flex-shrink-0 mt-0.5">→</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === "guide" && (
          <div className="space-y-5">
            {/* Scotland vs England/Wales note */}
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">⚠️</span>
                <div>
                  <strong className="text-sm text-amber-900">Scotland has its own tenancy law — different from England</strong>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    The PDF below covers the <strong>Renters' Rights Act 2026</strong>, which applies to <strong>England and Wales only</strong>.
                    Edinburgh tenants are protected by the <strong>Housing (Scotland) Act 2016</strong> and the <strong>Private Residential Tenancy (PRT)</strong>.
                    Scottish law is actually stronger in many areas — no-fault eviction is banned, deposit protection is mandatory, and agent fees are illegal.
                    Read the PDF for general context, then use the Q&A below for what actually applies to you in Edinburgh.
                  </p>
                </div>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 bg-slate-900 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Renters' Rights Act — Information Sheet (2026)</div>
                  <div className="text-xs text-slate-400 mt-0.5">UK Government · England & Wales · For reference</div>
                </div>
                <a
                  href="/The_Renters__Rights_Act_Information_Sheet_2026.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-sky-400 hover:underline flex-shrink-0 ml-3"
                >
                  Open PDF ↗
                </a>
              </div>
              <iframe
                src="/The_Renters__Rights_Act_Information_Sheet_2026.pdf"
                title="Renters Rights Act Information Sheet 2026"
                className="w-full border-0"
                style={{ height: "520px" }}
              />
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">Can't see the PDF? <a href="/The_Renters__Rights_Act_Information_Sheet_2026.pdf" target="_blank" rel="noreferrer" className="text-sky-600 font-semibold hover:underline">Download it directly →</a></p>
              </div>
            </div>

            {/* Edinburgh Tenant Q&A */}
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Edinburgh Tenant Questions — Answered</h3>
              <p className="text-xs text-slate-500 mb-4">The most common questions tenants ask when renting in Edinburgh, with Scotland-specific answers.</p>

              <div className="space-y-4">
                {TENANT_GUIDE_SECTIONS.map((section) => (
                  <div key={section.category} className={`rounded-xl border ${section.colour} overflow-hidden`}>
                    <div className={`px-4 py-3 border-b ${section.colour}`}>
                      <div className={`font-bold text-sm ${section.titleColour}`}>{section.emoji} {section.category}</div>
                    </div>
                    <div className="divide-y divide-white/50">
                      {section.questions.map((item) => {
                        const key = `${section.category}:${item.q}`;
                        const isOpen = openQ === key;
                        return (
                          <div key={key} className="bg-white/70">
                            <button
                              onClick={() => setOpenQ(isOpen ? null : key)}
                              className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-white/80 transition-colors"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-slate-900 text-xs leading-snug">{item.q}</div>
                                {!isOpen && (
                                  <div className="text-xs text-slate-400 mt-0.5 truncate">{item.a.slice(0, 70)}…</div>
                                )}
                              </div>
                              <span className={`text-slate-400 text-base leading-none transition-transform duration-200 flex-shrink-0 mt-0.5 ${isOpen ? "rotate-180" : ""}`}>⌄</span>
                            </button>
                            {isOpen && (
                              <div className="px-4 pb-4 pt-0 border-t border-slate-100">
                                <p className="text-xs text-slate-700 leading-relaxed mt-3">{item.a}</p>
                                {item.action && (
                                  <a
                                    href={item.action.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-3 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1.5 rounded-lg hover:bg-sky-100 transition-colors"
                                  >
                                    {item.action.label} →
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-viewing checklist */}
            <div className="bg-slate-900 text-white rounded-xl p-5">
              <h3 className="font-bold text-sm mb-3">📋 Edinburgh Pre-Viewing Checklist</h3>
              <div className="space-y-2">
                {[
                  { check: "Search landlord on Scottish Landlord Register", url: "https://www.landlordregistrationscotland.gov.uk/" },
                  { check: "Look up the EPC rating for the address", url: "https://www.scottishepcregister.org.uk/" },
                  { check: "Check the Council Tax band (saa.gov.uk)", url: "https://www.saa.gov.uk/" },
                  { check: "Check if it is a licensed HMO (if 3+ unrelated people)", url: "https://www.edinburgh.gov.uk/licences-permits/hmo-licences" },
                  { check: "Ask: what is the heating type? (gas central heating preferred)", url: null },
                  { check: "Ask: is there a Factor? Who cleans the stair?", url: null },
                  { check: "Ask: when was the property last rewired / boiler serviced?", url: null },
                  { check: "Check broadband availability (key in old tenements)", url: "https://checker.ofcom.org.uk/" },
                  { check: "Check for damp: corners of rooms, behind furniture, window reveals", url: null },
                  { check: "Visit at different times of day — check noise levels", url: null },
                  { check: "Get a written inventory with photos before you hand over any money", url: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="size-4 rounded border border-white/20 bg-white/10 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300 leading-relaxed">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">{item.check}</a>
                      ) : item.check}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Get help */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm mb-1">🏠 Shelter Scotland</div>
                <div className="text-xs text-slate-500 mb-2">Free housing advice for all tenants — eviction, repairs, deposits, rights.</div>
                <div className="font-mono font-bold text-sm text-blue-700">0808 800 4444</div>
                <div className="text-xs text-slate-400">Free from any phone, Mon–Fri 9am–5pm</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm mb-1">🤝 Citizens Advice Edinburgh</div>
                <div className="text-xs text-slate-500 mb-2">Free advice on deposits, repairs, rent disputes, and tenant rights.</div>
                <div className="font-mono font-bold text-sm text-blue-700">0131 557 1500</div>
                <div className="text-xs text-slate-400">Mon–Fri 9am–5pm</div>
              </div>
            </div>
          </div>
        )}

        {tab === "social" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Social Housing in Edinburgh</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                <p className="text-xs text-red-800"><strong>28,400 households</strong> are currently on Edinburgh's housing waiting list. Average waits are long — but understanding the system helps you maximise your priority.</p>
              </div>
            </div>
            {SOCIAL_HOUSING.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-sky-700">{item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <strong className="text-sm text-slate-900">Housing Associations in Edinburgh</strong>
              <div className="mt-2 space-y-1.5">
                {["Dunedin Canmore Housing", "Castle Rock Edinvar", "Link Housing", "Hillcrest Housing", "Wheatley Group (includes Cube)", "Places for People Scotland"].map((ha) => (
                  <div key={ha} className="text-xs text-slate-600 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-slate-400 flex-shrink-0" />{ha}
                  </div>
                ))}
              </div>
              <a href="https://www.edinburgh.gov.uk/housing" target="_blank" rel="noreferrer" className="inline-block mt-3 text-xs font-bold text-sky-600 hover:underline">Apply — edinburgh.gov.uk/housing →</a>
            </div>
          </div>
        )}

        {tab === "rights" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Tenant Rights in Scotland</h3>
              <p className="text-xs text-slate-500">Scotland's Private Residential Tenancy gives you significantly stronger rights than England's AST.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <strong className="text-sm text-slate-900">Official Renters' Rights Act information sheet (2026)</strong>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">UK Government overview of the Renters' Rights Act. Scotland has its own tenancy law, but this is useful background for reforms and terminology.</p>
              <a href="https://assets.publishing.service.gov.uk/media/69bc04b8f7b1c24d8e23ce60/The_Renters__Rights_Act_Information_Sheet_2026.pdf" target="_blank" rel="noreferrer" className="inline-block mt-3 text-xs font-bold text-sky-600 hover:underline">Read the information sheet (PDF) →</a>
            </div>
            {TENANT_RIGHTS.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-sky-700">{r.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{r.body}</p>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h4 className="font-bold text-slate-900 text-sm">Tenant & New Renter FAQs</h4>
              <div className="mt-3 space-y-3">
                {TENANT_FAQS.map((faq, i) => (
                  <div key={i} className="border border-slate-100 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-900">{faq.q}</div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Deposit protection — check yours now</strong>
              <p className="text-xs text-slate-300 mt-1">Your deposit must be in one of: SafeDeposits Scotland, Letting Protection Service Scotland, or mydeposits Scotland. If not, you can claim up to 3× the deposit.</p>
              <a href="https://www.safedepositsscotland.com/" target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs font-bold text-sky-400 hover:underline">Check SafeDeposits Scotland →</a>
            </div>
          </div>
        )}

        {tab === "eviction" && (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-5">
              <strong className="text-sm text-amber-900">⚖️ Key fact: No-fault eviction is banned in Scotland</strong>
              <p className="text-xs text-amber-800 mt-2 leading-relaxed">Your landlord cannot evict you simply because they want their property back. They must prove one of 18 legal grounds AND apply to the First-tier Tribunal. This is completely different from England's Section 21.</p>
            </div>
            {[
              { title: "If you receive a Notice to Leave", body: "A Notice to Leave starts the eviction process but does NOT mean you have to leave. You have the right to remain until the First-tier Tribunal issues an eviction order. Contact Shelter Scotland (0808 800 4444) or EHAP (0131 538 8222) immediately." },
              { title: "The 18 Eviction Grounds", body: "Legal grounds include: rent arrears (over 3 months), criminal behaviour, property required by landlord's family member, landlord selling, planning permission refused. Even valid grounds do not guarantee eviction — the Tribunal has discretion." },
              { title: "Rent Arrears — What to Do", body: "If you have arrears, contact your landlord immediately and try to agree a repayment plan in writing. Contact Citizens Advice Edinburgh (0131 557 1500) for debt and housing advice. Scottish Welfare Fund may provide emergency grants: apply at edinburgh.gov.uk." },
              { title: "What If You're Illegally Evicted?", body: "If your landlord changes locks, removes belongings, or cuts off utilities without a Tribunal order — this is a criminal offence. Call Police Scotland (101) and Shelter Scotland (0808 800 4444) immediately. You have the right to be readmitted to your home." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">{item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Shelter Scotland", num: "0808 800 4444" },
                { name: "EHAP", num: "0131 538 8222" },
                { name: "Citizens Advice Edinburgh", num: "0131 557 1500" },
                { name: "First-tier Tribunal Scotland", num: "housing.scot" },
              ].map((org) => (
                <div key={org.name} className="bg-white rounded-xl border border-slate-200 p-3">
                  <div className="font-bold text-slate-900 text-xs">{org.name}</div>
                  <div className="font-mono text-sm font-bold text-sky-700 mt-1">{org.num}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "emergency" && (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-900 text-sm mb-2">🚨 Emergency Housing — Tonight</h3>
              <p className="text-xs text-red-800 leading-relaxed mb-3">If you have nowhere safe to sleep tonight, Edinburgh Council has a 24/7 housing emergency line. You have a legal right to be assessed immediately.</p>
              <div className="font-mono font-bold text-2xl text-red-700">0131 200 2000</div>
              <div className="text-xs text-red-700 mt-1">Available 24 hours, 7 days a week</div>
            </div>
            {[
              { title: "What to say", body: "Tell them: 'I am presenting as homeless and I need an emergency assessment tonight.' They have a statutory duty to assess you. Do not leave without getting written confirmation of their decision or a reference number." },
              { title: "Streetwork Edinburgh (Rough Sleeping)", body: "If you are currently rough sleeping or know someone who is, contact Streetwork Edinburgh on 0131 553 5880. They provide immediate outreach support and can connect you with accommodation." },
              { title: "You have a legal right to be assessed", body: "Under the Housing (Scotland) Act 1987 (as amended), the council must conduct a full homelessness assessment when you present. They cannot refuse to assess you. If refused, contact Shelter Scotland immediately on 0808 800 4444." },
              { title: "Priority Need in Scotland", body: "Priority need includes: having dependent children, being pregnant, fleeing domestic abuse, having a disability or serious health condition, being a care leaver, or being at risk of serious harm. Priority need households must be provided with temporary accommodation immediately." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">{item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
