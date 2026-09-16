import Link from "next/link";
import type { Project } from "@/data/projects";
import type { Dictionary } from "@/i18n/types";
import ProjectVisual from "./ProjectVisual";
import Reveal from "@/components/ui/Reveal";

type Variant = "featured" | "horizontal" | "standard";

export default function ProjectCard({
  project,
  locale,
  dict,
  variant = "standard",
  index,
}: {
  project: Project;
  locale: string;
  dict: Dictionary;
  variant?: Variant;
  index: number;
}) {
  const indexLabel = String(index).padStart(2, "0");

  const meta = (
    <div className={variant === "standard" ? "mt-5" : ""}>
      <div className="flex items-baseline gap-3">
        <span className="text-meta text-muted">{indexLabel}</span>
        <span className="text-meta text-accent">{project.category}</span>
      </div>
      <h3 className="text-h2 text-ink mt-3">{project.title}</h3>
      <p className="text-body text-body mt-3 max-w-[56ch]">{project.shortDescription}</p>
      {project.technologies.length > 0 && (
        <p className="text-small text-muted mt-4">{project.technologies.join(" · ")}</p>
      )}
      <span className="text-small font-medium text-ink mt-5 inline-flex items-center gap-2 group-hover:text-accent">
        {dict.work.viewProject}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </div>
  );

  if (variant === "featured") {
    return (
      <Reveal>
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="group grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-center no-underline"
        >
          <ProjectVisual
            title={project.title}
            category={project.category}
            coverImage={project.coverImage}
            aspect="aspect-[4/3]"
          />
          {meta}
        </Link>
      </Reveal>
    );
  }

  if (variant === "horizontal") {
    return (
      <Reveal>
        <Link
          href={`/${locale}/projects/${project.slug}`}
          className="group grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 items-center no-underline"
        >
          {meta}
          <ProjectVisual
            title={project.title}
            category={project.category}
            coverImage={project.coverImage}
            aspect="aspect-[4/3]"
            className="order-first sm:order-last"
          />
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <Link href={`/${locale}/projects/${project.slug}`} className="group block no-underline">
        <ProjectVisual
          title={project.title}
          category={project.category}
          coverImage={project.coverImage}
          aspect="aspect-[4/3]"
        />
        {meta}
      </Link>
    </Reveal>
  );
}
