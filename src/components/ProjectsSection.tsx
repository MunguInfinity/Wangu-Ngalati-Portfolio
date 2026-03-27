import SectionCard from "./SectionCard";

const projects = [
  {
    name: "Transcended Study Hub",
    url: "https://transcendedstudyhub.com/",
    desc: "Comprehensive learning platform for secondary school and university students. Structured lessons, expert tutors, and interactive content.",
    tech: "",
  },
  {
    name: "Discrete Learning",
    url: "https://discretelearning.com/",
    desc: "Simplify tough topics and watch your exam results climb. Focused, results-driven lessons with downloadable videos and PDFs for offline access, plus automated payments to join anytime.",
    tech: "",
  },
  {
    name: "Advanced Calculator & ATM Simulator",
    desc: "Simulates ATM transactions and performs complex calculations.",
    tech: "Java, MySQL",
  },
  {
    name: "Nayenda Bus Ticketing System",
    desc: "Real-time ticketing application for traveling customers.",
    tech: "Java, Firebase (Authentication, Storage, Realtime Database)",
  },
  {
    name: "Ubulimi (Agro-Advisory Application)",
    desc: "Provides crop decision-making tools and weather predictions for farmers.",
    tech: "Kotlin, Firebase",
  },
  {
    name: "Vitundu Language App",
    desc: "Interactive learning platform that teaches Zambian children local languages.",
    tech: "Kotlin, Firebase",
  },
  {
    name: "Murder Hornet Character Design",
    desc: "Designed a character for ProSam Studio animations.",
    tech: "Krita, Huion Tablet, Blender",
  },
  {
    name: "Graphics & Logo Design",
    desc: "Designed logos, posters, brochures, and letterheads for various companies.",
    tech: "Photopea, CorelDRAW, Photoshop",
  },
];

export default function ProjectsSection() {
  return (
    <SectionCard id="projects" title="Notable Projects">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-secondary rounded-lg p-4 border border-border shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.03] hover:border-primary"
            tabIndex={0}
            aria-label={project.name}
          >
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[16px] leading-tight text-primary hover:underline"
              >
                {project.name}
              </a>
            ) : (
              <div className="font-semibold text-[16px] leading-tight">{project.name}</div>
            )}
            <div className="text-[15px] mb-1">{project.desc}</div>
            {project.tech && <div className="text-xs text-primary font-mono">{project.tech}</div>}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
