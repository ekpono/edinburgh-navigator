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

/* A directory entry, not a card. The emoji that used to prefix each detail
   line (📍 🕐 🧾 ✅) are replaced by mono labels — they read to a screen
   reader, they line up in a column, and they say what the value actually is. */
function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-1">
      <dt className="flex-shrink-0 w-20 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-slate-500 pt-[0.1875rem]">
        {label}
      </dt>
      <dd className="min-w-0 text-slate-700">{children}</dd>
    </div>
  );
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const phoneHref = toTel(service.phone);
  const mapsHref = buildMapsLink(service.address, service.geo ?? undefined);
  const feedbackHref = buildFeedbackLink(service);
  const isCompact = variant === "compact";
  const textSize = isCompact ? "text-[0.8125rem]" : "text-sm";

  return (
    <div className={`bg-white border-t-2 border-slate-900 ${isCompact ? "p-4" : "p-5"}`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className={`min-w-0 text-slate-900 ${isCompact ? "text-[0.9375rem]" : "text-base"}`}>
          {service.name}
        </h3>
        {service.badge && (
          <span className="flex-shrink-0 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-amber-800 bg-amber-50 px-2 py-1">
            {service.badge}
          </span>
        )}
      </div>

      {service.description && (
        <p className={`mt-1.5 text-slate-700 leading-relaxed ${textSize}`}>{service.description}</p>
      )}

      {(service.address || service.hours || service.services?.length || service.eligibility) && (
        <dl className={`mt-3.5 pt-3 border-t border-slate-200 ${textSize}`}>
          {service.address && <Detail label="Where">{service.address}</Detail>}
          {service.hours && <Detail label="Open">{service.hours}</Detail>}
          {service.services && service.services.length > 0 && (
            <Detail label="Offers">{service.services.join(" · ")}</Detail>
          )}
          {service.eligibility && <Detail label="Who for">{service.eligibility}</Detail>}
        </dl>
      )}

      <div className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 ${textSize}`}>
        {phoneHref && (
          <a
            href={phoneHref}
            className="font-semibold text-white bg-slate-900 px-3.5 py-1.5 hover:bg-plum-700 transition-colors"
          >
            Call
          </a>
        )}
        {mapsHref && (
          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-900 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-plum-700"
          >
            Directions
          </a>
        )}
        {service.website && (
          <a
            href={service.website}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-900 underline decoration-amber-600 decoration-2 underline-offset-4 hover:text-plum-700"
          >
            Website
          </a>
        )}
        <SavePlaceButton service={service} />
        <a href={feedbackHref} className="text-slate-500 hover:text-slate-900 hover:underline">
          Report an update
        </a>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.6875rem] text-slate-500">
        {service.updatedAt && <span>Updated {service.updatedAt}</span>}
        {service.verifiedAt && <span>Verified {service.verifiedAt}</span>}
        {service.sourceUrl && (
          <a href={service.sourceUrl} target="_blank" rel="noreferrer" className="hover:text-slate-900 hover:underline">
            Source
          </a>
        )}
      </div>
    </div>
  );
}
