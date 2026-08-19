"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Megaphone,
  MousePointer2,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const floatingCards = [
  {
    label: "Organic Growth",
    value: "+182%",
    icon: TrendingUp,
    position:
      "left-0 top-10 lg:-left-8 lg:top-16",
    delay: 0,
  },
  {
    label: "Campaign ROI",
    value: "3.8x",
    icon: BarChart3,
    position:
      "right-0 top-0 lg:-right-6 lg:top-8",
    delay: 0.15,
  },
  {
    label: "Qualified Leads",
    value: "+246%",
    icon: Users,
    position:
      "bottom-8 left-2 lg:-left-10 lg:bottom-12",
    delay: 0.3,
  },
];

const services = [
  {
    label: "SEO",
    icon: Search,
  },
  {
    label: "Google Ads",
    icon: MousePointer2,
  },
  {
    label: "Meta Ads",
    icon: Megaphone,
  },
  {
    label: "Web Growth",
    icon: Globe2,
  },
];

export function Hero() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[780px]
        overflow-hidden
        pt-32
        sm:pt-36
        lg:min-h-[860px]
        lg:pt-44
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-1/2 top-[-240px]
            h-[620px] w-[620px]
            -translate-x-1/2
            rounded-full
            bg-brand/10
            blur-[120px]
            dark:bg-brand/15
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            top-[180px]
            h-[420px] w-[420px]
            rounded-full
            bg-brand/5
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-[-220px]
            left-[-120px]
            h-[440px] w-[440px]
            rounded-full
            bg-brand/5
            blur-[100px]
          "
        />

        {/* Decorative grid */}
        <div
          className="
            absolute inset-x-0 top-0
            h-[620px]
            opacity-[0.035]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:56px_56px]
          "
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid items-center gap-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >
          {/* ─────────────────────
              Left Content
          ───────────────────── */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
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
                mb-6
                inline-flex
                items-center gap-2
                rounded-full
                border border-brand/20
                bg-brand-soft
                px-3.5 py-2
                text-xs font-semibold
                text-brand
              "
            >
              <Sparkles
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />

              <span>
                Digital Marketing That Drives Real Growth
              </span>

              <ArrowUpRight
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
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
                max-w-[820px]
                text-5xl
                font-semibold
                leading-[0.98]
                tracking-[-0.055em]
                text-foreground
                sm:text-6xl
                lg:text-[76px]
              "
            >
              We Grow Brands
              <br />

              <span className="text-brand">
                With Smart
              </span>

              <br />

              Digital Strategies.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-muted
                sm:text-lg
              "
            >
              From SEO and paid advertising to social media,
              content and web development — we build digital
              experiences that help businesses attract more
              customers, generate better leads and grow with
              confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.28,
              }}
              className="
                mt-8
                flex flex-col gap-3
                sm:flex-row
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  h-13
                  items-center justify-center
                  gap-2
                  rounded-full
                  bg-brand
                  px-6
                  text-sm font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(255,106,0,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-brand-dark
                  hover:shadow-[0_18px_45px_rgba(255,106,0,0.3)]
                "
              >
                Start Growing Your Business

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                href="/work"
                className="
                  group
                  inline-flex
                  h-13
                  items-center justify-center
                  gap-2
                  rounded-full
                  border border-border
                  bg-surface/70
                  px-6
                  text-sm font-semibold
                  text-foreground
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-brand/30
                  hover:bg-brand-soft
                  hover:text-brand
                "
              >
                Explore Our Work

                <ArrowUpRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  strokeWidth={1.8}
                />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                text-xs
                text-muted
              "
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-brand"
                  strokeWidth={1.8}
                />
                250+ Projects
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-brand"
                  strokeWidth={1.8}
                />
                Government Projects
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-brand"
                  strokeWidth={1.8}
                />
                Results Driven
              </span>
            </motion.div>
          </div>

          {/* ─────────────────────
              Right Visual
          ───────────────────── */}
          <div className="relative mx-auto w-full max-w-[680px]">
            {/* Main 3D stage */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mx-auto
                aspect-square
                w-[92%]
                max-w-[590px]
              "
              style={{
                perspective: "1400px",
              }}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  left-1/2 top-1/2
                  h-[65%] w-[65%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-brand/15
                  blur-[80px]
                "
              />

              {/* Orbital rings */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-[10%]
                  rounded-full
                  border border-brand/15
                "
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute inset-[18%]
                  rounded-full
                  border border-dashed border-brand/15
                "
              />

              {/* Main Dashboard */}
              <motion.div
                animate={{
                  rotateX: [0, 2, 0, -2, 0],
                  rotateY: [0, -3, 0, 3, 0],
                  y: [0, -8, 0, 8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2 top-1/2
                  w-[78%]
                  -translate-x-1/2
                  -translate-y-1/2
                  overflow-hidden
                  rounded-[28px]
                  border border-border/80
                  bg-background/90
                  p-4
                  shadow-[0_40px_100px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                  dark:shadow-[0_40px_100px_rgba(0,0,0,0.45)]
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Dashboard header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-muted">
                      Performance Overview
                    </p>

                    <p className="mt-1 text-lg font-semibold tracking-tight">
                      Digital Growth
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-brand-soft
                      px-2.5 py-1
                      text-[10px]
                      font-semibold
                      text-brand
                    "
                  >
                    +24.8%
                  </span>
                </div>

                {/* Chart */}
                <div className="relative mt-5 h-[190px] overflow-hidden rounded-2xl bg-surface p-4">
                  <div
                    className="
                      absolute inset-x-4 bottom-4 top-4
                      opacity-40
                      [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                      [background-size:25%_25%]
                    "
                  />

                  <svg
                    viewBox="0 0 500 190"
                    className="
                      relative z-10
                      h-full w-full
                      overflow-visible
                    "
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="heroChartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="currentColor"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor="currentColor"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 155 C45 145 55 110 95 120 C135 130 145 75 190 92 C235 110 250 80 290 88 C330 96 350 45 385 62 C420 78 430 30 500 22 V190 H0 Z"
                      className="fill-brand/10"
                    />

                    <motion.path
                      d="M0 155 C45 145 55 110 95 120 C135 130 145 75 190 92 C235 110 250 80 290 88 C330 96 350 45 385 62 C420 78 430 30 500 22"
                      className="stroke-brand"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  </svg>

                  <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[8px] text-muted">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>

                {/* Dashboard metrics */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[9px] text-muted">
                      Traffic
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      +182%
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[9px] text-muted">
                      Leads
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      +246%
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[9px] text-muted">
                      ROI
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      3.8x
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating metric cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [0, -8, 0, 8, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 0.6,
                        delay: 0.7 + card.delay,
                      },
                      scale: {
                        duration: 0.6,
                        delay: 0.7 + card.delay,
                      },
                      y: {
                        duration: 6 + card.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`
                      absolute
                      ${card.position}
                      z-20
                      hidden
                      w-[145px]
                      rounded-2xl
                      border border-border
                      bg-background/90
                      p-3
                      shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                      backdrop-blur-xl
                      sm:block
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          flex h-8 w-8
                          items-center justify-center
                          rounded-lg
                          bg-brand-soft
                          text-brand
                        "
                      >
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.7}
                        />
                      </span>

                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-brand"
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="mt-3 text-[10px] text-muted">
                      {card.label}
                    </p>

                    <p className="mt-0.5 text-lg font-semibold">
                      {card.value}
                    </p>
                  </motion.div>
                );
              })}

              {/* Floating service pills */}
              <div
                className="
                  absolute
                  bottom-0 left-1/2
                  z-30
                  flex
                  -translate-x-1/2
                  items-center
                  rounded-full
                  border border-border
                  bg-background/85
                  p-1.5
                  shadow-[0_15px_45px_rgba(0,0,0,0.1)]
                  backdrop-blur-xl
                "
              >
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.label}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1 + index * 0.08,
                      }}
                      className="
                        flex items-center gap-1.5
                        rounded-full
                        px-2.5 py-2
                        text-[9px]
                        font-medium
                        text-muted-strong
                        sm:px-3
                      "
                    >
                      <Icon
                        className="h-3 w-3 text-brand"
                        strokeWidth={1.8}
                      />

                      <span className="hidden sm:inline">
                        {service.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-32
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />
    </section>
  );
}
