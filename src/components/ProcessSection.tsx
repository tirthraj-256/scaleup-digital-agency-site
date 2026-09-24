import React from 'react';
import { PROCESS_STEPS, AGENCY_INFO } from '../data/agencyData';
import { Compass, Lightbulb, PenTool, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Compass, Lightbulb, PenTool, Rocket, TrendingUp];

  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#091C16] border-t border-white/5 overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[1000px] h-[300px] sm:h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Rocket className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Methodical Execution</span>
          </div>

          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {AGENCY_INFO.processHeading}
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A structured, transparent roadmap from initial brand discovery to high-velocity scaling.
          </p>
        </div>

        {/* Desktop Process View: Connected Horizontal Stepper */}
        <div className="hidden lg:block relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#22C55E]/20 via-[#22C55E] to-[#84CC16]/30 -z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#86EFAC] to-transparent opacity-75 animate-pulse" />
          </div>

          <div className="grid grid-cols-5 gap-3.5 xl:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx];
              return (
                <div
                  key={step.step}
                  id={`process-step-desktop-${step.step}`}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle / Badge */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 xl:w-18 xl:h-18 rounded-2xl bg-[#0F2D23] border-2 border-[#22C55E]/50 group-hover:border-[#84CC16] p-2 flex items-center justify-center shadow-lg shadow-[#22C55E]/15 group-hover:scale-110 transition-all duration-300">
                      <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-gradient-to-br from-[#22C55E]/20 to-[#84CC16]/20 flex items-center justify-center text-[#22C55E] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5 xl:w-6 xl:h-6 stroke-[2.2]" />
                      </div>
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-md bg-[#22C55E] text-[#0F2D23] text-[10px] xl:text-[11px] font-black tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Content Card */}
                  <div className="w-full p-4 rounded-xl bg-[#0F2D23]/70 border border-white/10 group-hover:border-[#22C55E]/30 transition-all flex flex-col justify-between min-h-[160px]">
                    <div>
                      <h3 className="text-base xl:text-lg font-bold text-white group-hover:text-[#86EFAC] transition-colors leading-tight">
                        {step.name}
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-[#86EFAC]">
                      <CheckCircle2 className="w-3 h-3 text-[#22C55E] shrink-0" />
                      <span className="truncate">{step.deliverable}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Process View: Connected Vertical Timeline */}
        <div className="lg:hidden relative pl-5 sm:pl-7 space-y-6 sm:space-y-8">
          {/* Vertical connecting bar */}
          <div className="absolute top-4 bottom-4 left-5 sm:left-7 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#22C55E] via-[#86EFAC] to-[#84CC16]/30" />

          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={step.step}
                id={`process-step-mobile-${step.step}`}
                className="relative flex items-start gap-3.5 sm:gap-5 group"
              >
                {/* Node */}
                <div className="relative z-10 -ml-5 sm:-ml-7 shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0F2D23] border-2 border-[#22C55E] flex items-center justify-center shadow-md shadow-[#22C55E]/20 text-[#22C55E]">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 p-4 sm:p-5 rounded-xl bg-[#0F2D23]/80 border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#86EFAC]">
                      Step {step.step}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Phase {idx + 1}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{step.name}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#86EFAC]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                    <span>{step.deliverable}</span>
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
