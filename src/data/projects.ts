import type { Locale } from "@/i18n/config";

export interface ProjectLocaleContent {
  title: string;
  category: string;
  role: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  learnings?: string;
}

export interface ProjectSource {
  slug: string;
  /** Unconfirmed year is left undefined rather than guessed — see README. */
  year?: string;
  featured: boolean;
  /** Draft entries have no verified content yet and are excluded from every
   *  public listing, sitemap and static path until real content is supplied. */
  status: "published" | "draft";
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  /** No real screenshots exist yet — left unset until provided. When set,
   *  ProjectVisual renders the image instead of the abstract fallback. */
  coverImage?: string;
  gallery?: string[];
  tr: ProjectLocaleContent;
  en: ProjectLocaleContent;
}

export interface Project {
  slug: string;
  year?: string;
  featured: boolean;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  coverImage?: string;
  gallery?: string[];
  title: string;
  category: string;
  role: string;
  shortDescription: string;
  description: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  learnings?: string;
}

const projectSources: ProjectSource[] = [
  {
    slug: "moneytrack",
    featured: true,
    status: "published",
    technologies: ["Python"],
    githubUrl: null,
    liveUrl: null,
    coverImage: "/images/projects/moneytrack.png",
    tr: {
      title: "Moneytrack",
      category: "Kişisel Finans · Masaüstü Uygulaması",
      role: "Bireysel proje",
      shortDescription:
        "Bütçeleri, tekrarlayan giderleri, faturaları ve borçları tek bir arayüzde birleştiren kişisel finans uygulaması.",
      description:
        "Moneytrack, dağınık hesap takibini tek bir yerde toplamak için geliştirdiğim bir masaüstü kişisel finans uygulaması. Bütçe planlama, tekrarlayan giderler, fatura tarihleri ve borç takibini aynı arayüzde bir araya getirir.",
      problem:
        "Kişisel bütçe takibi genelde birden fazla not, tablo ve hatırlatma arasında dağılıyor; bu da tekrarlayan giderlerin ve borçların gözden kaçmasına yol açıyor.",
      solution:
        "Bütçe kategorileri, tekrarlayan gider kayıtları, fatura tarihleri ve borçları tek bir veri modeli altında birleştiren bir masaüstü uygulaması geliştirdim; kullanıcı tüm finansal durumunu tek ekrandan görebiliyor.",
      features: [
        "Kategori bazlı bütçe planlama",
        "Tekrarlayan gider takibi",
        "Fatura tarihi organizasyonu",
        "Borç kayıtlarının tek arayüzde izlenmesi",
      ],
      challenges:
        "En büyük zorluk, tekrarlayan giderleri, tek seferlik faturaları ve borçları aşırı karmaşıklaştırmadan tek bir veri modelinde temsil etmekti.",
      learnings:
        "Bu proje, veri modelini genelleştirmeden önce kullanıcının birincil iş akışına — tekrarlayan giderleri takip etmeye — öncelik vermenin önemini gösterdi.",
    },
    en: {
      title: "Moneytrack",
      category: "Personal Finance · Desktop Application",
      role: "Solo project",
      shortDescription:
        "A personal finance app that brings budgets, recurring expenses, bills and debt into one interface.",
      description:
        "Moneytrack is a desktop personal finance application I built to consolidate scattered budget tracking into a single place. It brings budget planning, recurring expenses, bill due dates and debt into one interface.",
      problem:
        "Personal budget tracking is usually spread across notes, spreadsheets and reminders, which makes it easy for recurring expenses and debt to slip through the cracks.",
      solution:
        "I built a desktop app that unifies budget categories, recurring expense entries, bill due dates and debt under a single data model, so the user can see their full financial picture from one screen.",
      features: [
        "Category-based budget planning",
        "Recurring expense tracking",
        "Bill due-date organization",
        "Debt tracked in the same interface",
      ],
      challenges:
        "The main challenge was representing recurring expenses, one-off bills and debt in a single data model without over-complicating the UI.",
      learnings:
        "This project reinforced the value of prioritizing the user's primary workflow — tracking recurring costs — before generalizing the underlying data model.",
    },
  },
  {
    slug: "kurumsal-portal",
    featured: false,
    status: "published",
    technologies: [],
    githubUrl: null,
    liveUrl: null,
    coverImage: "/images/projects/kurumsal-portal.png",
    tr: {
      title: "Kurumsal Portal",
      category: "Kurumsal Yazılım · Ürün Prototipi",
      role: "Bireysel proje",
      shortDescription:
        "İç hizmetler, bilgiye erişim ve yönetimsel süreçler etrafında tasarlanmış bir kurumsal çalışan portalı prototipi.",
      description:
        "Kurumsal Portal, çalışanların iç hizmetlere, bilgiye ve yönetimsel süreçlere tek bir yerden erişebilmesi için tasarladığım bir kurumsal portal prototipidir. Amaç, dağınık iç araçları tek bir tutarlı arayüzde toplamaktı.",
      problem:
        "Kurumsal ortamlarda çalışanlar genellikle farklı sistemler arasında dağılmış iç hizmetlere erişmek zorunda kalır; bu da verimliliği düşürür.",
      solution:
        "İç hizmetleri, bilgiye erişimi ve yönetimsel işlemleri tek bir portal arayüzünde birleştiren bir prototip tasarladım; öncelik çalışanın günlük iş akışını sadeleştirmekti.",
      features: [
        "Merkezi iç hizmet erişimi",
        "Yönetimsel süreçler için portal arayüzü",
        "Bilgiye erişimi sadeleştiren bilgi mimarisi",
      ],
      challenges:
        "Birden fazla iç hizmeti, arayüzü karmaşıklaştırmadan tek bir portalda yapılandırmak en büyük zorluktu.",
      learnings:
        "Bu proje, kurum içi araçlarda birincil kullanıcının müşteri değil çalışan olduğunu ve bilgi mimarisinin bu bakış açısıyla kurulması gerektiğini gösterdi.",
    },
    en: {
      title: "Corporate Portal",
      category: "Enterprise Software · Product Prototype",
      role: "Solo project",
      shortDescription:
        "An employee portal prototype centralizing internal services, information access and administrative workflows.",
      description:
        "Corporate Portal is an enterprise portal prototype I designed so employees can reach internal services, information and administrative workflows from one place, instead of scattered internal tools.",
      problem:
        "In enterprise environments, employees often need to reach internal services spread across different systems, which slows them down.",
      solution:
        "I designed a prototype that consolidates internal services, information access and administrative actions into one portal interface, prioritizing the employee's daily workflow.",
      features: [
        "Centralized access to internal services",
        "Portal interface for administrative workflows",
        "Information architecture built to simplify access",
      ],
      challenges:
        "The main challenge was structuring multiple internal services into a single portal without overwhelming the interface.",
      learnings:
        "This project reinforced that in internal enterprise tools, the primary user is the employee, not the customer — and information architecture needs to be built around that perspective.",
    },
  },
  {
    // Not published: no verified description, tech stack or screenshots yet.
    // Kept here so it's a one-line edit away from going live once real
    // content is supplied — see the final report for what's needed.
    slug: "it-servis-masasi",
    featured: false,
    status: "draft",
    technologies: [],
    githubUrl: null,
    liveUrl: null,
    tr: {
      title: "IT Servis Masası",
      category: "Kurumsal Yazılım · IT Servis Yönetimi",
      role: "Bireysel proje",
      shortDescription: "",
      description: "",
    },
    en: {
      title: "IT Service Desk",
      category: "Enterprise Software · IT Service Management",
      role: "Solo project",
      shortDescription: "",
      description: "",
    },
  },
];

function toProject(source: ProjectSource, locale: Locale): Project {
  return {
    slug: source.slug,
    year: source.year,
    featured: source.featured,
    technologies: source.technologies,
    githubUrl: source.githubUrl,
    liveUrl: source.liveUrl,
    coverImage: source.coverImage,
    gallery: source.gallery,
    ...source[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return projectSources.filter((p) => p.status === "published").map((p) => toProject(p, locale));
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  const source = projectSources.find((p) => p.slug === slug && p.status === "published");
  return source ? toProject(source, locale) : undefined;
}

export const projectSlugs = projectSources.filter((p) => p.status === "published").map((p) => p.slug);
