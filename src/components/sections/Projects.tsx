import Container from "@/components/ui/Container";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY, divider } from "@/lib/styles";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);
  const [featured, secondary, ...rest] = projects;

  return (
    <section id="work" className={divider}>
      <Container className={sectionY}>
        <div className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.work.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.work.description}</p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {featured && <ProjectCard project={featured} locale={locale} dict={dict} variant="featured" />}
          {secondary && (
            <ProjectCard project={secondary} locale={locale} dict={dict} variant="horizontal" />
          )}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16">
              {rest.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  locale={locale}
                  dict={dict}
                  variant="standard"
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
