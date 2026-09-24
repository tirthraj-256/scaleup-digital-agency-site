import React from 'react';
import { ArrowUpRight, Compass, LineChart, Users2, Rocket, CheckCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ScaleupLogo } from './ScaleupLogo';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#0F2D23] overflow-hidden"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-5 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Team Strategy Photography & Interactive Growth Methodology */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer glowing frame */}
              <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r from-[#22C55E]/30 to-[#84CC16]/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-[#86EFAC]/25 bg-[#091C16] shadow-2xl">
                {/* Agency Strategy Photography Header */}
                <div className="relative h-52 sm:h-64 lg:h-72 w-full overflow-hidden">
                  <img
                    src="/images/agency-strategy-team.jpg"
                    alt="Scaleup Marketing Strategy & Performance Team Collaborating"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091C16] via-[#091C16]/40 to-black/20" />

                  {/* Floating badge on image */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 shadow-lg">
                    <ScaleupLogo size="xs" />
                    <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide">
                      Scaleup Strategy Hub
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 z-10 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#86EFAC] block">
                        Our Growth Methodology
                      </span>
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mt-0.5 drop-shadow-md">
                        Synergy of Strategy &amp; Execution
                      </h4>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#22C55E] text-[#0F2D23] flex items-center justify-center shadow-lg shadow-[#22C55E]/30 shrink-0">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* 4 Feature Pillars */}
                <div className="p-4 sm:p-6 lg:p-7 pt-4 sm:pt-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-4 sm:mb-5">
                    {/* Card 1: Marketing Strategy */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-black/35 border border-white/10 hover:border-[#22C55E]/40 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-2">
                        <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Marketing Strategy</h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                        Custom roadmaps aligned with business unit economics and target customer psychology.
                      </p>
                    </div>

                    {/* Card 2: Analytics & Insights */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-black/35 border border-white/10 hover:border-[#84CC16]/40 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#84CC16]/15 text-[#84CC16] flex items-center justify-center mb-2">
                        <LineChart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Analytics &amp; Data</h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                        Continuous attribution tracking to measure true ROAS, CPA, and customer lifetime value.
                      </p>
                    </div>

                    {/* Card 3: Team Collaboration */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-black/35 border border-white/10 hover:border-[#86EFAC]/40 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#86EFAC]/15 text-[#86EFAC] flex items-center justify-center mb-2">
                        <Users2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Team Collaboration</h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                        Acting as an integrated digital growth wing seamlessly synced with your internal team.
                      </p>
                    </div>

                    {/* Card 4: Business Growth */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-black/35 border border-white/10 hover:border-[#22C55E]/40 transition-all">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mb-2">
                        <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">Business Scaling</h5>
                      <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                        Transforming verified marketing channels into repeatable, scalable revenue drivers.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Trust Badge */}
                  <div className="pt-3.5 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 font-medium text-[#86EFAC]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                      Measurable Business Outcomes
                    </span>
                    <span className="text-slate-400">Zero Vanity Shortcuts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Content & CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col space-y-5 sm:space-y-6 text-left">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#86EFAC] mb-2 sm:mb-3">
                About Scaleup
              </span>
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                {AGENCY_INFO.aboutHeadline}
              </h2>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              <p>{AGENCY_INFO.aboutContentParagraph1}</p>
              <p className="text-slate-400">{AGENCY_INFO.aboutContentParagraph2}</p>
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={() => onNavigate('contact')}
                id="about-cta-button"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-md shadow-[#22C55E]/20 hover:shadow-xl hover:shadow-[#84CC16]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Let’s Grow Together</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
