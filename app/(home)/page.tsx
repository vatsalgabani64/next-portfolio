import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";
import { GitHubCalendar } from "react-github-calendar";
import GithubSection from "@/components/home/GithubSection";

export default function HomePage() {
  return (
    <div className="flex-1 mx-auto w-full max-w-3xl px-4">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GithubSection />
      <ContactSection />
    </div>
  );
}
