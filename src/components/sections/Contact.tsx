import Container from "@/components/ui/Container";
import { socialLinks } from "@/lib/site";
import { ExternalLinkIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";
import MeetingCard from "./MeetingCard";
import type { Dictionary } from "@/i18n/types";
import { sectionY } from "@/lib/styles";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="border-t border-border">
      <Container className={sectionY}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-x-16 gap-y-14 items-start">
          <div>
            <Reveal className="max-w-[720px]">
              <h2 className="text-display text-ink">{dict.contact.heading}</h2>
              <p className="text-body-lg text-body mt-6 max-w-[520px]">{dict.contact.description}</p>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-h1 text-ink no-underline transition-colors hover:text-accent break-all"
              >
                {socialLinks.email}
              </a>

              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-body no-underline inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  {dict.contact.linkedinLabel}
                  <ExternalLinkIcon className="text-muted" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body text-body no-underline inline-flex items-center gap-1.5 transition-colors hover:text-ink"
                >
                  {dict.contact.githubLabel}
                  <ExternalLinkIcon className="text-muted" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <MeetingCard dict={dict} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
