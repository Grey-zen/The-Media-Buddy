"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";

import { navigation } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!isOpen) {
      setOpenMenu(null);
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const toggleMenu = (label: string) => {
    setOpenMenu((current) =>
      current === label ? null : label
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-0 z-[110]
              cursor-default
              bg-black/30
              backdrop-blur-sm
              dark:bg-black/60
              lg:hidden
            "
          />

          {/* Mobile Drawer */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed right-0 top-0 z-[120]
              flex h-dvh
              w-[min(92vw,420px)]
              flex-col
              border-l border-border
              bg-background
              shadow-[-20px_0_60px_rgba(0,0,0,0.12)]
              dark:shadow-[-20px_0_60px_rgba(0,0,0,0.4)]
              lg:hidden
            "
          >
            {/* Header */}
            <div
              className="
                flex h-[76px]
                shrink-0 items-center
                justify-between
                border-b border-border
                px-5
              "
            >
              <Link
                href="/"
                onClick={onClose}
                className="
                  flex items-center gap-2.5
                  font-semibold
                  tracking-tight
                "
              >
                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-xl
                    bg-brand
                    text-sm font-bold
                    text-white
                    shadow-[0_8px_24px_rgba(255,106,0,0.22)]
                  "
                >
                  TM
                </span>

                <span>The Media Buddy</span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
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
                <X
                  className="h-[19px] w-[19px]"
                  strokeWidth={1.8}
                />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav
                aria-label="Mobile navigation"
                className="space-y-1"
              >
                {navigation.map((item) => {
                  const hasChildren =
                    Boolean(item.items?.length);

                  if (!hasChildren && item.href) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="
                          flex items-center justify-between
                          rounded-2xl
                          px-4 py-3.5
                          text-[15px] font-medium
                          text-foreground
                          transition-colors duration-200
                          hover:bg-brand-soft
                          hover:text-brand
                        "
                      >
                        {item.label}

                        <ArrowUpRight
                          className="h-4 w-4 text-muted"
                          strokeWidth={1.7}
                        />
                      </Link>
                    );
                  }

                  if (!hasChildren) {
                    return null;
                  }

                  const isExpanded =
                    openMenu === item.label;

                  return (
                    <div key={item.label}>
                      {/* Accordion Trigger */}
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          toggleMenu(item.label)
                        }
                        className="
                          flex w-full
                          items-center justify-between
                          rounded-2xl
                          px-4 py-3.5
                          text-left
                          text-[15px] font-medium
                          text-foreground
                          transition-colors duration-200
                          hover:bg-brand-soft
                          hover:text-brand
                        "
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          className={`
                            h-4 w-4
                            text-muted
                            transition-transform duration-300
                            ${
                              isExpanded
                                ? "rotate-180 text-brand"
                                : ""
                            }
                          `}
                          strokeWidth={1.8}
                        />
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                              ease: "easeOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mb-2 ml-2 space-y-1 border-l border-border pl-3">
                              {item.items?.map(
                                (child) => {
                                  const ChildIcon =
                                    child.icon;

                                  return (
                                    <Link
                                      key={child.label}
                                      href={
                                        child.href ?? "#"
                                      }
                                      onClick={onClose}
                                      className={`
                                        group
                                        flex items-center gap-3
                                        rounded-xl
                                        px-3 py-3
                                        transition-colors duration-200
                                        ${
                                          child.featured
                                            ? "bg-brand-soft text-brand"
                                            : "text-muted-strong hover:bg-surface hover:text-foreground"
                                        }
                                      `}
                                    >
                                      {ChildIcon && (
                                        <span
                                          className="
                                            flex h-8 w-8
                                            shrink-0
                                            items-center justify-center
                                            rounded-lg
                                            border border-border
                                            bg-background
                                            text-muted
                                            transition-colors
                                            group-hover:text-brand
                                          "
                                        >
                                          <ChildIcon
                                            className="h-4 w-4"
                                            strokeWidth={1.7}
                                          />
                                        </span>
                                      )}

                                      <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-medium">
                                          {child.label}
                                        </span>

                                        {child.description && (
                                          <span className="mt-0.5 block text-xs leading-5 text-muted">
                                            {
                                              child.description
                                            }
                                          </span>
                                        )}
                                      </span>

                                      <ArrowUpRight
                                        className="
                                          h-4 w-4
                                          shrink-0
                                          text-muted
                                          transition-all
                                          group-hover:-translate-y-0.5
                                          group-hover:translate-x-0.5
                                          group-hover:text-brand
                                        "
                                        strokeWidth={1.7}
                                      />
                                    </Link>
                                  );
                                }
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom CTA */}
            <div
              className="
                shrink-0
                border-t border-border
                p-5
              "
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="
                  group
                  flex w-full
                  items-center justify-between
                  rounded-2xl
                  bg-brand
                  px-5 py-4
                  text-sm font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(255,106,0,0.2)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-brand-dark
                  hover:shadow-[0_14px_35px_rgba(255,106,0,0.28)]
                "
              >
                <span>Let's Talk About Your Project</span>

                <ArrowUpRight
                  className="
                    h-5 w-5
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
