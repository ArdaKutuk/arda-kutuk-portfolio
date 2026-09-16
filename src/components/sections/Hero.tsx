import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-ink hero-texture pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Container className="relative">
        <div className="max-w-[900px]">
          <Reveal>
            <p className="text-meta text-accent">{dict.hero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-display mt-6 text-bg">{dict.hero.heading}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-body-lg text-bg/70 mt-7 max-w-[46ch]">{dict.hero.description}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="#work" variant="solid" tone="dark">
                {dict.hero.primaryCta}
              </Button>
              <Button href="#contact" variant="text" tone="dark">
                {dict.hero.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
