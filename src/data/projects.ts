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
    slug: "kurumsal-portal",
    featured: true,
    status: "published",
    technologies: [],
    githubUrl: null,
    liveUrl: null,
    coverImage: "/images/projects/kurumsal-portal.png",
    gallery: ["/images/projects/kurumsal-portal-admin.png"],
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
    // No screenshots yet — ProjectVisual falls back to its typographic
    // mark until real images are supplied.
    slug: "it-servis-masasi",
    featured: false,
    status: "published",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "JWT"],
    githubUrl: null,
    liveUrl: null,
    coverImage: "/images/projects/it-servis-masasi/08-admin-genel-bakis.png",
    gallery: [
      "/images/projects/it-servis-masasi/01-giris-calisan.png",
      "/images/projects/it-servis-masasi/02-giris-it-personeli.png",
      "/images/projects/it-servis-masasi/03-giris-yonetici.png",
      "/images/projects/it-servis-masasi/04-destek-asistani.png",
      "/images/projects/it-servis-masasi/05-ticket-olustur.png",
      "/images/projects/it-servis-masasi/06-istek-olustur.png",
      "/images/projects/it-servis-masasi/07-cagrilarim.png",
      "/images/projects/it-servis-masasi/09-admin-ticket-yonetimi.png",
      "/images/projects/it-servis-masasi/10-admin-kullanici-yonetimi.png",
    ],
    tr: {
      title: "IT Servis Masası",
      category: "Kurumsal Yazılım · IT Servis Yönetimi",
      role: "Bireysel proje",
      shortDescription:
        "İş süreçlerini, rol tabanlı yönetimi ve otomatik yönlendirmeyi bir araya getiren, kurumsal IT destek operasyonları için full-stack bir ITSM prototipi.",
      description:
        "Bir kurumsal stajım sırasında gözlemlediğim IT destek süreçlerinden esinlenerek geliştirdiğim web tabanlı bir ITSM prototipi. Çalışanların teknik problemlerini ve servis taleplerini tek bir sistem üzerinden açabilmesini, doğru IT ekibine yönlendirilmesini, takip edilmesini ve raporlanmasını hedefler.",
      problem:
        "Kurumsal ortamlarda çalışanların teknik problemleri genellikle dağınık kanallardan — e-posta, sözlü talep, farklı sistemler — iletiliyor; bu da taleplerin doğru ekibe ulaşmasını, önceliklendirilmesini ve takip edilmesini zorlaştırıyor.",
      solution:
        "Kullanıcıların incident veya service request oluşturup takip edebildiği, adminlerin talepleri onay/red akışıyla yönetip ilgili IT ekibine atayabildiği, IT personelinin de kendisine atanan işleri işleme alabildiği rol tabanlı bir sistem tasarladım. Durum, öncelik, kategori, departman, atanan personel ve SLA süresi gibi alanlarla gerçek bir ticket lifecycle'ı simüle ettim.",
      features: [
        "Kullanıcılar için Incident / Service Request oluşturma ve takip",
        "Admin tarafında onay akışı (Onay Bekliyor → Onaylandı / Reddedildi) ve ekip ataması",
        "Microsoft Services, Network Operations, Technical Support gibi ekip kuyruklarına yönlendirme",
        "Her ticket'ta durum, öncelik, kategori, departman ve SLA süresi takibi",
        "Açık / inceleniyor / çözüldü ticket'lar, kategori dağılımı ve ekip iş yükü için admin dashboard'u",
        "JWT ve bcrypt tabanlı kimlik doğrulama ile rol bazlı erişim",
      ],
      architecture:
        "İstemci (HTML/CSS/Vanilla JS) → FastAPI REST API → SQLAlchemy ORM → SQLite. Kimlik doğrulama JWT ile sağlanıyor, şifreler bcrypt/Passlib ile hashleniyor, gelen veriler Pydantic ile doğrulanıyor. Veri katmanı SQLAlchemy üzerinden soyutlandığı için SQLite, ileride PostgreSQL gibi bir veritabanıyla değiştirilebilecek şekilde tasarlandı.",
      challenges:
        "En büyük zorluk, VPN, Outlook, Teams, Active Directory veya ağ problemi gibi farklı talep türlerini doğru kategori ve ekibe yönlendiren bir mantık kurmaktı. İlk sürümde bunu rule-based bir karar ağacıyla çözdüm; sonraki tasarımda bunun yerine AI destekli kategorilendirme, önceliklendirme ve routing'i bir sonraki adım olarak planladım.",
      learnings:
        "Bu proje, bir ticket'ın sadece bir açıklamadan ibaret olmadığını; durum, öncelik, SLA ve sorumlu ekip gibi alanlarla gerçek bir iş sürecini yansıtması gerektiğini gösterdi. Rol tabanlı yetkilendirmeyi ve onay akışını en baştan veri modeline dahil etmek, sonradan eklemekten çok daha sağlıklı oldu.",
    },
    en: {
      title: "IT Service Desk",
      category: "Enterprise Software · IT Service Management",
      role: "Solo project",
      shortDescription:
        "A full-stack ITSM prototype for corporate IT support operations, bringing together role-based management, automated routing and SLA tracking.",
      description:
        "A web-based ITSM prototype inspired by the corporate IT support processes I observed during a corporate internship. It lets employees open technical problems and service requests through a single system, routes them to the right IT team, and tracks and reports on them.",
      problem:
        "In corporate environments, employees' technical problems are usually reported through scattered channels — email, verbal requests, different systems — which makes it hard for requests to reach the right team, get prioritized and be tracked.",
      solution:
        "I designed a role-based system where users can open and track incidents or service requests, admins manage requests through an approve/reject flow and assign them to the right IT team, and IT staff process the work assigned to them. Fields like status, priority, category, department, assignee and SLA duration simulate a real ticket lifecycle rather than a simple complaint form.",
      features: [
        "Incident / Service Request creation and tracking for users",
        "Admin approval flow (Pending → Approved / Rejected) with team assignment",
        "Routing to team queues such as Microsoft Services, Network Operations and Technical Support",
        "Status, priority, category, department and SLA tracking on every ticket",
        "Admin dashboard for open/in-review/resolved tickets, category distribution and team workload",
        "JWT and bcrypt-based authentication with role-based access",
      ],
      architecture:
        "Client (HTML/CSS/Vanilla JS) → FastAPI REST API → SQLAlchemy ORM → SQLite. Authentication is handled with JWT, passwords are hashed with bcrypt/Passlib, and incoming data is validated with Pydantic. Because the data layer is abstracted through SQLAlchemy, SQLite was designed to be swappable for a database like PostgreSQL later.",
      challenges:
        "The main challenge was building routing logic that could correctly categorize and direct different request types — VPN, Outlook, Teams, Active Directory, network issues — to the right team. I solved this with a rule-based decision tree in the first version, and planned AI-assisted categorization, prioritization and routing as the next step in the design.",
      learnings:
        "This project reinforced that a ticket is more than a description — it needs fields like status, priority, SLA and owning team to reflect a real business process. Designing role-based authorization and the approval flow into the data model from the start proved far more solid than bolting them on afterward.",
    },
  },
  {
    slug: "moneytrack",
    featured: false,
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
