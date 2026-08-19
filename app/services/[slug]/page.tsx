import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  FileText,
  Megaphone,
  MousePointerClick,
  PenTool,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";

import { getServiceBySlug, serviceSlugs } from "@/data/services";

const iconMap = {
  Search,
  MousePointerClick,
  Megaphone,
  Share2,
  Code2,
  FileText,
  BarChart3,
  PenTool,
} as const;

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | The Media Buddy",
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon =
    iconMap[service.icon as keyof typeof iconMap] ?? Sparkles;

  const related = service.relatedServices
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-border pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/5 blur-[150px]"
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-[10px] font-medium text-muted">
            <Link
              href="/"
              className="transition-colors hover:text-brand"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/services"
              className="transition-colors hover:text-brand"
            >
              Services
            </Link>

            <span>/</span>

            <span className="text-foreground">
              {service.shortTitle}
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
                <Icon
                  className="h-3.5 w-3.5"
                  strokeWidth={1.7}
                />

                {service.eyebrow}
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                {service.hero.headline}
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {service.hero.subheadline}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(255,106,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
                >
                  Start a Project

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:text-brand"
                >
                  See Our Work

                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-[520px] overflow-hidden rounded-[36px] border border-border bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.07)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,106,0,0.2),transparent_28%),radial-gradient(circle_at_25%_75%,rgba(255,106,0,0.1),transparent_30%)]"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 scale-[1.8] rounded-full bg-brand/10 blur-3xl" />

                    <div className="relative flex h-32 w-32 items-center justify-center rounded-[32px] border border-brand/20 bg-background/80 text-brand shadow-2xl backdrop-blur-xl sm:h-40 sm:w-40">
                      <Icon
                        className="h-14 w-14 sm:h-16 sm:w-16"
                        strokeWidth={1.3}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute left-5 top-5 rounded-2xl border border-border bg-background/80 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Service
                  </p>

                  <p className="mt-1 text-xs font-semibold">
                    {service.shortTitle}
                  </p>
                </div>

                <div className="absolute bottom-5 right-5 rounded-2xl border border-brand/15 bg-background/80 px-4 py-3 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
                      Strategy First
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                What We Do
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Built around your actual business goals.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-muted sm:text-xl">
                {service.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {service.idealFor.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-[10px] font-semibold text-muted-strong"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================== */}
      <section className="border-y border-border bg-surface/40 py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              Why It Matters
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              What this service can help you achieve.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="group rounded-[24px] border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-brand">
                    0{index + 1}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <Check
                      className="h-4 w-4"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="mt-7 text-base font-semibold">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              The work behind the strategy.
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Every service is built from practical capabilities rather than
              one-size-fits-all packages.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group rounded-[28px] border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:bg-surface"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <span className="text-xs font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <ArrowUpRight
                    className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-muted">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="border-y border-border bg-surface/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                Our Process
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                Simple process.
                <br />
                Serious execution.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-muted">
                We keep the process transparent so you know what we are
                doing, why we are doing it and what comes next.
              </p>
            </div>

            <div className="space-y-3">
              {service.process.map((step) => (
                <div
                  key={step.number}
                  className="group grid gap-5 rounded-[24px] border border-border bg-background p-5 transition-all duration-300 hover:border-brand/20 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:p-6"
                >
                  <span className="text-2xl font-semibold tracking-[-0.04em] text-brand">
                    {step.number}
                  </span>

                  <h3 className="text-base font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-xs leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IDEAL FOR
      ========================================================== */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="rounded-[32px] border border-border bg-surface p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Ideal For
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Is this right for your business?
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.idealFor.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 text-brand"
                      strokeWidth={2}
                    />

                    <span className="text-xs font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="border-y border-border bg-surface/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-background px-5 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.question}

                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180"
                    strokeWidth={1.7}
                  />
                </summary>

                <p className="max-w-3xl pt-4 text-xs leading-6 text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RELATED SERVICES
      ========================================================== */}
      {related.length > 0 && (
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Related Services
                </p>

                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Build the bigger picture.
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-strong transition-colors hover:text-brand"
              >
                View all services
                <ArrowRight
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((item) => {
                if (!item) return null;

                const RelatedIcon =
                  iconMap[
                    item.icon as keyof typeof iconMap
                  ] ?? Sparkles;

                return (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group rounded-[26px] border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                        <RelatedIcon
                          className="h-5 w-5"
                          strokeWidth={1.7}
                        />
                      </div>

                      <ArrowUpRight
                        className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
                        strokeWidth={1.7}
                      />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {item.shortTitle}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-muted">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[34px] border border-brand/15 bg-brand-soft px-6 py-14 text-center sm:px-10 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
            />

            <div className="relative z-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_12px_35px_rgba(255,106,0,0.2)]">
                <Sparkles
                  className="h-5 w-5"
                  strokeWidth={1.7}
                />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Ready to work on your next move?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
                Tell us where you are today and where you want to go. We&apos;ll
                help you figure out the digital path forward.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
                >
                  Start a Conversation

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:text-brand"
                >
                  View Our Work

                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
