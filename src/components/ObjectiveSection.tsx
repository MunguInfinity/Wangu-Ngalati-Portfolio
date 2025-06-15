
import SectionCard from "./SectionCard";

export default function ObjectiveSection() {
  return (
    <SectionCard id="objective" title="Profile & Objective">
      <div className="text-lg leading-relaxed font-sans">
        <div className="mb-3">
          <span className="font-semibold text-secondary-foreground">Objective:</span>
          <br />
          Highly motivated and detail-oriented Software Engineer with a strong background in software development, system integration, and problem-solving. Seeking a challenging position where my skills and expertise in various programming languages and technologies can contribute to the growth of a forward-thinking and innovative company.
        </div>
      </div>
    </SectionCard>
  );
}
