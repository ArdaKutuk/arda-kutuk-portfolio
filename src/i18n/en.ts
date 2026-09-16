import type { Dictionary } from "./types";

const en: Dictionary = {
  meta: {
    title: "Arda Kütük — Software Engineering, Data & AI",
    description:
      "Personal portfolio of Arda Kütük: software products built around backend systems, data and AI.",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    about: "About",
    contact: "Contact",
  },
  header: {
    menuOpen: "Menu",
    menuClose: "Close",
  },
  hero: {
    eyebrow: "Software Engineering · Data · AI",
    heading: "I build software that solves real business problems.",
    description:
      "I develop backend systems, data-driven tools and AI-informed digital products. I'm a Management Information Systems student based in Istanbul.",
    primaryCta: "View Projects",
    secondaryCta: "Get in Touch",
  },
  work: {
    heading: "Selected Work",
    description: "A selection of projects across software engineering, data and backend systems.",
    viewProject: "View Project",
    liveDemoLabel: "Live Demo",
  },
  expertise: {
    heading: "What I Work With",
    description: "My work sits between backend development, data, AI and business systems.",
    areas: [
      {
        title: "AI & Data",
        description: "Data cleaning, analysis and machine learning with Python and Pandas.",
        technologies: ["Python", "Pandas"],
      },
      {
        title: "Backend Engineering",
        description:
          "APIs, databases and application logic, built with an emphasis on clear architecture and maintainable systems.",
        technologies: ["FastAPI", "SQL", "REST API"],
      },
      {
        title: "Product Engineering",
        description: "Functional web products end to end, from interface to backend architecture.",
        technologies: ["Next.js", "JavaScript", "Git"],
      },
      {
        title: "Business Systems",
        description:
          "Analyzing workflows and requirements to design how software fits into real business processes.",
        technologies: ["Requirements Analysis", "CRM", "Systems Analysis"],
      },
    ],
  },
  experience: {
    heading: "Experience",
    description: "Professional experience where I saw how technology operates inside real organizations.",
  },
  about: {
    heading: "About",
    paragraphs: [
      "I'm a Management Information Systems student at Kadir Has University, focused on software engineering, data and AI.",
      "I care about more than writing code — I like thinking through both the technical and business side of a system, and prefer building software that solves real problems and holds up over time.",
    ],
    studyingLabel: "Studying",
    studyingValue: "Management Information Systems",
    universityValue: "Kadir Has University",
    basedInLabel: "Based in",
    basedInValue: "Istanbul, Türkiye",
  },
  currently: {
    heading: "Currently",
    buildingLabel: "Building",
    buildingValue: "Moneytrack — a personal finance app",
    focusLabel: "Focus",
    focusValue:
      "Moving toward AI and data-driven software engineering while strengthening my backend foundations.",
  },
  contact: {
    heading: "Let's Work Together",
    description: "Reach out about a project, an idea, or just to talk shop.",
    emailLabel: "Email",
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
    title: "Page not found",
    description: "The page you're looking for may have moved or never existed.",
    cta: "Back to home",
  },
  projectDetail: {
    allProjects: "All Projects",
    role: "Role",
    year: "Year",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    features: "Key Features",
    architecture: "Architecture",
    techStack: "Tech Stack",
    challenges: "Challenges",
    learnings: "What I Learned",
    viewOnGithub: "View on GitHub",
    liveDemo: "Live Demo",
    nextProject: "Next Project",
  },
};

export default en;
