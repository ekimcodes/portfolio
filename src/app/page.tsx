import { AboutReadme } from "@/components/sections/AboutReadme";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutReadme />
      <ProjectShowcase />
      <SkillsGrid />
      <ExperienceTimeline />
    </main>
  );
}
