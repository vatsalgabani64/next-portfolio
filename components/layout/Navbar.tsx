"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { navbarItems } from "@/constants/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const direction = useScrollDirection();
  const pathname = usePathname();

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 py-6",
        "bg-background/80 backdrop-blur-md",
        "border-b border-border/50",
        "transition-transform duration-300",
        direction === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-4 lg:px-0 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">
          VG
        </Link>

        <nav>
          <ul className="flex items-center gap-10">
            {navbarItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "font-mono text-base transition-colors",
                      isActive
                        ? "font-semibold text-foreground"
                        : "font-normal text-foreground/70 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
