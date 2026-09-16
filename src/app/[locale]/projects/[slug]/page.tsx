import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import { locales, defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { sectionPadY, pillTag } from "@/lib/styles";

export function generateStaticParams() {
  return locales.flatMap((locale) => projectSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const project = getProjectBySlug(locale, slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const project = getProjectBySlug(locale, slug);
  if (!project) notFound();
  const dict = getDictionary(locale);

  return (
    <section>
      <Container className={sectionPadY}>
        <Link href={`/${locale}#projects`} className="text-sm no-underline">
          {dict.projectDetail.back}
        </Link>

        <div className="mt-8">
          <div className="text-[12px] tracking-[0.06em] text-accent">
            {project.category}
          </div>
          <h1 className="text-[clamp(2rem,4.5vw,3.2rem)] tracking-[-0.02em] font-bold mt-3 mb-6 max-w-[900px] text-ink">
            {project.title}
          </h1>

          {project.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-10">
              {project.tags.map((tag) => (
                <span key={tag} className={pillTag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="text-[1rem] font-bold tracking-[0.06em] mb-3 text-ink">
            {dict.projectDetail.overview}
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-body-strong max-w-[720px] m-0">
            {project.description}
          </p>

          <div className="flex gap-4 flex-wrap mt-10 items-center">
            {project.githubUrl ? (
              <CtaButton href={project.githubUrl} variant="secondary">
                {dict.projectDetail.viewOnGithub}
              </CtaButton>
            ) : null}
            {project.liveUrl ? (
              <CtaButton href={project.liveUrl} variant="primary">
                {dict.projectDetail.liveDemo}
              </CtaButton>
            ) : null}
            {!project.githubUrl && !project.liveUrl ? (
              <p className="font-mono text-[11px] text-footer-muted">
                {dict.projectsSection.comingSoon}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
