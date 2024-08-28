import HeroPage from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import ResumeSection from "./components/Resume";

export default function Home() {
  return (
    <main className="w-full h-screen snap-mandatory snap-y overflow-y-scroll scroll-smooth">
      <HeroPage />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
    </main>
  );
}
