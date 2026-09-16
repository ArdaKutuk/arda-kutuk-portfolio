import type { Locale } from "@/i18n/config";

interface ExperienceLocaleContent {
  role: string;
  text: string;
}

interface ExperienceSource {
  company: string;
  tr: ExperienceLocaleContent;
  en: ExperienceLocaleContent;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  text: string;
}

const experienceSources: ExperienceSource[] = [
  {
    company: "ŞEKERBANK",
    tr: {
      role: "BT Stajyeri",
      text: "Kurumsal BT'nin farklı alanlarında çalışarak teknik destek, ağ altyapısı ve siber güvenlik konularında deneyim kazandım.",
    },
    en: {
      role: "IT Intern",
      text: "Worked across different areas of enterprise IT, gaining exposure to technical support, networking, infrastructure and cybersecurity concepts.",
    },
  },
  {
    company: "KALE ENDÜSTRİ HOLDİNG",
    tr: {
      role: "İş Analisti Stajyeri",
      text: "İş süreçleri, CRM ve kurumsal sistemler üzerinde çalışırken gereksinim analizi, iş akışları, sistem testi ve dijital ürün düşüncesi konularında deneyim kazandım.",
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
    ...source[locale],
  }));
}
