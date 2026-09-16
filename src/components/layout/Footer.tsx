import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { socialLinks } from "@/lib/site";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { container } from "@/lib/styles";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: socialLinks.github },
    { label: dict.contact.linkedinLabel, href: socialLinks.linkedin },
    { label: dict.contact.emailLabel, href: `mailto:${socialLinks.email}` },
  ];

  return (
    <footer className="border-t border-border">
      <div className={`${container} py-10 flex flex-wrap items-center justify-between gap-6`}>
        <div>
          <div className="text-h3 font-bold tracking-[-0.01em] text-ink">Arda Kütük</div>
          <div className="text-small text-muted mt-1">{dict.footer.tagline}</div>
        </div>

        <nav className="flex flex-wrap items-center gap-6" aria-label="Social">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-small text-body no-underline transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="text-small text-muted">
            {dict.footer.copyright.replace("{year}", String(year))}
          </span>
          <LanguageSwitcher locale={locale} dict={dict} />
        </div>
      </div>
    </footer>
  );
}
