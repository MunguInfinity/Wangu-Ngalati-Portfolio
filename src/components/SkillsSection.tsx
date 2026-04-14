import SectionCard from "./SectionCard";
import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <SectionCard id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <span className="font-semibold text-[16px]">{category}</span>
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {(list as string[]).map((skill) => (
                <li
                  key={skill}
                  className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
