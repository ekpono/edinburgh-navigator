"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "free-hours",  label: "🆓 Free 1,140 Hours" },
  { id: "finding",     label: "🔍 Find Childcare" },
  { id: "benefits",    label: "💷 Family Benefits" },
  { id: "support",     label: "🤝 Family Support" },
];

export default function ChildcarePage() {
  const [tab, setTab] = useState("free-hours");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader
        title="Childcare & Family Services"
        subtitle="Free childcare hours, nurseries, family benefits, and support in Edinburgh"
      />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Family <span className="text-pink-500">Support.</span>
          </h1>
          <p className="text-sm text-slate-600">
            Scotland offers some of the most generous childcare and family support in the UK — including free childcare hours, the Scottish Child Payment, and the Best Start Grant.
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Free childcare hours", value: "1,140", note: "Per year (age 3–4, some 2yr olds)" },
              { label: "Scottish Child Payment", value: "£26.70", note: "Per week, per eligible child" },
              { label: "Best Start Grant", value: "Up to £707", note: "One-off payment at birth" },
              { label: "Free school meals", value: "P1–P5", note: "All primary 1–5 pupils" },
            ].map((s) => (
              <div key={s.label} className="bg-pink-50 border border-pink-200 rounded-xl p-3 text-center">
                <div className="text-base font-bold text-pink-700">{s.value}</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "free-hours" && (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <h2 className="font-bold text-emerald-900 text-base mb-2">Scotland's 1,140 Free Childcare Hours</h2>
              <p className="text-sm text-emerald-800 leading-relaxed mb-3">
                Every 3 and 4 year old in Scotland is entitled to <strong>1,140 hours of free early learning and childcare per year</strong> — the equivalent of about 30 hours per week during term time, or 22 hours per week year-round.
              </p>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Some 2-year-olds are also eligible if the family receives certain benefits. This is <strong>significantly more generous</strong> than England's 15 free hours for 3–4 year olds (though England is expanding this).
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Who is eligible?</h3>
              <div className="space-y-3">
                {[
                  { group: "All 3 and 4 year olds", eligible: true, detail: "Every child from the term after their 3rd birthday to starting school. No income test — universally available." },
                  { group: "2 year olds (low income)", eligible: true, detail: "Eligible if family receives: Universal Credit (net earnings under £796/month), Income Support, Job Seeker's Allowance, Employment & Support Allowance, or Child Tax Credit (no Working Tax Credit)." },
                  { group: "2 year olds (looked-after children)", eligible: true, detail: "All looked-after 2-year-olds are automatically eligible regardless of family income." },
                  { group: "1 year olds and under", eligible: false, detail: "Free funded hours do not apply. Parents can access Tax-Free Childcare or Universal Credit childcare element to help with costs." },
                ].map((item) => (
                  <div key={item.group} className="flex items-start gap-3 border border-slate-100 rounded-xl p-3">
                    <span className={`text-lg flex-shrink-0 ${item.eligible ? "text-emerald-500" : "text-slate-300"}`}>
                      {item.eligible ? "✓" : "✗"}
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{item.group}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">How to access the free hours</h3>
              <div className="space-y-3">
                {[
                  { step: "1", title: "Find an approved provider", desc: "Any nursery, childminder, or out-of-school care setting that is registered with the Care Inspectorate and approved by Edinburgh City Council can deliver funded hours." },
                  { step: "2", title: "Register with your provider", desc: "Contact the nursery or childminder directly. They will register your child for funded hours and arrange a schedule. You don't apply to the council — you apply through the provider." },
                  { step: "3", title: "No payment for funded hours", desc: "The funded hours are paid directly by the council to the provider. You pay nothing for these hours (though you may pay for extras such as meals, additional hours, or activities)." },
                  { step: "4", title: "Flexibility", desc: "You can split the hours across multiple providers. For example, 20 hours at a nursery and 10 hours at a childminder. Speak to each provider about how they handle split arrangements." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <div className="size-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{s.step}</div>
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{s.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a href="https://www.edinburgh.gov.uk/childcare" target="_blank" rel="noreferrer"
                className="bg-pink-600 text-white rounded-xl p-4 block hover:bg-pink-700 transition-colors">
                <div className="font-bold text-sm mb-1">Find funded childcare in Edinburgh</div>
                <div className="text-xs text-pink-200">Official Edinburgh City Council portal →</div>
              </a>
              <a href="https://www.mygov.scot/childcare-costs-help" target="_blank" rel="noreferrer"
                className="bg-white border border-slate-200 rounded-xl p-4 block hover:shadow-sm transition-shadow">
                <div className="font-bold text-sm text-slate-900 mb-1">Childcare costs help — mygov.scot</div>
                <div className="text-xs text-slate-500">All Scottish Government childcare support →</div>
              </a>
            </div>
          </div>
        )}

        {tab === "finding" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Types of childcare in Edinburgh</h3>
              <div className="space-y-3">
                {[
                  { type: "Local Authority Nursery", ages: "2–5 years", desc: "Council-run nurseries — all offer the 1,140 funded hours. Often located within primary schools. Apply directly to the nursery or through the school.", cost: "Free (funded hours)", icon: "🏫" },
                  { type: "Private Day Nursery", ages: "0–5 years", desc: "Independent nurseries offering full-day or sessional care. Many are registered to deliver funded hours. Fees apply for non-funded hours and for under-3s.", cost: "£55–£90/day (non-funded)", icon: "🏢" },
                  { type: "Childminder", ages: "0–12 years", desc: "Registered childminders provide care in their home. Very flexible — early starts, late finishes, wraparound school care. Many deliver funded hours.", cost: "£5–£8/hour", icon: "🏠" },
                  { type: "Out-of-School Care (ASC)", ages: "5–12 years (school age)", desc: "Breakfast clubs and after-school clubs run from school premises or nearby. Funded hours can sometimes apply. Apply through the school.", cost: "£5–£15/session", icon: "⭐" },
                  { type: "Crèches", ages: "0–5 years", desc: "Short-term, sessional care while parents attend classes or appointments. Found in leisure centres, universities, and community centres.", cost: "£4–£8/hr", icon: "🌟" },
                ].map((t) => (
                  <div key={t.type} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{t.icon}</span>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{t.type}</div>
                          <div className="text-xs text-pink-600 font-semibold">{t.ages}</div>
                        </div>
                      </div>
                      <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full font-semibold flex-shrink-0">{t.cost}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Where to find childcare</h3>
              <div className="space-y-2">
                {[
                  { name: "Edinburgh City Council Childcare Directory", url: "https://www.edinburgh.gov.uk/childcare", desc: "Official directory of all approved funded childcare providers in Edinburgh" },
                  { name: "Care Inspectorate Register", url: "https://www.careinspectorate.com/", desc: "Check inspection ratings and reports for any nursery or childminder in Scotland" },
                  { name: "Childcare Choices (UK)", url: "https://www.childcarechoices.gov.uk/", desc: "Tax-Free Childcare, 15/30 hours scheme information (includes Scottish schemes)" },
                  { name: "Scottish Childminding Association", url: "https://www.childminding.org/", desc: "Find a registered childminder and check qualifications" },
                  { name: "Parentzone Scotland", url: "https://education.gov.scot/parentzone/", desc: "Scottish Government resource for parents including early learning info" },
                ].map((r) => (
                  <a key={r.name} href={r.url} target="_blank" rel="noreferrer"
                    className="flex items-start justify-between gap-2 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                    <div>
                      <div className="font-semibold text-slate-900 text-xs">{r.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{r.desc}</div>
                    </div>
                    <span className="text-pink-600 font-bold text-xs flex-shrink-0 ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <strong className="text-xs text-amber-900">Tax-Free Childcare (UK-wide)</strong>
              <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                Working parents can get up to £2,000/year per child (£4,000 for disabled children) in Tax-Free Childcare from the UK Government. For every £8 you pay in, the government adds £2. Can be used alongside (or instead of) funded hours for non-funded time. Apply at childcarechoices.gov.uk.
              </p>
              <a href="https://www.childcarechoices.gov.uk/" target="_blank" rel="noreferrer"
                className="inline-block mt-2 text-xs font-bold text-amber-700 hover:underline">Apply for Tax-Free Childcare →</a>
            </div>
          </div>
        )}

        {tab === "benefits" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-4">Scottish family benefits (Social Security Scotland)</h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">Many Scottish family benefits are separate from UK DWP benefits and are administered by Social Security Scotland. You may be entitled to benefits you don't know about.</p>
              <div className="space-y-3">
                {[
                  {
                    name: "Scottish Child Payment",
                    amount: "£26.70 per week, per eligible child",
                    who: "Low-income families with children under 16 receiving certain benefits (UC, IS, JSA, ESA, Tax Credits, Pension Credit)",
                    how: "Apply at mygov.scot/scottish-child-payment or call 0800 182 2222",
                    note: "This is separate from Child Benefit and is one of the most generous child poverty payments in the UK.",
                    color: "emerald",
                  },
                  {
                    name: "Best Start Grant — Pregnancy & Baby",
                    amount: "£707.25 (one-off payment)",
                    who: "First baby — low-income families from week 24 of pregnancy to 6 months after birth. £353.65 for subsequent children.",
                    how: "Apply at mygov.scot/best-start-grant or call 0800 182 2222",
                    note: "Must apply within the time window — you cannot apply retrospectively.",
                    color: "pink",
                  },
                  {
                    name: "Best Start Grant — Early Learning",
                    amount: "£353.65 (one-off payment)",
                    who: "Low-income families when child turns 2 (if 2-year-old funded childcare eligible) or around the start of nursery",
                    how: "Apply at mygov.scot/best-start-grant",
                    note: "Automatically considered if you receive Scottish Child Payment.",
                    color: "violet",
                  },
                  {
                    name: "Best Start Grant — School Age",
                    amount: "£353.65 (one-off payment)",
                    who: "Low-income families when child starts primary school (P1)",
                    how: "Apply at mygov.scot/best-start-grant",
                    note: "Helps with the costs of starting school — uniform, shoes, PE kit.",
                    color: "blue",
                  },
                  {
                    name: "Best Start Foods",
                    amount: "Up to £25.60/4 weeks on a prepaid card",
                    who: "Pregnant women or families with children under 3 on Universal Credit or certain benefits",
                    how: "Apply at mygov.scot/best-start-foods",
                    note: "Card can be used at major supermarkets for milk, fruit, veg, pulses, and infant formula.",
                    color: "amber",
                  },
                  {
                    name: "Child Benefit (UK-wide)",
                    amount: "£25.60/week (eldest), £16.95/week (additional children)",
                    who: "All families with children under 16 (or under 20 in approved education/training). Not means-tested below £60k income.",
                    how: "Claim via HMRC at gov.uk/child-benefit",
                    note: "If household income is over £60k, the High Income Child Benefit Charge applies. Still worth claiming even if you repay — protects National Insurance record.",
                    color: "sky",
                  },
                ].map((b) => (
                  <div key={b.name} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-bold text-slate-900 text-sm">{b.name}</div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">{b.amount}</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs"><span className="font-semibold text-slate-500">Who: </span><span className="text-slate-700">{b.who}</span></div>
                      <div className="text-xs"><span className="font-semibold text-slate-500">How: </span><span className="text-slate-700">{b.how}</span></div>
                    </div>
                    <div className="mt-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-2 leading-relaxed">{b.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-5">
              <strong className="text-sm">Not sure what you're entitled to?</strong>
              <p className="text-xs text-slate-300 mt-1 mb-3">Use the Social Security Scotland calculator or speak to Citizens Advice Edinburgh — many families miss out on thousands of pounds a year.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.socialsecurity.gov.scot/" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-pink-500 text-white px-3 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                  Social Security Scotland →
                </a>
                <a href="https://www.citizensadviceedinburgh.org.uk/" target="_blank" rel="noreferrer"
                  className="text-xs font-bold bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
                  Citizens Advice Edinburgh →
                </a>
              </div>
            </div>
          </div>
        )}

        {tab === "support" && (
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Family support services in Edinburgh</h3>
              <div className="space-y-3">
                {[
                  { name: "Edinburgh Council Family Support", address: "Various locations across Edinburgh", desc: "The council offers family support services through social work, including parenting support, family group conferencing, and early intervention programmes.", link: "https://www.edinburgh.gov.uk/family-support", num: "0131 200 2324" },
                  { name: "Home-Start Edinburgh", address: "Unit 1, 13-21 Mitchell Street, EH6 7BD", desc: "Trained volunteers visit families with young children at home to offer practical support and friendship — no judgement, no charge. Especially valuable for parents who are isolated.", link: "https://www.homestartmidandedinburgh.org.uk/", num: "0131 554 3211" },
                  { name: "Action for Children (Edinburgh)", address: "Parkhead Community Centre, Parkhead Loan, EH11", desc: "Family support including parenting programmes, children's centres, and short breaks for families with disabled children.", link: "https://www.actionforchildren.org.uk/", num: "0131 443 9822" },
                  { name: "Parentline Scotland", address: "Helpline (phone/text/online)", desc: "Free, confidential helpline for parents and carers of children of any age. Available 9am–9pm Monday to Friday, 9am–12 noon Saturday.", link: "https://www.parentlinescotland.org.uk/", num: "0800 028 2233" },
                  { name: "SNIP (Special Needs Information Point)", address: "Charity House, 11 Shore Road, Edinburgh", desc: "Information and support for families of disabled children and young people in Edinburgh and the Lothians.", link: "https://www.snipinfo.org/", num: "0131 553 7854" },
                  { name: "Bumps & Babies (Breastfeeding Support)", address: "Various community venues", desc: "Edinburgh has several breastfeeding support groups run by trained peer supporters. Free drop-ins, no booking required.", link: "https://www.nhslothian.scot/", num: "Healthline: 0131 536 9000" },
                  { name: "Edinburgh Food Bank", address: "Various distribution points", desc: "The Trussell Trust runs Edinburgh Foodbank with multiple distribution centres. Referrals via GPs, social workers, health visitors, or Citizens Advice. No one turned away.", link: "https://edinburgh.foodbank.org.uk/", num: "07710 288 543" },
                ].map((s) => (
                  <div key={s.name} className="border border-slate-200 rounded-xl p-4">
                    <div className="font-bold text-slate-900 text-sm">{s.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">📍 {s.address}</div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{s.desc}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <a href={`tel:${s.num}`} className="text-xs font-mono font-bold text-pink-600">📞 {s.num}</a>
                      <a href={s.link} target="_blank" rel="noreferrer" className="text-xs font-bold text-sky-600 hover:underline">Website →</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
              <strong className="text-sm text-pink-900">Health visitor support</strong>
              <p className="text-xs text-pink-800 mt-1 leading-relaxed">
                Every family with a child under school age is assigned an NHS Lothian health visitor. They provide free home visits from birth to 4–5 years, including development checks, mental health support for new parents, and signposting to local services. Contact your GP surgery if you haven't heard from your health visitor.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
