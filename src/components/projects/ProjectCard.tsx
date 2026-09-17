import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import ProjectVisual from "./ProjectVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";

const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-left-bottom bg-[length:0%_1px] transition-[background-size] duration-300 ease-out group-hover:bg-[length:100%_1px]";

export default function ProjectCard({
  project,
  locale,
  dict,
  index,
  priority = false,
}: {
  project: Project;
  locale: string;
  dict: Dictionary;
  index: number;
  priority?: boolean;
}) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <ScrollReveal delay={((index - 1) % 3) * 70} y={40}>
      <Link href={`/${locale}/projects/${project.slug}`} className="group block no-underline">
        <ProjectVisual
          title={project.title}
          category={project.category}
          coverImage={project.coverImage}
          aspect="aspect-[4/3]"
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          parallax
        />
        <div className="mt-6">
          <div className="flex items-baseline gap-3">
            <span className="text-meta text-accent">{indexLabel}</span>
            <span className="text-meta text-muted">{project.category}</span>
          </div>
          <h3 className={`text-h2 text-ink mt-3 inline-block pb-0.5 ${underline}`}>{project.title}</h3>
          <p className="text-body text-body mt-3">{project.shortDescription}</p>
          {project.technologies.length > 0 && (
            <p className="text-small text-muted mt-4">{project.technologies.join(" · ")}</p>
          )}
          <span className="text-small font-medium text-ink mt-5 inline-flex items-center gap-2 group-hover:text-accent">
            {dict.work.viewProject}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
