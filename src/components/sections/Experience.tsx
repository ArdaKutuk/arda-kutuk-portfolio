import Container from "@/components/ui/Container";
import { getExperience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const experience = getExperience(locale);

  return (
    <section id="experience">
      <Container className={sectionY}>
        <Reveal className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.experience.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.experience.description}</p>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {experience.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 80}>
              <article className="relative pl-6 py-9 border-b border-border">
                <span
                  aria-hidden
                  className="absolute left-0 top-[2.6rem] h-1.5 w-1.5 rounded-full bg-accent"
                />
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
