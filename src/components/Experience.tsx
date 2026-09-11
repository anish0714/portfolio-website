import { Building2 } from "lucide-react";
import { experience } from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="experience"
      className={`scroll-mt-24 px-6 py-16 transition-all duration-700 ease-out lg:py-24 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <SectionHeading number="02" title="Experience" />

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
