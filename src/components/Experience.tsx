import { Building2 } from "lucide-react";
import { experience } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-14">
      <div className="mb-8 flex items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
          Experience
        </h2>
        <div className="h-px flex-1 bg-line" />
      </div>

      <div className="flex flex-col gap-12">
        {experience.map((company) => (
          <div key={company.name}>
            <div className="mb-5 flex flex-wrap items-baseline gap-2.5">
              <Building2 size={17} className="text-fg-muted" />
              <h3 className="text-lg font-bold text-fg">{company.name}</h3>
              {company.totalDuration && (
                <span className="font-mono text-xs text-fg-subtle">
                  {company.totalDuration}
                </span>
              )}
            </div>

            <div>
              {company.roles.map((role, idx) => (
                <ExperienceCard
                  key={role.role + role.date}
                  role={role}
                  isLast={idx === company.roles.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
