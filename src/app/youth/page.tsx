"use client";

import { useState } from "react";
import { YOUTH_SERVICES, YOUTH_RIGHTS } from "@/lib/edinburgh-data";
import PageHeader from "@/components/page-header";
import SectionTabs from "@/components/section-tabs";

const TABS = [
  { id: "rights", label: "Know Your Rights" },
  { id: "education", label: "Education Rights" },
  { id: "services", label: "Youth Services" },
  { id: "mental", label: "Mental Health" },
];

export default function YouthPage() {
  const [tab, setTab] = useState("rights");

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Youth & Rights" subtitle="For young people in Edinburgh" />

      <div className="p-5 w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-5">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Youth <span className="text-purple-500">& Rights.</span></h1>
          <p className="text-sm text-slate-600">Rights, entitlements, and support for young people in Edinburgh and Scotland.</p>
          <div className="mt-3 bg-purple-50 border border-purple-200 rounded-xl p-3">
            <p className="text-xs text-purple-900"><strong>🚌 Free buses for under-22s:</strong> All young people under 22 in Scotland get free bus travel. Apply for your Young Persons Free Bus Pass at transport.gov.scot.</p>
          </div>
        </div>

        <SectionTabs tabs={TABS} active={tab} onChange={setTab} />

        {tab === "rights" && (
          <div className="space-y-3">
            {YOUTH_RIGHTS.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-purple-700">{r.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{r.body}</p>
              </div>
            ))}
            <div className="bg-slate-900 text-white rounded-xl p-4">
              <strong className="text-sm">🪪 Young Scot Card</strong>
              <p className="text-xs text-slate-300 mt-1">Free national card for 11–26 year olds in Scotland — discounts on transport, food, cinema, sport, and culture. Also a digital ID. Apply free at youngscot.net.</p>
              <a href="https://youngscot.net" target="_blank" rel="noreferrer" className="inline-block mt-2 text-xs font-bold text-purple-400 hover:underline">Apply free →</a>
            </div>
          </div>
        )}

        {tab === "education" && (
          <div className="space-y-3">
            {[
              { title: "Curriculum for Excellence (CfE)", body: "Scotland uses the Curriculum for Excellence — different from the English National Curriculum. Children do National 4/5 qualifications (not GCSEs), then Highers (not A-Levels). Universities in Scotland are 4-year degrees. Scottish-domiciled students pay no tuition fees for their first degree." },
              { title: "Free University Tuition (Scottish Domicile)", body: "If you have lived in Scotland for at least 3 years and are applying to a Scottish university, tuition fees are paid by the Student Awards Agency Scotland (SAAS). This applies to most EU and EEA nationals too. Apply at saas.gov.uk." },
              { title: "Education Maintenance Allowance (EMA)", body: "If you are 16–19, staying in full-time school or college, and from a low-income household, you may receive £30/week. Apply through your school or college at the start of the academic year." },
              { title: "School Clothing Grant", body: "Families on low incomes can apply for a School Clothing Grant through Edinburgh Council. Amounts vary by school stage. Apply at edinburgh.gov.uk/school-clothing-grant." },
              { title: "Free School Meals", body: "All children in Primary 1–5 are entitled to free school meals in Scotland. Children in Primary 6 and above from low-income families may also qualify. Apply at edinburgh.gov.uk/free-school-meals." },
              { title: "Care Experienced Students", body: "If you have been in care, you are entitled to additional support at university including a bursary of at least £8,100 per year from SAAS, priority accommodation, and year-round housing support. Contact your university's widening participation team." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4">
                <strong className="text-sm text-sky-700">{item.title}</strong>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "services" && (
          <div className="space-y-3">
            {YOUTH_SERVICES.map((s) => (
              <div key={s.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{s.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{s.focus}</div>
                <a href={s.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-purple-600 hover:underline mt-2 inline-block">Visit →</a>
              </div>
            ))}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <strong className="text-sm text-purple-900">Edinburgh Youth Guarantee</strong>
              <p className="text-xs text-purple-800 mt-1 leading-relaxed">Edinburgh's commitment to every young person aged 16–24 having a positive destination — work, training, or education. If you need support, contact edinburgh.gov.uk/youth-guarantee or call 0131 469 3500.</p>
            </div>
          </div>
        )}

        {tab === "mental" && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 text-sm mb-3">Mental Health Support for Young People</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Papyrus (Under 35s)", desc: "Suicide prevention and crisis support for young people and those concerned about them.", num: "0800 068 41 41" },
                  { name: "Breathing Space", desc: "Scotland's mental health phone service — free, confidential. Evenings and weekends.", num: "0800 83 85 87" },
                  { name: "Childline", desc: "Free, confidential support for children and young people, any time.", num: "0800 1111" },
                  { name: "Samaritans", desc: "Listening support for anyone in distress, 24/7, free, any age.", num: "116 123" },
                ].map((item) => (
                  <div key={item.num} className="bg-purple-50 border border-purple-200 rounded-xl p-3">
                    <div className="font-bold text-slate-900 text-xs mb-1">{item.name}</div>
                    <div className="text-xs text-slate-600 mb-2">{item.desc}</div>
                    <div className="font-mono font-bold text-sm text-purple-800">{item.num}</div>
                  </div>
                ))}
              </div>
            </div>
            {[
              { name: "CAMHS (Child and Adolescent Mental Health Services)", desc: "NHS Lothian's specialist mental health service for under-18s. Referral via your GP.", link: "https://www.nhslothian.scot/OurServices/MentalHealth/" },
              { name: "Young Minds Scotland", desc: "Information, advice, and crisis messenger service for young people and parents.", link: "https://www.youngminds.org.uk/" },
              { name: "LGBT Health & Wellbeing", desc: "Counselling, social groups, and peer support for LGBTQ+ young people in Scotland.", link: "https://www.lgbthealth.org.uk/" },
              { name: "Place2Be (school-based)", desc: "Mental health support in Edinburgh schools. Ask your school if they have a Place2Be counsellor.", link: "https://www.place2be.org.uk/" },
            ].map((org) => (
              <div key={org.name} className="bg-white rounded-xl border border-slate-200 p-4">
                <div className="font-bold text-slate-900 text-sm">{org.name}</div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">{org.desc}</div>
                <a href={org.link} target="_blank" rel="noreferrer" className="text-xs font-semibold text-purple-600 hover:underline mt-2 inline-block">Visit →</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
