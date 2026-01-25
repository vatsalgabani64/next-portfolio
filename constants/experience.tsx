// src/constants/experience.ts

import { Icon } from "@iconify/react";

export interface Technology {
  name: string;
  href: string;
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
    logo: "/company/projecttree.jpg",
    website: "https://projecttree.in",
    linkedin: "https://www.linkedin.com/company/pttech/",
    role: "Software Engineer Intern",
    period: "Aug 2025 - Present",
    location: "Surat, Gujarat",
    description: [
      "Developed modular UI components using React, Shadcn UI, and Tailwind CSS.",
      "Implemented complex quoting, scanning, and equipment management screens.",
      "Improved component reusability, state handling, and API-driven form workflows.",
      "Optimized UI performance and resolved real-world user flow issues.",
    ],
    technologies: [
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: <Icon icon="logos:react" />
      },
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: <Icon icon="logos:nextjs-icon" />
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <Icon icon="logos:tailwindcss-icon" />
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
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
        href: "https://nextjs.org/",
        icon: <Icon icon="logos:nextjs-icon" />
      },
      {
        name: "Django",
        href: "https://www.djangoproject.com/",
        icon: <Icon icon="logos:django-icon" />
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: <Icon icon="logos:tailwindcss-icon" />
      },
    ]
  },
];
