import type { Locale } from "@/i18n/config";

interface ExperienceLocaleContent {
  role: string;
  text: string;
}

interface ExperienceSource {
  company: string;
  location: string;
  /** Unconfirmed dates are left undefined rather than guessed — see README. */
  year?: string;
  tags: string[];
  tr: ExperienceLocaleContent;
  en: ExperienceLocaleContent;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  year?: string;
  tags: string[];
  role: string;
  text: string;
}

const experienceSources: ExperienceSource[] = [
  {
    company: "ŞEKERBANK",
    location: "İstanbul",
    tags: ["IT Support", "Network Infrastructure", "Cybersecurity"],
    tr: {
      role: "BT Stajyeri",
      text: "Kurumsal BT, ağ altyapısı, teknik destek ve siber güvenlik süreçlerinde deneyim kazandım.",
    },
    en: {
      role: "IT Intern",
      text: "Gained experience in enterprise IT, network infrastructure, technical support and cybersecurity.",
    },
  },
  {
    company: "KALE ENDÜSTRİ HOLDİNG",
    location: "İstanbul",
    tags: ["Business Analysis", "CRM", "Requirements Analysis", "System Testing"],
    tr: {
      role: "İş Analisti Stajyeri",
      text: "İş analizi, CRM, gereksinim yönetimi ve sistem testleri üzerinde çalıştım.",
    },
    en: {
      role: "Business Analyst Intern",
      text: "Worked on business analysis, CRM, requirements management and system testing.",
    },
  },
];

export function getExperience(locale: Locale): ExperienceEntry[] {
  return experienceSources.map((source) => ({
    company: source.company,
    location: source.location,
    year: source.year,
    tags: source.tags,
    ...source[locale],
  }));
}
