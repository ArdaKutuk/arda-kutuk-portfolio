"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { setLocaleCookie } from "@/lib/locale-cookie";

export default function LanguageSwitcher({
  locale,
  dict,
  className = "",
}: {
  locale: Locale;
  dict: Dictionary;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    setLocaleCookie(next);
    const rest = pathname.replace(`/${locale}`, "") || "";
    router.push(`/${next}${rest}`);
  }

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full bg-card p-1 text-[12px] font-medium tracking-[0.03em] ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === locale}
          className={`rounded-full px-3 py-1.5 cursor-pointer transition-colors ${
            l === locale ? "bg-ink text-bg" : "text-label hover:text-ink"
          }`}
        >
          {dict.languageSwitcher[l]}
        </button>
      ))}
    </div>
  );
}
