import SectionCard from "./SectionCard";
import { professionalSummary, objective } from "../data/portfolioData";

export default function ObjectiveSection() {
  return (
    <SectionCard id="objective" title="Profile & Objective">
      <div className="text-lg leading-relaxed font-sans">
        <div className="mb-3">
          <span className="font-semibold text-secondary-foreground">Professional Summary:</span>
          <br />
          {professionalSummary}
        </div>
        <div className="mb-3">
          <span className="font-semibold text-secondary-foreground">Objective:</span>
          <br />
          {objective}
        </div>
      </div>
    </SectionCard>
  );
}
