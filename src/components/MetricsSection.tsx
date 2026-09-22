import React from 'react';
import { CONCEPTUAL_METRICS, AGENCY_INFO } from '../data/agencyData';
import { Eye, Heart, UserCheck, Flame, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const metricIcons = [Eye, Heart, UserCheck, Flame, TrendingUp];

  return (
    <section
      id="metrics"
      className="relative py-20 lg:py-32 bg-[#0F2D23] overflow-hidden"
    >
      {/* Background green glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Value-Driven Performance</span>
          </div>

          <h2
            id="metrics-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {AGENCY_INFO.metricsHeading}
          </h2>

          <p
            id="metrics-message"
            className="mt-4 text-base sm:text-xl text-[#86EFAC] font-semibold max-w-2xl mx-auto"
          >
            “{AGENCY_INFO.metricsMessage}”
          </p>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Rather than chasing vanity counts, we calibrate our campaigns around indicators that convert directly to business enterprise value.
          </p>
        </div>

        {/* 5 Conceptual Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {CONCEPTUAL_METRICS.map((metric, idx) => {
            const Icon = metricIcons[idx];
            return (
              <div
                key={metric.title}
                id={`metric-card-${metric.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative rounded-2xl glass-card p-6 border border-[#86EFAC]/15 hover:border-[#22C55E]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                {/* Metric Pillar Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#0F2D23] transition-colors">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#86EFAC] transition-colors">
                    {metric.title}
                  </h3>

                  <span className="text-xs font-semibold text-[#84CC16] block mt-1">
                    {metric.subtitle}
                  </span>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Conceptual Progress Indicator Bar */}
                <div className="mt-6 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Strategic Focus</span>
                    <span className="text-[#86EFAC] font-medium">Continuous</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#22C55E] to-[#84CC16] rounded-full group-hover:brightness-110 transition-all"
                      style={{ width: `${80 + idx * 4}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
