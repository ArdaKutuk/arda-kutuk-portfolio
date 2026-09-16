import type { Locale } from "@/i18n/config";

interface ProjectLocaleContent {
  title: string;
  category: string;
  description: string;
}

export interface ProjectSource {
  slug: string;
  tags: Record<Locale, string[]>;
  githubUrl: string | null;
  liveUrl: string | null;
  tr: ProjectLocaleContent;
  en: ProjectLocaleContent;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

// NOTE: "IT Servis Masası" has no confirmed category/description/tags yet —
// the fields below are explicit placeholders, not invented project details.
// Replace them once the real project brief is available.
const projectSources: ProjectSource[] = [
  {
    slug: "moneytrack",
    tags: {
      tr: ["Python", "Finans", "Ürün Tasarımı"],
      en: ["Python", "Finance", "Product Design"],
    },
    githubUrl: null,
    liveUrl: null,
    tr: {
      title: "Moneytrack",
      category: "Kişisel Finans · Masaüstü Uygulaması",
      description:
        "Bütçeleri, tekrarlayan giderleri, faturaları ve borçları tek ve net bir arayüzde organize etmek için tasarlanmış bir kişisel finans uygulaması.",
    },
    en: {
      title: "Moneytrack",
      category: "Personal Finance · Desktop Application",
      description:
        "A personal finance application designed to organize budgets, recurring expenses, bills and debt in one clear interface.",
    },
  },
  {
    slug: "kurumsal-portal",
    tags: {
      tr: ["Kurumsal", "Portal", "Sistemler"],
      en: ["Enterprise", "Portal", "Systems"],
    },
    githubUrl: null,
    liveUrl: null,
    tr: {
      title: "Kurumsal Portal",
      category: "Kurumsal Yazılım · Ürün Prototipi",
      description:
        "İç hizmetler, bilgiye erişim ve yönetimsel süreçler etrafında tasarlanmış bir kurumsal çalışan portalı prototipi.",
    },
    en: {
      title: "Corporate Portal",
      category: "Enterprise Software · Product Prototype",
      description:
        "A corporate employee portal prototype designed around internal services, information access and administrative management.",
    },
  },
  {
    slug: "it-servis-masasi",
    tags: {
      tr: [],
      en: [],
    },
    githubUrl: null,
    liveUrl: null,
    tr: {
      title: "IT Servis Masası",
      category: "Kurumsal Yazılım · IT Servis Yönetimi",
      description: "[Proje açıklaması eklenecek]",
    },
    en: {
      title: "IT Service Desk",
      category: "Enterprise Software · IT Service Management",
      description: "[Project description to be added]",
    },
  },
];

export function getProjects(locale: Locale): Project[] {
  return projectSources.map((source) => ({
    slug: source.slug,
    tags: source.tags[locale],
    githubUrl: source.githubUrl,
    liveUrl: source.liveUrl,
    ...source[locale],
  }));
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export const projectSlugs = projectSources.map((p) => p.slug);
