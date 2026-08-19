"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground opacity-0"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        group relative flex h-10 w-10 items-center justify-center
        overflow-hidden rounded-full
        border border-border
        bg-surface
        text-foreground
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-brand/40
        hover:bg-brand-soft
        hover:text-brand
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background
      "
    >
      <Sun
        className={`
          absolute h-[18px] w-[18px]
          transition-all duration-300
          ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
        strokeWidth={1.8}
      />

      <Moon
        className={`
          absolute h-[18px] w-[18px]
          transition-all duration-300
          ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }
        `}
        strokeWidth={1.8}
      />

      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
}
