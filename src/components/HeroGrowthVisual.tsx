import React from 'react';
import { ArrowUpRight, Target, Zap } from 'lucide-react';
import { ScaleupLogo } from './ScaleupLogo';

export const HeroGrowthVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-60 sm:w-72 h-60 sm:h-72 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-56 sm:w-64 h-56 sm:h-64 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Dashboard Card */}
      <div className="relative glass-card rounded-2xl p-5 sm:p-6 lg:p-7 shadow-2xl border border-[#86EFAC]/20 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#86EFAC 1px, transparent 1px)`,
            backgroundSize: '18px 18px',
          }}
        />

        {/* Header of the dashboard */}
        <div className="relative z-10 flex items-center justify-between pb-4 sm:pb-5 border-b border-white/10 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ScaleupLogo size="sm" />
            <div>
              <p className="text-[10px] sm:text-xs font-semibold text-[#86EFAC] tracking-wider uppercase">
                Scaleup Intelligence
              </p>
              <h3 className="text-sm sm:text-base font-bold text-white">Scale Velocity Overview</h3>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold shrink-0">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Active Growth</span>
          </div>
        </div>

        {/* Growth Metric Numbers */}
        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 py-4 sm:py-5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-black/25 border border-white/5">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Monthly Reach</span>
            <div className="flex items-baseline gap-1 mt-0.5 flex-wrap">
              <span className="text-base sm:text-xl font-bold text-white">480K+</span>
              <span className="text-[10px] sm:text-[11px] text-[#86EFAC] font-semibold flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                +315%
              </span>
            </div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-black/25 border border-white/5">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Target ROAS</span>
            <div className="flex items-baseline gap-1 mt-0.5 flex-wrap">
              <span className="text-base sm:text-xl font-bold text-white">4.8x</span>
              <span className="text-[10px] sm:text-[11px] text-[#84CC16] font-semibold flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                High
              </span>
            </div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-black/25 border border-white/5">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block truncate">Lead Rate</span>
            <div className="flex items-baseline gap-1 mt-0.5 flex-wrap">
              <span className="text-base sm:text-xl font-bold text-white">18.4%</span>
              <span className="text-[10px] sm:text-[11px] text-[#22C55E] font-semibold flex items-center">
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                Surge
              </span>
            </div>
          </div>
        </div>

        {/* Abstract SVG Rising Growth Graph */}
        <div className="relative z-10 pt-1 pb-1">
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 mb-2">
            <span>Engagement &amp; Acquisition Curve</span>
            <span className="text-[#86EFAC] font-medium">Consistent Scale</span>
          </div>

          <div className="h-28 sm:h-36 w-full relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 140"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#22C55E" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#0F2D23" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#15803D" />
                  <stop offset="50%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#84CC16" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid guide lines */}
              <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
              <line x1="0" y1="105" x2="400" y2="105" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

              {/* Shaded Area under curve */}
              <path
                d="M 0,120 Q 80,110 130,85 T 250,55 T 340,30 T 400,12 L 400,140 L 0,140 Z"
                fill="url(#curveGradient)"
              />

              {/* Glowing trend curve */}
              <path
                d="M 0,120 Q 80,110 130,85 T 250,55 T 340,30 T 400,12"
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="3.5"
                filter="url(#glow)"
              />

              {/* Milestone Dots */}
              <circle cx="130" cy="85" r="4" fill="#0F2D23" stroke="#22C55E" strokeWidth="2" />
              <circle cx="250" cy="55" r="4" fill="#0F2D23" stroke="#22C55E" strokeWidth="2" />
              <circle cx="340" cy="30" r="4.5" fill="#84CC16" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="400" cy="12" r="5.5" fill="#22C55E" stroke="#86EFAC" strokeWidth="2" className="animate-pulse" />
            </svg>
          </div>
        </div>

        {/* Marketing Distribution Breakdown */}
        <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-white/10 flex flex-col gap-2">
          <div className="flex items-center justify-between text-[11px] sm:text-xs">
            <span className="text-slate-300 font-medium">Channel Impact Velocity</span>
            <span className="text-[#86EFAC] font-semibold">98.2% Efficiency</span>
          </div>
          <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden flex gap-1 p-0.5">
            <div className="h-full rounded-full bg-[#22C55E]" style={{ width: '45%' }} title="Paid & Social" />
            <div className="h-full rounded-full bg-[#84CC16]" style={{ width: '30%' }} title="Lead Gen & Funnels" />
            <div className="h-full rounded-full bg-[#86EFAC]" style={{ width: '25%' }} title="SEO & Organic" />
          </div>
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pt-0.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" /> Paid Social
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" /> Lead Funnels
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC]" /> SEO &amp; Brand
            </span>
          </div>
        </div>
      </div>

      {/* Floating pill 1: Top-Right */}
      <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F2D23]/95 border border-[#22C55E]/40 backdrop-blur-md shadow-xl text-white">
        <div className="w-7 h-7 rounded-lg bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E]">
          <Target className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold tracking-wider text-[#86EFAC]">Audience Precision</p>
          <p className="text-[11px] font-semibold text-white">Qualified Inquiries</p>
        </div>
      </div>

      {/* Floating pill 2: Bottom-Left */}
      <div className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F2D23]/95 border border-[#84CC16]/40 backdrop-blur-md shadow-xl text-white">
        <div className="w-7 h-7 rounded-lg bg-[#84CC16]/20 flex items-center justify-center text-[#84CC16]">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[9px] uppercase font-bold tracking-wider text-[#84CC16]">Full-Funnel Engine</p>
          <p className="text-[11px] font-semibold text-white">Strategy &bull; Content &bull; Scale</p>
        </div>
      </div>
    </div>
  );
};
