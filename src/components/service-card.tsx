import { buildMapsLink, toTel } from "@/lib/location";
import type { Service } from "@/lib/edinburgh-data";
import SavePlaceButton from "@/components/save-place-button";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "compact";
}

const FEEDBACK_EMAIL = "ekponoambrose@gmail.com";

function buildFeedbackLink(service: Service) {
  const subject = `Edinburgh Navigator: update ${service.name}`;
  const body = `Service: ${service.name}\nLocation: ${service.address ?? ""}\nIssue: \nSource: ${service.sourceUrl ?? ""}\n`;
  return `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const phoneHref = toTel(service.phone);
  const mapsHref = buildMapsLink(service.address, service.geo ?? undefined);
  const feedbackHref = buildFeedbackLink(service);
  const isCompact = variant === "compact";

  return (
    <div className={`rounded-2xl border border-slate-200 bg-white ${isCompact ? "p-4" : "p-5"}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className={`font-bold text-slate-900 ${isCompact ? "text-sm" : "text-base"}`}>{service.name}</div>
          {service.description && (
            <p className={`text-slate-600 mt-1 ${isCompact ? "text-xs" : "text-sm"}`}>{service.description}</p>
          )}
          {service.address && (
            <div className={`text-slate-500 mt-2 ${isCompact ? "text-xs" : "text-sm"}`}>
              📍 {service.address}
            </div>
          )}
          {service.hours && (
            <div className={`text-slate-500 mt-1 ${isCompact ? "text-xs" : "text-sm"}`}>
              🕐 {service.hours}
            </div>
          )}
          {service.services && service.services.length > 0 && (
            <div className={`text-slate-500 mt-1 ${isCompact ? "text-xs" : "text-sm"}`}>
              🧾 {service.services.join(" · ")}
            </div>
          )}
          {service.eligibility && (
            <div className={`text-slate-500 mt-1 ${isCompact ? "text-xs" : "text-sm"}`}>
              ✅ {service.eligibility}
            </div>
          )}
        </div>
        {service.badge && (
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">
            {service.badge}
          </span>
        )}
      </div>

      <div className={`mt-4 flex flex-wrap gap-2 ${isCompact ? "text-xs" : "text-sm"}`}>
        {phoneHref && (
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 font-semibold hover:bg-slate-700 transition-colors"
          >
            Call
          </a>
        )}
        {mapsHref && (
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:border-slate-400 transition-colors"
          >
            Directions
          </a>
        )}
        {service.website && (
          <a
            href={service.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:border-slate-400 transition-colors"
          >
            Website
          </a>
        )}
        <SavePlaceButton service={service} />
        <a
          href={feedbackHref}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-100 px-3 py-1.5 font-semibold text-slate-400 hover:text-slate-600 transition-colors"
        >
          Report update
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-400">
        {service.updatedAt && <span>Last updated {service.updatedAt}</span>}
        {service.verifiedAt && <span>Last verified {service.verifiedAt}</span>}
        {service.sourceUrl && (
          <a href={service.sourceUrl} target="_blank" rel="noreferrer" className="hover:underline">
            Source
          </a>
        )}
      </div>
    </div>
  );
}
