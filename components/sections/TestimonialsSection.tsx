"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "The team understood our requirements quickly and helped us improve our digital presence with a clear and practical strategy.",
    name: "Business Client",
    role: "Business Owner",
    company: "Local Business",
    initials: "BC",
  },
  {
    quote:
      "What stood out was the combination of creative thinking and performance-focused execution. Communication was simple and transparent throughout.",
    name: "Marketing Client",
    role: "Business Manager",
    company: "Growing Brand",
    initials: "MC",
  },
  {
    quote:
      "From website improvements to digital campaigns, the work was focused on real business objectives rather than just vanity metrics.",
    name: "Project Client",
    role: "Project Representative",
    company: "Organization",
    initials: "PC",
  },
];

const trustMetrics = [
  {
    value: "250+",
    label: "Projects & Businesses",
  },
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-surface/40
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[20%]
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-brand/5
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-100px]
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-brand/5
          blur-[110px]
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

            Client Experiences
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
            Good Work Builds Trust.
            <br />

            <span className="text-brand">
              Great Partnerships Build More.
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
            We believe successful digital marketing is built
            on communication, transparency and a genuine
            understanding of the business behind every project.
          </motion.p>
        </div>

        {/* Rating / trust strip */}
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
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-4xl
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[24px]
            border
            border-border
            bg-background/80
            px-5
            py-5
            backdrop-blur-xl
            sm:flex-row
            sm:px-7
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-brand-soft
                text-brand
              "
            >
              <ShieldCheck
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p className="text-xs font-semibold">
                Built Around Trust
              </p>

              <p className="mt-0.5 text-[10px] text-muted">
                Transparent communication & measurable work
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="
                  h-4
                  w-4
                  fill-brand
                  text-brand
                "
                strokeWidth={1.5}
              />
            ))}

            <span className="ml-2 text-xs font-semibold">
              5.0
            </span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div
          className="
            mt-8
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                flex
                min-h-[330px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-border
                bg-background
                p-6
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-brand/25
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                sm:p-7
              "
            >
              {/* Decorative quote */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  opacity-10
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:opacity-20
                "
              >
                <Quote
                  className="h-16 w-16 text-brand"
                  strokeWidth={1}
                />
              </div>

              {/* Rating */}
              <div className="relative flex items-center gap-1">
                {Array.from({ length: 5 }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="
                        h-3.5
                        w-3.5
                        fill-brand
                        text-brand
                      "
                      strokeWidth={1.5}
                    />
                  )
                )}
              </div>

              {/* Quote */}
              <div className="relative mt-7 flex-1">
                <Quote
                  className="
                    h-6
                    w-6
                    text-brand/40
                  "
                  strokeWidth={1.4}
                />

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-muted-strong
                  "
                >
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Client */}
              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  border-t
                  border-border
                  pt-5
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
                    rounded-full
                    bg-brand-soft
                    text-[10px]
                    font-bold
                    text-brand
                  "
                >
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 truncate text-[10px] text-muted">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>

                <ArrowUpRight
                  className="
                    ml-auto
                    h-4
                    w-4
                    text-muted
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-brand
                  "
                  strokeWidth={1.7}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Metrics */}
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
            grid
            overflow-hidden
            rounded-[26px]
            border
            border-border
            bg-surface/60
            sm:grid-cols-3
          "
        >
          {trustMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`
                flex
                items-center
                justify-center
                gap-3
                px-5
                py-6
                text-center
                ${
                  index !== trustMetrics.length - 1
                    ? "border-b border-border sm:border-b-0 sm:border-r"
                    : ""
                }
              `}
            >
              <p
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-brand
                  sm:text-3xl
                "
              >
                {metric.value}
              </p>

              <p
                className="
                  max-w-[100px]
                  text-[10px]
                  leading-4
                  text-muted
                  sm:text-xs
                "
              >
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
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
              border
              border-border
              bg-background
              px-5
              py-3
              text-xs
              font-semibold
              transition-all
              duration-300
              hover:border-brand/25
              hover:bg-brand-soft
              hover:text-brand
            "
          >
            Let's Build Something Great Together

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
        </motion.div>
      </div>
    </section>
  );
}
