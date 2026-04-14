import { ExternalLink } from "lucide-react";
import SectionCard from "./SectionCard";
import { projects } from "../data/portfolioData";

const clientSites = [
  { name: "fiatzambia.com",     url: "https://fiatzambia.com" },
  { name: "abaleyadriving.com", url: "https://abaleyadriving.com" },
<<<<<<< HEAD
  { name: "quartanmining.com",  url: "https://quartanmining.com" },
  { name: "dropshipltd.com",    url: "https://dropshipltd.com" },
  { name: "semassmetals.com",   url: "https://semassmetals.com" },
  { name: "sophonzambia.com",   url: "https://sophonzambia.com" },
  { name: "komelazm.com",       url: "https://komelazm.com" },
  { name: "copperpotzm.com",    url: "https://copperpotzm.com" },
  { name: "kutwilamedia.com",   url: "https://kutwilamedia.com" },
  { name: "abaleya.name",       url: "https://abaleya.name" },
  { name: "emuzm.com",          url: "https://emuzm.com" },
=======
  { name: "quartanmining.com", url: "https://quartanmining.com" },
  { name: "dropshipltd.com", url: "https://dropshipltd.com" },
  { name: "semassmetals.com", url: "https://semassmetals.com" },
  { name: "sophonzambia.com", url: "https://sophonzambia.com" },
  { name: "komelazm.com", url: "https://komelazm.com" },
  { name: "copperpotzm.com", url: "https://copperpotzm.com" },
  { name: "kutwilamedia.com", url: "https://kutwilamedia.com" },
  { name: "abaleya.name", url: "https://abaleya.name" },
  { name: "emuzm.com", url: "https://emuzm.com" },
];

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
    name: "Elk File Manager",
    url: "https://play.google.com/store/apps/details?id=org.rff.digitres.elkfilemanager",
    desc: "A file manager app built and published to the Google Play Store.",
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
    desc: "Provides crop decision-making tools and weather predictions for farmers. Also features a web version that fetches real climate data from the Copernicus Data Store via a FastAPI server, filters it by day, month, and year, and plots it on interactive graphs.",
    tech: "Kotlin, Firebase · Web: Laravel, FastAPI, Copernicus Data Store",
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
>>>>>>> 3d4930cdbbbe378f3eac2bfdef6dda09dabd3cc3
];

export default function ProjectsSection() {
  return (
    <SectionCard id="projects" title="Notable Projects">
      {/* Client Websites */}
      <div className="mb-6">
        <h3 className="font-semibold text-[15px] text-muted-foreground uppercase tracking-wide mb-3">
          Client Websites — EMU Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {clientSites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-mono hover:bg-primary/20 hover:border-primary transition-colors"
            >
              {site.name}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>

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
                className="inline-flex items-center gap-1.5 font-semibold text-[16px] leading-tight text-primary hover:underline"
              >
                {project.name}
                <ExternalLink size={14} />
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
