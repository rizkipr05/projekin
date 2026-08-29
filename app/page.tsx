import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import {
  CtaSection,
  FaqSection,
  Footer,
  PortfolioSection,
  PricingSection,
  ProcessSection,
  ProblemSection,
  ServicesSection,
  TechStackSection,
  TestimonialsSection,
  WhyUsSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <ProcessSection />
        <WhyUsSection />
        <TechStackSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
