import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { GitHubIcon } from "../components/icons";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = project
      ? `${project.name} — Anish Dandekar`
      : "Project not found — Anish Dandekar";
  }, [project]);

  const projectsHref = `${import.meta.env.BASE_URL}#projects`;

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-fg">Project not found</h1>
        <p className="mt-3 text-sm text-fg-muted">
          That project doesn't exist (or moved).
        </p>
        <a
          href={projectsHref}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-fg"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </a>
      </section>
    );
  }

  const { Diagram } = project;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <a
        href={projectsHref}
        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-fg"
      >
        <ArrowLeft size={16} />
        Back to portfolio
      </a>

      <h1 className="mt-6 text-3xl font-extrabold text-fg">{project.name}</h1>
      <p className="mt-2 font-mono text-sm text-accent">{project.tagline}</p>

      <div className="mt-8 overflow-hidden rounded-lg border border-[#30363d] bg-[#0d1117] p-4">
        <Diagram />
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Problem
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          {project.problem}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          My role
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          {project.role}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Tech
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-canvas-subtle px-3 py-1 font-mono text-xs text-fg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas-subtle"
        >
          <GitHubIcon size={16} />
          App repo
        </a>
        {project.secondaryGithubUrl && (
          <a
            href={project.secondaryGithubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-fg transition-colors hover:border-fg-subtle hover:bg-canvas-subtle"
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
            className="inline-flex items-center gap-2 rounded-md bg-accent-emphasis px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#388bfd]"
          >
            Live demo
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </section>
  );
}
