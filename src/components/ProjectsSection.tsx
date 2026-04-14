import { ExternalLink } from "lucide-react";
import SectionCard from "./SectionCard";
import { projects } from "../data/portfolioData";

const clientSites = [
  { name: "fiatzambia.com",     url: "https://fiatzambia.com" },
  { name: "abaleyadriving.com", url: "https://abaleyadriving.com" },
  { name: "quartanmining.com",  url: "https://quartanmining.com" },
  { name: "dropshipltd.com",    url: "https://dropshipltd.com" },
  { name: "semassmetals.com",   url: "https://semassmetals.com" },
  { name: "sophonzambia.com",   url: "https://sophonzambia.com" },
  { name: "komelazm.com",       url: "https://komelazm.com" },
  { name: "copperpotzm.com",    url: "https://copperpotzm.com" },
  { name: "kutwilamedia.com",   url: "https://kutwilamedia.com" },
  { name: "abaleya.name",       url: "https://abaleya.name" },
  { name: "emuzm.com",          url: "https://emuzm.com" },
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
            className="bg-secondary rounded-lg p-4 border border-border shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.03] hover:border-primary cursor-pointer"
            tabIndex={0}
            aria-label={project.name}
          >
            <div className="font-semibold text-[16px] leading-tight">{project.name}</div>
            <div className="text-[15px] mb-1">{project.desc}</div>
            <div className="text-xs text-primary font-mono">{project.tech}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
