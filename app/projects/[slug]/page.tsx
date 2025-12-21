import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { SITE_INFO } from "@/constants/siteInfo";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: SITE_INFO.name,
    };
  }

  return {
    title: `${project.title} · ${SITE_INFO.name}`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 lg:px-0 py-24">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:underline"
      >
        ← Back to Projects
      </Link>

      <h1 className="mt-6 text-4xl sm:text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-10">
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={500}
          className="rounded-lg border border-border"
        />
      </div>

      <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-4">
    Features
  </h2>

  <ul className="space-y-1">
    {project.features.map((feature, index) => (
      <li key={index} className="flex gap-3 text-muted-foreground">
        <span className="text-primary mt-1">▹</span>
        <span>
          <strong className="text-foreground">
            {feature.title}:
          </strong>{" "}
          {feature.description}
        </span>
      </li>
    ))}
  </ul>
</section>


      <ul className="mt-8 flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex gap-4">
        {project.github && (
          <Button asChild>
            <Link href={project.github} target="_blank">
              View GitHub
            </Link>
          </Button>
        )}

        {project.demo && (
          <Button variant="outline" asChild>
            <Link href={project.demo} target="_blank">
              Live Demo
            </Link>
          </Button>
        )}
      </div>
    </main>
  );
}
