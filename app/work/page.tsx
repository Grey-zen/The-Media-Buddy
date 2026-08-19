"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Filter,
  Globe2,
  Megaphone,
  Play,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";

type ProjectCategory =
  | "All"
  | "SEO"
  | "Paid Ads"
  | "Web"
  | "Social Media";

type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  result: string;
  metric: string;
  tags: string[];
  featured?: boolean;
};

const categories: ProjectCategory[] = [
  "All",
  "SEO",
  "Paid Ads",
  "Web",
  "Social Media",
];

const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Local Search Growth",
    client: "Local Business",
    category: "SEO",
    description:
      "A search visibility strategy focused on improving local rankings, website structure and qualified organic discovery.",
    result: "Organic Visibility",
    metric: "+156%",
    tags: ["Local SEO", "Technical SEO", "Content"],
    featured: true,
  },
  {
    id: "project-02",
    number: "02",
    title: "Lead Generation Campaign",
    client: "Service Business",
    category: "Paid Ads",
    description:
      "A performance campaign built around audience segmentation, landing page optimization and continuous ad testing.",
    result: "Qualified Leads",
    metric: "+82%",
    tags: ["Google Ads", "Lead Generation", "CRO"],
    featured: true,
  },
  {
    id: "project-03",
    number: "03",
    title: "Business Website",
    client: "Growing Brand",
    category: "Web",
    description:
      "A modern responsive website designed to improve brand perception, usability and conversion opportunities.",
    result: "Conversion Rate",
    metric: "+64%",
    tags: ["UI/UX", "Development", "Performance"],
    featured: true,
  },
  {
    id: "project-04",
    number: "04",
    title: "Social Growth Campaign",
    client: "Consumer Brand",
    category: "Social Media",
    description:
      "A content and social media strategy designed to increase reach, engagement and consistent brand communication.",
    result: "Engagement",
    metric: "+118%",
    tags: ["Content", "Instagram", "Strategy"],
  },
  {
    id: "project-05",
    number: "05",
    title: "Search Performance",
    client: "Professional Services",
    category: "SEO",
    description:
      "A structured SEO campaign combining technical improvements, content optimization and authority building.",
    result: "Organic Traffic",
    metric: "+91%",
    tags: ["SEO", "Content", "Analytics"],
  },
  {
    id: "project-06",
    number: "06",
    title: "Paid Social Campaign",
    client: "E-commerce Brand",
    category: "Paid Ads",
    description:
      "A creative-led Meta advertising campaign focused on audience testing, retargeting and scalable acquisition.",
    result: "ROAS",
    metric: "3.8×",
    tags: ["Meta Ads", "Creative", "Retargeting"],
  },
];

const capabilityCards = [
  {
    icon: Search,
    title: "Search",
    description:
      "SEO strategies designed to improve visibility and capture high-intent discovery.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Performance campaigns built around measurable acquisition and business objectives.",
  },
  {
    icon: Globe2,
    title: "Web",
    description:
      "Fast, modern digital experiences designed for users, brands and conversions.",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section
        className="
          relative
          overflow-hidden
          border-b
          border-border
          pt-28
          sm:pt-32
          lg:pt-36
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            -z-10
            h-[520px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-brand/5
            blur-[130px]
          "
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            {/* Hero copy */}
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
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

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                }}
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.05em]
                  sm:text-5xl
                  lg:text-7xl
                "
              >
                Work That Turns
                <br />

                <span className="text-brand">
                  Strategy Into Results.
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.16,
                }}
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-muted
                  sm:text-base
                "
              >
                Explore selected digital marketing, advertising,
                SEO and web projects. This portfolio will
                eventually become a complete library of our
                real campaigns, case studies, images and demo
                videos.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.24,
                }}
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-brand
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_12px_35px_rgba(255,106,0,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-brand-dark
                  "
                >
                  Start Your Project

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    strokeWidth={1.8}
                  />
                </Link>

                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    bg-surface
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand/25
                    hover:text-brand
                  "
                >
                  Explore Projects

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </a>
              </motion.div>
            </div>

            {/* Hero stats */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-border
                bg-surface/70
                p-6
                backdrop-blur-xl
                sm:p-7
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-brand/10
                  blur-[55px]
                "
              />

              <div className="relative">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand-soft
                    text-brand
                  "
                >
                  <BarChart3
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-brand
                  "
                >
                  Our Approach
                </p>

                <h2
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                >
                  Every project starts with a goal.
                </h2>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-muted
                  "
                >
                  We combine creative thinking, digital
                  technology and performance data to create
                  work that has a clear purpose.
                </p>

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-3
                  "
                >
                  <div
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-background
                      p-4
                    "
                  >
                    <p className="text-2xl font-semibold">
                      250+
                    </p>

                    <p className="mt-1 text-[10px] text-muted">
                      Businesses & Projects
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-border
                      bg-background
                      p-4
                    "
                  >
                    <p className="text-2xl font-semibold">
                      360°
                    </p>

                    <p className="mt-1 text-[10px] text-muted">
                      Digital Approach
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          {/* Section heading */}
          <div
            className="
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-brand
                "
              >
                Portfolio
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  sm:text-4xl
                "
              >
                Selected projects.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-muted
                "
              >
                A growing collection of campaigns, websites
                and digital growth projects.
              </p>
            </div>

            {/* Filter */}
            <div
              className="
                flex
                w-full
                flex-wrap
                gap-2
                lg:w-auto
                lg:justify-end
              "
            >
              <div
                className="
                  mr-1
                  flex
                  h-9
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  bg-surface
                  px-3
                  text-[10px]
                  font-semibold
                  text-muted
                "
              >
                <Filter
                  className="h-3.5 w-3.5"
                  strokeWidth={1.7}
                />

                Filter
              </div>

              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      h-9
                      rounded-full
                      border
                      px-4
                      text-[10px]
                      font-semibold
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "border-brand bg-brand text-white shadow-[0_8px_24px_rgba(255,106,0,0.18)]"
                          : "border-border bg-surface text-muted hover:border-brand/25 hover:text-brand"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project grid */}
          <motion.div
            layout
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-2
            "
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
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
                  dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]
                  ${
                    project.featured
                      ? "md:min-h-[460px]"
                      : "md:min-h-[430px]"
                  }
                `}
              >
                {/* Future image/video area */}
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
                  {/* Placeholder visual */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-[radial-gradient(circle_at_70%_30%,rgba(255,106,0,0.13),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,106,0,0.08),transparent_30%)]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-brand/20
                        bg-background/80
                        text-brand
                        shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <Play
                        className="ml-0.5 h-6 w-6"
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Project label */}
                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      border
                      border-border
                      bg-background/80
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.1em]
                      backdrop-blur-md
                    "
                  >
                    {project.category}
                  </div>

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      text-[10px]
                      font-semibold
                      tracking-[0.12em]
                      text-muted
                    "
                  >
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-brand
                        "
                      >
                        {project.client}
                      </p>

                      <h3
                        className="
                          mt-2
                          text-xl
                          font-semibold
                          tracking-tight
                        "
                      >
                        {project.title}
                      </h3>
                    </div>

                    <Link
                      href={`/work/${project.id}`}
                      aria-label={`View ${project.title} project`}
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
                        hover:border-brand/25
                        hover:bg-brand-soft
                        hover:text-brand
                      "
                    >
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.8}
                      />
                    </Link>
                  </div>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {project.description}
                  </p>

                  {/* Result */}
                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-[1fr_auto]
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-brand/10
                      bg-brand-soft
                      p-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.1em]
                          text-brand
                        "
                      >
                        {project.result}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          text-muted
                        "
                      >
                        Project performance
                      </p>
                    </div>

                    <p
                      className="
                        text-2xl
                        font-semibold
                        tracking-[-0.04em]
                        text-brand
                      "
                    >
                      {project.metric}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-border
                          bg-surface
                          px-2.5
                          py-1
                          text-[9px]
                          font-medium
                          text-muted
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div
              className="
                mt-10
                rounded-[28px]
                border
                border-border
                bg-surface
                px-6
                py-16
                text-center
              "
            >
              <p className="text-sm font-semibold">
                More projects are coming soon.
              </p>

              <p className="mt-2 text-xs text-muted">
                We're preparing more work for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="
          border-y
          border-border
          bg-surface/40
          py-20
          sm:py-24
        "
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-brand
              "
            >
              How We Create Impact
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              More than a collection of services.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-muted
              "
            >
              The strongest digital results usually come
              from multiple disciplines working together.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {capabilityCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="
                    rounded-[26px]
                    border
                    border-border
                    bg-background
                    p-6
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-brand-soft
                      text-brand
                    "
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future case-study system */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="
              rounded-[32px]
              border
              border-brand/15
              bg-brand-soft
              px-6
              py-12
              sm:px-10
              sm:py-14
            "
          >
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-brand
                text-white
                shadow-[0_10px_30px_rgba(255,106,0,0.2)]
              "
            >
              <TrendingUp
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </div>

            <h2
              className="
                mt-6
                text-3xl
                font-semibold
                tracking-[-0.04em]
                sm:text-4xl
              "
            >
              Have a project in mind?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-xl
                text-sm
                leading-7
                text-muted
              "
            >
              Let's turn your next idea into a digital
              experience built around real business goals.
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-brand
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(255,106,0,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-brand-dark
                "
              >
                Start a Project

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-border
                  bg-background
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-brand/25
                  hover:text-brand
                "
              >
                Explore Services

                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
