import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="border-t border-border">
      <Container className={sectionY}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-16">
          <Reveal>
            <h2 className="text-meta text-muted">{dict.about.heading}</h2>
            <p className="text-h2 text-ink leading-[1.35] mt-4 max-w-[50ch]">{dict.about.paragraph}</p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="flex flex-col gap-6 md:pt-1">
              <div>
                <dt className="text-meta text-muted">{dict.about.studyingLabel}</dt>
                <dd className="text-body text-ink mt-1.5">
                  {dict.about.studyingValue}
                  <br />
                  {dict.about.universityValue}
                </dd>
              </div>
              <div>
                <dt className="text-meta text-muted">{dict.about.basedInLabel}</dt>
                <dd className="text-body text-ink mt-1.5">{dict.about.basedInValue}</dd>
              </div>
            </dl>
            <p className="text-meta text-accent mt-6">{dict.hero.eyebrow}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
