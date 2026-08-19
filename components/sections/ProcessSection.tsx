"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ClipboardCheck,
  Compass,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, competitors and current digital presence before recommending a strategy.",
    icon: Compass,
    color: "bg-brand-soft",
    details: [
      "Business & goal analysis",
      "Audience research",
      "Competitor analysis",
    ],
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We turn insights into a focused digital strategy built around your objectives, budget and growth opportunities.",
    icon: ClipboardCheck,
    color: "bg-brand-soft",
    details: [
      "Growth strategy",
      "Channel planning",
      "Campaign roadmap",
    ],
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team puts the strategy into action through campaigns, content, creative, development and continuous optimization.",
    icon: Rocket,
    color: "bg-brand-soft",
    details: [
      "Campaign execution",
      "Creative production",
      "Website & content",
    ],
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We measure performance, identify opportunities and continuously improve the strategy to maximize meaningful results.",
    icon: BarChart3,
    color: "bg-brand-soft",
    details: [
      "Performance tracking",
      "Data-driven insights",
      "Continuous optimization",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        border-y
        border-border
        bg-surface/40
        py-24
        sm:py-28
        lg:py-32
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
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-brand/5
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
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

            Our Process
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
            A Simple Process.
            <br />

            <span className="text-brand">
              Serious Results.
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
            No complicated processes or unnecessary layers.
            We keep our approach transparent, collaborative and
            focused on measurable business growth.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[44px]
              hidden
              h-px
              bg-border
              lg:block
            "
          />

          {/* Animated progress line */}
          <motion.div
            aria-hidden="true"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.4,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-[44px]
              hidden
              h-px
              origin-left
              bg-brand
              lg:block
            "
          />

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-4
            "
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Step icon */}
                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-[88px]
                      w-[88px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      shadow-[0_12px_35px_rgba(0,0,0,0.06)]
                      transition-all
                      duration-500
                      group-hover:border-brand/30
                      group-hover:shadow-[0_18px_45px_rgba(255,106,0,0.12)]
                      dark:shadow-[0_12px_35px_rgba(0,0,0,0.3)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-brand-soft
                        text-brand
                        transition-all
                        duration-500
                        group-hover:bg-brand
                        group-hover:text-white
                        group-hover:scale-105
                      "
                    >
                      <Icon
                        className="h-6 w-6"
                        strokeWidth={1.6}
                      />
                    </div>

                    {/* Number */}
                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        bg-background
                        text-[9px]
                        font-bold
                        text-muted
                        transition-colors
                        duration-300
                        group-hover:border-brand/20
                        group-hover:text-brand
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="
                      mt-6
                      rounded-[26px]
                      border
                      border-border
                      bg-background/80
                      p-6
                      text-center
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                      group-hover:border-brand/20
                      group-hover:bg-background
                      group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.07)]
                      dark:group-hover:shadow-[0_25px_65px_rgba(0,0,0,0.3)]
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-brand
                      "
                    >
                      Step {step.number}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-xl
                        font-semibold
                        tracking-tight
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-6
                        text-muted
                      "
                    >
                      {step.description}
                    </p>

                    {/* Details */}
                    <div
                      className="
                        mt-5
                        border-t
                        border-border
                        pt-4
                        text-left
                      "
                    >
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="
                            flex
                            items-center
                            gap-2
                            py-1.5
                            text-[10px]
                            font-medium
                            text-muted-strong
                          "
                        >
                          <span
                            className="
                              flex
                              h-4
                              w-4
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-brand-soft
                              text-brand
                            "
                          >
                            <span className="h-1 w-1 rounded-full bg-brand" />
                          </span>

                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-[-20px]
                        left-1/2
                        h-5
                        w-px
                        bg-border
                        sm:hidden
                      "
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
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
            delay: 0.35,
          }}
          className="
            mx-auto
            mt-14
            max-w-3xl
            rounded-[24px]
            border
            border-brand/15
            bg-brand-soft
            px-6
            py-5
            sm:px-8
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-4
              text-center
              sm:flex-row
              sm:text-left
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
                bg-brand
                text-white
                shadow-[0_8px_24px_rgba(255,106,0,0.2)]
              "
            >
              <Sparkles
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold">
                Your goals come first.
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                Every strategy is customized around your
                business, audience and growth objectives.
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
                bg-background
                px-4
                py-2.5
                text-xs
                font-semibold
                text-foreground
                transition-all
                duration-300
                hover:bg-brand
                hover:text-white
              "
            >
              Start a Conversation

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
          </div>
        </motion.div>

        {/* Supporting line */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              font-medium
              text-muted
            "
          >
            <span className="h-px w-8 bg-border" />

            Strategy
            <ArrowUpRight
              className="h-3 w-3 text-brand"
              strokeWidth={1.7}
            />
            Execution
            <ArrowUpRight
              className="h-3 w-3 text-brand"
              strokeWidth={1.7}
            />
            Growth

            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
