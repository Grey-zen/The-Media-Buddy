"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Eye,
  Handshake,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Strategy Before Execution",
    description:
      "We don't start with random campaigns. We first understand your business, audience and objectives, then build the right digital strategy around them.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Everything Under One Roof",
    description:
      "SEO, paid advertising, social media, content, web development and analytics can work together instead of operating as disconnected activities.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Performance Focused",
    description:
      "We focus on meaningful business outcomes such as visibility, qualified leads, conversions and sustainable growth.",
    icon: Target,
  },
  {
    number: "04",
    title: "Transparent Reporting",
    description:
      "Clear communication and understandable reporting help you know what is happening, what is working and where we can improve.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Built For Your Business",
    description:
      "There is no one-size-fits-all package. Our approach can adapt to your industry, goals, budget and stage of growth.",
    icon: Zap,
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "Our goal isn't just to complete a campaign. We aim to become a reliable digital growth partner for the businesses we work with.",
    icon: Handshake,
  },
];

const commitments = [
  "Clear communication",
  "Practical strategies",
  "Data-informed decisions",
  "Continuous optimization",
  "Long-term thinking",
  "Business-first approach",
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
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
          top-[20%]
          -z-10
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-brand/5
          blur-[140px]
        "
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-end
          "
        >
          <div>
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

              Why The Media Buddy
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
                mt-5
                text-4xl
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Digital Marketing
              <br />

              <span className="text-brand">
                With A Business Mindset.
              </span>
            </motion.h2>
          </div>

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
              duration: 0.7,
              delay: 0.12,
            }}
            className="lg:pb-1"
          >
            <p
              className="
                max-w-2xl
                text-sm
                leading-7
                text-muted
                sm:text-base
              "
            >
              Good digital marketing is more than posting
              content or running advertisements. It is about
              understanding how every digital touchpoint
              contributes to your business.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-muted
                sm:text-base
              "
            >
              That's why we combine strategy, creativity,
              technology and performance to build digital
              systems that are designed to move your business
              forward.
            </p>
          </motion.div>
        </div>

        {/* Main Feature Area */}
        <div
          className="
            mt-14
            grid
            gap-5
            lg:grid-cols-[0.75fr_1.25fr]
          "
        >
          {/* Left feature card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-brand/15
              bg-brand-soft
              p-7
              sm:p-9
            "
          >
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                border
                border-brand/10
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -right-8
                top-[-8px]
                h-40
                w-40
                rounded-full
                border
                border-brand/10
              "
            />

            <div
              className="
                relative
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
              <ShieldCheck
                className="h-6 w-6"
                strokeWidth={1.6}
              />
            </div>

            <p
              className="
                relative
                mt-8
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-brand
              "
            >
              Our Commitment
            </p>

            <h3
              className="
                relative
                mt-3
                max-w-sm
                text-2xl
                font-semibold
                leading-tight
                tracking-[-0.03em]
                sm:text-3xl
              "
            >
              We care about the result,
              not just the activity.
            </h3>

            <p
              className="
                relative
                mt-4
                max-w-md
                text-xs
                leading-6
                text-muted-strong
                sm:text-sm
              "
            >
              Every recommendation should have a reason
              behind it. Every campaign should have a purpose.
              And every improvement should contribute to a
              bigger business objective.
            </p>

            {/* Commitment list */}
            <div
              className="
                relative
                mt-7
                grid
                gap-2
                sm:grid-cols-2
              "
            >
              {commitments.map((commitment) => (
                <div
                  key={commitment}
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-medium
                    text-muted-strong
                  "
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-brand"
                    strokeWidth={1.8}
                  />

                  {commitment}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="
                group
                relative
                mt-8
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-foreground
                transition-colors
                duration-200
                hover:text-brand
              "
            >
              Learn More About Us

              <ArrowRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                strokeWidth={1.8}
              />
            </Link>
          </motion.div>

          {/* Reasons grid */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-border
                    bg-background/80
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-brand/25
                    hover:shadow-[0_25px_65px_rgba(0,0,0,0.07)]
                    dark:hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]
                  "
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-brand/10
                      opacity-0
                      blur-[45px]
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
                        className="h-5 w-5"
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
                      {reason.number}
                    </span>
                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      text-base
                      font-semibold
                      tracking-tight
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-2.5
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    {reason.description}
                  </p>

                  <div
                    className="
                      relative
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-[10px]
                      font-semibold
                      text-muted
                      transition-colors
                      duration-200
                      group-hover:text-brand
                    "
                  >
                    <span
                      className="
                        h-px
                        w-5
                        bg-border
                        transition-all
                        duration-300
                        group-hover:w-8
                        group-hover:bg-brand
                      "
                    />

                    Built Around Your Goals
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom metrics */}
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
            overflow-hidden
            rounded-[28px]
            border
            border-border
            bg-surface/60
          "
        >
          <div
            className="
              grid
              sm:grid-cols-3
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
                px-6
                py-6
                sm:px-7
                sm:py-7
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
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

              <div>
                <p className="text-xl font-semibold">
                  Data + Creativity
                </p>

                <p className="mt-1 text-[10px] text-muted">
                  Balanced decision making
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-4
                border-y
                border-border
                px-6
                py-6
                sm:border-x
                sm:border-y-0
                sm:px-7
                sm:py-7
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-brand-soft
                  text-brand
                "
              >
                <Target
                  className="h-5 w-5"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p className="text-xl font-semibold">
                  Goal Focused
                </p>

                <p className="mt-1 text-[10px] text-muted">
                  Business outcomes first
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-4
                px-6
                py-6
                sm:px-7
                sm:py-7
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-brand-soft
                  text-brand
                "
              >
                <Handshake
                  className="h-5 w-5"
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p className="text-xl font-semibold">
                  Partnership
                </p>

                <p className="mt-1 text-[10px] text-muted">
                  Built for long-term growth
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
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
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            justify-center
          "
        >
          <Link
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-brand
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(255,106,0,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-brand-dark
              hover:shadow-[0_15px_35px_rgba(255,106,0,0.25)]
            "
          >
            Let's Discuss Your Growth

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
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
