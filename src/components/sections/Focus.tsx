import Container from "@/components/ui/Container";
import { focusIcons } from "@/components/ui/icons";
import type { Dictionary } from "@/i18n/types";
import { sectionPadY, cardGrid, card } from "@/lib/styles";

export default function Focus({ dict }: { dict: Dictionary }) {
  return (
    <section>
      <Container className={sectionPadY}>
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)] tracking-[-0.02em] font-bold m-0 text-ink">
            {dict.focus.heading}
          </h2>
          <p className="text-[1.05rem] leading-[1.6] text-body mt-4 m-0">
            {dict.focus.description}
          </p>
        </div>

        <div className={`${cardGrid} grid-cols-[repeat(auto-fit,minmax(260px,1fr))] mt-14`}>
          {dict.focus.cards.map((focusCard, i) => {
            const Icon = focusIcons[i % focusIcons.length];
            return (
              <div
                key={focusCard.num}
                className={`${card} p-8 flex flex-col gap-5 transition-shadow hover:shadow-xl hover:shadow-ink/5`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-card text-ink">
                  <Icon />
                </div>
                <div>
                  <div className="text-[12px] text-accent tracking-[0.05em] mb-2">
                    {focusCard.num}
                  </div>
                  <h3 className="text-[1.25rem] tracking-[-0.01em] mb-2 font-bold text-ink">
                    {focusCard.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.6] text-body m-0">
                    {focusCard.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
