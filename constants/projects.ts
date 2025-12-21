export interface IProjectFeature {
  title: string;
  description: string;
}

export interface IProject {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  features: IProjectFeature[];
  github?: string;
  demo?: string;
}
export const PROJECTS: IProject[] = [
  {
    slug: "booking-web-app",
    title: "Booking Web App",
    description:
      "A full-stack booking platform with authentication, property listings, messaging, and a clean UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    image: "/projects/booking.png",
    github: "https://github.com/vatsalgabani64/booking-app",
    features: [
      {
        title: "User Authentication",
        description:"Users can sign up, log in, and log out securely using JWT-based authentication.",
      },
      {
        title: "Listings",
        description:"Browse a variety of available accommodations with detailed information and images.",
      },
      {
        title: "Booking",
        description:"Users can book accommodations and manage their bookings seamlessly.",
      },
      {
        title: "Host Dashboard",
        description:"Hosts can manage listings, track bookings, and respond to user inquiries.",
      },
      {
        title: "Responsive Design",
        description:"The application is optimized for desktops, tablets, and mobile devices.",
      },
    ],
  },
  {
    slug: "socket-chat",
    title: "Socket Chat",
    description:
      "A responsive chat system with live messaging, online status, and WebSocket-powered updates.",
    tech: ["React", "Node.js", "Socket.io", "Express", "Tailwind CSS"],
    image: "/projects/chat.png",
    github: "https://github.com/vatsalgabani64/socket-chat",
    demo: "https://socket-chat-dzal.onrender.com/",
    features: [
      {
        title: "Real-Time Messaging",
        description:"Messages are delivered instantly using WebSocket-based communication.",
      },
      {
        title: "Online Status",
        description:"Users can see who is online or offline in real time.",
      },
      {
        title: "Live Updates",
        description:"Chat updates propagate instantly without page refresh.",
      },
      {
        title: "Scalable Architecture",
        description:"Built with Socket.io and Node.js for scalable real-time communication.",
      },
      {
        title: "Responsive UI",
        description:"Optimized chat experience across all screen sizes.",
      },
    ],
  },
];

