import { CTASection } from "@/components/sections/CTASection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { Footer } from "@/components/layout/Footer";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      {/* Global site navigation */}
      <SiteNavigation />

      <main>
        {/* Hero */}
        <Hero />

        {/* Trust & credibility */}
        <TrustBar />

        {/* Digital marketing services */}
        <ServicesSection />

        {/* How we work */}
        <ProcessSection />

        {/* Selected work / case studies */}
        <ProjectsSection />

        {/* Why The Media Buddy */}
        <WhyChooseUsSection />

        {/* Client experiences */}
        <TestimonialsSection />

        {/* Final conversion CTA */}
        <CTASection />
      </main>

      {/* Global footer */}
      <Footer />
    </>
  );
}
