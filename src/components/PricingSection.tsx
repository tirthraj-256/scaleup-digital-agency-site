import React, { useState } from 'react';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
} from 'lucide-react';
import { PRICING_PACKAGES } from '../data/agencyData';
import { PricingPackageItem } from '../types';

interface PricingSectionProps {
  onSelectPackage?: (pkgName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#0B231B] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-[600px] h-80 sm:h-[400px] bg-[#22C55E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Zap className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Transparent Investment</span>
          </div>

          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Growth Packages Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
              Maximum ROI
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            No hidden setup fees. No rigid long-term lock-ins. Transparent monthly deliverables designed for rapid scaling.
          </p>

          {/* Billing Toggle (Monthly / Quarterly 15% discount) */}
          <div className="flex items-center justify-center gap-3 pt-6">
            <div className="p-1 rounded-xl bg-black/40 border border-white/10 inline-flex items-center">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#22C55E] text-[#0F2D23] shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Plan
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('quarterly')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'quarterly'
                    ? 'bg-[#22C55E] text-[#0F2D23] shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Quarterly Growth</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#84CC16] text-[#0F2D23] font-black">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg: PricingPackageItem) => {
            const rawPrice = parseInt(pkg.priceInr.replace(/[^0-9]/g, ''), 10);
            const displayPrice =
              billingCycle === 'quarterly'
                ? `₹${Math.round((rawPrice * 0.85) / 1000) * 1000}`.replace(
                    /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g,
                    '$1,'
                  )
                : pkg.priceInr;

            const customWhatsAppUrl = `https://wa.me/919909992573?text=${encodeURIComponent(
              `${pkg.whatsappPreset} (Billing: ${billingCycle})`
            )}`;

            return (
              <div
                key={pkg.id}
                className={`glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-[#22C55E] bg-gradient-to-b from-[#143B2F] to-[#0A2018] shadow-2xl shadow-[#22C55E]/20 scale-100 lg:scale-[1.03] z-10'
                    : 'border border-white/10 hover:border-[#22C55E]/40 hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#22C55E] to-[#84CC16] text-[#0F2D23] text-xs font-black uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white">{pkg.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{pkg.tagline}</p>
                  </div>

                  {/* Target Audience Pill */}
                  <div className="inline-block px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-[#86EFAC] mb-6">
                    {pkg.targetAudience}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/10 mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                      {displayPrice}
                    </span>
                    <span className="text-xs text-slate-400">{pkg.pricePeriod}</span>
                  </div>

                  {/* Highlight Feature */}
                  <div className="p-3 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 text-xs font-bold text-[#86EFAC] flex items-center gap-2 mb-6">
                    <Sparkles className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>{pkg.highlight}</span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Everything Included:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                      pkg.popular
                        ? 'bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] shadow-xl shadow-[#22C55E]/30 hover:scale-[1.02]'
                        : 'bg-white/10 hover:bg-[#22C55E] text-white hover:text-[#0F2D23] border border-white/15'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Direct onboarding via WhatsApp with dedicated strategist
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Enterprise Notice */}
        <div className="mt-12 text-center max-w-xl mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
          <HelpCircle className="w-4 h-4 text-[#86EFAC] shrink-0" />
          <span>Need a customized multi-city or national campaign?</span>
          <a
            href="https://wa.me/919909992573?text=Hi%20Scaleup%20Marketing%2C%20I%20need%20a%20customized%20enterprise%20proposal."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#86EFAC] font-bold hover:underline"
          >
            Request Custom Scope &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
