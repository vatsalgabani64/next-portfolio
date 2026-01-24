"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme =
    theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    if (!currentTheme) return;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    mounted,
    currentTheme,
    toggleTheme,
  };
};

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const ThemeToggleButton = () => {
  const { mounted, currentTheme, toggleTheme } =
    useThemeToggle();

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="
        inline-flex items-center justify-center 
        rounded-md hover:bg-accent
        h-9 w-9 p-4
        transition-colors
      "
    >
      {currentTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
};

export default ThemeToggleButton;
