import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="pt-8">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] bg-ink px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 text-bg reveal">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/30 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-10 top-10 hidden md:block h-56 w-56 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-gradient-to-br from-accent/40 via-white/10 to-transparent"
          />

          <div className="relative">
            <div className="text-[13px] tracking-[0.18em] text-dark-muted">
              {dict.hero.eyebrow}
            </div>
            <h1 className="text-[clamp(2.4rem,6.2vw,5.4rem)] leading-[1.02] tracking-[-0.02em] font-bold mt-5 max-w-[820px] text-bg">
              {dict.hero.heading}
            </h1>
            <p className="text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.55] text-dark-body max-w-[560px] mt-7">
              {dict.hero.description}
            </p>
            <div className="flex gap-4 flex-wrap mt-10">
              <CtaButton href="#projects" variant="onDark">
                {dict.hero.viewProjects}
              </CtaButton>
              <CtaButton href="#about" variant="onDarkOutline">
                {dict.hero.aboutMe}
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
