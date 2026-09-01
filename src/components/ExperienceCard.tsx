import { GitCommitHorizontal, MapPin, TrendingUp } from "lucide-react";
import type { Role } from "../data/experience";

interface ExperienceCardProps {
  role: Role;
  isLast: boolean;
}

export default function ExperienceCard({ role, isLast }: ExperienceCardProps) {
  return (
    <div className="relative pb-10 pl-10 last:pb-0">
      {!isLast && (
        <span className="absolute left-[7px] top-6 h-full w-px bg-line" />
      )}
      <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-canvas">
        <GitCommitHorizontal size={10} className="text-accent" />
      </span>

      <div className="rounded-lg border border-line bg-canvas-subtle p-5 transition-colors hover:border-fg-subtle">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-base font-semibold text-fg">{role.role}</h4>
          <span className="rounded-full border border-line-muted bg-canvas px-2.5 py-0.5 font-mono text-xs text-fg-muted">
            {role.date}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-fg-subtle">
          <MapPin size={13} />
          {role.location}
        </div>

        {role.technologies && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {role.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-line-muted bg-canvas px-2 py-0.5 font-mono text-[11px] text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-4 space-y-2">
          {role.details.map((line, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
              {line}
            </li>
          ))}
        </ul>

        {role.impact && (
          <div className="mt-4 rounded-md border border-line-muted bg-canvas-inset/60 p-3.5">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-success">
              <TrendingUp size={13} />
              Impact
            </div>
            <ul className="space-y-1.5">
              {role.impact.map((line, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-success" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
