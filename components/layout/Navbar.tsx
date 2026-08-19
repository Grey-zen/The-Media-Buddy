"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { navigation } from "@/data/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ServicesMenu } from "@/components/navigation/ServicesMenu";
import { IndustriesMenu } from "@/components/navigation/IndustriesMenu";
import { WorkMenu } from "@/components/navigation/WorkMenu";
import { CompanyMenu } from "@/components/navigation/CompanyMenu";
import { ResourcesMenu } from "@/components/navigation/ResourcesMenu";

interface NavbarProps {
  onMenuOpen?: () => void;
}

export function Navbar({ onMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeItem = navigation.find(
    (item) => item.label === "Home"
  );

  const contactItem = navigation.find(
    (item) => item.label === "Contact"
  );

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[100]
        transition-all duration-500
        ${
          scrolled
            ? "px-3 pt-0 sm:px-5"
            : "px-0 pt-0"
        }
      `}
    >
      <nav
        aria-label="Main navigation"
        className={`
          mx-auto flex h-[76px] items-center
          border
          transition-all duration-500
          ${
            scrolled
              ? `
                max-w-[1440px]
                rounded-2xl
                border-border/80
                bg-background/85
                px-4
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-2xl
                dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                sm:px-6
              `
              : `
                border-transparent
                bg-background/70
                px-5
                backdrop-blur-md
                sm:px-8
                lg:px-10
              `
          }
        `}
      >
        {/* Brand */}
        <Link
          href="/"
          className="
            group
            flex shrink-0 items-center gap-2.5
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
          aria-label="The Media Buddy home"
        >
          <span
            className="
              relative flex h-9 w-9
              items-center justify-center
              overflow-hidden
              rounded-xl
              bg-brand
              text-white
              shadow-[0_8px_24px_rgba(255,106,0,0.22)]
            "
          >
            <span
              className="
                absolute inset-0
                bg-white/10
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            <span className="relative text-sm font-bold">
              TM
            </span>
          </span>

          <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
            The Media Buddy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center lg:flex">
          <div className="flex items-center">
            {homeItem?.href && (
              <Link
                href={homeItem.href}
                className="
                  rounded-full px-4 py-2
                  text-sm font-medium
                  text-foreground/80
                  transition-colors duration-200
                  hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand
                "
              >
                Home
              </Link>
            )}

            <ServicesMenu />
            <IndustriesMenu />
            <WorkMenu />
            <CompanyMenu />
            <ResourcesMenu />

            {contactItem?.href && (
              <Link
                href={contactItem.href}
                className="
                  rounded-full px-4 py-2
                  text-sm font-medium
                  text-foreground/80
                  transition-colors duration-200
                  hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand
                "
              >
                Contact
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="ml-4 flex items-center gap-2 border-l border-border pl-4">
            <ThemeToggle />

            <Link
              href="/contact"
              className="
                group
                inline-flex items-center gap-2
                rounded-full
                bg-brand
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-[0_8px_24px_rgba(255,106,0,0.18)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-brand-dark
                hover:shadow-[0_12px_30px_rgba(255,106,0,0.28)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              Let's Talk

              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-border
              bg-surface
              text-foreground
              transition-all duration-300
              hover:border-brand/40
              hover:bg-brand-soft
              hover:text-brand
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand
            "
          >
            <Menu
              className="h-[19px] w-[19px]"
              strokeWidth={1.8}
            />
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
