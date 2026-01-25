// src/constants/about.ts

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { IconType } from "react-icons";
import { Icon } from "@iconify/react";
export interface Technology {
  name: string;
  icon?: React.ReactNode;
}

export interface ITechCategory {
  title: string;
  items: Technology[];
}

export interface IAboutInfo {
  description: string;
  tech: ITechCategory[];
}

export const aboutConfig: IAboutInfo = {
description: "I'm a developer passionate about creating clean, fast, and scalable digital experiences. I enjoy working across the stack — from React, Next.js, and Tailwind on the frontend to Node.js, Django, and AI-driven backend integrations.",


  tech: [
    {
      title: "Frontend",
      items: [
        { name: "JavaScript (ES6+)", icon: <Icon icon="logos:javascript" /> },
        { name: "TypeScript", icon: <Icon icon="logos:typescript-icon" /> },
        { name: "React", icon: <Icon icon="logos:react" /> },
        { name: "Next.js", icon: <Icon icon="logos:nextjs-icon" /> },
        { name: "Tailwind CSS", icon: <Icon icon="logos:tailwindcss-icon" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <Icon icon="logos:nodejs-icon" /> },
        { name: "Express", icon: <Icon icon="logos:express-icon" /> },
        { name: "Django", icon: <Icon icon="logos:django-icon" /> },
        { name: "Python", icon: <Icon icon="logos:python" /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <Icon icon="logos:mongodb-icon" /> },
        { name: "MySQL", icon: <Icon icon="logos:mysql-icon" /> },
      ],
    },
  ],
};
