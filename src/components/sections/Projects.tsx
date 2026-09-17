import Container from "@/components/ui/Container";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY, divider } from "@/lib/styles";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);

  return (
    <section id="work" className={divider}>
      <Container className={sectionY}>
        <ScrollReveal className="max-w-[640px]" y={30}>
          <h2 className="text-h1 text-ink">{dict.work.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.work.description}</p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              dict={dict}
              index={i + 1}
              priority={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
