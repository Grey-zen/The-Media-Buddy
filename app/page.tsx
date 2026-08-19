import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="flex min-h-screen items-center">
        <Container>
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full border border-brand/20 bg-brand-soft px-4 py-2 text-sm font-medium text-brand">
              The Media Buddy
            </span>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
              Your Growth.
              <br />

              <span className="text-brand">
                Our Mission.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              We build smarter digital strategies through SEO,
              advertising, social media, websites and data-driven
              digital marketing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-brand px-6 py-3.5 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark hover:shadow-[0_12px_35px_rgba(255,106,0,0.25)]">
                Explore Services
              </button>

              <button className="rounded-full border border-border bg-surface px-6 py-3.5 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand">
                Get Free Audit
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
