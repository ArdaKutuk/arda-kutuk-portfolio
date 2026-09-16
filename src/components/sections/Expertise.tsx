import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function Expertise({ dict }: { dict: Dictionary }) {
  return (
    <section>
      <Container className={sectionY}>
        <div className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.expertise.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.expertise.description}</p>
        </div>

        <div className="mt-14 border-t border-border">
          {dict.expertise.areas.map((area) => (
            <div
              key={area.title}
              className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-3 md:gap-12 py-9 border-b border-border"
            >
              <h3 className="text-h3 text-ink">{area.title}</h3>
              <div>
                <p className="text-body text-body max-w-[60ch]">{area.description}</p>
                <p className="text-small text-muted mt-4">{area.technologies.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
