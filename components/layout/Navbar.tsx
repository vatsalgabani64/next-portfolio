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
        "container mx-auto max-w-3xl px-4 sticky top-0 z-50 rounded-md py-4 backdrop-blur-sm",
      )}
    >
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md transition-all duration-300 ease-in-out hover:scale-90"
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
