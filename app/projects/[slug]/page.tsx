import { TechButton } from "@/components/common/TechButton";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/constants/projects";
import { ROUTES } from "@/constants/routes";
import { SITE_INFO } from "@/constants/site";
import { ArrowLeft, Globe } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiGithub } from "react-icons/si";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: SITE_INFO.name,
    };
  }

  return {
    title: `${project.title}`,
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
    <div className="my-10 flex flex-col space-y-12">
      <div className="flex flex-col space-y-6">
        <div>
          <Link
            href={ROUTES.Projects}
            className="flex flex-row gap-2 items-center text-md text-muted-foreground hover:underline hover:decoration-1 hover:underline-offset-5"
          >
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl sm:text-5xl font-bold items-center">
            {project.title}
          </h1>
        </div>

        <div className="">
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
            className="rounded-lg border border-border"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <TechButton key={i} icon={tech.icon} name={tech.name} />
          ))}
        </div>

        <div className="flex flex-row gap-3">
          {project.liveUrl && (
            <Button>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex flex-row gap-2 items-center"
              >
                <Globe className="h-7 w-7" />
                Visit website
              </Link>
            </Button>
          )}
          {project.github && (
            <Button variant="outline">
              <Link
                href={project.github}
                target="_blank"
                className="flex flex-row gap-2 items-center"
              >
                <SiGithub className="h-7 w-7" />
                View Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* <div>
        <p className=" text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div> */}

      <section className="">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Overiew</h2>
        <p className=" text-secondary leading-relaxed">
          {project.overview}
        </p>
      </section>
      <section className="">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Features</h2>
        <div className="flex flex-col gap-2 text-md font-normal">
          {project.features.map((feature, i) => (
            <div key={i} className="flex gap-2">
              <span className="select-none">•</span>

              <p>
                <strong className="text-foreground">{feature.title}:</strong>{" "}
                <span className="text-secondary">{feature.description}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Tech Stack</h2>

        <div className="flex flex-col gap-3">
          {project.techStack.map((item, i) => (
            <div key={i} className="flex gap-2">
              <span className="select-none text-muted-foreground">•</span>

              <p className="leading-relaxed">
                <strong className="text-foreground">{item.name}:</strong>{" "}
                <span className="text-secondary">{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
