// src/constants/experience.ts

import { Icon } from "@iconify/react";

export interface Technology {
  name: string;
  icon?: React.ReactNode;
}
export interface IExperienceItem {
  company: string;
  logo: string;
  website?: string;
  linkedin?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: Technology[];
}

export const EXPERIENCE: IExperienceItem[] = [
  {
    company: "ProjectTree",
    logo: "/company/ProjectTree.jpg",
    website: "https://projecttree.in",
    linkedin: "https://www.linkedin.com/company/pttech/",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    location: "Surat, Gujarat",
    description: [
      "Developed modular UI components using Next.js, React, Shadcn UI, and Tailwind CSS.",
      "Implemented complex quoting, scanning, and equipment management screens.",
      "Improved component reusability, state handling, and API-driven form workflows.",
      "Optimized UI performance and resolved real-world user flow issues.",
    ],
    technologies: [
      {
        name: "React",
        icon: <Icon icon="logos:react" />
      },
      {
        name: "Next.js",
        icon: <Icon icon="logos:nextjs-icon" />
      },
      {
        name: "Tailwind CSS",
        icon: <Icon icon="logos:tailwindcss-icon" />
      },
      {
        name: "TypeScript",
        icon: <Icon icon="logos:typescript-icon" />
      },
    ]
  },
  {
    company: "Eonverse AI",
    logo: "/company/EonverseAI.jpg",
    website: "https://eonverse.ai/",
    linkedin: "https://www.linkedin.com/company/eonverse-ai/",
    role: "Full-Stack Developer Intern",
    period: "Dec 2024 - Apr 2025",
    location: "Remote",
    description: [
      "Built conversational AI features powered by ElevenLabs and Twilio Calling API.",
      "Implemented real-time calling workflows, session handling, and voice interaction logic.",
      "Developed complete file-upload flow, iframe integrations, and language selector.",
      "Created full dashboard UI with Django backend + Next.js frontend.",
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <Icon icon="logos:nextjs-icon" />
      },
      {
        name: "Django",
        icon: <Icon icon="logos:django-icon" />
      },
      {
        name: "Tailwind CSS",
        icon: <Icon icon="logos:tailwindcss-icon" />
      },
    ]
  },
];
