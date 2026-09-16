import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProjectVisual from "@/components/projects/ProjectVisual";
import { locales, defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjectBySlug, getProjects, projectSlugs } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import { sectionY } from "@/lib/styles";

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
    description: project.shortDescription,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: { tr: `/tr/projects/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `${siteConfig.url}/${locale}/projects/${slug}`,
      type: "article",
    },
  };
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="py-9 border-b border-border">
      <h2 className="text-meta text-muted">{label}</h2>
      <div className="mt-4 max-w-[64ch]">{children}</div>
    </div>
  );
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

  const allProjects = getProjects(locale);
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article>
      <Container className="pt-12">
        <Link
          href={`/${locale}#work`}
          className="text-small text-muted no-underline transition-colors hover:text-ink"
        >
          ← {dict.projectDetail.allProjects}
        </Link>

        <header className="mt-8 max-w-[840px]">
          <span className="text-meta text-accent">{project.category}</span>
          <h1 className="text-h1 text-ink mt-3">{project.title}</h1>
          <p className="text-body-lg text-body mt-4 max-w-[60ch]">{project.shortDescription}</p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-meta text-muted">{dict.projectDetail.role}</dt>
              <dd className="text-body text-ink mt-1">{project.role}</dd>
            </div>
            {project.year && (
              <div>
                <dt className="text-meta text-muted">{dict.projectDetail.year}</dt>
                <dd className="text-body text-ink mt-1">{project.year}</dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="outline" showArrow={false}>
                {dict.projectDetail.viewOnGithub}
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="solid" showArrow={false}>
                {dict.projectDetail.liveDemo}
              </Button>
            )}
          </div>
        </header>
      </Container>

      <Container className="mt-12">
        <ProjectVisual
          title={project.title}
          category={project.category}
          coverImage={project.coverImage}
          aspect="aspect-[4/3]"
        />
      </Container>

      <Container className={sectionY}>
        <div className="border-t border-border">
          <Section label={dict.projectDetail.overview}>
            <p className="text-body text-body">{project.description}</p>
          </Section>

          {project.problem && (
            <Section label={dict.projectDetail.problem}>
              <p className="text-body text-body">{project.problem}</p>
            </Section>
          )}

          {project.solution && (
            <Section label={dict.projectDetail.solution}>
              <p className="text-body text-body">{project.solution}</p>
            </Section>
          )}

          {project.features && project.features.length > 0 && (
            <Section label={dict.projectDetail.features}>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="text-body text-body flex gap-3">
                    <span className="text-accent" aria-hidden>
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {project.architecture && (
            <Section label={dict.projectDetail.architecture}>
              <p className="text-body text-body">{project.architecture}</p>
            </Section>
          )}

          {project.technologies.length > 0 && (
            <Section label={dict.projectDetail.techStack}>
              <p className="text-body text-body">{project.technologies.join(" · ")}</p>
            </Section>
          )}

          {project.challenges && (
            <Section label={dict.projectDetail.challenges}>
              <p className="text-body text-body">{project.challenges}</p>
            </Section>
          )}

          {project.learnings && (
            <Section label={dict.projectDetail.learnings}>
              <p className="text-body text-body">{project.learnings}</p>
            </Section>
          )}
        </div>
      </Container>

      {nextProject && nextProject.slug !== project.slug && (
        <Container className="pb-20">
          <Link
            href={`/${locale}/projects/${nextProject.slug}`}
            className="group block border-t border-border pt-10 no-underline"
          >
            <span className="text-meta text-muted">{dict.projectDetail.nextProject}</span>
            <h2 className="text-h1 text-ink mt-3 transition-colors group-hover:text-accent">
              {nextProject.title} →
            </h2>
          </Link>
        </Container>
      )}
    </article>
  );
}
