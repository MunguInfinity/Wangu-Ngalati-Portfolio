import SectionCard from "./SectionCard";
import { experience } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <SectionCard id="experience" title="Professional Experience">
      <div className="flex flex-col gap-7">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-md hover:border-primary bg-muted/60 rounded p-2"
          >
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span className="font-semibold">{exp.role}</span>
              <span className="text-muted-foreground text-sm">({exp.period})</span>
              <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded">
                {exp.company}
              </span>
            </div>
            <ul className="list-disc pl-5 text-[15px] text-foreground/90 leading-relaxed">
              {exp.description.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
