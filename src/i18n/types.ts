export interface ExpertiseArea {
  title: string;
  description: string;
  technologies: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    experience: string;
    about: string;
    contact: string;
  };
  header: {
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  work: {
    heading: string;
    description: string;
    viewProject: string;
    liveDemoLabel: string;
  };
  expertise: {
    heading: string;
    description: string;
    areas: ExpertiseArea[];
  };
  experience: {
    heading: string;
    description: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    studyingLabel: string;
    studyingValue: string;
    universityValue: string;
    basedInLabel: string;
    basedInValue: string;
  };
  currently: {
    heading: string;
    buildingLabel: string;
    buildingValue: string;
    focusLabel: string;
    focusValue: string;
  };
  contact: {
    heading: string;
    description: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
  };
  footer: {
    tagline: string;
    copyright: string; // "{year}" is replaced at render time
  };
  languageSwitcher: {
    tr: string;
    en: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
  projectDetail: {
    allProjects: string;
    role: string;
    year: string;
    overview: string;
    problem: string;
    solution: string;
    features: string;
    architecture: string;
    techStack: string;
    challenges: string;
    learnings: string;
    viewOnGithub: string;
    liveDemo: string;
    nextProject: string;
  };
}
