import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';
import { TestimonialItem } from '../types';

interface TestimonialsSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'E-Commerce', 'Healthcare & Clinic', 'B2B & Real Estate', 'Local Brand'];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.businessType === selectedCategory);

  return (
    <section
      id="reviews"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#0F2D23] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#84CC16]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Proven Client Results</span>
          </div>

          <h2
            id="reviews-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            What Growing Brands{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
              Say About Scaleup
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            Real founders, surgeons, and business leaders scaling customer acquisition, lowering acquisition costs, and dominating digital feeds with us.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-xs text-slate-400">• Verified Client Partnerships</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#22C55E] text-[#0F2D23] shadow-md shadow-[#22C55E]/25 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {filteredTestimonials.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group border border-white/10 hover:border-[#22C55E]/40"
            >
              {/* Quote accent icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#22C55E]/15 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Result Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-bold font-mono mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span>{t.resultMetric}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              {/* Client Profile */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.clientName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#22C55E]/40"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white">{t.clientName}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-slate-400">
                      {t.clientRole}, <span className="text-[#86EFAC] font-medium">{t.businessName}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#22C55E]/30 bg-gradient-to-r from-[#123A2E] to-[#0E2C22]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Ready for Similar Results?</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Let&apos;s build your custom growth roadmap today.
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onNavigate && onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-md shadow-[#22C55E]/20 hover:-translate-y-0.5 cursor-pointer shrink-0"
          >
            <span>Book A Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
