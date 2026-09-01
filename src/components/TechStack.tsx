import { techStack } from "../data/techStack";
import { useReveal } from "../hooks/useReveal";

export default function TechStack() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="stack"
      className={`mx-auto max-w-5xl px-6 py-14 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Tech Stack
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="flex flex-col gap-5">
        {techStack.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
          >
            <span className="w-36 shrink-0 font-mono text-xs text-fg-subtle">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-canvas-subtle px-3.5 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
