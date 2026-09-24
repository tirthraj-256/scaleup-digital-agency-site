import React from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, Calculator, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { HeroGrowthVisual } from './HeroGrowthVisual';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuditModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#0F2D23] overflow-hidden"
    >
      {/* Background visual image & atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-marketing-growth.jpg"
          alt="Scaleup Marketing Workspace and Growth Analytics"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105"
        />
        {/* Gradients blending smoothly into app canvas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D23]/80 via-[#0F2D23]/90 to-[#0F2D23]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D23] via-transparent to-[#0F2D23]/85" />
      </div>

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-br from-[#22C55E]/15 via-[#84CC16]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#86EFAC 1px, transparent 1px), linear-gradient(to right, #86EFAC 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Headline, Trust label, Content, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6 text-left">
            {/* Top badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <div
                id="hero-trust-label"
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                <span>{AGENCY_INFO.trustLabel}</span>
              </div>

              {onOpenAuditModal && (
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#84CC16]/15 hover:bg-[#84CC16]/25 border border-[#84CC16]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16] shrink-0" />
                  <span>Free 15-Min Audit Available</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.12]"
            >
              Turn Your Digital Presence Into{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
                Real Growth.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {AGENCY_INFO.heroSupportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1 sm:pt-2">
              <button
                onClick={() => onNavigate('contact')}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-lg shadow-[#22C55E]/25 hover:shadow-xl hover:shadow-[#84CC16]/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                id="hero-calculator-cta"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#86EFAC]/40 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#86EFAC]" />
                <span>Calculate ROI</span>
              </button>
            </div>

            {/* Social proof avatar and metric badge */}
            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <div className="flex -space-x-2 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client Partner"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#0F2D23] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client Partner"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#0F2D23] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client Partner"
                  referrerPolicy="no-referrer"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#0F2D23] object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white font-semibold">50+ Brands</strong> scaled across paid &amp; organic digital channels
              </p>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-3.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-xl text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Custom Growth Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span>Performance Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <span>End-to-End Execution</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
            <HeroGrowthVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

