import { Icon } from "@iconify/react";
export interface IProjectFeature {
  title: string;
  description: string;
}
export interface Technology {
  name: string;
  icon?: React.ReactNode;
}

export interface ITechStackItem {
  name: string;
  description: string;
}

export interface IProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  liveUrl?: string;
  technologies: Technology[];
  features: IProjectFeature[];
  techStack: ITechStackItem[];
}
export const PROJECTS: IProject[] = [
  {
    slug: "booking-web-app",
    title: "Booking Web App",
    description:
      "A full-stack booking platform with authentication, property listings, messaging, and a clean UI.",
    image: "/projects/booking.png",

    github: "https://github.com/vatsalgabani64/booking-app",
    // "React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS",
    technologies: [
      {
        name: "React",
        icon: <Icon icon="logos:react" />,
      },
      {
        name: "Node.js",
        icon: <Icon icon="logos:nodejs-icon" />,
      },
      {
        name: "MongoDB",
        icon: <Icon icon="logos:mongodb-icon" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Icon icon="logos:tailwindcss-icon" />,
      },
    ],
    features: [
      {
        title: "User Authentication",
        description:
          "Users can sign up, log in, and log out securely using JWT-based authentication.",
      },
      {
        title: "Listings",
        description:
          "Browse a variety of available accommodations with detailed information and images.",
      },
      {
        title: "Booking",
        description:
          "Users can book accommodations and manage their bookings seamlessly.",
      },
      {
        title: "Host Dashboard",
        description:
          "Hosts can manage listings, track bookings, and respond to user inquiries.",
      },
      {
        title: "Responsive Design",
        description:
          "The application is optimized for desktops, tablets, and mobile devices.",
      },
    ],
    techStack: [
      {
        name: "Frontend",
        description:
          "Built using React with Tailwind CSS for a responsive, component-driven UI.",
      },
      {
        name: "Backend",
        description:
          "Node.js with Express handles REST APIs, authentication, and business logic.",
      },
      {
        name: "Database",
        description:
          "MongoDB stores users, listings, bookings, and messages efficiently.",
      },
      {
        name: "Authentication",
        description:
          "JWT-based authentication ensures secure access and session handling.",
      },
    ],
  },
  {
    slug: "socket-chat",
    title: "Socket Chat",
    description:
      "A responsive chat system with live messaging, online status, and WebSocket-powered updates.",
    // tech: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    image: "/projects/chat.png",
    github: "https://github.com/vatsalgabani64/socket-chat",
    liveUrl: "https://socket-chat-dzal.onrender.com/",
    technologies: [
      {
        name: "React",
        icon: <Icon icon="logos:react" />,
      },
      {
        name: "Node.js",
        icon: <Icon icon="logos:nodejs-icon" />,
      },
      {
        name: "Socket.io",
        icon: <Icon icon="logos:socket-io" />,
      },
      {
        name: "MongoDB",
        icon: <Icon icon="logos:mongodb-icon" />,
      },
      {
        name: "Tailwind CSS",
        icon: <Icon icon="logos:tailwindcss-icon" />,
      },
    ],
    features: [
      {
        title: "Real-Time Messaging",
        description:
          "Messages are delivered instantly using WebSocket-based communication.",
      },
      {
        title: "Online Status",
        description: "Users can see who is online or offline in real time.",
      },
      {
        title: "Live Updates",
        description: "Chat updates propagate instantly without page refresh.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built with Socket.io and Node.js for scalable real-time communication.",
      },
      {
        title: "Responsive UI",
        description: "Optimized chat experience across all screen sizes.",
      },
    ],
    techStack: [
      {
        name: "Frontend",
        description:
          "Built with React to deliver a fast, component-driven chat interface with real-time updates.",
      },
      {
        name: "Backend",
        description:
          "Node.js with Express powers the REST APIs and acts as the core server for real-time messaging.",
      },
      {
        name: "Real-Time Communication",
        description:
          "Socket.io enables bidirectional, low-latency communication for instant message delivery and live updates.",
      },
      {
        name: "Database",
        description:
          "MongoDB stores users, conversations, and messages, allowing efficient querying and scalability.",
      },
      {
        name: "State & Presence",
        description:
          "Socket events are used to track online status, typing indicators, and user presence in real time.",
      },
      {
        name: "UI & Responsiveness",
        description:
          "The interface is styled with Tailwind CSS and optimized for desktop and mobile devices.",
      },
    ],
  },
];
