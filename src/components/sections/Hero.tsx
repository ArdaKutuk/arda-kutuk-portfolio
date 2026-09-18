import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroSpotlight from "./HeroSpotlight";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="relative overflow-hidden bg-ink hero-texture pt-20 pb-24 sm:pt-28 sm:pb-32">
      <HeroSpotlight />
      <Container wide className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] items-start gap-x-16 gap-y-12">
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

          <Reveal delay={200} className="w-full max-w-[400px] mx-auto lg:max-w-none lg:mx-0">
            <div className="overflow-hidden rounded-md border border-bg/15 bg-bg/5 aspect-video">
              <video
                className="h-full w-full object-cover"
                src="/videos/hero-intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
