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

export interface ITechCategory {
  title: string;
  items: {
    name: string;
    icon: IconType;
  }[];
}

export interface IAboutInfo {
  description: string[];
  tech: ITechCategory[];
}

export const ABOUT_INFO: IAboutInfo = {
  description: [
    "I'm a passionate developer who loves building clean and scalable digital products.",
    "I focus on full-stack development, working with React, Next.js, Node.js, Django, and modern APIs.",
    "I'm also experienced in AI-driven automation, real-time communication, and building polished UI/UX.",
  ],

  tech: [
    {
      title: "Frontend",
      items: [
        { name: "JavaScript (ES6+)", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "Django", icon: SiDjango },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
      ],
    },
  ],
};
