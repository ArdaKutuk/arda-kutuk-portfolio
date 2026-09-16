import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="border-t border-border">
      <Container className={sectionY}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-16">
          <div>
            <h2 className="text-h1 text-ink">{dict.about.heading}</h2>
            <div className="mt-6 flex flex-col gap-5">
              {dict.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-body max-w-[58ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

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
        </div>
      </Container>
    </section>
  );
}
