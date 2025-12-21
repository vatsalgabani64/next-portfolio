"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setDirection(scrollY > lastScrollY ? "down" : "up");
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return direction;
}
