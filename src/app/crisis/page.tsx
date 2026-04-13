"use client";

import { useState } from "react";
import { CRISIS_HELPLINES, CRISIS_ORGS, CRISIS_SCENARIOS, LEGAL_RIGHTS, SERVICE_CONTACTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";
import ServiceCard from "@/components/service-card";

const TABS = [
  { id: "housing", label: "Housing Rights" },
  { id: "emergency", label: "Emergency Lines" },
  { id: "whatnow", label: "What To Do Now" },
  { id: "legalrights", label: "Legal Rights" },
  { id: "orgs", label: "Local Organisations" },
  { id: "dangerous", label: "Dangerous Housing" },
];

function HelplineCard({ title, desc, num, urgent }: { title: string; desc: string; num: string; urgent?: boolean }) {
  return (
    <div className={`bg-white rounded-xl border p-4 ${urgent ? "border-red-200" : "border-slate-200"}`}>
      <div className="font-bold text-slate-900 text-sm mb-1">{title}</div>
      <div className="text-xs text-slate-500 mb-2">{desc}</div>
      <div className={`font-mono font-bold text-sm px-3 py-1.5 rounded-lg inline-block ${urgent ? "bg-red-50 text-red-700" : "bg-slate-50 text-slate-700"}`}>
        {num}
      </div>
    </div>
  );
}

function RightsChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const questions = [
    { q: "Are you homeless or will you be within 2 months?", yes: "next", no: "no-duty" },
    { q: "Do you have a connection to Edinburgh? (lived here 6 months in last year, work, or family here?)", yes: "next", no: "limited" },
    { q: "Do you have dependent children, are pregnant, fleeing abuse, or have a disability/mental health condition?", yes: "priority", no: "assess" },
  ];
  const answer = (yes: boolean) => {
    const newAnswers = [...answers, yes];
    setAnswers(newAnswers);
    if (!yes && step === 0) { setStep(10); return; }
    if (!yes && step === 1) { setStep(11); return; }
    if (step === 2) { setStep(yes ? 20 : 21); return; }
    setStep(step + 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  if (step < 3) {
    return (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
        <div className="text-xs text-slate-400 mb-2 font-medium">Question {step + 1} of 3</div>
        <div className="font-semibold text-slate-900 mb-4 text-sm leading-relaxed">{questions[step].q}</div>
        <div className="flex gap-2">
          <button onClick={() => answer(true)} className="flex-1 py-2 bg-sky-600 text-white rounded-lg text-sm font-semibold">Yes</button>
          <button onClick={() => answer(false)} className="flex-1 py-2 bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold">No</button>
        </div>
      </div>
    );
  }
  const outcomes: Record<number, { title: string; body: string; color: string }> = {
    10: { title: "Not currently homeless", body: "If you're not at immediate risk, you may still access housing advice. Contact Edinburgh Housing Advice Partnership (EHAP) on 0131 538 8222 for preventative advice.", color: "bg-blue-50 border-blue-200" },
    11: { title: "Limited local connection", body: "Even without a local connection, the council must assess you. If you are fleeing domestic abuse, local connection rules cannot be used against you. Contact Shelter Scotland: 0808 800 4444.", color: "bg-amber-50 border-amber-200" },
    20: { title: "✅ You likely have Priority Need", body: "Edinburgh Council has a strong legal duty to provide you with temporary accommodation while they assess your case. Go to City Chambers (253 High Street) or call 0131 200 2000. Do not leave without getting written confirmation of their decision.", color: "bg-green-50 border-green-200" },
    21: { title: "You will be assessed", body: "Even without automatic priority need, the council must assess your case. Attend in person if possible — City Chambers, 253 High Street, EH1 1YJ. Ask for a written decision so you can appeal if needed. Citizens Advice Edinburgh can support you: 0131 557 1500.", color: "bg-blue-50 border-blue-200" },
  };
  const outcome = outcomes[step];
  return (
    <div className={`rounded-xl border p-5 ${outcome.color}`}>
      <div className="font-bold text-slate-900 mb-2 text-sm">{outcome.title}</div>
      <p className="text-sm text-slate-700 leading-relaxed mb-3">{outcome.body}</p>
      <button onClick={reset} className="text-xs font-semibold text-slate-500 underline">Start again</button>
    </div>
  );
}

export default function CrisisPage() {
  const [tab, setTab] = useState("housing");
  const keyServices = SERVICE_CONTACTS.filter((service) =>
    ["edinburgh-council-housing", "shelter-scotland", "edinburgh-crisis-centre", "nhs-24"].includes(service.id)
  );

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Crisis Support" subtitle="Real help, real numbers, real rights" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Crisis <span className="text-red-500">Support.</span></h1>
          <p className="text-slate-600 text-sm">Real help, real numbers, real rights — for Edinburgh residents in crisis.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 mb-5">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="compact" />
          ))}
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {/* Housing Rights */}
        {tab === "housing" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-1">Housing Rights Checker</h3>
              <p className="text-sm text-slate-500 mb-4">Answer 3 questions to understand Edinburgh Council's legal duty to you.</p>
              <RightsChecker />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <HelplineCard title="Housing Emergency (24/7)" desc="Edinburgh Council out-of-hours housing emergency." num="0131 200 2000" urgent />
              <HelplineCard title="Shelter Scotland" desc="Free housing and homelessness advice." num="0808 800 4444" urgent />
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
              <strong className="text-sm text-slate-900">Edinburgh Housing Advice Partnership (EHAP)</strong>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Free housing advice and legal representation for Edinburgh residents. They can attend tribunal hearings with you.</p>
              <div className="mt-2 font-mono font-bold text-sm text-sky-700">0131 538 8222</div>
              <div className="text-xs text-slate-500">Mon–Fri 9am–5pm | Norton Park, 57 Albion Road, EH7 5QY</div>
            </div>
          </div>
        )}

        {/* Emergency Lines */}
        {tab === "emergency" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4 mb-2">
              <h3 className="font-bold text-slate-900 mb-1">Emergency Helplines</h3>
              <p className="text-sm text-slate-500">Real numbers for Edinburgh residents — available now.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {CRISIS_HELPLINES.map((h) => (
                <HelplineCard key={h.num} title={h.title} desc={h.desc} num={h.num} urgent={h.urgent} />
              ))}
            </div>
          </div>
        )}

        {/* What To Do Now */}
        {tab === "whatnow" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-1">What To Do Right Now</h3>
              <p className="text-sm text-slate-500">Step-by-step guidance for the most urgent situations in Edinburgh.</p>
            </div>
            {CRISIS_SCENARIOS.map((s, i) => (
              <div key={i} className="rounded-xl border p-5" style={{ background: s.color, borderColor: s.border }}>
                <strong className="text-sm text-slate-900">{s.emoji} {s.title}</strong>
                <ol className="mt-3 space-y-2 list-decimal list-inside">
                  {s.steps.map((step, j) => (
                    <li key={j} className="text-xs text-slate-700 leading-relaxed">{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        )}

        {/* Legal Rights */}
        {tab === "legalrights" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-1">Know Your Legal Rights in Scotland</h3>
              <p className="text-sm text-slate-500">Plain English — what Scots law says Edinburgh Council must do for you.</p>
            </div>
            {LEGAL_RIGHTS.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-sky-700">{r.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Local Orgs */}
        {tab === "orgs" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-1">Local Crisis Organisations</h3>
              <p className="text-sm text-slate-500">Edinburgh-based charities and services you can contact directly.</p>
            </div>
            {CRISIS_ORGS.map((org, i) => (
              <div key={i} className={`bg-white rounded-xl border p-4 ${org.urgent ? "border-red-200" : "border-slate-200"}`}>
                <div className="font-bold text-slate-900 text-sm">{org.name}</div>
                <div className="text-xs text-sky-600 font-medium mt-0.5">{org.focus}</div>
                <div className="text-xs text-slate-500 mt-1">📍 {org.address}</div>
                <div className="text-xs text-slate-500">🕐 {org.hours}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="font-mono font-bold text-sm text-slate-800">{org.num}</div>
                  <a href={org.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-600 hover:underline">Visit →</a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dangerous Housing */}
        {tab === "dangerous" && (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <strong className="text-sm text-red-900">Report a Dangerous or Unfit Property</strong>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                Your landlord must maintain the property to the Repairing Standard under the Housing (Scotland) Act 2006.
                Report serious issues to Edinburgh Council's Private Sector Housing team.
              </p>
              <a href="https://www.edinburgh.gov.uk/report" target="_blank" rel="noreferrer"
                className="inline-block mt-3 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Report It — edinburgh.gov.uk
              </a>
            </div>
            {[
              { title: "Damp and Mould", body: "Your landlord must fix damp and mould — it is a hazard under the Repairing Standard. Report it in writing (email creates a paper trail). If unresolved within a reasonable period, refer to the First-tier Tribunal for Scotland at housing.scot." },
              { title: "No Heating or Hot Water", body: "No heating in winter is an emergency repair. Contact your landlord in writing immediately. If not fixed within 24 hours, report to Edinburgh Council's Private Sector Housing team: 0131 529 7454." },
              { title: "Pest Infestation", body: "Rats, mice, cockroaches, or bedbugs are the landlord's legal responsibility. Report to Edinburgh Council Environmental Health: 0131 200 2000. They can inspect and issue enforcement notices." },
              { title: "Illegal Eviction or Lockout", body: "Changing the locks, removing belongings, or cutting off utilities to force you out is a criminal offence under the Housing (Scotland) Act 1988. Call Police Scotland (101) immediately and contact Shelter Scotland (0808 800 4444)." },
              { title: "HMO Without a Licence", body: "If you share with 3+ unrelated people, your landlord must hold an HMO licence from Edinburgh Council. Check the public register at edinburgh.gov.uk/hmo-register. An unlicensed HMO is illegal — report it." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-amber-700">⚠️ {item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
