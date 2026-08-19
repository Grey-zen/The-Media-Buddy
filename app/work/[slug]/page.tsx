import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Play,
  Sparkles,
} from "lucide-react";

import {
  getProjectBySlug,
  projectSlugs,
} from "@/data/projects";

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | The Media Buddy",
    };
  }

  return {
    title: `${project.title} | The Media Buddy`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-border pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-brand/5 blur-[150px]"
        />

        <div className="mx-auto max-w-[1280px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          {/* Breadcrumb */}
          <div className="mb-10 flex flex-wrap items-center gap-2 text-[10px] font-medium text-muted">
            <Link
              href="/"
              className="transition-colors hover:text-brand"
            >
              Home
            </Link>

            <ChevronRight className="h-3 w-3" />

            <Link
              href="/work"
              className="transition-colors hover:text-brand"
            >
              Work
            </Link>

            <ChevronRight className="h-3 w-3" />

            <span className="text-foreground">
              {project.title}
            </span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Copy */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand">
                  {project.category}
                </span>

                <span className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[10px] font-semibold text-muted">
                  {project.year}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.services.slice(0, 5).map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-border bg-surface px-3.5 py-2 text-[10px] font-medium text-muted-strong"
                  >
                    {service}
                  </span>
                ))}
              </div>

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
                  <ArrowLeft
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />

                  Back to Work
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="group relative aspect-[16/10] overflow-hidden rounded-[30px] border border-border bg-surface shadow-[0_30px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
                <img
                  src={project.media.thumbnail}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      Project
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {project.client}
                    </p>
                  </div>

                  {project.media.video ? (
                    <a
                      href={project.media.video}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
                      aria-label="Watch project video"
                    >
                      <Play
                        className="ml-0.5 h-4 w-4 fill-current"
                        strokeWidth={1.5}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT META
      ========================================================== */}
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          <MetaItem
            label="Client"
            value={project.client}
          />

          <MetaItem
            label="Category"
            value={project.category}
          />

          <MetaItem
            label="Year"
            value={project.year}
          />

          <MetaItem
            label="Location"
            value={project.location ?? "India"}
            last
          />
        </div>
      </section>

      {/* =========================================================
          CHALLENGE + SOLUTION
      ========================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <ContentBlock
              eyebrow="The Challenge"
              title="Where we started."
              description={project.challenge}
            />

            <ContentBlock
              eyebrow="The Solution"
              title="What we changed."
              description={project.solution}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          RESULTS
      ========================================================== */}
      <section className="border-y border-border bg-surface/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              Project Results
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              What the project focused on.
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              These project highlights represent the areas we focused on.
              Verified numerical performance data can be added when available.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {project.results.map((result, index) => (
              <div
                key={result.label}
                className="rounded-[26px] border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
                    0{index + 1}
                  </span>

                  <Sparkles
                    className="h-4 w-4 text-brand"
                    strokeWidth={1.6}
                  />
                </div>

                <p className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-brand">
                  {result.value}
                </p>

                <h3 className="mt-2 text-sm font-semibold">
                  {result.label}
                </h3>

                <p className="mt-3 text-xs leading-6 text-muted">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="rounded-[32px] border border-border bg-surface p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                  Project Highlights
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  The work behind the project.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background px-4 py-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Check
                        className="h-3.5 w-3.5"
                        strokeWidth={2}
                      />
                    </span>

                    <span className="text-xs font-medium leading-5">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GALLERY
      ========================================================== */}
      <section className="border-y border-border bg-surface/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
                Project Gallery
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Behind the work.
              </h2>
            </div>

            {project.media.video ? (
              <a
                href={project.media.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-strong transition-colors hover:text-brand"
              >
                Watch project video
                <ExternalLink
                  className="h-3.5 w-3.5"
                  strokeWidth={1.7}
                />
              </a>
            ) : null}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {project.media.images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`group overflow-hidden rounded-[28px] border border-border bg-background ${
                  index === 0 && project.media.images.length > 2
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} project image ${index + 1}`}
                  className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGIES
      ========================================================== */}
      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              Tools & Technologies
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Built with the right tools.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-surface px-4 py-2.5 text-xs font-medium text-muted-strong transition-all duration-200 hover:border-brand/20 hover:text-brand"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================== */}
      {project.testimonial ? (
        <section className="border-y border-border bg-surface/40 py-24 sm:py-28">
          <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <Sparkles
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </div>

            <blockquote className="mt-7 text-2xl font-medium leading-relaxed tracking-[-0.025em] sm:text-3xl">
              “{project.testimonial.quote}”
            </blockquote>

            <div className="mt-7">
              <p className="text-sm font-semibold">
                {project.testimonial.name}
              </p>

              <p className="mt-1 text-xs text-muted">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* =========================================================
          CTA
      ========================================================== */}
      <section className="py-24 sm:py-28 lg:py-32">
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
                Want to build something like this?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
                Tell us about your business and what you want to achieve.
                We&apos;ll help you turn the idea into a practical digital
                strategy.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
                >
                  Start Your Project

                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:text-brand"
                >
                  More Projects

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

function MetaItem({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`px-4 py-6 sm:px-6 lg:px-8 ${
        !last ? "border-r border-border" : ""
      }`}
    >
      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>

      <p className="mt-2 text-xs font-semibold sm:text-sm">
        {value}
      </p>
    </div>
  );
}

function ContentBlock({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
        {description}
      </p>
    </div>
  );
}
