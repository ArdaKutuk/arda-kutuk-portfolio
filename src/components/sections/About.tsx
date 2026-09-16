import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";
import { sectionPadY, cardGrid, cardTint, card } from "@/lib/styles";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about">
      <Container className={sectionPadY}>
        <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.15] tracking-[-0.02em] font-bold m-0 mb-12 max-w-[900px] text-ink">
          {dict.about.heading}
        </h2>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-14">
          <div className="flex flex-col gap-5">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1.1rem] leading-[1.7] text-body-strong m-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className={`${cardGrid} grid-cols-2 content-start`}>
            {dict.about.stats.map((stat) => (
              <div key={stat.label} className={`${cardTint} p-7`}>
                <div className="text-[12px] tracking-[0.08em] text-muted mb-2.5">
                  {stat.label}
                </div>
                <div className="text-[1.05rem] font-bold text-ink">{stat.value}</div>
                {stat.sub && (
                  <div className="text-[0.9rem] text-label mt-1">{stat.sub}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-[13px] tracking-[0.1em] text-accent mb-6">
            {dict.about.howIWorkLabel}
          </div>
          <div className={`${cardGrid} grid-cols-[repeat(auto-fit,minmax(220px,1fr))]`}>
            {dict.about.howIWork.map((step) => (
              <div key={step.title} className={`${card} p-7 min-h-[150px]`}>
                <div className="text-[0.85rem] font-bold tracking-[0.06em] mb-3 text-ink">
                  {step.title}
                </div>
                <p className="text-[0.92rem] leading-[1.55] text-body m-0">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
