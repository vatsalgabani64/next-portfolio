import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/constants/projects";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { SITE_INFO } from "@/constants/site";

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


      {project.technologies.map((tech, i) => (
            <div
              key={i}
              className="inline-flex items-center rounded-md border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
            >
              {tech.icon}
              <span className="ml-1.5 font-semibold">{tech.name}</span>
            </div>
          ))}

      <div className="mt-10 flex gap-4">
        {project.github && (
          <Button asChild>
            <Link href={project.github} target="_blank">
              View GitHub
            </Link>
          </Button>
        )}

        {project.liveUrl && (
          <Button variant="outline" asChild>
            <Link href={project.liveUrl} target="_blank">
              Live Demo
            </Link>
          </Button>
        )}
      </div>
    </main>
  );
}
