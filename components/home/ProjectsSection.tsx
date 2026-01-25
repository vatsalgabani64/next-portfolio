"use client";

import { PROJECTS } from "@/constants/projects";
import SectionHeading from "../common/SectionHeading";
import { ProjectList } from "../projects/ProjectList";

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-20 flex flex-col justify-center">
      <SectionHeading heading="Projects" viewAllHref="/projects" />

      <ProjectList projects={PROJECTS} />
    </section>
  );
};

export default ProjectsSection;
