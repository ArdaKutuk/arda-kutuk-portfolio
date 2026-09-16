import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";

export default function Currently({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-t border-border">
      <Container className="py-14">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <h2 className="text-meta text-muted">{dict.currently.heading}</h2>
        </div>

        <div className="mt-6 flex flex-col gap-4 max-w-[640px]">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="text-small text-muted w-24 shrink-0">{dict.currently.buildingLabel}</span>
            <span className="text-body text-ink">{dict.currently.buildingValue}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="text-small text-muted w-24 shrink-0">{dict.currently.focusLabel}</span>
            <span className="text-body text-ink">{dict.currently.focusValue}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
