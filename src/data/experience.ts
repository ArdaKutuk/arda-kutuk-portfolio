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
      text: "Kurumsal BT operasyonları kapsamında teknik destek, ağ altyapısı ve siber güvenlik süreçlerini gözlemledim ve farklı teknik operasyonlarda aktif olarak görev aldım.",
    },
    en: {
      role: "IT Intern",
      text: "Worked across different areas of enterprise IT, gaining exposure to technical support, networking, infrastructure and cybersecurity concepts.",
    },
  },
  {
    company: "KALE ENDÜSTRİ HOLDİNG",
    location: "İstanbul",
    tags: ["Business Analysis", "CRM", "Requirements Analysis", "System Testing"],
    tr: {
      role: "İş Analisti Stajyeri",
      text: "İş analizi ve kurumsal sistem süreçlerinde; gereksinim analizi, iş akışlarının modellenmesi, CRM süreçleri ve sistem testleri üzerine çalıştım.",
    },
    en: {
      role: "Business Analyst Intern",
      text: "Worked with business processes, CRM and enterprise systems while gaining experience in requirements, workflows, system testing and digital product thinking.",
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
