"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="
        inline-flex items-center justify-center
        rounded-full 
        h-9 w-9
        transition-colors
        hover:bg-muted
      "
    >
      {currentTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
