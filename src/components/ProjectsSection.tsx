
import SectionCard from "./SectionCard";

const projects = [
  {
    name: "Advanced Calculator & ATM Simulator",
    desc: "Simulates ATM transactions and calculations.",
    tech: "Java, MySQL",
  },
  {
    name: "Nayenda Bus Ticketing System",
    desc: "Real-time ticketing application for travelers.",
    tech: "Java, Firebase (Auth, Storage, Realtime DB)"
  },
  {
    name: "Ubulimi (Agro-Advisory App)",
    desc: "Crop decision tools and weather prediction for farmers.",
    tech: "Kotlin, Firebase"
  },
  {
    name: "Vitundu Language App",
    desc: "Interactive platform for Zambian children to learn local languages.",
    tech: "Kotlin, Firebase"
  },
  {
    name: "Murder Hornet Character Design",
    desc: "Original character for ProSam Studio animation.",
    tech: "Krita, Huion Tablet, Blender"
  },
  {
    name: "Graphics & Logo Design",
    desc: "Designed logos, posters, brochures for clients.",
    tech: "Photopea, CorelDRAW, Photoshop"
  }
];

export default function ProjectsSection() {
  return (
    <SectionCard id="projects" title="Notable Projects">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-secondary rounded-lg p-4 border border-border shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.03] hover:border-primary cursor-pointer"
            tabIndex={0}
            aria-label={p.name}
          >
            <div className="font-semibold text-[16px] leading-tight">{p.name}</div>
            <div className="text-[15px] mb-1">{p.desc}</div>
            <div className="text-xs text-primary font-mono">{p.tech}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
