import { ExternalLink } from "lucide-react";
import SectionCard from "./SectionCard";
import {
  clientSites,
  professionalProjects,
  zelicoreProjects,
  notableProjects,
} from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <SectionCard id="projects" title="Projects">
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

      {/* Selected Professional Projects */}
      <div className="mb-6">
        <h3 className="font-semibold text-[15px] text-muted-foreground uppercase tracking-wide mb-3">
          Selected Professional Projects
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {professionalProjects.map((project) => (
            <div
              key={project.name}
              className="bg-secondary rounded-lg p-4 border border-border shadow-sm transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.03] hover:border-primary"
              tabIndex={0}
              aria-label={project.name}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[16px] leading-tight text-primary hover:underline"
              >
                {project.name}
                <ExternalLink size={14} />
              </a>
              <div className="text-[15px]">{project.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Zelicore Collaborative Projects */}
      <div className="mb-6">
        <h3 className="font-semibold text-[15px] text-muted-foreground uppercase tracking-wide mb-3">
          Selected Zelicore Collaborative Projects
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {zelicoreProjects.map((project) => (
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
              {project.platform && (
                <div className="text-xs text-primary font-mono">{project.platform}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Notable Projects */}
      <div>
        <h3 className="font-semibold text-[15px] text-muted-foreground uppercase tracking-wide mb-3">
          Notable Projects
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {notableProjects.map((project) => (
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
      </div>
    </SectionCard>
  );
}
