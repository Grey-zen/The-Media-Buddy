"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import { navigation } from "@/data/navigation";

const industriesMenu = navigation.find(
  (item) => item.label === "Industries"
);

export function IndustriesMenu() {
  if (!industriesMenu?.items) {
    return null;
  }

  const regularItems = industriesMenu.items.filter(
    (item) => !item.featured
  );

  const featuredItem = industriesMenu.items.find(
    (item) => item.featured
  );

  return (
    <div className="group relative">
      {/* Trigger */}
      <button
        type="button"
        aria-haspopup="true"
        className="
          flex items-center gap-1.5
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
        <span>Industries</span>

        <ChevronDown
          className="
            h-3.5 w-3.5
            transition-transform duration-300
            group-hover:rotate-180
          "
          strokeWidth={1.8}
        />
      </button>

      {/* Dropdown */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-full z-50
          w-[680px]
          -translate-x-1/2
          pt-4
          opacity-0
          transition-all duration-200
          group-hover:pointer-events-auto
          group-hover:opacity-100
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -8,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="
            overflow-hidden
            rounded-3xl
            border border-border
            bg-background/95
            p-5
            shadow-[0_30px_80px_rgba(0,0,0,0.12)]
            backdrop-blur-2xl
            dark:shadow-[0_30px_80px_rgba(0,0,0,0.4)]
          "
        >
          {/* Header */}
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Industries We Serve
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                Digital Growth Across Industries
              </h3>
            </div>

            <Sparkles
              className="hidden h-5 w-5 text-brand sm:block"
              strokeWidth={1.7}
            />
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-2 gap-2">
            {regularItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className="
                    group/item
                    flex gap-3
                    rounded-2xl
                    p-3
                    transition-all duration-200
                    hover:bg-brand-soft
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: -2,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-border
                      bg-surface
                      text-muted-strong
                      transition-all duration-200
                      group-hover/item:border-brand/20
                      group-hover/item:bg-background
                      group-hover/item:text-brand
                    "
                  >
                    {Icon && (
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.7}
                      />
                    )}
                  </motion.div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="text-sm font-semibold">
                        {item.label}
                      </h4>

                      <ArrowUpRight
                        className="
                          h-3.5 w-3.5
                          -translate-x-1
                          opacity-0
                          text-brand
                          transition-all duration-200
                          group-hover/item:translate-x-0
                          group-hover/item:opacity-100
                        "
                        strokeWidth={1.8}
                      />
                    </div>

                    {item.description && (
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Featured Link */}
          {featuredItem &&
            (() => {
              const FeaturedIcon = featuredItem.icon;

              return (
                <Link
                  href={featuredItem.href ?? "/industries"}
                  className="
                    group/cta
                    mt-4
                    flex items-center justify-between
                    rounded-2xl
                    border border-brand/20
                    bg-brand-soft
                    px-4 py-3.5
                    transition-all duration-300
                    hover:border-brand/40
                    hover:bg-brand/10
                  "
                >
                  <div className="flex items-center gap-3">
                    {FeaturedIcon && (
                      <div
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          rounded-xl
                          bg-brand
                          text-white
                        "
                      >
                        <FeaturedIcon
                          className="h-4 w-4"
                          strokeWidth={1.8}
                        />
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold">
                        Explore All Industries
                      </p>

                      <p className="text-xs text-muted">
                        Discover how we help different industries grow.
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="
                      h-5 w-5
                      text-brand
                      transition-transform duration-300
                      group-hover/cta:translate-x-0.5
                      group-hover/cta:-translate-y-0.5
                    "
                    strokeWidth={1.8}
                  />
                </Link>
              );
            })()}
        </motion.div>
      </div>
    </div>
  );
}
