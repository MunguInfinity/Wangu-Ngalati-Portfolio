import SectionCard from "./SectionCard";

const educationData = [
  {
    title: "DMI St. Eugene University",
    degree: "Bachelor of Computer Science (Software Engineering)",
    years: "2016 - 2021",
    notes: [
      "Graduated with a GPA above 4.0",
      "Awarded top student honors from 2017 to 2019",
    ],
  },
  {
    title: "David Kaunda National Technical High School",
    degree: "Full Grade 12 Certificate",
    years: "2012 - 2014",
    notes: [],
  },
];

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
