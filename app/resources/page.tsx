"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileText,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";

type ResourceCategory =
  | "All"
  | "SEO"
  | "Advertising"
  | "Web"
  | "Strategy";

type Resource = {
  id: string;
  type: string;
  category: Exclude<ResourceCategory, "All">;
  title: string;
  description: string;
  readTime: string;
  level: string;
  featured?: boolean;
};

const categories: ResourceCategory[] = [
  "All",
  "SEO",
  "Advertising",
  "Web",
  "Strategy",
];

const resources: Resource[] = [
  {
    id: "seo-foundations",
    type: "Guide",
    category: "SEO",
    title: "The Modern Guide to SEO",
    description:
      "Understand the core foundations of technical SEO, content, search intent, authority and sustainable organic growth.",
    readTime: "8 min read",
    level: "Beginner",
    featured: true,
  },
  {
    id: "google-ads-basics",
    type: "Guide",
    category: "Advertising",
    title: "Google Ads: Where Should You Start?",
    description:
      "A practical introduction to campaign structure, keywords, targeting, landing pages and conversion tracking.",
    readTime: "7 min read",
    level: "Beginner",
    featured: true,
  },
  {
    id: "website-conversion",
    type: "Checklist",
    category: "Web",
    title: "Website Conversion Checklist",
    description:
      "A practical checklist for reviewing the pages, messaging, UX and trust signals that influence website conversions.",
    readTime: "5 min read",
    level: "All Levels",
    featured: true,
  },
  {
    id: "digital-strategy",
    type: "Insight",
    category: "Strategy",
    title: "Building a Digital Marketing Strategy",
    description:
      "Learn how to connect business goals, audience research, channels, content, advertising and measurement.",
    readTime: "9 min read",
    level: "Intermediate",
  },
  {
    id: "meta-ads-creative",
    type: "Guide",
    category: "Advertising",
    title: "Better Meta Ads Through Creative Testing",
    description:
      "Understand how different creative concepts, audiences and messages can be tested systematically.",
    readTime: "6 min read",
    level: "Intermediate",
  },
  {
    id: "local-seo",
    type: "Guide",
    category: "SEO",
    title: "Local SEO for Businesses",
    description:
      "A practical framework for improving local discovery, business information, website relevance and customer trust.",
    readTime: "7 min read",
    level: "Beginner",
  },
];

const quickTopics = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Search visibility, technical SEO, content and local discovery.",
    href: "/resources?category=SEO",
  },
  {
    icon: TrendingUp,
    title: "Advertising",
    description:
      "Google Ads, Meta Ads, campaigns, audiences and performance.",
    href: "/resources?category=Advertising",
  },
  {
    icon: BarChart3,
    title: "Strategy",
    description:
      "Planning, analytics, measurement and digital growth.",
    href: "/resources?category=Strategy",
  },
  {
    icon: FileText,
    title: "Web",
    description:
      "Websites, UX, performance and conversion optimization.",
    href: "/resources?category=Web",
  },
];

const principles = [
  "Practical rather than unnecessarily complicated",
  "Focused on real digital marketing decisions",
  "Designed to be useful for businesses at different stages",
  "Updated as digital platforms and best practices evolve",
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] =
    useState<ResourceCategory>("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") {
      return resources;
    }

    return resources.filter(
      (resource) => resource.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredResources = resources.filter(
    (resource) => resource.featured,
  );

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
            h-[560px]
            w-[850px]
            -translate-x-1/2
            rounded-full
            bg-brand/5
            blur-[140px]
          "
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-4xl text-center">
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
                mx-auto
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
              <BookOpen
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />

              Resources
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
                text-4xl
                font-semibold
                leading-[1.02]
                tracking-[-0.05em]
                sm:text-5xl
                lg:text-7xl
              "
            >
              Learn. Build.
              <br />

              <span className="text-brand">
                Grow Smarter.
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
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-muted
                sm:text-base
              "
            >
              Practical guides, digital marketing insights,
              checklists and ideas to help you make better
              decisions online.
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
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <a
                href="#resources"
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
                Explore Resources

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
              </a>

              <Link
                href="/contact"
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
                Ask a Question

                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured resources */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
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
                Start Here
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
                Featured resources.
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-xs
                leading-6
                text-muted
                sm:text-sm
              "
            >
              Start with the topics that matter most to your
              current digital goals.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-5
              lg:grid-cols-3
            "
          >
            {featuredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Topic navigation */}
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
              Browse By Topic
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
              Find what you need.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-muted
              "
            >
              Explore resources by the part of your digital
              strategy you want to improve.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {quickTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <motion.a
                  key={topic.title}
                  href={topic.href}
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
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-border
                    bg-background
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand/20
                    hover:shadow-[0_20px_55px_rgba(0,0,0,0.06)]
                    dark:hover:shadow-[0_20px_55px_rgba(0,0,0,0.25)]
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
                      transition-all
                      duration-300
                      group-hover:bg-brand
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <h3
                      className="
                        text-base
                        font-semibold
                      "
                    >
                      {topic.title}
                    </h3>

                    <ChevronRight
                      className="
                        h-4
                        w-4
                        text-muted
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-brand
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {topic.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource library */}
      <section
        id="resources"
        className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
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
                Resource Library
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
                Explore everything.
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
                Guides and insights covering the digital
                channels businesses use to grow.
              </p>
            </div>

            {/* Filters */}
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

          <motion.div
            layout
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
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
                More resources are coming soon.
              </p>

              <p className="mt-2 text-xs text-muted">
                We&apos;re preparing more content for this
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why this library */}
      <section
        className="
          border-y
          border-border
          bg-surface/40
          py-24
          sm:py-28
        "
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
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
                Our Approach To Education
              </p>

              <h2
                className="
                  mt-3
                  max-w-md
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.04em]
                  sm:text-4xl
                "
              >
                Useful information should lead to useful
                action.
              </h2>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-muted
                "
              >
                Digital marketing can become unnecessarily
                complicated. Our resources are designed to
                make important concepts easier to understand
                and apply.
              </p>
            </div>

            <div className="space-y-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-brand-soft
                      text-brand
                    "
                  >
                    <CheckCircle2
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </div>

                  <p
                    className="
                      pt-1
                      text-xs
                      font-medium
                      leading-6
                      text-muted-strong
                    "
                  >
                    {principle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-28 lg:py-32">
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
              <Lightbulb
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
              Need advice for your business?
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
              Resources can help you learn. A conversation
              can help you decide what to do next.
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
                Talk To Us

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

function ResourceCard({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) {
  return (
    <motion.article
      layout
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.06,
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-border
        bg-background
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-brand/20
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.07)]
        dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]
      "
    >
      {/* Visual */}
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
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_75%_25%,rgba(255,106,0,0.14),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(255,106,0,0.07),transparent_30%)]
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
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-brand/15
              bg-background/80
              text-brand
              backdrop-blur-xl
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:bg-brand
              group-hover:text-white
            "
          >
            <BookOpen
              className="h-5 w-5"
              strokeWidth={1.6}
            />
          </div>
        </div>

        <span
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
          {resource.type}
        </span>

        <span
          className="
            absolute
            right-5
            top-5
            rounded-full
            bg-brand
            px-3
            py-1.5
            text-[9px]
            font-semibold
            text-white
          "
        >
          {resource.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div
          className="
            flex
            items-center
            gap-3
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.1em]
            text-muted
          "
        >
          <span>{resource.readTime}</span>

          <span className="h-1 w-1 rounded-full bg-brand" />

          <span>{resource.level}</span>
        </div>

        <h3
          className="
            mt-4
            text-xl
            font-semibold
            leading-tight
            tracking-[-0.025em]
          "
        >
          {resource.title}
        </h3>

        <p
          className="
            mt-3
            text-xs
            leading-6
            text-muted
          "
        >
          {resource.description}
        </p>

        <Link
          href={`/resources/${resource.id}`}
          className="
            group/link
            mt-6
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
          Read Resource

          <ArrowRight
            className="
              h-3.5
              w-3.5
              transition-transform
              duration-300
              group-hover/link:translate-x-1
            "
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </motion.article>
  );
}
