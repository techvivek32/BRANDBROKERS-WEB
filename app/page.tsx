import HeroSection from "@/components/sections/HeroSection";
import TrustedBrands from "@/components/sections/TrustedBrands";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import RostersSection from "@/components/sections/RostersSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-background theme-transition">
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <CaseStudiesSection />
      <RostersSection />
      <TeamSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
