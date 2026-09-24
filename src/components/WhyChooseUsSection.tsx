import React from 'react';
import { WHY_US_ITEMS, AGENCY_INFO } from '../data/agencyData';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section
      id="why-us"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#0F2D23] overflow-hidden"
    >
      {/* Subtle green lighting */}
      <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>The Scaleup Advantage</span>
          </div>

          <h2
            id="why-us-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {AGENCY_INFO.whyUsHeading}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            We operate as an extension of your commercial ambitions—fusing strategic insight with rigorous execution.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {WHY_US_ITEMS.map((item) => (
            <div
              key={item.number}
              id={`why-card-${item.number}`}
              className="relative rounded-2xl glass-card p-5 sm:p-7 lg:p-8 border border-[#86EFAC]/15 hover:border-[#22C55E]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#22C55E]/10 flex flex-col justify-between group"
            >
              <div>
                {/* Number & Tag */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#84CC16] font-mono">
                    {item.number}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#86EFAC]/90 uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#86EFAC] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent Indicator */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Scaleup Standard</span>
                <span className="w-2 h-2 rounded-full bg-[#22C55E] group-hover:scale-150 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
