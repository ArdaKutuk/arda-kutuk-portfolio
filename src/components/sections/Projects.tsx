import Container from "@/components/ui/Container";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionPadY, cardGrid } from "@/lib/styles";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);

  return (
    <section id="projects">
      <Container className={sectionPadY}>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.6rem)] tracking-[-0.02em] font-bold m-0 text-ink">
          {dict.projectsSection.heading}
        </h2>
        <p className="text-[1.05rem] leading-[1.6] text-body max-w-[560px] mt-4 mb-14">
          {dict.projectsSection.description}
        </p>

        <div className={`${cardGrid} grid-cols-[repeat(auto-fit,minmax(320px,1fr))]`}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
