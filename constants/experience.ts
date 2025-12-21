// src/constants/experience.ts

export interface IExperienceItem {
  company: string;
  role: string;
  period: string;
  url?: string;
  points: string[];
}

export const EXPERIENCE: IExperienceItem[] = [
  {
    company: "ProjectTree",
    role: "Software Engineer Intern",
    period: "Aug 2025 - Present",
    url: "https://projecttree.in",
    points: [
      "Developed modular UI components using React, Shadcn UI, and Tailwind CSS.",
      "Implemented complex quoting, scanning, and equipment management screens.",
      "Improved component reusability, state handling, and API-driven form workflows.",
      "Optimized UI performance and resolved real-world user flow issues.",
    ],
  },
  {
    company: "Eonverse AI",
    role: "Full-Stack Developer Intern",
    period: "Dec 2024 - Apr 2025",
    url: "https://eonverse.ai/",
    points: [
      "Built conversational AI features powered by ElevenLabs and Twilio Calling API.",
      "Implemented real-time calling workflows, session handling, and voice interaction logic.",
      "Developed complete file-upload flow, iframe integrations, and language selector.",
      "Created full dashboard UI with Django backend + Next.js frontend.",
    ],
  },
];
