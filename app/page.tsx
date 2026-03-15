import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import GithubSection from "@/components/home/GithubSection";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
  
export default function HomePage() {
  return (
    <div className="flex flex-col w-full space-y-6">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubSection />
    </div>
  );
}
