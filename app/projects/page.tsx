import { ProjectList } from "@/components/projects/ProjectList";
import { PROJECTS } from "@/constants/projects";
import { SITE_INFO } from "@/constants/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects · ${SITE_INFO.name}`,
  description: "A collection of full-stack and frontend projects.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-0 py-24">
      <header className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h1>
        <p className="max-w-2xl text-muted-foreground text-lg">
          A selection of projects showcasing my work in full-stack development,
          real-time systems, and modern UI engineering.
        </p>
      </header>

      <ProjectList projects={PROJECTS} />
    </main>
  );
}
