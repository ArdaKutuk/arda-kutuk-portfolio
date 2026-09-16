import Container from "@/components/ui/Container";
import { getExperience } from "@/data/experience";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionPadY, card } from "@/lib/styles";

export default function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const experience = getExperience(locale);

  return (
    <section id="experience">
      <Container className={sectionPadY}>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)] tracking-[-0.02em] font-bold m-0 text-ink">
          {dict.experience.heading}
        </h2>
        <p className="text-[1.05rem] leading-[1.6] text-body max-w-[560px] mt-4 mb-14">
          {dict.experience.description}
        </p>

        <div className="flex flex-col gap-5">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className={`${card} grid grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] gap-8 p-8`}
            >
              <div>
                <div className="font-bold text-[1.1rem] text-ink">{entry.company}</div>
                <div className="text-[0.95rem] text-label mt-1.5">{entry.role}</div>
              </div>
              <p className="text-base leading-[1.65] text-body m-0">{entry.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
