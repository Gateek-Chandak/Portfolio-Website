import HeroPage from "./components/Hero";
import ProjectsSection from "./components/Projects";
import TechStackSection from "./components/TechStack";
import ResumeSection from "./components/Resume";

export default function Home() {
  return (
    <main className="w-full h-screen snap-mandatory snap-y overflow-y-scroll scroll-smooth">
      <HeroPage />
      <ProjectsSection />
      <TechStackSection />
      <ResumeSection />
    </main>
  );
}
