import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";
import { cardGrid } from "@/lib/styles";

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section>
      <Container className="pb-[clamp(60px,8vw,100px)]">
        <div className="rounded-[36px] bg-ink text-bg px-6 py-14 sm:px-10 sm:py-16">
          <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)] tracking-[-0.02em] font-bold m-0 mb-10 px-2">
            {dict.services.heading}
          </h2>

          <div className={`${cardGrid} grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`}>
            {dict.services.blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-3xl bg-white/[0.06] border border-white/10 p-7 min-h-[190px] flex flex-col justify-between transition-colors hover:bg-white/[0.09]"
              >
                <div className="text-[12px] tracking-[0.12em] text-dark-muted">
                  {block.title}
                </div>
                <p className="text-[0.95rem] leading-[1.6] text-dark-body m-0">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
