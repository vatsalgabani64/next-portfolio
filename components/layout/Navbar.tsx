"use client";

import { navbarItems } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "./ThemeToggle";

const Navbar = () => {
  const direction = useScrollDirection();
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 py-6",
        "mx-auto w-full max-w-3xl px-4 lg:px-0",
        "bg-background/80 backdrop-blur-md",
        "border-b border-border/50",
        "transition-transform duration-300",
        // direction === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              // src={"/assets/profile.jpg"}
              src={"/assets/profile.jpg"}
              alt={"logo"}
              width={50}
              height={50}
            />
          </Link>

          <div className="flex items-center justify-center gap-5">
            {navbarItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    "font-mono text-base transition-colors",
                    "transition-all duration-1000 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4",
                    isActive
                      ? "font-semibold text-foreground"
                      : "font-normal text-foreground/70 hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
