"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { navbarItems } from "@/constants/navigation";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const direction = useScrollDirection();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-10 py-6 flex items-center justify-between 
      bg-background/80 backdrop-blur-md transition-transform duration-300
      ${direction === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <a href="#introduction" className="text-xl font-semibold cursor-pointer">
        VG
      </a>

      <nav>
        <ul className="flex items-center gap-10">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-center gap-3 font-mono text-sm 
                text-foreground hover:text-foreground/70 transition"
              >
                <span>{item.title}</span>
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
