import React from 'react';
import { Compass, Lightbulb, Activity, TrendingUp, Sparkles } from 'lucide-react';
import { AGENCY_INFO, VALUE_STRIP_ITEMS } from '../data/agencyData';

export const TrustValueStrip: React.FC = () => {
  const icons = [Compass, Lightbulb, Activity, TrendingUp];

  return (
    <section
      id="value-strip"
      className="relative z-20 py-6 sm:py-8 border-y border-[#86EFAC]/15 bg-[#091C16]/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
          {/* Main Short Line */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-center lg:text-left">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0 hidden sm:flex">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-medium leading-relaxed">
              {AGENCY_INFO.valueStripHeadline}
            </p>
          </div>

          {/* 4 Core Pillars Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3.5 w-full lg:w-auto">
            {VALUE_STRIP_ITEMS.map((item, idx) => {
              const Icon = icons[idx];
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#22C55E]/40 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#22C55E] shrink-0" />
                  <div className="text-left">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
