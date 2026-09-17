import Container from "@/components/ui/Container";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY, divider } from "@/lib/styles";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);

  return (
    <section id="work" className={divider}>
      <Container className={`${sectionY} pb-0`}>
        <Reveal className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.work.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.work.description}</p>
        </Reveal>
      </Container>

      <Container wide className="mt-16 pb-[var(--section-space)] flex flex-col gap-24 md:gap-32">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            dict={dict}
            variant={i % 2 === 0 ? "left" : "right"}
            index={i + 1}
            priority={i === 0}
          />
        ))}
      </Container>
    </section>
  );
}
