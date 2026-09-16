import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Arda Kütük — Software, Data & AI",
    description:
      "Personal portfolio of Arda Kütük, a Management Information Systems student focused on software development, data and artificial intelligence.",
  },
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },
  header: {
    contactCta: "Contact",
    menuOpen: "MENU",
    menuClose: "CLOSE",
  },
  hero: {
    eyebrow: "SOFTWARE · DATA · AI",
    heading: "Building useful things with software, data and AI.",
    description:
      "I'm Arda Kütük, a Management Information Systems student based in Istanbul, focused on building software products and exploring the intersection of artificial intelligence, data and real-world systems.",
    viewProjects: "View Projects",
    aboutMe: "About Me",
  },
  focus: {
    heading: "What I Focus On",
    description:
      "My work sits between technology, data and product thinking. I learn by building systems that solve concrete problems.",
    cards: [
      {
        num: "01",
        title: "AI & Data",
        text: "Exploring Python, data analysis and machine learning to understand how intelligent systems can support better decisions.",
      },
      {
        num: "02",
        title: "Backend & Systems",
        text: "Building APIs, databases and application logic with an emphasis on clear architecture and maintainable systems.",
      },
      {
        num: "03",
        title: "Product Thinking",
        text: "Looking beyond the code to understand users, workflows and the business problems a product is meant to solve.",
      },
    ],
  },
  services: {
    heading: "Areas I Work In",
    blocks: [
      {
        title: "PYTHON & DATA",
        text: "Data processing, analysis and Python-based applications.",
      },
      {
        title: "BACKEND DEVELOPMENT",
        text: "APIs, databases and application logic using technologies such as FastAPI, SQL and REST.",
      },
      {
        title: "WEB PRODUCTS",
        text: "Building functional web applications from interface to backend architecture.",
      },
      {
        title: "SYSTEMS & BUSINESS ANALYSIS",
        text: "Understanding workflows, requirements and how software fits into real business processes.",
      },
    ],
  },
  about: {
    heading: "Technology makes the most sense to me when it solves a real problem.",
    paragraphs: [
      "I'm Arda Kütük, a Management Information Systems student at Kadir Has University in Istanbul.",
      "My interests sit across software engineering, data, artificial intelligence and product development. Rather than focusing only on writing code, I like understanding the full system around a product — the user, the workflow, the data and the business problem behind it.",
      "I spend much of my time learning by building. My projects have ranged from backend APIs and data analysis to finance tools, digital menu systems and enterprise portal concepts.",
      "My current direction is toward AI and data-driven software engineering, while continuing to strengthen my foundations in backend development and system design.",
    ],
    stats: [
      { label: "STUDYING", value: "Management Information Systems", sub: "Kadir Has University" },
      { label: "BASED IN", value: "Istanbul, Türkiye" },
      { label: "FOCUS", value: "AI & Data" },
      { label: "APPROACH", value: "Learn by Building" },
    ],
    howIWorkLabel: "HOW I WORK",
    howIWork: [
      { title: "UNDERSTAND", text: "Start with the problem before thinking about the technology." },
      { title: "BUILD", text: "Turn ideas into working prototypes instead of keeping them theoretical." },
      { title: "ITERATE", text: "Test, improve and simplify based on what actually works." },
      { title: "LEARN", text: "Use every project as an opportunity to understand the system more deeply." },
    ],
  },
  projectsSection: {
    heading: "Selected Work",
    description:
      "A selection of projects where I explored software engineering, data, APIs and product development.",
    comingSoon: "GitHub · Live Demo · Case Study — coming soon",
    githubLabel: "GitHub",
    liveDemoLabel: "Live Demo",
    caseStudyLabel: "Case Study",
  },
  projectDetail: {
    back: "← Back to projects",
    overview: "OVERVIEW",
    viewOnGithub: "View on GitHub",
    liveDemo: "Live Demo",
  },
  experience: {
    heading: "Experience",
    description: "Professional environments where I learned how technology operates beyond personal projects.",
  },
  contact: {
    heading: "Let's connect.",
    description:
      "I'm always interested in conversations around software, AI, data, technology and interesting projects.",
    info: [
      { label: "EMAIL", value: "ardakutuk04@icloud.com", href: "mailto:ardakutuk04@icloud.com" },
      { label: "WHATSAPP", value: "+90 532 589 6604", href: "https://wa.me/905325896604" },
      {
        label: "LINKEDIN",
        value: "linkedin.com/in/ardakütük",
        href: "https://www.linkedin.com/in/ardak%C3%BCt%C3%BCk/",
      },
      { label: "GITHUB", value: "github.com/ArdaKutuk", href: "https://github.com/ArdaKutuk" },
      { label: "LOCATION", value: "Istanbul, Türkiye", emphasis: true },
    ],
    form: {
      nameLabel: "NAME",
      emailLabel: "EMAIL",
      messageLabel: "MESSAGE",
      nameError: "Please enter your name.",
      emailRequiredError: "Please enter your email.",
      emailInvalidError: "Please enter a valid email address.",
      messageError: "Please enter a message.",
      send: "Send Message",
      sending: "Sending…",
      successTitle: "Thanks for reaching out, {name}.",
      successBody:
        "This form isn't wired to a backend yet, so nothing was sent — please reach out via email, WhatsApp or LinkedIn above.",
      disclaimer:
        "Form UI only — needs backend wiring to send messages. Have a project, idea or just want to talk technology? Feel free to reach out.",
    },
  },
  footer: {
    tagline: "Building and learning at the intersection of software, data and intelligent systems.",
    copyright: "© {year} Arda Kütük.",
  },
  languageSwitcher: {
    tr: "TR",
    en: "EN",
  },
};

export default en;
