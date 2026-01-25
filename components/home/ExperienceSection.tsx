"use client";

import { EXPERIENCE, IExperienceItem } from "@/constants/experience";
import { ChevronDown, Globe } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiLinkedin } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import SectionHeading from "../common/SectionHeading";

const ExperienceSection = () => {
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set([0]));

  const toggleCard = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };
  return (
    <section id="experience" className="mt-20 flex flex-col">
      <SectionHeading heading="Experience"/>
      <div className="flex flex-col gap-1 mt-4">
        {EXPERIENCE.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            isOpen={openSet.has(index)}
            onToggle={() => toggleCard(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

const ExperienceCard = ({experience,isOpen,onToggle,}: {experience: IExperienceItem;isOpen: boolean;onToggle: () => void;}) => {
  return (
    <div className="rounded-lg flex flex-col">
      {/* HEADER (STATIC)*/}
      <div className="py-6">
        <div className="flex items-start justify-between gap-4">
          {/* Left: logo + company */}
          <div className="flex gap-3">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={44}
              height={44}
              className="rounded-md border border-border object-contain"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold leading-none">
                  {experience.company}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground">
                  {experience.website && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.website}
                          target="_blank"
                          className="hover:text-foreground"
                        >
                          <Globe className="h-4 w-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Visit website</TooltipContent>
                    </Tooltip>
                  )}

                  {experience.linkedin && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={experience.linkedin}
                          target="_blank"
                          className="hover:text-foreground"
                        >
                          <SiLinkedin className="h-4 w-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Connect on LinkedIn</TooltipContent>
                    </Tooltip>
                  )}

                  {/* Chevron */}
                  <button
                    aria-label="Toggle details"
                    onClick={onToggle}
                    className="ml-1 hover:text-foreground"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "-rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {experience.role}
              </p>
            </div>
          </div>

          {/* Right: date + location */}
          <div className="text-right text-muted-foreground ">
            <h6 className="text-md font-medium text-foreground">{experience.period}</h6>
            <p className="text-sm">{experience.location}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: { duration: 0.25, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-0 pb-6 space-y-6">
              {/* Technologies */}
              {experience.technologies?.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-bold tracking-wider ">
                    Technologies & tools
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Link
                        key={i}
                        href={tech.href}
                        target="_blank"
                        className="inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-black/10 dark:border-white/30 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
                      >
                        {tech.icon}
                        <span className="ml-1.5 font-semibold">{tech.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {experience.description.map((point, i) => (
                  <li key={i} className="text-md font-normal leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
