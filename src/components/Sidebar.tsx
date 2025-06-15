
import { Github, Linkedin } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex flex-col xl:w-80 w-full xl:fixed xl:h-[calc(100vh-0px)] h-auto bg-background border-r border-border px-8 py-10 gap-5 xl:gap-8 font-inter">
      <div className="flex flex-col gap-3 items-center text-center">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=400&h=400&facepad=2"
          alt="Wangu Ngalati"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md"
        />
        <span className="font-playfair text-3xl font-bold tracking-tight">
          Wangu Ngalati
        </span>
        <span className="text-primary/80 text-lg font-semibold">
          Software Engineer
        </span>
        <span className="text-sm text-muted-foreground">Lusaka, Zambia</span>
      </div>
      <div className="mt-2 flex flex-col gap-2 border-t border-b py-4">
        <div className="text-xs text-muted-foreground font-semibold">
          Contact Information
        </div>
        <div className="text-[15px] leading-tight">
          Ibex Hill, Lake Road, Lusaka
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-semibold">Mobile:</span>
          <a href="tel:+260978906006" className="hover:underline transition text-primary">+260978906006</a> /{" "}
          <a href="tel:+260761435664" className="hover:underline transition text-primary">+260761435664</a>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-semibold">Email:</span>
          <a href="mailto:wangungalati@gmail.com" className="hover:underline transition text-primary">
            wangungalati@gmail.com
          </a>
        </div>
        <div className="flex gap-2 mt-2">
          <a href="https://github.com/wangu-96" target="_blank" rel="noopener noreferrer" 
            className="p-1.5 bg-muted rounded-full hover:bg-primary hover:text-white transition">
            <Github size={22} />
          </a>
        </div>
      </div>
      <nav className="flex-1 mt-3">
        <ul className="flex xl:flex-col flex-row flex-wrap gap-3 xl:gap-4 justify-center xl:justify-start">
          <li><a href="#objective" className="hover:text-primary transition">Objective</a></li>
          <li><a href="#education" className="hover:text-primary transition">Education</a></li>
          <li><a href="#skills" className="hover:text-primary transition">Skills</a></li>
          <li><a href="#experience" className="hover:text-primary transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-primary transition">Projects</a></li>
          <li><a href="#references" className="hover:text-primary transition">References</a></li>
        </ul>
      </nav>
    </aside>
  );
}
