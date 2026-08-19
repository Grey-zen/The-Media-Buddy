"use client";

import { motion } from "motion/react";
import {
  Building2,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Years Experience",
    icon: TrendingUp,
  },
  {
    value: "250+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Sparkles,
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Headphones,
  },
];

const trustPoints = [
  "Government Projects",
  "Local Businesses",
  "Growing Brands",
  "Performance Driven",
];

export function TrustBar() {
  return (
    <section
      className="
        relative
        z-20
        -mt-4
        px-5
        sm:px-8
        lg:px-10
      "
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Stats Card */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border border-border
            bg-background/90
            p-3
            shadow-[0_25px_70px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
            dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
            sm:p-4
          "
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-brand/10
              blur-[70px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-brand/5
              blur-[70px]
            "
          />

          {/* Stats */}
          <div
            className="
              relative
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-border
              overflow-hidden
              rounded-2xl
              sm:grid-cols-4
              sm:divide-y-0
            "
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
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
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    px-4
                    py-5
                    transition-colors
                    duration-300
                    hover:bg-brand-soft
                    sm:px-5
                    lg:px-7
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-brand/15
                      bg-brand-soft
                      text-brand
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:border-brand/30
                    "
                  >
                    <Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-xl
                        font-semibold
                        tracking-tight
                        sm:text-2xl
                      "
                    >
                      {stat.value}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        leading-4
                        text-muted
                        sm:text-xs
                      "
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Trust Statement */}
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
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            items-center
            gap-5
            px-4
            py-12
            text-center
            sm:py-14
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-brand/15
              bg-brand-soft
              px-3.5
              py-1.5
              text-[11px]
              font-semibold
              text-brand
            "
          >
            <ShieldCheck
              className="h-3.5 w-3.5"
              strokeWidth={1.8}
            />

            Trusted by 250+ Businesses
          </div>

          <h2
            className="
              max-w-3xl
              text-2xl
              font-semibold
              leading-tight
              tracking-[-0.035em]
              sm:text-3xl
              lg:text-4xl
            "
          >
            Trusted to Deliver Digital Growth
            <span className="text-brand"> That Matters.</span>
          </h2>

          <p
            className="
              max-w-2xl
              text-sm
              leading-6
              text-muted
              sm:text-base
              sm:leading-7
            "
          >
            The Media Buddy has successfully worked with
            businesses, organizations and government projects,
            helping them build stronger digital visibility,
            better customer reach and measurable online growth.
          </p>

          {/* Trust categories */}
          <div
            className="
              mt-1
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
            "
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.2 + index * 0.07,
                }}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-border
                  bg-surface
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-muted-strong
                  transition-all
                  duration-200
                  hover:border-brand/25
                  hover:bg-brand-soft
                  hover:text-brand
                "
              >
                <Building2
                  className="h-3 w-3"
                  strokeWidth={1.7}
                />

                {point}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
