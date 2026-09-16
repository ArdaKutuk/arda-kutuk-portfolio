import Container from "@/components/ui/Container";
import ContactForm from "@/components/ui/ContactForm";
import type { Dictionary } from "@/i18n/types";
import { sectionPadY, cardGrid, cardTint } from "@/lib/styles";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact">
      <Container className={sectionPadY}>
        <h2 className="text-[clamp(2.2rem,5.5vw,4rem)] tracking-[-0.02em] font-bold m-0 text-ink">
          {dict.contact.heading}
        </h2>
        <p className="text-[1.1rem] leading-[1.6] text-body max-w-[560px] mt-6 mb-16">
          {dict.contact.description}
        </p>

        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-14">
          <div className={`${cardGrid} grid-cols-2 content-start`}>
            {dict.contact.info.map((item) => (
              <div key={item.label} className={`${cardTint} p-[26px]`}>
                <div className="text-[11px] tracking-[0.08em] text-muted mb-2">
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-[0.95rem] no-underline">
                    {item.value}
                  </a>
                ) : (
                  <div
                    className={`text-[0.95rem] ${
                      item.emphasis ? "font-bold text-ink" : "text-label"
                    }`}
                  >
                    {item.value}
                  </div>
                )}
              </div>
            ))}
          </div>

          <ContactForm dict={dict} />
        </div>
      </Container>
    </section>
  );
}
