"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import CtaButton from "@/components/ui/CtaButton";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}#home`, label: dict.nav.home },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#projects`, label: dict.nav.projects },
    { href: `/${locale}#experience`, label: dict.nav.experience },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 pt-4 pb-3 px-[clamp(16px,4vw,40px)] bg-gradient-to-b from-bg via-bg to-transparent">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
        <a
          href={`/${locale}#home`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-[15px] font-bold text-bg no-underline"
        >
          A.
        </a>

        <nav
          className="hidden nav:flex items-center gap-1 rounded-full bg-ink px-2 py-2 shadow-lg shadow-ink/10"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-bg/75 no-underline transition-colors hover:bg-white/10 hover:text-bg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} dict={dict} className="hidden sm:inline-flex" />
          <div className="hidden nav:block">
            <CtaButton href={`/${locale}#contact`} variant="secondary">
              {dict.header.contactCta}
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav:hidden rounded-full bg-ink px-5 py-2.5 text-sm tracking-[0.05em] text-bg cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? dict.header.menuClose : dict.header.menuOpen}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="nav:hidden mx-auto mt-3 flex max-w-[1400px] flex-col gap-1 rounded-3xl border border-border bg-bg p-3 shadow-lg shadow-ink/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-[15px] text-ink no-underline hover:bg-card"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} dict={dict} className="mx-1 mt-2 self-start sm:hidden" />
        </nav>
      )}
    </header>
  );
}
