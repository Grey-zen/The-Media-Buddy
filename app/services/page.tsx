"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  FileText,
  Globe2,
  Megaphone,
  MousePointerClick,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description:
      "Improve your search visibility, attract relevant organic traffic and build a stronger long-term presence across search engines.",
    icon: Search,
    href: "/services/seo",
    features: [
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
    ],
  },
  {
    number: "02",
    title: "Google Ads",
    shortTitle: "Google Ads",
    description:
      "Reach high-intent customers with carefully structured search, display and performance campaigns designed around your business goals.",
    icon: MousePointerClick,
    href: "/services/google-ads",
    features: [
      "Search Campaigns",
      "Display Campaigns",
      "Remarketing",
      "Conversion Tracking",
    ],
  },
  {
    number: "03",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    description:
      "Build targeted advertising campaigns across Facebook and Instagram with audience strategy, creative testing and performance optimization.",
    icon: Megaphone,
    href: "/services/meta-ads",
    features: [
      "Campaign Strategy",
      "Audience Targeting",
      "Creative Testing",
      "Lead Generation",
    ],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Create a consistent social presence through strategic content, community-focused communication and platform-specific campaigns.",
    icon: Share2,
    href: "/services/social-media",
    features: [
      "Content Strategy",
      "Social Management",
      "Creative Direction",
      "Community Growth",
    ],
  },
  {
    number: "05",
    title: "Web Design & Development",
    shortTitle: "Web Development",
    description:
      "Build modern, responsive websites that combine strong visual design, performance, usability and conversion-focused experiences.",
    icon: Code2,
    href: "/services/web-development",
    features: [
      "Business Websites",
      "Landing Pages",
      "UI/UX Design",
      "Website Optimization",
    ],
  },
  {
    number: "06",
    title: "Content Marketing",
    shortTitle: "Content",
    description:
      "Create useful and search-friendly content that strengthens your brand, supports SEO and helps customers make informed decisions.",
    icon: FileText,
    href: "/services/content-marketing",
    features: [
      "SEO Content",
      "Website Copy",
      "Blog Strategy",
      "Content Planning",
    ],
  },
  {
    number: "07",
    title: "Analytics & Performance",
    shortTitle: "Analytics",
    description:
      "Turn digital activity into useful insights with tracking, reporting and performance analysis that supports better decisions.",
    icon: BarChart3,
    href: "/services/analytics",
    features: [
      "Google Analytics",
      "Performance Reports",
      "Conversion Tracking",
      "Data Analysis",
    ],
  },
  {
    number: "08",
    title: "Brand & Creative",
    shortTitle: "Creative",
    description:
      "Develop a stronger digital identity through thoughtful creative direction, visual communication and campaign assets.",
    icon: PenTool,
    href: "/services/creative",
    features: [
      "Creative Strategy",
      "Campaign Design",
      "Visual Direction",
      "Ad Creatives",
    ],
  },
];

const capabilities = [
  {
    icon: Target,
    title: "Goal Driven",
    description:
      "Every service starts with understanding what your business actually needs to achieve.",
  },
  {
    icon: TrendingUp,
    title: "Performance Focused",
    description:
      "We continuously look for opportunities to improve visibility, engagement and meaningful conversions.",
  },
  {
    icon: Globe2,
    title: "Full Digital Coverage",
    description:
      "Multiple digital channels can work together as one connected growth strategy.",
  },
];

export default function ServicesPage() {
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
        {/* Background glow */}
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
              <Sparkles
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />

              Our Services
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
              Everything You Need
              <br />

              <span className="text-brand">
                To Grow Digitally.
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
              From search visibility and paid advertising to
              websites, social media, content and analytics,
              we bring the important parts of your digital
              presence together.
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
                Discuss Your Goals

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
                Explore Our Work

                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div
            className="
              mb-10
              flex
              flex-col
              gap-5
              sm:mb-12
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
                What We Do
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  tracking-[-0.035em]
                  sm:text-4xl
                "
              >
                Digital services that work together.
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
              Choose one service or combine multiple channels
              into a connected digital growth strategy.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-border
                    bg-background
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-brand/25
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.07)]
                    dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                    sm:p-8
                  "
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-44
                      w-44
                      rounded-full
                      bg-brand/10
                      opacity-0
                      blur-[55px]
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div
                    className="
                      relative
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-13
                        w-13
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-brand/15
                        bg-brand-soft
                        text-brand
                        transition-all
                        duration-300
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.6}
                      />
                    </div>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.12em]
                        text-muted/60
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-brand
                      "
                    >
                      {service.shortTitle}
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
                      {service.title}
                    </h3>

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
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div
                    className="
                      relative
                      mt-6
                      grid
                      grid-cols-2
                      gap-x-4
                      gap-y-2
                      border-t
                      border-border
                      pt-5
                    "
                  >
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[10px]
                          font-medium
                          text-muted-strong
                          sm:text-xs
                        "
                      >
                        <span
                          className="
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                            bg-brand
                          "
                        />

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="
                      group/link
                      relative
                      mt-7
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
                    Explore Service

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
                </motion.article>
              );
            })}
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
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => {
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

      {/* CTA */}
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
              <Sparkles
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
              Not sure where to start?
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
              Tell us about your business and your goals. We
              can help you identify which digital channels
              deserve your attention first.
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
              Talk To The Media Buddy

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
