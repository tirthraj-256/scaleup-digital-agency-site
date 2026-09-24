import React from 'react';
import { Check, X, Sparkles, ShieldCheck } from 'lucide-react';
import { AGENCY_COMPARISON, AGENCY_INFO } from '../data/agencyData';
import { ComparisonItem } from '../types';

export const AgencyComparisonSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-[#091C16] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 sm:w-[500px] h-80 sm:h-[400px] bg-[#22C55E]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>The Scaleup Advantage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Compare to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
              Other Agencies
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            Why high-growth brands switch to Scaleup for transparent execution, real commercial ROI, and in-house creative production.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-black/40 border-b border-white/10 p-4 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 text-slate-400">Growth Capability</div>
            <div className="col-span-4 text-slate-400 hidden sm:block">Typical Agency / Freelancer</div>
            <div className="col-span-8 sm:col-span-4 text-[#86EFAC] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#22C55E]" />
              <span>Scaleup Marketing</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {AGENCY_COMPARISON.map((row: ComparisonItem, idx: number) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 gap-3 sm:gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-12 sm:col-span-4">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1 sm:mb-0">
                    {row.feature}
                  </h4>
                </div>

                {/* Typical Agency Column */}
                <div className="col-span-12 sm:col-span-4 text-xs sm:text-sm text-slate-400 flex items-start gap-2 bg-black/20 sm:bg-transparent p-2.5 sm:p-0 rounded-lg">
                  <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{row.typicalAgency}</span>
                </div>

                {/* Scaleup Column */}
                <div className="col-span-12 sm:col-span-4 text-xs sm:text-sm text-[#86EFAC] font-medium flex items-start gap-2 bg-[#22C55E]/10 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-[#22C55E]/20 sm:border-0">
                  <div className="w-5 h-5 rounded-full bg-[#22C55E] text-[#0F2D23] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-white sm:text-slate-100">{row.scaleupAgency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
