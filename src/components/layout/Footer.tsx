import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { socialLinks } from "@/lib/site";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const primaryLinks = [
    { href: `/${locale}#home`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#projects`, label: dict.nav.projects },
  ];
  const secondaryLinks = [
    { href: `/${locale}#experience`, label: dict.nav.experience },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border pt-14 pb-10 px-[clamp(20px,5vw,64px)]">
      <div className="mx-auto max-w-[1440px] flex justify-between flex-wrap gap-8">
        <div>
          <div className="font-bold tracking-[-0.02em] text-[17px] text-ink">
            ARDA KÜTÜK
          </div>
          <p className="text-[0.95rem] text-muted max-w-[340px] mt-3">{dict.footer.tagline}</p>
        </div>

        <div className="flex gap-10 flex-wrap">
          <div className="flex flex-col gap-2.5">
            {primaryLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-body no-underline">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            {secondaryLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-body no-underline">
                {link.label}
              </a>
            ))}
            <a href={socialLinks.github} className="text-sm text-body no-underline">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] mt-10">
        <div className="text-[13px] text-footer-muted">
          {dict.footer.copyright.replace("{year}", String(year))}
        </div>
      </div>
    </footer>
  );
}
