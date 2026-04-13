"use client";

import { useState } from "react";
import { HEALTH_SERVICES, HEALTH_FACTS, SERVICE_CONTACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";

const TABS = [
  { id: "urgent", label: "Urgent Care" },
  { id: "gp", label: "GP & Dentist" },
  { id: "mental", label: "Mental Health" },
  { id: "rights", label: "Your Rights" },
  { id: "prescriptions", label: "Prescriptions" },
];

export default function HealthPage() {
  const [tab, setTab] = useState("urgent");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["nhs-24", "find-gp", "royal-infirmary", "edinburgh-crisis-centre"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Health" subtitle="NHS Scotland — Lothian Region" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Health <span className="text-emerald-500">Services.</span></h1>
          <p className="text-sm text-slate-600">NHS Lothian serves Edinburgh. Prescriptions are FREE. Understand your rights and how to access care.</p>
          <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="text-xs text-emerald-800"><strong>🆓 Scotland-specific:</strong> All NHS prescriptions in Scotland are free of charge — unlike England. Eye tests are also free for all. Dental treatment is free for under-18s, pregnant women, and those on low incomes.</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "urgent" && (
          <div className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "999 — Life-threatening emergency", desc: "Heart attack, stroke, serious injury, unconscious person.", num: "999", color: "bg-red-50 border-red-200", numColor: "text-red-700" },
                { title: "NHS 24 — Urgent but not emergency", desc: "Out-of-hours GP advice, urgent mental health, any time 24/7.", num: "111", color: "bg-amber-50 border-amber-200", numColor: "text-amber-700" },
              ].map((item) => (
                <div key={item.num} className={`rounded-xl border p-4 ${item.color}`}>
                  <div className="font-bold text-slate-900 text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-slate-600 mb-2">{item.desc}</div>
                  <div className={`font-mono font-bold text-lg ${item.numColor}`}>{item.num}</div>
                </div>
              ))}
            </div>
            {[
              { name: "Royal Infirmary of Edinburgh A&E", address: "51 Little France Crescent, EH16 4SA", note: "Major trauma centre, 24/7 A&E. Bus 67 from city centre.", hours: "24/7" },
              { name: "Western General Hospital A&E", address: "Crewe Road South, EH4 2XU", note: "A&E, specialist cancer and neurology services.", hours: "24/7" },
              { name: "Lauriston Building — Minor Injuries Unit", address: "Lauriston Place, EH3 9YW", note: "Cuts, sprains, minor burns, broken bones. Much faster than A&E for non-emergencies.", hours: "Mon–Fri 8am–8pm, Sat–Sun 9am–5pm" },
              { name: "St John's Hospital A&E (Livingston)", address: "Howden Road West, Livingston, EH54 6PP", note: "Covers West Edinburgh and Lothians.", hours: "24/7" },
            ].map((h) => (
              <div key={h.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{h.name}</div>
                <div className="text-xs text-slate-500 mt-1">📍 {h.address}</div>
                <div className="text-xs text-emerald-600 mt-0.5">🕐 {h.hours}</div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">{h.note}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "gp" && (
          <div className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Registering with a GP in Edinburgh</h3>
              <ol className="space-y-2 list-decimal list-inside">
                {[
                  "Find your nearest GP practice: nhsinform.scot/find-a-gp",
                  "Contact the practice directly — most accept registrations online, by phone, or by dropping in.",
                  "You do NOT need proof of address to register. Your legal right to NHS care cannot be denied on this basis.",
                  "If refused, contact NHS Lothian Patient Affairs: 0131 536 9000.",
                  "If a practice is not accepting new patients, NHS Lothian will allocate you to one.",
                ].map((step, i) => (
                  <li key={i} className="text-xs text-slate-700 leading-relaxed">{step}</li>
                ))}
              </ol>
              <a href="https://www.nhsinform.scot/find-a-gp" target="_blank" rel="noreferrer"
                className="inline-block mt-3 bg-sky-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
                Find a GP → nhsinform.scot
              </a>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">NHS Dental in Edinburgh</h3>
              <div className="space-y-2">
                {[
                  { group: "Under 18s", status: "Free — no charges apply" },
                  { group: "Pregnant women & new mothers (up to 12 months)", status: "Free" },
                  { group: "Income Support / Universal Credit (certain types)", status: "Free" },
                  { group: "All others", status: "NHS charges apply — lower than England" },
                ].map((item) => (
                  <div key={item.group} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-xs text-slate-700">{item.group}</span>
                    <span className="text-xs font-semibold text-emerald-600">{item.status}</span>
                  </div>
                ))}
              </div>
              <a href="https://www.nhsinform.scot/dental" target="_blank" rel="noreferrer" className="inline-block mt-3 text-xs font-semibold text-sky-600 hover:underline">Find an NHS dentist →</a>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">Free NHS Eye Tests (Scotland)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Everyone in Scotland is entitled to a free NHS eye test. Find an optician at nhsinform.scot. Glasses vouchers are available if you qualify for free glasses or contact lenses.</p>
            </div>
          </div>
        )}

        {tab === "mental" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Mental Health Support in Edinburgh</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Edinburgh Crisis Centre", desc: "24/7 mental health crisis support. Phone line staffed by trained workers. No referral needed.", num: "0808 801 0414", urgent: true },
                  { name: "Breathing Space", desc: "Scotland's mental health helpline. Evenings Mon–Thu 6pm–2am, Fri 6pm–Mon 6am (24hr).", num: "0800 83 85 87", urgent: false },
                  { name: "Samaritans", desc: "Confidential listening support, available 24/7 for anyone who needs to talk.", num: "116 123", urgent: false },
                  { name: "NHS 24 Mental Health Hub", desc: "Out-of-hours mental health support via NHS 24.", num: "111", urgent: true },
                ].map((item) => (
                  <div key={item.num} className={`rounded-xl border p-4 ${item.urgent ? "border-red-200 bg-red-50" : "border-slate-200 bg-slate-50"}`}>
                    <div className="font-bold text-slate-900 text-xs mb-1">{item.name}</div>
                    <div className="text-xs text-slate-600 mb-2 leading-relaxed">{item.desc}</div>
                    <div className="font-mono font-bold text-sm text-slate-800">{item.num}</div>
                  </div>
                ))}
              </div>
            </div>
            {[
              { name: "CAPS (Mental Health Advocacy)", focus: "Free independent advocacy for people receiving mental health treatment in Edinburgh.", num: "0131 260 8861", link: "https://www.capsadvocacy.org/" },
              { name: "LGBT Health & Wellbeing", focus: "Counselling and peer support for LGBTQ+ people experiencing mental health difficulties.", num: "0131 523 1100", link: "https://www.lgbthealth.org.uk/" },
              { name: "Penumbra Mental Health", focus: "Community mental health support across Scotland including Edinburgh.", num: "0131 475 2380", link: "https://www.penumbra.org.uk/" },
              { name: "Change Mental Health", focus: "Support, information, and community connections for people affected by mental illness.", num: "0131 624 8940", link: "https://www.changementalhealth.org.uk/" },
            ].map((org) => (
              <div key={org.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{org.name}</div>
                <div className="text-xs text-sky-600 mt-0.5">{org.focus}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="font-mono font-bold text-sm text-slate-800">{org.num}</div>
                  <a href={org.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-600 hover:underline">Visit →</a>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "rights" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Your Rights as an NHS Patient in Scotland</h3>
              <p className="text-xs text-slate-500 leading-relaxed">The Patient Rights (Scotland) Act 2011 gives you specific, enforceable rights.</p>
            </div>
            {HEALTH_FACTS.map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-sky-700">{f.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{f.body}</p>
              </div>
            ))}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-sm text-amber-900">How to Complain</strong>
              <p className="text-xs text-amber-800 mt-2 leading-relaxed">Contact the Patient Advice and Support Service (PASS) for free, independent advice on making a complaint about NHS care in Scotland: 0800 917 2127 or cas.org.uk/pass.</p>
            </div>
          </div>
        )}

        {tab === "prescriptions" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="text-4xl mb-2">🆓</div>
              <h3 className="font-bold text-emerald-900 text-lg mb-2">All NHS Prescriptions Are Free in Scotland</h3>
              <p className="text-sm text-emerald-800 leading-relaxed">Since April 2011, there is no prescription charge for any NHS-prescribed medication in Scotland. This applies to everyone, regardless of income, age, or employment status.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">What else is free in Scotland?</h3>
              {[
                { item: "NHS prescriptions", status: "Free for everyone" },
                { item: "NHS eye tests", status: "Free for everyone" },
                { item: "Dental treatment (under 18)", status: "Free" },
                { item: "Dental treatment (pregnant/new mothers)", status: "Free" },
                { item: "Dental treatment (qualifying benefits)", status: "Free" },
                { item: "Personal care for over-65s", status: "Free (Free Personal Care policy)" },
                { item: "Smear tests (cervical screening)", status: "Free for eligible ages" },
              ].map((item) => (
                <div key={item.item} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-xs text-slate-700">{item.item}</span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
