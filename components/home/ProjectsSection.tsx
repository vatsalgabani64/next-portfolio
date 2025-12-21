"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS } from "@/constants/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 max-w-6xl mx-auto px-4 lg:px-0 flex flex-col justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <Card
            key={project.title}
            className="
              flex flex-col h-full
              border border-border bg-card
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-xl
            "
          >
            <CardContent className="p-6 flex flex-col grow space-y-4">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="w-full h-56 object-contain rounded-md border border-border bg-background"
              />

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-6 pt-2 text-sm">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="hover:underline"
                  >
                    GitHub →
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="hover:underline"
                  >
                    Live Demo →
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
