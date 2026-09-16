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
      className={`flex items-center gap-1 text-small ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-border" aria-hidden>
            /
          </span>}
          <button
            type="button"
            onClick={() => switchTo(l)}
            aria-pressed={l === locale}
            className={`cursor-pointer transition-colors ${
              l === locale ? "text-ink font-medium" : "text-muted hover:text-ink"
            }`}
          >
            {dict.languageSwitcher[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
