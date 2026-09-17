import Container from "@/components/ui/Container";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { sectionY, divider } from "@/lib/styles";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const projects = getProjects(locale);
  const [featured, ...rest] = projects;

  return (
    <section id="work" className={divider}>
      <Container className={`${sectionY} pb-0`}>
        <Reveal className="max-w-[640px]">
          <h2 className="text-h1 text-ink">{dict.work.heading}</h2>
          <p className="text-body-lg text-body mt-4">{dict.work.description}</p>
        </Reveal>
      </Container>

      <Container wide className="mt-16 pb-[var(--section-space)] flex flex-col gap-28 md:gap-36">
        {featured && (
          <ProjectCard project={featured} locale={locale} dict={dict} variant="featured" index={1} priority />
        )}
        {rest.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            locale={locale}
            dict={dict}
            variant={i % 2 === 0 ? "right" : "left"}
            index={i + 2}
          />
        ))}
      </Container>
    </section>
  );
}
