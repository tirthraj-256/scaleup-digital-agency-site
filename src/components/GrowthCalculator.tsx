import React, { useState, useId } from 'react';
import {
  Calculator,
  TrendingUp,
  Users,
  Target,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  HeartPulse,
  Building,
  Briefcase,
  Store,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { CALCULATOR_INDUSTRIES } from '../data/agencyData';

interface GrowthCalculatorProps {
  onSelectServiceForContact?: (serviceName: string) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onSelectServiceForContact }) => {
  const budgetInputId = useId();
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('ecommerce');
  const [monthlyBudget, setMonthlyBudget] = useState<number>(50000); // 50,000 INR default

  const currentIndustry =
    CALCULATOR_INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || CALCULATOR_INDUSTRIES[0];

  // Dynamic calculations based on industry metrics
  const estimatedReach = Math.round((monthlyBudget / 1000) * currentIndustry.reachMultiplier);
  const estimatedLeadsLow = Math.max(10, Math.round((monthlyBudget / currentIndustry.avgCpl) * 0.85));
  const estimatedLeadsHigh = Math.max(15, Math.round((monthlyBudget / currentIndustry.avgCpl) * 1.25));
  const projectedPipelineLow = Math.round(monthlyBudget * (currentIndustry.roasMultiplier * 0.85));
  const projectedPipelineHigh = Math.round(monthlyBudget * (currentIndustry.roasMultiplier * 1.2));

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-4 h-4" />;
      case 'HeartPulse':
        return <HeartPulse className="w-4 h-4" />;
      case 'Building':
        return <Building className="w-4 h-4" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4" />;
      case 'Store':
        return <Store className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  const customWhatsAppUrl = `https://wa.me/919909992573?text=${encodeURIComponent(
    `Hi Scaleup Marketing, I used your Growth Calculator for ${currentIndustry.name} with a monthly budget of ${formatCurrency(
      monthlyBudget
    )}. I would like to claim the customized growth roadmap and campaign setup.`
  )}`;

  return (
    <section
      id="calculator"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#0B231B] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#84CC16]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Interactive ROI Simulator</span>
          </div>

          <h2
            id="calculator-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Calculate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
              Growth Potential
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            Select your industry and monthly marketing budget to view estimated reach, qualified leads, and projected return on investment.
          </p>
        </div>

        {/* Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Step 1: Industry Selector */}
              <div className="space-y-3">
                <label className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#86EFAC] text-xs font-bold inline-flex items-center justify-center">
                    1
                  </span>
                  Select Your Business Category
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {CALCULATOR_INDUSTRIES.map((ind) => {
                    const isSelected = selectedIndustryId === ind.id;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setSelectedIndustryId(ind.id)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#22C55E] text-[#0F2D23] shadow-md shadow-[#22C55E]/30 font-bold scale-[1.02]'
                            : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                        }`}
                      >
                        <span className={isSelected ? 'text-[#0F2D23]' : 'text-[#86EFAC]'}>
                          {getIndustryIcon(ind.iconName)}
                        </span>
                        <span className="truncate">{ind.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Budget Slider */}
              <div className="space-y-4 pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center justify-between">
                  <label htmlFor={budgetInputId} className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer">
                    <span className="w-5 h-5 rounded-full bg-[#22C55E]/20 text-[#86EFAC] text-xs font-bold inline-flex items-center justify-center">
                      2
                    </span>
                    Monthly Ad Budget
                  </label>
                  <span className="text-base sm:text-xl font-extrabold text-[#86EFAC] font-mono bg-[#22C55E]/10 px-3 py-1 rounded-lg border border-[#22C55E]/30">
                    {formatCurrency(monthlyBudget)}
                  </span>
                </div>

                <div className="space-y-2">
                  <input
                    id={budgetInputId}
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#22C55E] focus:outline-none"
                    aria-label="Monthly advertising budget slider"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>₹15,000</span>
                    <span>₹1,50,000</span>
                    <span>₹3,00,000</span>
                    <span>₹5,00,000+</span>
                  </div>
                </div>

                {/* Quick Budget Preset Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[25000, 50000, 100000, 250000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMonthlyBudget(preset)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        monthlyBudget === preset
                          ? 'bg-[#86EFAC]/20 text-[#86EFAC] border border-[#22C55E]/40'
                          : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Channel Strategy */}
            <div className="bg-black/30 rounded-xl p-4 border border-white/10 space-y-2.5">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                Recommended Growth Stack for {currentIndustry.name}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentIndustry.recommendedMix.map((mix, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#86EFAC] text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#22C55E]" />
                    {mix}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Live Projections */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-5 sm:p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-[#22C55E]/30 bg-gradient-to-br from-[#123A2E] to-[#0A2018]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/15 rounded-bl-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Projected Growth Metrics</h3>
                  <p className="text-xs text-slate-400">Based on data from 50+ scaled client campaigns</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#86EFAC] text-[11px] font-semibold">
                  Live Estimates
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                {/* Metric 1: Monthly Reach */}
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Est. Reach</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#86EFAC]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white font-mono">
                    {formatNumber(estimatedReach)}+
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">High-intent viewers</span>
                </div>

                {/* Metric 2: Estimated Inquiries */}
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Est. Inquiries</span>
                    <Users className="w-3.5 h-3.5 text-[#22C55E]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#86EFAC] font-mono">
                    {estimatedLeadsLow} – {estimatedLeadsHigh}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Qualified leads/mo</span>
                </div>

                {/* Metric 3: Target ROAS */}
                <div className="bg-black/40 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                    <span>Target ROAS</span>
                    <Target className="w-3.5 h-3.5 text-[#84CC16]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#84CC16] font-mono">
                    {currentIndustry.roasMultiplier}x
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1">Return on Ad Spend</span>
                </div>
              </div>

              {/* Estimated Monthly Pipeline Value Highlight */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#22C55E]/15 to-[#84CC16]/10 border border-[#22C55E]/30 mb-6">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Projected Pipeline Revenue Value
                  </span>
                  <span className="text-xs font-bold text-[#86EFAC]">Est. Multiplier</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
                  {formatCurrency(projectedPipelineLow)} – {formatCurrency(projectedPipelineHigh)}
                </div>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  Estimated commercial value generated through targeted paid ads, high-retention creatives, and optimized conversion pathways.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-lg shadow-[#22C55E]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Claim This Strategy on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[11px]">
                <HelpCircle className="w-3 h-3 text-[#86EFAC]" />
                <span>Custom tailored roadmap delivered in &lt; 24 hours. No obligation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
