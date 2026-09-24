import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { TrustValueStrip } from './components/TrustValueStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { PricingSection } from './components/PricingSection';
import { AgencyComparisonSection } from './components/AgencyComparisonSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { MetricsSection } from './components/MetricsSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FreeAuditModal } from './components/FreeAuditModal';
import { TimedServiceOfferModal } from './components/TimedServiceOfferModal';
import { LiveProofTicker } from './components/LiveProofTicker';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isTimedPopupManualOpen, setIsTimedPopupManualOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-[#0F2D23] text-white flex flex-col selection:bg-[#22C55E]/30 selection:text-white">
      {/* Ambient background illumination & subtle geometric grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#86EFAC 1.2px, transparent 1.2px)`,
            backgroundSize: '36px 36px'
          }}
        />
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#22C55E]/8 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 -right-48 w-[600px] h-[600px] bg-[#84CC16]/6 rounded-full blur-[140px]" />
      </div>

      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection
          onNavigate={scrollToSection}
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* 3. Live Marquee Ticker */}
        <InfiniteMarquee />

        {/* 4. Trust / Value Strip */}
        <TrustValueStrip />

        {/* 5. About Section */}
        <AboutSection onNavigate={scrollToSection} />

        {/* 6. Services Section */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 7. Work & Deliverables Gallery Section */}
        <GallerySection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 8. Interactive ROI & Growth Calculator */}
        <GrowthCalculator onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 9. Transparent Pricing & Growth Packages */}
        <PricingSection onSelectPackage={handleSelectServiceForContact} />

        {/* 10. Agency Comparison: Why Scaleup vs Others */}
        <AgencyComparisonSection />

        {/* 11. Client Testimonials & Case Reviews */}
        <TestimonialsSection onNavigate={scrollToSection} />

        {/* 12. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 13. Our Process */}
        <ProcessSection />

        {/* 14. Results / Metrics Section */}
        <MetricsSection />

        {/* 15. Who We Help */}
        <WhoWeHelpSection />

        {/* 16. Interactive FAQ Section */}
        <FaqSection />

        {/* 17. CTA Section */}
        <CtaSection onNavigate={scrollToSection} />

        {/* 18. Contact Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 19. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Real-time Social Proof Ticker */}
      <LiveProofTicker />

      {/* 10-Second Auto-Popup Service & Growth Offer Modal */}
      <TimedServiceOfferModal
        forceOpen={isTimedPopupManualOpen}
        onClose={() => setIsTimedPopupManualOpen(false)}
      />

      {/* Free 15-Min Audit Modal */}
      <FreeAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}


