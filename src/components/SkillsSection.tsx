
import SectionCard from "./SectionCard";

const skills = {
  "Programming Languages": [
    "Java", "JavaScript", "Kotlin", "Dart", "Python", "PHP",
    "HTML", "CSS", "C++", "C", "SQL"
  ],
  "Frameworks & Libraries": [
    "JQuery", "Android Studio", "Flutter", "Laravel", "Django", "Node.js (Express)", "React", "Bootstrap", "Material UI", "CSS", "SpringBoot"
  ],
  Databases: [
    "MySQL", "Firebase (Firestore, Realtime Database)", "MongoDB", "Postgres", "MariaDB"
  ],
  "Cloud & Deployment": [
    "AWS (EC2, S3)", "GCP", "cPanel", "WHM"
  ],
  "Google APIs Integration": [
    "Messaging API", "Directions API", "Routing API", "Geolocation API"
  ],
  "Other Skills": [
    "UI/UX (Adobe XD, JustInMind)",
    "Game Dev (Unreal Engine)", "Graphics (Photopea, CorelDRAW, Photoshop)",
    "3D Animation (Blender)", "Containers (Docker)", "Runtime (Node.js)"
  ],
};

export default function SkillsSection() {
  return (
    <SectionCard id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat}>
            <span className="font-semibold text-[16px]">{cat}</span>
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {(list as string[]).map(skill => (
                <li key={skill} className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
