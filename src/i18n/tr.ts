import type { Dictionary } from "./types";

const tr: Dictionary = {
  meta: {
    title: "Arda Kütük — Yazılım, Veri & Yapay Zeka",
    description:
      "Yazılım geliştirme, veri ve yapay zekaya odaklanan Yönetim Bilişim Sistemleri öğrencisi Arda Kütük'ün kişisel portföyü.",
  },
  nav: {
    home: "Anasayfa",
    about: "Hakkımda",
    projects: "Projeler",
    experience: "Deneyim",
    contact: "İletişim",
  },
  header: {
    contactCta: "İletişim",
    menuOpen: "MENÜ",
    menuClose: "KAPAT",
  },
  hero: {
    eyebrow: "YAZILIM · VERİ · YAPAY ZEKA",
    heading: "Yazılım, veri ve yapay zekayla faydalı şeyler inşa ediyorum.",
    description:
      "Ben Arda Kütük, İstanbul merkezli bir Yönetim Bilişim Sistemleri öğrencisiyim. Yazılım ürünleri geliştirmeye ve yapay zeka, veri ile gerçek dünya sistemlerinin kesişimini keşfetmeye odaklanıyorum.",
    viewProjects: "Projeleri Gör",
    aboutMe: "Hakkımda",
  },
  focus: {
    heading: "Neye Odaklanıyorum",
    description:
      "Çalışmalarım teknoloji, veri ve ürün düşüncesi arasında şekilleniyor. Somut problemleri çözen sistemler inşa ederek öğreniyorum.",
    cards: [
      {
        num: "01",
        title: "Yapay Zeka & Veri",
        text: "Akıllı sistemlerin daha iyi kararları nasıl destekleyebileceğini anlamak için Python, veri analizi ve makine öğrenmesini keşfediyorum.",
      },
      {
        num: "02",
        title: "Backend & Sistemler",
        text: "Net bir mimari ve sürdürülebilir sistemler önceliğiyle API'ler, veritabanları ve uygulama mantığı geliştiriyorum.",
      },
      {
        num: "03",
        title: "Ürün Düşüncesi",
        text: "Kodun ötesine geçerek kullanıcıları, iş akışlarını ve bir ürünün çözmesi gereken iş problemlerini anlamaya çalışıyorum.",
      },
    ],
  },
  services: {
    heading: "Çalıştığım Alanlar",
    blocks: [
      {
        title: "PYTHON & VERİ",
        text: "Veri işleme, analiz ve Python tabanlı uygulamalar.",
      },
      {
        title: "BACKEND GELİŞTİRME",
        text: "FastAPI, SQL ve REST gibi teknolojilerle API'ler, veritabanları ve uygulama mantığı.",
      },
      {
        title: "WEB ÜRÜNLERİ",
        text: "Arayüzden backend mimarisine kadar işlevsel web uygulamaları geliştirme.",
      },
      {
        title: "SİSTEM & İŞ ANALİZİ",
        text: "İş akışlarını, gereksinimleri ve yazılımın gerçek iş süreçlerine nasıl uyduğunu anlama.",
      },
    ],
  },
  about: {
    heading:
      "Teknoloji, gerçek bir problemi çözdüğünde bana en çok anlam ifade ediyor.",
    paragraphs: [
      "Ben Arda Kütük, İstanbul'daki Kadir Has Üniversitesi'nde Yönetim Bilişim Sistemleri okuyorum.",
      "İlgi alanlarım yazılım mühendisliği, veri, yapay zeka ve ürün geliştirme arasında yayılıyor. Sadece kod yazmaya odaklanmak yerine, bir ürünün etrafındaki tüm sistemi — kullanıcıyı, iş akışını, veriyi ve arkasındaki iş problemini — anlamayı seviyorum.",
      "Zamanımın çoğunu yaparak öğrenerek geçiriyorum. Projelerim backend API'lerden ve veri analizinden finans araçlarına, dijital menü sistemlerine ve kurumsal portal konseptlerine kadar uzanıyor.",
      "Şu anki yönüm, backend geliştirme ve sistem tasarımındaki temellerimi güçlendirmeye devam ederken yapay zeka ve veri odaklı yazılım mühendisliğine doğru.",
    ],
    stats: [
      { label: "EĞİTİM", value: "Yönetim Bilişim Sistemleri", sub: "Kadir Has Üniversitesi" },
      { label: "KONUM", value: "İstanbul, Türkiye" },
      { label: "ODAK", value: "Yapay Zeka & Veri" },
      { label: "YAKLAŞIM", value: "Yaparak Öğrenme" },
    ],
    howIWorkLabel: "NASIL ÇALIŞIRIM",
    howIWork: [
      { title: "ANLA", text: "Teknolojiyi düşünmeden önce problemle başla." },
      { title: "İNŞA ET", text: "Fikirleri teorik tutmak yerine çalışan prototiplere dönüştür." },
      { title: "GELİŞTİR", text: "Gerçekten işe yarayana göre test et, iyileştir ve sadeleştir." },
      { title: "ÖĞREN", text: "Her projeyi sistemi daha derinden anlamak için bir fırsat olarak kullan." },
    ],
  },
  projectsSection: {
    heading: "Seçilmiş Çalışmalar",
    description:
      "Yazılım mühendisliği, veri, API'ler ve ürün geliştirmeyi keşfettiğim projelerden bir seçki.",
    comingSoon: "GitHub · Canlı Demo · Vaka Analizi — yakında",
    githubLabel: "GitHub",
    liveDemoLabel: "Canlı Demo",
    caseStudyLabel: "Vaka Analizi",
  },
  projectDetail: {
    back: "← Projelere dön",
    overview: "GENEL BAKIŞ",
    viewOnGithub: "GitHub'da Görüntüle",
    liveDemo: "Canlı Demo",
  },
  experience: {
    heading: "Deneyim",
    description:
      "Teknolojinin kişisel projelerin ötesinde nasıl işlediğini öğrendiğim profesyonel ortamlar.",
  },
  contact: {
    heading: "Bağlantı kuralım.",
    description:
      "Yazılım, yapay zeka, veri, teknoloji ve ilginç projeler üzerine sohbetlerle her zaman ilgileniyorum.",
    info: [
      { label: "E-POSTA", value: "ardakutuk04@icloud.com", href: "mailto:ardakutuk04@icloud.com" },
      { label: "WHATSAPP", value: "+90 532 589 6604", href: "https://wa.me/905325896604" },
      {
        label: "LINKEDIN",
        value: "linkedin.com/in/ardakütük",
        href: "https://www.linkedin.com/in/ardak%C3%BCt%C3%BCk/",
      },
      { label: "GITHUB", value: "github.com/ArdaKutuk", href: "https://github.com/ArdaKutuk" },
      { label: "KONUM", value: "İstanbul, Türkiye", emphasis: true },
    ],
    form: {
      nameLabel: "AD SOYAD",
      emailLabel: "E-POSTA",
      messageLabel: "MESAJ",
      nameError: "Lütfen adınızı girin.",
      emailRequiredError: "Lütfen e-posta adresinizi girin.",
      emailInvalidError: "Lütfen geçerli bir e-posta adresi girin.",
      messageError: "Lütfen bir mesaj girin.",
      send: "Mesaj Gönder",
      sending: "Gönderiliyor…",
      successTitle: "Ulaştığınız için teşekkürler, {name}.",
      successBody:
        "Bu form henüz bir backend'e bağlı değil, bu yüzden hiçbir şey gönderilmedi — yukarıdaki e-posta, WhatsApp veya LinkedIn üzerinden doğrudan ulaşabilirsiniz.",
      disclaimer:
        "Bu form yalnızca arayüz — mesaj gönderebilmek için backend bağlantısı gerekiyor. Bir projeniz, fikriniz var ya da sadece teknoloji hakkında konuşmak mı istiyorsunuz? Çekinmeden ulaşın.",
    },
  },
  footer: {
    tagline: "Yazılım, veri ve akıllı sistemlerin kesişiminde inşa ediyor ve öğreniyorum.",
    copyright: "© {year} Arda Kütük.",
  },
  languageSwitcher: {
    tr: "TR",
    en: "EN",
  },
};

export default tr;
