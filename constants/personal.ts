import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IPersonalInfo {
  name: string;
  resume: string;
  profileImage: string;
  mailId: string;
  social: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
  intro: {
    line1: string;
    headline: string;
    description: string;
  };
}

export const PERSONAL_INFO: IPersonalInfo = {
  name: "Vatsal Gabani",

  profileImage: "/personal/profile.jpg",

  resume:
    "https://drive.google.com/file/d/19kCp9g-V8W2uUkVEGrC14UJRTYPQDp3N/view?usp=sharing",

  mailId: "gabanivatsal17@gmail.com",

  social: [
    {
      name: "GitHub",
      url: "https://github.com/vatsalgabani64/",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vatsal-gabani/",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:gabanivatsal17@gmail.com",
      icon: Mail,
    },
  ],

  intro: {
    line1: "Hello, I'm",
    headline: "I build full-stack web applications.",
    description:
      "I'm a developer passionate about creating clean, fast, and scalable digital experiences. I enjoy working across the stack — from React, Next.js, and Tailwind on the frontend to Node.js, Django, and AI-driven backend integrations.",
  },
};
