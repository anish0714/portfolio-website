import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { GitHubIcon } from "./icons";
import ProjectArchitectureDiagram from "./ProjectArchitectureDiagram";
import { useReveal } from "../hooks/useReveal";

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

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.name}
            className="grid gap-6 rounded-lg border border-line bg-canvas-subtle p-6 md:grid-cols-[1.05fr_0.95fr] md:gap-8"
          >
            <div className="overflow-hidden rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
              <ProjectArchitectureDiagram />
            </div>

            <div>
              <h3 className="text-xl font-bold text-fg">{project.name}</h3>
              <p className="mt-1 font-mono text-xs text-accent">
                {project.tagline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {project.problem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                <span className="font-semibold text-fg">My role: </span>
                {project.role}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-canvas px-3 py-1 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas"
                >
                  <GitHubIcon size={16} />
                  App repo
                </a>
                {project.secondaryGithubUrl && (
                  <a
                    href={project.secondaryGithubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas"
                  >
                    <GitHubIcon size={16} />
                    {project.secondaryLabel ?? "Second repo"}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-fg"
                  >
                    Live demo
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
