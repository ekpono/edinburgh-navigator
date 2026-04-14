"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { CHARITY_ORGS, COMMUNITY_GROUPS, SERVICE_CONTACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";

const EdinburghMap = dynamic(() => import("@/components/edinburgh-map"), { ssr: false, loading: () => <div className="h-96 bg-slate-200 rounded-xl flex items-center justify-center text-sm text-slate-500">Loading map…</div> });

const TABS = [
  { id: "map", label: "The Map" },
  { id: "groups", label: "Community Groups" },
  { id: "events", label: "What's On" },
  { id: "faith", label: "Faith & Worship" },
];

export default function CommunityPage() {
  const [tab, setTab] = useState("map");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["edinburgh-central-library", "citizens-advice"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Community Hub" subtitle="Groups, events, and your local map" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Community <span className="text-teal-500">Hub.</span></h1>
          <p className="text-sm text-slate-600">Find your community in Edinburgh — local groups, events, services and an interactive map of key locations.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "map" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-3 text-xs text-slate-500 flex flex-wrap gap-3">
              {[["📚", "Library"], ["🏥", "Health"], ["🤲", "Support"], ["🌳", "Park"], ["💼", "Employment"], ["🏛️", "Council"]].map(([emoji, label]) => (
                <span key={label} className="flex items-center gap-1">{emoji} {label}</span>
              ))}
            </div>
            <EdinburghMap />
          </div>
        )}

        {tab === "groups" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Get Involved in Edinburgh</h3>
              <p className="text-xs text-slate-500">Edinburgh has over 2,500 voluntary organisations and active community councils across every neighbourhood.</p>
            </div>
            {COMMUNITY_GROUPS.map((g) => (
              <div key={g.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{g.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{g.focus}</div>
                <a href={g.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-teal-600 hover:underline mt-2 inline-block">Visit →</a>
              </div>
            ))}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Charity Organisations in Edinburgh</h3>
              <p className="text-xs text-slate-500">Support services, food, housing, and advice from local charities.</p>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {CHARITY_ORGS.map((org) => (
                  <div key={org.name} className="border border-slate-100 rounded-lg p-3">
                    <div className="text-xs font-semibold text-slate-900">{org.name}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">{org.focus}</div>
                    <a href={org.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-teal-600 hover:underline mt-2 inline-block">Visit →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <strong className="text-sm text-teal-900">Community Councils</strong>
              <p className="text-xs text-teal-800 mt-1 leading-relaxed">Edinburgh has 18 community councils — the grassroots democratic link between residents and the City Council. They hold public meetings, consult on planning, and run local campaigns. Find yours at edinburgh.gov.uk/community-councils.</p>
            </div>
          </div>
        )}

        {tab === "events" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">What's On in Edinburgh</h3>
              <div className="space-y-2">
                {[
                  { name: "Edinburgh Council Events", desc: "Official city events calendar — parks events, community festivals, council meetings.", link: "https://www.edinburgh.gov.uk/events" },
                  { name: "The List", desc: "Edinburgh's definitive arts, culture, and events guide — theatre, music, exhibitions.", link: "https://www.list.co.uk/" },
                  { name: "Eventbrite Edinburgh", desc: "Local events, community meetups, free events across the city.", link: "https://www.eventbrite.co.uk/d/united-kingdom--edinburgh/events/" },
                  { name: "Edinburgh Fringe (August)", desc: "World's largest arts festival — many free events and community performances.", link: "https://www.edfringe.com/" },
                ].map((ev) => (
                  <a key={ev.name} href={ev.link} target="_blank" rel="noreferrer"
                    className="flex items-start justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors block">
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{ev.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{ev.desc}</div>
                    </div>
                    <span className="text-xs text-teal-600 font-bold flex-shrink-0 ml-3">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Key Annual Events</h3>
              {[
                { month: "January", event: "Hogmanay (Scots New Year) celebrations continue", free: true },
                { month: "April", event: "Edinburgh Science Festival — many free events", free: true },
                { month: "June", event: "Royal Highland Show (Ingliston)", free: false },
                { month: "August", event: "Edinburgh Fringe — world's biggest arts festival", free: "Some" },
                { month: "August", event: "Edinburgh International Festival", free: "Some" },
                { month: "August", event: "Royal Edinburgh Military Tattoo", free: false },
                { month: "December", event: "Edinburgh Christmas Markets — George Street and beyond", free: true },
                { month: "31 Dec", event: "Hogmanay — street party in city centre", free: "Some" },
              ].map((item) => (
                <div key={item.event} className="flex items-center gap-3 py-2 border-b border-slate-100 last:border-0">
                  <div className="text-xs font-bold text-slate-500 w-16 flex-shrink-0">{item.month}</div>
                  <div className="text-xs text-slate-700 flex-1">{item.event}</div>
                  <div className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${item.free === true ? "bg-emerald-50 text-emerald-700" : item.free === false ? "text-slate-400" : "bg-amber-50 text-amber-700"}`}>
                    {item.free === true ? "Free" : item.free === false ? "Ticketed" : "Mixed"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "faith" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Faith Communities in Edinburgh</h3>
              <p className="text-xs text-slate-500">Edinburgh has active communities of faith across all major traditions.</p>
            </div>
            {[
              { tradition: "Christian (Church of Scotland)", place: "St Giles' Cathedral", address: "Royal Mile, EH1 1RE", note: "City's historic 'High Kirk' — services and community programmes", link: "https://www.stgilescathedral.org.uk/" },
              { tradition: "Roman Catholic", place: "St Mary's Cathedral", address: "Broughton Street, EH1 3JR", note: "Scotland's principal Catholic cathedral", link: "https://www.stmaryscathedral.co.uk/" },
              { tradition: "Muslim", place: "Edinburgh Central Mosque", address: "50 Potterrow, EH8 9BT", note: "Friday prayers, community services, Ramadan events", link: "https://www.edmosque.org/" },
              { tradition: "Jewish", place: "Edinburgh Hebrew Congregation", address: "4 Salisbury Road, EH16 5AB", note: "Edinburgh's oldest Jewish community", link: "https://www.ehcong.com/" },
              { tradition: "Sikh", place: "Edinburgh Sikh Gurdwara", address: "1 Sheriff Brae, Leith, EH6 7LF", note: "Open langar (community kitchen) — all welcome", link: "https://www.edinburghgurdwara.com/" },
              { tradition: "Hindu", place: "Edinburgh Hindu Mandir", address: "Murrayburn Road, EH14", note: "Temple, cultural events, yoga classes", link: "https://edinburghmandir.org.uk/" },
              { tradition: "Buddhist", place: "Kagyu Samye Ling (nearby)", address: "Eskdalemuir, DG13", note: "Scotland's oldest Buddhist monastery — day visits available", link: "https://www.samyeling.org/" },
              { tradition: "Interfaith", place: "Interfaith Scotland", address: "Edinburgh office", note: "Builds understanding between faith communities across Scotland", link: "https://www.interfaithscotland.org/" },
            ].map((item) => (
              <div key={item.tradition} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="text-xs font-bold text-teal-700 mb-0.5">{item.tradition}</div>
                <div className="font-bold text-slate-900 text-sm">{item.place}</div>
                <div className="text-xs text-slate-500 mt-0.5">📍 {item.address}</div>
                <div className="text-xs text-slate-600 mt-1">{item.note}</div>
                <a href={item.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-teal-600 hover:underline mt-1 inline-block">Visit →</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
