import Sidebar from "@/components/Sidebar";
import ObjectiveSection from "@/components/ObjectiveSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ReferencesSection from "@/components/ReferencesSection";
import { Github } from "lucide-react";
import ProfileSection from "@/components/ProfileSection";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => setUser(session?.user || null)
    );
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-background flex flex-col xl:flex-row font-inter">
      <Sidebar />
      <main className="w-full xl:ml-80 max-w-[1200px] xl:px-12 px-4 pt-10 xl:pt-20 pb-10 mx-auto space-y-8">
        <ProfileSection />
        <ObjectiveSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ReferencesSection />
        {user && (
          <div className="text-center text-xs text-muted-foreground">
            Signed in as {user.email}
          </div>
        )}
        <footer className="mt-10 text-center text-xs text-muted-foreground">
          <a
            href="https://github.com/wangu-96"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-primary"
          >
            <Github size={16} /> github.com/wangu-96
          </a>
        </footer>
      </main>
    </div>
  );
}
