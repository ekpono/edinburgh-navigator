"use client";

import { useState } from "react";
import { JOB_LISTINGS, TRAINING_PROVIDERS, SCOTTISH_BENEFITS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "jobs", label: "Find Work" },
  { id: "training", label: "Free Training" },
  { id: "benefits", label: "Scottish Benefits" },
  { id: "business", label: "Start a Business" },
];

export default function EmploymentPage() {
  const [tab, setTab] = useState("jobs");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Employment" subtitle="Jobs, training, benefits, and business support" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Employment <span className="text-violet-500">& Benefits.</span></h1>
          <p className="text-sm text-slate-600">Edinburgh's economy is growing but the cost of living is high. Use Scotland-specific benefits and free training to close the gap.</p>
          <div className="mt-3 bg-violet-50 border border-violet-200 rounded-xl p-3">
            <p className="text-xs text-violet-900"><strong>Scotland-specific:</strong> Many benefits in Scotland are run by Social Security Scotland, not DWP — including Scottish Child Payment, Adult Disability Payment, and Best Start Grant. These are separate from UK benefits.</p>
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "jobs" && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "My World of Work", desc: "Skills Development Scotland's free job and careers platform — CV builder, jobs board, career tools.", link: "https://www.myworldofwork.co.uk/", color: "#2563eb" },
                { name: "S1Jobs", desc: "Scotland's most popular jobs site — strong Edinburgh coverage.", link: "https://www.s1jobs.com/", color: "#059669" },
                { name: "Edinburgh Council Jobs", desc: "Vacancies at City of Edinburgh Council — one of the city's largest employers.", link: "https://www.edinburgh.gov.uk/jobs", color: "#7c3aed" },
                { name: "VisitScotland Careers", desc: "Tourism, hospitality, and events sector — large in Edinburgh.", link: "https://www.visitscotland.org/jobs", color: "#d97706" },
              ].map((platform) => (
                <a key={platform.name} href={platform.link} target="_blank" rel="noreferrer"
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all block">
                  <div className="font-bold text-slate-900 text-sm">{platform.name}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-relaxed">{platform.desc}</div>
                  <div className="text-xs font-semibold mt-2" style={{ color: platform.color }}>Browse jobs →</div>
                </a>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Edinburgh Job Listings</h3>
              {JOB_LISTINGS.map((job) => (
                <div key={job.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{job.title}</div>
                    <div className="text-xs text-slate-500">{job.org} · <span className="text-violet-600">{job.type}</span></div>
                  </div>
                  <a href={job.link} target="_blank" rel="noreferrer"
                    className="text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-lg hover:bg-slate-700 transition-colors flex-shrink-0 ml-3">Apply</a>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <strong className="text-sm text-slate-900">Edinburgh Job Centre Plus</strong>
              <p className="text-xs text-slate-600 mt-1">9–13 Semple Street, Edinburgh, EH3 8BL</p>
              <p className="text-xs text-slate-500">Mon–Fri 9am–5pm | Universal Credit support, job search help, advisor appointments</p>
              <div className="font-mono font-bold text-sm text-slate-800 mt-2">0800 169 0190</div>
            </div>
          </div>
        )}

        {tab === "training" && (
          <div className="space-y-3">
            {TRAINING_PROVIDERS.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{p.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{p.desc}</div>
                <a href={p.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-600 hover:underline mt-2 inline-block">Visit →</a>
              </div>
            ))}
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
              <strong className="text-sm text-violet-900">Free digital skills training</strong>
              <p className="text-xs text-violet-800 mt-1">Edinburgh libraries offer free computer courses and digital skills sessions. Visit your local library or edinburgh.gov.uk/libraries for the schedule.</p>
            </div>
          </div>
        )}

        {tab === "benefits" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Scottish Benefits — On Top of UK Benefits</h3>
              <p className="text-xs text-slate-500 leading-relaxed">These are administered by Social Security Scotland (not DWP) and are in addition to standard UK benefits like Universal Credit, Housing Benefit, and Child Benefit.</p>
            </div>
            {SCOTTISH_BENEFITS.map((b) => (
              <div key={b.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{b.name}</div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xs font-bold text-violet-700 bg-violet-50 px-2 py-1 rounded-lg">{b.amount}</div>
                  </div>
                </div>
                <a href={b.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-600 hover:underline mt-2 inline-block">Apply at mygov.scot →</a>
              </div>
            ))}
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">Need help with benefits?</strong>
              <p className="text-xs text-slate-300 mt-1">Citizens Advice Edinburgh provides free benefits advice and can help you apply: <strong>0131 557 1500</strong></p>
            </div>
          </div>
        )}

        {tab === "business" && (
          <div className="space-y-3">
            {[
              { name: "Business Gateway Edinburgh", desc: "Free advice, workshops, and mentoring for people starting or growing a business in Edinburgh. Funded by the Scottish Government.", num: "0131 469 8740", link: "https://www.bgateway.com/local-offices/edinburgh" },
              { name: "Scottish Enterprise", desc: "Scottish Government's economic development agency — grants, loans, and support for businesses with growth potential.", link: "https://www.scottishenterprise.com/" },
              { name: "Elevator (EDGE)", desc: "Pre-start and start-up support across Edinburgh and Lothians — particularly good for underrepresented founders.", link: "https://elevator.co.uk/" },
              { name: "Edinburgh Chamber of Commerce", desc: "Business networking, training, and support across the Edinburgh economy.", link: "https://www.edinburghchamber.co.uk/" },
            ].map((org) => (
              <div key={org.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{org.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{org.desc}</div>
                <div className="flex items-center gap-3 mt-2">
                  {org.num && <div className="font-mono text-xs font-bold text-slate-800">{org.num}</div>}
                  <a href={org.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-600 hover:underline">Visit →</a>
                </div>
              </div>
            ))}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <strong className="text-sm text-emerald-900">Tax-free trading allowance</strong>
              <p className="text-xs text-emerald-800 mt-1">You can earn up to £1,000/year from self-employment without registering with HMRC or paying tax. Above that, register as self-employed at gov.uk/register-for-self-assessment.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
