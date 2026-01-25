import React from "react";
import { ProjectCard } from "./ProjectCard";
import { IProject } from "@/constants/projects";

interface ProjectListProps {
  projects: IProject[];
  className?: string;
}

export const ProjectList = ({ projects, className }: ProjectListProps) => {
  return (
    <div className="grid sm:grid-cols-2 gap-10 mt-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
