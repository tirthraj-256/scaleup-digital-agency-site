import React from 'react';
import { AUDIENCE_SEGMENTS, AGENCY_INFO } from '../data/agencyData';
import { Building2, Store, MapPin, ShoppingBag, Briefcase, TrendingUp, Check } from 'lucide-react';

export const WhoWeHelpSection: React.FC = () => {
  const segmentIcons: Record<string, React.ElementType> = {
    startups: RocketIcon,
    'small-businesses': Building2,
    'local-businesses': MapPin,
    'd2c-brands': ShoppingBag,
    'service-businesses': Briefcase,
    'growing-brands': TrendingUp,
  };

  function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    );
  }

  return (
    <section
      id="who-we-help"
      className="relative py-20 lg:py-32 bg-[#091C16] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#86EFAC] block mb-3">
            Tailored Industry Solutions
          </span>

          <h2
            id="who-we-help-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {AGENCY_INFO.whoWeHelpHeading}
          </h2>

          <p
            id="who-we-help-description"
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            {AGENCY_INFO.whoWeHelpDescription}
          </p>
        </div>

        {/* 6 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_SEGMENTS.map((segment) => {
            const Icon = segmentIcons[segment.id] || Building2;
            return (
              <div
                key={segment.id}
                id={`audience-card-${segment.id}`}
                className="rounded-2xl bg-[#0F2D23]/90 border border-[#86EFAC]/15 hover:border-[#22C55E]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#22C55E]/15 group"
              >
                {/* Image Banner */}
                {segment.imageUrl && (
                  <div className="relative w-full">
                    {/* Inner image container with overflow-hidden for hover zoom */}
                    <div className="relative h-36 w-full overflow-hidden bg-black/40">
                      <img
                        src={segment.imageUrl}
                        alt={`${segment.title} - Scaleup Marketing`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D23] via-[#0F2D23]/40 to-transparent" />
                    </div>

                    {/* Floating Icon - fully visible outside overflow-hidden boundary */}
                    <div className="absolute -bottom-5 left-5 z-20 w-11 h-11 rounded-xl bg-[#0F2D23] border border-[#22C55E]/40 p-0.5 shadow-lg shadow-black/50">
                      <div className="w-full h-full rounded-[10px] bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#0F2D23] transition-colors">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#86EFAC] transition-colors">
                      {segment.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-300 leading-relaxed min-h-[48px]">
                      {segment.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      Key Focus Vectors:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {segment.focusAreas.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#86EFAC] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
