"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    label: "SEO",
    href: "/services/seo",
  },
  {
    label: "Google Ads",
    href: "/services/google-ads",
  },
  {
    label: "Meta Ads",
    href: "/services/meta-ads",
  },
  {
    label: "Social Media Marketing",
    href: "/services/social-media",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
  },
  {
    label: "Content Marketing",
    href: "/services/content-marketing",
  },
];

const companyLinks = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Our Work",
    href: "/work",
  },
  {
    label: "Our Process",
    href: "/#process",
  },
  {
    label: "Why Choose Us",
    href: "/#why-us",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const resourceLinks = [
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
  {
    label: "Case Studies",
    href: "/work",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    shortLabel: "f",
    href: "#",
  },
  {
    label: "Instagram",
    shortLabel: "ig",
    href: "#",
  },
  {
    label: "LinkedIn",
    shortLabel: "in",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-surface/40
      "
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-brand/5
          blur-[130px]
        "
      />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Footer CTA */}
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
            relative
            overflow-hidden
            border-b
            border-border
            py-16
            sm:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-brand/10
              blur-[80px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              <div
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
                  text-[10px]
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

                Let's Work Together
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.04em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Your next growth story
                <span className="text-brand"> starts here.</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-muted
                  sm:text-base
                "
              >
                Have an idea, a business challenge or a
                project you want to grow? Let's talk about
                what we can build together.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
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
                hover:shadow-[0_18px_45px_rgba(255,106,0,0.28)]
              "
            >
              Start a Conversation

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
          </div>
        </motion.div>

        {/* Main Footer */}
        <div className="py-14 sm:py-16">
          <div
            className="
              grid
              gap-12
              lg:grid-cols-[1.4fr_1fr_1fr_0.9fr]
              lg:gap-10
            "
          >
            {/* Brand */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5"
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-brand
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_8px_24px_rgba(255,106,0,0.2)]
                  "
                >
                  TM
                </span>

                <span
                  className="
                    text-base
                    font-semibold
                    tracking-tight
                  "
                >
                  The Media Buddy
                </span>
              </Link>

              <p
                className="
                  mt-5
                  text-sm
                  leading-6
                  text-muted
                "
              >
                A digital marketing and technology partner
                helping businesses build stronger brands,
                reach the right audience and grow online.
              </p>

              {/* Contact */}
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:hello@themediabuddy.com"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-muted-strong
                    transition-colors
                    duration-200
                    hover:text-brand
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border
                      bg-background
                      transition-colors
                      group-hover:border-brand/20
                      group-hover:bg-brand-soft
                    "
                  >
                    <Mail
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                    />
                  </span>

                  hello@themediabuddy.com
                </a>

                <a
                  href="tel:+919999999999"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-muted-strong
                    transition-colors
                    duration-200
                    hover:text-brand
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border
                      bg-background
                      transition-colors
                      group-hover:border-brand/20
                      group-hover:bg-brand-soft
                    "
                  >
                    <Phone
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                    />
                  </span>

                  +91 99999 99999
                </a>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-xs
                    text-muted-strong
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border
                      bg-background
                    "
                  >
                    <MapPin
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                    />
                  </span>

                  Jhansi, Uttar Pradesh, India
                </div>
              </div>

              {/* Social */}
              <div className="mt-7 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-background
                      text-[10px]
                      font-bold
                      uppercase
                      text-muted
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-brand/25
                      hover:bg-brand-soft
                      hover:text-brand
                    "
                  >
                    {social.shortLabel}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                Services
              </h3>

              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        text-muted
                        transition-colors
                        duration-200
                        hover:text-brand
                      "
                    >
                      {service.label}

                      <ArrowUpRight
                        className="
                          h-3
                          w-3
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                        strokeWidth={1.7}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                Company
              </h3>

              <ul className="mt-5 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        text-muted
                        transition-colors
                        duration-200
                        hover:text-brand
                      "
                    >
                      {link.label}

                      <ArrowUpRight
                        className="
                          h-3
                          w-3
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                        strokeWidth={1.7}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                "
              >
                Resources
              </h3>

              <ul className="mt-5 space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-1.5
                        text-xs
                        text-muted
                        transition-colors
                        duration-200
                        hover:text-brand
                      "
                    >
                      {link.label}

                      <ArrowUpRight
                        className="
                          h-3
                          w-3
                          opacity-0
                          transition-all
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:opacity-100
                        "
                        strokeWidth={1.7}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mini CTA */}
              <div
                className="
                  mt-7
                  rounded-2xl
                  border
                  border-brand/15
                  bg-brand-soft
                  p-4
                "
              >
                <p className="text-[10px] font-semibold">
                  Need help growing online?
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-2
                    inline-flex
                    items-center
                    gap-1.5
                    text-[10px]
                    font-semibold
                    text-brand
                  "
                >
                  Talk to us

                  <ArrowRight
                    className="
                      h-3
                      w-3
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                    "
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-border
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[10px] leading-5 text-muted">
            © {new Date().getFullYear()} The Media Buddy.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-[10px]
                  text-muted
                  transition-colors
                  duration-200
                  hover:text-brand
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p
            className="
              inline-flex
              items-center
              gap-1.5
              text-[10px]
              text-muted
            "
          >
            Made for digital growth

            <Sparkles
              className="h-3 w-3 text-brand"
              strokeWidth={1.7}
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
