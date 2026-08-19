"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  ExternalLink,
  Play,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

type ProjectCategory =
  | "All"
  | "SEO"
  | "Paid Ads"
  | "Web"
  | "Government";

interface Project {
  title: string;
  client: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  metric: string;
  metricLabel: string;
  icon: typeof Search;
  href: string;
  accent: string;
  featured?: boolean;
  hasVideo?: boolean;
}

const projects: Project[] = [
  {
    title: "Government Digital Campaign",
    client: "Government Project",
    category: "Government",
    description:
      "Digital communication, campaign support and online visibility for a public-sector project.",
    metric: "250+",
    metricLabel: "Project Reach",
    icon: Building2,
    href: "/work/government-digital-campaign",
    accent: "bg-brand-soft",
    featured: true,
    hasVideo: true,
  },
  {
    title: "Organic Search Growth",
    client: "Business Growth",
    category: "SEO",
    description:
      "Technical SEO, content optimization and search strategy focused on sustainable organic visibility.",
    metric: "+182%",
    metricLabel: "Organic Growth",
    icon: Search,
    href: "/work/organic-search-growth",
    accent: "bg-brand-soft",
  },
  {
    title: "Performance Advertising",
    client: "Lead Generation",
    category: "Paid Ads",
    description:
      "Conversion-focused paid campaigns designed to reach high-intent audiences and improve acquisition efficiency.",
    metric: "3.8x",
    metricLabel: "Campaign ROI",
    icon: Target,
    href: "/work/performance-advertising",
    accent: "bg-brand-soft",
    featured: true,
    hasVideo: true,
  },
  {
    title: "Modern Business Website",
    client: "Digital Experience",
    category: "Web",
    description:
      "A modern responsive website built around brand credibility, user experience and conversion.",
    metric: "+64%",
    metricLabel: "Engagement",
    icon: Sparkles,
    href: "/work/modern-business-website",
    accent: "bg-brand-soft",
  },
  {
    title: "Multi-Channel Growth",
    client: "Integrated Marketing",
    category: "Paid Ads",
    description:
      "An integrated advertising approach combining audience targeting, creative testing and performance optimization.",
    metric: "+246%",
    metricLabel: "Qualified Leads",
    icon: BarChart3,
    href: "/work/multi-channel-growth",
    accent: "bg-brand-soft",
  },
];

const filters: ProjectCategory[] = [
  "All",
  "SEO",
  "Paid Ads",
  "Web",
  "Government",
];

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[20%]
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-brand/5
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-brand/20
                bg-brand-soft
                px-3.5
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-brand
              "
            >
              <Sparkles
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />

              Selected Work
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Work That Turns
              <br />

              <span className="text-brand">
                Strategy Into Results.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.12,
              }}
              className="
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-muted
                sm:text-base
              "
            >
              Explore a selection of digital marketing,
              advertising and web projects. Each project is
              built around a clear objective, thoughtful
              execution and measurable outcomes.
            </motion.p>
          </div>

          <Link
            href="/work"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-semibold
              text-foreground
              transition-colors
              duration-200
              hover:text-brand
            "
          >
            View All Projects

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-border
                transition-all
                duration-300
                group-hover:border-brand/25
                group-hover:bg-brand-soft
              "
            >
              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                "
                strokeWidth={1.8}
              />
            </span>
          </Link>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            flex-wrap
            gap-2
          "
        >
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`
                rounded-full
                border
                px-4
                py-2
                text-xs
                font-medium
                transition-all
                duration-300
                ${
                  index === 0
                    ? `
                      border-brand
                      bg-brand
                      text-white
                      shadow-[0_8px_22px_rgba(255,106,0,0.16)]
                    `
                    : `
                      border-border
                      bg-surface
                      text-muted-strong
                      hover:border-brand/25
                      hover:bg-brand-soft
                      hover:text-brand
                    `
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects */}
        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.08,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-border
                  bg-background
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-brand/25
                  hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                  dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  ${
                    project.featured
                      ? "lg:col-span-1"
                      : ""
                  }
                `}
              >
                {/* Project Visual */}
                <div
                  className="
                    relative
                    aspect-[16/9]
                    overflow-hidden
                    border-b
                    border-border
                    bg-surface
                  "
                >
                  {/* Decorative visual */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_30%_30%,rgba(255,106,0,0.16),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,106,0,0.08),transparent_40%)]
                    "
                  />

                  {/* Grid */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.05]
                      [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                      [background-size:40px_40px]
                    "
                  />

                  {/* Fake browser / project preview */}
                  <motion.div
                    whileHover={{
                      scale: 1.025,
                      rotateX: 1,
                      rotateY: -1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      absolute
                      left-[9%]
                      right-[9%]
                      top-[12%]
                      bottom-[-8%]
                      overflow-hidden
                      rounded-2xl
                      border
                      border-border
                      bg-background/90
                      shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                      backdrop-blur-xl
                    "
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Browser bar */}
                    <div
                      className="
                        flex
                        h-8
                        items-center
                        gap-1.5
                        border-b
                        border-border
                        bg-surface
                        px-3
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-muted/40" />

                      <div className="ml-3 h-2 w-24 rounded-full bg-border" />
                    </div>

                    {/* Preview */}
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-24 rounded-full bg-brand/20" />

                        <div className="h-5 w-14 rounded-full bg-brand/10" />
                      </div>

                      <div className="mt-5 grid grid-cols-[1.1fr_0.9fr] gap-3">
                        <div>
                          <div className="h-5 w-[80%] rounded bg-foreground/10" />
                          <div className="mt-2 h-3 w-[60%] rounded bg-foreground/5" />
                          <div className="mt-5 h-20 rounded-xl bg-brand/10" />
                        </div>

                        <div className="rounded-xl border border-border bg-surface p-3">
                          <div className="h-2 w-12 rounded bg-foreground/10" />

                          <div className="mt-4 flex h-20 items-end gap-1">
                            {[35, 50, 42, 68, 56, 82, 72].map(
                              (height, barIndex) => (
                                <motion.div
                                  key={barIndex}
                                  initial={{
                                    height: 0,
                                  }}
                                  whileInView={{
                                    height: `${height}%`,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    delay:
                                      0.3 +
                                      barIndex * 0.05,
                                  }}
                                  className="
                                    flex-1
                                    rounded-t
                                    bg-brand/60
                                  "
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-8 rounded-lg bg-surface" />
                        <div className="h-8 rounded-lg bg-surface" />
                        <div className="h-8 rounded-lg bg-surface" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Category badge */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-10
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-border
                      bg-background/85
                      px-3
                      py-1.5
                      text-[10px]
                      font-semibold
                      text-foreground
                      backdrop-blur-xl
                    "
                  >
                    <Icon
                      className="h-3 w-3 text-brand"
                      strokeWidth={1.8}
                    />

                    {project.category}
                  </div>

                  {/* Video badge */}
                  {project.hasVideo && (
                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        z-10
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-border
                        bg-background/85
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        backdrop-blur-xl
                      "
                    >
                      <Play
                        className="h-3 w-3 fill-current text-brand"
                        strokeWidth={1.5}
                      />

                      Project Video
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
                        {project.client}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-semibold
                          tracking-tight
                          sm:text-2xl
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        text-muted
                        transition-all
                        duration-300
                        group-hover:border-brand/20
                        group-hover:bg-brand-soft
                        group-hover:text-brand
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-xs
                      leading-6
                      text-muted
                      sm:text-sm
                    "
                  >
                    {project.description}
                  </p>

                  {/* Result */}
                  <div
                    className="
                      mt-6
                      flex
                      items-end
                      justify-between
                      gap-5
                      border-t
                      border-border
                      pt-5
                    "
                  >
                    <div>
                      <p
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                          text-brand
                        "
                      >
                        {project.metric}
                      </p>

                      <p className="mt-0.5 text-[10px] text-muted">
                        {project.metricLabel}
                      </p>
                    </div>

                    <Link
                      href={project.href}
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-2
                        text-xs
                        font-semibold
                        text-muted-strong
                        transition-colors
                        duration-200
                        hover:text-brand
                      "
                    >
                      View Case Study

                      <ExternalLink
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                        strokeWidth={1.7}
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Project CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[26px]
            border
            border-brand/15
            bg-brand-soft
            px-6
            py-6
            text-center
            sm:flex-row
            sm:px-8
            sm:text-left
          "
        >
          <div>
            <p className="text-sm font-semibold">
              Have a project in mind?
            </p>

            <p className="mt-1 text-xs leading-5 text-muted">
              Let's create something measurable, useful and
              built to grow.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-brand
              px-5
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-[0_8px_24px_rgba(255,106,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-brand-dark
            "
          >
            Start Your Project

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
              strokeWidth={1.8}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
