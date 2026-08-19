"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  FileText,
  Globe,
  Mail,
  Megaphone,
  MousePointer2,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    shortTitle: "SEO",
    description:
      "Build long-term organic visibility, attract high-intent visitors and turn search traffic into sustainable growth.",
    icon: Search,
    href: "/services/seo",
    tags: ["Technical SEO", "On-Page SEO", "Off-Page SEO"],
  },
  {
    number: "02",
    title: "Google Ads Management",
    shortTitle: "Google Ads",
    description:
      "Create high-intent paid search campaigns focused on qualified leads, conversions and measurable return on ad spend.",
    icon: MousePointer2,
    href: "/services/google-ads",
    tags: ["Search Ads", "Display Ads", "Performance"],
  },
  {
    number: "03",
    title: "Meta Ads",
    shortTitle: "Meta Ads",
    description:
      "Reach the right audiences across Facebook and Instagram with creative campaigns designed to generate demand and results.",
    icon: Megaphone,
    href: "/services/meta-ads",
    tags: ["Facebook", "Instagram", "Lead Generation"],
  },
  {
    number: "04",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    description:
      "Build a recognizable social presence with strategic content, community engagement and consistent brand storytelling.",
    icon: Share2,
    href: "/services/social-media",
    tags: ["Strategy", "Content", "Community"],
  },
  {
    number: "05",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    description:
      "Design fast, responsive and conversion-focused websites that make your brand look credible and turn visitors into customers.",
    icon: Code2,
    href: "/services/web-development",
    tags: ["UI/UX", "Development", "Performance"],
  },
  {
    number: "06",
    title: "Content Marketing",
    shortTitle: "Content",
    description:
      "Create useful, search-friendly content that educates your audience, strengthens authority and supports business growth.",
    icon: FileText,
    href: "/services/content-marketing",
    tags: ["SEO Content", "Blogs", "Copywriting"],
  },
  {
    number: "07",
    title: "Email Marketing",
    shortTitle: "Email",
    description:
      "Turn contacts into customers with targeted campaigns, automated journeys and retention-focused communication.",
    icon: Mail,
    href: "/services/email-marketing",
    tags: ["Campaigns", "Automation", "Retention"],
  },
  {
    number: "08",
    title: "Analytics & Reporting",
    shortTitle: "Analytics",
    description:
      "Understand what is working with meaningful performance tracking, campaign reporting and actionable growth insights.",
    icon: BarChart3,
    href: "/services/analytics",
    tags: ["GA4", "Reporting", "Insights"],
  },
];

const additionalServices = [
  {
    title: "Local SEO",
    icon: Globe,
  },
  {
    title: "Lead Generation",
    icon: Target,
  },
  {
    title: "Brand Strategy",
    icon: Sparkles,
  },
  {
    title: "Creative Design",
    icon: PenTool,
  },
  {
    title: "Audience Research",
    icon: Users,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
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
          left-1/2
          top-1/3
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-brand/5
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mx-auto
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

            What We Do
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
            Everything Your Brand Needs
            <br />

            <span className="text-brand">
              To Grow Online.
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
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-muted
              sm:text-base
            "
          >
            From visibility and advertising to websites,
            content and analytics, we bring the essential
            pieces of digital growth together under one
            strategy.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.06,
                }}
              >
                <Link
                  href={service.href}
                  className="
                    group
                    relative
                    flex
                    min-h-[310px]
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-border
                    bg-background/80
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-brand/25
                    hover:bg-brand-soft/40
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                    dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.3)]
                  "
                >
                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-brand/10
                      opacity-0
                      blur-[50px]
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Number */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      text-[10px]
                      font-semibold
                      tracking-[0.12em]
                      text-muted/60
                    "
                  >
                    {service.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: -4,
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-brand/15
                      bg-brand-soft
                      text-brand
                      transition-all
                      duration-300
                      group-hover:border-brand/30
                      group-hover:bg-brand
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h3
                      className="
                        max-w-[210px]
                        text-lg
                        font-semibold
                        leading-snug
                        tracking-tight
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-6
                        text-muted
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div
                    className="
                      relative
                      mt-auto
                      flex
                      flex-wrap
                      gap-1.5
                      pt-6
                    "
                  >
                    {service.tags.map((tag) => (
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
                          transition-colors
                          duration-200
                          group-hover:border-brand/15
                          group-hover:text-muted-strong
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom link */}
                  <div
                    className="
                      relative
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-border
                      pt-4
                    "
                  >
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        text-muted-strong
                        transition-colors
                        duration-200
                        group-hover:text-brand
                      "
                    >
                      Explore Service
                    </span>

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        transition-all
                        duration-300
                        group-hover:border-brand/20
                        group-hover:bg-brand
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight
                        className="
                          h-3.5
                          w-3.5
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Capabilities */}
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
          }}
          className="
            mt-8
            rounded-[26px]
            border
            border-border
            bg-surface/60
            p-5
            sm:p-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-brand
                "
              >
                More Capabilities
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-foreground
                "
              >
                Need something more specific? We can build
                the right strategy around your business.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {additionalServices.map((service) => {
                const Icon = service.icon;

                return (
                  <span
                    key={service.title}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-border
                      bg-background
                      px-3
                      py-2
                      text-[10px]
                      font-medium
                      text-muted-strong
                      transition-all
                      duration-200
                      hover:border-brand/25
                      hover:bg-brand-soft
                      hover:text-brand
                    "
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                    />

                    {service.title}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mt-10
            flex
            justify-center
          "
        >
          <Link
            href="/services"
            className="
              group
              inline-flex
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
            View All Digital Marketing Services

            <span
              className="
                flex
                h-7
                w-7
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
        </motion.div>
      </div>
    </section>
  );
}
