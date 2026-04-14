"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "catchment",   label: "🗺️ Catchment Finder" },
  { id: "primaries",   label: "🏫 Primary Schools" },
  { id: "secondaries", label: "🎓 Secondary Schools" },
  { id: "applying",    label: "📋 How to Apply" },
  { id: "support",     label: "🤝 Support & Rights" },
];

const SECONDARIES = [
  { name: "Boroughmuir High School", area: "Bruntsfield, Morningside, Colinton", type: "Non-denom", link: "https://boroughmuirhigh.edin.sch.uk/" },
  { name: "Broughton High School", area: "Broughton, New Town, Pilrig", type: "Non-denom", link: "https://broughtonhigh.edin.sch.uk/" },
  { name: "Castlebrae High School", area: "Niddrie, Craigmillar, Greendykes", type: "Non-denom", link: "https://castlebraecommunity.edin.sch.uk/" },
  { name: "Craigmount High School", area: "Corstorphine, Clermiston, East Craigs", type: "Non-denom", link: "https://craigmounthigh.edin.sch.uk/" },
  { name: "Currie High School", area: "Currie, Balerno, Juniper Green", type: "Non-denom", link: "https://curriehigh.edin.sch.uk/" },
  { name: "Drummond High School", area: "Canongate, Southside, Newington", type: "Non-denom", link: "https://drummondschool.edin.sch.uk/" },
  { name: "Firrhill High School", area: "Oxgangs, Firrhill, Colinton Mains", type: "Non-denom", link: "https://firrhillhigh.edin.sch.uk/" },
  { name: "Forrester High School", area: "Gyle, East Craigs, Broomhouse", type: "Non-denom", link: "https://forresterhigh.edin.sch.uk/" },
  { name: "Gracemount High School", area: "Gracemount, Liberton, Gilmerton", type: "Non-denom", link: "https://gracemounthigh.edin.sch.uk/" },
  { name: "Holyrood High School", area: "Northfield, Meadowbank, Abbeyhill", type: "Non-denom", link: "https://holyroodhigh.edin.sch.uk/" },
  { name: "James Gillespie's High", area: "Marchmont, Sciennes, Grange", type: "Non-denom", link: "https://jamesgillespieshigh.edin.sch.uk/" },
  { name: "Leith Academy", area: "Leith, Newhaven, Pilrig", type: "Non-denom", link: "https://leithacademy.edin.sch.uk/" },
  { name: "Liberton High School", area: "Liberton, Gracemount, Gilmerton", type: "Non-denom", link: "https://libertonhigh.edin.sch.uk/" },
  { name: "Portobello High School", area: "Portobello, Joppa, Duddingston", type: "Non-denom", link: "https://portobellohigh.edin.sch.uk/" },
  { name: "Queensferry High School", area: "South Queensferry, Dalmeny", type: "Non-denom", link: "https://queensferryhigh.edin.sch.uk/" },
  { name: "Royal High School", area: "Trinity, Inverleith, Stockbridge", type: "Non-denom", link: "https://royalhigh.edin.sch.uk/" },
  { name: "Trinity Academy", area: "Trinity, Granton, Pilton", type: "Non-denom", link: "https://trinityacademy.edin.sch.uk/" },
  { name: "Tynecastle High School", area: "Gorgie, Dalry, Sighthill", type: "Non-denom", link: "https://tynecastlehigh.edin.sch.uk/" },
  { name: "Wester Hailes Education Centre", area: "Wester Hailes, Clovenstone", type: "Non-denom", link: "https://whec.edin.sch.uk/" },
  { name: "St Augustine's RC High", area: "Broomhouse, Sighthill, Wester Hailes", type: "RC", link: "https://staugustinesrc.edin.sch.uk/" },
  { name: "St Thomas of Aquin's RC High", area: "Old Town, Southside, Newington", type: "RC", link: "https://stthomasofaquins.edin.sch.uk/" },
];

const PRIMARY_AREAS = [
  {
    area: "City Centre / Old Town",
    schools: ["Canongate Primary", "Royal Mile Primary", "St Patrick's RC Primary", "St Anne's RC Primary"],
  },
  {
    area: "New Town / Stockbridge",
    schools: ["Flora Stevenson Primary", "Broughton Primary", "Stockbridge Primary", "Drummond Community High (feeder)"],
  },
  {
    area: "Leith & Newhaven",
    schools: ["Bonnington Primary", "Lorne Primary", "Victoria Primary", "Leith Walk Primary", "St Mary's RC Primary (Leith)"],
  },
  {
    area: "Morningside / Marchmont",
    schools: ["Bruntsfield Primary", "Sciennes Primary", "South Morningside Primary", "Tollcross Primary"],
  },
  {
    area: "Portobello & Restalrig",
    schools: ["Portobello Primary", "Towerbank Primary", "St John's RC Primary", "Craigentinny Primary"],
  },
  {
    area: "Corstorphine & Murrayfield",
    schools: ["Corstorphine Primary", "Fox Covert RC Primary", "Murrayburn Primary", "St Ninian's RC Primary"],
  },
  {
    area: "Liberton & Gracemount",
    schools: ["Gracemount Primary", "Liberton Primary", "Gilmerton Primary", "Moredun Primary"],
  },
  {
    area: "Currie, Balerno & Wester Hailes",
    schools: ["Balerno Primary", "Currie Primary", "Juniper Green Primary", "Clovenstone Primary"],
  },
];

export default function SchoolsPage() {
  const [tab, setTab] = useState("catchment");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader
        title="Schools & Catchment Areas"
        subtitle="Find schools, check catchments, and understand your rights"
      />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Edinburgh <span className="text-blue-500">Schools.</span>
          </h1>
          <p className="text-sm text-slate-600">
            Edinburgh City Council operates 98 primary schools and 23 secondary schools. All council schools are free. Your child's school is determined by your home address — unless you apply for a placing request.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Primary schools", value: "98", note: "Council-run, free" },
              { label: "Secondary schools", value: "23", note: "Including RC schools" },
              { label: "Gaelic-medium", value: "3", note: "Gaelic-medium units" },
              { label: "Free school meals", value: "P1–P5", note: "Universal free meals" },
            ].map((s) => (
              <div key={s.label} className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-blue-700">{s.value}</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "catchment" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 text-base mb-1">Find your catchment school</h2>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                Enter your postcode on the Council's official catchment tool to see which primary and secondary school your address falls in. This is the school your child has an automatic right to attend.
              </p>
              <a
                href="https://www.edinburgh.gov.uk/schoolcatchments"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                🗺️ Open Edinburgh Catchment Finder →
              </a>
              <p className="text-xs text-slate-400 mt-3">Opens the official Edinburgh City Council tool — enter any EH postcode to get your catchment schools.</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-900 text-sm mb-2">What is a catchment area?</h3>
              <p className="text-xs text-blue-800 leading-relaxed mb-3">
                Every address in Edinburgh is assigned to a specific primary school and secondary school. Children living in that area have a <strong>right to a place</strong> at their catchment school. If you want a different school, you must apply through a <strong>placing request</strong>.
              </p>
              <div className="space-y-2">
                {[
                  { q: "Can I choose a different school?", a: "Yes — submit a placing request to the council by the deadline. The school must consider your request but is not obliged to accept if the school is full." },
                  { q: "What if I move house?", a: "Your catchment changes with your address. If you move mid-year, contact the Council's School Placement team to update your child's school allocation." },
                  { q: "Do siblings get priority?", a: "Yes. Siblings of children already attending a school (including RC schools) get priority in placing requests, even if outside the catchment." },
                  { q: "What about RC (Catholic) schools?", a: "RC schools serve a wider geographic area based on parish boundaries, not street-by-street catchments. Priority is given to baptised Catholics." },
                ].map((item) => (
                  <div key={item.q} className="bg-white rounded-lg p-3 border border-blue-100">
                    <div className="font-semibold text-slate-900 text-xs mb-0.5">{item.q}</div>
                    <div className="text-xs text-slate-600 leading-relaxed">{item.a}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Key contacts</h3>
              <div className="space-y-2">
                {[
                  { label: "School Placement Team", contact: "0131 469 3000", type: "phone", note: "For catchment queries, placing requests, and in-year admissions" },
                  { label: "Council Education Department", contact: "https://www.edinburgh.gov.uk/schools-learning", type: "link", note: "Official schools portal — applications, policies, term dates" },
                  { label: "Education Scotland", contact: "https://education.gov.scot/", type: "link", note: "National body for education standards and inspection reports" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-xs">{c.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{c.note}</div>
                    </div>
                    {c.type === "phone" ? (
                      <a href={`tel:${c.contact}`} className="text-xs font-mono font-bold text-blue-600 flex-shrink-0">{c.contact}</a>
                    ) : (
                      <a href={c.contact} target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-600 flex-shrink-0 hover:underline">Visit →</a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "primaries" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Edinburgh has 98 primary schools across the city. Schools are non-denominational (non-denom) unless marked as RC (Roman Catholic). All council schools are free. Primary education covers Primary 1 (age 5) to Primary 7 (age 12).
              </p>
            </div>
            {PRIMARY_AREAS.map((area) => (
              <div key={area.area} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3">
                  <h3 className="font-bold text-slate-900 text-sm">📍 {area.area}</h3>
                </div>
                <div className="p-4 grid sm:grid-cols-2 gap-2">
                  {area.schools.map((school) => (
                    <div key={school} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="size-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {school}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800">
                <strong>Full list:</strong> Edinburgh has 98 primary schools — see the complete list at{" "}
                <a href="https://www.edinburgh.gov.uk/directory/10/schools" target="_blank" rel="noreferrer" className="font-bold underline">edinburgh.gov.uk/directory/10/schools</a>
              </p>
            </div>
          </div>
        )}

        {tab === "secondaries" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Edinburgh has 23 secondary schools (S1–S6, ages 12–18). All state secondaries are free. Most are non-denominational; two are Roman Catholic. Secondary school is determined by which primary school your child attends — each primary has a named secondary it feeds into.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 grid grid-cols-3 text-xs font-bold text-slate-500 uppercase tracking-wide">
                <span>School</span>
                <span>Main catchment areas</span>
                <span>Type</span>
              </div>
              <div className="divide-y divide-slate-100">
                {SECONDARIES.map((s) => (
                  <div key={s.name} className="px-4 py-3 grid grid-cols-3 gap-2 items-start">
                    <a href={s.link} target="_blank" rel="noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:underline leading-tight">
                      {s.name}
                    </a>
                    <div className="text-xs text-slate-500 leading-relaxed">{s.area}</div>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.type === "RC" ? "bg-yellow-100 text-yellow-800" : "bg-slate-100 text-slate-600"}`}>
                        {s.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-xs text-amber-900">Gaelic-medium secondary education</strong>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                Boroughmuir High School offers a Gaelic-medium stream for pupils from Taobh na Pàirce (James Gillespie's), Bun-sgoil Taobh na Pàirce, and Bun-sgoil Ghàidhlig Dhùn Èideann. Contact the council's Gaelic team on 0131 469 3000.
              </p>
            </div>
          </div>
        )}

        {tab === "applying" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h2 className="font-bold text-slate-900 text-base mb-4">Primary school admissions process</h2>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Check your catchment school", desc: "Use the Edinburgh catchment finder at edinburgh.gov.uk/schoolcatchments. Your child has an automatic right to a place at their catchment school.", when: "Any time" },
                  { step: "2", title: "Register your child", desc: "Contact the catchment school directly or apply online via the council portal. New Primary 1 pupils must be registered by the January deadline for August entry.", when: "November – January" },
                  { step: "3", title: "Placing request (optional)", desc: "If you want a school outside your catchment, submit a placing request by the January deadline. The school must consider your request but is not guaranteed.", when: "By mid-January" },
                  { step: "4", title: "Receive placement letter", desc: "The council writes to confirm your child's school placement in March/April for August entry.", when: "March – April" },
                  { step: "5", title: "In-year transfers", desc: "If you move house or need to change schools during the year, contact the School Placement Team on 0131 469 3000.", when: "Any time" },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="size-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="font-bold text-slate-900 text-sm">{step.title}</div>
                        <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{step.when}</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Key deadlines (2024–25 cycle)</h3>
              {[
                { date: "November 2024", event: "Primary 1 registration opens for August 2025 entry" },
                { date: "Mid-January 2025", event: "Deadline for P1 registration and placing requests" },
                { date: "Mid-January 2025", event: "Deadline for S1 secondary placing requests" },
                { date: "March 2025", event: "Placing request decisions issued" },
                { date: "March–April 2025", event: "School placement letters sent to parents" },
                { date: "August 2025", event: "New school year begins" },
              ].map((d) => (
                <div key={d.event} className="flex gap-3 py-2 border-b border-slate-100 last:border-0">
                  <div className="text-xs font-bold text-blue-600 w-36 flex-shrink-0">{d.date}</div>
                  <div className="text-xs text-slate-700">{d.event}</div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a href="https://www.edinburgh.gov.uk/schools-learning/apply-school-place" target="_blank" rel="noreferrer"
                className="bg-blue-600 text-white rounded-xl p-4 block hover:bg-blue-700 transition-colors">
                <div className="font-bold text-sm mb-1">Apply for a school place</div>
                <div className="text-xs text-blue-200">Official council application portal →</div>
              </a>
              <a href="https://www.edinburgh.gov.uk/schools-learning/school-placing-requests" target="_blank" rel="noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-4 block hover:shadow-sm transition-shadow">
                <div className="font-bold text-sm text-slate-900 mb-1">Placing request guide</div>
                <div className="text-xs text-slate-500">How to request a school outside your catchment →</div>
              </a>
            </div>
          </div>
        )}

        {tab === "support" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <h3 className="font-bold text-emerald-900 text-sm mb-2">🍽️ Free School Meals</h3>
              <p className="text-xs text-emerald-800 leading-relaxed">
                <strong>All Primary 1–5 children in Scotland get free school meals</strong> — regardless of household income. This is a Scottish Government commitment and covers a nutritious hot meal every school day. P6 and P7 pupils from low-income families may also qualify — check via the council.
              </p>
              <a href="https://www.edinburgh.gov.uk/schools-learning/free-school-meals" target="_blank" rel="noreferrer"
                className="inline-block mt-2 text-xs font-bold text-emerald-700 hover:underline">Check eligibility →</a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Additional Support Needs (ASN)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                The Education (Additional Support for Learning) (Scotland) Act 2009 gives children with additional support needs legal rights to appropriate support. This includes children with dyslexia, autism, physical disabilities, English as an additional language, and many other needs.
              </p>
              <div className="space-y-2">
                {[
                  { title: "Request an assessment", desc: "Parents can request the school assess their child for additional support needs at any time. The school must respond within a reasonable time." },
                  { title: "Co-ordinated Support Plan (CSP)", desc: "Children with significant and complex needs may get a CSP — a legal document that specifies the support to be provided and is reviewed annually." },
                  { title: "Independent Adjudication", desc: "If you disagree with the council's ASN decisions, you can request an independent adjudicator via the council or appeal to the ASN Tribunal Scotland." },
                  { title: "Enquire Scotland", desc: "Free advice and information for families of children with ASN. Helpline: 0345 123 2303. enquire.scot" },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 rounded-lg p-3">
                    <div className="font-semibold text-slate-900 text-xs mb-0.5">{item.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
              <a href="https://enquire.scot/" target="_blank" rel="noreferrer"
                className="inline-block mt-3 text-xs font-bold text-blue-600 hover:underline">Enquire Scotland — free ASN advice →</a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Gaelic-Medium Education</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Edinburgh has one of the fastest-growing Gaelic-medium education sectors in Scotland. Children learn all subjects through the medium of Scottish Gaelic — no prior knowledge required.
              </p>
              {[
                { name: "Bun-sgoil Taobh na Pàirce", address: "Tollcross Primary building, EH3", type: "Primary (P1–P7)", note: "Edinburgh's first standalone Gaelic primary school" },
                { name: "Bun-sgoil Ghàidhlig Dhùn Èideann", address: "Bonnington Road, EH6", type: "Primary (P1–P7)", note: "Second Gaelic primary, opened 2013" },
                { name: "Gaelic unit at James Gillespie's Primary", address: "Marchmont, EH9", type: "Gaelic unit (P1–P7)", note: "Gaelic stream within an English-medium school" },
                { name: "Boroughmuir High School", address: "Viewforth, EH10", type: "Secondary (S1–S6)", note: "Gaelic-medium secondary stream for all Edinburgh Gaelic primary pupils" },
              ].map((s) => (
                <div key={s.name} className="border-b border-slate-100 last:border-0 py-2">
                  <div className="font-semibold text-slate-900 text-xs">{s.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">📍 {s.address} • {s.type}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.note}</div>
                </div>
              ))}
              <a href="https://www.edinburgh.gov.uk/gaelic-education" target="_blank" rel="noreferrer"
                className="inline-block mt-3 text-xs font-bold text-blue-600 hover:underline">Edinburgh Gaelic education guide →</a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">School clothing grants & other help</h3>
              <div className="space-y-2">
                {[
                  { title: "School clothing grant", desc: "Low-income families can claim up to £150 per child per year for school clothing. Apply at edinburgh.gov.uk/clothing-grants. No waiting list — paid directly to you." },
                  { title: "Education Maintenance Allowance (EMA)", desc: "£30/week for S4–S6 pupils from low-income households who stay in school. Scotland's EMA is among the most generous in the UK. Apply at mygov.scot/ema." },
                  { title: "School transport", desc: "Free transport is provided for primary pupils living more than 2 miles from their catchment school, and secondary pupils more than 3 miles away." },
                  { title: "Parent Council", desc: "Every Edinburgh school has a Parent Council — the legal forum for parents to engage with the school. Contact your school office to get involved." },
                ].map((item) => (
                  <div key={item.title} className="border border-slate-200 rounded-lg p-3">
                    <div className="font-semibold text-slate-900 text-xs mb-0.5">{item.title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
