import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import { SITE_INFO } from "@/constants/siteInfo";

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

      <section className="grid sm:grid-cols-2 gap-10">
        {PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block focus:outline-none"
          >
            <Card
              className="
                flex flex-col h-full
                border border-border bg-card
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-xl
                hover:ring-1 hover:ring-border
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

                <h2 className="text-xl font-semibold">{project.title}</h2>

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
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
}
