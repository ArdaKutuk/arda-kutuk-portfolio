import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="pt-16 pb-20 sm:pt-20 sm:pb-24">
      <Container>
        <div className="reveal max-w-[840px]">
          <p className="text-meta text-accent">{dict.hero.eyebrow}</p>
          <h1 className="text-display mt-6 text-ink">{dict.hero.heading}</h1>
          <p className="text-body-lg text-body mt-6 max-w-[46ch]">{dict.hero.description}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="#work" variant="solid">
              {dict.hero.primaryCta}
            </Button>
            <Button href="#contact" variant="text">
              {dict.hero.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
