"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Web Design & Development",
  "Content Marketing",
  "Analytics & Performance",
  "Complete Digital Marketing",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Not sure yet",
];

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@themediabuddy.com",
    href: "mailto:hello@themediabuddy.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/919999999999",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[850px] -translate-x-1/2 rounded-full bg-brand/5 blur-[140px]"
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand"
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.8} />
              Let&apos;s Talk
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
            >
              Let&apos;s Talk About
              <br />
              <span className="text-brand">Your Next Move.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base"
            >
              Tell us what you are building, what you want to improve or
              where your digital marketing is getting stuck. We&apos;ll start
              from there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(255,106,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
              >
                Start a Conversation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:text-brand"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Area */}
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            {/* Contact Information */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                Contact The Media Buddy
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Start with a conversation.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                Whether you need a website, better search visibility, paid
                advertising or a complete digital strategy, tell us what you
                need.
              </p>

              <div className="mt-8 space-y-3">
                {contactCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-brand-soft"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                          {item.label}
                        </span>

                        <span className="mt-1 block truncate text-xs font-semibold">
                          {item.value}
                        </span>
                      </span>

                      <ArrowRight
                        className="ml-auto h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                        strokeWidth={1.7}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface/60 p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <MapPin className="h-4 w-4" strokeWidth={1.7} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold">Based in Jhansi</p>
                    <p className="mt-1 text-[11px] leading-5 text-muted">
                      Jhansi, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3 rounded-2xl border border-border bg-surface/60 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Clock3 className="h-4 w-4" strokeWidth={1.7} />
                </span>

                <div>
                  <p className="text-xs font-semibold">Let&apos;s connect</p>
                  <p className="mt-1 text-[11px] leading-5 text-muted">
                    Share your requirements and we&apos;ll take it from there.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24 rounded-[30px] border border-border bg-surface/60 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-7 lg:p-8"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                      Project Enquiry
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      Tell us about your project.
                    </h2>

                    <p className="mt-2 text-xs leading-6 text-muted">
                      The more context you share, the better we can understand
                      what you need.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                    />

                    <Field
                      label="Business / Brand"
                      name="business"
                      type="text"
                      placeholder="Your business name"
                    />
                  </div>

                  <SelectField
                    label="What do you need help with?"
                    name="service"
                    placeholder="Select a service"
                    options={services}
                    required
                  />

                  <SelectField
                    label="Estimated Budget"
                    name="budget"
                    placeholder="Select your budget range"
                    options={budgets}
                  />

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong"
                    >
                      Tell us more
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your business, current challenge, goals or the project you have in mind..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3.5 text-xs leading-6 outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/70 p-3.5">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                      strokeWidth={1.7}
                    />

                    <p className="text-[10px] leading-5 text-muted">
                      Your information is used only to respond to your enquiry
                      and discuss your project.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,106,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_15px_40px_rgba(255,106,0,0.25)]"
                  >
                    Send Project Enquiry
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.8}
                    />
                  </button>
                </form>
              ) : (
                <SuccessState onReset={() => setSubmitted(false)} />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 sm:pb-28">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <div className="rounded-[32px] border border-brand/15 bg-brand-soft px-6 py-12 sm:px-10 sm:py-14">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
              <Sparkles className="h-5 w-5" strokeWidth={1.7} />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Prefer a quick conversation?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
              You can reach us directly if you already know what you want to
              discuss.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
              >
                WhatsApp Us
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:text-brand"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

function Field({
  label,
  name,
  type,
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-xs outline-none transition-all duration-200 placeholder:text-muted/60 focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
};

function SelectField({
  label,
  name,
  placeholder,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className="h-12 w-full appearance-none rounded-xl border border-border bg-background px-4 pr-10 text-xs outline-none transition-all duration-200 focus:border-brand/40 focus:ring-4 focus:ring-brand/10"
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          strokeWidth={1.7}
        />
      </div>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex min-h-[560px] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_15px_40px_rgba(255,106,0,0.2)]">
        <CheckCircle2 className="h-7 w-7" strokeWidth={1.7} />
      </div>

      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
        Enquiry Received
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Thanks for reaching out.
      </h2>

      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">
        Your enquiry has been captured by the website interface. The next
        step is connecting this form to our real email or CRM system.
      </p>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
        >
          Continue on WhatsApp
          <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
        </a>

        <button
          type="button"
          onClick={onReset}
          className="rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-brand/25 hover:text-brand"
        >
          Send Another Enquiry
        </button>
      </div>
    </div>
  );
}
