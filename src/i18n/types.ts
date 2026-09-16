export interface ContactInfoItem {
  label: string;
  value: string;
  href?: string;
  emphasis?: boolean;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  header: {
    contactCta: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    viewProjects: string;
    aboutMe: string;
  };
  focus: {
    heading: string;
    description: string;
    cards: { num: string; title: string; text: string }[];
  };
  services: {
    heading: string;
    blocks: { title: string; text: string }[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { label: string; value: string; sub?: string }[];
    howIWorkLabel: string;
    howIWork: { title: string; text: string }[];
  };
  projectsSection: {
    heading: string;
    description: string;
    comingSoon: string;
    githubLabel: string;
    liveDemoLabel: string;
    caseStudyLabel: string;
  };
  projectDetail: {
    back: string;
    overview: string;
    viewOnGithub: string;
    liveDemo: string;
  };
  experience: {
    heading: string;
    description: string;
  };
  contact: {
    heading: string;
    description: string;
    info: ContactInfoItem[];
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      nameError: string;
      emailRequiredError: string;
      emailInvalidError: string;
      messageError: string;
      send: string;
      sending: string;
      successTitle: string; // "{name}" is replaced at render time
      successBody: string;
      disclaimer: string;
    };
  };
  footer: {
    tagline: string;
    copyright: string; // "{year}" is replaced at render time
  };
  languageSwitcher: {
    tr: string;
    en: string;
  };
}
