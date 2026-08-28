import PageHeader from "@/components/page-header";
import Band from "@/components/band";
import NearbyPanel from "@/components/nearby-panel";
import ServiceCard from "@/components/service-card";
import TaskPanel from "@/components/task-panel";
import { SERVICE_CONTACTS, VISITOR_FIRST_48, VISITOR_TOP_TASKS } from "@/lib/edinburgh-data";

export default function VisitorEssentialsPage() {
  const visitorServices = SERVICE_CONTACTS.filter((service) => service.audience !== "resident");
  const airportLinks = SERVICE_CONTACTS.filter((service) =>
    ["edinburgh-airport", "edinburgh-trams", "lothian-buses", "waverley-station"].includes(service.id)
  );

  return (
    <div className="min-h-full">
      <PageHeader section="Visiting" title="Visitor Essentials" subtitle="First 48 hours in Edinburgh" />

            <Band label="For visitors" ground="paper">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            The fastest way to get settled, move around, and see the best of Edinburgh.
          </p>
        </div>

        <TaskPanel
          title="Top 5 Visitor Tasks"
          subtitle="Quick starts for a short stay"
          tasks={VISITOR_TOP_TASKS}
        />

        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <h3 className="text-base font-bold text-slate-900">First 48 Hours Checklist</h3>
          <div className="mt-3 space-y-3">
            {VISITOR_FIRST_48.map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                <div className="text-xs text-slate-700 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-base font-bold text-slate-900">Airport to City</h3>
          <div className="grid gap-3">
            {airportLinks.map((service) => (
              <ServiceCard key={service.id} service={service} variant="compact" />
            ))}
          </div>
        </section>

        <NearbyPanel title="Nearby Visitor Essentials" services={visitorServices} />
      </Band>
    </div>
  );
}
