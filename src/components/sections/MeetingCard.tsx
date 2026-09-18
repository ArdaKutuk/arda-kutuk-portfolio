"use client";

import Script from "next/script";
import { ArrowRightIcon } from "@/components/ui/icons";
import { calendlyUrl } from "@/lib/site";
import type { Dictionary } from "@/i18n/types";

type CalendlyGlobal = {
  initPopupWidget: (options: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

// Trims Calendly's own chrome as far as their embed API allows — the
// popup iframe itself still carries some Calendly branding by design.
const popupUrl = `${calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1`;

export default function MeetingCard({ dict }: { dict: Dictionary }) {
  const meeting = dict.meeting;

  function openCalendly(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url: popupUrl });
  }

  return (
    <>
      <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

      <div className="group border border-border bg-surface rounded-md p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-accent/40 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.18)]">
        <span className="inline-flex items-center gap-2 text-meta text-accent">
          <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-accent" />
          {meeting.badge}
        </span>

        <h3 className="text-h2 text-ink mt-4">{meeting.title}</h3>
        <p className="text-body text-body mt-3">{meeting.description}</p>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-small text-muted">
            {meeting.duration} · {meeting.platform} · {meeting.price}
          </p>

          <button
            type="button"
            onClick={openCalendly}
            className="mt-6 inline-flex items-center gap-2 text-small font-medium rounded-md bg-ink text-bg px-5 py-3 transition-[color,background-color,transform] duration-200 hover:bg-accent active:scale-[0.97]"
          >
            {meeting.cta}
            <ArrowRightIcon
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              width={15}
              height={15}
            />
          </button>
        </div>
      </div>
    </>
  );
}
