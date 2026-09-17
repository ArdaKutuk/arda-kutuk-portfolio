import type { Dictionary } from "./types";

const tr: Dictionary = {
  meta: {
    title: "Arda Kütük — Software Engineering, Data & AI",
    description:
      "Arda Kütük'ün kişisel portföyü: backend sistemler, veri ve yapay zeka odaklı yazılım ürünleri.",
  },
  nav: {
    work: "Projeler",
    experience: "Deneyim",
    about: "Hakkımda",
    contact: "İletişim",
  },
  header: {
    menuOpen: "Menü",
    menuClose: "Kapat",
  },
  hero: {
    eyebrow: "Software Engineering · Data · AI",
    heading: "İş ihtiyaçlarını işlevsel yazılım ürünlerine dönüştürüyorum.",
    description:
      "Backend sistemleri, veri ve yapay zeka odaklı uygulamalar geliştiriyor; teknik gereksinimleri gerçek iş süreçleriyle bir araya getiriyorum. İstanbul'da yaşayan bir yönetim-bilişim sistemleri öğrencisiyim.",
    primaryCta: "Projeleri İncele",
    secondaryCta: "İletişime Geç",
  },
  work: {
    heading: "Seçilmiş Çalışmalar",
    description:
      "Gerçek ihtiyaçlardan yola çıkarak geliştirdiğim yazılım ve ürün projelerinden seçili çalışmalar.",
    viewProject: "Projeyi İncele",
    liveDemoLabel: "Canlı Demo",
  },
  expertise: {
    heading: "Çalıştığım Alanlar",
    description: "Teknik geliştirme ile iş ihtiyaçlarının kesiştiği alanlarda çalışıyorum.",
    areas: [
      {
        title: "Yapay Zeka & Veri",
        description:
          "Python tabanlı veri işleme, analiz ve makine öğrenmesi uygulamaları geliştiriyor; veriden anlamlı çıktılar üretmeye odaklanıyorum.",
        technologies: ["Python", "Pandas"],
      },
      {
        title: "Backend Geliştirme",
        description:
          "API tasarımı, veritabanı modelleme ve uygulama mantığı üzerine sürdürülebilir ve anlaşılır backend sistemleri geliştiriyorum.",
        technologies: ["FastAPI", "SQL", "REST API"],
      },
      {
        title: "Ürün Mühendisliği",
        description:
          "Bir ürünün arayüzünden veri modeline ve backend mimarisine kadar farklı katmanlarını birlikte ele alarak işlevsel dijital ürünler geliştiriyorum.",
        technologies: ["Next.js", "JavaScript", "Git"],
      },
      {
        title: "İş Sistemleri",
        description:
          "İş gereksinimlerini, süreçleri ve kullanıcı ihtiyaçlarını analiz ederek teknolojinin mevcut operasyonlara nasıl entegre edilebileceği üzerine çalışıyorum.",
        technologies: ["Requirements Analysis", "CRM", "Systems Analysis"],
      },
    ],
  },
  experience: {
    heading: "Deneyim",
    description:
      "Kurumsal teknoloji ortamlarında teknik altyapıdan iş süreçlerine kadar farklı alanlarda çalışma deneyimi edindim.",
  },
  about: {
    heading: "Hakkımda",
    paragraphs: [
      "Kadir Has Üniversitesi'nde Yönetim Bilişim Sistemleri öğrencisiyim. Yazılım mühendisliği, veri ve yapay zeka odağında kendimi geliştiriyorum.",
      "Bir problemi yalnızca kod tarafıyla değil; kullanıcı ihtiyacı, iş süreci ve teknik mimariyi birlikte değerlendirerek ele almayı önemsiyorum. Amacım, gerçek ihtiyaçlara karşılık veren sürdürülebilir ve kullanışlı yazılım ürünleri geliştirmek.",
    ],
    studyingLabel: "Eğitim",
    studyingValue: "Yönetim Bilişim Sistemleri",
    universityValue: "Kadir Has Üniversitesi",
    basedInLabel: "Konum",
    basedInValue: "İstanbul, Türkiye",
  },
  currently: {
    heading: "Şu Anda",
    buildingLabel: "Geliştiriyorum",
    buildingValue: "Moneytrack — Kişisel finans uygulaması",
    focusLabel: "Odak",
    focusValue:
      "Backend mühendisliği temelimi güçlendirirken veri ve yapay zeka tabanlı yazılım sistemleri üzerine uzmanlaşmaya odaklanıyorum.",
    learningLabel: "Derinleştiriyorum",
    learningValue: "Makine öğrenmesi ve veri bilimi",
  },
  contact: {
    heading: "Hadi bir şeyler geliştirelim.",
    description: "Bir proje, ürün fikri veya teknik iş birliği üzerine konuşmak için benimle iletişime geçebilirsiniz.",
    emailLabel: "E-posta",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    tagline: "Software Engineering · Data · AI",
    copyright: "© {year} Arda Kütük.",
  },
  languageSwitcher: {
    tr: "TR",
    en: "EN",
  },
  notFound: {
    title: "Sayfa bulunamadı",
    description: "Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.",
    cta: "Ana sayfaya dön",
  },
  projectDetail: {
    allProjects: "Tüm Projeler",
    role: "Rol",
    year: "Yıl",
    gallery: "Görseller",
    overview: "Genel Bakış",
    problem: "Problem",
    solution: "Çözüm",
    features: "Öne Çıkan Özellikler",
    architecture: "Mimari",
    techStack: "Teknolojiler",
    challenges: "Zorluklar",
    learnings: "Çıkarımlar",
    viewOnGithub: "GitHub'da Görüntüle",
    liveDemo: "Canlı Demo",
    nextProject: "Sonraki Proje",
  },
};

export default tr;
