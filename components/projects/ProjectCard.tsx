import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IProject } from "@/constants/projects";
import { ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TechButton } from "../common/TechButton";

export const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card
      key={project.title}
      className=" p-0
              flex flex-col h-full
              border border-border bg-card
              transition-all duration-300
            "
    >
      <CardHeader className="p-0">
        <Link href={`/projects/${project.slug}`}>
          <div className="relative overflow-hidden rounded-t-lg border border-border bg-background group">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={350}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Redirect icon */}
            <div
              className="absolute top-3 right-3
                 rounded-full bg-background/90 p-1
                 shadow-md opacity-20
                 transition-all duration-300
                 group-hover:opacity-70
                 hover:bg-background"
            >
              <ExternalLink className="h-5 w-5" />
            </div>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="px-6 pb-5 flex flex-col grow space-y-4">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex flex-row gap-3">
            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Globe className="h-5 w-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Visit website</TooltipContent>
              </Tooltip>
            )}
            {project.github && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <SiGithub className="h-5 w-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Visit website</TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <TechButton key={i} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
