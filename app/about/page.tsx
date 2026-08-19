"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Globe2,
  Handshake,
  Lightbulb,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Digital Visibility",
    description:
      "SEO and search strategies designed to help businesses become easier to discover by the right audience.",
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Google and Meta advertising campaigns built around audience targeting, testing and measurable objectives.",
  },
  {
    icon: Code2,
    title: "Web & Technology",
    description:
      "Modern websites and digital experiences designed for usability, performance and business growth.",
  },
  {
    icon: BarChart3,
    title: "Data & Optimization",
    description:
      "Analytics and performance insights that help turn digital activity into better decisions.",
  },
];

const principles = [
  {
    number: "01",
    icon: Target,
    title: "Start With The Goal",
    description:
      "Before choosing a platform or campaign, we understand what the business actually needs to achieve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Build The Right Strategy",
    description:
      "We connect the right channels, creative direction and technology around a practical digital strategy.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Execute With Purpose",
    description:
      "Campaigns, content, websites and optimization are executed with clear priorities instead of disconnected activity.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Learn & Improve",
    description:
      "Digital marketing changes continuously, so we use performance insights to refine what we do next.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We believe the best work happens when the client and digital team work toward the same business objective.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear communication, realistic expectations and understandable reporting are central to how we work.",
  },
  {
    icon: Sparkles,
    title: "Continuous Improvement",
    description:
      "We keep looking for better ideas, better experiences and better ways to create meaningful digital growth.",
  },
];

export default function AboutPage() {
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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
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

                About The Media Buddy
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
                We Make Digital
                <br />

                <span className="text-brand">
                  Work For Business.
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
                The Media Buddy is a digital marketing and
                technology partner helping businesses build
                stronger digital presence through strategy,
                creativity, advertising, search, websites and
                data.
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
                  Work With Us

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
                  href="/work"
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
                  See Our Work

                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Credibility card */}
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
                delay: 0.18,
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
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-brand/10
                  blur-[60px]
                "
              />

              <div className="relative">
                <div
                  className="
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
                  <Handshake
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
                  Experience Across Sectors
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-[-0.03em]
                  "
                >
                  Built around real business needs.
                </h2>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-6
                    text-muted
                  "
                >
                  Our work spans business websites, search,
                  advertising, social media, technology and
                  digital campaigns for different types of
                  organizations.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
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
                      Digital Capabilities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-28 lg:py-32">
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
                Our Story
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
                Digital should feel useful, not complicated.
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="
                  text-sm
                  leading-7
                  text-muted-strong
                  sm:text-base
                "
              >
                The digital world gives businesses more
                opportunities than ever before. But with more
                platforms, more advertising channels and more
                technology comes more complexity.
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-muted-strong
                  sm:text-base
                "
              >
                The Media Buddy was built around a simple idea:
                digital marketing should ultimately make
                business growth easier to understand and
                easier to act on.
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-muted-strong
                  sm:text-base
                "
              >
                Instead of treating SEO, advertising, social
                media, websites and analytics as isolated
                activities, we look at the bigger picture and
                connect the pieces that matter.
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-brand/15
                  bg-brand-soft
                  p-5
                "
              >
                <CheckCircle2
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-brand
                  "
                  strokeWidth={1.8}
                />

                <p
                  className="
                    text-xs
                    font-medium
                    leading-6
                    text-muted-strong
                  "
                >
                  Strategy first. Technology where it helps.
                  Creativity where it matters. Measurement
                  throughout.
                </p>
              </div>
            </div>
          </div>
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
              What We Do
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
              One partner. Multiple digital capabilities.
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-muted
              "
            >
              We bring different digital disciplines together
              when they can create a stronger result.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    rounded-[26px]
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

      {/* Government / Public Sector Experience */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-brand/15
              bg-brand-soft
            "
          >
            <div
              className="
                grid
                lg:grid-cols-[0.9fr_1.1fr]
              "
            >
              <div className="p-7 sm:p-10 lg:p-12">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-brand
                    text-white
                  "
                >
                  <Globe2
                    className="h-5 w-5"
                    strokeWidth={1.7}
                  />
                </div>

                <p
                  className="
                    mt-7
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-brand
                  "
                >
                  Public Sector Experience
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                    sm:text-4xl
                  "
                >
                  Experience that extends beyond commercial
                  businesses.
                </h2>
              </div>

              <div
                className="
                  border-t
                  border-brand/10
                  bg-background/40
                  p-7
                  sm:p-10
                  lg:border-l
                  lg:border-t-0
                  lg:p-12
                "
              >
                <p
                  className="
                    text-sm
                    leading-7
                    text-muted-strong
                    sm:text-base
                  "
                >
                  Our experience also includes work connected
                  with public-sector and government projects in
                  Jhansi and surrounding areas. This has given
                  us exposure to projects where communication,
                  reliability, coordination and practical
                  execution matter.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Jhansi-based projects",
                    "Government project experience",
                    "Digital & web work",
                    "Professional coordination",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-border
                        bg-background
                        px-3.5
                        py-3
                        text-xs
                        font-medium
                      "
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-brand"
                        strokeWidth={1.8}
                      />

                      {item}
                    </div>
                  ))}
                </div>

                <p
                  className="
                    mt-6
                    text-[10px]
                    leading-5
                    text-muted
                  "
                >
                  Specific project names, logos, images and
                  case-study details will be added only where
                  appropriate and permitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section
        className="
          border-y
          border-border
          bg-surface/40
          py-24
          sm:py-28
          lg:py-32
        "
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[0.75fr_1.25fr]
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
                How We Think
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
                A practical process built around progress.
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
                There is no magic shortcut to sustainable
                digital growth. Strong results usually come
                from understanding, execution, measurement
                and consistent improvement.
              </p>
            </div>

            <div className="space-y-4">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.number}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      grid
                      gap-5
                      rounded-[24px]
                      border
                      border-border
                      bg-background
                      p-5
                      transition-all
                      duration-300
                      hover:border-brand/20
                      sm:grid-cols-[auto_1fr_auto]
                      sm:items-center
                      sm:p-6
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

                    <div>
                      <h3
                        className="
                          text-base
                          font-semibold
                        "
                      >
                        {principle.title}
                      </h3>

                      <p
                        className="
                          mt-1.5
                          text-xs
                          leading-6
                          text-muted
                        "
                      >
                        {principle.description}
                      </p>
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.12em]
                        text-muted/50
                      "
                    >
                      {principle.number}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-28">
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
              Our Values
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
              The way we want to work.
            </h2>
          </div>

          <div
            className="
              mt-10
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
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
                    rounded-[28px]
                    border
                    border-border
                    bg-background
                    p-7
                    text-center
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
                    {value.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 sm:pb-28 lg:pb-32">
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
              <Users
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
              Let's build something meaningful.
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
              Whether you need better search visibility, a
              new website, stronger advertising or a complete
              digital strategy, let's start with a conversation.
            </p>

            <Link
              href="/contact"
              className="
                group
                mt-7
                inline-flex
                items-center
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
              Start a Conversation

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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
