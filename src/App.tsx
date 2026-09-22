import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustValueStrip } from './components/TrustValueStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { MetricsSection } from './components/MetricsSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

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
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onNavigate={scrollToSection} />

        {/* 3. Trust / Value Strip */}
        <TrustValueStrip />

        {/* 4. About Section */}
        <AboutSection onNavigate={scrollToSection} />

        {/* 5. Services Section */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7. Our Process */}
        <ProcessSection />

        {/* 8. Results / Metrics Section */}
        <MetricsSection />

        {/* 9. Who We Help */}
        <WhoWeHelpSection />

        {/* 10. CTA Section */}
        <CtaSection onNavigate={scrollToSection} />

        {/* 11. Contact Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* 12. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectServiceForContact={handleSelectServiceForContact}
      />

      {/* Floating Conversion Actions */}
      <FloatingWhatsApp />
    </div>
  );
}
