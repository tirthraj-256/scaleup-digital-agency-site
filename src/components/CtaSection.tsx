import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles, TrendingUp } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface CtaSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="cta-strip"
      className="relative py-20 lg:py-28 bg-[#0F2D23] overflow-hidden"
    >
      {/* Background glowing gradients & graphics */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D23] via-[#144234] to-[#0F2D23]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          alt="Scaleup Growth Consultation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D23] via-transparent to-[#0F2D23]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Modern abstract subtle geometric line artwork */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#22C55E 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#86EFAC] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>Transform Your Trajectory</span>
        </div>

        <h2
          id="cta-section-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          {AGENCY_INFO.ctaHeading}
        </h2>

        <p
          id="cta-section-subheading"
          className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {AGENCY_INFO.ctaSubheading}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            id="cta-primary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-xl shadow-[#22C55E]/25 hover:shadow-2xl hover:shadow-[#84CC16]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start Your Growth Journey</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-secondary-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#86EFAC]/40 transition-all duration-200 backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 text-[#86EFAC]" />
            <span>Talk to Us</span>
          </a>
        </div>

        {/* Strategist trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
          <div className="flex -space-x-2.5">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Marketing Strategist"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border-2 border-[#0F2D23] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Performance Media Buyer"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border-2 border-[#0F2D23] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Creative Director"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border-2 border-[#0F2D23] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
              alt="Growth Analyst"
              referrerPolicy="no-referrer"
              className="w-8 h-8 rounded-full border-2 border-[#0F2D23] object-cover"
            />
          </div>
          <span className="font-medium text-slate-300">
            Dedicated growth pod assigned to your campaign within <strong className="text-[#86EFAC] font-bold">24 hours</strong>.
          </span>
        </div>
      </div>
    </section>
  );
};
