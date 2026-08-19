"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

const benefits = [
  "Free initial consultation",
  "Strategy built around your goals",
  "Clear communication & reporting",
  "Flexible solutions for your business",
];

export function CTASection() {
  return (
    <section
      id="contact-cta"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Main CTA Container */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            isolate
            overflow-hidden
            rounded-[34px]
            border
            border-brand/20
            bg-brand-soft
            px-6
            py-14
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              -z-10
              h-[420px]
              w-[420px]
              rounded-full
              bg-brand/15
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-24
              -z-10
              h-[380px]
              w-[380px]
              rounded-full
              bg-brand/10
              blur-[100px]
            "
          />

          {/* Decorative rings */}
          <motion.div
            aria-hidden="true"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              -z-10
              h-[360px]
              w-[360px]
              rounded-full
              border
              border-brand/10
            "
          />

          <motion.div
            aria-hidden="true"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              -z-10
              h-[260px]
              w-[260px]
              rounded-full
              border
              border-dashed
              border-brand/10
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* Left */}
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
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
                  delay: 0.1,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-brand/20
                  bg-background/70
                  px-3.5
                  py-1.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-brand
                  backdrop-blur-md
                "
              >
                <Sparkles
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />

                Let's Grow Together
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
                  delay: 0.15,
                }}
                className="
                  mt-6
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.02]
                  tracking-[-0.05em]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Ready To Take Your
                <br />

                <span className="text-brand">
                  Digital Growth
                </span>{" "}
                Seriously?
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
                  delay: 0.22,
                }}
                className="
                  mt-6
                  max-w-2xl
                  text-sm
                  leading-7
                  text-muted-strong
                  sm:text-base
                "
              >
                Tell us where your business is today, where
                you want to go and what you're trying to
                achieve. We'll help you identify the right
                digital opportunities and next steps.
              </motion.p>

              {/* Buttons */}
              <motion.div
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
                  delay: 0.28,
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
                    h-13
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-brand
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_12px_35px_rgba(255,106,0,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-brand-dark
                    hover:shadow-[0_18px_45px_rgba(255,106,0,0.3)]
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

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    h-13
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    bg-background/75
                    px-6
                    text-sm
                    font-semibold
                    text-foreground
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand/25
                    hover:bg-background
                    hover:text-brand
                  "
                >
                  <MessageCircle
                    className="h-4 w-4"
                    strokeWidth={1.7}
                  />

                  Talk To Our Team

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
                </Link>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                relative
                mx-auto
                w-full
                max-w-[390px]
              "
            >
              {/* Floating top badge */}
              <motion.div
                animate={{
                  y: [0, -7, 0, 7, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-2
                  -top-5
                  z-20
                  hidden
                  rounded-full
                  border
                  border-border
                  bg-background/90
                  px-3
                  py-2
                  shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                  sm:flex
                  sm:items-center
                  sm:gap-2
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-soft
                    text-brand
                  "
                >
                  <Zap
                    className="h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                </span>

                <span className="text-[10px] font-semibold">
                  Let's build momentum
                </span>
              </motion.div>

              {/* Main card */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-border
                  bg-background/85
                  p-6
                  shadow-[0_30px_80px_rgba(0,0,0,0.1)]
                  backdrop-blur-2xl
                  dark:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                  sm:p-7
                "
              >
                {/* Card glow */}
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
                    <Sparkles
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
                    What Happens Next?
                  </p>

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    A simple conversation.
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-muted
                    "
                  >
                    We'll understand your current situation,
                    discuss your goals and identify the digital
                    opportunities that make the most sense.
                  </p>

                  {/* Benefits */}
                  <div className="mt-6 space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{
                          opacity: 0,
                          x: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.07,
                        }}
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-xs
                          font-medium
                          text-muted-strong
                        "
                      >
                        <CheckCircle2
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-brand
                          "
                          strokeWidth={1.8}
                        />

                        {benefit}
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-border" />

                  {/* Response */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-border
                      bg-surface
                      p-3.5
                    "
                  >
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-brand-soft
                        text-brand
                      "
                    >
                      <MessageCircle
                        className="h-4 w-4"
                        strokeWidth={1.7}
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold">
                        Let's start with your goals.
                      </p>

                      <p className="mt-0.5 text-[9px] text-muted">
                        No complicated sales pitch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floating badge */}
              <motion.div
                animate={{
                  y: [0, 6, 0, -6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -bottom-5
                  -left-3
                  z-20
                  hidden
                  rounded-2xl
                  border
                  border-border
                  bg-background/90
                  px-4
                  py-3
                  shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                  backdrop-blur-xl
                  sm:block
                "
              >
                <div className="flex items-center gap-2">
                  <div
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-brand
                      shadow-[0_0_12px_rgba(255,106,0,0.6)]
                    "
                  />

                  <span className="text-[10px] font-semibold">
                    Strategy. Execute. Grow.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom micro trust */}
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
            delay: 0.25,
          }}
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-2
            text-center
            text-[10px]
            text-muted
          "
        >
          <span>250+ Projects & Businesses</span>

          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

          <span>Digital Marketing & Technology</span>

          <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

          <span>Built For Long-Term Growth</span>
        </motion.div>
      </div>
    </section>
  );
}
