import PageHeader from "@/components/page-header";
import TaskPanel from "@/components/task-panel";
import NearbyPanel from "@/components/nearby-panel";
import QuickChecker from "@/components/quick-checker";
import QuickActionsPanel from "@/components/quick-actions-panel";
import SavedPlacesPanel from "@/components/saved-places-panel";
import PostcodeAlertsPanel from "@/components/postcode-alerts-panel";
import ServiceCard from "@/components/service-card";
import {
  COUNCIL_OFFICES,
  COUNCIL_TASKS,
  DENTISTS_ACCEPTING,
  FOOD_BANKS,
  PHARMACIES,
  RESIDENT_QUICK_ACTIONS,
  RESIDENT_TOP_TASKS,
  SERVICE_CONTACTS,
} from "@/lib/edinburgh-data";
import type { NewsItem } from "@/lib/edinburgh-data";
import { fetchCouncilNews } from "@/lib/news";

export default async function ResidentPage() {
  const residentServices = SERVICE_CONTACTS.filter((service) => service.audience !== "visitor");
  const newsItems: NewsItem[] = await fetchCouncilNews();

  return (
    <div className="min-h-full bg-slate-50">
      <PageHeader title="Resident Hub" subtitle="Everyday services for people living in Edinburgh" />

      <div className="p-5 w-full max-w-6xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Resident <span className="text-sky-500">Essentials.</span>
          </h1>
          <p className="text-sm text-slate-600">
            A practical hub for housing, health, council tasks, and everyday support.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <SavedPlacesPanel />
          <div className="grid gap-4">
            <QuickActionsPanel title="Quick Actions" actions={RESIDENT_QUICK_ACTIONS} />
            <PostcodeAlertsPanel />
          </div>
        </div>

        <TaskPanel
          title="Top 5 Resident Tasks"
          subtitle="Start here for the most common needs"
          tasks={RESIDENT_TOP_TASKS}
        />

        <NearbyPanel title="Nearby Support" services={residentServices} />

        <TaskPanel
          title="Council Tasks"
          subtitle="Fast links to common council services"
          tasks={COUNCIL_TASKS}
        />

        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Latest Council News</h3>
              <p className="text-sm text-slate-500 mt-1">Top 10 updates from edinburgh.gov.uk/news.</p>
            </div>
            <a
              href="https://www.edinburgh.gov.uk/news"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-600 hover:underline"
            >
              View all
            </a>
          </div>

          <div className="mt-4 divide-y divide-slate-100">
            {newsItems.length === 0 ? (
              <div className="text-sm text-slate-500 py-3">News is unavailable right now.</div>
            ) : (
              newsItems.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-3 py-3 hover:bg-slate-50 rounded-xl px-2 -mx-2 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">Published {item.published}</div>
                  </div>
                  <span className="text-xs font-bold text-slate-400">→</span>
                </a>
              ))
            )}
          </div>
          <div className="mt-4 text-xs text-slate-400">Source: edinburgh.gov.uk/news</div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Pharmacies</h3>
            <p className="text-sm text-slate-500">Everyday prescriptions and advice.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {PHARMACIES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Dentists Accepting New Patients</h3>
            <p className="text-sm text-slate-500">Check NHS availability before booking.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {DENTISTS_ACCEPTING.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Food Banks and Eligibility</h3>
            <p className="text-sm text-slate-500">Most foodbanks require a referral or appointment.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {FOOD_BANKS.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Council Offices by Service</h3>
            <p className="text-sm text-slate-500">Find the right office for housing, tax, and social care.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {COUNCIL_OFFICES.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          <QuickChecker
            title="Council Tax Reduction"
            question="Are you on a low income or receiving benefits such as Universal Credit?"
            yesText="Yes"
            noText="No"
            yesResult="You may qualify for Council Tax Reduction."
            noResult="If your circumstances change, you can still apply later."
            href="https://www.edinburgh.gov.uk/council-tax-reduction"
            hrefLabel="Apply online"
          />
          <QuickChecker
            title="Scottish Child Payment"
            question="Do you have a child under 16 and receive qualifying benefits?"
            yesText="Yes"
            noText="No"
            yesResult="You could receive Scottish Child Payment."
            noResult="Check again if your benefits or income changes."
            href="https://www.mygov.scot/scottish-child-payment"
            hrefLabel="Check eligibility"
          />
        </div>
      </div>
    </div>
  );
}
