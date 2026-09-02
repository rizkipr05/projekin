import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import {
  ClientLogosSection,
  CtaSection,
  FaqSection,
  FloatingWhatsApp,
  Footer,
  PortfolioSection,
  PricingSection,
  ProcessSection,
  ProblemSection,
  ServicesSection,
  TestimonialsSection,
  WhyUsSection,
} from "@/components/landing/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ClientLogosSection />
        <ProblemSection />
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <ProcessSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
