"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { MenuIcon, CloseIcon } from "@/components/ui/icons";
import { container } from "@/lib/styles";

const sectionIds = ["work", "experience", "about", "contact"];

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: `/${locale}#work`, label: dict.nav.work, id: "work" },
    { href: `/${locale}#experience`, label: dict.nav.experience, id: "experience" },
    { href: `/${locale}#about`, label: dict.nav.about, id: "about" },
    { href: `/${locale}#contact`, label: dict.nav.contact, id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-bg/95 border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-bg/70 border-b border-transparent"
      }`}
    >
      <div
        className={`${container} flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[72px]"
        }`}
      >
        <a href={`/${locale}#home`} className="text-h3 font-bold tracking-[-0.01em] text-ink no-underline">
          Arda Kütük
        </a>

        <nav className="hidden nav:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = link.id === activeId;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative text-small no-underline transition-colors hover:text-ink ${
                  isActive ? "font-semibold text-ink" : "text-body"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-accent transition-[width] duration-300 group-hover:w-full ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher locale={locale} dict={dict} className="hidden sm:flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="nav:hidden flex h-9 w-9 items-center justify-center text-ink cursor-pointer"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.header.menuClose : dict.header.menuOpen}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="nav:hidden border-t border-border bg-bg px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={link.id === activeId ? "true" : undefined}
              className={`text-h3 no-underline ${link.id === activeId ? "text-accent" : "text-ink"}`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} dict={dict} className="mt-2" />
        </nav>
      )}
    </header>
  );
}
