import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

const TILE_TECH_LIMIT = 4;

export default function Projects() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="projects"
      className={`mx-auto max-w-5xl px-6 py-14 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Projects
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => {
          const shownTech = project.tech.slice(0, TILE_TECH_LIMIT);
          const hiddenCount = project.tech.length - shownTech.length;

          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col rounded-lg border border-line bg-canvas-subtle p-6 transition-colors hover:border-accent"
            >
              <h3 className="text-lg font-bold text-fg">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-accent">
                {project.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {shownTech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
                {hiddenCount > 0 && (
                  <span className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-fg-subtle">
                    +{hiddenCount}
                  </span>
                )}
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fg-muted transition-colors group-hover:text-accent">
                View case study
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
