
export default function Sidebar() {
  return (
    <aside className="flex flex-col xl:w-80 w-full xl:fixed xl:h-[calc(100vh-0px)] h-auto bg-background border-r border-border px-8 py-10 gap-8 font-inter">
      <nav className="flex-1 mt-3">
        <ul className="flex xl:flex-col flex-row flex-wrap gap-3 xl:gap-4 justify-center xl:justify-start">
          <li><a href="#profile" className="hover:text-primary transition">Profile</a></li>
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
