import Container from "@/components/ui/Container";
import { getExperience } from "@/data/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const experience = getExperience(locale);

  return (
    <section id="experience">
      <Container className={sectionY}>
        <div className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.experience.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.experience.description}</p>
        </div>

        <div className="mt-14 border-t border-border">
          {experience.map((entry) => (
            <article key={entry.company} className="py-9 border-b border-border">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-h3 text-ink">{entry.company}</h3>
                  <span className="text-small text-muted">{entry.role}</span>
                </div>
                {entry.year && <span className="text-small text-muted">{entry.year}</span>}
              </div>
              <div className="text-small text-muted mt-1">{entry.location}</div>
              <p className="text-body text-body mt-3 max-w-[62ch]">{entry.text}</p>
              {entry.tags.length > 0 && (
                <p className="text-small text-muted mt-3">{entry.tags.join(" · ")}</p>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
