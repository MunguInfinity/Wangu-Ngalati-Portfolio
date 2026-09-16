import SectionCard from "./SectionCard";
import { educationData } from "../data/portfolioData";

export default function EducationSection() {
  return (
    <SectionCard id="education" title="Education">
      <ol className="list-disc pl-5 flex flex-col gap-4">
        {educationData.map((ed) => (
          <li key={ed.title}>
            <span className="font-bold text-[17px]">{ed.title}</span>
            <div className="text-sm text-muted-foreground">
              {ed.degree && ed.degree}
              <br />
              {ed.years}
            </div>
            {ed.notes && ed.notes.length > 0 && (
              <ul className="list-disc pl-4 mt-1 mb-1 text-sm text-foreground">
                {ed.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
