import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { locales } from "@/i18n/config";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: `${siteConfig.url}/${locale}`, lastModified: new Date() });
    for (const slug of projectSlugs) {
      entries.push({
        url: `${siteConfig.url}/${locale}/projects/${slug}`,
        lastModified: new Date(),
      });
    }
  }

  return entries;
}
