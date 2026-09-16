export const siteConfig = {
  name: "Arda Kütük",
  // Set NEXT_PUBLIC_SITE_URL in your deployment environment (e.g. Vercel project
  // settings) once a custom domain is attached. See .env.example.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ardakutuk.example.com",
} as const;

export const socialLinks = {
  github: "https://github.com/ArdaKutuk",
  linkedin: "https://www.linkedin.com/in/ardak%C3%BCt%C3%BCk/",
  email: "ardakutuk04@icloud.com",
} as const;
