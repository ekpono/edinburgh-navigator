"use client";

import { useState } from "react";
import { EDINBURGH_BIN_GUIDE, RECYCLING_CENTRES, SERVICE_CONTACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";

const TABS = [
  { id: "report", label: "Report Problems" },
  { id: "bins", label: "Bins & Recycling" },
  { id: "bulky", label: "Bulky Items" },
  { id: "green", label: "Green Edinburgh" },
];

export default function EnvironmentPage() {
  const [tab, setTab] = useState("report");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["report-it", "bin-collections"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Clean Edinburgh" subtitle="Report, recycle, and keep Edinburgh green" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Clean <span className="text-emerald-500">Edinburgh.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh Council handles waste, recycling, and environmental issues across the city. Report problems and understand your rights.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "report" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 text-sm mb-3">Report It — Edinburgh Council</h3>
              <p className="text-xs text-emerald-800 mb-3">Edinburgh Council accepts reports for fly-tipping, potholes, broken streetlights, graffiti, abandoned vehicles, and more.</p>
              <a href="https://www.edinburgh.gov.uk/report" target="_blank" rel="noreferrer"
                className="inline-block bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-emerald-800 transition-colors">
                Report online — edinburgh.gov.uk →
              </a>
            </div>
            {[
              { title: "Fly-tipping", emoji: "🗑️", body: "Report fly-tipping on public land at edinburgh.gov.uk/report-it or call 0131 200 2000. Provide the exact location. The council will investigate and remove it. For fly-tipping on private land, the landowner is responsible for removal." },
              { title: "Potholes & Road Damage", emoji: "🚗", body: "Report potholes and road damage at edinburgh.gov.uk/report-it. The council has a duty to repair roads that pose a danger. For urgent hazards, call 0131 200 2000." },
              { title: "Broken Streetlights", emoji: "💡", body: "Report via edinburgh.gov.uk/report-it. Include the lamp post number (usually on the column) or a precise location. Most repairs are completed within 5 working days." },
              { title: "Graffiti & Vandalism", emoji: "🎨", body: "Report graffiti on public property at edinburgh.gov.uk/report-it. For offensive graffiti (racial, sexual, threatening), mark it as urgent. The council aims to remove offensive graffiti within 24 hours." },
              { title: "Abandoned Vehicles", emoji: "🚘", body: "Report abandoned vehicles to DVLA and Edinburgh Council. If a vehicle appears to have been abandoned for over 24 hours, call 0131 200 2000. The council can arrange removal." },
              { title: "Noise Complaints", emoji: "🔊", body: "Report persistent noise nuisance to Edinburgh Council Environmental Health: 0131 200 2000. This includes loud music, construction outside permitted hours (Mon–Fri 8am–6pm, Sat 8am–1pm), and barking dogs." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">{item.emoji} {item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "bins" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Find Your Collection Day</h3>
              <a href="https://www.edinburgh.gov.uk/bin-collection-days" target="_blank" rel="noreferrer"
                className="inline-block bg-sky-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-sky-700 transition-colors">
                Check your bin day →
              </a>
            </div>
            {EDINBURGH_BIN_GUIDE.map((bin) => (
              <div key={bin.bin} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`size-4 rounded-sm ${bin.bin.startsWith("Blue") ? "bg-blue-500" : bin.bin.startsWith("Green") ? "bg-green-500" : "bg-slate-500"}`} />
                  <strong className="text-sm text-slate-900">{bin.bin} Bin</strong>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-emerald-700 mb-1">✅ Goes in:</div>
                    <ul className="space-y-1">
                      {bin.contents.map((item) => <li key={item} className="text-xs text-slate-600">{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-red-600 mb-1">❌ Does NOT go in:</div>
                    <ul className="space-y-1">
                      {bin.not.map((item) => <li key={item} className="text-xs text-slate-600">{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-xs text-amber-900">Contamination fines</strong>
              <p className="text-xs text-amber-800 mt-1">Putting the wrong items in your recycling bin contaminates the load. Edinburgh Council can issue fixed penalty notices for persistent contamination. When in doubt, put it in the grey bin.</p>
            </div>
          </div>
        )}

        {tab === "bulky" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Bulky Item Collection</h3>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">Edinburgh Council offers a bulky waste collection service for large items (furniture, white goods, mattresses). The charge depends on the number of items.</p>
              <a href="https://www.edinburgh.gov.uk/bulkywaste" target="_blank" rel="noreferrer"
                className="inline-block bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors">
                Book bulky collection →
              </a>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Recycling Centres</h3>
              <div className="text-xs text-slate-500 mb-3">Take large items, DIY waste, electronics, and anything that won't go in your bins for free.</div>
              {RECYCLING_CENTRES.map((centre) => (
                <div key={centre.name} className="border-b border-slate-100 last:border-0 py-3">
                  <div className="font-semibold text-slate-900 text-xs">{centre.name}</div>
                  <div className="text-xs text-slate-500">📍 {centre.address}</div>
                  <div className="text-xs text-emerald-600">🕐 {centre.hours}</div>
                </div>
              ))}
            </div>
            {[
              { title: "Furniture Reuse", body: "Before disposing of furniture, consider donation. Cyrenians and Bethany Christian Trust accept furniture donations and provide affordable second-hand furniture. Call to check what they currently need." },
              { title: "Electronics (WEEE)", body: "All recycling centres accept electrical and electronic equipment for free. Some supermarkets also have small appliance drop-off points. Do not put electronics in general waste — it is illegal." },
              { title: "Paints and Chemicals", body: "Take to recycling centres only. Never pour paints, oils, or chemicals down drains — this is a criminal offence and causes serious environmental damage." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-slate-900">{item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "green" && (
          <div className="space-y-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 text-sm mb-2">Edinburgh's Climate Goals</h3>
              <p className="text-xs text-emerald-800 leading-relaxed">City of Edinburgh Council has committed to becoming net zero by 2030. The city has an extensive cycling infrastructure, 112 parks, and the Water of Leith corridor.</p>
            </div>
            {[
              { emoji: "🌳", name: "The Meadows", desc: "Huge open space — tennis, sports, picnics. Edinburgh's most popular park.", address: "EH9 — free entry, always open" },
              { emoji: "🏔️", name: "Holyrood Park & Arthur's Seat", desc: "Ancient volcanic landscape within the city. Wildlife, walks, stunning views.", address: "EH8 — free entry, always open" },
              { emoji: "🌿", name: "Royal Botanic Garden", desc: "Free entry to 70 acres of world-renowned plant collections.", address: "Inverleith Row, EH3 5LR — free" },
              { emoji: "🌊", name: "Water of Leith Walkway", desc: "12-mile walking and cycling route through the city from Balerno to Leith.", address: "waterofleith.org.uk — free, always open" },
              { emoji: "🌺", name: "Saughton Park", desc: "Renovated rose garden, café, bandstand, free events in summer.", address: "Balgreen Road, EH12 — free" },
              { emoji: "🌲", name: "Corstorphine Hill", desc: "Woodland walks with city views. Zoo adjacent. Quiet and accessible.", address: "Clermiston Road, EH12 — free" },
            ].map((park) => (
              <div key={park.name} className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{park.emoji}</span>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{park.name}</div>
                  <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{park.desc}</div>
                  <div className="text-xs text-emerald-600 mt-1 font-medium">{park.address}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
